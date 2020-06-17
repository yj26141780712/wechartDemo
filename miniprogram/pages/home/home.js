"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_model_1 = require("./home-model");
var home = new home_model_1.Home();
Page({
    data: {
        loadingHidden: false,
        bannerArr: [],
        themeArr: [],
        productsArr: []
    },
    onLoad: function () {
        this.loadData();
    },
    loadData: function (callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        home.getBannerData(function (data) {
            console.log(data);
            _this.setData({
                bannerArr: data,
            });
        });
        home.getThemeData(function (data) {
            _this.setData({
                themeArr: data,
                loadingHidden: true
            });
        });
        home.getProductorData(function (data) {
            _this.setData({
                productsArr: data
            });
            callback && callback();
        });
    },
    onProductsItemTap: function (event) {
        var id = home.getDataSet(event, 'id');
        wx.navigateTo({
            url: '../product/product?id=' + id
        });
    },
    onThemesItemTap: function (event) {
        var id = home.getDataSet(event, 'id');
        var name = home.getDataSet(event, 'name');
        wx.navigateTo({
            url: '../theme/theme?id=' + id + '&name=' + name
        });
    },
    onPullDownRefresh: function () {
        this.loadData(function () {
            wx.stopPullDownRefresh();
        });
    },
    onShareAppMessage: function () {
        return {
            title: '零食商贩 Pretty Vendor',
            path: 'pages/home/home'
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBb0M7QUFDcEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7QUFDeEIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osYUFBYSxFQUFFLEtBQUs7UUFDcEIsU0FBUyxFQUFDLEVBQUU7UUFDWixRQUFRLEVBQUMsRUFBRTtRQUNYLFdBQVcsRUFBQyxFQUFFO0tBQ2Y7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxRQUFRLFlBQUMsUUFBbUI7UUFBNUIsaUJBdUJDO1FBdkJRLHlCQUFBLEVBQUEsZUFBbUI7UUFFMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFDLElBQVM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNYLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFDLElBQVE7WUFDekIsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxhQUFhLEVBQUUsSUFBSTthQUNwQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUdILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFDLElBQVE7WUFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUM7WUFDSCxRQUFRLElBQUUsUUFBUSxFQUFFLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsaUJBQWlCLEVBQUcsVUFBQyxLQUFTO1FBQzVCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsd0JBQXdCLEdBQUcsRUFBRTtTQUNuQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBR0QsZUFBZSxFQUFFLFVBQUMsS0FBUztRQUN6QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ1osR0FBRyxFQUFFLG9CQUFvQixHQUFHLEVBQUUsR0FBRyxRQUFRLEdBQUcsSUFBSTtTQUNqRCxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNaLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE9BQU87WUFDTCxLQUFLLEVBQUUsb0JBQW9CO1lBQzNCLElBQUksRUFBRSxpQkFBaUI7U0FDeEIsQ0FBQTtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb21lIH0gZnJvbSBcIi4vaG9tZS1tb2RlbFwiO1xyXG5jb25zdCBob21lID0gbmV3IEhvbWUoKTsgLy/lrp7kvovljJYg6aaW6aG1IOWvueixoVxyXG5QYWdlKHtcclxuICBkYXRhOiB7XHJcbiAgICBsb2FkaW5nSGlkZGVuOiBmYWxzZSxcclxuICAgIGJhbm5lckFycjpbXSxcclxuICAgIHRoZW1lQXJyOltdLFxyXG4gICAgcHJvZHVjdHNBcnI6W11cclxuICB9LFxyXG4gIG9uTG9hZCAoKSB7XHJcbiAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgfSxcclxuICAvKuWKoOi9veaJgOacieaVsOaNriovXHJcbiAgbG9hZERhdGEoY2FsbGJhY2s6YW55ID0gbnVsbCkge1xyXG4gICAgLy8g6I635b6XYmFubmFy5L+h5oGvXHJcbiAgICBob21lLmdldEJhbm5lckRhdGEoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBiYW5uZXJBcnI6IGRhdGEsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAvKuiOt+WPluS4u+mimOS/oeaBryovXHJcbiAgICBob21lLmdldFRoZW1lRGF0YSgoZGF0YTphbnkpID0+IHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0aGVtZUFycjogZGF0YSxcclxuICAgICAgICBsb2FkaW5nSGlkZGVuOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyrojrflj5bljZXlk4Hkv6Hmga8qL1xyXG4gICAgaG9tZS5nZXRQcm9kdWN0b3JEYXRhKChkYXRhOmFueSkgPT4ge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHByb2R1Y3RzQXJyOiBkYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgICBjYWxsYmFjayYmY2FsbGJhY2soKTtcclxuICAgIH0pO1xyXG4gIH0sXHJcblxyXG4gIC8q6Lez6L2s5Yiw5ZWG5ZOB6K+m5oOFKi9cclxuICBvblByb2R1Y3RzSXRlbVRhcDogIChldmVudDphbnkpPT4ge1xyXG4gICAgdmFyIGlkID0gaG9tZS5nZXREYXRhU2V0KGV2ZW50LCAnaWQnKTtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcuLi9wcm9kdWN0L3Byb2R1Y3Q/aWQ9JyArIGlkXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIC8q6Lez6L2s5Yiw5Li76aKY5YiX6KGoKi9cclxuICBvblRoZW1lc0l0ZW1UYXA6IChldmVudDphbnkpID0+IHtcclxuICAgIHZhciBpZCA9IGhvbWUuZ2V0RGF0YVNldChldmVudCwgJ2lkJyk7XHJcbiAgICB2YXIgbmFtZSA9IGhvbWUuZ2V0RGF0YVNldChldmVudCwgJ25hbWUnKTtcclxuICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICB1cmw6ICcuLi90aGVtZS90aGVtZT9pZD0nICsgaWQgKyAnJm5hbWU9JyArIG5hbWVcclxuICAgIH0pXHJcbiAgfSxcclxuICAvKuS4i+aLieWIt+aWsOmhtemdoiovXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICB0aGlzLmxvYWREYXRhKCgpID0+IHtcclxuICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8v5YiG5Lqr5pWI5p6cXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogJ+mbtumjn+WVhui0qSBQcmV0dHkgVmVuZG9yJyxcclxuICAgICAgcGF0aDogJ3BhZ2VzL2hvbWUvaG9tZSdcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5cclxuIl19