(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ucenter/userinfo/limeClipper/limeClipper"],{557:function(t,i,e){"use strict";e.r(i);var a=e(558),n=e(560);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e(563);var h,o=e(23),c=Object(o["default"])(n["default"],a["render"],a["staticRenderFns"],!1,null,"e2a6a4ae",null,!1,a["components"],h);c.options.__file="pages/ucenter/userinfo/limeClipper/limeClipper.vue",i["default"]=c.exports},558:function(t,i,e){"use strict";e.r(i);var a=e(559);e.d(i,"render",(function(){return a["render"]})),e.d(i,"staticRenderFns",(function(){return a["staticRenderFns"]})),e.d(i,"recyclableRender",(function(){return a["recyclableRender"]})),e.d(i,"components",(function(){return a["components"]}))},559:function(t,i,e){"use strict";var a;e.r(i),e.d(i,"render",(function(){return n})),e.d(i,"staticRenderFns",(function(){return h})),e.d(i,"recyclableRender",(function(){return s})),e.d(i,"components",(function(){return a}));var n=function(){var t=this,i=t.$createElement;t._self._c},s=!1,h=[];n._withStripped=!0},560:function(t,i,e){"use strict";e.r(i);var a=e(561),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},561:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=s(e(11)),n=e(562);function s(t){return t&&t.__esModule?t:{default:t}}function h(t,i,e,a,n,s,h){try{var o=t[s](h),c=o.value}catch(l){return void e(l)}o.done?i(c):Promise.resolve(c).then(a,n)}function o(t){return function(){var i=this,e=arguments;return new Promise((function(a,n){var s=t.apply(i,e);function o(t){h(s,a,n,o,c,"next",t)}function c(t){h(s,a,n,o,c,"throw",t)}o(void 0)}))}}var c={},l={name:"l-clipper",props:{value:{type:Boolean,default:!0},type:{type:String,default:"2d"},customStyle:{type:String},canvasId:{type:String,default:"l-clipper"},zIndex:{type:Number,default:99},imageUrl:{type:String},fileType:{type:String,default:"png"},quality:{type:Number,default:1},width:{type:Number,default:400},height:{type:Number,default:400},minWidth:{type:Number,default:200},maxWidth:{type:Number,default:600},minHeight:{type:Number,default:200},maxHeight:{type:Number,default:600},isLockWidth:{type:Boolean,default:!1},isLockHeight:{type:Boolean,default:!1},isLockRatio:{type:Boolean,default:!0},scaleRatio:{type:Number,default:1},minRatio:{type:Number,default:.5},maxRatio:{type:Number,default:2},isDisableScale:{type:Boolean,default:!1},isDisableRotate:{type:Boolean,default:!1},isLimitMove:{type:Boolean,default:!1},isShowPhotoBtn:{type:Boolean,default:!0},isShowRotateBtn:{type:Boolean,default:!0},isShowConfirmBtn:{type:Boolean,default:!0},isShowCancelBtn:{type:Boolean,default:!0},rotateAngle:{type:Number,default:90},source:{type:Object,default:function(){return{album:"从相册中选择",camera:"拍照",message:"从微信中选择"}}}},data:function(){return{canvasWidth:0,canvasHeight:0,clipX:0,clipY:0,clipWidth:0,clipHeight:0,animation:!1,imageWidth:0,imageHeight:0,imageTop:0,imageLeft:0,scale:1,angle:0,image:this.imageUrl,sysinfo:{},throttleTimer:null,throttleFlag:!0,timeClipCenter:null,flagClipTouch:!1,flagEndTouch:!1,clipStart:{},animationTimer:null,touchRelative:[{x:0,y:0}],hypotenuseLength:0,ctx:null}},computed:{clipStyle:function(){var t=this.clipWidth,i=this.clipHeight,e=this.clipY,a=this.clipX,n=this.animation;return"\n\t\t\twidth: ".concat(t,"px;\n\t\t\theight:").concat(i,"px;\n\t\t\ttransition-property: ").concat(n?"":"background",";\n\t\t\tleft: ").concat(a,"px;\n\t\t\ttop: ").concat(e,"px\n\t\t\t")},imageStyle:function(){var t=this.imageWidth,i=this.imageHeight,e=this.imageLeft,a=this.imageTop,n=this.animation,s=this.scale,h=this.angle;return"\n\t\t\t\twidth: ".concat(t?t+"px":"auto",";\n\t\t\t\theight: ").concat(i?i+"px":"auto",";\n\t\t\t\ttransform: translate3d(").concat(e-t/2,"px, ").concat(a-i/2,"px, 0) scale(").concat(s,") rotate(").concat(h,"deg);\n\t\t\t\ttransition-duration: ").concat(n?.35:0,"s\n\t\t\t")},clipSize:function(){var t=this.clipWidth,i=this.clipHeight;return{clipWidth:t,clipHeight:i}},clipPoint:function(){var t=this.clipY,i=this.clipX;return{clipY:t,clipX:i}}},watch:{value:function(t){if(t){if(this.imageUrl){var i=(null===c||void 0===c?void 0:c[this.imageUrl])||{},e=i.imageWidth,a=i.imageHeight,n=i.imageLeft,s=i.imageTop,h=i.scale,o=i.clipX,l=i.clipY,r=i.clipWidth,u=i.clipHeight,f=i.path;f!=this.image?this.image=this.imageUrl:this.setDiffData({imageWidth:e,imageHeight:a,imageLeft:n,imageTop:s,scale:h,clipX:o,clipY:l,clipWidth:r,clipHeight:u})}}else this.animation=0,this.angle=0},imageUrl:function(t){this.image=t},image:{handler:function(){var t=o(a.default.mark((function t(i){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.getImageInfo(i);case 1:case"end":return t.stop()}}),t,this)})));function i(i){return t.apply(this,arguments)}return i}()},clipSize:function(t){var i=t.widthVal,e=t.heightVal,a=this.minWidth,n=this.minHeight;a/=2,n/=2,i<a&&this.setDiffData({clipWidth:a}),e<n&&this.setDiffData({clipHeight:n}),this.calcClipSize()},angle:function(t){this.animation=!0,this.moveStop();var i=this.isLimitMove;i&&t%90&&this.setDiffData({angle:90*Math.round(t/90)}),this.imgMarginDetectionScale()},animation:function(t){var i=this;if(clearTimeout(this.animationTimer),t){var e=setTimeout((function(){i.setDiffData({animation:!1})}),260);this.setDiffData({animationTimer:e}),this.animationTimer=e}},isLimitMove:function(t){t&&(this.angle%90&&this.setDiffData({angle:90*Math.round(this.angle/90)}),this.imgMarginDetectionScale())},clipPoint:function(){this.cutDetectionPosition()},width:function(t,i){t!==i&&this.setDiffData({clipWidth:t/2})},height:function(t,i){t!==i&&this.setDiffData({clipHeight:t/2})}},mounted:function(){var i=t.getSystemInfoSync();this.sysinfo=i,this.setClipInfo(),this.image&&this.getImageInfo(this.image),this.setClipCenter(),this.calcClipSize(),this.cutDetectionPosition()},methods:{setDiffData:function(t){var i=this;Object.keys(t).forEach((function(e){i[e]!==t[e]&&(i[e]=t[e])}))},getImageInfo:function(i){var e=this;i&&(this.value&&t.showLoading({title:"请稍候...",mask:!0}),t.getImageInfo({src:i,success:function(t){e.imgComputeSize(t.width,t.height),e.image=t.path,e.isLimitMove&&(e.imgMarginDetectionScale(),e.$emit("ready",t));var a=e.imageWidth,n=e.imageHeight,s=e.imageLeft,h=e.imageTop,o=e.scale,l=e.clipX,r=e.clipY,u=e.clipWidth,f=e.clipHeight;c[i]=Object.assign(t,{imageWidth:a,imageHeight:n,imageLeft:s,imageTop:h,scale:o,clipX:l,clipY:r,clipWidth:u,clipHeight:f})},fail:function(t){e.imgComputeSize(),e.isLimitMove&&e.imgMarginDetectionScale()}}))},setClipInfo:function(){var i=this.width,e=this.height,a=this.sysinfo,n=this.canvasId,s=i/2,h=e/2,o=(a.windowHeight-h)/2,c=(a.windowWidth-s)/2,l=a.windowWidth/2,r=a.windowHeight/2;this.ctx=t.createCanvasContext(n,this),this.clipWidth=s,this.clipHeight=h,this.clipX=c,this.clipY=o,this.canvasHeight=h,this.canvasWidth=s,this.imageLeft=l,this.imageTop=r},setClipCenter:function(){var i=this.sysInfo,e=this.clipHeight,a=this.clipWidth,n=this.imageTop,s=this.imageLeft,h=i||t.getSystemInfoSync(),o=.5*(h.windowHeight-e),c=.5*(h.windowWidth-a);this.imageTop=n-this.clipY+o,this.imageLeft=s-this.clipX+c,this.clipY=o,this.clipX=c},calcClipSize:function(){var t=this.clipHeight,i=this.clipWidth,e=this.sysinfo,a=this.clipX,n=this.clipY;i>e.windowWidth?this.setDiffData({clipWidth:e.windowWidth}):i+a>e.windowWidth&&this.setDiffData({clipX:e.windowWidth-a}),t>e.windowHeight?this.setDiffData({clipHeight:e.windowHeight}):t+n>e.windowHeight&&(this.clipY=e.windowHeight-n,this.setDiffData({clipY:e.windowHeight-n}))},cutDetectionPosition:function(){var t=this,i=this.clipX,e=this.clipY,a=this.sysinfo,n=this.clipHeight,s=this.clipWidth,h=function(){e<0&&t.setDiffData({clipY:0}),e>a.windowHeight-n&&t.setDiffData({clipY:a.windowHeight-n})},o=function(){i<0&&t.setDiffData({clipX:0}),i>a.windowWidth-s&&t.setDiffData({clipX:a.windowWidth-s})};if(null===e&&null===i){var c=.5*(a.windowHeight-n),l=.5*(a.windowWidth-s);this.setDiffData({clipX:l,clipY:c})}else null!==e&&null!==i?(h(),o()):null!==e&&null===i?(h(),this.setDiffData({clipX:(a.windowWidth-s)/2})):null===e&&null!==i&&(o(),this.setDiffData({clipY:(a.windowHeight-n)/2}))},imgComputeSize:function(t,i){var e=(0,n.calcImageSize)(t,i,this),a=e.imageWidth,s=e.imageHeight;this.imageWidth=a,this.imageHeight=s},imgMarginDetectionScale:function(t){if(this.isLimitMove){var i=(0,n.calcImageScale)(this,t);this.imgMarginDetectionPosition(i)}},imgMarginDetectionPosition:function(t){if(this.isLimitMove){var i=(0,n.calcImageOffset)(this,t),e=i.scale,a=i.left,s=i.top;this.setDiffData({imageLeft:a,imageTop:s,scale:e})}},throttle:function(){this.setDiffData({throttleFlag:!0})},moveDuring:function(){clearTimeout(this.timeClipCenter)},moveStop:function(){var t=this;clearTimeout(this.timeClipCenter);var i=setTimeout((function(){t.animation||t.setDiffData({animation:!0}),t.setClipCenter()}),800);this.setDiffData({timeClipCenter:i})},clipTouchStart:function(i){if(this.image){var e=i.touches[0].clientX,a=i.touches[0].clientY,s=this.clipX,h=this.clipY,o=this.clipWidth,c=this.clipHeight,l=(0,n.determineDirection)(s,h,o,c,e,a);this.moveDuring(),l&&(this.clipStart={width:o,height:c,x:e,y:a,clipY:h,clipX:s,corner:l},this.flagClipTouch=!0,this.flagEndTouch=!0)}else t.showToast({title:"请选择图片",icon:"none"})},clipTouchMove:function(i){if(this.image){if(1===i.touches.length){var e=this.flagClipTouch,a=this.throttleFlag;if(e&&a){var s=this.isLockRatio,h=this.isLockHeight,o=this.isLockWidth;if(s&&(o||h))return;this.setDiffData({throttleFlag:!1}),this.throttle();var c=(0,n.clipTouchMoveOfCalculate)(this,i);if(c){var l=c.width,r=c.height,u=c.clipX,f=c.clipY;o||h?o?h||this.setDiffData({clipHeight:r,clipY:f}):this.setDiffData({clipWidth:l,clipX:u}):this.setDiffData({clipWidth:l,clipHeight:r,clipX:u,clipY:f}),this.imgMarginDetectionScale()}}}}else t.showToast({title:"请选择图片",icon:"none"})},clipTouchEnd:function(){this.moveStop(),this.flagClipTouch=!1},imageTouchStart:function(t){this.flagEndTouch=!1;var i=this.imageLeft,e=this.imageTop,a=t.touches[0].clientX,s=t.touches[0].clientY,h=[];if(1===t.touches.length)h[0]={x:a-i,y:s-e},this.touchRelative=h;else{var o=t.touches[1].clientX,c=t.touches[1].clientY,l=Math.abs(a-o),r=Math.abs(s-c),u=(0,n.calcPythagoreanTheorem)(l,r);h=[{x:a-i,y:s-e},{x:o-i,y:c-e}],this.touchRelative=h,this.hypotenuseLength=u}},imageTouchMove:function(t){var i=this.flagEndTouch,e=this.throttleFlag;if(!i&&e){var a=t.touches[0].clientX,s=t.touches[0].clientY;if(this.setDiffData({throttleFlag:!1}),this.throttle(),this.moveDuring(),1===t.touches.length){var h=(0,n.imageTouchMoveOfCalcOffset)(this,a,s),o=h.left,c=h.top;this.setDiffData({imageLeft:o,imageTop:c}),this.imgMarginDetectionPosition()}else{var l=t.touches[1].clientX,r=t.touches[1].clientY,u=Math.abs(a-l),f=Math.abs(s-r),g=(0,n.calcPythagoreanTheorem)(u,f),p=this.scale*(g/this.hypotenuseLength);this.isDisableScale?p=1:(p=p<=this.minRatio?this.minRatio:p,p=p>=this.maxRatio?this.maxRatio:p,this.$emit("change",{width:this.imageWidth*p,height:this.imageHeight*p})),this.imgMarginDetectionScale(p),this.hypotenuseLength=Math.sqrt(Math.pow(u,2)+Math.pow(f,2)),this.scale=p}}},imageTouchEnd:function(){this.setDiffData({flagEndTouch:!0}),this.moveStop()},uploadImage:function(){var i=this,e=Object.entries(this.source),a=["original","compressed"],n=function(t){var e=t.tempFilePaths,a=t.tempFiles;i.image=e?e[0]:a[0].path},s=function(i){"message"!==i&&t.chooseImage({count:1,sizeType:a,sourceType:[i],success:n}),"message"==i&&wx.chooseMessageFile({count:1,type:"image",success:n})};e.length>1?t.showActionSheet({itemList:e.map((function(t){return t[1]})),success:function(t){var i=t.tapIndex;s(e[i][0])}}):s(e[0][0])},imageReset:function(){var i=this.sysinfo||t.getSystemInfoSync();this.scale=1,this.angle=0,this.imageTop=i.windowHeight/2,this.imageLeft=i.windowWidth/2},imageLoad:function(i){this.imageReset(),t.hideLoading(),this.$emit("ready",i.detail)},rotate:function(i){if(!this.isDisableRotate)if(this.image){var e=this.rotateAngle,a=this.angle,n=i.currentTarget.dataset.type;this.angle="along"===n?a+e:a-e,this.$emit("rotate",this.angle)}else t.showToast({title:"请选择图片",icon:"none"})},confirm:function(){var i=this;if(this.image){t.showLoading({title:"加载中"});var e=this.canvasHeight,a=this.canvasWidth,n=this.clipHeight,s=this.clipWidth,h=this.ctx,o=this.scale,c=this.imageLeft,l=this.imageTop,r=this.clipX,u=this.clipY,f=this.angle,g=this.scaleRatio,p=this.image,m=this.quality,d=this.fileType,v=(this.type,this.canvasId),w=function(){var e=i.imageWidth*o*g,a=i.imageHeight*o*g,w=c-r,D=l-u;h.translate(w*g,D*g),h.rotate(f*Math.PI/180),h.drawImage(p,-e/2,-a/2,e,a),h.draw(!1,(function(){var e=s*g,a=n*g,h={x:0,y:0,width:e,height:a,destWidth:e,destHeight:a,canvasId:v,fileType:d,quality:m,success:function(e){o.url=e.tempFilePath,t.hideLoading(),i.$emit("success",o),i.$emit("input",!1)},fail:function(t){console.error("error",t),i.$emit("fail",t),i.$emit("input",!1)}},o={url:"",width:e,height:a};t.canvasToTempFilePath(h,i)}))};a!==s||e!==n?(this.canvasWidth=s,this.canvasHeight=n,h.draw(),this.$nextTick((function(){setTimeout((function(){w()}),100)}))):w()}else t.showToast({title:"请选择图片",icon:"none"})},cancel:function(){this.$emit("cancel",!1),this.$emit("input",!1)}}};i.default=l}).call(this,e(1)["default"])},563:function(t,i,e){"use strict";e.r(i);var a=e(564),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},564:function(t,i,e){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/pages/ucenter/userinfo/limeClipper/limeClipper.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/ucenter/userinfo/limeClipper/limeClipper-create-component',
    {
        'pages/ucenter/userinfo/limeClipper/limeClipper-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(557))
        })
    },
    [['pages/ucenter/userinfo/limeClipper/limeClipper-create-component']]
]);
