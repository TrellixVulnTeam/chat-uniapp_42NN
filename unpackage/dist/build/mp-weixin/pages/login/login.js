(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"25da":function(e,n,t){"use strict";t.r(n);var r=t("cf0a"),o=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=o.a},"49d9":function(e,n,t){"use strict";var r=t("df9f"),o=t.n(r);o.a},"95ac":function(e,n,t){"use strict";t.r(n);var r=t("edee"),o=t("25da");for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t("49d9");var i,u=t("f0c5"),c=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,"81f64580",null,!1,r["a"],i);n["default"]=c.exports},cf0a:function(e,n,t){"use strict";(function(e,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(r,o)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function u(e){i(a,r,o,u,c,"next",e)}function c(e){i(a,r,o,u,c,"throw",e)}u(void 0)}))}}var c=e.database(),s=(c.command,{data:function(){return{userInfo:{memberId:"",nickName:"",gender:"",avatarUrl:"",validDate:"",openid:""},invitationInfo:{userId:"",openId:"",invitationCode:"",invitationCount:0,invitationCodeStatus:"Y",invitationCodeType:"MEMBER"}}},methods:{getUserInfo:function(){var e=this;return u(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r.showModal({title:"温馨提示",content:"授权微信登录后才能正常使用小程序功能",success:function(n){n.confirm?r.getUserProfile({desc:"获取你的昵称、头像、地区及性别",success:function(){var n=u(o.default.mark((function n(t){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(t),e.userInfo.nickName=t.userInfo.nickName,e.userInfo.avatarUrl=t.userInfo.avatarUrl,e.userInfo.gender=t.userInfo.gender,n.next=6,e.getMemberId();case 6:return e.userInfo.memberId=n.sent,e.userInfo.memberLevel="普通会员",e.userInfo.validDate=e.$formatter.timeFormat(new Date,"yyyy-mm-dd"),e.userInfo.openid=r.getStorageSync("openid"),n.next=12,e.addMember();case 12:return r.setStorageSync("userInfo",e.userInfo),n.next=15,e.getUserId(e.userInfo.openid);case 15:return e.invitationInfo.userId=n.sent,e.invitationInfo.openId=e.userInfo.openid,n.next=19,e.getInvitationCode();case 19:return e.invitationInfo.invitationCode=n.sent,console.log("this.invitationInfo:",e.invitationInfo),n.next=23,e.addActivation();case 23:r.setStorageSync("invitationInfo",e.invitationInfo),r.switchTab({url:"/pages/index/index"});case 25:case"end":return n.stop()}}),n)})));function t(e){return n.apply(this,arguments)}return t}(),fail:function(e){console.log(e)}}):r.showToast({title:"您取消了授权",duration:2e3})}});case 1:case"end":return n.stop()}}),n)})))()},getMemberId:function(){return u(o.default.mark((function e(){var n,t,r;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.collection("chat-member").field("max(memberId) as maxMemberId").get();case 2:return n=e.sent,console.log("getMemberId res:",n),n.result.data.length>0?(t=n.result.data[0].maxMemberId,r=parseInt(t)+1):r="600001",console.log("getMemberId memberId:",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))()},addMember:function(){var e=this;return u(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("addMember userInfo:",e.userInfo),n.next=3,c.collection("chat-member").add(e.userInfo);case 3:case"end":return n.stop()}}),n)})))()},getUserId:function(e){return u(o.default.mark((function n(){var t,r;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,c.collection("chat-member").where('openid=="'+e+'"').get();case 2:return t=n.sent,console.log("getUserId res:",t),r=t.result.data[0]._id,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))()},getInvitationCode:function(){return u(o.default.mark((function e(){var n,t,r;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.collection("chat-member-activation").field("max(invitationCode) as maxInvitationCode").get();case 2:return n=e.sent,console.log("getInvitationCode res:",n),n.result.data.length>0?(t=n.result.data[0].maxInvitationCode,r=parseInt(t)+1):r="8001",console.log("getInvitationCode invitationCode:",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))()},addActivation:function(){var e=this;return u(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("addActivation userInfo:",e.invitationInfo),n.next=3,c.collection("chat-member-activation").add(e.invitationInfo);case 3:case"end":return n.stop()}}),n)})))()},getCode:function(){return new Promise((function(e,n){r.login({provider:"weixin",success:function(n){e(n)},fail:function(e){n(new Error("获取code失败"))}})}))},getOpenID:function(n){return u(o.default.mark((function n(){var t,r;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.callFunction({name:"user-login",data:{js_code:js_code}});case 2:return t=n.sent,r=t.result.data.openid,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},getUserProfile:function(){return new Promise((function(e,n){r.getUserProfile({desc:"获取你的昵称、头像、地区及性别",success:function(n){e(n)},fail:function(e){n(new Error("getUserProfile失败"))}})}))},wxLogin:function(){var e=this;return u(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.getCode().then((function(n){return e.getOpenID(n.code)})).then((function(n){console.log("e:",n.openid),r.showModal({title:"温馨提示",content:"授权微信登录后才能正常使用小程序功能",success:function(n){n.confirm&&e.getUserProfile().then((function(n){console.log(n),e.userInfo=n.userInfo}))}})}));case 1:case"end":return n.stop()}}),n)})))()}}});n.default=s}).call(this,t("a9ff")["default"],t("543d")["default"])},dbc4:function(e,n,t){"use strict";(function(e){t("b794");r(t("66fd"));var n=r(t("95ac"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},df9f:function(e,n,t){},edee:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var o=function(){var e=this,n=e.$createElement;e._self._c},a=[]}},[["dbc4","common/runtime","common/vendor"]]]);