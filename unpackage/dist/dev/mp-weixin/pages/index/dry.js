(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/dry"],{67:function(e,n,t){"use strict";(function(e){t(5);r(t(3));var n=r(t(68));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},68:function(e,n,t){"use strict";t.r(n);var r=t(69),c=t(71);for(var i in c)"default"!==i&&function(e){t.d(n,e,(function(){return c[e]}))}(i);t(73);var u,o=t(23),a=Object(o["default"])(c["default"],r["render"],r["staticRenderFns"],!1,null,"4b877fc5",null,!1,r["components"],u);a.options.__file="pages/index/dry.vue",n["default"]=a.exports},69:function(e,n,t){"use strict";t.r(n);var r=t(70);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},70:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return c})),t.d(n,"staticRenderFns",(function(){return u})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return r}));var c=function(){var e=this,n=e.$createElement;e._self._c},i=!1,u=[];c._withStripped=!0},71:function(e,n,t){"use strict";t.r(n);var r=t(72),c=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=c.a},72:function(e,n,t){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={data:function(){return{typeList:[]}},onLoad:function(){this.init()},methods:{init:function(){var n=this,t=e.database(),r=t.collection("dry-type").field("code, name").getTemp(),c=t.collection("dry-article").field("_id, article_type, title").getTemp();t.collection(r,c).get().then((function(e){console.log(e),n.typeList=e.result.data})).catch((function(e){console.error(e)}))},jump:function(e){t.navigateTo({url:"/pages/dry/article?articleId="+e})}}};n.default=r}).call(this,t(10)["default"],t(1)["default"])},73:function(e,n,t){"use strict";t.r(n);var r=t(74),c=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=c.a},74:function(e,n,t){}},[[67,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/dry.js.map