// pages/me/me.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:app.globalData.userInfo,
     myShophelp:[],
     myFoundthing:[],
     myGoodsList:[]
  },
  dellostgood(e) {
    var that = this;
    let index = e.currentTarget.dataset.index;
    wx.showModal({
      title: '提示',
      content: '确认已经有人认领或取消，并删除此项么?',
      success(res) {
        if (res.confirm) {

          //1.更新缓存。。。我的
          let myLostGoods = wx.getStorageSync("myLostGoods");

          let indx = null;
          myLostGoods.forEach(function (val, i) {
            if (val.id == myLostGoods[index].id) {
              console.log("找到了....index:" + i);
              indx = i;
            }
          })

          if (indx != null) {
            //在我的 ——缓存中 删除此项
            myLostGoods.splice(indx, 1);

            //更新
            wx.setStorageSync("myLostGoods", myLostGoods);
          }

          //1.更新缓存。。。主要
          let lostGoods = wx.getStorageSync("lostGoods");

          let indxx = null;
          lostGoods.forEach(function (val, i) {
            if (val.id == lostGoods[index].id) {
              console.log("找到了....index:" + i);
              indxx = i;
            }
          })

          if (indxx != null) {
            //在主要 ——缓存中 删除此项
            lostGoods.splice(indxx, 1);
            //更新
            wx.setStorageSync("lostGoods", lostGoods);
          }
          //----------------------------------------------------------------


          //更新渲染
          that.setData({
            myLostGoods: myLostGoods
          })
        }
      }
    })
  },

  delShophelp(e){
    var that = this;
    let index = e.currentTarget.dataset.index;
    wx.showModal({
      title: '提示',
      content: '确认已经有人帮助跑腿或取消，并删除此项么?',
      success(res){
        if(res.confirm){
     
          let myShophelp = that.data.myShophelp;
          //更新跑腿代购库
          //---------------------------------------------------
          let shophelp = [];
          if (myShophelp[index].index==0){
            //南校区
            shophelp = wx.getStorageSync("shophelper0");
          }else{
            //北校区
            shophelp = wx.getStorageSync("shophelper1");
          }

          shophelp.forEach(function(val,i){
            if (val.id == myShophelp[index].id){
              console.log("找到了....index:" + i);
               val.status = 1;
            }
          })

          if (myShophelp[index].index == 0) {
            //南校区
            console.log("更新南校区代购库", shophelp)
            wx.setStorageSync("shophelper0", shophelp);
            app.globalData.shophelper0 = shophelp
          } else {
            //北校区
            console.log("更新北校区代购库", shophelp)
            wx.setStorageSync("shophelper1", shophelp);
            app.globalData.shophelper1= shophelp
          }
          //----------------------------------------------------------------
         //执行删除操作
          myShophelp.splice(index,1);

         //更新储存
          wx.setStorageSync("myShophelp", myShophelp);
          //更新渲染
          that.setData({
            myShophelp: myShophelp
          })
          



        }
      }
    })
  },

  delGoods(e) {
    var that = this;
    let index = e.currentTarget.dataset.index;
    wx.showModal({
      title: '提示',
      content: '确认已经有人购买或取消,并删除此项么?',
      success(res) {
        if (res.confirm) {
          let myGoodsList = that.data.myGoodsList;
          //---------------------------------------------------
    
          let goodsList = wx.getStorageSync("goodsList");


          goodsList.forEach(function (val, i) {
            if (val.id == myGoodsList[index].id) {
              console.log("找到了....index:" + i);
              val.status = 1;
            }
          })
          wx.setStorageSync("goodsList", goodsList);
          //----------------------------------------------------------------
          //执行删除操作
          myGoodsList.splice(index, 1);
          //更新储存
          wx.setStorageSync("myGoodsList", myGoodsList);
          //更新渲染
          that.setData({
            myGoodsList: myGoodsList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     let myShophelp = wx.getStorageSync("myShophelp") || [];
    let myLostGoods = wx.getStorageSync("myLostGoods") || [];
     let myGoodsList = wx.getStorageSync("myGoodsList") || [];
    console.log("我的跑腿代购",myShophelp);
    console.log("我的失物招领", myLostGoods);
    console.log("我的二手商品", myGoodsList);
     this.setData({
       myShophelp: myShophelp,
       myLostGoods: myLostGoods,
       myGoodsList: myGoodsList
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