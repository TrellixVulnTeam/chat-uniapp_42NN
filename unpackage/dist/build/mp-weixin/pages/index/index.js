(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"39d0":function(e,t,n){"use strict";n.r(t);var a=n("f766"),c=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=c.a},8502:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={uSwiper:function(){return n.e("uni_modules/uview-ui/components/u-swiper/u-swiper").then(n.bind(null,"a9b1"))},uIcon:function(){return n.e("uni_modules/uview-ui/components/u-icon/u-icon").then(n.bind(null,"eb92"))}},c=function(){var e=this,t=e.$createElement;e._self._c},o=[]},9444:function(e,t,n){},b2a4:function(e,t,n){"use strict";n.r(t);var a=n("8502"),c=n("39d0");for(var o in c)"default"!==o&&function(e){n.d(t,e,(function(){return c[e]}))}(o);n("da10");var r,i=n("f0c5"),u=Object(i["a"])(c["default"],a["b"],a["c"],!1,null,"02d1517a",null,!1,a["a"],r);t["default"]=u.exports},da10:function(e,t,n){"use strict";var a=n("9444"),c=n.n(a);c.a},eeb4:function(e,t,n){"use strict";(function(e){n("b794");a(n("66fd"));var t=a(n("b2a4"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},f766:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n("a34a")),o=r(n("f227"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,a,c,o,r){try{var i=e[o](r),u=i.value}catch(l){return void n(l)}i.done?t(u):Promise.resolve(u).then(a,c)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(a,c){var o=e.apply(t,n);function r(e){i(o,a,c,r,u,"next",e)}function u(e){i(o,a,c,r,u,"throw",e)}r(void 0)}))}}var l=e.database(),d=(l.command,{data:function(){return{adList:[{id:0,image:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b7a774b3-4b44-4ebe-b2a7-716565dfc8e9/66dd8d39-31ee-42ad-b550-2e41011e047c.png",title:"如何追女孩"},{id:1,image:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b7a774b3-4b44-4ebe-b2a7-716565dfc8e9/be4c47ae-0d94-4d32-b9f7-57dab27faf5a.png",title:"聊天训练营"},{id:2,image:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-b7a774b3-4b44-4ebe-b2a7-716565dfc8e9/94e7af8a-185e-4bd8-a908-b7abd1c4ac92.jpg",title:"追女生套路"}],ColorList:[{title:"嫣红嫣红嫣红嫣红嫣红11",name:"red",color:"#e54d42"},{title:"桔橙",name:"orange",color:"#f37b1d"},{title:"明黄",name:"yellow",color:"#fbbd08"},{title:"橄榄",name:"olive",color:"#8dc63f"},{title:"森绿",name:"green",color:"#39b54a"},{title:"天青",name:"cyan",color:"#1cbbb4"},{title:"海蓝",name:"blue",color:"#0081ff"},{title:"姹紫",name:"purple",color:"#6739b6"},{title:"木槿",name:"mauve",color:"#9c26b0"},{title:"桃粉",name:"pink",color:"#e03997"},{title:"棕褐",name:"brown",color:"#a5673f"},{title:"玄灰",name:"grey",color:"#8799a3"},{title:"草灰",name:"gray",color:"#aaaaaa"},{title:"墨黑",name:"black",color:"#333333"},{title:"雅白",name:"white",color:"#ffffff"}],chatList:[]}},onLoad:function(){this.init()},onShow:function(){(0,o.default)()},methods:{init:function(){var t=this,n=e.database();n.collection("chat-cate,chat-type").field("code, name, category{code, name}").get().then((function(e){t.chatList=e.result.data,console.log(t.chatList)})).catch((function(e){console.error(e)}))},click:function(e){var t=this;return u(c.default.mark((function n(){var a;return c.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(console.log("click:",e),a="",0!=e){n.next=8;break}return n.next=5,t.getArticleId("如何追女生");case 5:a=n.sent,n.next=18;break;case 8:if(1!=e){n.next=14;break}return n.next=11,t.getArticleId("聊天训练营");case 11:a=n.sent,n.next=18;break;case 14:if(2!=e){n.next=18;break}return n.next=17,t.getArticleId("追女生套路");case 17:a=n.sent;case 18:console.log("articleId:",a),t.showArticle(a);case 20:case"end":return n.stop()}}),n)})))()},getArticleId:function(e){return u(c.default.mark((function t(){var n,a;return c.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l.collection("dry-article").where('article_type == "首页广告" && title == "'+e+'"').get();case 2:return n=t.sent,console.log("getArticleId res:",n),a=n.result.data[0]._id,console.log("getArticleId articleId:",a),t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})))()},showArticle:function(e){a.navigateTo({url:"/pages/dry/article?articleId="+e})},jump:function(){console.log("jump"),a.navigateTo({url:"/pages/chat/search/search"})},show_type:function(e){console.log(e),a.navigateTo({url:"/pages/chat/type/type?code="+e.code+"&name="+e.name})}}});t.default=d}).call(this,n("a9ff")["default"],n("543d")["default"])}},[["eeb4","common/runtime","common/vendor"]]]);