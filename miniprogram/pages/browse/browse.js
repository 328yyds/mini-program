// pages/browse/browse.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[{
      date: "2020-12-12"
    },{
      date: "2021-3-14"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  dorequest: function(e) {
    app.globalData.index = e.currentTarget.dataset.index
    console.log(app.globalData.index)
    wx.navigateTo({
      url: '../info/info',
    })
  },

  onLoad: function (options) {
    console.log(app.globalData.id)
    var that = this
    wx.request({
      url: app.globalData.globalReqUrl + '/wx_invade_info',
      method:'GET',
      header: {
        "content-type": "application/json"
      },
      dataType: 'json',
      // data:{
      // },
      success(res) {
        console.log(res.data)
        if(res.data.code == "OK") {
          that.setData({
            array: res.data.array
          })
          app.globalData.array = res.data.array
        }
      },
      fail(res){
        wx.showToast({
          title: '请重试',
          duration: 2000
        })
        wx.navigateTo({
          url: '../login/login',
        })
      }
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