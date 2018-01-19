// var util = require('../../more/more.js')
Page({
  data: {
    logs: "",
    array: [1, 2, 3, 4, 5],
    view: 'APP',
    staffA: {firstName: 'Hulk', lastName: 'Hu'},
    staffB: {firstName: 'Shang', lastName: 'You'},
    staffC: {firstName: 'Gideon', lastName: 'Lin'}
  },
  onLoad: function () {
    this.setData({
      logs:"初始数据"
    })
    wx.request({
//		  url: 'http://test.qironghome.com/api/index.php/pay/recharge',
		  url: 'http://localhost/features.php',
//		  method:'POST',
		  method:'GET',
//		  data: {
//		    token:'uB7UAxDhyHClXfZiKTmkp6ShYU41etPvpjvdnSRuV4I1SrBmTlSP5zoOtetdO9O5',//	token	是	[string]		
//				terminalNo: 3,	
//				money: '0.01',	//金额[string]
//				type: 1			//支付类型
//		  },
		  header: {
		      'content-type': 'application/json' // 默认值
		  },
		  success: function(res) {
		    console.log(res.data)
		  }
		})
  },
  clickText:function(){
  	this.setData({
      logs:"我更改了"
    })
  },
  tiaoZhuan: function() {
    wx.navigateTo({
      url: '../moban/moban'
    })
  },
  zhifu: function() {
  	wx.requestPayment({
		  'timeStamp': '1490840662',
		  'nonceStr': '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
		  'package': 'prepay_id=wx2017033010242291fcfe0db70013231072',
		  'signType': 'MD5',
		  'paySign': 'stringA="appid=wxd930ea5d5a258f4f&body=test&device_info=1000&mch_id=10000100&nonce_str=ibuaiVcKdpRxkhJA";',
		  'success':function(res){
		  	
		  },
	   	'fail':function(res){
	   		
	   	}
		})
  }
})