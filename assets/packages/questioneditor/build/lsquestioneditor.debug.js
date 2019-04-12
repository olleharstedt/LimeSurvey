'use strict';var _get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined;}else{return get(parent,property,receiver);}}else if("value"in desc){return desc.value;}else{var getter=desc.get;if(getter===undefined){return undefined;}return getter.call(receiver);}};var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/******/(function(modules){// webpackBootstrap
/******/// The module cache
/******/var installedModules={};/******//******/// The require function
/******/function __webpack_require__(moduleId){/******//******/// Check if module is in cache
/******/if(installedModules[moduleId]){/******/return installedModules[moduleId].exports;/******/}/******/// Create a new module (and put it into the cache)
/******/var module=installedModules[moduleId]={/******/i:moduleId,/******/l:false,/******/exports:{}/******/};/******//******/// Execute the module function
/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******//******/// Flag the module as loaded
/******/module.l=true;/******//******/// Return the exports of the module
/******/return module.exports;/******/}/******//******//******/// expose the modules object (__webpack_modules__)
/******/__webpack_require__.m=modules;/******//******/// expose the module cache
/******/__webpack_require__.c=installedModules;/******//******/// define getter function for harmony exports
/******/__webpack_require__.d=function(exports,name,getter){/******/if(!__webpack_require__.o(exports,name)){/******/Object.defineProperty(exports,name,{/******/configurable:false,/******/enumerable:true,/******/get:getter/******/});/******/}/******/};/******//******/// getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(module){/******/var getter=module&&module.__esModule?/******/function getDefault(){return module['default'];}:/******/function getModuleExports(){return module;};/******/__webpack_require__.d(getter,'a',getter);/******/return getter;/******/};/******//******/// Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};/******//******/// __webpack_public_path__
/******/__webpack_require__.p="";/******//******/// Load entry module and return exports
/******/return __webpack_require__(__webpack_require__.s=106);/******/})(/************************************************************************//******/[/* 0 *//***/function(module,exports){/* globals __VUE_SSR_CONTEXT__ */// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle
module.exports=function normalizeComponent(rawScriptExports,compiledTemplate,injectStyles,scopeId,moduleIdentifier/* server only */){var esModule;var scriptExports=rawScriptExports=rawScriptExports||{};// ES6 modules interop
var type=_typeof(rawScriptExports.default);if(type==='object'||type==='function'){esModule=rawScriptExports;scriptExports=rawScriptExports.default;}// Vue.extend constructor export interop
var options=typeof scriptExports==='function'?scriptExports.options:scriptExports;// render functions
if(compiledTemplate){options.render=compiledTemplate.render;options.staticRenderFns=compiledTemplate.staticRenderFns;}// scopedId
if(scopeId){options._scopeId=scopeId;}var hook;if(moduleIdentifier){// server build
hook=function hook(context){// 2.3 injection
context=context||// cached call
this.$vnode&&this.$vnode.ssrContext||// stateful
this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext;// functional
// 2.2 with runInNewContext: true
if(!context&&typeof __VUE_SSR_CONTEXT__!=='undefined'){context=__VUE_SSR_CONTEXT__;}// inject component styles
if(injectStyles){injectStyles.call(this,context);}// register component module identifier for async chunk inferrence
if(context&&context._registeredComponents){context._registeredComponents.add(moduleIdentifier);}};// used by ssr in case component is cached and beforeCreate
// never gets called
options._ssrRegister=hook;}else if(injectStyles){hook=injectStyles;}if(hook){var functional=options.functional;var existing=functional?options.render:options.beforeCreate;if(!functional){// inject component registration as beforeCreate hook
options.beforeCreate=existing?[].concat(existing,hook):[hook];}else{// register for functioal component in vue file
options.render=function renderWithStyleInjection(h,context){hook.call(context);return existing(h,context);};}}return{esModule:esModule,exports:scriptExports,options:options};};/***/},/* 1 *//***/function(module,exports){/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */var isArray=Array.isArray;module.exports=isArray;/***/},/* 2 *//***/function(module,exports){/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return value!=null&&(type=='object'||type=='function');}module.exports=isObject;/***/},/* 3 *//***/function(module,exports){/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/// css base code, injected by the css-loader
module.exports=function(useSourceMap){var list=[];// return the list of modules as css string
list.toString=function toString(){return this.map(function(item){var content=cssWithMappingToString(item,useSourceMap);if(item[2]){return"@media "+item[2]+"{"+content+"}";}else{return content;}}).join("");};// import a list of modules into the list
list.i=function(modules,mediaQuery){if(typeof modules==="string")modules=[[null,modules,""]];var alreadyImportedModules={};for(var i=0;i<this.length;i++){var id=this[i][0];if(typeof id==="number")alreadyImportedModules[id]=true;}for(i=0;i<modules.length;i++){var item=modules[i];// skip already imported module
// this implementation is not 100% perfect for weird media query combinations
//  when a module is imported multiple times with different media queries.
//  I hope this will never occur (Hey this way we have smaller bundles)
if(typeof item[0]!=="number"||!alreadyImportedModules[item[0]]){if(mediaQuery&&!item[2]){item[2]=mediaQuery;}else if(mediaQuery){item[2]="("+item[2]+") and ("+mediaQuery+")";}list.push(item);}}};return list;};function cssWithMappingToString(item,useSourceMap){var content=item[1]||'';var cssMapping=item[3];if(!cssMapping){return content;}if(useSourceMap&&typeof btoa==='function'){var sourceMapping=toComment(cssMapping);var sourceURLs=cssMapping.sources.map(function(source){return'/*# sourceURL='+cssMapping.sourceRoot+source+' */';});return[content].concat(sourceURLs).concat([sourceMapping]).join('\n');}return[content].join('\n');}// Adapted from convert-source-map (MIT)
function toComment(sourceMap){// eslint-disable-next-line no-undef
var base64=btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));var data='sourceMappingURL=data:application/json;charset=utf-8;base64,'+base64;return'/*# '+data+' */';}/***/},/* 4 *//***/function(module,exports,__webpack_require__){/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/var hasDocument=typeof document!=='undefined';if(typeof DEBUG!=='undefined'&&DEBUG){if(!hasDocument){throw new Error('vue-style-loader cannot be used in a non-browser environment. '+"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");}}var listToStyles=__webpack_require__(115);/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/var stylesInDom={/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/};var head=hasDocument&&(document.head||document.getElementsByTagName('head')[0]);var singletonElement=null;var singletonCounter=0;var isProduction=false;var noop=function noop(){};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE=typeof navigator!=='undefined'&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());module.exports=function(parentId,list,_isProduction){isProduction=_isProduction;var styles=listToStyles(parentId,list);addStylesToDom(styles);return function update(newList){var mayRemove=[];for(var i=0;i<styles.length;i++){var item=styles[i];var domStyle=stylesInDom[item.id];domStyle.refs--;mayRemove.push(domStyle);}if(newList){styles=listToStyles(parentId,newList);addStylesToDom(styles);}else{styles=[];}for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(domStyle.refs===0){for(var j=0;j<domStyle.parts.length;j++){domStyle.parts[j]();}delete stylesInDom[domStyle.id];}}};};function addStylesToDom(styles/* Array<StyleObject> */){for(var i=0;i<styles.length;i++){var item=styles[i];var domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++){domStyle.parts[j](item.parts[j]);}for(;j<item.parts.length;j++){domStyle.parts.push(addStyle(item.parts[j]));}if(domStyle.parts.length>item.parts.length){domStyle.parts.length=item.parts.length;}}else{var parts=[];for(var j=0;j<item.parts.length;j++){parts.push(addStyle(item.parts[j]));}stylesInDom[item.id]={id:item.id,refs:1,parts:parts};}}}function createStyleElement(){var styleElement=document.createElement('style');styleElement.type='text/css';head.appendChild(styleElement);return styleElement;}function addStyle(obj/* StyleObjectPart */){var update,remove;var styleElement=document.querySelector('style[data-vue-ssr-id~="'+obj.id+'"]');if(styleElement){if(isProduction){// has SSR styles and in production mode.
// simply do nothing.
return noop;}else{// has SSR styles but in dev mode.
// for some reason Chrome can't handle source map in server-rendered
// style tags - source maps in <style> only works if the style tag is
// created and inserted dynamically. So we remove the server rendered
// styles and inject new ones.
styleElement.parentNode.removeChild(styleElement);}}if(isOldIE){// use singleton mode for IE9.
var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement());update=applyToSingletonTag.bind(null,styleElement,styleIndex,false);remove=applyToSingletonTag.bind(null,styleElement,styleIndex,true);}else{// use multi-style-tag mode in all other cases
styleElement=createStyleElement();update=applyToTag.bind(null,styleElement);remove=function remove(){styleElement.parentNode.removeChild(styleElement);};}update(obj);return function updateStyle(newObj/* StyleObjectPart */){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}var replaceText=function(){var textStore=[];return function(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?'':obj.css;if(styleElement.styleSheet){styleElement.styleSheet.cssText=replaceText(index,css);}else{var cssNode=document.createTextNode(css);var childNodes=styleElement.childNodes;if(childNodes[index])styleElement.removeChild(childNodes[index]);if(childNodes.length){styleElement.insertBefore(cssNode,childNodes[index]);}else{styleElement.appendChild(cssNode);}}}function applyToTag(styleElement,obj){var css=obj.css;var media=obj.media;var sourceMap=obj.sourceMap;if(media){styleElement.setAttribute('media',media);}if(sourceMap){// https://developer.chrome.com/devtools/docs/javascript-debugging
// this makes source maps inside style tags work properly in Chrome
css+='\n/*# sourceURL='+sourceMap.sources[0]+' */';// http://stackoverflow.com/a/26603875
css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}if(styleElement.styleSheet){styleElement.styleSheet.cssText=css;}else{while(styleElement.firstChild){styleElement.removeChild(styleElement.firstChild);}styleElement.appendChild(document.createTextNode(css));}}/***/},/* 5 *//***/function(module,exports,__webpack_require__){var baseKeys=__webpack_require__(43),getTag=__webpack_require__(37),isArguments=__webpack_require__(19),isArray=__webpack_require__(1),isArrayLike=__webpack_require__(10),isBuffer=__webpack_require__(20),isPrototype=__webpack_require__(31),isTypedArray=__webpack_require__(30);/** `Object#toString` result references. */var mapTag='[object Map]',setTag='[object Set]';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */function isEmpty(value){if(value==null){return true;}if(isArrayLike(value)&&(isArray(value)||typeof value=='string'||typeof value.splice=='function'||isBuffer(value)||isTypedArray(value)||isArguments(value))){return!value.length;}var tag=getTag(value);if(tag==mapTag||tag==setTag){return!value.size;}if(isPrototype(value)){return!baseKeys(value).length;}for(var key in value){if(hasOwnProperty.call(value,key)){return false;}}return true;}module.exports=isEmpty;/***/},/* 6 *//***/function(module,exports,__webpack_require__){var arrayLikeKeys=__webpack_require__(63),baseKeys=__webpack_require__(43),isArrayLike=__webpack_require__(10);/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}module.exports=keys;/***/},/* 7 *//***/function(module,exports,__webpack_require__){var freeGlobal=__webpack_require__(64);/** Detect free variable `self`. */var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();module.exports=root;/***/},/* 8 *//***/function(module,exports,__webpack_require__){var arrayEach=__webpack_require__(61),baseEach=__webpack_require__(28),castFunction=__webpack_require__(133),isArray=__webpack_require__(1);/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */function forEach(collection,iteratee){var func=isArray(collection)?arrayEach:baseEach;return func(collection,castFunction(iteratee));}module.exports=forEach;/***/},/* 9 *//***/function(module,exports){/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return value!=null&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';}module.exports=isObjectLike;/***/},/* 10 *//***/function(module,exports,__webpack_require__){var isFunction=__webpack_require__(44),isLength=__webpack_require__(42);/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}module.exports=isArrayLike;/***/},/* 11 *//***/function(module,exports,__webpack_require__){var baseMerge=__webpack_require__(196),createAssigner=__webpack_require__(204);/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */var merge=createAssigner(function(object,source,srcIndex){baseMerge(object,source,srcIndex);});module.exports=merge;/***/},/* 12 *//***/function(module,exports,__webpack_require__){var _Symbol=__webpack_require__(14),getRawTag=__webpack_require__(126),objectToString=__webpack_require__(127);/** `Object#toString` result references. */var nullTag='[object Null]',undefinedTag='[object Undefined]';/** Built-in value references. */var symToStringTag=_Symbol?_Symbol.toStringTag:undefined;/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){if(value==null){return value===undefined?undefinedTag:nullTag;}return symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value);}module.exports=baseGetTag;/***/},/* 13 *//***/function(module,exports,__webpack_require__){var baseIsNative=__webpack_require__(147),getValue=__webpack_require__(150);/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}module.exports=getNative;/***/},/* 14 *//***/function(module,exports,__webpack_require__){var root=__webpack_require__(7);/** Built-in value references. */var _Symbol2=root.Symbol;module.exports=_Symbol2;/***/},/* 15 *//***/function(module,exports){/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */function identity(value){return value;}module.exports=identity;/***/},/* 16 *//***/function(module,exports,__webpack_require__){var baseGetTag=__webpack_require__(12),isObjectLike=__webpack_require__(9);/** `Object#toString` result references. */var symbolTag='[object Symbol]';/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function isSymbol(value){return(typeof value==='undefined'?'undefined':_typeof(value))=='symbol'||isObjectLike(value)&&baseGetTag(value)==symbolTag;}module.exports=isSymbol;/***/},/* 17 *//***/function(module,exports,__webpack_require__){var isSymbol=__webpack_require__(16);/** Used as references for various `Number` constants. */var INFINITY=1/0;/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}module.exports=toKey;/***/},/* 18 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony default export */__webpack_exports__["a"]={props:{event:{type:Object,default:null}},watch:{event:function event(newEvent,oldEvent){if(newEvent!==null){if(this.$options.name==newEvent.target&&typeof this[newEvent.method]=='function'){try{this[newEvent.method](newEvent.content);this.$emit('eventSet');}catch(e){this.$log.error('Event handling errored',e);}return;}this.$log.log('Event skipped to next child',newEvent,this.name);}}},methods:{eventSet:function eventSet(){this.$emit('eventSet');}}};/***/},/* 19 *//***/function(module,exports,__webpack_require__){var baseIsArguments=__webpack_require__(125),isObjectLike=__webpack_require__(9);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Built-in value references. */var propertyIsEnumerable=objectProto.propertyIsEnumerable;/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */var isArguments=baseIsArguments(function(){return arguments;}())?baseIsArguments:function(value){return isObjectLike(value)&&hasOwnProperty.call(value,'callee')&&!propertyIsEnumerable.call(value,'callee');};module.exports=isArguments;/***/},/* 20 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var root=__webpack_require__(7),stubFalse=__webpack_require__(128);/** Detect free variable `exports`. */var freeExports=(typeof exports==='undefined'?'undefined':_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&(typeof module==='undefined'?'undefined':_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeIsBuffer=Buffer?Buffer.isBuffer:undefined;/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;module.exports=isBuffer;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(29)(module));/***/},/* 21 *//***/function(module,exports){/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}module.exports=isIndex;/***/},/* 22 *//***/function(module,exports,__webpack_require__){var arrayFilter=__webpack_require__(67),baseFilter=__webpack_require__(134),baseIteratee=__webpack_require__(23),isArray=__webpack_require__(1);/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */function filter(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,baseIteratee(predicate,3));}module.exports=filter;/***/},/* 23 *//***/function(module,exports,__webpack_require__){var baseMatches=__webpack_require__(135),baseMatchesProperty=__webpack_require__(176),identity=__webpack_require__(15),isArray=__webpack_require__(1),property=__webpack_require__(185);/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
if(typeof value=='function'){return value;}if(value==null){return identity;}if((typeof value==='undefined'?'undefined':_typeof(value))=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}module.exports=baseIteratee;/***/},/* 24 *//***/function(module,exports){/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function eq(value,other){return value===other||value!==value&&other!==other;}module.exports=eq;/***/},/* 25 *//***/function(module,exports,__webpack_require__){var isArray=__webpack_require__(1),isKey=__webpack_require__(50),stringToPath=__webpack_require__(178),toString=__webpack_require__(181);/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */function castPath(value,object){if(isArray(value)){return value;}return isKey(value,object)?[value]:stringToPath(toString(value));}module.exports=castPath;/***/},/* 26 *//***/function(module,exports,__webpack_require__){var assignValue=__webpack_require__(55),baseAssignValue=__webpack_require__(52);/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function copyObject(source,props,object,customizer){var isNew=!object;object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;if(newValue===undefined){newValue=source[key];}if(isNew){baseAssignValue(object,key,newValue);}else{assignValue(object,key,newValue);}}return object;}module.exports=copyObject;/***/},/* 27 *//***/function(module,exports){var g;// This works in non-strict mode
g=function(){return this;}();try{// This works if eval is allowed (see CSP)
g=g||Function("return this")()||(1,eval)("this");}catch(e){// This works if the window reference is available
if((typeof window==='undefined'?'undefined':_typeof(window))==="object")g=window;}// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
module.exports=g;/***/},/* 28 *//***/function(module,exports,__webpack_require__){var baseForOwn=__webpack_require__(122),createBaseEach=__webpack_require__(132);/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */var baseEach=createBaseEach(baseForOwn);module.exports=baseEach;/***/},/* 29 *//***/function(module,exports){module.exports=function(module){if(!module.webpackPolyfill){module.deprecate=function(){};module.paths=[];// module.parent = undefined by default
if(!module.children)module.children=[];Object.defineProperty(module,"loaded",{enumerable:true,get:function get(){return module.l;}});Object.defineProperty(module,"id",{enumerable:true,get:function get(){return module.i;}});module.webpackPolyfill=1;}return module;};/***/},/* 30 *//***/function(module,exports,__webpack_require__){var baseIsTypedArray=__webpack_require__(129),baseUnary=__webpack_require__(65),nodeUtil=__webpack_require__(130);/* Node.js helper references. */var nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;module.exports=isTypedArray;/***/},/* 31 *//***/function(module,exports){/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}module.exports=isPrototype;/***/},/* 32 *//***/function(module,exports,__webpack_require__){var ListCache=__webpack_require__(33),stackClear=__webpack_require__(142),stackDelete=__webpack_require__(143),stackGet=__webpack_require__(144),stackHas=__webpack_require__(145),stackSet=__webpack_require__(146);/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(entries){var data=this.__data__=new ListCache(entries);this.size=data.size;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;module.exports=Stack;/***/},/* 33 *//***/function(module,exports,__webpack_require__){var listCacheClear=__webpack_require__(137),listCacheDelete=__webpack_require__(138),listCacheGet=__webpack_require__(139),listCacheHas=__webpack_require__(140),listCacheSet=__webpack_require__(141);/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;module.exports=ListCache;/***/},/* 34 *//***/function(module,exports,__webpack_require__){var eq=__webpack_require__(24);/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}module.exports=assocIndexOf;/***/},/* 35 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(13);/* Built-in method references that are verified to be native. */var nativeCreate=getNative(Object,'create');module.exports=nativeCreate;/***/},/* 36 *//***/function(module,exports,__webpack_require__){var isKeyable=__webpack_require__(159);/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}module.exports=getMapData;/***/},/* 37 *//***/function(module,exports,__webpack_require__){var DataView=__webpack_require__(171),Map=__webpack_require__(45),Promise=__webpack_require__(172),Set=__webpack_require__(173),WeakMap=__webpack_require__(174),baseGetTag=__webpack_require__(12),toSource=__webpack_require__(68);/** `Object#toString` result references. */var mapTag='[object Map]',objectTag='[object Object]',promiseTag='[object Promise]',setTag='[object Set]',weakMapTag='[object WeakMap]';var dataViewTag='[object DataView]';/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=baseGetTag(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):'';if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}module.exports=getTag;/***/},/* 38 *//***/function(module,exports,__webpack_require__){var castPath=__webpack_require__(25),toKey=__webpack_require__(17);/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */function baseGet(object,path){path=castPath(path,object);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}module.exports=baseGet;/***/},/* 39 *//***/function(module,exports,__webpack_require__){var arrayReduce=__webpack_require__(51),baseEach=__webpack_require__(28),baseIteratee=__webpack_require__(23),baseReduce=__webpack_require__(187),isArray=__webpack_require__(1);/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */function reduce(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduce:baseReduce,initAccum=arguments.length<3;return func(collection,baseIteratee(iteratee,4),accumulator,initAccum,baseEach);}module.exports=reduce;/***/},/* 40 *//***/function(module,exports,__webpack_require__){var arrayLikeKeys=__webpack_require__(63),baseKeysIn=__webpack_require__(202),isArrayLike=__webpack_require__(10);/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}module.exports=keysIn;/***/},/* 41 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* WEBPACK VAR INJECTION */(function(global,setImmediate){/*!
 * Vue.js v2.5.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 *//*  */// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef(v){return v===undefined||v===null;}function isDef(v){return v!==undefined&&v!==null;}function isTrue(v){return v===true;}function isFalse(v){return v===false;}/**
 * Check if value is primitive
 */function isPrimitive(value){return typeof value==='string'||typeof value==='number'||typeof value==='boolean';}/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */function isObject(obj){return obj!==null&&(typeof obj==='undefined'?'undefined':_typeof(obj))==='object';}/**
 * Get the raw type string of a value e.g. [object Object]
 */var _toString=Object.prototype.toString;function toRawType(value){return _toString.call(value).slice(8,-1);}/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */function isPlainObject(obj){return _toString.call(obj)==='[object Object]';}function isRegExp(v){return _toString.call(v)==='[object RegExp]';}/**
 * Check if val is a valid array index.
 */function isValidArrayIndex(val){var n=parseFloat(String(val));return n>=0&&Math.floor(n)===n&&isFinite(val);}/**
 * Convert a value to a string that is actually rendered.
 */function toString(val){return val==null?'':(typeof val==='undefined'?'undefined':_typeof(val))==='object'?JSON.stringify(val,null,2):String(val);}/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */function toNumber(val){var n=parseFloat(val);return isNaN(n)?val:n;}/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */function makeMap(str,expectsLowerCase){var map=Object.create(null);var list=str.split(',');for(var i=0;i<list.length;i++){map[list[i]]=true;}return expectsLowerCase?function(val){return map[val.toLowerCase()];}:function(val){return map[val];};}/**
 * Check if a tag is a built-in tag.
 */var isBuiltInTag=makeMap('slot,component',true);/**
 * Check if a attribute is a reserved attribute.
 */var isReservedAttribute=makeMap('key,ref,slot,slot-scope,is');/**
 * Remove an item from an array
 */function remove(arr,item){if(arr.length){var index=arr.indexOf(item);if(index>-1){return arr.splice(index,1);}}}/**
 * Check whether the object has the property.
 */var hasOwnProperty=Object.prototype.hasOwnProperty;function hasOwn(obj,key){return hasOwnProperty.call(obj,key);}/**
 * Create a cached version of a pure function.
 */function cached(fn){var cache=Object.create(null);return function cachedFn(str){var hit=cache[str];return hit||(cache[str]=fn(str));};}/**
 * Camelize a hyphen-delimited string.
 */var camelizeRE=/-(\w)/g;var camelize=cached(function(str){return str.replace(camelizeRE,function(_,c){return c?c.toUpperCase():'';});});/**
 * Capitalize a string.
 */var capitalize=cached(function(str){return str.charAt(0).toUpperCase()+str.slice(1);});/**
 * Hyphenate a camelCase string.
 */var hyphenateRE=/\B([A-Z])/g;var hyphenate=cached(function(str){return str.replace(hyphenateRE,'-$1').toLowerCase();});/**
 * Simple bind, faster than native
 */function bind(fn,ctx){function boundFn(a){var l=arguments.length;return l?l>1?fn.apply(ctx,arguments):fn.call(ctx,a):fn.call(ctx);}// record original fn length
boundFn._length=fn.length;return boundFn;}/**
 * Convert an Array-like object to a real Array.
 */function toArray(list,start){start=start||0;var i=list.length-start;var ret=new Array(i);while(i--){ret[i]=list[i+start];}return ret;}/**
 * Mix properties into target object.
 */function extend(to,_from){for(var key in _from){to[key]=_from[key];}return to;}/**
 * Merge an Array of Objects into a single Object.
 */function toObject(arr){var res={};for(var i=0;i<arr.length;i++){if(arr[i]){extend(res,arr[i]);}}return res;}/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */function noop(a,b,c){}/**
 * Always return false.
 */var no=function no(a,b,c){return false;};/**
 * Return same value
 */var identity=function identity(_){return _;};/**
 * Generate a static keys string from compiler modules.
 */function genStaticKeys(modules){return modules.reduce(function(keys,m){return keys.concat(m.staticKeys||[]);},[]).join(',');}/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */function looseEqual(a,b){if(a===b){return true;}var isObjectA=isObject(a);var isObjectB=isObject(b);if(isObjectA&&isObjectB){try{var isArrayA=Array.isArray(a);var isArrayB=Array.isArray(b);if(isArrayA&&isArrayB){return a.length===b.length&&a.every(function(e,i){return looseEqual(e,b[i]);});}else if(!isArrayA&&!isArrayB){var keysA=Object.keys(a);var keysB=Object.keys(b);return keysA.length===keysB.length&&keysA.every(function(key){return looseEqual(a[key],b[key]);});}else{/* istanbul ignore next */return false;}}catch(e){/* istanbul ignore next */return false;}}else if(!isObjectA&&!isObjectB){return String(a)===String(b);}else{return false;}}function looseIndexOf(arr,val){for(var i=0;i<arr.length;i++){if(looseEqual(arr[i],val)){return i;}}return-1;}/**
 * Ensure a function is called only once.
 */function once(fn){var called=false;return function(){if(!called){called=true;fn.apply(this,arguments);}};}var SSR_ATTR='data-server-rendered';var ASSET_TYPES=['component','directive','filter'];var LIFECYCLE_HOOKS=['beforeCreate','created','beforeMount','mounted','beforeUpdate','updated','beforeDestroy','destroyed','activated','deactivated','errorCaptured'];/*  */var config={/**
   * Option merge strategies (used in core/util/options)
   */optionMergeStrategies:Object.create(null),/**
   * Whether to suppress warnings.
   */silent:false,/**
   * Show production mode tip message on boot?
   */productionTip:"production"!=='production',/**
   * Whether to enable devtools
   */devtools:"production"!=='production',/**
   * Whether to record perf
   */performance:false,/**
   * Error handler for watcher errors
   */errorHandler:null,/**
   * Warn handler for watcher warns
   */warnHandler:null,/**
   * Ignore certain custom elements
   */ignoredElements:[],/**
   * Custom user key aliases for v-on
   */keyCodes:Object.create(null),/**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */isReservedTag:no,/**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */isReservedAttr:no,/**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */isUnknownElement:no,/**
   * Get the namespace of an element
   */getTagNamespace:noop,/**
   * Parse the real tag name for the specific platform.
   */parsePlatformTagName:identity,/**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */mustUseProp:no,/**
   * Exposed for legacy reasons
   */_lifecycleHooks:LIFECYCLE_HOOKS};/*  */var emptyObject=Object.freeze({});/**
 * Check if a string starts with $ or _
 */function isReserved(str){var c=(str+'').charCodeAt(0);return c===0x24||c===0x5F;}/**
 * Define a property.
 */function def(obj,key,val,enumerable){Object.defineProperty(obj,key,{value:val,enumerable:!!enumerable,writable:true,configurable:true});}/**
 * Parse simple path.
 */var bailRE=/[^\w.$]/;function parsePath(path){if(bailRE.test(path)){return;}var segments=path.split('.');return function(obj){for(var i=0;i<segments.length;i++){if(!obj){return;}obj=obj[segments[i]];}return obj;};}/*  */// can we use __proto__?
var hasProto='__proto__'in{};// Browser environment sniffing
var inBrowser=typeof window!=='undefined';var UA=inBrowser&&window.navigator.userAgent.toLowerCase();var isIE=UA&&/msie|trident/.test(UA);var isIE9=UA&&UA.indexOf('msie 9.0')>0;var isEdge=UA&&UA.indexOf('edge/')>0;var isAndroid=UA&&UA.indexOf('android')>0;var isIOS=UA&&/iphone|ipad|ipod|ios/.test(UA);var isChrome=UA&&/chrome\/\d+/.test(UA)&&!isEdge;// Firefox has a "watch" function on Object.prototype...
var nativeWatch={}.watch;var supportsPassive=false;if(inBrowser){try{var opts={};Object.defineProperty(opts,'passive',{get:function get(){/* istanbul ignore next */supportsPassive=true;}});// https://github.com/facebook/flow/issues/285
window.addEventListener('test-passive',null,opts);}catch(e){}}// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;var isServerRendering=function isServerRendering(){if(_isServer===undefined){/* istanbul ignore if */if(!inBrowser&&typeof global!=='undefined'){// detect presence of vue-server-renderer and avoid
// Webpack shimming the process
_isServer=global['process'].env.VUE_ENV==='server';}else{_isServer=false;}}return _isServer;};// detect devtools
var devtools=inBrowser&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;/* istanbul ignore next */function isNative(Ctor){return typeof Ctor==='function'&&/native code/.test(Ctor.toString());}var hasSymbol=typeof Symbol!=='undefined'&&isNative(Symbol)&&typeof Reflect!=='undefined'&&isNative(Reflect.ownKeys);var _Set;/* istanbul ignore if */// $flow-disable-line
if(typeof Set!=='undefined'&&isNative(Set)){// use native Set when available.
_Set=Set;}else{// a non-standard Set polyfill that only works with primitive keys.
_Set=function(){function Set(){this.set=Object.create(null);}Set.prototype.has=function has(key){return this.set[key]===true;};Set.prototype.add=function add(key){this.set[key]=true;};Set.prototype.clear=function clear(){this.set=Object.create(null);};return Set;}();}/*  */var warn=noop;var tip=noop;var generateComponentTrace=noop;// work around flow check
var formatComponentName=noop;if(false){var hasConsole=typeof console!=='undefined';var classifyRE=/(?:^|[-_])(\w)/g;var classify=function classify(str){return str.replace(classifyRE,function(c){return c.toUpperCase();}).replace(/[-_]/g,'');};warn=function warn(msg,vm){var trace=vm?generateComponentTrace(vm):'';if(config.warnHandler){config.warnHandler.call(null,msg,vm,trace);}else if(hasConsole&&!config.silent){console.error("[Vue warn]: "+msg+trace);}};tip=function tip(msg,vm){if(hasConsole&&!config.silent){console.warn("[Vue tip]: "+msg+(vm?generateComponentTrace(vm):''));}};formatComponentName=function formatComponentName(vm,includeFile){if(vm.$root===vm){return'<Root>';}var options=typeof vm==='function'&&vm.cid!=null?vm.options:vm._isVue?vm.$options||vm.constructor.options:vm||{};var name=options.name||options._componentTag;var file=options.__file;if(!name&&file){var match=file.match(/([^/\\]+)\.vue$/);name=match&&match[1];}return(name?"<"+classify(name)+">":"<Anonymous>")+(file&&includeFile!==false?" at "+file:'');};var repeat=function repeat(str,n){var res='';while(n){if(n%2===1){res+=str;}if(n>1){str+=str;}n>>=1;}return res;};generateComponentTrace=function generateComponentTrace(vm){if(vm._isVue&&vm.$parent){var tree=[];var currentRecursiveSequence=0;while(vm){if(tree.length>0){var last=tree[tree.length-1];if(last.constructor===vm.constructor){currentRecursiveSequence++;vm=vm.$parent;continue;}else if(currentRecursiveSequence>0){tree[tree.length-1]=[last,currentRecursiveSequence];currentRecursiveSequence=0;}}tree.push(vm);vm=vm.$parent;}return'\n\nfound in\n\n'+tree.map(function(vm,i){return""+(i===0?'---> ':repeat(' ',5+i*2))+(Array.isArray(vm)?formatComponentName(vm[0])+"... ("+vm[1]+" recursive calls)":formatComponentName(vm));}).join('\n');}else{return"\n\n(found in "+formatComponentName(vm)+")";}};}/*  */var uid=0;/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */var Dep=function Dep(){this.id=uid++;this.subs=[];};Dep.prototype.addSub=function addSub(sub){this.subs.push(sub);};Dep.prototype.removeSub=function removeSub(sub){remove(this.subs,sub);};Dep.prototype.depend=function depend(){if(Dep.target){Dep.target.addDep(this);}};Dep.prototype.notify=function notify(){// stabilize the subscriber list first
var subs=this.subs.slice();for(var i=0,l=subs.length;i<l;i++){subs[i].update();}};// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target=null;var targetStack=[];function pushTarget(_target){if(Dep.target){targetStack.push(Dep.target);}Dep.target=_target;}function popTarget(){Dep.target=targetStack.pop();}/*  */var VNode=function VNode(tag,data,children,text,elm,context,componentOptions,asyncFactory){this.tag=tag;this.data=data;this.children=children;this.text=text;this.elm=elm;this.ns=undefined;this.context=context;this.functionalContext=undefined;this.functionalOptions=undefined;this.functionalScopeId=undefined;this.key=data&&data.key;this.componentOptions=componentOptions;this.componentInstance=undefined;this.parent=undefined;this.raw=false;this.isStatic=false;this.isRootInsert=true;this.isComment=false;this.isCloned=false;this.isOnce=false;this.asyncFactory=asyncFactory;this.asyncMeta=undefined;this.isAsyncPlaceholder=false;};var prototypeAccessors={child:{configurable:true}};// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */prototypeAccessors.child.get=function(){return this.componentInstance;};Object.defineProperties(VNode.prototype,prototypeAccessors);var createEmptyVNode=function createEmptyVNode(text){if(text===void 0)text='';var node=new VNode();node.text=text;node.isComment=true;return node;};function createTextVNode(val){return new VNode(undefined,undefined,undefined,String(val));}// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode(vnode,deep){var cloned=new VNode(vnode.tag,vnode.data,vnode.children,vnode.text,vnode.elm,vnode.context,vnode.componentOptions,vnode.asyncFactory);cloned.ns=vnode.ns;cloned.isStatic=vnode.isStatic;cloned.key=vnode.key;cloned.isComment=vnode.isComment;cloned.isCloned=true;if(deep&&vnode.children){cloned.children=cloneVNodes(vnode.children);}return cloned;}function cloneVNodes(vnodes,deep){var len=vnodes.length;var res=new Array(len);for(var i=0;i<len;i++){res[i]=cloneVNode(vnodes[i],deep);}return res;}/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */var arrayProto=Array.prototype;var arrayMethods=Object.create(arrayProto);['push','pop','shift','unshift','splice','sort','reverse'].forEach(function(method){// cache original method
var original=arrayProto[method];def(arrayMethods,method,function mutator(){var args=[],len=arguments.length;while(len--){args[len]=arguments[len];}var result=original.apply(this,args);var ob=this.__ob__;var inserted;switch(method){case'push':case'unshift':inserted=args;break;case'splice':inserted=args.slice(2);break;}if(inserted){ob.observeArray(inserted);}// notify change
ob.dep.notify();return result;});});/*  */var arrayKeys=Object.getOwnPropertyNames(arrayMethods);/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */var observerState={shouldConvert:true};/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */var Observer=function Observer(value){this.value=value;this.dep=new Dep();this.vmCount=0;def(value,'__ob__',this);if(Array.isArray(value)){var augment=hasProto?protoAugment:copyAugment;augment(value,arrayMethods,arrayKeys);this.observeArray(value);}else{this.walk(value);}};/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */Observer.prototype.walk=function walk(obj){var keys=Object.keys(obj);for(var i=0;i<keys.length;i++){defineReactive(obj,keys[i],obj[keys[i]]);}};/**
 * Observe a list of Array items.
 */Observer.prototype.observeArray=function observeArray(items){for(var i=0,l=items.length;i<l;i++){observe(items[i]);}};// helpers
/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */function protoAugment(target,src,keys){/* eslint-disable no-proto */target.__proto__=src;/* eslint-enable no-proto */}/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *//* istanbul ignore next */function copyAugment(target,src,keys){for(var i=0,l=keys.length;i<l;i++){var key=keys[i];def(target,key,src[key]);}}/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */function observe(value,asRootData){if(!isObject(value)||value instanceof VNode){return;}var ob;if(hasOwn(value,'__ob__')&&value.__ob__ instanceof Observer){ob=value.__ob__;}else if(observerState.shouldConvert&&!isServerRendering()&&(Array.isArray(value)||isPlainObject(value))&&Object.isExtensible(value)&&!value._isVue){ob=new Observer(value);}if(asRootData&&ob){ob.vmCount++;}return ob;}/**
 * Define a reactive property on an Object.
 */function defineReactive(obj,key,val,customSetter,shallow){var dep=new Dep();var property=Object.getOwnPropertyDescriptor(obj,key);if(property&&property.configurable===false){return;}// cater for pre-defined getter/setters
var getter=property&&property.get;var setter=property&&property.set;var childOb=!shallow&&observe(val);Object.defineProperty(obj,key,{enumerable:true,configurable:true,get:function reactiveGetter(){var value=getter?getter.call(obj):val;if(Dep.target){dep.depend();if(childOb){childOb.dep.depend();if(Array.isArray(value)){dependArray(value);}}}return value;},set:function reactiveSetter(newVal){var value=getter?getter.call(obj):val;/* eslint-disable no-self-compare */if(newVal===value||newVal!==newVal&&value!==value){return;}/* eslint-enable no-self-compare */if(false){customSetter();}if(setter){setter.call(obj,newVal);}else{val=newVal;}childOb=!shallow&&observe(newVal);dep.notify();}});}/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */function set(target,key,val){if(Array.isArray(target)&&isValidArrayIndex(key)){target.length=Math.max(target.length,key);target.splice(key,1,val);return val;}if(hasOwn(target,key)){target[key]=val;return val;}var ob=target.__ob__;if(target._isVue||ob&&ob.vmCount){"production"!=='production'&&warn('Avoid adding reactive properties to a Vue instance or its root $data '+'at runtime - declare it upfront in the data option.');return val;}if(!ob){target[key]=val;return val;}defineReactive(ob.value,key,val);ob.dep.notify();return val;}/**
 * Delete a property and trigger change if necessary.
 */function del(target,key){if(Array.isArray(target)&&isValidArrayIndex(key)){target.splice(key,1);return;}var ob=target.__ob__;if(target._isVue||ob&&ob.vmCount){"production"!=='production'&&warn('Avoid deleting properties on a Vue instance or its root $data '+'- just set it to null.');return;}if(!hasOwn(target,key)){return;}delete target[key];if(!ob){return;}ob.dep.notify();}/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */function dependArray(value){for(var e=void 0,i=0,l=value.length;i<l;i++){e=value[i];e&&e.__ob__&&e.__ob__.dep.depend();if(Array.isArray(e)){dependArray(e);}}}/*  *//**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */var strats=config.optionMergeStrategies;/**
 * Options with restrictions
 */if(false){strats.el=strats.propsData=function(parent,child,vm,key){if(!vm){warn("option \""+key+"\" can only be used during instance "+'creation with the `new` keyword.');}return defaultStrat(parent,child);};}/**
 * Helper that recursively merges two data objects together.
 */function mergeData(to,from){if(!from){return to;}var key,toVal,fromVal;var keys=Object.keys(from);for(var i=0;i<keys.length;i++){key=keys[i];toVal=to[key];fromVal=from[key];if(!hasOwn(to,key)){set(to,key,fromVal);}else if(isPlainObject(toVal)&&isPlainObject(fromVal)){mergeData(toVal,fromVal);}}return to;}/**
 * Data
 */function mergeDataOrFn(parentVal,childVal,vm){if(!vm){// in a Vue.extend merge, both should be functions
if(!childVal){return parentVal;}if(!parentVal){return childVal;}// when parentVal & childVal are both present,
// we need to return a function that returns the
// merged result of both functions... no need to
// check if parentVal is a function here because
// it has to be a function to pass previous merges.
return function mergedDataFn(){return mergeData(typeof childVal==='function'?childVal.call(this):childVal,typeof parentVal==='function'?parentVal.call(this):parentVal);};}else if(parentVal||childVal){return function mergedInstanceDataFn(){// instance merge
var instanceData=typeof childVal==='function'?childVal.call(vm):childVal;var defaultData=typeof parentVal==='function'?parentVal.call(vm):parentVal;if(instanceData){return mergeData(instanceData,defaultData);}else{return defaultData;}};}}strats.data=function(parentVal,childVal,vm){if(!vm){if(childVal&&typeof childVal!=='function'){"production"!=='production'&&warn('The "data" option should be a function '+'that returns a per-instance value in component '+'definitions.',vm);return parentVal;}return mergeDataOrFn.call(this,parentVal,childVal);}return mergeDataOrFn(parentVal,childVal,vm);};/**
 * Hooks and props are merged as arrays.
 */function mergeHook(parentVal,childVal){return childVal?parentVal?parentVal.concat(childVal):Array.isArray(childVal)?childVal:[childVal]:parentVal;}LIFECYCLE_HOOKS.forEach(function(hook){strats[hook]=mergeHook;});/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */function mergeAssets(parentVal,childVal,vm,key){var res=Object.create(parentVal||null);if(childVal){"production"!=='production'&&assertObjectType(key,childVal,vm);return extend(res,childVal);}else{return res;}}ASSET_TYPES.forEach(function(type){strats[type+'s']=mergeAssets;});/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */strats.watch=function(parentVal,childVal,vm,key){// work around Firefox's Object.prototype.watch...
if(parentVal===nativeWatch){parentVal=undefined;}if(childVal===nativeWatch){childVal=undefined;}/* istanbul ignore if */if(!childVal){return Object.create(parentVal||null);}if(false){assertObjectType(key,childVal,vm);}if(!parentVal){return childVal;}var ret={};extend(ret,parentVal);for(var key$1 in childVal){var parent=ret[key$1];var child=childVal[key$1];if(parent&&!Array.isArray(parent)){parent=[parent];}ret[key$1]=parent?parent.concat(child):Array.isArray(child)?child:[child];}return ret;};/**
 * Other object hashes.
 */strats.props=strats.methods=strats.inject=strats.computed=function(parentVal,childVal,vm,key){if(childVal&&"production"!=='production'){assertObjectType(key,childVal,vm);}if(!parentVal){return childVal;}var ret=Object.create(null);extend(ret,parentVal);if(childVal){extend(ret,childVal);}return ret;};strats.provide=mergeDataOrFn;/**
 * Default strategy.
 */var defaultStrat=function defaultStrat(parentVal,childVal){return childVal===undefined?parentVal:childVal;};/**
 * Validate component names
 */function checkComponents(options){for(var key in options.components){var lower=key.toLowerCase();if(isBuiltInTag(lower)||config.isReservedTag(lower)){warn('Do not use built-in or reserved HTML elements as component '+'id: '+key);}}}/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */function normalizeProps(options,vm){var props=options.props;if(!props){return;}var res={};var i,val,name;if(Array.isArray(props)){i=props.length;while(i--){val=props[i];if(typeof val==='string'){name=camelize(val);res[name]={type:null};}else if(false){warn('props must be strings when using array syntax.');}}}else if(isPlainObject(props)){for(var key in props){val=props[key];name=camelize(key);res[name]=isPlainObject(val)?val:{type:val};}}else if(false){warn("Invalid value for option \"props\": expected an Array or an Object, "+"but got "+toRawType(props)+".",vm);}options.props=res;}/**
 * Normalize all injections into Object-based format
 */function normalizeInject(options,vm){var inject=options.inject;var normalized=options.inject={};if(Array.isArray(inject)){for(var i=0;i<inject.length;i++){normalized[inject[i]]={from:inject[i]};}}else if(isPlainObject(inject)){for(var key in inject){var val=inject[key];normalized[key]=isPlainObject(val)?extend({from:key},val):{from:val};}}else if(false){warn("Invalid value for option \"inject\": expected an Array or an Object, "+"but got "+toRawType(inject)+".",vm);}}/**
 * Normalize raw function directives into object format.
 */function normalizeDirectives(options){var dirs=options.directives;if(dirs){for(var key in dirs){var def=dirs[key];if(typeof def==='function'){dirs[key]={bind:def,update:def};}}}}function assertObjectType(name,value,vm){if(!isPlainObject(value)){warn("Invalid value for option \""+name+"\": expected an Object, "+"but got "+toRawType(value)+".",vm);}}/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */function mergeOptions(parent,child,vm){if(false){checkComponents(child);}if(typeof child==='function'){child=child.options;}normalizeProps(child,vm);normalizeInject(child,vm);normalizeDirectives(child);var extendsFrom=child.extends;if(extendsFrom){parent=mergeOptions(parent,extendsFrom,vm);}if(child.mixins){for(var i=0,l=child.mixins.length;i<l;i++){parent=mergeOptions(parent,child.mixins[i],vm);}}var options={};var key;for(key in parent){mergeField(key);}for(key in child){if(!hasOwn(parent,key)){mergeField(key);}}function mergeField(key){var strat=strats[key]||defaultStrat;options[key]=strat(parent[key],child[key],vm,key);}return options;}/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */function resolveAsset(options,type,id,warnMissing){/* istanbul ignore if */if(typeof id!=='string'){return;}var assets=options[type];// check local registration variations first
if(hasOwn(assets,id)){return assets[id];}var camelizedId=camelize(id);if(hasOwn(assets,camelizedId)){return assets[camelizedId];}var PascalCaseId=capitalize(camelizedId);if(hasOwn(assets,PascalCaseId)){return assets[PascalCaseId];}// fallback to prototype chain
var res=assets[id]||assets[camelizedId]||assets[PascalCaseId];if(false){warn('Failed to resolve '+type.slice(0,-1)+': '+id,options);}return res;}/*  */function validateProp(key,propOptions,propsData,vm){var prop=propOptions[key];var absent=!hasOwn(propsData,key);var value=propsData[key];// handle boolean props
if(isType(Boolean,prop.type)){if(absent&&!hasOwn(prop,'default')){value=false;}else if(!isType(String,prop.type)&&(value===''||value===hyphenate(key))){value=true;}}// check default value
if(value===undefined){value=getPropDefaultValue(vm,prop,key);// since the default value is a fresh copy,
// make sure to observe it.
var prevShouldConvert=observerState.shouldConvert;observerState.shouldConvert=true;observe(value);observerState.shouldConvert=prevShouldConvert;}if(false){assertProp(prop,key,value,vm,absent);}return value;}/**
 * Get the default value of a prop.
 */function getPropDefaultValue(vm,prop,key){// no default, return undefined
if(!hasOwn(prop,'default')){return undefined;}var def=prop.default;// warn against non-factory defaults for Object & Array
if(false){warn('Invalid default value for prop "'+key+'": '+'Props with type Object/Array must use a factory function '+'to return the default value.',vm);}// the raw prop value was also undefined from previous render,
// return previous default value to avoid unnecessary watcher trigger
if(vm&&vm.$options.propsData&&vm.$options.propsData[key]===undefined&&vm._props[key]!==undefined){return vm._props[key];}// call factory function for non-Function types
// a value is Function if its prototype is function even across different execution context
return typeof def==='function'&&getType(prop.type)!=='Function'?def.call(vm):def;}/**
 * Assert whether a prop is valid.
 */function assertProp(prop,name,value,vm,absent){if(prop.required&&absent){warn('Missing required prop: "'+name+'"',vm);return;}if(value==null&&!prop.required){return;}var type=prop.type;var valid=!type||type===true;var expectedTypes=[];if(type){if(!Array.isArray(type)){type=[type];}for(var i=0;i<type.length&&!valid;i++){var assertedType=assertType(value,type[i]);expectedTypes.push(assertedType.expectedType||'');valid=assertedType.valid;}}if(!valid){warn("Invalid prop: type check failed for prop \""+name+"\"."+" Expected "+expectedTypes.map(capitalize).join(', ')+", got "+toRawType(value)+".",vm);return;}var validator=prop.validator;if(validator){if(!validator(value)){warn('Invalid prop: custom validator check failed for prop "'+name+'".',vm);}}}var simpleCheckRE=/^(String|Number|Boolean|Function|Symbol)$/;function assertType(value,type){var valid;var expectedType=getType(type);if(simpleCheckRE.test(expectedType)){var t=typeof value==='undefined'?'undefined':_typeof(value);valid=t===expectedType.toLowerCase();// for primitive wrapper objects
if(!valid&&t==='object'){valid=value instanceof type;}}else if(expectedType==='Object'){valid=isPlainObject(value);}else if(expectedType==='Array'){valid=Array.isArray(value);}else{valid=value instanceof type;}return{valid:valid,expectedType:expectedType};}/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */function getType(fn){var match=fn&&fn.toString().match(/^\s*function (\w+)/);return match?match[1]:'';}function isType(type,fn){if(!Array.isArray(fn)){return getType(fn)===getType(type);}for(var i=0,len=fn.length;i<len;i++){if(getType(fn[i])===getType(type)){return true;}}/* istanbul ignore next */return false;}/*  */function handleError(err,vm,info){if(vm){var cur=vm;while(cur=cur.$parent){var hooks=cur.$options.errorCaptured;if(hooks){for(var i=0;i<hooks.length;i++){try{var capture=hooks[i].call(cur,err,vm,info)===false;if(capture){return;}}catch(e){globalHandleError(e,cur,'errorCaptured hook');}}}}}globalHandleError(err,vm,info);}function globalHandleError(err,vm,info){if(config.errorHandler){try{return config.errorHandler.call(null,err,vm,info);}catch(e){logError(e,null,'config.errorHandler');}}logError(err,vm,info);}function logError(err,vm,info){if(false){warn("Error in "+info+": \""+err.toString()+"\"",vm);}/* istanbul ignore else */if(inBrowser&&typeof console!=='undefined'){console.error(err);}else{throw err;}}/*  *//* globals MessageChannel */var callbacks=[];var pending=false;function flushCallbacks(){pending=false;var copies=callbacks.slice(0);callbacks.length=0;for(var i=0;i<copies.length;i++){copies[i]();}}// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;var macroTimerFunc;var useMacroTask=false;// Determine (macro) Task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */if(typeof setImmediate!=='undefined'&&isNative(setImmediate)){macroTimerFunc=function macroTimerFunc(){setImmediate(flushCallbacks);};}else if(typeof MessageChannel!=='undefined'&&(isNative(MessageChannel)||// PhantomJS
MessageChannel.toString()==='[object MessageChannelConstructor]')){var channel=new MessageChannel();var port=channel.port2;channel.port1.onmessage=flushCallbacks;macroTimerFunc=function macroTimerFunc(){port.postMessage(1);};}else{/* istanbul ignore next */macroTimerFunc=function macroTimerFunc(){setTimeout(flushCallbacks,0);};}// Determine MicroTask defer implementation.
/* istanbul ignore next, $flow-disable-line */if(typeof Promise!=='undefined'&&isNative(Promise)){var p=Promise.resolve();microTimerFunc=function microTimerFunc(){p.then(flushCallbacks);// in problematic UIWebViews, Promise.then doesn't completely break, but
// it can get stuck in a weird state where callbacks are pushed into the
// microtask queue but the queue isn't being flushed, until the browser
// needs to do some other work, e.g. handle a timer. Therefore we can
// "force" the microtask queue to be flushed by adding an empty timer.
if(isIOS){setTimeout(noop);}};}else{// fallback to macro
microTimerFunc=macroTimerFunc;}/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */function withMacroTask(fn){return fn._withTask||(fn._withTask=function(){useMacroTask=true;var res=fn.apply(null,arguments);useMacroTask=false;return res;});}function nextTick(cb,ctx){var _resolve;callbacks.push(function(){if(cb){try{cb.call(ctx);}catch(e){handleError(e,ctx,'nextTick');}}else if(_resolve){_resolve(ctx);}});if(!pending){pending=true;if(useMacroTask){macroTimerFunc();}else{microTimerFunc();}}// $flow-disable-line
if(!cb&&typeof Promise!=='undefined'){return new Promise(function(resolve){_resolve=resolve;});}}/*  */var mark;var measure;if(false){var perf=inBrowser&&window.performance;/* istanbul ignore if */if(perf&&perf.mark&&perf.measure&&perf.clearMarks&&perf.clearMeasures){mark=function mark(tag){return perf.mark(tag);};measure=function measure(name,startTag,endTag){perf.measure(name,startTag,endTag);perf.clearMarks(startTag);perf.clearMarks(endTag);perf.clearMeasures(name);};}}/* not type checking this file because flow doesn't play well with Proxy */var initProxy;if(false){var allowedGlobals=makeMap('Infinity,undefined,NaN,isFinite,isNaN,'+'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,'+'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,'+'require'// for Webpack/Browserify
);var warnNonPresent=function warnNonPresent(target,key){warn("Property or method \""+key+"\" is not defined on the instance but "+'referenced during render. Make sure that this property is reactive, '+'either in the data option, or for class-based components, by '+'initializing the property. '+'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',target);};var hasProxy=typeof Proxy!=='undefined'&&Proxy.toString().match(/native code/);if(hasProxy){var isBuiltInModifier=makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');config.keyCodes=new Proxy(config.keyCodes,{set:function set(target,key,value){if(isBuiltInModifier(key)){warn("Avoid overwriting built-in modifier in config.keyCodes: ."+key);return false;}else{target[key]=value;return true;}}});}var hasHandler={has:function has(target,key){var has=key in target;var isAllowed=allowedGlobals(key)||key.charAt(0)==='_';if(!has&&!isAllowed){warnNonPresent(target,key);}return has||!isAllowed;}};var getHandler={get:function get(target,key){if(typeof key==='string'&&!(key in target)){warnNonPresent(target,key);}return target[key];}};initProxy=function initProxy(vm){if(hasProxy){// determine which proxy handler to use
var options=vm.$options;var handlers=options.render&&options.render._withStripped?getHandler:hasHandler;vm._renderProxy=new Proxy(vm,handlers);}else{vm._renderProxy=vm;}};}/*  */var normalizeEvent=cached(function(name){var passive=name.charAt(0)==='&';name=passive?name.slice(1):name;var once$$1=name.charAt(0)==='~';// Prefixed last, checked first
name=once$$1?name.slice(1):name;var capture=name.charAt(0)==='!';name=capture?name.slice(1):name;return{name:name,once:once$$1,capture:capture,passive:passive};});function createFnInvoker(fns){function invoker(){var arguments$1=arguments;var fns=invoker.fns;if(Array.isArray(fns)){var cloned=fns.slice();for(var i=0;i<cloned.length;i++){cloned[i].apply(null,arguments$1);}}else{// return handler return value for single handlers
return fns.apply(null,arguments);}}invoker.fns=fns;return invoker;}function updateListeners(on,oldOn,add,remove$$1,vm){var name,cur,old,event;for(name in on){cur=on[name];old=oldOn[name];event=normalizeEvent(name);if(isUndef(cur)){"production"!=='production'&&warn("Invalid handler for event \""+event.name+"\": got "+String(cur),vm);}else if(isUndef(old)){if(isUndef(cur.fns)){cur=on[name]=createFnInvoker(cur);}add(event.name,cur,event.once,event.capture,event.passive);}else if(cur!==old){old.fns=cur;on[name]=old;}}for(name in oldOn){if(isUndef(on[name])){event=normalizeEvent(name);remove$$1(event.name,oldOn[name],event.capture);}}}/*  */function mergeVNodeHook(def,hookKey,hook){var invoker;var oldHook=def[hookKey];function wrappedHook(){hook.apply(this,arguments);// important: remove merged hook to ensure it's called only once
// and prevent memory leak
remove(invoker.fns,wrappedHook);}if(isUndef(oldHook)){// no existing hook
invoker=createFnInvoker([wrappedHook]);}else{/* istanbul ignore if */if(isDef(oldHook.fns)&&isTrue(oldHook.merged)){// already a merged invoker
invoker=oldHook;invoker.fns.push(wrappedHook);}else{// existing plain hook
invoker=createFnInvoker([oldHook,wrappedHook]);}}invoker.merged=true;def[hookKey]=invoker;}/*  */function extractPropsFromVNodeData(data,Ctor,tag){// we are only extracting raw values here.
// validation and default values are handled in the child
// component itself.
var propOptions=Ctor.options.props;if(isUndef(propOptions)){return;}var res={};var attrs=data.attrs;var props=data.props;if(isDef(attrs)||isDef(props)){for(var key in propOptions){var altKey=hyphenate(key);if(false){var keyInLowerCase=key.toLowerCase();if(key!==keyInLowerCase&&attrs&&hasOwn(attrs,keyInLowerCase)){tip("Prop \""+keyInLowerCase+"\" is passed to component "+formatComponentName(tag||Ctor)+", but the declared prop name is"+" \""+key+"\". "+"Note that HTML attributes are case-insensitive and camelCased "+"props need to use their kebab-case equivalents when using in-DOM "+"templates. You should probably use \""+altKey+"\" instead of \""+key+"\".");}}checkProp(res,props,key,altKey,true)||checkProp(res,attrs,key,altKey,false);}}return res;}function checkProp(res,hash,key,altKey,preserve){if(isDef(hash)){if(hasOwn(hash,key)){res[key]=hash[key];if(!preserve){delete hash[key];}return true;}else if(hasOwn(hash,altKey)){res[key]=hash[altKey];if(!preserve){delete hash[altKey];}return true;}}return false;}/*  */// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren(children){for(var i=0;i<children.length;i++){if(Array.isArray(children[i])){return Array.prototype.concat.apply([],children);}}return children;}// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren(children){return isPrimitive(children)?[createTextVNode(children)]:Array.isArray(children)?normalizeArrayChildren(children):undefined;}function isTextNode(node){return isDef(node)&&isDef(node.text)&&isFalse(node.isComment);}function normalizeArrayChildren(children,nestedIndex){var res=[];var i,c,lastIndex,last;for(i=0;i<children.length;i++){c=children[i];if(isUndef(c)||typeof c==='boolean'){continue;}lastIndex=res.length-1;last=res[lastIndex];//  nested
if(Array.isArray(c)){if(c.length>0){c=normalizeArrayChildren(c,(nestedIndex||'')+"_"+i);// merge adjacent text nodes
if(isTextNode(c[0])&&isTextNode(last)){res[lastIndex]=createTextVNode(last.text+c[0].text);c.shift();}res.push.apply(res,c);}}else if(isPrimitive(c)){if(isTextNode(last)){// merge adjacent text nodes
// this is necessary for SSR hydration because text nodes are
// essentially merged when rendered to HTML strings
res[lastIndex]=createTextVNode(last.text+c);}else if(c!==''){// convert primitive to vnode
res.push(createTextVNode(c));}}else{if(isTextNode(c)&&isTextNode(last)){// merge adjacent text nodes
res[lastIndex]=createTextVNode(last.text+c.text);}else{// default key for nested array children (likely generated by v-for)
if(isTrue(children._isVList)&&isDef(c.tag)&&isUndef(c.key)&&isDef(nestedIndex)){c.key="__vlist"+nestedIndex+"_"+i+"__";}res.push(c);}}}return res;}/*  */function ensureCtor(comp,base){if(comp.__esModule||hasSymbol&&comp[Symbol.toStringTag]==='Module'){comp=comp.default;}return isObject(comp)?base.extend(comp):comp;}function createAsyncPlaceholder(factory,data,context,children,tag){var node=createEmptyVNode();node.asyncFactory=factory;node.asyncMeta={data:data,context:context,children:children,tag:tag};return node;}function resolveAsyncComponent(factory,baseCtor,context){if(isTrue(factory.error)&&isDef(factory.errorComp)){return factory.errorComp;}if(isDef(factory.resolved)){return factory.resolved;}if(isTrue(factory.loading)&&isDef(factory.loadingComp)){return factory.loadingComp;}if(isDef(factory.contexts)){// already pending
factory.contexts.push(context);}else{var contexts=factory.contexts=[context];var sync=true;var forceRender=function forceRender(){for(var i=0,l=contexts.length;i<l;i++){contexts[i].$forceUpdate();}};var resolve=once(function(res){// cache resolved
factory.resolved=ensureCtor(res,baseCtor);// invoke callbacks only if this is not a synchronous resolve
// (async resolves are shimmed as synchronous during SSR)
if(!sync){forceRender();}});var reject=once(function(reason){"production"!=='production'&&warn("Failed to resolve async component: "+String(factory)+(reason?"\nReason: "+reason:''));if(isDef(factory.errorComp)){factory.error=true;forceRender();}});var res=factory(resolve,reject);if(isObject(res)){if(typeof res.then==='function'){// () => Promise
if(isUndef(factory.resolved)){res.then(resolve,reject);}}else if(isDef(res.component)&&typeof res.component.then==='function'){res.component.then(resolve,reject);if(isDef(res.error)){factory.errorComp=ensureCtor(res.error,baseCtor);}if(isDef(res.loading)){factory.loadingComp=ensureCtor(res.loading,baseCtor);if(res.delay===0){factory.loading=true;}else{setTimeout(function(){if(isUndef(factory.resolved)&&isUndef(factory.error)){factory.loading=true;forceRender();}},res.delay||200);}}if(isDef(res.timeout)){setTimeout(function(){if(isUndef(factory.resolved)){reject(false?"timeout ("+res.timeout+"ms)":null);}},res.timeout);}}}sync=false;// return in case resolved synchronously
return factory.loading?factory.loadingComp:factory.resolved;}}/*  */function isAsyncPlaceholder(node){return node.isComment&&node.asyncFactory;}/*  */function getFirstComponentChild(children){if(Array.isArray(children)){for(var i=0;i<children.length;i++){var c=children[i];if(isDef(c)&&(isDef(c.componentOptions)||isAsyncPlaceholder(c))){return c;}}}}/*  *//*  */function initEvents(vm){vm._events=Object.create(null);vm._hasHookEvent=false;// init parent attached events
var listeners=vm.$options._parentListeners;if(listeners){updateComponentListeners(vm,listeners);}}var target;function add(event,fn,once){if(once){target.$once(event,fn);}else{target.$on(event,fn);}}function remove$1(event,fn){target.$off(event,fn);}function updateComponentListeners(vm,listeners,oldListeners){target=vm;updateListeners(listeners,oldListeners||{},add,remove$1,vm);}function eventsMixin(Vue){var hookRE=/^hook:/;Vue.prototype.$on=function(event,fn){var this$1=this;var vm=this;if(Array.isArray(event)){for(var i=0,l=event.length;i<l;i++){this$1.$on(event[i],fn);}}else{(vm._events[event]||(vm._events[event]=[])).push(fn);// optimize hook:event cost by using a boolean flag marked at registration
// instead of a hash lookup
if(hookRE.test(event)){vm._hasHookEvent=true;}}return vm;};Vue.prototype.$once=function(event,fn){var vm=this;function on(){vm.$off(event,on);fn.apply(vm,arguments);}on.fn=fn;vm.$on(event,on);return vm;};Vue.prototype.$off=function(event,fn){var this$1=this;var vm=this;// all
if(!arguments.length){vm._events=Object.create(null);return vm;}// array of events
if(Array.isArray(event)){for(var i=0,l=event.length;i<l;i++){this$1.$off(event[i],fn);}return vm;}// specific event
var cbs=vm._events[event];if(!cbs){return vm;}if(arguments.length===1){vm._events[event]=null;return vm;}if(fn){// specific handler
var cb;var i$1=cbs.length;while(i$1--){cb=cbs[i$1];if(cb===fn||cb.fn===fn){cbs.splice(i$1,1);break;}}}return vm;};Vue.prototype.$emit=function(event){var vm=this;if(false){var lowerCaseEvent=event.toLowerCase();if(lowerCaseEvent!==event&&vm._events[lowerCaseEvent]){tip("Event \""+lowerCaseEvent+"\" is emitted in component "+formatComponentName(vm)+" but the handler is registered for \""+event+"\". "+"Note that HTML attributes are case-insensitive and you cannot use "+"v-on to listen to camelCase events when using in-DOM templates. "+"You should probably use \""+hyphenate(event)+"\" instead of \""+event+"\".");}}var cbs=vm._events[event];if(cbs){cbs=cbs.length>1?toArray(cbs):cbs;var args=toArray(arguments,1);for(var i=0,l=cbs.length;i<l;i++){try{cbs[i].apply(vm,args);}catch(e){handleError(e,vm,"event handler for \""+event+"\"");}}}return vm;};}/*  *//**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */function resolveSlots(children,context){var slots={};if(!children){return slots;}var defaultSlot=[];for(var i=0,l=children.length;i<l;i++){var child=children[i];var data=child.data;// remove slot attribute if the node is resolved as a Vue slot node
if(data&&data.attrs&&data.attrs.slot){delete data.attrs.slot;}// named slots should only be respected if the vnode was rendered in the
// same context.
if((child.context===context||child.functionalContext===context)&&data&&data.slot!=null){var name=child.data.slot;var slot=slots[name]||(slots[name]=[]);if(child.tag==='template'){slot.push.apply(slot,child.children);}else{slot.push(child);}}else{defaultSlot.push(child);}}// ignore whitespace
if(!defaultSlot.every(isWhitespace)){slots.default=defaultSlot;}return slots;}function isWhitespace(node){return node.isComment||node.text===' ';}function resolveScopedSlots(fns,// see flow/vnode
res){res=res||{};for(var i=0;i<fns.length;i++){if(Array.isArray(fns[i])){resolveScopedSlots(fns[i],res);}else{res[fns[i].key]=fns[i].fn;}}return res;}/*  */var activeInstance=null;var isUpdatingChildComponent=false;function initLifecycle(vm){var options=vm.$options;// locate first non-abstract parent
var parent=options.parent;if(parent&&!options.abstract){while(parent.$options.abstract&&parent.$parent){parent=parent.$parent;}parent.$children.push(vm);}vm.$parent=parent;vm.$root=parent?parent.$root:vm;vm.$children=[];vm.$refs={};vm._watcher=null;vm._inactive=null;vm._directInactive=false;vm._isMounted=false;vm._isDestroyed=false;vm._isBeingDestroyed=false;}function lifecycleMixin(Vue){Vue.prototype._update=function(vnode,hydrating){var vm=this;if(vm._isMounted){callHook(vm,'beforeUpdate');}var prevEl=vm.$el;var prevVnode=vm._vnode;var prevActiveInstance=activeInstance;activeInstance=vm;vm._vnode=vnode;// Vue.prototype.__patch__ is injected in entry points
// based on the rendering backend used.
if(!prevVnode){// initial render
vm.$el=vm.__patch__(vm.$el,vnode,hydrating,false/* removeOnly */,vm.$options._parentElm,vm.$options._refElm);// no need for the ref nodes after initial patch
// this prevents keeping a detached DOM tree in memory (#5851)
vm.$options._parentElm=vm.$options._refElm=null;}else{// updates
vm.$el=vm.__patch__(prevVnode,vnode);}activeInstance=prevActiveInstance;// update __vue__ reference
if(prevEl){prevEl.__vue__=null;}if(vm.$el){vm.$el.__vue__=vm;}// if parent is an HOC, update its $el as well
if(vm.$vnode&&vm.$parent&&vm.$vnode===vm.$parent._vnode){vm.$parent.$el=vm.$el;}// updated hook is called by the scheduler to ensure that children are
// updated in a parent's updated hook.
};Vue.prototype.$forceUpdate=function(){var vm=this;if(vm._watcher){vm._watcher.update();}};Vue.prototype.$destroy=function(){var vm=this;if(vm._isBeingDestroyed){return;}callHook(vm,'beforeDestroy');vm._isBeingDestroyed=true;// remove self from parent
var parent=vm.$parent;if(parent&&!parent._isBeingDestroyed&&!vm.$options.abstract){remove(parent.$children,vm);}// teardown watchers
if(vm._watcher){vm._watcher.teardown();}var i=vm._watchers.length;while(i--){vm._watchers[i].teardown();}// remove reference from data ob
// frozen object may not have observer.
if(vm._data.__ob__){vm._data.__ob__.vmCount--;}// call the last hook...
vm._isDestroyed=true;// invoke destroy hooks on current rendered tree
vm.__patch__(vm._vnode,null);// fire destroyed hook
callHook(vm,'destroyed');// turn off all instance listeners.
vm.$off();// remove __vue__ reference
if(vm.$el){vm.$el.__vue__=null;}// release circular reference (#6759)
if(vm.$vnode){vm.$vnode.parent=null;}};}function mountComponent(vm,el,hydrating){vm.$el=el;if(!vm.$options.render){vm.$options.render=createEmptyVNode;if(false){/* istanbul ignore if */if(vm.$options.template&&vm.$options.template.charAt(0)!=='#'||vm.$options.el||el){warn('You are using the runtime-only build of Vue where the template '+'compiler is not available. Either pre-compile the templates into '+'render functions, or use the compiler-included build.',vm);}else{warn('Failed to mount component: template or render function not defined.',vm);}}}callHook(vm,'beforeMount');var updateComponent;/* istanbul ignore if */if(false){updateComponent=function updateComponent(){var name=vm._name;var id=vm._uid;var startTag="vue-perf-start:"+id;var endTag="vue-perf-end:"+id;mark(startTag);var vnode=vm._render();mark(endTag);measure("vue "+name+" render",startTag,endTag);mark(startTag);vm._update(vnode,hydrating);mark(endTag);measure("vue "+name+" patch",startTag,endTag);};}else{updateComponent=function updateComponent(){vm._update(vm._render(),hydrating);};}vm._watcher=new Watcher(vm,updateComponent,noop);hydrating=false;// manually mounted instance, call mounted on self
// mounted is called for render-created child components in its inserted hook
if(vm.$vnode==null){vm._isMounted=true;callHook(vm,'mounted');}return vm;}function updateChildComponent(vm,propsData,listeners,parentVnode,renderChildren){if(false){isUpdatingChildComponent=true;}// determine whether component has slot children
// we need to do this before overwriting $options._renderChildren
var hasChildren=!!(renderChildren||// has new static slots
vm.$options._renderChildren||// has old static slots
parentVnode.data.scopedSlots||// has new scoped slots
vm.$scopedSlots!==emptyObject// has old scoped slots
);vm.$options._parentVnode=parentVnode;vm.$vnode=parentVnode;// update vm's placeholder node without re-render
if(vm._vnode){// update child tree's parent
vm._vnode.parent=parentVnode;}vm.$options._renderChildren=renderChildren;// update $attrs and $listeners hash
// these are also reactive so they may trigger child update if the child
// used them during render
vm.$attrs=parentVnode.data&&parentVnode.data.attrs||emptyObject;vm.$listeners=listeners||emptyObject;// update props
if(propsData&&vm.$options.props){observerState.shouldConvert=false;var props=vm._props;var propKeys=vm.$options._propKeys||[];for(var i=0;i<propKeys.length;i++){var key=propKeys[i];props[key]=validateProp(key,vm.$options.props,propsData,vm);}observerState.shouldConvert=true;// keep a copy of raw propsData
vm.$options.propsData=propsData;}// update listeners
if(listeners){var oldListeners=vm.$options._parentListeners;vm.$options._parentListeners=listeners;updateComponentListeners(vm,listeners,oldListeners);}// resolve slots + force update if has children
if(hasChildren){vm.$slots=resolveSlots(renderChildren,parentVnode.context);vm.$forceUpdate();}if(false){isUpdatingChildComponent=false;}}function isInInactiveTree(vm){while(vm&&(vm=vm.$parent)){if(vm._inactive){return true;}}return false;}function activateChildComponent(vm,direct){if(direct){vm._directInactive=false;if(isInInactiveTree(vm)){return;}}else if(vm._directInactive){return;}if(vm._inactive||vm._inactive===null){vm._inactive=false;for(var i=0;i<vm.$children.length;i++){activateChildComponent(vm.$children[i]);}callHook(vm,'activated');}}function deactivateChildComponent(vm,direct){if(direct){vm._directInactive=true;if(isInInactiveTree(vm)){return;}}if(!vm._inactive){vm._inactive=true;for(var i=0;i<vm.$children.length;i++){deactivateChildComponent(vm.$children[i]);}callHook(vm,'deactivated');}}function callHook(vm,hook){var handlers=vm.$options[hook];if(handlers){for(var i=0,j=handlers.length;i<j;i++){try{handlers[i].call(vm);}catch(e){handleError(e,vm,hook+" hook");}}}if(vm._hasHookEvent){vm.$emit('hook:'+hook);}}/*  */var MAX_UPDATE_COUNT=100;var queue=[];var activatedChildren=[];var has={};var circular={};var waiting=false;var flushing=false;var index=0;/**
 * Reset the scheduler's state.
 */function resetSchedulerState(){index=queue.length=activatedChildren.length=0;has={};if(false){circular={};}waiting=flushing=false;}/**
 * Flush both queues and run the watchers.
 */function flushSchedulerQueue(){flushing=true;var watcher,id;// Sort queue before flush.
// This ensures that:
// 1. Components are updated from parent to child. (because parent is always
//    created before the child)
// 2. A component's user watchers are run before its render watcher (because
//    user watchers are created before the render watcher)
// 3. If a component is destroyed during a parent component's watcher run,
//    its watchers can be skipped.
queue.sort(function(a,b){return a.id-b.id;});// do not cache length because more watchers might be pushed
// as we run existing watchers
for(index=0;index<queue.length;index++){watcher=queue[index];id=watcher.id;has[id]=null;watcher.run();// in dev build, check and stop circular updates.
if(false){circular[id]=(circular[id]||0)+1;if(circular[id]>MAX_UPDATE_COUNT){warn('You may have an infinite update loop '+(watcher.user?"in watcher with expression \""+watcher.expression+"\"":"in a component render function."),watcher.vm);break;}}}// keep copies of post queues before resetting state
var activatedQueue=activatedChildren.slice();var updatedQueue=queue.slice();resetSchedulerState();// call component updated and activated hooks
callActivatedHooks(activatedQueue);callUpdatedHooks(updatedQueue);// devtool hook
/* istanbul ignore if */if(devtools&&config.devtools){devtools.emit('flush');}}function callUpdatedHooks(queue){var i=queue.length;while(i--){var watcher=queue[i];var vm=watcher.vm;if(vm._watcher===watcher&&vm._isMounted){callHook(vm,'updated');}}}/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */function queueActivatedComponent(vm){// setting _inactive to false here so that a render function can
// rely on checking whether it's in an inactive tree (e.g. router-view)
vm._inactive=false;activatedChildren.push(vm);}function callActivatedHooks(queue){for(var i=0;i<queue.length;i++){queue[i]._inactive=true;activateChildComponent(queue[i],true/* true */);}}/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */function queueWatcher(watcher){var id=watcher.id;if(has[id]==null){has[id]=true;if(!flushing){queue.push(watcher);}else{// if already flushing, splice the watcher based on its id
// if already past its id, it will be run next immediately.
var i=queue.length-1;while(i>index&&queue[i].id>watcher.id){i--;}queue.splice(i+1,0,watcher);}// queue the flush
if(!waiting){waiting=true;nextTick(flushSchedulerQueue);}}}/*  */var uid$2=0;/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */var Watcher=function Watcher(vm,expOrFn,cb,options){this.vm=vm;vm._watchers.push(this);// options
if(options){this.deep=!!options.deep;this.user=!!options.user;this.lazy=!!options.lazy;this.sync=!!options.sync;}else{this.deep=this.user=this.lazy=this.sync=false;}this.cb=cb;this.id=++uid$2;// uid for batching
this.active=true;this.dirty=this.lazy;// for lazy watchers
this.deps=[];this.newDeps=[];this.depIds=new _Set();this.newDepIds=new _Set();this.expression=false?expOrFn.toString():'';// parse expression for getter
if(typeof expOrFn==='function'){this.getter=expOrFn;}else{this.getter=parsePath(expOrFn);if(!this.getter){this.getter=function(){};"production"!=='production'&&warn("Failed watching path: \""+expOrFn+"\" "+'Watcher only accepts simple dot-delimited paths. '+'For full control, use a function instead.',vm);}}this.value=this.lazy?undefined:this.get();};/**
 * Evaluate the getter, and re-collect dependencies.
 */Watcher.prototype.get=function get(){pushTarget(this);var value;var vm=this.vm;try{value=this.getter.call(vm,vm);}catch(e){if(this.user){handleError(e,vm,"getter for watcher \""+this.expression+"\"");}else{throw e;}}finally{// "touch" every property so they are all tracked as
// dependencies for deep watching
if(this.deep){traverse(value);}popTarget();this.cleanupDeps();}return value;};/**
 * Add a dependency to this directive.
 */Watcher.prototype.addDep=function addDep(dep){var id=dep.id;if(!this.newDepIds.has(id)){this.newDepIds.add(id);this.newDeps.push(dep);if(!this.depIds.has(id)){dep.addSub(this);}}};/**
 * Clean up for dependency collection.
 */Watcher.prototype.cleanupDeps=function cleanupDeps(){var this$1=this;var i=this.deps.length;while(i--){var dep=this$1.deps[i];if(!this$1.newDepIds.has(dep.id)){dep.removeSub(this$1);}}var tmp=this.depIds;this.depIds=this.newDepIds;this.newDepIds=tmp;this.newDepIds.clear();tmp=this.deps;this.deps=this.newDeps;this.newDeps=tmp;this.newDeps.length=0;};/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */Watcher.prototype.update=function update(){/* istanbul ignore else */if(this.lazy){this.dirty=true;}else if(this.sync){this.run();}else{queueWatcher(this);}};/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */Watcher.prototype.run=function run(){if(this.active){var value=this.get();if(value!==this.value||// Deep watchers and watchers on Object/Arrays should fire even
// when the value is the same, because the value may
// have mutated.
isObject(value)||this.deep){// set new value
var oldValue=this.value;this.value=value;if(this.user){try{this.cb.call(this.vm,value,oldValue);}catch(e){handleError(e,this.vm,"callback for watcher \""+this.expression+"\"");}}else{this.cb.call(this.vm,value,oldValue);}}}};/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */Watcher.prototype.evaluate=function evaluate(){this.value=this.get();this.dirty=false;};/**
 * Depend on all deps collected by this watcher.
 */Watcher.prototype.depend=function depend(){var this$1=this;var i=this.deps.length;while(i--){this$1.deps[i].depend();}};/**
 * Remove self from all dependencies' subscriber list.
 */Watcher.prototype.teardown=function teardown(){var this$1=this;if(this.active){// remove self from vm's watcher list
// this is a somewhat expensive operation so we skip it
// if the vm is being destroyed.
if(!this.vm._isBeingDestroyed){remove(this.vm._watchers,this);}var i=this.deps.length;while(i--){this$1.deps[i].removeSub(this$1);}this.active=false;}};/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */var seenObjects=new _Set();function traverse(val){seenObjects.clear();_traverse(val,seenObjects);}function _traverse(val,seen){var i,keys;var isA=Array.isArray(val);if(!isA&&!isObject(val)||!Object.isExtensible(val)){return;}if(val.__ob__){var depId=val.__ob__.dep.id;if(seen.has(depId)){return;}seen.add(depId);}if(isA){i=val.length;while(i--){_traverse(val[i],seen);}}else{keys=Object.keys(val);i=keys.length;while(i--){_traverse(val[keys[i]],seen);}}}/*  */var sharedPropertyDefinition={enumerable:true,configurable:true,get:noop,set:noop};function proxy(target,sourceKey,key){sharedPropertyDefinition.get=function proxyGetter(){return this[sourceKey][key];};sharedPropertyDefinition.set=function proxySetter(val){this[sourceKey][key]=val;};Object.defineProperty(target,key,sharedPropertyDefinition);}function initState(vm){vm._watchers=[];var opts=vm.$options;if(opts.props){initProps(vm,opts.props);}if(opts.methods){initMethods(vm,opts.methods);}if(opts.data){initData(vm);}else{observe(vm._data={},true/* asRootData */);}if(opts.computed){initComputed(vm,opts.computed);}if(opts.watch&&opts.watch!==nativeWatch){initWatch(vm,opts.watch);}}function initProps(vm,propsOptions){var propsData=vm.$options.propsData||{};var props=vm._props={};// cache prop keys so that future props updates can iterate using Array
// instead of dynamic object key enumeration.
var keys=vm.$options._propKeys=[];var isRoot=!vm.$parent;// root instance props should be converted
observerState.shouldConvert=isRoot;var loop=function loop(key){keys.push(key);var value=validateProp(key,propsOptions,propsData,vm);/* istanbul ignore else */if(false){var hyphenatedKey=hyphenate(key);if(isReservedAttribute(hyphenatedKey)||config.isReservedAttr(hyphenatedKey)){warn("\""+hyphenatedKey+"\" is a reserved attribute and cannot be used as component prop.",vm);}defineReactive(props,key,value,function(){if(vm.$parent&&!isUpdatingChildComponent){warn("Avoid mutating a prop directly since the value will be "+"overwritten whenever the parent component re-renders. "+"Instead, use a data or computed property based on the prop's "+"value. Prop being mutated: \""+key+"\"",vm);}});}else{defineReactive(props,key,value);}// static props are already proxied on the component's prototype
// during Vue.extend(). We only need to proxy props defined at
// instantiation here.
if(!(key in vm)){proxy(vm,"_props",key);}};for(var key in propsOptions){loop(key);}observerState.shouldConvert=true;}function initData(vm){var data=vm.$options.data;data=vm._data=typeof data==='function'?getData(data,vm):data||{};if(!isPlainObject(data)){data={};"production"!=='production'&&warn('data functions should return an object:\n'+'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',vm);}// proxy data on instance
var keys=Object.keys(data);var props=vm.$options.props;var methods=vm.$options.methods;var i=keys.length;while(i--){var key=keys[i];if(false){if(methods&&hasOwn(methods,key)){warn("Method \""+key+"\" has already been defined as a data property.",vm);}}if(props&&hasOwn(props,key)){"production"!=='production'&&warn("The data property \""+key+"\" is already declared as a prop. "+"Use prop default value instead.",vm);}else if(!isReserved(key)){proxy(vm,"_data",key);}}// observe data
observe(data,true/* asRootData */);}function getData(data,vm){try{return data.call(vm,vm);}catch(e){handleError(e,vm,"data()");return{};}}var computedWatcherOptions={lazy:true};function initComputed(vm,computed){var watchers=vm._computedWatchers=Object.create(null);// computed properties are just getters during SSR
var isSSR=isServerRendering();for(var key in computed){var userDef=computed[key];var getter=typeof userDef==='function'?userDef:userDef.get;if(false){warn("Getter is missing for computed property \""+key+"\".",vm);}if(!isSSR){// create internal watcher for the computed property.
watchers[key]=new Watcher(vm,getter||noop,noop,computedWatcherOptions);}// component-defined computed properties are already defined on the
// component prototype. We only need to define computed properties defined
// at instantiation here.
if(!(key in vm)){defineComputed(vm,key,userDef);}else if(false){if(key in vm.$data){warn("The computed property \""+key+"\" is already defined in data.",vm);}else if(vm.$options.props&&key in vm.$options.props){warn("The computed property \""+key+"\" is already defined as a prop.",vm);}}}}function defineComputed(target,key,userDef){var shouldCache=!isServerRendering();if(typeof userDef==='function'){sharedPropertyDefinition.get=shouldCache?createComputedGetter(key):userDef;sharedPropertyDefinition.set=noop;}else{sharedPropertyDefinition.get=userDef.get?shouldCache&&userDef.cache!==false?createComputedGetter(key):userDef.get:noop;sharedPropertyDefinition.set=userDef.set?userDef.set:noop;}if(false){sharedPropertyDefinition.set=function(){warn("Computed property \""+key+"\" was assigned to but it has no setter.",this);};}Object.defineProperty(target,key,sharedPropertyDefinition);}function createComputedGetter(key){return function computedGetter(){var watcher=this._computedWatchers&&this._computedWatchers[key];if(watcher){if(watcher.dirty){watcher.evaluate();}if(Dep.target){watcher.depend();}return watcher.value;}};}function initMethods(vm,methods){var props=vm.$options.props;for(var key in methods){if(false){if(methods[key]==null){warn("Method \""+key+"\" has an undefined value in the component definition. "+"Did you reference the function correctly?",vm);}if(props&&hasOwn(props,key)){warn("Method \""+key+"\" has already been defined as a prop.",vm);}if(key in vm&&isReserved(key)){warn("Method \""+key+"\" conflicts with an existing Vue instance method. "+"Avoid defining component methods that start with _ or $.");}}vm[key]=methods[key]==null?noop:bind(methods[key],vm);}}function initWatch(vm,watch){for(var key in watch){var handler=watch[key];if(Array.isArray(handler)){for(var i=0;i<handler.length;i++){createWatcher(vm,key,handler[i]);}}else{createWatcher(vm,key,handler);}}}function createWatcher(vm,keyOrFn,handler,options){if(isPlainObject(handler)){options=handler;handler=handler.handler;}if(typeof handler==='string'){handler=vm[handler];}return vm.$watch(keyOrFn,handler,options);}function stateMixin(Vue){// flow somehow has problems with directly declared definition object
// when using Object.defineProperty, so we have to procedurally build up
// the object here.
var dataDef={};dataDef.get=function(){return this._data;};var propsDef={};propsDef.get=function(){return this._props;};if(false){dataDef.set=function(newData){warn('Avoid replacing instance root $data. '+'Use nested data properties instead.',this);};propsDef.set=function(){warn("$props is readonly.",this);};}Object.defineProperty(Vue.prototype,'$data',dataDef);Object.defineProperty(Vue.prototype,'$props',propsDef);Vue.prototype.$set=set;Vue.prototype.$delete=del;Vue.prototype.$watch=function(expOrFn,cb,options){var vm=this;if(isPlainObject(cb)){return createWatcher(vm,expOrFn,cb,options);}options=options||{};options.user=true;var watcher=new Watcher(vm,expOrFn,cb,options);if(options.immediate){cb.call(vm,watcher.value);}return function unwatchFn(){watcher.teardown();};};}/*  */function initProvide(vm){var provide=vm.$options.provide;if(provide){vm._provided=typeof provide==='function'?provide.call(vm):provide;}}function initInjections(vm){var result=resolveInject(vm.$options.inject,vm);if(result){observerState.shouldConvert=false;Object.keys(result).forEach(function(key){/* istanbul ignore else */if(false){defineReactive(vm,key,result[key],function(){warn("Avoid mutating an injected value directly since the changes will be "+"overwritten whenever the provided component re-renders. "+"injection being mutated: \""+key+"\"",vm);});}else{defineReactive(vm,key,result[key]);}});observerState.shouldConvert=true;}}function resolveInject(inject,vm){if(inject){// inject is :any because flow is not smart enough to figure out cached
var result=Object.create(null);var keys=hasSymbol?Reflect.ownKeys(inject).filter(function(key){/* istanbul ignore next */return Object.getOwnPropertyDescriptor(inject,key).enumerable;}):Object.keys(inject);for(var i=0;i<keys.length;i++){var key=keys[i];var provideKey=inject[key].from;var source=vm;while(source){if(source._provided&&provideKey in source._provided){result[key]=source._provided[provideKey];break;}source=source.$parent;}if(!source){if('default'in inject[key]){var provideDefault=inject[key].default;result[key]=typeof provideDefault==='function'?provideDefault.call(vm):provideDefault;}else if(false){warn("Injection \""+key+"\" not found",vm);}}}return result;}}/*  *//**
 * Runtime helper for rendering v-for lists.
 */function renderList(val,render){var ret,i,l,keys,key;if(Array.isArray(val)||typeof val==='string'){ret=new Array(val.length);for(i=0,l=val.length;i<l;i++){ret[i]=render(val[i],i);}}else if(typeof val==='number'){ret=new Array(val);for(i=0;i<val;i++){ret[i]=render(i+1,i);}}else if(isObject(val)){keys=Object.keys(val);ret=new Array(keys.length);for(i=0,l=keys.length;i<l;i++){key=keys[i];ret[i]=render(val[key],key,i);}}if(isDef(ret)){ret._isVList=true;}return ret;}/*  *//**
 * Runtime helper for rendering <slot>
 */function renderSlot(name,fallback,props,bindObject){var scopedSlotFn=this.$scopedSlots[name];if(scopedSlotFn){// scoped slot
props=props||{};if(bindObject){if(false){warn('slot v-bind without argument expects an Object',this);}props=extend(extend({},bindObject),props);}return scopedSlotFn(props)||fallback;}else{var slotNodes=this.$slots[name];// warn duplicate slot usage
if(slotNodes&&"production"!=='production'){slotNodes._rendered&&warn("Duplicate presence of slot \""+name+"\" found in the same render tree "+"- this will likely cause render errors.",this);slotNodes._rendered=true;}return slotNodes||fallback;}}/*  *//**
 * Runtime helper for resolving filters
 */function resolveFilter(id){return resolveAsset(this.$options,'filters',id,true)||identity;}/*  *//**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */function checkKeyCodes(eventKeyCode,key,builtInAlias,eventKeyName){var keyCodes=config.keyCodes[key]||builtInAlias;if(keyCodes){if(Array.isArray(keyCodes)){return keyCodes.indexOf(eventKeyCode)===-1;}else{return keyCodes!==eventKeyCode;}}else if(eventKeyName){return hyphenate(eventKeyName)!==key;}}/*  *//**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */function bindObjectProps(data,tag,value,asProp,isSync){if(value){if(!isObject(value)){"production"!=='production'&&warn('v-bind without argument expects an Object or Array value',this);}else{if(Array.isArray(value)){value=toObject(value);}var hash;var loop=function loop(key){if(key==='class'||key==='style'||isReservedAttribute(key)){hash=data;}else{var type=data.attrs&&data.attrs.type;hash=asProp||config.mustUseProp(tag,type,key)?data.domProps||(data.domProps={}):data.attrs||(data.attrs={});}if(!(key in hash)){hash[key]=value[key];if(isSync){var on=data.on||(data.on={});on["update:"+key]=function($event){value[key]=$event;};}}};for(var key in value){loop(key);}}}return data;}/*  *//**
 * Runtime helper for rendering static trees.
 */function renderStatic(index,isInFor){// static trees can be rendered once and cached on the contructor options
// so every instance shares the same cached trees
var renderFns=this.$options.staticRenderFns;var cached=renderFns.cached||(renderFns.cached=[]);var tree=cached[index];// if has already-rendered static tree and not inside v-for,
// we can reuse the same tree by doing a shallow clone.
if(tree&&!isInFor){return Array.isArray(tree)?cloneVNodes(tree):cloneVNode(tree);}// otherwise, render a fresh tree.
tree=cached[index]=renderFns[index].call(this._renderProxy,null,this);markStatic(tree,"__static__"+index,false);return tree;}/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */function markOnce(tree,index,key){markStatic(tree,"__once__"+index+(key?"_"+key:""),true);return tree;}function markStatic(tree,key,isOnce){if(Array.isArray(tree)){for(var i=0;i<tree.length;i++){if(tree[i]&&typeof tree[i]!=='string'){markStaticNode(tree[i],key+"_"+i,isOnce);}}}else{markStaticNode(tree,key,isOnce);}}function markStaticNode(node,key,isOnce){node.isStatic=true;node.key=key;node.isOnce=isOnce;}/*  */function bindObjectListeners(data,value){if(value){if(!isPlainObject(value)){"production"!=='production'&&warn('v-on without argument expects an Object value',this);}else{var on=data.on=data.on?extend({},data.on):{};for(var key in value){var existing=on[key];var ours=value[key];on[key]=existing?[].concat(existing,ours):ours;}}}return data;}/*  */function installRenderHelpers(target){target._o=markOnce;target._n=toNumber;target._s=toString;target._l=renderList;target._t=renderSlot;target._q=looseEqual;target._i=looseIndexOf;target._m=renderStatic;target._f=resolveFilter;target._k=checkKeyCodes;target._b=bindObjectProps;target._v=createTextVNode;target._e=createEmptyVNode;target._u=resolveScopedSlots;target._g=bindObjectListeners;}/*  */function FunctionalRenderContext(data,props,children,parent,Ctor){var options=Ctor.options;this.data=data;this.props=props;this.children=children;this.parent=parent;this.listeners=data.on||emptyObject;this.injections=resolveInject(options.inject,parent);this.slots=function(){return resolveSlots(children,parent);};// ensure the createElement function in functional components
// gets a unique context - this is necessary for correct named slot check
var contextVm=Object.create(parent);var isCompiled=isTrue(options._compiled);var needNormalization=!isCompiled;// support for compiled functional template
if(isCompiled){// exposing $options for renderStatic()
this.$options=options;// pre-resolve slots for renderSlot()
this.$slots=this.slots();this.$scopedSlots=data.scopedSlots||emptyObject;}if(options._scopeId){this._c=function(a,b,c,d){var vnode=createElement(contextVm,a,b,c,d,needNormalization);if(vnode){vnode.functionalScopeId=options._scopeId;vnode.functionalContext=parent;}return vnode;};}else{this._c=function(a,b,c,d){return createElement(contextVm,a,b,c,d,needNormalization);};}}installRenderHelpers(FunctionalRenderContext.prototype);function createFunctionalComponent(Ctor,propsData,data,contextVm,children){var options=Ctor.options;var props={};var propOptions=options.props;if(isDef(propOptions)){for(var key in propOptions){props[key]=validateProp(key,propOptions,propsData||emptyObject);}}else{if(isDef(data.attrs)){mergeProps(props,data.attrs);}if(isDef(data.props)){mergeProps(props,data.props);}}var renderContext=new FunctionalRenderContext(data,props,children,contextVm,Ctor);var vnode=options.render.call(null,renderContext._c,renderContext);if(vnode instanceof VNode){vnode.functionalContext=contextVm;vnode.functionalOptions=options;if(data.slot){(vnode.data||(vnode.data={})).slot=data.slot;}}return vnode;}function mergeProps(to,from){for(var key in from){to[camelize(key)]=from[key];}}/*  */// hooks to be invoked on component VNodes during patch
var componentVNodeHooks={init:function init(vnode,hydrating,parentElm,refElm){if(!vnode.componentInstance||vnode.componentInstance._isDestroyed){var child=vnode.componentInstance=createComponentInstanceForVnode(vnode,activeInstance,parentElm,refElm);child.$mount(hydrating?vnode.elm:undefined,hydrating);}else if(vnode.data.keepAlive){// kept-alive components, treat as a patch
var mountedNode=vnode;// work around flow
componentVNodeHooks.prepatch(mountedNode,mountedNode);}},prepatch:function prepatch(oldVnode,vnode){var options=vnode.componentOptions;var child=vnode.componentInstance=oldVnode.componentInstance;updateChildComponent(child,options.propsData,// updated props
options.listeners,// updated listeners
vnode,// new parent vnode
options.children// new children
);},insert:function insert(vnode){var context=vnode.context;var componentInstance=vnode.componentInstance;if(!componentInstance._isMounted){componentInstance._isMounted=true;callHook(componentInstance,'mounted');}if(vnode.data.keepAlive){if(context._isMounted){// vue-router#1212
// During updates, a kept-alive component's child components may
// change, so directly walking the tree here may call activated hooks
// on incorrect children. Instead we push them into a queue which will
// be processed after the whole patch process ended.
queueActivatedComponent(componentInstance);}else{activateChildComponent(componentInstance,true/* direct */);}}},destroy:function destroy(vnode){var componentInstance=vnode.componentInstance;if(!componentInstance._isDestroyed){if(!vnode.data.keepAlive){componentInstance.$destroy();}else{deactivateChildComponent(componentInstance,true/* direct */);}}}};var hooksToMerge=Object.keys(componentVNodeHooks);function createComponent(Ctor,data,context,children,tag){if(isUndef(Ctor)){return;}var baseCtor=context.$options._base;// plain options object: turn it into a constructor
if(isObject(Ctor)){Ctor=baseCtor.extend(Ctor);}// if at this stage it's not a constructor or an async component factory,
// reject.
if(typeof Ctor!=='function'){if(false){warn("Invalid Component definition: "+String(Ctor),context);}return;}// async component
var asyncFactory;if(isUndef(Ctor.cid)){asyncFactory=Ctor;Ctor=resolveAsyncComponent(asyncFactory,baseCtor,context);if(Ctor===undefined){// return a placeholder node for async component, which is rendered
// as a comment node but preserves all the raw information for the node.
// the information will be used for async server-rendering and hydration.
return createAsyncPlaceholder(asyncFactory,data,context,children,tag);}}data=data||{};// resolve constructor options in case global mixins are applied after
// component constructor creation
resolveConstructorOptions(Ctor);// transform component v-model data into props & events
if(isDef(data.model)){transformModel(Ctor.options,data);}// extract props
var propsData=extractPropsFromVNodeData(data,Ctor,tag);// functional component
if(isTrue(Ctor.options.functional)){return createFunctionalComponent(Ctor,propsData,data,context,children);}// extract listeners, since these needs to be treated as
// child component listeners instead of DOM listeners
var listeners=data.on;// replace with listeners with .native modifier
// so it gets processed during parent component patch.
data.on=data.nativeOn;if(isTrue(Ctor.options.abstract)){// abstract components do not keep anything
// other than props & listeners & slot
// work around flow
var slot=data.slot;data={};if(slot){data.slot=slot;}}// merge component management hooks onto the placeholder node
mergeHooks(data);// return a placeholder vnode
var name=Ctor.options.name||tag;var vnode=new VNode("vue-component-"+Ctor.cid+(name?"-"+name:''),data,undefined,undefined,undefined,context,{Ctor:Ctor,propsData:propsData,listeners:listeners,tag:tag,children:children},asyncFactory);return vnode;}function createComponentInstanceForVnode(vnode,// we know it's MountedComponentVNode but flow doesn't
parent,// activeInstance in lifecycle state
parentElm,refElm){var vnodeComponentOptions=vnode.componentOptions;var options={_isComponent:true,parent:parent,propsData:vnodeComponentOptions.propsData,_componentTag:vnodeComponentOptions.tag,_parentVnode:vnode,_parentListeners:vnodeComponentOptions.listeners,_renderChildren:vnodeComponentOptions.children,_parentElm:parentElm||null,_refElm:refElm||null};// check inline-template render functions
var inlineTemplate=vnode.data.inlineTemplate;if(isDef(inlineTemplate)){options.render=inlineTemplate.render;options.staticRenderFns=inlineTemplate.staticRenderFns;}return new vnodeComponentOptions.Ctor(options);}function mergeHooks(data){if(!data.hook){data.hook={};}for(var i=0;i<hooksToMerge.length;i++){var key=hooksToMerge[i];var fromParent=data.hook[key];var ours=componentVNodeHooks[key];data.hook[key]=fromParent?mergeHook$1(ours,fromParent):ours;}}function mergeHook$1(one,two){return function(a,b,c,d){one(a,b,c,d);two(a,b,c,d);};}// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel(options,data){var prop=options.model&&options.model.prop||'value';var event=options.model&&options.model.event||'input';(data.props||(data.props={}))[prop]=data.model.value;var on=data.on||(data.on={});if(isDef(on[event])){on[event]=[data.model.callback].concat(on[event]);}else{on[event]=data.model.callback;}}/*  */var SIMPLE_NORMALIZE=1;var ALWAYS_NORMALIZE=2;// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement(context,tag,data,children,normalizationType,alwaysNormalize){if(Array.isArray(data)||isPrimitive(data)){normalizationType=children;children=data;data=undefined;}if(isTrue(alwaysNormalize)){normalizationType=ALWAYS_NORMALIZE;}return _createElement(context,tag,data,children,normalizationType);}function _createElement(context,tag,data,children,normalizationType){if(isDef(data)&&isDef(data.__ob__)){"production"!=='production'&&warn("Avoid using observed data object as vnode data: "+JSON.stringify(data)+"\n"+'Always create fresh vnode data objects in each render!',context);return createEmptyVNode();}// object syntax in v-bind
if(isDef(data)&&isDef(data.is)){tag=data.is;}if(!tag){// in case of component :is set to falsy value
return createEmptyVNode();}// warn against non-primitive key
if(false){warn('Avoid using non-primitive value as key, '+'use string/number value instead.',context);}// support single function children as default scoped slot
if(Array.isArray(children)&&typeof children[0]==='function'){data=data||{};data.scopedSlots={default:children[0]};children.length=0;}if(normalizationType===ALWAYS_NORMALIZE){children=normalizeChildren(children);}else if(normalizationType===SIMPLE_NORMALIZE){children=simpleNormalizeChildren(children);}var vnode,ns;if(typeof tag==='string'){var Ctor;ns=context.$vnode&&context.$vnode.ns||config.getTagNamespace(tag);if(config.isReservedTag(tag)){// platform built-in elements
vnode=new VNode(config.parsePlatformTagName(tag),data,children,undefined,undefined,context);}else if(isDef(Ctor=resolveAsset(context.$options,'components',tag))){// component
vnode=createComponent(Ctor,data,context,children,tag);}else{// unknown or unlisted namespaced elements
// check at runtime because it may get assigned a namespace when its
// parent normalizes children
vnode=new VNode(tag,data,children,undefined,undefined,context);}}else{// direct component options / constructor
vnode=createComponent(tag,data,context,children);}if(isDef(vnode)){if(ns){applyNS(vnode,ns);}return vnode;}else{return createEmptyVNode();}}function applyNS(vnode,ns,force){vnode.ns=ns;if(vnode.tag==='foreignObject'){// use default namespace inside foreignObject
ns=undefined;force=true;}if(isDef(vnode.children)){for(var i=0,l=vnode.children.length;i<l;i++){var child=vnode.children[i];if(isDef(child.tag)&&(isUndef(child.ns)||isTrue(force))){applyNS(child,ns,force);}}}}/*  */function initRender(vm){vm._vnode=null;// the root of the child tree
var options=vm.$options;var parentVnode=vm.$vnode=options._parentVnode;// the placeholder node in parent tree
var renderContext=parentVnode&&parentVnode.context;vm.$slots=resolveSlots(options._renderChildren,renderContext);vm.$scopedSlots=emptyObject;// bind the createElement fn to this instance
// so that we get proper render context inside it.
// args order: tag, data, children, normalizationType, alwaysNormalize
// internal version is used by render functions compiled from templates
vm._c=function(a,b,c,d){return createElement(vm,a,b,c,d,false);};// normalization is always applied for the public version, used in
// user-written render functions.
vm.$createElement=function(a,b,c,d){return createElement(vm,a,b,c,d,true);};// $attrs & $listeners are exposed for easier HOC creation.
// they need to be reactive so that HOCs using them are always updated
var parentData=parentVnode&&parentVnode.data;/* istanbul ignore else */if(false){defineReactive(vm,'$attrs',parentData&&parentData.attrs||emptyObject,function(){!isUpdatingChildComponent&&warn("$attrs is readonly.",vm);},true);defineReactive(vm,'$listeners',options._parentListeners||emptyObject,function(){!isUpdatingChildComponent&&warn("$listeners is readonly.",vm);},true);}else{defineReactive(vm,'$attrs',parentData&&parentData.attrs||emptyObject,null,true);defineReactive(vm,'$listeners',options._parentListeners||emptyObject,null,true);}}function renderMixin(Vue){// install runtime convenience helpers
installRenderHelpers(Vue.prototype);Vue.prototype.$nextTick=function(fn){return nextTick(fn,this);};Vue.prototype._render=function(){var vm=this;var ref=vm.$options;var render=ref.render;var _parentVnode=ref._parentVnode;if(vm._isMounted){// if the parent didn't update, the slot nodes will be the ones from
// last render. They need to be cloned to ensure "freshness" for this render.
for(var key in vm.$slots){var slot=vm.$slots[key];if(slot._rendered){vm.$slots[key]=cloneVNodes(slot,true/* deep */);}}}vm.$scopedSlots=_parentVnode&&_parentVnode.data.scopedSlots||emptyObject;// set parent vnode. this allows render functions to have access
// to the data on the placeholder node.
vm.$vnode=_parentVnode;// render self
var vnode;try{vnode=render.call(vm._renderProxy,vm.$createElement);}catch(e){handleError(e,vm,"render");// return error render result,
// or previous vnode to prevent render error causing blank component
/* istanbul ignore else */if(false){if(vm.$options.renderError){try{vnode=vm.$options.renderError.call(vm._renderProxy,vm.$createElement,e);}catch(e){handleError(e,vm,"renderError");vnode=vm._vnode;}}else{vnode=vm._vnode;}}else{vnode=vm._vnode;}}// return empty vnode in case the render function errored out
if(!(vnode instanceof VNode)){if(false){warn('Multiple root nodes returned from render function. Render function '+'should return a single root node.',vm);}vnode=createEmptyVNode();}// set parent
vnode.parent=_parentVnode;return vnode;};}/*  */var uid$1=0;function initMixin(Vue){Vue.prototype._init=function(options){var vm=this;// a uid
vm._uid=uid$1++;var startTag,endTag;/* istanbul ignore if */if(false){startTag="vue-perf-start:"+vm._uid;endTag="vue-perf-end:"+vm._uid;mark(startTag);}// a flag to avoid this being observed
vm._isVue=true;// merge options
if(options&&options._isComponent){// optimize internal component instantiation
// since dynamic options merging is pretty slow, and none of the
// internal component options needs special treatment.
initInternalComponent(vm,options);}else{vm.$options=mergeOptions(resolveConstructorOptions(vm.constructor),options||{},vm);}/* istanbul ignore else */if(false){initProxy(vm);}else{vm._renderProxy=vm;}// expose real self
vm._self=vm;initLifecycle(vm);initEvents(vm);initRender(vm);callHook(vm,'beforeCreate');initInjections(vm);// resolve injections before data/props
initState(vm);initProvide(vm);// resolve provide after data/props
callHook(vm,'created');/* istanbul ignore if */if(false){vm._name=formatComponentName(vm,false);mark(endTag);measure("vue "+vm._name+" init",startTag,endTag);}if(vm.$options.el){vm.$mount(vm.$options.el);}};}function initInternalComponent(vm,options){var opts=vm.$options=Object.create(vm.constructor.options);// doing this because it's faster than dynamic enumeration.
opts.parent=options.parent;opts.propsData=options.propsData;opts._parentVnode=options._parentVnode;opts._parentListeners=options._parentListeners;opts._renderChildren=options._renderChildren;opts._componentTag=options._componentTag;opts._parentElm=options._parentElm;opts._refElm=options._refElm;if(options.render){opts.render=options.render;opts.staticRenderFns=options.staticRenderFns;}}function resolveConstructorOptions(Ctor){var options=Ctor.options;if(Ctor.super){var superOptions=resolveConstructorOptions(Ctor.super);var cachedSuperOptions=Ctor.superOptions;if(superOptions!==cachedSuperOptions){// super option changed,
// need to resolve new options.
Ctor.superOptions=superOptions;// check if there are any late-modified/attached options (#4976)
var modifiedOptions=resolveModifiedOptions(Ctor);// update base extend options
if(modifiedOptions){extend(Ctor.extendOptions,modifiedOptions);}options=Ctor.options=mergeOptions(superOptions,Ctor.extendOptions);if(options.name){options.components[options.name]=Ctor;}}}return options;}function resolveModifiedOptions(Ctor){var modified;var latest=Ctor.options;var extended=Ctor.extendOptions;var sealed=Ctor.sealedOptions;for(var key in latest){if(latest[key]!==sealed[key]){if(!modified){modified={};}modified[key]=dedupe(latest[key],extended[key],sealed[key]);}}return modified;}function dedupe(latest,extended,sealed){// compare latest and sealed to ensure lifecycle hooks won't be duplicated
// between merges
if(Array.isArray(latest)){var res=[];sealed=Array.isArray(sealed)?sealed:[sealed];extended=Array.isArray(extended)?extended:[extended];for(var i=0;i<latest.length;i++){// push original options and not sealed options to exclude duplicated options
if(extended.indexOf(latest[i])>=0||sealed.indexOf(latest[i])<0){res.push(latest[i]);}}return res;}else{return latest;}}function Vue$3(options){if(false){warn('Vue is a constructor and should be called with the `new` keyword');}this._init(options);}initMixin(Vue$3);stateMixin(Vue$3);eventsMixin(Vue$3);lifecycleMixin(Vue$3);renderMixin(Vue$3);/*  */function initUse(Vue){Vue.use=function(plugin){var installedPlugins=this._installedPlugins||(this._installedPlugins=[]);if(installedPlugins.indexOf(plugin)>-1){return this;}// additional parameters
var args=toArray(arguments,1);args.unshift(this);if(typeof plugin.install==='function'){plugin.install.apply(plugin,args);}else if(typeof plugin==='function'){plugin.apply(null,args);}installedPlugins.push(plugin);return this;};}/*  */function initMixin$1(Vue){Vue.mixin=function(mixin){this.options=mergeOptions(this.options,mixin);return this;};}/*  */function initExtend(Vue){/**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */Vue.cid=0;var cid=1;/**
   * Class inheritance
   */Vue.extend=function(extendOptions){extendOptions=extendOptions||{};var Super=this;var SuperId=Super.cid;var cachedCtors=extendOptions._Ctor||(extendOptions._Ctor={});if(cachedCtors[SuperId]){return cachedCtors[SuperId];}var name=extendOptions.name||Super.options.name;if(false){if(!/^[a-zA-Z][\w-]*$/.test(name)){warn('Invalid component name: "'+name+'". Component names '+'can only contain alphanumeric characters and the hyphen, '+'and must start with a letter.');}}var Sub=function VueComponent(options){this._init(options);};Sub.prototype=Object.create(Super.prototype);Sub.prototype.constructor=Sub;Sub.cid=cid++;Sub.options=mergeOptions(Super.options,extendOptions);Sub['super']=Super;// For props and computed properties, we define the proxy getters on
// the Vue instances at extension time, on the extended prototype. This
// avoids Object.defineProperty calls for each instance created.
if(Sub.options.props){initProps$1(Sub);}if(Sub.options.computed){initComputed$1(Sub);}// allow further extension/mixin/plugin usage
Sub.extend=Super.extend;Sub.mixin=Super.mixin;Sub.use=Super.use;// create asset registers, so extended classes
// can have their private assets too.
ASSET_TYPES.forEach(function(type){Sub[type]=Super[type];});// enable recursive self-lookup
if(name){Sub.options.components[name]=Sub;}// keep a reference to the super options at extension time.
// later at instantiation we can check if Super's options have
// been updated.
Sub.superOptions=Super.options;Sub.extendOptions=extendOptions;Sub.sealedOptions=extend({},Sub.options);// cache constructor
cachedCtors[SuperId]=Sub;return Sub;};}function initProps$1(Comp){var props=Comp.options.props;for(var key in props){proxy(Comp.prototype,"_props",key);}}function initComputed$1(Comp){var computed=Comp.options.computed;for(var key in computed){defineComputed(Comp.prototype,key,computed[key]);}}/*  */function initAssetRegisters(Vue){/**
   * Create asset registration methods.
   */ASSET_TYPES.forEach(function(type){Vue[type]=function(id,definition){if(!definition){return this.options[type+'s'][id];}else{/* istanbul ignore if */if(false){if(type==='component'&&config.isReservedTag(id)){warn('Do not use built-in or reserved HTML elements as component '+'id: '+id);}}if(type==='component'&&isPlainObject(definition)){definition.name=definition.name||id;definition=this.options._base.extend(definition);}if(type==='directive'&&typeof definition==='function'){definition={bind:definition,update:definition};}this.options[type+'s'][id]=definition;return definition;}};});}/*  */function getComponentName(opts){return opts&&(opts.Ctor.options.name||opts.tag);}function matches(pattern,name){if(Array.isArray(pattern)){return pattern.indexOf(name)>-1;}else if(typeof pattern==='string'){return pattern.split(',').indexOf(name)>-1;}else if(isRegExp(pattern)){return pattern.test(name);}/* istanbul ignore next */return false;}function pruneCache(keepAliveInstance,filter){var cache=keepAliveInstance.cache;var keys=keepAliveInstance.keys;var _vnode=keepAliveInstance._vnode;for(var key in cache){var cachedNode=cache[key];if(cachedNode){var name=getComponentName(cachedNode.componentOptions);if(name&&!filter(name)){pruneCacheEntry(cache,key,keys,_vnode);}}}}function pruneCacheEntry(cache,key,keys,current){var cached$$1=cache[key];if(cached$$1&&cached$$1!==current){cached$$1.componentInstance.$destroy();}cache[key]=null;remove(keys,key);}var patternTypes=[String,RegExp,Array];var KeepAlive={name:'keep-alive',abstract:true,props:{include:patternTypes,exclude:patternTypes,max:[String,Number]},created:function created(){this.cache=Object.create(null);this.keys=[];},destroyed:function destroyed(){var this$1=this;for(var key in this$1.cache){pruneCacheEntry(this$1.cache,key,this$1.keys);}},watch:{include:function include(val){pruneCache(this,function(name){return matches(val,name);});},exclude:function exclude(val){pruneCache(this,function(name){return!matches(val,name);});}},render:function render(){var vnode=getFirstComponentChild(this.$slots.default);var componentOptions=vnode&&vnode.componentOptions;if(componentOptions){// check pattern
var name=getComponentName(componentOptions);if(name&&(this.include&&!matches(this.include,name)||this.exclude&&matches(this.exclude,name))){return vnode;}var ref=this;var cache=ref.cache;var keys=ref.keys;var key=vnode.key==null// same constructor may get registered as different local components
// so cid alone is not enough (#3269)
?componentOptions.Ctor.cid+(componentOptions.tag?"::"+componentOptions.tag:''):vnode.key;if(cache[key]){vnode.componentInstance=cache[key].componentInstance;// make current key freshest
remove(keys,key);keys.push(key);}else{cache[key]=vnode;keys.push(key);// prune oldest entry
if(this.max&&keys.length>parseInt(this.max)){pruneCacheEntry(cache,keys[0],keys,this._vnode);}}vnode.data.keepAlive=true;}return vnode;}};var builtInComponents={KeepAlive:KeepAlive};/*  */function initGlobalAPI(Vue){// config
var configDef={};configDef.get=function(){return config;};if(false){configDef.set=function(){warn('Do not replace the Vue.config object, set individual fields instead.');};}Object.defineProperty(Vue,'config',configDef);// exposed util methods.
// NOTE: these are not considered part of the public API - avoid relying on
// them unless you are aware of the risk.
Vue.util={warn:warn,extend:extend,mergeOptions:mergeOptions,defineReactive:defineReactive};Vue.set=set;Vue.delete=del;Vue.nextTick=nextTick;Vue.options=Object.create(null);ASSET_TYPES.forEach(function(type){Vue.options[type+'s']=Object.create(null);});// this is used to identify the "base" constructor to extend all plain-object
// components with in Weex's multi-instance scenarios.
Vue.options._base=Vue;extend(Vue.options.components,builtInComponents);initUse(Vue);initMixin$1(Vue);initExtend(Vue);initAssetRegisters(Vue);}initGlobalAPI(Vue$3);Object.defineProperty(Vue$3.prototype,'$isServer',{get:isServerRendering});Object.defineProperty(Vue$3.prototype,'$ssrContext',{get:function get(){/* istanbul ignore next */return this.$vnode&&this.$vnode.ssrContext;}});Vue$3.version='2.5.2';/*  */// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr=makeMap('style,class');// attributes that should be using props for binding
var acceptValue=makeMap('input,textarea,option,select,progress');var mustUseProp=function mustUseProp(tag,type,attr){return attr==='value'&&acceptValue(tag)&&type!=='button'||attr==='selected'&&tag==='option'||attr==='checked'&&tag==='input'||attr==='muted'&&tag==='video';};var isEnumeratedAttr=makeMap('contenteditable,draggable,spellcheck');var isBooleanAttr=makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,'+'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,'+'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,'+'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,'+'required,reversed,scoped,seamless,selected,sortable,translate,'+'truespeed,typemustmatch,visible');var xlinkNS='http://www.w3.org/1999/xlink';var isXlink=function isXlink(name){return name.charAt(5)===':'&&name.slice(0,5)==='xlink';};var getXlinkProp=function getXlinkProp(name){return isXlink(name)?name.slice(6,name.length):'';};var isFalsyAttrValue=function isFalsyAttrValue(val){return val==null||val===false;};/*  */function genClassForVnode(vnode){var data=vnode.data;var parentNode=vnode;var childNode=vnode;while(isDef(childNode.componentInstance)){childNode=childNode.componentInstance._vnode;if(childNode.data){data=mergeClassData(childNode.data,data);}}while(isDef(parentNode=parentNode.parent)){if(parentNode.data){data=mergeClassData(data,parentNode.data);}}return renderClass(data.staticClass,data.class);}function mergeClassData(child,parent){return{staticClass:concat(child.staticClass,parent.staticClass),class:isDef(child.class)?[child.class,parent.class]:parent.class};}function renderClass(staticClass,dynamicClass){if(isDef(staticClass)||isDef(dynamicClass)){return concat(staticClass,stringifyClass(dynamicClass));}/* istanbul ignore next */return'';}function concat(a,b){return a?b?a+' '+b:a:b||'';}function stringifyClass(value){if(Array.isArray(value)){return stringifyArray(value);}if(isObject(value)){return stringifyObject(value);}if(typeof value==='string'){return value;}/* istanbul ignore next */return'';}function stringifyArray(value){var res='';var stringified;for(var i=0,l=value.length;i<l;i++){if(isDef(stringified=stringifyClass(value[i]))&&stringified!==''){if(res){res+=' ';}res+=stringified;}}return res;}function stringifyObject(value){var res='';for(var key in value){if(value[key]){if(res){res+=' ';}res+=key;}}return res;}/*  */var namespaceMap={svg:'http://www.w3.org/2000/svg',math:'http://www.w3.org/1998/Math/MathML'};var isHTMLTag=makeMap('html,body,base,head,link,meta,style,title,'+'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,'+'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,'+'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,'+'s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,'+'embed,object,param,source,canvas,script,noscript,del,ins,'+'caption,col,colgroup,table,thead,tbody,td,th,tr,'+'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,'+'output,progress,select,textarea,'+'details,dialog,menu,menuitem,summary,'+'content,element,shadow,template,blockquote,iframe,tfoot');// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG=makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,'+'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,'+'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',true);var isPreTag=function isPreTag(tag){return tag==='pre';};var isReservedTag=function isReservedTag(tag){return isHTMLTag(tag)||isSVG(tag);};function getTagNamespace(tag){if(isSVG(tag)){return'svg';}// basic support for MathML
// note it doesn't support other MathML elements being component roots
if(tag==='math'){return'math';}}var unknownElementCache=Object.create(null);function isUnknownElement(tag){/* istanbul ignore if */if(!inBrowser){return true;}if(isReservedTag(tag)){return false;}tag=tag.toLowerCase();/* istanbul ignore if */if(unknownElementCache[tag]!=null){return unknownElementCache[tag];}var el=document.createElement(tag);if(tag.indexOf('-')>-1){// http://stackoverflow.com/a/28210364/1070244
return unknownElementCache[tag]=el.constructor===window.HTMLUnknownElement||el.constructor===window.HTMLElement;}else{return unknownElementCache[tag]=/HTMLUnknownElement/.test(el.toString());}}var isTextInputType=makeMap('text,number,password,search,email,tel,url');/*  *//**
 * Query an element selector if it's not an element already.
 */function query(el){if(typeof el==='string'){var selected=document.querySelector(el);if(!selected){"production"!=='production'&&warn('Cannot find element: '+el);return document.createElement('div');}return selected;}else{return el;}}/*  */function createElement$1(tagName,vnode){var elm=document.createElement(tagName);if(tagName!=='select'){return elm;}// false or null will remove the attribute but undefined will not
if(vnode.data&&vnode.data.attrs&&vnode.data.attrs.multiple!==undefined){elm.setAttribute('multiple','multiple');}return elm;}function createElementNS(namespace,tagName){return document.createElementNS(namespaceMap[namespace],tagName);}function createTextNode(text){return document.createTextNode(text);}function createComment(text){return document.createComment(text);}function insertBefore(parentNode,newNode,referenceNode){parentNode.insertBefore(newNode,referenceNode);}function removeChild(node,child){node.removeChild(child);}function appendChild(node,child){node.appendChild(child);}function parentNode(node){return node.parentNode;}function nextSibling(node){return node.nextSibling;}function tagName(node){return node.tagName;}function setTextContent(node,text){node.textContent=text;}function setAttribute(node,key,val){node.setAttribute(key,val);}var nodeOps=Object.freeze({createElement:createElement$1,createElementNS:createElementNS,createTextNode:createTextNode,createComment:createComment,insertBefore:insertBefore,removeChild:removeChild,appendChild:appendChild,parentNode:parentNode,nextSibling:nextSibling,tagName:tagName,setTextContent:setTextContent,setAttribute:setAttribute});/*  */var ref={create:function create(_,vnode){registerRef(vnode);},update:function update(oldVnode,vnode){if(oldVnode.data.ref!==vnode.data.ref){registerRef(oldVnode,true);registerRef(vnode);}},destroy:function destroy(vnode){registerRef(vnode,true);}};function registerRef(vnode,isRemoval){var key=vnode.data.ref;if(!key){return;}var vm=vnode.context;var ref=vnode.componentInstance||vnode.elm;var refs=vm.$refs;if(isRemoval){if(Array.isArray(refs[key])){remove(refs[key],ref);}else if(refs[key]===ref){refs[key]=undefined;}}else{if(vnode.data.refInFor){if(!Array.isArray(refs[key])){refs[key]=[ref];}else if(refs[key].indexOf(ref)<0){// $flow-disable-line
refs[key].push(ref);}}else{refs[key]=ref;}}}/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */var emptyNode=new VNode('',{},[]);var hooks=['create','activate','update','remove','destroy'];function sameVnode(a,b){return a.key===b.key&&(a.tag===b.tag&&a.isComment===b.isComment&&isDef(a.data)===isDef(b.data)&&sameInputType(a,b)||isTrue(a.isAsyncPlaceholder)&&a.asyncFactory===b.asyncFactory&&isUndef(b.asyncFactory.error));}function sameInputType(a,b){if(a.tag!=='input'){return true;}var i;var typeA=isDef(i=a.data)&&isDef(i=i.attrs)&&i.type;var typeB=isDef(i=b.data)&&isDef(i=i.attrs)&&i.type;return typeA===typeB||isTextInputType(typeA)&&isTextInputType(typeB);}function createKeyToOldIdx(children,beginIdx,endIdx){var i,key;var map={};for(i=beginIdx;i<=endIdx;++i){key=children[i].key;if(isDef(key)){map[key]=i;}}return map;}function createPatchFunction(backend){var i,j;var cbs={};var modules=backend.modules;var nodeOps=backend.nodeOps;for(i=0;i<hooks.length;++i){cbs[hooks[i]]=[];for(j=0;j<modules.length;++j){if(isDef(modules[j][hooks[i]])){cbs[hooks[i]].push(modules[j][hooks[i]]);}}}function emptyNodeAt(elm){return new VNode(nodeOps.tagName(elm).toLowerCase(),{},[],undefined,elm);}function createRmCb(childElm,listeners){function remove(){if(--remove.listeners===0){removeNode(childElm);}}remove.listeners=listeners;return remove;}function removeNode(el){var parent=nodeOps.parentNode(el);// element may have already been removed due to v-html / v-text
if(isDef(parent)){nodeOps.removeChild(parent,el);}}var inPre=0;function createElm(vnode,insertedVnodeQueue,parentElm,refElm,nested){vnode.isRootInsert=!nested;// for transition enter check
if(createComponent(vnode,insertedVnodeQueue,parentElm,refElm)){return;}var data=vnode.data;var children=vnode.children;var tag=vnode.tag;if(isDef(tag)){if(false){if(data&&data.pre){inPre++;}if(!inPre&&!vnode.ns&&!(config.ignoredElements.length&&config.ignoredElements.some(function(ignore){return isRegExp(ignore)?ignore.test(tag):ignore===tag;}))&&config.isUnknownElement(tag)){warn('Unknown custom element: <'+tag+'> - did you '+'register the component correctly? For recursive components, '+'make sure to provide the "name" option.',vnode.context);}}vnode.elm=vnode.ns?nodeOps.createElementNS(vnode.ns,tag):nodeOps.createElement(tag,vnode);setScope(vnode);/* istanbul ignore if */{createChildren(vnode,children,insertedVnodeQueue);if(isDef(data)){invokeCreateHooks(vnode,insertedVnodeQueue);}insert(parentElm,vnode.elm,refElm);}if(false){inPre--;}}else if(isTrue(vnode.isComment)){vnode.elm=nodeOps.createComment(vnode.text);insert(parentElm,vnode.elm,refElm);}else{vnode.elm=nodeOps.createTextNode(vnode.text);insert(parentElm,vnode.elm,refElm);}}function createComponent(vnode,insertedVnodeQueue,parentElm,refElm){var i=vnode.data;if(isDef(i)){var isReactivated=isDef(vnode.componentInstance)&&i.keepAlive;if(isDef(i=i.hook)&&isDef(i=i.init)){i(vnode,false/* hydrating */,parentElm,refElm);}// after calling the init hook, if the vnode is a child component
// it should've created a child instance and mounted it. the child
// component also has set the placeholder vnode's elm.
// in that case we can just return the element and be done.
if(isDef(vnode.componentInstance)){initComponent(vnode,insertedVnodeQueue);if(isTrue(isReactivated)){reactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm);}return true;}}}function initComponent(vnode,insertedVnodeQueue){if(isDef(vnode.data.pendingInsert)){insertedVnodeQueue.push.apply(insertedVnodeQueue,vnode.data.pendingInsert);vnode.data.pendingInsert=null;}vnode.elm=vnode.componentInstance.$el;if(isPatchable(vnode)){invokeCreateHooks(vnode,insertedVnodeQueue);setScope(vnode);}else{// empty component root.
// skip all element-related modules except for ref (#3455)
registerRef(vnode);// make sure to invoke the insert hook
insertedVnodeQueue.push(vnode);}}function reactivateComponent(vnode,insertedVnodeQueue,parentElm,refElm){var i;// hack for #4339: a reactivated component with inner transition
// does not trigger because the inner node's created hooks are not called
// again. It's not ideal to involve module-specific logic in here but
// there doesn't seem to be a better way to do it.
var innerNode=vnode;while(innerNode.componentInstance){innerNode=innerNode.componentInstance._vnode;if(isDef(i=innerNode.data)&&isDef(i=i.transition)){for(i=0;i<cbs.activate.length;++i){cbs.activate[i](emptyNode,innerNode);}insertedVnodeQueue.push(innerNode);break;}}// unlike a newly created component,
// a reactivated keep-alive component doesn't insert itself
insert(parentElm,vnode.elm,refElm);}function insert(parent,elm,ref$$1){if(isDef(parent)){if(isDef(ref$$1)){if(ref$$1.parentNode===parent){nodeOps.insertBefore(parent,elm,ref$$1);}}else{nodeOps.appendChild(parent,elm);}}}function createChildren(vnode,children,insertedVnodeQueue){if(Array.isArray(children)){for(var i=0;i<children.length;++i){createElm(children[i],insertedVnodeQueue,vnode.elm,null,true);}}else if(isPrimitive(vnode.text)){nodeOps.appendChild(vnode.elm,nodeOps.createTextNode(vnode.text));}}function isPatchable(vnode){while(vnode.componentInstance){vnode=vnode.componentInstance._vnode;}return isDef(vnode.tag);}function invokeCreateHooks(vnode,insertedVnodeQueue){for(var i$1=0;i$1<cbs.create.length;++i$1){cbs.create[i$1](emptyNode,vnode);}i=vnode.data.hook;// Reuse variable
if(isDef(i)){if(isDef(i.create)){i.create(emptyNode,vnode);}if(isDef(i.insert)){insertedVnodeQueue.push(vnode);}}}// set scope id attribute for scoped CSS.
// this is implemented as a special case to avoid the overhead
// of going through the normal attribute patching process.
function setScope(vnode){var i;if(isDef(i=vnode.functionalScopeId)){nodeOps.setAttribute(vnode.elm,i,'');}else{var ancestor=vnode;while(ancestor){if(isDef(i=ancestor.context)&&isDef(i=i.$options._scopeId)){nodeOps.setAttribute(vnode.elm,i,'');}ancestor=ancestor.parent;}}// for slot content they should also get the scopeId from the host instance.
if(isDef(i=activeInstance)&&i!==vnode.context&&i!==vnode.functionalContext&&isDef(i=i.$options._scopeId)){nodeOps.setAttribute(vnode.elm,i,'');}}function addVnodes(parentElm,refElm,vnodes,startIdx,endIdx,insertedVnodeQueue){for(;startIdx<=endIdx;++startIdx){createElm(vnodes[startIdx],insertedVnodeQueue,parentElm,refElm);}}function invokeDestroyHook(vnode){var i,j;var data=vnode.data;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.destroy)){i(vnode);}for(i=0;i<cbs.destroy.length;++i){cbs.destroy[i](vnode);}}if(isDef(i=vnode.children)){for(j=0;j<vnode.children.length;++j){invokeDestroyHook(vnode.children[j]);}}}function removeVnodes(parentElm,vnodes,startIdx,endIdx){for(;startIdx<=endIdx;++startIdx){var ch=vnodes[startIdx];if(isDef(ch)){if(isDef(ch.tag)){removeAndInvokeRemoveHook(ch);invokeDestroyHook(ch);}else{// Text node
removeNode(ch.elm);}}}}function removeAndInvokeRemoveHook(vnode,rm){if(isDef(rm)||isDef(vnode.data)){var i;var listeners=cbs.remove.length+1;if(isDef(rm)){// we have a recursively passed down rm callback
// increase the listeners count
rm.listeners+=listeners;}else{// directly removing
rm=createRmCb(vnode.elm,listeners);}// recursively invoke hooks on child component root node
if(isDef(i=vnode.componentInstance)&&isDef(i=i._vnode)&&isDef(i.data)){removeAndInvokeRemoveHook(i,rm);}for(i=0;i<cbs.remove.length;++i){cbs.remove[i](vnode,rm);}if(isDef(i=vnode.data.hook)&&isDef(i=i.remove)){i(vnode,rm);}else{rm();}}else{removeNode(vnode.elm);}}function updateChildren(parentElm,oldCh,newCh,insertedVnodeQueue,removeOnly){var oldStartIdx=0;var newStartIdx=0;var oldEndIdx=oldCh.length-1;var oldStartVnode=oldCh[0];var oldEndVnode=oldCh[oldEndIdx];var newEndIdx=newCh.length-1;var newStartVnode=newCh[0];var newEndVnode=newCh[newEndIdx];var oldKeyToIdx,idxInOld,vnodeToMove,refElm;// removeOnly is a special flag used only by <transition-group>
// to ensure removed elements stay in correct relative positions
// during leaving transitions
var canMove=!removeOnly;while(oldStartIdx<=oldEndIdx&&newStartIdx<=newEndIdx){if(isUndef(oldStartVnode)){oldStartVnode=oldCh[++oldStartIdx];// Vnode has been moved left
}else if(isUndef(oldEndVnode)){oldEndVnode=oldCh[--oldEndIdx];}else if(sameVnode(oldStartVnode,newStartVnode)){patchVnode(oldStartVnode,newStartVnode,insertedVnodeQueue);oldStartVnode=oldCh[++oldStartIdx];newStartVnode=newCh[++newStartIdx];}else if(sameVnode(oldEndVnode,newEndVnode)){patchVnode(oldEndVnode,newEndVnode,insertedVnodeQueue);oldEndVnode=oldCh[--oldEndIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldStartVnode,newEndVnode)){// Vnode moved right
patchVnode(oldStartVnode,newEndVnode,insertedVnodeQueue);canMove&&nodeOps.insertBefore(parentElm,oldStartVnode.elm,nodeOps.nextSibling(oldEndVnode.elm));oldStartVnode=oldCh[++oldStartIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldEndVnode,newStartVnode)){// Vnode moved left
patchVnode(oldEndVnode,newStartVnode,insertedVnodeQueue);canMove&&nodeOps.insertBefore(parentElm,oldEndVnode.elm,oldStartVnode.elm);oldEndVnode=oldCh[--oldEndIdx];newStartVnode=newCh[++newStartIdx];}else{if(isUndef(oldKeyToIdx)){oldKeyToIdx=createKeyToOldIdx(oldCh,oldStartIdx,oldEndIdx);}idxInOld=isDef(newStartVnode.key)?oldKeyToIdx[newStartVnode.key]:findIdxInOld(newStartVnode,oldCh,oldStartIdx,oldEndIdx);if(isUndef(idxInOld)){// New element
createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm);}else{vnodeToMove=oldCh[idxInOld];/* istanbul ignore if */if(false){warn('It seems there are duplicate keys that is causing an update error. '+'Make sure each v-for item has a unique key.');}if(sameVnode(vnodeToMove,newStartVnode)){patchVnode(vnodeToMove,newStartVnode,insertedVnodeQueue);oldCh[idxInOld]=undefined;canMove&&nodeOps.insertBefore(parentElm,vnodeToMove.elm,oldStartVnode.elm);}else{// same key but different element. treat as new element
createElm(newStartVnode,insertedVnodeQueue,parentElm,oldStartVnode.elm);}}newStartVnode=newCh[++newStartIdx];}}if(oldStartIdx>oldEndIdx){refElm=isUndef(newCh[newEndIdx+1])?null:newCh[newEndIdx+1].elm;addVnodes(parentElm,refElm,newCh,newStartIdx,newEndIdx,insertedVnodeQueue);}else if(newStartIdx>newEndIdx){removeVnodes(parentElm,oldCh,oldStartIdx,oldEndIdx);}}function findIdxInOld(node,oldCh,start,end){for(var i=start;i<end;i++){var c=oldCh[i];if(isDef(c)&&sameVnode(node,c)){return i;}}}function patchVnode(oldVnode,vnode,insertedVnodeQueue,removeOnly){if(oldVnode===vnode){return;}var elm=vnode.elm=oldVnode.elm;if(isTrue(oldVnode.isAsyncPlaceholder)){if(isDef(vnode.asyncFactory.resolved)){hydrate(oldVnode.elm,vnode,insertedVnodeQueue);}else{vnode.isAsyncPlaceholder=true;}return;}// reuse element for static trees.
// note we only do this if the vnode is cloned -
// if the new node is not cloned it means the render functions have been
// reset by the hot-reload-api and we need to do a proper re-render.
if(isTrue(vnode.isStatic)&&isTrue(oldVnode.isStatic)&&vnode.key===oldVnode.key&&(isTrue(vnode.isCloned)||isTrue(vnode.isOnce))){vnode.componentInstance=oldVnode.componentInstance;return;}var i;var data=vnode.data;if(isDef(data)&&isDef(i=data.hook)&&isDef(i=i.prepatch)){i(oldVnode,vnode);}var oldCh=oldVnode.children;var ch=vnode.children;if(isDef(data)&&isPatchable(vnode)){for(i=0;i<cbs.update.length;++i){cbs.update[i](oldVnode,vnode);}if(isDef(i=data.hook)&&isDef(i=i.update)){i(oldVnode,vnode);}}if(isUndef(vnode.text)){if(isDef(oldCh)&&isDef(ch)){if(oldCh!==ch){updateChildren(elm,oldCh,ch,insertedVnodeQueue,removeOnly);}}else if(isDef(ch)){if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}addVnodes(elm,null,ch,0,ch.length-1,insertedVnodeQueue);}else if(isDef(oldCh)){removeVnodes(elm,oldCh,0,oldCh.length-1);}else if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}}else if(oldVnode.text!==vnode.text){nodeOps.setTextContent(elm,vnode.text);}if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.postpatch)){i(oldVnode,vnode);}}}function invokeInsertHook(vnode,queue,initial){// delay insert hooks for component root nodes, invoke them after the
// element is really inserted
if(isTrue(initial)&&isDef(vnode.parent)){vnode.parent.data.pendingInsert=queue;}else{for(var i=0;i<queue.length;++i){queue[i].data.hook.insert(queue[i]);}}}var bailed=false;// list of modules that can skip create hook during hydration because they
// are already rendered on the client or has no need for initialization
var isRenderedModule=makeMap('attrs,style,class,staticClass,staticStyle,key');// Note: this is a browser-only function so we can assume elms are DOM nodes.
function hydrate(elm,vnode,insertedVnodeQueue){if(isTrue(vnode.isComment)&&isDef(vnode.asyncFactory)){vnode.elm=elm;vnode.isAsyncPlaceholder=true;return true;}if(false){if(!assertNodeMatch(elm,vnode)){return false;}}vnode.elm=elm;var tag=vnode.tag;var data=vnode.data;var children=vnode.children;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.init)){i(vnode,true/* hydrating */);}if(isDef(i=vnode.componentInstance)){// child component. it should have hydrated its own tree.
initComponent(vnode,insertedVnodeQueue);return true;}}if(isDef(tag)){if(isDef(children)){// empty element, allow client to pick up and populate children
if(!elm.hasChildNodes()){createChildren(vnode,children,insertedVnodeQueue);}else{// v-html and domProps: innerHTML
if(isDef(i=data)&&isDef(i=i.domProps)&&isDef(i=i.innerHTML)){if(i!==elm.innerHTML){/* istanbul ignore if */if(false){bailed=true;console.warn('Parent: ',elm);console.warn('server innerHTML: ',i);console.warn('client innerHTML: ',elm.innerHTML);}return false;}}else{// iterate and compare children lists
var childrenMatch=true;var childNode=elm.firstChild;for(var i$1=0;i$1<children.length;i$1++){if(!childNode||!hydrate(childNode,children[i$1],insertedVnodeQueue)){childrenMatch=false;break;}childNode=childNode.nextSibling;}// if childNode is not null, it means the actual childNodes list is
// longer than the virtual children list.
if(!childrenMatch||childNode){/* istanbul ignore if */if(false){bailed=true;console.warn('Parent: ',elm);console.warn('Mismatching childNodes vs. VNodes: ',elm.childNodes,children);}return false;}}}}if(isDef(data)){for(var key in data){if(!isRenderedModule(key)){invokeCreateHooks(vnode,insertedVnodeQueue);break;}}}}else if(elm.data!==vnode.text){elm.data=vnode.text;}return true;}function assertNodeMatch(node,vnode){if(isDef(vnode.tag)){return vnode.tag.indexOf('vue-component')===0||vnode.tag.toLowerCase()===(node.tagName&&node.tagName.toLowerCase());}else{return node.nodeType===(vnode.isComment?8:3);}}return function patch(oldVnode,vnode,hydrating,removeOnly,parentElm,refElm){if(isUndef(vnode)){if(isDef(oldVnode)){invokeDestroyHook(oldVnode);}return;}var isInitialPatch=false;var insertedVnodeQueue=[];if(isUndef(oldVnode)){// empty mount (likely as component), create new root element
isInitialPatch=true;createElm(vnode,insertedVnodeQueue,parentElm,refElm);}else{var isRealElement=isDef(oldVnode.nodeType);if(!isRealElement&&sameVnode(oldVnode,vnode)){// patch existing root node
patchVnode(oldVnode,vnode,insertedVnodeQueue,removeOnly);}else{if(isRealElement){// mounting to a real element
// check if this is server-rendered content and if we can perform
// a successful hydration.
if(oldVnode.nodeType===1&&oldVnode.hasAttribute(SSR_ATTR)){oldVnode.removeAttribute(SSR_ATTR);hydrating=true;}if(isTrue(hydrating)){if(hydrate(oldVnode,vnode,insertedVnodeQueue)){invokeInsertHook(vnode,insertedVnodeQueue,true);return oldVnode;}else if(false){warn('The client-side rendered virtual DOM tree is not matching '+'server-rendered content. This is likely caused by incorrect '+'HTML markup, for example nesting block-level elements inside '+'<p>, or missing <tbody>. Bailing hydration and performing '+'full client-side render.');}}// either not server-rendered, or hydration failed.
// create an empty node and replace it
oldVnode=emptyNodeAt(oldVnode);}// replacing existing element
var oldElm=oldVnode.elm;var parentElm$1=nodeOps.parentNode(oldElm);createElm(vnode,insertedVnodeQueue,// extremely rare edge case: do not insert if old element is in a
// leaving transition. Only happens when combining transition +
// keep-alive + HOCs. (#4590)
oldElm._leaveCb?null:parentElm$1,nodeOps.nextSibling(oldElm));if(isDef(vnode.parent)){// component root element replaced.
// update parent placeholder node element, recursively
var ancestor=vnode.parent;var patchable=isPatchable(vnode);while(ancestor){for(var i=0;i<cbs.destroy.length;++i){cbs.destroy[i](ancestor);}ancestor.elm=vnode.elm;if(patchable){for(var i$1=0;i$1<cbs.create.length;++i$1){cbs.create[i$1](emptyNode,ancestor);}// #6513
// invoke insert hooks that may have been merged by create hooks.
// e.g. for directives that uses the "inserted" hook.
var insert=ancestor.data.hook.insert;if(insert.merged){// start at index 1 to avoid re-invoking component mounted hook
for(var i$2=1;i$2<insert.fns.length;i$2++){insert.fns[i$2]();}}}else{registerRef(ancestor);}ancestor=ancestor.parent;}}if(isDef(parentElm$1)){removeVnodes(parentElm$1,[oldVnode],0,0);}else if(isDef(oldVnode.tag)){invokeDestroyHook(oldVnode);}}}invokeInsertHook(vnode,insertedVnodeQueue,isInitialPatch);return vnode.elm;};}/*  */var directives={create:updateDirectives,update:updateDirectives,destroy:function unbindDirectives(vnode){updateDirectives(vnode,emptyNode);}};function updateDirectives(oldVnode,vnode){if(oldVnode.data.directives||vnode.data.directives){_update(oldVnode,vnode);}}function _update(oldVnode,vnode){var isCreate=oldVnode===emptyNode;var isDestroy=vnode===emptyNode;var oldDirs=normalizeDirectives$1(oldVnode.data.directives,oldVnode.context);var newDirs=normalizeDirectives$1(vnode.data.directives,vnode.context);var dirsWithInsert=[];var dirsWithPostpatch=[];var key,oldDir,dir;for(key in newDirs){oldDir=oldDirs[key];dir=newDirs[key];if(!oldDir){// new directive, bind
callHook$1(dir,'bind',vnode,oldVnode);if(dir.def&&dir.def.inserted){dirsWithInsert.push(dir);}}else{// existing directive, update
dir.oldValue=oldDir.value;callHook$1(dir,'update',vnode,oldVnode);if(dir.def&&dir.def.componentUpdated){dirsWithPostpatch.push(dir);}}}if(dirsWithInsert.length){var callInsert=function callInsert(){for(var i=0;i<dirsWithInsert.length;i++){callHook$1(dirsWithInsert[i],'inserted',vnode,oldVnode);}};if(isCreate){mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),'insert',callInsert);}else{callInsert();}}if(dirsWithPostpatch.length){mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),'postpatch',function(){for(var i=0;i<dirsWithPostpatch.length;i++){callHook$1(dirsWithPostpatch[i],'componentUpdated',vnode,oldVnode);}});}if(!isCreate){for(key in oldDirs){if(!newDirs[key]){// no longer present, unbind
callHook$1(oldDirs[key],'unbind',oldVnode,oldVnode,isDestroy);}}}}var emptyModifiers=Object.create(null);function normalizeDirectives$1(dirs,vm){var res=Object.create(null);if(!dirs){return res;}var i,dir;for(i=0;i<dirs.length;i++){dir=dirs[i];if(!dir.modifiers){dir.modifiers=emptyModifiers;}res[getRawDirName(dir)]=dir;dir.def=resolveAsset(vm.$options,'directives',dir.name,true);}return res;}function getRawDirName(dir){return dir.rawName||dir.name+"."+Object.keys(dir.modifiers||{}).join('.');}function callHook$1(dir,hook,vnode,oldVnode,isDestroy){var fn=dir.def&&dir.def[hook];if(fn){try{fn(vnode.elm,dir,vnode,oldVnode,isDestroy);}catch(e){handleError(e,vnode.context,"directive "+dir.name+" "+hook+" hook");}}}var baseModules=[ref,directives];/*  */function updateAttrs(oldVnode,vnode){var opts=vnode.componentOptions;if(isDef(opts)&&opts.Ctor.options.inheritAttrs===false){return;}if(isUndef(oldVnode.data.attrs)&&isUndef(vnode.data.attrs)){return;}var key,cur,old;var elm=vnode.elm;var oldAttrs=oldVnode.data.attrs||{};var attrs=vnode.data.attrs||{};// clone observed objects, as the user probably wants to mutate it
if(isDef(attrs.__ob__)){attrs=vnode.data.attrs=extend({},attrs);}for(key in attrs){cur=attrs[key];old=oldAttrs[key];if(old!==cur){setAttr(elm,key,cur);}}// #4391: in IE9, setting type can reset value for input[type=radio]
// #6666: IE/Edge forces progress value down to 1 before setting a max
/* istanbul ignore if */if((isIE9||isEdge)&&attrs.value!==oldAttrs.value){setAttr(elm,'value',attrs.value);}for(key in oldAttrs){if(isUndef(attrs[key])){if(isXlink(key)){elm.removeAttributeNS(xlinkNS,getXlinkProp(key));}else if(!isEnumeratedAttr(key)){elm.removeAttribute(key);}}}}function setAttr(el,key,value){if(isBooleanAttr(key)){// set attribute for blank value
// e.g. <option disabled>Select one</option>
if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{// technically allowfullscreen is a boolean attribute for <iframe>,
// but Flash expects a value of "true" when used on <embed> tag
value=key==='allowfullscreen'&&el.tagName==='EMBED'?'true':key;el.setAttribute(key,value);}}else if(isEnumeratedAttr(key)){el.setAttribute(key,isFalsyAttrValue(value)||value==='false'?'false':'true');}else if(isXlink(key)){if(isFalsyAttrValue(value)){el.removeAttributeNS(xlinkNS,getXlinkProp(key));}else{el.setAttributeNS(xlinkNS,key,value);}}else{if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{el.setAttribute(key,value);}}}var attrs={create:updateAttrs,update:updateAttrs};/*  */function updateClass(oldVnode,vnode){var el=vnode.elm;var data=vnode.data;var oldData=oldVnode.data;if(isUndef(data.staticClass)&&isUndef(data.class)&&(isUndef(oldData)||isUndef(oldData.staticClass)&&isUndef(oldData.class))){return;}var cls=genClassForVnode(vnode);// handle transition classes
var transitionClass=el._transitionClasses;if(isDef(transitionClass)){cls=concat(cls,stringifyClass(transitionClass));}// set the class
if(cls!==el._prevClass){el.setAttribute('class',cls);el._prevClass=cls;}}var klass={create:updateClass,update:updateClass};/*  */var validDivisionCharRE=/[\w).+\-_$\]]/;function parseFilters(exp){var inSingle=false;var inDouble=false;var inTemplateString=false;var inRegex=false;var curly=0;var square=0;var paren=0;var lastFilterIndex=0;var c,prev,i,expression,filters;for(i=0;i<exp.length;i++){prev=c;c=exp.charCodeAt(i);if(inSingle){if(c===0x27&&prev!==0x5C){inSingle=false;}}else if(inDouble){if(c===0x22&&prev!==0x5C){inDouble=false;}}else if(inTemplateString){if(c===0x60&&prev!==0x5C){inTemplateString=false;}}else if(inRegex){if(c===0x2f&&prev!==0x5C){inRegex=false;}}else if(c===0x7C&&// pipe
exp.charCodeAt(i+1)!==0x7C&&exp.charCodeAt(i-1)!==0x7C&&!curly&&!square&&!paren){if(expression===undefined){// first filter, end of expression
lastFilterIndex=i+1;expression=exp.slice(0,i).trim();}else{pushFilter();}}else{switch(c){case 0x22:inDouble=true;break;// "
case 0x27:inSingle=true;break;// '
case 0x60:inTemplateString=true;break;// `
case 0x28:paren++;break;// (
case 0x29:paren--;break;// )
case 0x5B:square++;break;// [
case 0x5D:square--;break;// ]
case 0x7B:curly++;break;// {
case 0x7D:curly--;break;// }
}if(c===0x2f){// /
var j=i-1;var p=void 0;// find first non-whitespace prev char
for(;j>=0;j--){p=exp.charAt(j);if(p!==' '){break;}}if(!p||!validDivisionCharRE.test(p)){inRegex=true;}}}}if(expression===undefined){expression=exp.slice(0,i).trim();}else if(lastFilterIndex!==0){pushFilter();}function pushFilter(){(filters||(filters=[])).push(exp.slice(lastFilterIndex,i).trim());lastFilterIndex=i+1;}if(filters){for(i=0;i<filters.length;i++){expression=wrapFilter(expression,filters[i]);}}return expression;}function wrapFilter(exp,filter){var i=filter.indexOf('(');if(i<0){// _f: resolveFilter
return"_f(\""+filter+"\")("+exp+")";}else{var name=filter.slice(0,i);var args=filter.slice(i+1);return"_f(\""+name+"\")("+exp+","+args;}}/*  */function baseWarn(msg){console.error("[Vue compiler]: "+msg);}function pluckModuleFunction(modules,key){return modules?modules.map(function(m){return m[key];}).filter(function(_){return _;}):[];}function addProp(el,name,value){(el.props||(el.props=[])).push({name:name,value:value});}function addAttr(el,name,value){(el.attrs||(el.attrs=[])).push({name:name,value:value});}function addDirective(el,name,rawName,value,arg,modifiers){(el.directives||(el.directives=[])).push({name:name,rawName:rawName,value:value,arg:arg,modifiers:modifiers});}function addHandler(el,name,value,modifiers,important,warn){// warn prevent and passive modifier
/* istanbul ignore if */if(false){warn('passive and prevent can\'t be used together. '+'Passive handler can\'t prevent default event.');}// check capture modifier
if(modifiers&&modifiers.capture){delete modifiers.capture;name='!'+name;// mark the event as captured
}if(modifiers&&modifiers.once){delete modifiers.once;name='~'+name;// mark the event as once
}/* istanbul ignore if */if(modifiers&&modifiers.passive){delete modifiers.passive;name='&'+name;// mark the event as passive
}var events;if(modifiers&&modifiers.native){delete modifiers.native;events=el.nativeEvents||(el.nativeEvents={});}else{events=el.events||(el.events={});}var newHandler={value:value,modifiers:modifiers};var handlers=events[name];/* istanbul ignore if */if(Array.isArray(handlers)){important?handlers.unshift(newHandler):handlers.push(newHandler);}else if(handlers){events[name]=important?[newHandler,handlers]:[handlers,newHandler];}else{events[name]=newHandler;}}function getBindingAttr(el,name,getStatic){var dynamicValue=getAndRemoveAttr(el,':'+name)||getAndRemoveAttr(el,'v-bind:'+name);if(dynamicValue!=null){return parseFilters(dynamicValue);}else if(getStatic!==false){var staticValue=getAndRemoveAttr(el,name);if(staticValue!=null){return JSON.stringify(staticValue);}}}// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr(el,name,removeFromMap){var val;if((val=el.attrsMap[name])!=null){var list=el.attrsList;for(var i=0,l=list.length;i<l;i++){if(list[i].name===name){list.splice(i,1);break;}}}if(removeFromMap){delete el.attrsMap[name];}return val;}/*  *//**
 * Cross-platform code generation for component v-model
 */function genComponentModel(el,value,modifiers){var ref=modifiers||{};var number=ref.number;var trim=ref.trim;var baseValueExpression='$$v';var valueExpression=baseValueExpression;if(trim){valueExpression="(typeof "+baseValueExpression+" === 'string'"+"? "+baseValueExpression+".trim()"+": "+baseValueExpression+")";}if(number){valueExpression="_n("+valueExpression+")";}var assignment=genAssignmentCode(value,valueExpression);el.model={value:"("+value+")",expression:"\""+value+"\"",callback:"function ("+baseValueExpression+") {"+assignment+"}"};}/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */function genAssignmentCode(value,assignment){var res=parseModel(value);if(res.key===null){return value+"="+assignment;}else{return"$set("+res.exp+", "+res.key+", "+assignment+")";}}/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */var len;var str;var chr;var index$1;var expressionPos;var expressionEndPos;function parseModel(val){len=val.length;if(val.indexOf('[')<0||val.lastIndexOf(']')<len-1){index$1=val.lastIndexOf('.');if(index$1>-1){return{exp:val.slice(0,index$1),key:'"'+val.slice(index$1+1)+'"'};}else{return{exp:val,key:null};}}str=val;index$1=expressionPos=expressionEndPos=0;while(!eof()){chr=next();/* istanbul ignore if */if(isStringStart(chr)){parseString(chr);}else if(chr===0x5B){parseBracket(chr);}}return{exp:val.slice(0,expressionPos),key:val.slice(expressionPos+1,expressionEndPos)};}function next(){return str.charCodeAt(++index$1);}function eof(){return index$1>=len;}function isStringStart(chr){return chr===0x22||chr===0x27;}function parseBracket(chr){var inBracket=1;expressionPos=index$1;while(!eof()){chr=next();if(isStringStart(chr)){parseString(chr);continue;}if(chr===0x5B){inBracket++;}if(chr===0x5D){inBracket--;}if(inBracket===0){expressionEndPos=index$1;break;}}}function parseString(chr){var stringQuote=chr;while(!eof()){chr=next();if(chr===stringQuote){break;}}}/*  */var warn$1;// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN='__r';var CHECKBOX_RADIO_TOKEN='__c';function model(el,dir,_warn){warn$1=_warn;var value=dir.value;var modifiers=dir.modifiers;var tag=el.tag;var type=el.attrsMap.type;if(false){// inputs with type="file" are read only and setting the input's
// value will throw an error.
if(tag==='input'&&type==='file'){warn$1("<"+el.tag+" v-model=\""+value+"\" type=\"file\">:\n"+"File inputs are read only. Use a v-on:change listener instead.");}}if(el.component){genComponentModel(el,value,modifiers);// component v-model doesn't need extra runtime
return false;}else if(tag==='select'){genSelect(el,value,modifiers);}else if(tag==='input'&&type==='checkbox'){genCheckboxModel(el,value,modifiers);}else if(tag==='input'&&type==='radio'){genRadioModel(el,value,modifiers);}else if(tag==='input'||tag==='textarea'){genDefaultModel(el,value,modifiers);}else if(!config.isReservedTag(tag)){genComponentModel(el,value,modifiers);// component v-model doesn't need extra runtime
return false;}else if(false){warn$1("<"+el.tag+" v-model=\""+value+"\">: "+"v-model is not supported on this element type. "+'If you are working with contenteditable, it\'s recommended to '+'wrap a library dedicated for that purpose inside a custom component.');}// ensure runtime directive metadata
return true;}function genCheckboxModel(el,value,modifiers){var number=modifiers&&modifiers.number;var valueBinding=getBindingAttr(el,'value')||'null';var trueValueBinding=getBindingAttr(el,'true-value')||'true';var falseValueBinding=getBindingAttr(el,'false-value')||'false';addProp(el,'checked',"Array.isArray("+value+")"+"?_i("+value+","+valueBinding+")>-1"+(trueValueBinding==='true'?":("+value+")":":_q("+value+","+trueValueBinding+")"));addHandler(el,'change',"var $$a="+value+","+'$$el=$event.target,'+"$$c=$$el.checked?("+trueValueBinding+"):("+falseValueBinding+");"+'if(Array.isArray($$a)){'+"var $$v="+(number?'_n('+valueBinding+')':valueBinding)+","+'$$i=_i($$a,$$v);'+"if($$el.checked){$$i<0&&("+value+"=$$a.concat([$$v]))}"+"else{$$i>-1&&("+value+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}"+"}else{"+genAssignmentCode(value,'$$c')+"}",null,true);}function genRadioModel(el,value,modifiers){var number=modifiers&&modifiers.number;var valueBinding=getBindingAttr(el,'value')||'null';valueBinding=number?"_n("+valueBinding+")":valueBinding;addProp(el,'checked',"_q("+value+","+valueBinding+")");addHandler(el,'change',genAssignmentCode(value,valueBinding),null,true);}function genSelect(el,value,modifiers){var number=modifiers&&modifiers.number;var selectedVal="Array.prototype.filter"+".call($event.target.options,function(o){return o.selected})"+".map(function(o){var val = \"_value\" in o ? o._value : o.value;"+"return "+(number?'_n(val)':'val')+"})";var assignment='$event.target.multiple ? $$selectedVal : $$selectedVal[0]';var code="var $$selectedVal = "+selectedVal+";";code=code+" "+genAssignmentCode(value,assignment);addHandler(el,'change',code,null,true);}function genDefaultModel(el,value,modifiers){var type=el.attrsMap.type;var ref=modifiers||{};var lazy=ref.lazy;var number=ref.number;var trim=ref.trim;var needCompositionGuard=!lazy&&type!=='range';var event=lazy?'change':type==='range'?RANGE_TOKEN:'input';var valueExpression='$event.target.value';if(trim){valueExpression="$event.target.value.trim()";}if(number){valueExpression="_n("+valueExpression+")";}var code=genAssignmentCode(value,valueExpression);if(needCompositionGuard){code="if($event.target.composing)return;"+code;}addProp(el,'value',"("+value+")");addHandler(el,event,code,null,true);if(trim||number){addHandler(el,'blur','$forceUpdate()');}}/*  */// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents(on){/* istanbul ignore if */if(isDef(on[RANGE_TOKEN])){// IE input[type=range] only supports `change` event
var event=isIE?'change':'input';on[event]=[].concat(on[RANGE_TOKEN],on[event]||[]);delete on[RANGE_TOKEN];}// This was originally intended to fix #4521 but no longer necessary
// after 2.5. Keeping it for backwards compat with generated code from < 2.4
/* istanbul ignore if */if(isDef(on[CHECKBOX_RADIO_TOKEN])){on.change=[].concat(on[CHECKBOX_RADIO_TOKEN],on.change||[]);delete on[CHECKBOX_RADIO_TOKEN];}}var target$1;function createOnceHandler(handler,event,capture){var _target=target$1;// save current target element in closure
return function onceHandler(){var res=handler.apply(null,arguments);if(res!==null){remove$2(event,onceHandler,capture,_target);}};}function add$1(event,handler,once$$1,capture,passive){handler=withMacroTask(handler);if(once$$1){handler=createOnceHandler(handler,event,capture);}target$1.addEventListener(event,handler,supportsPassive?{capture:capture,passive:passive}:capture);}function remove$2(event,handler,capture,_target){(_target||target$1).removeEventListener(event,handler._withTask||handler,capture);}function updateDOMListeners(oldVnode,vnode){if(isUndef(oldVnode.data.on)&&isUndef(vnode.data.on)){return;}var on=vnode.data.on||{};var oldOn=oldVnode.data.on||{};target$1=vnode.elm;normalizeEvents(on);updateListeners(on,oldOn,add$1,remove$2,vnode.context);}var events={create:updateDOMListeners,update:updateDOMListeners};/*  */function updateDOMProps(oldVnode,vnode){if(isUndef(oldVnode.data.domProps)&&isUndef(vnode.data.domProps)){return;}var key,cur;var elm=vnode.elm;var oldProps=oldVnode.data.domProps||{};var props=vnode.data.domProps||{};// clone observed objects, as the user probably wants to mutate it
if(isDef(props.__ob__)){props=vnode.data.domProps=extend({},props);}for(key in oldProps){if(isUndef(props[key])){elm[key]='';}}for(key in props){cur=props[key];// ignore children if the node has textContent or innerHTML,
// as these will throw away existing DOM nodes and cause removal errors
// on subsequent patches (#3360)
if(key==='textContent'||key==='innerHTML'){if(vnode.children){vnode.children.length=0;}if(cur===oldProps[key]){continue;}// #6601 work around Chrome version <= 55 bug where single textNode
// replaced by innerHTML/textContent retains its parentNode property
if(elm.childNodes.length===1){elm.removeChild(elm.childNodes[0]);}}if(key==='value'){// store value as _value as well since
// non-string values will be stringified
elm._value=cur;// avoid resetting cursor position when value is the same
var strCur=isUndef(cur)?'':String(cur);if(shouldUpdateValue(elm,strCur)){elm.value=strCur;}}else{elm[key]=cur;}}}// check platforms/web/util/attrs.js acceptValue
function shouldUpdateValue(elm,checkVal){return!elm.composing&&(elm.tagName==='OPTION'||isDirty(elm,checkVal)||isInputChanged(elm,checkVal));}function isDirty(elm,checkVal){// return true when textbox (.number and .trim) loses focus and its value is
// not equal to the updated value
var notInFocus=true;// #6157
// work around IE bug when accessing document.activeElement in an iframe
try{notInFocus=document.activeElement!==elm;}catch(e){}return notInFocus&&elm.value!==checkVal;}function isInputChanged(elm,newVal){var value=elm.value;var modifiers=elm._vModifiers;// injected by v-model runtime
if(isDef(modifiers)&&modifiers.number){return toNumber(value)!==toNumber(newVal);}if(isDef(modifiers)&&modifiers.trim){return value.trim()!==newVal.trim();}return value!==newVal;}var domProps={create:updateDOMProps,update:updateDOMProps};/*  */var parseStyleText=cached(function(cssText){var res={};var listDelimiter=/;(?![^(]*\))/g;var propertyDelimiter=/:(.+)/;cssText.split(listDelimiter).forEach(function(item){if(item){var tmp=item.split(propertyDelimiter);tmp.length>1&&(res[tmp[0].trim()]=tmp[1].trim());}});return res;});// merge static and dynamic style data on the same vnode
function normalizeStyleData(data){var style=normalizeStyleBinding(data.style);// static style is pre-processed into an object during compilation
// and is always a fresh object, so it's safe to merge into it
return data.staticStyle?extend(data.staticStyle,style):style;}// normalize possible array / string values into Object
function normalizeStyleBinding(bindingStyle){if(Array.isArray(bindingStyle)){return toObject(bindingStyle);}if(typeof bindingStyle==='string'){return parseStyleText(bindingStyle);}return bindingStyle;}/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */function getStyle(vnode,checkChild){var res={};var styleData;if(checkChild){var childNode=vnode;while(childNode.componentInstance){childNode=childNode.componentInstance._vnode;if(childNode.data&&(styleData=normalizeStyleData(childNode.data))){extend(res,styleData);}}}if(styleData=normalizeStyleData(vnode.data)){extend(res,styleData);}var parentNode=vnode;while(parentNode=parentNode.parent){if(parentNode.data&&(styleData=normalizeStyleData(parentNode.data))){extend(res,styleData);}}return res;}/*  */var cssVarRE=/^--/;var importantRE=/\s*!important$/;var setProp=function setProp(el,name,val){/* istanbul ignore if */if(cssVarRE.test(name)){el.style.setProperty(name,val);}else if(importantRE.test(val)){el.style.setProperty(name,val.replace(importantRE,''),'important');}else{var normalizedName=normalize(name);if(Array.isArray(val)){// Support values array created by autoprefixer, e.g.
// {display: ["-webkit-box", "-ms-flexbox", "flex"]}
// Set them one by one, and the browser will only set those it can recognize
for(var i=0,len=val.length;i<len;i++){el.style[normalizedName]=val[i];}}else{el.style[normalizedName]=val;}}};var vendorNames=['Webkit','Moz','ms'];var emptyStyle;var normalize=cached(function(prop){emptyStyle=emptyStyle||document.createElement('div').style;prop=camelize(prop);if(prop!=='filter'&&prop in emptyStyle){return prop;}var capName=prop.charAt(0).toUpperCase()+prop.slice(1);for(var i=0;i<vendorNames.length;i++){var name=vendorNames[i]+capName;if(name in emptyStyle){return name;}}});function updateStyle(oldVnode,vnode){var data=vnode.data;var oldData=oldVnode.data;if(isUndef(data.staticStyle)&&isUndef(data.style)&&isUndef(oldData.staticStyle)&&isUndef(oldData.style)){return;}var cur,name;var el=vnode.elm;var oldStaticStyle=oldData.staticStyle;var oldStyleBinding=oldData.normalizedStyle||oldData.style||{};// if static style exists, stylebinding already merged into it when doing normalizeStyleData
var oldStyle=oldStaticStyle||oldStyleBinding;var style=normalizeStyleBinding(vnode.data.style)||{};// store normalized style under a different key for next diff
// make sure to clone it if it's reactive, since the user likely wants
// to mutate it.
vnode.data.normalizedStyle=isDef(style.__ob__)?extend({},style):style;var newStyle=getStyle(vnode,true);for(name in oldStyle){if(isUndef(newStyle[name])){setProp(el,name,'');}}for(name in newStyle){cur=newStyle[name];if(cur!==oldStyle[name]){// ie9 setting to null has no effect, must use empty string
setProp(el,name,cur==null?'':cur);}}}var style={create:updateStyle,update:updateStyle};/*  *//**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */function addClass(el,cls){/* istanbul ignore if */if(!cls||!(cls=cls.trim())){return;}/* istanbul ignore else */if(el.classList){if(cls.indexOf(' ')>-1){cls.split(/\s+/).forEach(function(c){return el.classList.add(c);});}else{el.classList.add(cls);}}else{var cur=" "+(el.getAttribute('class')||'')+" ";if(cur.indexOf(' '+cls+' ')<0){el.setAttribute('class',(cur+cls).trim());}}}/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */function removeClass(el,cls){/* istanbul ignore if */if(!cls||!(cls=cls.trim())){return;}/* istanbul ignore else */if(el.classList){if(cls.indexOf(' ')>-1){cls.split(/\s+/).forEach(function(c){return el.classList.remove(c);});}else{el.classList.remove(cls);}if(!el.classList.length){el.removeAttribute('class');}}else{var cur=" "+(el.getAttribute('class')||'')+" ";var tar=' '+cls+' ';while(cur.indexOf(tar)>=0){cur=cur.replace(tar,' ');}cur=cur.trim();if(cur){el.setAttribute('class',cur);}else{el.removeAttribute('class');}}}/*  */function resolveTransition(def){if(!def){return;}/* istanbul ignore else */if((typeof def==='undefined'?'undefined':_typeof(def))==='object'){var res={};if(def.css!==false){extend(res,autoCssTransition(def.name||'v'));}extend(res,def);return res;}else if(typeof def==='string'){return autoCssTransition(def);}}var autoCssTransition=cached(function(name){return{enterClass:name+"-enter",enterToClass:name+"-enter-to",enterActiveClass:name+"-enter-active",leaveClass:name+"-leave",leaveToClass:name+"-leave-to",leaveActiveClass:name+"-leave-active"};});var hasTransition=inBrowser&&!isIE9;var TRANSITION='transition';var ANIMATION='animation';// Transition property/event sniffing
var transitionProp='transition';var transitionEndEvent='transitionend';var animationProp='animation';var animationEndEvent='animationend';if(hasTransition){/* istanbul ignore if */if(window.ontransitionend===undefined&&window.onwebkittransitionend!==undefined){transitionProp='WebkitTransition';transitionEndEvent='webkitTransitionEnd';}if(window.onanimationend===undefined&&window.onwebkitanimationend!==undefined){animationProp='WebkitAnimation';animationEndEvent='webkitAnimationEnd';}}// binding to window is necessary to make hot reload work in IE in strict mode
var raf=inBrowser?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:/* istanbul ignore next */function(fn){return fn();};function nextFrame(fn){raf(function(){raf(fn);});}function addTransitionClass(el,cls){var transitionClasses=el._transitionClasses||(el._transitionClasses=[]);if(transitionClasses.indexOf(cls)<0){transitionClasses.push(cls);addClass(el,cls);}}function removeTransitionClass(el,cls){if(el._transitionClasses){remove(el._transitionClasses,cls);}removeClass(el,cls);}function whenTransitionEnds(el,expectedType,cb){var ref=getTransitionInfo(el,expectedType);var type=ref.type;var timeout=ref.timeout;var propCount=ref.propCount;if(!type){return cb();}var event=type===TRANSITION?transitionEndEvent:animationEndEvent;var ended=0;var end=function end(){el.removeEventListener(event,onEnd);cb();};var onEnd=function onEnd(e){if(e.target===el){if(++ended>=propCount){end();}}};setTimeout(function(){if(ended<propCount){end();}},timeout+1);el.addEventListener(event,onEnd);}var transformRE=/\b(transform|all)(,|$)/;function getTransitionInfo(el,expectedType){var styles=window.getComputedStyle(el);var transitionDelays=styles[transitionProp+'Delay'].split(', ');var transitionDurations=styles[transitionProp+'Duration'].split(', ');var transitionTimeout=getTimeout(transitionDelays,transitionDurations);var animationDelays=styles[animationProp+'Delay'].split(', ');var animationDurations=styles[animationProp+'Duration'].split(', ');var animationTimeout=getTimeout(animationDelays,animationDurations);var type;var timeout=0;var propCount=0;/* istanbul ignore if */if(expectedType===TRANSITION){if(transitionTimeout>0){type=TRANSITION;timeout=transitionTimeout;propCount=transitionDurations.length;}}else if(expectedType===ANIMATION){if(animationTimeout>0){type=ANIMATION;timeout=animationTimeout;propCount=animationDurations.length;}}else{timeout=Math.max(transitionTimeout,animationTimeout);type=timeout>0?transitionTimeout>animationTimeout?TRANSITION:ANIMATION:null;propCount=type?type===TRANSITION?transitionDurations.length:animationDurations.length:0;}var hasTransform=type===TRANSITION&&transformRE.test(styles[transitionProp+'Property']);return{type:type,timeout:timeout,propCount:propCount,hasTransform:hasTransform};}function getTimeout(delays,durations){/* istanbul ignore next */while(delays.length<durations.length){delays=delays.concat(delays);}return Math.max.apply(null,durations.map(function(d,i){return toMs(d)+toMs(delays[i]);}));}function toMs(s){return Number(s.slice(0,-1))*1000;}/*  */function enter(vnode,toggleDisplay){var el=vnode.elm;// call leave callback now
if(isDef(el._leaveCb)){el._leaveCb.cancelled=true;el._leaveCb();}var data=resolveTransition(vnode.data.transition);if(isUndef(data)){return;}/* istanbul ignore if */if(isDef(el._enterCb)||el.nodeType!==1){return;}var css=data.css;var type=data.type;var enterClass=data.enterClass;var enterToClass=data.enterToClass;var enterActiveClass=data.enterActiveClass;var appearClass=data.appearClass;var appearToClass=data.appearToClass;var appearActiveClass=data.appearActiveClass;var beforeEnter=data.beforeEnter;var enter=data.enter;var afterEnter=data.afterEnter;var enterCancelled=data.enterCancelled;var beforeAppear=data.beforeAppear;var appear=data.appear;var afterAppear=data.afterAppear;var appearCancelled=data.appearCancelled;var duration=data.duration;// activeInstance will always be the <transition> component managing this
// transition. One edge case to check is when the <transition> is placed
// as the root node of a child component. In that case we need to check
// <transition>'s parent for appear check.
var context=activeInstance;var transitionNode=activeInstance.$vnode;while(transitionNode&&transitionNode.parent){transitionNode=transitionNode.parent;context=transitionNode.context;}var isAppear=!context._isMounted||!vnode.isRootInsert;if(isAppear&&!appear&&appear!==''){return;}var startClass=isAppear&&appearClass?appearClass:enterClass;var activeClass=isAppear&&appearActiveClass?appearActiveClass:enterActiveClass;var toClass=isAppear&&appearToClass?appearToClass:enterToClass;var beforeEnterHook=isAppear?beforeAppear||beforeEnter:beforeEnter;var enterHook=isAppear?typeof appear==='function'?appear:enter:enter;var afterEnterHook=isAppear?afterAppear||afterEnter:afterEnter;var enterCancelledHook=isAppear?appearCancelled||enterCancelled:enterCancelled;var explicitEnterDuration=toNumber(isObject(duration)?duration.enter:duration);if(false){checkDuration(explicitEnterDuration,'enter',vnode);}var expectsCSS=css!==false&&!isIE9;var userWantsControl=getHookArgumentsLength(enterHook);var cb=el._enterCb=once(function(){if(expectsCSS){removeTransitionClass(el,toClass);removeTransitionClass(el,activeClass);}if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,startClass);}enterCancelledHook&&enterCancelledHook(el);}else{afterEnterHook&&afterEnterHook(el);}el._enterCb=null;});if(!vnode.data.show){// remove pending leave element on enter by injecting an insert hook
mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),'insert',function(){var parent=el.parentNode;var pendingNode=parent&&parent._pending&&parent._pending[vnode.key];if(pendingNode&&pendingNode.tag===vnode.tag&&pendingNode.elm._leaveCb){pendingNode.elm._leaveCb();}enterHook&&enterHook(el,cb);});}// start enter transition
beforeEnterHook&&beforeEnterHook(el);if(expectsCSS){addTransitionClass(el,startClass);addTransitionClass(el,activeClass);nextFrame(function(){addTransitionClass(el,toClass);removeTransitionClass(el,startClass);if(!cb.cancelled&&!userWantsControl){if(isValidDuration(explicitEnterDuration)){setTimeout(cb,explicitEnterDuration);}else{whenTransitionEnds(el,type,cb);}}});}if(vnode.data.show){toggleDisplay&&toggleDisplay();enterHook&&enterHook(el,cb);}if(!expectsCSS&&!userWantsControl){cb();}}function leave(vnode,rm){var el=vnode.elm;// call enter callback now
if(isDef(el._enterCb)){el._enterCb.cancelled=true;el._enterCb();}var data=resolveTransition(vnode.data.transition);if(isUndef(data)){return rm();}/* istanbul ignore if */if(isDef(el._leaveCb)||el.nodeType!==1){return;}var css=data.css;var type=data.type;var leaveClass=data.leaveClass;var leaveToClass=data.leaveToClass;var leaveActiveClass=data.leaveActiveClass;var beforeLeave=data.beforeLeave;var leave=data.leave;var afterLeave=data.afterLeave;var leaveCancelled=data.leaveCancelled;var delayLeave=data.delayLeave;var duration=data.duration;var expectsCSS=css!==false&&!isIE9;var userWantsControl=getHookArgumentsLength(leave);var explicitLeaveDuration=toNumber(isObject(duration)?duration.leave:duration);if(false){checkDuration(explicitLeaveDuration,'leave',vnode);}var cb=el._leaveCb=once(function(){if(el.parentNode&&el.parentNode._pending){el.parentNode._pending[vnode.key]=null;}if(expectsCSS){removeTransitionClass(el,leaveToClass);removeTransitionClass(el,leaveActiveClass);}if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,leaveClass);}leaveCancelled&&leaveCancelled(el);}else{rm();afterLeave&&afterLeave(el);}el._leaveCb=null;});if(delayLeave){delayLeave(performLeave);}else{performLeave();}function performLeave(){// the delayed leave may have already been cancelled
if(cb.cancelled){return;}// record leaving element
if(!vnode.data.show){(el.parentNode._pending||(el.parentNode._pending={}))[vnode.key]=vnode;}beforeLeave&&beforeLeave(el);if(expectsCSS){addTransitionClass(el,leaveClass);addTransitionClass(el,leaveActiveClass);nextFrame(function(){addTransitionClass(el,leaveToClass);removeTransitionClass(el,leaveClass);if(!cb.cancelled&&!userWantsControl){if(isValidDuration(explicitLeaveDuration)){setTimeout(cb,explicitLeaveDuration);}else{whenTransitionEnds(el,type,cb);}}});}leave&&leave(el,cb);if(!expectsCSS&&!userWantsControl){cb();}}}// only used in dev mode
function checkDuration(val,name,vnode){if(typeof val!=='number'){warn("<transition> explicit "+name+" duration is not a valid number - "+"got "+JSON.stringify(val)+".",vnode.context);}else if(isNaN(val)){warn("<transition> explicit "+name+" duration is NaN - "+'the duration expression might be incorrect.',vnode.context);}}function isValidDuration(val){return typeof val==='number'&&!isNaN(val);}/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */function getHookArgumentsLength(fn){if(isUndef(fn)){return false;}var invokerFns=fn.fns;if(isDef(invokerFns)){// invoker
return getHookArgumentsLength(Array.isArray(invokerFns)?invokerFns[0]:invokerFns);}else{return(fn._length||fn.length)>1;}}function _enter(_,vnode){if(vnode.data.show!==true){enter(vnode);}}var transition=inBrowser?{create:_enter,activate:_enter,remove:function remove$$1(vnode,rm){/* istanbul ignore else */if(vnode.data.show!==true){leave(vnode,rm);}else{rm();}}}:{};var platformModules=[attrs,klass,events,domProps,style,transition];/*  */// the directive module should be applied last, after all
// built-in modules have been applied.
var modules=platformModules.concat(baseModules);var patch=createPatchFunction({nodeOps:nodeOps,modules:modules});/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 *//* istanbul ignore if */if(isIE9){// http://www.matts411.com/post/internet-explorer-9-oninput/
document.addEventListener('selectionchange',function(){var el=document.activeElement;if(el&&el.vmodel){trigger(el,'input');}});}var model$1={inserted:function inserted(el,binding,vnode){if(vnode.tag==='select'){setSelected(el,binding,vnode.context);el._vOptions=[].map.call(el.options,getValue);}else if(vnode.tag==='textarea'||isTextInputType(el.type)){el._vModifiers=binding.modifiers;if(!binding.modifiers.lazy){// Safari < 10.2 & UIWebView doesn't fire compositionend when
// switching focus before confirming composition choice
// this also fixes the issue where some browsers e.g. iOS Chrome
// fires "change" instead of "input" on autocomplete.
el.addEventListener('change',onCompositionEnd);if(!isAndroid){el.addEventListener('compositionstart',onCompositionStart);el.addEventListener('compositionend',onCompositionEnd);}/* istanbul ignore if */if(isIE9){el.vmodel=true;}}}},componentUpdated:function componentUpdated(el,binding,vnode){if(vnode.tag==='select'){setSelected(el,binding,vnode.context);// in case the options rendered by v-for have changed,
// it's possible that the value is out-of-sync with the rendered options.
// detect such cases and filter out values that no longer has a matching
// option in the DOM.
var prevOptions=el._vOptions;var curOptions=el._vOptions=[].map.call(el.options,getValue);if(curOptions.some(function(o,i){return!looseEqual(o,prevOptions[i]);})){// trigger change event if
// no matching option found for at least one value
var needReset=el.multiple?binding.value.some(function(v){return hasNoMatchingOption(v,curOptions);}):binding.value!==binding.oldValue&&hasNoMatchingOption(binding.value,curOptions);if(needReset){trigger(el,'change');}}}}};function setSelected(el,binding,vm){actuallySetSelected(el,binding,vm);/* istanbul ignore if */if(isIE||isEdge){setTimeout(function(){actuallySetSelected(el,binding,vm);},0);}}function actuallySetSelected(el,binding,vm){var value=binding.value;var isMultiple=el.multiple;if(isMultiple&&!Array.isArray(value)){"production"!=='production'&&warn("<select multiple v-model=\""+binding.expression+"\"> "+"expects an Array value for its binding, but got "+Object.prototype.toString.call(value).slice(8,-1),vm);return;}var selected,option;for(var i=0,l=el.options.length;i<l;i++){option=el.options[i];if(isMultiple){selected=looseIndexOf(value,getValue(option))>-1;if(option.selected!==selected){option.selected=selected;}}else{if(looseEqual(getValue(option),value)){if(el.selectedIndex!==i){el.selectedIndex=i;}return;}}}if(!isMultiple){el.selectedIndex=-1;}}function hasNoMatchingOption(value,options){return options.every(function(o){return!looseEqual(o,value);});}function getValue(option){return'_value'in option?option._value:option.value;}function onCompositionStart(e){e.target.composing=true;}function onCompositionEnd(e){// prevent triggering an input event for no reason
if(!e.target.composing){return;}e.target.composing=false;trigger(e.target,'input');}function trigger(el,type){var e=document.createEvent('HTMLEvents');e.initEvent(type,true,true);el.dispatchEvent(e);}/*  */// recursively search for possible transition defined inside the component root
function locateNode(vnode){return vnode.componentInstance&&(!vnode.data||!vnode.data.transition)?locateNode(vnode.componentInstance._vnode):vnode;}var show={bind:function bind(el,ref,vnode){var value=ref.value;vnode=locateNode(vnode);var transition$$1=vnode.data&&vnode.data.transition;var originalDisplay=el.__vOriginalDisplay=el.style.display==='none'?'':el.style.display;if(value&&transition$$1){vnode.data.show=true;enter(vnode,function(){el.style.display=originalDisplay;});}else{el.style.display=value?originalDisplay:'none';}},update:function update(el,ref,vnode){var value=ref.value;var oldValue=ref.oldValue;/* istanbul ignore if */if(value===oldValue){return;}vnode=locateNode(vnode);var transition$$1=vnode.data&&vnode.data.transition;if(transition$$1){vnode.data.show=true;if(value){enter(vnode,function(){el.style.display=el.__vOriginalDisplay;});}else{leave(vnode,function(){el.style.display='none';});}}else{el.style.display=value?el.__vOriginalDisplay:'none';}},unbind:function unbind(el,binding,vnode,oldVnode,isDestroy){if(!isDestroy){el.style.display=el.__vOriginalDisplay;}}};var platformDirectives={model:model$1,show:show};/*  */// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)
var transitionProps={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild(vnode){var compOptions=vnode&&vnode.componentOptions;if(compOptions&&compOptions.Ctor.options.abstract){return getRealChild(getFirstComponentChild(compOptions.children));}else{return vnode;}}function extractTransitionData(comp){var data={};var options=comp.$options;// props
for(var key in options.propsData){data[key]=comp[key];}// events.
// extract listeners and pass them directly to the transition methods
var listeners=options._parentListeners;for(var key$1 in listeners){data[camelize(key$1)]=listeners[key$1];}return data;}function placeholder(h,rawChild){if(/\d-keep-alive$/.test(rawChild.tag)){return h('keep-alive',{props:rawChild.componentOptions.propsData});}}function hasParentTransition(vnode){while(vnode=vnode.parent){if(vnode.data.transition){return true;}}}function isSameChild(child,oldChild){return oldChild.key===child.key&&oldChild.tag===child.tag;}var Transition={name:'transition',props:transitionProps,abstract:true,render:function render(h){var this$1=this;var children=this.$options._renderChildren;if(!children){return;}// filter out text nodes (possible whitespaces)
children=children.filter(function(c){return c.tag||isAsyncPlaceholder(c);});/* istanbul ignore if */if(!children.length){return;}// warn multiple elements
if(false){warn('<transition> can only be used on a single element. Use '+'<transition-group> for lists.',this.$parent);}var mode=this.mode;// warn invalid mode
if(false){warn('invalid <transition> mode: '+mode,this.$parent);}var rawChild=children[0];// if this is a component root node and the component's
// parent container node also has transition, skip.
if(hasParentTransition(this.$vnode)){return rawChild;}// apply transition data to child
// use getRealChild() to ignore abstract components e.g. keep-alive
var child=getRealChild(rawChild);/* istanbul ignore if */if(!child){return rawChild;}if(this._leaving){return placeholder(h,rawChild);}// ensure a key that is unique to the vnode type and to this transition
// component instance. This key will be used to remove pending leaving nodes
// during entering.
var id="__transition-"+this._uid+"-";child.key=child.key==null?child.isComment?id+'comment':id+child.tag:isPrimitive(child.key)?String(child.key).indexOf(id)===0?child.key:id+child.key:child.key;var data=(child.data||(child.data={})).transition=extractTransitionData(this);var oldRawChild=this._vnode;var oldChild=getRealChild(oldRawChild);// mark v-show
// so that the transition module can hand over the control to the directive
if(child.data.directives&&child.data.directives.some(function(d){return d.name==='show';})){child.data.show=true;}if(oldChild&&oldChild.data&&!isSameChild(child,oldChild)&&!isAsyncPlaceholder(oldChild)){// replace old child transition data with fresh one
// important for dynamic transitions!
var oldData=oldChild.data.transition=extend({},data);// handle transition mode
if(mode==='out-in'){// return placeholder node and queue update when leave finishes
this._leaving=true;mergeVNodeHook(oldData,'afterLeave',function(){this$1._leaving=false;this$1.$forceUpdate();});return placeholder(h,rawChild);}else if(mode==='in-out'){if(isAsyncPlaceholder(child)){return oldRawChild;}var delayedLeave;var performLeave=function performLeave(){delayedLeave();};mergeVNodeHook(data,'afterEnter',performLeave);mergeVNodeHook(data,'enterCancelled',performLeave);mergeVNodeHook(oldData,'delayLeave',function(leave){delayedLeave=leave;});}}return rawChild;}};/*  */// Provides transition support for list items.
// supports move transitions using the FLIP technique.
// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.
var props=extend({tag:String,moveClass:String},transitionProps);delete props.mode;var TransitionGroup={props:props,render:function render(h){var tag=this.tag||this.$vnode.data.tag||'span';var map=Object.create(null);var prevChildren=this.prevChildren=this.children;var rawChildren=this.$slots.default||[];var children=this.children=[];var transitionData=extractTransitionData(this);for(var i=0;i<rawChildren.length;i++){var c=rawChildren[i];if(c.tag){if(c.key!=null&&String(c.key).indexOf('__vlist')!==0){children.push(c);map[c.key]=c;(c.data||(c.data={})).transition=transitionData;}else if(false){var opts=c.componentOptions;var name=opts?opts.Ctor.options.name||opts.tag||'':c.tag;warn("<transition-group> children must be keyed: <"+name+">");}}}if(prevChildren){var kept=[];var removed=[];for(var i$1=0;i$1<prevChildren.length;i$1++){var c$1=prevChildren[i$1];c$1.data.transition=transitionData;c$1.data.pos=c$1.elm.getBoundingClientRect();if(map[c$1.key]){kept.push(c$1);}else{removed.push(c$1);}}this.kept=h(tag,null,kept);this.removed=removed;}return h(tag,null,children);},beforeUpdate:function beforeUpdate(){// force removing pass
this.__patch__(this._vnode,this.kept,false,// hydrating
true// removeOnly (!important, avoids unnecessary moves)
);this._vnode=this.kept;},updated:function updated(){var children=this.prevChildren;var moveClass=this.moveClass||(this.name||'v')+'-move';if(!children.length||!this.hasMove(children[0].elm,moveClass)){return;}// we divide the work into three loops to avoid mixing DOM reads and writes
// in each iteration - which helps prevent layout thrashing.
children.forEach(callPendingCbs);children.forEach(recordPosition);children.forEach(applyTranslation);// force reflow to put everything in position
// assign to this to avoid being removed in tree-shaking
// $flow-disable-line
this._reflow=document.body.offsetHeight;children.forEach(function(c){if(c.data.moved){var el=c.elm;var s=el.style;addTransitionClass(el,moveClass);s.transform=s.WebkitTransform=s.transitionDuration='';el.addEventListener(transitionEndEvent,el._moveCb=function cb(e){if(!e||/transform$/.test(e.propertyName)){el.removeEventListener(transitionEndEvent,cb);el._moveCb=null;removeTransitionClass(el,moveClass);}});}});},methods:{hasMove:function hasMove(el,moveClass){/* istanbul ignore if */if(!hasTransition){return false;}/* istanbul ignore if */if(this._hasMove){return this._hasMove;}// Detect whether an element with the move class applied has
// CSS transitions. Since the element may be inside an entering
// transition at this very moment, we make a clone of it and remove
// all other transition classes applied to ensure only the move class
// is applied.
var clone=el.cloneNode();if(el._transitionClasses){el._transitionClasses.forEach(function(cls){removeClass(clone,cls);});}addClass(clone,moveClass);clone.style.display='none';this.$el.appendChild(clone);var info=getTransitionInfo(clone);this.$el.removeChild(clone);return this._hasMove=info.hasTransform;}}};function callPendingCbs(c){/* istanbul ignore if */if(c.elm._moveCb){c.elm._moveCb();}/* istanbul ignore if */if(c.elm._enterCb){c.elm._enterCb();}}function recordPosition(c){c.data.newPos=c.elm.getBoundingClientRect();}function applyTranslation(c){var oldPos=c.data.pos;var newPos=c.data.newPos;var dx=oldPos.left-newPos.left;var dy=oldPos.top-newPos.top;if(dx||dy){c.data.moved=true;var s=c.elm.style;s.transform=s.WebkitTransform="translate("+dx+"px,"+dy+"px)";s.transitionDuration='0s';}}var platformComponents={Transition:Transition,TransitionGroup:TransitionGroup};/*  */// install platform specific utils
Vue$3.config.mustUseProp=mustUseProp;Vue$3.config.isReservedTag=isReservedTag;Vue$3.config.isReservedAttr=isReservedAttr;Vue$3.config.getTagNamespace=getTagNamespace;Vue$3.config.isUnknownElement=isUnknownElement;// install platform runtime directives & components
extend(Vue$3.options.directives,platformDirectives);extend(Vue$3.options.components,platformComponents);// install platform patch function
Vue$3.prototype.__patch__=inBrowser?patch:noop;// public mount method
Vue$3.prototype.$mount=function(el,hydrating){el=el&&inBrowser?query(el):undefined;return mountComponent(this,el,hydrating);};// devtools global hook
/* istanbul ignore next */Vue$3.nextTick(function(){if(config.devtools){if(devtools){devtools.emit('init',Vue$3);}else if(false){console[console.info?'info':'log']('Download the Vue Devtools extension for a better development experience:\n'+'https://github.com/vuejs/vue-devtools');}}if(false){console[console.info?'info':'log']("You are running Vue in development mode.\n"+"Make sure to turn on production mode when deploying for production.\n"+"See more tips at https://vuejs.org/guide/deployment.html");}},0);/*  */// check whether current browser encodes a char inside attribute values
function shouldDecode(content,encoded){var div=document.createElement('div');div.innerHTML="<div a=\""+content+"\"/>";return div.innerHTML.indexOf(encoded)>0;}// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines=inBrowser?shouldDecode('\n','&#10;'):false;/*  */var defaultTagRE=/\{\{((?:.|\n)+?)\}\}/g;var regexEscapeRE=/[-.*+?^${}()|[\]\/\\]/g;var buildRegex=cached(function(delimiters){var open=delimiters[0].replace(regexEscapeRE,'\\$&');var close=delimiters[1].replace(regexEscapeRE,'\\$&');return new RegExp(open+'((?:.|\\n)+?)'+close,'g');});function parseText(text,delimiters){var tagRE=delimiters?buildRegex(delimiters):defaultTagRE;if(!tagRE.test(text)){return;}var tokens=[];var lastIndex=tagRE.lastIndex=0;var match,index;while(match=tagRE.exec(text)){index=match.index;// push text token
if(index>lastIndex){tokens.push(JSON.stringify(text.slice(lastIndex,index)));}// tag token
var exp=parseFilters(match[1].trim());tokens.push("_s("+exp+")");lastIndex=index+match[0].length;}if(lastIndex<text.length){tokens.push(JSON.stringify(text.slice(lastIndex)));}return tokens.join('+');}/*  */function transformNode(el,options){var warn=options.warn||baseWarn;var staticClass=getAndRemoveAttr(el,'class');if(false){var expression=parseText(staticClass,options.delimiters);if(expression){warn("class=\""+staticClass+"\": "+'Interpolation inside attributes has been removed. '+'Use v-bind or the colon shorthand instead. For example, '+'instead of <div class="{{ val }}">, use <div :class="val">.');}}if(staticClass){el.staticClass=JSON.stringify(staticClass);}var classBinding=getBindingAttr(el,'class',false/* getStatic */);if(classBinding){el.classBinding=classBinding;}}function genData(el){var data='';if(el.staticClass){data+="staticClass:"+el.staticClass+",";}if(el.classBinding){data+="class:"+el.classBinding+",";}return data;}var klass$1={staticKeys:['staticClass'],transformNode:transformNode,genData:genData};/*  */function transformNode$1(el,options){var warn=options.warn||baseWarn;var staticStyle=getAndRemoveAttr(el,'style');if(staticStyle){/* istanbul ignore if */if(false){var expression=parseText(staticStyle,options.delimiters);if(expression){warn("style=\""+staticStyle+"\": "+'Interpolation inside attributes has been removed. '+'Use v-bind or the colon shorthand instead. For example, '+'instead of <div style="{{ val }}">, use <div :style="val">.');}}el.staticStyle=JSON.stringify(parseStyleText(staticStyle));}var styleBinding=getBindingAttr(el,'style',false/* getStatic */);if(styleBinding){el.styleBinding=styleBinding;}}function genData$1(el){var data='';if(el.staticStyle){data+="staticStyle:"+el.staticStyle+",";}if(el.styleBinding){data+="style:("+el.styleBinding+"),";}return data;}var style$1={staticKeys:['staticStyle'],transformNode:transformNode$1,genData:genData$1};/*  */var decoder;var he={decode:function decode(html){decoder=decoder||document.createElement('div');decoder.innerHTML=html;return decoder.textContent;}};/*  */var isUnaryTag=makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,'+'link,meta,param,source,track,wbr');// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag=makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag=makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,'+'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,'+'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,'+'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,'+'title,tr,track');/**
 * Not type-checking this file because it's mostly vendor code.
 *//*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */// Regular Expressions for parsing tags and attributes
var attribute=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname='[a-zA-Z_][\\w\\-\\.]*';var qnameCapture="((?:"+ncname+"\\:)?"+ncname+")";var startTagOpen=new RegExp("^<"+qnameCapture);var startTagClose=/^\s*(\/?)>/;var endTag=new RegExp("^<\\/"+qnameCapture+"[^>]*>");var doctype=/^<!DOCTYPE [^>]+>/i;var comment=/^<!--/;var conditionalComment=/^<!\[/;var IS_REGEX_CAPTURING_BROKEN=false;'x'.replace(/x(.)?/g,function(m,g){IS_REGEX_CAPTURING_BROKEN=g==='';});// Special Elements (can contain anything)
var isPlainTextElement=makeMap('script,style,textarea',true);var reCache={};var decodingMap={'&lt;':'<','&gt;':'>','&quot;':'"','&amp;':'&','&#10;':'\n'};var encodedAttr=/&(?:lt|gt|quot|amp);/g;var encodedAttrWithNewLines=/&(?:lt|gt|quot|amp|#10);/g;// #5992
var isIgnoreNewlineTag=makeMap('pre,textarea',true);var shouldIgnoreFirstNewline=function shouldIgnoreFirstNewline(tag,html){return tag&&isIgnoreNewlineTag(tag)&&html[0]==='\n';};function decodeAttr(value,shouldDecodeNewlines){var re=shouldDecodeNewlines?encodedAttrWithNewLines:encodedAttr;return value.replace(re,function(match){return decodingMap[match];});}function parseHTML(html,options){var stack=[];var expectHTML=options.expectHTML;var isUnaryTag$$1=options.isUnaryTag||no;var canBeLeftOpenTag$$1=options.canBeLeftOpenTag||no;var index=0;var last,lastTag;while(html){last=html;// Make sure we're not in a plaintext content element like script/style
if(!lastTag||!isPlainTextElement(lastTag)){var textEnd=html.indexOf('<');if(textEnd===0){// Comment:
if(comment.test(html)){var commentEnd=html.indexOf('-->');if(commentEnd>=0){if(options.shouldKeepComment){options.comment(html.substring(4,commentEnd));}advance(commentEnd+3);continue;}}// http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
if(conditionalComment.test(html)){var conditionalEnd=html.indexOf(']>');if(conditionalEnd>=0){advance(conditionalEnd+2);continue;}}// Doctype:
var doctypeMatch=html.match(doctype);if(doctypeMatch){advance(doctypeMatch[0].length);continue;}// End tag:
var endTagMatch=html.match(endTag);if(endTagMatch){var curIndex=index;advance(endTagMatch[0].length);parseEndTag(endTagMatch[1],curIndex,index);continue;}// Start tag:
var startTagMatch=parseStartTag();if(startTagMatch){handleStartTag(startTagMatch);if(shouldIgnoreFirstNewline(lastTag,html)){advance(1);}continue;}}var text=void 0,rest=void 0,next=void 0;if(textEnd>=0){rest=html.slice(textEnd);while(!endTag.test(rest)&&!startTagOpen.test(rest)&&!comment.test(rest)&&!conditionalComment.test(rest)){// < in plain text, be forgiving and treat it as text
next=rest.indexOf('<',1);if(next<0){break;}textEnd+=next;rest=html.slice(textEnd);}text=html.substring(0,textEnd);advance(textEnd);}if(textEnd<0){text=html;html='';}if(options.chars&&text){options.chars(text);}}else{var endTagLength=0;var stackedTag=lastTag.toLowerCase();var reStackedTag=reCache[stackedTag]||(reCache[stackedTag]=new RegExp('([\\s\\S]*?)(</'+stackedTag+'[^>]*>)','i'));var rest$1=html.replace(reStackedTag,function(all,text,endTag){endTagLength=endTag.length;if(!isPlainTextElement(stackedTag)&&stackedTag!=='noscript'){text=text.replace(/<!--([\s\S]*?)-->/g,'$1').replace(/<!\[CDATA\[([\s\S]*?)]]>/g,'$1');}if(shouldIgnoreFirstNewline(stackedTag,text)){text=text.slice(1);}if(options.chars){options.chars(text);}return'';});index+=html.length-rest$1.length;html=rest$1;parseEndTag(stackedTag,index-endTagLength,index);}if(html===last){options.chars&&options.chars(html);if(false){options.warn("Mal-formatted tag at end of template: \""+html+"\"");}break;}}// Clean up any remaining tags
parseEndTag();function advance(n){index+=n;html=html.substring(n);}function parseStartTag(){var start=html.match(startTagOpen);if(start){var match={tagName:start[1],attrs:[],start:index};advance(start[0].length);var end,attr;while(!(end=html.match(startTagClose))&&(attr=html.match(attribute))){advance(attr[0].length);match.attrs.push(attr);}if(end){match.unarySlash=end[1];advance(end[0].length);match.end=index;return match;}}}function handleStartTag(match){var tagName=match.tagName;var unarySlash=match.unarySlash;if(expectHTML){if(lastTag==='p'&&isNonPhrasingTag(tagName)){parseEndTag(lastTag);}if(canBeLeftOpenTag$$1(tagName)&&lastTag===tagName){parseEndTag(tagName);}}var unary=isUnaryTag$$1(tagName)||!!unarySlash;var l=match.attrs.length;var attrs=new Array(l);for(var i=0;i<l;i++){var args=match.attrs[i];// hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
if(IS_REGEX_CAPTURING_BROKEN&&args[0].indexOf('""')===-1){if(args[3]===''){delete args[3];}if(args[4]===''){delete args[4];}if(args[5]===''){delete args[5];}}var value=args[3]||args[4]||args[5]||'';attrs[i]={name:args[1],value:decodeAttr(value,options.shouldDecodeNewlines)};}if(!unary){stack.push({tag:tagName,lowerCasedTag:tagName.toLowerCase(),attrs:attrs});lastTag=tagName;}if(options.start){options.start(tagName,attrs,unary,match.start,match.end);}}function parseEndTag(tagName,start,end){var pos,lowerCasedTagName;if(start==null){start=index;}if(end==null){end=index;}if(tagName){lowerCasedTagName=tagName.toLowerCase();}// Find the closest opened tag of the same type
if(tagName){for(pos=stack.length-1;pos>=0;pos--){if(stack[pos].lowerCasedTag===lowerCasedTagName){break;}}}else{// If no tag name is provided, clean shop
pos=0;}if(pos>=0){// Close all the open elements, up the stack
for(var i=stack.length-1;i>=pos;i--){if(false){options.warn("tag <"+stack[i].tag+"> has no matching end tag.");}if(options.end){options.end(stack[i].tag,start,end);}}// Remove the open elements from the stack
stack.length=pos;lastTag=pos&&stack[pos-1].tag;}else if(lowerCasedTagName==='br'){if(options.start){options.start(tagName,[],true,start,end);}}else if(lowerCasedTagName==='p'){if(options.start){options.start(tagName,[],false,start,end);}if(options.end){options.end(tagName,start,end);}}}}/*  */var onRE=/^@|^v-on:/;var dirRE=/^v-|^@|^:/;var forAliasRE=/(.*?)\s+(?:in|of)\s+(.*)/;var forIteratorRE=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;var argRE=/:(.*)$/;var bindRE=/^:|^v-bind:/;var modifierRE=/\.[^.]+/g;var decodeHTMLCached=cached(he.decode);// configurable state
var warn$2;var delimiters;var transforms;var preTransforms;var postTransforms;var platformIsPreTag;var platformMustUseProp;var platformGetTagNamespace;function createASTElement(tag,attrs,parent){return{type:1,tag:tag,attrsList:attrs,attrsMap:makeAttrsMap(attrs),parent:parent,children:[]};}/**
 * Convert HTML string to AST.
 */function parse(template,options){warn$2=options.warn||baseWarn;platformIsPreTag=options.isPreTag||no;platformMustUseProp=options.mustUseProp||no;platformGetTagNamespace=options.getTagNamespace||no;transforms=pluckModuleFunction(options.modules,'transformNode');preTransforms=pluckModuleFunction(options.modules,'preTransformNode');postTransforms=pluckModuleFunction(options.modules,'postTransformNode');delimiters=options.delimiters;var stack=[];var preserveWhitespace=options.preserveWhitespace!==false;var root;var currentParent;var inVPre=false;var inPre=false;var warned=false;function warnOnce(msg){if(!warned){warned=true;warn$2(msg);}}function endPre(element){// check pre state
if(element.pre){inVPre=false;}if(platformIsPreTag(element.tag)){inPre=false;}}parseHTML(template,{warn:warn$2,expectHTML:options.expectHTML,isUnaryTag:options.isUnaryTag,canBeLeftOpenTag:options.canBeLeftOpenTag,shouldDecodeNewlines:options.shouldDecodeNewlines,shouldKeepComment:options.comments,start:function start(tag,attrs,unary){// check namespace.
// inherit parent ns if there is one
var ns=currentParent&&currentParent.ns||platformGetTagNamespace(tag);// handle IE svg bug
/* istanbul ignore if */if(isIE&&ns==='svg'){attrs=guardIESVGBug(attrs);}var element=createASTElement(tag,attrs,currentParent);if(ns){element.ns=ns;}if(isForbiddenTag(element)&&!isServerRendering()){element.forbidden=true;"production"!=='production'&&warn$2('Templates should only be responsible for mapping the state to the '+'UI. Avoid placing tags with side-effects in your templates, such as '+"<"+tag+">"+', as they will not be parsed.');}// apply pre-transforms
for(var i=0;i<preTransforms.length;i++){element=preTransforms[i](element,options)||element;}if(!inVPre){processPre(element);if(element.pre){inVPre=true;}}if(platformIsPreTag(element.tag)){inPre=true;}if(inVPre){processRawAttrs(element);}else if(!element.processed){// structural directives
processFor(element);processIf(element);processOnce(element);// element-scope stuff
processElement(element,options);}function checkRootConstraints(el){if(false){if(el.tag==='slot'||el.tag==='template'){warnOnce("Cannot use <"+el.tag+"> as component root element because it may "+'contain multiple nodes.');}if(el.attrsMap.hasOwnProperty('v-for')){warnOnce('Cannot use v-for on stateful component root element because '+'it renders multiple elements.');}}}// tree management
if(!root){root=element;checkRootConstraints(root);}else if(!stack.length){// allow root elements with v-if, v-else-if and v-else
if(root.if&&(element.elseif||element.else)){checkRootConstraints(element);addIfCondition(root,{exp:element.elseif,block:element});}else if(false){warnOnce("Component template should contain exactly one root element. "+"If you are using v-if on multiple elements, "+"use v-else-if to chain them instead.");}}if(currentParent&&!element.forbidden){if(element.elseif||element.else){processIfConditions(element,currentParent);}else if(element.slotScope){// scoped slot
currentParent.plain=false;var name=element.slotTarget||'"default"';(currentParent.scopedSlots||(currentParent.scopedSlots={}))[name]=element;}else{currentParent.children.push(element);element.parent=currentParent;}}if(!unary){currentParent=element;stack.push(element);}else{endPre(element);}// apply post-transforms
for(var i$1=0;i$1<postTransforms.length;i$1++){postTransforms[i$1](element,options);}},end:function end(){// remove trailing whitespace
var element=stack[stack.length-1];var lastNode=element.children[element.children.length-1];if(lastNode&&lastNode.type===3&&lastNode.text===' '&&!inPre){element.children.pop();}// pop stack
stack.length-=1;currentParent=stack[stack.length-1];endPre(element);},chars:function chars(text){if(!currentParent){if(false){if(text===template){warnOnce('Component template requires a root element, rather than just text.');}else if(text=text.trim()){warnOnce("text \""+text+"\" outside root element will be ignored.");}}return;}// IE textarea placeholder bug
/* istanbul ignore if */if(isIE&&currentParent.tag==='textarea'&&currentParent.attrsMap.placeholder===text){return;}var children=currentParent.children;text=inPre||text.trim()?isTextTag(currentParent)?text:decodeHTMLCached(text)// only preserve whitespace if its not right after a starting tag
:preserveWhitespace&&children.length?' ':'';if(text){var expression;if(!inVPre&&text!==' '&&(expression=parseText(text,delimiters))){children.push({type:2,expression:expression,text:text});}else if(text!==' '||!children.length||children[children.length-1].text!==' '){children.push({type:3,text:text});}}},comment:function comment(text){currentParent.children.push({type:3,text:text,isComment:true});}});return root;}function processPre(el){if(getAndRemoveAttr(el,'v-pre')!=null){el.pre=true;}}function processRawAttrs(el){var l=el.attrsList.length;if(l){var attrs=el.attrs=new Array(l);for(var i=0;i<l;i++){attrs[i]={name:el.attrsList[i].name,value:JSON.stringify(el.attrsList[i].value)};}}else if(!el.pre){// non root node in pre blocks with no attributes
el.plain=true;}}function processElement(element,options){processKey(element);// determine whether this is a plain element after
// removing structural attributes
element.plain=!element.key&&!element.attrsList.length;processRef(element);processSlot(element);processComponent(element);for(var i=0;i<transforms.length;i++){element=transforms[i](element,options)||element;}processAttrs(element);}function processKey(el){var exp=getBindingAttr(el,'key');if(exp){if(false){warn$2("<template> cannot be keyed. Place the key on real elements instead.");}el.key=exp;}}function processRef(el){var ref=getBindingAttr(el,'ref');if(ref){el.ref=ref;el.refInFor=checkInFor(el);}}function processFor(el){var exp;if(exp=getAndRemoveAttr(el,'v-for')){var inMatch=exp.match(forAliasRE);if(!inMatch){"production"!=='production'&&warn$2("Invalid v-for expression: "+exp);return;}el.for=inMatch[2].trim();var alias=inMatch[1].trim();var iteratorMatch=alias.match(forIteratorRE);if(iteratorMatch){el.alias=iteratorMatch[1].trim();el.iterator1=iteratorMatch[2].trim();if(iteratorMatch[3]){el.iterator2=iteratorMatch[3].trim();}}else{el.alias=alias;}}}function processIf(el){var exp=getAndRemoveAttr(el,'v-if');if(exp){el.if=exp;addIfCondition(el,{exp:exp,block:el});}else{if(getAndRemoveAttr(el,'v-else')!=null){el.else=true;}var elseif=getAndRemoveAttr(el,'v-else-if');if(elseif){el.elseif=elseif;}}}function processIfConditions(el,parent){var prev=findPrevElement(parent.children);if(prev&&prev.if){addIfCondition(prev,{exp:el.elseif,block:el});}else if(false){warn$2("v-"+(el.elseif?'else-if="'+el.elseif+'"':'else')+" "+"used on element <"+el.tag+"> without corresponding v-if.");}}function findPrevElement(children){var i=children.length;while(i--){if(children[i].type===1){return children[i];}else{if(false){warn$2("text \""+children[i].text.trim()+"\" between v-if and v-else(-if) "+"will be ignored.");}children.pop();}}}function addIfCondition(el,condition){if(!el.ifConditions){el.ifConditions=[];}el.ifConditions.push(condition);}function processOnce(el){var once$$1=getAndRemoveAttr(el,'v-once');if(once$$1!=null){el.once=true;}}function processSlot(el){if(el.tag==='slot'){el.slotName=getBindingAttr(el,'name');if(false){warn$2("`key` does not work on <slot> because slots are abstract outlets "+"and can possibly expand into multiple elements. "+"Use the key on a wrapping element instead.");}}else{var slotScope;if(el.tag==='template'){slotScope=getAndRemoveAttr(el,'scope');/* istanbul ignore if */if(false){warn$2("the \"scope\" attribute for scoped slots have been deprecated and "+"replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute "+"can also be used on plain elements in addition to <template> to "+"denote scoped slots.",true);}el.slotScope=slotScope||getAndRemoveAttr(el,'slot-scope');}else if(slotScope=getAndRemoveAttr(el,'slot-scope')){el.slotScope=slotScope;}var slotTarget=getBindingAttr(el,'slot');if(slotTarget){el.slotTarget=slotTarget==='""'?'"default"':slotTarget;// preserve slot as an attribute for native shadow DOM compat
// only for non-scoped slots.
if(!el.slotScope){addAttr(el,'slot',slotTarget);}}}}function processComponent(el){var binding;if(binding=getBindingAttr(el,'is')){el.component=binding;}if(getAndRemoveAttr(el,'inline-template')!=null){el.inlineTemplate=true;}}function processAttrs(el){var list=el.attrsList;var i,l,name,rawName,value,modifiers,isProp;for(i=0,l=list.length;i<l;i++){name=rawName=list[i].name;value=list[i].value;if(dirRE.test(name)){// mark element as dynamic
el.hasBindings=true;// modifiers
modifiers=parseModifiers(name);if(modifiers){name=name.replace(modifierRE,'');}if(bindRE.test(name)){// v-bind
name=name.replace(bindRE,'');value=parseFilters(value);isProp=false;if(modifiers){if(modifiers.prop){isProp=true;name=camelize(name);if(name==='innerHtml'){name='innerHTML';}}if(modifiers.camel){name=camelize(name);}if(modifiers.sync){addHandler(el,"update:"+camelize(name),genAssignmentCode(value,"$event"));}}if(isProp||!el.component&&platformMustUseProp(el.tag,el.attrsMap.type,name)){addProp(el,name,value);}else{addAttr(el,name,value);}}else if(onRE.test(name)){// v-on
name=name.replace(onRE,'');addHandler(el,name,value,modifiers,false,warn$2);}else{// normal directives
name=name.replace(dirRE,'');// parse arg
var argMatch=name.match(argRE);var arg=argMatch&&argMatch[1];if(arg){name=name.slice(0,-(arg.length+1));}addDirective(el,name,rawName,value,arg,modifiers);if(false){checkForAliasModel(el,value);}}}else{// literal attribute
if(false){var expression=parseText(value,delimiters);if(expression){warn$2(name+"=\""+value+"\": "+'Interpolation inside attributes has been removed. '+'Use v-bind or the colon shorthand instead. For example, '+'instead of <div id="{{ val }}">, use <div :id="val">.');}}addAttr(el,name,JSON.stringify(value));}}}function checkInFor(el){var parent=el;while(parent){if(parent.for!==undefined){return true;}parent=parent.parent;}return false;}function parseModifiers(name){var match=name.match(modifierRE);if(match){var ret={};match.forEach(function(m){ret[m.slice(1)]=true;});return ret;}}function makeAttrsMap(attrs){var map={};for(var i=0,l=attrs.length;i<l;i++){if(false){warn$2('duplicate attribute: '+attrs[i].name);}map[attrs[i].name]=attrs[i].value;}return map;}// for script (e.g. type="x/template") or style, do not decode content
function isTextTag(el){return el.tag==='script'||el.tag==='style';}function isForbiddenTag(el){return el.tag==='style'||el.tag==='script'&&(!el.attrsMap.type||el.attrsMap.type==='text/javascript');}var ieNSBug=/^xmlns:NS\d+/;var ieNSPrefix=/^NS\d+:/;/* istanbul ignore next */function guardIESVGBug(attrs){var res=[];for(var i=0;i<attrs.length;i++){var attr=attrs[i];if(!ieNSBug.test(attr.name)){attr.name=attr.name.replace(ieNSPrefix,'');res.push(attr);}}return res;}function checkForAliasModel(el,value){var _el=el;while(_el){if(_el.for&&_el.alias===value){warn$2("<"+el.tag+" v-model=\""+value+"\">: "+"You are binding v-model directly to a v-for iteration alias. "+"This will not be able to modify the v-for source array because "+"writing to the alias is like modifying a function local variable. "+"Consider using an array of objects and use v-model on an object property instead.");}_el=_el.parent;}}/*  *//**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */function preTransformNode(el,options){if(el.tag==='input'){var map=el.attrsMap;if(map['v-model']&&(map['v-bind:type']||map[':type'])){var typeBinding=getBindingAttr(el,'type');var ifCondition=getAndRemoveAttr(el,'v-if',true);var ifConditionExtra=ifCondition?"&&("+ifCondition+")":"";// 1. checkbox
var branch0=cloneASTElement(el);// process for on the main node
processFor(branch0);addRawAttr(branch0,'type','checkbox');processElement(branch0,options);branch0.processed=true;// prevent it from double-processed
branch0.if="("+typeBinding+")==='checkbox'"+ifConditionExtra;addIfCondition(branch0,{exp:branch0.if,block:branch0});// 2. add radio else-if condition
var branch1=cloneASTElement(el);getAndRemoveAttr(branch1,'v-for',true);addRawAttr(branch1,'type','radio');processElement(branch1,options);addIfCondition(branch0,{exp:"("+typeBinding+")==='radio'"+ifConditionExtra,block:branch1});// 3. other
var branch2=cloneASTElement(el);getAndRemoveAttr(branch2,'v-for',true);addRawAttr(branch2,':type',typeBinding);processElement(branch2,options);addIfCondition(branch0,{exp:ifCondition,block:branch2});return branch0;}}}function cloneASTElement(el){return createASTElement(el.tag,el.attrsList.slice(),el.parent);}function addRawAttr(el,name,value){el.attrsMap[name]=value;el.attrsList.push({name:name,value:value});}var model$2={preTransformNode:preTransformNode};var modules$1=[klass$1,style$1,model$2];/*  */function text(el,dir){if(dir.value){addProp(el,'textContent',"_s("+dir.value+")");}}/*  */function html(el,dir){if(dir.value){addProp(el,'innerHTML',"_s("+dir.value+")");}}var directives$1={model:model,text:text,html:html};/*  */var baseOptions={expectHTML:true,modules:modules$1,directives:directives$1,isPreTag:isPreTag,isUnaryTag:isUnaryTag,mustUseProp:mustUseProp,canBeLeftOpenTag:canBeLeftOpenTag,isReservedTag:isReservedTag,getTagNamespace:getTagNamespace,staticKeys:genStaticKeys(modules$1)};/*  */var isStaticKey;var isPlatformReservedTag;var genStaticKeysCached=cached(genStaticKeys$1);/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */function optimize(root,options){if(!root){return;}isStaticKey=genStaticKeysCached(options.staticKeys||'');isPlatformReservedTag=options.isReservedTag||no;// first pass: mark all non-static nodes.
markStatic$1(root);// second pass: mark static roots.
markStaticRoots(root,false);}function genStaticKeys$1(keys){return makeMap('type,tag,attrsList,attrsMap,plain,parent,children,attrs'+(keys?','+keys:''));}function markStatic$1(node){node.static=isStatic(node);if(node.type===1){// do not make component slot content static. this avoids
// 1. components not able to mutate slot nodes
// 2. static slot content fails for hot-reloading
if(!isPlatformReservedTag(node.tag)&&node.tag!=='slot'&&node.attrsMap['inline-template']==null){return;}for(var i=0,l=node.children.length;i<l;i++){var child=node.children[i];markStatic$1(child);if(!child.static){node.static=false;}}if(node.ifConditions){for(var i$1=1,l$1=node.ifConditions.length;i$1<l$1;i$1++){var block=node.ifConditions[i$1].block;markStatic$1(block);if(!block.static){node.static=false;}}}}}function markStaticRoots(node,isInFor){if(node.type===1){if(node.static||node.once){node.staticInFor=isInFor;}// For a node to qualify as a static root, it should have children that
// are not just static text. Otherwise the cost of hoisting out will
// outweigh the benefits and it's better off to just always render it fresh.
if(node.static&&node.children.length&&!(node.children.length===1&&node.children[0].type===3)){node.staticRoot=true;return;}else{node.staticRoot=false;}if(node.children){for(var i=0,l=node.children.length;i<l;i++){markStaticRoots(node.children[i],isInFor||!!node.for);}}if(node.ifConditions){for(var i$1=1,l$1=node.ifConditions.length;i$1<l$1;i$1++){markStaticRoots(node.ifConditions[i$1].block,isInFor);}}}}function isStatic(node){if(node.type===2){// expression
return false;}if(node.type===3){// text
return true;}return!!(node.pre||!node.hasBindings&&// no dynamic bindings
!node.if&&!node.for&&// not v-if or v-for or v-else
!isBuiltInTag(node.tag)&&// not a built-in
isPlatformReservedTag(node.tag)&&// not a component
!isDirectChildOfTemplateFor(node)&&Object.keys(node).every(isStaticKey));}function isDirectChildOfTemplateFor(node){while(node.parent){node=node.parent;if(node.tag!=='template'){return false;}if(node.for){return true;}}return false;}/*  */var fnExpRE=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;var simplePathRE=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;// keyCode aliases
var keyCodes={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,'delete':[8,46]};// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard=function genGuard(condition){return"if("+condition+")return null;";};var modifierCode={stop:'$event.stopPropagation();',prevent:'$event.preventDefault();',self:genGuard("$event.target !== $event.currentTarget"),ctrl:genGuard("!$event.ctrlKey"),shift:genGuard("!$event.shiftKey"),alt:genGuard("!$event.altKey"),meta:genGuard("!$event.metaKey"),left:genGuard("'button' in $event && $event.button !== 0"),middle:genGuard("'button' in $event && $event.button !== 1"),right:genGuard("'button' in $event && $event.button !== 2")};function genHandlers(events,isNative,warn){var res=isNative?'nativeOn:{':'on:{';for(var name in events){var handler=events[name];// #5330: warn click.right, since right clicks do not actually fire click events.
if(false){warn("Use \"contextmenu\" instead of \"click.right\" since right clicks "+"do not actually fire \"click\" events.");}res+="\""+name+"\":"+genHandler(name,handler)+",";}return res.slice(0,-1)+'}';}function genHandler(name,handler){if(!handler){return'function(){}';}if(Array.isArray(handler)){return"["+handler.map(function(handler){return genHandler(name,handler);}).join(',')+"]";}var isMethodPath=simplePathRE.test(handler.value);var isFunctionExpression=fnExpRE.test(handler.value);if(!handler.modifiers){return isMethodPath||isFunctionExpression?handler.value:"function($event){"+handler.value+"}";// inline statement
}else{var code='';var genModifierCode='';var keys=[];for(var key in handler.modifiers){if(modifierCode[key]){genModifierCode+=modifierCode[key];// left/right
if(keyCodes[key]){keys.push(key);}}else if(key==='exact'){var modifiers=handler.modifiers;genModifierCode+=genGuard(['ctrl','shift','alt','meta'].filter(function(keyModifier){return!modifiers[keyModifier];}).map(function(keyModifier){return"$event."+keyModifier+"Key";}).join('||'));}else{keys.push(key);}}if(keys.length){code+=genKeyFilter(keys);}// Make sure modifiers like prevent and stop get executed after key filtering
if(genModifierCode){code+=genModifierCode;}var handlerCode=isMethodPath?handler.value+'($event)':isFunctionExpression?"("+handler.value+")($event)":handler.value;return"function($event){"+code+handlerCode+"}";}}function genKeyFilter(keys){return"if(!('button' in $event)&&"+keys.map(genFilterCode).join('&&')+")return null;";}function genFilterCode(key){var keyVal=parseInt(key,10);if(keyVal){return"$event.keyCode!=="+keyVal;}var code=keyCodes[key];return"_k($event.keyCode,"+JSON.stringify(key)+","+JSON.stringify(code)+","+"$event.key)";}/*  */function on(el,dir){if(false){warn("v-on without argument does not support modifiers.");}el.wrapListeners=function(code){return"_g("+code+","+dir.value+")";};}/*  */function bind$1(el,dir){el.wrapData=function(code){return"_b("+code+",'"+el.tag+"',"+dir.value+","+(dir.modifiers&&dir.modifiers.prop?'true':'false')+(dir.modifiers&&dir.modifiers.sync?',true':'')+")";};}/*  */var baseDirectives={on:on,bind:bind$1,cloak:noop};/*  */var CodegenState=function CodegenState(options){this.options=options;this.warn=options.warn||baseWarn;this.transforms=pluckModuleFunction(options.modules,'transformCode');this.dataGenFns=pluckModuleFunction(options.modules,'genData');this.directives=extend(extend({},baseDirectives),options.directives);var isReservedTag=options.isReservedTag||no;this.maybeComponent=function(el){return!isReservedTag(el.tag);};this.onceId=0;this.staticRenderFns=[];};function generate(ast,options){var state=new CodegenState(options);var code=ast?genElement(ast,state):'_c("div")';return{render:"with(this){return "+code+"}",staticRenderFns:state.staticRenderFns};}function genElement(el,state){if(el.staticRoot&&!el.staticProcessed){return genStatic(el,state);}else if(el.once&&!el.onceProcessed){return genOnce(el,state);}else if(el.for&&!el.forProcessed){return genFor(el,state);}else if(el.if&&!el.ifProcessed){return genIf(el,state);}else if(el.tag==='template'&&!el.slotTarget){return genChildren(el,state)||'void 0';}else if(el.tag==='slot'){return genSlot(el,state);}else{// component or element
var code;if(el.component){code=genComponent(el.component,el,state);}else{var data=el.plain?undefined:genData$2(el,state);var children=el.inlineTemplate?null:genChildren(el,state,true);code="_c('"+el.tag+"'"+(data?","+data:'')+(children?","+children:'')+")";}// module transforms
for(var i=0;i<state.transforms.length;i++){code=state.transforms[i](el,code);}return code;}}// hoist static sub-trees out
function genStatic(el,state){el.staticProcessed=true;state.staticRenderFns.push("with(this){return "+genElement(el,state)+"}");return"_m("+(state.staticRenderFns.length-1)+(el.staticInFor?',true':'')+")";}// v-once
function genOnce(el,state){el.onceProcessed=true;if(el.if&&!el.ifProcessed){return genIf(el,state);}else if(el.staticInFor){var key='';var parent=el.parent;while(parent){if(parent.for){key=parent.key;break;}parent=parent.parent;}if(!key){"production"!=='production'&&state.warn("v-once can only be used inside v-for that is keyed. ");return genElement(el,state);}return"_o("+genElement(el,state)+","+state.onceId++ +","+key+")";}else{return genStatic(el,state);}}function genIf(el,state,altGen,altEmpty){el.ifProcessed=true;// avoid recursion
return genIfConditions(el.ifConditions.slice(),state,altGen,altEmpty);}function genIfConditions(conditions,state,altGen,altEmpty){if(!conditions.length){return altEmpty||'_e()';}var condition=conditions.shift();if(condition.exp){return"("+condition.exp+")?"+genTernaryExp(condition.block)+":"+genIfConditions(conditions,state,altGen,altEmpty);}else{return""+genTernaryExp(condition.block);}// v-if with v-once should generate code like (a)?_m(0):_m(1)
function genTernaryExp(el){return altGen?altGen(el,state):el.once?genOnce(el,state):genElement(el,state);}}function genFor(el,state,altGen,altHelper){var exp=el.for;var alias=el.alias;var iterator1=el.iterator1?","+el.iterator1:'';var iterator2=el.iterator2?","+el.iterator2:'';if(false){state.warn("<"+el.tag+" v-for=\""+alias+" in "+exp+"\">: component lists rendered with "+"v-for should have explicit keys. "+"See https://vuejs.org/guide/list.html#key for more info.",true/* tip */);}el.forProcessed=true;// avoid recursion
return(altHelper||'_l')+"(("+exp+"),"+"function("+alias+iterator1+iterator2+"){"+"return "+(altGen||genElement)(el,state)+'})';}function genData$2(el,state){var data='{';// directives first.
// directives may mutate the el's other properties before they are generated.
var dirs=genDirectives(el,state);if(dirs){data+=dirs+',';}// key
if(el.key){data+="key:"+el.key+",";}// ref
if(el.ref){data+="ref:"+el.ref+",";}if(el.refInFor){data+="refInFor:true,";}// pre
if(el.pre){data+="pre:true,";}// record original tag name for components using "is" attribute
if(el.component){data+="tag:\""+el.tag+"\",";}// module data generation functions
for(var i=0;i<state.dataGenFns.length;i++){data+=state.dataGenFns[i](el);}// attributes
if(el.attrs){data+="attrs:{"+genProps(el.attrs)+"},";}// DOM props
if(el.props){data+="domProps:{"+genProps(el.props)+"},";}// event handlers
if(el.events){data+=genHandlers(el.events,false,state.warn)+",";}if(el.nativeEvents){data+=genHandlers(el.nativeEvents,true,state.warn)+",";}// slot target
// only for non-scoped slots
if(el.slotTarget&&!el.slotScope){data+="slot:"+el.slotTarget+",";}// scoped slots
if(el.scopedSlots){data+=genScopedSlots(el.scopedSlots,state)+",";}// component v-model
if(el.model){data+="model:{value:"+el.model.value+",callback:"+el.model.callback+",expression:"+el.model.expression+"},";}// inline-template
if(el.inlineTemplate){var inlineTemplate=genInlineTemplate(el,state);if(inlineTemplate){data+=inlineTemplate+",";}}data=data.replace(/,$/,'')+'}';// v-bind data wrap
if(el.wrapData){data=el.wrapData(data);}// v-on data wrap
if(el.wrapListeners){data=el.wrapListeners(data);}return data;}function genDirectives(el,state){var dirs=el.directives;if(!dirs){return;}var res='directives:[';var hasRuntime=false;var i,l,dir,needRuntime;for(i=0,l=dirs.length;i<l;i++){dir=dirs[i];needRuntime=true;var gen=state.directives[dir.name];if(gen){// compile-time directive that manipulates AST.
// returns true if it also needs a runtime counterpart.
needRuntime=!!gen(el,dir,state.warn);}if(needRuntime){hasRuntime=true;res+="{name:\""+dir.name+"\",rawName:\""+dir.rawName+"\""+(dir.value?",value:("+dir.value+"),expression:"+JSON.stringify(dir.value):'')+(dir.arg?",arg:\""+dir.arg+"\"":'')+(dir.modifiers?",modifiers:"+JSON.stringify(dir.modifiers):'')+"},";}}if(hasRuntime){return res.slice(0,-1)+']';}}function genInlineTemplate(el,state){var ast=el.children[0];if(false){state.warn('Inline-template components must have exactly one child element.');}if(ast.type===1){var inlineRenderFns=generate(ast,state.options);return"inlineTemplate:{render:function(){"+inlineRenderFns.render+"},staticRenderFns:["+inlineRenderFns.staticRenderFns.map(function(code){return"function(){"+code+"}";}).join(',')+"]}";}}function genScopedSlots(slots,state){return"scopedSlots:_u(["+Object.keys(slots).map(function(key){return genScopedSlot(key,slots[key],state);}).join(',')+"])";}function genScopedSlot(key,el,state){if(el.for&&!el.forProcessed){return genForScopedSlot(key,el,state);}var fn="function("+String(el.slotScope)+"){"+"return "+(el.tag==='template'?el.if?el.if+"?"+(genChildren(el,state)||'undefined')+":undefined":genChildren(el,state)||'undefined':genElement(el,state))+"}";return"{key:"+key+",fn:"+fn+"}";}function genForScopedSlot(key,el,state){var exp=el.for;var alias=el.alias;var iterator1=el.iterator1?","+el.iterator1:'';var iterator2=el.iterator2?","+el.iterator2:'';el.forProcessed=true;// avoid recursion
return"_l(("+exp+"),"+"function("+alias+iterator1+iterator2+"){"+"return "+genScopedSlot(key,el,state)+'})';}function genChildren(el,state,checkSkip,altGenElement,altGenNode){var children=el.children;if(children.length){var el$1=children[0];// optimize single v-for
if(children.length===1&&el$1.for&&el$1.tag!=='template'&&el$1.tag!=='slot'){return(altGenElement||genElement)(el$1,state);}var normalizationType=checkSkip?getNormalizationType(children,state.maybeComponent):0;var gen=altGenNode||genNode;return"["+children.map(function(c){return gen(c,state);}).join(',')+"]"+(normalizationType?","+normalizationType:'');}}// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType(children,maybeComponent){var res=0;for(var i=0;i<children.length;i++){var el=children[i];if(el.type!==1){continue;}if(needsNormalization(el)||el.ifConditions&&el.ifConditions.some(function(c){return needsNormalization(c.block);})){res=2;break;}if(maybeComponent(el)||el.ifConditions&&el.ifConditions.some(function(c){return maybeComponent(c.block);})){res=1;}}return res;}function needsNormalization(el){return el.for!==undefined||el.tag==='template'||el.tag==='slot';}function genNode(node,state){if(node.type===1){return genElement(node,state);}if(node.type===3&&node.isComment){return genComment(node);}else{return genText(node);}}function genText(text){return"_v("+(text.type===2?text.expression// no need for () because already wrapped in _s()
:transformSpecialNewlines(JSON.stringify(text.text)))+")";}function genComment(comment){return"_e("+JSON.stringify(comment.text)+")";}function genSlot(el,state){var slotName=el.slotName||'"default"';var children=genChildren(el,state);var res="_t("+slotName+(children?","+children:'');var attrs=el.attrs&&"{"+el.attrs.map(function(a){return camelize(a.name)+":"+a.value;}).join(',')+"}";var bind$$1=el.attrsMap['v-bind'];if((attrs||bind$$1)&&!children){res+=",null";}if(attrs){res+=","+attrs;}if(bind$$1){res+=(attrs?'':',null')+","+bind$$1;}return res+')';}// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent(componentName,el,state){var children=el.inlineTemplate?null:genChildren(el,state,true);return"_c("+componentName+","+genData$2(el,state)+(children?","+children:'')+")";}function genProps(props){var res='';for(var i=0;i<props.length;i++){var prop=props[i];res+="\""+prop.name+"\":"+transformSpecialNewlines(prop.value)+",";}return res.slice(0,-1);}// #3895, #4268
function transformSpecialNewlines(text){return text.replace(/\u2028/g,'\\u2028').replace(/\u2029/g,'\\u2029');}/*  */// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE=new RegExp('\\b'+('do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,'+'super,throw,while,yield,delete,export,import,return,switch,default,'+'extends,finally,continue,debugger,function,arguments').split(',').join('\\b|\\b')+'\\b');// these unary operators should not be used as property/method names
var unaryOperatorsRE=new RegExp('\\b'+'delete,typeof,void'.split(',').join('\\s*\\([^\\)]*\\)|\\b')+'\\s*\\([^\\)]*\\)');// check valid identifier for v-for
var identRE=/[A-Za-z_$][\w$]*/;// strip strings in expressions
var stripStringRE=/'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;// detect problematic expressions in a template
function detectErrors(ast){var errors=[];if(ast){checkNode(ast,errors);}return errors;}function checkNode(node,errors){if(node.type===1){for(var name in node.attrsMap){if(dirRE.test(name)){var value=node.attrsMap[name];if(value){if(name==='v-for'){checkFor(node,"v-for=\""+value+"\"",errors);}else if(onRE.test(name)){checkEvent(value,name+"=\""+value+"\"",errors);}else{checkExpression(value,name+"=\""+value+"\"",errors);}}}}if(node.children){for(var i=0;i<node.children.length;i++){checkNode(node.children[i],errors);}}}else if(node.type===2){checkExpression(node.expression,node.text,errors);}}function checkEvent(exp,text,errors){var stipped=exp.replace(stripStringRE,'');var keywordMatch=stipped.match(unaryOperatorsRE);if(keywordMatch&&stipped.charAt(keywordMatch.index-1)!=='$'){errors.push("avoid using JavaScript unary operator as property name: "+"\""+keywordMatch[0]+"\" in expression "+text.trim());}checkExpression(exp,text,errors);}function checkFor(node,text,errors){checkExpression(node.for||'',text,errors);checkIdentifier(node.alias,'v-for alias',text,errors);checkIdentifier(node.iterator1,'v-for iterator',text,errors);checkIdentifier(node.iterator2,'v-for iterator',text,errors);}function checkIdentifier(ident,type,text,errors){if(typeof ident==='string'&&!identRE.test(ident)){errors.push("invalid "+type+" \""+ident+"\" in expression: "+text.trim());}}function checkExpression(exp,text,errors){try{new Function("return "+exp);}catch(e){var keywordMatch=exp.replace(stripStringRE,'').match(prohibitedKeywordRE);if(keywordMatch){errors.push("avoid using JavaScript keyword as property name: "+"\""+keywordMatch[0]+"\"\n  Raw expression: "+text.trim());}else{errors.push("invalid expression: "+e.message+" in\n\n"+"    "+exp+"\n\n"+"  Raw expression: "+text.trim()+"\n");}}}/*  */function createFunction(code,errors){try{return new Function(code);}catch(err){errors.push({err:err,code:code});return noop;}}function createCompileToFunctionFn(compile){var cache=Object.create(null);return function compileToFunctions(template,options,vm){options=extend({},options);var warn$$1=options.warn||warn;delete options.warn;/* istanbul ignore if */if(false){// detect possible CSP restriction
try{new Function('return 1');}catch(e){if(e.toString().match(/unsafe-eval|CSP/)){warn$$1('It seems you are using the standalone build of Vue.js in an '+'environment with Content Security Policy that prohibits unsafe-eval. '+'The template compiler cannot work in this environment. Consider '+'relaxing the policy to allow unsafe-eval or pre-compiling your '+'templates into render functions.');}}}// check cache
var key=options.delimiters?String(options.delimiters)+template:template;if(cache[key]){return cache[key];}// compile
var compiled=compile(template,options);// check compilation errors/tips
if(false){if(compiled.errors&&compiled.errors.length){warn$$1("Error compiling template:\n\n"+template+"\n\n"+compiled.errors.map(function(e){return"- "+e;}).join('\n')+'\n',vm);}if(compiled.tips&&compiled.tips.length){compiled.tips.forEach(function(msg){return tip(msg,vm);});}}// turn code into functions
var res={};var fnGenErrors=[];res.render=createFunction(compiled.render,fnGenErrors);res.staticRenderFns=compiled.staticRenderFns.map(function(code){return createFunction(code,fnGenErrors);});// check function generation errors.
// this should only happen if there is a bug in the compiler itself.
// mostly for codegen development use
/* istanbul ignore if */if(false){if((!compiled.errors||!compiled.errors.length)&&fnGenErrors.length){warn$$1("Failed to generate render function:\n\n"+fnGenErrors.map(function(ref){var err=ref.err;var code=ref.code;return err.toString()+" in\n\n"+code+"\n";}).join('\n'),vm);}}return cache[key]=res;};}/*  */function createCompilerCreator(baseCompile){return function createCompiler(baseOptions){function compile(template,options){var finalOptions=Object.create(baseOptions);var errors=[];var tips=[];finalOptions.warn=function(msg,tip){(tip?tips:errors).push(msg);};if(options){// merge custom modules
if(options.modules){finalOptions.modules=(baseOptions.modules||[]).concat(options.modules);}// merge custom directives
if(options.directives){finalOptions.directives=extend(Object.create(baseOptions.directives),options.directives);}// copy other options
for(var key in options){if(key!=='modules'&&key!=='directives'){finalOptions[key]=options[key];}}}var compiled=baseCompile(template,finalOptions);if(false){errors.push.apply(errors,detectErrors(compiled.ast));}compiled.errors=errors;compiled.tips=tips;return compiled;}return{compile:compile,compileToFunctions:createCompileToFunctionFn(compile)};};}/*  */// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler=createCompilerCreator(function baseCompile(template,options){var ast=parse(template.trim(),options);optimize(ast,options);var code=generate(ast,options);return{ast:ast,render:code.render,staticRenderFns:code.staticRenderFns};});/*  */var ref$1=createCompiler(baseOptions);var compileToFunctions=ref$1.compileToFunctions;/*  */var idToTemplate=cached(function(id){var el=query(id);return el&&el.innerHTML;});var mount=Vue$3.prototype.$mount;Vue$3.prototype.$mount=function(el,hydrating){el=el&&query(el);/* istanbul ignore if */if(el===document.body||el===document.documentElement){"production"!=='production'&&warn("Do not mount Vue to <html> or <body> - mount to normal elements instead.");return this;}var options=this.$options;// resolve template/el and convert to render function
if(!options.render){var template=options.template;if(template){if(typeof template==='string'){if(template.charAt(0)==='#'){template=idToTemplate(template);/* istanbul ignore if */if(false){warn("Template element not found or is empty: "+options.template,this);}}}else if(template.nodeType){template=template.innerHTML;}else{if(false){warn('invalid template option:'+template,this);}return this;}}else if(el){template=getOuterHTML(el);}if(template){/* istanbul ignore if */if(false){mark('compile');}var ref=compileToFunctions(template,{shouldDecodeNewlines:shouldDecodeNewlines,delimiters:options.delimiters,comments:options.comments},this);var render=ref.render;var staticRenderFns=ref.staticRenderFns;options.render=render;options.staticRenderFns=staticRenderFns;/* istanbul ignore if */if(false){mark('compile end');measure("vue "+this._name+" compile",'compile','compile end');}}}return mount.call(this,el,hydrating);};/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */function getOuterHTML(el){if(el.outerHTML){return el.outerHTML;}else{var container=document.createElement('div');container.appendChild(el.cloneNode(true));return container.innerHTML;}}Vue$3.compile=compileToFunctions;/* harmony default export */__webpack_exports__["a"]=Vue$3;/* WEBPACK VAR INJECTION */}).call(__webpack_exports__,__webpack_require__(27),__webpack_require__(108).setImmediate);/***/},/* 42 *//***/function(module,exports){/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}module.exports=isLength;/***/},/* 43 *//***/function(module,exports,__webpack_require__){var isPrototype=__webpack_require__(31),nativeKeys=__webpack_require__(131);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}module.exports=baseKeys;/***/},/* 44 *//***/function(module,exports,__webpack_require__){var baseGetTag=__webpack_require__(12),isObject=__webpack_require__(2);/** `Object#toString` result references. */var asyncTag='[object AsyncFunction]',funcTag='[object Function]',genTag='[object GeneratorFunction]',proxyTag='[object Proxy]';/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(value){if(!isObject(value)){return false;}// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var tag=baseGetTag(value);return tag==funcTag||tag==genTag||tag==asyncTag||tag==proxyTag;}module.exports=isFunction;/***/},/* 45 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(13),root=__webpack_require__(7);/* Built-in method references that are verified to be native. */var Map=getNative(root,'Map');module.exports=Map;/***/},/* 46 *//***/function(module,exports,__webpack_require__){var mapCacheClear=__webpack_require__(151),mapCacheDelete=__webpack_require__(158),mapCacheGet=__webpack_require__(160),mapCacheHas=__webpack_require__(161),mapCacheSet=__webpack_require__(162);/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;module.exports=MapCache;/***/},/* 47 *//***/function(module,exports,__webpack_require__){var baseIsEqualDeep=__webpack_require__(163),isObjectLike=__webpack_require__(9);/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */function baseIsEqual(value,other,bitmask,customizer,stack){if(value===other){return true;}if(value==null||other==null||!isObjectLike(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}module.exports=baseIsEqual;/***/},/* 48 *//***/function(module,exports){/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}module.exports=arrayPush;/***/},/* 49 *//***/function(module,exports,__webpack_require__){var arrayFilter=__webpack_require__(67),stubArray=__webpack_require__(75);/** Used for built-in method references. */var objectProto=Object.prototype;/** Built-in value references. */var propertyIsEnumerable=objectProto.propertyIsEnumerable;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols;/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbols=!nativeGetSymbols?stubArray:function(object){if(object==null){return[];}object=Object(object);return arrayFilter(nativeGetSymbols(object),function(symbol){return propertyIsEnumerable.call(object,symbol);});};module.exports=getSymbols;/***/},/* 50 *//***/function(module,exports,__webpack_require__){var isArray=__webpack_require__(1),isSymbol=__webpack_require__(16);/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value==='undefined'?'undefined':_typeof(value);if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}module.exports=isKey;/***/},/* 51 *//***/function(module,exports){/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array==null?0:array.length;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}module.exports=arrayReduce;/***/},/* 52 *//***/function(module,exports,__webpack_require__){var defineProperty=__webpack_require__(84);/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function baseAssignValue(object,key,value){if(key=='__proto__'&&defineProperty){defineProperty(object,key,{'configurable':true,'enumerable':true,'value':value,'writable':true});}else{object[key]=value;}}module.exports=baseAssignValue;/***/},/* 53 *//***/function(module,exports,__webpack_require__){var Uint8Array=__webpack_require__(70);/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}module.exports=cloneArrayBuffer;/***/},/* 54 *//***/function(module,exports,__webpack_require__){var overArg=__webpack_require__(66);/** Built-in value references. */var getPrototype=overArg(Object.getPrototypeOf,Object);module.exports=getPrototype;/***/},/* 55 *//***/function(module,exports,__webpack_require__){var baseAssignValue=__webpack_require__(52),eq=__webpack_require__(24);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}module.exports=assignValue;/***/},/* 56 *//***/function(module,exports,__webpack_require__){var eq=__webpack_require__(24),isArrayLike=__webpack_require__(10),isIndex=__webpack_require__(21),isObject=__webpack_require__(2);/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=typeof index==='undefined'?'undefined':_typeof(index);if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}module.exports=isIterateeCall;/***/},/* 57 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony default export */__webpack_exports__["a"]={methods:{__runAjax:function __runAjax(uri){var data=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var method=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'get';var dataType=arguments.length>3&&arguments[3]!==undefined?arguments[3]:'json';var csrfObject={};csrfObject[LS.data.csrfTokenName]=LS.data.csrfToken;var sendData=$.merge(data,csrfObject);return new Promise(function(resolve,reject){if($==undefined){reject('JQUERY NOT AVAILABLE!');}$.ajax({url:uri,method:method||'get',data:sendData,dataType:dataType,success:function success(response,status,xhr){resolve({success:true,data:response,transferStatus:status,xhr:xhr});},error:function error(xhr,status,_error){reject({success:false,error:_error,transferStatus:status,xhr:xhr});}});});},$_post:function $_post(uri,data){return this.__runAjax(uri,data,'post');},$_get:function $_get(uri,data){return this.__runAjax(uri,data,'get');},$_load:function $_load(uri,data){var method=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'get';return this.__runAjax(uri,data,method,"html");},$_delete:function $_delete(uri,data){return this.__runAjax(uri,data,'delete');},$_put:function $_put(uri,data){return this.__runAjax(uri,data,'put');}}};/***/},/* 58 *//***/function(module,exports,__webpack_require__){var baseIteratee=__webpack_require__(23),basePullAt=__webpack_require__(260);/**
 * Removes all elements from `array` that `predicate` returns truthy for
 * and returns an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 *
 * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
 * to pull elements from an array by value.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = [1, 2, 3, 4];
 * var evens = _.remove(array, function(n) {
 *   return n % 2 == 0;
 * });
 *
 * console.log(array);
 * // => [1, 3]
 *
 * console.log(evens);
 * // => [2, 4]
 */function remove(array,predicate){var result=[];if(!(array&&array.length)){return result;}var index=-1,indexes=[],length=array.length;predicate=baseIteratee(predicate,3);while(++index<length){var value=array[index];if(predicate(value,index,array)){result.push(value);indexes.push(index);}}basePullAt(array,indexes);return result;}module.exports=remove;/***/},/* 59 *//***/function(module,exports,__webpack_require__){var toFinite=__webpack_require__(265);/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}module.exports=toInteger;/***/},/* 60 *//***/function(module,exports){// shim for using process in browser
var process=module.exports={};// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;var cachedClearTimeout;function defaultSetTimout(){throw new Error('setTimeout has not been defined');}function defaultClearTimeout(){throw new Error('clearTimeout has not been defined');}(function(){try{if(typeof setTimeout==='function'){cachedSetTimeout=setTimeout;}else{cachedSetTimeout=defaultSetTimout;}}catch(e){cachedSetTimeout=defaultSetTimout;}try{if(typeof clearTimeout==='function'){cachedClearTimeout=clearTimeout;}else{cachedClearTimeout=defaultClearTimeout;}}catch(e){cachedClearTimeout=defaultClearTimeout;}})();function runTimeout(fun){if(cachedSetTimeout===setTimeout){//normal enviroments in sane situations
return setTimeout(fun,0);}// if setTimeout wasn't available but was latter defined
if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout){cachedSetTimeout=setTimeout;return setTimeout(fun,0);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun,0);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null,fun,0);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this,fun,0);}}}function runClearTimeout(marker){if(cachedClearTimeout===clearTimeout){//normal enviroments in sane situations
return clearTimeout(marker);}// if clearTimeout wasn't available but was latter defined
if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout){cachedClearTimeout=clearTimeout;return clearTimeout(marker);}try{// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null,marker);}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this,marker);}}}var queue=[];var draining=false;var currentQueue;var queueIndex=-1;function cleanUpNextTick(){if(!draining||!currentQueue){return;}draining=false;if(currentQueue.length){queue=currentQueue.concat(queue);}else{queueIndex=-1;}if(queue.length){drainQueue();}}function drainQueue(){if(draining){return;}var timeout=runTimeout(cleanUpNextTick);draining=true;var len=queue.length;while(len){currentQueue=queue;queue=[];while(++queueIndex<len){if(currentQueue){currentQueue[queueIndex].run();}}queueIndex=-1;len=queue.length;}currentQueue=null;draining=false;runClearTimeout(timeout);}process.nextTick=function(fun){var args=new Array(arguments.length-1);if(arguments.length>1){for(var i=1;i<arguments.length;i++){args[i-1]=arguments[i];}}queue.push(new Item(fun,args));if(queue.length===1&&!draining){runTimeout(drainQueue);}};// v8 likes predictible objects
function Item(fun,array){this.fun=fun;this.array=array;}Item.prototype.run=function(){this.fun.apply(null,this.array);};process.title='browser';process.browser=true;process.env={};process.argv=[];process.version='';// empty string to avoid regexp issues
process.versions={};function noop(){}process.on=noop;process.addListener=noop;process.once=noop;process.off=noop;process.removeListener=noop;process.removeAllListeners=noop;process.emit=noop;process.prependListener=noop;process.prependOnceListener=noop;process.listeners=function(name){return[];};process.binding=function(name){throw new Error('process.binding is not supported');};process.cwd=function(){return'/';};process.chdir=function(dir){throw new Error('process.chdir is not supported');};process.umask=function(){return 0;};/***/},/* 61 *//***/function(module,exports){/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */function arrayEach(array,iteratee){var index=-1,length=array==null?0:array.length;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}module.exports=arrayEach;/***/},/* 62 *//***/function(module,exports,__webpack_require__){var createBaseFor=__webpack_require__(123);/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */var baseFor=createBaseFor();module.exports=baseFor;/***/},/* 63 *//***/function(module,exports,__webpack_require__){var baseTimes=__webpack_require__(124),isArguments=__webpack_require__(19),isArray=__webpack_require__(1),isBuffer=__webpack_require__(20),isIndex=__webpack_require__(21),isTypedArray=__webpack_require__(30);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){var isArr=isArray(value),isArg=!isArr&&isArguments(value),isBuff=!isArr&&!isArg&&isBuffer(value),isType=!isArr&&!isArg&&!isBuff&&isTypedArray(value),skipIndexes=isArr||isArg||isBuff||isType,result=skipIndexes?baseTimes(value.length,String):[],length=result.length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(// Safari 9 has enumerable `arguments.length` in strict mode.
key=='length'||// Node.js 0.10 has enumerable non-index properties on buffers.
isBuff&&(key=='offset'||key=='parent')||// PhantomJS 2 has enumerable non-index properties on typed arrays.
isType&&(key=='buffer'||key=='byteLength'||key=='byteOffset')||// Skip index properties.
isIndex(key,length)))){result.push(key);}}return result;}module.exports=arrayLikeKeys;/***/},/* 64 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(global){/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==='undefined'?'undefined':_typeof(global))=='object'&&global&&global.Object===Object&&global;module.exports=freeGlobal;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(27));/***/},/* 65 *//***/function(module,exports){/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(func){return function(value){return func(value);};}module.exports=baseUnary;/***/},/* 66 *//***/function(module,exports){/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}module.exports=overArg;/***/},/* 67 *//***/function(module,exports){/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function arrayFilter(array,predicate){var index=-1,length=array==null?0:array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}module.exports=arrayFilter;/***/},/* 68 *//***/function(module,exports){/** Used for built-in method references. */var funcProto=Function.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}module.exports=toSource;/***/},/* 69 *//***/function(module,exports,__webpack_require__){var SetCache=__webpack_require__(164),arraySome=__webpack_require__(167),cacheHas=__webpack_require__(168);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Assume cyclic values are equal.
var stacked=stack.get(array);if(stacked&&stack.get(other)){return stacked==other;}var index=-1,result=true,seen=bitmask&COMPARE_UNORDERED_FLAG?new SetCache():undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
if(seen){if(!arraySome(other,function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){return seen.push(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}module.exports=equalArrays;/***/},/* 70 *//***/function(module,exports,__webpack_require__){var root=__webpack_require__(7);/** Built-in value references. */var Uint8Array=root.Uint8Array;module.exports=Uint8Array;/***/},/* 71 *//***/function(module,exports){/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}module.exports=mapToArray;/***/},/* 72 *//***/function(module,exports){/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}module.exports=setToArray;/***/},/* 73 *//***/function(module,exports,__webpack_require__){var baseGetAllKeys=__webpack_require__(74),getSymbols=__webpack_require__(49),keys=__webpack_require__(6);/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}module.exports=getAllKeys;/***/},/* 74 *//***/function(module,exports,__webpack_require__){var arrayPush=__webpack_require__(48),isArray=__webpack_require__(1);/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}module.exports=baseGetAllKeys;/***/},/* 75 *//***/function(module,exports){/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[];}module.exports=stubArray;/***/},/* 76 *//***/function(module,exports,__webpack_require__){var isObject=__webpack_require__(2);/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */function isStrictComparable(value){return value===value&&!isObject(value);}module.exports=isStrictComparable;/***/},/* 77 *//***/function(module,exports){/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}module.exports=matchesStrictComparable;/***/},/* 78 *//***/function(module,exports){/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function arrayMap(array,iteratee){var index=-1,length=array==null?0:array.length,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}module.exports=arrayMap;/***/},/* 79 *//***/function(module,exports,__webpack_require__){var baseHasIn=__webpack_require__(183),hasPath=__webpack_require__(184);/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}module.exports=hasIn;/***/},/* 80 *//***/function(module,exports){/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}module.exports=baseProperty;/***/},/* 81 *//***/function(module,exports,__webpack_require__){/*!
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
/***/},/* 82 *//***/function(module,exports,__webpack_require__){var isObject=__webpack_require__(2),isSymbol=__webpack_require__(16);/** Used as references for various `Number` constants. */var NAN=0/0;/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Built-in method references without a dependency on `root`. */var freeParseInt=parseInt;/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}module.exports=toNumber;/***/},/* 83 *//***/function(module,exports,__webpack_require__){var baseAssignValue=__webpack_require__(52),eq=__webpack_require__(24);/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignMergeValue(object,key,value){if(value!==undefined&&!eq(object[key],value)||value===undefined&&!(key in object)){baseAssignValue(object,key,value);}}module.exports=assignMergeValue;/***/},/* 84 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(13);var defineProperty=function(){try{var func=getNative(Object,'defineProperty');func({},'',{});return func;}catch(e){}}();module.exports=defineProperty;/***/},/* 85 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var root=__webpack_require__(7);/** Detect free variable `exports`. */var freeExports=(typeof exports==='undefined'?'undefined':_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&(typeof module==='undefined'?'undefined':_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined,allocUnsafe=Buffer?Buffer.allocUnsafe:undefined;/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var length=buffer.length,result=allocUnsafe?allocUnsafe(length):new buffer.constructor(length);buffer.copy(result);return result;}module.exports=cloneBuffer;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(29)(module));/***/},/* 86 *//***/function(module,exports,__webpack_require__){var cloneArrayBuffer=__webpack_require__(53);/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}module.exports=cloneTypedArray;/***/},/* 87 *//***/function(module,exports){/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}module.exports=copyArray;/***/},/* 88 *//***/function(module,exports,__webpack_require__){var baseCreate=__webpack_require__(198),getPrototype=__webpack_require__(54),isPrototype=__webpack_require__(31);/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}module.exports=initCloneObject;/***/},/* 89 *//***/function(module,exports,__webpack_require__){var identity=__webpack_require__(15),overRest=__webpack_require__(90),setToString=__webpack_require__(91);/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */function baseRest(func,start){return setToString(overRest(func,start,identity),func+'');}module.exports=baseRest;/***/},/* 90 *//***/function(module,exports,__webpack_require__){var apply=__webpack_require__(205);/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max;/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */function overRest(func,start,transform){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=transform(array);return apply(func,this,otherArgs);};}module.exports=overRest;/***/},/* 91 *//***/function(module,exports,__webpack_require__){var baseSetToString=__webpack_require__(206),shortOut=__webpack_require__(208);/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */var setToString=shortOut(baseSetToString);module.exports=setToString;/***/},/* 92 *//***/function(module,exports,__webpack_require__){var Component=__webpack_require__(0)(/* script */__webpack_require__(219),/* template */__webpack_require__(221),/* styles */null,/* scopeId */null,/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 93 *//***/function(module,exports,__webpack_require__){var Component=__webpack_require__(0)(/* script */__webpack_require__(222),/* template */__webpack_require__(223),/* styles */null,/* scopeId */null,/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 94 *//***/function(module,exports,__webpack_require__){var Component=__webpack_require__(0)(/* script */__webpack_require__(224),/* template */__webpack_require__(225),/* styles */null,/* scopeId */null,/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 95 *//***/function(module,exports,__webpack_require__){var Component=__webpack_require__(0)(/* script */__webpack_require__(226),/* template */__webpack_require__(227),/* styles */null,/* scopeId */null,/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 96 *//***/function(module,exports,__webpack_require__){var Component=__webpack_require__(0)(/* script */__webpack_require__(228),/* template */__webpack_require__(229),/* styles */null,/* scopeId */null,/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 97 *//***/function(module,exports,__webpack_require__){function injectStyle(ssrContext){__webpack_require__(230);}var Component=__webpack_require__(0)(/* script */__webpack_require__(232),/* template */__webpack_require__(233),/* styles */injectStyle,/* scopeId */null,/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 98 *//***/function(module,exports,__webpack_require__){var arrayPush=__webpack_require__(48),isFlattenable=__webpack_require__(244);/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){// Recursively flatten arrays (susceptible to call stack limits).
baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}module.exports=baseFlatten;/***/},/* 99 *//***/function(module,exports,__webpack_require__){var baseExtremum=__webpack_require__(258),baseGt=__webpack_require__(259),identity=__webpack_require__(15);/**
 * Computes the maximum value of `array`. If `array` is empty or falsey,
 * `undefined` is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Math
 * @param {Array} array The array to iterate over.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => undefined
 */function max(array){return array&&array.length?baseExtremum(array,identity,baseGt):undefined;}module.exports=max;/***/},/* 100 *//***/function(module,exports){/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:length+start;}end=end>length?length:end;if(end<0){end+=length;}length=start>end?0:end-start>>>0;start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];}return result;}module.exports=baseSlice;/***/},/* 101 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_max__=__webpack_require__(99);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_max___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_max__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_keys__=__webpack_require__(6);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_keys___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_keys__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_merge__=__webpack_require__(11);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_merge__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_remove__=__webpack_require__(58);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_remove___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_remove__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4_lodash_reduce__=__webpack_require__(39);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4_lodash_reduce___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_reduce__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5_lodash_foreach__=__webpack_require__(8);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5_lodash_foreach___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_foreach__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_6_lodash_findIndex__=__webpack_require__(264);/* harmony import */var __WEBPACK_IMPORTED_MODULE_6_lodash_findIndex___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_findIndex__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_7_lodash_isArrayLike__=__webpack_require__(10);/* harmony import */var __WEBPACK_IMPORTED_MODULE_7_lodash_isArrayLike___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_isArrayLike__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_8_lodash_isObjectLike__=__webpack_require__(9);/* harmony import */var __WEBPACK_IMPORTED_MODULE_8_lodash_isObjectLike___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_isObjectLike__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_9__helperComponents_QuickEdit_vue__=__webpack_require__(266);/* harmony import */var __WEBPACK_IMPORTED_MODULE_9__helperComponents_QuickEdit_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__helperComponents_QuickEdit_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_10__helperComponents_SimplePopUpEditor_vue__=__webpack_require__(271);/* harmony import */var __WEBPACK_IMPORTED_MODULE_10__helperComponents_SimplePopUpEditor_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__helperComponents_SimplePopUpEditor_vue__);/* harmony default export */__webpack_exports__["a"]={components:{QuickEdit:__WEBPACK_IMPORTED_MODULE_9__helperComponents_QuickEdit_vue___default.a,SimplePopUpEditor:__WEBPACK_IMPORTED_MODULE_10__helperComponents_SimplePopUpEditor_vue___default.a},props:{readonly:{type:Boolean,default:false}},methods:{getLength:function getLength(arrayOrObject){if(__WEBPACK_IMPORTED_MODULE_7_lodash_isArrayLike___default()(arrayOrObject)){return arrayOrObject.length;}if(__WEBPACK_IMPORTED_MODULE_8_lodash_isObjectLike___default()(arrayOrObject)){return __WEBPACK_IMPORTED_MODULE_1_lodash_keys___default()(arrayOrObject).length;}return 0;},getNewTitleFromCurrent:function getNewTitleFromCurrent(scaleId){var nonNumericPart=this.baseNonNumericPart;if(this.getLength(this.currentDataSet[scaleId])>0){nonNumericPart=(this.currentDataSet[scaleId][0].title||this.currentDataSet[scaleId][0].code).replace(/[0-9]/g,'');}var numericPart=__WEBPACK_IMPORTED_MODULE_4_lodash_reduce___default()(this.currentDataSet[scaleId],function(prev,oDataSet){return __WEBPACK_IMPORTED_MODULE_0_lodash_max___default()([prev,parseInt((oDataSet.title||oDataSet.code).replace(/[^0-9]/g,''))]);},0)+1;this.$log.log('NewTitle',{nonNumericPart:nonNumericPart,numericPart:numericPart});return nonNumericPart+''+numericPart;},getRandomId:function getRandomId(){return'random'+Math.random().toString(36).substr(2,7);},deleteThisDataSet:function deleteThisDataSet(oDataSet,scaleId){var _this310=this;var tmpArray=__WEBPACK_IMPORTED_MODULE_2_lodash_merge___default()([],this.currentDataSet);tmpArray[scaleId]=__WEBPACK_IMPORTED_MODULE_3_lodash_remove___default()(tmpArray[scaleId],function(oDataSetIterator){return oDataSetIterator[_this310.uniqueSelector]!=oDataSet[_this310.uniqueSelector];});this.currentDataSet=tmpArray;},duplicateThisDataSet:function duplicateThisDataSet(oDataSet,scaleId){},addDataSet:function addDataSet(scaleId){var tmpArray=__WEBPACK_IMPORTED_MODULE_2_lodash_merge___default()([],this.currentDataSet);tmpArray[scaleId]=tmpArray[scaleId]||new Array();tmpArray[scaleId].push(this.getTemplate(scaleId));this.currentDataSet=tmpArray;},openLabelSets:function openLabelSets(){},openQuickAdd:function openQuickAdd(){this.$modal.show(__WEBPACK_IMPORTED_MODULE_9__helperComponents_QuickEdit_vue___default.a,{current:this.currentDataSet,type:this.type,typedef:this.typeDefininition,typekey:this.typeDefininitionKey},{width:'75%',height:'75%',scrollable:true,resizable:true});},openPopUpEditor:function openPopUpEditor(dataSetObject,scaleId){var _this311=this;this.$modal.show(__WEBPACK_IMPORTED_MODULE_10__helperComponents_SimplePopUpEditor_vue___default.a,{target:this.type,dataSetObject:dataSetObject,typeDef:this.typeDefininition,typeDefKey:this.typeDefininitionKey},{width:'75%',height:'75%',scrollable:true,resizable:true},{'closed':function closed(event,payload){_this311.$log.log('MODAL CLOSED',event,payload);if(event.save==true){dataSetObject[_this311.$store.state.activeLanguage][_this311.typeDefininition]=event.value;}},'change':function change(event,payload){_this311.$log.log('CHANGE IN MODAL',event,payload);if(event.save==true){dataSetObject[_this311.$store.state.activeLanguage][_this311.typeDefininition]=event.value;}}});},saveAsLabelSet:function saveAsLabelSet(){},switchinput:function switchinput(newTarget){var $event=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;if(newTarget==false){this.$log.log($event);return;}$('#'+newTarget).focus();},replaceFromQuickAdd:function replaceFromQuickAdd(contents){var _this312=this;this.$log.log('replaceFromQuickAdd triggered on: '+this.$options.name,contents);var tempObject=__WEBPACK_IMPORTED_MODULE_2_lodash_merge___default()({},this.currentDataSet);__WEBPACK_IMPORTED_MODULE_5_lodash_foreach___default()(contents,function(scaleObject,scale){tempObject[scale]=[];__WEBPACK_IMPORTED_MODULE_5_lodash_foreach___default()(scaleObject,function(lngSet,key){var newDataSetBlock=_this312.getTemplate(scale);newDataSetBlock[_this312.typeDefininitionKey]=key;__WEBPACK_IMPORTED_MODULE_5_lodash_foreach___default()(lngSet,function(dataSetValue,lngKey){newDataSetBlock[lngKey][_this312.typeDefininition]=dataSetValue;});tempObject[scale].push(newDataSetBlock);});});this.currentDataSet=tempObject;},addToFromQuickAdd:function addToFromQuickAdd(contents){var _this313=this;this.$log.log('addToFromQuickAdd triggered on: '+this.$options.name,contents);var tempObject=__WEBPACK_IMPORTED_MODULE_2_lodash_merge___default()({},this.currentDataSet);__WEBPACK_IMPORTED_MODULE_5_lodash_foreach___default()(contents,function(scaleObject,scale){__WEBPACK_IMPORTED_MODULE_5_lodash_foreach___default()(scaleObject,function(lngSet,key){var newDataSetBlock=_this313.getTemplate(scale);newDataSetBlock[_this313.typeDefininitionKey]=key;__WEBPACK_IMPORTED_MODULE_5_lodash_foreach___default()(lngSet,function(dataSetValue,lngKey){newDataSetBlock[lngKey][_this313.typeDefininition]=dataSetValue;});tempObject[scale].push(newDataSetBlock);});});this.currentDataSet=tempObject;},editFromSimplePopupEditor:function editFromSimplePopupEditor(contents){var _this314=this;this.$log.log('Event editFromSimplePopupEditor',contents);var tempFullObject=__WEBPACK_IMPORTED_MODULE_2_lodash_merge___default()({},this.currentDataSet);var identifier=__WEBPACK_IMPORTED_MODULE_6_lodash_findIndex___default()(tempFullObject[contents.scale_id],function(dataSetObject,i){return dataSetObject[_this314.typeDefininitionKey]===contents[_this314.typeDefininitionKey];});tempFullObject[contents.scale_id][identifier]=contents;this.$log.log('Event editFromSimplePopupEditor result',{identifier:identifier,tempFullObject:tempFullObject});this.currentDataSet=tempFullObject;}}};/***/},/* 102 *//***/function(module,exports){/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return-1;}module.exports=baseFindIndex;/***/},/* 103 *//***/function(module,exports,__webpack_require__){var baseSlice=__webpack_require__(100),isIterateeCall=__webpack_require__(56),toInteger=__webpack_require__(59);/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 *
 * **Note:** This method is used instead of
 * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
 * returned.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */function slice(array,start,end){var length=array==null?0:array.length;if(!length){return[];}if(end&&typeof end!='number'&&isIterateeCall(array,start,end)){start=0;end=length;}else{start=start==null?0:toInteger(start);end=end===undefined?length:toInteger(end);}return baseSlice(array,start,end);}module.exports=slice;/***/},/* 104 *//***/function(module,exports,__webpack_require__){var arrayPush=__webpack_require__(48),getPrototype=__webpack_require__(54),getSymbols=__webpack_require__(49),stubArray=__webpack_require__(75);/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols;/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}return result;};module.exports=getSymbolsIn;/***/},/* 105 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"b",function(){return PluginLog;});/* harmony export (binding) */__webpack_require__.d(__webpack_exports__,"a",function(){return LOG;});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__lib_ConsoleShim_js__=__webpack_require__(329);/* eslint-disable no-alert, no-console *//**
 * Check the browsers console capabilities and bundle them into general functions
 * If the build environment was "production" only put out error messages.
 */var LOG=new __WEBPACK_IMPORTED_MODULE_0__lib_ConsoleShim_js__["a"/* default */]('QUESTIONEDIT');var PluginLog=function PluginLog(Vue){if(window.debugState.backend){Vue.prototype.$log=LOG;}else{Vue.prototype.$log=console.ls.silent;}};/***/},/* 106 *//***/function(module,exports,__webpack_require__){module.exports=__webpack_require__(107);/***/},/* 107 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_vue__=__webpack_require__(41);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_vue__=__webpack_require__(110);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_vue_js_modal__=__webpack_require__(111);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_vue_js_modal___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_js_modal__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__App_vue__=__webpack_require__(112);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__App_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__storage_store__=__webpack_require__(302);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__mixins_logSystem__=__webpack_require__(105);// import CKEditor from '@ckeditor/ckeditor5-vue';
//Ignore phpunits testing tags
__WEBPACK_IMPORTED_MODULE_0_vue__["a"/* default */].config.ignoredElements=["x-test"];__WEBPACK_IMPORTED_MODULE_0_vue__["a"/* default */].use(__WEBPACK_IMPORTED_MODULE_5__mixins_logSystem__["b"/* PluginLog */]);__WEBPACK_IMPORTED_MODULE_0_vue__["a"/* default */].use(__WEBPACK_IMPORTED_MODULE_1__ckeditor_ckeditor5_vue___default.a);__WEBPACK_IMPORTED_MODULE_0_vue__["a"/* default */].use(__WEBPACK_IMPORTED_MODULE_2_vue_js_modal___default.a,{dynamic:true});__WEBPACK_IMPORTED_MODULE_0_vue__["a"/* default */].mixin({methods:{toggleLoading:function toggleLoading(){var forceState=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(forceState!==null){if(forceState){$('#questionEditLoader').fadeIn(200);}else{$('#questionEditLoader').fadeOut(400);}return;}if($('#questionEditLoader').css('display')=='none'){$('#questionEditLoader').fadeIn(200);return;}$('#questionEditLoader').fadeOut(400);},translate:function translate(value){return window.QuestionEditData.i10N[value]||value;}},filters:{translate:function translate(value){return window.QuestionEditData.i10N[value]||value;}}});var AppState=Object(__WEBPACK_IMPORTED_MODULE_4__storage_store__["a"/* default */])(window.QuestionEditData.qid);var questionEditor=new __WEBPACK_IMPORTED_MODULE_0_vue__["a"/* default */]({el:'#advancedQuestionEditor',store:AppState,components:{App:__WEBPACK_IMPORTED_MODULE_3__App_vue___default.a}});/***/},/* 108 *//***/function(module,exports,__webpack_require__){var apply=Function.prototype.apply;// DOM APIs, for completeness
exports.setTimeout=function(){return new Timeout(apply.call(setTimeout,window,arguments),clearTimeout);};exports.setInterval=function(){return new Timeout(apply.call(setInterval,window,arguments),clearInterval);};exports.clearTimeout=exports.clearInterval=function(timeout){if(timeout){timeout.close();}};function Timeout(id,clearFn){this._id=id;this._clearFn=clearFn;}Timeout.prototype.unref=Timeout.prototype.ref=function(){};Timeout.prototype.close=function(){this._clearFn.call(window,this._id);};// Does not start the time, just sets up the members needed.
exports.enroll=function(item,msecs){clearTimeout(item._idleTimeoutId);item._idleTimeout=msecs;};exports.unenroll=function(item){clearTimeout(item._idleTimeoutId);item._idleTimeout=-1;};exports._unrefActive=exports.active=function(item){clearTimeout(item._idleTimeoutId);var msecs=item._idleTimeout;if(msecs>=0){item._idleTimeoutId=setTimeout(function onTimeout(){if(item._onTimeout)item._onTimeout();},msecs);}};// setimmediate attaches itself to the global object
__webpack_require__(109);exports.setImmediate=setImmediate;exports.clearImmediate=clearImmediate;/***/},/* 109 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(global,process){(function(global,undefined){"use strict";if(global.setImmediate){return;}var nextHandle=1;// Spec says greater than zero
var tasksByHandle={};var currentlyRunningATask=false;var doc=global.document;var registerImmediate;function setImmediate(callback){// Callback can either be a function or a string
if(typeof callback!=="function"){callback=new Function(""+callback);}// Copy function arguments
var args=new Array(arguments.length-1);for(var i=0;i<args.length;i++){args[i]=arguments[i+1];}// Store and register the task
var task={callback:callback,args:args};tasksByHandle[nextHandle]=task;registerImmediate(nextHandle);return nextHandle++;}function clearImmediate(handle){delete tasksByHandle[handle];}function run(task){var callback=task.callback;var args=task.args;switch(args.length){case 0:callback();break;case 1:callback(args[0]);break;case 2:callback(args[0],args[1]);break;case 3:callback(args[0],args[1],args[2]);break;default:callback.apply(undefined,args);break;}}function runIfPresent(handle){// From the spec: "Wait until any invocations of this algorithm started before this one have completed."
// So if we're currently running a task, we'll need to delay this invocation.
if(currentlyRunningATask){// Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
// "too much recursion" error.
setTimeout(runIfPresent,0,handle);}else{var task=tasksByHandle[handle];if(task){currentlyRunningATask=true;try{run(task);}finally{clearImmediate(handle);currentlyRunningATask=false;}}}}function installNextTickImplementation(){registerImmediate=function registerImmediate(handle){process.nextTick(function(){runIfPresent(handle);});};}function canUsePostMessage(){// The test against `importScripts` prevents this implementation from being installed inside a web worker,
// where `global.postMessage` means something completely different and can't be used for this purpose.
if(global.postMessage&&!global.importScripts){var postMessageIsAsynchronous=true;var oldOnMessage=global.onmessage;global.onmessage=function(){postMessageIsAsynchronous=false;};global.postMessage("","*");global.onmessage=oldOnMessage;return postMessageIsAsynchronous;}}function installPostMessageImplementation(){// Installs an event handler on `global` for the `message` event: see
// * https://developer.mozilla.org/en/DOM/window.postMessage
// * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
var messagePrefix="setImmediate$"+Math.random()+"$";var onGlobalMessage=function onGlobalMessage(event){if(event.source===global&&typeof event.data==="string"&&event.data.indexOf(messagePrefix)===0){runIfPresent(+event.data.slice(messagePrefix.length));}};if(global.addEventListener){global.addEventListener("message",onGlobalMessage,false);}else{global.attachEvent("onmessage",onGlobalMessage);}registerImmediate=function registerImmediate(handle){global.postMessage(messagePrefix+handle,"*");};}function installMessageChannelImplementation(){var channel=new MessageChannel();channel.port1.onmessage=function(event){var handle=event.data;runIfPresent(handle);};registerImmediate=function registerImmediate(handle){channel.port2.postMessage(handle);};}function installReadyStateChangeImplementation(){var html=doc.documentElement;registerImmediate=function registerImmediate(handle){// Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
// into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
var script=doc.createElement("script");script.onreadystatechange=function(){runIfPresent(handle);script.onreadystatechange=null;html.removeChild(script);script=null;};html.appendChild(script);};}function installSetTimeoutImplementation(){registerImmediate=function registerImmediate(handle){setTimeout(runIfPresent,0,handle);};}// If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
var attachTo=Object.getPrototypeOf&&Object.getPrototypeOf(global);attachTo=attachTo&&attachTo.setTimeout?attachTo:global;// Don't get fooled by e.g. browserify environments.
if({}.toString.call(global.process)==="[object process]"){// For Node.js before 0.9
installNextTickImplementation();}else if(canUsePostMessage()){// For non-IE10 modern browsers
installPostMessageImplementation();}else if(global.MessageChannel){// For web workers, where supported
installMessageChannelImplementation();}else if(doc&&"onreadystatechange"in doc.createElement("script")){// For IE 6–8
installReadyStateChangeImplementation();}else{// For older browsers
installSetTimeoutImplementation();}attachTo.setImmediate=setImmediate;attachTo.clearImmediate=clearImmediate;})(typeof self==="undefined"?typeof global==="undefined"?this:global:self);/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(27),__webpack_require__(60));/***/},/* 110 *//***/function(module,exports,__webpack_require__){/*!
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */!function(t,e){true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==(typeof exports==='undefined'?'undefined':_typeof(exports))?exports.CKEditor=e():t.CKEditor=e();}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports;}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i});},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==(typeof t==='undefined'?'undefined':_typeof(t))&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t){n.d(i,o,function(e){return t[e];}.bind(null,o));}return i;},n.n=function(t){var e=t&&t.__esModule?function(){return t.default;}:function(){return t;};return n.d(e,"a",e),e;},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},n.p="",n(n.s=0);}([function(t,e,n){"use strict";n.r(e);var i={name:"ckeditor",render:function render(t){return t(this.tagName);},props:{editor:{type:Function,default:null},value:{type:String,default:""},config:{type:Object,default:function _default(){return{};}},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:function data(){return{instance:null};},mounted:function mounted(){var _this315=this;this.editor.create(this.$el,this.config).then(function(t){_this315.instance=t,t.setData(_this315.value),t.isReadOnly=_this315.disabled,_this315.$_setUpEditorEvents(),_this315.$emit("ready",t);}).catch(function(t){console.error(t);});},beforeDestroy:function beforeDestroy(){this.instance&&(this.instance.destroy(),this.instance=null),this.$emit("destroy",this.instance);},watch:{value:function value(t){this.instance.getData()!==t&&this.instance.setData(t);},disabled:function disabled(t){this.instance.isReadOnly=t;}},methods:{$_setUpEditorEvents:function $_setUpEditorEvents(){var _this316=this;var t=this.instance;t.model.document.on("change:data",function(e){var n=t.getData();_this316.$emit("input",n,e,t);}),t.editing.view.document.on("focus",function(e){_this316.$emit("focus",e,t);}),t.editing.view.document.on("blur",function(e){_this316.$emit("blur",e,t);});}}};var o={install:function install(t){t.component("ckeditor",i);},component:i};e.default=o;}]).default;});//# sourceMappingURL=ckeditor.js.map
/***/},/* 111 *//***/function(module,exports,__webpack_require__){!function(e,t){true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==(typeof exports==='undefined'?'undefined':_typeof(exports))?exports["vue-js-modal"]=t():e["vue-js-modal"]=t();}(window,function(){return function(n){var i={};function o(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports;}return o.m=n,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n});},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==(typeof t==='undefined'?'undefined':_typeof(t))&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t){o.d(n,i,function(e){return t[e];}.bind(null,i));}return n;},o.n=function(e){var t=e&&e.__esModule?function(){return e.default;}:function(){return e;};return o.d(t,"a",t),t;},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t);},o.p="/dist/",o(o.s=11);}([function(e,t,n){var i=n(6);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(4).default)("27d83796",i,!1,{});},function(e,t,n){var i=n(8);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(4).default)("0e783494",i,!1,{});},function(e,t,n){var i=n(10);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n(4).default)("17757f60",i,!1,{});},function(e,t){e.exports=function(n){var a=[];return a.toString=function(){return this.map(function(e){var t=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),r=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */";});return[n].concat(r).concat([o]).join("\n");}var a;return[n].join("\n");}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t;}).join("");},a.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0);}for(i=0;i<e.length;i++){var r=e[i];"number"==typeof r[0]&&n[r[0]]||(t&&!r[2]?r[2]=t:t&&(r[2]="("+r[2]+") and ("+t+")"),a.push(r));}},a;};},function(e,t,n){"use strict";function l(e,t){for(var n=[],i={},o=0;o<t.length;o++){var r=t[o],a=r[0],s={id:e+":"+o,css:r[1],media:r[2],sourceMap:r[3]};i[a]?i[a].parts.push(s):n.push(i[a]={id:a,parts:[s]});}return n;}n.r(t),n.d(t,"default",function(){return p;});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d={},o=i&&(document.head||document.getElementsByTagName("head")[0]),r=null,a=0,u=!1,s=function s(){},c=null,h="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(a,e,t,n){u=t,c=n||{};var s=l(a,e);return v(s),function(e){for(var t=[],n=0;n<s.length;n++){var i=s[n];(o=d[i.id]).refs--,t.push(o);}e?v(s=l(a,e)):s=[];for(n=0;n<t.length;n++){var o;if(0===(o=t[n]).refs){for(var r=0;r<o.parts.length;r++){o.parts[r]();}delete d[o.id];}}};}function v(e){for(var t=0;t<e.length;t++){var n=e[t],i=d[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++){i.parts[o](n.parts[o]);}for(;o<n.parts.length;o++){i.parts.push(g(n.parts[o]));}i.parts.length>n.parts.length&&(i.parts.length=n.parts.length);}else{var r=[];for(o=0;o<n.parts.length;o++){r.push(g(n.parts[o]));}d[n.id]={id:n.id,refs:1,parts:r};}}}function m(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e;}function g(t){var n,i,e=document.querySelector("style["+h+'~="'+t.id+'"]');if(e){if(u)return s;e.parentNode.removeChild(e);}if(f){var o=a++;e=r||(r=m()),n=w.bind(null,e,o,!1),i=w.bind(null,e,o,!0);}else e=m(),n=function(e,t){var n=t.css,i=t.media,o=t.sourceMap;i&&e.setAttribute("media",i);c.ssrId&&e.setAttribute(h,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;){e.removeChild(e.firstChild);}e.appendChild(document.createTextNode(n));}}.bind(null,e),i=function i(){e.parentNode.removeChild(e);};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e);}else i();};}var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n");});function w(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var r=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r);}}},function(e,t,n){"use strict";var i=n(0);n.n(i).a;},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n.vue-modal-resizer {\n  display: block;\n  overflow: hidden;\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  right: 0;\n  bottom: 0;\n  z-index: 9999999;\n  background: transparent;\n  cursor: se-resize;\n}\n.vue-modal-resizer::after {\n  display: block;\n  position: absolute;\n  content: '';\n  background: transparent;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-bottom: 10px solid #ddd;\n  border-left: 10px solid transparent;\n}\n.vue-modal-resizer.clicked::after {\n  border-bottom: 10px solid #369be9;\n}\n",""]);},function(e,t,n){"use strict";var i=n(1);n.n(i).a;},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n.v--modal-block-scroll {\n  overflow: hidden;\n  width: 100vw;\n}\n.v--modal-overlay {\n  position: fixed;\n  box-sizing: border-box;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.2);\n  z-index: 999;\n  opacity: 1;\n}\n.v--modal-overlay.scrollable {\n  height: 100%;\n  min-height: 100vh;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.v--modal-overlay .v--modal-background-click {\n  width: 100%;\n  height: 100%;\n}\n.v--modal-overlay .v--modal-box {\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.v--modal-overlay.scrollable .v--modal-box {\n  margin-bottom: 2px;\n}\n.v--modal {\n  background-color: white;\n  text-align: left;\n  border-radius: 3px;\n  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);\n  padding: 0;\n}\n.v--modal.v--modal-fullscreen {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  left: 0;\n  top: 0;\n}\n.v--modal-top-right {\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.overlay-fade-enter-active,\n.overlay-fade-leave-active {\n  transition: all 0.2s;\n}\n.overlay-fade-enter,\n.overlay-fade-leave-active {\n  opacity: 0;\n}\n.nice-modal-fade-enter-active,\n.nice-modal-fade-leave-active {\n  transition: all 0.4s;\n}\n.nice-modal-fade-enter,\n.nice-modal-fade-leave-active {\n  opacity: 0;\n  transform: translateY(-20px);\n}\n",""]);},function(e,t,n){"use strict";var i=n(2);n.n(i).a;},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,"\n.vue-dialog div {\n  box-sizing: border-box;\n}\n.vue-dialog .dialog-flex {\n  width: 100%;\n  height: 100%;\n}\n.vue-dialog .dialog-content {\n  flex: 1 0 auto;\n  width: 100%;\n  padding: 15px;\n  font-size: 14px;\n}\n.vue-dialog .dialog-c-title {\n  font-weight: 600;\n  padding-bottom: 15px;\n}\n.vue-dialog .dialog-c-text {\n}\n.vue-dialog .vue-dialog-buttons {\n  display: flex;\n  flex: 0 1 auto;\n  width: 100%;\n  border-top: 1px solid #eee;\n}\n.vue-dialog .vue-dialog-buttons-none {\n  width: 100%;\n  padding-bottom: 15px;\n}\n.vue-dialog-button {\n  font-size: 12px !important;\n  background: transparent;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  cursor: pointer;\n  box-sizing: border-box;\n  line-height: 40px;\n  height: 40px;\n  color: inherit;\n  font: inherit;\n  outline: none;\n}\n.vue-dialog-button:hover {\n  background: rgba(0, 0, 0, 0.01);\n}\n.vue-dialog-button:active {\n  background: rgba(0, 0, 0, 0.025);\n}\n.vue-dialog-button:not(:first-of-type) {\n  border-left: 1px solid #eee;\n}\n",""]);},function(e,t,n){"use strict";n.r(t);var i=function i(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.overlayTransition}},[t.visibility.overlay?n("div",{ref:"overlay",class:t.overlayClass,attrs:{"aria-expanded":t.visibility.overlay.toString(),"data-modal":t.name}},[n("div",{staticClass:"v--modal-background-click",on:{mousedown:function mousedown(e){return e.target!==e.currentTarget?null:t.handleBackgroundClick(e);},touchstart:function touchstart(e){return e.target!==e.currentTarget?null:t.handleBackgroundClick(e);}}},[n("div",{staticClass:"v--modal-top-right"},[t._t("top-right")],2),t._v(" "),n("transition",{attrs:{name:t.transition},on:{"before-enter":t.beforeTransitionEnter,"after-enter":t.afterTransitionEnter,"after-leave":t.afterTransitionLeave}},[t.visibility.modal?n("div",{ref:"modal",class:t.modalClass,style:t.modalStyle},[t._t("default"),t._v(" "),t.resizable&&!t.isAutoHeight?n("resizer",{attrs:{"min-width":t.minWidth,"min-height":t.minHeight},on:{resize:t.handleModalResize}}):t._e()],2):t._e()])],1)]):t._e()]);},o=function o(){var e=this.$createElement;return(this._self._c||e)("div",{class:this.className});};o._withStripped=i._withStripped=!0;var s=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;return function(){return(e++).toString();};}(),u=function u(e,t,n){return n<e?e:t<n?t:n;},r=function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return function(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable;}))),t.forEach(function(e){var t,n,i;t=o,i=r[n=e],n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i;});}return o;}({id:s(),timestamp:Date.now(),canceled:!1},e);},a={name:"VueJsModalResizer",props:{minHeight:{type:Number,default:0},minWidth:{type:Number,default:0}},data:function data(){return{clicked:!1,size:{}};},mounted:function mounted(){this.$el.addEventListener("mousedown",this.start,!1);},computed:{className:function className(){return{"vue-modal-resizer":!0,clicked:this.clicked};}},methods:{start:function start(e){this.clicked=!0,window.addEventListener("mousemove",this.mousemove,!1),window.addEventListener("mouseup",this.stop,!1),e.stopPropagation(),e.preventDefault();},stop:function stop(){this.clicked=!1,window.removeEventListener("mousemove",this.mousemove,!1),window.removeEventListener("mouseup",this.stop,!1),this.$emit("resize-stop",{element:this.$el.parentElement,size:this.size});},mousemove:function mousemove(e){this.resize(e);},resize:function resize(e){var t=this.$el.parentElement;if(t){var n=e.clientX-t.offsetLeft,i=e.clientY-t.offsetTop;n=u(this.minWidth,window.innerWidth,n),i=u(this.minHeight,window.innerHeight,i),this.size={width:n,height:i},t.style.width=n+"px",t.style.height=i+"px",this.$emit("resize",{element:t,size:this.size});}}}};n(5);function l(e,t,n,i,o,r,a,s){var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=n,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),a?(l=function l(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a);},d._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot);}:o),l)if(d.functional){d._injectStyles=l;var u=d.render;d.render=function(e,t){return l.call(t),u(e,t);};}else{var c=d.beforeCreate;d.beforeCreate=c?[].concat(c,l):[l];}return{exports:e,options:d};}var d=l(a,o,[],!1,null,null,null);d.options.__file="src/Resizer.vue";var c=d.exports;function h(e){return(h="function"==typeof Symbol&&"symbol"==_typeof(Symbol.iterator)?function(e){return typeof e==='undefined'?'undefined':_typeof(e);}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e==='undefined'?'undefined':_typeof(e);})(e);}var f="[-+]?[0-9]*.?[0-9]+",p=[{name:"px",regexp:new RegExp("^".concat(f,"px$"))},{name:"%",regexp:new RegExp("^".concat(f,"%$"))},{name:"px",regexp:new RegExp("^".concat(f,"$"))}],v=function v(e){switch(h(e)){case"number":return{type:"px",value:e};case"string":return function(e){if("auto"===e)return{type:e,value:0};for(var t=0;t<p.length;t++){var n=p[t];if(n.regexp.test(e))return{type:n.name,value:parseFloat(e)};}return{type:"",value:e};}(e);default:return{type:"",value:e};}},m=function m(e){if("string"!=typeof e)return 0<=e;var t=v(e);return("%"===t.type||"px"===t.type)&&0<t.value;};var g={name:"VueJsModal",props:{name:{required:!0,type:String},delay:{type:Number,default:0},resizable:{type:Boolean,default:!1},adaptive:{type:Boolean,default:!1},draggable:{type:[Boolean,String],default:!1},scrollable:{type:Boolean,default:!1},reset:{type:Boolean,default:!1},overlayTransition:{type:String,default:"overlay-fade"},transition:{type:String},clickToClose:{type:Boolean,default:!0},classes:{type:[String,Array],default:"v--modal"},minWidth:{type:Number,default:0,validator:function validator(e){return 0<=e;}},minHeight:{type:Number,default:0,validator:function validator(e){return 0<=e;}},maxWidth:{type:Number,default:1/0},maxHeight:{type:Number,default:1/0},width:{type:[Number,String],default:600,validator:m},height:{type:[Number,String],default:300,validator:function validator(e){return"auto"===e||m(e);}},pivotX:{type:Number,default:.5,validator:function validator(e){return 0<=e&&e<=1;}},pivotY:{type:Number,default:.5,validator:function validator(e){return 0<=e&&e<=1;}}},components:{Resizer:c},data:function data(){return{visible:!1,visibility:{modal:!1,overlay:!1},shift:{left:0,top:0},modal:{width:0,widthType:"px",height:0,heightType:"px",renderedHeight:0},window:{width:0,height:0},mutationObserver:null};},created:function created(){this.setInitialSize();},beforeMount:function beforeMount(){var t=this;if(T.event.$on("toggle",this.handleToggleEvent),window.addEventListener("resize",this.handleWindowResize),this.handleWindowResize(),this.scrollable&&!this.isAutoHeight&&console.warn('Modal "'.concat(this.name,'" has scrollable flag set to true ')+'but height is not "auto" ('.concat(this.height,")")),this.isAutoHeight){var e=function(){if("undefined"!=typeof window)for(var e=["","WebKit","Moz","O","Ms"],t=0;t<e.length;t++){var n=e[t]+"MutationObserver";if(n in window)return window[n];}return!1;}();e&&(this.mutationObserver=new e(function(e){t.updateRenderedHeight();}));}this.clickToClose&&window.addEventListener("keyup",this.handleEscapeKeyUp);},beforeDestroy:function beforeDestroy(){T.event.$off("toggle",this.handleToggleEvent),window.removeEventListener("resize",this.handleWindowResize),this.clickToClose&&window.removeEventListener("keyup",this.handleEscapeKeyUp),this.scrollable&&document.body.classList.remove("v--modal-block-scroll");},computed:{isAutoHeight:function isAutoHeight(){return"auto"===this.modal.heightType;},position:function position(){var e=this.window,t=this.shift,n=this.pivotX,i=this.pivotY,o=this.trueModalWidth,r=this.trueModalHeight,a=e.width-o,s=e.height-r,l=t.left+n*a,d=t.top+i*s;return{left:parseInt(u(0,a,l)),top:parseInt(u(0,s,d))};},trueModalWidth:function trueModalWidth(){var e=this.window,t=this.modal,n=this.adaptive,i=this.minWidth,o=this.maxWidth,r="%"===t.widthType?e.width/100*t.width:t.width,a=Math.min(e.width,o);return n?u(i,a,r):r;},trueModalHeight:function trueModalHeight(){var e=this.window,t=this.modal,n=this.isAutoHeight,i=this.adaptive,o=this.maxHeight,r="%"===t.heightType?e.height/100*t.height:t.height;if(n)return this.modal.renderedHeight;var a=Math.min(e.height,o);return i?u(this.minHeight,a,r):r;},overlayClass:function overlayClass(){return{"v--modal-overlay":!0,scrollable:this.scrollable&&this.isAutoHeight};},modalClass:function modalClass(){return["v--modal-box",this.classes];},modalStyle:function modalStyle(){return{top:this.position.top+"px",left:this.position.left+"px",width:this.trueModalWidth+"px",height:this.isAutoHeight?"auto":this.trueModalHeight+"px"};}},watch:{visible:function visible(e){var t=this;e?(this.visibility.overlay=!0,setTimeout(function(){t.visibility.modal=!0,t.$nextTick(function(){t.addDraggableListeners(),t.callAfterEvent(!0);});},this.delay)):(this.visibility.modal=!1,setTimeout(function(){t.visibility.overlay=!1,t.$nextTick(function(){t.removeDraggableListeners(),t.callAfterEvent(!1);});},this.delay));}},methods:{handleToggleEvent:function handleToggleEvent(e,t,n){if(this.name===e){var i=void 0===t?!this.visible:t;this.toggle(i,n);}},setInitialSize:function setInitialSize(){var e=this.modal,t=v(this.width),n=v(this.height);e.width=t.value,e.widthType=t.type,e.height=n.value,e.heightType=n.type;},handleEscapeKeyUp:function handleEscapeKeyUp(e){27===e.which&&this.visible&&this.$modal.hide(this.name);},handleWindowResize:function handleWindowResize(){this.window.width=window.innerWidth,this.window.height=window.innerHeight;},createModalEvent:function createModalEvent(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return r(function(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable;}))),t.forEach(function(e){var t,n,i;t=o,i=r[n=e],n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i;});}return o;}({name:this.name,ref:this.$refs.modal},e));},handleModalResize:function handleModalResize(e){this.modal.widthType="px",this.modal.width=e.size.width,this.modal.heightType="px",this.modal.height=e.size.height;var t=this.modal.size;this.$emit("resize",this.createModalEvent({size:t}));},toggle:function toggle(e,t){var n=this.reset,i=this.scrollable,o=this.visible;if(o!==e){var r=o?"before-close":"before-open";"before-open"===r?(document.activeElement&&"BODY"!==document.activeElement.tagName&&document.activeElement.blur&&document.activeElement.blur(),n&&(this.setInitialSize(),this.shift.left=0,this.shift.top=0),i&&document.body.classList.add("v--modal-block-scroll")):i&&document.body.classList.remove("v--modal-block-scroll");var a=!1,s=this.createModalEvent({stop:function stop(){a=!0;},state:e,params:t});this.$emit(r,s),a||(this.visible=e);}},getDraggableElement:function getDraggableElement(){var e="string"!=typeof this.draggable?".v--modal-box":this.draggable;return e?this.$refs.overlay.querySelector(e):null;},handleBackgroundClick:function handleBackgroundClick(){this.clickToClose&&this.toggle(!1);},callAfterEvent:function callAfterEvent(e){e?this.connectObserver():this.disconnectObserver();var t=e?"opened":"closed",n=this.createModalEvent({state:e});this.$emit(t,n);},addDraggableListeners:function addDraggableListeners(){var r=this;if(this.draggable){var e=this.getDraggableElement();if(e){var a=0,s=0,l=0,d=0,u=function u(e){return e.touches&&0<e.touches.length?e.touches[0]:e;},t=function t(e){var t=e.target;if(!t||"INPUT"!==t.nodeName){var n=u(e),i=n.clientX,o=n.clientY;document.addEventListener("mousemove",c),document.addEventListener("touchmove",c),document.addEventListener("mouseup",h),document.addEventListener("touchend",h),a=i,s=o,l=r.shift.left,d=r.shift.top;}},c=function c(e){var t=u(e),n=t.clientX,i=t.clientY;r.shift.left=l+n-a,r.shift.top=d+i-s,e.preventDefault();},h=function e(t){document.removeEventListener("mousemove",c),document.removeEventListener("touchmove",c),document.removeEventListener("mouseup",e),document.removeEventListener("touchend",e),t.preventDefault();};e.addEventListener("mousedown",t),e.addEventListener("touchstart",t);}}},removeDraggableListeners:function removeDraggableListeners(){},updateRenderedHeight:function updateRenderedHeight(){this.$refs.modal&&(this.modal.renderedHeight=this.$refs.modal.getBoundingClientRect().height);},connectObserver:function connectObserver(){this.mutationObserver&&this.mutationObserver.observe(this.$refs.overlay,{childList:!0,attributes:!0,subtree:!0});},disconnectObserver:function disconnectObserver(){this.mutationObserver&&this.mutationObserver.disconnect();},beforeTransitionEnter:function beforeTransitionEnter(){this.connectObserver();},afterTransitionEnter:function afterTransitionEnter(){},afterTransitionLeave:function afterTransitionLeave(){}}},b=(n(7),l(g,i,[],!1,null,null,null));b.options.__file="src/Modal.vue";var y=b.exports,w=function w(){var n=this,e=n.$createElement,i=n._self._c||e;return i("modal",{attrs:{name:"dialog",height:"auto",classes:["v--modal","vue-dialog",this.params.class],width:n.width,"pivot-y":.3,adaptive:!0,clickToClose:n.clickToClose,transition:n.transition},on:{"before-open":n.beforeOpened,"before-close":n.beforeClosed,opened:function opened(e){n.$emit("opened",e);},closed:function closed(e){n.$emit("closed",e);}}},[i("div",{staticClass:"dialog-content"},[n.params.title?i("div",{staticClass:"dialog-c-title",domProps:{innerHTML:n._s(n.params.title||"")}}):n._e(),n._v(" "),n.params.component?i(n.params.component,n._b({tag:"component"},"component",n.params.props,!1)):i("div",{staticClass:"dialog-c-text",domProps:{innerHTML:n._s(n.params.text||"")}})],1),n._v(" "),n.buttons?i("div",{staticClass:"vue-dialog-buttons"},n._l(n.buttons,function(e,t){return i("button",{key:t,class:e.class||"vue-dialog-button",style:n.buttonStyle,attrs:{type:"button"},domProps:{innerHTML:n._s(e.title)},on:{click:function click(e){e.stopPropagation(),n.click(t,e);}}},[n._v("\n      "+n._s(e.title)+"\n    ")]);})):i("div",{staticClass:"vue-dialog-buttons-none"})]);};w._withStripped=!0;var x={name:"VueJsDialog",props:{width:{type:[Number,String],default:400},clickToClose:{type:Boolean,default:!0},transition:{type:String,default:"fade"}},data:function data(){return{params:{},defaultButtons:[{title:"CLOSE"}]};},computed:{buttons:function buttons(){return this.params.buttons||this.defaultButtons;},buttonStyle:function buttonStyle(){return{flex:"1 1 ".concat(100/this.buttons.length,"%")};}},methods:{beforeOpened:function beforeOpened(e){window.addEventListener("keyup",this.onKeyUp),this.params=e.params||{},this.$emit("before-opened",e);},beforeClosed:function beforeClosed(e){window.removeEventListener("keyup",this.onKeyUp),this.params={},this.$emit("before-closed",e);},click:function click(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"click",i=this.buttons[e];i&&"function"==typeof i.handler?i.handler(e,t,{source:n}):this.$modal.hide("dialog");},onKeyUp:function onKeyUp(e){if(13===e.which&&0<this.buttons.length){var t=1===this.buttons.length?0:this.buttons.findIndex(function(e){return e.default;});-1!==t&&this.click(t,e,"keypress");}}}},_=(n(9),l(x,w,[],!1,null,null,null));_.options.__file="src/Dialog.vue";var E=_.exports,k=function k(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{attrs:{id:"modals-container"}},n._l(n.modals,function(t){return i("modal",n._g(n._b({key:t.id,on:{closed:function closed(e){n.remove(t.id);}}},"modal",t.modalAttrs,!1),t.modalListeners),[i(t.component,n._g(n._b({tag:"component",on:{close:function close(e){n.$modal.hide(t.modalAttrs.name);}}},"component",t.componentAttrs,!1),n.$listeners))],1);}));};k._withStripped=!0;var S=l({data:function data(){return{modals:[]};},created:function created(){this.$root._dynamicContainer=this;},methods:{add:function add(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},o=3<arguments.length?arguments[3]:void 0,r=s(),a=i.name||"_dynamic_modal_"+r;this.modals.push({id:r,modalAttrs:function(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable;}))),t.forEach(function(e){var t,n,i;t=o,i=r[n=e],n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i;});}return o;}({},i,{name:a}),modalListeners:o,component:e,componentAttrs:n}),this.$nextTick(function(){t.$modal.show(a);});},remove:function remove(e){for(var t in this.modals){if(this.modals[t].id===e)return void this.modals.splice(t,1);}}}},k,[],!1,null,null,null);S.options.__file="src/ModalsContainer.vue";var C=S.exports,O={install:function install(a){var s=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this.installed||(this.installed=!0,this.event=new a(),this.rootInstance=null,this.componentName=s.componentName||"Modal",a.prototype.$modal={show:function show(e,t,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};if("string"!=typeof e){var o=n&&n.root?n.root:O.rootInstance,r=function(e,t,n){if(!n._dynamicContainer&&t.injectModalsContainer){var i=document.createElement("div");document.body.appendChild(i),new e({parent:n,render:function render(e){return e(C);}}).$mount(i);}return n._dynamicContainer;}(a,s,o);r?r.add(e,t,n,i):console.warn("[vue-js-modal] In order to render dynamic modals, a <modals-container> component must be present on the page");}else O.event.$emit("toggle",e,!0,t);},hide:function hide(e,t){O.event.$emit("toggle",e,!1,t);},toggle:function toggle(e,t){O.event.$emit("toggle",e,void 0,t);}},a.component(this.componentName,y),s.dialog&&a.component("VDialog",E),s.dynamic&&(a.component("ModalsContainer",C),a.mixin({beforeMount:function beforeMount(){null===O.rootInstance&&(O.rootInstance=this.$root);}})));}};var T=t.default=O;}]);});/***/},/* 112 *//***/function(module,exports,__webpack_require__){function injectStyle(ssrContext){__webpack_require__(113);}var Component=__webpack_require__(0)(/* script */__webpack_require__(116),/* template */__webpack_require__(301),/* styles */injectStyle,/* scopeId */"data-v-05c0cfb0",/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 113 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(114);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(4)("2fb819dc",content,true);/***/},/* 114 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(3)(undefined);// imports
// module
exports.push([module.i,".scoped-unset-pointer-events[data-v-05c0cfb0]{pointer-events:none}.scoped-new-questioneditor[data-v-05c0cfb0]{min-height:75vh}.loading-back-greyed[data-v-05c0cfb0]{background-color:hsla(0,0%,78%,.4);width:100%;height:100%;min-height:60vh}.scoped-small-border[data-v-05c0cfb0]{border:1px solid hsla(0,0%,72%,.8);padding:.6rem 1rem;border-radius:4px}.slide-fade-enter-active[data-v-05c0cfb0]{transition:all .3s ease}.slide-fade-leave-active[data-v-05c0cfb0]{transition:all .8s cubic-bezier(1,.5,.8,1)}.slide-fade-enter[data-v-05c0cfb0]{transform:translateX(-10px);opacity:0}.slide-fade-enter-to[data-v-05c0cfb0]{transform:translateX(0);opacity:1}.slide-fade-leave-to[data-v-05c0cfb0]{transform:translateX(10px);opacity:0}",""]);// exports
/***/},/* 115 *//***/function(module,exports){/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */module.exports=function listToStyles(parentId,list){var styles=[];var newStyles={};for(var i=0;i<list.length;i++){var item=list[i];var id=item[0];var css=item[1];var media=item[2];var sourceMap=item[3];var part={id:parentId+':'+i,css:css,media:media,sourceMap:sourceMap};if(!newStyles[id]){styles.push(newStyles[id]={id:id,parts:[part]});}else{newStyles[id].parts.push(part);}}return styles;};/***/},/* 116 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_mousetrap__=__webpack_require__(117);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_mousetrap___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mousetrap__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_questionoverview_vue__=__webpack_require__(118);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__components_questionoverview_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_questionoverview_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__components_mainEditor_vue__=__webpack_require__(189);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__components_mainEditor_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_mainEditor_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__components_generalSettings_vue__=__webpack_require__(215);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__components_generalSettings_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_generalSettings_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__components_advancedSettings_vue__=__webpack_require__(235);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__components_advancedSettings_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_advancedSettings_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__helperComponents_LanguageSelector_vue__=__webpack_require__(283);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__helperComponents_LanguageSelector_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__helperComponents_LanguageSelector_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__mixins_runAjax_js__=__webpack_require__(57);/* harmony import */var __WEBPACK_IMPORTED_MODULE_7__mixins_eventRoot_js__=__webpack_require__(300);/* harmony default export */__webpack_exports__["default"]={name:'lsnextquestioneditor',mixins:[__WEBPACK_IMPORTED_MODULE_6__mixins_runAjax_js__["a"/* default */],__WEBPACK_IMPORTED_MODULE_7__mixins_eventRoot_js__["a"/* default */]],components:{'questionoverview':__WEBPACK_IMPORTED_MODULE_1__components_questionoverview_vue___default.a,'maineditor':__WEBPACK_IMPORTED_MODULE_2__components_mainEditor_vue___default.a,'generalsettings':__WEBPACK_IMPORTED_MODULE_3__components_generalSettings_vue___default.a,'advancedsettings':__WEBPACK_IMPORTED_MODULE_4__components_advancedSettings_vue___default.a,'languageselector':__WEBPACK_IMPORTED_MODULE_5__helperComponents_LanguageSelector_vue___default.a},data:function data(){return{editQuestion:false,questionEditButton:window.questionEditButton};},computed:{isCreateQuestion:function isCreateQuestion(){return this.$store.state.currentQuestion.qid==null;},questionGroupWithId:function questionGroupWithId(){return this.$store.state.currentQuestionGroupInfo[this.$store.state.activeLanguage].group_name+' (GID: '+this.$store.state.currentQuestionGroupInfo.gid+')';},currentQuestionCode:{get:function get(){return this.$store.state.currentQuestion.title;},set:function set(newValue){this.$store.commit('updateCurrentQuestionTitle',newValue);}}},methods:{triggerEditQuestion:function triggerEditQuestion(){this.toggleLoading(true);if(this.editQuestion){$('#questionbarid').css('display','');$('#questiongroupbarid').css('display','none');}else{$('#questionbarid').css('display','none');$('#questiongroupbarid').css('display','');}this.editQuestion=!this.editQuestion;},applyHotkeys:function applyHotkeys(){var _this317=this;__WEBPACK_IMPORTED_MODULE_0_mousetrap___default.a.bind('ctrl+right',this.chooseNextLanguage);__WEBPACK_IMPORTED_MODULE_0_mousetrap___default.a.bind('ctrl+left',this.choosePreviousLanguage);__WEBPACK_IMPORTED_MODULE_0_mousetrap___default.a.bind('ctrl+s',this.submitCurrentState);__WEBPACK_IMPORTED_MODULE_0_mousetrap___default.a.bind('ctrl+alt+d',function(){_this317.$store.commit('toggleDebugMode');});},chooseNextLanguage:function chooseNextLanguage(){this.$log.log('HOTKEY','chooseNextLanguage');this.$store.commit('nextLanguage');},choosePreviousLanguage:function choosePreviousLanguage(){this.$log.log('HOTKEY','choosePreviousLanguage');this.$store.commit('previousLanguage');},jqueryTriggered:function jqueryTriggered(event,data){//this.$log.log('data', data);
this.event=JSON.parse(data.emitter);},setModalEvent:function setModalEvent(payload){this.$log.log('New event set',payload);this.event=payload;},triggerEvent:function triggerEvent(payload){this.$log.log('New event set',payload);this.event=payload;},eventSet:function eventSet(){this.event=null;},toggleOverview:function toggleOverview(){this.editQuestion=!this.editQuestion;},submitCurrentState:function submitCurrentState(){var _this318=this;var redirect=arguments.length>0&&arguments[0]!==undefined?arguments[0]:false;this.toggleLoading();this.$store.dispatch('saveQuestionData').then(function(result){_this318.toggleLoading();if(redirect==true){window.location.href=result.data.redirect;}$('#in_survey_common').trigger('lsStopLoading');window.LS.notifyFader(result.data.message,'well-lg bg-primary text-center');_this318.$store.dispatch('updateObjects',result.data.newQuestionDetails);_this318.event={target:'MainEditor',method:'getQuestionPreview',content:{}};_this318.$log.log('OBJECT AFTER TRANSFER: ',result);},function(reject){_this318.toggleLoading();$('#in_survey_common').trigger('lsStopLoading');window.LS.notifyFader("Question could not be stored. Reloading page.",'well-lg bg-danger text-center');//setTimeout(()=>{window.location.reload();}, 1500);
});},questionTypeChangeTriggered:function questionTypeChangeTriggered(newValue){this.$log.log('CHANGE OF TYPE',newValue);this.currentQuestionType=newValue;var tempQuestionObject=this.$store.state.currentQuestion;tempQuestionObject.type=newValue;this.$store.commit('setCurrentQuestion',tempQuestionObject);this.$store.dispatch('reloadQuestion');this.event={target:'MainEditor',method:'getQuestionPreview',content:{}};},selectLanguage:function selectLanguage(sLanguage){this.$log.log('LANGUAGE CHANGED',sLanguage);this.$store.commit('setActiveLanguage',sLanguage);}},created:function created(){this.$store.dispatch('loadQuestion');this.$store.dispatch('getQuestionTypes');this.$store.dispatch('getQuestionGeneralSettings');this.$store.dispatch('getQuestionAdvancedSettings');},mounted:function mounted(){var _this319=this;$('#advancedQuestionEditor').on('jquery:trigger',this.jqueryTriggered);this.applyHotkeys();$('#frmeditquestion').on('submit',function(e){e.preventDefault();});$('#save-button').on('click',function(e){_this319.submitCurrentState();});$('#save-and-close-button').on('click',function(e){_this319.submitCurrentState(true);});this.toggleLoading(false);$('#questionbarid').css('display','');$('#questiongroupbarid').css('display','none');}};/***/},/* 117 *//***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;/*global define:false *//**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.3
 * @url craig.is/killing/mice
 */(function(window,document,undefined){// Check if mousetrap is used inside browser, if not, return
if(!window){return;}/**
     * mapping of special keycodes to their corresponding keys
     *
     * everything in this dictionary cannot use keypress events
     * so it has to be here to map to the correct keycodes for
     * keyup/keydown events
     *
     * @type {Object}
     */var _MAP={8:'backspace',9:'tab',13:'enter',16:'shift',17:'ctrl',18:'alt',20:'capslock',27:'esc',32:'space',33:'pageup',34:'pagedown',35:'end',36:'home',37:'left',38:'up',39:'right',40:'down',45:'ins',46:'del',91:'meta',93:'meta',224:'meta'};/**
     * mapping for special characters so they can support
     *
     * this dictionary is only used incase you want to bind a
     * keyup or keydown event to one of these keys
     *
     * @type {Object}
     */var _KEYCODE_MAP={106:'*',107:'+',109:'-',110:'.',111:'/',186:';',187:'=',188:',',189:'-',190:'.',191:'/',192:'`',219:'[',220:'\\',221:']',222:'\''};/**
     * this is a mapping of keys that require shift on a US keypad
     * back to the non shift equivelents
     *
     * this is so you can use keyup events with these keys
     *
     * note that this will only work reliably on US keyboards
     *
     * @type {Object}
     */var _SHIFT_MAP={'~':'`','!':'1','@':'2','#':'3','$':'4','%':'5','^':'6','&':'7','*':'8','(':'9',')':'0','_':'-','+':'=',':':';','\"':'\'','<':',','>':'.','?':'/','|':'\\'};/**
     * this is a list of special strings you can use to map
     * to modifier keys when you specify your keyboard shortcuts
     *
     * @type {Object}
     */var _SPECIAL_ALIASES={'option':'alt','command':'meta','return':'enter','escape':'esc','plus':'+','mod':/Mac|iPod|iPhone|iPad/.test(navigator.platform)?'meta':'ctrl'};/**
     * variable to store the flipped version of _MAP from above
     * needed to check if we should use keypress or not when no action
     * is specified
     *
     * @type {Object|undefined}
     */var _REVERSE_MAP;/**
     * loop through the f keys, f1 to f19 and add them to the map
     * programatically
     */for(var i=1;i<20;++i){_MAP[111+i]='f'+i;}/**
     * loop through to map numbers on the numeric keypad
     */for(i=0;i<=9;++i){// This needs to use a string cause otherwise since 0 is falsey
// mousetrap will never fire for numpad 0 pressed as part of a keydown
// event.
//
// @see https://github.com/ccampbell/mousetrap/pull/258
_MAP[i+96]=i.toString();}/**
     * cross browser add event method
     *
     * @param {Element|HTMLDocument} object
     * @param {string} type
     * @param {Function} callback
     * @returns void
     */function _addEvent(object,type,callback){if(object.addEventListener){object.addEventListener(type,callback,false);return;}object.attachEvent('on'+type,callback);}/**
     * takes the event and returns the key character
     *
     * @param {Event} e
     * @return {string}
     */function _characterFromEvent(e){// for keypress events we should return the character as is
if(e.type=='keypress'){var character=String.fromCharCode(e.which);// if the shift key is not pressed then it is safe to assume
// that we want the character to be lowercase.  this means if
// you accidentally have caps lock on then your key bindings
// will continue to work
//
// the only side effect that might not be desired is if you
// bind something like 'A' cause you want to trigger an
// event when capital A is pressed caps lock will no longer
// trigger the event.  shift+a will though.
if(!e.shiftKey){character=character.toLowerCase();}return character;}// for non keypress events the special maps are needed
if(_MAP[e.which]){return _MAP[e.which];}if(_KEYCODE_MAP[e.which]){return _KEYCODE_MAP[e.which];}// if it is not in the special map
// with keydown and keyup events the character seems to always
// come in as an uppercase character whether you are pressing shift
// or not.  we should make sure it is always lowercase for comparisons
return String.fromCharCode(e.which).toLowerCase();}/**
     * checks if two arrays are equal
     *
     * @param {Array} modifiers1
     * @param {Array} modifiers2
     * @returns {boolean}
     */function _modifiersMatch(modifiers1,modifiers2){return modifiers1.sort().join(',')===modifiers2.sort().join(',');}/**
     * takes a key event and figures out what the modifiers are
     *
     * @param {Event} e
     * @returns {Array}
     */function _eventModifiers(e){var modifiers=[];if(e.shiftKey){modifiers.push('shift');}if(e.altKey){modifiers.push('alt');}if(e.ctrlKey){modifiers.push('ctrl');}if(e.metaKey){modifiers.push('meta');}return modifiers;}/**
     * prevents default for this event
     *
     * @param {Event} e
     * @returns void
     */function _preventDefault(e){if(e.preventDefault){e.preventDefault();return;}e.returnValue=false;}/**
     * stops propogation for this event
     *
     * @param {Event} e
     * @returns void
     */function _stopPropagation(e){if(e.stopPropagation){e.stopPropagation();return;}e.cancelBubble=true;}/**
     * determines if the keycode specified is a modifier key or not
     *
     * @param {string} key
     * @returns {boolean}
     */function _isModifier(key){return key=='shift'||key=='ctrl'||key=='alt'||key=='meta';}/**
     * reverses the map lookup so that we can look for specific keys
     * to see what can and can't use keypress
     *
     * @return {Object}
     */function _getReverseMap(){if(!_REVERSE_MAP){_REVERSE_MAP={};for(var key in _MAP){// pull out the numeric keypad from here cause keypress should
// be able to detect the keys from the character
if(key>95&&key<112){continue;}if(_MAP.hasOwnProperty(key)){_REVERSE_MAP[_MAP[key]]=key;}}}return _REVERSE_MAP;}/**
     * picks the best action based on the key combination
     *
     * @param {string} key - character for key
     * @param {Array} modifiers
     * @param {string=} action passed in
     */function _pickBestAction(key,modifiers,action){// if no action was picked in we should try to pick the one
// that we think would work best for this key
if(!action){action=_getReverseMap()[key]?'keydown':'keypress';}// modifier keys don't work as expected with keypress,
// switch to keydown
if(action=='keypress'&&modifiers.length){action='keydown';}return action;}/**
     * Converts from a string key combination to an array
     *
     * @param  {string} combination like "command+shift+l"
     * @return {Array}
     */function _keysFromString(combination){if(combination==='+'){return['+'];}combination=combination.replace(/\+{2}/g,'+plus');return combination.split('+');}/**
     * Gets info for a specific key combination
     *
     * @param  {string} combination key combination ("command+s" or "a" or "*")
     * @param  {string=} action
     * @returns {Object}
     */function _getKeyInfo(combination,action){var keys;var key;var i;var modifiers=[];// take the keys from this pattern and figure out what the actual
// pattern is all about
keys=_keysFromString(combination);for(i=0;i<keys.length;++i){key=keys[i];// normalize key names
if(_SPECIAL_ALIASES[key]){key=_SPECIAL_ALIASES[key];}// if this is not a keypress event then we should
// be smart about using shift keys
// this will only work for US keyboards however
if(action&&action!='keypress'&&_SHIFT_MAP[key]){key=_SHIFT_MAP[key];modifiers.push('shift');}// if this key is a modifier then add it to the list of modifiers
if(_isModifier(key)){modifiers.push(key);}}// depending on what the key combination is
// we will try to pick the best event for it
action=_pickBestAction(key,modifiers,action);return{key:key,modifiers:modifiers,action:action};}function _belongsTo(element,ancestor){if(element===null||element===document){return false;}if(element===ancestor){return true;}return _belongsTo(element.parentNode,ancestor);}function Mousetrap(targetElement){var self=this;targetElement=targetElement||document;if(!(self instanceof Mousetrap)){return new Mousetrap(targetElement);}/**
         * element to attach key events to
         *
         * @type {Element}
         */self.target=targetElement;/**
         * a list of all the callbacks setup via Mousetrap.bind()
         *
         * @type {Object}
         */self._callbacks={};/**
         * direct map of string combinations to callbacks used for trigger()
         *
         * @type {Object}
         */self._directMap={};/**
         * keeps track of what level each sequence is at since multiple
         * sequences can start out with the same sequence
         *
         * @type {Object}
         */var _sequenceLevels={};/**
         * variable to store the setTimeout call
         *
         * @type {null|number}
         */var _resetTimer;/**
         * temporary state where we will ignore the next keyup
         *
         * @type {boolean|string}
         */var _ignoreNextKeyup=false;/**
         * temporary state where we will ignore the next keypress
         *
         * @type {boolean}
         */var _ignoreNextKeypress=false;/**
         * are we currently inside of a sequence?
         * type of action ("keyup" or "keydown" or "keypress") or false
         *
         * @type {boolean|string}
         */var _nextExpectedAction=false;/**
         * resets all sequence counters except for the ones passed in
         *
         * @param {Object} doNotReset
         * @returns void
         */function _resetSequences(doNotReset){doNotReset=doNotReset||{};var activeSequences=false,key;for(key in _sequenceLevels){if(doNotReset[key]){activeSequences=true;continue;}_sequenceLevels[key]=0;}if(!activeSequences){_nextExpectedAction=false;}}/**
         * finds all callbacks that match based on the keycode, modifiers,
         * and action
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event|Object} e
         * @param {string=} sequenceName - name of the sequence we are looking for
         * @param {string=} combination
         * @param {number=} level
         * @returns {Array}
         */function _getMatches(character,modifiers,e,sequenceName,combination,level){var i;var callback;var matches=[];var action=e.type;// if there are no events related to this keycode
if(!self._callbacks[character]){return[];}// if a modifier key is coming up on its own we should allow it
if(action=='keyup'&&_isModifier(character)){modifiers=[character];}// loop through all callbacks for the key that was pressed
// and see if any of them match
for(i=0;i<self._callbacks[character].length;++i){callback=self._callbacks[character][i];// if a sequence name is not specified, but this is a sequence at
// the wrong level then move onto the next match
if(!sequenceName&&callback.seq&&_sequenceLevels[callback.seq]!=callback.level){continue;}// if the action we are looking for doesn't match the action we got
// then we should keep going
if(action!=callback.action){continue;}// if this is a keypress event and the meta key and control key
// are not pressed that means that we need to only look at the
// character, otherwise check the modifiers as well
//
// chrome will not fire a keypress if meta or control is down
// safari will fire a keypress if meta or meta+shift is down
// firefox will fire a keypress if meta or control is down
if(action=='keypress'&&!e.metaKey&&!e.ctrlKey||_modifiersMatch(modifiers,callback.modifiers)){// when you bind a combination or sequence a second time it
// should overwrite the first one.  if a sequenceName or
// combination is specified in this call it does just that
//
// @todo make deleting its own method?
var deleteCombo=!sequenceName&&callback.combo==combination;var deleteSequence=sequenceName&&callback.seq==sequenceName&&callback.level==level;if(deleteCombo||deleteSequence){self._callbacks[character].splice(i,1);}matches.push(callback);}}return matches;}/**
         * actually calls the callback function
         *
         * if your callback function returns false this will use the jquery
         * convention - prevent default and stop propogation on the event
         *
         * @param {Function} callback
         * @param {Event} e
         * @returns void
         */function _fireCallback(callback,e,combo,sequence){// if this event should not happen stop here
if(self.stopCallback(e,e.target||e.srcElement,combo,sequence)){return;}if(callback(e,combo)===false){_preventDefault(e);_stopPropagation(e);}}/**
         * handles a character key event
         *
         * @param {string} character
         * @param {Array} modifiers
         * @param {Event} e
         * @returns void
         */self._handleKey=function(character,modifiers,e){var callbacks=_getMatches(character,modifiers,e);var i;var doNotReset={};var maxLevel=0;var processedSequenceCallback=false;// Calculate the maxLevel for sequences so we can only execute the longest callback sequence
for(i=0;i<callbacks.length;++i){if(callbacks[i].seq){maxLevel=Math.max(maxLevel,callbacks[i].level);}}// loop through matching callbacks for this key event
for(i=0;i<callbacks.length;++i){// fire for all sequence callbacks
// this is because if for example you have multiple sequences
// bound such as "g i" and "g t" they both need to fire the
// callback for matching g cause otherwise you can only ever
// match the first one
if(callbacks[i].seq){// only fire callbacks for the maxLevel to prevent
// subsequences from also firing
//
// for example 'a option b' should not cause 'option b' to fire
// even though 'option b' is part of the other sequence
//
// any sequences that do not match here will be discarded
// below by the _resetSequences call
if(callbacks[i].level!=maxLevel){continue;}processedSequenceCallback=true;// keep a list of which sequences were matches for later
doNotReset[callbacks[i].seq]=1;_fireCallback(callbacks[i].callback,e,callbacks[i].combo,callbacks[i].seq);continue;}// if there were no sequence matches but we are still here
// that means this is a regular match so we should fire that
if(!processedSequenceCallback){_fireCallback(callbacks[i].callback,e,callbacks[i].combo);}}// if the key you pressed matches the type of sequence without
// being a modifier (ie "keyup" or "keypress") then we should
// reset all sequences that were not matched by this event
//
// this is so, for example, if you have the sequence "h a t" and you
// type "h e a r t" it does not match.  in this case the "e" will
// cause the sequence to reset
//
// modifier keys are ignored because you can have a sequence
// that contains modifiers such as "enter ctrl+space" and in most
// cases the modifier key will be pressed before the next key
//
// also if you have a sequence such as "ctrl+b a" then pressing the
// "b" key will trigger a "keypress" and a "keydown"
//
// the "keydown" is expected when there is a modifier, but the
// "keypress" ends up matching the _nextExpectedAction since it occurs
// after and that causes the sequence to reset
//
// we ignore keypresses in a sequence that directly follow a keydown
// for the same character
var ignoreThisKeypress=e.type=='keypress'&&_ignoreNextKeypress;if(e.type==_nextExpectedAction&&!_isModifier(character)&&!ignoreThisKeypress){_resetSequences(doNotReset);}_ignoreNextKeypress=processedSequenceCallback&&e.type=='keydown';};/**
         * handles a keydown event
         *
         * @param {Event} e
         * @returns void
         */function _handleKeyEvent(e){// normalize e.which for key events
// @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
if(typeof e.which!=='number'){e.which=e.keyCode;}var character=_characterFromEvent(e);// no character found then stop
if(!character){return;}// need to use === for the character check because the character can be 0
if(e.type=='keyup'&&_ignoreNextKeyup===character){_ignoreNextKeyup=false;return;}self.handleKey(character,_eventModifiers(e),e);}/**
         * called to set a 1 second timeout on the specified sequence
         *
         * this is so after each key press in the sequence you have 1 second
         * to press the next key before you have to start over
         *
         * @returns void
         */function _resetSequenceTimer(){clearTimeout(_resetTimer);_resetTimer=setTimeout(_resetSequences,1000);}/**
         * binds a key sequence to an event
         *
         * @param {string} combo - combo specified in bind call
         * @param {Array} keys
         * @param {Function} callback
         * @param {string=} action
         * @returns void
         */function _bindSequence(combo,keys,callback,action){// start off by adding a sequence level record for this combination
// and setting the level to 0
_sequenceLevels[combo]=0;/**
             * callback to increase the sequence level for this sequence and reset
             * all other sequences that were active
             *
             * @param {string} nextAction
             * @returns {Function}
             */function _increaseSequence(nextAction){return function(){_nextExpectedAction=nextAction;++_sequenceLevels[combo];_resetSequenceTimer();};}/**
             * wraps the specified callback inside of another function in order
             * to reset all sequence counters as soon as this sequence is done
             *
             * @param {Event} e
             * @returns void
             */function _callbackAndReset(e){_fireCallback(callback,e,combo);// we should ignore the next key up if the action is key down
// or keypress.  this is so if you finish a sequence and
// release the key the final key will not trigger a keyup
if(action!=='keyup'){_ignoreNextKeyup=_characterFromEvent(e);}// weird race condition if a sequence ends with the key
// another sequence begins with
setTimeout(_resetSequences,10);}// loop through keys one at a time and bind the appropriate callback
// function.  for any key leading up to the final one it should
// increase the sequence. after the final, it should reset all sequences
//
// if an action is specified in the original bind call then that will
// be used throughout.  otherwise we will pass the action that the
// next key in the sequence should match.  this allows a sequence
// to mix and match keypress and keydown events depending on which
// ones are better suited to the key provided
for(var i=0;i<keys.length;++i){var isFinal=i+1===keys.length;var wrappedCallback=isFinal?_callbackAndReset:_increaseSequence(action||_getKeyInfo(keys[i+1]).action);_bindSingle(keys[i],wrappedCallback,action,combo,i);}}/**
         * binds a single keyboard combination
         *
         * @param {string} combination
         * @param {Function} callback
         * @param {string=} action
         * @param {string=} sequenceName - name of sequence if part of sequence
         * @param {number=} level - what part of the sequence the command is
         * @returns void
         */function _bindSingle(combination,callback,action,sequenceName,level){// store a direct mapped reference for use with Mousetrap.trigger
self._directMap[combination+':'+action]=callback;// make sure multiple spaces in a row become a single space
combination=combination.replace(/\s+/g,' ');var sequence=combination.split(' ');var info;// if this pattern is a sequence of keys then run through this method
// to reprocess each pattern one key at a time
if(sequence.length>1){_bindSequence(combination,sequence,callback,action);return;}info=_getKeyInfo(combination,action);// make sure to initialize array if this is the first time
// a callback is added for this key
self._callbacks[info.key]=self._callbacks[info.key]||[];// remove an existing match if there is one
_getMatches(info.key,info.modifiers,{type:info.action},sequenceName,combination,level);// add this call back to the array
// if it is a sequence put it at the beginning
// if not put it at the end
//
// this is important because the way these are processed expects
// the sequence ones to come first
self._callbacks[info.key][sequenceName?'unshift':'push']({callback:callback,modifiers:info.modifiers,action:info.action,seq:sequenceName,level:level,combo:combination});}/**
         * binds multiple combinations to the same callback
         *
         * @param {Array} combinations
         * @param {Function} callback
         * @param {string|undefined} action
         * @returns void
         */self._bindMultiple=function(combinations,callback,action){for(var i=0;i<combinations.length;++i){_bindSingle(combinations[i],callback,action);}};// start!
_addEvent(targetElement,'keypress',_handleKeyEvent);_addEvent(targetElement,'keydown',_handleKeyEvent);_addEvent(targetElement,'keyup',_handleKeyEvent);}/**
     * binds an event to mousetrap
     *
     * can be a single key, a combination of keys separated with +,
     * an array of keys, or a sequence of keys separated by spaces
     *
     * be sure to list the modifier keys first to make sure that the
     * correct key ends up getting bound (the last key in the pattern)
     *
     * @param {string|Array} keys
     * @param {Function} callback
     * @param {string=} action - 'keypress', 'keydown', or 'keyup'
     * @returns void
     */Mousetrap.prototype.bind=function(keys,callback,action){var self=this;keys=keys instanceof Array?keys:[keys];self._bindMultiple.call(self,keys,callback,action);return self;};/**
     * unbinds an event to mousetrap
     *
     * the unbinding sets the callback function of the specified key combo
     * to an empty function and deletes the corresponding key in the
     * _directMap dict.
     *
     * TODO: actually remove this from the _callbacks dictionary instead
     * of binding an empty function
     *
     * the keycombo+action has to be exactly the same as
     * it was defined in the bind method
     *
     * @param {string|Array} keys
     * @param {string} action
     * @returns void
     */Mousetrap.prototype.unbind=function(keys,action){var self=this;return self.bind.call(self,keys,function(){},action);};/**
     * triggers an event that has already been bound
     *
     * @param {string} keys
     * @param {string=} action
     * @returns void
     */Mousetrap.prototype.trigger=function(keys,action){var self=this;if(self._directMap[keys+':'+action]){self._directMap[keys+':'+action]({},keys);}return self;};/**
     * resets the library back to its initial state.  this is useful
     * if you want to clear out the current keyboard shortcuts and bind
     * new ones - for example if you switch to another page
     *
     * @returns void
     */Mousetrap.prototype.reset=function(){var self=this;self._callbacks={};self._directMap={};return self;};/**
     * should we stop this event before firing off callbacks
     *
     * @param {Event} e
     * @param {Element} element
     * @return {boolean}
     */Mousetrap.prototype.stopCallback=function(e,element){var self=this;// if the element has the class "mousetrap" then no need to stop
if((' '+element.className+' ').indexOf(' mousetrap ')>-1){return false;}if(_belongsTo(element,self.target)){return false;}// Events originating from a shadow DOM are re-targetted and `e.target` is the shadow host,
// not the initial event target in the shadow tree. Note that not all events cross the
// shadow boundary.
// For shadow trees with `mode: 'open'`, the initial event target is the first element in
// the event’s composed path. For shadow trees with `mode: 'closed'`, the initial event
// target cannot be obtained.
if('composedPath'in e&&typeof e.composedPath==='function'){// For open shadow trees, update `element` so that the following check works.
var initialEventTarget=e.composedPath()[0];if(initialEventTarget!==e.target){element=initialEventTarget;}}// stop for input, select, and textarea
return element.tagName=='INPUT'||element.tagName=='SELECT'||element.tagName=='TEXTAREA'||element.isContentEditable;};/**
     * exposes _handleKey publicly so it can be overwritten by extensions
     */Mousetrap.prototype.handleKey=function(){var self=this;return self._handleKey.apply(self,arguments);};/**
     * allow custom key mappings
     */Mousetrap.addKeycodes=function(object){for(var key in object){if(object.hasOwnProperty(key)){_MAP[key]=object[key];}}_REVERSE_MAP=null;};/**
     * Init the global mousetrap functions
     *
     * This method is needed to allow the global mousetrap functions to work
     * now that mousetrap is a constructor function.
     */Mousetrap.init=function(){var documentMousetrap=Mousetrap(document);for(var method in documentMousetrap){if(method.charAt(0)!=='_'){Mousetrap[method]=function(method){return function(){return documentMousetrap[method].apply(documentMousetrap,arguments);};}(method);}}};Mousetrap.init();// expose mousetrap to the global object
window.Mousetrap=Mousetrap;// expose as a common js module
if(typeof module!=='undefined'&&module.exports){module.exports=Mousetrap;}// expose mousetrap as an AMD module
if(true){!(__WEBPACK_AMD_DEFINE_RESULT__=function(){return Mousetrap;}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}})(typeof window!=='undefined'?window:null,typeof window!=='undefined'?document:null);/***/},/* 118 *//***/function(module,exports,__webpack_require__){function injectStyle(ssrContext){__webpack_require__(119);}var Component=__webpack_require__(0)(/* script */__webpack_require__(121),/* template */__webpack_require__(188),/* styles */injectStyle,/* scopeId */"data-v-368d96df",/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 119 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(120);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(4)("7a3fce10",content,true);/***/},/* 120 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(3)(undefined);// imports
// module
exports.push([module.i,".scoped-small-border[data-v-368d96df]{border:1px solid hsla(0,0%,72%,.8);padding:1rem;border-radius:4px}.scope-border-open-top[data-v-368d96df]{border-left:1px solid #cfcfcf;border-right:1px solid #cfcfcf;border-bottom:1px solid #cfcfcf}.scoped-fit-padding[data-v-368d96df]{padding-left:15px;padding-right:15px;padding-bottom:5px}",""]);// exports
/***/},/* 121 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_foreach__=__webpack_require__(8);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_foreach___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_foreach__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_keys__=__webpack_require__(6);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_keys___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_keys__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_filter__=__webpack_require__(22);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_filter___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_filter__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_reduce__=__webpack_require__(39);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_reduce___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_reduce__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4_lodash_isEmpty__=__webpack_require__(5);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4_lodash_isEmpty___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_isEmpty__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5_lodash_isObject__=__webpack_require__(2);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5_lodash_isObject___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isObject__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__mixins_eventChild_js__=__webpack_require__(18);//
/* harmony default export */__webpack_exports__["default"]={name:'questionoverview',mixin:[__WEBPACK_IMPORTED_MODULE_6__mixins_eventChild_js__["a"/* default */]],data:function data(){return{currentTab:''};},computed:{cleanCurrentQuestion:function cleanCurrentQuestion(){return this.stripScripts(this.$store.state.currentQuestionI10N[this.$store.state.activeLanguage].question);},cleanCurrentQuestionHelp:function cleanCurrentQuestionHelp(){return this.stripScripts(this.$store.state.currentQuestionI10N[this.$store.state.activeLanguage].help);},getNiceQuestionType:function getNiceQuestionType(){return this.$store.state.currentQuestion.typeInformation.description+' ('+this.translate('Group')+': '+this.$store.state.currentQuestion.typeInformation.group+')';},getNiceMandatory:function getNiceMandatory(){var result=this.$store.state.currentQuestion.mandatory=='Y'?this.translate('Yes'):this.translate('No');result+='&nbsp;<i class=\'fa '+(this.$store.state.currentQuestion.mandatory=='Y'?"fa-check":"fa-times")+' fa-ls\'></i>';return result;},getNiceEncrypted:function getNiceEncrypted(){var result=this.$store.state.currentQuestion.encrypted=='Y'?this.translate('Yes'):this.translate('No');result+='&nbsp;<i class=\'fa '+(this.$store.state.currentQuestion.encrypted=='Y'?"fa-check":"fa-times")+' fa-ls\'></i>';return result;},parsedRelevance:function parsedRelevance(){return this.$store.state.currentQuestion.relevance;}},methods:{stripScripts:function stripScripts(s){var div=document.createElement('div');div.innerHTML=s;var scripts=div.getElementsByTagName('script');var i=scripts.length;while(i--){scripts[i].parentNode.removeChild(scripts[i]);}return div.innerHTML;},selectLanguage:function selectLanguage(sLanguage){this.$log.log('LANGUAGE CHANGED',sLanguage);this.$store.commit('setActiveLanguage',sLanguage);},parseForLocalizedOption:function parseForLocalizedOption(value){if(__WEBPACK_IMPORTED_MODULE_5_lodash_isObject___default()(value)&&value[this.$store.state.activeLanguage]!=undefined){return value[this.$store.state.activeLanguage];}return value;}},mounted:function mounted(){this.toggleLoading(false);}};/***/},/* 122 *//***/function(module,exports,__webpack_require__){var baseFor=__webpack_require__(62),keys=__webpack_require__(6);/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}module.exports=baseForOwn;/***/},/* 123 *//***/function(module,exports){/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}return object;};}module.exports=createBaseFor;/***/},/* 124 *//***/function(module,exports){/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}module.exports=baseTimes;/***/},/* 125 *//***/function(module,exports,__webpack_require__){var baseGetTag=__webpack_require__(12),isObjectLike=__webpack_require__(9);/** `Object#toString` result references. */var argsTag='[object Arguments]';/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */function baseIsArguments(value){return isObjectLike(value)&&baseGetTag(value)==argsTag;}module.exports=baseIsArguments;/***/},/* 126 *//***/function(module,exports,__webpack_require__){var _Symbol3=__webpack_require__(14);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/** Built-in value references. */var symToStringTag=_Symbol3?_Symbol3.toStringTag:undefined;/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function getRawTag(value){var isOwn=hasOwnProperty.call(value,symToStringTag),tag=value[symToStringTag];try{value[symToStringTag]=undefined;var unmasked=true;}catch(e){}var result=nativeObjectToString.call(value);if(unmasked){if(isOwn){value[symToStringTag]=tag;}else{delete value[symToStringTag];}}return result;}module.exports=getRawTag;/***/},/* 127 *//***/function(module,exports){/** Used for built-in method references. */var objectProto=Object.prototype;/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var nativeObjectToString=objectProto.toString;/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function objectToString(value){return nativeObjectToString.call(value);}module.exports=objectToString;/***/},/* 128 *//***/function(module,exports){/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}module.exports=stubFalse;/***/},/* 129 *//***/function(module,exports,__webpack_require__){var baseGetTag=__webpack_require__(12),isLength=__webpack_require__(42),isObjectLike=__webpack_require__(9);/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[baseGetTag(value)];}module.exports=baseIsTypedArray;/***/},/* 130 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(module){var freeGlobal=__webpack_require__(64);/** Detect free variable `exports`. */var freeExports=(typeof exports==='undefined'?'undefined':_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&(typeof module==='undefined'?'undefined':_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{return freeProcess&&freeProcess.binding&&freeProcess.binding('util');}catch(e){}}();module.exports=nodeUtil;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(29)(module));/***/},/* 131 *//***/function(module,exports,__webpack_require__){var overArg=__webpack_require__(66);/* Built-in method references for those with the same name as other `lodash` methods. */var nativeKeys=overArg(Object.keys,Object);module.exports=nativeKeys;/***/},/* 132 *//***/function(module,exports,__webpack_require__){var isArrayLike=__webpack_require__(10);/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection;}if(!isArrayLike(collection)){return eachFunc(collection,iteratee);}var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){break;}}return collection;};}module.exports=createBaseEach;/***/},/* 133 *//***/function(module,exports,__webpack_require__){var identity=__webpack_require__(15);/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */function castFunction(value){return typeof value=='function'?value:identity;}module.exports=castFunction;/***/},/* 134 *//***/function(module,exports,__webpack_require__){var baseEach=__webpack_require__(28);/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */function baseFilter(collection,predicate){var result=[];baseEach(collection,function(value,index,collection){if(predicate(value,index,collection)){result.push(value);}});return result;}module.exports=baseFilter;/***/},/* 135 *//***/function(module,exports,__webpack_require__){var baseIsMatch=__webpack_require__(136),getMatchData=__webpack_require__(175),matchesStrictComparable=__webpack_require__(77);/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}module.exports=baseMatches;/***/},/* 136 *//***/function(module,exports,__webpack_require__){var Stack=__webpack_require__(32),baseIsEqual=__webpack_require__(47);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG,customizer,stack):result)){return false;}}}return true;}module.exports=baseIsMatch;/***/},/* 137 *//***/function(module,exports){/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];this.size=0;}module.exports=listCacheClear;/***/},/* 138 *//***/function(module,exports,__webpack_require__){var assocIndexOf=__webpack_require__(34);/** Used for built-in method references. */var arrayProto=Array.prototype;/** Built-in value references. */var splice=arrayProto.splice;/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}--this.size;return true;}module.exports=listCacheDelete;/***/},/* 139 *//***/function(module,exports,__webpack_require__){var assocIndexOf=__webpack_require__(34);/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}module.exports=listCacheGet;/***/},/* 140 *//***/function(module,exports,__webpack_require__){var assocIndexOf=__webpack_require__(34);/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}module.exports=listCacheHas;/***/},/* 141 *//***/function(module,exports,__webpack_require__){var assocIndexOf=__webpack_require__(34);/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){++this.size;data.push([key,value]);}else{data[index][1]=value;}return this;}module.exports=listCacheSet;/***/},/* 142 *//***/function(module,exports,__webpack_require__){var ListCache=__webpack_require__(33);/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new ListCache();this.size=0;}module.exports=stackClear;/***/},/* 143 *//***/function(module,exports){/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(key){var data=this.__data__,result=data['delete'](key);this.size=data.size;return result;}module.exports=stackDelete;/***/},/* 144 *//***/function(module,exports){/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(key){return this.__data__.get(key);}module.exports=stackGet;/***/},/* 145 *//***/function(module,exports){/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(key){return this.__data__.has(key);}module.exports=stackHas;/***/},/* 146 *//***/function(module,exports,__webpack_require__){var ListCache=__webpack_require__(33),Map=__webpack_require__(45),MapCache=__webpack_require__(46);/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(key,value){var data=this.__data__;if(data instanceof ListCache){var pairs=data.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);this.size=++data.size;return this;}data=this.__data__=new MapCache(pairs);}data.set(key,value);this.size=data.size;return this;}module.exports=stackSet;/***/},/* 147 *//***/function(module,exports,__webpack_require__){var isFunction=__webpack_require__(44),isMasked=__webpack_require__(148),isObject=__webpack_require__(2),toSource=__webpack_require__(68);/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used for built-in method references. */var funcProto=Function.prototype,objectProto=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}module.exports=baseIsNative;/***/},/* 148 *//***/function(module,exports,__webpack_require__){var coreJsData=__webpack_require__(149);/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}module.exports=isMasked;/***/},/* 149 *//***/function(module,exports,__webpack_require__){var root=__webpack_require__(7);/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];module.exports=coreJsData;/***/},/* 150 *//***/function(module,exports){/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}module.exports=getValue;/***/},/* 151 *//***/function(module,exports,__webpack_require__){var Hash=__webpack_require__(152),ListCache=__webpack_require__(33),Map=__webpack_require__(45);/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.size=0;this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}module.exports=mapCacheClear;/***/},/* 152 *//***/function(module,exports,__webpack_require__){var hashClear=__webpack_require__(153),hashDelete=__webpack_require__(154),hashGet=__webpack_require__(155),hashHas=__webpack_require__(156),hashSet=__webpack_require__(157);/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries==null?0:entries.length;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;module.exports=Hash;/***/},/* 153 *//***/function(module,exports,__webpack_require__){var nativeCreate=__webpack_require__(35);/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};this.size=0;}module.exports=hashClear;/***/},/* 154 *//***/function(module,exports){/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){var result=this.has(key)&&delete this.__data__[key];this.size-=result?1:0;return result;}module.exports=hashDelete;/***/},/* 155 *//***/function(module,exports,__webpack_require__){var nativeCreate=__webpack_require__(35);/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}module.exports=hashGet;/***/},/* 156 *//***/function(module,exports,__webpack_require__){var nativeCreate=__webpack_require__(35);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}module.exports=hashHas;/***/},/* 157 *//***/function(module,exports,__webpack_require__){var nativeCreate=__webpack_require__(35);/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;this.size+=this.has(key)?0:1;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}module.exports=hashSet;/***/},/* 158 *//***/function(module,exports,__webpack_require__){var getMapData=__webpack_require__(36);/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){var result=getMapData(this,key)['delete'](key);this.size-=result?1:0;return result;}module.exports=mapCacheDelete;/***/},/* 159 *//***/function(module,exports){/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}module.exports=isKeyable;/***/},/* 160 *//***/function(module,exports,__webpack_require__){var getMapData=__webpack_require__(36);/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}module.exports=mapCacheGet;/***/},/* 161 *//***/function(module,exports,__webpack_require__){var getMapData=__webpack_require__(36);/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}module.exports=mapCacheHas;/***/},/* 162 *//***/function(module,exports,__webpack_require__){var getMapData=__webpack_require__(36);/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){var data=getMapData(this,key),size=data.size;data.set(key,value);this.size+=data.size==size?0:1;return this;}module.exports=mapCacheSet;/***/},/* 163 *//***/function(module,exports,__webpack_require__){var Stack=__webpack_require__(32),equalArrays=__webpack_require__(69),equalByTag=__webpack_require__(169),equalObjects=__webpack_require__(170),getTag=__webpack_require__(37),isArray=__webpack_require__(1),isBuffer=__webpack_require__(20),isTypedArray=__webpack_require__(30);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',objectTag='[object Object]';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?arrayTag:getTag(object),othTag=othIsArr?arrayTag:getTag(other);objTag=objTag==argsTag?objectTag:objTag;othTag=othTag==argsTag?objectTag:othTag;var objIsObj=objTag==objectTag,othIsObj=othTag==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other)){return false;}objIsArr=true;objIsObj=false;}if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);}if(!(bitmask&COMPARE_PARTIAL_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,bitmask,customizer,equalFunc,stack);}module.exports=baseIsEqualDeep;/***/},/* 164 *//***/function(module,exports,__webpack_require__){var MapCache=__webpack_require__(46),setCacheAdd=__webpack_require__(165),setCacheHas=__webpack_require__(166);/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function SetCache(values){var index=-1,length=values==null?0:values.length;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}// Add methods to `SetCache`.
SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;module.exports=SetCache;/***/},/* 165 *//***/function(module,exports){/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}module.exports=setCacheAdd;/***/},/* 166 *//***/function(module,exports){/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */function setCacheHas(value){return this.__data__.has(value);}module.exports=setCacheHas;/***/},/* 167 *//***/function(module,exports){/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */function arraySome(array,predicate){var index=-1,length=array==null?0:array.length;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}module.exports=arraySome;/***/},/* 168 *//***/function(module,exports){/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function cacheHas(cache,key){return cache.has(key);}module.exports=cacheHas;/***/},/* 169 *//***/function(module,exports,__webpack_require__){var _Symbol4=__webpack_require__(14),Uint8Array=__webpack_require__(70),eq=__webpack_require__(24),equalArrays=__webpack_require__(69),mapToArray=__webpack_require__(71),setToArray=__webpack_require__(72);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/** `Object#toString` result references. */var boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',mapTag='[object Map]',numberTag='[object Number]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]';/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol4?_Symbol4.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&COMPARE_PARTIAL_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=COMPARE_UNORDERED_FLAG;// Recursively compare objects (susceptible to call stack limits).
stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}module.exports=equalByTag;/***/},/* 170 *//***/function(module,exports,__webpack_require__){var getAllKeys=__webpack_require__(73);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1;/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=bitmask&COMPARE_PARTIAL_FLAG,objProps=getAllKeys(object),objLength=objProps.length,othProps=getAllKeys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false;}}// Assume cyclic values are equal.
var stacked=stack.get(object);if(stacked&&stack.get(other)){return stacked==other;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}module.exports=equalObjects;/***/},/* 171 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(13),root=__webpack_require__(7);/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView');module.exports=DataView;/***/},/* 172 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(13),root=__webpack_require__(7);/* Built-in method references that are verified to be native. */var Promise=getNative(root,'Promise');module.exports=Promise;/***/},/* 173 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(13),root=__webpack_require__(7);/* Built-in method references that are verified to be native. */var Set=getNative(root,'Set');module.exports=Set;/***/},/* 174 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(13),root=__webpack_require__(7);/* Built-in method references that are verified to be native. */var WeakMap=getNative(root,'WeakMap');module.exports=WeakMap;/***/},/* 175 *//***/function(module,exports,__webpack_require__){var isStrictComparable=__webpack_require__(76),keys=__webpack_require__(6);/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}module.exports=getMatchData;/***/},/* 176 *//***/function(module,exports,__webpack_require__){var baseIsEqual=__webpack_require__(47),get=__webpack_require__(177),hasIn=__webpack_require__(79),isKey=__webpack_require__(50),isStrictComparable=__webpack_require__(76),matchesStrictComparable=__webpack_require__(77),toKey=__webpack_require__(17);/** Used to compose bitmasks for value comparisons. */var COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,COMPARE_PARTIAL_FLAG|COMPARE_UNORDERED_FLAG);};}module.exports=baseMatchesProperty;/***/},/* 177 *//***/function(module,exports,__webpack_require__){var baseGet=__webpack_require__(38);/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}module.exports=get;/***/},/* 178 *//***/function(module,exports,__webpack_require__){var memoizeCapped=__webpack_require__(179);/** Used to match property names within property paths. */var reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */var stringToPath=memoizeCapped(function(string){var result=[];if(reLeadingDot.test(string)){result.push('');}string.replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,'$1'):number||match);});return result;});module.exports=stringToPath;/***/},/* 179 *//***/function(module,exports,__webpack_require__){var memoize=__webpack_require__(180);/** Used as the maximum memoize cache size. */var MAX_MEMOIZE_SIZE=500;/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */function memoizeCapped(func){var result=memoize(func,function(key){if(cache.size===MAX_MEMOIZE_SIZE){cache.clear();}return key;});var cache=result.cache;return result;}module.exports=memoizeCapped;/***/},/* 180 *//***/function(module,exports,__webpack_require__){var MapCache=__webpack_require__(46);/** Error message constants. */var FUNC_ERROR_TEXT='Expected a function';/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */function memoize(func,resolver){if(typeof func!='function'||resolver!=null&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result)||cache;return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Expose `MapCache`.
memoize.Cache=MapCache;module.exports=memoize;/***/},/* 181 *//***/function(module,exports,__webpack_require__){var baseToString=__webpack_require__(182);/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */function toString(value){return value==null?'':baseToString(value);}module.exports=toString;/***/},/* 182 *//***/function(module,exports,__webpack_require__){var _Symbol5=__webpack_require__(14),arrayMap=__webpack_require__(78),isArray=__webpack_require__(1),isSymbol=__webpack_require__(16);/** Used as references for various `Number` constants. */var INFINITY=1/0;/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol5?_Symbol5.prototype:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
if(typeof value=='string'){return value;}if(isArray(value)){// Recursively convert values (susceptible to call stack limits).
return arrayMap(value,baseToString)+'';}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}module.exports=baseToString;/***/},/* 183 *//***/function(module,exports){/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */function baseHasIn(object,key){return object!=null&&key in Object(object);}module.exports=baseHasIn;/***/},/* 184 *//***/function(module,exports,__webpack_require__){var castPath=__webpack_require__(25),isArguments=__webpack_require__(19),isArray=__webpack_require__(1),isIndex=__webpack_require__(21),isLength=__webpack_require__(42),toKey=__webpack_require__(17);/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */function hasPath(object,path,hasFunc){path=castPath(path,object);var index=-1,length=path.length,result=false;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result||++index!=length){return result;}length=object==null?0:object.length;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}module.exports=hasPath;/***/},/* 185 *//***/function(module,exports,__webpack_require__){var baseProperty=__webpack_require__(80),basePropertyDeep=__webpack_require__(186),isKey=__webpack_require__(50),toKey=__webpack_require__(17);/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}module.exports=property;/***/},/* 186 *//***/function(module,exports,__webpack_require__){var baseGet=__webpack_require__(38);/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}module.exports=basePropertyDeep;/***/},/* 187 *//***/function(module,exports){/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){eachFunc(collection,function(value,index,collection){accumulator=initAccum?(initAccum=false,value):iteratee(accumulator,value,index,collection);});return accumulator;}module.exports=baseReduce;/***/},/* 188 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-sm-8 col-xs-12"},[_c('div',{staticClass:"panel panel-default"},[_c('div',{staticClass:"panel-heading"},[_vm._v("\n        "+_vm._s(_vm._f("translate")('Text elements'))+"\n        ")]),_vm._v(" "),_c('ul',{staticClass:"list-group"},[_c('li',{staticClass:"list-group-item"},[_c('div',{staticClass:"ls-flex-row wrap col-12"},[_c('div',{staticClass:"col-12"},[_vm._v(_vm._s(_vm._f("translate")('Question')))]),_vm._v(" "),_c('div',{staticClass:"col-12 scoped-small-border",domProps:{"innerHTML":_vm._s(_vm.cleanCurrentQuestion)}})])]),_vm._v(" "),_c('li',{staticClass:"list-group-item"},[_c('div',{staticClass:"ls-flex-row wrap col-12"},[_c('div',{staticClass:"col-12"},[_vm._v(_vm._s(_vm._f("translate")('Help')))]),_vm._v(" "),_c('div',{staticClass:"col-12 scoped-small-border",domProps:{"innerHTML":_vm._s(_vm.cleanCurrentQuestionHelp)}})])])])])]);},staticRenderFns:[]/***/};},/* 189 *//***/function(module,exports,__webpack_require__){function injectStyle(ssrContext){__webpack_require__(190);}var Component=__webpack_require__(0)(/* script */__webpack_require__(192),/* template */__webpack_require__(214),/* styles */injectStyle,/* scopeId */"data-v-33645a86",/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 190 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(191);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(4)("603045d2",content,true);/***/},/* 191 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(3)(undefined);// imports
// module
exports.push([module.i,".scope-set-min-height[data-v-33645a86]{min-height:40vh}.scope-border-simple[data-v-33645a86]{border:1px solid #cfcfcf}.scope-overflow-scroll[data-v-33645a86]{overflow:scroll;height:100%;width:100%}.scope-preview[data-v-33645a86]{margin:15px 5px;padding:2rem;border:3px double #dfdfdf;min-height:20vh;resize:vertical;overflow:auto}.scope-contains-ckeditor[data-v-33645a86]{min-height:10rem}",""]);// exports
/***/},/* 192 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__ckeditor_ckeditor5_build_classic__=__webpack_require__(81);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__ckeditor_ckeditor5_build_classic___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ckeditor_ckeditor5_build_classic__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_debounce__=__webpack_require__(193);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_debounce___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_debounce__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_isEqual__=__webpack_require__(195);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_isEqual___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isEqual__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_merge__=__webpack_require__(11);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_merge___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_merge__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__subcomponents_previewFrame_vue__=__webpack_require__(209);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__subcomponents_previewFrame_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__subcomponents_previewFrame_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__mixins_runAjax_js__=__webpack_require__(57);/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__mixins_eventChild_js__=__webpack_require__(18);/* harmony default export */__webpack_exports__["default"]={name:'MainEditor',mixins:[__WEBPACK_IMPORTED_MODULE_5__mixins_runAjax_js__["a"/* default */],__WEBPACK_IMPORTED_MODULE_6__mixins_eventChild_js__["a"/* default */]],components:{PreviewFrame:__WEBPACK_IMPORTED_MODULE_4__subcomponents_previewFrame_vue___default.a},data:function data(){var _this320=this;return{editorQuestion:__WEBPACK_IMPORTED_MODULE_0__ckeditor_ckeditor5_build_classic___default.a,editorQuestionData:'',editorQuestionConfig:{},editorHelp:__WEBPACK_IMPORTED_MODULE_0__ckeditor_ckeditor5_build_classic___default.a,editorHelpData:'',editorHelpConfig:{},previewContent:' ',previewLoading:false,previewActive:true,debug:false,firstStart:true,changeTriggered:__WEBPACK_IMPORTED_MODULE_1_lodash_debounce___default()(function(content,event){_this320.$log.log('Debounced load triggered',{content:content,event:event});_this320.getQuestionPreview();},3000)};},computed:{previewRootUrl:function previewRootUrl(){return window.QuestionEditData.qid!=null?[window.QuestionEditData.connectorBaseUrl,'/getRenderedPreview/iQuestionId/',window.QuestionEditData.qid,this.firstStart?'/root/1':'','/sLanguage/',this.$store.state.activeLanguage].join(''):'about:blank';},currentQuestionQuestion:{get:function get(){return this.$store.state.currentQuestionI10N[this.$store.state.activeLanguage].question;},set:function set(newValue){this.$store.commit('updateCurrentQuestionI10NValue',{value:'question',newValue:newValue});}},currentQuestionHelp:{get:function get(){return this.$store.state.currentQuestionI10N[this.$store.state.activeLanguage].help;},set:function set(newValue){this.$store.commit('updateCurrentQuestionI10NValue',{value:'help',newValue:newValue});}},currentQuestionI10N:function currentQuestionI10N(){return this.$store.state.currentQuestionI10N[this.$store.state.activeLanguage];},questionImmutableI10NQuestion:function questionImmutableI10NQuestion(){return this.$store.state.questionImmutableI10N[this.$store.state.activeLanguage].question;},questionImmutableI10NHelp:function questionImmutableI10NHelp(){return this.$store.state.questionImmutableI10N[this.$store.state.activeLanguage].help;}},methods:{changedParts:function changedParts(){var changed={};this.$log.log('CHANGE!',{currentQuestionQuestion:this.currentQuestionQuestion,questionImmutableI10NQuestion:this.questionImmutableI10NQuestion,currentQuestionHelp:this.currentQuestionHelp,questionImmutableI10NHelp:this.questionImmutableI10NHelp,'questionEqal':__WEBPACK_IMPORTED_MODULE_2_lodash_isEqual___default()(this.currentQuestionQuestion,this.questionImmutableI10NQuestion),'helpEqual':__WEBPACK_IMPORTED_MODULE_2_lodash_isEqual___default()(this.currentQuestionHelp,this.questionImmutableI10NHelp)});if(!(__WEBPACK_IMPORTED_MODULE_2_lodash_isEqual___default()(this.currentQuestionQuestion,this.questionImmutableI10NQuestion)&&__WEBPACK_IMPORTED_MODULE_2_lodash_isEqual___default()(this.currentQuestionHelp,this.questionImmutableI10NHelp))){changed['changedText']=this.currentQuestionI10N;}if(!__WEBPACK_IMPORTED_MODULE_2_lodash_isEqual___default()(this.$store.state.currentQuestion.type,this.$store.state.questionImmutable.type)){changed['changedType']=this.$store.state.currentQuestion.type;}this.$log.log('CHANGEOBJECT',changed);return __WEBPACK_IMPORTED_MODULE_3_lodash_merge___default()(changed,window.LS.data.csrfTokenData);},runDebouncedChange:function runDebouncedChange(content,event){this.changeTriggered(content,event);},triggerPreview:function triggerPreview(){this.previewActive=!this.previewActive;if(this.previewActive){this.getQuestionPreview();}},getQuestionPreview:function getQuestionPreview(){var _this321=this;this.$log.log('window.QuestionEditData.qid',window.QuestionEditData.qid);if(!window.QuestionEditData.qid){this.previewContent='<div><h3>'+this.translate('No preview available')+'</h3></div>';this.previewLoading=false;return;}if(this.previewLoading===true){return;}this.firstStart=false;this.previewLoading=true;this.$_load(this.previewRootUrl,this.changedParts(),'POST').then(function(result){_this321.previewContent=result.data;_this321.previewLoading=false;},function(error){_this321.$log.error('Error loading preview',error);_this321.previewLoading=false;});},setPreviewReady:function setPreviewReady(){this.previewLoading=false;this.firstStart=false;}},mounted:function mounted(){this.previewLoading=true;this.toggleLoading(false);}};/***/},/* 193 *//***/function(module,exports,__webpack_require__){var isObject=__webpack_require__(2),now=__webpack_require__(194),toNumber=__webpack_require__(82);/** Error message constants. */var FUNC_ERROR_TEXT='Expected a function';/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max,nativeMin=Math.min;/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=false,maxing=false,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}wait=toNumber(wait)||0;if(isObject(options)){leading=!!options.leading;maxing='maxWait'in options;maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait;trailing='trailing'in options?!!options.trailing:trailing;}function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result;}function leadingEdge(time){// Reset any `maxWait` timer.
lastInvokeTime=time;// Start the timer for the trailing edge.
timerId=setTimeout(timerExpired,wait);// Invoke the leading edge.
return leading?invokeFunc(time):result;}function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,result=wait-timeSinceLastCall;return maxing?nativeMin(result,maxWait-timeSinceLastInvoke):result;}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return lastCallTime===undefined||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait;}function timerExpired(){var time=now();if(shouldInvoke(time)){return trailingEdge(time);}// Restart the timer.
timerId=setTimeout(timerExpired,remainingWait(time));}function trailingEdge(time){timerId=undefined;// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
if(trailing&&lastArgs){return invokeFunc(time);}lastArgs=lastThis=undefined;return result;}function cancel(){if(timerId!==undefined){clearTimeout(timerId);}lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined;}function flush(){return timerId===undefined?result:trailingEdge(now());}function debounced(){var time=now(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime);}if(maxing){// Handle invocations in a tight loop.
timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime);}}if(timerId===undefined){timerId=setTimeout(timerExpired,wait);}return result;}debounced.cancel=cancel;debounced.flush=flush;return debounced;}module.exports=debounce;/***/},/* 194 *//***/function(module,exports,__webpack_require__){var root=__webpack_require__(7);/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */var now=function now(){return root.Date.now();};module.exports=now;/***/},/* 195 *//***/function(module,exports,__webpack_require__){var baseIsEqual=__webpack_require__(47);/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */function isEqual(value,other){return baseIsEqual(value,other);}module.exports=isEqual;/***/},/* 196 *//***/function(module,exports,__webpack_require__){var Stack=__webpack_require__(32),assignMergeValue=__webpack_require__(83),baseFor=__webpack_require__(62),baseMergeDeep=__webpack_require__(197),isObject=__webpack_require__(2),keysIn=__webpack_require__(40);/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */function baseMerge(object,source,srcIndex,customizer,stack){if(object===source){return;}baseFor(source,function(srcValue,key){if(isObject(srcValue)){stack||(stack=new Stack());baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);}else{var newValue=customizer?customizer(object[key],srcValue,key+'',object,source,stack):undefined;if(newValue===undefined){newValue=srcValue;}assignMergeValue(object,key,newValue);}},keysIn);}module.exports=baseMerge;/***/},/* 197 *//***/function(module,exports,__webpack_require__){var assignMergeValue=__webpack_require__(83),cloneBuffer=__webpack_require__(85),cloneTypedArray=__webpack_require__(86),copyArray=__webpack_require__(87),initCloneObject=__webpack_require__(88),isArguments=__webpack_require__(19),isArray=__webpack_require__(1),isArrayLikeObject=__webpack_require__(199),isBuffer=__webpack_require__(20),isFunction=__webpack_require__(44),isObject=__webpack_require__(2),isPlainObject=__webpack_require__(200),isTypedArray=__webpack_require__(30),toPlainObject=__webpack_require__(201);/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=object[key],srcValue=source[key],stacked=stack.get(srcValue);if(stacked){assignMergeValue(object,key,stacked);return;}var newValue=customizer?customizer(objValue,srcValue,key+'',object,source,stack):undefined;var isCommon=newValue===undefined;if(isCommon){var isArr=isArray(srcValue),isBuff=!isArr&&isBuffer(srcValue),isTyped=!isArr&&!isBuff&&isTypedArray(srcValue);newValue=srcValue;if(isArr||isBuff||isTyped){if(isArray(objValue)){newValue=objValue;}else if(isArrayLikeObject(objValue)){newValue=copyArray(objValue);}else if(isBuff){isCommon=false;newValue=cloneBuffer(srcValue,true);}else if(isTyped){isCommon=false;newValue=cloneTypedArray(srcValue,true);}else{newValue=[];}}else if(isPlainObject(srcValue)||isArguments(srcValue)){newValue=objValue;if(isArguments(objValue)){newValue=toPlainObject(objValue);}else if(!isObject(objValue)||srcIndex&&isFunction(objValue)){newValue=initCloneObject(srcValue);}}else{isCommon=false;}}if(isCommon){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,newValue);mergeFunc(newValue,srcValue,srcIndex,customizer,stack);stack['delete'](srcValue);}assignMergeValue(object,key,newValue);}module.exports=baseMergeDeep;/***/},/* 198 *//***/function(module,exports,__webpack_require__){var isObject=__webpack_require__(2);/** Built-in value references. */var objectCreate=Object.create;/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */var baseCreate=function(){function object(){}return function(proto){if(!isObject(proto)){return{};}if(objectCreate){return objectCreate(proto);}object.prototype=proto;var result=new object();object.prototype=undefined;return result;};}();module.exports=baseCreate;/***/},/* 199 *//***/function(module,exports,__webpack_require__){var isArrayLike=__webpack_require__(10),isObjectLike=__webpack_require__(9);/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}module.exports=isArrayLikeObject;/***/},/* 200 *//***/function(module,exports,__webpack_require__){var baseGetTag=__webpack_require__(12),getPrototype=__webpack_require__(54),isObjectLike=__webpack_require__(9);/** `Object#toString` result references. */var objectTag='[object Object]';/** Used for built-in method references. */var funcProto=Function.prototype,objectProto=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */function isPlainObject(value){if(!isObjectLike(value)||baseGetTag(value)!=objectTag){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}module.exports=isPlainObject;/***/},/* 201 *//***/function(module,exports,__webpack_require__){var copyObject=__webpack_require__(26),keysIn=__webpack_require__(40);/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */function toPlainObject(value){return copyObject(value,keysIn(value));}module.exports=toPlainObject;/***/},/* 202 *//***/function(module,exports,__webpack_require__){var isObject=__webpack_require__(2),isPrototype=__webpack_require__(31),nativeKeysIn=__webpack_require__(203);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}module.exports=baseKeysIn;/***/},/* 203 *//***/function(module,exports){/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}module.exports=nativeKeysIn;/***/},/* 204 *//***/function(module,exports,__webpack_require__){var baseRest=__webpack_require__(89),isIterateeCall=__webpack_require__(56);/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}module.exports=createAssigner;/***/},/* 205 *//***/function(module,exports){/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}module.exports=apply;/***/},/* 206 *//***/function(module,exports,__webpack_require__){var constant=__webpack_require__(207),defineProperty=__webpack_require__(84),identity=__webpack_require__(15);/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */var baseSetToString=!defineProperty?identity:function(func,string){return defineProperty(func,'toString',{'configurable':true,'enumerable':false,'value':constant(string),'writable':true});};module.exports=baseSetToString;/***/},/* 207 *//***/function(module,exports){/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */function constant(value){return function(){return value;};}module.exports=constant;/***/},/* 208 *//***/function(module,exports){/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=800,HOT_SPAN=16;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeNow=Date.now;/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */function shortOut(func){var count=0,lastCalled=0;return function(){var stamp=nativeNow(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return arguments[0];}}else{count=0;}return func.apply(undefined,arguments);};}module.exports=shortOut;/***/},/* 209 *//***/function(module,exports,__webpack_require__){function injectStyle(ssrContext){__webpack_require__(210);}var Component=__webpack_require__(0)(/* script */__webpack_require__(212),/* template */__webpack_require__(213),/* styles */injectStyle,/* scopeId */"data-v-6b27a1ca",/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 210 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(211);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(4)("60c19a59",content,true);/***/},/* 211 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(3)(undefined);// imports
// module
exports.push([module.i,".scope-loader[data-v-6b27a1ca]{position:absolute;left:20%;top:20%;height:60%;width:60%;background-color:#f5f5f5}.scope-iframe-fill[data-v-6b27a1ca]{width:100%;height:100%;padding:0;margin:0}",""]);// exports
/***/},/* 212 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_foreach__=__webpack_require__(8);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_foreach___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_foreach__);//
/* harmony default export */__webpack_exports__["default"]={name:'previewFrame',props:{rootUrl:{type:String,required:true},id:{type:String,required:true},content:{type:String,default:''},htmlClass:{type:String,default:''},loading:{type:Boolean,default:true},firstStart:{type:Boolean,default:false}},data:function data(){return{src:'#',documentIframe:null,iframeId:'',iFrameContent:''};},methods:{getRandomId:function getRandomId(){var random=Math.random();var date=new Date().getTime();return this.id+'-'+Math.floor((random*10000000000000+date)/10000);}},watch:{content:function content(newContent){try{var contents=this.documentIframe.contents();this.$log.log(this.$documentIframe);this.$log.log(contents);this.documentIframe.contents().find('body').text('');this.documentIframe.contents().find('body').html(newContent);this.documentIframe[0].contentWindow.jQuery(document).trigger('pjax:scriptcomplete');}catch(e){this.$log.error(e);}}},mounted:function mounted(){var _this322=this;this.documentIframe=$(this.documentIframe);this.documentIframe.on('load',function(){_this322.$emit('ready');});this.documentIframe.attr('src',this.rootUrl);$('#'+this.id).append(this.documentIframe);},created:function created(){var iframeID=this.getRandomId();this.iframeId=iframeID;this.documentIframe='<iframe id=\''+iframeID+'\' style=\'width:100%;height:100%;border:none;\' />';}};/***/},/* 213 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"scope-iframe-fill",class:_vm.htmlClass,attrs:{"border":"0","id":_vm.id}},[_vm.loading?_c('div',{staticClass:"ls-flex align-content-center align-items-center scope-loader"},[_vm._m(0)]):_vm._e()]);},staticRenderFns:[function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"loader-advancedquestionsettings text-center"},[_c('div',{staticClass:"contain-pulse animate-pulse"},[_c('div',{staticClass:"square"}),_vm._v(" "),_c('div',{staticClass:"square"}),_vm._v(" "),_c('div',{staticClass:"square"}),_vm._v(" "),_c('div',{staticClass:"square"})])]);}]/***/};},/* 214 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-sm-8 col-xs-12"},[_c('div',{staticClass:"panel panel-default question-option-general-container"},[_c('div',{staticClass:"panel-heading"},[_vm._v(" "+_vm._s(_vm._f("translate")("Text elements")))]),_vm._v(" "),_c('div',{staticClass:"panel-body"},[_c('div',{staticClass:"col-12 ls-space margin all-5 scope-contains-ckeditor "},[_c('label',{staticClass:"col-sm-12"},[_vm._v(_vm._s(_vm._f("translate")('Question'))+":")]),_vm._v(" "),_c('ckeditor',{attrs:{"editor":_vm.editorQuestion,"config":_vm.editorQuestionConfig},on:{"input":_vm.runDebouncedChange},model:{value:_vm.currentQuestionQuestion,callback:function callback($$v){_vm.currentQuestionQuestion=$$v;},expression:"currentQuestionQuestion"}})],1),_vm._v(" "),_c('div',{staticClass:"col-12 ls-space margin all-5 scope-contains-ckeditor "},[_c('label',{staticClass:"col-sm-12"},[_vm._v(_vm._s(_vm._f("translate")('Help'))+":")]),_vm._v(" "),_c('ckeditor',{attrs:{"editor":_vm.editorHelp,"config":_vm.editorHelpConfig},on:{"input":_vm.runDebouncedChange},model:{value:_vm.currentQuestionHelp,callback:function callback($$v){_vm.currentQuestionHelp=$$v;},expression:"currentQuestionHelp"}})],1)])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12 ls-space margin bottom-5"},[_c('button',{staticClass:"btn btn-default pull-right",on:{"click":function click($event){$event.preventDefault();_vm.triggerPreview($event);}}},[_vm._v("\n                "+_vm._s(_vm.previewActive?"Hide Preview":"Show Preview")+"\n            ")])]),_vm._v(" "),_c('div',{staticClass:"col-sm-12 ls-space margin top-5 bottom-5"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:_vm.previewActive,expression:"previewActive"}],staticClass:"scope-preview"},[_c('PreviewFrame',{attrs:{"id":'previewFrame',"content":_vm.previewContent,"root-url":_vm.previewRootUrl,"firstStart":_vm.firstStart,"loading":_vm.previewLoading},on:{"ready":_vm.setPreviewReady}})],1)])])]);},staticRenderFns:[function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12 ls-space margin top-5 bottom-5"},[_c('hr')])]);}]/***/};},/* 215 *//***/function(module,exports,__webpack_require__){function injectStyle(ssrContext){__webpack_require__(216);}var Component=__webpack_require__(0)(/* script */__webpack_require__(218),/* template */__webpack_require__(234),/* styles */injectStyle,/* scopeId */"data-v-df131e4a",/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 216 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(217);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(4)("4fa77e94",content,true);/***/},/* 217 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(3)(undefined);// imports
// module
exports.push([module.i,".scope-general-setting-block[data-v-df131e4a]{margin:1rem .1rem}.scope-set-min-height[data-v-df131e4a]{min-height:40vh}",""]);// exports
/***/},/* 218 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_filter__=__webpack_require__(22);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_filter___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_filter__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__inputtypes_switch_vue__=__webpack_require__(92);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1__inputtypes_switch_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__inputtypes_switch_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__inputtypes_text_vue__=__webpack_require__(93);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2__inputtypes_text_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__inputtypes_text_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__inputtypes_select_vue__=__webpack_require__(94);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__inputtypes_select_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__inputtypes_select_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__inputtypes_textdisplay_vue__=__webpack_require__(95);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__inputtypes_textdisplay_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__inputtypes_textdisplay_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__inputtypes_textarea_vue__=__webpack_require__(96);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__inputtypes_textarea_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__inputtypes_textarea_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__inputtypes_stub_vue__=__webpack_require__(97);/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__inputtypes_stub_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__inputtypes_stub_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_7__mixins_eventChild_js__=__webpack_require__(18);/* harmony default export */__webpack_exports__["default"]={name:'GeneralSettings',mixins:[__WEBPACK_IMPORTED_MODULE_7__mixins_eventChild_js__["a"/* default */]],components:{'setting-switch':__WEBPACK_IMPORTED_MODULE_1__inputtypes_switch_vue___default.a,'setting-text':__WEBPACK_IMPORTED_MODULE_4__inputtypes_textdisplay_vue___default.a,'setting-select':__WEBPACK_IMPORTED_MODULE_3__inputtypes_select_vue___default.a,'setting-textinput':__WEBPACK_IMPORTED_MODULE_2__inputtypes_text_vue___default.a,'setting-textarea':__WEBPACK_IMPORTED_MODULE_5__inputtypes_textarea_vue___default.a,'stub-set':__WEBPACK_IMPORTED_MODULE_6__inputtypes_stub_vue___default.a},props:{readonly:{type:Boolean,default:false}},data:function data(){return{};},computed:{generalSettingOptions:function generalSettingOptions(){return __WEBPACK_IMPORTED_MODULE_0_lodash_filter___default()(this.$store.state.currentQuestionGeneralSettings,function(questionSetting){return questionSetting.inputtype!=undefined;});}},methods:{getComponentName:function getComponentName(componentRawName){if(componentRawName!=undefined)return'setting-'+componentRawName;return'stub-set';},reactOnChange:function reactOnChange(newValue,oSettingObject){this.$store.commit('setQuestionGeneralSetting',{newValue:newValue,settingName:oSettingObject.formElementId});}}};/***/},/* 219 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_merge__=__webpack_require__(11);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_merge___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_merge__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty__=__webpack_require__(5);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_filter__=__webpack_require__(22);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_filter___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_filter__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_vue_bootstrap_toggle__=__webpack_require__(220);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_vue_bootstrap_toggle___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_bootstrap_toggle__);/* harmony default export */__webpack_exports__["default"]={name:'setting-checkboxswitch',components:{BootstrapToggle:__WEBPACK_IMPORTED_MODULE_3_vue_bootstrap_toggle___default.a},props:{elId:{type:String,required:true},elName:{type:[String,Boolean],default:''},elLabel:{type:String,default:''},elHelp:{type:String,default:''},currentValue:{default:false},elOptions:{type:Object,default:{}},debug:{type:[Object,Boolean]},disabled:{type:Boolean,default:false},readonly:{type:Boolean,default:false}},data:function data(){return{triggerShowHelp:false,defaults:{}};},computed:{curValue:{get:function get(){return this.currentValue==this.onValue;},set:function set(newValue){this.$emit('change',newValue?this.onValue:this.offValue);}},showHelp:function showHelp(){return this.triggerShowHelp&&this.elHelp.length>0;},getClasses:function getClasses(){if(!__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(this.elOptions.classes)){return __WEBPACK_IMPORTED_MODULE_2_lodash_filter___default()(this.elOptions.classes,function(sClass){return sClass!=='form-control';}).join(' ');}return'';},dataAttributes:function dataAttributes(){return this.elOptions.switchData;},switchOptions:function switchOptions(){var curSwitchOptions={onstyle:"primary",offstyle:"warning",size:"small",on:this.onText,off:this.offText};return __WEBPACK_IMPORTED_MODULE_0_lodash_merge___default()(curSwitchOptions,this.dataAttributes);},onText:function onText(){return this.elOptions.options.option[0].text;},onValue:function onValue(){return this.elOptions.options.option[0].value;},offText:function offText(){return this.elOptions.options.option[1].text;},offValue:function offValue(){return this.elOptions.options.option[1].value;}}};/***/},/* 220 *//***/function(module,exports){module.exports=function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports;}var o={};return e.m=t,e.c=o,e.i=function(t){return t;},e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n});},e.n=function(t){var o=t&&t.__esModule?function(){return t.default;}:function(){return t;};return e.d(o,"a",o),o;},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e);},e.p="",e(e.s=8);}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(7),i=function(t){return t&&t.__esModule?t:{default:t};}(n);jQuery().bootstrapToggle||o(4);var r={};e.default={defaults:r,props:{value:Boolean,options:{type:Object,default:function _default(){return{};}},disabled:{type:Boolean,default:!1}},data:function data(){return{updating:!1};},computed:{$$el:function $$el(){return jQuery(this.$el);}},watch:{value:function value(t){this.updating||this.$$el.bootstrapToggle(t?"on":"off");},disabled:function disabled(t){this.$$el.bootstrapToggle(t?"disable":"enable");}},mounted:function mounted(){var t=this;this.value&&(this.$el.checked=!0),this.$$el.bootstrapToggle(i.default.recursive(!0,r,this.options)),this.disabled&&this.$$el.bootstrapToggle("disable"),this.$$el.change(function(){t.updating=!0,t.$emit("input",t.$$el.prop("checked")),t.$nextTick(function(){return t.updating=!1;});});},beforeDestroy:function beforeDestroy(){this.$$el.bootstrapToggle("destroy"),this.$$el.off("change");}};},function(t,e){t.exports=function(t,e,o,n){var i,r=t=t||{},s=_typeof(t.default);"object"!==s&&"function"!==s||(i=t,r=t.default);var l="function"==typeof r?r.options:r;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),o&&(l._scopeId=o),n){var a=Object.create(l.computed||null);Object.keys(n).forEach(function(t){var e=n[t];a[t]=function(){return e;};}),l.computed=a;}return{esModule:i,exports:r,options:l};};},function(t,e){t.exports={render:function render(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{attrs:{type:"checkbox"}});},staticRenderFns:[]};},function(t,e,o){var n=o(5);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(9)("837c61fc",n,!0);},function(t,e){/*! ========================================================================
 * Bootstrap Toggle: bootstrap-toggle.js v2.2.0
 * http://www.bootstraptoggle.com
 * ========================================================================
 * Copyright 2014 Min Hur, The New York Times Company
 * Licensed under MIT
 * ======================================================================== */+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),i=n.data("bs.toggle"),r="object"==(typeof e==='undefined'?'undefined':_typeof(e))&&e;i||n.data("bs.toggle",i=new o(this,r)),"string"==typeof e&&i[e]&&i[e]();});}var o=function o(e,_o100){this.$element=t(e),this.options=t.extend({},this.defaults(),_o100),this.render();};o.VERSION="2.2.0",o.DEFAULTS={on:"On",off:"Off",onstyle:"primary",offstyle:"default",size:"normal",style:"",width:null,height:null},o.prototype.defaults=function(){return{on:this.$element.attr("data-on")||o.DEFAULTS.on,off:this.$element.attr("data-off")||o.DEFAULTS.off,onstyle:this.$element.attr("data-onstyle")||o.DEFAULTS.onstyle,offstyle:this.$element.attr("data-offstyle")||o.DEFAULTS.offstyle,size:this.$element.attr("data-size")||o.DEFAULTS.size,style:this.$element.attr("data-style")||o.DEFAULTS.style,width:this.$element.attr("data-width")||o.DEFAULTS.width,height:this.$element.attr("data-height")||o.DEFAULTS.height};},o.prototype.render=function(){this._onstyle="btn-"+this.options.onstyle,this._offstyle="btn-"+this.options.offstyle;var e="large"===this.options.size?"btn-lg":"small"===this.options.size?"btn-sm":"mini"===this.options.size?"btn-xs":"",o=t('<label class="btn">').html(this.options.on).addClass(this._onstyle+" "+e),n=t('<label class="btn">').html(this.options.off).addClass(this._offstyle+" "+e+" active"),i=t('<span class="toggle-handle btn btn-default">').addClass(e),r=t('<div class="toggle-group">').append(o,n,i),s=t('<div class="toggle btn" data-toggle="toggle">').addClass(this.$element.prop("checked")?this._onstyle:this._offstyle+" off").addClass(e).addClass(this.options.style);this.$element.wrap(s),t.extend(this,{$toggle:this.$element.parent(),$toggleOn:o,$toggleOff:n,$toggleGroup:r}),this.$toggle.append(r);var l=this.options.width||Math.max(o.outerWidth(),n.outerWidth())+i.outerWidth()/2,a=this.options.height||Math.max(o.outerHeight(),n.outerHeight());o.addClass("toggle-on"),n.addClass("toggle-off"),this.$toggle.css({width:l,height:a}),this.options.height&&(o.css("line-height",o.height()+"px"),n.css("line-height",n.height()+"px")),this.update(!0),this.trigger(!0);},o.prototype.toggle=function(){this.$element.prop("checked")?this.off():this.on();},o.prototype.on=function(t){if(this.$element.prop("disabled"))return!1;this.$toggle.removeClass(this._offstyle+" off").addClass(this._onstyle),this.$element.prop("checked",!0),t||this.trigger();},o.prototype.off=function(t){if(this.$element.prop("disabled"))return!1;this.$toggle.removeClass(this._onstyle).addClass(this._offstyle+" off"),this.$element.prop("checked",!1),t||this.trigger();},o.prototype.enable=function(){this.$toggle.removeAttr("disabled"),this.$element.prop("disabled",!1);},o.prototype.disable=function(){this.$toggle.attr("disabled","disabled"),this.$element.prop("disabled",!0);},o.prototype.update=function(t){this.$element.prop("disabled")?this.disable():this.enable(),this.$element.prop("checked")?this.on(t):this.off(t);},o.prototype.trigger=function(e){this.$element.off("change.bs.toggle"),e||this.$element.change(),this.$element.on("change.bs.toggle",t.proxy(function(){this.update();},this));},o.prototype.destroy=function(){this.$element.off("change.bs.toggle"),this.$toggleGroup.remove(),this.$element.removeData("bs.toggle"),this.$element.unwrap();};var n=t.fn.bootstrapToggle;t.fn.bootstrapToggle=e,t.fn.bootstrapToggle.Constructor=o,t.fn.toggle.noConflict=function(){return t.fn.bootstrapToggle=n,this;},t(function(){t("input[type=checkbox][data-toggle^=toggle]").bootstrapToggle();}),t(document).on("click.bs.toggle","div[data-toggle^=toggle]",function(e){t(this).find("input[type=checkbox]").bootstrapToggle("toggle"),e.preventDefault();});}(jQuery);},function(t,e,o){e=t.exports=o(6)(),e.push([t.i,"/*! ========================================================================\n * Bootstrap Toggle: bootstrap-toggle.css v2.2.0\n * http://www.bootstraptoggle.com\n * ========================================================================\n * Copyright 2014 Min Hur, The New York Times Company\n * Licensed under MIT\n * ======================================================================== */.checkbox-inline .toggle,.checkbox label .toggle{margin-left:-20px;margin-right:5px}.toggle{position:relative;overflow:hidden}.toggle input[type=checkbox]{display:none}.toggle-group{position:absolute;width:200%;top:0;bottom:0;left:0;transition:left .35s;-webkit-transition:left .35s;-moz-user-select:none;-webkit-user-select:none}.toggle.off .toggle-group{left:-100%}.toggle-on{left:0;right:50%}.toggle-off,.toggle-on{position:absolute;top:0;bottom:0;margin:0;border:0;border-radius:0}.toggle-off{left:50%;right:0}.toggle-handle{position:relative;margin:0 auto;padding-top:0;padding-bottom:0;height:100%;width:0;border-width:0 1px}.toggle.btn{min-width:59px;min-height:34px}.toggle-on.btn{padding-right:24px}.toggle-off.btn{padding-left:24px}.toggle.btn-lg{min-width:79px;min-height:45px}.toggle-on.btn-lg{padding-right:31px}.toggle-off.btn-lg{padding-left:31px}.toggle-handle.btn-lg{width:40px}.toggle.btn-sm{min-width:50px;min-height:30px}.toggle-on.btn-sm{padding-right:20px}.toggle-off.btn-sm{padding-left:20px}.toggle.btn-xs{min-width:35px;min-height:22px}.toggle-on.btn-xs{padding-right:12px}.toggle-off.btn-xs{padding-left:12px}",""]);},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var o=this[e];o[2]?t.push("@media "+o[2]+"{"+o[1]+"}"):t.push(o[1]);}return t.join("");},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0);}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),t.push(s));}},t;};},function(t,e,o){(function(t){!function(e){function o(t,e){if("object"!==i(t))return e;for(var n in e){"object"===i(t[n])&&"object"===i(e[n])?t[n]=o(t[n],e[n]):t[n]=e[n];}return t;}function n(t,e,n){var s=n[0],l=n.length;(t||"object"!==i(s))&&(s={});for(var a=0;a<l;++a){var f=n[a];if("object"===i(f))for(var g in f){var p=t?r.clone(f[g]):f[g];s[g]=e?o(s[g],p):p;}}return s;}function i(t){return{}.toString.call(t).slice(8,-1).toLowerCase();}var r=function r(t){return n(!0===t,!1,arguments);};r.recursive=function(t){return n(!0===t,!0,arguments);},r.clone=function(t){var e,o,n=t,s=i(t);if("array"===s)for(n=[],o=t.length,e=0;e<o;++e){n[e]=r.clone(t[e]);}else if("object"===s){n={};for(e in t){n[e]=r.clone(t[e]);}}return n;},e?t.exports=r:window.merge=r;}("object"==(typeof t==='undefined'?'undefined':_typeof(t))&&t&&"object"==_typeof(t.exports)&&t.exports);}).call(e,o(11)(t));},function(t,e,o){o(3);var n=o(1)(o(0),o(2),null,null);t.exports=n.exports;},function(t,e,o){function n(t){for(var e=0;e<t.length;e++){var o=t[e],n=g[o.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++){n.parts[i](o.parts[i]);}for(;i<o.parts.length;i++){n.parts.push(r(o.parts[i]));}n.parts.length>o.parts.length&&(n.parts.length=o.parts.length);}else{for(var s=[],i=0;i<o.parts.length;i++){s.push(r(o.parts[i]));}g[o.id]={id:o.id,refs:1,parts:s};}}}function i(){var t=document.createElement("style");return t.type="text/css",p.appendChild(t),t;}function r(t){var e,o,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(h)return c;n.parentNode.removeChild(n);}if(b){var r=u++;n=d||(d=i()),e=s.bind(null,n,r,!1),o=s.bind(null,n,r,!0);}else n=i(),e=l.bind(null,n),o=function o(){n.parentNode.removeChild(n);};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n);}else o();};}function s(t,e,o,n){var i=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var r=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r);}}function l(t,e){var o=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),i&&(o+="\n/*# sourceURL="+i.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;){t.removeChild(t.firstChild);}t.appendChild(document.createTextNode(o));}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var f=o(10),g={},p=a&&(document.head||document.getElementsByTagName("head")[0]),d=null,u=0,h=!1,c=function c(){},b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,o){h=o;var i=f(t,e);return n(i),function(e){for(var o=[],r=0;r<i.length;r++){var s=i[r],l=g[s.id];l.refs--,o.push(l);}e?(i=f(t,e),n(i)):i=[];for(var r=0;r<o.length;r++){var l=o[r];if(0===l.refs){for(var a=0;a<l.parts.length;a++){l.parts[a]();}delete g[l.id];}}};};var m=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n");};}();},function(t,e){t.exports=function(t,e){for(var o=[],n={},i=0;i<e.length;i++){var r=e[i],s=r[0],l=r[1],a=r[2],f=r[3],g={id:t+":"+i,css:l,media:a,sourceMap:f};n[s]?n[s].parts.push(g):o.push(n[s]={id:s,parts:[g]});}return o;};},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function get(){return t.l;}}),Object.defineProperty(t,"id",{enumerable:!0,get:function get(){return t.i;}}),t.webpackPolyfill=1),t;};}]);//# sourceMappingURL=index.js.map
/***/},/* 221 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-row"},[_vm.elHelp.length>0&&!_vm.readonly?_c('i',{staticClass:"fa fa-question pull-right",on:{"click":function click($event){_vm.triggerShowHelp=!_vm.triggerShowHelp;}}}):_vm._e(),_vm._v(" "),_c('label',{staticClass:"form-label",attrs:{"for":_vm.elId}},[_vm._v(" "+_vm._s(_vm.elLabel)+" ")]),_vm._v(" "),_c('div',{class:_vm.getClasses},[_c('bootstrap-toggle',{attrs:{"options":_vm.switchOptions,"disabled":_vm.disabled||_vm.readonly},model:{value:_vm.curValue,callback:function callback($$v){_vm.curValue=$$v;},expression:"curValue"}})],1),_vm._v(" "),_vm.showHelp?_c('div',{staticClass:"question-option-help alert alert-info",domProps:{"innerHTML":_vm._s(_vm.elHelp)}}):_vm._e()]);},staticRenderFns:[]/***/};},/* 222 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__=__webpack_require__(5);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__);/* harmony default export */__webpack_exports__["default"]={name:'setting-input',props:{elId:{type:String,required:true},elName:{type:[String,Boolean],default:''},elLabel:{type:String,default:''},elHelp:{type:String,default:''},currentValue:{default:''},elOptions:{type:Object,default:{}},debug:{type:[Object,Boolean]},readonly:{type:Boolean,default:false}},data:function data(){return{triggerShowHelp:false};},computed:{curValue:{get:function get(){if(typeof this.currentValue!=='string'){return this.currentValue[this.$store.state.activeLanguage];}return this.currentValue;},set:function set(newValue){if(typeof this.currentValue!=='string'){var tmpCurrentValue=this.currentValue;tmpCurrentValue[this.$store.state.activeLanguage]=newValue;this.$emit('change',tmpCurrentValue);return;}this.$emit('change',newValue);}},showHelp:function showHelp(){return this.triggerShowHelp&&this.elHelp.length>0;},getClasses:function getClasses(){if(!__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(this.elOptions.classes)){return this.elOptions.classes.join(' ');}return'';},hasPrefix:function hasPrefix(){if(!__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(this.elOptions.inputGroup)){return!__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(this.elOptions.inputGroup.prefix);}return false;},hasSuffix:function hasSuffix(){if(!__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(this.elOptions.inputGroup)){return!__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(this.elOptions.inputGroup.suffix);}return false;}}};/***/},/* 223 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-row"},[_vm.elHelp.length>0&&!_vm.readonly?_c('i',{staticClass:"fa fa-question pull-right",on:{"click":function click($event){_vm.triggerShowHelp=!_vm.triggerShowHelp;}}}):_vm._e(),_vm._v(" "),_c('label',{staticClass:"form-label",attrs:{"for":_vm.elId}},[_vm._v(" "+_vm._s(_vm.elLabel)+" ")]),_vm._v(" "),_c('div',{staticClass:"input-group col-12"},[_vm.hasPrefix?_c('div',{staticClass:"input-group-addon"},[_vm._v(" "+_vm._s(_vm.elOptions.inputGroup.prefix)+" ")]):_vm._e(),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.curValue,expression:"curValue"}],class:_vm.getClasses,attrs:{"type":"text","pattern":_vm.elOptions.elInputPattern,"name":_vm.elName||_vm.elId,"id":_vm.elId,"readonly":_vm.readonly},domProps:{"value":_vm.curValue},on:{"input":function input($event){if($event.target.composing){return;}_vm.curValue=$event.target.value;}}}),_vm._v(" "),_vm.hasSuffix?_c('div',{staticClass:"input-group-addon"},[_vm._v(" "+_vm._s(_vm.elOptions.inputGroup.suffix)+" ")]):_vm._e()]),_vm._v(" "),_vm.showHelp?_c('div',{staticClass:"question-option-help alert alert-info",domProps:{"innerHTML":_vm._s(_vm.elHelp)}}):_vm._e()]);},staticRenderFns:[]/***/};},/* 224 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__=__webpack_require__(5);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__);/* harmony default export */__webpack_exports__["default"]={name:'setting-select',props:{elId:{type:String,required:true},elName:{type:[String,Boolean],default:''},elLabel:{type:String,default:''},elHelp:{type:String,default:''},currentValue:{default:''},elOptions:{type:Object,default:{}},debug:{type:[Object,Boolean]},readonly:{type:Boolean,default:false}},data:function data(){return{triggerShowHelp:false};},methods:{simpleValue:function simpleValue(value){if(value==[]){return null;}return value;}},computed:{curValue:{get:function get(){return this.currentValue;},set:function set(newValue){this.$emit('change',newValue);}},showHelp:function showHelp(){return this.triggerShowHelp&&this.elHelp.length>0;},getClasses:function getClasses(){if(!__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(this.elOptions.classes)){return this.elOptions.classes.join(' ');}return'';}}};/***/},/* 225 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-row"},[_vm.elHelp.length>0&&!_vm.readonly?_c('i',{staticClass:"fa fa-question pull-right",on:{"click":function click($event){_vm.triggerShowHelp=!_vm.triggerShowHelp;}}}):_vm._e(),_vm._v(" "),_c('label',{staticClass:"form-label",attrs:{"for":_vm.elId}},[_vm._v(" "+_vm._s(_vm.elLabel)+" ")]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:_vm.curValue,expression:"curValue"}],class:_vm.getClasses,attrs:{"name":_vm.elName||_vm.elId,"id":_vm.elId,"disabled":_vm.readonly},on:{"change":function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.curValue=$event.target.multiple?$$selectedVal:$$selectedVal[0];}}},_vm._l(_vm.elOptions.options,function(optionObject,i){return _c('option',{key:i,domProps:{"value":_vm.simpleValue(optionObject.value)}},[_vm._v("\n            "+_vm._s(optionObject.text)+"\n        ")]);})),_vm._v(" "),_vm.showHelp?_c('div',{staticClass:"question-option-help alert alert-info",domProps:{"innerHTML":_vm._s(_vm.elHelp)}}):_vm._e()]);},staticRenderFns:[]/***/};},/* 226 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__=__webpack_require__(5);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__);/* harmony default export */__webpack_exports__["default"]={name:'setting-text',props:{elId:{type:String,required:true},elName:{type:[String,Boolean],default:''},elLabel:{type:String,default:''},elHelp:{type:String,default:''},currentValue:{default:''},elOptions:{type:Object,default:{}},debug:{type:[Object,Boolean]},readonly:{type:Boolean,default:false}},data:function data(){return{triggerShowHelp:false};},computed:{curValue:{get:function get(){return this.currentValue;}},showHelp:function showHelp(){return this.triggerShowHelp&&this.elHelp.length>0;},getClasses:function getClasses(){if(!__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(this.elOptions.classes)){return this.elOptions.classes.join(' ');}return'';}}};/***/},/* 227 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-row"},[_vm.elHelp.length>0&&!_vm.readonly?_c('i',{staticClass:"fa fa-question pull-right",on:{"click":function click($event){_vm.triggerShowHelp=!_vm.triggerShowHelp;}}}):_vm._e(),_vm._v(" "),_c('label',{staticClass:"form-label",attrs:{"for":_vm.elId}},[_vm._v(" "+_vm._s(_vm.elLabel)+" ")]),_vm._v(" "),_c('div',{class:_vm.getClasses,attrs:{"name":_vm.elName||_vm.elId,"id":_vm.elId},domProps:{"innerHTML":_vm._s(_vm.curValue)}}),_vm._v(" "),_vm.showHelp?_c('div',{staticClass:"question-option-help alert alert-info",domProps:{"innerHTML":_vm._s(_vm.elHelp)}}):_vm._e()]);},staticRenderFns:[]/***/};},/* 228 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_foreach__=__webpack_require__(8);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_foreach___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_foreach__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty__=__webpack_require__(5);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty__);/* harmony default export */__webpack_exports__["default"]={name:'setting-textarea',props:{elId:{type:String,required:true},elName:{type:[String,Boolean],default:''},elLabel:{type:String,default:''},elHelp:{type:String,default:''},currentValue:{default:''},elOptions:{type:Object,default:{}},debug:{type:[Object,Boolean]},readonly:{type:Boolean,default:false}},data:function data(){return{triggerShowHelp:false};},computed:{curValue:{get:function get(){return this.decode(this.currentValue);},set:function set(newValue){this.$emit('change',this.encode(newValue));}},showHelp:function showHelp(){return this.triggerShowHelp&&this.elHelp.length>0;},getClasses:function getClasses(){if(!__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(this.elOptions.classes)){return this.elOptions.classes.join(' ');}return'';},parsedAttributes:function parsedAttributes(){if(_typeof(this.elOptions.attributes)==Object){var attributeString='';__WEBPACK_IMPORTED_MODULE_0_lodash_foreach___default()(this.elOptions.attributes,function(attributeValue,attributeKey){attributeString+=' '+attributeKey+'='+attributeValue+' ';});return attributeString;}return'';},hasPrefix:function hasPrefix(){if(!__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(this.elOptions.inputGroup)){return!__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(this.elOptions.inputGroup.prefix);}return false;},hasSuffix:function hasSuffix(){if(!__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(this.elOptions.inputGroup)){return!__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(this.elOptions.inputGroup.suffix);}return false;}},methods:{decode:function decode(value){if(typeof value=='string'){return value;}if((typeof value==='undefined'?'undefined':_typeof(value))=='object'){return value[this.$store.state.activeLanguage];}},encode:function encode(value){if(_typeof(this.currentValue)=='object'){this.currentValue[this.$store.state.activeLanguage]=value;return this.currentValue;}return value;}}};/***/},/* 229 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-row"},[_vm.elHelp.length>0&&!_vm.readonly?_c('i',{staticClass:"fa fa-question pull-right",on:{"click":function click($event){_vm.triggerShowHelp=!_vm.triggerShowHelp;}}}):_vm._e(),_vm._v(" "),_c('label',{staticClass:"form-label",attrs:{"for":_vm.elId}},[_vm._v(" "+_vm._s(_vm.elLabel)+" ")]),_vm._v(" "),_c('div',{staticClass:"input-group col-12"},[_vm.hasPrefix?_c('div',{staticClass:"input-group-addon"},[_vm._v(" "+_vm._s(_vm.elOptions.inputGroup.prefix)+" ")]):_vm._e(),_vm._v(" "),_c('textarea',_vm._b({directives:[{name:"model",rawName:"v-model",value:_vm.curValue,expression:"curValue"}],class:_vm.getClasses,attrs:{"name":_vm.elName||_vm.elId,"id":_vm.elId,"readonly":_vm.readonly},domProps:{"value":_vm.curValue},on:{"input":function input($event){if($event.target.composing){return;}_vm.curValue=$event.target.value;}}},'textarea',_vm.elOptions.attributes,false)),_vm._v(" "),_vm.hasSuffix?_c('div',{staticClass:"input-group-addon"},[_vm._v(" "+_vm._s(_vm.elOptions.inputGroup.suffix)+" ")]):_vm._e()]),_vm._v(" "),_vm.showHelp?_c('div',{staticClass:"question-option-help alert alert-info",domProps:{"innerHTML":_vm._s(_vm.elHelp)}}):_vm._e()]);},staticRenderFns:[]/***/};},/* 230 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(231);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(4)("eab87cea",content,true);/***/},/* 231 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(3)(undefined);// imports
// module
exports.push([module.i,"",""]);// exports
/***/},/* 232 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});//
//
//
//
/* harmony default export */__webpack_exports__["default"]={name:'stub-set',props:{debug:{type:[Object,Boolean]}}};/***/},/* 233 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"overflow":"scroll","max-height":"4rem"}},[_c('pre',[_vm._v(_vm._s(_vm.debug))])]);},staticRenderFns:[]/***/};},/* 234 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-sm-4 col-xs-12 scope-set-min-height"},[_c('div',{staticClass:"panel panel-default question-option-general-container"},[_c('div',{staticClass:"panel-heading"},[_vm._v(" "+_vm._s(_vm._f("translate")("General Settings")))]),_vm._v(" "),_c('div',{staticClass:"panel-body"},[_c('div',{staticClass:"list-group"},_vm._l(_vm.generalSettingOptions,function(generalSetting){return _c('div',{key:generalSetting.name,staticClass:"list-group-item question-option-general-setting-block"},[_c(_vm.getComponentName(generalSetting.inputtype),{tag:"component",attrs:{"elId":generalSetting.formElementId,"elName":generalSetting.formElementName,"elLabel":generalSetting.title,"elHelp":generalSetting.formElementHelp,"currentValue":generalSetting.formElementValue,"elOptions":generalSetting.formElementOptions,"debug":generalSetting,"readonly":_vm.readonly},on:{"change":function change($event){_vm.reactOnChange($event,generalSetting);}}})],1);}))])])]);},staticRenderFns:[]/***/};},/* 235 *//***/function(module,exports,__webpack_require__){function injectStyle(ssrContext){__webpack_require__(236);}var Component=__webpack_require__(0)(/* script */__webpack_require__(238),/* template */__webpack_require__(282),/* styles */injectStyle,/* scopeId */"data-v-710006e5",/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 236 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(237);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(4)("b1cd8b8a",content,true);/***/},/* 237 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(3)(undefined);// imports
// module
exports.push([module.i,".scope-divider[data-v-710006e5]{display:block;width:2em;height:42px;line-height:42px;font-size:38px;text-align:center}.scoped-tablist-container[data-v-710006e5]{display:flex;width:100%;flex-wrap:nowrap;align-content:flex-start}.scoped-tablist-subquestionandanswers[data-v-710006e5]{flex-grow:1;flex-shrink:3;display:flex;width:100%;flex-wrap:nowrap}.scoped-tablist-advanced-settings[data-v-710006e5]{flex-grow:3;flex-shrink:1;display:flex;width:100%;flex-wrap:nowrap}.scoped-tablist-advanced-settings>li[data-v-710006e5],.scoped-tablist-subquestionandanswers>li[data-v-710006e5]{display:block;width:100%;float:none;text-align:center}.scope-min-height[data-v-710006e5]{min-height:20vh}.scope-apply-base-style[data-v-710006e5]{border-top:1px solid #cfcfcf;margin-top:1rem;padding-top:1rem}.scope-border-open-top[data-v-710006e5]{border-left:1px solid #cfcfcf;border-right:1px solid #cfcfcf;border-bottom:1px solid #cfcfcf}",""]);// exports
/***/},/* 238 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_keys__=__webpack_require__(6);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_keys___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_keys__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_foreach__=__webpack_require__(8);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_foreach___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_foreach__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_reduce__=__webpack_require__(39);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_reduce___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_reduce__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_filter__=__webpack_require__(22);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_filter___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_filter__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4_lodash_isEmpty__=__webpack_require__(5);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4_lodash_isEmpty___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_isEmpty__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5_lodash_isObject__=__webpack_require__(2);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5_lodash_isObject___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isObject__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__subcomponents_settingstab_vue__=__webpack_require__(239);/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__subcomponents_settingstab_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__subcomponents_settingstab_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_7__subcomponents_subquestions_vue__=__webpack_require__(254);/* harmony import */var __WEBPACK_IMPORTED_MODULE_7__subcomponents_subquestions_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__subcomponents_subquestions_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_8__subcomponents_answeroptions_vue__=__webpack_require__(277);/* harmony import */var __WEBPACK_IMPORTED_MODULE_8__subcomponents_answeroptions_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__subcomponents_answeroptions_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_9__mixins_eventChild_js__=__webpack_require__(18);/* harmony default export */__webpack_exports__["default"]={name:'AdvancedSettings',mixins:[__WEBPACK_IMPORTED_MODULE_9__mixins_eventChild_js__["a"/* default */]],components:{"settings-tab":__WEBPACK_IMPORTED_MODULE_6__subcomponents_settingstab_vue___default.a,"subquestions":__WEBPACK_IMPORTED_MODULE_7__subcomponents_subquestions_vue___default.a,"Answeroptions":__WEBPACK_IMPORTED_MODULE_8__subcomponents_answeroptions_vue___default.a},props:{readonly:{type:Boolean,default:false}},data:function data(){return{aComponentArray:['switch','text','integer','select','textinput','textarea'],currentTabComponent:'settings-tab'};},computed:{tabs:function tabs(){var _this323=this;if(this.readonly==false){return __WEBPACK_IMPORTED_MODULE_3_lodash_filter___default()(__WEBPACK_IMPORTED_MODULE_0_lodash_keys___default()(this.$store.state.currentQuestionAdvancedSettings),function(category){return category!='debug';});}var tabsWithContent=[];__WEBPACK_IMPORTED_MODULE_1_lodash_foreach___default()(this.$store.state.currentQuestionAdvancedSettings,function(categoryContents,categoryName){if(__WEBPACK_IMPORTED_MODULE_2_lodash_reduce___default()(categoryContents,function(carry,settingOption){return carry=carry||!__WEBPACK_IMPORTED_MODULE_4_lodash_isEmpty___default()(_this323.parseForLocalizedOption(settingOption.formElementValue));},false)&&categoryName!='debug'){tabsWithContent.push(categoryName);}});return tabsWithContent;},showSubquestionEdit:function showSubquestionEdit(){return this.$store.state.currentQuestion.typeInformation.subquestions==1;},showAnswerOptionEdit:function showAnswerOptionEdit(){return this.$store.state.currentQuestion.typeInformation.answerscales>=1;}},methods:{selectCurrentTab:function selectCurrentTab(tabComponent){var categoryName=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'';this.currentTabComponent=tabComponent;if(tabComponent=='settings-tab'){this.$store.commit('setQuestionAdvancedSettingsCategory',categoryName);}},parseForLocalizedOption:function parseForLocalizedOption(value){if(__WEBPACK_IMPORTED_MODULE_5_lodash_isObject___default()(value)&&value[this.$store.state.activeLanguage]!=undefined){return value[this.$store.state.activeLanguage];}return value;}},mounted:function mounted(){this.selectCurrentTab('settings-tab',this.tabs[0]);}};/***/},/* 239 *//***/function(module,exports,__webpack_require__){function injectStyle(ssrContext){__webpack_require__(240);}var Component=__webpack_require__(0)(/* script */__webpack_require__(242),/* template */__webpack_require__(253),/* styles */injectStyle,/* scopeId */"data-v-73a4ac28",/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 240 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(241);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(4)("6ecfcdbc",content,true);/***/},/* 241 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(3)(undefined);// imports
// module
exports.push([module.i,".scoped-custom-list-group[data-v-73a4ac28]{display:flex;flex-wrap:wrap;align-content:space-between;align-items:flex-start;width:100%;margin:0;padding:1rem 0}.scoped-custom-list-group .list-group-item[data-v-73a4ac28]{width:98%;display:inline-block;margin:.5% 1%}@media (min-width:992px){.scoped-custom-list-group .list-group-item[data-v-73a4ac28]{width:48%;display:inline-block}}.scoped-custom-list-group .list-group-item[data-v-73a4ac28]:first-child,.scoped-custom-list-group .list-group-item[data-v-73a4ac28]:last-child{border-radius:0}",""]);// exports
/***/},/* 242 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_keys__=__webpack_require__(6);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_keys___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_keys__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_foreach__=__webpack_require__(8);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_foreach___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_foreach__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_reduce__=__webpack_require__(39);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_reduce___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_reduce__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_filter__=__webpack_require__(22);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_filter___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_filter__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4_lodash_sortBy__=__webpack_require__(243);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4_lodash_sortBy___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_sortBy__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty__=__webpack_require__(5);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_6_lodash_isObject__=__webpack_require__(2);/* harmony import */var __WEBPACK_IMPORTED_MODULE_6_lodash_isObject___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isObject__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_7__inputtypes_switch_vue__=__webpack_require__(92);/* harmony import */var __WEBPACK_IMPORTED_MODULE_7__inputtypes_switch_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__inputtypes_switch_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_8__inputtypes_text_vue__=__webpack_require__(93);/* harmony import */var __WEBPACK_IMPORTED_MODULE_8__inputtypes_text_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__inputtypes_text_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_9__inputtypes_integer_vue__=__webpack_require__(250);/* harmony import */var __WEBPACK_IMPORTED_MODULE_9__inputtypes_integer_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__inputtypes_integer_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_10__inputtypes_select_vue__=__webpack_require__(94);/* harmony import */var __WEBPACK_IMPORTED_MODULE_10__inputtypes_select_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__inputtypes_select_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_11__inputtypes_textdisplay_vue__=__webpack_require__(95);/* harmony import */var __WEBPACK_IMPORTED_MODULE_11__inputtypes_textdisplay_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__inputtypes_textdisplay_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_12__inputtypes_textarea_vue__=__webpack_require__(96);/* harmony import */var __WEBPACK_IMPORTED_MODULE_12__inputtypes_textarea_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__inputtypes_textarea_vue__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_13__inputtypes_stub_vue__=__webpack_require__(97);/* harmony import */var __WEBPACK_IMPORTED_MODULE_13__inputtypes_stub_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__inputtypes_stub_vue__);//
/* harmony default export */__webpack_exports__["default"]={name:"settings-tab",props:{readonly:{type:Boolean,default:false}},data:function data(){return{aComponentArray:['switch','text','integer','select','singleselect','textinput','textarea']};},components:{'setting-switch':__WEBPACK_IMPORTED_MODULE_7__inputtypes_switch_vue___default.a,'setting-text':__WEBPACK_IMPORTED_MODULE_8__inputtypes_text_vue___default.a,'setting-integer':__WEBPACK_IMPORTED_MODULE_9__inputtypes_integer_vue___default.a,'setting-select':__WEBPACK_IMPORTED_MODULE_10__inputtypes_select_vue___default.a,'setting-singleselect':__WEBPACK_IMPORTED_MODULE_10__inputtypes_select_vue___default.a,'setting-textdisplay':__WEBPACK_IMPORTED_MODULE_11__inputtypes_textdisplay_vue___default.a,'setting-textarea':__WEBPACK_IMPORTED_MODULE_12__inputtypes_textarea_vue___default.a,'stub-set':__WEBPACK_IMPORTED_MODULE_13__inputtypes_stub_vue___default.a},computed:{currentAdvancedSettingsList:function currentAdvancedSettingsList(){var _this324=this;return __WEBPACK_IMPORTED_MODULE_3_lodash_filter___default()(this.$store.state.currentQuestionAdvancedSettings[this.currentTab],function(settingOption){return!__WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty___default()(_this324.parseForLocalizedOption(settingOption.formElementValue));});},currentSettingsTab:function currentSettingsTab(){var _this325=this;var items=__WEBPACK_IMPORTED_MODULE_3_lodash_filter___default()(this.$store.state.currentQuestionAdvancedSettings[this.$store.state.questionAdvancedSettingsCategory],function(item){if(_this325.aComponentArray.indexOf(item.inputtype)==-1){return false;}if(_this325.readonly){return!__WEBPACK_IMPORTED_MODULE_5_lodash_isEmpty___default()(_this325.parseForLocalizedOption(item.formElementValue));}return true;});return __WEBPACK_IMPORTED_MODULE_4_lodash_sortBy___default()(items,function(item){return item.aFormElementOptions.sortorder;});}},methods:{reactOnChange:function reactOnChange(newValue,oAdvancedSettingObject){this.$store.commit('setQuestionAdvancedSetting',{newValue:newValue,settingName:oAdvancedSettingObject.formElementId});},getComponentName:function getComponentName(componentRawName){componentRawName=componentRawName=='singleselect'?'select':componentRawName;if(this.aComponentArray.indexOf(componentRawName)>-1){return'setting-'+componentRawName;}return'stub-set';},parseForLocalizedOption:function parseForLocalizedOption(value){if(__WEBPACK_IMPORTED_MODULE_6_lodash_isObject___default()(value)&&value[this.$store.state.activeLanguage]!=undefined){return value[this.$store.state.activeLanguage];}return value;}}};/***/},/* 243 *//***/function(module,exports,__webpack_require__){var baseFlatten=__webpack_require__(98),baseOrderBy=__webpack_require__(245),baseRest=__webpack_require__(89),isIterateeCall=__webpack_require__(56);/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
 */var sortBy=baseRest(function(collection,iteratees){if(collection==null){return[];}var length=iteratees.length;if(length>1&&isIterateeCall(collection,iteratees[0],iteratees[1])){iteratees=[];}else if(length>2&&isIterateeCall(iteratees[0],iteratees[1],iteratees[2])){iteratees=[iteratees[0]];}return baseOrderBy(collection,baseFlatten(iteratees,1),[]);});module.exports=sortBy;/***/},/* 244 *//***/function(module,exports,__webpack_require__){var _Symbol6=__webpack_require__(14),isArguments=__webpack_require__(19),isArray=__webpack_require__(1);/** Built-in value references. */var spreadableSymbol=_Symbol6?_Symbol6.isConcatSpreadable:undefined;/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol]);}module.exports=isFlattenable;/***/},/* 245 *//***/function(module,exports,__webpack_require__){var arrayMap=__webpack_require__(78),baseIteratee=__webpack_require__(23),baseMap=__webpack_require__(246),baseSortBy=__webpack_require__(247),baseUnary=__webpack_require__(65),compareMultiple=__webpack_require__(248),identity=__webpack_require__(15);/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */function baseOrderBy(collection,iteratees,orders){var index=-1;iteratees=arrayMap(iteratees.length?iteratees:[identity],baseUnary(baseIteratee));var result=baseMap(collection,function(value,key,collection){var criteria=arrayMap(iteratees,function(iteratee){return iteratee(value);});return{'criteria':criteria,'index':++index,'value':value};});return baseSortBy(result,function(object,other){return compareMultiple(object,other,orders);});}module.exports=baseOrderBy;/***/},/* 246 *//***/function(module,exports,__webpack_require__){var baseEach=__webpack_require__(28),isArrayLike=__webpack_require__(10);/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */function baseMap(collection,iteratee){var index=-1,result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value,key,collection){result[++index]=iteratee(value,key,collection);});return result;}module.exports=baseMap;/***/},/* 247 *//***/function(module,exports){/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */function baseSortBy(array,comparer){var length=array.length;array.sort(comparer);while(length--){array[length]=array[length].value;}return array;}module.exports=baseSortBy;/***/},/* 248 *//***/function(module,exports,__webpack_require__){var compareAscending=__webpack_require__(249);/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */function compareMultiple(object,other,orders){var index=-1,objCriteria=object.criteria,othCriteria=other.criteria,length=objCriteria.length,ordersLength=orders.length;while(++index<length){var result=compareAscending(objCriteria[index],othCriteria[index]);if(result){if(index>=ordersLength){return result;}var order=orders[index];return result*(order=='desc'?-1:1);}}// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
// that causes it, under certain circumstances, to provide the same value for
// `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
// for more details.
//
// This also ensures a stable sort in V8 and other engines.
// See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
return object.index-other.index;}module.exports=compareMultiple;/***/},/* 249 *//***/function(module,exports,__webpack_require__){var isSymbol=__webpack_require__(16);/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */function compareAscending(value,other){if(value!==other){var valIsDefined=value!==undefined,valIsNull=value===null,valIsReflexive=value===value,valIsSymbol=isSymbol(value);var othIsDefined=other!==undefined,othIsNull=other===null,othIsReflexive=other===other,othIsSymbol=isSymbol(other);if(!othIsNull&&!othIsSymbol&&!valIsSymbol&&value>other||valIsSymbol&&othIsDefined&&othIsReflexive&&!othIsNull&&!othIsSymbol||valIsNull&&othIsDefined&&othIsReflexive||!valIsDefined&&othIsReflexive||!valIsReflexive){return 1;}if(!valIsNull&&!valIsSymbol&&!othIsSymbol&&value<other||othIsSymbol&&valIsDefined&&valIsReflexive&&!valIsNull&&!valIsSymbol||othIsNull&&valIsDefined&&valIsReflexive||!othIsDefined&&valIsReflexive||!othIsReflexive){return-1;}}return 0;}module.exports=compareAscending;/***/},/* 250 *//***/function(module,exports,__webpack_require__){var Component=__webpack_require__(0)(/* script */__webpack_require__(251),/* template */__webpack_require__(252),/* styles */null,/* scopeId */null,/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 251 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__=__webpack_require__(5);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__);/* harmony default export */__webpack_exports__["default"]={name:'setting-integer',props:{elId:{type:String,required:true},elName:{type:[String,Boolean],default:''},elLabel:{type:String,default:''},elHelp:{type:String,default:''},currentValue:{default:''},elOptions:{type:Object,default:{}},debug:{type:[Object,Boolean]},readonly:{type:Boolean,default:false}},data:function data(){return{triggerShowHelp:false};},computed:{curValue:{get:function get(){return this.currentValue||this.elOptions.default||'';},set:function set(newValue){this.$emit('change',newValue);}},showHelp:function showHelp(){return this.triggerShowHelp&&this.elHelp.length>0;},getClasses:function getClasses(){if(!__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(this.elOptions.classes)){return this.elOptions.classes.join(' ');}return'';},hasPrefix:function hasPrefix(){if(!__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(this.elOptions.inputGroup)){return!__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(this.elOptions.inputGroup.prefix);}return false;},hasSuffix:function hasSuffix(){if(!__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(this.elOptions.inputGroup)){return!__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(this.elOptions.inputGroup.suffix);}return false;}}};/***/},/* 252 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-row"},[_vm.elHelp.length>0&&!_vm.readonly?_c('i',{staticClass:"fa fa-question pull-right",on:{"click":function click($event){_vm.triggerShowHelp=!_vm.triggerShowHelp;}}}):_vm._e(),_vm._v(" "),_c('label',{staticClass:"form-label",attrs:{"for":_vm.elId}},[_vm._v(" "+_vm._s(_vm.elLabel)+" ")]),_vm._v(" "),_c('div',{staticClass:"input-group col-12"},[_vm.hasPrefix?_c('div',{staticClass:"input-group-addon"},[_vm._v(" "+_vm._s(_vm.elOptions.inputGroup.prefix)+" ")]):_vm._e(),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.curValue,expression:"curValue"}],class:_vm.getClasses,attrs:{"type":"number","name":_vm.elName||_vm.elId,"id":_vm.elId,"max":_vm.elOptions.max||'',"min":_vm.elOptions.min||'',"readonly":_vm.readonly},domProps:{"value":_vm.curValue},on:{"input":function input($event){if($event.target.composing){return;}_vm.curValue=$event.target.value;}}}),_vm._v(" "),_vm.hasSuffix?_c('div',{staticClass:"input-group-addon"},[_vm._v(" "+_vm._s(_vm.elOptions.inputGroup.suffix)+" ")]):_vm._e()]),_vm._v(" "),_vm.showHelp?_c('div',{staticClass:"question-option-help alert alert-info",domProps:{"innerHTML":_vm._s(_vm.elHelp)}}):_vm._e()]);},staticRenderFns:[]/***/};},/* 253 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-sm-12"},[_c('div',{staticClass:"list-group scoped-custom-list-group"},_vm._l(_vm.currentSettingsTab,function(advancedSetting){return _c('div',{key:advancedSetting.name,staticClass:"list-group-item question-option-advanced-setting-block"},[_c('pre',{directives:[{name:"show",rawName:"v-show",value:_vm.$store.debugMode===true,expression:"$store.debugMode === true"}]},[_vm._v(_vm._s(advancedSetting))]),_vm._v(" "),_c(_vm.getComponentName(advancedSetting.inputtype),{tag:"component",attrs:{"elId":advancedSetting.formElementId,"elName":advancedSetting.formElementName,"elLabel":advancedSetting.title,"elHelp":advancedSetting.formElementHelp,"currentValue":advancedSetting.formElementValue,"elOptions":advancedSetting.aFormElementOptions,"debug":advancedSetting,"readonly":_vm.readonly},on:{"change":function change($event){_vm.reactOnChange($event,advancedSetting);}}})],1);}))]);},staticRenderFns:[]/***/};},/* 254 *//***/function(module,exports,__webpack_require__){function injectStyle(ssrContext){__webpack_require__(255);}var Component=__webpack_require__(0)(/* script */__webpack_require__(257),/* template */__webpack_require__(276),/* styles */injectStyle,/* scopeId */"data-v-c3a778ba",/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 255 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(256);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(4)("5079c0ea",content,true);/***/},/* 256 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(3)(undefined);// imports
// module
exports.push([module.i,".scoped-spacer[data-v-c3a778ba]{content:\" \";display:inline-block}.scoped-main-subquestions-container[data-v-c3a778ba]{margin:1rem .2rem;padding-top:.2rem;min-height:25vh}.scoped-subquestion-block[data-v-c3a778ba]{display:flex;flex-wrap:nowrap;width:100%;justify-content:flex-start}.scoped-subquestion-block>div[data-v-c3a778ba]{flex-basis:10rem;padding:1px 2px;transition:all 1s ease-in-out;white-space:nowrap}.scoped-move-block[data-v-c3a778ba]{text-align:center;width:64px}.scoped-move-block>i[data-v-c3a778ba]{font-size:28px;line-height:32px}.scoped-move-block>i[data-v-c3a778ba]:after{content:\" |\";font-size:24px;vertical-align:text-bottom}.scoped-content-block[data-v-c3a778ba]{flex-grow:8}.scoped-relevance-block[data-v-c3a778ba]{flex-grow:1;max-width:10rem}.scoped-actions-block[data-v-c3a778ba]{flex-grow:2}",""]);// exports
/***/},/* 257 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_max__=__webpack_require__(99);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_max___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_max__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_merge__=__webpack_require__(11);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_merge___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_merge__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_remove__=__webpack_require__(58);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_remove___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_remove__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_isEmpty__=__webpack_require__(5);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_isEmpty___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_isEmpty__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4_lodash_foreach__=__webpack_require__(8);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4_lodash_foreach___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_foreach__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__mixins_abstractSubquestionAndAnswers_js__=__webpack_require__(101);/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__mixins_eventChild_js__=__webpack_require__(18);/* harmony default export */__webpack_exports__["default"]={name:'subquestions',mixins:[__WEBPACK_IMPORTED_MODULE_5__mixins_abstractSubquestionAndAnswers_js__["a"/* default */],__WEBPACK_IMPORTED_MODULE_6__mixins_eventChild_js__["a"/* default */]],data:function data(){return{uniqueSelector:'qid',baseNonNumericPart:"SQ",type:'subquestions',typeDefininition:'question',typeDefininitionKey:'title'};},computed:{surveyActive:function surveyActive(){return false;},subquestionScales:function subquestionScales(){if(this.$store.state.currentQuestion.typeInformation.subquestions==1){return[0];}if(this.$store.state.currentQuestion.typeInformation.subquestions==2){return[0,1];}return[];},currentDataSet:{get:function get(){return this.$store.state.currentQuestionSubquestions;},set:function set(newValue){this.$store.commit('setCurrentQuestionSubquestions',newValue);}}},methods:{getTemplate:function getTemplate(){var scaleId=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var randomId=this.getRandomId();var subQuestionTemplate={qid:randomId,parent_qid:this.$store.state.currentQuestion.qid,sid:this.$store.state.currentQuestion.sid,gid:this.$store.state.currentQuestion.gid,type:"F",title:this.getNewTitleFromCurrent(scaleId),preg:null,other:"N",mandatory:"N",question_order:this.currentDataSet.length+1,scale_id:''+scaleId,same_default:"0",relevance:"1",modulename:null};__WEBPACK_IMPORTED_MODULE_4_lodash_foreach___default()(this.$store.state.languages,function(lng,lngKey){subQuestionTemplate[lngKey]={id:null,qid:randomId,question:"",help:"",language:lngKey};});return subQuestionTemplate;},resetSubquestions:function resetSubquestions(){this.currentDataSet=this.$store.state.questionSubquestionsImmutable;},getQuestionForCurrentLanguage:function getQuestionForCurrentLanguage(subquestionObject){try{return subquestionObject[this.$store.state.activeLanguage].question;}catch(e){this.$log.error('PROBLEM GETTING LANGUAGE',subquestionObject);}return'';},setQuestionForCurrentLanguage:function setQuestionForCurrentLanguage(subquestionObject,$event){subquestionObject[this.$store.state.activeLanguage].question=$event.srcElement.value;},triggerScale:function triggerScale($event){$('.scoped-relevance-block').css({'flex-grow':4,'max-width':'initial'});},untriggerScale:function untriggerScale($event){$('.scoped-relevance-block').css({'flex-grow':4,'max-width':''});}},mounted:function mounted(){if(__WEBPACK_IMPORTED_MODULE_3_lodash_isEmpty___default()(this.$store.state.currentQuestionSubquestions)){this.$store.state.currentQuestionSubquestions={"0":[this.getTemplate()]};};}};/***/},/* 258 *//***/function(module,exports,__webpack_require__){var isSymbol=__webpack_require__(16);/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */function baseExtremum(array,iteratee,comparator){var index=-1,length=array.length;while(++index<length){var value=array[index],current=iteratee(value);if(current!=null&&(computed===undefined?current===current&&!isSymbol(current):comparator(current,computed))){var computed=current,result=value;}}return result;}module.exports=baseExtremum;/***/},/* 259 *//***/function(module,exports){/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */function baseGt(value,other){return value>other;}module.exports=baseGt;/***/},/* 260 *//***/function(module,exports,__webpack_require__){var baseUnset=__webpack_require__(261),isIndex=__webpack_require__(21);/** Used for built-in method references. */var arrayProto=Array.prototype;/** Built-in value references. */var splice=arrayProto.splice;/**
 * The base implementation of `_.pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */function basePullAt(array,indexes){var length=array?indexes.length:0,lastIndex=length-1;while(length--){var index=indexes[length];if(length==lastIndex||index!==previous){var previous=index;if(isIndex(index)){splice.call(array,index,1);}else{baseUnset(array,index);}}}return array;}module.exports=basePullAt;/***/},/* 261 *//***/function(module,exports,__webpack_require__){var castPath=__webpack_require__(25),last=__webpack_require__(262),parent=__webpack_require__(263),toKey=__webpack_require__(17);/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */function baseUnset(object,path){path=castPath(path,object);object=parent(object,path);return object==null||delete object[toKey(last(path))];}module.exports=baseUnset;/***/},/* 262 *//***/function(module,exports){/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */function last(array){var length=array==null?0:array.length;return length?array[length-1]:undefined;}module.exports=last;/***/},/* 263 *//***/function(module,exports,__webpack_require__){var baseGet=__webpack_require__(38),baseSlice=__webpack_require__(100);/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */function parent(object,path){return path.length<2?object:baseGet(object,baseSlice(path,0,-1));}module.exports=parent;/***/},/* 264 *//***/function(module,exports,__webpack_require__){var baseFindIndex=__webpack_require__(102),baseIteratee=__webpack_require__(23),toInteger=__webpack_require__(59);/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max;/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */function findIndex(array,predicate,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseFindIndex(array,baseIteratee(predicate,3),index);}module.exports=findIndex;/***/},/* 265 *//***/function(module,exports,__webpack_require__){var toNumber=__webpack_require__(82);/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_INTEGER=1.7976931348623157e+308;/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}module.exports=toFinite;/***/},/* 266 *//***/function(module,exports,__webpack_require__){function injectStyle(ssrContext){__webpack_require__(267);}var Component=__webpack_require__(0)(/* script */__webpack_require__(269),/* template */__webpack_require__(270),/* styles */injectStyle,/* scopeId */"data-v-17c78e35",/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 267 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(268);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(4)("4fa2f604",content,true);/***/},/* 268 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(3)(undefined);// imports
// module
exports.push([module.i,".scoped-textarea-class[data-v-17c78e35]{height:100%;width:100%}",""]);// exports
/***/},/* 269 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_keys__=__webpack_require__(6);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_keys___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_keys__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_foreach__=__webpack_require__(8);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_foreach___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_foreach__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_slice__=__webpack_require__(103);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_slice___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_slice__);/* harmony default export */__webpack_exports__["default"]={name:'quickedit',props:{current:{type:[Array,Object],required:true},type:{type:String,required:true},typedef:{type:String,required:true},typekey:{type:String,required:true}},data:function data(){return{unparsed:[''],parsed:[{}],delimiter:';',multilanguage:false};},computed:{multiscale:function multiscale(){return this.current.length>1;},scales:function scales(){return __WEBPACK_IMPORTED_MODULE_0_lodash_keys___default()(this.current);}},watch:{delimiter:function delimiter(newDelimiter,oldDelimiter){this.unparseContent(newDelimiter);}},methods:{parseContent:function parseContent(scale){var _this326=this;scale=scale||0;var rows=this.unparsed[scale].split(/\r?\n/);var newBlockObject={};this.$log.log({rows:rows});rows.forEach(function(element,rowCount){var blocks=element.split(_this326.delimiter);var newBlock={};_this326.$log.log({blocks:blocks});if(blocks.length==1){newBlock[_this326.$store.state.activeLanguage]=blocks[0];newBlockObject[_this326.type+''+rowCount]=newBlock;return;}if(_this326.multilanguage===true){__WEBPACK_IMPORTED_MODULE_0_lodash_keys___default()(_this326.$store.state.languages).forEach(function(lng,i){if(blocks[i+1]!=undefined){newBlock[lng]=blocks[i+1];return;}newBlock[lng]=blocks[1];});}else{newBlock[_this326.$store.state.activeLanguage]=blocks[1];}newBlockObject[blocks[0]]=newBlock;});this.$set(this.parsed,scale,newBlockObject);this.$log.log({parsed:this.parsed});},unparseContent:function unparseContent(){var _this327=this;var delimiter=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;delimiter=delimiter||this.delimiter;__WEBPACK_IMPORTED_MODULE_1_lodash_foreach___default()(this.parsed,function(scaleArray,scale){_this327.$set(_this327.unparsed,scale,'');var rows=[];__WEBPACK_IMPORTED_MODULE_1_lodash_foreach___default()(scaleArray,function(rowContent,key){var row=key+''+delimiter;row+=rowContent.join(delimiter);rows.push(row);});_this327.$set(_this327.unparsed,scale,rows.join("\n"));});},resetContent:function resetContent(){var _this328=this;__WEBPACK_IMPORTED_MODULE_1_lodash_foreach___default()(this.current,function(scaleArray,scale){_this328.$set(_this328.unparsed,scale,'');var rows=[];scaleArray.forEach(function(rowObject){var row=rowObject[_this328.typekey]+''+_this328.delimiter;if(_this328.multilanguage===true){__WEBPACK_IMPORTED_MODULE_0_lodash_keys___default()(_this328.$stores.state.languages).forEach(function(lng,i){row+=rowObject[lng][_this328.typedef]+''+_this328.delimiter;});row=row.substring(0,row.length-1);}else{row+=rowObject[_this328.$store.state.activeLanguage][_this328.typedef];}rows.push(row);});_this328.$set(_this328.unparsed,scale,rows.join("\n"));_this328.parseContent(scale);});},close:function close(){this.$emit('close');},replaceCurrent:function replaceCurrent(){this.$store.dispatch('resetContentFromQuickEdit',{type:this.type,payload:this.parsed});this.$emit('modalEvent',{target:this.type,method:'replaceFromQuickAdd',content:this.parsed});this.$emit('close');},addToCurrent:function addToCurrent(){this.$store.dispatch('addToCurrentFromQuickEdit',{type:this.type,payload:this.parsed});this.$emit('modalEvent',{target:this.type,method:'addToFromQuickAdd',content:this.parsed});this.$emit('close');}},mounted:function mounted(){var _this329=this;this.resetContent();this.scales.forEach(function(scale){_this329.parseContent(scale);});}};/***/},/* 270 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel panel-default ls-flex-column fill"},[_c('div',{staticClass:"panel-heading"},[_c('div',{staticClass:"pagetitle h3"},[_vm._v(_vm._s(_vm._f("translate")('Quick edit')))]),_vm._v(" "),_c('div',{},[_c('div',{staticClass:"ls-flex-row align-content-space-between wrap"},[_c('div',{staticClass:"col-5"},[_c('div',{staticClass:"ls-flex-row"},[_c('label',{staticClass:"ls-flex col-6",attrs:{"for":_vm.type+'--Select-Delimiter'}},[_vm._v(_vm._s(_vm._f("translate")("Select delimiter")))]),_vm._v(" "),_c('select',{directives:[{name:"model",rawName:"v-model",value:_vm.delimiter,expression:"delimiter"}],staticClass:"form-control ls-flex",attrs:{"id":_vm.type+'--Select-Delimiter'},on:{"change":function change($event){var $$selectedVal=Array.prototype.filter.call($event.target.options,function(o){return o.selected;}).map(function(o){var val="_value"in o?o._value:o.value;return val;});_vm.delimiter=$event.target.multiple?$$selectedVal:$$selectedVal[0];}}},[_c('option',{attrs:{"value":";"}},[_vm._v("\n                                "+_vm._s(_vm._f("translate")('Semicolon'))+" (;)\n                            ")]),_vm._v(" "),_c('option',{attrs:{"value":","}},[_vm._v("\n                                "+_vm._s(_vm._f("translate")('Comma'))+" (,)\n                            ")]),_vm._v(" "),_c('option',{attrs:{"value":"\\t"}},[_vm._v("\n                                "+_vm._s(_vm._f("translate")('Tab'))+" (\\t)\n                            ")])])])]),_vm._v(" "),_c('div',{staticClass:"col-5 text-right"},[_c('label',{attrs:{"for":_vm.type+'--Toggle-Multilingual'}},[_vm._v(_vm._s(_vm._f("translate")('Multilingual entry'))+" ")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.multilanguage,expression:"multilanguage"}],attrs:{"id":_vm.type+'--Toggle-Multilingual',"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.multilanguage)?_vm._i(_vm.multilanguage,null)>-1:_vm.multilanguage},on:{"change":function change($event){var $$a=_vm.multilanguage,$$el=$event.target,$$c=$$el.checked?true:false;if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.multilanguage=$$a.concat([$$v]));}else{$$i>-1&&(_vm.multilanguage=$$a.slice(0,$$i).concat($$a.slice($$i+1)));}}else{_vm.multilanguage=$$c;}}}})])])])]),_vm._v(" "),_c('div',{staticClass:"panel-body ls-flex-column grow-1 fill"},_vm._l(_vm.scales,function(scale){return _c('div',{key:scale,staticClass:"ls-flex-column fill ls-space margin top-5 bottom-5"},[_c('div',{staticClass:"ls-flex-row"},[_c('h3',[_vm._v(_vm._s(_vm._f("translate")('Scale'))+" "+_vm._s(scale))])]),_vm._v(" "),_c('div',{staticClass:"ls-flex-colum grow-1"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:_vm.unparsed[scale],expression:"unparsed[scale]"}],staticClass:"scoped-textarea-class",domProps:{"value":_vm.unparsed[scale]},on:{"change":function change($event){_vm.parseContent(scale);},"input":function input($event){if($event.target.composing){return;}_vm.$set(_vm.unparsed,scale,$event.target.value);}}})]),_vm._v(" "),_c('div',{staticClass:"ls-flex-row bg-info"},[_c('div',{staticClass:"text-left"},[_vm._v("\n                    "+_vm._s(_vm._f("translate")('New rows'))+": "),_c('span',{staticClass:"badge"},[_vm._v(_vm._s(_vm.parsed.length))])])])]);})),_vm._v(" "),_c('div',{staticClass:"panel-footer"},[_c('div',{staticClass:"ls-flex-row wrap"},[_c('div',{staticClass:"ls-flex-item"},[_c('button',{staticClass:"btn btn-primary ls-space margin left-5",attrs:{"type":"button"},on:{"click":_vm.replaceCurrent}},[_vm._v(_vm._s(_vm._f("translate")('Replace')))]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary ls-space margin left-5",attrs:{"type":"button"},on:{"click":_vm.addToCurrent}},[_vm._v(_vm._s(_vm._f("translate")('Add')))])]),_vm._v(" "),_c('div',{staticClass:"ls-flex-item text-right"},[_c('button',{staticClass:"btn btn-danger ls-space margin right-5",attrs:{"type":"button"},on:{"click":_vm.resetContent}},[_vm._v(_vm._s(_vm._f("translate")('Reset')))]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger ls-space margin right-5",attrs:{"type":"button"},on:{"click":_vm.close}},[_vm._v(_vm._s(_vm._f("translate")('Cancel')))])])])])]);},staticRenderFns:[]/***/};},/* 271 *//***/function(module,exports,__webpack_require__){function injectStyle(ssrContext){__webpack_require__(272);}var Component=__webpack_require__(0)(/* script */__webpack_require__(274),/* template */__webpack_require__(275),/* styles */injectStyle,/* scopeId */null,/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 272 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(273);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(4)("217d551b",content,true);/***/},/* 273 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(3)(undefined);// imports
// module
exports.push([module.i,".unscoped--SimplePopup-editor-container .ck.ck-content,.unscoped--SimplePopup-editor-container .ck.ck-editor,.unscoped--SimplePopup-editor-container .ck.ck-editor__main{display:flex;flex-direction:column;height:100%}",""]);// exports
/***/},/* 274 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__ckeditor_ckeditor5_build_classic__=__webpack_require__(81);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__ckeditor_ckeditor5_build_classic___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ckeditor_ckeditor5_build_classic__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_merge__=__webpack_require__(11);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_merge___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_merge__);/* harmony default export */__webpack_exports__["default"]={name:'SimplePopUpEditor',data:function data(){return{editor:__WEBPACK_IMPORTED_MODULE_0__ckeditor_ckeditor5_build_classic___default.a,editorConfig:{},abstractObject:{}};},props:{typeDef:{type:String,required:true},typeDefKey:{type:String,required:true},target:{type:String,required:true},dataSetObject:{type:Object,required:true}},computed:{title:function title(){return this.dataSetObject[this.typeDefKey];}},methods:{close:function close(){this.$emit('close');},saveAndClose:function saveAndClose(){this.$emit('modalEvent',{target:this.target,method:'editFromSimplePopupEditor',content:this.abstractObject});this.$emit('close');}},created:function created(){this.abstractObject=__WEBPACK_IMPORTED_MODULE_1_lodash_merge___default()({},this.dataSetObject);}};/***/},/* 275 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel panel-default ls-flex-column fill"},[_c('div',{staticClass:"panel-heading"},[_c('div',{staticClass:"pagetitle h3"},[_vm._v(_vm._s(_vm.title)+" - "+_vm._s(_vm._f("translate")('Editor'))+" ")])]),_vm._v(" "),_c('div',{staticClass:"panel-body ls-flex-column grow-1 fill"},[_c('div',{staticClass:"ls-flex-column fill unscoped--SimplePopup-editor-container"},[_c('ckeditor',{staticClass:"ls-flex-column fill",attrs:{"editor":_vm.editor,"config":_vm.editorConfig},model:{value:_vm.abstractObject[_vm.$store.state.activeLanguage][_vm.typeDef],callback:function callback($$v){_vm.$set(_vm.abstractObject[_vm.$store.state.activeLanguage],_vm.typeDef,$$v);},expression:"abstractObject[$store.state.activeLanguage][typeDef]"}})],1)]),_vm._v(" "),_c('div',{staticClass:"panel-footer"},[_c('div',{staticClass:"ls-flex-row wrap"},[_c('div',{staticClass:"ls-flex-item text-right"},[_c('button',{staticClass:"btn btn-danger ls-space margin right-5",attrs:{"type":"button"},on:{"click":_vm.close}},[_vm._v(_vm._s(_vm._f("translate")('Cancel')))]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary ls-space margin left-5",attrs:{"type":"button"},on:{"click":_vm.saveAndClose}},[_vm._v(_vm._s(_vm._f("translate")('Save and Close')))])])])])]);},staticRenderFns:[]/***/};},/* 276 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-sm-12"},[_c('div',{staticClass:"container-fluid scoped-main-subquestions-container"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:!_vm.readonly,expression:"!readonly"}],staticClass:"row"},[_c('div',{staticClass:"col-sm-8"},[_c('button',{staticClass:"btn btn-default col-3",on:{"click":function click($event){$event.preventDefault();_vm.openQuickAdd($event);}}},[_vm._v(_vm._s(_vm._f("translate")("Quick add")))]),_vm._v(" "),_c('span',{staticClass:"scoped-spacer col-1"}),_vm._v(" "),_c('button',{staticClass:"btn btn-default",on:{"click":function click($event){$event.preventDefault();_vm.openLabelSets($event);}}},[_vm._v(_vm._s(_vm._f("translate")("Predefined label sets")))]),_vm._v(" "),_c('button',{staticClass:"btn btn-default",on:{"click":function click($event){$event.preventDefault();_vm.saveAsLabelSet($event);}}},[_vm._v(_vm._s(_vm._f("translate")("Save as label set")))])]),_vm._v(" "),_c('div',{staticClass:"col-sm-4 text-right"},[_c('button',{staticClass:"btn btn-danger col-5",on:{"click":function click($event){$event.preventDefault();_vm.resetSubquestions($event);}}},[_vm._v(_vm._s(_vm._f("translate")("Reset")))])])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._l(_vm.subquestionScales,function(subquestionscale){return[_c('div',{key:subquestionscale+'subquestions',staticClass:"row list-group scoped-subquestion-row-container"},_vm._l(_vm.currentDataSet[subquestionscale],function(subquestion){return _c('div',{key:subquestion.qid,staticClass:"list-group-item scoped-subquestion-block"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:!_vm.readonly,expression:"!readonly"}],staticClass:"scoped-move-block"},[_c('i',{staticClass:"fa fa-bars",class:_vm.surveyActive?' disabled':' '})]),_vm._v(" "),_c('div',{staticClass:"scoped-code-block   "},[_c('input',{directives:[{name:"model",rawName:"v-model",value:subquestion.title,expression:"subquestion.title"}],staticClass:"form-control",class:_vm.surveyActive?' disabled':' ',attrs:{"type":"text","maxlength":"20","size":"5","name":'code_'+subquestion.question_order+'_'+subquestionscale,"readonly":_vm.readonly},domProps:{"value":subquestion.title},on:{"keyup":function keyup($event){if(!('button'in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){return null;}$event.preventDefault();_vm.switchinput("answer_"+_vm.$store.state.activeLanguage+"_"+subquestion.qid+"_"+subquestionscale);},"input":function input($event){if($event.target.composing){return;}_vm.$set(subquestion,"title",$event.target.value);}}})]),_vm._v(" "),_c('div',{staticClass:"scoped-content-block   "},[_c('input',{staticClass:"answer form-control input",attrs:{"type":"text","size":"20","id":"answer_"+_vm.$store.state.activeLanguage+"_"+subquestion.qid+"_"+subquestionscale,"name":"answer_"+_vm.$store.state.activeLanguage+"_"+subquestion.qid+"_"+subquestionscale,"placeholder":_vm.translate("Some example subquestion"),"readonly":_vm.readonly},domProps:{"value":_vm.getQuestionForCurrentLanguage(subquestion)},on:{"change":function change($event){_vm.setQuestionForCurrentLanguage(subquestion,$event,arguments);},"keyup":function keyup($event){if(!('button'in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){return null;}$event.preventDefault();_vm.switchinput("relevance_"+subquestion.qid+"_"+subquestionscale);}}})]),_vm._v(" "),_c('div',{staticClass:"scoped-relevance-block   "},[_c('div',{staticClass:"input-group"},[_c('div',{staticClass:"input-group-addon"},[_vm._v("{")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:subquestion.relevance,expression:"subquestion.relevance"}],staticClass:"relevance_input_field form-control input",attrs:{"type":"text","id":"relevance_"+subquestion.qid+"_"+subquestionscale,"name":"relevance_"+subquestion.qid+"_"+subquestionscale,"readonly":_vm.readonly},domProps:{"value":subquestion.relevance},on:{"keyup":function keyup($event){if(!('button'in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){return null;}$event.preventDefault();_vm.switchinput(false,$event);},"focus":_vm.triggerScale,"blur":_vm.untriggerScale,"input":function input($event){if($event.target.composing){return;}_vm.$set(subquestion,"relevance",$event.target.value);}}}),_vm._v(" "),_c('div',{staticClass:"input-group-addon"},[_vm._v("}")])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:!_vm.readonly,expression:"!readonly"}],staticClass:"scoped-actions-block"},[_c('button',{staticClass:"btn btn-default btn-small",on:{"click":function click($event){$event.preventDefault();_vm.deleteThisDataSet(subquestion,subquestionscale);}}},[_c('i',{staticClass:"fa fa-trash text-danger"}),_vm._v("\n                            "+_vm._s(_vm._f("translate")("Delete"))+"\n                        ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-default btn-small",on:{"click":function click($event){$event.preventDefault();_vm.openPopUpEditor(subquestion,subquestionscale);}}},[_c('i',{staticClass:"fa fa-edit"}),_vm._v("\n                            "+_vm._s(_vm._f("translate")("Open editor"))+"\n                        ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-default btn-small",on:{"click":function click($event){$event.preventDefault();_vm.duplicateThisDataSet(subquestion,subquestionscale);}}},[_c('i',{staticClass:"fa fa-copy"}),_vm._v("\n                            "+_vm._s(_vm._f("translate")("Duplicate"))+"\n                        ")])])]);})),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:!_vm.readonly,expression:"!readonly"}],key:subquestionscale+'addRow',staticClass:"row"},[_c('div',{staticClass:"col-sm-12 text-right"},[_c('button',{staticClass:"btn btn-primary",on:{"click":function click($event){$event.preventDefault();_vm.addDataSet(subquestionscale);}}},[_c('i',{staticClass:"fa fa-plus"}),_vm._v("\n                        "+_vm._s(_vm._f("translate")("Add subquestion"))+"\n                    ")])])])];})],2)]);},staticRenderFns:[function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('hr')])]);}]/***/};},/* 277 *//***/function(module,exports,__webpack_require__){function injectStyle(ssrContext){__webpack_require__(278);}var Component=__webpack_require__(0)(/* script */__webpack_require__(280),/* template */__webpack_require__(281),/* styles */injectStyle,/* scopeId */"data-v-0a0212fa",/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 278 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(279);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(4)("dd071074",content,true);/***/},/* 279 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(3)(undefined);// imports
// module
exports.push([module.i,".scoped-spacer[data-v-0a0212fa]{content:\" \";display:inline-block}.scoped-main-answeroptions-container[data-v-0a0212fa]{margin:1rem .2rem;padding-top:.2rem;min-height:25vh}.scoped-answeroption-block[data-v-0a0212fa]{display:flex;flex-wrap:nowrap;width:100%;justify-content:space-evenly}.scoped-answeroption-block>div[data-v-0a0212fa]{flex-basis:auto;padding:1px 2px}.scoped-move-block[data-v-0a0212fa]{flex-grow:1;text-align:center}.scoped-move-block>i[data-v-0a0212fa]{font-size:28px;line-height:32px}.scoped-move-block>i[data-v-0a0212fa]:after{content:\" |\";font-size:24px;vertical-align:text-bottom}.scoped-content-block[data-v-0a0212fa]{flex-grow:6}.scoped-actions-block[data-v-0a0212fa],.scoped-assessments-block[data-v-0a0212fa]{flex-grow:2}",""]);// exports
/***/},/* 280 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_merge__=__webpack_require__(11);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_merge___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_merge__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_remove__=__webpack_require__(58);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_remove___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_remove__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_isEmpty__=__webpack_require__(5);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_isEmpty___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isEmpty__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_foreach__=__webpack_require__(8);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_foreach___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_foreach__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__mixins_abstractSubquestionAndAnswers_js__=__webpack_require__(101);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__mixins_eventChild_js__=__webpack_require__(18);/* harmony default export */__webpack_exports__["default"]={name:'answeroptions',mixins:[__WEBPACK_IMPORTED_MODULE_4__mixins_abstractSubquestionAndAnswers_js__["a"/* default */],__WEBPACK_IMPORTED_MODULE_5__mixins_eventChild_js__["a"/* default */]],data:function data(){return{uniqueSelector:'aid',baseNonNumericPart:"AO",type:'answeroptions',typeDefininition:'answer',typeDefininitionKey:'code'};},computed:{surveyActive:function surveyActive(){return false;},answeroptionscales:function answeroptionscales(){if(this.$store.state.currentQuestion.typeInformation.answerscales==1){return[0];}if(this.$store.state.currentQuestion.typeInformation.answerscales==2){return[0,1];}return[];},currentDataSet:{get:function get(){return this.$store.state.currentQuestionAnswerOptions;},set:function set(newValue){this.$store.commit('setCurrentQuestionAnswerOptions',newValue);}}},methods:{getTemplate:function getTemplate(){var scaleId=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;var randomId=this.getRandomId();var answerOptionTemplate={aid:randomId,qid:this.$store.state.currentQuestion.qid,code:this.getNewTitleFromCurrent(scaleId),sortorder:this.currentDataSet.length+1,scale_id:''+scaleId,assessment_value:0};__WEBPACK_IMPORTED_MODULE_3_lodash_foreach___default()(this.$store.state.languages,function(lng,lngKey){answerOptionTemplate[lngKey]={id:null,aid:randomId,answer:"",language:lngKey};});return answerOptionTemplate;},resetansweroptions:function resetansweroptions(){this.currentDataSet=this.$store.state.questionAnswerOptionsImmutable;},getAnswerForCurrentLanguage:function getAnswerForCurrentLanguage(answerOptionObject){try{return answerOptionObject[this.$store.state.activeLanguage].answer;}catch(e){this.$log.error('PROBLEM GETTING LANGUAGE',answerOptionObject);}return'';},setAnswerForCurrentLanguage:function setAnswerForCurrentLanguage(answerOptionObject,$event){this.$log.log('setAnswerOption',$event);if(!answerOptionObject[this.$store.state.activeLanguage]){answerOptionObject[this.$store.state.activeLanguage]={};}answerOptionObject[this.$store.state.activeLanguage].answer=$event.srcElement.value;},replaceByQuickAddObject:function replaceByQuickAddObject(quickAddContent){this.$_log.log({AOQuickAddContent:quickAddContent});}},mounted:function mounted(){if(__WEBPACK_IMPORTED_MODULE_2_lodash_isEmpty___default()(this.$store.state.currentQuestionAnswerOptions)){this.$store.state.currentQuestionAnswerOptions={"0":[this.getTemplate()]};};}};/***/},/* 281 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-sm-12"},[_c('div',{staticClass:"container-fluid scoped-main-answeroptions-container"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:!_vm.readonly,expression:"!readonly"}],staticClass:"row"},[_c('div',{staticClass:"col-sm-8"},[_c('button',{staticClass:"btn btn-default col-3",on:{"click":function click($event){$event.preventDefault();_vm.openQuickAdd($event);}}},[_vm._v(_vm._s(_vm._f("translate")("Quick add")))]),_vm._v(" "),_c('span',{staticClass:"scoped-spacer col-1"}),_vm._v(" "),_c('button',{staticClass:"btn btn-default",on:{"click":function click($event){$event.preventDefault();_vm.openLabelSets($event);}}},[_vm._v(_vm._s(_vm._f("translate")("Predefined label sets")))]),_vm._v(" "),_c('button',{staticClass:"btn btn-default",on:{"click":function click($event){$event.preventDefault();_vm.saveAsLabelSet($event);}}},[_vm._v(_vm._s(_vm._f("translate")("Save as label set")))])]),_vm._v(" "),_c('div',{staticClass:"col-sm-4 text-right"},[_c('button',{staticClass:"btn btn-danger col-5",on:{"click":function click($event){$event.preventDefault();_vm.resetansweroptions($event);}}},[_vm._v(_vm._s(_vm._f("translate")("Reset")))])])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_vm._l(_vm.answeroptionscales,function(answeroptionscale){return[_c('div',{key:answeroptionscale+'answeroptions',staticClass:"row list-group scoped-answeroption-row-container"},_vm._l(_vm.currentDataSet[answeroptionscale],function(answeroption){return _c('div',{key:answeroption.aid,staticClass:"list-group-item scoped-answeroption-block"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:!_vm.readonly,expression:"!readonly"}],staticClass:"scoped-move-block"},[_c('i',{staticClass:"fa fa-bars",class:_vm.surveyActive?' disabled':' '})]),_vm._v(" "),_c('div',{staticClass:"scoped-code-block"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:answeroption.code,expression:"answeroption.code"}],staticClass:"form-control",class:_vm.surveyActive?' disabled':' ',attrs:{"type":"text","maxlength":"20","size":"5","name":'code_'+answeroption.sortorder+'_'+answeroptionscale,"readonly":_vm.readonly},domProps:{"value":answeroption.code},on:{"keyup":function keyup($event){if(!('button'in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){return null;}$event.preventDefault();_vm.switchinput('assessment_'+answeroption.sortorder+'_'+answeroptionscale);},"input":function input($event){if($event.target.composing){return;}_vm.$set(answeroption,"code",$event.target.value);}}})]),_vm._v(" "),_c('div',{staticClass:"scoped-assessments-block"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:answeroption.assessment_value,expression:"answeroption.assessment_value"}],staticClass:"assessment form-control input",attrs:{"type":"numeric","id":'assessment_'+answeroption.sortorder+'_'+answeroptionscale,"name":'assessment_'+answeroption.sortorder+'_'+answeroptionscale,"readonly":_vm.readonly,"maxlength":"5","size":"5"},domProps:{"value":answeroption.assessment_value},on:{"keyup":function keyup($event){if(!('button'in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){return null;}$event.preventDefault();_vm.switchinput("answer_"+_vm.$store.state.activeLanguage+"_"+answeroption.aid+"_"+answeroptionscale);},"input":function input($event){if($event.target.composing){return;}_vm.$set(answeroption,"assessment_value",$event.target.value);}}})]),_vm._v(" "),_c('div',{staticClass:"scoped-content-block"},[_c('input',{staticClass:"answer form-control input",attrs:{"type":"text","size":"20","id":"answer_"+_vm.$store.state.activeLanguage+"_"+answeroption.aid+"_"+answeroptionscale,"name":"answer_"+_vm.$store.state.activeLanguage+"_"+answeroption.aid+"_"+answeroptionscale,"placeholder":_vm.translate("Some example answer option"),"readonly":_vm.readonly},domProps:{"value":_vm.getAnswerForCurrentLanguage(answeroption)},on:{"change":function change($event){_vm.setAnswerForCurrentLanguage(answeroption,$event);},"keyup":function keyup($event){if(!('button'in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){return null;}$event.preventDefault();_vm.switchinput(false,$event);}}})]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:!_vm.readonly,expression:"!readonly"}],staticClass:"scoped-actions-block"},[_c('button',{staticClass:"btn btn-default btn-small",on:{"click":function click($event){$event.preventDefault();_vm.deleteThisDataSet(answeroption,answeroptionscale);}}},[_c('i',{staticClass:"fa fa-trash text-danger"}),_vm._v("\n                            "+_vm._s(_vm._f("translate")("Delete"))+"\n                        ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-default btn-small",on:{"click":function click($event){$event.preventDefault();_vm.openPopUpEditor(answeroption,answeroptionscale);}}},[_c('i',{staticClass:"fa fa-edit"}),_vm._v("\n                            "+_vm._s(_vm._f("translate")("Open editor"))+"\n                        ")]),_vm._v(" "),_c('button',{staticClass:"btn btn-default btn-small",on:{"click":function click($event){$event.preventDefault();_vm.duplicateThisDataSet(answeroption,answeroptionscale);}}},[_c('i',{staticClass:"fa fa-copy"}),_vm._v("\n                            "+_vm._s(_vm._f("translate")("Duplicate"))+"\n                        ")])])]);})),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:!_vm.readonly,expression:"!readonly"}],key:answeroptionscale+'addRow',staticClass:"row"},[_c('div',{staticClass:"col-sm-12 text-right"},[_c('button',{staticClass:"btn btn-primary",on:{"click":function click($event){$event.preventDefault();_vm.addDataSet(answeroptionscale);}}},[_c('i',{staticClass:"fa fa-plus"}),_vm._v("\n                        "+_vm._s(_vm._f("translate")("Add answeroption"))+"\n                    ")])])])];})],2)]);},staticRenderFns:[function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col-sm-12"},[_c('hr')])]);}]/***/};},/* 282 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-xs-12 scope-apply-base-style scope-min-height"},[_c('div',{staticClass:"container-fluid"},[_c('div',{staticClass:"row scoped-tablist-container"},[_vm.showSubquestionEdit||_vm.showAnswerOptionEdit?[_c('ul',{staticClass:"nav nav-tabs scoped-tablist-subquestionandanswers",attrs:{"role":"tablist"}},[_vm.showSubquestionEdit?_c('li',{class:_vm.currentTabComponent=='subquestions'?'active':''},[_c('a',{attrs:{"href":"#"},on:{"click":function click($event){$event.preventDefault();$event.stopPropagation();_vm.selectCurrentTab('subquestions');}}},[_vm._v(_vm._s(_vm._f("translate")("subquestions")))])]):_vm._e(),_vm._v(" "),_vm.showAnswerOptionEdit?_c('li',{class:_vm.currentTabComponent=='answeroptions'?'active':''},[_c('a',{attrs:{"href":"#"},on:{"click":function click($event){$event.preventDefault();$event.stopPropagation();_vm.selectCurrentTab('answeroptions');}}},[_vm._v(_vm._s(_vm._f("translate")("answeroptions")))])]):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"scope-divider"},[_vm._v("|")])]:_vm._e(),_vm._v(" "),_c('ul',{staticClass:"nav nav-tabs scoped-tablist-advanced-settings",attrs:{"role":"tablist"}},_vm._l(_vm.tabs,function(advancedSettingCategory){return _c('li',{key:'tablist-'+advancedSettingCategory,class:_vm.$store.state.questionAdvancedSettingsCategory==advancedSettingCategory&&_vm.currentTabComponent=='settings-tab'?'active':''},[_c('a',{attrs:{"href":"#"},on:{"click":function click($event){$event.preventDefault();$event.stopPropagation();_vm.selectCurrentTab('settings-tab',advancedSettingCategory);}}},[_vm._v(_vm._s(advancedSettingCategory))])]);}))],2),_vm._v(" "),_c('div',{staticClass:"row scope-border-open-top"},[_c(_vm.currentTabComponent,{tag:"component",attrs:{"event":_vm.event,"readonly":_vm.readonly},on:{"eventSet":_vm.eventSet}})],1)])]);},staticRenderFns:[]/***/};},/* 283 *//***/function(module,exports,__webpack_require__){function injectStyle(ssrContext){__webpack_require__(284);}var Component=__webpack_require__(0)(/* script */__webpack_require__(286),/* template */__webpack_require__(299),/* styles */injectStyle,/* scopeId */"data-v-fede2bae",/* moduleIdentifier (server only) */null);module.exports=Component.exports;/***/},/* 284 *//***/function(module,exports,__webpack_require__){// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(285);if(typeof content==='string')content=[[module.i,content,'']];if(content.locals)module.exports=content.locals;// add the styles to the DOM
var update=__webpack_require__(4)("27c8e05c",content,true);/***/},/* 285 *//***/function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(3)(undefined);// imports
// module
exports.push([module.i,".button-toolbar>.btn-group[data-v-fede2bae]{margin-top:.3rem;margin-bottom:.5rem;width:100%}.button-toolbar>.btn-group>.btn[data-v-fede2bae]{min-width:20%}",""]);// exports
/***/},/* 286 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:true});/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_size__=__webpack_require__(287);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_size___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_size__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_pick__=__webpack_require__(293);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_pick___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_pick__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_keys__=__webpack_require__(6);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_keys___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_keys__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_slice__=__webpack_require__(103);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_slice___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_slice__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4_lodash_foreach__=__webpack_require__(8);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4_lodash_foreach___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_foreach__);//
/* harmony default export */__webpack_exports__["default"]={name:'language-selector',props:{elId:{type:String,required:true},aLanguages:{type:[Array,Object],required:true},parentCurrentLanguage:{type:String,required:true}},computed:{currentLanguage:{get:function get(){return this.parentCurrentLanguage;},set:function set(newValue){this.$emit('change',newValue);}},getInChunks:function getInChunks(){if(__WEBPACK_IMPORTED_MODULE_0_lodash_size___default()(this.aLanguages)<=5){return[this.aLanguages];};var firstfour=__WEBPACK_IMPORTED_MODULE_1_lodash_pick___default()(this.aLanguages,__WEBPACK_IMPORTED_MODULE_3_lodash_slice___default()(__WEBPACK_IMPORTED_MODULE_2_lodash_keys___default()(this.aLanguages),0,4));var rest=__WEBPACK_IMPORTED_MODULE_1_lodash_pick___default()(this.aLanguages,__WEBPACK_IMPORTED_MODULE_3_lodash_slice___default()(__WEBPACK_IMPORTED_MODULE_2_lodash_keys___default()(this.aLanguages),5));return[firstfour,rest];}},methods:{setCurrentLanguage:function setCurrentLanguage(newValue){this.$emit('change',newValue);}}};/***/},/* 287 *//***/function(module,exports,__webpack_require__){var baseKeys=__webpack_require__(43),getTag=__webpack_require__(37),isArrayLike=__webpack_require__(10),isString=__webpack_require__(288),stringSize=__webpack_require__(289);/** `Object#toString` result references. */var mapTag='[object Map]',setTag='[object Set]';/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */function size(collection){if(collection==null){return 0;}if(isArrayLike(collection)){return isString(collection)?stringSize(collection):collection.length;}var tag=getTag(collection);if(tag==mapTag||tag==setTag){return collection.size;}return baseKeys(collection).length;}module.exports=size;/***/},/* 288 *//***/function(module,exports,__webpack_require__){var baseGetTag=__webpack_require__(12),isArray=__webpack_require__(1),isObjectLike=__webpack_require__(9);/** `Object#toString` result references. */var stringTag='[object String]';/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */function isString(value){return typeof value=='string'||!isArray(value)&&isObjectLike(value)&&baseGetTag(value)==stringTag;}module.exports=isString;/***/},/* 289 *//***/function(module,exports,__webpack_require__){var asciiSize=__webpack_require__(290),hasUnicode=__webpack_require__(291),unicodeSize=__webpack_require__(292);/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */function stringSize(string){return hasUnicode(string)?unicodeSize(string):asciiSize(string);}module.exports=stringSize;/***/},/* 290 *//***/function(module,exports,__webpack_require__){var baseProperty=__webpack_require__(80);/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */var asciiSize=baseProperty('length');module.exports=asciiSize;/***/},/* 291 *//***/function(module,exports){/** Used to compose unicode character classes. */var rsAstralRange='\\ud800-\\udfff',rsComboMarksRange='\\u0300-\\u036f',reComboHalfMarksRange='\\ufe20-\\ufe2f',rsComboSymbolsRange='\\u20d0-\\u20ff',rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsVarRange='\\ufe0e\\ufe0f';/** Used to compose unicode capture groups. */var rsZWJ='\\u200d';/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */var reHasUnicode=RegExp('['+rsZWJ+rsAstralRange+rsComboRange+rsVarRange+']');/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */function hasUnicode(string){return reHasUnicode.test(string);}module.exports=hasUnicode;/***/},/* 292 *//***/function(module,exports){/** Used to compose unicode character classes. */var rsAstralRange='\\ud800-\\udfff',rsComboMarksRange='\\u0300-\\u036f',reComboHalfMarksRange='\\ufe20-\\ufe2f',rsComboSymbolsRange='\\u20d0-\\u20ff',rsComboRange=rsComboMarksRange+reComboHalfMarksRange+rsComboSymbolsRange,rsVarRange='\\ufe0e\\ufe0f';/** Used to compose unicode capture groups. */var rsAstral='['+rsAstralRange+']',rsCombo='['+rsComboRange+']',rsFitz='\\ud83c[\\udffb-\\udfff]',rsModifier='(?:'+rsCombo+'|'+rsFitz+')',rsNonAstral='[^'+rsAstralRange+']',rsRegional='(?:\\ud83c[\\udde6-\\uddff]){2}',rsSurrPair='[\\ud800-\\udbff][\\udc00-\\udfff]',rsZWJ='\\u200d';/** Used to compose unicode regexes. */var reOptMod=rsModifier+'?',rsOptVar='['+rsVarRange+']?',rsOptJoin='(?:'+rsZWJ+'(?:'+[rsNonAstral,rsRegional,rsSurrPair].join('|')+')'+rsOptVar+reOptMod+')*',rsSeq=rsOptVar+reOptMod+rsOptJoin,rsSymbol='(?:'+[rsNonAstral+rsCombo+'?',rsCombo,rsRegional,rsSurrPair,rsAstral].join('|')+')';/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */var reUnicode=RegExp(rsFitz+'(?='+rsFitz+')|'+rsSymbol+rsSeq,'g');/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */function unicodeSize(string){var result=reUnicode.lastIndex=0;while(reUnicode.test(string)){++result;}return result;}module.exports=unicodeSize;/***/},/* 293 *//***/function(module,exports,__webpack_require__){var basePick=__webpack_require__(294),flatRest=__webpack_require__(297);/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */var pick=flatRest(function(object,paths){return object==null?{}:basePick(object,paths);});module.exports=pick;/***/},/* 294 *//***/function(module,exports,__webpack_require__){var basePickBy=__webpack_require__(295),hasIn=__webpack_require__(79);/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */function basePick(object,paths){return basePickBy(object,paths,function(value,path){return hasIn(object,path);});}module.exports=basePick;/***/},/* 295 *//***/function(module,exports,__webpack_require__){var baseGet=__webpack_require__(38),baseSet=__webpack_require__(296),castPath=__webpack_require__(25);/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */function basePickBy(object,paths,predicate){var index=-1,length=paths.length,result={};while(++index<length){var path=paths[index],value=baseGet(object,path);if(predicate(value,path)){baseSet(result,castPath(path,object),value);}}return result;}module.exports=basePickBy;/***/},/* 296 *//***/function(module,exports,__webpack_require__){var assignValue=__webpack_require__(55),castPath=__webpack_require__(25),isIndex=__webpack_require__(21),isObject=__webpack_require__(2),toKey=__webpack_require__(17);/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */function baseSet(object,path,value,customizer){if(!isObject(object)){return object;}path=castPath(path,object);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=toKey(path[index]),newValue=value;if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined;if(newValue===undefined){newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{};}}assignValue(nested,key,newValue);nested=nested[key];}return object;}module.exports=baseSet;/***/},/* 297 *//***/function(module,exports,__webpack_require__){var flatten=__webpack_require__(298),overRest=__webpack_require__(90),setToString=__webpack_require__(91);/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */function flatRest(func){return setToString(overRest(func,undefined,flatten),func+'');}module.exports=flatRest;/***/},/* 298 *//***/function(module,exports,__webpack_require__){var baseFlatten=__webpack_require__(98);/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */function flatten(array){var length=array==null?0:array.length;return length?baseFlatten(array,1):[];}module.exports=flatten;/***/},/* 299 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-xs-12"},[_c('div',{staticClass:"button-toolbar",attrs:{"id":_vm.elId+'-language-selector'}},[_c('div',{staticClass:"btn-group"},[_vm._l(_vm.getInChunks[0],function(languageTerm,language){return _c('button',{key:language+'-button',class:'btn btn-'+(language==_vm.currentLanguage?'primary active':'default'),on:{"click":function click($event){$event.preventDefault();_vm.setCurrentLanguage(language);}}},[_vm._v("\n                "+_vm._s(languageTerm)+"\n            ")]);}),_vm._v(" "),_vm.getInChunks.length>1?_c('button',{staticClass:"btn btn-default dropdown-toggle",attrs:{"data-toggle":"dropdown"}},[_vm._v("\n                "+_vm._s(_vm._f("translate")("More Languages"))+"\n                "),_c('span',{staticClass:"caret"})]):_vm._e(),_vm._v(" "),_c('ul',{staticClass:"dropdown-menu"},_vm._l(_vm.getInChunks[1],function(languageTerm,language){return _c('li',{key:language+'-dropdown',on:{"click":function click($event){$event.preventDefault();_vm.setCurrentLanguage(language);}}},[_c('a',{attrs:{"href":"#"}},[_vm._v(_vm._s(languageTerm))])]);}))],2)]),_vm._v(" "),_c('hr')]);},staticRenderFns:[]/***/};},/* 300 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony default export */__webpack_exports__["a"]={data:function data(){return{event:{type:Object,default:null}};},watch:{event:function event(newEvent,oldEvent){if(newEvent!==null){if(this.$options.name==newEvent.target&&typeof this[newEvent.method]=='function'){try{this[newEvent.method](newEvent.content);this.$emit('eventSet');}catch(e){this.$log.error('Event handling errored',e);}return;}this.$log.log('Event skipped to next child',newEvent,this.name);}}},methods:{eventSet:function eventSet(){this.$emit('eventSet');}}};/***/},/* 301 *//***/function(module,exports){module.exports={render:function render(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-center scoped-new-questioneditor"},[!_vm.isCreateQuestion?_c('button',{staticClass:"pull-right clear btn ",class:_vm.editQuestion?'btn-primary':'btn-default',on:{"click":function click($event){$event.preventDefault();$event.stopPropagation();_vm.triggerEditQuestion($event);}}},[_vm._v("\n        "+_vm._s(_vm.editQuestion?'Question overview':'Question editor')+"\n    ")]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"pagetitle h3 scoped-unset-pointer-events"},[_vm.isCreateQuestion?[_vm._v("\n                "+_vm._s(_vm._f("translate")('Create new Question'))+"\n        ")]:[_vm._v("\n                "+_vm._s(_vm._f("translate")('Question'))+": "+_vm._s(_vm.$store.state.currentQuestion.title)+"  "),_c('small',[_vm._v("(ID: "+_vm._s(_vm.$store.state.currentQuestion.qid)+")")])]],2),_vm._v(" "),_vm.$store.getters.fullyLoaded?[_c('div',{staticClass:"row"},[_c('div',{staticClass:"form-group col-sm-6"},[_c('label',{attrs:{"for":"questionCode"}},[_vm._v(_vm._s(_vm._f("translate")('Code')))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:_vm.currentQuestionCode,expression:"currentQuestionCode"}],staticClass:"form-control",attrs:{"type":"text","id":"questionCode","readonly":!(_vm.editQuestion||_vm.isCreateQuestion)},domProps:{"value":_vm.currentQuestionCode},on:{"input":function input($event){if($event.target.composing){return;}_vm.currentQuestionCode=$event.target.value;}}})]),_vm._v(" "),_c('div',{staticClass:"form-group col-sm-6 contains-question-selector"},[_c('label',{attrs:{"for":"questionCode"}},[_vm._v(_vm._s(_vm._f("translate")('Question type')))]),_vm._v(" "),_vm.editQuestion||_vm.isCreateQuestion?_c('div',{domProps:{"innerHTML":_vm._s(_vm.questionEditButton)}}):_c('div',{staticClass:"scoped-small-border row"},[_c('div',{staticClass:"col-sm-4"},[_vm._v(_vm._s(_vm._f("translate")('Question group'))+":")]),_vm._v(" "),_c('div',{staticClass:"col-sm-8"},[_vm._v(_vm._s(_vm.questionGroupWithId))])]),_vm._v(" "),_c('input',{attrs:{"type":"hidden","id":"question_type","name":"type"},domProps:{"value":_vm.$store.state.currentQuestion.type},on:{"change":_vm.questionTypeChangeTriggered}})])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('languageselector',{attrs:{"elId":'question-language-changer',"aLanguages":_vm.$store.state.languages,"parentCurrentLanguage":_vm.$store.state.activeLanguage},on:{"change":_vm.selectLanguage}})],1),_vm._v(" "),_c('div',{staticClass:"row"},[_vm.editQuestion||_vm.isCreateQuestion?_c('maineditor',{attrs:{"event":_vm.event},on:{"triggerEvent":_vm.triggerEvent,"eventSet":_vm.eventSet}}):_c('questionoverview',{attrs:{"event":_vm.event},on:{"triggerEvent":_vm.triggerEvent,"eventSet":_vm.eventSet}}),_vm._v(" "),_c('generalsettings',{attrs:{"event":_vm.event,"readonly":!(_vm.editQuestion||_vm.isCreateQuestion)},on:{"triggerEvent":_vm.triggerEvent,"eventSet":_vm.eventSet}}),_vm._v(" "),_c('advancedsettings',{attrs:{"event":_vm.event,"readonly":!(_vm.editQuestion||_vm.isCreateQuestion)},on:{"triggerEvent":_vm.triggerEvent,"eventSet":_vm.eventSet}})],1)]:_vm._e(),_vm._v(" "),_c('modals-container',{on:{"modalEvent":_vm.setModalEvent}})],2);},staticRenderFns:[]/***/};},/* 302 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_vue__=__webpack_require__(41);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_vuex__=__webpack_require__(303);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_vuex_persist__=__webpack_require__(304);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_vuex_persist___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuex_persist__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_vue_localstorage__=__webpack_require__(306);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_vue_localstorage___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_localstorage__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4__mutations__=__webpack_require__(307);/* harmony import */var __WEBPACK_IMPORTED_MODULE_5__actions__=__webpack_require__(312);/* harmony import */var __WEBPACK_IMPORTED_MODULE_6__getters__=__webpack_require__(330);/* harmony import */var __WEBPACK_IMPORTED_MODULE_7__state__=__webpack_require__(331);__WEBPACK_IMPORTED_MODULE_0_vue__["a"/* default */].use(__WEBPACK_IMPORTED_MODULE_3_vue_localstorage___default.a);__WEBPACK_IMPORTED_MODULE_0_vue__["a"/* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a"/* default */]);/* harmony default export */__webpack_exports__["a"]=function(questionId){var vuexLocal=new __WEBPACK_IMPORTED_MODULE_2_vuex_persist___default.a({key:'lsquestionedit_'+questionId,storage:window.localStorage});return new __WEBPACK_IMPORTED_MODULE_1_vuex__["a"/* default */].Store({state:__WEBPACK_IMPORTED_MODULE_7__state__["a"/* default */],plugins:[vuexLocal.plugin],mutations:__WEBPACK_IMPORTED_MODULE_4__mutations__["a"/* default */],actions:__WEBPACK_IMPORTED_MODULE_5__actions__["a"/* default */],getters:__WEBPACK_IMPORTED_MODULE_6__getters__["a"/* default */]});};/***/},/* 303 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* unused harmony export Store *//* unused harmony export install *//* unused harmony export mapState *//* unused harmony export mapMutations *//* unused harmony export mapGetters *//* unused harmony export mapActions *//* unused harmony export createNamespacedHelpers *//**
 * vuex v2.5.0
 * (c) 2017 Evan You
 * @license MIT
 */var applyMixin=function applyMixin(Vue){var version=Number(Vue.version.split('.')[0]);if(version>=2){Vue.mixin({beforeCreate:vuexInit});}else{// override init and inject vuex init procedure
// for 1.x backwards compatibility.
var _init=Vue.prototype._init;Vue.prototype._init=function(options){if(options===void 0)options={};options.init=options.init?[vuexInit].concat(options.init):vuexInit;_init.call(this,options);};}/**
   * Vuex init hook, injected into each instances init hooks list.
   */function vuexInit(){var options=this.$options;// store injection
if(options.store){this.$store=typeof options.store==='function'?options.store():options.store;}else if(options.parent&&options.parent.$store){this.$store=options.parent.$store;}}};var devtoolHook=typeof window!=='undefined'&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function devtoolPlugin(store){if(!devtoolHook){return;}store._devtoolHook=devtoolHook;devtoolHook.emit('vuex:init',store);devtoolHook.on('vuex:travel-to-state',function(targetState){store.replaceState(targetState);});store.subscribe(function(mutation,state){devtoolHook.emit('vuex:mutation',mutation,state);});}/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 *//**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 *//**
 * forEach for object
 */function forEachValue(obj,fn){Object.keys(obj).forEach(function(key){return fn(obj[key],key);});}function isObject(obj){return obj!==null&&(typeof obj==='undefined'?'undefined':_typeof(obj))==='object';}function isPromise(val){return val&&typeof val.then==='function';}function assert(condition,msg){if(!condition){throw new Error("[vuex] "+msg);}}var Module=function Module(rawModule,runtime){this.runtime=runtime;this._children=Object.create(null);this._rawModule=rawModule;var rawState=rawModule.state;this.state=(typeof rawState==='function'?rawState():rawState)||{};};var prototypeAccessors$1={namespaced:{configurable:true}};prototypeAccessors$1.namespaced.get=function(){return!!this._rawModule.namespaced;};Module.prototype.addChild=function addChild(key,module){this._children[key]=module;};Module.prototype.removeChild=function removeChild(key){delete this._children[key];};Module.prototype.getChild=function getChild(key){return this._children[key];};Module.prototype.update=function update(rawModule){this._rawModule.namespaced=rawModule.namespaced;if(rawModule.actions){this._rawModule.actions=rawModule.actions;}if(rawModule.mutations){this._rawModule.mutations=rawModule.mutations;}if(rawModule.getters){this._rawModule.getters=rawModule.getters;}};Module.prototype.forEachChild=function forEachChild(fn){forEachValue(this._children,fn);};Module.prototype.forEachGetter=function forEachGetter(fn){if(this._rawModule.getters){forEachValue(this._rawModule.getters,fn);}};Module.prototype.forEachAction=function forEachAction(fn){if(this._rawModule.actions){forEachValue(this._rawModule.actions,fn);}};Module.prototype.forEachMutation=function forEachMutation(fn){if(this._rawModule.mutations){forEachValue(this._rawModule.mutations,fn);}};Object.defineProperties(Module.prototype,prototypeAccessors$1);var ModuleCollection=function ModuleCollection(rawRootModule){// register root module (Vuex.Store options)
this.register([],rawRootModule,false);};ModuleCollection.prototype.get=function get(path){return path.reduce(function(module,key){return module.getChild(key);},this.root);};ModuleCollection.prototype.getNamespace=function getNamespace(path){var module=this.root;return path.reduce(function(namespace,key){module=module.getChild(key);return namespace+(module.namespaced?key+'/':'');},'');};ModuleCollection.prototype.update=function update$1(rawRootModule){update([],this.root,rawRootModule);};ModuleCollection.prototype.register=function register(path,rawModule,runtime){var this$1=this;if(runtime===void 0)runtime=true;if(false){assertRawModule(path,rawModule);}var newModule=new Module(rawModule,runtime);if(path.length===0){this.root=newModule;}else{var parent=this.get(path.slice(0,-1));parent.addChild(path[path.length-1],newModule);}// register nested modules
if(rawModule.modules){forEachValue(rawModule.modules,function(rawChildModule,key){this$1.register(path.concat(key),rawChildModule,runtime);});}};ModuleCollection.prototype.unregister=function unregister(path){var parent=this.get(path.slice(0,-1));var key=path[path.length-1];if(!parent.getChild(key).runtime){return;}parent.removeChild(key);};function update(path,targetModule,newModule){if(false){assertRawModule(path,newModule);}// update target module
targetModule.update(newModule);// update nested modules
if(newModule.modules){for(var key in newModule.modules){if(!targetModule.getChild(key)){if(false){console.warn("[vuex] trying to add a new module '"+key+"' on hot reloading, "+'manual reload is needed');}return;}update(path.concat(key),targetModule.getChild(key),newModule.modules[key]);}}}var functionAssert={assert:function assert(value){return typeof value==='function';},expected:'function'};var objectAssert={assert:function assert(value){return typeof value==='function'||(typeof value==='undefined'?'undefined':_typeof(value))==='object'&&typeof value.handler==='function';},expected:'function or object with "handler" function'};var assertTypes={getters:functionAssert,mutations:functionAssert,actions:objectAssert};function assertRawModule(path,rawModule){Object.keys(assertTypes).forEach(function(key){if(!rawModule[key]){return;}var assertOptions=assertTypes[key];forEachValue(rawModule[key],function(value,type){assert(assertOptions.assert(value),makeAssertionMessage(path,key,type,value,assertOptions.expected));});});}function makeAssertionMessage(path,key,type,value,expected){var buf=key+" should be "+expected+" but \""+key+"."+type+"\"";if(path.length>0){buf+=" in module \""+path.join('.')+"\"";}buf+=" is "+JSON.stringify(value)+".";return buf;}var Vue;// bind on install
var Store=function Store(options){var this$1=this;if(options===void 0)options={};// Auto install if it is not done yet and `window` has `Vue`.
// To allow users to avoid auto-installation in some cases,
// this code should be placed here. See #731
if(!Vue&&typeof window!=='undefined'&&window.Vue){install(window.Vue);}if(false){assert(Vue,"must call Vue.use(Vuex) before creating a store instance.");assert(typeof Promise!=='undefined',"vuex requires a Promise polyfill in this browser.");assert(this instanceof Store,"Store must be called with the new operator.");}var plugins=options.plugins;if(plugins===void 0)plugins=[];var strict=options.strict;if(strict===void 0)strict=false;var state=options.state;if(state===void 0)state={};if(typeof state==='function'){state=state()||{};}// store internal state
this._committing=false;this._actions=Object.create(null);this._actionSubscribers=[];this._mutations=Object.create(null);this._wrappedGetters=Object.create(null);this._modules=new ModuleCollection(options);this._modulesNamespaceMap=Object.create(null);this._subscribers=[];this._watcherVM=new Vue();// bind commit and dispatch to self
var store=this;var ref=this;var dispatch=ref.dispatch;var commit=ref.commit;this.dispatch=function boundDispatch(type,payload){return dispatch.call(store,type,payload);};this.commit=function boundCommit(type,payload,options){return commit.call(store,type,payload,options);};// strict mode
this.strict=strict;// init root module.
// this also recursively registers all sub-modules
// and collects all module getters inside this._wrappedGetters
installModule(this,state,[],this._modules.root);// initialize the store vm, which is responsible for the reactivity
// (also registers _wrappedGetters as computed properties)
resetStoreVM(this,state);// apply plugins
plugins.forEach(function(plugin){return plugin(this$1);});if(Vue.config.devtools){devtoolPlugin(this);}};var prototypeAccessors={state:{configurable:true}};prototypeAccessors.state.get=function(){return this._vm._data.$$state;};prototypeAccessors.state.set=function(v){if(false){assert(false,"Use store.replaceState() to explicit replace store state.");}};Store.prototype.commit=function commit(_type,_payload,_options){var this$1=this;// check object-style commit
var ref=unifyObjectStyle(_type,_payload,_options);var type=ref.type;var payload=ref.payload;var options=ref.options;var mutation={type:type,payload:payload};var entry=this._mutations[type];if(!entry){if(false){console.error("[vuex] unknown mutation type: "+type);}return;}this._withCommit(function(){entry.forEach(function commitIterator(handler){handler(payload);});});this._subscribers.forEach(function(sub){return sub(mutation,this$1.state);});if(false){console.warn("[vuex] mutation type: "+type+". Silent option has been removed. "+'Use the filter functionality in the vue-devtools');}};Store.prototype.dispatch=function dispatch(_type,_payload){var this$1=this;// check object-style dispatch
var ref=unifyObjectStyle(_type,_payload);var type=ref.type;var payload=ref.payload;var action={type:type,payload:payload};var entry=this._actions[type];if(!entry){if(false){console.error("[vuex] unknown action type: "+type);}return;}this._actionSubscribers.forEach(function(sub){return sub(action,this$1.state);});return entry.length>1?Promise.all(entry.map(function(handler){return handler(payload);})):entry[0](payload);};Store.prototype.subscribe=function subscribe(fn){return genericSubscribe(fn,this._subscribers);};Store.prototype.subscribeAction=function subscribeAction(fn){return genericSubscribe(fn,this._actionSubscribers);};Store.prototype.watch=function watch(getter,cb,options){var this$1=this;if(false){assert(typeof getter==='function',"store.watch only accepts a function.");}return this._watcherVM.$watch(function(){return getter(this$1.state,this$1.getters);},cb,options);};Store.prototype.replaceState=function replaceState(state){var this$1=this;this._withCommit(function(){this$1._vm._data.$$state=state;});};Store.prototype.registerModule=function registerModule(path,rawModule,options){if(options===void 0)options={};if(typeof path==='string'){path=[path];}if(false){assert(Array.isArray(path),"module path must be a string or an Array.");assert(path.length>0,'cannot register the root module by using registerModule.');}this._modules.register(path,rawModule);installModule(this,this.state,path,this._modules.get(path),options.preserveState);// reset store to update getters...
resetStoreVM(this,this.state);};Store.prototype.unregisterModule=function unregisterModule(path){var this$1=this;if(typeof path==='string'){path=[path];}if(false){assert(Array.isArray(path),"module path must be a string or an Array.");}this._modules.unregister(path);this._withCommit(function(){var parentState=getNestedState(this$1.state,path.slice(0,-1));Vue.delete(parentState,path[path.length-1]);});resetStore(this);};Store.prototype.hotUpdate=function hotUpdate(newOptions){this._modules.update(newOptions);resetStore(this,true);};Store.prototype._withCommit=function _withCommit(fn){var committing=this._committing;this._committing=true;fn();this._committing=committing;};Object.defineProperties(Store.prototype,prototypeAccessors);function genericSubscribe(fn,subs){if(subs.indexOf(fn)<0){subs.push(fn);}return function(){var i=subs.indexOf(fn);if(i>-1){subs.splice(i,1);}};}function resetStore(store,hot){store._actions=Object.create(null);store._mutations=Object.create(null);store._wrappedGetters=Object.create(null);store._modulesNamespaceMap=Object.create(null);var state=store.state;// init all modules
installModule(store,state,[],store._modules.root,true);// reset vm
resetStoreVM(store,state,hot);}function resetStoreVM(store,state,hot){var oldVm=store._vm;// bind store public getters
store.getters={};var wrappedGetters=store._wrappedGetters;var computed={};forEachValue(wrappedGetters,function(fn,key){// use computed to leverage its lazy-caching mechanism
computed[key]=function(){return fn(store);};Object.defineProperty(store.getters,key,{get:function get(){return store._vm[key];},enumerable:true// for local getters
});});// use a Vue instance to store the state tree
// suppress warnings just in case the user has added
// some funky global mixins
var silent=Vue.config.silent;Vue.config.silent=true;store._vm=new Vue({data:{$$state:state},computed:computed});Vue.config.silent=silent;// enable strict mode for new vm
if(store.strict){enableStrictMode(store);}if(oldVm){if(hot){// dispatch changes in all subscribed watchers
// to force getter re-evaluation for hot reloading.
store._withCommit(function(){oldVm._data.$$state=null;});}Vue.nextTick(function(){return oldVm.$destroy();});}}function installModule(store,rootState,path,module,hot){var isRoot=!path.length;var namespace=store._modules.getNamespace(path);// register in namespace map
if(module.namespaced){store._modulesNamespaceMap[namespace]=module;}// set state
if(!isRoot&&!hot){var parentState=getNestedState(rootState,path.slice(0,-1));var moduleName=path[path.length-1];store._withCommit(function(){Vue.set(parentState,moduleName,module.state);});}var local=module.context=makeLocalContext(store,namespace,path);module.forEachMutation(function(mutation,key){var namespacedType=namespace+key;registerMutation(store,namespacedType,mutation,local);});module.forEachAction(function(action,key){var type=action.root?key:namespace+key;var handler=action.handler||action;registerAction(store,type,handler,local);});module.forEachGetter(function(getter,key){var namespacedType=namespace+key;registerGetter(store,namespacedType,getter,local);});module.forEachChild(function(child,key){installModule(store,rootState,path.concat(key),child,hot);});}/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */function makeLocalContext(store,namespace,path){var noNamespace=namespace==='';var local={dispatch:noNamespace?store.dispatch:function(_type,_payload,_options){var args=unifyObjectStyle(_type,_payload,_options);var payload=args.payload;var options=args.options;var type=args.type;if(!options||!options.root){type=namespace+type;if(false){console.error("[vuex] unknown local action type: "+args.type+", global type: "+type);return;}}return store.dispatch(type,payload);},commit:noNamespace?store.commit:function(_type,_payload,_options){var args=unifyObjectStyle(_type,_payload,_options);var payload=args.payload;var options=args.options;var type=args.type;if(!options||!options.root){type=namespace+type;if(false){console.error("[vuex] unknown local mutation type: "+args.type+", global type: "+type);return;}}store.commit(type,payload,options);}};// getters and state object must be gotten lazily
// because they will be changed by vm update
Object.defineProperties(local,{getters:{get:noNamespace?function(){return store.getters;}:function(){return makeLocalGetters(store,namespace);}},state:{get:function get(){return getNestedState(store.state,path);}}});return local;}function makeLocalGetters(store,namespace){var gettersProxy={};var splitPos=namespace.length;Object.keys(store.getters).forEach(function(type){// skip if the target getter is not match this namespace
if(type.slice(0,splitPos)!==namespace){return;}// extract local getter type
var localType=type.slice(splitPos);// Add a port to the getters proxy.
// Define as getter property because
// we do not want to evaluate the getters in this time.
Object.defineProperty(gettersProxy,localType,{get:function get(){return store.getters[type];},enumerable:true});});return gettersProxy;}function registerMutation(store,type,handler,local){var entry=store._mutations[type]||(store._mutations[type]=[]);entry.push(function wrappedMutationHandler(payload){handler.call(store,local.state,payload);});}function registerAction(store,type,handler,local){var entry=store._actions[type]||(store._actions[type]=[]);entry.push(function wrappedActionHandler(payload,cb){var res=handler.call(store,{dispatch:local.dispatch,commit:local.commit,getters:local.getters,state:local.state,rootGetters:store.getters,rootState:store.state},payload,cb);if(!isPromise(res)){res=Promise.resolve(res);}if(store._devtoolHook){return res.catch(function(err){store._devtoolHook.emit('vuex:error',err);throw err;});}else{return res;}});}function registerGetter(store,type,rawGetter,local){if(store._wrappedGetters[type]){if(false){console.error("[vuex] duplicate getter key: "+type);}return;}store._wrappedGetters[type]=function wrappedGetter(store){return rawGetter(local.state,// local state
local.getters,// local getters
store.state,// root state
store.getters// root getters
);};}function enableStrictMode(store){store._vm.$watch(function(){return this._data.$$state;},function(){if(false){assert(store._committing,"Do not mutate vuex store state outside mutation handlers.");}},{deep:true,sync:true});}function getNestedState(state,path){return path.length?path.reduce(function(state,key){return state[key];},state):state;}function unifyObjectStyle(type,payload,options){if(isObject(type)&&type.type){options=payload;payload=type;type=type.type;}if(false){assert(typeof type==='string',"Expects string as the type, but found "+(typeof type==='undefined'?'undefined':_typeof(type))+".");}return{type:type,payload:payload,options:options};}function install(_Vue){if(Vue&&_Vue===Vue){if(false){console.error('[vuex] already installed. Vue.use(Vuex) should be called only once.');}return;}Vue=_Vue;applyMixin(Vue);}var mapState=normalizeNamespace(function(namespace,states){var res={};normalizeMap(states).forEach(function(ref){var key=ref.key;var val=ref.val;res[key]=function mappedState(){var state=this.$store.state;var getters=this.$store.getters;if(namespace){var module=getModuleByNamespace(this.$store,'mapState',namespace);if(!module){return;}state=module.context.state;getters=module.context.getters;}return typeof val==='function'?val.call(this,state,getters):state[val];};// mark vuex getter for devtools
res[key].vuex=true;});return res;});var mapMutations=normalizeNamespace(function(namespace,mutations){var res={};normalizeMap(mutations).forEach(function(ref){var key=ref.key;var val=ref.val;res[key]=function mappedMutation(){var args=[],len=arguments.length;while(len--){args[len]=arguments[len];}var commit=this.$store.commit;if(namespace){var module=getModuleByNamespace(this.$store,'mapMutations',namespace);if(!module){return;}commit=module.context.commit;}return typeof val==='function'?val.apply(this,[commit].concat(args)):commit.apply(this.$store,[val].concat(args));};});return res;});var mapGetters=normalizeNamespace(function(namespace,getters){var res={};normalizeMap(getters).forEach(function(ref){var key=ref.key;var val=ref.val;val=namespace+val;res[key]=function mappedGetter(){if(namespace&&!getModuleByNamespace(this.$store,'mapGetters',namespace)){return;}if(false){console.error("[vuex] unknown getter: "+val);return;}return this.$store.getters[val];};// mark vuex getter for devtools
res[key].vuex=true;});return res;});var mapActions=normalizeNamespace(function(namespace,actions){var res={};normalizeMap(actions).forEach(function(ref){var key=ref.key;var val=ref.val;res[key]=function mappedAction(){var args=[],len=arguments.length;while(len--){args[len]=arguments[len];}var dispatch=this.$store.dispatch;if(namespace){var module=getModuleByNamespace(this.$store,'mapActions',namespace);if(!module){return;}dispatch=module.context.dispatch;}return typeof val==='function'?val.apply(this,[dispatch].concat(args)):dispatch.apply(this.$store,[val].concat(args));};});return res;});var createNamespacedHelpers=function createNamespacedHelpers(namespace){return{mapState:mapState.bind(null,namespace),mapGetters:mapGetters.bind(null,namespace),mapMutations:mapMutations.bind(null,namespace),mapActions:mapActions.bind(null,namespace)};};function normalizeMap(map){return Array.isArray(map)?map.map(function(key){return{key:key,val:key};}):Object.keys(map).map(function(key){return{key:key,val:map[key]};});}function normalizeNamespace(fn){return function(namespace,map){if(typeof namespace!=='string'){map=namespace;namespace='';}else if(namespace.charAt(namespace.length-1)!=='/'){namespace+='/';}return fn(namespace,map);};}function getModuleByNamespace(store,helper,namespace){var module=store._modulesNamespaceMap[namespace];if(false){console.error("[vuex] module namespace not found in "+helper+"(): "+namespace);}return module;}var index_esm={Store:Store,install:install,version:'2.5.0',mapState:mapState,mapMutations:mapMutations,mapGetters:mapGetters,mapActions:mapActions,createNamespacedHelpers:createNamespacedHelpers};/* harmony default export */__webpack_exports__["a"]=index_esm;/***/},/* 304 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,'__esModule',{value:true});function _interopDefault(ex){return ex&&(typeof ex==='undefined'?'undefined':_typeof(ex))==='object'&&'default'in ex?ex['default']:ex;}var merge=_interopDefault(__webpack_require__(305));/**
 * Created by championswimmer on 22/07/17.
 */var MockStorage=/** @class */function(){function MockStorage(){}Object.defineProperty(MockStorage.prototype,"length",{get:function get(){return Object.keys(this).length;},enumerable:true,configurable:true});MockStorage.prototype.key=function(index){return Object.keys(this)[index];};MockStorage.prototype.setItem=function(key,data){this[key]=data.toString();};MockStorage.prototype.getItem=function(key){return this[key];};MockStorage.prototype.removeItem=function(key){delete this[key];};MockStorage.prototype.clear=function(){for(var _i=0,_a=Object.keys(this);_i<_a.length;_i++){var key=_a[_i];delete this[key];}};return MockStorage;}();// tslint:disable: variable-name
var SimplePromiseQueue=/** @class */function(){function SimplePromiseQueue(){this._queue=[];this._flushing=false;}SimplePromiseQueue.prototype.enqueue=function(promise){this._queue.push(promise);if(!this._flushing){return this.flushQueue();}return Promise.resolve();};SimplePromiseQueue.prototype.flushQueue=function(){var _this=this;this._flushing=true;var chain=function chain(){var nextTask=_this._queue.shift();if(nextTask){return nextTask.then(chain);}else{_this._flushing=false;}};return Promise.resolve(chain());};return SimplePromiseQueue;}();/**
 * Created by championswimmer on 18/07/17.
 *//**
 * A class that implements the vuex persistence.
 */var VuexPersistence=/** @class */function(){/**
     * Create a {@link VuexPersistence} object.
     * Use the <code>plugin</code> function of this class as a
     * Vuex plugin.
     * @param {PersistOptions} options
     */function VuexPersistence(options){var _this=this;// tslint:disable-next-line:variable-name
this._mutex=new SimplePromiseQueue();/**
         * Creates a subscriber on the store. automatically is used
         * when this is used a vuex plugin. Not for manual usage.
         * @param store
         */this.subscriber=function(store){return function(handler){return store.subscribe(handler);};};this.key=options.key!=null?options.key:'vuex';this.subscribed=false;this.storage=options.storage!=null?options.storage:new MockStorage();/**
         * How this works is -
         *  1. If there is options.reducer function, we use that, if not;
         *  2. We check options.modules;
         *    1. If there is no options.modules array, we use entire state in reducer
         *    2. Otherwise, we create a reducer that merges all those state modules that are
         *        defined in the options.modules[] array
         * @type {((state: S) => {}) | ((state: S) => S) | ((state: any) => {})}
         */this.reducer=options.reducer!=null?options.reducer:options.modules==null?function(state){return state;}:function(state){return options.modules.reduce(function(a,i){return merge(a,(_a={},_a[i]=state[i],_a));var _a;},{});};this.filter=options.filter!=null?options.filter:function(mutation){return true;};this.strictMode=options.strictMode||false;this.RESTORE_MUTATION=function RESTORE_MUTATION(state,savedState){state=merge(state,savedState);};this.asyncStorage=options.asyncStorage||false;var storageConfig=this.storage._config;this.asyncStorage=(storageConfig&&storageConfig.name)==='localforage';if(this.asyncStorage){/**
             * Async {@link #VuexPersistence.restoreState} implementation
             * @type {((key: string, storage?: Storage) =>
             *      (Promise<S> | S)) | ((key: string, storage: AsyncStorage) => Promise<any>)}
             */this.restoreState=options.restoreState!=null?options.restoreState:function(key,storage){return storage.getItem(key).then(function(value){return typeof value==='string'// If string, parse, or else, just return
?JSON.parse(value||'{}'):value||{};});};/**
             * Async {@link #VuexPersistence.saveState} implementation
             * @type {((key: string, state: {}, storage?: Storage) =>
             *    (Promise<void> | void)) | ((key: string, state: {}, storage?: Storage) => Promise<void>)}
             */this.saveState=options.saveState!=null?options.saveState:function(key,state,storage){return storage.setItem(key,// Second argument is state _object_ if localforage, stringified otherwise
(storage&&storage._config&&storage._config.name)==='localforage'?merge({},state):JSON.stringify(state));};/**
             * Async version of plugin
             * @param {Store<S>} store
             */this.plugin=function(store){_this.restoreState(_this.key,_this.storage).then(function(savedState){/**
                     * If in strict mode, do only via mutation
                     */if(_this.strictMode){store.commit('RESTORE_MUTATION',savedState);}else{store.replaceState(merge(store.state,savedState));}_this.subscriber(store)(function(mutation,state){if(_this.filter(mutation)){_this._mutex.enqueue(_this.saveState(_this.key,_this.reducer(state),_this.storage));}});_this.subscribed=true;});};}else{/**
             * Sync {@link #VuexPersistence.restoreState} implementation
             * @type {((key: string, storage?: Storage) =>
             *    (Promise<S> | S)) | ((key: string, storage: Storage) => (any | string | {}))}
             */this.restoreState=options.restoreState!=null?options.restoreState:function(key,storage){var value=storage.getItem(key);if(typeof value==='string'){return JSON.parse(value||'{}');}else{return value||{};}};/**
             * Sync {@link #VuexPersistence.saveState} implementation
             * @type {((key: string, state: {}, storage?: Storage) =>
             *     (Promise<void> | void)) | ((key: string, state: {}, storage?: Storage) => Promise<void>)}
             */this.saveState=options.saveState!=null?options.saveState:function(key,state,storage){return storage.setItem(key,// Second argument is state _object_ if localforage, stringified otherwise
JSON.stringify(state));};/**
             * Sync version of plugin
             * @param {Store<S>} store
             */this.plugin=function(store){var savedState=_this.restoreState(_this.key,_this.storage);if(_this.strictMode){store.commit('RESTORE_MUTATION',savedState);}else{store.replaceState(merge(store.state,savedState));}_this.subscriber(store)(function(mutation,state){if(_this.filter(mutation)){_this.saveState(_this.key,_this.reducer(state),_this.storage);}});_this.subscribed=true;};}}return VuexPersistence;}();exports.VuexPersistence=VuexPersistence;exports.MockStorage=MockStorage;exports['default']=VuexPersistence;//# sourceMappingURL=index.js.map
/***/},/* 305 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(global,module){/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 *//** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',promiseTag='[object Promise]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==='undefined'?'undefined':_typeof(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=(typeof exports==='undefined'?'undefined':_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&(typeof module==='undefined'?'undefined':_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{return freeProcess&&freeProcess.binding('util');}catch(e){}}();/* Node.js helper references. */var nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */function addMapEntry(map,pair){// Don't return `map.set` because it's not chainable in IE 11.
map.set(pair[0],pair[1]);return map;}/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */function addSetEntry(set,value){// Don't return `set.add` because it's not chainable in IE 11.
set.add(value);return set;}/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */function arrayEach(array,iteratee){var index=-1,length=array?array.length:0;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array?array.length:0;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */function baseUnary(func){return function(value){return func(value);};}/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */function getValue(object,key){return object==null?undefined:object[key];}/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */function isHostObject(value){// Many host objects are `Object` objects that can coerce to strings
// despite having improperly defined `toString` methods.
var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}return result;}/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */function overArg(func,transform){return function(arg){return func(transform(arg));};}/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */var objectToString=objectProto.toString;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?root.Buffer:undefined,_Symbol7=root.Symbol,Uint8Array=root.Uint8Array,getPrototype=overArg(Object.getPrototypeOf,Object),objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max;/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView'),Map=getNative(root,'Map'),Promise=getNative(root,'Promise'),Set=getNative(root,'Set'),WeakMap=getNative(root,'WeakMap'),nativeCreate=getNative(Object,'create');/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol7?_Symbol7.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Hash(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};}/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function hashDelete(key){return this.has(key)&&delete this.__data__[key];}/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */function hashSet(key,value){var data=this.__data__;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function ListCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */function listCacheClear(){this.__data__=[];}/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}return true;}/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function MapCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */function mapCacheClear(){this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function mapCacheDelete(key){return getMapData(this,key)['delete'](key);}/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */function mapCacheSet(key,value){getMapData(this,key).set(key,value);return this;}// Add methods to `MapCache`.
MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function Stack(entries){this.__data__=new ListCache(entries);}/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */function stackClear(){this.__data__=new ListCache();}/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */function stackDelete(key){return this.__data__['delete'](key);}/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */function stackGet(key){return this.__data__.get(key);}/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */function stackHas(key){return this.__data__.has(key);}/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */function stackSet(key,value){var cache=this.__data__;if(cache instanceof ListCache){var pairs=cache.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);return this;}cache=this.__data__=new MapCache(pairs);}cache.set(key,value);return this;}// Add methods to `Stack`.
Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
// Safari 9 makes `arguments.length` enumerable in strict mode.
var result=isArray(value)||isArguments(value)?baseTimes(value.length,String):[];var length=result.length,skipIndexes=!!length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(key=='length'||isIndex(key,length)))){result.push(key);}}return result;}/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignMergeValue(object,key,value){if(value!==undefined&&!eq(object[key],value)||typeof key=='number'&&value===undefined&&!(key in object)){object[key]=value;}}/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){object[key]=value;}}/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */function baseClone(value,isDeep,isFull,customizer,key,object,stack){var result;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){if(isHostObject(value)){return object?value:{};}result=initCloneObject(isFunc?{}:value);if(!isDeep){return copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,baseClone,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(!isArr){var props=isFull?getAllKeys(value):keys(value);}arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,isDeep,isFull,customizer,key,value,stack));});return result;}/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */function baseCreate(proto){return isObject(proto)?objectCreate(proto):{};}/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function baseGetTag(value){return objectToString.call(value);}/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)||isHostObject(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[objectToString.call(value)];}/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */function baseMerge(object,source,srcIndex,customizer,stack){if(object===source){return;}if(!(isArray(source)||isTypedArray(source))){var props=baseKeysIn(source);}arrayEach(props||source,function(srcValue,key){if(props){key=srcValue;srcValue=source[key];}if(isObject(srcValue)){stack||(stack=new Stack());baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);}else{var newValue=customizer?customizer(object[key],srcValue,key+'',object,source,stack):undefined;if(newValue===undefined){newValue=srcValue;}assignMergeValue(object,key,newValue);}});}/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=object[key],srcValue=source[key],stacked=stack.get(srcValue);if(stacked){assignMergeValue(object,key,stacked);return;}var newValue=customizer?customizer(objValue,srcValue,key+'',object,source,stack):undefined;var isCommon=newValue===undefined;if(isCommon){newValue=srcValue;if(isArray(srcValue)||isTypedArray(srcValue)){if(isArray(objValue)){newValue=objValue;}else if(isArrayLikeObject(objValue)){newValue=copyArray(objValue);}else{isCommon=false;newValue=baseClone(srcValue,true);}}else if(isPlainObject(srcValue)||isArguments(srcValue)){if(isArguments(objValue)){newValue=toPlainObject(objValue);}else if(!isObject(objValue)||srcIndex&&isFunction(objValue)){isCommon=false;newValue=baseClone(srcValue,true);}else{newValue=objValue;}}else{isCommon=false;}}if(isCommon){// Recursively merge objects and arrays (susceptible to call stack limits).
stack.set(srcValue,newValue);mergeFunc(newValue,srcValue,srcIndex,customizer,stack);stack['delete'](srcValue);}assignMergeValue(object,key,newValue);}/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */function baseRest(func,start){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=array;return apply(func,this,otherArgs);};}/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var result=new buffer.constructor(buffer.length);buffer.copy(result);return result;}/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),true):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor());}/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),true):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor());}/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */function copyObject(source,props,object,customizer){object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;assignValue(object,key,newValue===undefined?source[key]:newValue);}return object;}/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */var getSymbols=nativeGetSymbols?overArg(nativeGetSymbols,Object):stubArray;/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=objectToString.call(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):undefined;if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */function initCloneArray(array){var length=array.length,result=array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object);}}/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=typeof index==='undefined'?'undefined':_typeof(index);if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */function isKeyable(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */function eq(value,other){return value===other||value!==value&&other!==other;}/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */function isArguments(value){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */var isArray=Array.isArray;/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */var isBuffer=nativeIsBuffer||stubFalse;/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 8-9 which returns 'object' for typed array and other constructors.
var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function isObject(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return!!value&&(type=='object'||type=='function');}/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function isObjectLike(value){return!!value&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';}/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */function isPlainObject(value){if(!isObjectLike(value)||objectToString.call(value)!=objectTag||isHostObject(value)){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */function toPlainObject(value){return copyObject(value,keysIn(value));}/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */var merge=createAssigner(function(object,source,srcIndex){baseMerge(object,source,srcIndex);});/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */function stubArray(){return[];}/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */function stubFalse(){return false;}module.exports=merge;/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(27),__webpack_require__(29)(module));/***/},/* 306 *//***/function(module,exports,__webpack_require__){/* WEBPACK VAR INJECTION */(function(process){/**
 * vue-local-storage v0.5.0
 * (c) 2017 Alexander Avakov
 * @license MIT
 */(function(global,factory){true?module.exports=factory():typeof define==='function'&&define.amd?define(factory):global.VueLocalStorage=factory();})(this,function(){'use strict';var VueLocalStorage=function VueLocalStorage(){this._properties={};};/**
 * Get value from localStorage
 *
 * @param {String} lsKey
 * @param {*} defaultValue
 * @returns {*}
 */VueLocalStorage.prototype.get=function get(lsKey,defaultValue){var this$1=this;if(defaultValue===void 0)defaultValue=null;if(window.localStorage[lsKey]){var type=String;for(var key in this$1._properties){if(key===lsKey){type=this$1._properties[key].type;break;}}return this._process(type,window.localStorage[lsKey]);}return defaultValue!==null?defaultValue:null;};/**
 * Set localStorage value
 *
 * @param {String} lsKey
 * @param {*} value
 * @returns {*}
 */VueLocalStorage.prototype.set=function set(lsKey,value){var this$1=this;for(var key in this$1._properties){var type=this$1._properties[key].type;if(key===lsKey&&[Array,Object].includes(type)){window.localStorage.setItem(lsKey,JSON.stringify(value));return value;}}window.localStorage.setItem(lsKey,value);return value;};/**
 * Remove value from localStorage
 *
 * @param {String} lsKey
 */VueLocalStorage.prototype.remove=function remove(lsKey){return window.localStorage.removeItem(lsKey);};/**
 * Add new property to localStorage
 *
 * @param {String} key
 * @param {function} type
 * @param {*} defaultValue
 */VueLocalStorage.prototype.addProperty=function addProperty(key,type,defaultValue){if(defaultValue===void 0)defaultValue=undefined;type=type||String;this._properties[key]={type:type};if(!window.localStorage[key]&&defaultValue!==null){window.localStorage.setItem(key,[Array,Object].includes(type)?JSON.stringify(defaultValue):defaultValue);}};/**
 * Process the value before return it from localStorage
 *
 * @param {String} type
 * @param {*} value
 * @returns {*}
 * @private
 */VueLocalStorage.prototype._process=function _process(type,value){switch(type){case Boolean:return value==='true';case Number:return parseInt(value,10);case Array:try{var array=JSON.parse(value);return Array.isArray(array)?array:[];}catch(e){return[];}case Object:try{return JSON.parse(value);}catch(e){return{};}default:return value;}};var VueLocalStorage$1=new VueLocalStorage();var index={/**
   * Install vue-local-storage plugin
   *
   * @param {Vue} Vue
   * @param {Object} options
   */install:function install(Vue,options){if(options===void 0)options={};if(typeof process!=='undefined'&&(process.server||process.SERVER_BUILD||process.env&&process.env.VUE_ENV==='server')){return;}try{var test='__vue-localstorage-test__';window.localStorage.setItem(test,test);window.localStorage.removeItem(test);}catch(e){console.error('Local storage is not supported');}var name=options.name||'localStorage';var bind=options.bind;Vue.mixin({beforeCreate:function beforeCreate(){var this$1=this;if(this.$options[name]){Object.keys(this.$options[name]).forEach(function(key){var config=this$1.$options[name][key];var ref=[config.type,config.default];var type=ref[0];var defaultValue=ref[1];VueLocalStorage$1.addProperty(key,type,defaultValue);var existingProp=Object.getOwnPropertyDescriptor(VueLocalStorage$1,key);if(!existingProp){var prop={get:function get(){return Vue.localStorage.get(key,defaultValue);},set:function set(val){return Vue.localStorage.set(key,val);},configurable:true};Object.defineProperty(VueLocalStorage$1,key,prop);Vue.util.defineReactive(VueLocalStorage$1,key,defaultValue);}else if(!Vue.config.silent){console.log(key+": is already defined and will be reused");}if((bind||config.bind)&&config.bind!==false){this$1.$options.computed=this$1.$options.computed||{};if(!this$1.$options.computed[key]){this$1.$options.computed[key]={get:function get(){return Vue.localStorage[key];},set:function set(val){Vue.localStorage[key]=val;}};}}});}}});Vue[name]=VueLocalStorage$1;Vue.prototype["$"+name]=VueLocalStorage$1;}};return index;});/* WEBPACK VAR INJECTION */}).call(exports,__webpack_require__(60));/***/},/* 307 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_vue__=__webpack_require__(41);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty__=__webpack_require__(5);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_keys__=__webpack_require__(6);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_keys___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_keys__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_merge__=__webpack_require__(11);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3_lodash_merge___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_merge__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4_lodash_indexOf__=__webpack_require__(308);/* harmony import */var __WEBPACK_IMPORTED_MODULE_4_lodash_indexOf___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_indexOf__);/* harmony default export */__webpack_exports__["a"]={//mutables
setCurrentQuestion:function setCurrentQuestion(state,newValue){state.currentQuestion=newValue;},setCurrentQuestionGroupInfo:function setCurrentQuestionGroupInfo(state,newValue){state.currentQuestionGroupInfo=newValue;},setCurrentQuestionI10N:function setCurrentQuestionI10N(state,newValue){state.currentQuestionI10N=newValue;},setCurrentQuestionAttributes:function setCurrentQuestionAttributes(state,newValue){state.currentQuestionAttributes=newValue;},setCurrentQuestionGeneralSettings:function setCurrentQuestionGeneralSettings(state,newValue){state.currentQuestionGeneralSettings=newValue;},setCurrentQuestionAdvancedSettings:function setCurrentQuestionAdvancedSettings(state,newValue){state.currentQuestionAdvancedSettings=newValue;},setCurrentQuestionAdvancedSettingsCategory:function setCurrentQuestionAdvancedSettingsCategory(state,newValue){state.currentQuestionAdvancedSettingsCategory=newValue;},setCurrentQuestionSubquestions:function setCurrentQuestionSubquestions(state,newValue){state.currentQuestionSubquestions=newValue;},setCurrentQuestionAnswerOptions:function setCurrentQuestionAnswerOptions(state,newValue){state.currentQuestionAnswerOptions=newValue;},//Update currently set values
updateCurrentQuestion:function updateCurrentQuestion(state,valueObject){state.currentQuestion=__WEBPACK_IMPORTED_MODULE_3_lodash_merge___default()({},valueObject,state.currentQuestion);__WEBPACK_IMPORTED_MODULE_0_vue__["a"/* default */].set(state.currentQuestion,'typeInformation',valueObject.typeInformation);},updateCurrentQuestionGeneralSettings:function updateCurrentQuestionGeneralSettings(state,valueObject){state.currentQuestionGeneralSettings=__WEBPACK_IMPORTED_MODULE_3_lodash_merge___default()({},valueObject,state.currentQuestionGeneralSettings);},updateCurrentQuestionAdvancedSettings:function updateCurrentQuestionAdvancedSettings(state,valueObject){state.currentQuestionAdvancedSettings=__WEBPACK_IMPORTED_MODULE_3_lodash_merge___default()({},valueObject,state.currentQuestionAdvancedSettings);},updateCurrentQuestionSubquestions:function updateCurrentQuestionSubquestions(state,valueObject){state.currentQuestionSubquestions=__WEBPACK_IMPORTED_MODULE_3_lodash_merge___default()({},valueObject,state.currentQuestionSubquestions);},updateCurrentQuestionAnswerOptions:function updateCurrentQuestionAnswerOptions(state,valueObject){state.currentQuestionAnswerOptions=__WEBPACK_IMPORTED_MODULE_3_lodash_merge___default()({},valueObject,state.currentQuestionAnswerOptions);},//Immutables
unsetImmutableQuestionAttributes:function unsetImmutableQuestionAttributes(state,newValue){state.questionAttributesImmutable={};},setImmutableQuestionAttributes:function setImmutableQuestionAttributes(state,newValue){if(__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(state.questionAttributesImmutable)){state.questionAttributesImmutable=newValue;}},unsetQuestionImmutable:function unsetQuestionImmutable(state){state.questionImmutable={};},setQuestionImmutable:function setQuestionImmutable(state,newValue){if(__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(state.questionImmutable)){state.questionImmutable=newValue;}},unsetQuestionImmutableI10N:function unsetQuestionImmutableI10N(state){state.questionImmutableI10N={};},setQuestionImmutableI10N:function setQuestionImmutableI10N(state,newValue){if(__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(state.questionImmutableI10N)){state.questionImmutableI10N=newValue;}},unsetImmutableQuestionGeneralSettings:function unsetImmutableQuestionGeneralSettings(state,newValue){state.questionAttributesImmutable={};},setImmutableQuestionGeneralSettings:function setImmutableQuestionGeneralSettings(state,newValue){if(__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(state.questionAttributesImmutable)){state.questionAttributesImmutable=newValue;}},unsetImmutableQuestionAdvancedSettings:function unsetImmutableQuestionAdvancedSettings(state,newValue){state.questionGeneralSettingsImmutable={};},setImmutableQuestionAdvancedSettings:function setImmutableQuestionAdvancedSettings(state,newValue){if(__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(state.questionGeneralSettingsImmutable)){state.questionGeneralSettingsImmutable=newValue;}},unsetQuestionSubquestionsImmutable:function unsetQuestionSubquestionsImmutable(state,newValue){state.questionSubquestionsImmutable={};},setQuestionSubquestionsImmutable:function setQuestionSubquestionsImmutable(state,newValue){if(__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(state.questionSubquestionsImmutable)){state.questionSubquestionsImmutable=newValue;}},unsetQuestionAnswerOptionsImmutable:function unsetQuestionAnswerOptionsImmutable(state,newValue){state.questionAnswerOptionsImmutable={};},setQuestionAnswerOptionsImmutable:function setQuestionAnswerOptionsImmutable(state,newValue){if(__WEBPACK_IMPORTED_MODULE_1_lodash_isEmpty___default()(state.questionAnswerOptionsImmutable)){state.questionAnswerOptionsImmutable=newValue;}},//special and single settings
setQuestionGeneralSetting:function setQuestionGeneralSetting(state,payload){//const newCurrentQuestionGeneralSettings = state.currentQuestionGeneralSettings;
//newCurrentQuestionGeneralSettings[payload.settingName]['formElementValue'] = payload.newValue;
//state.currentQuestionGeneralSettings = newCurrentQuestionGeneralSettings;
__WEBPACK_IMPORTED_MODULE_0_vue__["a"/* default */].set(state.currentQuestionGeneralSettings[payload.settingName],'formElementValue',payload.newValue);},setQuestionAdvancedSetting:function setQuestionAdvancedSetting(state,payload){__WEBPACK_IMPORTED_MODULE_0_vue__["a"/* default */].set(state.currentQuestionAdvancedSettings[state.questionAdvancedSettingsCategory][payload.settingName],'formElementValue',payload.newValue);},updateCurrentQuestionI10NValue:function updateCurrentQuestionI10NValue(state,setObject){var newCurrentQuestionI10N=state.currentQuestionI10N;newCurrentQuestionI10N[state.activeLanguage][setObject.value]=setObject.newValue;state.currentQuestionI10N=newCurrentQuestionI10N;},updateCurrentQuestionTitle:function updateCurrentQuestionTitle(state,newValue){__WEBPACK_IMPORTED_MODULE_0_vue__["a"/* default */].set(state.currentQuestion,'title',newValue);},//view controllers
setQuestionAdvancedSettingsCategory:function setQuestionAdvancedSettingsCategory(state,newValue){state.questionAdvancedSettingsCategory=newValue;},setActiveLanguage:function setActiveLanguage(state,newValue){state.activeLanguage=newValue;},setLanguages:function setLanguages(state,newValue){state.languages=newValue;},nextLanguage:function nextLanguage(state){var keyList=__WEBPACK_IMPORTED_MODULE_2_lodash_keys___default()(state.languages);var currentIndex=__WEBPACK_IMPORTED_MODULE_4_lodash_indexOf___default()(keyList,state.activeLanguage);if(currentIndex<keyList.length){state.activeLanguage=keyList[currentIndex+1];}},previousLanguage:function previousLanguage(state){var keyList=__WEBPACK_IMPORTED_MODULE_2_lodash_keys___default()(state.languages);var currentIndex=__WEBPACK_IMPORTED_MODULE_4_lodash_indexOf___default()(keyList,state.activeLanguage);if(currentIndex>0){state.activeLanguage=keyList[currentIndex-1];}},setSurvey:function setSurvey(state,newValue){state.survey=newValue;},setQuestionTypeList:function setQuestionTypeList(state,newValue){state.questionTypes=newValue;},toggleDebugMode:function toggleDebugMode(state){state.debugMode=!state.debugMode;}};/***/},/* 308 *//***/function(module,exports,__webpack_require__){var baseIndexOf=__webpack_require__(309),toInteger=__webpack_require__(59);/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max;/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. If `fromIndex` is negative, it's used as the
 * offset from the end of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.indexOf([1, 2, 1, 2], 2);
 * // => 1
 *
 * // Search from the `fromIndex`.
 * _.indexOf([1, 2, 1, 2], 2, 2);
 * // => 3
 */function indexOf(array,value,fromIndex){var length=array==null?0:array.length;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseIndexOf(array,value,index);}module.exports=indexOf;/***/},/* 309 *//***/function(module,exports,__webpack_require__){var baseFindIndex=__webpack_require__(102),baseIsNaN=__webpack_require__(310),strictIndexOf=__webpack_require__(311);/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseIndexOf(array,value,fromIndex){return value===value?strictIndexOf(array,value,fromIndex):baseFindIndex(array,baseIsNaN,fromIndex);}module.exports=baseIndexOf;/***/},/* 310 *//***/function(module,exports){/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */function baseIsNaN(value){return value!==value;}module.exports=baseIsNaN;/***/},/* 311 *//***/function(module,exports){/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function strictIndexOf(array,value,fromIndex){var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return-1;}module.exports=strictIndexOf;/***/},/* 312 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__mixins_runAjax_js__=__webpack_require__(57);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep__=__webpack_require__(313);/* harmony import */var __WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_merge__=__webpack_require__(11);/* harmony import */var __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_merge__);/* harmony import */var __WEBPACK_IMPORTED_MODULE_3__mixins_logSystem_js__=__webpack_require__(105);/* harmony default export */__webpack_exports__["a"]={updateObjects:function updateObjects(context,newObjectBlock){context.commit('setCurrentQuestion',newObjectBlock.question);context.commit('unsetQuestionImmutable');context.commit('setQuestionImmutable',__WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default()(newObjectBlock.question));context.commit('setCurrentQuestionI10N',newObjectBlock.questionI10N);context.commit('unsetQuestionImmutableI10N');context.commit('setQuestionImmutableI10N',__WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default()(newObjectBlock.questionI10N));context.commit('setCurrentQuestionSubquestions',newObjectBlock.scaledSubquestions);context.commit('unsetQuestionSubquestionsImmutable');context.commit('setQuestionSubquestionsImmutable',__WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default()(newObjectBlock.scaledSubquestions));context.commit('setCurrentQuestionAnswerOptions',newObjectBlock.scaledAnswerOptions);context.commit('unsetQuestionAnswerOptionsImmutable');context.commit('setQuestionAnswerOptionsImmutable',__WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default()(newObjectBlock.scaledAnswerOptions));context.commit('setCurrentQuestionAttributes',newObjectBlock.questionAttributes);context.commit('unsetImmutableQuestionAttributes');context.commit('setImmutableQuestionAttributes',__WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default()(newObjectBlock.questionAttributes));context.commit('setCurrentQuestionGeneralSettings',newObjectBlock.generalSettings);context.commit('unsetImmutableQuestionGeneralSettings');context.commit('setImmutableQuestionGeneralSettings',__WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default()(newObjectBlock.generalSettings));context.commit('setCurrentQuestionAdvancedSettings',newObjectBlock.advancedSettings);context.commit('unsetImmutableQuestionAdvancedSettings');context.commit('setImmutableQuestionAdvancedSettings',__WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default()(newObjectBlock.advancedSettings));context.commit('setCurrentQuestionGroupInfo',newObjectBlock.questiongroup);},loadQuestion:function loadQuestion(context){__WEBPACK_IMPORTED_MODULE_0__mixins_runAjax_js__["a"/* default */].methods.$_get(window.QuestionEditData.connectorBaseUrl+'/getQuestionData',{'iQuestionId':window.QuestionEditData.qid,type:window.QuestionEditData.startType}).then(function(result){context.commit('setCurrentQuestion',result.data.question);context.commit('unsetQuestionImmutable');context.commit('setQuestionImmutable',__WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default()(result.data.question));context.commit('setCurrentQuestionI10N',result.data.i10n);context.commit('unsetQuestionImmutableI10N');context.commit('setQuestionImmutableI10N',__WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default()(result.data.i10n));context.commit('setCurrentQuestionSubquestions',result.data.subquestions);context.commit('unsetQuestionSubquestionsImmutable');context.commit('setQuestionSubquestionsImmutable',__WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default()(result.data.subquestions));context.commit('setCurrentQuestionAnswerOptions',result.data.answerOptions);context.commit('unsetQuestionAnswerOptionsImmutable');context.commit('setQuestionAnswerOptionsImmutable',__WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default()(result.data.answerOptions));context.commit('setCurrentQuestionGroupInfo',result.data.questiongroup);context.commit('setLanguages',result.data.languages);context.commit('setActiveLanguage',result.data.mainLanguage);});__WEBPACK_IMPORTED_MODULE_0__mixins_runAjax_js__["a"/* default */].methods.$_get(window.QuestionEditData.connectorBaseUrl+'/getQuestionAttributeData',{'iQuestionId':window.QuestionEditData.qid,type:window.QuestionEditData.startType}).then(function(result){context.commit('setCurrentQuestionAttributes',result.data);context.commit('unsetImmutableQuestionAttributes');context.commit('setImmutableQuestionAttributes',__WEBPACK_IMPORTED_MODULE_1_lodash_cloneDeep___default()(result.data));});},getQuestionGeneralSettings:function getQuestionGeneralSettings(context){__WEBPACK_IMPORTED_MODULE_0__mixins_runAjax_js__["a"/* default */].methods.$_get(window.QuestionEditData.connectorBaseUrl+'/getGeneralOptions',{'iQuestionId':window.QuestionEditData.qid,'sQuestionType':context.state.currentQuestion.type||window.QuestionEditData.startType}).then(function(result){context.commit('setCurrentQuestionGeneralSettings',result.data);context.commit('unsetImmutableQuestionGeneralSettings',result.data);context.commit('setImmutableQuestionGeneralSettings',result.data);});},getQuestionAdvancedSettings:function getQuestionAdvancedSettings(context){__WEBPACK_IMPORTED_MODULE_0__mixins_runAjax_js__["a"/* default */].methods.$_get(window.QuestionEditData.connectorBaseUrl+'/getAdvancedOptions',{'iQuestionId':window.QuestionEditData.qid,'sQuestionType':context.state.currentQuestion.type||window.QuestionEditData.startType}).then(function(result){context.commit('setCurrentQuestionAdvancedSettings',result.data);context.commit('unsetImmutableQuestionAdvancedSettings',result.data);context.commit('setImmutableQuestionAdvancedSettings',result.data);});},getQuestionTypes:function getQuestionTypes(context){__WEBPACK_IMPORTED_MODULE_0__mixins_runAjax_js__["a"/* default */].methods.$_get(window.QuestionEditData.connectorBaseUrl+'/getQuestionTypeList').then(function(result){context.commit('setQuestionTypeList',result.data);});},reloadQuestion:function reloadQuestion(context){__WEBPACK_IMPORTED_MODULE_0__mixins_runAjax_js__["a"/* default */].methods.$_get(window.QuestionEditData.connectorBaseUrl+'/getQuestionData',{'iQuestionId':window.QuestionEditData.qid,type:context.state.currentQuestion.type||window.QuestionEditData.startType}).then(function(result){context.commit('updateCurrentQuestion',result.data.question);context.commit('updateCurrentQuestionSubquestions',result.data.scaledSubquestions);context.commit('updateCurrentQuestionAnswerOptions',result.data.scaledAnswerOptions);context.commit('updateCurrentQuestionGeneralSettings',result.data.generalSettings);context.commit('updateCurrentQuestionAdvancedSettings',result.data.advancedSettings);context.commit('setCurrentQuestionGroupInfo',result.data.questiongroup);});},saveQuestionData:function saveQuestionData(context){var transferObject=__WEBPACK_IMPORTED_MODULE_2_lodash_merge___default()({'questionData':{question:context.state.currentQuestion,scaledSubquestions:context.state.currentQuestionSubquestions,scaledAnswerOptions:context.state.currentQuestionAnswerOptions,questionI10N:context.state.currentQuestionI10N,questionAttributes:context.state.currentQuestionAttributes,generalSettings:context.state.currentQuestionGeneralSettings,advancedSettings:context.state.currentQuestionAdvancedSettings}},window.LS.data.csrfTokenData);__WEBPACK_IMPORTED_MODULE_3__mixins_logSystem_js__["a"/* LOG */].log('OBJECT TO BE TRANSFERRED: ',{'questionData':transferObject});return __WEBPACK_IMPORTED_MODULE_0__mixins_runAjax_js__["a"/* default */].methods.$_post(window.QuestionEditData.connectorBaseUrl+'/saveQuestionData',transferObject);}};/***/},/* 313 *//***/function(module,exports,__webpack_require__){var baseClone=__webpack_require__(314);/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1,CLONE_SYMBOLS_FLAG=4;/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */function cloneDeep(value){return baseClone(value,CLONE_DEEP_FLAG|CLONE_SYMBOLS_FLAG);}module.exports=cloneDeep;/***/},/* 314 *//***/function(module,exports,__webpack_require__){var Stack=__webpack_require__(32),arrayEach=__webpack_require__(61),assignValue=__webpack_require__(55),baseAssign=__webpack_require__(315),baseAssignIn=__webpack_require__(316),cloneBuffer=__webpack_require__(85),copyArray=__webpack_require__(87),copySymbols=__webpack_require__(317),copySymbolsIn=__webpack_require__(318),getAllKeys=__webpack_require__(73),getAllKeysIn=__webpack_require__(319),getTag=__webpack_require__(37),initCloneArray=__webpack_require__(320),initCloneByTag=__webpack_require__(321),initCloneObject=__webpack_require__(88),isArray=__webpack_require__(1),isBuffer=__webpack_require__(20),isObject=__webpack_require__(2),keys=__webpack_require__(6);/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1,CLONE_FLAT_FLAG=2,CLONE_SYMBOLS_FLAG=4;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */function baseClone(value,bitmask,customizer,key,object,stack){var result,isDeep=bitmask&CLONE_DEEP_FLAG,isFlat=bitmask&CLONE_FLAT_FLAG,isFull=bitmask&CLONE_SYMBOLS_FLAG;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){result=isFlat||isFunc?{}:initCloneObject(value);if(!isDeep){return isFlat?copySymbolsIn(value,baseAssignIn(result,value)):copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,baseClone,isDeep);}}// Check for circular references and return its corresponding clone.
stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);var keysFunc=isFull?isFlat?getAllKeysIn:getAllKeys:isFlat?keysIn:keys;var props=isArr?undefined:keysFunc(value);arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
assignValue(result,key,baseClone(subValue,bitmask,customizer,key,value,stack));});return result;}module.exports=baseClone;/***/},/* 315 *//***/function(module,exports,__webpack_require__){var copyObject=__webpack_require__(26),keys=__webpack_require__(6);/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}module.exports=baseAssign;/***/},/* 316 *//***/function(module,exports,__webpack_require__){var copyObject=__webpack_require__(26),keysIn=__webpack_require__(40);/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */function baseAssignIn(object,source){return object&&copyObject(source,keysIn(source),object);}module.exports=baseAssignIn;/***/},/* 317 *//***/function(module,exports,__webpack_require__){var copyObject=__webpack_require__(26),getSymbols=__webpack_require__(49);/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}module.exports=copySymbols;/***/},/* 318 *//***/function(module,exports,__webpack_require__){var copyObject=__webpack_require__(26),getSymbolsIn=__webpack_require__(104);/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */function copySymbolsIn(source,object){return copyObject(source,getSymbolsIn(source),object);}module.exports=copySymbolsIn;/***/},/* 319 *//***/function(module,exports,__webpack_require__){var baseGetAllKeys=__webpack_require__(74),getSymbolsIn=__webpack_require__(104),keysIn=__webpack_require__(40);/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn);}module.exports=getAllKeysIn;/***/},/* 320 *//***/function(module,exports){/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */function initCloneArray(array){var length=array.length,result=array.constructor(length);// Add properties assigned by `RegExp#exec`.
if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}module.exports=initCloneArray;/***/},/* 321 *//***/function(module,exports,__webpack_require__){var cloneArrayBuffer=__webpack_require__(53),cloneDataView=__webpack_require__(322),cloneMap=__webpack_require__(323),cloneRegExp=__webpack_require__(325),cloneSet=__webpack_require__(326),cloneSymbol=__webpack_require__(328),cloneTypedArray=__webpack_require__(86);/** `Object#toString` result references. */var boolTag='[object Boolean]',dateTag='[object Date]',mapTag='[object Map]',numberTag='[object Number]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object);}}module.exports=initCloneByTag;/***/},/* 322 *//***/function(module,exports,__webpack_require__){var cloneArrayBuffer=__webpack_require__(53);/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}module.exports=cloneDataView;/***/},/* 323 *//***/function(module,exports,__webpack_require__){var addMapEntry=__webpack_require__(324),arrayReduce=__webpack_require__(51),mapToArray=__webpack_require__(71);/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1;/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),CLONE_DEEP_FLAG):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor());}module.exports=cloneMap;/***/},/* 324 *//***/function(module,exports){/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */function addMapEntry(map,pair){// Don't return `map.set` because it's not chainable in IE 11.
map.set(pair[0],pair[1]);return map;}module.exports=addMapEntry;/***/},/* 325 *//***/function(module,exports){/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}module.exports=cloneRegExp;/***/},/* 326 *//***/function(module,exports,__webpack_require__){var addSetEntry=__webpack_require__(327),arrayReduce=__webpack_require__(51),setToArray=__webpack_require__(72);/** Used to compose bitmasks for cloning. */var CLONE_DEEP_FLAG=1;/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),CLONE_DEEP_FLAG):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor());}module.exports=cloneSet;/***/},/* 327 *//***/function(module,exports){/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */function addSetEntry(set,value){// Don't return `set.add` because it's not chainable in IE 11.
set.add(value);return set;}module.exports=addSetEntry;/***/},/* 328 *//***/function(module,exports,__webpack_require__){var _Symbol8=__webpack_require__(14);/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol8?_Symbol8.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}module.exports=cloneSymbol;/***/},/* 329 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";var ConsoleShim=function(){function ConsoleShim(){var param=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var silencer=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;_classCallCheck(this,ConsoleShim);this.param=param;this.silencer=silencer;this.collector=[];this.currentGroupDescription='';this.activeGroups=0;this.timeHolder=null;this.methods=['group','groupEnd','log','trace','time','timeEnd','error','warn'];this.silent={group:function group(){return;},groupEnd:function groupEnd(){return;},log:function log(){return;},trace:function trace(){return;},time:function time(){return;},timeEnd:function timeEnd(){return;},error:function error(){return;},err:function err(){return;},debug:function debug(){return;},warn:function warn(){return;}};}_createClass(ConsoleShim,[{key:'_generateError',value:function _generateError(){try{throw new Error();}catch(err){return err;}}},{key:'_insertParamToArguments',value:function _insertParamToArguments(rawArgs){if(this.param!==''){var args=[].concat(_toConsumableArray(rawArgs));args.unshift(this.param);return args;}return Array.from(arguments);}},{key:'setSilent',value:function setSilent(){var newValue=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;this.silencer=newValue||!this.silencer;}//Start grouping logs
},{key:'group',value:function group(){if(this.silencer){return;}var args=this._insertParamToArguments(arguments);if(typeof console.group==='function'){console.group.apply(console,args);return;}var description=args[0]||'GROUP';this.currentGroupDescription=description;this.activeGroups++;}//Stop grouping logs
},{key:'groupEnd',value:function groupEnd(){if(this.silencer){return;}var args=this._insertParamToArguments(arguments);if(typeof console.groupEnd==='function'){console.groupEnd.apply(console,args);return;}this.currentGroupDescription='';this.activeGroups--;this.activeGroups=this.activeGroups===0?0:this.activeGroups--;}//Simplest mechanism to log stuff
// Aware of the group shim
},{key:'log',value:function log(){if(this.silencer){return;}var args=this._insertParamToArguments(arguments);if(typeof console.group==='function'){console.log.apply(console,args);return;}args.shift();args.unshift(' '.repeat(this.activeGroups*2));this.log.apply(this,args);}//Trace back the apply.
//Uses either the inbuilt function console trace or opens a shim to trace by calling this._insertParamToArguments(arguments).callee
},{key:'trace',value:function trace(){if(this.silencer){return;}var args=this._insertParamToArguments(arguments);if(typeof console.trace==='function'){console.trace.apply(console,args);return;}var artificialError=this._generateError();if(artificialError.stack){this.log.apply(console,artificialError.stack);return;}this.log(args);if(arguments.callee!=undefined){this.trace.apply(console,arguments.callee);}}},{key:'time',value:function time(){if(this.silencer){return;}var args=this._insertParamToArguments(arguments);if(typeof console.time==='function'){console.time.apply(console,args);return;}this.timeHolder=new Date();}},{key:'timeEnd',value:function timeEnd(){if(this.silencer){return;}var args=this._insertParamToArguments(arguments);if(typeof console.timeEnd==='function'){console.timeEnd.apply(console,args);return;}var diff=new Date()-this.timeHolder;this.log('Took '+Math.floor(diff/(1000*60*60))+' hours, '+Math.floor(diff/(1000*60))+' minutes and '+Math.floor(diff/1000)+' seconds ( '+diff+' ms)');this.time=new Date();}},{key:'error',value:function error(){var args=this._insertParamToArguments(arguments);if(typeof console.error==='function'){console.error.apply(console,args);return;}this.log('--- ERROR ---');this.log(args);}},{key:'warn',value:function warn(){var args=this._insertParamToArguments(arguments);if(typeof console.warn==='function'){console.warn.apply(console,args);return;}this.log('--- WARN ---');this.log(args);}}]);return ConsoleShim;}();;/* harmony default export */__webpack_exports__["a"]=ConsoleShim;/***/},/* 330 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__=__webpack_require__(5);/* harmony import */var __WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty__);/* harmony default export */__webpack_exports__["a"]={fullyLoaded:function fullyLoaded(state){return!__WEBPACK_IMPORTED_MODULE_0_lodash_isEmpty___default()(state.currentQuestion);},currentLanguageQuestionI10N:function currentLanguageQuestionI10N(state){var returner={};try{returner=state.currentQuestionI10[state.activeLanguage];}catch(e){}return returner;}};/***/},/* 331 *//***/function(module,__webpack_exports__,__webpack_require__){"use strict";/* harmony default export */__webpack_exports__["a"]={currentQuestion:{},currentQuestionGroupInfo:{},currentQuestionSubquestions:{},currentQuestionAnswerOptions:{},currentQuestionI10N:{},currentQuestionAttributes:{},currentQuestionGeneralSettings:[],currentQuestionAdvancedSettings:{},questionAttributesImmutable:{},questionGeneralSettingsImmutable:[],questionAdvancedSettingsImmutable:{},questionImmutable:{},questionImmutableI10N:{},questionSubquestionsImmutable:{},questionAnswerOptionsImmutable:{},languages:[],survey:{},debugMode:false,questionTypes:[{code:'',type:'',title:''}],questionAdvancedSettingsCategory:'',activeLanguage:''};/***/}]/******/);//# sourceMappingURL=lsquestioneditor.js.map