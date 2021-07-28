// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option: [
      { text: '首页', value: 0 },
      { text: '技术介绍', value: 1 },
      { text: '关于我们', value: 2 },
    ],
    value: 2,
  },

  change_page:function({detail}) {
    console.log("detail:" + detail)
    console.log("value:" + this.data.value)
    if(detail===0){
      wx.navigateTo({
        url: '../home/home',
      })
    }
    if(detail===1){
      wx.navigateTo({
        url: '../tech/tech',
      })
    }
    if(detail===2){
      wx.navigateTo({
        url: '../about/about',
      })
    }
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