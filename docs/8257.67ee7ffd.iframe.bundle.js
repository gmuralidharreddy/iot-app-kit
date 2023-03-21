"use strict";(self.webpackChunk_iot_app_kit_doc_site=self.webpackChunk_iot_app_kit_doc_site||[]).push([[8257],{"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/constants-ebd051c2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var ScaleType,LEGEND_POSITION,COMPARISON_OPERATOR;__webpack_require__.d(__webpack_exports__,{C:()=>COMPARATOR_MAP,D:()=>DATA_ALIGNMENT,L:()=>LEGEND_POSITION,S:()=>ScaleType,a:()=>COMPARISON_OPERATOR,b:()=>StatusIcon}),function(ScaleType){ScaleType.TimeSeries="time-series",ScaleType.Log="log",ScaleType.Linear="linear"}(ScaleType||(ScaleType={})),function(LEGEND_POSITION){LEGEND_POSITION.RIGHT="RIGHT",LEGEND_POSITION.BOTTOM="BOTTOM"}(LEGEND_POSITION||(LEGEND_POSITION={})),function(COMPARISON_OPERATOR){COMPARISON_OPERATOR.LESS_THAN="LT",COMPARISON_OPERATOR.GREATER_THAN="GT",COMPARISON_OPERATOR.LESS_THAN_EQUAL="LTE",COMPARISON_OPERATOR.GREATER_THAN_EQUAL="GTE",COMPARISON_OPERATOR.EQUAL="EQ",COMPARISON_OPERATOR.CONTAINS="CONTAINS"}(COMPARISON_OPERATOR||(COMPARISON_OPERATOR={}));var StatusIcon,DATA_ALIGNMENT,COMPARATOR_MAP={GTE:">=",GT:">",LTE:"<=",LT:"<",EQ:"="};!function(StatusIcon){StatusIcon.ERROR="error",StatusIcon.ACTIVE="active",StatusIcon.NORMAL="normal",StatusIcon.ACKNOWLEDGED="acknowledged",StatusIcon.SNOOZED="snoozed",StatusIcon.DISABLED="disabled",StatusIcon.LATCHED="latched"}(StatusIcon||(StatusIcon={})),function(DATA_ALIGNMENT){DATA_ALIGNMENT.EITHER="EITHER",DATA_ALIGNMENT.RIGHT="RIGHT",DATA_ALIGNMENT.LEFT="LEFT"}(DATA_ALIGNMENT||(DATA_ALIGNMENT={}))},"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/dataConstants-8e079f60.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var DataType,StreamType,TREND_TYPE;__webpack_require__.d(__webpack_exports__,{D:()=>DataType,S:()=>StreamType,T:()=>TREND_TYPE}),function(DataType){DataType.NUMBER="NUMBER",DataType.STRING="STRING",DataType.BOOLEAN="BOOLEAN"}(DataType||(DataType={})),function(StreamType){StreamType.ALARM="ALARM",StreamType.ANOMALY="ANOMALY",StreamType.ALARM_THRESHOLD="ALARM_THRESHOLD"}(StreamType||(StreamType={})),function(TREND_TYPE){TREND_TYPE.LINEAR="linear-regression"}(TREND_TYPE||(TREND_TYPE={}))},"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/status-timeline-raw-data.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{status_timeline_raw_data:()=>StatusTimelineRawData});var _index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/index-c7728300.js"),_dataConstants_8e079f60_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/dataConstants-8e079f60.js"),_time_33466212_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/time-33466212.js"),_constants_ebd051c2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/constants-ebd051c2.js"),X_MIN=new Date(2e3,0,0),X_MAX=new Date(2e3,0,0,0,10),DATA_POINTS=[{x:X_MIN.getTime(),y:"STATUS_ZERO"},{x:X_MIN.getTime()+5*_time_33466212_js__WEBPACK_IMPORTED_MODULE_2__.M,y:"STATUS_ONE"},{x:X_MIN.getTime()+6*_time_33466212_js__WEBPACK_IMPORTED_MODULE_2__.M,y:"STATUS_TWO"},{x:X_MIN.getTime()+6.5*_time_33466212_js__WEBPACK_IMPORTED_MODULE_2__.M,y:"STATUS_THREE"}],annotations={y:[{value:"STATUS_ZERO",color:"red",comparisonOperator:_constants_ebd051c2_js__WEBPACK_IMPORTED_MODULE_3__.a.EQUAL},{value:"STATUS_ONE",color:"blue",comparisonOperator:_constants_ebd051c2_js__WEBPACK_IMPORTED_MODULE_3__.a.EQUAL},{value:"STATUS_TWO",color:"green",comparisonOperator:_constants_ebd051c2_js__WEBPACK_IMPORTED_MODULE_3__.a.EQUAL}]},StatusTimelineRawData=function(){function StatusTimelineRawData(hostRef){(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}return StatusTimelineRawData.prototype.render=function(){return(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("iot-app-kit-vis-status-timeline",{alarms:{expires:_time_33466212_js__WEBPACK_IMPORTED_MODULE_2__.M},dataStreams:[{id:"test",data:DATA_POINTS,color:"black",name:"test stream 1",resolution:0,dataType:_dataConstants_8e079f60_js__WEBPACK_IMPORTED_MODULE_1__.D.STRING}],widgetId:"test-id",size:{width:500,height:500},annotations,viewport:{yMin:0,yMax:100,start:X_MIN,end:X_MAX}}),(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("iot-app-kit-vis-webgl-context",null))},StatusTimelineRawData}()},"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/time-33466212.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>DAY_IN_MS,H:()=>HOUR_IN_MS,M:()=>MINUTE_IN_MS,S:()=>SECOND_IN_MS,Y:()=>YEAR_IN_MS,a:()=>MONTH_IN_MS,b:()=>parseDuration,c:()=>convertMS,d:()=>displayDate,p:()=>parse});var durationRE=/(-?(?:\d+\.?\d*|\d*\.?\d+)(?:e[-+]?\d+)?)\s*([\p{L}]*)/giu;function parse(str,format){void 0===str&&(str=""),void 0===format&&(format="ms");var result=null;return(str=(str+"").replace(/(\d)[,_](\d)/g,"$1$2")).replace(durationRE,(function(_,n,units){(units=unitRatio(units))&&(result=(result||0)+parseFloat(n,10)*units)})),result&&result/(unitRatio(format)||1)}function unitRatio(str){return parse[str]||parse[str.toLowerCase().replace(/s$/,"")]}parse.nanosecond=parse.ns=1e-6,parse["µs"]=parse["μs"]=parse.us=parse.microsecond=.001,parse.millisecond=parse.ms=parse[""]=1,parse.second=parse.sec=parse.s=1e3*parse.ms,parse.minute=parse.min=parse.m=60*parse.s,parse.hour=parse.hr=parse.h=60*parse.m,parse.day=parse.d=24*parse.h,parse.week=parse.wk=parse.w=7*parse.d,parse.month=parse.b=30.4375*parse.d,parse.year=parse.yr=parse.y=365.25*parse.d;var SECOND_IN_MS=1e3,MINUTE_IN_MS=60*SECOND_IN_MS,HOUR_IN_MS=60*MINUTE_IN_MS,DAY_IN_MS=24*HOUR_IN_MS,MONTH_IN_MS=30*DAY_IN_MS,YEAR_IN_MS=12*MONTH_IN_MS,convertMS=function(milliseconds){if(milliseconds<0)throw new Error("Time cannot be negative!");var seconds=Math.floor(milliseconds/1e3),minute=Math.floor(seconds/60),hour=Math.floor(minute/60);return{day:Math.floor(hour/24),hour:hour%=24,minute:minute%=60,seconds:seconds%=60}},displayDate=function(date,resolution,_a){var start=_a.start,viewportDurationMS=_a.end.getTime()-start.getTime();return resolution<HOUR_IN_MS?viewportDurationMS<MINUTE_IN_MS?date.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):viewportDurationMS<=10*MINUTE_IN_MS?date.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):viewportDurationMS<=HOUR_IN_MS?date.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):viewportDurationMS<=DAY_IN_MS?date.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):viewportDurationMS<=MONTH_IN_MS?date.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):date.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):resolution<=HOUR_IN_MS?date.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):resolution<DAY_IN_MS?date.toLocaleString("en-US",{day:"numeric",month:"numeric"}):date.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})},parseDuration=function(duration){if("number"==typeof duration)return duration;var parsedTime=parse(duration,"ms");return null!=parsedTime?parsedTime:10*MINUTE_IN_MS}}}]);