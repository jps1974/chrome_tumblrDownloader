chrome.runtime.onMessage.addListener(function(msg,sender){
	console.log(msg);
	console.log(sender);
	var source;
	for(var i=0;i<3;i++){
		source=msg.sourceArr[i];
		chrome.downloads.download({
			url:source,
			filename:'./'+i+'.mp4',
			saveAs:false
		})
	}
	
});
console.log('ddd')