"use strict";(self.webpackChunk_iot_app_kit_doc_site=self.webpackChunk_iot_app_kit_doc_site||[]).push([[9566],{"../node_modules/@synchro-charts/core/dist/esm-es5/chartSize-6ceb3800.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>CHART_SIZE});var CHART_SIZE={width:100,height:100}},"../node_modules/@synchro-charts/core/dist/esm-es5/sc-angled-line-segment.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{sc_angled_line_segment:()=>ScAngledLineSegment});var _index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/index-0c943849.js"),_dataConstants_856cb1e9_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/constants-35570903.js"),__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/dataConstants-856cb1e9.js")),_webglContext_da311040_js__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/index-b3f1c3a1.js"),__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/time-b732648c.js"),__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/utils-96fe4147.js"),__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/predicates-67461267.js"),__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/three.module-06da257a.js"),__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/webglContext-da311040.js")),_chartSize_6ceb3800_js__WEBPACK_IMPORTED_MODULE_13__=(__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/_commonjsHelpers-1d681858.js"),__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/v4-9366210a.js"),__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/index-2e17ff6c.js"),__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/clipSpaceConversion-8273b9c5.js"),__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/chartSize-6ceb3800.js")),_chartScene_5da77983_js__WEBPACK_IMPORTED_MODULE_15__=(__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/pointMesh-a5aff2b1.js"),__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/chartScene-5da77983.js")),X_MIN=new Date(2e3,0,0),X_MAX=new Date(2e3,0,1),WIDTH=X_MAX.getTime()-X_MIN.getTime(),TEST_DATA_POINT_1={x:X_MIN.getTime()+WIDTH/3,y:0+100/3},TEST_DATA_POINT_2={x:X_MIN.getTime()+WIDTH*(2/3),y:0+2/3*100},ScAngledLineSegment=function(){function ScAngledLineSegment(hostRef){(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}return ScAngledLineSegment.prototype.componentDidLoad=function(){var container=this.el.querySelector("#test-container"),scene=(0,_chartScene_5da77983_js__WEBPACK_IMPORTED_MODULE_15__.c)({viewport:{start:X_MIN,end:X_MAX,yMin:0,yMax:100},dataStreams:[{id:"test-stream",name:"test-stream-name",color:"black",data:[TEST_DATA_POINT_1,TEST_DATA_POINT_2],resolution:0,dataType:_dataConstants_856cb1e9_js__WEBPACK_IMPORTED_MODULE_2__.D.NUMBER}],container,minBufferSize:100,bufferFactor:2,chartSize:_chartSize_6ceb3800_js__WEBPACK_IMPORTED_MODULE_13__.C,thresholdOptions:{showColor:!1},thresholds:[]});_webglContext_da311040_js__WEBPACK_IMPORTED_MODULE_8__.w.addChartScene({manager:scene});var rect=container.getBoundingClientRect();_webglContext_da311040_js__WEBPACK_IMPORTED_MODULE_8__.w.setChartRect(scene.id,Object.assign({density:1},rect.toJSON()))},ScAngledLineSegment.prototype.render=function(){return(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("sc-webgl-context",null,(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{id:"test-container",style:{width:_chartSize_6ceb3800_js__WEBPACK_IMPORTED_MODULE_13__.C.width+"px",height:_chartSize_6ceb3800_js__WEBPACK_IMPORTED_MODULE_13__.C.height+"px"}}))},Object.defineProperty(ScAngledLineSegment.prototype,"el",{get:function(){return(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)},enumerable:!1,configurable:!0}),ScAngledLineSegment}()}}]);