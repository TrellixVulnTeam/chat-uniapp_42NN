(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chat/type/type"],{125:function(e,t,n){"use strict";(function(e){n(5);o(n(3));var t=o(n(126));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},126:function(e,t,n){"use strict";n.r(t);var o=n(127),r=n(129);for(var c in r)"default"!==c&&function(e){n.d(t,e,(function(){return r[e]}))}(c);n(131);var u,a=n(23),i=Object(a["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"2842d89e",null,!1,o["components"],u);i.options.__file="pages/chat/type/type.vue",t["default"]=i.exports},127:function(e,t,n){"use strict";n.r(t);var o=n(128);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},128:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return u})),n.d(t,"recyclableRender",(function(){return c})),n.d(t,"components",(function(){return o}));var r=function(){var e=this,t=e.$createElement;e._self._c},c=!1,u=[];r._withStripped=!0},129:function(e,t,n){"use strict";n.r(t);var o=n(130),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t["default"]=r.a},130:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{type:"",resultList:[]}},onLoad:function(t){var n=this;console.log("onLoad option:",t),this.type=t.name,console.log("onLoad keyword:",this.keyword);var o=e.database();o.collection("chat-type-item-header, chat-type-item-line").where("".concat(new RegExp(this.type,"i"),".test(type_code)")).field("type_code, demo_code, demo_name, line_no, line_content").get().then((function(e){n.resultList=e.result.data,console.log(n.resultList)})).catch((function(e){console.error(e)}))},methods:{longPress:function(e){n.setClipboardData({data:e,success:function(){n.showToast({title:"已经复制",icon:"none"})}})}}};t.default=o}).call(this,n(10)["default"],n(1)["default"])},131:function(e,t,n){"use strict";n.r(t);var o=n(132),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,(function(){return o[e]}))}(c);t["default"]=r.a},132:function(e,t,n){}},[[125,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/chat/type/type.js.map