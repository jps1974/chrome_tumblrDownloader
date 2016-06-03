var source=document.querySelectorAll('video source');
var sourceArr=[];
for(var i=0;i<source.length;i++){
	sourceArr.push(source[i].getAttribute('src'));
}
chrome.runtime.sendMessage({type:'download',sourceArr:sourceArr});
