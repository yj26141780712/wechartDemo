"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var Token = (function () {
    function Token() {
        var _this = this;
        this.veirfyFromServer = function (token) {
            wx.request({
                url: _this.verifyUrl,
                method: 'POST',
                data: {
                    token: token
                },
                success: function (res) {
                    console.log(res);
                    var valid = res.data.isValid;
                    if (!valid) {
                        _this.getTokenFromServer();
                    }
                }
            });
        };
        this.verifyUrl = config_1.Config.restUrl + 'token/verify';
        this.tokenUrl = config_1.Config.restUrl + 'token/user';
    }
    Token.prototype.verify = function () {
        var token = wx.getStorageSync('token');
        if (!token) {
            this.getTokenFromServer();
        }
        else {
            this.veirfyFromServer(token);
        }
    };
    Token.prototype.getTokenFromServer = function (callBack) {
        var _this = this;
        if (callBack === void 0) { callBack = null; }
        wx.login({
            success: function (res) {
                console.log(res);
                wx.request({
                    url: _this.tokenUrl,
                    method: 'POST',
                    data: {
                        code: res.code
                    },
                    success: function (res) {
                        wx.setStorageSync('token', res.data.token);
                        callBack && callBack(res.data.token);
                    }
                });
            }
        });
    };
    return Token;
}());
exports.Token = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFrQztBQUVsQztJQUdFO1FBQUEsaUJBR0M7UUFZRCxxQkFBZ0IsR0FBRyxVQUFDLEtBQWE7WUFDL0IsRUFBRSxDQUFDLE9BQU8sQ0FBQztnQkFDVCxHQUFHLEVBQUUsS0FBSSxDQUFDLFNBQVM7Z0JBQ25CLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsS0FBSztpQkFDYjtnQkFDRCxPQUFPLEVBQUUsVUFBQyxHQUFHO29CQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2pCLElBQUksS0FBSyxHQUFJLEdBQUcsQ0FBQyxJQUFZLENBQUMsT0FBTyxDQUFDO29CQUN0QyxJQUFJLENBQUMsS0FBSyxFQUFFO3dCQUNWLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO3FCQUMzQjtnQkFDSCxDQUFDO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFBO1FBN0JDLElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBTSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFNLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztJQUNoRCxDQUFDO0lBRUQsc0JBQU0sR0FBTjtRQUNFLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO2FBQ0k7WUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDO0lBbUJELGtDQUFrQixHQUFsQixVQUFtQixRQUFvQjtRQUF2QyxpQkFpQkM7UUFqQmtCLHlCQUFBLEVBQUEsZUFBb0I7UUFDckMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNQLE9BQU8sRUFBRyxVQUFDLEdBQUc7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDVCxHQUFHLEVBQUUsS0FBSSxDQUFDLFFBQVE7b0JBQ2xCLE1BQU0sRUFBRSxNQUFNO29CQUNkLElBQUksRUFBRTt3QkFDSixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7cUJBQ2Y7b0JBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBRzt3QkFDWCxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRyxHQUFHLENBQUMsSUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNwRCxRQUFRLElBQUksUUFBUSxDQUFFLEdBQUcsQ0FBQyxJQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2hELENBQUM7aUJBQ0YsQ0FBQyxDQUFBO1lBQ0osQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQXJERCxJQXFEQztBQXJEWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuIHtcclxuICB2ZXJpZnlVcmw6IHN0cmluZztcclxuICB0b2tlblVybDogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy52ZXJpZnlVcmwgPSBDb25maWcucmVzdFVybCArICd0b2tlbi92ZXJpZnknO1xyXG4gICAgdGhpcy50b2tlblVybCA9IENvbmZpZy5yZXN0VXJsICsgJ3Rva2VuL3VzZXInO1xyXG4gIH1cclxuXHJcbiAgdmVyaWZ5KCkge1xyXG4gICAgdmFyIHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgIHRoaXMuZ2V0VG9rZW5Gcm9tU2VydmVyKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy52ZWlyZnlGcm9tU2VydmVyKHRva2VuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZlaXJmeUZyb21TZXJ2ZXIgPSAodG9rZW46IHN0cmluZykgPT4ge1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogdGhpcy52ZXJpZnlVcmwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdG9rZW46IHRva2VuXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIHZhciB2YWxpZCA9IChyZXMuZGF0YSBhcyBhbnkpLmlzVmFsaWQ7XHJcbiAgICAgICAgaWYgKCF2YWxpZCkge1xyXG4gICAgICAgICAgdGhpcy5nZXRUb2tlbkZyb21TZXJ2ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRUb2tlbkZyb21TZXJ2ZXIoY2FsbEJhY2s6IGFueSA9IG51bGwpIHtcclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogIChyZXMpPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHRoaXMudG9rZW5VcmwsXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY29kZTogcmVzLmNvZGVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd0b2tlbicsIChyZXMuZGF0YSBhcyBhbnkpLnRva2VuKTtcclxuICAgICAgICAgICAgY2FsbEJhY2sgJiYgY2FsbEJhY2soKHJlcy5kYXRhIGFzIGFueSkudG9rZW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcbiJdfQ==