(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-swiper/u-swiper"],{140:function(t,e,n){"use strict";n.r(e);var r=n(141),i=n(143);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n(145);var u,a=n(23),c=Object(a["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,"6b019429",null,!1,r["components"],u);c.options.__file="uni_modules/uview-ui/components/u-swiper/u-swiper.vue",e["default"]=c.exports},141:function(t,e,n){"use strict";n.r(e);var r=n(142);n.d(e,"render",(function(){return r["render"]})),n.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(e,"components",(function(){return r["components"]}))},142:function(t,e,n){"use strict";var r;n.r(e),n.d(e,"render",(function(){return i})),n.d(e,"staticRenderFns",(function(){return u})),n.d(e,"recyclableRender",(function(){return o})),n.d(e,"components",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.list,(function(e,n){var r=t.__get_orig(e),i=t.title&&e.title?t.__get_style([{"padding-bottom":t.titlePaddingBottom},t.titleStyle]):null;return{$orig:r,s0:i}})));t.$mp.data=Object.assign({},{$root:{l0:n}})},o=!1,u=[];i._withStripped=!0},143:function(t,e,n){"use strict";n.r(e);var r=n(144),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},144:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"u-swiper",props:{list:{type:Array,default:function(){return[]}},title:{type:Boolean,default:!1},indicator:{type:Object,default:function(){return{}}},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:function(){return{}}}},watch:{list:function(t,e){t.length!==e.length&&(this.uCurrent=0)},current:function(t){this.uCurrent=t}},data:function(){return{uCurrent:this.current}},computed:{justifyContent:function(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom:function(){var t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)},elCurrent:function(){return Number(this.current)}},methods:{listClick:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.uCurrent=e,this.$emit("change",e)},animationfinish:function(t){}}};e.default=r},145:function(t,e,n){"use strict";n.r(e);var r=n(146),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},146:function(t,e,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-swiper/u-swiper.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-swiper/u-swiper-create-component',
    {
        'uni_modules/uview-ui/components/u-swiper/u-swiper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(140))
        })
    },
    [['uni_modules/uview-ui/components/u-swiper/u-swiper-create-component']]
]);
