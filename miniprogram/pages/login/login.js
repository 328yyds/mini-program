const app = getApp()
 
Page({
  data: {
    username: '',
    password: ''
  },

  onShow: function () {
    // 生命周期函数--监听页面显示
  },
  onLoad: function () {
   
  },
 
 
  // 获取输入账号 
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
 
  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
 
  // 登录处理
  login: function () {
    var that = this;
    if (this.data.username.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '账号或密码不能为空',
        icon: 'none',
        duration: 2000
      })
    } else {
      //这个地方是用来跳过检验的
      // wx.navigateTo({
      //   url: '../browse/browse',
      // })
      wx.request({
        url: app.globalData.globalReqUrl + '/login', 
        header: {
          "content-type": "application/json"
        },
        method: 'POST',
        dataType: 'json',
        responseType: 'text',
        data: {
          login_type: "wechat",
          usertype: "normal_root",
          username: that.data.username,
          password: that.data.password,
          tel: "not provided",
          auth_code: "not provided"
        },
        success(res) {
          if (res.data.code === "OK") {
            app.globalData.id = that.data.username
            app.globalData.check = true
            wx.navigateTo({
              url: '../browse/browse',
            })
          } else {
            wx.showToast({
              title: res.data.code,
              icon: 'loading',
              duration: 2000
            })
          }
        },
        fail(res) {
          wx.showToast({
            title: "请求失败",
            icon: 'error',
            duration: 2000
          })
        }
      })
    }
  }
})