//management.js
//获取应用实例
const app = getApp()

Page({
  data: {
    contentHeight: 0,
    isCheck: false,
    barrageList: []
  },
  //事件处理函数
  onLoad: function(){
    const screenHeight = app.globalData.windowHeight
    this.setData({
      contentHeight: screenHeight - 101,
      barrageList: [
                    {barrageHead: '../../src/image/head01.png', barrageName: '用户1', barrageTime: '2018-04-18 12:20:12', barrageText: '123456789', barrageStatus: '未上墙', barrageStatusStyle: 'out-wall', statusCode: 0},
                    {barrageHead: '../../src/image/head01.png', barrageName: '用户2', barrageTime: '2018-04-18 12:20:12', barrageText: '987654321', barrageStatus: '已屏蔽', barrageStatusStyle: 'on-hide', statusCode: 2},
                    {barrageHead: '../../src/image/head01.png', barrageName: '用户3', barrageTime: '2018-04-18 12:20:12', barrageText: 'abcdefghi', barrageStatus: '已上墙', barrageStatusStyle: 'on-wall', statusCode: 1},
                    {barrageHead: '../../src/image/head01.png', barrageName: '用户4', barrageTime: '2018-04-18 12:20:12', barrageText: 'ihgfedcba', barrageStatus: '未上墙', barrageStatusStyle: 'out-wall', statusCode: 0}
                   ]
    })
    wx.setNavigationBarTitle({
      title: '弹幕管理'//页面标题为路由参数
    })
    console.log(wx)
  },
  autoPlay: function(e){
    console.log(e)
    this.setData({
      isCheck: e.detail.value
    })
  },
  hideBarrage: function(e){
    console.log(e)
  },
  onWall: function(e){
    console.log(e)
  }
})
