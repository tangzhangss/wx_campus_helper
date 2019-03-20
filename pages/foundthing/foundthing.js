// pages/foundthing/foundthing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[],
      inputContent:'',
      info:{
        logo:"/img/key.jpg"
      }
  },
  chooseImage: function () {
    var that = this;
    wx.chooseImage({
      success: function (res) {
        that.setData({
          'info.logo': res.tempFilePaths[0]
        })
      },
    })
  },
  infomodify: function (e) {
    let val = e.detail.value;
    let col = e.currentTarget.dataset.col;

    let data = "{\"info." + col + "\":\"" + val + "\"}";
    console.log(data);
    data = JSON.parse(data);
    this.setData(data);
  },
  saveFormboxcontent:function(e){
      let info = this.data.info;
      console.log(info);
     //1.改变缓存
    let goods = wx.getStorageSync("lostGoods") || [];

    let id = goods.length;
    goods.forEach(function (val, index) {
      if (val.id == id) {
        id++;
      }
    })
    info.id = id;
    goods.unshift(info);

    wx.setStorageSync("lostGoods",goods);

     //2.改变当前列表
     this.setData({
       list:goods
     })

     //3.改变我的失物招领
    let myLostGoods = wx.getStorageSync("myLostGoods") || [];
    myLostGoods.unshift(info);
    wx.setStorageSync("myLostGoods", myLostGoods);

     //4.隐藏box
     this.setData({
       form:false
     })
  },
  seekChange:function(e){
    this.data.inputContent = e.detail.value;
  },
  seekThings:function(){

    let like = this.data.inputContent;
    let goods =  wx.getStorageSync("lostGoods") || [];
   
    let tempArr = [];
    goods.forEach(function(val,index){
         if(val.goods.indexOf(like) < 0){
         }else{
           tempArr.push(val);
         }
    })

  
    this.setData({
        list: tempArr
      })

  },

  toggleFormBox(e) {
    console.log(e);
    let val = e.currentTarget.dataset.val;
    this.setData({
      form: val == 1 ? true : false
    })
  },


  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      list:wx.getStorageSync("lostGoods")
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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