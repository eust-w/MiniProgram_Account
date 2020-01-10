const db = wx.cloud.database();// init DB
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:[]
  },
  sum:function(){
    wx.cloud.callFunction({
      name:'sum',
      data:{
        a:2,
        b:3
      }
    }).then(res=>{console.log(res);
    }).catch(err=>{console.log(err);})
    ;
  },
  batchDelete:function(){
    wx.cloud.callFunction({
      name:'batchDelete'
    })
  },
  upload:function(){
    //choose an image
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths);
        wx.cloud.uploadFile({
          cloudPath:new Date().getTime()+'.png',
          filePath: tempFilePaths[0],
          success:res=>
          {
            console.log(res.fileID)
            db.collection('image').add({
              data:{
                fileID:res.fileID
              }
            }).then(res=>{
              console.log(res);
            }).catch(err=>{
              //console.error(err);
            })
          },
          //fail: console.error
        })
      }
    })
  },
  getFile:function(){
    wx.cloud.callFunction({
      name:'login'
    }).then(res=>{
      db.collection('image').where({
        _openid:res.result.openid
      }).get().then(res2=>{
        console.log(res2);
        this.setData({
          images:res2.data
        })
      })
    }

    )
  },
  downloadFile:function(event){
    wx.cloud.downloadFile({
      fileID: event.target.dataset.fileid,
    }).then(res => {
      // get temp file path
      console.log(res.tempFilePath)

      wx.saveImageToPhotosAlbum({
        filePath: res.tempFilePath,
        success(res){
          wx.showToast({
            title: 'save success'
          })
        }
      })
    }).catch(error => {

    })
  },
  getOpenId:function(){
    wx.cloud.callFunction({
      name:'login',
    }).then(res=>{console.log(res)});
  },
  insert:function()
  {
    // db.collection('user').add(
    //   {
    //     data:{
    //       name:'Tom',
    //       age:29
    //     },
    //     success: res =>//arrow function
    //     {
    //       console.log(res);
    //     },
    //     fail:err=>
    //     {
    //       console.log(err);
    //     }
    //   }
    // )
     db.collection('user').add(
      {
        data:{
          name:'jom',
          age:29
         }
      }).then(res => { console.log(res);
      }).catch(err => { console.log(err);})
  },
 update:function(){
   db.collection('user').doc
     ('6d3904ca5e13442f0119cb12505c119a').update(
     {
       data:{age:50}
     }
   ).then(res => { console.log(res);})
     .catch(err => { console.log(err);})
 },
 search:function(){
   console.log(db.collection('user').where({
     name:'Tom'
   }));
  //  .get().then(res => {
  //    console.log(res);
  //  })
 },
 delete:function()
 {
   db.collection("user").doc('a53d0d065e1345c00119cd784122906b').remove()
   .then()
   .catch()
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