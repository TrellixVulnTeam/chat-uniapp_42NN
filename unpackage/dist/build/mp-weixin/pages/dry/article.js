(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dry/article"],{2806:function(t,e,n){},"5f61":function(t,e,n){"use strict";var o=n("2806"),a=n.n(o);a.a},"8fcd":function(t,e,n){"use strict";n.r(e);var o=n("d0d3"),a=n("ea2f");for(var c in a)"default"!==c&&function(t){n.d(e,t,(function(){return a[t]}))}(c);n("5f61");var i,r=n("f0c5"),u=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"bfd3a5fe",null,!1,o["a"],i);e["default"]=u.exports},a119:function(t,e,n){"use strict";(function(t){n("b794");o(n("66fd"));var e=o(n("8fcd"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},d0d3:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o}));var o={uAvatar:function(){return n.e("uni_modules/uview-ui/components/u-avatar/u-avatar").then(n.bind(null,"b210"))},mpHtml:function(){return Promise.all([n.e("common/vendor"),n.e("components/mp-html/mp-html")]).then(n.bind(null,"a4fa"))}},a=function(){var t=this,e=t.$createElement;t._self._c},c=[]},d28e:function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("7f8c"),c={data:function(){return{articleId:"",articleList:"",title:"",author_name:"",author_brief:"",content_html:"",showWechat:!1,wechatNumber:""}},onLoad:function(t){this.articleId=t.articleId,console.log("onLoad this.articleId:",this.articleId),this.init()},methods:{init:function(){var e=this,n=t.database();n.collection("dry-article").field("title, author_name, author_brief, content_html, order").where('_id == "'+this.articleId+'"').get().then((function(t){e.articleList=t.result.data,e.title=e.articleList[0].title,e.author_name=e.articleList[0].author_name,e.content_html=decodeURIComponent(e.articleList[0].content_html),console.log(e.content_html)})).catch((function(t){console.error(t)})),n.collection("chat-config").where('config_type=="weixin" && item_code=="'+a.APP_OWNER+'" && enable=="Y"').get().then((function(t){e.wechatNumber=t.result.data[0].item_content,e.author_brief="领取资料请加微信："+e.wechatNumber})).catch((function(t){console.log(t.code),console.log(t.message)}))},showWechatModal:function(){this.showWechat=!0},cancelModal:function(){this.showWechat=!1},confirmModal:function(){this.copy(),this.showWechat=!1},copy:function(){o.setClipboardData({data:this.wechatNumber,success:function(){o.showToast({title:"已经复制",icon:"none"})}})}}};e.default=c}).call(this,n("a9ff")["default"],n("543d")["default"])},ea2f:function(t,e,n){"use strict";n.r(e);var o=n("d28e"),a=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e["default"]=a.a}},[["a119","common/runtime","common/vendor"]]]);