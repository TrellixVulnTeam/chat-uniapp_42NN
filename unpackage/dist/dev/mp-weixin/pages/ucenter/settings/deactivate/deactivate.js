(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ucenter/settings/deactivate/deactivate"],{306:function(t,e,n){"use strict";(function(t){n(5);r(n(3));var e=r(n(307));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},307:function(t,e,n){"use strict";n.r(e);var r=n(308),c=n(310);for(var o in c)"default"!==o&&function(t){n.d(e,t,(function(){return c[t]}))}(o);n(312);var a,i=n(23),u=Object(i["default"])(c["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],a);u.options.__file="pages/ucenter/settings/deactivate/deactivate.vue",e["default"]=u.exports},308:function(t,e,n){"use strict";n.r(e);var r=n(309);n.d(e,"render",(function(){return r["render"]})),n.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(e,"components",(function(){return r["components"]}))},309:function(t,e,n){"use strict";var r;n.r(e),n.d(e,"render",(function(){return c})),n.d(e,"staticRenderFns",(function(){return a})),n.d(e,"recyclableRender",(function(){return o})),n.d(e,"components",(function(){return r}));var c=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$t("deactivate.nextStep")),r=t.$t("deactivate.cancelText");t.$mp.data=Object.assign({},{$root:{m0:n,m1:r}})},o=!1,a=[];c._withStripped=!0},310:function(t,e,n){"use strict";n.r(e);var r=n(311),c=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=c.a},311:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=n(18);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u={data:function(){return{}},onLoad:function(){t.setNavigationBarTitle({title:this.$t("deactivate.navigationBarTitle")})},methods:a(a({},(0,c.mapMutations)({logout:"user/logout"})),{},{cancel:function(){t.navigateBack()},nextStep:function(){var e=this;t.showModal({content:"已经仔细阅读注销提示，知晓可能带来的后果，并确认要注销",complete:function(n){n.confirm?r.callFunction({name:"uni-id-cf",data:{action:"closeAccount"},complete:function(n){console.log(n),0===n.result.code?(t.showToast({title:"注销成功"}),e.logout(),t.navigateTo({url:"/pages/ucenter/login-page/index/index"})):t.showToast({icon:"error",title:n.result.errMsg})}}):t.navigateBack()}})}})};e.default=u}).call(this,n(1)["default"],n(10)["default"])},312:function(t,e,n){"use strict";n.r(e);var r=n(313),c=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=c.a},313:function(t,e,n){}},[[306,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/ucenter/settings/deactivate/deactivate.js.map