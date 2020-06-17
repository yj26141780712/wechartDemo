import { Base } from "../../utils/base";
class Home extends Base {
  constructor() {
    super();
  }
  /*banner图片信息*/
  getBannerData = (callback:(d: any)=> void) => {
    var param = {
      url: 'banner/1',
      sCallback:  (data: any)=> {
        callback && callback(data.obj);
      }
    };
    this.request(param);
  }
  /*首页主题*/
  getThemeData(callback: any) {
    var param = {
      url: 'theme?ids=1,2,3',
      sCallback: (data: any) => {
        callback && callback(data);
      }
    };
    this.request(param);
  }

  /*首页部分商品*/
  getProductorData = (callback: any) => {
    var param = {
      url: 'product/recent',
      sCallback: (data: any) => {
        callback && callback(data);
      }
    };
    this.request(param);
  }
};

export { Home };