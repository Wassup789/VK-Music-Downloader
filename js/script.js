var s = document.createElement("script");
s.src = chrome.extension.getURL("js/main.js");
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);
document.body.setAttribute("data-vkmd-id", chrome.runtime.id);