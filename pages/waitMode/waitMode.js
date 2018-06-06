const app = getApp()

Page({
  data: {
    contentHeight: 0,
    marryList: [
                  {marryName: '新郎姓名'},
                  {marryName: '新娘姓名'},
                  {marryName: '婚礼策划'},
                  {marryName: '婚礼司仪'}
                 ],
    birthList: [
                  {birthName: '寿星姓名'},
                  {birthName: '举办方'},
                  {birthName: '生日策划'},
                  {birthName: '祝寿司仪'}
                 ],
    businessList: [
                  {businessName: '会议主题'},
                  {businessName: '特邀嘉宾'},
                  {businessName: '会议主持'}
                 ],
    marryMainTitleList: [
                     {background: '../../src/image/hunyan_1_pic@2x.png'},
                     {background: '../../src/image/hunyan_2_pic@2x.png'},
                     {background: '../../src/image/hunyan_3_pic@2x.png'},
                     {background: '../../src/image/hunyan_4_pic@2x.png'},
                     {background: '../../src/image/hunyan_5_pic@2x.png'},
                     {background: '../../src/image/hunyan_6_pic@2x.png'},
                     {background: '../../src/image/hunyan_7_pic@2x.png'},
                     {background: '../../src/image/hunyan_8_pic@2x.png'},
                     {background: '../../src/image/hunyan_9_pic@2x.png'},
                     {background: '../../src/image/hunyan_10_pic@2x.png'},
                     {background: '../../src/image/hunyan_11_pic@2x.png'},
                     {background: '../../src/image/hunyan_12_pic@2x.png'}
                   ],
    birthMainTitleList: [
                     {background: '../../src/image/shengri_1_pic@2x.png'},
                     {background: '../../src/image/shengri_2_pic@2x.png'},
                     {background: '../../src/image/shengri_3_pic@2x.png'},
                     {background: '../../src/image/shengri_4_pic@2x.png'},
                     {background: '../../src/image/shengri_5_pic@2x.png'},
                     {background: '../../src/image/shengri_6_pic@2x.png'},
                     {background: '../../src/image/shengri_7_pic@2x.png'},
                     {background: '../../src/image/shengri_8_pic@2x.png'},
                     {background: '../../src/image/shengri_9_pic@2x.png'},
                     {background: '../../src/image/shengri_10_pic@2x.png'},
                     {background: '../../src/image/shengri_11_pic@2x.png'},
                     {background: '../../src/image/shengri_12_pic@2x.png'}
                   ],
    businessMainTitleList: [
                     {background: '../../src/image/shangwu_1_pic@2x.png'},
                     {background: '../../src/image/shangwu_2_pic@2x.png'},
                     {background: '../../src/image/shangwu_3_pic@2x.png'},
                     {background: '../../src/image/shangwu_4_pic@2x.png'},
                     {background: '../../src/image/shangwu_5_pic@2x.png'},
                     {background: '../../src/image/shangwu_6_pic@2x.png'},
                     {background: '../../src/image/shangwu_7_pic@2x.png'},
                     {background: '../../src/image/shangwu_8_pic@2x.png'},
                     {background: '../../src/image/shangwu_9_pic@2x.png'},
                     {background: '../../src/image/shangwu_10_pic@2x.png'},
                     {background: '../../src/image/shangwu_11_pic@2x.png'},
                     {background: '../../src/image/shangwu_12_pic@2x.png'}
                   ],
    isMarry: true,
    isBirthday: false,
    isBusiness: false,
    delete: false,
    showInfo: true,
    showMainTitle: true
  },
  onLoad: function(){
    wx.setNavigationBarTitle({
      title: '候场模式'
    })
    const screenHeight = app.globalData.windowHeight
    const contentH = screenHeight - 63
    this.setData({
      contentHeight: contentH
    })
  },
  chooseMode: function(e){
    // console.log(e)
    const selector = e.currentTarget.id
    switch(selector){
      case 'marry':
        this.setData({
          isMarry: true,
          isBirthday: false,
          isBusiness: false,
          // 重置参数
          showInfo: true,
          showMainTitle: true
        })
        break;
      case 'birthday':
        this.setData({
          isMarry: false,
          isBirthday: true,
          isBusiness: false,
          // 重置参数
          showInfo: true,
          showMainTitle: true
        })
        break;
      case 'business':
        this.setData({
          isMarry: false,
          isBirthday: false,
          isBusiness: true,
          // 重置参数
          showInfo: true,
          showMainTitle: true
        })
        break;
    }
    this.setData({
    })
  },
  changeInfoState: function(){
    console.log('设置信息栏状态')
    const infoState = this.data.showInfo
    if (infoState) {
      this.setData({
        showInfo: false
      })
    }else{
      this.setData({
        showInfo: true
      })
    }
  },
  changeMainTitleState: function(){
    console.log('设置背景栏状态')
    const mainTitleState = this.data.showMainTitle
    if (mainTitleState) {
      this.setData({
        showMainTitle: false
      })
    }else{
      this.setData({
        showMainTitle: true
      })
    }
  },
  selectAction: function(e){
    console.log(e)
  },
  deleteAction: function(){
    console.log('删除')
  }
})
