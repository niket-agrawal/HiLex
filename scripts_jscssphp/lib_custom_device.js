var du = new DeviceUUID().parse(); 

const isTouch = du.isTouchScreen; //var8
const isTablet = du.isTablet; //var9
const device_lang = du.language; //var10
var window_res = du.resolution; 
window_res = window_res[0]+"_"+window_res[1]; //var11

const browser_res = screen.availWidth+'_'+screen.availHeight; //var12
const total_res = screen.width+'_'+screen.height; //var13
const color_depth = screen.colorDepth; //var14
try{ orient = screen.orientation.type + ' (angle-'+screen.orientation.angle+')'; } //var15
catch{ orient = 'MacOS_disabled';} 

deviceDetails = {_resTotal:total_res, _resAvail:browser_res, _colDepth:color_depth, _orient: orient, _deviceLang:device_lang, _isTouch:isTouch, _isTablet:isTablet, _windowRes:window_res};

tomerge = deviceDetails
//tomerge = JSON.stringify(deviceDetails);
console.log(tomerge)
//tomerge = tomerge.replaceAll(",",";").replaceAll('"','').replaceAll(":","=");
//tomerge = tomerge.slice(1, tomerge.length-1);