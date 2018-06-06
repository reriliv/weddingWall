const setAwardItem = function(key, value){
  console.log(key, value);
};

const decreaseAwardTemp = (_this) => {};

const increaseAwardTemp = (_this) => {};

const increaseAward = (_this) => {
  // console.log(_this);
  const _awardList = _this.data.awardList;
  const _awardListTemp = _this.data.awardListTemp;
  console.log(_awardList, _awardListTemp);

  const num = _awardList.length + 1;
  _awardList.push({title: `奖项${num}`, name: '', explain: '', peopleNumber: null, number: num-1});
  _this.setData({
    awardList: _awardList
  });
};

//获取应用实例
const app = getApp()

Page({
  data: {
    contentHeight: 0,
    awardIconList: [
                     {iconSrc: '../../src/image/award_golden_icon.png'},
                     {iconSrc: '../../src/image/award_silver_icon.png'},
                     {iconSrc: '../../src/image/award_cuprum_icon.png'},
                     {iconSrc: '../../src/image/award_lucky_icon.png'},
                     {iconSrc: '../../src/image/award_participation_icon.png'}
    				       ],
    awardList: [
                  {title: '奖项1', name: '', explain: '', peopleNumber: null, number: 0},
                ],
    awardListTemp: []
  },
  //事件处理函数
  onLoad: function(){
    wx.setNavigationBarTitle({
      title: '奖项设置'
    })
    const screenHeight = app.globalData.windowHeight
    console.log(screenHeight)
    const contentH = screenHeight - 39
    this.setData({
      contentHeight: contentH
    })
  },
  awardNameInput: function(e){
    // console.log('奖项名', e)
    const inputValue = e.detail.value
    /*if (inputValue) {
      console.log(inputValue, 'input')
    }else{
      console.log('empty')
      // 
    }*/
    setAwardItem('name', inputValue)
  },
  awardExplainInput: function(e){
    console.log('奖品描述', e)
  },
  awardPeopleNumberInput: function(e){
    console.log('奖品数量', e)
  },
  saveAwardSetting: function(){
    console.log('保存奖项设置')
  },
  increaseAwardAction: function(){
    console.log('新增奖项', this.data.awardList)
    increaseAward(this)
  },
  copyAwardAction: function(){
    console.log('复制奖项到弹幕抽奖')
  }
})
