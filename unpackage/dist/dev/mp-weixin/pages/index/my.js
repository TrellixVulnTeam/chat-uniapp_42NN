(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/my"],{74:function(e,n,t){"use strict";(function(e){t(5);r(t(3));var n=r(t(75));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},75:function(e,n,t){"use strict";t.r(n);var r=t(76),o=t(78);for(var u in o)"default"!==u&&function(e){t.d(n,e,(function(){return o[e]}))}(u);t(81);var a,i=t(23),c=Object(i["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,"810f65fc",null,!1,r["components"],a);c.options.__file="pages/index/my.vue",n["default"]=c.exports},76:function(e,n,t){"use strict";t.r(n);var r=t(77);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},77:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return a})),t.d(n,"recyclableRender",(function(){return u})),t.d(n,"components",(function(){return r}));try{r={uAvatar:function(){return t.e("uni_modules/uview-ui/components/u-avatar/u-avatar").then(t.bind(null,353))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c},u=!1,a=[];o._withStripped=!0},78:function(e,n,t){"use strict";t.r(n);var r=t(79),o=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},79:function(e,n,t){"use strict";(function(e,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(11)),u=t(80);function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,o,u,a){try{var i=e[u](a),c=i.value}catch(s){return void t(s)}i.done?n(c):Promise.resolve(c).then(r,o)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var u=e.apply(n,t);function a(e){i(u,r,o,a,c,"next",e)}function c(e){i(u,r,o,a,c,"throw",e)}a(void 0)}))}}var s=e.database(),f=(s.command,{data:function(){return{userInfo:{},validDate:"",wechatNumber:""}},onLoad:function(){this.init()},onShow:function(){this.getWechatNumber()},methods:{init:function(){this.userInfo=r.getStorageSync("userInfo");var e=new Date,n=this.$formatter.addMonth(e,1);this.validDate=this.$formatter.timeFormat(n,"yyyy-mm-dd"),console.log("validDate:",this.validDate)},getWechatNumber:function(){var e=this;return c(o.default.mark((function n(){var t;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,s.collection("chat-config").where('config_type=="weixin" && item_code=="'+u.APP_OWNER+'" && enable=="Y"').get();case 2:t=n.sent,e.wechatNumber=t.result.data[0].item_content;case 4:case"end":return n.stop()}}),n)})))()},copy:function(){r.setClipboardData({data:this.wechatNumber,success:function(){r.showToast({title:"已经复制",icon:"none"})}})},jumpSuggestion:function(){r.navigateTo({url:"/pages/my/suggestion/suggestion"})}}});n.default=f}).call(this,t(10)["default"],t(1)["default"])},81:function(e,n,t){"use strict";t.r(n);var r=t(82),o=t.n(r);for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);n["default"]=o.a},82:function(e,n,t){}},[[74,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/my.js.map