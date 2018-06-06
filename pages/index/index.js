let _this = undefined;
let barrageTempList = [];

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

class Barrage{
  constructor(text, top, time){
    console.log('新弹幕');
    this.text = text;
    this.top = top;
    this.time = time;
    // this._that = _this;
  }
  send(){
    // let that = this;
    setTimeout(function(){
      barrageTempList.splice(1, 1); //动画完成，从列表中移除这项
      console.log('删除了', barrageTempList);
      _this.setData({
        barrageList : barrageTempList
      })
    }, this.time*1000); //定时器动画完成后执行。
    // console.log(that, this._that);
    _this.setData({
      barrageList : barrageTempList
    });
  }
}

const getDate = (_Date) => {
  let date = _Date;
  let [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
  console.log(year, month, day);
  let [hour, minute, second] = [date.getHours(), date.getMinutes(), date.getSeconds()];
  console.log(hour, minute, second);
  return 'date_' + year + month + day + '_' + hour + minute + second;
};

class Chat{
  constructor(text){
    this.text = text;
    console.log(this.text);
  }
  send(){
    // 调用接口
    // console.log(this.textObj);
    let textObj = {};
    const _that = this;
    // wx.getUserInfo({
      // success: function(res){
        // console.log(res.userInfo);
        // {date: '2018-05-24 141537', username: '用户2', userhead: '../../src/image/head02.jpg', chatText: 'abc', isHost: true, isChat: true}
        textObj.userhead = _this.data.headImage;
        textObj.username = _this.data.nickName;
        textObj.chatText = _that.text;
        textObj.isHost = true;
        textObj.isChat = true;
        // let date = util.formatTime(new Date()).split(' ');
        let date = getDate(new Date());
        console.log(date);
        textObj.date = date;
        // textObj.date = 'date_'+ date[0] + '_' + date[1];
        // console.log(textObj.date);
        const _chatInfoList = _this.data.chatInfoList;
        console.log(_chatInfoList, textObj);
        _chatInfoList.push(textObj);
        _this.setData({
          chatInfoList: _chatInfoList,
          currentView: textObj.date,
        });
      // }
    // });
  }
};

/*const getScrollTop = () => {
  wx.createSelectorQuery().select('.chat-panel').boundingClientRect().exec(function(res){
    console.log(res[0], '第一次获取');
    console.log(wx);
    // return res[0].height;
    _this.setData({
      scrollTop: res[0].bottom
    });
  });
};

const setScrollTop = () => {
  let ScrollTop = _this.data.scrollTop;
  ScrollTop += 70;
  console.log(ScrollTop);
  _this.setData({
    scrollTop: ScrollTop
  });
};

const changeChatScrollTop = () => {
  let ScrollTop = _this.data.scrollTop;
  ScrollTop === 0 ? getScrollTop() : setScrollTop();
};*/

const formatMsg = (text, date) => {
  console.log(text, date);
  let [chat, barrage] = [new Chat(text), new Barrage(text, Math.ceil(Math.random()*100), 5)];
  console.log(chat, barrage);
  barrageTempList.push(barrage);
  chat.send();
  barrage.send();
  /*let chat = new Chat(text);
  // changeChatScrollTop()
  JSON.stringify(chat) !== '{}' ? chat.send() : console.log('');
  let flag = _this.data.barrageMode;
  // console.log(flag);
  let barrage = flag ? new Barrage(text, Math.ceil(Math.random()*100), 5, this) : {};
  // console.log(barrage, 267);
  barrageTempList.push(barrage);
  JSON.stringify(barrage) !== '{}' ? barrage.send() : console.log('');*/
};

const util = require('../../utils/util');

//获取应用实例
const app = getApp()

Page({
  data: {
    nickName: '',
    headImage: '',
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
    // joinMsg: [{username: '用户1'}, {username: '用户2'}],
    chatInfoList: [
                {date: 'date_20180524_121537', username: '用户1', isChat: false},
                {date: 'date_20180524_131537', username: '用户2', isChat: false},
                {date: 'date_20180524_140537', username: '用户1', userhead: '../../src/image/head01.png', chatText: '123', isHost: false, isChat: true},
                {date: 'date_20180524_141537', username: '用户2', userhead: '../../src/image/head02.jpg', chatText: 'abc', isHost: true, isChat: true}
              ],
    chatValue: '',
    emailAddress: 'www.123456789.com',
    isTime: false,
    currentTime: 0,
    showCode: false,
    prizeDraw: false,
    showPrizePanel: false,
    firstNavTap: true,
    secondNavTap: false,
    thirdNavTap: false,
    awardList: [
                 {awardName: '金奖', awardImage: '../../src/image/golden_award.png', awardNumber: 1},
                 {awardName: '银奖', awardImage: '../../src/image/silver_award.png', awardNumber: 0},
                 {awardName: '铜奖', awardImage: '../../src/image/cuprum_award.png', awardNumber: 3},
                 {awardName: '幸运奖', awardImage: '../../src/image/lucky_award.png', awardNumber: 6},
                 {awardName: '参与奖', awardImage: '../../src/image/participation_award.png', awardNumber: 2}
               ],
    barrageAwardList: [
                        {awardName: '金奖', awardImage: '../../src/image/golden_award.png', awardNumber: 1},
                        {awardName: '金奖', awardImage: '../../src/image/silver_award.png', awardNumber: 1}
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
    controlList: [
                   {moduleName: '活动抽奖', moduleUrl: '../prize/prize', moduleHead: '../../src/image/choujiang_icon@2x.png'},
                   {moduleName: '管理弹幕', moduleUrl: '../management/management', moduleHead: '../../src/image/danmu_icon@2x.png'},
                   {moduleName: '上传相册', moduleUrl: '../album/album', moduleHead: '../../src/image/shangchuan_icon@2x.png'},
                   {moduleName: '候场信息', moduleUrl: '../waitMode/waitMode', moduleHead: '../../src/image/houchang_icon@2x.png'},
                   {moduleName: '背景音乐', moduleUrl: '../music/music', moduleHead: '../../src/image/yinyue_icon@2x.png'},
                   {moduleName: '迎宾引导', moduleUrl: '../guide/guide', moduleHead: '../../src/image/yingbin_icon@2x.png'},
                   {moduleName: '下载二维码', moduleUrl: '', moduleHead: '../../src/image/erweima_icon@2x.png'},
                   {moduleName: '红包管理', moduleUrl: '../packet/packet', moduleHead: '../../src/image/hongbao_icon@2x.png'},
                 ],
    barrageList: [
      /*{headUrl: '', text: '123'},
      {headUrl: '', text: 'abc'},
      {headUrl: '', text: '456'},
      {headUrl: '', text: 'def'},
      {headUrl: '', text: '789'},
      {headUrl: '', text: 'hij'},
      {headUrl: '', text: 'sdlkgj'},*/
    ],
    barrageMode: false,
    currentView: 'date_20180524_141537',
    chatList: [],
  },
  //事件处理函数
  onLoad: function(){
    console.log(this.data.chatInfoList);
    let screenH = app.globalData.windowHeight
    let headerH = screenH*(0.31)
    let footerH = screenH*(0.083)
    let QRH = screenH/6
    let controlW = app.globalData.windowWidth/3
    let contentH = screenH - headerH - footerH
    this.setData({
      QRHeight: QRH,
      controlItemWidth: controlW*2,
      contentHeight: contentH,
      headerHeight: headerH,
      footerHeight: footerH
    })
    _this = this;
    wx.login({
      success: function(res){
        console.log(res.errMsg)
        console.log(res.code)
        wx.getUserInfo({
          success: function(res){
            console.log(res)
            _this.setData({
              nickName: res.userInfo.nickName,
              headImage: res.userInfo.avatarUrl,
            });
          }
        })
      }
    })
    wx.connectSocket({
      url: 'wss://120.79.162.62:8000',
      data:{
        x: '',
        y: ''
      },
      header:{ 
        'content-type': 'application/json'
      },
      protocols: ['protocol1'],
      method:"GET"
    })
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
  showTapFirst: function(){
    // console.log(e)
    this.setData({
      tapFirst: true,
      tapSecond: false,
      tapThird: false,
      prizeDraw: false
    })
  },
  showTapSecond: function(){
    // console.log(e)
    this.setData({
      tapFirst: false,
      tapSecond: true,
      tapThird: false
    })
  },
  showTapThird: function(){
    // console.log(e)
    this.setData({
      tapFirst: false,
      tapSecond: false,
      tapThird: true,
      prizeDraw: false
    })
  },
  showModeStand: function(){
    this.setData({
      isStand: true,
      isAlbum: false,
      isBoth: false,
      barrageMode: false,
    })
  },
  showModeAlbum: function(){
    this.setData({
      isStand: false,
      isAlbum: true,
      isBoth: false,
      barrageMode: false,
    })
  },
  showModeBoth: function(){
    // 显示弹幕
    this.setData({
      isStand: false,
      isAlbum: false,
      isBoth: true,
      barrageMode: true,
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
    // 发送弹幕 & 聊天
    const value = e.detail.value;
    // console.log(value === '');
    let date = util.formatTime(new Date());
    // console.log(date);
    // value === '' ? console.log('空的') : 
    value === '' ? console.log('不发弹幕不聊天') : formatMsg(value, date);
    this.setData({
      chatValue: ''
    });
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
      firstNavTap: true,
      secondNavTap: false,
      thirdNavTap: false,
      firstPrizePanel: true,
      secondPrizePanel: false,
      thirdPrizePanel: false
    })
  },
  highModeAction: function(){
    this.setData({
      firstNavTap: false,
      secondNavTap: true,
      thirdNavTap: false,
      firstPrizePanel: false,
      secondPrizePanel: true,
      thirdPrizePanel: false
    })
  },
  barrageModeAction: function(){
    this.setData({
      firstNavTap: false,
      secondNavTap: false,
      thirdNavTap: true,
      firstPrizePanel: false,
      secondPrizePanel: false,
      thirdPrizePanel: true
    })
  },
  startTurboAwardAction: function(){
    console.log('开始抽奖')
    this.setData({
      prize_slide_autoplay: !this.data.prize_slide_autoplay
    })
  },
  startHighAction: function(){
    console.log('开始抽奖')
    this.setData({
      prize_slide_autoplay: !this.data.prize_slide_autoplay
    })
  },
  startBarrageAwardAction: function(){
    console.log('开始抽奖')
    this.setData({
      prize_slide_autoplay: !this.data.prize_slide_autoplay
    })
  },
  redirectAction: function(e){
    const URL = e.currentTarget.id
    if (URL) {
      wx.navigateTo({
        url: URL
      })
    }else{
      // 下载二维码
      console.log('下载二维码')
    }
  }
})
