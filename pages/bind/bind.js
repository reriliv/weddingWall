const CountTime = (_this, time) => {
  let totalTime = time;
  _this.setData({
    identifyDisabled: true,
    getIdentifyAction: '重新获取',
    countingTime: true,
    reSendTime: totalTime
  });
  totalTime -= 1;
  let countAction = setInterval(function(){
    _this.setData({
      reSendTime: totalTime
    });
    totalTime -= 1;
    if (totalTime < 0) {
      clearInterval(countAction);
      _this.setData({
        identifyDisabled: false,
        reSendTime: 0,
        getIdentifyAction: '获取校验码',
        countingTime: false
      });
    }
  }, 1000);
};

//对应的bind.js
Page({
  data:{
    acountImageSrc: '../../src/image/acount.png',
    acountName: '用户1昵称',
    phoneIcon: '../../src/image/phone_icon.png',
    guardIcon: '../../src/image/guard_icon.png',
    isPhoneTips: false,
    phoneTips: '该号码未注册或错误',
    isIdentifyTips: false,
    identifyTips: '校验码错误',
    isInputPhone: false,
    isInputIndentify: false,
    canClick: false,
    getIdentifyAction: '获取校验码',
    identifyDisabled: false,
    reSendTime: 0,
    countingTime: false,
    successBinding: true,
    failureBinding: false,
    closeBtnImg: '../../src/image/close_button.png',
    successImageSrc: '../../src/image/sucess_bind_loading.png',
    failureImageSrc: '../../src/image/failure_bind.jpg',
    showShade: true
  },
  onLoad: function(){
    wx.setNavigationBarTitle({
      title: '同步手机账号'
    })
  },
  phoneAction: function(e){
    console.log(e.detail.value!='')
    if(e.detail.value){
      this.setData({
        isInputPhone: true
      })
    }else{
      this.setData({
        isInputPhone: false
      })
    }
    const phoneFlag = this.data.isInputPhone
    const identifyFlag = this.data.isInputIndentify
    if (phoneFlag && identifyFlag) {
      this.setData({
        canClick: true
      })
    }else{
      this.setData({
        canClick: false
      })
    }
  },
  guardAction: function(e){
    console.log(e)
    if(e.detail.value){
      this.setData({
        isInputIndentify: true
      })
    }else{
      this.setData({
        isInputIndentify: false
      })
    }
    const phoneFlag = this.data.isInputPhone
    const identifyFlag = this.data.isInputIndentify
    if (phoneFlag && identifyFlag) {
      this.setData({
        canClick: true
      })
    }else{
      this.setData({
        canClick: false
      })
    }
  },
  identifyAction: function(e){
    console.log('发送验证码', e)
    CountTime(this, 60)
  },
  closeFailurePanel: function(){
    console.log('关闭')
    this.setData({
      failureBinding: false,

    })
  }
})