"use strict";(self.webpackChunk_iot_app_kit_doc_site=self.webpackChunk_iot_app_kit_doc_site||[]).push([[8469],{"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/active-router-6c511761.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>ActiveRouter});var defaultState,consumerRender,listeners,currentState,updateListener,subscribe,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/index-c7728300.js"),__spreadArrays=function(){for(var s=0,i=0,il=arguments.length;i<il;i++)s+=arguments[i].length;var r=Array(s),k=0;for(i=0;i<il;i++)for(var a=arguments[i],j=0,jl=a.length;j<jl;j++,k++)r[k]=a[j];return r},ActiveRouter=(defaultState={historyType:"browser",location:{pathname:"",query:{},key:""},titleSuffix:"",root:"/",routeViewsUpdated:function(){}},consumerRender=function(subscribe,child){return(0,_index_c7728300_js__WEBPACK_IMPORTED_MODULE_0__.h)("context-consumer",{subscribe,renderer:child})},listeners=new Map,currentState=defaultState,updateListener=function(fields,instance){Array.isArray(fields)?__spreadArrays(fields).forEach((function(fieldName){instance[fieldName]=currentState[fieldName]})):instance[fields]=Object.assign({},currentState)},subscribe=function(instance,propList){return listeners.has(instance)||(listeners.set(instance,propList),updateListener(propList,instance)),function(){listeners.has(instance)&&listeners.delete(instance)}},{Provider:function(_a,children){var state=_a.state;return currentState=state,listeners.forEach(updateListener),children},Consumer:function(props,children){return consumerRender(subscribe,children[0])},injectProps:function(Cstr,fieldList){var CstrPrototype=Cstr.prototype,cstrConnectedCallback=CstrPrototype.connectedCallback,cstrDisconnectedCallback=CstrPrototype.disconnectedCallback;CstrPrototype.connectedCallback=function(){if(subscribe(this,fieldList),cstrConnectedCallback)return cstrConnectedCallback.call(this)},CstrPrototype.disconnectedCallback=function(){listeners.delete(this),cstrDisconnectedCallback&&cstrDisconnectedCallback.call(this)}}})},"../node_modules/@iot-app-kit-visualizations/core/dist/esm-es5/dom-utils-97f33dea.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>matchesAreEqual,b:()=>supportsHistory,c:()=>supportsPopStateOnHashChange,d:()=>stripTrailingSlash,e:()=>addLeadingSlash,f:()=>createLocation,g:()=>createKey,h:()=>hasBasename,i:()=>stripBasename,j:()=>createPath,k:()=>getConfirmation,l:()=>isExtraneousPopstateEvent,m:()=>matchPath,n:()=>supportsGoWithoutReloadUsingHash,o:()=>stripLeadingSlash,p:()=>locationsAreEqual,q:()=>isModifiedEvent,s:()=>storageAvailable});var PATH_REGEXP=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g"),escapeString=function(str){return str.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")},escapeGroup=function(group){return group.replace(/([=!:$/()])/g,"\\$1")},flags=function(options){return options&&options.sensitive?"":"i"},stringToRegexp=function(path,keys,options){return tokensToRegExp(function(str,options){for(var res,tokens=[],key=0,index=0,path="",defaultDelimiter=options&&options.delimiter||"/",delimiters=options&&options.delimiters||"./",pathEscaped=!1;null!==(res=PATH_REGEXP.exec(str));){var m=res[0],escaped=res[1],offset=res.index;if(path+=str.slice(index,offset),index=offset+m.length,escaped)path+=escaped[1],pathEscaped=!0;else{var prev="",next=str[index],name=res[2],capture=res[3],group=res[4],modifier=res[5];if(!pathEscaped&&path.length){var k=path.length-1;delimiters.indexOf(path[k])>-1&&(prev=path[k],path=path.slice(0,k))}path&&(tokens.push(path),path="",pathEscaped=!1);var partial=""!==prev&&void 0!==next&&next!==prev,repeat="+"===modifier||"*"===modifier,optional="?"===modifier||"*"===modifier,delimiter=prev||defaultDelimiter,pattern=capture||group;tokens.push({name:name||key++,prefix:prev,delimiter,optional,repeat,partial,pattern:pattern?escapeGroup(pattern):"[^"+escapeString(delimiter)+"]+?"})}}return(path||index<str.length)&&tokens.push(path+str.substr(index)),tokens}(path,options),keys,options)},tokensToRegExp=function(tokens,keys,options){for(var strict=(options=options||{}).strict,end=!1!==options.end,delimiter=escapeString(options.delimiter||"/"),delimiters=options.delimiters||"./",endsWith=[].concat(options.endsWith||[]).map(escapeString).concat("$").join("|"),route="",isEndDelimited=!1,i=0;i<tokens.length;i++){var token=tokens[i];if("string"==typeof token)route+=escapeString(token),isEndDelimited=i===tokens.length-1&&delimiters.indexOf(token[token.length-1])>-1;else{var prefix=escapeString(token.prefix||""),capture=token.repeat?"(?:"+token.pattern+")(?:"+prefix+"(?:"+token.pattern+"))*":token.pattern;keys&&keys.push(token),token.optional?token.partial?route+=prefix+"("+capture+")?":route+="(?:"+prefix+"("+capture+"))?":route+=prefix+"("+capture+")"}}return end?(strict||(route+="(?:"+delimiter+")?"),route+="$"===endsWith?"$":"(?="+endsWith+")"):(strict||(route+="(?:"+delimiter+"(?="+endsWith+"))?"),isEndDelimited||(route+="(?="+delimiter+"|"+endsWith+")")),new RegExp("^"+route,flags(options))},pathToRegexp=function(path,keys,options){return path instanceof RegExp?function(path,keys){if(!keys)return path;var groups=path.source.match(/\((?!\?)/g);if(groups)for(var i=0;i<groups.length;i++)keys.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return path}(path,keys):Array.isArray(path)?function(path,keys,options){for(var parts=[],i=0;i<path.length;i++)parts.push(pathToRegexp(path[i],keys,options).source);return new RegExp("(?:"+parts.join("|")+")",flags(options))}(path,keys,options):stringToRegexp(path,keys,options)},hasBasename=function(path,prefix){return new RegExp("^"+prefix+"(\\/|\\?|#|$)","i").test(path)},stripBasename=function(path,prefix){return hasBasename(path,prefix)?path.substr(prefix.length):path},stripTrailingSlash=function(path){return"/"===path.charAt(path.length-1)?path.slice(0,-1):path},addLeadingSlash=function(path){return"/"===path.charAt(0)?path:"/"+path},stripLeadingSlash=function(path){return"/"===path.charAt(0)?path.substr(1):path},createPath=function(location){var pathname=location.pathname,search=location.search,hash=location.hash,path=pathname||"/";return search&&"?"!==search&&(path+="?"===search.charAt(0)?search:"?"+search),hash&&"#"!==hash&&(path+="#"===hash.charAt(0)?hash:"#"+hash),path},isAbsolute=function(pathname){return"/"===pathname.charAt(0)},createKey=function(keyLength){return Math.random().toString(36).substr(2,keyLength)},spliceOne=function(list,index){for(var i=index,k=i+1,n=list.length;k<n;i+=1,k+=1)list[i]=list[k];list.pop()},valueEqual=function(a,b){if(a===b)return!0;if(null==a||null==b)return!1;if(Array.isArray(a))return Array.isArray(b)&&a.length===b.length&&a.every((function(item,index){return valueEqual(item,b[index])}));var aType=typeof a;if(aType!==typeof b)return!1;if("object"===aType){var aValue=a.valueOf(),bValue=b.valueOf();if(aValue!==a||bValue!==b)return valueEqual(aValue,bValue);var aKeys=Object.keys(a),bKeys=Object.keys(b);return aKeys.length===bKeys.length&&aKeys.every((function(key){return valueEqual(a[key],b[key])}))}return!1},locationsAreEqual=function(a,b){return a.pathname===b.pathname&&a.search===b.search&&a.hash===b.hash&&a.key===b.key&&valueEqual(a.state,b.state)},createLocation=function(path,state,key,currentLocation){var location,query;"string"==typeof path?(location=function(path){var pathname=path||"/",search="",hash="",hashIndex=pathname.indexOf("#");-1!==hashIndex&&(hash=pathname.substr(hashIndex),pathname=pathname.substr(0,hashIndex));var searchIndex=pathname.indexOf("?");return-1!==searchIndex&&(search=pathname.substr(searchIndex),pathname=pathname.substr(0,searchIndex)),{pathname,search:"?"===search?"":search,hash:"#"===hash?"":hash,query:{},key:""}}(path),void 0!==state&&(location.state=state)):((location=Object.assign({pathname:""},path)).search&&"?"!==location.search.charAt(0)&&(location.search="?"+location.search),location.hash&&"#"!==location.hash.charAt(0)&&(location.hash="#"+location.hash),void 0!==state&&void 0===location.state&&(location.state=state));try{location.pathname=decodeURI(location.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+location.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return location.key=key,currentLocation?location.pathname?"/"!==location.pathname.charAt(0)&&(location.pathname=function(to,from){void 0===from&&(from="");var hasTrailingSlash,fromParts=from&&from.split("/")||[],up=0,toParts=to&&to.split("/")||[],isToAbs=to&&isAbsolute(to),isFromAbs=from&&isAbsolute(from),mustEndAbs=isToAbs||isFromAbs;if(to&&isAbsolute(to)?fromParts=toParts:toParts.length&&(fromParts.pop(),fromParts=fromParts.concat(toParts)),!fromParts.length)return"/";if(fromParts.length){var last=fromParts[fromParts.length-1];hasTrailingSlash="."===last||".."===last||""===last}else hasTrailingSlash=!1;for(var i=fromParts.length;i>=0;i--){var part=fromParts[i];"."===part?spliceOne(fromParts,i):".."===part?(spliceOne(fromParts,i),up++):up&&(spliceOne(fromParts,i),up--)}if(!mustEndAbs)for(;up--;up)fromParts.unshift("..");!mustEndAbs||""===fromParts[0]||fromParts[0]&&isAbsolute(fromParts[0])||fromParts.unshift("");var result=fromParts.join("/");return hasTrailingSlash&&"/"!==result.substr(-1)&&(result+="/"),result}(location.pathname,currentLocation.pathname)):location.pathname=currentLocation.pathname:location.pathname||(location.pathname="/"),location.query=(query=location.search||"")?(/^[?#]/.test(query)?query.slice(1):query).split("&").reduce((function(params,param){var _a=param.split("="),key=_a[0],value=_a[1];return params[key]=value?decodeURIComponent(value.replace(/\+/g," ")):"",params}),{}):{},location},cacheCount=0,patternCache={},matchPath=function(pathname,options){void 0===options&&(options={}),"string"==typeof options&&(options={path:options});var _a=options.path,path=void 0===_a?"/":_a,_b=options.exact,exact=void 0!==_b&&_b,_c=options.strict,_d=function(pattern,options){var cacheKey=""+options.end+options.strict,cache=patternCache[cacheKey]||(patternCache[cacheKey]={}),cachePattern=JSON.stringify(pattern);if(cache[cachePattern])return cache[cachePattern];var keys=[],compiledPattern={re:pathToRegexp(pattern,keys,options),keys};return cacheCount<1e4&&(cache[cachePattern]=compiledPattern,cacheCount+=1),compiledPattern}(path,{end:exact,strict:void 0!==_c&&_c}),re=_d.re,keys=_d.keys,match=re.exec(pathname);if(!match)return null;var url=match[0],values=match.slice(1),isExact=pathname===url;return exact&&!isExact?null:{path,url:"/"===path&&""===url?"/":url,isExact,params:keys.reduce((function(memo,key,index){return memo[key.name]=values[index],memo}),{})}},matchesAreEqual=function(a,b){return null==a&&null==b||null!=b&&(a&&b&&a.path===b.path&&a.url===b.url&&valueEqual(a.params,b.params))},getConfirmation=function(win,message,callback){return callback(win.confirm(message))},isModifiedEvent=function(ev){return ev.metaKey||ev.altKey||ev.ctrlKey||ev.shiftKey},supportsHistory=function(win){var ua=win.navigator.userAgent;return(-1===ua.indexOf("Android 2.")&&-1===ua.indexOf("Android 4.0")||-1===ua.indexOf("Mobile Safari")||-1!==ua.indexOf("Chrome")||-1!==ua.indexOf("Windows Phone"))&&(win.history&&"pushState"in win.history)},supportsPopStateOnHashChange=function(nav){return-1===nav.userAgent.indexOf("Trident")},supportsGoWithoutReloadUsingHash=function(nav){return-1===nav.userAgent.indexOf("Firefox")},isExtraneousPopstateEvent=function(nav,event){return void 0===event.state&&-1===nav.userAgent.indexOf("CriOS")},storageAvailable=function(win,type){var storage=win[type],x="__storage_test__";try{return storage.setItem(x,x),storage.removeItem(x),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&0!==storage.length}}}}]);