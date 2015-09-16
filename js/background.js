chrome.runtime.onMessageExternal.addListener(onMessage);
chrome.runtime.onMessage.addListener(onMessage);

function onMessage(request, sender, sendResponse) {
	console.log("Got Message: " + request);
	if (request.title == "download"){
		chrome.downloads.download({
			url: request.url,
			filename: request.name // Optional
		});
	}
}