"use strict";(self.webpackChunk_iot_app_kit_doc_site=self.webpackChunk_iot_app_kit_doc_site||[]).push([[6292],{"../node_modules/@synchro-charts/core/dist/esm-es5/Value-9ca575b7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Value});var _index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/index-0c943849.js"),_terms_d11f73d5_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/terms-d11f73d5.js"),_number_a7331d73_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/number-a7331d73.js"),Value=function(_a){var _b=_a.isEnabled,isEnabled=void 0===_b||_b,value=_a.value,unit=_a.unit;return isEnabled&&null!=value?"number"==typeof value?[(0,_number_a7331d73_js__WEBPACK_IMPORTED_MODULE_2__.r)(value),unit&&(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"unit"}," ",unit)]:[String(value),unit&&(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{class:"unit"}," ",unit)]:(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{"data-testid":"no-value-present"},_terms_d11f73d5_js__WEBPACK_IMPORTED_MODULE_1__.N)}},"../node_modules/@synchro-charts/core/dist/esm-es5/constants-35570903.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var ScaleType,LEGEND_POSITION,COMPARISON_OPERATOR;__webpack_require__.d(__webpack_exports__,{C:()=>COMPARISON_OPERATOR,D:()=>DATA_ALIGNMENT,L:()=>LEGEND_POSITION,S:()=>ScaleType,a:()=>COMPARATOR_MAP,b:()=>StatusIcon}),function(ScaleType){ScaleType.TimeSeries="time-series",ScaleType.Log="log",ScaleType.Linear="linear"}(ScaleType||(ScaleType={})),function(LEGEND_POSITION){LEGEND_POSITION.RIGHT="RIGHT",LEGEND_POSITION.BOTTOM="BOTTOM"}(LEGEND_POSITION||(LEGEND_POSITION={})),function(COMPARISON_OPERATOR){COMPARISON_OPERATOR.LESS_THAN="LT",COMPARISON_OPERATOR.GREATER_THAN="GT",COMPARISON_OPERATOR.LESS_THAN_EQUAL="LTE",COMPARISON_OPERATOR.GREATER_THAN_EQUAL="GTE",COMPARISON_OPERATOR.EQUAL="EQ",COMPARISON_OPERATOR.CONTAINS="CONTAINS"}(COMPARISON_OPERATOR||(COMPARISON_OPERATOR={}));var StatusIcon,COMPARATOR_MAP={GTE:">=",GT:">",LTE:"<=",LT:"<",EQ:"="};!function(StatusIcon){StatusIcon.ERROR="error",StatusIcon.ACTIVE="active",StatusIcon.NORMAL="normal",StatusIcon.ACKNOWLEDGED="acknowledged",StatusIcon.SNOOZED="snoozed",StatusIcon.DISABLED="disabled",StatusIcon.LATCHED="latched"}(StatusIcon||(StatusIcon={}));var DATA_ALIGNMENT;StatusIcon.ERROR,StatusIcon.ACTIVE,StatusIcon.NORMAL,StatusIcon.ACKNOWLEDGED,StatusIcon.SNOOZED,StatusIcon.DISABLED,StatusIcon.LATCHED;!function(DATA_ALIGNMENT){DATA_ALIGNMENT.EITHER="EITHER",DATA_ALIGNMENT.RIGHT="RIGHT",DATA_ALIGNMENT.LEFT="LEFT"}(DATA_ALIGNMENT||(DATA_ALIGNMENT={}))},"../node_modules/@synchro-charts/core/dist/esm-es5/getDataPoints-6f8b4e89.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>getDataPoints});var getDataPoints=function(stream,resolution){return 0===resolution?stream.data:null==stream.aggregates?[]:stream.aggregates[resolution]||[]}},"../node_modules/@synchro-charts/core/dist/esm-es5/number-a7331d73.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>isNumeric,r:()=>round});var round=function(num){if(Number.isNaN(num)||num===1/0||num===-1/0)return num;if(Math.abs(num)<1)return Number(num.toPrecision(4));var integer=Math.trunc(num);return Number((integer+Number((num-integer).toFixed(4))).toFixed(4))},isNumeric=function(value){return/^(\+|-)?(Infinity|\d+)(\.\d+)?e?((\+|-)?\d+)?$/.test(String(value))}},"../node_modules/@synchro-charts/core/dist/esm-es5/sc-table-cell.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{sc_table_cell:()=>ScTableCell});var _index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/index-0c943849.js"),_constants_35570903_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/constants-35570903.js"),_getDataPoints_6f8b4e89_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/getDataPoints-6f8b4e89.js"),_Value_9ca575b7_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/Value-9ca575b7.js"),ScTableCell=function(){function ScTableCell(hostRef){var _this=this;(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.value=function(){var _a=(_this.cell||{}).dataStream,dataStream=void 0===_a?void 0:_a,points=dataStream?(0,_getDataPoints_6f8b4e89_js__WEBPACK_IMPORTED_MODULE_3__.g)(dataStream,dataStream.resolution):[];if(0!==points.length)return points[points.length-1].y}}return ScTableCell.prototype.render=function(){var _a=this.cell||{},_b=_a.dataStream,dataStream=void 0===_b?void 0:_b,_c=_a.color,color=void 0===_c?void 0:_c,_d=_a.icon,icon=void 0===_d?void 0:_d,error=dataStream&&dataStream.error,isLoading=dataStream&&dataStream.isLoading;return null!=error?(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"error"},(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("sc-chart-icon",{name:_constants_35570903_js__WEBPACK_IMPORTED_MODULE_1__.b.ERROR}),error):isLoading?(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"loading-wrapper"},(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("sc-loading-spinner",null)):this.cell&&this.cell.dataStream&&(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("span",{style:{color:color||"unset",display:"flex"}},icon&&(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("sc-chart-icon",{name:icon}),(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)(_Value_9ca575b7_js__WEBPACK_IMPORTED_MODULE_2__.V,{value:this.value()}))},ScTableCell}()},"../node_modules/@synchro-charts/core/dist/esm-es5/terms-d11f73d5.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>NO_VALUE_PRESENT,a:()=>NO_DATA_STREAMS_PRESENT_HEADER,b:()=>NO_DATA_STREAMS_PRESENT_SUB_HEADER,c:()=>NO_DATA_PRESENT_HEADER,d:()=>NO_DATA_PRESENT_SUB_HEADER});var NO_VALUE_PRESENT="-",NO_DATA_STREAMS_PRESENT_HEADER="No properties or alarms",NO_DATA_STREAMS_PRESENT_SUB_HEADER="This widget doesn't have any properties or alarms.",NO_DATA_PRESENT_HEADER="No data",NO_DATA_PRESENT_SUB_HEADER="There's no data to display for this time range."}}]);