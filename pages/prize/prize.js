const app = getApp()

const CountDown = (_this, time) => {
  let totalTime = time * 1000;
  // console.log(totalTime);
  let countDownAction = setInterval(function(){
    // console.log(totalTime);
    _this.setData({
      isTime: true,
      currentTime: totalTime/1000
    })
    totalTime -= 1000;
    if (totalTime < 0) {
      clearInterval(countDownAction);
      console.log('倒计时结束');
      _this.setData({
        isTime: false,
        currentTime: 0
      })
    }
  }, 1000);
  return countDownAction;
}

const checkStorage = (data) => {
  console.log(data, 26);
  return false;
};

const initialData = (_self) => {
  let screenH = app.globalData.windowHeight;
  let headerH = screenH*(0.31);
  let footerH = screenH*(0.083);
  let QRH = screenH/6;
  let controlW = app.globalData.windowWidth/3;
  let contentH = screenH - headerH - footerH;
  let flag = false;
  console.log(_self, 'this');
  console.log(app, 'app');
  wx.getStorage({
    key: 'highLevelPrize',
    success: function(res){
      console.log(res);
      flag = checkStorage(res);
    }
  });
  _self.setData({
    QRHeight: QRH,
    controlItemWidth: controlW*2,
    contentHeight: contentH,
    headerHeight: headerH,
    footerHeight: footerH
  });
};

/*const ShowMsg = (options) => {
  const _OPTIONS = options || {};
  const 
};*/
class Message{
  constructor(self){
    this.self = self;
  }
  show(){
    this.self.setData({
      showMsg: true
    });
  }
  close(){
    this.self.setData({
      showMsg: false
    })
  }
};

Page({
  data: {
    title: '婚礼墙',
    headerHeight: 0,
    footerHeight: 0,
    QRHeight: 0,
    controlItemWidth: 0,
    contentHeight: 0,
    tapFirst: true,
    tapSecond: false,
    tapThird: false,
    isStand: true,
    isAlbum: false,
    isBoth: false,
    imgSrc: '../../src/image/wedding-beach.jpg',
    iconFirst: '../../src/image/content_icon_mobile_default@2x.png',
    iconSecond: '../../src/image/content_icon_computer_default@2x.png',
    iconThird: '../../src/image/content_icon_saomiao_default@2x.png',
    inviteImg: '../../src/image/content_icon_share_default@2x.png',
    qrImg: '../../src/image/content_icon_erweima_default@2x.png',
    redPacket: '../../src/image/bottom_icon_hongbao_default@2x.png',
    emojiImg: '../../src/image/bottom_icon_emoje_default@2x.png',
    giftImg: '../../src/image/bottom_icon_gift_default@2x.png',
    joinMsg: [{username: '用户1'}, {username: '用户2'}],
    chatMsg: [
                {chatName: '用户1', chatHead: '../../src/image/head01.png', chatText: '123', isHost: false},
                {chatName: '用户2', chatHead: '../../src/image/head02.jpg', chatText: 'abc', isHost: true}
              ],
    emailAddress: 'www.123456789.com',
    isTime: false,
    currentTime: 0,
    showCode: false,
    prizeDraw: false,
    showPrizePanel: false,
    /*firstNavTap: true,
    secondNavTap: false,
    thirdNavTap: false,*/
    awardList: [

               ],
    barrageAwardList: [
                        
                      ],
    prizePersonList: [
                       {personHead: '../../src/image/head01.png', personName: '火箭1'},
                       {personHead: '../../src/image/head02.jpg', personName: '人头1'},
                       {personHead: '../../src/image/head01.png', personName: '火箭2'},
                       {personHead: '../../src/image/head02.jpg', personName: '人头2'},
                       {personHead: '../../src/image/head01.png', personName: '火箭3'},
                       {personHead: '../../src/image/head02.jpg', personName: '人头3'},
                       {personHead: '../../src/image/head01.png', personName: '火箭4'},
                     ],
    firstPrizePanel: true,
    secondPrizePanel: false,
    thirdPrizePanel: false,
    prize_slide_time: 10,
    prize_slide_vertical: true,
    prize_slide_circular: true,
    prize_slide_autoplay: false,
    prize_slide_interval: 0,
    // prize_draw_back_name: '< 返回',
    prize_back_icon: '../../src/image/prize_back_icon.png',
    prize_cancel_icon: '../../src/image/prize_cancel_icon.png',
    barragePrizeExplain: '输入指定口令 ---> 点击 发布 完成大屏提示 ---> 打开抽奖面板 --->  按 开始 进行抽奖',
    startAwardPrize: false,
    showMsg: false,
    radioCheckedIndex: 0,
    hasSetToken: false
  },
  //事件处理函数
  onLoad: function(options){
    wx.setNavigationBarTitle({
      title: '活动抽奖'
    })
    initialData(this)
    console.log(options)
    /*wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })*/
  },
  copyAddress: function(){
    wx.setClipboardData({
      data: this.data.emailAddress,
      success: function(res){
        console.log(res)
        wx.showToast({
          title: '复制成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  shareApp: function(){
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  checkQRCode: function(){
    console.log('查看二维码')
    wx.previewImage({
      urls: ['../../src/image/content_icon_erweima_default@2x.png'],
      success: function(){
        console.log('成功')
      }
    })
  },
  showModeStand: function(){
    this.setData({
      isStand: true,
      isAlbum: false,
      isBoth: false
    })
  },
  showModeAlbum: function(){
    this.setData({
      isStand: false,
      isAlbum: true,
      isBoth: false
    })
  },
  showModeBoth: function(){
    this.setData({
      isStand: false,
      isAlbum: false,
      isBoth: true
    })
  },
  showPrizeDraw: function(){
    let flag = this.data.prizeDraw
    if (flag) {
      this.setData({
        prizeDraw: false,
        showPrizePanel: false
      })
    }else{
      this.setData({
        prizeDraw: true,
        showPrizePanel: true
      })
    }
  },
  sendMsg: function(e){
    console.log('发送数据', e.detail.value)
  },
  timeAction: function(){
    CountDown(this, 10)
  },
  showCodeAction: function(e){
    console.log(e)
    const flag = e.detail.value
    this.setData({
      showCode: flag
    })
  },
  turboModeAction: function(){
    this.setData({
      /*firstNavTap: true,
      secondNavTap: false,
      thirdNavTap: false,*/
      firstPrizePanel: true,
      secondPrizePanel: false,
      thirdPrizePanel: false
    })
  },
  highModeAction: function(){
    this.setData({
      /*firstNavTap: false,
      secondNavTap: true,
      thirdNavTap: false,*/
      firstPrizePanel: false,
      secondPrizePanel: true,
      thirdPrizePanel: false
    })
  },
  barrageModeAction: function(){
    this.setData({
      /*firstNavTap: false,
      secondNavTap: false,
      thirdNavTap: true,*/
      firstPrizePanel: false,
      secondPrizePanel: false,
      thirdPrizePanel: true
    })
  },
  startTurboAwardAction: function(){
    console.log('急速抽奖')
    this.setData({
      prize_slide_autoplay: true,
      startAwardPrize: true
    })
  },
  startHighAction: function(){
    console.log('开始抽奖')
    this.setData({
      prize_slide_autoplay: true,
      startAwardPrize: true
    })
  },
  startBarrageAwardAction: function(){
    console.log('开始抽奖')
    /*this.setData({
      prize_slide_autoplay: true,
      startAwardPrize: true
    })*/
  },
  specifyBarrageAwardAction: function(){
    this.setData({
      prize_slide_autoplay: false,
      startAwardPrize: false
    })
  },
  specifyAction: function(e){
    console.log(e)
  },
  messageAction: function(){
    const flag = this.data.showMsg
    const msg = new Message(this)
    if (flag) {
      msg.show()
    }else{
      msg.close()
    }
  },
  reSetAction: function(){
    console.log('重置')
    const msg = new Message(this)
    msg.close()
    // 重置
  },
  changeRadioIndex: function(e){
    console.log(e)
    this.setData({
      radioCheckedIndex: parseInt(e.detail.value)
    })
  },
  commandReleaseAction: function(){
    console.log('发布口令')
    this.setData({
      hasSetToken: true
    })
  }
})
