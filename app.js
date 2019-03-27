//app.js
const config = require("./utils/config.js");
const webUtil = require("./utils/web.js");
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []

    //配置中取出初始化数据

    //1.二手商品
    let goodsList = wx.getStorageSync("goodsList");
    if(goodsList){
      console.log("二手商品数据不为空，不需要读取配置");
    }else{
      console.log("二手商品数据为空，需要读取配置");
      goodsList = config.getFoundthing().goodsList;
      //更新缓存
      wx.setStorageSync("goodsList", goodsList);
    }
  
   //2.个人信息
    this.globalData.userInfo = wx.getStorageSync("userInfo") || null;
    //console.log(wx.getStorageSync("userInfo"));

    //3.南北校区跑腿代购。。。。转换时间
    let shophelper0 = wx.getStorageSync("shophelper0");
    let shophelper1 = wx.getStorageSync("shophelper1");
    this.globalData.shophelper0 = shophelper0 || config.getShopHelper().shophelper0;
    this.globalData.shophelper1 = shophelper1 || config.getShopHelper().shophelper1;
  
    //4.失物招领
    let lostGoods = wx.getStorageSync("lostGoods");
    if (!lostGoods){
      lostGoods = config.lostAndFound().goods;
      wx.setStorageSync("lostGoods", lostGoods);
    }

  },
  globalData: {
    userInfo: null,
    shophelper0:null,
    shophelper1:null,

    goodsdetail:{},//商品详情信息
  }
})