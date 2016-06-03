chrome.runtime.onMessage.addListener(function(msg,sender){
	console.log(msg);
	console.log(sender);
	var blob=new Blob(['https://pic3.zhimg.com/585d17746_l.jpg'],{type:'image/*'});
	var url=URL.createObjectURL(blob);
	chrome.downloads.download(
		{
			url:url,
			// filename:'tttt',
			saveAs:false
		}, 
		function(){

		})
});