import { Config } from "./config";
import { Token } from "./token";


export class Base {
  baseRestUrl: string;
  onPay: boolean;
  constructor() {
    this.baseRestUrl = Config.restUrl;
    this.onPay = Config.onPay;
  }

  //http 请求类, 当noRefech为true时，不做未授权重试机制
  request(params: any, noRefetch: boolean = false) {
    let url = this.baseRestUrl + params.url;
    if (!params.type) {
      params.type = 'get';
    }
    /*不需要再次组装地址*/
    if (params.setUpUrl == false) {
      url = params.url;
    }
    wx.request({
      url: url,
      data: params.data,
      method: params.type,
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync('token')
      },
      success: (res) => {
        // 判断以2（2xx)开头的状态码为正确
        // 异常不要返回到回调中，就在request中处理，记录日志并showToast一个统一的错误即可
        var code = res.statusCode.toString();
        var startChar = code.charAt(0);
        if (startChar == '2') {
          params.sCallback && params.sCallback(res.data);
        } else {
          if (code == '401') {
            if (!noRefetch) {
              this.refetch(params);
            }
          }
          this.processError(res);
          params.eCallback && params.eCallback(res.data);
        }
      },
      fail: (err) => {
        //wx.hideNavigationBarLoading();
        this.processError(err);
        // params.eCallback && params.eCallback(err);
      }
    });
  }

  processError = (err: any) => {
    console.log(err);
  }

  refetch = (param: any) => {
    var token = new Token();
    token.getTokenFromServer(() => {
      this.request(param, true);
    });
  }

  /*获得元素上的绑定的值*/
  getDataSet(event: any, key: string) {
    return event.currentTarget.dataset[key];
  };

};
