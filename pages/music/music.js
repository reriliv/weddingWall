const app = getApp()

Page({
  data: {
    musicList: [
    		     {musicName: '一起去旅行', musicSrc: '../../src/music/SA0DAFUKUCiAJ7clADv7GvgJTGY844.mp3'},
             {musicName: '最美情侣', musicSrc: '../../src/music/AYcBAFkapTCAU5ZTAE7gUAzRQIY792.mp3'},
             {musicName: '花好月圆', musicSrc: '../../src/music/QQ0DAFSOX6mAdEO1ADvEhr3jTow932.mp3'},
             {musicName: '今天你要嫁给我', musicSrc: '../../src/music/rYYBAFUN9CWAUXJMAEJ0P1CjFss663.mp3'},
             {musicName: '明天我要嫁给你了', musicSrc: '../../src/music/8IYBAFgyenGAdNaoAB-SU5wglu0502.mp3'}
    		   ],
    contentHeight: 0,
    playIcon: '../../src/image/play2_icon@2x.png',
    pauseIcon: '../../src/image/pause2_icon@2x.png',
    isPlay: false
  },
  onLoad: function(){
    wx.setNavigationBarTitle({
      title: '背景音乐'
    })
    let screenHeight = app.globalData.windowHeight
    this.setData({
      contentHeight: screenHeight - 102
    })
  },
  musicPlay: function(e){
    console.log(e)
    this.setData({
      isPlay: true
    })
  },
  musicPause: function(e){
    console.log('暂停')
    this.setData({
      isPlay: false
    })
  }
})
