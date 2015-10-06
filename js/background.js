chrome.runtime.onMessageExternal.addListener(onMessage);

function onMessage(request, sender, sendResponse) {
	if (request.title == "download"){
		chrome.downloads.download({
			url: request.url,
			filename: request.name // Optional
		});
	}
}