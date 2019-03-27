// pages/secondhandstore/secondhandstore.js
const webUtil = require("../../utils/web.js");
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:[],
    inputValue:"",
    info:{
      logo:'http://img0.imgtn.bdimg.com/it/u=1131526118,647367586&fm=26&gp=0.jpg',
      contact:'',
      desc:'',
      picdesc:[],
      price:0,
      status:0,
    }
  },
  showDetail:function(e){
    let index = e.currentTarget.dataset.index;
    let goods = this.data.goodsList[index];
    app.globalData.goodsdetail = goods;
    wx.navigateTo({
      url: './detail/detail',
    })
  },
  choosePic:function(e){
    let index = e.currentTarget.dataset.index;
    var that = this;
    let info = this.data.info;  
    wx.chooseImage({
      success: function (res) {
        info.picdesc[index] = res.tempFilePaths[0];
        that.setData({
          info: info
        })
      },
    })
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
  radioChange:function(e){
    this.data.info.area = e.detail.value;
  },
  infomodify: function (e) {
    let val = e.detail.value;
    let col = e.currentTarget.dataset.col;

    let data = "{\"info." + col + "\":\"" + val + "\"}";
    console.log(data);

    data = JSON.parse(data);

    this.setData(data);
  },
  toggleFormBox(e){
     console.log(e);
     let val = e.currentTarget.dataset.val;
     this.setData({
       showformbox: val==1?true:false
     })
  },
  chooseImage:function(){
    var that = this;
     wx.chooseImage({
       success: function(res) {
          that.setData({
            'info.logo': res.tempFilePaths[0]
          })
       },
     })
  },
  infomodify:function(e){
     let val =e.detail.value;
     let col = e.currentTarget.dataset.col;

     let data = "{\"info."+col+"\":\""+val+"\"}";
     console.log(data);

     data = JSON.parse(data);

     this.setData(data);
  },
  seekChange:function(e){
    this.data.inputValue = e.detail.value
  },
  saveFormboxcontent:function(e){
    let goodsList = wx.getStorageSync("goodsList") || [];

    let info = this.data.info;
   
    //格式校验
    if(!(info.contact && info.price && info.desc)){

      webUtil.showToastWithWarnIcon("请全部填写");

      return false;
    }


    let id = goodsList.length;
    goodsList.forEach((val,index)=>{
         if(val.id == id){
            id++;
         }
    })
    info.id = id;
    info.avatars = app.globalData.userInfo.avatarUrl;
    info.name = app.globalData.userInfo.nickName;

    console.log(info);

     goodsList.unshift(info);

     this.setData({
         goodsList: goodsList,
         showformbox:false
     })

    //更新缓存
    wx.setStorageSync("goodsList", goodsList);

     //个人商品数据改变
    let myGoodsList = wx.getStorageSync("myGoodsList") || [];
    myGoodsList.unshift(info);
    wx.setStorageSync("myGoodsList", myGoodsList);

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
      if (i >= 0){
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
    this.setData({
      goodsList: wx.getStorageSync("goodsList")
    })
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