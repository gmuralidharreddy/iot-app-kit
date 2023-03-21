"use strict";(self.webpackChunk_iot_app_kit_doc_site=self.webpackChunk_iot_app_kit_doc_site||[]).push([[5264],{"../node_modules/@synchro-charts/core/dist/esm-es5/constants-35570903.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var ScaleType,LEGEND_POSITION,COMPARISON_OPERATOR;__webpack_require__.d(__webpack_exports__,{C:()=>COMPARISON_OPERATOR,D:()=>DATA_ALIGNMENT,L:()=>LEGEND_POSITION,S:()=>ScaleType,a:()=>COMPARATOR_MAP,b:()=>StatusIcon}),function(ScaleType){ScaleType.TimeSeries="time-series",ScaleType.Log="log",ScaleType.Linear="linear"}(ScaleType||(ScaleType={})),function(LEGEND_POSITION){LEGEND_POSITION.RIGHT="RIGHT",LEGEND_POSITION.BOTTOM="BOTTOM"}(LEGEND_POSITION||(LEGEND_POSITION={})),function(COMPARISON_OPERATOR){COMPARISON_OPERATOR.LESS_THAN="LT",COMPARISON_OPERATOR.GREATER_THAN="GT",COMPARISON_OPERATOR.LESS_THAN_EQUAL="LTE",COMPARISON_OPERATOR.GREATER_THAN_EQUAL="GTE",COMPARISON_OPERATOR.EQUAL="EQ",COMPARISON_OPERATOR.CONTAINS="CONTAINS"}(COMPARISON_OPERATOR||(COMPARISON_OPERATOR={}));var StatusIcon,COMPARATOR_MAP={GTE:">=",GT:">",LTE:"<=",LT:"<",EQ:"="};!function(StatusIcon){StatusIcon.ERROR="error",StatusIcon.ACTIVE="active",StatusIcon.NORMAL="normal",StatusIcon.ACKNOWLEDGED="acknowledged",StatusIcon.SNOOZED="snoozed",StatusIcon.DISABLED="disabled",StatusIcon.LATCHED="latched"}(StatusIcon||(StatusIcon={}));var DATA_ALIGNMENT;StatusIcon.ERROR,StatusIcon.ACTIVE,StatusIcon.NORMAL,StatusIcon.ACKNOWLEDGED,StatusIcon.SNOOZED,StatusIcon.DISABLED,StatusIcon.LATCHED;!function(DATA_ALIGNMENT){DATA_ALIGNMENT.EITHER="EITHER",DATA_ALIGNMENT.RIGHT="RIGHT",DATA_ALIGNMENT.LEFT="LEFT"}(DATA_ALIGNMENT||(DATA_ALIGNMENT={}))},"../node_modules/@synchro-charts/core/dist/esm-es5/dataConstants-856cb1e9.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var DataType,StreamType,TREND_TYPE,ChartType;__webpack_require__.d(__webpack_exports__,{D:()=>DataType,S:()=>StreamType,T:()=>TREND_TYPE}),function(DataType){DataType.NUMBER="NUMBER",DataType.STRING="STRING",DataType.BOOLEAN="BOOLEAN"}(DataType||(DataType={})),function(StreamType){StreamType.ALARM="ALARM",StreamType.ANOMALY="ANOMALY",StreamType.ALARM_THRESHOLD="ALARM_THRESHOLD"}(StreamType||(StreamType={})),function(TREND_TYPE){TREND_TYPE.LINEAR="linear-regression"}(TREND_TYPE||(TREND_TYPE={})),function(ChartType){ChartType.BarChart="bar-chart",ChartType.LineChart="line-chart"}(ChartType||(ChartType={}))},"../node_modules/@synchro-charts/core/dist/esm-es5/index-b3f1c3a1.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>parse});var durationRE=/(-?(?:\d+\.?\d*|\d*\.?\d+)(?:e[-+]?\d+)?)\s*([\p{L}]*)/giu;function parse(str,format){void 0===str&&(str=""),void 0===format&&(format="ms");var result=null;return(str=(str+"").replace(/(\d)[,_](\d)/g,"$1$2")).replace(durationRE,(function(_,n,units){(units=unitRatio(units))&&(result=(result||0)+parseFloat(n,10)*units)})),result&&result/(unitRatio(format)||1)}function unitRatio(str){return parse[str]||parse[str.toLowerCase().replace(/s$/,"")]}parse.nanosecond=parse.ns=1e-6,parse["µs"]=parse["μs"]=parse.us=parse.microsecond=.001,parse.millisecond=parse.ms=parse[""]=1,parse.second=parse.sec=parse.s=1e3*parse.ms,parse.minute=parse.min=parse.m=60*parse.s,parse.hour=parse.hr=parse.h=60*parse.m,parse.day=parse.d=24*parse.h,parse.week=parse.wk=parse.w=7*parse.d,parse.month=parse.b=30.4375*parse.d,parse.year=parse.yr=parse.y=365.25*parse.d},"../node_modules/@synchro-charts/core/dist/esm-es5/sc-scatter-chart-threshold-no-coloration.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{sc_scatter_chart_threshold_no_coloration:()=>ScScatterChartThresholdNoColoration});var _index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/index-0c943849.js"),_constants_35570903_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/constants-35570903.js"),_dataConstants_856cb1e9_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/dataConstants-856cb1e9.js"),_time_b732648c_js__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/index-b3f1c3a1.js"),__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/time-b732648c.js")),X_MIN=new Date(1998,0,0),X_MAX=new Date(2001,0,1),TEST_DATA_POINT={x:new Date(1999,0,0).getTime(),y:2e3},TEST_DATA_POINT_2={x:new Date(2e3,0,0).getTime(),y:4e3},ScScatterChartThresholdNoColoration=function(){function ScScatterChartThresholdNoColoration(hostRef){(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}return ScScatterChartThresholdNoColoration.prototype.render=function(){var _a;return(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",null,(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("sc-scatter-chart",{widgetId:"widget-id",dataStreams:[{id:"test",name:"test stream",color:"black",aggregates:(_a={},_a[_time_b732648c_js__WEBPACK_IMPORTED_MODULE_4__.a]=[TEST_DATA_POINT,TEST_DATA_POINT_2],_a),data:[],resolution:_time_b732648c_js__WEBPACK_IMPORTED_MODULE_4__.a,dataType:_dataConstants_856cb1e9_js__WEBPACK_IMPORTED_MODULE_2__.D.NUMBER}],annotations:{y:[{value:3e3,label:{text:"y label",show:!0},showValue:!0,color:"red",comparisonOperator:_constants_35570903_js__WEBPACK_IMPORTED_MODULE_1__.C.GREATER_THAN_EQUAL}],thresholdOptions:{showColor:!1}},size:{height:500,width:500},viewport:{start:X_MIN,end:X_MAX,yMin:0,yMax:5e3}}),(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("sc-webgl-context",null))},ScScatterChartThresholdNoColoration}()},"../node_modules/@synchro-charts/core/dist/esm-es5/time-b732648c.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>DAY_IN_MS,H:()=>HOUR_IN_MS,M:()=>MINUTE_IN_MS,S:()=>SECOND_IN_MS,Y:()=>YEAR_IN_MS,a:()=>MONTH_IN_MS,c:()=>convertMS,d:()=>displayDate,p:()=>parseDuration});var _index_b3f1c3a1_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/index-b3f1c3a1.js"),SECOND_IN_MS=1e3,MINUTE_IN_MS=60*SECOND_IN_MS,HOUR_IN_MS=60*MINUTE_IN_MS,DAY_IN_MS=24*HOUR_IN_MS,MONTH_IN_MS=30*DAY_IN_MS,YEAR_IN_MS=12*MONTH_IN_MS,convertMS=function(milliseconds){if(milliseconds<0)throw new Error("Time cannot be negative!");var seconds=Math.floor(milliseconds/1e3),minute=Math.floor(seconds/60),hour=Math.floor(minute/60);return{day:Math.floor(hour/24),hour:hour%=24,minute:minute%=60,seconds:seconds%=60}},displayDate=function(date,resolution,_a){var start=_a.start,viewportDurationMS=_a.end.getTime()-start.getTime();return resolution<HOUR_IN_MS?viewportDurationMS<MINUTE_IN_MS?date.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):viewportDurationMS<=10*MINUTE_IN_MS?date.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):viewportDurationMS<=HOUR_IN_MS?date.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):viewportDurationMS<=DAY_IN_MS?date.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):viewportDurationMS<=MONTH_IN_MS?date.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):date.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):resolution<=HOUR_IN_MS?date.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):resolution<DAY_IN_MS?date.toLocaleString("en-US",{day:"numeric",month:"numeric"}):date.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})},parseDuration=function(duration){if("number"==typeof duration)return duration;var parsedTime=(0,_index_b3f1c3a1_js__WEBPACK_IMPORTED_MODULE_0__.p)(duration,"ms");return null!=parsedTime?parsedTime:10*MINUTE_IN_MS}}}]);