"use strict";(self.webpackChunk_iot_app_kit_doc_site=self.webpackChunk_iot_app_kit_doc_site||[]).push([[1590],{"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/chartSize-6ceb3800.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>CHART_SIZE});var CHART_SIZE={width:100,height:100}},"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/iot-app-kit-vis-line-chart-colored-point.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{iot_app_kit_vis_line_chart_colored_point:()=>ScLineChartColoredPoint});var _index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/index-c7728300.js"),_webglContext_f702bea7_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/getDataPoints-1a3cf1be.js"),__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/webglContext-f702bea7.js")),_dataConstants_8e079f60_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/dataConstants-8e079f60.js"),_chartScene_85752aaa_js__WEBPACK_IMPORTED_MODULE_10__=(__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/pointMesh-2249b797.js"),__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/_commonjsHelpers-1d681858.js"),__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/clipSpaceConversion-3d30ad2d.js"),__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/time-33466212.js"),__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/constants-ebd051c2.js"),__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/v4-9366210a.js"),__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/chartScene-85752aaa.js")),_chartSize_6ceb3800_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/chartSize-6ceb3800.js"),X_MIN=new Date(2e3,0,0),X_MAX=new Date(2e3,0,1),TEST_DATA_POINT={x:(X_MIN.getTime()+X_MAX.getTime())/2,y:50},ScLineChartColoredPoint=function(){function ScLineChartColoredPoint(hostRef){(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}return ScLineChartColoredPoint.prototype.componentDidLoad=function(){var container=this.el.querySelector("#test-container"),scene=(0,_chartScene_85752aaa_js__WEBPACK_IMPORTED_MODULE_10__.c)({viewport:{start:X_MIN,end:X_MAX,yMin:0,yMax:100},dataStreams:[{id:"test-stream",data:[TEST_DATA_POINT],name:"test-stream-name",color:"red",resolution:0,dataType:_dataConstants_8e079f60_js__WEBPACK_IMPORTED_MODULE_3__.D.NUMBER}],chartSize:_chartSize_6ceb3800_js__WEBPACK_IMPORTED_MODULE_11__.C,container,minBufferSize:100,bufferFactor:2,thresholdOptions:{showColor:!1},thresholds:[]});_webglContext_f702bea7_js__WEBPACK_IMPORTED_MODULE_2__.w.addChartScene({manager:scene});var rect=container.getBoundingClientRect();_webglContext_f702bea7_js__WEBPACK_IMPORTED_MODULE_2__.w.setChartRect(scene.id,Object.assign({density:1},rect.toJSON()))},ScLineChartColoredPoint.prototype.render=function(){return(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("iot-app-kit-vis-webgl-context",null,(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{id:"test-container",style:{width:_chartSize_6ceb3800_js__WEBPACK_IMPORTED_MODULE_11__.C.width+"px",height:_chartSize_6ceb3800_js__WEBPACK_IMPORTED_MODULE_11__.C.height+"px"}}))},Object.defineProperty(ScLineChartColoredPoint.prototype,"el",{get:function(){return(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)},enumerable:!1,configurable:!0}),ScLineChartColoredPoint}()}}]);