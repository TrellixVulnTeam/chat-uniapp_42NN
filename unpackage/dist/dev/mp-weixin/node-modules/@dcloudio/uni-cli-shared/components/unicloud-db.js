(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["node-modules/@dcloudio/uni-cli-shared/components/unicloud-db"],{389:function(t,e,n){"use strict";n.r(e);var i=n(390),o=n(392);for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);var r,s=n(23),c=Object(s["default"])(o["default"],i["render"],i["staticRenderFns"],!1,null,null,null,!1,i["components"],r);c.options.__file="Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/uni-cli-shared/components/unicloud-db.vue",e["default"]=c.exports},390:function(t,e,n){"use strict";n.r(e);var i=n(391);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},391:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return o})),n.d(e,"staticRenderFns",(function(){return r})),n.d(e,"recyclableRender",(function(){return a})),n.d(e,"components",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c;t.$setScopedSlotsParams("default",{options:t.options,data:t.dataList,pagination:t.paginationInternal,loading:t.loading,hasMore:t.hasMore,error:t.errorMessage})},a=!1,r=[];o._withStripped=!0},392:function(t,e,n){"use strict";n.r(e);var i=n(393),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},393:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(4),a=r(n(394));function r(t){return t&&t.__esModule?t:{default:t}}function s(t){return u(t)||d(t)||l(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,e){if(t){if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function d(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function u(t){if(Array.isArray(t))return h(t)}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var f=(0,o.initVueI18n)(a.default),p=f.t,g={load:"load",error:"error"},m={add:"add",replace:"replace"},y={auto:"auto",onready:"onready",manual:"manual"},v=["pageCurrent","pageSize","spaceInfo","collection","action","field","getcount","orderby","where","groupby","groupField","distinct"],b={name:"UniClouddb",props:{options:{type:[Object,Array],default:function(){return{}}},spaceInfo:{type:Object,default:function(){return{}}},collection:{type:[String,Array],default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String,Object],default:!1},gettreepath:{type:[Boolean,String],default:!1},startwith:{type:String,default:""},limitlevel:{type:Number,default:10},groupby:{type:String,default:""},groupField:{type:String,default:""},distinct:{type:[Boolean,String],default:!1},pageIndistinct:{type:[Boolean,String],default:!1},foreignKey:{type:String,default:""},loadtime:{type:String,default:"auto"},manual:{type:Boolean,default:!1}},data:function(){return{loading:!1,hasMore:!1,dataList:this.getone?void 0:[],paginationInternal:{},errorMessage:""}},computed:{collectionArgs:function(){return Array.isArray(this.collection)?this.collection:[this.collection]},isLookup:function(){return Array.isArray(this.collection)&&this.collection.length>1||"string"===typeof this.collection&&this.collection.indexOf(",")>-1},mainCollection:function(){if("string"===typeof this.collection)return this.collection.split(",")[0];var t=JSON.parse(JSON.stringify(this.collection[0]));return t.$db[0].$param[0]}},created:function(){var t=this;this._isEnded=!1,this.paginationInternal={current:this.pageCurrent,size:this.pageSize,count:0},this.$watch((function(){var e=[];return v.forEach((function(n){e.push(t[n])})),e}),(function(e,n){if(t.paginationInternal.size=t.pageSize,e[0]!==n[0]&&(t.paginationInternal.current=t.pageCurrent),t.loadtime!==y.manual){for(var i=!1,o=2;o<e.length;o++)if(e[o]!==n[o]){i=!0;break}i&&(t.clear(),t.reset()),t._execLoadData()}})),this.manual||this.loadtime!==y.auto||this.loadData()},methods:{loadData:function(t,e){var n=null,i=!1;"object"===typeof t?(t.clear&&(this.pageData===m.replace?this.clear():i=t.clear,this.reset()),void 0!==t.current&&(this.paginationInternal.current=t.current),"function"===typeof e&&(n=e)):"function"===typeof t&&(n=t),this._execLoadData(n,i)},loadMore:function(){this._isEnded||this.loading||(this.pageData===m.add&&this.paginationInternal.current++,this._execLoadData())},refresh:function(){this.clear(),this._execLoadData()},clear:function(){this._isEnded=!1,this.dataList=[]},reset:function(){this.paginationInternal.current=1},add:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.action,a=n.showToast,r=void 0===a||a,s=n.toastTitle,c=n.success,l=n.fail,d=n.complete,u=n.needConfirm,h=void 0===u||u,f=n.needLoading,g=void 0===f||f,m=n.loadingTitle,y=void 0===m?"":m;g&&t.showLoading({title:y});var v=i.database(this.spaceInfo);o&&(v=v.action(o)),v.collection(this.mainCollection).add(e).then((function(e){c&&c(e),r&&t.showToast({title:s||p("uniCloud.component.add.success")})})).catch((function(e){l&&l(e),h&&t.showModal({content:e.message,showCancel:!1})})).finally((function(){g&&t.hideLoading(),d&&d()}))},remove:function(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=i.action,a=i.success,r=i.fail,s=i.complete,c=i.confirmTitle,l=i.confirmContent,d=i.needConfirm,u=void 0===d||d,h=i.needLoading,f=void 0===h||h,g=i.loadingTitle,m=void 0===g?"":g;e&&e.length&&(u?t.showModal({title:c||p("uniCloud.component.remove.showModal.title"),content:l||p("uniCloud.component.remove.showModal.content"),showCancel:!0,success:function(t){t.confirm&&n._execRemove(e,o,a,r,s,u,f,m)}}):this._execRemove(e,o,a,r,s,u,f,m))},update:function(e,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=o.action,r=o.showToast,s=void 0===r||r,c=o.toastTitle,l=o.success,d=o.fail,u=o.complete,h=o.needConfirm,f=void 0===h||h,g=o.needLoading,m=void 0===g||g,y=o.loadingTitle,v=void 0===y?"":y;m&&t.showLoading({title:v});var b=i.database(this.spaceInfo);return a&&(b=b.action(a)),b.collection(this.mainCollection).doc(e).update(n).then((function(e){l&&l(e),s&&t.showToast({title:c||p("uniCloud.component.update.success")})})).catch((function(e){d&&d(e),f&&t.showModal({content:e.message,showCancel:!1})})).finally((function(){m&&t.hideLoading(),u&&u()}))},getTemp:function(){var t,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=i.database(this.spaceInfo);this.action&&(n=n.action(this.action)),n=(t=n).collection.apply(t,s(this.collectionArgs)),this.where&&Object.keys(this.where).length&&(n=n.where(this.where)),this.field&&(n=n.field(this.field)),this.foreignKey&&(n=n.foreignKey(this.foreignKey)),this.groupby&&(n=n.groupBy(this.groupby)),this.groupField&&(n=n.groupField(this.groupField)),!0===this.distinct&&(n=n.distinct()),this.orderby&&(n=n.orderBy(this.orderby));var o=this.paginationInternal,a=o.current,r=o.size,c={};this.getcount&&(c.getCount=this.getcount);var l={limitLevel:this.limitlevel,startWith:this.startwith};return this.gettree&&(c.getTree=l),this.gettreepath&&(c.getTreePath=l),n=n.skip(r*(a-1)).limit(r),e?(n=n.getTemp(c),n.udb=this):n=n.get(c),n},setResult:function(t){0===t.code?this._execLoadDataSuccess(t):this._execLoadDataFail(new Error(t.message))},_execLoadData:function(t,e){var n=this;this.loading||(this.loading=!0,this.errorMessage="",this._getExec().then((function(i){n.loading=!1,n._execLoadDataSuccess(i.result,t,e)})).catch((function(e){n.loading=!1,n._execLoadDataFail(e,t)})))},_execLoadDataSuccess:function(t,e,n){var i=t.data,o=t.count;this._isEnded=void 0!==o?this.paginationInternal.current*this.paginationInternal.size>=o:i.length<this.pageSize,this.hasMore=!this._isEnded;var a,r=this.getone?i.length?i[0]:void 0:i;(this.getcount&&(this.paginationInternal.count=o),e&&e(r,this._isEnded,this.paginationInternal),this._dispatchEvent(g.load,r),this.getone||this.pageData===m.replace)?this.dataList=r:n?this.dataList=r:(a=this.dataList).push.apply(a,s(r))},_execLoadDataFail:function(t,e){this.errorMessage=t,e&&e(),this.$emit(g.error,t),console.error(t)},_getExec:function(){return this.getTemp(!1)},_execRemove:function(e,n,o,a,r,s,c,l){var d=this;if(this.collection&&e){var u=Array.isArray(e)?e:[e];if(u.length){c&&t.showLoading({mask:!0,title:l});var h=i.database(this.spaceInfo),f=h.command,p=h;n&&(p=p.action(n)),p.collection(this.mainCollection).where({_id:f.in(u)}).remove().then((function(t){o&&o(t.result),d.pageData===m.replace?d.refresh():d.removeData(u)})).catch((function(e){a&&a(e),s&&t.showModal({content:e.message,showCancel:!1})})).finally((function(){c&&t.hideLoading(),r&&r()}))}}},removeData:function(t){for(var e=t.slice(0),n=this.dataList,i=n.length-1;i>=0;i--){var o=e.indexOf(n[i]._id);o>=0&&(n.splice(i,1),e.splice(o,1))}},_dispatchEvent:function(t,e){this._changeDataFunction?this._changeDataFunction(e,this._isEnded,this.paginationInternal):this.$emit(t,e,this._isEnded,this.paginationInternal)}}};e.default=b}).call(this,n(1)["default"],n(10)["default"])}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/@dcloudio/uni-cli-shared/components/unicloud-db.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/@dcloudio/uni-cli-shared/components/unicloud-db-create-component',
    {
        'node-modules/@dcloudio/uni-cli-shared/components/unicloud-db-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(389))
        })
    },
    [['node-modules/@dcloudio/uni-cli-shared/components/unicloud-db-create-component']]
]);
