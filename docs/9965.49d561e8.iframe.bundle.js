"use strict";(self.webpackChunk_iot_app_kit_doc_site=self.webpackChunk_iot_app_kit_doc_site||[]).push([[9965],{"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/constants-487f5ab5.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>TEST_DATA_POINT_STANDARD,X:()=>X_MIN,Y:()=>Y_VALUE,a:()=>Y_VALUE_STRING,b:()=>Y_MIN,c:()=>Y_MAX,d:()=>X_MAX});__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/constants-ebd051c2.js");var Y_MIN=0,Y_MAX=5e3,X_MIN=new Date(2e3,0,0,0,0),X_MAX=new Date(2e3,0,0,0,10),Y_VALUE=2500,Y_VALUE_STRING="Warning",TEST_DATA_POINT_STANDARD=(new Date(X_MIN.getTime()+1/3*(X_MAX.getTime()-X_MIN.getTime())),{x:(X_MIN.getTime()+X_MAX.getTime())/2,y:Y_VALUE})},"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/constants-ebd051c2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var ScaleType,LEGEND_POSITION,COMPARISON_OPERATOR;__webpack_require__.d(__webpack_exports__,{C:()=>COMPARATOR_MAP,D:()=>DATA_ALIGNMENT,L:()=>LEGEND_POSITION,S:()=>ScaleType,a:()=>COMPARISON_OPERATOR,b:()=>StatusIcon}),function(ScaleType){ScaleType.TimeSeries="time-series",ScaleType.Log="log",ScaleType.Linear="linear"}(ScaleType||(ScaleType={})),function(LEGEND_POSITION){LEGEND_POSITION.RIGHT="RIGHT",LEGEND_POSITION.BOTTOM="BOTTOM"}(LEGEND_POSITION||(LEGEND_POSITION={})),function(COMPARISON_OPERATOR){COMPARISON_OPERATOR.LESS_THAN="LT",COMPARISON_OPERATOR.GREATER_THAN="GT",COMPARISON_OPERATOR.LESS_THAN_EQUAL="LTE",COMPARISON_OPERATOR.GREATER_THAN_EQUAL="GTE",COMPARISON_OPERATOR.EQUAL="EQ",COMPARISON_OPERATOR.CONTAINS="CONTAINS"}(COMPARISON_OPERATOR||(COMPARISON_OPERATOR={}));var StatusIcon,DATA_ALIGNMENT,COMPARATOR_MAP={GTE:">=",GT:">",LTE:"<=",LT:"<",EQ:"="};!function(StatusIcon){StatusIcon.ERROR="error",StatusIcon.ACTIVE="active",StatusIcon.NORMAL="normal",StatusIcon.ACKNOWLEDGED="acknowledged",StatusIcon.SNOOZED="snoozed",StatusIcon.DISABLED="disabled",StatusIcon.LATCHED="latched"}(StatusIcon||(StatusIcon={})),function(DATA_ALIGNMENT){DATA_ALIGNMENT.EITHER="EITHER",DATA_ALIGNMENT.RIGHT="RIGHT",DATA_ALIGNMENT.LEFT="LEFT"}(DATA_ALIGNMENT||(DATA_ALIGNMENT={}))},"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/dataConstants-8e079f60.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var DataType,StreamType,TREND_TYPE;__webpack_require__.d(__webpack_exports__,{D:()=>DataType,S:()=>StreamType,T:()=>TREND_TYPE}),function(DataType){DataType.NUMBER="NUMBER",DataType.STRING="STRING",DataType.BOOLEAN="BOOLEAN"}(DataType||(DataType={})),function(StreamType){StreamType.ALARM="ALARM",StreamType.ANOMALY="ANOMALY",StreamType.ALARM_THRESHOLD="ALARM_THRESHOLD"}(StreamType||(StreamType={})),function(TREND_TYPE){TREND_TYPE.LINEAR="linear-regression"}(TREND_TYPE||(TREND_TYPE={}))},"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/dataTypes-aaacf3dd.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AggregateType,S:()=>STREAM_ICON_STROKE_LINECAP,T:()=>TREND_ICON_DASH_ARRAY,a:()=>STREAM_ICON_STROKE_WIDTH,b:()=>STREAM_ICON_PATH_COMMAND});var STREAM_ICON_STROKE_LINECAP="round",STREAM_ICON_STROKE_WIDTH=3,STREAM_ICON_PATH_COMMAND="M 2 2 H 15",TREND_ICON_DASH_ARRAY="1, 5",AggregateType={AVERAGE:"AVERAGE",COUNT:"COUNT",MAXIMUM:"MAXIMUM",MINIMUM:"MINIMUM",STANDARD_DEVIATION:"STANDARD_DEVIATION",SUM:"SUM"}},"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/iot-app-kit-vis-webgl-bar-chart-dynamic-data-streams.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{iot_app_kit_vis_webgl_bar_chart_dynamic_data_streams:()=>ScWebglBarChartDynamicDataStreams});var _index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/index-c7728300.js"),_dataConstants_8e079f60_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/dataConstants-8e079f60.js"),_time_33466212_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/time-33466212.js"),_dataTypes_aaacf3dd_js__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/constants-ebd051c2.js"),__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/dataTypes-aaacf3dd.js")),_constants_487f5ab5_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/constants-487f5ab5.js"),__spreadArrays=function(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;var r=Array(s),k=0;for(i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r},X_MIN=new Date(2e3,0),X_MAX=new Date(2001,3),LEFT_X=new Date(2e3,3).getTime(),MIDDLE_X=new Date(2e3,6).getTime(),RIGHT_X=new Date(2e3,9).getTime(),ScWebglBarChartDynamicDataStreams=function(){function ScWebglBarChartDynamicDataStreams(hostRef){var _this=this;(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.dataStreams=[],this.colorIndex=0,this.colors=["#264653","#2a9d8f","#e9c46a","#f4a261","#e76f51"],this.increaseColorIndex=function(){_this.colorIndex+=1},this.getColor=function(){return _this.colors[_this.colorIndex%_this.colors.length]},this.addStream=function(){var _a,leftPoint={x:LEFT_X,y:_constants_487f5ab5_js__WEBPACK_IMPORTED_MODULE_5__.Y},middlePoint={x:MIDDLE_X,y:_constants_487f5ab5_js__WEBPACK_IMPORTED_MODULE_5__.Y},rightPoint={x:RIGHT_X,y:_constants_487f5ab5_js__WEBPACK_IMPORTED_MODULE_5__.Y},streamId="stream-"+(_this.dataStreams.length+1);_this.dataStreams=__spreadArrays(_this.dataStreams,[{id:streamId,color:_this.getColor(),name:streamId+"-name",aggregationType:_dataTypes_aaacf3dd_js__WEBPACK_IMPORTED_MODULE_4__.A.AVERAGE,aggregates:(_a={},_a[_time_33466212_js__WEBPACK_IMPORTED_MODULE_2__.a]=[leftPoint,middlePoint,rightPoint],_a),data:[],resolution:_time_33466212_js__WEBPACK_IMPORTED_MODULE_2__.a,dataType:_dataConstants_8e079f60_js__WEBPACK_IMPORTED_MODULE_1__.D.NUMBER}]),_this.increaseColorIndex()},this.removeStream=function(){_this.dataStreams.pop(),_this.dataStreams=__spreadArrays(_this.dataStreams),_this.colorIndex-=1}}return ScWebglBarChartDynamicDataStreams.prototype.render=function(){return(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"synchro-chart-tests"},(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{id:"add-stream",onClick:this.addStream},"Add Stream"),(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{id:"remove-stream",onClick:this.removeStream},"Remove Stream"),(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("br",null),(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("br",null),(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{id:"chart-container",style:{marginTop:"20px",width:"500px",height:"500px"}},(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("iot-app-kit-vis-bar-chart",{dataStreams:this.dataStreams,size:{width:500,height:500},widgetId:"widget-id",viewport:{yMin:0,yMax:5e3,start:X_MIN,end:X_MAX}})),(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("iot-app-kit-vis-webgl-context",null))},ScWebglBarChartDynamicDataStreams}()},"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/time-33466212.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>DAY_IN_MS,H:()=>HOUR_IN_MS,M:()=>MINUTE_IN_MS,S:()=>SECOND_IN_MS,Y:()=>YEAR_IN_MS,a:()=>MONTH_IN_MS,b:()=>parseDuration,c:()=>convertMS,d:()=>displayDate,p:()=>parse});var durationRE=/(-?(?:\d+\.?\d*|\d*\.?\d+)(?:e[-+]?\d+)?)\s*([\p{L}]*)/giu;function parse(str,format){void 0===str&&(str=""),void 0===format&&(format="ms");var result=null;return(str=(str+"").replace(/(\d)[,_](\d)/g,"$1$2")).replace(durationRE,(function(_,n,units){(units=unitRatio(units))&&(result=(result||0)+parseFloat(n,10)*units)})),result&&result/(unitRatio(format)||1)}function unitRatio(str){return parse[str]||parse[str.toLowerCase().replace(/s$/,"")]}parse.nanosecond=parse.ns=1e-6,parse["µs"]=parse["μs"]=parse.us=parse.microsecond=.001,parse.millisecond=parse.ms=parse[""]=1,parse.second=parse.sec=parse.s=1e3*parse.ms,parse.minute=parse.min=parse.m=60*parse.s,parse.hour=parse.hr=parse.h=60*parse.m,parse.day=parse.d=24*parse.h,parse.week=parse.wk=parse.w=7*parse.d,parse.month=parse.b=30.4375*parse.d,parse.year=parse.yr=parse.y=365.25*parse.d;var SECOND_IN_MS=1e3,MINUTE_IN_MS=60*SECOND_IN_MS,HOUR_IN_MS=60*MINUTE_IN_MS,DAY_IN_MS=24*HOUR_IN_MS,MONTH_IN_MS=30*DAY_IN_MS,YEAR_IN_MS=12*MONTH_IN_MS,convertMS=function(milliseconds){if(milliseconds<0)throw new Error("Time cannot be negative!");var seconds=Math.floor(milliseconds/1e3),minute=Math.floor(seconds/60),hour=Math.floor(minute/60);return{day:Math.floor(hour/24),hour:hour%=24,minute:minute%=60,seconds:seconds%=60}},displayDate=function(date,resolution,_a){var start=_a.start,viewportDurationMS=_a.end.getTime()-start.getTime();return resolution<HOUR_IN_MS?viewportDurationMS<MINUTE_IN_MS?date.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):viewportDurationMS<=10*MINUTE_IN_MS?date.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):viewportDurationMS<=HOUR_IN_MS?date.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):viewportDurationMS<=DAY_IN_MS?date.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):viewportDurationMS<=MONTH_IN_MS?date.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):date.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):resolution<=HOUR_IN_MS?date.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):resolution<DAY_IN_MS?date.toLocaleString("en-US",{day:"numeric",month:"numeric"}):date.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})},parseDuration=function(duration){if("number"==typeof duration)return duration;var parsedTime=parse(duration,"ms");return null!=parsedTime?parsedTime:10*MINUTE_IN_MS}}}]);