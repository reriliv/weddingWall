const app = getApp()

Page({
  data: {
    imageHeight: 0,
    uploadBtnImg: '../../src/image/add_icon@2x.png',
    contentHeight: 0,
    footerHeight: 0,
    imageList: [
                {src: '../../src/image/hunyan_1_pic@2x.png'},
                {src: '../../src/image/hunyan_2_pic@2x.png'},
                {src: '../../src/image/hunyan_3_pic@2x.png'}
               ],
    chooseMode: false,
    modeName: '旋转木马',
    modeArrow: '../../src/image/select_icon@2x.png',
    isManage: false,
    isDelete: false,
    isDisable: false
  },
  onLoad: function(){
    wx.setNavigationBarTitle({
      title: '上传相册'
    })
    const screenWidth = app.globalData.windowWidth
    const screenHeight = app.globalData.windowHeight
    // console.log(screenWidth)
    this.setData({
      imageHeight: screenWidth / 4,
      contentHeight: screenHeight
    })
  },
  changeMode: function(){
    // console.log('改变模式')
    let flag = this.data.chooseMode
    if (flag) {
      this.setData({
        chooseMode: false
      })
    }else{
      this.setData({
        chooseMode: true
      })
    }
  },
  selectMode: function(e){
    let modeList = {mode01: ' 旋转木马 ', mode02: ' 梦幻百叶 ', mode03: ' 3D魔方 '}
    let id = e.currentTarget.id
    // console.log(e, '选中')
    this.setData({
      modeName: modeList[id],
      chooseMode: false
    })
  },
  uploadImage: function(){
    console.log('上传图片')
    const imgList = this.data.imageList
    const _this = this
    wx.chooseImage({
      success: function(res){
        let imgPath = res.tempFilePaths[0]
        imgList.push({src: imgPath})
        console.log(imgList)
        _this.setData({
          imageList: imgList
        })
      }
    })
  },
  manageAlbum: function(){
    const isShow = this.data.showPanel
    if (isShow) {
      this.setData({
        showPanel: false
      })
    }else{
      this.setData({
        showPanel: true
      })
    }
  },
  toSynchro: function(){
    console.log('同步账号')
    this.setData({
      showPanel: false
    })
    wx.navigateTo({
      url: '../bind/bind'
    })
  },
  toDelete: function(){
    this.setData({
      isManage: true,
      uploadBtnImg: '../../src/image/add_icon_disable@2x.png',
      isDisable: true,
      showPanel: false
    })
  },
  deleteAction: function(){
    this.setData({
      isManage: false,
      uploadBtnImg: '../../src/image/add_icon@2x.png',
      isDisable: false
    })
  },
  cancelAction: function(){
    this.setData({
      isManage: false,
      uploadBtnImg: '../../src/image/add_icon@2x.png',
      isDisable: false
    })
  }
})
