"use strict";(self.webpackChunk_iot_app_kit_doc_site=self.webpackChunk_iot_app_kit_doc_site||[]).push([[2860],{"../node_modules/@synchro-charts/core/dist/esm-es5/dataConstants-856cb1e9.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var DataType,StreamType,TREND_TYPE,ChartType;__webpack_require__.d(__webpack_exports__,{D:()=>DataType,S:()=>StreamType,T:()=>TREND_TYPE}),function(DataType){DataType.NUMBER="NUMBER",DataType.STRING="STRING",DataType.BOOLEAN="BOOLEAN"}(DataType||(DataType={})),function(StreamType){StreamType.ALARM="ALARM",StreamType.ANOMALY="ANOMALY",StreamType.ALARM_THRESHOLD="ALARM_THRESHOLD"}(StreamType||(StreamType={})),function(TREND_TYPE){TREND_TYPE.LINEAR="linear-regression"}(TREND_TYPE||(TREND_TYPE={})),function(ChartType){ChartType.BarChart="bar-chart",ChartType.LineChart="line-chart"}(ChartType||(ChartType={}))},"../node_modules/@synchro-charts/core/dist/esm-es5/sc-webgl-line-chart-dynamic-buffer.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{sc_webgl_line_chart_dynamic_buffer:()=>ScWebglLineChartDynamicBuffer});var _index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/index-0c943849.js"),_dataConstants_856cb1e9_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/dataConstants-856cb1e9.js"),__spreadArrays=function(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;var r=Array(s),k=0;for(i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r},X_MIN=new Date(1998,0,0),X_MAX=new Date(2e3,0,1),WIDTH=X_MAX.getTime()-X_MIN.getTime(),ScWebglLineChartDynamicBuffer=function(){function ScWebglLineChartDynamicBuffer(hostRef){var _this=this;(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.data=[],this.addDataPoint=function(){var dataPoint={x:new Date(X_MIN.getTime()+WIDTH/(2+_this.data.length)).getTime(),y:2500};_this.data=__spreadArrays([dataPoint],_this.data)}}return ScWebglLineChartDynamicBuffer.prototype.render=function(){return(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"synchro-chart-tests"},(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("button",{id:"add-data-point",onClick:this.addDataPoint},"Add Data Point"),(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{id:"chart-container",style:{marginTop:"20px",width:"500px",height:"500px"}},(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("sc-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",data:this.data,resolution:0,dataType:_dataConstants_856cb1e9_js__WEBPACK_IMPORTED_MODULE_1__.D.NUMBER}],size:{height:500,width:500},viewport:{start:X_MIN,end:X_MAX,yMin:0,yMax:5e3},bufferFactor:1,minBufferSize:1}),(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("sc-webgl-context",null)))},ScWebglLineChartDynamicBuffer}()}}]);