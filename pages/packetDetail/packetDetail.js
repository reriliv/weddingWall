const app = getApp();

Page({
  data: {
    mainPersonHead: '../../src/image/head01.png',
    personName: '用户1',
    personPacketMsg: '恭喜发财，大吉大利',
    packetTotal: '520.00',
    packetAssignInfo: '3个红包，已经被抢光了',
    assignInfoList: [
                      {personHead: '../../src/image/head01.png',personName: '用户1',assignDate: '4月09日  13:18', packetGain: '320.00', gainText: '手气最佳'},
                      {personHead: '../../src/image/head02.jpg',personName: '用户2',assignDate: '4月09日  13:18', packetGain: '99.00', gainText: ''},
                      {personHead: '../../src/image/head01.png',personName: '用户3',assignDate: '4月09日  13:18', packetGain: '101.00', gainText: ''},
                    ]
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '红包详情'
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff2b2d'
    })
    console.log(options)
  },
})
