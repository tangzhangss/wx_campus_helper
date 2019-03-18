//app.js
const config = require("./utils/config.js");
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
  },
  globalData: {
    userInfo: null
  }
})