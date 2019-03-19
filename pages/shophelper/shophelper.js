// pages/shophelper/shophelper.js
const app = getApp();
const webUtil = require("../../utils/web.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navSelectIndex:0,
    shophelper0: [],
    shophelper1: [],
    list:[],
    info: {
      id: 0,
      goods: "",
      addr: "",
      sex: "男",
      name: "",
      avatarurl: "",
      contact: "",
      money: 3,
      time: "",
      status: 0,
    }
  },
  formatTime(e){
    e.forEach((val,index)=>{
      //友好时间
      val.friendly_time = webUtil.friendly_time(e[index].time); 
    })
    return e;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //将时间变成友好时间显示   
    let shophelper0 = this.formatTime(app.globalData.shophelper0);
    let shophelper1 = this.formatTime(app.globalData.shophelper1);
    this.setData({
      shophelper0: shophelper0,
      shophelper1: shophelper1,
      list: shophelper0,
    })
  },
  selectNav: function (e) {
    var that = this;
    let index = e.currentTarget.dataset.index;
    //进行list改变....
    this.setData({
      list: index == 0 ? this.data.shophelper0 : this.data.shophelper1,
      navSelectIndex:index
    })
  },
  toggleFormBox(e) {
    console.log(e);
    let val = e.currentTarget.dataset.val;
    this.setData({
      showformbox: val == 1 ? true : false
    })
  },
  saveFormboxcontent: function (e) {
    let index = this.data.navSelectIndex;
    let info = this.data.info;
    //设置当前时间
    info.time = Date.parse(new Date());
    info.name = app.globalData.userInfo.nickName;
    info.avatarurl = app.globalData.userInfo.avatarUrl;
    info.sex = app.globalData.userInfo.gender==1?'男':'女';
    info.index=index;//区分南北校区
    let list = [];
   
    if (index == 0) {  //南校区
      list = this.data.shophelper0;
    } else {//北校区
       list = this.data.shophelper1;   
    }
    let id = list.length;
    list.forEach((val, index) => {
      if (val.id == id) {
        id++;
      }
    })

    info.id = id;
    info.friendly_time = webUtil.friendly_time(info.time);
    console.log(info);

    //加入到头部
    list.unshift(info);

    if(index==0){
      //更新数据 更新缓存
      this.setData({
        list: list,
        shophelper0: list
      })

      wx.setStorageSync("shophelper0", list);
      app.globalData.shophelper0 = list;

    }else{
      //更新数据 更新缓存
      this.setData({
        list: list,
        shophelper1: list
      })

      wx.setStorageSync("shophelper1", list);
      app.globalData.shophelper1 = list;
    }
    console.log(list);

    this.setData({
      showformbox:false
    }) 

    //____________________________
    //更改我的跑腿代购
    let myShophelp = wx.getStorageSync("myShophelp") || [];
    myShophelp.unshift(info);
    wx.setStorageSync("myShophelp", myShophelp);
  },
  infomodify: function (e) {
    let val = e.detail.value;
    let col = e.currentTarget.dataset.col;

    let data = "{\"info." + col + "\":\"" + val + "\"}";
    console.log(data);

    data = JSON.parse(data);

    this.setData(data);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  callphone:function(e){
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.num,
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})