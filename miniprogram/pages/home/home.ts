import { Home } from "./home-model";
const home = new Home(); //实例化 首页 对象
Page({
  data: {
    loadingHidden: false,
    bannerArr:[],
    themeArr:[],
    productsArr:[]
  },
  onLoad () {
    this.loadData();
  },
  /*加载所有数据*/
  loadData(callback:any = null) {
    // 获得bannar信息
    home.getBannerData((data: any) => {
      console.log(data);
      this.setData({
        bannerArr: data,
      });
    });
    /*获取主题信息*/
    home.getThemeData((data:any) => {
      this.setData({
        themeArr: data,
        loadingHidden: true
      });
    });

    /*获取单品信息*/
    home.getProductorData((data:any) => {
      this.setData({
        productsArr: data
      });
      callback&&callback();
    });
  },

  /*跳转到商品详情*/
  onProductsItemTap:  (event:any)=> {
    var id = home.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id
    })
  },

  /*跳转到主题列表*/
  onThemesItemTap: (event:any) => {
    var id = home.getDataSet(event, 'id');
    var name = home.getDataSet(event, 'name');
    wx.navigateTo({
      url: '../theme/theme?id=' + id + '&name=' + name
    })
  },
  /*下拉刷新页面*/
  onPullDownRefresh() {
    this.loadData(() => {
      wx.stopPullDownRefresh()
    });
  },
  //分享效果
  onShareAppMessage() {
    return {
      title: '零食商贩 Pretty Vendor',
      path: 'pages/home/home'
    }
  }
})


