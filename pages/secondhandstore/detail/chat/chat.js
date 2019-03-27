// pages/consult/chat/chat.js

const app =getApp();
const webUtil = require("../../../../utils/web.js");
var timer;
var exit = 0;//是否离开页面 离开了就不在刷新消息

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    detailHide:true,
    avatars:"",
    scroll_bottom:"",//直接下滑到最底下  
    messageinput:"",//发送文本框
  },
  sendMessage:function(){
    let msg = this.data.messageinput;
    let that = this;
    if(msg == ''){
      webUtil.showToastWithWarnIcon("请输入内容");
      return false;
    }
    //发送文字消息
    var logs = this.data.logs;
    logs.push({
      message:msg,
      ctype: 1,
      replytime: new Date(),
      replytimeshow: webUtil.friendly_time(new Date())
    })
    this.setData({
      logs: logs,
      messageinput:'',
      scroll_bottom: "scroll_bottom",//直接下滑到最底下  
    })
    wx.setStorageSync("logs", logs);
  },
  setMessageinput:function(e){
   this.setData({
     messageinput:e.detail.value
   })
  },
  setAssessinput: function (e) {
    this.setData({
      'consult.assessDecode': e.detail.value
    })
  },
  //发送图片
  sendImage:function(){
    var that = this;

    wx.chooseImage({
      success: function (res) {
        var logs = that.data.logs;
        logs.push({
          image: res.tempFilePaths[0],
          ctype: 2,
          replytime: new Date(),
          replytimeshow: webUtil.friendly_time(new Date())
        })
        that.setData({
          logs: logs,
          scroll_bottom: "scroll_bottom",//直接下滑到最底下  

        })
        wx.setStorageSync("logs", logs);
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    let avatars = options.url;
    let logs = wx.getStorageSync("logs") || [];
    logs = this.formatDateTime(logs);
    //获取聊天信息
    this.setData({
      avatars:avatars,
      userInfo:app.globalData.userInfo,
      logs: logs,
      scroll_bottom: "scroll_bottom",//直接下滑到最底下  
    })  
  },
  //预览图片
  prevImage:function(e){
    wx.previewImage({
      urls: [e.currentTarget.dataset.image],
      current: e.currentTarget.dataset.image
    })
  },
  //格式化时间_本页渲染数据
  formatDateTime: function (obj) {
    obj.forEach((val, index) => {
        obj[index].replytimeshow = webUtil.friendly_time(obj[index].replytime);
    })
    return obj;
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