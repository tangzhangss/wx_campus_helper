// pages/secondhandstore/secondhandstore.js
const webUtil = require("../../utils/config.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:wx.getStorageSync("goodsList"),
    inputValue:"",
  },
  seekChange:function(e){
    this.data.inputValue = e.detail.value
  },
  seekGoods:function(e){
    let goodsList = wx.getStorageSync("goodsList");
    let key = this.data.inputValue;
    console.log("搜索关键字:",key);
    
    if(key == ''){
      this.setData({
        goodsList: goodsList
      })
      return false;
    }
    
    //查找
    let temps = [];
    goodsList.forEach(function(val,index){
      let i = val.desc.indexOf(key);
      console.log("配置索引:结果 ",index,i)
      if (i > 0){
        console.log("匹配成功，添加..."+val.id)
        temps.push(val);
      }
    })
   
   this.setData({
     goodsList: temps
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  call(e){
   let num = e.currentTarget.dataset.num;
   wx.makePhoneCall({
     phoneNumber: num,
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