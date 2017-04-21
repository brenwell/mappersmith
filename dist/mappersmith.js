/*!
 * Mappersmith 2.3.1
 * https://github.com/tulios/mappersmith
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.mappersmith=t():e.mappersmith=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(module,exports,__webpack_require__){"use strict";function toQueryString(e){return isPlainObject(e)?validKeys(e).map(function(t){return buildRecursive(t,e[t])}).join("&").replace(R20,"+"):e}function performanceNow(){return hasProcessHrtime()?(getNanoSeconds()-loadTime)/1e6:performance.now()}function parseResponseHeaders(e){var t={};if(!e)return t;for(var r=e.split("\r\n"),n=0;n<r.length;n++){var o=r[n],s=o.indexOf(": ");if(s>0){var i=o.substring(0,s).toLowerCase(),a=o.substring(s+2).trim();t[i]=a}}return t}function lowerCaseObjectKeys(e){return Object.keys(e).reduce(function(t,r){return t[r.toLowerCase()]=e[r],t},{})}function isPlainObject(e){return"[object Object]"===toString.call(e)&&Object.getPrototypeOf(e)===Object.getPrototypeOf({})}var _typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":_typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":"undefined"==typeof e?"undefined":_typeof2(e)};exports.toQueryString=toQueryString,exports.performanceNow=performanceNow,exports.parseResponseHeaders=parseResponseHeaders,exports.lowerCaseObjectKeys=lowerCaseObjectKeys,exports.isPlainObject=isPlainObject,"undefined"!=typeof window&&null!==window&&(window.performance||(window.performance={}),performance.now=function(){return performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow||function(){return(new Date).getTime()}}());var _process=void 0,getNanoSeconds=void 0,loadTime=void 0;try{_process=eval('typeof process === "object" ? process : undefined')}catch(e){}var hasProcessHrtime=function(){return"undefined"!=typeof _process&&null!==_process&&_process.hrtime};hasProcessHrtime()&&(getNanoSeconds=function(){var e=_process.hrtime();return 1e9*e[0]+e[1]},loadTime=getNanoSeconds());var R20=/%20/g,validKeys=function(e){return Object.keys(e).filter(function(t){return void 0!==e[t]&&null!==e[t]})},buildRecursive=function e(t,r,n){n=n||"";var o=Array.isArray(r),s="object"===("undefined"==typeof r?"undefined":_typeof(r));return o||s?o?r.map(function(r){return e(t,r,n+"[]")}).join("&"):validKeys(r).map(function(o){return e(t,r[o],n+"["+o+"]")}).join("&"):encodeURIComponent(t+n)+"="+encodeURIComponent(r)},hasOwnProperty=Object.prototype.hasOwnProperty,assign=exports.assign=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},toString=Object.prototype.toString,CHARS="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",btoa=exports.btoa=function(e){for(var t,r,n="",o=CHARS,s=String(e),i=0;s.charAt(0|i)||(o="=",i%1);n+=o.charAt(63&t>>8-i%1*8)){if(r=s.charCodeAt(i+=.75),r>255)throw new Error("[Mappersmith] 'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");t=t<<8|r}return n}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return new i.default(e,function(){return a.gateway}).build()}Object.defineProperty(t,"__esModule",{value:!0}),t.configs=void 0,t.default=o;var s=r(6),i=n(s),a=t.configs={Promise:"function"==typeof Promise?Promise:null,fetch:"function"==typeof fetch?fetch:null,gateway:null,gatewayConfigs:{emulateHTTP:!1,XHR:{withCredentials:!1,configure:null},Fetch:{credentials:"omit"}}}},function(e,t,r){"use strict";function n(e){this.host=e.host,this.path=e.path,this.method=e.method||"get",this.headers=e.headers,this.params=e.params,this.bodyAttr=e.bodyAttr||"body",this.headersAttr=e.headersAttr||"headers",this.authAttr=e.authAttr||"auth",this.timeoutAttr=e.timeoutAttr||"timeout"}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,r){"use strict";function n(e,t,r,n){this.originalRequest=e,this.responseStatus=t,this.responseData=void 0!==r?r:null,this.responseHeaders=n||{},this.timeElapsed=null}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0);n.prototype={request:function(){return this.originalRequest},status:function(){return 1223===this.responseStatus?204:this.responseStatus},success:function(){var e=this.status();return e>=200&&e<400},headers:function(){return(0,o.lowerCaseObjectKeys)(this.responseHeaders)},header:function(e){return this.headers()[e.toLowerCase()]},rawData:function(){return this.responseData},data:function e(){var e=this.responseData;if(this.isContentTypeJSON())try{e=JSON.parse(this.responseData)}catch(e){}return e},isContentTypeJSON:function(){return/application\/json/.test(this.headers()["content-type"])},enhance:function(e){return new n(this.request(),e.status||this.status(),e.rawData||this.rawData(),(0,o.assign)({},this.headers(),e.headers))}},t.default=n},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){i.default.apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0});var s=r(7),i=n(s),a=r(3),u=n(a),c=r(0),f=window.btoa||c.btoa;o.prototype=i.default.extends({get:function(){var e=this.createXHR();e.open("get",this.request.url(),!0),this.setHeaders(e,{}),this.configureTimeout(e),e.send()},post:function(){this.performRequest("post")},put:function(){this.performRequest("put")},patch:function(){this.performRequest("patch")},delete:function(){this.performRequest("delete")},configureTimeout:function(e){var t=this;this.canceled=!1,this.timer=null;var r=this.request.timeout();r&&(e.timeout=r,e.addEventListener("timeout",function(){t.canceled=!0,clearTimeout(t.timer),t.dispatchClientError("Timeout ("+r+"ms)")}),this.timer=setTimeout(function(){t.canceled=!0,t.dispatchClientError("Timeout ("+r+"ms)")},r+1))},configureCallbacks:function(e){var t=this;e.addEventListener("load",function(){t.canceled||(clearTimeout(t.timer),t.dispatchResponse(t.createResponse(e)))}),e.addEventListener("error",function(){t.canceled||(clearTimeout(t.timer),t.dispatchClientError("Network error"))});var r=this.options().XHR;r.withCredentials&&(e.withCredentials=!0),r.configure&&r.configure(e)},performRequest:function(e){var t=this.shouldEmulateHTTP()?"post":e,r=this.createXHR();r.open(t,this.request.url(),!0);var n={},o=this.prepareBody(e,n);this.setHeaders(r,n),this.configureTimeout(r);var s=[];o&&s.push(o),r.send.apply(r,s)},createResponse:function(e){var t=e.status,r=e.responseText,n=(0,c.parseResponseHeaders)(e.getAllResponseHeaders());return new u.default(this.request,t,r,n)},setHeaders:function(e,t){var r=this.request.auth();if(r){var n=r.username||"",o=r.password||"";t.authorization="Basic "+f(n+":"+o)}var s=(0,c.assign)(t,this.request.headers());Object.keys(s).forEach(function(t){e.setRequestHeader(t,s[t])})},createXHR:function(){var e=new XMLHttpRequest;return this.configureCallbacks(e),e}}),t.default=o},function(e,t){},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){if(!e)throw new Error("[Mappersmith] invalid manifest ("+e+")");if(!t||!t())throw new Error("[Mappersmith] gateway class not configured (configs.gateway)");this.manifest=new a.default(e),this.GatewayClassFactory=t}Object.defineProperty(t,"__esModule",{value:!0});var i=r(8),a=n(i),u=r(2),c=(n(u),r(9)),f=n(c),d=r(0);s.prototype={build:function(){var e=this,t={_manifest:this.manifest};return this.manifest.eachResource(function(r,n){t[r]=e.buildResource(r,n)}),t},buildResource:function(e,t){var r=this;return t.reduce(function(t,n){return(0,d.assign)(t,o({},n.name,function(t){var o=new f.default(n.descriptor,t);return r.invokeMiddlewares(e,n.name,o)}))},{})},invokeMiddlewares:function(e,t,r){var n=this.manifest.createMiddlewares({resourceName:e,resourceMethod:t}),o=n.reduce(function(e,t){return t.request(e)},r),s=this.GatewayClassFactory(),i=function(){return new s(o).call()},a=n.reduce(function(e,t){return function(){return t.response(e)}},i);return a()}},t.default=s},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){this.request=e,this.successCallback=function(){},this.failCallback=function(){}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(0),i=r(1),a=r(3),u=n(a);o.extends=function(e){return(0,s.assign)({},o.prototype,e)},o.prototype={options:function(){return i.configs.gatewayConfigs},shouldEmulateHTTP:function(){return this.options().emulateHTTP&&/^(delete|put|patch)/i.test(this.request.method())},call:function(){var e=this,t=arguments,r=(0,s.performanceNow)();return new i.configs.Promise(function(n,o){e.successCallback=function(e){e.timeElapsed=(0,s.performanceNow)()-r,n(e)},e.failCallback=function(e){e.timeElapsed=(0,s.performanceNow)()-r,o(e)};try{e[e.request.method()].apply(e,t)}catch(t){e.dispatchClientError(t.message)}})},dispatchResponse:function(e){e.success()?this.successCallback(e):this.failCallback(e)},dispatchClientError:function(e){this.failCallback(new u.default(this.request,400,e))},prepareBody:function(e,t){var r=this.request.body();this.shouldEmulateHTTP()&&(r=r||{},(0,s.isPlainObject)(r)&&(r._method=e),t["x-http-method-override"]=e);var n=(0,s.toQueryString)(r);return n&&(0,s.isPlainObject)(r)&&(t["content-type"]="application/x-www-form-urlencoded;charset=utf-8"),n}},t.default=o},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){this.host=e.host,this.resources=e.resources||{},this.middlewares=e.middlewares||[]}Object.defineProperty(t,"__esModule",{value:!0});var s=r(2),i=n(s),a=r(0);o.prototype={eachResource:function(e){var t=this;Object.keys(this.resources).forEach(function(r){var n=t.eachMethod(r,function(e){return{name:e,descriptor:t.createMethodDescriptor(r,e)}});e(r,n)})},eachMethod:function(e,t){return Object.keys(this.resources[e]).map(function(e){return t(e)})},createMethodDescriptor:function(e,t){var r=this.resources[e][t];if(!r||!r.path)throw new Error('[Mappersmith] path is undefined for resource "'+e+'" method "'+t+'"');return new i.default((0,a.assign)({host:this.host},r))},createMiddlewares:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=function(t){return(0,a.assign)({request:function(e){return e},response:function(e){return e()}},t(e))};return this.middlewares.map(function(e){return t(e)})}},t.default=o},function(e,t,r){"use strict";function n(e,t){this.methodDescriptor=e,this.requestParams=t||{}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),s=new RegExp("{([^}]+)}");n.prototype={params:function e(){var t=this,e=(0,o.assign)({},this.methodDescriptor.params,this.requestParams),r=function(e){return e!==t.methodDescriptor.headersAttr&&e!==t.methodDescriptor.bodyAttr&&e!==t.methodDescriptor.authAttr&&e!==t.methodDescriptor.timeoutAttr};return Object.keys(e).reduce(function(t,n){return r(n)&&(t[n]=e[n]),t},{})},method:function(){return this.methodDescriptor.method.toLowerCase()},host:function(){return(this.methodDescriptor.host||"").replace(/\/$/,"")},path:function e(){var e=this.methodDescriptor.path,t=this.methodDescriptor;t.headersAttr,t.bodyAttr;"/"!==this.methodDescriptor.path[0]&&(e="/"+this.methodDescriptor.path);var r=this.params();Object.keys(r).forEach(function(t){var n=r[t],o="{"+t+"}";new RegExp(o).test(e)&&(e=e.replace("{"+t+"}",n),delete r[t])});var n=e.match(s);if(n)throw new Error("[Mappersmith] required parameter missing ("+n[1]+'), "'+e+'" cannot be resolved');var i=(0,o.toQueryString)(r);return 0!==i.length&&(e+="?"+i),e},url:function(){return""+this.host()+this.path()},headers:function(){return(0,o.lowerCaseObjectKeys)((0,o.assign)({},this.methodDescriptor.headers,this.requestParams[this.methodDescriptor.headersAttr]))},body:function(){return this.requestParams[this.methodDescriptor.bodyAttr]},auth:function(){return this.requestParams[this.methodDescriptor.authAttr]},timeout:function(){return this.requestParams[this.methodDescriptor.timeoutAttr]},enhance:function(e){var t=this.methodDescriptor.headersAttr,r=this.methodDescriptor.bodyAttr,s=this.methodDescriptor.authAttr,i=this.methodDescriptor.timeoutAttr,a=(0,o.assign)({},this.requestParams,e.params);return a[t]=(0,o.assign)({},this.requestParams[t],e.headers),e.body&&(a[r]=e.body),e.auth&&(a[s]=e.auth),e.timeout&&(a[i]=e.timeout),new n(this.methodDescriptor,a)}},t.default=n},function(module,exports,__webpack_require__){"use strict";var lib=__webpack_require__(1),_process,defaultGateway;try{_process=eval('typeof process === "object" ? process : undefined')}catch(e){}"undefined"!=typeof XMLHttpRequest?defaultGateway=__webpack_require__(4).default:"undefined"!=typeof _process&&(defaultGateway=__webpack_require__(5).default),lib.configs.gateway=defaultGateway,module.exports=lib}])});
//# sourceMappingURL=mappersmith.map