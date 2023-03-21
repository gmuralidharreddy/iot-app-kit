"use strict";(self.webpackChunk_iot_app_kit_doc_site=self.webpackChunk_iot_app_kit_doc_site||[]).push([[655],{"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/dataConstants-8e079f60.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var DataType,StreamType,TREND_TYPE;__webpack_require__.d(__webpack_exports__,{D:()=>DataType,S:()=>StreamType,T:()=>TREND_TYPE}),function(DataType){DataType.NUMBER="NUMBER",DataType.STRING="STRING",DataType.BOOLEAN="BOOLEAN"}(DataType||(DataType={})),function(StreamType){StreamType.ALARM="ALARM",StreamType.ANOMALY="ANOMALY",StreamType.ALARM_THRESHOLD="ALARM_THRESHOLD"}(StreamType||(StreamType={})),function(TREND_TYPE){TREND_TYPE.LINEAR="linear-regression"}(TREND_TYPE||(TREND_TYPE={}))},"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/dataTypes-aaacf3dd.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>AggregateType,S:()=>STREAM_ICON_STROKE_LINECAP,T:()=>TREND_ICON_DASH_ARRAY,a:()=>STREAM_ICON_STROKE_WIDTH,b:()=>STREAM_ICON_PATH_COMMAND});var STREAM_ICON_STROKE_LINECAP="round",STREAM_ICON_STROKE_WIDTH=3,STREAM_ICON_PATH_COMMAND="M 2 2 H 15",TREND_ICON_DASH_ARRAY="1, 5",AggregateType={AVERAGE:"AVERAGE",COUNT:"COUNT",MAXIMUM:"MAXIMUM",MINIMUM:"MINIMUM",STANDARD_DEVIATION:"STANDARD_DEVIATION",SUM:"SUM"}},"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/status-timeline-dynamic-data-streams.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{status_timeline_dynamic_data_streams:()=>StatusTimelineDynamicDataStreams});var _index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/index-c7728300.js"),_dataConstants_8e079f60_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/dataConstants-8e079f60.js"),_time_33466212_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/time-33466212.js"),_dataTypes_aaacf3dd_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/dataTypes-aaacf3dd.js"),__spreadArrays=function(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;var r=Array(s),k=0;for(i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r},X_MIN=new Date(2e3,0),X_MAX=new Date(2001,3),LEFT_X=new Date(2e3,3).getTime(),MIDDLE_X=new Date(2e3,6).getTime(),RIGHT_X=new Date(2e3,9).getTime(),StatusTimelineDynamicDataStreams=function(){function StatusTimelineDynamicDataStreams(hostRef){var _this=this;(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.dataStreams=[],this.colorIndex=0,this.colors=["#264653","#2a9d8f","#e9c46a","#f4a261","#e76f51"],this.increaseColorIndex=function(){_this.colorIndex+=1},this.getColor=function(){return _this.colors[_this.colorIndex%_this.colors.length]},this.addStream=function(){var _a,leftPoint={x:LEFT_X,y:2.5},middlePoint={x:MIDDLE_X,y:2.5},rightPoint={x:RIGHT_X,y:2.5},streamId="stream-"+(_this.dataStreams.length+1);_this.dataStreams=__spreadArrays(_this.dataStreams,[{id:streamId,color:_this.getColor(),name:streamId+"-name",aggregationType:_dataTypes_aaacf3dd_js__WEBPACK_IMPORTED_MODULE_3__.A.AVERAGE,aggregates:(_a={},_a[_time_33466212_js__WEBPACK_IMPORTED_MODULE_2__.a]=[leftPoint,middlePoint,rightPoint],_a),data:[],resolution:_time_33466212_js__WEBPACK_IMPORTED_MODULE_2__.a,dataType:_dataConstants_8e079f60_js__WEBPACK_IMPORTED_MODULE_1__.D.NUMBER}]),_this.increaseColorIndex()},this.removeStream=function(){_this.dataStreams.pop(),_this.dataStreams=__spreadArrays(_this.dataStreams),_this.colorIndex-=1}}return StatusTimelineDynamicDataStreams.prototype.render=function(){return(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"synchro-chart-tests"},(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{id:"add-stream",onClick:this.addStream},"Add Stream"),(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{id:"remove-stream",onClick:this.removeStream},"Remove Stream"),(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("br",null),(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("br",null),(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{id:"chart-container",style:{marginTop:"20px",width:"500px",height:"500px"}},(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("iot-app-kit-vis-status-timeline",{alarms:{expires:_time_33466212_js__WEBPACK_IMPORTED_MODULE_2__.a},dataStreams:this.dataStreams,size:{width:500,height:500},widgetId:"widget-id",viewport:{yMin:0,yMax:5e3,start:X_MIN,end:X_MAX}})),(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("iot-app-kit-vis-webgl-context",null))},StatusTimelineDynamicDataStreams}()},"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/time-33466212.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>DAY_IN_MS,H:()=>HOUR_IN_MS,M:()=>MINUTE_IN_MS,S:()=>SECOND_IN_MS,Y:()=>YEAR_IN_MS,a:()=>MONTH_IN_MS,b:()=>parseDuration,c:()=>convertMS,d:()=>displayDate,p:()=>parse});var durationRE=/(-?(?:\d+\.?\d*|\d*\.?\d+)(?:e[-+]?\d+)?)\s*([\p{L}]*)/giu;function parse(str,format){void 0===str&&(str=""),void 0===format&&(format="ms");var result=null;return(str=(str+"").replace(/(\d)[,_](\d)/g,"$1$2")).replace(durationRE,(function(_,n,units){(units=unitRatio(units))&&(result=(result||0)+parseFloat(n,10)*units)})),result&&result/(unitRatio(format)||1)}function unitRatio(str){return parse[str]||parse[str.toLowerCase().replace(/s$/,"")]}parse.nanosecond=parse.ns=1e-6,parse["µs"]=parse["μs"]=parse.us=parse.microsecond=.001,parse.millisecond=parse.ms=parse[""]=1,parse.second=parse.sec=parse.s=1e3*parse.ms,parse.minute=parse.min=parse.m=60*parse.s,parse.hour=parse.hr=parse.h=60*parse.m,parse.day=parse.d=24*parse.h,parse.week=parse.wk=parse.w=7*parse.d,parse.month=parse.b=30.4375*parse.d,parse.year=parse.yr=parse.y=365.25*parse.d;var SECOND_IN_MS=1e3,MINUTE_IN_MS=60*SECOND_IN_MS,HOUR_IN_MS=60*MINUTE_IN_MS,DAY_IN_MS=24*HOUR_IN_MS,MONTH_IN_MS=30*DAY_IN_MS,YEAR_IN_MS=12*MONTH_IN_MS,convertMS=function(milliseconds){if(milliseconds<0)throw new Error("Time cannot be negative!");var seconds=Math.floor(milliseconds/1e3),minute=Math.floor(seconds/60),hour=Math.floor(minute/60);return{day:Math.floor(hour/24),hour:hour%=24,minute:minute%=60,seconds:seconds%=60}},displayDate=function(date,resolution,_a){var start=_a.start,viewportDurationMS=_a.end.getTime()-start.getTime();return resolution<HOUR_IN_MS?viewportDurationMS<MINUTE_IN_MS?date.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):viewportDurationMS<=10*MINUTE_IN_MS?date.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):viewportDurationMS<=HOUR_IN_MS?date.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):viewportDurationMS<=DAY_IN_MS?date.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):viewportDurationMS<=MONTH_IN_MS?date.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):date.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):resolution<=HOUR_IN_MS?date.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):resolution<DAY_IN_MS?date.toLocaleString("en-US",{day:"numeric",month:"numeric"}):date.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})},parseDuration=function(duration){if("number"==typeof duration)return duration;var parsedTime=parse(duration,"ms");return null!=parsedTime?parsedTime:10*MINUTE_IN_MS}}}]);