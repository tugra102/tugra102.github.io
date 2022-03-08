 // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

    // Internet Explorer 6-11
    var isIE = false || !!document.documentMode;

    // Edge 20+
    //var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1 - 79
    var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

    // Edge (based on chromium) detection
    var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;
    
    var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveOrOpenBlob || !!navigator.msSaveBlob);
    
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    var aCheck = [];
    aCheck['isFirefox'] = isFirefox;
    aCheck['isOpera'] = isOpera;
    aCheck['isIE'] = isIE;
    aCheck['isEdge'] = isEdge;
    aCheck['isChrome'] = isChrome;
    aCheck['isEdgeChromium'] = isEdgeChromium;
    aCheck['isSafari'] = isSafari;
    aCheck['isBlink'] = isBlink;
    
    Check.forEach(function(item, index, arr2) {
        console.log(this);
    });
    
    var sBrowser;
    for (var key in aCheck) {
        if(aCheck[key] == true) {
            sBrowser = key;
        }
//        console.log(key, aCheck[key]);
    }
    

    var sys = {};
    
    sys.MOBILE_BROWSER  = 'mobile';
    sys.DESKTOP_BROWSER = 'desktop';
    
    var ua = window.navigator.userAgent.toLowerCase();
    
    sys.isMobile = ua.indexOf('mobile') !== -1 || ua.indexOf('android') !== -1;
    console.log("sys.isMobile :::: "+sys.isMobile);
    
    sys.isNative = ua.indexOf('app_hll') !== -1 ;
    console.log("sys.isNative :::: "+sys.isNative);
    
    sys.platform = sys.platform = sys.isMobile ? sys.MOBILE_BROWSER : sys.DESKTOP_BROWSER;
    console.log("sys.platform :::: "+sys.platform);


var output = 'Detecting browsers by ducktyping:<hr>';
output += 'isFirefox: ' + isFirefox + '<br>';
output += 'isChrome: ' + isChrome + '<br>';
output += 'isSafari: ' + isSafari + '<br>';
output += 'isOpera: ' + isOpera + '<br>';
output += 'isIE: ' + isIE + '<br>';
output += 'isEdge: ' + isEdge + '<br>';
output += 'isEdgeChromium: ' + isEdgeChromium + '<br>';
output += 'isBlink: ' + isBlink + '<br>';

console.log(output);
document.body.innerHTML = output;