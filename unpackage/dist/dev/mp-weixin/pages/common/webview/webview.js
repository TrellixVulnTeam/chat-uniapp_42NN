(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/webview/webview"],{275:function(e,n,t){"use strict";(function(e){t(5);r(t(3));var n=r(t(276));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},276:function(e,n,t){"use strict";t.r(n);var r=t(277),u=t(279);for(var o in u)"default"!==o&&function(e){t.d(n,e,(function(){return u[e]}))}(o);var c,i=t(23),a=Object(i["default"])(u["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],c);a.options.__file="pages/common/webview/webview.vue",n["default"]=a.exports},277:function(e,n,t){"use strict";t.r(n);var r=t(278);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},278:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return u})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return o})),t.d(n,"components",(function(){return r}));var u=function(){var e=this,n=e.$createElement;e._self._c},o=!1,c=[];u._withStripped=!0},279:function(e,n,t){"use strict";t.r(n);var r=t(280),u=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);n["default"]=u.a},280:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLoad:function(n){var t=n.url,r=n.title;"http"!=t.substring(0,4)?(e.showModal({title:"错误",content:'不是一个有效的网站链接,"'+t+'"',showCancel:!1,confirmText:"知道了",complete:function(){e.navigateBack()}}),r="页面路径错误"):(console.log(t,r),this.url=t),r&&e.setNavigationBarTitle({title:r})},data:function(){return{url:null}}};n.default=t}).call(this,t(1)["default"])}},[[275,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/common/webview/webview.js.map