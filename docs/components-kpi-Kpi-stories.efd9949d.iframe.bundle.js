"use strict";(self.webpackChunk_iot_app_kit_doc_site=self.webpackChunk_iot_app_kit_doc_site||[]).push([[3525],{"../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_inheritsLoose});var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,(0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.Z)(subClass,superClass)}},"../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}__webpack_require__.d(__webpack_exports__,{Z:()=>_setPrototypeOf})},"./stories/components/kpi/Kpi.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Empty:()=>Empty,Error:()=>Error,Loading:()=>Loading,Standard:()=>Standard,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _iot_app_kit_react_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../packages/react-components/dist/es/index.js"),_iot_app_kit_testing_util__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../packages/testing-util/dist/es/index.js"),_mockSinWaveData__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./stories/mockSinWaveData.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Kpi",component:_iot_app_kit_react_components__WEBPACK_IMPORTED_MODULE_0__.UA},Standard={args:{query:(0,_mockSinWaveData__WEBPACK_IMPORTED_MODULE_2__.m)("5s")}},Error={args:{query:(0,_iot_app_kit_testing_util__WEBPACK_IMPORTED_MODULE_1__._p)("some error message")}},Empty={args:{query:(0,_iot_app_kit_testing_util__WEBPACK_IMPORTED_MODULE_1__.Zv)([])}},Loading={args:{query:(0,_iot_app_kit_testing_util__WEBPACK_IMPORTED_MODULE_1__.nx)()}},__namedExportsOrder=["Standard","Error","Empty","Loading"];Standard.parameters={...Standard.parameters,docs:{...Standard.parameters?.docs,source:{originalSource:"{\n  args: {\n    query: mockSinWaveData('5s')\n  }\n}",...Standard.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  args: {\n    query: mockTimeSeriesDataQueryWithError('some error message')\n  }\n}",...Error.parameters?.docs?.source}}},Empty.parameters={...Empty.parameters,docs:{...Empty.parameters?.docs,source:{originalSource:"{\n  args: {\n    query: mockTimeSeriesDataQuery([])\n  }\n}",...Empty.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  args: {\n    query: mockTimeSeriesDataQueryLoading()\n  }\n}",...Loading.parameters?.docs?.source}}}}}]);