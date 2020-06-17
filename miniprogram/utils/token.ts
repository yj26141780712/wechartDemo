import { Config } from "./config";

export class Token {
  verifyUrl: string;
  tokenUrl: string;
  constructor() {
    this.verifyUrl = Config.restUrl + 'token/verify';
    this.tokenUrl = Config.restUrl + 'token/user';
  }

  verify() {
    var token = wx.getStorageSync('token');
    if (!token) {
      this.getTokenFromServer();
    }
    else {
      this.veirfyFromServer(token);
    }
  }

  veirfyFromServer = (token: string) => {
    wx.request({
      url: this.verifyUrl,
      method: 'POST',
      data: {
        token: token
      },
      success: (res) => {
        console.log(res);
        var valid = (res.data as any).isValid;
        if (!valid) {
          this.getTokenFromServer();
        }
      }
    })
  }

  getTokenFromServer(callBack: any = null) {
    wx.login({
      success:  (res)=> {
        console.log(res);
        wx.request({
          url: this.tokenUrl,
          method: 'POST',
          data: {
            code: res.code
          },
          success: (res) => {
            wx.setStorageSync('token', (res.data as any).token);
            callBack && callBack((res.data as any).token);
          }
        })
      }
    })
  }
}
