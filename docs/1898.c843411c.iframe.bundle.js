"use strict";(self.webpackChunk_iot_app_kit_doc_site=self.webpackChunk_iot_app_kit_doc_site||[]).push([[1898],{"../node_modules/@synchro-charts/core/dist/esm-es5/stencil-async-content.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{stencil_async_content:()=>AsyncContent});var _index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@synchro-charts/core/dist/esm-es5/index-0c943849.js"),AsyncContent=function(){function AsyncContent(hostRef){(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.content=""}return AsyncContent.prototype.componentWillLoad=function(){if(null!=this.documentLocation)return this.fetchNewContent(this.documentLocation)},AsyncContent.prototype.fetchNewContent=function(newDocumentLocation){var _this=this;return fetch(newDocumentLocation).then((function(response){return response.text()})).then((function(data){_this.content=data}))},AsyncContent.prototype.render=function(){return(0,_index_0c943849_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{innerHTML:this.content})},Object.defineProperty(AsyncContent,"watchers",{get:function(){return{documentLocation:["fetchNewContent"]}},enumerable:!1,configurable:!0}),AsyncContent}()}}]);