//index.js
//获取应用实例
const app = getApp();
const config = require("../../utils/config.js");

Page({
  data:{
    userInfo:{},
    notice: config.getIndex().notice
  },
  onLoad:function () {
  }
})
