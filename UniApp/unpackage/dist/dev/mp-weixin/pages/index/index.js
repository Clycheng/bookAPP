require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([0],[,,,,,,,,function(t,e,n){"use strict";var i=s(n(9)),o=s(n(10));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(o.default))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e;return a(e={data:{$root:{}},onLoad:function(e){var n=new s.default(t);this.$vm=n;var i=n.$root;i.__wxWebviewId__=this.__wxWebviewId__,i.$mp||(i.$mp={});var o=i.$mp;o.mpType="page",o.page=this,o.query=e,o.status="load",n.$mount()},handleProxy:function(t){return c(this).$handleProxyWithVue(t)},onShow:function(){var t=c(this);t.$mp.status="show",r(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=c(this);t.$mp.status="ready",r(t,"onReady")},onHide:function(){var t=c(this);t.$mp.status="hide",r(t,"onHide")},onUnload:function(){var t=c(this);r(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){r(c(this),"onPullDownRefresh")},onReachBottom:function(){r(c(this),"onReachBottom")},onPageScroll:function(t){r(c(this),"onPageScroll",t)},onTabItemTap:function(t){r(c(this),"onTabItemTap",t)}},"onPullDownRefresh",function(){r(c(this),"onPullDownRefresh")}),a(e,"onReachBottom",function(){r(c(this),"onReachBottom")}),a(e,"onShareAppMessage",t.onShareAppMessage?function(t){return r(c(this),"onShareAppMessage",t)}:null),a(e,"onPageScroll",function(t){r(c(this),"onPageScroll",t)}),a(e,"onTabItemTap",function(t){r(c(this),"onTabItemTap",t)}),a(e,"onNavigationBarButtonTap",function(t){r(c(this),"onNavigationBarButtonTap",t)}),a(e,"onBackPress",function(){return r(c(this),"onBackPress")}),a(e,"$getAppWebview",function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}),e};var i,o=n(1),s=(i=o)&&i.__esModule?i:{default:i};function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e,n){var i,o=t.$options[e];if("onError"===e&&o&&(o=[o]),o)for(var s=0,a=o.length;s<a;s++)try{i=o[s].call(t,n)}catch(n){handleError(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return r(t,e,n)}),i}function c(t){return t.$vm.$root}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(12),o=n.n(i),s=n(22),a=!1;var r=function(t){a||n(11)},c=n(0)(o.a,s.a,r,"data-v-7fe2a5c2",null);c.options.__file="..\\..\\..\\..\\..\\Documents\\HBuilderProjects\\bookAPP\\UniApp\\pages\\index\\index.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},function(t,e){},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=s(n(14)),o=s(n(18));function s(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{winWidth:"",winHeight:"",secHeight:"",drawerBlean:!1,menuBlean:!1,PageStartX:"",PageEndX:"",PageStratY:"",PageEndY:"",dayContent:{title:"",author:"",content:"",date:"",digest:""},HTitle:!1}},components:{uniIcon:i.default,uniDrawer:o.default},onLoad:function(e){if("devtools"===t.getSystemInfoSync().platform){console.log("运行在开发工具上");var n=this;wx.getSystemInfo({success:function(t){console.log(t.windowWidth),console.log(t.windowHeight),n.winHeight=t.windowHeight,n.winWidth=t.windowWidth,n.secHeight=t.windowHeight-40}})}else{n=this;wx.getSystemInfo({success:function(t){console.log(t.windowWidth),console.log(t.windowHeight),n.winHeight=t.windowHeight,n.winWidth=t.windowWidth,n.secHeight=t.windowHeight-40}})}n=this.dayContent;t.request({url:"https://interface.meiriyiwen.com/article/today?dev=1",dataType:"JSON",success:function(t){var e=t.data.data;n.author=e.author,n.content=e.content,n.digest=e.digest,n.title=e.title,n.date=e.date}})},methods:{qingqiu:function(){t.request({url:"https://interface.meiriyiwen.com/article/today?dev=1",dataType:"JSON",success:function(t){var e=t.data.data;e.content=e.content.replace(/\"/g,""),that.author=e.author,that.content=e.content,that.digest=e.digest,that.title=e.title,that.date=e.date}})},drwer:function(){this.menuBlean=!1,this.drawerBlean?this.drawerBlean&&(this.drawerBlean=!1):this.drawerBlean=!0,console.log("抽屉开关="+this.drawerBlean)},menu:function(){this.drawerBlean=!1,this.menuBlean?this.menuBlean=!1:this.menuBlean=!0,console.log("菜单="+this.menuBlean)},touchStrat:function(e){t.getSystemInfoSync().platform,this.PageStartX=e.clientX,this.PageStartY=e.clientY},touchMove:function(e){t.getSystemInfoSync().platform,this.PageEndX=e.clientX,this.PageEndY=e.clientY},touchEnd:function(t){if(this.menuBlean)this.menuBlean&&console.log(1);else if(this.PageStartX<100){var e=this.PageStartX-this.PageEndX;console.log("开始坐标："+this.PageStartX,"结束坐标："+this.PageEndX),console.log("cha:"+e),e<-100&&e!=this.PageStartX&&(this.menuBlean=!0)}else{if(!(this.winWidth-this.PageStartX<100))return!1;var n=this.PageStartX-this.PageEndX;n>100&&n!=this.PageStartX?this.drawerBlean=!0:n<100&&(this.drawerBlean=!1)}},srcTop:function(t){console.log(t),console.log("123131313")}},coll:function(){console.log(1)}}}).call(e,n(13).default)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return"function"==typeof t},o=/^on|^create|Sync$|Manager$|^pause/,s=["os","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],a=function(t){return(!o.test(t)||"createBLEConnection"===t)&&!~s.indexOf(t)},r=function(t){return function(){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(s.success)||i(s.fail)||i(s.complete)?t.apply(void 0,[s].concat(n)):new Promise(function(e,i){t.apply(void 0,[Object.assign({},s,{success:e,fail:i})].concat(n)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}).then(function(t){return[null,t]}).catch(function(t){return[t]})}},c=1e-4,l=750,u=!1,d=0,h=0;function f(t,e){var n,i,o,s;return 0===d&&(n=wx.getSystemInfoSync(),i=n.platform,o=n.pixelRatio,s=n.windowWidth,d=s,h=o,u="ios"===i),0===t?0:(t=t/l*(e||d),0===(t=Math.floor(t+c))?1!==h&&u?.5:1:t)}var p={oauth:["weixin"],share:["weixin"],payment:["wxpay"],push:["weixin"]};var v=Object.freeze({getProvider:function(t){var e=t.service,n=t.success,o=t.fail,s=t.complete,a=!1;p[e]?(a={errMsg:"getProvider:ok",service:e,provider:p[e]},i(n)&&n(a)):(a={errMsg:"getProvider:fail:服务["+e+"]不存在"},i(o)&&o(a)),i(s)&&s(a)},subscribePush:function(t){var e=t.fail,n=t.complete,o={errMsg:"subscribePush:fail:微信小程序不支持 subscribePush 方法"};i(e)&&e(o),i(n)&&n(o)},unsubscribePush:function(t){var e=t.fail,n=t.complete,o={errMsg:"unsubscribePush:fail:微信小程序不支持 unsubscribePush 方法"};i(e)&&e(o),i(n)&&n(o)},onPush:function(t){var e=t.fail,n=t.complete,o={errMsg:"onPush:fail:微信小程序不支持 onPush 方法"};i(e)&&e(o),i(n)&&n(o)},offPush:function(t){var e=t.fail,n=t.complete,o={errMsg:"offPush:fail:微信小程序不支持 offPush 方法"};i(e)&&e(o),i(n)&&n(o)},share:function(t){var e=t.fail,n=t.complete,o={errMsg:"share:fail:微信小程序不支持 share 方法"};i(e)&&e(o),i(n)&&n(o)}}),w={},g={os:{wx:!0}};"undefined"!=typeof Proxy?w=new Proxy({},{get:function(t,e){return g.hasOwnProperty(e)?g[e]:"upx2px"===e?f:v[e]?a(e)?r(v[e]):v[e]:wx.hasOwnProperty(e)?a(e)?r(wx[e]):wx[e]:void 0}}):(w.upx2px=f,Object.keys(g).forEach(function(t){w[t]=g[t]}),Object.keys(v).forEach(function(t){a(t)?w[t]=v[t]:w[t]=r(v[t])}),Object.keys(wx).forEach(function(t){wx.hasOwnProperty(t)&&(a(t)?w[t]=r(wx[t]):w[t]=wx[t])}));var m=w;e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(16),o=n.n(i),s=n(17),a=!1;var r=function(t){a||n(15)},c=n(0)(o.a,s.a,r,null,null);c.options.__file="..\\..\\..\\..\\..\\Documents\\HBuilderProjects\\bookAPP\\UniApp\\components\\uni-icon.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] uni-icon.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return this.size+"px"}},methods:{onClick:function(){this.$emit("click")}}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},attrs:{eventid:"8BX-0"},on:{click:function(e){t.onClick()}}})};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(20),o=n.n(i),s=n(21),a=!1;var r=function(t){a||n(19)},c=n(0)(o.a,s.a,r,null,null);c.options.__file="..\\..\\..\\..\\..\\Documents\\HBuilderProjects\\bookAPP\\UniApp\\components\\uni-drawer.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] uni-drawer.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},function(t,e){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o=n(14),s=(i=o)&&i.__esModule?i:{default:i};e.default={props:{visible:{type:Boolean,default:!1},mode:String,mask:{type:[Boolean,String],default:!0}},data:function(){return{rightMode:!1,catchtouchmove:!1,callIcon:"star"}},computed:{showMask:function(){return"true"===String(this.mask)}},components:{uniIcon:s.default},created:function(){this.rightMode="right"===this.mode,this.catchtouchmove=!0},methods:{close:function(){this.$emit("close")},coll:function(){console.log(this.callIcon),"star"==this.callIcon?this.callIcon="star-filled":"star-filled"==this.callIcon&&(this.callIcon="star")}}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-drawer",class:{"uni-drawer-visible":t.visible,"uni-drawer-right":t.rightMode},attrs:{catchtouchmove:t.catchtouchmove}},[t.showMask?n("view",{staticClass:"uni-drawer-mask",attrs:{eventid:"cOj-0"},on:{tap:t.close}}):t._e(),n("view",{staticClass:"uni-drawer-content"},[t._t("default",[n("view",{staticStyle:{padding:"10upx"}},[n("view",{staticClass:"uni-title"},[t._v("想要干哈？")]),n("view",{staticClass:"uni-list uni-common-mt"},[n("view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover",eventid:"7r7-1"},on:{click:t.coll}},[n("view",{staticClass:"uni-list-cell-navigate uni-navigate-right coll"},[t._v("收藏"),n("uni-icon",{attrs:{type:t.callIcon,size:"30",mpcomid:"dOT-0"}})],1)]),n("view",{staticClass:"uni-list-cell ",attrs:{"hover-class":"uni-list-cell-hover"}},[n("view",{staticClass:"uni-list-cell-navigate uni-navigate-right share"},[t._v("分享"),n("uni-icon",{attrs:{type:"paperplane",size:"30",mpcomid:"cSu-1"}})],1)]),n("view",{staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover"}},[n("view",{staticClass:"uni-list-cell-navigate uni-navigate-right coll"},[t._v("前一天"),n("uni-icon",{attrs:{type:"undo",size:"30",mpcomid:"lBj-2"}})],1)]),n("view",{staticClass:"uni-list-cell uni-list-cell-last",attrs:{"hover-class":"uni-list-cell-hover"}},[n("view",{staticClass:"uni-list-cell-navigate uni-navigate-right coll"},[t._v("随机"),n("uni-icon",{attrs:{type:"refresh",size:"30",mpcomid:"MAD-3"}})],1)])])])],{mpcomid:"tzd-4"})],2)])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{style:{height:t.winHeight+"px"},attrs:{id:"app"}},[n("button",{attrs:{eventid:"fOD-0"},on:{click:t.qingqiu}},[t._v("加载")]),n("view",{staticClass:"warp",style:{height:t.winHeight+"px"}},[n("view",{staticClass:"warp-child menu",class:t.menuBlean?"menu-active":""},[n("view",{staticClass:"menu-warp"},[n("ui",{attrs:{mpcomid:"h6o-3"}},[n("li",[n("uni-icon",{attrs:{type:"star",size:"17",mpcomid:"DHP-0"}}),t._v("我的收藏")],1),n("li",[n("uni-icon",{attrs:{type:"gear",size:"17",mpcomid:"0ed-1"}}),t._v("阅读设置")],1),n("li",[n("uni-icon",{attrs:{type:"chatbubble",size:"17",mpcomid:"Qm9-2"}}),t._v("给个好评")],1)],1)],1)]),n("view",{staticClass:"warp-child content",class:t.menuBlean?"content-active":""},[n("header",[n("view",{staticClass:"bars"},[n("uni-icon",{attrs:{type:"bars",color:"#333333",size:"30",eventid:"iR2-1",mpcomid:"Y85-4"},on:{click:t.menu}})],1),n("view",{staticClass:"title"},[t.HTitle?n("h3",[t._v(t._s(t.dayContent.title))]):t._e()],1),n("view",{staticClass:"more"},[n("uni-icon",{attrs:{type:"more",color:"#333333",size:"30",eventid:"FDi-2",mpcomid:"ViF-5"},on:{click:t.drwer}})],1)]),n("section",{style:{height:t.secHeight+"px"},attrs:{eventid:"154-4"},on:{touchstart:t.touchStrat,touchmove:t.touchMove,touchend:t.touchEnd}},[n("scroll-view",{style:{height:t.secHeight+"px"},attrs:{"scroll-y":"",eventid:"6RG-3"},on:{scrolltolower:t.srcTop}},[n("p",[t._v(t._s(t.dayContent.title))]),n("p",[t._v("—————— · ——————")]),n("p",{staticStyle:{color:"#8F8F94","text-align":"center"}},[t._v(t._s(t.dayContent.author))]),n("rich-text",{attrs:{nodes:t.dayContent.content,mpcomid:"bE4-6"}})],1)],1)],1),t.menuBlean?n("view",{staticClass:"content-top-mask",style:{height:t.winHeight+"px"},attrs:{eventid:"Tsp-5"},on:{click:t.menu}}):t._e(),n("view",{staticStyle:{clear:"both"}}),t.drawerBlean?n("view",{staticClass:"mask-warp",attrs:{eventid:"Eev-6"},on:{click:t.drwer}}):t._e(),n("uni-drawer",{attrs:{visible:t.drawerBlean,mode:"right",mpcomid:"elI-7"}})],1)],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o}],[8]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map