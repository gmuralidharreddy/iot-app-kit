"use strict";(self.webpackChunk_iot_app_kit_doc_site=self.webpackChunk_iot_app_kit_doc_site||[]).push([[6392],{"../node_modules/@synchro-charts/core/dist/esm-es5/constants-9d36da8a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>TEST_DATA_POINT_STANDARD,X:()=>X_MIN,Y:()=>Y_VALUE_STRING,a:()=>Y_VALUE,b:()=>Y_MIN,c:()=>Y_MAX,d:()=>X_MAX});__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/constants-35570903.js");var Y_MIN=0,Y_MAX=5e3,X_MIN=new Date(2e3,0,0,0,0),X_MAX=new Date(2e3,0,0,0,10),Y_VALUE=2500,Y_VALUE_STRING="Warning",TEST_DATA_POINT_STANDARD=(new Date(X_MIN.getTime()+1/3*(X_MAX.getTime()-X_MIN.getTime())),{x:(X_MIN.getTime()+X_MAX.getTime())/2,y:Y_VALUE})},"../node_modules/@synchro-charts/core/dist/esm-es5/dataFilters-2772c214.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>getVisibleData,g:()=>getDataBeforeDate,p:()=>pointBisector});var _time_b732648c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/time-b732648c.js"),_utils_96fe4147_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/utils-96fe4147.js"),_predicates_67461267_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/predicates-67461267.js"),pointBisector=(0,_utils_96fe4147_js__WEBPACK_IMPORTED_MODULE_1__.b)((function(p){return p.x})),getVisibleData=function(data,viewport,includeBoundaryPoints){void 0===includeBoundaryPoints&&(includeBoundaryPoints=!0);var start=(0,_predicates_67461267_js__WEBPACK_IMPORTED_MODULE_2__.b)(viewport)?new Date(viewport.start):new Date(Date.now()-(0,_time_b732648c_js__WEBPACK_IMPORTED_MODULE_0__.p)(viewport.duration)),end=(0,_predicates_67461267_js__WEBPACK_IMPORTED_MODULE_2__.b)(viewport)?new Date(viewport.end):new Date;if(0===data.length)return[];if(start.getTime()>data[data.length-1].x)return[];if(end.getTime()<data[0].x)return[];var startIndex=Math.max(pointBisector.left(data,start)-(includeBoundaryPoints?1:0),0),endIndex=Math.min(pointBisector.right(data,end)-(includeBoundaryPoints?0:1),data.length-1);return data.slice(startIndex,endIndex+1)},getDataBeforeDate=function(data,date){if(0===data.length)return[];if(date.getTime()<data[0].x)return[];var endIndex=Math.min(pointBisector.right(data,date)-1,data.length-1);return data.slice(0,endIndex+1)}},"../node_modules/@synchro-charts/core/dist/esm-es5/sc-webgl-bar-chart-threshold-no-coloration.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{sc_webgl_bar_chart_threshold_no_coloration:()=>ScWebglBarChartThresholdNoColoration});var _index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/index-0c943849.js"),_constants_35570903_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/constants-35570903.js"),_dataConstants_856cb1e9_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/dataConstants-856cb1e9.js"),_time_b732648c_js__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/index-b3f1c3a1.js"),__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/time-b732648c.js")),_constants_9d36da8a_js__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/utils-96fe4147.js"),__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/predicates-67461267.js"),__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/dataFilters-2772c214.js"),__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/constants-9d36da8a.js")),ScWebglBarChartThresholdNoColoration=function(){function ScWebglBarChartThresholdNoColoration(hostRef){(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}return ScWebglBarChartThresholdNoColoration.prototype.render=function(){var _a;return(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("sc-bar-chart",{dataStreams:[{id:"test",color:"black",name:"test stream",data:[],aggregates:(_a={},_a[_time_b732648c_js__WEBPACK_IMPORTED_MODULE_4__.M]=[_constants_9d36da8a_js__WEBPACK_IMPORTED_MODULE_8__.T],_a),resolution:_time_b732648c_js__WEBPACK_IMPORTED_MODULE_4__.M,dataType:_dataConstants_856cb1e9_js__WEBPACK_IMPORTED_MODULE_2__.D.NUMBER}],annotations:{y:[{value:2e3,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:_constants_35570903_js__WEBPACK_IMPORTED_MODULE_1__.C.GREATER_THAN_EQUAL}],thresholdOptions:{showColor:!1}},widgetId:"test-id",size:{width:500,height:500},viewport:{yMin:_constants_9d36da8a_js__WEBPACK_IMPORTED_MODULE_8__.b,yMax:_constants_9d36da8a_js__WEBPACK_IMPORTED_MODULE_8__.c,start:_constants_9d36da8a_js__WEBPACK_IMPORTED_MODULE_8__.X,end:_constants_9d36da8a_js__WEBPACK_IMPORTED_MODULE_8__.d}}),(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("sc-webgl-context",null))},ScWebglBarChartThresholdNoColoration}()}}]);