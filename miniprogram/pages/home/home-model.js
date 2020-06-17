"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("../../utils/base");
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super.call(this) || this;
        _this.getBannerData = function (callback) {
            var param = {
                url: 'banner/1',
                sCallback: function (data) {
                    callback && callback(data.obj);
                }
            };
            _this.request(param);
        };
        _this.getProductorData = function (callback) {
            var param = {
                url: 'product/recent',
                sCallback: function (data) {
                    callback && callback(data);
                }
            };
            _this.request(param);
        };
        return _this;
    }
    Home.prototype.getThemeData = function (callback) {
        var param = {
            url: 'theme?ids=1,2,3',
            sCallback: function (data) {
                callback && callback(data);
            }
        };
        this.request(param);
    };
    return Home;
}(base_1.Base));
exports.Home = Home;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBQ3hDO0lBQW1CLHdCQUFJO0lBQ3JCO1FBQUEsWUFDRSxpQkFBTyxTQUNSO1FBRUQsbUJBQWEsR0FBRyxVQUFDLFFBQXdCO1lBQ3ZDLElBQUksS0FBSyxHQUFHO2dCQUNWLEdBQUcsRUFBRSxVQUFVO2dCQUNmLFNBQVMsRUFBRyxVQUFDLElBQVM7b0JBQ3BCLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO2FBQ0YsQ0FBQztZQUNGLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFBO1FBYUQsc0JBQWdCLEdBQUcsVUFBQyxRQUFhO1lBQy9CLElBQUksS0FBSyxHQUFHO2dCQUNWLEdBQUcsRUFBRSxnQkFBZ0I7Z0JBQ3JCLFNBQVMsRUFBRSxVQUFDLElBQVM7b0JBQ25CLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdCLENBQUM7YUFDRixDQUFDO1lBQ0YsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUE7O0lBL0JELENBQUM7SUFZRCwyQkFBWSxHQUFaLFVBQWEsUUFBYTtRQUN4QixJQUFJLEtBQUssR0FBRztZQUNWLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsU0FBUyxFQUFFLFVBQUMsSUFBUztnQkFDbkIsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixDQUFDO1NBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQVlILFdBQUM7QUFBRCxDQUFDLEFBbkNELENBQW1CLFdBQUksR0FtQ3RCO0FBRVEsb0JBQUk7QUFGWixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZSB9IGZyb20gXCIuLi8uLi91dGlscy9iYXNlXCI7XHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBCYXNlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG4gIC8qYmFubmVy5Zu+54mH5L+h5oGvKi9cclxuICBnZXRCYW5uZXJEYXRhID0gKGNhbGxiYWNrOihkOiBhbnkpPT4gdm9pZCkgPT4ge1xyXG4gICAgdmFyIHBhcmFtID0ge1xyXG4gICAgICB1cmw6ICdiYW5uZXIvMScsXHJcbiAgICAgIHNDYWxsYmFjazogIChkYXRhOiBhbnkpPT4ge1xyXG4gICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKGRhdGEub2JqKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChwYXJhbSk7XHJcbiAgfVxyXG4gIC8q6aaW6aG15Li76aKYKi9cclxuICBnZXRUaGVtZURhdGEoY2FsbGJhY2s6IGFueSkge1xyXG4gICAgdmFyIHBhcmFtID0ge1xyXG4gICAgICB1cmw6ICd0aGVtZT9pZHM9MSwyLDMnLFxyXG4gICAgICBzQ2FsbGJhY2s6IChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChwYXJhbSk7XHJcbiAgfVxyXG5cclxuICAvKummlumhtemDqOWIhuWVhuWTgSovXHJcbiAgZ2V0UHJvZHVjdG9yRGF0YSA9IChjYWxsYmFjazogYW55KSA9PiB7XHJcbiAgICB2YXIgcGFyYW0gPSB7XHJcbiAgICAgIHVybDogJ3Byb2R1Y3QvcmVjZW50JyxcclxuICAgICAgc0NhbGxiYWNrOiAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3QocGFyYW0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IEhvbWUgfTsiXX0=