const app = getApp();

const initialData = () => {
  const date = new Date();
  console.log(date.getFullYear(), date.getMonth());
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const yearList = [{year: 2015}, {year: 2016}, {year: 2017}, {year: 2018}];
  const monthList = [
                      {month: 1},
                      {month: 2},
                      {month: 3},
                      {month: 4},
                      {month: 5},
                      {month: 6},
                      {month: 7},
                      {month: 8},
                      {month: 9},
                      {month: 10},
                      {month: 11},
                      {month: 12}
                    ];
  let [_yearIndex, _monthIndex] = [0, 0];
  for(let yearKey in yearList){
    yearKey = parseInt(yearKey);
    if (yearList[yearKey].year == year) {
      _yearIndex = yearKey;
      break;
    }
  }
  for(let monthKey in monthList){
    monthKey = parseInt(monthKey);
    if (monthList[monthKey].month == month) {
      _monthIndex = monthKey;
      break;
    }
  }
  return {year, month, yearList, monthList, _yearIndex, _monthIndex};
};

const setDate = (_this) => {
  const [year, month] = [_this.data.selectorYear, _this.data.selectorMonth];
  _this.setData({
    recordYear: year,
    recordMonth: month,
    show: false
  });
};

const setTempDate = (_this, _index, _type) => {
  const year = 0;
  const month = 0;
  const yearList = _this.data.dateYearList;
  const monthList = _this.data.dateMonthList;
  // console.log(year, monthList);
  switch(_type){
    case 'year':
      // console.log(yearList[_index].year);
      _this.setData({
        selectorYear: yearList[_index].year
      });
      break;
    case 'month':
      // console.log(monthList[_index].month);
      _this.setData({
        selectorMonth: monthList[_index].month
      });
      break;
  }
};

const initMonth = (_this) => {
  console.log('重置月份下标');
  _this.setData({
    monthIndex: 0
  });
};

const setMonthIndex = (_this, _index) => {
  console.log('设置月份下标');
  _this.setData({
    monthIndex: _index
  });
};

Page({
  data: {
    recordYear: 0,
    recordMonth: 0,
    recordList: [
                  {visitorHead: '../../src/image/head01.png', visitorNickName: '用户1', prizeLabel: '弹幕', prizeDate :'4月25日', prizeTime: '17:51:30', prizeName: '888元'},
                  {visitorHead: '../../src/image/head02.jpg', visitorNickName: '用户2', prizeLabel: '弹幕', prizeDate :'4月25日', prizeTime: '18:09:20', prizeName: '888元'},
                  {visitorHead: '../../src/image/head01.png', visitorNickName: '用户3', prizeLabel: '弹幕', prizeDate :'4月25日', prizeTime: '12:55:26', prizeName: '888元'},
                  {visitorHead: '../../src/image/head02.jpg', visitorNickName: '用户4', prizeLabel: '弹幕', prizeDate :'4月25日', prizeTime: '14:51:30', prizeName: '888元'},
                  {visitorHead: '../../src/image/head01.png', visitorNickName: '用户5', prizeLabel: '弹幕', prizeDate :'4月25日', prizeTime: '19:51:30', prizeName: '888元'},
                  {visitorHead: '../../src/image/head02.jpg', visitorNickName: '用户6', prizeLabel: '弹幕', prizeDate :'4月25日', prizeTime: '21:51:30', prizeName: '888元'},
                ],
    selectorYear: null,
    selectorMonth: null,
    dateYearList: [],
    dateMonthList: [],
    yearIndex: 0,
    monthIndex: 0,
    show: false
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '中奖纪录'
    })
    const data = initialData()
    this.setData({
      recordYear: data.year,
      recordMonth: data.month,
      selectorYear: data.year,
      selectorMonth: data.month,
      dateYearList: data.yearList,
      dateMonthList: data.monthList,
      yearIndex: data._yearIndex,
      monthIndex: data._monthIndex
    });
  },
  dateSelectAction: function(){
    console.log('选择日期')
    this.setData({
      show: true
    })
  },
  chooseYear: function(e){
    console.log(e)
    const currentIndex = e.detail.current
    const dateType = 'year'
    setTempDate(this, currentIndex, dateType)
    initMonth(this)
  },
  chooseMonth: function(e){
    console.log(e)
    const currentIndex = e.detail.current
    const dateType = 'month'
    setTempDate(this, currentIndex, dateType)
    setMonthIndex(this, currentIndex)
  },
  cancelAction: function(){
    console.log('取消')
    this.setData({
      show: false
    })
  },
  sureAction: function(){
    console.log('获取数据')
    setDate(this)
  },
})
