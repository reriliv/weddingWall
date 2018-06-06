const app = getApp()

const getCutText = (path) => {
  const [firstPath, , secondPath] = path.split('_');
  console.log(firstPath, secondPath);
  return String(firstPath+'_'+secondPath);
};

Page({
  data: {
    guideSwiper: {
                    vertical: false,
                    duration: 500,
                    margin: '123rpx',
                    index: 0,
                  },
    guideCardList: [
                      {guideCardImg: '../../src/image/guide_temp_birthday.jpg'},
                      {guideCardImg: '../../src/image/guide_temp_business.jpg'},
                      {guideCardImg: '../../src/image/guide_temp_wedding.jpg'},
                    ],
    guideEntityList: [
                      {CardImg: '../../src/image/guide_entity_birthday_01.jpg', EntityImg: '../../src/image/guide_entity_birthday_02.jpg'},
                      {CardImg: '../../src/image/guide_entity_business_01.jpg', EntityImg: '../../src/image/guide_entity_business_02.jpg'},
                      {CardImg: '../../src/image/guide_entity_wedding_01.jpg', EntityImg: '../../src/image/guide_entity_wedding_02.jpg'},
                    ],
    downImageSource: '../../src/image/guide_birthday.jpg'
  },
  //事件处理函数
  onLoad: function(){
    console.log(app)
    wx.setNavigationBarTitle({
      title: '迎宾引导'
    })
  },
  changeCardAction: function(e){
    console.log(e.detail.current)
    const cardIndex = e.detail.current
    const swiper = this.data.guideSwiper
    swiper.index = cardIndex
    this.setData({
      guideSwiper: swiper
    })
  },
  previewImg: function(e){
    let imagePath = e.target.id
    let imageUrl = getCutText(imagePath)

    wx.previewImage({
      current: '',
      urls: [imageUrl]
    })
  },
  downLoadCard: function(){
    console.log('下载原图')
    const downloadPath = this.data.downImageSource
    wx.downloadFile({
      url: downloadPath,
      success: function(res){
        console.log(res)
      }
    })
  }
})