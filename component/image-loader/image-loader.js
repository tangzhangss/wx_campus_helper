// pages/component/imagePrevLoad/imagePrevLoad.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      //占位图片
      prevImage:{
        type: String,
        value: "./prevImage.png",
      },
      //图片的地址，必须
      src:{
        type:String,
        value:""
      },
      mode:{
        type: String,
        value: "widthFix"
      },
      imageStyle:{
        type: String,
        value: ""
      },
      loaded:{
        type: String,
        value: "false"  //"true" 非true
      },
      index:{
        type: Number,
        value: 0
      }
  },
  /**
   * 组件的初始数据
   */
  data:{
   
  },
  attached:function(){},
  /**
   * 组件的方法列表
   */
  methods: {
    _loadComplete:function(e){
      
      this.setData({
        loaded:"true"
      })
      
      this.triggerEvent('bindload',e);
    }
  }
})
