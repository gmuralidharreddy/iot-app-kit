"use strict";(self.webpackChunk_iot_app_kit_doc_site=self.webpackChunk_iot_app_kit_doc_site||[]).push([[7491],{"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/constants-ebd051c2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var ScaleType,LEGEND_POSITION,COMPARISON_OPERATOR;__webpack_require__.d(__webpack_exports__,{C:()=>COMPARATOR_MAP,D:()=>DATA_ALIGNMENT,L:()=>LEGEND_POSITION,S:()=>ScaleType,a:()=>COMPARISON_OPERATOR,b:()=>StatusIcon}),function(ScaleType){ScaleType.TimeSeries="time-series",ScaleType.Log="log",ScaleType.Linear="linear"}(ScaleType||(ScaleType={})),function(LEGEND_POSITION){LEGEND_POSITION.RIGHT="RIGHT",LEGEND_POSITION.BOTTOM="BOTTOM"}(LEGEND_POSITION||(LEGEND_POSITION={})),function(COMPARISON_OPERATOR){COMPARISON_OPERATOR.LESS_THAN="LT",COMPARISON_OPERATOR.GREATER_THAN="GT",COMPARISON_OPERATOR.LESS_THAN_EQUAL="LTE",COMPARISON_OPERATOR.GREATER_THAN_EQUAL="GTE",COMPARISON_OPERATOR.EQUAL="EQ",COMPARISON_OPERATOR.CONTAINS="CONTAINS"}(COMPARISON_OPERATOR||(COMPARISON_OPERATOR={}));var StatusIcon,DATA_ALIGNMENT,COMPARATOR_MAP={GTE:">=",GT:">",LTE:"<=",LT:"<",EQ:"="};!function(StatusIcon){StatusIcon.ERROR="error",StatusIcon.ACTIVE="active",StatusIcon.NORMAL="normal",StatusIcon.ACKNOWLEDGED="acknowledged",StatusIcon.SNOOZED="snoozed",StatusIcon.DISABLED="disabled",StatusIcon.LATCHED="latched"}(StatusIcon||(StatusIcon={})),function(DATA_ALIGNMENT){DATA_ALIGNMENT.EITHER="EITHER",DATA_ALIGNMENT.RIGHT="RIGHT",DATA_ALIGNMENT.LEFT="LEFT"}(DATA_ALIGNMENT||(DATA_ALIGNMENT={}))},"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/dataConstants-8e079f60.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var DataType,StreamType,TREND_TYPE;__webpack_require__.d(__webpack_exports__,{D:()=>DataType,S:()=>StreamType,T:()=>TREND_TYPE}),function(DataType){DataType.NUMBER="NUMBER",DataType.STRING="STRING",DataType.BOOLEAN="BOOLEAN"}(DataType||(DataType={})),function(StreamType){StreamType.ALARM="ALARM",StreamType.ANOMALY="ANOMALY",StreamType.ALARM_THRESHOLD="ALARM_THRESHOLD"}(StreamType||(StreamType={})),function(TREND_TYPE){TREND_TYPE.LINEAR="linear-regression"}(TREND_TYPE||(TREND_TYPE={}))},"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/iot-app-kit-vis-webgl-chart-threshold-coloration-band.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{iot_app_kit_vis_webgl_chart_threshold_coloration_band:()=>ScWebglThresholdColorationBand});var _index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/index-c7728300.js"),_dataConstants_8e079f60_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/dataConstants-8e079f60.js"),_constants_ebd051c2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/constants-ebd051c2.js"),X_MIN=new Date(1998,0,0),X_MAX=new Date(2001,0,1),TEST_DATA_POINT={x:new Date(1999,0,0).getTime(),y:2e3},TEST_DATA_POINT_2={x:new Date(2e3,0,0).getTime(),y:4e3},TEST_2_DATA_POINT={x:new Date(1999,0,0).getTime(),y:4e3},TEST_2_DATA_POINT_2={x:new Date(2e3,0,0).getTime(),y:2e3},ScWebglThresholdColorationBand=function(){function ScWebglThresholdColorationBand(hostRef){(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}return ScWebglThresholdColorationBand.prototype.render=function(){return(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("iot-app-kit-vis-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",data:[TEST_DATA_POINT,TEST_DATA_POINT_2],resolution:0,dataType:_dataConstants_8e079f60_js__WEBPACK_IMPORTED_MODULE_1__.D.NUMBER},{id:"test2",color:"red",name:"test stream2",data:[TEST_2_DATA_POINT,TEST_2_DATA_POINT_2],resolution:0,dataType:_dataConstants_8e079f60_js__WEBPACK_IMPORTED_MODULE_1__.D.NUMBER}],annotations:{y:[{value:3500,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:_constants_ebd051c2_js__WEBPACK_IMPORTED_MODULE_2__.a.LESS_THAN},{value:2500,label:{text:"y label",show:!0},showValue:!0,color:"purple",comparisonOperator:_constants_ebd051c2_js__WEBPACK_IMPORTED_MODULE_2__.a.GREATER_THAN_EQUAL}],thresholdOptions:{showColor:!0}},size:{height:500,width:500},viewport:{start:X_MIN,end:X_MAX,yMin:0,yMax:5e3}}),(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("iot-app-kit-vis-webgl-context",null))},ScWebglThresholdColorationBand}()}}]);