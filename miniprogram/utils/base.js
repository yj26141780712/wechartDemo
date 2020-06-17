"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var token_1 = require("./token");
var Base = (function () {
    function Base() {
        var _this = this;
        this.processError = function (err) {
            console.log(err);
        };
        this.refetch = function (param) {
            var token = new token_1.Token();
            token.getTokenFromServer(function () {
                _this.request(param, true);
            });
        };
        this.baseRestUrl = config_1.Config.restUrl;
        this.onPay = config_1.Config.onPay;
    }
    Base.prototype.request = function (params, noRefetch) {
        var _this = this;
        if (noRefetch === void 0) { noRefetch = false; }
        var url = this.baseRestUrl + params.url;
        if (!params.type) {
            params.type = 'get';
        }
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
            success: function (res) {
                var code = res.statusCode.toString();
                var startChar = code.charAt(0);
                if (startChar == '2') {
                    params.sCallback && params.sCallback(res.data);
                }
                else {
                    if (code == '401') {
                        if (!noRefetch) {
                            _this.refetch(params);
                        }
                    }
                    _this.processError(res);
                    params.eCallback && params.eCallback(res.data);
                }
            },
            fail: function (err) {
                _this.processError(err);
            }
        });
    };
    Base.prototype.getDataSet = function (event, key) {
        return event.currentTarget.dataset[key];
    };
    ;
    return Base;
}());
exports.Base = Base;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBa0M7QUFDbEMsaUNBQWdDO0FBR2hDO0lBR0U7UUFBQSxpQkFHQztRQTZDRCxpQkFBWSxHQUFHLFVBQUMsR0FBUTtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQTtRQUVELFlBQU8sR0FBRyxVQUFDLEtBQVU7WUFDbkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsa0JBQWtCLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFBO1FBeERDLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLGVBQU0sQ0FBQyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUdELHNCQUFPLEdBQVAsVUFBUSxNQUFXLEVBQUUsU0FBMEI7UUFBL0MsaUJBd0NDO1FBeENvQiwwQkFBQSxFQUFBLGlCQUEwQjtRQUM3QyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDaEIsTUFBTSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7U0FDckI7UUFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksS0FBSyxFQUFFO1lBQzVCLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQ2xCO1FBQ0QsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxHQUFHO1lBQ1IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNuQixNQUFNLEVBQUU7Z0JBQ04sY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2FBQ3BDO1lBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFHWCxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNyQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLFNBQVMsSUFBSSxHQUFHLEVBQUU7b0JBQ3BCLE1BQU0sQ0FBQyxTQUFTLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hEO3FCQUFNO29CQUNMLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRTt3QkFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRTs0QkFDZCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3lCQUN0QjtxQkFDRjtvQkFDRCxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixNQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNoRDtZQUNILENBQUM7WUFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHO2dCQUVSLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFekIsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFjRCx5QkFBVSxHQUFWLFVBQVcsS0FBVSxFQUFFLEdBQVc7UUFDaEMsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBQUEsQ0FBQztJQUVKLFdBQUM7QUFBRCxDQUFDLEFBbkVELElBbUVDO0FBbkVZLG9CQUFJO0FBbUVoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IFRva2VuIH0gZnJvbSBcIi4vdG9rZW5cIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZSB7XHJcbiAgYmFzZVJlc3RVcmw6IHN0cmluZztcclxuICBvblBheTogYm9vbGVhbjtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuYmFzZVJlc3RVcmwgPSBDb25maWcucmVzdFVybDtcclxuICAgIHRoaXMub25QYXkgPSBDb25maWcub25QYXk7XHJcbiAgfVxyXG5cclxuICAvL2h0dHAg6K+35rGC57G7LCDlvZNub1JlZmVjaOS4unRydWXml7bvvIzkuI3lgZrmnKrmjojmnYPph43or5XmnLrliLZcclxuICByZXF1ZXN0KHBhcmFtczogYW55LCBub1JlZmV0Y2g6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgbGV0IHVybCA9IHRoaXMuYmFzZVJlc3RVcmwgKyBwYXJhbXMudXJsO1xyXG4gICAgaWYgKCFwYXJhbXMudHlwZSkge1xyXG4gICAgICBwYXJhbXMudHlwZSA9ICdnZXQnO1xyXG4gICAgfVxyXG4gICAgLyrkuI3pnIDopoHlho3mrKHnu4Too4XlnLDlnYAqL1xyXG4gICAgaWYgKHBhcmFtcy5zZXRVcFVybCA9PSBmYWxzZSkge1xyXG4gICAgICB1cmwgPSBwYXJhbXMudXJsO1xyXG4gICAgfVxyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogdXJsLFxyXG4gICAgICBkYXRhOiBwYXJhbXMuZGF0YSxcclxuICAgICAgbWV0aG9kOiBwYXJhbXMudHlwZSxcclxuICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAndG9rZW4nOiB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKVxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgLy8g5Yik5pat5LulMu+8iDJ4eCnlvIDlpLTnmoTnirbmgIHnoIHkuLrmraPnoa5cclxuICAgICAgICAvLyDlvILluLjkuI3opoHov5Tlm57liLDlm57osIPkuK3vvIzlsLHlnKhyZXF1ZXN05Lit5aSE55CG77yM6K6w5b2V5pel5b+X5bm2c2hvd1RvYXN05LiA5Liq57uf5LiA55qE6ZSZ6K+v5Y2z5Y+vXHJcbiAgICAgICAgdmFyIGNvZGUgPSByZXMuc3RhdHVzQ29kZS50b1N0cmluZygpO1xyXG4gICAgICAgIHZhciBzdGFydENoYXIgPSBjb2RlLmNoYXJBdCgwKTtcclxuICAgICAgICBpZiAoc3RhcnRDaGFyID09ICcyJykge1xyXG4gICAgICAgICAgcGFyYW1zLnNDYWxsYmFjayAmJiBwYXJhbXMuc0NhbGxiYWNrKHJlcy5kYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGNvZGUgPT0gJzQwMScpIHtcclxuICAgICAgICAgICAgaWYgKCFub1JlZmV0Y2gpIHtcclxuICAgICAgICAgICAgICB0aGlzLnJlZmV0Y2gocGFyYW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3IocmVzKTtcclxuICAgICAgICAgIHBhcmFtcy5lQ2FsbGJhY2sgJiYgcGFyYW1zLmVDYWxsYmFjayhyZXMuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgLy93eC5oaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcoKTtcclxuICAgICAgICB0aGlzLnByb2Nlc3NFcnJvcihlcnIpO1xyXG4gICAgICAgIC8vIHBhcmFtcy5lQ2FsbGJhY2sgJiYgcGFyYW1zLmVDYWxsYmFjayhlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NFcnJvciA9IChlcnI6IGFueSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9XHJcblxyXG4gIHJlZmV0Y2ggPSAocGFyYW06IGFueSkgPT4ge1xyXG4gICAgdmFyIHRva2VuID0gbmV3IFRva2VuKCk7XHJcbiAgICB0b2tlbi5nZXRUb2tlbkZyb21TZXJ2ZXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlcXVlc3QocGFyYW0sIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKuiOt+W+l+WFg+e0oOS4iueahOe7keWumueahOWAvCovXHJcbiAgZ2V0RGF0YVNldChldmVudDogYW55LCBrZXk6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldFtrZXldO1xyXG4gIH07XHJcblxyXG59O1xyXG4iXX0=