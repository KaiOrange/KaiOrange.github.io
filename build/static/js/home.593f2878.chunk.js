webpackJsonp([1],{151:function(t,e,i){"use strict";function n(){return r.a.createElement("div",null,r.a.createElement(a.a,{className:"parallax-container-write-code"},r.a.createElement("div",{"data-depth":"0.3"},r.a.createElement("div",null)),r.a.createElement("div",{"data-depth":"0.6"},r.a.createElement("div",null)),r.a.createElement("div",{"data-depth":"0.9"},r.a.createElement("div",null)),r.a.createElement("div",{"data-depth":"1.2"},r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement(h.a,{color:"success",onClick:function(){console.log("\u8fd9\u91cc\u662f\u5f69\u86cb")}},"What this?"))),r.a.createElement("div",{"data-depth":"1.5"},r.a.createElement(l.a,null))))}Object.defineProperty(e,"__esModule",{value:!0});var o=i(0),r=i.n(o),s=i(187),a=(i.n(s),i(188)),l=i(190),h=i(21);e.default=n},187:function(t,e,i){t.exports=i.p+"static/media/sky.e9f74daf.jpg"},188:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=i(0),a=i.n(s),l=i(189),h=i.n(l),u=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),c=function(t){function e(){n(this,e);var t=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.state={},t}return r(e,t),u(e,[{key:"componentDidMount",value:function(){this.parallax=new h.a(this.sceneEl,{pointerEvents:!0})}},{key:"componentWillUnmount",value:function(){this.parallax&&(this.parallax.destroy(),this.parallax=null)}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{ref:function(e){t.sceneEl=e},className:this.props.className},this.props.children)}}]),e}(a.a.Component);e.a=c},189:function(t,e,i){(function(e){var i,i;!function(e){t.exports=e()}(function(){return function t(e,n,o){function r(a,l){if(!n[a]){if(!e[a]){var h="function"==typeof i&&i;if(!l&&h)return i(a,!0);if(s)return s(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[a]={exports:{}};e[a][0].call(c.exports,function(t){var i=e[a][1][t];return r(i||t)},c,c.exports,t,e,n,o)}return n[a].exports}for(var s="function"==typeof i&&i,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(t,e,i){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},i=0;i<10;i++)e["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var i,a,l=n(t),h=1;h<arguments.length;h++){i=Object(arguments[h]);for(var u in i)r.call(i,u)&&(l[u]=i[u]);if(o){a=o(i);for(var c=0;c<a.length;c++)s.call(i,a[c])&&(l[a[c]]=i[a[c]])}}return l}},{}],2:[function(t,e,i){(function(t){(function(){var i,n,o,r,s,a;"undefined"!==typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!==typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(i()-s)/1e6},n=t.hrtime,i=function(){var t;return t=n(),1e9*t[0]+t[1]},r=i(),a=1e9*t.uptime(),s=r-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,t("_process"))},{_process:3}],3:[function(t,e,i){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function s(t){if(d===clearTimeout)return clearTimeout(t);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function a(){y&&f&&(y=!1,f.length?m=f.concat(m):v=-1,m.length&&l())}function l(){if(!y){var t=r(a);y=!0;for(var e=m.length;e;){for(f=m,m=[];++v<e;)f&&f[v].run();v=-1,e=m.length}f=null,y=!1,s(t)}}function h(t,e){this.fun=t,this.array=e}function u(){}var c,d,p=e.exports={};!function(){try{c="function"===typeof setTimeout?setTimeout:n}catch(t){c=n}try{d="function"===typeof clearTimeout?clearTimeout:o}catch(t){d=o}}();var f,m=[],y=!1,v=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)e[i-1]=arguments[i];m.push(new h(t,e)),1!==m.length||y||r(l)},h.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.prependListener=u,p.prependOnceListener=u,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},{}],4:[function(t,i,n){(function(e){for(var n=t("performance-now"),o="undefined"===typeof window?e:window,r=["moz","webkit"],s="AnimationFrame",a=o["request"+s],l=o["cancel"+s]||o["cancelRequest"+s],h=0;!a&&h<r.length;h++)a=o[r[h]+"Request"+s],l=o[r[h]+"Cancel"+s]||o[r[h]+"CancelRequest"+s];if(!a||!l){var u=0,c=0,d=[];a=function(t){if(0===d.length){var e=n(),i=Math.max(0,1e3/60-(e-u));u=i+e,setTimeout(function(){var t=d.slice(0);d.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(u)}catch(t){setTimeout(function(){throw t},0)}},Math.round(i))}return d.push({handle:++c,callback:t,cancelled:!1}),c},l=function(t){for(var e=0;e<d.length;e++)d[e].handle===t&&(d[e].cancelled=!0)}}i.exports=function(t){return a.call(o,t)},i.exports.cancel=function(){l.apply(o,arguments)},i.exports.polyfill=function(){o.requestAnimationFrame=a,o.cancelAnimationFrame=l}}).call(this,"undefined"!==typeof e?e:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{})},{"performance-now":2}],5:[function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=t("raf"),s=t("object-assign"),a={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(t,e,i){return e<i?t<e?e:t>i?i:t:t<i?i:t>e?e:t},data:function(t,e){return a.deserialize(t.getAttribute("data-"+e))},deserialize:function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},camelCase:function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},accelerate:function(t){a.css(t,"transform","translate3d(0,0,0) rotate(0.0001deg)"),a.css(t,"transform-style","preserve-3d"),a.css(t,"backface-visibility","hidden")},transformSupport:function(t){for(var e=document.createElement("div"),i=!1,n=null,o=!1,r=null,s=null,l=0,h=a.vendors.length;l<h;l++)if(null!==a.vendors[l]?(r=a.vendors[l][0]+"transform",s=a.vendors[l][1]+"Transform"):(r="transform",s="transform"),void 0!==e.style[s]){i=!0;break}switch(t){case"2D":o=i;break;case"3D":if(i){var u=document.body||document.createElement("body"),c=document.documentElement,d=c.style.overflow,p=!1;document.body||(p=!0,c.style.overflow="hidden",c.appendChild(u),u.style.overflow="hidden",u.style.background=""),u.appendChild(e),e.style[s]="translate3d(1px,1px,1px)",n=window.getComputedStyle(e).getPropertyValue(r),o=void 0!==n&&n.length>0&&"none"!==n,c.style.overflow=d,u.removeChild(e),p&&(u.removeAttribute("style"),u.parentNode.removeChild(u))}}return o},css:function(t,e,i){var n=a.propertyCache[e];if(!n)for(var o=0,r=a.vendors.length;o<r;o++)if(n=null!==a.vendors[o]?a.camelCase(a.vendors[o][1]+"-"+e):e,void 0!==t.style[n]){a.propertyCache[e]=n;break}t.style[n]=i}},l={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},h=function(){function t(e,i){n(this,t),this.element=e;var o={calibrateX:a.data(this.element,"calibrate-x"),calibrateY:a.data(this.element,"calibrate-y"),invertX:a.data(this.element,"invert-x"),invertY:a.data(this.element,"invert-y"),limitX:a.data(this.element,"limit-x"),limitY:a.data(this.element,"limit-y"),scalarX:a.data(this.element,"scalar-x"),scalarY:a.data(this.element,"scalar-y"),frictionX:a.data(this.element,"friction-x"),frictionY:a.data(this.element,"friction-y"),originX:a.data(this.element,"origin-x"),originY:a.data(this.element,"origin-y"),pointerEvents:a.data(this.element,"pointer-events"),precision:a.data(this.element,"precision"),relativeInput:a.data(this.element,"relative-input"),clipRelativeInput:a.data(this.element,"clip-relative-input"),hoverOnly:a.data(this.element,"hover-only"),inputElement:document.querySelector(a.data(this.element,"input-element")),selector:a.data(this.element,"selector")};for(var r in o)null===o[r]&&delete o[r];s(this,l,o,i),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return o(t,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=a.transformSupport("2D"),this.transform3DSupport=a.transformSupport("3D")),this.transform3DSupport&&a.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var t=0;t<this.layers.length;t++){var e=this.layers[t];this.transform3DSupport&&a.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var i=a.data(e,"depth")||0;this.depthsX.push(a.data(e,"depth-x")||i),this.depthsY.push(a.data(e,"depth-y")||i)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=r(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),r.cancel(this.raf))}},{key:"calibrate",value:function(t,e){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===e?this.calibrateY:e}},{key:"invert",value:function(t,e){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===e?this.invertY:e}},{key:"friction",value:function(t,e){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===e?this.frictionY:e}},{key:"scalar",value:function(t,e){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===e?this.scalarY:e}},{key:"limit",value:function(t,e){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===e?this.limitY:e}},{key:"origin",value:function(t,e){this.originX=void 0===t?this.originX:t,this.originY=void 0===e?this.originY:e}},{key:"setInputElement",value:function(t){this.inputElement=t,this.updateDimensions()}},{key:"setPosition",value:function(t,e,i){e=e.toFixed(this.precision)+"px",i=i.toFixed(this.precision)+"px",this.transform3DSupport?a.css(t,"transform","translate3d("+e+","+i+",0)"):this.transform2DSupport?a.css(t,"transform","translate("+e+","+i+")"):(t.style.left=e,t.style.top=i)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var t=this.inputX-this.calibrationX,e=this.inputY-this.calibrationY;(Math.abs(t)>this.calibrationThreshold||Math.abs(e)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?e:this.inputY,this.motionY=this.calibrateY?t:this.inputX):(this.motionX=this.calibrateX?t:this.inputX,this.motionY=this.calibrateY?e:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=a.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=a.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var i=0;i<this.layers.length;i++){var n=this.layers[i],o=this.depthsX[i],s=this.depthsY[i],l=this.velocityX*(o*(this.invertX?-1:1)),h=this.velocityY*(s*(this.invertY?-1:1));this.setPosition(n,l,h)}this.raf=r(this.onAnimationFrame)}},{key:"rotate",value:function(t,e){var i=(t||0)/30,n=(e||0)/30,o=this.windowHeight>this.windowWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=i,this.calibrationY=n),this.inputX=i,this.inputY=n}},{key:"onDeviceOrientation",value:function(t){var e=t.beta,i=t.gamma;null!==e&&null!==i&&(this.orientationStatus=1,this.rotate(e,i))}},{key:"onDeviceMotion",value:function(t){var e=t.rotationRate.beta,i=t.rotationRate.gamma;null!==e&&null!==i&&(this.motionStatus=1,this.rotate(e,i))}},{key:"onMouseMove",value:function(t){var e=t.clientX,i=t.clientY;if(this.hoverOnly&&(e<this.elementPositionX||e>this.elementPositionX+this.elementWidth||i<this.elementPositionY||i>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(e=Math.max(e,this.elementPositionX),e=Math.min(e,this.elementPositionX+this.elementWidth),i=Math.max(i,this.elementPositionY),i=Math.min(i,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(e-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(i-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(e-this.windowCenterX)/this.windowRadiusX,this.inputY=(i-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var t=0;t<this.layers.length;t++)this.layers[t].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),t}();e.exports=h},{"object-assign":1,raf:4}]},{},[5])(5)})}).call(e,i(4))},190:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var s=i(0),a=i.n(s),l=i(191),h=(i.n(l),i(193)),u=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),c=function(t){function e(){return n(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return r(e,t),u(e,[{key:"componentDidMount",value:function(){var t=[{type:"text",text:"class Man"},{type:"wait",time:900},{type:"delete",num:3},{type:"text",text:"Guider {"},{type:"br"},{type:"text",text:'    constructor(name = "") {'},{type:"br"},{type:"text",text:"        this.name = name;"},{type:"br"},{type:"text",text:"     }"},{type:"br"},{type:"text",text:"}"},{type:"wait",time:100},{type:"delete",num:1},{type:"text",text:"    sayHello() {"},{type:"br"},{type:"text",text:"        console.log(`Hello! I'm ${this.name}.`);"},{type:"br"},{type:"text",text:"    }"},{type:"br"},{type:"text",text:"}"},{type:"br"},{type:"text",text:'let guider = new Guider("World");'},{type:"delete",num:8},{type:"text",text:'Bob"'},{type:"delete",num:4},{type:"text",text:'Orange");'},{type:"br"},{type:"text",text:"guider.sayHello();"},{type:"br"}];new h.a(this.el,t,{speed:200}).once("end",function(){console.log("Hello! I'm Orange.")})}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"auto-type-container code-editor",ref:function(e){return t.el=e}})}}]),e}(a.a.Component);e.a=c},191:function(t,e,i){var n=i(192);"string"===typeof n&&(n=[[t.i,n,""]]);var o={};o.transform=void 0;i(149)(n,o);n.locals&&(t.exports=n.locals)},192:function(t,e,i){e=t.exports=i(148)(!0),e.push([t.i,'@-webkit-keyframes blink{0%{opacity:0}to{opacity:1}}@keyframes blink{0%{opacity:0}to{opacity:1}}.auto-type-container:after{content:"|";-webkit-animation:blink 1s infinite;animation:blink 1s infinite}.code-editor{color:#fff;background:#000;padding:.8rem 1rem}',"",{version:3,sources:["D:/codes/orangehomepage/src/components/AutoType/index.css"],names:[],mappings:"AAAA,yBACE,GACE,SAAW,CAAE,AACf,GACE,SAAW,CAAE,CAAE,AAEnB,iBACE,GACE,SAAW,CAAE,AACf,GACE,SAAW,CAAE,CAAE,AAEnB,2BACE,YAAa,AACb,oCAAyC,AACjC,2BAAiC,CAAE,AAE7C,aACE,WAAY,AACZ,gBAAiB,AACjB,kBAAoB,CAAE",file:"index.css",sourcesContent:["@-webkit-keyframes blink {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes blink {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.auto-type-container::after {\n  content: '|';\n  -webkit-animation: blink 1000ms infinite;\n          animation: blink 1000ms infinite; }\n\n.code-editor {\n  color: #fff;\n  background: #000;\n  padding: .8rem 1rem; }\n"],sourceRoot:""}])},193:function(t,e,i){"use strict";(function(t){function n(t,e,i){o.a.call(this),this.element="string"===typeof t?document.querySelector(t):t,this.arr=e,this.textArr=[],this.options=a.extend({},this.constructor.defaultOptions,i),this.index=0,this.handle()}var o=i(194),r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=window.self,a=("object"==("undefined"===typeof s?"undefined":r(s))&&s.self==s&&s||"object"==("undefined"===typeof t?"undefined":r(t))&&t.global,{extend:function(t){for(var e=1,i=arguments.length;e<i;e++)for(var n in arguments[e])arguments[e].hasOwnProperty(n)&&(t[n]=arguments[e][n]);return t}});n.VERSION="1.0.0",n.defaultOptions={speed:200,type:""};var l=n.prototype=new o.a;l.constructor=n,l.handle=function(){var t=this.arr[this.index];if(!t)return this.render(!0),void this.emit("end");switch(t.type){case"text":this.handleText(t);break;case"wait":this.handleWait(t);break;case"delete":this.handleDelete(t);break;case"br":this.handleBr(t);break;case"img":this.handleImg(t);break;default:this.handlePlainText(t)}},l.handleText=function(t){var e=t.text.split("");this.type(e,0,t.time?t.time:this.options.speed)},l.type=function(t,e,i){e<t.length?(this.textArr.push(t[e].replace(/ /g,"&nbsp;")),this.render(),setTimeout(this.type.bind(this),i,t,++e,i)):(this.index++,this.handle())},l.render=function(t){this.element.innerHTML=this.textArr.join("")+(t?"":this.options.type),this.element.scrollTop=this.element.scrollHeight},l.handleWait=function(t){this.index++,setTimeout(this.handle.bind(this),t.time?t.time:this.options.speed)},l.handleDelete=function(t){this.delete(t.num,t.time?t.time:this.options.speed)},l.delete=function(t,e){t>0?(this.textArr.pop(),this.render(),setTimeout(this.delete.bind(this),e,--t,e)):this.next()},l.handleBr=function(t){this.textArr.push("<br />"),this.index++,setTimeout(this.handle.bind(this),t.time?t.time:this.options.speed)},l.handleImg=function(t){var e=["<img "];for(var i in t)e.push(i+'="'+t[i]+'" ');e.push(" />"),this.textArr.push(e.join("")),this.render();var n=this;setTimeout(function(){n.next()},t.time?t.time:this.options.speed)},l.handlePlainText=function(t){this.textArr.push(t),this.render();var e=this;setTimeout(function(){e.next()},t.time?t.time:this.options.speed)},l.next=function(){this.index++,this.handle()},e.a=n}).call(e,i(4))},194:function(t,e,i){"use strict";(function(t){function i(t){return"function"===typeof t||!(!t||"object"!==("undefined"===typeof t?"undefined":r(t)))&&i(t.listener)}function n(t,e){var i=-1;e="object"===("undefined"===typeof e?"undefined":r(e))?e.listener:e;for(var n=0,o=t.length;n<o;n++)if(t[n].listener===e){i=n;break}return i}function o(){this.__events={}}var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=window.self;"object"==("undefined"===typeof s?"undefined":r(s))&&s.self==s&&s||"object"==("undefined"===typeof t?"undefined":r(t))&&t.global;o.VERSION="1.0.0";var a=o.prototype;a.on=function(t,e){if(t&&e){if(!i(e))throw new TypeError("listener must be a function");var o=this.__events,s=o[t]=o[t]||[],a="object"===("undefined"===typeof e?"undefined":r(e));return-1===n(s,e)&&s.push(a?e:{listener:e,once:!1}),this}},a.once=function(t,e){return this.on(t,{listener:e,once:!0})},a.off=function(t,e){var i=this.__events[t];if(i){for(var n,o=0,r=i.length;o<r;o++)if(i[o]&&i[o].listener===e){n=o;break}return"undefined"!==typeof n&&i.splice(n,1,null),this}},a.emit=function(t,e){var i=this.__events[t];if(i){for(var n=0;n<i.length;n++){var o=i[n];o&&(o.listener.apply(this,e||[]),o.once&&this.off(t,o.listener))}return this}},a.allOff=function(t){t?this.__events[t]=[]:this.__events={}},e.a=o}).call(e,i(4))}});
//# sourceMappingURL=home.593f2878.chunk.js.map