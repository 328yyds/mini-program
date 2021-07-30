//app.js
App({
  globalData: {
    id: null,
    check: false,
    globalReqUrl: "http://192.168.137.1:8000",
    index: null,
    array:[{
      date: "2021-12-12",
      time: "13:00:00",
      type: "紧急",
      person_info: "未知",
      image: "https://img-home.csdnimg.cn/images/20210723100444.jpg"
    },{
      date: "2020-12-12",
      time: "13:00:45",
      type: "一般",
      person_info: "simple",
      image: "https://img-home.csdnimg.cn/images/20200826030433.jpg"
    }],
    image: "",
  },

  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
        env: 'bjtu-vote-1gmbj9uzdb9b96fb',
      })
    }
  }
})
