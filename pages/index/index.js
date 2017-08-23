var app = getApp()
Page({
  data: {
    shoufenqinName:'',
    shoufenqinBloo: '',//保存第二次点击的list的ID
    did:''//保存第一次点击的list的ID
  },
  //手风琴
  shoufenqin(e){
    var listid = e.currentTarget.dataset.listid;//获取wxml当前点击的list标签上的自定义属性data-listid
    this.data.did=listid;//保留当前点击的list的ID号
    if (this.data.shoufenqinBloo == this.data.did){//如果当前list已经展开（list两次点击了同一个list，list关闭）
      this.setData({
        shoufenqinName: 0,//返回一个所有list都不满足的ID号（那么所有的list都将关闭）
        shoufenqinBloo:''//list已经关闭掉，所以记录点击的当前list就应该清空掉
      })
    }else{//第一次点击（list展开）
      this.setData({
        shoufenqinName: listid,//获取到点击list的id号（传到了wxml页面，当前list展开）
        shoufenqinBloo: listid//list展开后返回当前点击的list的ID号
      })
    }
  }
})
