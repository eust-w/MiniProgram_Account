Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: 'Hello mooc',
    img:'/images/cloud.png',
    arr:['a','b','c'],
    list:[
      {name:'jack',age:4},
      { name: 'cack', age: 5 },
      { name: 'gack', age: 6 }
    ],
    isLogin:true,
    count:0
  },
  onTapHander:function()
  {
    //this.data.count++;
    this.setData({count:this.data.count+1});
  },
  onTapBoxHandler:function(event)
  {
    console.log("box");
    console.log(event);
  },
  onTapChildHandler:function(event)
  {
    console.log("child");
    console.log(event.target.dataset.id);
    //console.log(true);
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