(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/uni-agree/uni-agree"],{222:function(n,e,t){"use strict";(function(n){t(5);r(t(3));var e=r(t(223));function r(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t(1)["createPage"])},223:function(n,e,t){"use strict";t.r(e);var r=t(224),u=t(226);for(var o in u)"default"!==o&&function(n){t.d(e,n,(function(){return u[n]}))}(o);t(228),t(230);var a,c=t(23),i=Object(c["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],a);i.options.__file="pages/uni-agree/uni-agree.nvue",e["default"]=i.exports},224:function(n,e,t){"use strict";t.r(e);var r=t(225);t.d(e,"render",(function(){return r["render"]})),t.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(e,"components",(function(){return r["components"]}))},225:function(n,e,t){"use strict";var r;t.r(e),t.d(e,"render",(function(){return u})),t.d(e,"staticRenderFns",(function(){return a})),t.d(e,"recyclableRender",(function(){return o})),t.d(e,"components",(function(){return r}));var u=function(){var n=this,e=n.$createElement;n._self._c},o=!1,a=[];u._withStripped=!0},226:function(n,e,t){"use strict";t.r(e);var r=t(227),u=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,(function(){return r[n]}))}(o);e["default"]=u.a},227:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(t(15));function u(n){return n&&n.__esModule?n:{default:n}}var o=r.default.about,a={data:function(){return{}},onLoad:function(){this._canBack=!1},onBackPress:function(){return!this._canBack},methods:{openprotocol:function(e){n.navigateTo({url:"/pages/common/webview/webview?url="+o.agreements[0].url})},openPrivacyPolicy:function(e){n.navigateTo({url:"/pages/common/webview/webview?url="+o.agreements[1].url})},agree:function(e){n.setStorageSync("userprotocol",1);this._canBack=!0,setTimeout((function(){n.navigateBack({animationDuration:0})}),100)},disagree:function(){}}};e.default=a}).call(this,t(1)["default"])},228:function(n,e,t){"use strict";t.r(e);var r=t(229),u=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,(function(){return r[n]}))}(o);e["default"]=u.a},229:function(n,e,t){},230:function(n,e,t){"use strict";t.r(e);var r=t(231),u=t.n(r);for(var o in r)"default"!==o&&function(n){t.d(e,n,(function(){return r[n]}))}(o);e["default"]=u.a},231:function(n,e,t){}},[[222,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/uni-agree/uni-agree.js.map