(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ucenter/login-page/register/register"],{281:function(e,n,t){"use strict";(function(e){t(5);r(t(3));var n=r(t(282));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},282:function(e,n,t){"use strict";t.r(n);var r=t(283),o=t(285);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);t(288);var u,s=t(23),a=Object(s["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],u);a.options.__file="pages/ucenter/login-page/register/register.vue",n["default"]=a.exports},283:function(e,n,t){"use strict";t.r(n);var r=t(284);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},284:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return u})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return r}));try{r={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,557))},uniFormsItem:function(){return t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item").then(t.bind(null,565))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,490))},uniAgreements:function(){return t.e("components/uni-agreements/uni-agreements").then(t.bind(null,465))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement,t=(e._self._c,e.$t("register.usernamePlaceholder")),r=e.$t("register.nicknamePlaceholder"),o=e.$t("register.passwordDigitsPlaceholder"),i=e.$t("register.passwordAgain"),u=e.$t("register.registerAndLogin");e._isMounted||(e.e0=function(n){e.agree=n}),e.$mp.data=Object.assign({},{$root:{m0:t,m1:r,m2:o,m3:i,m4:u}})},i=!1,u=[];o._withStripped=!0},285:function(e,n,t){"use strict";t.r(n);var r=t(286),o=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=o.a},286:function(e,n,t){"use strict";(function(e,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=u(t(287)),i=u(t(255));function u(e){return e&&e.__esModule?e:{default:e}}var s={mixins:[i.default],data:function(){return{formData:{username:"",nickname:"",password:"",pwd2:""},rules:o.default,agree:!1}},onReady:function(){this.$refs.form.setRules(this.rules)},onLoad:function(){e.setNavigationBarTitle({title:this.$t("register.navigationBarTitle")})},methods:{submit:function(){var n=this;if(!this.agree)return e.showToast({title:this.$t("common").noAgree,icon:"none"});e.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){n.submitForm(e)})).catch((function(e){console.log(e)})).finally((function(){e.hideLoading()}))},submitForm:function(n){var t=this;r.callFunction({name:"uni-id-cf",data:{action:"register",params:n},success:function(n){var r=n.result;console.log(r),0===r.code?t.loginSuccess(r):e.showModal({content:r.msg,showCancel:!1})}})}}};n.default=s}).call(this,t(1)["default"],t(10)["default"])},288:function(e,n,t){"use strict";t.r(n);var r=t(289),o=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=o.a},289:function(e,n,t){}},[[281,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/ucenter/login-page/register/register.js.map