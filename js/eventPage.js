chrome.runtime.onMessage.addListener(function(msg,sender){
	console.log(msg);
	console.log(sender);
	chrome.downloads.download(
		{
			url:'https://pic3.zhimg.com/585d17746_l.jpg',
			filename:'./tttt.jpg',
			saveAs:false
		}, 
		function(){

		})
});