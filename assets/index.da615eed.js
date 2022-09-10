const mT=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};mT();function gT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var z={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wl=Symbol.for("react.element"),yT=Symbol.for("react.portal"),vT=Symbol.for("react.fragment"),_T=Symbol.for("react.strict_mode"),wT=Symbol.for("react.profiler"),ET=Symbol.for("react.provider"),ST=Symbol.for("react.context"),CT=Symbol.for("react.forward_ref"),TT=Symbol.for("react.suspense"),kT=Symbol.for("react.memo"),IT=Symbol.for("react.lazy"),qg=Symbol.iterator;function xT(t){return t===null||typeof t!="object"?null:(t=qg&&t[qg]||t["@@iterator"],typeof t=="function"?t:null)}var a_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},u_=Object.assign,c_={};function Os(t,e,n){this.props=t,this.context=e,this.refs=c_,this.updater=n||a_}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function h_(){}h_.prototype=Os.prototype;function ip(t,e,n){this.props=t,this.context=e,this.refs=c_,this.updater=n||a_}var sp=ip.prototype=new h_;sp.constructor=ip;u_(sp,Os.prototype);sp.isPureReactComponent=!0;var Qg=Array.isArray,d_=Object.prototype.hasOwnProperty,op={current:null},f_={key:!0,ref:!0,__self:!0,__source:!0};function p_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)d_.call(e,r)&&!f_.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:wl,type:t,key:s,ref:o,props:i,_owner:op.current}}function NT(t,e){return{$$typeof:wl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lp(t){return typeof t=="object"&&t!==null&&t.$$typeof===wl}function AT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yg=/\/+/g;function gh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?AT(""+t.key):e.toString(36)}function Ca(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case wl:case yT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+gh(o,0):r,Qg(i)?(n="",t!=null&&(n=t.replace(Yg,"$&/")+"/"),Ca(i,e,n,"",function(u){return u})):i!=null&&(lp(i)&&(i=NT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Yg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qg(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+gh(s,l);o+=Ca(s,e,n,a,i)}else if(a=xT(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+gh(s,l++),o+=Ca(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ql(t,e,n){if(t==null)return t;var r=[],i=0;return Ca(t,r,"","",function(s){return e.call(n,s,i++)}),r}function RT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Lt={current:null},Ta={transition:null},DT={ReactCurrentDispatcher:Lt,ReactCurrentBatchConfig:Ta,ReactCurrentOwner:op};ie.Children={map:Ql,forEach:function(t,e,n){Ql(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ql(t,function(){e++}),e},toArray:function(t){return Ql(t,function(e){return e})||[]},only:function(t){if(!lp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Os;ie.Fragment=vT;ie.Profiler=wT;ie.PureComponent=ip;ie.StrictMode=_T;ie.Suspense=TT;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DT;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=u_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=op.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)d_.call(e,a)&&!f_.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:wl,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:ST,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ET,_context:t},t.Consumer=t};ie.createElement=p_;ie.createFactory=function(t){var e=p_.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:CT,render:t}};ie.isValidElement=lp;ie.lazy=function(t){return{$$typeof:IT,_payload:{_status:-1,_result:t},_init:RT}};ie.memo=function(t,e){return{$$typeof:kT,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Ta.transition;Ta.transition={};try{t()}finally{Ta.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return Lt.current.useCallback(t,e)};ie.useContext=function(t){return Lt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Lt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Lt.current.useEffect(t,e)};ie.useId=function(){return Lt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Lt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Lt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Lt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Lt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Lt.current.useReducer(t,e,n)};ie.useRef=function(t){return Lt.current.useRef(t)};ie.useState=function(t){return Lt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Lt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Lt.current.useTransition()};ie.version="18.2.0";(function(t){t.exports=ie})(z);const xr=gT(z.exports);var gd={},m_={exports:{}},rn={},g_={exports:{}},y_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,B){var G=P.length;P.push(B);e:for(;0<G;){var me=G-1>>>1,S=P[me];if(0<i(S,B))P[me]=B,P[G]=S,G=me;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var B=P[0],G=P.pop();if(G!==B){P[0]=G;e:for(var me=0,S=P.length,D=S>>>1;me<D;){var A=2*(me+1)-1,F=P[A],_=A+1,se=P[_];if(0>i(F,G))_<S&&0>i(se,F)?(P[me]=se,P[_]=G,me=_):(P[me]=F,P[A]=G,me=A);else if(_<S&&0>i(se,G))P[me]=se,P[_]=G,me=_;else break e}}return B}function i(P,B){var G=P.sortIndex-B.sortIndex;return G!==0?G:P.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,h=null,d=3,p=!1,g=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=P)r(u),B.sortIndex=B.expirationTime,e(a,B);else break;B=n(u)}}function w(P){if(v=!1,y(P),!g)if(n(a)!==null)g=!0,yn(T);else{var B=n(u);B!==null&&at(w,B.startTime-P)}}function T(P,B){g=!1,v&&(v=!1,m(C),C=-1),p=!0;var G=d;try{for(y(B),h=n(a);h!==null&&(!(h.expirationTime>B)||P&&!ze());){var me=h.callback;if(typeof me=="function"){h.callback=null,d=h.priorityLevel;var S=me(h.expirationTime<=B);B=t.unstable_now(),typeof S=="function"?h.callback=S:h===n(a)&&r(a),y(B)}else r(a);h=n(a)}if(h!==null)var D=!0;else{var A=n(u);A!==null&&at(w,A.startTime-B),D=!1}return D}finally{h=null,d=G,p=!1}}var O=!1,$=null,C=-1,V=5,K=-1;function ze(){return!(t.unstable_now()-K<V)}function Fe(){if($!==null){var P=t.unstable_now();K=P;var B=!0;try{B=$(!0,P)}finally{B?Ge():(O=!1,$=null)}}else O=!1}var Ge;if(typeof f=="function")Ge=function(){f(Fe)};else if(typeof MessageChannel<"u"){var Rt=new MessageChannel,Ze=Rt.port2;Rt.port1.onmessage=Fe,Ge=function(){Ze.postMessage(null)}}else Ge=function(){E(Fe,0)};function yn(P){$=P,O||(O=!0,Ge())}function at(P,B){C=E(function(){P(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,yn(T))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(P){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var G=d;d=B;try{return P()}finally{d=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var G=d;d=P;try{return B()}finally{d=G}},t.unstable_scheduleCallback=function(P,B,G){var me=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?me+G:me):G=me,P){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=G+S,P={id:c++,callback:B,priorityLevel:P,startTime:G,expirationTime:S,sortIndex:-1},G>me?(P.sortIndex=G,e(u,P),n(a)===null&&P===n(u)&&(v?(m(C),C=-1):v=!0,at(w,G-me))):(P.sortIndex=S,e(a,P),g||p||(g=!0,yn(T))),P},t.unstable_shouldYield=ze,t.unstable_wrapCallback=function(P){var B=d;return function(){var G=d;d=B;try{return P.apply(this,arguments)}finally{d=G}}}})(y_);(function(t){t.exports=y_})(g_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_=z.exports,en=g_.exports;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var __=new Set,$o={};function Ci(t,e){cs(t,e),cs(t+"Capture",e)}function cs(t,e){for($o[t]=e,t=0;t<e.length;t++)__.add(e[t])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yd=Object.prototype.hasOwnProperty,PT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xg={},Jg={};function OT(t){return yd.call(Jg,t)?!0:yd.call(Xg,t)?!1:PT.test(t)?Jg[t]=!0:(Xg[t]=!0,!1)}function MT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $T(t,e,n,r){if(e===null||typeof e>"u"||MT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var _t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_t[t]=new Ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_t[e]=new Ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_t[t]=new Ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_t[t]=new Ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_t[t]=new Ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_t[t]=new Ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_t[t]=new Ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_t[t]=new Ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_t[t]=new Ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var ap=/[\-:]([a-z])/g;function up(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ap,up);_t[e]=new Ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ap,up);_t[e]=new Ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ap,up);_t[e]=new Ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_t[t]=new Ft(t,1,!1,t.toLowerCase(),null,!1,!1)});_t.xlinkHref=new Ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_t[t]=new Ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function cp(t,e,n,r){var i=_t.hasOwnProperty(e)?_t[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($T(e,n,i,r)&&(n=null),r||i===null?OT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var tr=v_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yl=Symbol.for("react.element"),Li=Symbol.for("react.portal"),Fi=Symbol.for("react.fragment"),hp=Symbol.for("react.strict_mode"),vd=Symbol.for("react.profiler"),w_=Symbol.for("react.provider"),E_=Symbol.for("react.context"),dp=Symbol.for("react.forward_ref"),_d=Symbol.for("react.suspense"),wd=Symbol.for("react.suspense_list"),fp=Symbol.for("react.memo"),sr=Symbol.for("react.lazy"),S_=Symbol.for("react.offscreen"),Zg=Symbol.iterator;function qs(t){return t===null||typeof t!="object"?null:(t=Zg&&t[Zg]||t["@@iterator"],typeof t=="function"?t:null)}var Me=Object.assign,yh;function lo(t){if(yh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yh=e&&e[1]||""}return`
`+yh+t}var vh=!1;function _h(t,e){if(!t||vh)return"";vh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{vh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?lo(t):""}function bT(t){switch(t.tag){case 5:return lo(t.type);case 16:return lo("Lazy");case 13:return lo("Suspense");case 19:return lo("SuspenseList");case 0:case 2:case 15:return t=_h(t.type,!1),t;case 11:return t=_h(t.type.render,!1),t;case 1:return t=_h(t.type,!0),t;default:return""}}function Ed(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fi:return"Fragment";case Li:return"Portal";case vd:return"Profiler";case hp:return"StrictMode";case _d:return"Suspense";case wd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case E_:return(t.displayName||"Context")+".Consumer";case w_:return(t._context.displayName||"Context")+".Provider";case dp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fp:return e=t.displayName||null,e!==null?e:Ed(t.type)||"Memo";case sr:e=t._payload,t=t._init;try{return Ed(t(e))}catch{}}return null}function LT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ed(e);case 8:return e===hp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function C_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function FT(t){var e=C_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xl(t){t._valueTracker||(t._valueTracker=FT(t))}function T_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=C_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Va(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Sd(t,e){var n=e.checked;return Me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function ey(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function k_(t,e){e=e.checked,e!=null&&cp(t,"checked",e,!1)}function Cd(t,e){k_(t,e);var n=Nr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Td(t,e.type,n):e.hasOwnProperty("defaultValue")&&Td(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ty(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Td(t,e,n){(e!=="number"||Va(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ao=Array.isArray;function Zi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function kd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return Me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ny(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(ao(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function I_(t,e){var n=Nr(e.value),r=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ry(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function x_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Id(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?x_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Jl,N_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Jl=Jl||document.createElement("div"),Jl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Jl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},VT=["Webkit","ms","Moz","O"];Object.keys(mo).forEach(function(t){VT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),mo[e]=mo[t]})});function A_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||mo.hasOwnProperty(t)&&mo[t]?(""+e).trim():e+"px"}function R_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=A_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var UT=Me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xd(t,e){if(e){if(UT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Nd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ad=null;function pp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rd=null,es=null,ts=null;function iy(t){if(t=Cl(t)){if(typeof Rd!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Ku(e),Rd(t.stateNode,t.type,e))}}function D_(t){es?ts?ts.push(t):ts=[t]:es=t}function P_(){if(es){var t=es,e=ts;if(ts=es=null,iy(t),e)for(t=0;t<e.length;t++)iy(e[t])}}function O_(t,e){return t(e)}function M_(){}var wh=!1;function $_(t,e,n){if(wh)return t(e,n);wh=!0;try{return O_(t,e,n)}finally{wh=!1,(es!==null||ts!==null)&&(M_(),P_())}}function Lo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ku(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Dd=!1;if(Qn)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){Dd=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{Dd=!1}function zT(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var go=!1,Ua=null,za=!1,Pd=null,jT={onError:function(t){go=!0,Ua=t}};function BT(t,e,n,r,i,s,o,l,a){go=!1,Ua=null,zT.apply(jT,arguments)}function HT(t,e,n,r,i,s,o,l,a){if(BT.apply(this,arguments),go){if(go){var u=Ua;go=!1,Ua=null}else throw Error(I(198));za||(za=!0,Pd=u)}}function Ti(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function b_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sy(t){if(Ti(t)!==t)throw Error(I(188))}function WT(t){var e=t.alternate;if(!e){if(e=Ti(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sy(i),t;if(s===r)return sy(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function L_(t){return t=WT(t),t!==null?F_(t):null}function F_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=F_(t);if(e!==null)return e;t=t.sibling}return null}var V_=en.unstable_scheduleCallback,oy=en.unstable_cancelCallback,GT=en.unstable_shouldYield,KT=en.unstable_requestPaint,Ue=en.unstable_now,qT=en.unstable_getCurrentPriorityLevel,mp=en.unstable_ImmediatePriority,U_=en.unstable_UserBlockingPriority,ja=en.unstable_NormalPriority,QT=en.unstable_LowPriority,z_=en.unstable_IdlePriority,Bu=null,Mn=null;function YT(t){if(Mn&&typeof Mn.onCommitFiberRoot=="function")try{Mn.onCommitFiberRoot(Bu,t,void 0,(t.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:ZT,XT=Math.log,JT=Math.LN2;function ZT(t){return t>>>=0,t===0?32:31-(XT(t)/JT|0)|0}var Zl=64,ea=4194304;function uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ba(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=uo(l):(s&=o,s!==0&&(r=uo(s)))}else o=n&~i,o!==0?r=uo(o):s!==0&&(r=uo(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-kn(e),i=1<<n,r|=t[n],e&=~i;return r}function ek(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kn(s),l=1<<o,a=i[o];a===-1?((l&n)===0||(l&r)!==0)&&(i[o]=ek(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Od(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function j_(){var t=Zl;return Zl<<=1,(Zl&4194240)===0&&(Zl=64),t}function Eh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function El(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kn(e),t[e]=n}function nk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-kn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function gp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-kn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function B_(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var H_,yp,W_,G_,K_,Md=!1,ta=[],dr=null,fr=null,pr=null,Fo=new Map,Vo=new Map,lr=[],rk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ly(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":Fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(e.pointerId)}}function Ys(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Cl(e),e!==null&&yp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ik(t,e,n,r,i){switch(e){case"focusin":return dr=Ys(dr,t,e,n,r,i),!0;case"dragenter":return fr=Ys(fr,t,e,n,r,i),!0;case"mouseover":return pr=Ys(pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fo.set(s,Ys(Fo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Vo.set(s,Ys(Vo.get(s)||null,t,e,n,r,i)),!0}return!1}function q_(t){var e=Kr(t.target);if(e!==null){var n=Ti(e);if(n!==null){if(e=n.tag,e===13){if(e=b_(n),e!==null){t.blockedOn=e,K_(t.priority,function(){W_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$d(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ad=r,n.target.dispatchEvent(r),Ad=null}else return e=Cl(n),e!==null&&yp(e),t.blockedOn=n,!1;e.shift()}return!0}function ay(t,e,n){ka(t)&&n.delete(e)}function sk(){Md=!1,dr!==null&&ka(dr)&&(dr=null),fr!==null&&ka(fr)&&(fr=null),pr!==null&&ka(pr)&&(pr=null),Fo.forEach(ay),Vo.forEach(ay)}function Xs(t,e){t.blockedOn===e&&(t.blockedOn=null,Md||(Md=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,sk)))}function Uo(t){function e(i){return Xs(i,t)}if(0<ta.length){Xs(ta[0],t);for(var n=1;n<ta.length;n++){var r=ta[n];r.blockedOn===t&&(r.blockedOn=null)}}for(dr!==null&&Xs(dr,t),fr!==null&&Xs(fr,t),pr!==null&&Xs(pr,t),Fo.forEach(e),Vo.forEach(e),n=0;n<lr.length;n++)r=lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)q_(n),n.blockedOn===null&&lr.shift()}var ns=tr.ReactCurrentBatchConfig,Ha=!0;function ok(t,e,n,r){var i=ye,s=ns.transition;ns.transition=null;try{ye=1,vp(t,e,n,r)}finally{ye=i,ns.transition=s}}function lk(t,e,n,r){var i=ye,s=ns.transition;ns.transition=null;try{ye=4,vp(t,e,n,r)}finally{ye=i,ns.transition=s}}function vp(t,e,n,r){if(Ha){var i=$d(t,e,n,r);if(i===null)Dh(t,e,r,Wa,n),ly(t,r);else if(ik(i,t,e,n,r))r.stopPropagation();else if(ly(t,r),e&4&&-1<rk.indexOf(t)){for(;i!==null;){var s=Cl(i);if(s!==null&&H_(s),s=$d(t,e,n,r),s===null&&Dh(t,e,r,Wa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Dh(t,e,r,null,n)}}var Wa=null;function $d(t,e,n,r){if(Wa=null,t=pp(r),t=Kr(t),t!==null)if(e=Ti(t),e===null)t=null;else if(n=e.tag,n===13){if(t=b_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Wa=t,null}function Q_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qT()){case mp:return 1;case U_:return 4;case ja:case QT:return 16;case z_:return 536870912;default:return 16}default:return 16}}var ur=null,_p=null,Ia=null;function Y_(){if(Ia)return Ia;var t,e=_p,n=e.length,r,i="value"in ur?ur.value:ur.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ia=i.slice(t,1<r?1-r:void 0)}function xa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function uy(){return!1}function sn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?na:uy,this.isPropagationStopped=uy,this}return Me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wp=sn(Ms),Sl=Me({},Ms,{view:0,detail:0}),ak=sn(Sl),Sh,Ch,Js,Hu=Me({},Sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ep,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Sh=t.screenX-Js.screenX,Ch=t.screenY-Js.screenY):Ch=Sh=0,Js=t),Sh)},movementY:function(t){return"movementY"in t?t.movementY:Ch}}),cy=sn(Hu),uk=Me({},Hu,{dataTransfer:0}),ck=sn(uk),hk=Me({},Sl,{relatedTarget:0}),Th=sn(hk),dk=Me({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),fk=sn(dk),pk=Me({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),mk=sn(pk),gk=Me({},Ms,{data:0}),hy=sn(gk),yk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_k={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_k[t])?!!e[t]:!1}function Ep(){return wk}var Ek=Me({},Sl,{key:function(t){if(t.key){var e=yk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ep,charCode:function(t){return t.type==="keypress"?xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sk=sn(Ek),Ck=Me({},Hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dy=sn(Ck),Tk=Me({},Sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ep}),kk=sn(Tk),Ik=Me({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),xk=sn(Ik),Nk=Me({},Hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ak=sn(Nk),Rk=[9,13,27,32],Sp=Qn&&"CompositionEvent"in window,yo=null;Qn&&"documentMode"in document&&(yo=document.documentMode);var Dk=Qn&&"TextEvent"in window&&!yo,X_=Qn&&(!Sp||yo&&8<yo&&11>=yo),fy=String.fromCharCode(32),py=!1;function J_(t,e){switch(t){case"keyup":return Rk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Z_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vi=!1;function Pk(t,e){switch(t){case"compositionend":return Z_(e);case"keypress":return e.which!==32?null:(py=!0,fy);case"textInput":return t=e.data,t===fy&&py?null:t;default:return null}}function Ok(t,e){if(Vi)return t==="compositionend"||!Sp&&J_(t,e)?(t=Y_(),Ia=_p=ur=null,Vi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return X_&&e.locale!=="ko"?null:e.data;default:return null}}var Mk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function my(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Mk[t.type]:e==="textarea"}function e1(t,e,n,r){D_(r),e=Ga(e,"onChange"),0<e.length&&(n=new wp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var vo=null,zo=null;function $k(t){h1(t,0)}function Wu(t){var e=ji(t);if(T_(e))return t}function bk(t,e){if(t==="change")return e}var t1=!1;if(Qn){var kh;if(Qn){var Ih="oninput"in document;if(!Ih){var gy=document.createElement("div");gy.setAttribute("oninput","return;"),Ih=typeof gy.oninput=="function"}kh=Ih}else kh=!1;t1=kh&&(!document.documentMode||9<document.documentMode)}function yy(){vo&&(vo.detachEvent("onpropertychange",n1),zo=vo=null)}function n1(t){if(t.propertyName==="value"&&Wu(zo)){var e=[];e1(e,zo,t,pp(t)),$_($k,e)}}function Lk(t,e,n){t==="focusin"?(yy(),vo=e,zo=n,vo.attachEvent("onpropertychange",n1)):t==="focusout"&&yy()}function Fk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wu(zo)}function Vk(t,e){if(t==="click")return Wu(e)}function Uk(t,e){if(t==="input"||t==="change")return Wu(e)}function zk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nn=typeof Object.is=="function"?Object.is:zk;function jo(t,e){if(Nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yd.call(e,i)||!Nn(t[i],e[i]))return!1}return!0}function vy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _y(t,e){var n=vy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vy(n)}}function r1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?r1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function i1(){for(var t=window,e=Va();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Va(t.document)}return e}function Cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function jk(t){var e=i1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&r1(n.ownerDocument.documentElement,n)){if(r!==null&&Cp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=_y(n,s);var o=_y(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Bk=Qn&&"documentMode"in document&&11>=document.documentMode,Ui=null,bd=null,_o=null,Ld=!1;function wy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ld||Ui==null||Ui!==Va(r)||(r=Ui,"selectionStart"in r&&Cp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_o&&jo(_o,r)||(_o=r,r=Ga(bd,"onSelect"),0<r.length&&(e=new wp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ui)))}function ra(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zi={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},xh={},s1={};Qn&&(s1=document.createElement("div").style,"AnimationEvent"in window||(delete zi.animationend.animation,delete zi.animationiteration.animation,delete zi.animationstart.animation),"TransitionEvent"in window||delete zi.transitionend.transition);function Gu(t){if(xh[t])return xh[t];if(!zi[t])return t;var e=zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in s1)return xh[t]=e[n];return t}var o1=Gu("animationend"),l1=Gu("animationiteration"),a1=Gu("animationstart"),u1=Gu("transitionend"),c1=new Map,Ey="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){c1.set(t,e),Ci(e,[t])}for(var Nh=0;Nh<Ey.length;Nh++){var Ah=Ey[Nh],Hk=Ah.toLowerCase(),Wk=Ah[0].toUpperCase()+Ah.slice(1);br(Hk,"on"+Wk)}br(o1,"onAnimationEnd");br(l1,"onAnimationIteration");br(a1,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(u1,"onTransitionEnd");cs("onMouseEnter",["mouseout","mouseover"]);cs("onMouseLeave",["mouseout","mouseover"]);cs("onPointerEnter",["pointerout","pointerover"]);cs("onPointerLeave",["pointerout","pointerover"]);Ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ci("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gk=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Sy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,HT(r,e,void 0,t),t.currentTarget=null}function h1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Sy(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Sy(i,l,u),s=a}}}if(za)throw t=Pd,za=!1,Pd=null,t}function Ie(t,e){var n=e[jd];n===void 0&&(n=e[jd]=new Set);var r=t+"__bubble";n.has(r)||(d1(e,t,2,!1),n.add(r))}function Rh(t,e,n){var r=0;e&&(r|=4),d1(n,t,r,e)}var ia="_reactListening"+Math.random().toString(36).slice(2);function Bo(t){if(!t[ia]){t[ia]=!0,__.forEach(function(n){n!=="selectionchange"&&(Gk.has(n)||Rh(n,!1,t),Rh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ia]||(e[ia]=!0,Rh("selectionchange",!1,e))}}function d1(t,e,n,r){switch(Q_(e)){case 1:var i=ok;break;case 4:i=lk;break;default:i=vp}n=i.bind(null,e,n,t),i=void 0,!Dd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Dh(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Kr(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}$_(function(){var u=s,c=pp(n),h=[];e:{var d=c1.get(t);if(d!==void 0){var p=wp,g=t;switch(t){case"keypress":if(xa(n)===0)break e;case"keydown":case"keyup":p=Sk;break;case"focusin":g="focus",p=Th;break;case"focusout":g="blur",p=Th;break;case"beforeblur":case"afterblur":p=Th;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=cy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ck;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=kk;break;case o1:case l1:case a1:p=fk;break;case u1:p=xk;break;case"scroll":p=ak;break;case"wheel":p=Ak;break;case"copy":case"cut":case"paste":p=mk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=dy}var v=(e&4)!==0,E=!v&&t==="scroll",m=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,y;f!==null;){y=f;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,m!==null&&(w=Lo(f,m),w!=null&&v.push(Ho(f,w,y)))),E)break;f=f.return}0<v.length&&(d=new p(d,g,null,n,c),h.push({event:d,listeners:v}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Ad&&(g=n.relatedTarget||n.fromElement)&&(Kr(g)||g[Yn]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Kr(g):null,g!==null&&(E=Ti(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(v=cy,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=dy,w="onPointerLeave",m="onPointerEnter",f="pointer"),E=p==null?d:ji(p),y=g==null?d:ji(g),d=new v(w,f+"leave",p,n,c),d.target=E,d.relatedTarget=y,w=null,Kr(c)===u&&(v=new v(m,f+"enter",g,n,c),v.target=y,v.relatedTarget=E,w=v),E=w,p&&g)t:{for(v=p,m=g,f=0,y=v;y;y=Di(y))f++;for(y=0,w=m;w;w=Di(w))y++;for(;0<f-y;)v=Di(v),f--;for(;0<y-f;)m=Di(m),y--;for(;f--;){if(v===m||m!==null&&v===m.alternate)break t;v=Di(v),m=Di(m)}v=null}else v=null;p!==null&&Cy(h,d,p,v,!1),g!==null&&E!==null&&Cy(h,E,g,v,!0)}}e:{if(d=u?ji(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var T=bk;else if(my(d))if(t1)T=Uk;else{T=Fk;var O=Lk}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=Vk);if(T&&(T=T(t,u))){e1(h,T,n,c);break e}O&&O(t,d,u),t==="focusout"&&(O=d._wrapperState)&&O.controlled&&d.type==="number"&&Td(d,"number",d.value)}switch(O=u?ji(u):window,t){case"focusin":(my(O)||O.contentEditable==="true")&&(Ui=O,bd=u,_o=null);break;case"focusout":_o=bd=Ui=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,wy(h,n,c);break;case"selectionchange":if(Bk)break;case"keydown":case"keyup":wy(h,n,c)}var $;if(Sp)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Vi?J_(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(X_&&n.locale!=="ko"&&(Vi||C!=="onCompositionStart"?C==="onCompositionEnd"&&Vi&&($=Y_()):(ur=c,_p="value"in ur?ur.value:ur.textContent,Vi=!0)),O=Ga(u,C),0<O.length&&(C=new hy(C,t,null,n,c),h.push({event:C,listeners:O}),$?C.data=$:($=Z_(n),$!==null&&(C.data=$)))),($=Dk?Pk(t,n):Ok(t,n))&&(u=Ga(u,"onBeforeInput"),0<u.length&&(c=new hy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=$))}h1(h,e)})}function Ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ga(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Lo(t,n),s!=null&&r.unshift(Ho(t,s,i)),s=Lo(t,e),s!=null&&r.push(Ho(t,s,i))),t=t.return}return r}function Di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Lo(n,s),a!=null&&o.unshift(Ho(n,a,l))):i||(a=Lo(n,s),a!=null&&o.push(Ho(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Kk=/\r\n?/g,qk=/\u0000|\uFFFD/g;function Ty(t){return(typeof t=="string"?t:""+t).replace(Kk,`
`).replace(qk,"")}function sa(t,e,n){if(e=Ty(e),Ty(t)!==e&&n)throw Error(I(425))}function Ka(){}var Fd=null,Vd=null;function Ud(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zd=typeof setTimeout=="function"?setTimeout:void 0,Qk=typeof clearTimeout=="function"?clearTimeout:void 0,ky=typeof Promise=="function"?Promise:void 0,Yk=typeof queueMicrotask=="function"?queueMicrotask:typeof ky<"u"?function(t){return ky.resolve(null).then(t).catch(Xk)}:zd;function Xk(t){setTimeout(function(){throw t})}function Ph(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Uo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Uo(e)}function mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Iy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Pn="__reactFiber$"+$s,Wo="__reactProps$"+$s,Yn="__reactContainer$"+$s,jd="__reactEvents$"+$s,Jk="__reactListeners$"+$s,Zk="__reactHandles$"+$s;function Kr(t){var e=t[Pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yn]||n[Pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Iy(t);t!==null;){if(n=t[Pn])return n;t=Iy(t)}return e}t=n,n=t.parentNode}return null}function Cl(t){return t=t[Pn]||t[Yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ji(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Ku(t){return t[Wo]||null}var Bd=[],Bi=-1;function Lr(t){return{current:t}}function xe(t){0>Bi||(t.current=Bd[Bi],Bd[Bi]=null,Bi--)}function Te(t,e){Bi++,Bd[Bi]=t.current,t.current=e}var Ar={},At=Lr(Ar),Kt=Lr(!1),si=Ar;function hs(t,e){var n=t.type.contextTypes;if(!n)return Ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qt(t){return t=t.childContextTypes,t!=null}function qa(){xe(Kt),xe(At)}function xy(t,e,n){if(At.current!==Ar)throw Error(I(168));Te(At,e),Te(Kt,n)}function f1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,LT(t)||"Unknown",i));return Me({},n,r)}function Qa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,si=At.current,Te(At,t),Te(Kt,Kt.current),!0}function Ny(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=f1(t,e,si),r.__reactInternalMemoizedMergedChildContext=t,xe(Kt),xe(At),Te(At,t)):xe(Kt),Te(Kt,n)}var Un=null,qu=!1,Oh=!1;function p1(t){Un===null?Un=[t]:Un.push(t)}function eI(t){qu=!0,p1(t)}function Fr(){if(!Oh&&Un!==null){Oh=!0;var t=0,e=ye;try{var n=Un;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Un=null,qu=!1}catch(i){throw Un!==null&&(Un=Un.slice(t+1)),V_(mp,Fr),i}finally{ye=e,Oh=!1}}return null}var Hi=[],Wi=0,Ya=null,Xa=0,ln=[],an=0,oi=null,jn=1,Bn="";function Br(t,e){Hi[Wi++]=Xa,Hi[Wi++]=Ya,Ya=t,Xa=e}function m1(t,e,n){ln[an++]=jn,ln[an++]=Bn,ln[an++]=oi,oi=t;var r=jn;t=Bn;var i=32-kn(r)-1;r&=~(1<<i),n+=1;var s=32-kn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jn=1<<32-kn(e)+i|n<<i|r,Bn=s+t}else jn=1<<s|n<<i|r,Bn=t}function Tp(t){t.return!==null&&(Br(t,1),m1(t,1,0))}function kp(t){for(;t===Ya;)Ya=Hi[--Wi],Hi[Wi]=null,Xa=Hi[--Wi],Hi[Wi]=null;for(;t===oi;)oi=ln[--an],ln[an]=null,Bn=ln[--an],ln[an]=null,jn=ln[--an],ln[an]=null}var Jt=null,Xt=null,Ne=!1,Sn=null;function g1(t,e){var n=un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ay(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Jt=t,Xt=mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Jt=t,Xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=oi!==null?{id:jn,overflow:Bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Jt=t,Xt=null,!0):!1;default:return!1}}function Hd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wd(t){if(Ne){var e=Xt;if(e){var n=e;if(!Ay(t,e)){if(Hd(t))throw Error(I(418));e=mr(n.nextSibling);var r=Jt;e&&Ay(t,e)?g1(r,n):(t.flags=t.flags&-4097|2,Ne=!1,Jt=t)}}else{if(Hd(t))throw Error(I(418));t.flags=t.flags&-4097|2,Ne=!1,Jt=t}}}function Ry(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Jt=t}function oa(t){if(t!==Jt)return!1;if(!Ne)return Ry(t),Ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ud(t.type,t.memoizedProps)),e&&(e=Xt)){if(Hd(t))throw y1(),Error(I(418));for(;e;)g1(t,e),e=mr(e.nextSibling)}if(Ry(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xt=mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xt=null}}else Xt=Jt?mr(t.stateNode.nextSibling):null;return!0}function y1(){for(var t=Xt;t;)t=mr(t.nextSibling)}function ds(){Xt=Jt=null,Ne=!1}function Ip(t){Sn===null?Sn=[t]:Sn.push(t)}var tI=tr.ReactCurrentBatchConfig;function wn(t,e){if(t&&t.defaultProps){e=Me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ja=Lr(null),Za=null,Gi=null,xp=null;function Np(){xp=Gi=Za=null}function Ap(t){var e=Ja.current;xe(Ja),t._currentValue=e}function Gd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function rs(t,e){Za=t,xp=Gi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Bt=!0),t.firstContext=null)}function fn(t){var e=t._currentValue;if(xp!==t)if(t={context:t,memoizedValue:e,next:null},Gi===null){if(Za===null)throw Error(I(308));Gi=t,Za.dependencies={lanes:0,firstContext:t}}else Gi=Gi.next=t;return e}var qr=null;function Rp(t){qr===null?qr=[t]:qr.push(t)}function v1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Rp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Xn(t,r)}function Xn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function Dp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ae&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Xn(t,n)}return i=r.interleaved,i===null?(e.next=e,Rp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Xn(t,n)}function Na(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gp(t,n)}}function Dy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function eu(t,e,n,r){var i=t.updateQueue;or=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var h=i.baseState;o=0,c=u=a=null,l=s;do{var d=l.lane,p=l.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=t,v=l;switch(d=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(p,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(p,h,d):g,d==null)break e;h=Me({},h,d);break e;case 2:or=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else p={eventTime:p,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=p,a=h):c=c.next=p,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(a=h),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ai|=o,t.lanes=o,t.memoizedState=h}}function Py(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var w1=new v_.Component().refs;function Kd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Qu={isMounted:function(t){return(t=t._reactInternals)?Ti(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=$t(),i=vr(t),s=Gn(r,i);s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,i),e!==null&&(In(e,t,i,r),Na(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=$t(),i=vr(t),s=Gn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gr(t,s,i),e!==null&&(In(e,t,i,r),Na(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),r=vr(t),i=Gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=gr(t,i,r),e!==null&&(In(e,t,r,n),Na(e,t,r))}};function Oy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!jo(n,r)||!jo(i,s):!0}function E1(t,e,n){var r=!1,i=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=fn(s):(i=qt(e)?si:At.current,r=e.contextTypes,s=(r=r!=null)?hs(t,i):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Qu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function My(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Qu.enqueueReplaceState(e,e.state,null)}function qd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=w1,Dp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=fn(s):(s=qt(e)?si:At.current,i.context=hs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Kd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Qu.enqueueReplaceState(i,i.state,null),eu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===w1&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function la(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function $y(t){var e=t._init;return e(t._payload)}function S1(t){function e(m,f){if(t){var y=m.deletions;y===null?(m.deletions=[f],m.flags|=16):y.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=_r(m,f),m.index=0,m.sibling=null,m}function s(m,f,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<f?(m.flags|=2,f):y):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,f,y,w){return f===null||f.tag!==6?(f=Uh(y,m.mode,w),f.return=m,f):(f=i(f,y),f.return=m,f)}function a(m,f,y,w){var T=y.type;return T===Fi?c(m,f,y.props.children,w,y.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sr&&$y(T)===f.type)?(w=i(f,y.props),w.ref=Zs(m,f,y),w.return=m,w):(w=Ma(y.type,y.key,y.props,null,m.mode,w),w.ref=Zs(m,f,y),w.return=m,w)}function u(m,f,y,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=zh(y,m.mode,w),f.return=m,f):(f=i(f,y.children||[]),f.return=m,f)}function c(m,f,y,w,T){return f===null||f.tag!==7?(f=ti(y,m.mode,w,T),f.return=m,f):(f=i(f,y),f.return=m,f)}function h(m,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Uh(""+f,m.mode,y),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Yl:return y=Ma(f.type,f.key,f.props,null,m.mode,y),y.ref=Zs(m,null,f),y.return=m,y;case Li:return f=zh(f,m.mode,y),f.return=m,f;case sr:var w=f._init;return h(m,w(f._payload),y)}if(ao(f)||qs(f))return f=ti(f,m.mode,y,null),f.return=m,f;la(m,f)}return null}function d(m,f,y,w){var T=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:l(m,f,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Yl:return y.key===T?a(m,f,y,w):null;case Li:return y.key===T?u(m,f,y,w):null;case sr:return T=y._init,d(m,f,T(y._payload),w)}if(ao(y)||qs(y))return T!==null?null:c(m,f,y,w,null);la(m,y)}return null}function p(m,f,y,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(y)||null,l(f,m,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Yl:return m=m.get(w.key===null?y:w.key)||null,a(f,m,w,T);case Li:return m=m.get(w.key===null?y:w.key)||null,u(f,m,w,T);case sr:var O=w._init;return p(m,f,y,O(w._payload),T)}if(ao(w)||qs(w))return m=m.get(y)||null,c(f,m,w,T,null);la(f,w)}return null}function g(m,f,y,w){for(var T=null,O=null,$=f,C=f=0,V=null;$!==null&&C<y.length;C++){$.index>C?(V=$,$=null):V=$.sibling;var K=d(m,$,y[C],w);if(K===null){$===null&&($=V);break}t&&$&&K.alternate===null&&e(m,$),f=s(K,f,C),O===null?T=K:O.sibling=K,O=K,$=V}if(C===y.length)return n(m,$),Ne&&Br(m,C),T;if($===null){for(;C<y.length;C++)$=h(m,y[C],w),$!==null&&(f=s($,f,C),O===null?T=$:O.sibling=$,O=$);return Ne&&Br(m,C),T}for($=r(m,$);C<y.length;C++)V=p($,m,C,y[C],w),V!==null&&(t&&V.alternate!==null&&$.delete(V.key===null?C:V.key),f=s(V,f,C),O===null?T=V:O.sibling=V,O=V);return t&&$.forEach(function(ze){return e(m,ze)}),Ne&&Br(m,C),T}function v(m,f,y,w){var T=qs(y);if(typeof T!="function")throw Error(I(150));if(y=T.call(y),y==null)throw Error(I(151));for(var O=T=null,$=f,C=f=0,V=null,K=y.next();$!==null&&!K.done;C++,K=y.next()){$.index>C?(V=$,$=null):V=$.sibling;var ze=d(m,$,K.value,w);if(ze===null){$===null&&($=V);break}t&&$&&ze.alternate===null&&e(m,$),f=s(ze,f,C),O===null?T=ze:O.sibling=ze,O=ze,$=V}if(K.done)return n(m,$),Ne&&Br(m,C),T;if($===null){for(;!K.done;C++,K=y.next())K=h(m,K.value,w),K!==null&&(f=s(K,f,C),O===null?T=K:O.sibling=K,O=K);return Ne&&Br(m,C),T}for($=r(m,$);!K.done;C++,K=y.next())K=p($,m,C,K.value,w),K!==null&&(t&&K.alternate!==null&&$.delete(K.key===null?C:K.key),f=s(K,f,C),O===null?T=K:O.sibling=K,O=K);return t&&$.forEach(function(Fe){return e(m,Fe)}),Ne&&Br(m,C),T}function E(m,f,y,w){if(typeof y=="object"&&y!==null&&y.type===Fi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Yl:e:{for(var T=y.key,O=f;O!==null;){if(O.key===T){if(T=y.type,T===Fi){if(O.tag===7){n(m,O.sibling),f=i(O,y.props.children),f.return=m,m=f;break e}}else if(O.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===sr&&$y(T)===O.type){n(m,O.sibling),f=i(O,y.props),f.ref=Zs(m,O,y),f.return=m,m=f;break e}n(m,O);break}else e(m,O);O=O.sibling}y.type===Fi?(f=ti(y.props.children,m.mode,w,y.key),f.return=m,m=f):(w=Ma(y.type,y.key,y.props,null,m.mode,w),w.ref=Zs(m,f,y),w.return=m,m=w)}return o(m);case Li:e:{for(O=y.key;f!==null;){if(f.key===O)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(m,f.sibling),f=i(f,y.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=zh(y,m.mode,w),f.return=m,m=f}return o(m);case sr:return O=y._init,E(m,f,O(y._payload),w)}if(ao(y))return g(m,f,y,w);if(qs(y))return v(m,f,y,w);la(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,y),f.return=m,m=f):(n(m,f),f=Uh(y,m.mode,w),f.return=m,m=f),o(m)):n(m,f)}return E}var fs=S1(!0),C1=S1(!1),Tl={},$n=Lr(Tl),Go=Lr(Tl),Ko=Lr(Tl);function Qr(t){if(t===Tl)throw Error(I(174));return t}function Pp(t,e){switch(Te(Ko,e),Te(Go,t),Te($n,Tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Id(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Id(e,t)}xe($n),Te($n,e)}function ps(){xe($n),xe(Go),xe(Ko)}function T1(t){Qr(Ko.current);var e=Qr($n.current),n=Id(e,t.type);e!==n&&(Te(Go,t),Te($n,n))}function Op(t){Go.current===t&&(xe($n),xe(Go))}var De=Lr(0);function tu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mh=[];function Mp(){for(var t=0;t<Mh.length;t++)Mh[t]._workInProgressVersionPrimary=null;Mh.length=0}var Aa=tr.ReactCurrentDispatcher,$h=tr.ReactCurrentBatchConfig,li=0,Oe=null,Ke=null,nt=null,nu=!1,wo=!1,qo=0,nI=0;function Tt(){throw Error(I(321))}function $p(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nn(t[n],e[n]))return!1;return!0}function bp(t,e,n,r,i,s){if(li=s,Oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Aa.current=t===null||t.memoizedState===null?oI:lI,t=n(r,i),wo){s=0;do{if(wo=!1,qo=0,25<=s)throw Error(I(301));s+=1,nt=Ke=null,e.updateQueue=null,Aa.current=aI,t=n(r,i)}while(wo)}if(Aa.current=ru,e=Ke!==null&&Ke.next!==null,li=0,nt=Ke=Oe=null,nu=!1,e)throw Error(I(300));return t}function Lp(){var t=qo!==0;return qo=0,t}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?Oe.memoizedState=nt=t:nt=nt.next=t,nt}function pn(){if(Ke===null){var t=Oe.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=nt===null?Oe.memoizedState:nt.next;if(e!==null)nt=e,Ke=t;else{if(t===null)throw Error(I(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},nt===null?Oe.memoizedState=nt=t:nt=nt.next=t}return nt}function Qo(t,e){return typeof e=="function"?e(t):e}function bh(t){var e=pn(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=Ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((li&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=h,o=r):a=a.next=h,Oe.lanes|=c,ai|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Nn(r,e.memoizedState)||(Bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Oe.lanes|=s,ai|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lh(t){var e=pn(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nn(s,e.memoizedState)||(Bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function k1(){}function I1(t,e){var n=Oe,r=pn(),i=e(),s=!Nn(r.memoizedState,i);if(s&&(r.memoizedState=i,Bt=!0),r=r.queue,Fp(A1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,Yo(9,N1.bind(null,n,r,i,e),void 0,null),st===null)throw Error(I(349));(li&30)!==0||x1(n,e,i)}return i}function x1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function N1(t,e,n,r){e.value=n,e.getSnapshot=r,R1(e)&&D1(t)}function A1(t,e,n){return n(function(){R1(e)&&D1(t)})}function R1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nn(t,n)}catch{return!0}}function D1(t){var e=Xn(t,1);e!==null&&In(e,t,1,-1)}function by(t){var e=Dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},e.queue=t,t=t.dispatch=sI.bind(null,Oe,t),[e.memoizedState,t]}function Yo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Oe.updateQueue,e===null?(e={lastEffect:null,stores:null},Oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function P1(){return pn().memoizedState}function Ra(t,e,n,r){var i=Dn();Oe.flags|=t,i.memoizedState=Yo(1|e,n,void 0,r===void 0?null:r)}function Yu(t,e,n,r){var i=pn();r=r===void 0?null:r;var s=void 0;if(Ke!==null){var o=Ke.memoizedState;if(s=o.destroy,r!==null&&$p(r,o.deps)){i.memoizedState=Yo(e,n,s,r);return}}Oe.flags|=t,i.memoizedState=Yo(1|e,n,s,r)}function Ly(t,e){return Ra(8390656,8,t,e)}function Fp(t,e){return Yu(2048,8,t,e)}function O1(t,e){return Yu(4,2,t,e)}function M1(t,e){return Yu(4,4,t,e)}function $1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function b1(t,e,n){return n=n!=null?n.concat([t]):null,Yu(4,4,$1.bind(null,e,t),n)}function Vp(){}function L1(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$p(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function F1(t,e){var n=pn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&$p(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function V1(t,e,n){return(li&21)===0?(t.baseState&&(t.baseState=!1,Bt=!0),t.memoizedState=n):(Nn(n,e)||(n=j_(),Oe.lanes|=n,ai|=n,t.baseState=!0),e)}function rI(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=$h.transition;$h.transition={};try{t(!1),e()}finally{ye=n,$h.transition=r}}function U1(){return pn().memoizedState}function iI(t,e,n){var r=vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},z1(t))j1(e,n);else if(n=v1(t,e,n,r),n!==null){var i=$t();In(n,t,r,i),B1(n,e,r)}}function sI(t,e,n){var r=vr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(z1(t))j1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Nn(l,o)){var a=e.interleaved;a===null?(i.next=i,Rp(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=v1(t,e,i,r),n!==null&&(i=$t(),In(n,t,r,i),B1(n,e,r))}}function z1(t){var e=t.alternate;return t===Oe||e!==null&&e===Oe}function j1(t,e){wo=nu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B1(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,gp(t,n)}}var ru={readContext:fn,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},oI={readContext:fn,useCallback:function(t,e){return Dn().memoizedState=[t,e===void 0?null:e],t},useContext:fn,useEffect:Ly,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ra(4194308,4,$1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ra(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ra(4,2,t,e)},useMemo:function(t,e){var n=Dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=iI.bind(null,Oe,t),[r.memoizedState,t]},useRef:function(t){var e=Dn();return t={current:t},e.memoizedState=t},useState:by,useDebugValue:Vp,useDeferredValue:function(t){return Dn().memoizedState=t},useTransition:function(){var t=by(!1),e=t[0];return t=rI.bind(null,t[1]),Dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Oe,i=Dn();if(Ne){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),st===null)throw Error(I(349));(li&30)!==0||x1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ly(A1.bind(null,r,s,t),[t]),r.flags|=2048,Yo(9,N1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Dn(),e=st.identifierPrefix;if(Ne){var n=Bn,r=jn;n=(r&~(1<<32-kn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=nI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lI={readContext:fn,useCallback:L1,useContext:fn,useEffect:Fp,useImperativeHandle:b1,useInsertionEffect:O1,useLayoutEffect:M1,useMemo:F1,useReducer:bh,useRef:P1,useState:function(){return bh(Qo)},useDebugValue:Vp,useDeferredValue:function(t){var e=pn();return V1(e,Ke.memoizedState,t)},useTransition:function(){var t=bh(Qo)[0],e=pn().memoizedState;return[t,e]},useMutableSource:k1,useSyncExternalStore:I1,useId:U1,unstable_isNewReconciler:!1},aI={readContext:fn,useCallback:L1,useContext:fn,useEffect:Fp,useImperativeHandle:b1,useInsertionEffect:O1,useLayoutEffect:M1,useMemo:F1,useReducer:Lh,useRef:P1,useState:function(){return Lh(Qo)},useDebugValue:Vp,useDeferredValue:function(t){var e=pn();return Ke===null?e.memoizedState=t:V1(e,Ke.memoizedState,t)},useTransition:function(){var t=Lh(Qo)[0],e=pn().memoizedState;return[t,e]},useMutableSource:k1,useSyncExternalStore:I1,useId:U1,unstable_isNewReconciler:!1};function ms(t,e){try{var n="",r=e;do n+=bT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Fh(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Qd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var uI=typeof WeakMap=="function"?WeakMap:Map;function H1(t,e,n){n=Gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){su||(su=!0,of=r),Qd(t,e)},n}function W1(t,e,n){n=Gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Qd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qd(t,e),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new uI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=CI.bind(null,t,e,n),e.then(t,t))}function Vy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Uy(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gn(-1,1),e.tag=2,gr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var cI=tr.ReactCurrentOwner,Bt=!1;function Dt(t,e,n,r){e.child=t===null?C1(e,null,n,r):fs(e,t.child,n,r)}function zy(t,e,n,r,i){n=n.render;var s=e.ref;return rs(e,i),r=bp(t,e,n,r,s,i),n=Lp(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jn(t,e,i)):(Ne&&n&&Tp(e),e.flags|=1,Dt(t,e,r,i),e.child)}function jy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Kp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,G1(t,e,s,r,i)):(t=Ma(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:jo,n(o,r)&&t.ref===e.ref)return Jn(t,e,i)}return e.flags|=1,t=_r(s,r),t.ref=e.ref,t.return=e,e.child=t}function G1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(jo(s,r)&&t.ref===e.ref)if(Bt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Bt=!0);else return e.lanes=t.lanes,Jn(t,e,i)}return Yd(t,e,n,r,i)}function K1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(qi,Yt),Yt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(qi,Yt),Yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Te(qi,Yt),Yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Te(qi,Yt),Yt|=r;return Dt(t,e,i,n),e.child}function q1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yd(t,e,n,r,i){var s=qt(n)?si:At.current;return s=hs(e,s),rs(e,i),n=bp(t,e,n,r,s,i),r=Lp(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jn(t,e,i)):(Ne&&r&&Tp(e),e.flags|=1,Dt(t,e,n,i),e.child)}function By(t,e,n,r,i){if(qt(n)){var s=!0;Qa(e)}else s=!1;if(rs(e,i),e.stateNode===null)Da(t,e),E1(e,n,r),qd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=fn(u):(u=qt(n)?si:At.current,u=hs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&My(e,o,r,u),or=!1;var d=e.memoizedState;o.state=d,eu(e,r,o,i),a=e.memoizedState,l!==r||d!==a||Kt.current||or?(typeof c=="function"&&(Kd(e,n,c,r),a=e.memoizedState),(l=or||Oy(e,n,l,r,d,a,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,_1(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:wn(e.type,l),o.props=u,h=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=fn(a):(a=qt(n)?si:At.current,a=hs(e,a));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||d!==a)&&My(e,o,r,a),or=!1,d=e.memoizedState,o.state=d,eu(e,r,o,i);var g=e.memoizedState;l!==h||d!==g||Kt.current||or?(typeof p=="function"&&(Kd(e,n,p,r),g=e.memoizedState),(u=or||Oy(e,n,u,r,d,g,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Xd(t,e,n,r,s,i)}function Xd(t,e,n,r,i,s){q1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ny(e,n,!1),Jn(t,e,s);r=e.stateNode,cI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fs(e,t.child,null,s),e.child=fs(e,null,l,s)):Dt(t,e,l,s),e.memoizedState=r.state,i&&Ny(e,n,!0),e.child}function Q1(t){var e=t.stateNode;e.pendingContext?xy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xy(t,e.context,!1),Pp(t,e.containerInfo)}function Hy(t,e,n,r,i){return ds(),Ip(i),e.flags|=256,Dt(t,e,n,r),e.child}var Jd={dehydrated:null,treeContext:null,retryLane:0};function Zd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Y1(t,e,n){var r=e.pendingProps,i=De.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Te(De,i&1),t===null)return Wd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Zu(o,r,0,null),t=ti(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zd(n),e.memoizedState=Jd,t):Up(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return hI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=_r(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=_r(l,s):(s=ti(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Zd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Jd,r}return s=t.child,t=s.sibling,r=_r(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Up(t,e){return e=Zu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function aa(t,e,n,r){return r!==null&&Ip(r),fs(e,t.child,null,n),t=Up(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Fh(Error(I(422))),aa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Zu({mode:"visible",children:r.children},i,0,null),s=ti(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&fs(e,t.child,null,o),e.child.memoizedState=Zd(o),e.memoizedState=Jd,s);if((e.mode&1)===0)return aa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(I(419)),r=Fh(s,r,void 0),aa(t,e,o,r)}if(l=(o&t.childLanes)!==0,Bt||l){if(r=st,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Xn(t,i),In(r,t,i,-1))}return Gp(),r=Fh(Error(I(421))),aa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=TI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Xt=mr(i.nextSibling),Jt=e,Ne=!0,Sn=null,t!==null&&(ln[an++]=jn,ln[an++]=Bn,ln[an++]=oi,jn=t.id,Bn=t.overflow,oi=e),e=Up(e,r.children),e.flags|=4096,e)}function Wy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gd(t.return,e,n)}function Vh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function X1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Dt(t,e,r.children,n),r=De.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wy(t,n,e);else if(t.tag===19)Wy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(De,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&tu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Vh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&tu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Vh(e,!0,n,null,s);break;case"together":Vh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Da(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ai|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function dI(t,e,n){switch(e.tag){case 3:Q1(e),ds();break;case 5:T1(e);break;case 1:qt(e.type)&&Qa(e);break;case 4:Pp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Te(Ja,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(De,De.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Y1(t,e,n):(Te(De,De.current&1),t=Jn(t,e,n),t!==null?t.sibling:null);Te(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return X1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Te(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,K1(t,e,n)}return Jn(t,e,n)}var J1,ef,Z1,ew;J1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ef=function(){};Z1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qr($n.current);var s=null;switch(n){case"input":i=Sd(t,i),r=Sd(t,r),s=[];break;case"select":i=Me({},i,{value:void 0}),r=Me({},r,{value:void 0}),s=[];break;case"textarea":i=kd(t,i),r=kd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ka)}xd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($o.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($o.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Ie("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};ew=function(t,e,n,r){n!==r&&(e.flags|=4)};function eo(t,e){if(!Ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function fI(t,e,n){var r=e.pendingProps;switch(kp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return qt(e.type)&&qa(),kt(e),null;case 3:return r=e.stateNode,ps(),xe(Kt),xe(At),Mp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Sn!==null&&(uf(Sn),Sn=null))),ef(t,e),kt(e),null;case 5:Op(e);var i=Qr(Ko.current);if(n=e.type,t!==null&&e.stateNode!=null)Z1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return kt(e),null}if(t=Qr($n.current),oa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Pn]=e,r[Wo]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<co.length;i++)Ie(co[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":ey(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":ny(r,s),Ie("invalid",r)}xd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&sa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&sa(r.textContent,l,t),i=["children",""+l]):$o.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":Xl(r),ty(r,s,!0);break;case"textarea":Xl(r),ry(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ka)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=x_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Pn]=e,t[Wo]=r,J1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nd(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<co.length;i++)Ie(co[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":ey(t,r),i=Sd(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Me({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":ny(t,r),i=kd(t,r),Ie("invalid",t);break;default:i=r}xd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?R_(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&N_(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&bo(t,a):typeof a=="number"&&bo(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Ie("scroll",t):a!=null&&cp(t,s,a,o))}switch(n){case"input":Xl(t),ty(t,r,!1);break;case"textarea":Xl(t),ry(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Nr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Zi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Zi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ka)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)ew(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Qr(Ko.current),Qr($n.current),oa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Pn]=e,(s=r.nodeValue!==n)&&(t=Jt,t!==null))switch(t.tag){case 3:sa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pn]=e,e.stateNode=r}return kt(e),null;case 13:if(xe(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ne&&Xt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)y1(),ds(),e.flags|=98560,s=!1;else if(s=oa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[Pn]=e}else ds(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Sn!==null&&(uf(Sn),Sn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(De.current&1)!==0?Qe===0&&(Qe=3):Gp())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return ps(),ef(t,e),t===null&&Bo(e.stateNode.containerInfo),kt(e),null;case 10:return Ap(e.type._context),kt(e),null;case 17:return qt(e.type)&&qa(),kt(e),null;case 19:if(xe(De),s=e.memoizedState,s===null)return kt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)eo(s,!1);else{if(Qe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=tu(t),o!==null){for(e.flags|=128,eo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(De,De.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ue()>gs&&(e.flags|=128,r=!0,eo(s,!1),e.lanes=4194304)}else{if(!r)if(t=tu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ne)return kt(e),null}else 2*Ue()-s.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,r=!0,eo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ue(),e.sibling=null,n=De.current,Te(De,r?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return Wp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Yt&1073741824)!==0&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function pI(t,e){switch(kp(e),e.tag){case 1:return qt(e.type)&&qa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ps(),xe(Kt),xe(At),Mp(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Op(e),null;case 13:if(xe(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xe(De),null;case 4:return ps(),null;case 10:return Ap(e.type._context),null;case 22:case 23:return Wp(),null;case 24:return null;default:return null}}var ua=!1,It=!1,mI=typeof WeakSet=="function"?WeakSet:Set,b=null;function Ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(t,e,r)}else n.current=null}function tf(t,e,n){try{n()}catch(r){be(t,e,r)}}var Gy=!1;function gI(t,e){if(Fd=Ha,t=i1(),Cp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(l=o+i),h!==s||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++c===r&&(a=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vd={focusedElem:t,selectionRange:n},Ha=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var g=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,E=g.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:wn(e.type,v),E);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(w){be(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return g=Gy,Gy=!1,g}function Eo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&tf(e,n,s)}i=i.next}while(i!==r)}}function Xu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function tw(t){var e=t.alternate;e!==null&&(t.alternate=null,tw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Pn],delete e[Wo],delete e[jd],delete e[Jk],delete e[Zk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function nw(t){return t.tag===5||t.tag===3||t.tag===4}function Ky(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||nw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ka));else if(r!==4&&(t=t.child,t!==null))for(rf(t,e,n),t=t.sibling;t!==null;)rf(t,e,n),t=t.sibling}function sf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sf(t,e,n),t=t.sibling;t!==null;)sf(t,e,n),t=t.sibling}var dt=null,En=!1;function ir(t,e,n){for(n=n.child;n!==null;)rw(t,e,n),n=n.sibling}function rw(t,e,n){if(Mn&&typeof Mn.onCommitFiberUnmount=="function")try{Mn.onCommitFiberUnmount(Bu,n)}catch{}switch(n.tag){case 5:It||Ki(n,e);case 6:var r=dt,i=En;dt=null,ir(t,e,n),dt=r,En=i,dt!==null&&(En?(t=dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):dt.removeChild(n.stateNode));break;case 18:dt!==null&&(En?(t=dt,n=n.stateNode,t.nodeType===8?Ph(t.parentNode,n):t.nodeType===1&&Ph(t,n),Uo(t)):Ph(dt,n.stateNode));break;case 4:r=dt,i=En,dt=n.stateNode.containerInfo,En=!0,ir(t,e,n),dt=r,En=i;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&tf(n,e,o),i=i.next}while(i!==r)}ir(t,e,n);break;case 1:if(!It&&(Ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){be(n,e,l)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,ir(t,e,n),It=r):ir(t,e,n);break;default:ir(t,e,n)}}function qy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new mI),e.forEach(function(r){var i=kI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _n(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:dt=l.stateNode,En=!1;break e;case 3:dt=l.stateNode.containerInfo,En=!0;break e;case 4:dt=l.stateNode.containerInfo,En=!0;break e}l=l.return}if(dt===null)throw Error(I(160));rw(s,o,i),dt=null,En=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){be(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)iw(e,t),e=e.sibling}function iw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_n(e,t),Rn(t),r&4){try{Eo(3,t,t.return),Xu(3,t)}catch(v){be(t,t.return,v)}try{Eo(5,t,t.return)}catch(v){be(t,t.return,v)}}break;case 1:_n(e,t),Rn(t),r&512&&n!==null&&Ki(n,n.return);break;case 5:if(_n(e,t),Rn(t),r&512&&n!==null&&Ki(n,n.return),t.flags&32){var i=t.stateNode;try{bo(i,"")}catch(v){be(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&k_(i,s),Nd(l,o);var u=Nd(l,s);for(o=0;o<a.length;o+=2){var c=a[o],h=a[o+1];c==="style"?R_(i,h):c==="dangerouslySetInnerHTML"?N_(i,h):c==="children"?bo(i,h):cp(i,c,h,u)}switch(l){case"input":Cd(i,s);break;case"textarea":I_(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Zi(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Zi(i,!!s.multiple,s.defaultValue,!0):Zi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wo]=s}catch(v){be(t,t.return,v)}}break;case 6:if(_n(e,t),Rn(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){be(t,t.return,v)}}break;case 3:if(_n(e,t),Rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(v){be(t,t.return,v)}break;case 4:_n(e,t),Rn(t);break;case 13:_n(e,t),Rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bp=Ue())),r&4&&qy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(It=(u=It)||c,_n(e,t),It=u):_n(e,t),Rn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(b=t,c=t.child;c!==null;){for(h=b=c;b!==null;){switch(d=b,p=d.child,d.tag){case 0:case 11:case 14:case 15:Eo(4,d,d.return);break;case 1:Ki(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){be(r,n,v)}}break;case 5:Ki(d,d.return);break;case 22:if(d.memoizedState!==null){Yy(h);continue}}p!==null?(p.return=d,b=p):Yy(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=A_("display",o))}catch(v){be(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){be(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:_n(e,t),Rn(t),r&4&&qy(t);break;case 21:break;default:_n(e,t),Rn(t)}}function Rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(nw(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bo(i,""),r.flags&=-33);var s=Ky(t);sf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ky(t);rf(t,l,o);break;default:throw Error(I(161))}}catch(a){be(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yI(t,e,n){b=t,sw(t)}function sw(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ua;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||It;l=ua;var u=It;if(ua=o,(It=a)&&!u)for(b=i;b!==null;)o=b,a=o.child,o.tag===22&&o.memoizedState!==null?Xy(i):a!==null?(a.return=o,b=a):Xy(i);for(;s!==null;)b=s,sw(s),s=s.sibling;b=i,ua=l,It=u}Qy(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,b=s):Qy(t)}}function Qy(t){for(;b!==null;){var e=b;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:It||Xu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!It)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:wn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Py(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Py(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Uo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}It||e.flags&512&&nf(e)}catch(d){be(e,e.return,d)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function Yy(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function Xy(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xu(4,e)}catch(a){be(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){be(e,i,a)}}var s=e.return;try{nf(e)}catch(a){be(e,s,a)}break;case 5:var o=e.return;try{nf(e)}catch(a){be(e,o,a)}}}catch(a){be(e,e.return,a)}if(e===t){b=null;break}var l=e.sibling;if(l!==null){l.return=e.return,b=l;break}b=e.return}}var vI=Math.ceil,iu=tr.ReactCurrentDispatcher,zp=tr.ReactCurrentOwner,hn=tr.ReactCurrentBatchConfig,ae=0,st=null,He=null,gt=0,Yt=0,qi=Lr(0),Qe=0,Xo=null,ai=0,Ju=0,jp=0,So=null,zt=null,Bp=0,gs=1/0,Vn=null,su=!1,of=null,yr=null,ca=!1,cr=null,ou=0,Co=0,lf=null,Pa=-1,Oa=0;function $t(){return(ae&6)!==0?Ue():Pa!==-1?Pa:Pa=Ue()}function vr(t){return(t.mode&1)===0?1:(ae&2)!==0&&gt!==0?gt&-gt:tI.transition!==null?(Oa===0&&(Oa=j_()),Oa):(t=ye,t!==0||(t=window.event,t=t===void 0?16:Q_(t.type)),t)}function In(t,e,n,r){if(50<Co)throw Co=0,lf=null,Error(I(185));El(t,n,r),((ae&2)===0||t!==st)&&(t===st&&((ae&2)===0&&(Ju|=n),Qe===4&&ar(t,gt)),Qt(t,r),n===1&&ae===0&&(e.mode&1)===0&&(gs=Ue()+500,qu&&Fr()))}function Qt(t,e){var n=t.callbackNode;tk(t,e);var r=Ba(t,t===st?gt:0);if(r===0)n!==null&&oy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&oy(n),e===1)t.tag===0?eI(Jy.bind(null,t)):p1(Jy.bind(null,t)),Yk(function(){(ae&6)===0&&Fr()}),n=null;else{switch(B_(r)){case 1:n=mp;break;case 4:n=U_;break;case 16:n=ja;break;case 536870912:n=z_;break;default:n=ja}n=fw(n,ow.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ow(t,e){if(Pa=-1,Oa=0,(ae&6)!==0)throw Error(I(327));var n=t.callbackNode;if(is()&&t.callbackNode!==n)return null;var r=Ba(t,t===st?gt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=lu(t,r);else{e=r;var i=ae;ae|=2;var s=aw();(st!==t||gt!==e)&&(Vn=null,gs=Ue()+500,ei(t,e));do try{EI();break}catch(l){lw(t,l)}while(1);Np(),iu.current=s,ae=i,He!==null?e=0:(st=null,gt=0,e=Qe)}if(e!==0){if(e===2&&(i=Od(t),i!==0&&(r=i,e=af(t,i))),e===1)throw n=Xo,ei(t,0),ar(t,r),Qt(t,Ue()),n;if(e===6)ar(t,r);else{if(i=t.current.alternate,(r&30)===0&&!_I(i)&&(e=lu(t,r),e===2&&(s=Od(t),s!==0&&(r=s,e=af(t,s))),e===1))throw n=Xo,ei(t,0),ar(t,r),Qt(t,Ue()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Hr(t,zt,Vn);break;case 3:if(ar(t,r),(r&130023424)===r&&(e=Bp+500-Ue(),10<e)){if(Ba(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){$t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zd(Hr.bind(null,t,zt,Vn),e);break}Hr(t,zt,Vn);break;case 4:if(ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-kn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*vI(r/1960))-r,10<r){t.timeoutHandle=zd(Hr.bind(null,t,zt,Vn),r);break}Hr(t,zt,Vn);break;case 5:Hr(t,zt,Vn);break;default:throw Error(I(329))}}}return Qt(t,Ue()),t.callbackNode===n?ow.bind(null,t):null}function af(t,e){var n=So;return t.current.memoizedState.isDehydrated&&(ei(t,e).flags|=256),t=lu(t,e),t!==2&&(e=zt,zt=n,e!==null&&uf(e)),t}function uf(t){zt===null?zt=t:zt.push.apply(zt,t)}function _I(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~jp,e&=~Ju,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kn(e),r=1<<n;t[n]=-1,e&=~r}}function Jy(t){if((ae&6)!==0)throw Error(I(327));is();var e=Ba(t,0);if((e&1)===0)return Qt(t,Ue()),null;var n=lu(t,e);if(t.tag!==0&&n===2){var r=Od(t);r!==0&&(e=r,n=af(t,r))}if(n===1)throw n=Xo,ei(t,0),ar(t,e),Qt(t,Ue()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,zt,Vn),Qt(t,Ue()),null}function Hp(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(gs=Ue()+500,qu&&Fr())}}function ui(t){cr!==null&&cr.tag===0&&(ae&6)===0&&is();var e=ae;ae|=1;var n=hn.transition,r=ye;try{if(hn.transition=null,ye=1,t)return t()}finally{ye=r,hn.transition=n,ae=e,(ae&6)===0&&Fr()}}function Wp(){Yt=qi.current,xe(qi)}function ei(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Qk(n)),He!==null)for(n=He.return;n!==null;){var r=n;switch(kp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qa();break;case 3:ps(),xe(Kt),xe(At),Mp();break;case 5:Op(r);break;case 4:ps();break;case 13:xe(De);break;case 19:xe(De);break;case 10:Ap(r.type._context);break;case 22:case 23:Wp()}n=n.return}if(st=t,He=t=_r(t.current,null),gt=Yt=e,Qe=0,Xo=null,jp=Ju=ai=0,zt=So=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qr=null}return t}function lw(t,e){do{var n=He;try{if(Np(),Aa.current=ru,nu){for(var r=Oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nu=!1}if(li=0,nt=Ke=Oe=null,wo=!1,qo=0,zp.current=null,n===null||n.return===null){Qe=1,Xo=e,He=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=gt,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Vy(o);if(p!==null){p.flags&=-257,Uy(p,o,l,s,e),p.mode&1&&Fy(s,u,e),e=p,a=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(a),e.updateQueue=v}else g.add(a);break e}else{if((e&1)===0){Fy(s,u,e),Gp();break e}a=Error(I(426))}}else if(Ne&&l.mode&1){var E=Vy(o);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),Uy(E,o,l,s,e),Ip(ms(a,l));break e}}s=a=ms(a,l),Qe!==4&&(Qe=2),So===null?So=[s]:So.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=H1(s,a,e);Dy(s,m);break e;case 1:l=a;var f=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(yr===null||!yr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=W1(s,l,e);Dy(s,w);break e}}s=s.return}while(s!==null)}cw(n)}catch(T){e=T,He===n&&n!==null&&(He=n=n.return);continue}break}while(1)}function aw(){var t=iu.current;return iu.current=ru,t===null?ru:t}function Gp(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),st===null||(ai&268435455)===0&&(Ju&268435455)===0||ar(st,gt)}function lu(t,e){var n=ae;ae|=2;var r=aw();(st!==t||gt!==e)&&(Vn=null,ei(t,e));do try{wI();break}catch(i){lw(t,i)}while(1);if(Np(),ae=n,iu.current=r,He!==null)throw Error(I(261));return st=null,gt=0,Qe}function wI(){for(;He!==null;)uw(He)}function EI(){for(;He!==null&&!GT();)uw(He)}function uw(t){var e=dw(t.alternate,t,Yt);t.memoizedProps=t.pendingProps,e===null?cw(t):He=e,zp.current=null}function cw(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=fI(n,e,Yt),n!==null){He=n;return}}else{if(n=pI(n,e),n!==null){n.flags&=32767,He=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,He=null;return}}if(e=e.sibling,e!==null){He=e;return}He=e=t}while(e!==null);Qe===0&&(Qe=5)}function Hr(t,e,n){var r=ye,i=hn.transition;try{hn.transition=null,ye=1,SI(t,e,n,r)}finally{hn.transition=i,ye=r}return null}function SI(t,e,n,r){do is();while(cr!==null);if((ae&6)!==0)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(nk(t,s),t===st&&(He=st=null,gt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ca||(ca=!0,fw(ja,function(){return is(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=hn.transition,hn.transition=null;var o=ye;ye=1;var l=ae;ae|=4,zp.current=null,gI(t,n),iw(n,t),jk(Vd),Ha=!!Fd,Vd=Fd=null,t.current=n,yI(n),KT(),ae=l,ye=o,hn.transition=s}else t.current=n;if(ca&&(ca=!1,cr=t,ou=i),s=t.pendingLanes,s===0&&(yr=null),YT(n.stateNode),Qt(t,Ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(su)throw su=!1,t=of,of=null,t;return(ou&1)!==0&&t.tag!==0&&is(),s=t.pendingLanes,(s&1)!==0?t===lf?Co++:(Co=0,lf=t):Co=0,Fr(),null}function is(){if(cr!==null){var t=B_(ou),e=hn.transition,n=ye;try{if(hn.transition=null,ye=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,ou=0,(ae&6)!==0)throw Error(I(331));var i=ae;for(ae|=4,b=t.current;b!==null;){var s=b,o=s.child;if((b.flags&16)!==0){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:Eo(8,c,s)}var h=c.child;if(h!==null)h.return=c,b=h;else for(;b!==null;){c=b;var d=c.sibling,p=c.return;if(tw(c),c===u){b=null;break}if(d!==null){d.return=p,b=d;break}b=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}b=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Eo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,b=m;break e}b=s.return}}var f=t.current;for(b=f;b!==null;){o=b;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,b=y;else e:for(o=f;b!==null;){if(l=b,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Xu(9,l)}}catch(T){be(l,l.return,T)}if(l===o){b=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,b=w;break e}b=l.return}}if(ae=i,Fr(),Mn&&typeof Mn.onPostCommitFiberRoot=="function")try{Mn.onPostCommitFiberRoot(Bu,t)}catch{}r=!0}return r}finally{ye=n,hn.transition=e}}return!1}function Zy(t,e,n){e=ms(n,e),e=H1(t,e,1),t=gr(t,e,1),e=$t(),t!==null&&(El(t,1,e),Qt(t,e))}function be(t,e,n){if(t.tag===3)Zy(t,t,n);else for(;e!==null;){if(e.tag===3){Zy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){t=ms(n,t),t=W1(e,t,1),e=gr(e,t,1),t=$t(),e!==null&&(El(e,1,t),Qt(e,t));break}}e=e.return}}function CI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,st===t&&(gt&n)===n&&(Qe===4||Qe===3&&(gt&130023424)===gt&&500>Ue()-Bp?ei(t,0):jp|=n),Qt(t,e)}function hw(t,e){e===0&&((t.mode&1)===0?e=1:(e=ea,ea<<=1,(ea&130023424)===0&&(ea=4194304)));var n=$t();t=Xn(t,e),t!==null&&(El(t,e,n),Qt(t,n))}function TI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),hw(t,n)}function kI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),hw(t,n)}var dw;dw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kt.current)Bt=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Bt=!1,dI(t,e,n);Bt=(t.flags&131072)!==0}else Bt=!1,Ne&&(e.flags&1048576)!==0&&m1(e,Xa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Da(t,e),t=e.pendingProps;var i=hs(e,At.current);rs(e,n),i=bp(null,e,r,t,i,n);var s=Lp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(r)?(s=!0,Qa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dp(e),i.updater=Qu,e.stateNode=i,i._reactInternals=e,qd(e,r,t,n),e=Xd(null,e,r,!0,s,n)):(e.tag=0,Ne&&s&&Tp(e),Dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Da(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=xI(r),t=wn(r,t),i){case 0:e=Yd(null,e,r,t,n);break e;case 1:e=By(null,e,r,t,n);break e;case 11:e=zy(null,e,r,t,n);break e;case 14:e=jy(null,e,r,wn(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),Yd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),By(t,e,r,i,n);case 3:e:{if(Q1(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,_1(t,e),eu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ms(Error(I(423)),e),e=Hy(t,e,r,n,i);break e}else if(r!==i){i=ms(Error(I(424)),e),e=Hy(t,e,r,n,i);break e}else for(Xt=mr(e.stateNode.containerInfo.firstChild),Jt=e,Ne=!0,Sn=null,n=C1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ds(),r===i){e=Jn(t,e,n);break e}Dt(t,e,r,n)}e=e.child}return e;case 5:return T1(e),t===null&&Wd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ud(r,i)?o=null:s!==null&&Ud(r,s)&&(e.flags|=32),q1(t,e),Dt(t,e,o,n),e.child;case 6:return t===null&&Wd(e),null;case 13:return Y1(t,e,n);case 4:return Pp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fs(e,null,r,n):Dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),zy(t,e,r,i,n);case 7:return Dt(t,e,e.pendingProps,n),e.child;case 8:return Dt(t,e,e.pendingProps.children,n),e.child;case 12:return Dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Te(Ja,r._currentValue),r._currentValue=o,s!==null)if(Nn(s.value,o)){if(s.children===i.children&&!Kt.current){e=Jn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Gn(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Gd(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Gd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,rs(e,n),i=fn(i),r=r(i),e.flags|=1,Dt(t,e,r,n),e.child;case 14:return r=e.type,i=wn(r,e.pendingProps),i=wn(r.type,i),jy(t,e,r,i,n);case 15:return G1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wn(r,i),Da(t,e),e.tag=1,qt(r)?(t=!0,Qa(e)):t=!1,rs(e,n),E1(e,r,i),qd(e,r,i,n),Xd(null,e,r,!0,t,n);case 19:return X1(t,e,n);case 22:return K1(t,e,n)}throw Error(I(156,e.tag))};function fw(t,e){return V_(t,e)}function II(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(t,e,n,r){return new II(t,e,n,r)}function Kp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xI(t){if(typeof t=="function")return Kp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dp)return 11;if(t===fp)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ma(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Kp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fi:return ti(n.children,i,s,e);case hp:o=8,i|=8;break;case vd:return t=un(12,n,e,i|2),t.elementType=vd,t.lanes=s,t;case _d:return t=un(13,n,e,i),t.elementType=_d,t.lanes=s,t;case wd:return t=un(19,n,e,i),t.elementType=wd,t.lanes=s,t;case S_:return Zu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w_:o=10;break e;case E_:o=9;break e;case dp:o=11;break e;case fp:o=14;break e;case sr:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=un(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ti(t,e,n,r){return t=un(7,t,r,e),t.lanes=n,t}function Zu(t,e,n,r){return t=un(22,t,r,e),t.elementType=S_,t.lanes=n,t.stateNode={isHidden:!1},t}function Uh(t,e,n){return t=un(6,t,null,e),t.lanes=n,t}function zh(t,e,n){return e=un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function NI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Eh(0),this.expirationTimes=Eh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function qp(t,e,n,r,i,s,o,l,a){return t=new NI(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dp(s),t}function AI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Li,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function pw(t){if(!t)return Ar;t=t._reactInternals;e:{if(Ti(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(qt(n))return f1(t,n,e)}return e}function mw(t,e,n,r,i,s,o,l,a){return t=qp(n,r,!0,t,i,s,o,l,a),t.context=pw(null),n=t.current,r=$t(),i=vr(n),s=Gn(r,i),s.callback=e!=null?e:null,gr(n,s,i),t.current.lanes=i,El(t,i,r),Qt(t,r),t}function ec(t,e,n,r){var i=e.current,s=$t(),o=vr(i);return n=pw(n),e.context===null?e.context=n:e.pendingContext=n,e=Gn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gr(i,e,o),t!==null&&(In(t,i,o,s),Na(t,i,o)),o}function au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ev(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qp(t,e){ev(t,e),(t=t.alternate)&&ev(t,e)}function RI(){return null}var gw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yp(t){this._internalRoot=t}tc.prototype.render=Yp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));ec(t,e,null,null)};tc.prototype.unmount=Yp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ui(function(){ec(null,t,null,null)}),e[Yn]=null}};function tc(t){this._internalRoot=t}tc.prototype.unstable_scheduleHydration=function(t){if(t){var e=G_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&q_(t)}};function Xp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tv(){}function DI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=au(o);s.call(u)}}var o=mw(e,r,t,0,null,!1,!1,"",tv);return t._reactRootContainer=o,t[Yn]=o.current,Bo(t.nodeType===8?t.parentNode:t),ui(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=au(a);l.call(u)}}var a=qp(t,0,!1,null,null,!1,!1,"",tv);return t._reactRootContainer=a,t[Yn]=a.current,Bo(t.nodeType===8?t.parentNode:t),ui(function(){ec(e,a,n,r)}),a}function rc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=au(o);l.call(a)}}ec(e,o,t,i)}else o=DI(n,e,t,i,r);return au(o)}H_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=uo(e.pendingLanes);n!==0&&(gp(e,n|1),Qt(e,Ue()),(ae&6)===0&&(gs=Ue()+500,Fr()))}break;case 13:ui(function(){var r=Xn(t,1);if(r!==null){var i=$t();In(r,t,1,i)}}),Qp(t,1)}};yp=function(t){if(t.tag===13){var e=Xn(t,134217728);if(e!==null){var n=$t();In(e,t,134217728,n)}Qp(t,134217728)}};W_=function(t){if(t.tag===13){var e=vr(t),n=Xn(t,e);if(n!==null){var r=$t();In(n,t,e,r)}Qp(t,e)}};G_=function(){return ye};K_=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};Rd=function(t,e,n){switch(e){case"input":if(Cd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ku(r);if(!i)throw Error(I(90));T_(r),Cd(r,i)}}}break;case"textarea":I_(t,n);break;case"select":e=n.value,e!=null&&Zi(t,!!n.multiple,e,!1)}};O_=Hp;M_=ui;var PI={usingClientEntryPoint:!1,Events:[Cl,ji,Ku,D_,P_,Hp]},to={findFiberByHostInstance:Kr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},OI={bundleType:to.bundleType,version:to.version,rendererPackageName:to.rendererPackageName,rendererConfig:to.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=L_(t),t===null?null:t.stateNode},findFiberByHostInstance:to.findFiberByHostInstance||RI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ha=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ha.isDisabled&&ha.supportsFiber)try{Bu=ha.inject(OI),Mn=ha}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PI;rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xp(e))throw Error(I(200));return AI(t,e,null,n)};rn.createRoot=function(t,e){if(!Xp(t))throw Error(I(299));var n=!1,r="",i=gw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=qp(t,1,!1,null,null,n,!1,r,i),t[Yn]=e.current,Bo(t.nodeType===8?t.parentNode:t),new Yp(e)};rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=L_(e),t=t===null?null:t.stateNode,t};rn.flushSync=function(t){return ui(t)};rn.hydrate=function(t,e,n){if(!nc(e))throw Error(I(200));return rc(null,t,e,!0,n)};rn.hydrateRoot=function(t,e,n){if(!Xp(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=gw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=mw(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Yn]=e.current,Bo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new tc(e)};rn.render=function(t,e,n){if(!nc(e))throw Error(I(200));return rc(null,t,e,!1,n)};rn.unmountComponentAtNode=function(t){if(!nc(t))throw Error(I(40));return t._reactRootContainer?(ui(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[Yn]=null})}),!0):!1};rn.unstable_batchedUpdates=Hp;rn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nc(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return rc(t,e,n,!1,r)};rn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=rn})(m_);var nv=m_.exports;gd.createRoot=nv.createRoot,gd.hydrateRoot=nv.hydrateRoot;var Jp={exports:{}},ve={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp=Symbol.for("react.element"),em=Symbol.for("react.portal"),ic=Symbol.for("react.fragment"),sc=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),lc=Symbol.for("react.provider"),ac=Symbol.for("react.context"),MI=Symbol.for("react.server_context"),uc=Symbol.for("react.forward_ref"),cc=Symbol.for("react.suspense"),hc=Symbol.for("react.suspense_list"),dc=Symbol.for("react.memo"),fc=Symbol.for("react.lazy"),$I=Symbol.for("react.offscreen"),yw;yw=Symbol.for("react.module.reference");function gn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Zp:switch(t=t.type,t){case ic:case oc:case sc:case cc:case hc:return t;default:switch(t=t&&t.$$typeof,t){case MI:case ac:case uc:case fc:case dc:case lc:return t;default:return e}}case em:return e}}}ve.ContextConsumer=ac;ve.ContextProvider=lc;ve.Element=Zp;ve.ForwardRef=uc;ve.Fragment=ic;ve.Lazy=fc;ve.Memo=dc;ve.Portal=em;ve.Profiler=oc;ve.StrictMode=sc;ve.Suspense=cc;ve.SuspenseList=hc;ve.isAsyncMode=function(){return!1};ve.isConcurrentMode=function(){return!1};ve.isContextConsumer=function(t){return gn(t)===ac};ve.isContextProvider=function(t){return gn(t)===lc};ve.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Zp};ve.isForwardRef=function(t){return gn(t)===uc};ve.isFragment=function(t){return gn(t)===ic};ve.isLazy=function(t){return gn(t)===fc};ve.isMemo=function(t){return gn(t)===dc};ve.isPortal=function(t){return gn(t)===em};ve.isProfiler=function(t){return gn(t)===oc};ve.isStrictMode=function(t){return gn(t)===sc};ve.isSuspense=function(t){return gn(t)===cc};ve.isSuspenseList=function(t){return gn(t)===hc};ve.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ic||t===oc||t===sc||t===cc||t===hc||t===$I||typeof t=="object"&&t!==null&&(t.$$typeof===fc||t.$$typeof===dc||t.$$typeof===lc||t.$$typeof===ac||t.$$typeof===uc||t.$$typeof===yw||t.getModuleId!==void 0)};ve.typeOf=gn;(function(t){t.exports=ve})(Jp);function bI(t){function e(S,D,A,F,_){for(var se=0,M=0,$e=0,de=0,ge,Z,ut=0,Vt=0,ue,Ct=ue=ge=0,fe=0,ct=0,Gs=0,ht=0,ql=A.length,Ks=ql-1,vn,Y="",Ve="",ph="",mh="",rr;fe<ql;){if(Z=A.charCodeAt(fe),fe===Ks&&M+de+$e+se!==0&&(M!==0&&(Z=M===47?10:47),de=$e=se=0,ql++,Ks++),M+de+$e+se===0){if(fe===Ks&&(0<ct&&(Y=Y.replace(d,"")),0<Y.trim().length)){switch(Z){case 32:case 9:case 59:case 13:case 10:break;default:Y+=A.charAt(fe)}Z=59}switch(Z){case 123:for(Y=Y.trim(),ge=Y.charCodeAt(0),ue=1,ht=++fe;fe<ql;){switch(Z=A.charCodeAt(fe)){case 123:ue++;break;case 125:ue--;break;case 47:switch(Z=A.charCodeAt(fe+1)){case 42:case 47:e:{for(Ct=fe+1;Ct<Ks;++Ct)switch(A.charCodeAt(Ct)){case 47:if(Z===42&&A.charCodeAt(Ct-1)===42&&fe+2!==Ct){fe=Ct+1;break e}break;case 10:if(Z===47){fe=Ct+1;break e}}fe=Ct}}break;case 91:Z++;case 40:Z++;case 34:case 39:for(;fe++<Ks&&A.charCodeAt(fe)!==Z;);}if(ue===0)break;fe++}switch(ue=A.substring(ht,fe),ge===0&&(ge=(Y=Y.replace(h,"").trim()).charCodeAt(0)),ge){case 64:switch(0<ct&&(Y=Y.replace(d,"")),Z=Y.charCodeAt(1),Z){case 100:case 109:case 115:case 45:ct=D;break;default:ct=yn}if(ue=e(D,ct,ue,Z,_+1),ht=ue.length,0<P&&(ct=n(yn,Y,Gs),rr=l(3,ue,ct,D,Ge,Fe,ht,Z,_,F),Y=ct.join(""),rr!==void 0&&(ht=(ue=rr.trim()).length)===0&&(Z=0,ue="")),0<ht)switch(Z){case 115:Y=Y.replace(O,o);case 100:case 109:case 45:ue=Y+"{"+ue+"}";break;case 107:Y=Y.replace(f,"$1 $2"),ue=Y+"{"+ue+"}",ue=Ze===1||Ze===2&&s("@"+ue,3)?"@-webkit-"+ue+"@"+ue:"@"+ue;break;default:ue=Y+ue,F===112&&(ue=(Ve+=ue,""))}else ue="";break;default:ue=e(D,n(D,Y,Gs),ue,F,_+1)}ph+=ue,ue=Gs=ct=Ct=ge=0,Y="",Z=A.charCodeAt(++fe);break;case 125:case 59:if(Y=(0<ct?Y.replace(d,""):Y).trim(),1<(ht=Y.length))switch(Ct===0&&(ge=Y.charCodeAt(0),ge===45||96<ge&&123>ge)&&(ht=(Y=Y.replace(" ",":")).length),0<P&&(rr=l(1,Y,D,S,Ge,Fe,Ve.length,F,_,F))!==void 0&&(ht=(Y=rr.trim()).length)===0&&(Y="\0\0"),ge=Y.charCodeAt(0),Z=Y.charCodeAt(1),ge){case 0:break;case 64:if(Z===105||Z===99){mh+=Y+A.charAt(fe);break}default:Y.charCodeAt(ht-1)!==58&&(Ve+=i(Y,ge,Z,Y.charCodeAt(2)))}Gs=ct=Ct=ge=0,Y="",Z=A.charCodeAt(++fe)}}switch(Z){case 13:case 10:M===47?M=0:1+ge===0&&F!==107&&0<Y.length&&(ct=1,Y+="\0"),0<P*G&&l(0,Y,D,S,Ge,Fe,Ve.length,F,_,F),Fe=1,Ge++;break;case 59:case 125:if(M+de+$e+se===0){Fe++;break}default:switch(Fe++,vn=A.charAt(fe),Z){case 9:case 32:if(de+se+M===0)switch(ut){case 44:case 58:case 9:case 32:vn="";break;default:Z!==32&&(vn=" ")}break;case 0:vn="\\0";break;case 12:vn="\\f";break;case 11:vn="\\v";break;case 38:de+M+se===0&&(ct=Gs=1,vn="\f"+vn);break;case 108:if(de+M+se+Rt===0&&0<Ct)switch(fe-Ct){case 2:ut===112&&A.charCodeAt(fe-3)===58&&(Rt=ut);case 8:Vt===111&&(Rt=Vt)}break;case 58:de+M+se===0&&(Ct=fe);break;case 44:M+$e+de+se===0&&(ct=1,vn+="\r");break;case 34:case 39:M===0&&(de=de===Z?0:de===0?Z:de);break;case 91:de+M+$e===0&&se++;break;case 93:de+M+$e===0&&se--;break;case 41:de+M+se===0&&$e--;break;case 40:if(de+M+se===0){if(ge===0)switch(2*ut+3*Vt){case 533:break;default:ge=1}$e++}break;case 64:M+$e+de+se+Ct+ue===0&&(ue=1);break;case 42:case 47:if(!(0<de+se+$e))switch(M){case 0:switch(2*Z+3*A.charCodeAt(fe+1)){case 235:M=47;break;case 220:ht=fe,M=42}break;case 42:Z===47&&ut===42&&ht+2!==fe&&(A.charCodeAt(ht+2)===33&&(Ve+=A.substring(ht,fe+1)),vn="",M=0)}}M===0&&(Y+=vn)}Vt=ut,ut=Z,fe++}if(ht=Ve.length,0<ht){if(ct=D,0<P&&(rr=l(2,Ve,ct,S,Ge,Fe,ht,F,_,F),rr!==void 0&&(Ve=rr).length===0))return mh+Ve+ph;if(Ve=ct.join(",")+"{"+Ve+"}",Ze*Rt!==0){switch(Ze!==2||s(Ve,2)||(Rt=0),Rt){case 111:Ve=Ve.replace(w,":-moz-$1")+Ve;break;case 112:Ve=Ve.replace(y,"::-webkit-input-$1")+Ve.replace(y,"::-moz-$1")+Ve.replace(y,":-ms-input-$1")+Ve}Rt=0}}return mh+Ve+ph}function n(S,D,A){var F=D.trim().split(E);D=F;var _=F.length,se=S.length;switch(se){case 0:case 1:var M=0;for(S=se===0?"":S[0]+" ";M<_;++M)D[M]=r(S,D[M],A).trim();break;default:var $e=M=0;for(D=[];M<_;++M)for(var de=0;de<se;++de)D[$e++]=r(S[de]+" ",F[M],A).trim()}return D}function r(S,D,A){var F=D.charCodeAt(0);switch(33>F&&(F=(D=D.trim()).charCodeAt(0)),F){case 38:return D.replace(m,"$1"+S.trim());case 58:return S.trim()+D.replace(m,"$1"+S.trim());default:if(0<1*A&&0<D.indexOf("\f"))return D.replace(m,(S.charCodeAt(0)===58?"":"$1")+S.trim())}return S+D}function i(S,D,A,F){var _=S+";",se=2*D+3*A+4*F;if(se===944){S=_.indexOf(":",9)+1;var M=_.substring(S,_.length-1).trim();return M=_.substring(0,S).trim()+M+";",Ze===1||Ze===2&&s(M,1)?"-webkit-"+M+M:M}if(Ze===0||Ze===2&&!s(_,1))return _;switch(se){case 1015:return _.charCodeAt(10)===97?"-webkit-"+_+_:_;case 951:return _.charCodeAt(3)===116?"-webkit-"+_+_:_;case 963:return _.charCodeAt(5)===110?"-webkit-"+_+_:_;case 1009:if(_.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+_+_;case 978:return"-webkit-"+_+"-moz-"+_+_;case 1019:case 983:return"-webkit-"+_+"-moz-"+_+"-ms-"+_+_;case 883:if(_.charCodeAt(8)===45)return"-webkit-"+_+_;if(0<_.indexOf("image-set(",11))return _.replace(ze,"$1-webkit-$2")+_;break;case 932:if(_.charCodeAt(4)===45)switch(_.charCodeAt(5)){case 103:return"-webkit-box-"+_.replace("-grow","")+"-webkit-"+_+"-ms-"+_.replace("grow","positive")+_;case 115:return"-webkit-"+_+"-ms-"+_.replace("shrink","negative")+_;case 98:return"-webkit-"+_+"-ms-"+_.replace("basis","preferred-size")+_}return"-webkit-"+_+"-ms-"+_+_;case 964:return"-webkit-"+_+"-ms-flex-"+_+_;case 1023:if(_.charCodeAt(8)!==99)break;return M=_.substring(_.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+M+"-webkit-"+_+"-ms-flex-pack"+M+_;case 1005:return g.test(_)?_.replace(p,":-webkit-")+_.replace(p,":-moz-")+_:_;case 1e3:switch(M=_.substring(13).trim(),D=M.indexOf("-")+1,M.charCodeAt(0)+M.charCodeAt(D)){case 226:M=_.replace(T,"tb");break;case 232:M=_.replace(T,"tb-rl");break;case 220:M=_.replace(T,"lr");break;default:return _}return"-webkit-"+_+"-ms-"+M+_;case 1017:if(_.indexOf("sticky",9)===-1)break;case 975:switch(D=(_=S).length-10,M=(_.charCodeAt(D)===33?_.substring(0,D):_).substring(S.indexOf(":",7)+1).trim(),se=M.charCodeAt(0)+(M.charCodeAt(7)|0)){case 203:if(111>M.charCodeAt(8))break;case 115:_=_.replace(M,"-webkit-"+M)+";"+_;break;case 207:case 102:_=_.replace(M,"-webkit-"+(102<se?"inline-":"")+"box")+";"+_.replace(M,"-webkit-"+M)+";"+_.replace(M,"-ms-"+M+"box")+";"+_}return _+";";case 938:if(_.charCodeAt(5)===45)switch(_.charCodeAt(6)){case 105:return M=_.replace("-items",""),"-webkit-"+_+"-webkit-box-"+M+"-ms-flex-"+M+_;case 115:return"-webkit-"+_+"-ms-flex-item-"+_.replace(C,"")+_;default:return"-webkit-"+_+"-ms-flex-line-pack"+_.replace("align-content","").replace(C,"")+_}break;case 973:case 989:if(_.charCodeAt(3)!==45||_.charCodeAt(4)===122)break;case 931:case 953:if(K.test(S)===!0)return(M=S.substring(S.indexOf(":")+1)).charCodeAt(0)===115?i(S.replace("stretch","fill-available"),D,A,F).replace(":fill-available",":stretch"):_.replace(M,"-webkit-"+M)+_.replace(M,"-moz-"+M.replace("fill-",""))+_;break;case 962:if(_="-webkit-"+_+(_.charCodeAt(5)===102?"-ms-"+_:"")+_,A+F===211&&_.charCodeAt(13)===105&&0<_.indexOf("transform",10))return _.substring(0,_.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+_}return _}function s(S,D){var A=S.indexOf(D===1?":":"{"),F=S.substring(0,D!==3?A:10);return A=S.substring(A+1,S.length-1),B(D!==2?F:F.replace(V,"$1"),A,D)}function o(S,D){var A=i(D,D.charCodeAt(0),D.charCodeAt(1),D.charCodeAt(2));return A!==D+";"?A.replace($," or ($1)").substring(4):"("+D+")"}function l(S,D,A,F,_,se,M,$e,de,ge){for(var Z=0,ut=D,Vt;Z<P;++Z)switch(Vt=at[Z].call(c,S,ut,A,F,_,se,M,$e,de,ge)){case void 0:case!1:case!0:case null:break;default:ut=Vt}if(ut!==D)return ut}function a(S){switch(S){case void 0:case null:P=at.length=0;break;default:if(typeof S=="function")at[P++]=S;else if(typeof S=="object")for(var D=0,A=S.length;D<A;++D)a(S[D]);else G=!!S|0}return a}function u(S){return S=S.prefix,S!==void 0&&(B=null,S?typeof S!="function"?Ze=1:(Ze=2,B=S):Ze=0),u}function c(S,D){var A=S;if(33>A.charCodeAt(0)&&(A=A.trim()),me=A,A=[me],0<P){var F=l(-1,D,A,A,Ge,Fe,0,0,0,0);F!==void 0&&typeof F=="string"&&(D=F)}var _=e(yn,A,D,0,0);return 0<P&&(F=l(-2,_,A,A,Ge,Fe,_.length,0,0,0),F!==void 0&&(_=F)),me="",Rt=0,Fe=Ge=1,_}var h=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,g=/zoo|gra/,v=/([,: ])(transform)/g,E=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,w=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,O=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,C=/-self|flex-/g,V=/[^]*?(:[rp][el]a[\w-]+)[^]*/,K=/stretch|:\s*\w+\-(?:conte|avail)/,ze=/([^-])(image-set\()/,Fe=1,Ge=1,Rt=0,Ze=1,yn=[],at=[],P=0,B=null,G=0,me="";return c.use=a,c.set=u,t!==void 0&&u(t),c}var LI={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function FI(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var VI=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,rv=FI(function(t){return VI.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),vw={exports:{}},_e={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lt=typeof Symbol=="function"&&Symbol.for,tm=lt?Symbol.for("react.element"):60103,nm=lt?Symbol.for("react.portal"):60106,pc=lt?Symbol.for("react.fragment"):60107,mc=lt?Symbol.for("react.strict_mode"):60108,gc=lt?Symbol.for("react.profiler"):60114,yc=lt?Symbol.for("react.provider"):60109,vc=lt?Symbol.for("react.context"):60110,rm=lt?Symbol.for("react.async_mode"):60111,_c=lt?Symbol.for("react.concurrent_mode"):60111,wc=lt?Symbol.for("react.forward_ref"):60112,Ec=lt?Symbol.for("react.suspense"):60113,UI=lt?Symbol.for("react.suspense_list"):60120,Sc=lt?Symbol.for("react.memo"):60115,Cc=lt?Symbol.for("react.lazy"):60116,zI=lt?Symbol.for("react.block"):60121,jI=lt?Symbol.for("react.fundamental"):60117,BI=lt?Symbol.for("react.responder"):60118,HI=lt?Symbol.for("react.scope"):60119;function on(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case tm:switch(t=t.type,t){case rm:case _c:case pc:case gc:case mc:case Ec:return t;default:switch(t=t&&t.$$typeof,t){case vc:case wc:case Cc:case Sc:case yc:return t;default:return e}}case nm:return e}}}function _w(t){return on(t)===_c}_e.AsyncMode=rm;_e.ConcurrentMode=_c;_e.ContextConsumer=vc;_e.ContextProvider=yc;_e.Element=tm;_e.ForwardRef=wc;_e.Fragment=pc;_e.Lazy=Cc;_e.Memo=Sc;_e.Portal=nm;_e.Profiler=gc;_e.StrictMode=mc;_e.Suspense=Ec;_e.isAsyncMode=function(t){return _w(t)||on(t)===rm};_e.isConcurrentMode=_w;_e.isContextConsumer=function(t){return on(t)===vc};_e.isContextProvider=function(t){return on(t)===yc};_e.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===tm};_e.isForwardRef=function(t){return on(t)===wc};_e.isFragment=function(t){return on(t)===pc};_e.isLazy=function(t){return on(t)===Cc};_e.isMemo=function(t){return on(t)===Sc};_e.isPortal=function(t){return on(t)===nm};_e.isProfiler=function(t){return on(t)===gc};_e.isStrictMode=function(t){return on(t)===mc};_e.isSuspense=function(t){return on(t)===Ec};_e.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===pc||t===_c||t===gc||t===mc||t===Ec||t===UI||typeof t=="object"&&t!==null&&(t.$$typeof===Cc||t.$$typeof===Sc||t.$$typeof===yc||t.$$typeof===vc||t.$$typeof===wc||t.$$typeof===jI||t.$$typeof===BI||t.$$typeof===HI||t.$$typeof===zI)};_e.typeOf=on;(function(t){t.exports=_e})(vw);var im=vw.exports,WI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},GI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},KI={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ww={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sm={};sm[im.ForwardRef]=KI;sm[im.Memo]=ww;function iv(t){return im.isMemo(t)?ww:sm[t.$$typeof]||WI}var qI=Object.defineProperty,QI=Object.getOwnPropertyNames,sv=Object.getOwnPropertySymbols,YI=Object.getOwnPropertyDescriptor,XI=Object.getPrototypeOf,ov=Object.prototype;function Ew(t,e,n){if(typeof e!="string"){if(ov){var r=XI(e);r&&r!==ov&&Ew(t,r,n)}var i=QI(e);sv&&(i=i.concat(sv(e)));for(var s=iv(t),o=iv(e),l=0;l<i.length;++l){var a=i[l];if(!GI[a]&&!(n&&n[a])&&!(o&&o[a])&&!(s&&s[a])){var u=YI(e,a);try{qI(t,a,u)}catch{}}}}return t}var JI=Ew;function On(){return(On=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var lv=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},cf=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Jp.exports.typeOf(t)},uu=Object.freeze([]),wr=Object.freeze({});function Jo(t){return typeof t=="function"}function av(t){return t.displayName||t.name||"Component"}function om(t){return t&&typeof t.styledComponentId=="string"}var ys=typeof process<"u"&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",lm=typeof window<"u"&&"HTMLElement"in window,ZI=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:!1),ex={};function kl(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var tx=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&kl(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var l=s;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(a,r[u])&&(this.groupSizes[n]++,a++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,l=s;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},t}(),$a=new Map,cu=new Map,To=1,da=function(t){if($a.has(t))return $a.get(t);for(;cu.has(To);)To++;var e=To++;return $a.set(t,e),cu.set(e,t),e},nx=function(t){return cu.get(t)},rx=function(t,e){e>=To&&(To=e+1),$a.set(t,e),cu.set(e,t)},ix="style["+ys+'][data-styled-version="5.3.5"]',sx=new RegExp("^"+ys+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ox=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},lx=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var l=o.match(sx);if(l){var a=0|parseInt(l[1],10),u=l[2];a!==0&&(rx(u,a),ox(t,u,l[3]),t.getTag().insertRules(a,r)),r.length=0}else r.push(o)}}},ax=function(){return typeof window<"u"&&window.__webpack_nonce__!==void 0?window.__webpack_nonce__:null},Sw=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(l){for(var a=l.childNodes,u=a.length;u>=0;u--){var c=a[u];if(c&&c.nodeType===1&&c.hasAttribute(ys))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(ys,"active"),r.setAttribute("data-styled-version","5.3.5");var o=ax();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},ux=function(){function t(n){var r=this.element=Sw(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,l=s.length;o<l;o++){var a=s[o];if(a.ownerNode===i)return a}kl(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),cx=function(){function t(n){var r=this.element=Sw(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),hx=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),uv=lm,dx={isServer:!lm,useCSSOMInjection:!ZI},hu=function(){function t(n,r,i){n===void 0&&(n=wr),r===void 0&&(r={}),this.options=On({},dx,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&lm&&uv&&(uv=!1,function(s){for(var o=document.querySelectorAll(ix),l=0,a=o.length;l<a;l++){var u=o[l];u&&u.getAttribute(ys)!=="active"&&(lx(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return da(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(On({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new hx(o):s?new ux(o):new cx(o),new tx(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(da(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(da(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(da(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var l=nx(o);if(l!==void 0){var a=n.names.get(l),u=r.getGroup(o);if(a&&u&&a.size){var c=ys+".g"+o+'[id="'+l+'"]',h="";a!==void 0&&a.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),fx=/(a)(d)/gi,cv=function(t){return String.fromCharCode(t+(t>25?39:97))};function hf(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=cv(e%52)+n;return(cv(e%52)+n).replace(fx,"$1-$2")}var Qi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Cw=function(t){return Qi(5381,t)};function Tw(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Jo(n)&&!om(n))return!1}return!0}var px=Cw("5.3.5"),mx=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Tw(e),this.componentId=n,this.baseHash=Qi(px,n),this.baseStyle=r,hu.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=ci(this.rules,e,n,r).join(""),l=hf(Qi(this.baseHash,o)>>>0);if(!n.hasNameForId(i,l)){var a=r(o,"."+l,void 0,i);n.insertRules(i,l,a)}s.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,c=Qi(this.baseHash,r.hash),h="",d=0;d<u;d++){var p=this.rules[d];if(typeof p=="string")h+=p;else if(p){var g=ci(p,e,n,r),v=Array.isArray(g)?g.join(""):g;c=Qi(c,v+d),h+=v}}if(h){var E=hf(c>>>0);if(!n.hasNameForId(i,E)){var m=r(h,"."+E,void 0,i);n.insertRules(i,E,m)}s.push(E)}}return s.join(" ")},t}(),gx=/^\s*\/\/.*$/gm,yx=[":","[",".","#"];function vx(t){var e,n,r,i,s=t===void 0?wr:t,o=s.options,l=o===void 0?wr:o,a=s.plugins,u=a===void 0?uu:a,c=new bI(l),h=[],d=function(v){function E(m){if(m)try{v(m+"}")}catch{}}return function(m,f,y,w,T,O,$,C,V,K){switch(m){case 1:if(V===0&&f.charCodeAt(0)===64)return v(f+";"),"";break;case 2:if(C===0)return f+"/*|*/";break;case 3:switch(C){case 102:case 112:return v(y[0]+f),"";default:return f+(K===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(E)}}}(function(v){h.push(v)}),p=function(v,E,m){return E===0&&yx.indexOf(m[n.length])!==-1||m.match(i)?v:"."+e};function g(v,E,m,f){f===void 0&&(f="&");var y=v.replace(gx,""),w=E&&m?m+" "+E+" { "+y+" }":y;return e=f,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(m||!E?"":E,w)}return c.use([].concat(u,[function(v,E,m){v===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,p))},d,function(v){if(v===-2){var E=h;return h=[],E}}])),g.hash=u.length?u.reduce(function(v,E){return E.name||kl(15),Qi(v,E.name)},5381).toString():"",g}var kw=xr.createContext();kw.Consumer;var Iw=xr.createContext(),_x=(Iw.Consumer,new hu),df=vx();function xw(){return z.exports.useContext(kw)||_x}function Nw(){return z.exports.useContext(Iw)||df}var wx=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=df);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return kl(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=df),this.name+e.hash},t}(),Ex=/([A-Z])/,Sx=/([A-Z])/g,Cx=/^ms-/,Tx=function(t){return"-"+t.toLowerCase()};function hv(t){return Ex.test(t)?t.replace(Sx,Tx).replace(Cx,"-ms-"):t}var dv=function(t){return t==null||t===!1||t===""};function ci(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,l=t.length;o<l;o+=1)(i=ci(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(dv(t))return"";if(om(t))return"."+t.styledComponentId;if(Jo(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var a=t(e);return ci(a,e,n,r)}var u;return t instanceof wx?n?(t.inject(n,r),t.getName(r)):t:cf(t)?function c(h,d){var p,g,v=[];for(var E in h)h.hasOwnProperty(E)&&!dv(h[E])&&(Array.isArray(h[E])&&h[E].isCss||Jo(h[E])?v.push(hv(E)+":",h[E],";"):cf(h[E])?v.push.apply(v,c(h[E],E)):v.push(hv(E)+": "+(p=E,(g=h[E])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||p in LI?String(g).trim():g+"px")+";"));return d?[d+" {"].concat(v,["}"]):v}(t):t.toString()}var fv=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function Aw(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Jo(t)||cf(t)?fv(ci(lv(uu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:fv(ci(lv(t,n)))}var Rw=function(t,e,n){return n===void 0&&(n=wr),t.theme!==n.theme&&t.theme||e||n.theme},kx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ix=/(^-|-$)/g;function jh(t){return t.replace(kx,"-").replace(Ix,"")}var Dw=function(t){return hf(Cw(t)>>>0)};function fa(t){return typeof t=="string"&&!0}var ff=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},xx=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function Nx(t,e,n){var r=t[n];ff(e)&&ff(r)?Pw(r,e):t[n]=e}function Pw(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(ff(o))for(var l in o)xx(l)&&Nx(t,o[l],l)}return t}var am=xr.createContext();am.Consumer;var Bh={};function Ow(t,e,n){var r=om(t),i=!fa(t),s=e.attrs,o=s===void 0?uu:s,l=e.componentId,a=l===void 0?function(f,y){var w=typeof f!="string"?"sc":jh(f);Bh[w]=(Bh[w]||0)+1;var T=w+"-"+Dw("5.3.5"+w+Bh[w]);return y?y+"-"+T:T}(e.displayName,e.parentComponentId):l,u=e.displayName,c=u===void 0?function(f){return fa(f)?"styled."+f:"Styled("+av(f)+")"}(t):u,h=e.displayName&&e.componentId?jh(e.displayName)+"-"+e.componentId:e.componentId||a,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;r&&t.shouldForwardProp&&(p=e.shouldForwardProp?function(f,y,w){return t.shouldForwardProp(f,y,w)&&e.shouldForwardProp(f,y,w)}:t.shouldForwardProp);var g,v=new mx(n,h,r?t.componentStyle:void 0),E=v.isStatic&&o.length===0,m=function(f,y){return function(w,T,O,$){var C=w.attrs,V=w.componentStyle,K=w.defaultProps,ze=w.foldedComponentIds,Fe=w.shouldForwardProp,Ge=w.styledComponentId,Rt=w.target,Ze=function(F,_,se){F===void 0&&(F=wr);var M=On({},_,{theme:F}),$e={};return se.forEach(function(de){var ge,Z,ut,Vt=de;for(ge in Jo(Vt)&&(Vt=Vt(M)),Vt)M[ge]=$e[ge]=ge==="className"?(Z=$e[ge],ut=Vt[ge],Z&&ut?Z+" "+ut:Z||ut):Vt[ge]}),[M,$e]}(Rw(T,z.exports.useContext(am),K)||wr,T,C),yn=Ze[0],at=Ze[1],P=function(F,_,se,M){var $e=xw(),de=Nw(),ge=_?F.generateAndInjectStyles(wr,$e,de):F.generateAndInjectStyles(se,$e,de);return ge}(V,$,yn),B=O,G=at.$as||T.$as||at.as||T.as||Rt,me=fa(G),S=at!==T?On({},T,{},at):T,D={};for(var A in S)A[0]!=="$"&&A!=="as"&&(A==="forwardedAs"?D.as=S[A]:(Fe?Fe(A,rv,G):!me||rv(A))&&(D[A]=S[A]));return T.style&&at.style!==T.style&&(D.style=On({},T.style,{},at.style)),D.className=Array.prototype.concat(ze,Ge,P!==Ge?P:null,T.className,at.className).filter(Boolean).join(" "),D.ref=B,z.exports.createElement(G,D)}(g,f,y,E)};return m.displayName=c,(g=xr.forwardRef(m)).attrs=d,g.componentStyle=v,g.displayName=c,g.shouldForwardProp=p,g.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):uu,g.styledComponentId=h,g.target=r?t.target:t,g.withComponent=function(f){var y=e.componentId,w=function(O,$){if(O==null)return{};var C,V,K={},ze=Object.keys(O);for(V=0;V<ze.length;V++)C=ze[V],$.indexOf(C)>=0||(K[C]=O[C]);return K}(e,["componentId"]),T=y&&y+"-"+(fa(f)?f:jh(av(f)));return Ow(f,On({},w,{attrs:d,componentId:T}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?Pw({},t.defaultProps,f):f}}),g.toString=function(){return"."+g.styledComponentId},i&&JI(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var pf=function(t){return function e(n,r,i){if(i===void 0&&(i=wr),!Jp.exports.isValidElementType(r))return kl(1,String(r));var s=function(){return n(r,i,Aw.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,On({},i,{},o))},s.attrs=function(o){return e(n,r,On({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(Ow,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){pf[t]=pf(t)});var Ax=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=Tw(n),hu.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(ci(this.rules,r,i,s).join(""),""),l=this.componentId+n;i.insertRules(l,l,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&hu.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function Rx(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Aw.apply(void 0,[t].concat(n)),s="sc-global-"+Dw(JSON.stringify(i)),o=new Ax(i,s);function l(u){var c=xw(),h=Nw(),d=z.exports.useContext(am),p=z.exports.useRef(c.allocateGSInstance(s)).current;return c.server&&a(p,u,c,d,h),z.exports.useLayoutEffect(function(){if(!c.server)return a(p,u,c,d,h),function(){return o.removeStyles(p,c)}},[p,u,c,d,h]),null}function a(u,c,h,d,p){if(o.isStatic)o.renderStyles(u,ex,h,p);else{var g=On({},c,{theme:Rw(c,d,l.defaultProps)});o.renderStyles(u,g,h,p)}}return xr.memo(l)}const q=pf,Dx=q.header`
    position: relative;
    bottom: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3791b4;
    height:50px;
    width: 100%;
    color:white;
`,Px=q.h3`

    position:absolute;
    left: 1em;
    color:white;
    font-size:1em;
    cursor: pointer;


`,Ox=q.h5`
    position:absolute;
    right: 1em;
    color:white;
    font-size:1.3em;
    cursor: pointer;
    padding:5px;
    animation: startAdmin 1s forwards ease;
    @keyframes startAdmin {
        from{
            opacity: 0;
            top:0em;
            right: 1em;
        }to{
            opacity: 1;
            top:0.7em;
            right:1em;
        }
    }

`;var Mw={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pv=xr.createContext&&xr.createContext(Mw),Tc={exports:{}},kc={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mx=z.exports,$x=Symbol.for("react.element"),bx=Symbol.for("react.fragment"),Lx=Object.prototype.hasOwnProperty,Fx=Mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vx={key:!0,ref:!0,__self:!0,__source:!0};function $w(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Lx.call(e,r)&&!Vx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$x,type:t,key:s,ref:o,props:i,_owner:Fx.current}}kc.Fragment=bx;kc.jsx=$w;kc.jsxs=$w;(function(t){t.exports=kc})(Tc);const zn=Tc.exports.Fragment,k=Tc.exports.jsx,Se=Tc.exports.jsxs;var Er=globalThis&&globalThis.__assign||function(){return Er=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Er.apply(this,arguments)},Ux=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function bw(t){return t&&t.map(function(e,n){return xr.createElement(e.tag,Er({key:n},e.attr),bw(e.child))})}function nr(t){return function(e){return k(zx,{...Er({attr:Er({},t.attr)},e),children:bw(t.child)})}}function zx(t){var e=function(n){var r=t.attr,i=t.size,s=t.title,o=Ux(t,["attr","size","title"]),l=i||n.size||"1em",a;return n.className&&(a=n.className),t.className&&(a=(a?a+" ":"")+t.className),Se("svg",{...Er({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:a,style:Er(Er({color:t.color||n.color},n.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),children:[s&&k("title",{children:s}),t.children]})};return pv!==void 0?k(pv.Consumer,{children:function(n){return e(n)}}):e(Mw)}function jx(t){return nr({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"}}]})(t)}function Bx(t){return nr({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"}}]})(t)}function Hx(t){return nr({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"}}]})(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw bs(e)},bs=function(t){return new Error("Firebase Database ("+Lw.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},um={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,h=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,p=u&63;a||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||h==null)throw Error();const d=s<<2|l>>4;if(r.push(d),u!==64){const p=l<<4&240|u>>2;if(r.push(p),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Vw=function(t){const e=Fw(t);return um.encodeByteArray(e,!0)},Uw=function(t){return Vw(t).replace(/\./g,"")},mv=function(t){try{return um.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(t){return zw(void 0,t)}function zw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Kx(n)||(t[n]=zw(t[n],e[n]));return t}function Kx(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ic())}function qx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qx(){return Ic().indexOf("Electron/")>=0}function Yx(){const t=Ic();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Xx(){return Ic().indexOf("MSAppHost/")>=0}function Bw(){return Lw.NODE_ADMIN===!0}function Jx(){return typeof indexedDB=="object"}function Zx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN="FirebaseError";class xc extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eN,Object.setPrototypeOf(this,xc.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hw.prototype.create)}}class Hw{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?tN(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new xc(i,l,r)}}function tN(t,e){return t.replace(nN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t){return JSON.parse(t)}function it(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Zo(mv(s[0])||""),n=Zo(mv(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},rN=function(t){const e=Ww(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},iN=function(t){const e=Ww(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function gv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function du(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function mf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yv(s)&&yv(o)){if(!mf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):h<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const d=(i<<5|i>>>27)+u+a+c+r[h]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Nc(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,R(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ac=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t){return t&&t._delegate?t._delegate:t}class vs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ls;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cN(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uN(t){return t===Wr?void 0:t}function cN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new aN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ce||(ce={}));const dN={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},fN=ce.INFO,pN={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},mN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=pN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hm{constructor(e){this.name=e,this._logLevel=fN,this._logHandler=mN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const gN=(t,e)=>e.some(n=>t instanceof n);let vv,_v;function yN(){return vv||(vv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vN(){return _v||(_v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gw=new WeakMap,gf=new WeakMap,Kw=new WeakMap,Hh=new WeakMap,dm=new WeakMap;function _N(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gw.set(n,t)}).catch(()=>{}),dm.set(e,t),e}function wN(t){if(gf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});gf.set(t,e)}let yf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function EN(t){yf=t(yf)}function SN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wh(this),e,...n);return Kw.set(r,e.sort?e.sort():[e]),Sr(r)}:vN().includes(t)?function(...e){return t.apply(Wh(this),e),Sr(Gw.get(this))}:function(...e){return Sr(t.apply(Wh(this),e))}}function CN(t){return typeof t=="function"?SN(t):(t instanceof IDBTransaction&&wN(t),gN(t,yN())?new Proxy(t,yf):t)}function Sr(t){if(t instanceof IDBRequest)return _N(t);if(Hh.has(t))return Hh.get(t);const e=CN(t);return e!==t&&(Hh.set(t,e),dm.set(e,t)),e}const Wh=t=>dm.get(t);function TN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Sr(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Sr(o.result),a.oldVersion,a.newVersion,Sr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const kN=["get","getKey","getAll","getAllKeys","count"],IN=["put","add","delete","clear"],Gh=new Map;function wv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gh.get(e))return Gh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=IN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kN.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Gh.set(e,s),s}EN(t=>({...t,get:(e,n,r)=>wv(e,n)||t.get(e,n,r),has:(e,n)=>!!wv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function NN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vf="@firebase/app",Ev="0.7.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=new hm("@firebase/app"),AN="@firebase/app-compat",RN="@firebase/analytics-compat",DN="@firebase/analytics",PN="@firebase/app-check-compat",ON="@firebase/app-check",MN="@firebase/auth",$N="@firebase/auth-compat",bN="@firebase/database",LN="@firebase/database-compat",FN="@firebase/functions",VN="@firebase/functions-compat",UN="@firebase/installations",zN="@firebase/installations-compat",jN="@firebase/messaging",BN="@firebase/messaging-compat",HN="@firebase/performance",WN="@firebase/performance-compat",GN="@firebase/remote-config",KN="@firebase/remote-config-compat",qN="@firebase/storage",QN="@firebase/storage-compat",YN="@firebase/firestore",XN="@firebase/firestore-compat",JN="firebase",ZN="9.8.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="[DEFAULT]",eA={[vf]:"fire-core",[AN]:"fire-core-compat",[DN]:"fire-analytics",[RN]:"fire-analytics-compat",[ON]:"fire-app-check",[PN]:"fire-app-check-compat",[MN]:"fire-auth",[$N]:"fire-auth-compat",[bN]:"fire-rtdb",[LN]:"fire-rtdb-compat",[FN]:"fire-fn",[VN]:"fire-fn-compat",[UN]:"fire-iid",[zN]:"fire-iid-compat",[jN]:"fire-fcm",[BN]:"fire-fcm-compat",[HN]:"fire-perf",[WN]:"fire-perf-compat",[GN]:"fire-rc",[KN]:"fire-rc-compat",[qN]:"fire-gcs",[QN]:"fire-gcs-compat",[YN]:"fire-fst",[XN]:"fire-fst-compat","fire-js":"fire-js",[JN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fu=new Map,_f=new Map;function tA(t,e){try{t.container.addComponent(e)}catch(n){fm.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function el(t){const e=t.name;if(_f.has(e))return fm.debug(`There were multiple attempts to register component ${e}.`),!1;_f.set(e,t);for(const n of fu.values())tA(n,t);return!0}function Qw(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},di=new Hw("app","Firebase",nA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw di.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=ZN;function iA(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:qw,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw di.create("bad-app-name",{appName:String(r)});const i=fu.get(r);if(i){if(mf(t,i.options)&&mf(n,i.config))return i;throw di.create("duplicate-app",{appName:r})}const s=new hN(r);for(const l of _f.values())s.addComponent(l);const o=new rA(t,n,s);return fu.set(r,o),o}function Xw(t=qw){const e=fu.get(t);if(!e)throw di.create("no-app",{appName:t});return e}function Cr(t,e,n){var r;let i=(r=eA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fm.warn(l.join(" "));return}el(new vs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA="firebase-heartbeat-database",oA=1,tl="firebase-heartbeat-store";let Kh=null;function Jw(){return Kh||(Kh=TN(sA,oA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tl)}}}).catch(t=>{throw di.create("storage-open",{originalErrorMessage:t.message})})),Kh}async function lA(t){var e;try{return(await Jw()).transaction(tl).objectStore(tl).get(Zw(t))}catch(n){throw di.create("storage-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message})}}async function Sv(t,e){var n;try{const i=(await Jw()).transaction(tl,"readwrite");return await i.objectStore(tl).put(e,Zw(t)),i.done}catch(r){throw di.create("storage-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message})}}function Zw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=1024,uA=30*24*60*60*1e3;class cA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=uA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Cv(),{heartbeatsToSend:n,unsentEntries:r}=hA(this._heartbeatsCache.heartbeats),i=Uw(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Cv(){return new Date().toISOString().substring(0,10)}function hA(t,e=aA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Tv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jx()?Zx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tv(t){return Uw(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t){el(new vs("platform-logger",e=>new xN(e),"PRIVATE")),el(new vs("heartbeat",e=>new cA(e),"PRIVATE")),Cr(vf,Ev,t),Cr(vf,Ev,"esm2017"),Cr("fire-js","")}fA("");var pA="firebase",mA="9.8.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cr(pA,mA,"app");var gA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,pm=pm||{},Q=gA||self;function pu(){}function wf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Il(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function yA(t){return Object.prototype.hasOwnProperty.call(t,qh)&&t[qh]||(t[qh]=++vA)}var qh="closure_uid_"+(1e9*Math.random()>>>0),vA=0;function _A(t,e,n){return t.call.apply(t.bind,arguments)}function wA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function yt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?yt=_A:yt=wA,yt.apply(null,arguments)}function pa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function St(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return e.prototype[i].apply(r,o)}}function Vr(){this.s=this.s,this.o=this.o}var EA=0;Vr.prototype.s=!1;Vr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),EA!=0)&&yA(this)};Vr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const eE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},tE=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function SA(t){e:{var e=fR;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function kv(t){return Array.prototype.concat.apply([],arguments)}function mm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function mu(t){return/^[\s\xa0]*$/.test(t)}var Iv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Pt(t,e){return t.indexOf(e)!=-1}function Qh(t,e){return t<e?-1:t>e?1:0}var Ot;e:{var xv=Q.navigator;if(xv){var Nv=xv.userAgent;if(Nv){Ot=Nv;break e}}Ot=""}function gm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function nE(t){const e={};for(const n in t)e[n]=t[n];return e}var Av="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Av.length;s++)n=Av[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ym(t){return ym[" "](t),t}ym[" "]=pu;function CA(t){var e=IA;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var TA=Pt(Ot,"Opera"),_s=Pt(Ot,"Trident")||Pt(Ot,"MSIE"),iE=Pt(Ot,"Edge"),Ef=iE||_s,sE=Pt(Ot,"Gecko")&&!(Pt(Ot.toLowerCase(),"webkit")&&!Pt(Ot,"Edge"))&&!(Pt(Ot,"Trident")||Pt(Ot,"MSIE"))&&!Pt(Ot,"Edge"),kA=Pt(Ot.toLowerCase(),"webkit")&&!Pt(Ot,"Edge");function oE(){var t=Q.document;return t?t.documentMode:void 0}var gu;e:{var Yh="",Xh=function(){var t=Ot;if(sE)return/rv:([^\);]+)(\)|;)/.exec(t);if(iE)return/Edge\/([\d\.]+)/.exec(t);if(_s)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kA)return/WebKit\/(\S+)/.exec(t);if(TA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Xh&&(Yh=Xh?Xh[1]:""),_s){var Jh=oE();if(Jh!=null&&Jh>parseFloat(Yh)){gu=String(Jh);break e}}gu=Yh}var IA={};function xA(){return CA(function(){let t=0;const e=Iv(String(gu)).split("."),n=Iv("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Qh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Qh(i[2].length==0,s[2].length==0)||Qh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Sf;if(Q.document&&_s){var Rv=oE();Sf=Rv||parseInt(gu,10)||void 0}else Sf=void 0;var NA=Sf,AA=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",pu,e),Q.removeEventListener("test",pu,e)}catch{}return t}();function Nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Nt.prototype.h=function(){this.defaultPrevented=!0};function nl(t,e){if(Nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(sE){e:{try{ym(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:RA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&nl.Z.h.call(this)}}St(nl,Nt);var RA={2:"touch",3:"pen",4:"mouse"};nl.prototype.h=function(){nl.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var xl="closure_listenable_"+(1e6*Math.random()|0),DA=0;function PA(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++DA,this.ca=this.fa=!1}function Rc(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Dc(t){this.src=t,this.g={},this.h=0}Dc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Tf(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new PA(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Cf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=eE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Rc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Tf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var vm="closure_lm_"+(1e6*Math.random()|0),Zh={};function lE(t,e,n,r,i){if(r&&r.once)return uE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)lE(t,e[s],n,r,i);return null}return n=Em(n),t&&t[xl]?t.N(e,n,Il(r)?!!r.capture:!!r,i):aE(t,e,n,!1,r,i)}function aE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Il(i)?!!i.capture:!!i,l=wm(t);if(l||(t[vm]=l=new Dc(t)),n=l.add(e,n,r,o,s),n.proxy)return n;if(r=OA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)AA||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(hE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function OA(){function t(n){return e.call(t.src,t.listener,n)}var e=MA;return t}function uE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)uE(t,e[s],n,r,i);return null}return n=Em(n),t&&t[xl]?t.O(e,n,Il(r)?!!r.capture:!!r,i):aE(t,e,n,!0,r,i)}function cE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)cE(t,e[s],n,r,i);else r=Il(r)?!!r.capture:!!r,n=Em(n),t&&t[xl]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Tf(s,n,r,i),-1<n&&(Rc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=wm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Tf(e,n,r,i)),(n=-1<t?e[t]:null)&&_m(n))}function _m(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[xl])Cf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(hE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=wm(e))?(Cf(n,t),n.h==0&&(n.src=null,e[vm]=null)):Rc(t)}}}function hE(t){return t in Zh?Zh[t]:Zh[t]="on"+t}function MA(t,e){if(t.ca)t=!0;else{e=new nl(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&_m(t),t=n.call(r,e)}return t}function wm(t){return t=t[vm],t instanceof Dc?t:null}var ed="__closure_events_fn_"+(1e9*Math.random()>>>0);function Em(t){return typeof t=="function"?t:(t[ed]||(t[ed]=function(e){return t.handleEvent(e)}),t[ed])}function ot(){Vr.call(this),this.i=new Dc(this),this.P=this,this.I=null}St(ot,Vr);ot.prototype[xl]=!0;ot.prototype.removeEventListener=function(t,e,n,r){cE(this,t,e,n,r)};function vt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Nt(e,t);else if(e instanceof Nt)e.target=e.target||t;else{var i=e;e=new Nt(r,t),rE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ma(o,r,!0,e)&&i}if(o=e.g=t,i=ma(o,r,!0,e)&&i,i=ma(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ma(o,r,!1,e)&&i}ot.prototype.M=function(){if(ot.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Rc(n[r]);delete t.g[e],t.h--}}this.I=null};ot.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ot.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ma(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var l=o.listener,a=o.ia||o.src;o.fa&&Cf(t.i,o),i=l.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var Sm=Q.JSON.stringify;function $A(){var t=fE;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class bA{constructor(){this.h=this.g=null}add(e,n){const r=dE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var dE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new LA,t=>t.reset());class LA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function FA(t){Q.setTimeout(()=>{throw t},0)}function Cm(t,e){kf||VA(),If||(kf(),If=!0),fE.add(t,e)}var kf;function VA(){var t=Q.Promise.resolve(void 0);kf=function(){t.then(UA)}}var If=!1,fE=new bA;function UA(){for(var t;t=$A();){try{t.h.call(t.g)}catch(n){FA(n)}var e=dE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}If=!1}function Pc(t,e){ot.call(this),this.h=t||1,this.g=e||Q,this.j=yt(this.kb,this),this.l=Date.now()}St(Pc,ot);L=Pc.prototype;L.da=!1;L.S=null;L.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),vt(this,"tick"),this.da&&(Tm(this),this.start()))}};L.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Tm(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}L.M=function(){Pc.Z.M.call(this),Tm(this),delete this.g};function km(t,e,n){if(typeof t=="function")n&&(t=yt(t,n));else if(t&&typeof t.handleEvent=="function")t=yt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function pE(t){t.g=km(()=>{t.g=null,t.i&&(t.i=!1,pE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class zA extends Vr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:pE(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rl(t){Vr.call(this),this.h=t,this.g={}}St(rl,Vr);var Dv=[];function mE(t,e,n,r){Array.isArray(n)||(n&&(Dv[0]=n.toString()),n=Dv);for(var i=0;i<n.length;i++){var s=lE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function gE(t){gm(t.g,function(e,n){this.g.hasOwnProperty(n)&&_m(e)},t),t.g={}}rl.prototype.M=function(){rl.Z.M.call(this),gE(this)};rl.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Oc(){this.g=!0}Oc.prototype.Aa=function(){this.g=!1};function jA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",l=s.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function BA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Yi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+WA(t,n)+(r?" "+r:"")})}function HA(t,e){t.info(function(){return"TIMEOUT: "+e})}Oc.prototype.info=function(){};function WA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Sm(n)}catch{return e}}var ki={},Pv=null;function Mc(){return Pv=Pv||new ot}ki.Ma="serverreachability";function yE(t){Nt.call(this,ki.Ma,t)}St(yE,Nt);function il(t){const e=Mc();vt(e,new yE(e))}ki.STAT_EVENT="statevent";function vE(t,e){Nt.call(this,ki.STAT_EVENT,t),this.stat=e}St(vE,Nt);function Mt(t){const e=Mc();vt(e,new vE(e,t))}ki.Na="timingevent";function _E(t,e){Nt.call(this,ki.Na,t),this.size=e}St(_E,Nt);function Nl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var $c={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},wE={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Im(){}Im.prototype.h=null;function Ov(t){return t.h||(t.h=t.i())}function EE(){}var Al={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function xm(){Nt.call(this,"d")}St(xm,Nt);function Nm(){Nt.call(this,"c")}St(Nm,Nt);var xf;function bc(){}St(bc,Im);bc.prototype.g=function(){return new XMLHttpRequest};bc.prototype.i=function(){return{}};xf=new bc;function Rl(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new rl(this),this.P=GA,t=Ef?125:void 0,this.W=new Pc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new SE}function SE(){this.i=null,this.g="",this.h=!1}var GA=45e3,Nf={},yu={};L=Rl.prototype;L.setTimeout=function(t){this.P=t};function Af(t,e,n){t.K=1,t.v=Fc(Zn(e)),t.s=n,t.U=!0,CE(t,null)}function CE(t,e){t.F=Date.now(),Dl(t),t.A=Zn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),RE(n.h,"t",r),t.C=0,n=t.l.H,t.h=new SE,t.g=YE(t.l,n?e:null,!t.s),0<t.O&&(t.L=new zA(yt(t.Ia,t,t.g),t.O)),mE(t.V,t.g,"readystatechange",t.gb),e=t.H?nE(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),il(),jA(t.j,t.u,t.A,t.m,t.X,t.s)}L.gb=function(t){t=t.target;const e=this.L;e&&Hn(t)==3?e.l():this.Ia(t)};L.Ia=function(t){try{if(t==this.g)e:{const c=Hn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Ef||this.g&&(this.h.h||this.g.ga()||Lv(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?il(3):il(2)),Lc(this);var n=this.g.ba();this.N=n;t:if(TE(this)){var r=Lv(this.g);t="";var i=r.length,s=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yr(this),ko(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,BA(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!mu(l)){var u=l;break t}}u=null}if(n=u)Yi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Rf(this,n);else{this.i=!1,this.o=3,Mt(12),Yr(this),ko(this);break e}}this.U?(kE(this,c,o),Ef&&this.i&&c==3&&(mE(this.V,this.W,"tick",this.fb),this.W.start())):(Yi(this.j,this.m,o,null),Rf(this,o)),c==4&&Yr(this),this.i&&!this.I&&(c==4?GE(this.l,this):(this.i=!1,Dl(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Mt(12)):(this.o=0,Mt(13)),Yr(this),ko(this)}}}catch{}finally{}};function TE(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function kE(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=KA(t,n),i==yu){e==4&&(t.o=4,Mt(14),r=!1),Yi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Nf){t.o=4,Mt(15),Yi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Yi(t.j,t.m,i,null),Rf(t,i);TE(t)&&i!=yu&&i!=Nf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Mt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Lm(e),e.L=!0,Mt(11))):(Yi(t.j,t.m,n,"[Invalid Chunked Response]"),Yr(t),ko(t))}L.fb=function(){if(this.g){var t=Hn(this.g),e=this.g.ga();this.C<e.length&&(Lc(this),kE(this,t,e),this.i&&t!=4&&Dl(this))}};function KA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?yu:(n=Number(e.substring(n,r)),isNaN(n)?Nf:(r+=1,r+n>e.length?yu:(e=e.substr(r,n),t.C=r+n,e)))}L.cancel=function(){this.I=!0,Yr(this)};function Dl(t){t.Y=Date.now()+t.P,IE(t,t.P)}function IE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Nl(yt(t.eb,t),e)}function Lc(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}L.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(HA(this.j,this.A),this.K!=2&&(il(),Mt(17)),Yr(this),this.o=2,ko(this)):IE(this,this.Y-t)};function ko(t){t.l.G==0||t.I||GE(t.l,t)}function Yr(t){Lc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Tm(t.W),gE(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Rf(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Df(n.i,t))){if(n.I=t.N,!t.J&&Df(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Eu(n),zc(n);else break e;bm(n),Mt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Nl(yt(n.ab,n),6e3));if(1>=OE(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Xr(n,11)}else if((t.J||n.g==t)&&Eu(n),!mu(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(Pt(g,"spdy")||Pt(g,"quic")||Pt(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Dm(s,s.h),s.h=null))}if(r.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.sa=v,Ae(r.F,r.D,v))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=QE(r,r.H?r.la:null,r.W),o.J){ME(r.i,o);var l=o,a=r.K;a&&l.setTimeout(a),l.B&&(Lc(l),Dl(l)),r.g=o}else HE(r);0<n.l.length&&jc(n)}else u[0]!="stop"&&u[0]!="close"||Xr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Xr(n,7):$m(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}il(4)}catch{}}function qA(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(wf(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Am(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(wf(t)||typeof t=="string")tE(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(wf(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=qA(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Fs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Fs)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}L=Fs.prototype;L.R=function(){Rm(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};L.T=function(){return Rm(this),this.g.concat()};function Rm(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];fi(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],fi(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}L.get=function(t,e){return fi(this.h,t)?this.h[t]:e};L.set=function(t,e){fi(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};L.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function fi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var xE=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function QA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function pi(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof pi){this.g=e!==void 0?e:t.g,vu(this,t.j),this.s=t.s,_u(this,t.i),wu(this,t.m),this.l=t.l,e=t.h;var n=new sl;n.i=e.i,e.g&&(n.g=new Fs(e.g),n.h=e.h),Mv(this,n),this.o=t.o}else t&&(n=String(t).match(xE))?(this.g=!!e,vu(this,n[1]||"",!0),this.s=Io(n[2]||""),_u(this,n[3]||"",!0),wu(this,n[4]),this.l=Io(n[5]||"",!0),Mv(this,n[6]||"",!0),this.o=Io(n[7]||"")):(this.g=!!e,this.h=new sl(null,this.g))}pi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ho(e,$v,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ho(e,$v,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(ho(n,n.charAt(0)=="/"?eR:ZA,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ho(n,nR)),t.join("")};function Zn(t){return new pi(t)}function vu(t,e,n){t.j=n?Io(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _u(t,e,n){t.i=n?Io(e,!0):e}function wu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Mv(t,e,n){e instanceof sl?(t.h=e,rR(t.h,t.g)):(n||(e=ho(e,tR)),t.h=new sl(e,t.g))}function Ae(t,e,n){t.h.set(e,n)}function Fc(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function YA(t){return t instanceof pi?Zn(t):new pi(t,void 0)}function XA(t,e,n,r){var i=new pi(null,void 0);return t&&vu(i,t),e&&_u(i,e),n&&wu(i,n),r&&(i.l=r),i}function Io(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ho(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,JA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function JA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var $v=/[#\/\?@]/g,ZA=/[#\?:]/g,eR=/[#\?]/g,tR=/[#\?@]/g,nR=/#/g;function sl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ur(t){t.g||(t.g=new Fs,t.h=0,t.i&&QA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=sl.prototype;L.add=function(t,e){Ur(this),this.i=null,t=Vs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function NE(t,e){Ur(t),e=Vs(t,e),fi(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,fi(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Rm(t)))}function AE(t,e){return Ur(t),e=Vs(t,e),fi(t.g.h,e)}L.forEach=function(t,e){Ur(this),this.g.forEach(function(n,r){tE(n,function(i){t.call(e,i,r,this)},this)},this)};L.T=function(){Ur(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};L.R=function(t){Ur(this);var e=[];if(typeof t=="string")AE(this,t)&&(e=kv(e,this.g.get(Vs(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=kv(e,t[n])}return e};L.set=function(t,e){return Ur(this),this.i=null,t=Vs(this,t),AE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function RE(t,e,n){NE(t,e),0<n.length&&(t.i=null,t.g.set(Vs(t,e),mm(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Vs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function rR(t,e){e&&!t.j&&(Ur(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(NE(this,r),RE(this,i,n))},t)),t.j=e}var iR=class{constructor(t,e){this.h=t,this.g=e}};function DE(t){this.l=t||sR,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ea&&Q.g.Ea()&&Q.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sR=10;function PE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function OE(t){return t.h?1:t.g?t.g.size:0}function Df(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Dm(t,e){t.g?t.g.add(e):t.h=e}function ME(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}DE.prototype.cancel=function(){if(this.i=$E(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function $E(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return mm(t.i)}function Pm(){}Pm.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};Pm.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function oR(){this.g=new Pm}function lR(t,e,n){const r=n||"";try{Am(t,function(i,s){let o=i;Il(i)&&(o=Sm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function aR(t,e){const n=new Oc;if(Q.Image){const r=new Image;r.onload=pa(ga,n,r,"TestLoadImage: loaded",!0,e),r.onerror=pa(ga,n,r,"TestLoadImage: error",!1,e),r.onabort=pa(ga,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=pa(ga,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ga(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Pl(t){this.l=t.$b||null,this.j=t.ib||!1}St(Pl,Im);Pl.prototype.g=function(){return new Vc(this.l,this.j)};Pl.prototype.i=function(t){return function(){return t}}({});function Vc(t,e){ot.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Om,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}St(Vc,ot);var Om=0;L=Vc.prototype;L.open=function(t,e){if(this.readyState!=Om)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ol(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ol(this)),this.readyState=Om};L.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ol(this)),this.g&&(this.readyState=3,ol(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;bE(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function bE(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}L.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ol(this):ol(this),this.readyState==3&&bE(this)}};L.Ua=function(t){this.g&&(this.response=this.responseText=t,Ol(this))};L.Ta=function(t){this.g&&(this.response=t,Ol(this))};L.ha=function(){this.g&&Ol(this)};function Ol(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ol(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ol(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var uR=Q.JSON.parse;function We(t){ot.call(this),this.headers=new Fs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=LE,this.K=this.L=!1}St(We,ot);var LE="",cR=/^https?$/i,hR=["POST","PUT"];L=We.prototype;L.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():xf.g(),this.C=this.u?Ov(this.u):Ov(xf),this.g.onreadystatechange=yt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){bv(this,s);return}t=n||"";const i=new Fs(this.headers);r&&Am(r,function(s,o){i.set(o,s)}),r=SA(i.T()),n=Q.FormData&&t instanceof Q.FormData,!(0<=eE(hR,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{UE(this),0<this.B&&((this.K=dR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=yt(this.pa,this)):this.A=km(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){bv(this,s)}};function dR(t){return _s&&xA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function fR(t){return t.toLowerCase()=="content-type"}L.pa=function(){typeof pm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,vt(this,"timeout"),this.abort(8))};function bv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,FE(t),Uc(t)}function FE(t){t.D||(t.D=!0,vt(t,"complete"),vt(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,vt(this,"complete"),vt(this,"abort"),Uc(this))};L.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Uc(this,!0)),We.Z.M.call(this)};L.Fa=function(){this.s||(this.F||this.v||this.l?VE(this):this.cb())};L.cb=function(){VE(this)};function VE(t){if(t.h&&typeof pm<"u"&&(!t.C[1]||Hn(t)!=4||t.ba()!=2)){if(t.v&&Hn(t)==4)km(t.Fa,0,t);else if(vt(t,"readystatechange"),Hn(t)==4){t.h=!1;try{const l=t.ba();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=l===0){var i=String(t.H).match(xE)[1]||null;if(!i&&Q.self&&Q.self.location){var s=Q.self.location.protocol;i=s.substr(0,s.length-1)}r=!cR.test(i?i.toLowerCase():"")}n=r}if(n)vt(t,"complete"),vt(t,"success");else{t.m=6;try{var o=2<Hn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",FE(t)}}finally{Uc(t)}}}}function Uc(t,e){if(t.g){UE(t);const n=t.g,r=t.C[0]?pu:null;t.g=null,t.C=null,e||vt(t,"ready");try{n.onreadystatechange=r}catch{}}}function UE(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function Hn(t){return t.g?t.g.readyState:0}L.ba=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}};L.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),uR(e)}};function Lv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case LE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Da=function(){return this.m};L.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function pR(t){let e="";return gm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Mm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=pR(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function no(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function zE(t){this.za=0,this.l=[],this.h=new Oc,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=no("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=no("baseRetryDelayMs",5e3,t),this.$a=no("retryDelaySeedMs",1e4,t),this.Ya=no("forwardChannelMaxRetries",2,t),this.ra=no("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new DE(t&&t.concurrentRequestLimit),this.Ca=new oR,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}L=zE.prototype;L.ma=8;L.G=1;function $m(t){if(jE(t),t.G==3){var e=t.V++,n=Zn(t.F);Ae(n,"SID",t.J),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),Ml(t,n),e=new Rl(t,t.h,e,void 0),e.K=2,e.v=Fc(Zn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=YE(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Dl(e)}qE(t)}L.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function zc(t){t.g&&(Lm(t),t.g.cancel(),t.g=null)}function jE(t){zc(t),t.u&&(Q.clearTimeout(t.u),t.u=null),Eu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function td(t,e){t.l.push(new iR(t.Za++,e)),t.G==3&&jc(t)}function jc(t){PE(t.i)||t.m||(t.m=!0,Cm(t.Ha,t),t.C=0)}function mR(t,e){return OE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Nl(yt(t.Ha,t,e),KE(t,t.C)),t.C++,!0)}L.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Rl(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=nE(s),rE(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=BE(this,i,e),n=Zn(this.F),Ae(n,"RID",t),Ae(n,"CVER",22),this.D&&Ae(n,"X-HTTP-Session-Id",this.D),Ml(this,n),this.o&&s&&Mm(n,this.o,s),Dm(this.i,i),this.Ra&&Ae(n,"TYPE","init"),this.ja?(Ae(n,"$req",e),Ae(n,"SID","null"),i.$=!0,Af(i,n,null)):Af(i,n,e),this.G=2}}else this.G==3&&(t?Fv(this,t):this.l.length==0||PE(this.i)||Fv(this))};function Fv(t,e){var n;e?n=e.m:n=t.V++;const r=Zn(t.F);Ae(r,"SID",t.J),Ae(r,"RID",n),Ae(r,"AID",t.U),Ml(t,r),t.o&&t.s&&Mm(r,t.o,t.s),n=new Rl(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=BE(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Dm(t.i,n),Af(n,r,e)}function Ml(t,e){t.j&&Am({},function(n,r){Ae(e,r,n)})}function BE(t,e,n){n=Math.min(t.l.length,n);var r=t.j?yt(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let l=!0;for(let a=0;a<n;a++){let u=i[a].h;const c=i[a].g;if(u-=s,0>u)s=Math.max(0,i[a].h-100),l=!1;else try{lR(c,o,"req"+u+"_")}catch{r&&r(c)}}if(l){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function HE(t){t.g||t.u||(t.Y=1,Cm(t.Ga,t),t.A=0)}function bm(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Nl(yt(t.Ga,t),KE(t,t.A)),t.A++,!0)}L.Ga=function(){if(this.u=null,WE(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Nl(yt(this.bb,this),t)}};L.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Mt(10),zc(this),WE(this))};function Lm(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function WE(t){t.g=new Rl(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Zn(t.oa);Ae(e,"RID","rpc"),Ae(e,"SID",t.J),Ae(e,"CI",t.N?"0":"1"),Ae(e,"AID",t.U),Ml(t,e),Ae(e,"TYPE","xmlhttp"),t.o&&t.s&&Mm(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Fc(Zn(e)),n.s=null,n.U=!0,CE(n,t)}L.ab=function(){this.v!=null&&(this.v=null,zc(this),bm(this),Mt(19))};function Eu(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function GE(t,e){var n=null;if(t.g==e){Eu(t),Lm(t),t.g=null;var r=2}else if(Df(t.i,e))n=e.D,ME(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Mc(),vt(r,new _E(r,n)),jc(t)}else HE(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&mR(t,e)||r==2&&bm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Xr(t,5);break;case 4:Xr(t,10);break;case 3:Xr(t,6);break;default:Xr(t,2)}}}function KE(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Xr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=yt(t.jb,t);n||(n=new pi("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||vu(n,"https"),Fc(n)),aR(n.toString(),r)}else Mt(2);t.G=0,t.j&&t.j.va(e),qE(t),jE(t)}L.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Mt(2)):(this.h.info("Failed to ping google.com"),Mt(1))};function qE(t){t.G=0,t.I=-1,t.j&&(($E(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,mm(t.l),t.l.length=0),t.j.ua())}function QE(t,e,n){let r=YA(n);if(r.i!="")e&&_u(r,e+"."+r.i),wu(r,r.m);else{const i=Q.location;r=XA(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&gm(t.aa,function(i,s){Ae(r,s,i)}),e=t.D,n=t.sa,e&&n&&Ae(r,e,n),Ae(r,"VER",t.ma),Ml(t,r),r}function YE(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new We(new Pl({ib:!0})):new We(t.qa),e.L=t.H,e}function XE(){}L=XE.prototype;L.xa=function(){};L.wa=function(){};L.va=function(){};L.ua=function(){};L.Oa=function(){};function Su(){if(_s&&!(10<=Number(NA)))throw Error("Environmental error: no available transport.")}Su.prototype.g=function(t,e){return new nn(t,e)};function nn(t,e){ot.call(this),this.g=new zE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!mu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!mu(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Us(this)}St(nn,ot);nn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Cm(yt(t.hb,t,e))),Mt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=QE(t,null,t.W),jc(t)};nn.prototype.close=function(){$m(this.g)};nn.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,td(this.g,e)}else this.v?(e={},e.__data__=Sm(t),td(this.g,e)):td(this.g,t)};nn.prototype.M=function(){this.g.j=null,delete this.j,$m(this.g),delete this.g,nn.Z.M.call(this)};function JE(t){xm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}St(JE,xm);function ZE(){Nm.call(this),this.status=1}St(ZE,Nm);function Us(t){this.g=t}St(Us,XE);Us.prototype.xa=function(){vt(this.g,"a")};Us.prototype.wa=function(t){vt(this.g,new JE(t))};Us.prototype.va=function(t){vt(this.g,new ZE)};Us.prototype.ua=function(){vt(this.g,"b")};Su.prototype.createWebChannel=Su.prototype.g;nn.prototype.send=nn.prototype.u;nn.prototype.open=nn.prototype.m;nn.prototype.close=nn.prototype.close;$c.NO_ERROR=0;$c.TIMEOUT=8;$c.HTTP_ERROR=6;wE.COMPLETE="complete";EE.EventType=Al;Al.OPEN="a";Al.CLOSE="b";Al.ERROR="c";Al.MESSAGE="d";ot.prototype.listen=ot.prototype.N;We.prototype.listenOnce=We.prototype.O;We.prototype.getLastError=We.prototype.La;We.prototype.getLastErrorCode=We.prototype.Da;We.prototype.getStatus=We.prototype.ba;We.prototype.getResponseJson=We.prototype.Qa;We.prototype.getResponseText=We.prototype.ga;We.prototype.send=We.prototype.ea;var gR=function(){return new Su},yR=function(){return Mc()},nd=$c,vR=wE,_R=ki,Vv={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},wR=Pl,ya=EE,ER=We;const Uv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zs="9.8.4";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new hm("@firebase/firestore");function zv(){return mi.logLevel}function U(t,...e){if(mi.logLevel<=ce.DEBUG){const n=e.map(Fm);mi.debug(`Firestore (${zs}): ${t}`,...n)}}function Rr(t,...e){if(mi.logLevel<=ce.ERROR){const n=e.map(Fm);mi.error(`Firestore (${zs}): ${t}`,...n)}}function jv(t,...e){if(mi.logLevel<=ce.WARN){const n=e.map(Fm);mi.warn(`Firestore (${zs}): ${t}`,...n)}}function Fm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: `+t;throw Rr(e),new Error(e)}function ke(t,e){t||X()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends xc{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ut.UNAUTHENTICATED))}shutdown(){}}class TR{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let s=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Tr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=s;e.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ke(typeof r.accessToken=="string"),new SR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new Ut(e)}}class kR{constructor(e,n,r){this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class IR{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new kR(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NR{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.p=n.token,new xR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=AR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function ws(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Ye(0,0))}static max(){return new te(new Ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ll.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ll?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends ll{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const RR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends ll{construct(e,n,r){return new xt(e,n,r)}static isValidIdentifier(e){return RR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const a=e[i+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new W(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=a,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(n)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Re.fromString(e))}static fromName(e){return new j(Re.fromString(e).popFirst(5))}static empty(){return new j(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Re(e.slice()))}}function DR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new Dr(i,j.empty(),e)}function PR(t){return new Dr(t.readTime,t.key,-1)}class Dr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dr(te.min(),j.empty(),-1)}static max(){return new Dr(te.max(),j.empty(),-1)}}function OR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $R{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $l(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==MR)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},a=>r(a))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let a=0;a<s;a++){const u=a;n(e[u]).next(c=>{o[u]=c,++l,l===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function bl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ii(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vm.ot=-1;class Je{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new va(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new va(this.root,e,this.comparator,!1)}getReverseIterator(){return new va(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new va(this.root,e,this.comparator,!0)}}class va{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ft.RED,this.left=i!=null?i:ft.EMPTY,this.right=s!=null?s:ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ft(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ft.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ft(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hv(this.data.getIterator())}getIteratorFrom(e){return new Hv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class Hv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new dn([])}unionWith(e){let n=new Xe(xt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new dn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ws(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new wt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const bR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(t){if(ke(!!t),typeof t=="string"){let e=0;const n=bR.exec(t);if(ke(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Be(t.seconds),nanos:Be(t.nanos)}}function Be(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Es(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function rS(t){const e=t.mapValue.fields.__previous_value__;return nS(e)?rS(e):e}function al(t){const e=Pr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n,r,i,s,o,l,a){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.useFetchStreams=a}}class Ss{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ss("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ss&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t){return t==null}function Cu(t){return t===0&&1/t==-1/0}function FR(t){return typeof t=="number"&&Number.isInteger(t)&&!Cu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nS(t)?4:VR(t)?9007199254740991:10:X()}function Ln(t,e){if(t===e)return!0;const n=gi(t);if(n!==gi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return al(t).isEqual(al(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Pr(r.timestampValue),o=Pr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Es(r.bytesValue).isEqual(Es(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Be(r.geoPointValue.latitude)===Be(i.geoPointValue.latitude)&&Be(r.geoPointValue.longitude)===Be(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Be(r.integerValue)===Be(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Be(r.doubleValue),o=Be(i.doubleValue);return s===o?Cu(s)===Cu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ws(t.arrayValue.values||[],e.arrayValue.values||[],Ln);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Bv(s)!==Bv(o))return!1;for(const l in s)if(s.hasOwnProperty(l)&&(o[l]===void 0||!Ln(s[l],o[l])))return!1;return!0}(t,e);default:return X()}}function ul(t,e){return(t.values||[]).find(n=>Ln(n,e))!==void 0}function Cs(t,e){if(t===e)return 0;const n=gi(t),r=gi(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Be(i.integerValue||i.doubleValue),l=Be(s.integerValue||s.doubleValue);return o<l?-1:o>l?1:o===l?0:isNaN(o)?isNaN(l)?0:-1:1}(t,e);case 3:return Wv(t.timestampValue,e.timestampValue);case 4:return Wv(al(t),al(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Es(i),l=Es(s);return o.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),l=s.split("/");for(let a=0;a<o.length&&a<l.length;a++){const u=pe(o[a],l[a]);if(u!==0)return u}return pe(o.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=pe(Be(i.latitude),Be(s.latitude));return o!==0?o:pe(Be(i.longitude),Be(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],l=s.values||[];for(let a=0;a<o.length&&a<l.length;++a){const u=Cs(o[a],l[a]);if(u)return u}return pe(o.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===_a.mapValue&&s===_a.mapValue)return 0;if(i===_a.mapValue)return 1;if(s===_a.mapValue)return-1;const o=i.fields||{},l=Object.keys(o),a=s.fields||{},u=Object.keys(a);l.sort(),u.sort();for(let c=0;c<l.length&&c<u.length;++c){const h=pe(l[c],u[c]);if(h!==0)return h;const d=Cs(o[l[c]],a[u[c]]);if(d!==0)return d}return pe(l.length,u.length)}(t.mapValue,e.mapValue);default:throw X()}}function Wv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=Pr(t),r=Pr(e),i=pe(n.seconds,r.seconds);return i!==0?i:pe(n.nanos,r.nanos)}function ss(t){return Pf(t)}function Pf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Pr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Es(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Pf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const l of i)o?o=!1:s+=",",s+=`${l}:${Pf(r.fields[l])}`;return s+"}"}(t.mapValue):X();var e,n}function Of(t){return!!t&&"integerValue"in t}function Um(t){return!!t&&"arrayValue"in t}function Gv(t){return!!t&&"nullValue"in t}function Kv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ba(t){return!!t&&"mapValue"in t}function xo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ii(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=xo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=xo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ba(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=xo(n)}setAll(e){let n=xt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const a=this.getFieldsMap(n);this.applyChanges(a,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=xo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ba(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ba(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ii(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new jt(xo(this.value))}}function iS(t){const e=[];return Ii(t.fields,(n,r)=>{const i=new xt([n]);if(ba(r)){const s=iS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new dn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new pt(e,0,te.min(),te.min(),jt.empty(),0)}static newFoundDocument(e,n,r){return new pt(e,1,n,te.min(),r,0)}static newNoDocument(e,n){return new pt(e,2,n,te.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new pt(e,3,n,te.min(),jt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ut=null}}function qv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new UR(t,e,n,r,i,s,o)}function zm(t){const e=J(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+ss(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Bc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ss(r)).join(",")),e.ut=n}return e.ut}function zR(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ss(r.value)}`;var r}).join(", ")}]`),Bc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ss(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ss(n)).join(",")),`Target(${e})`}function jm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!QR(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Ln(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Yv(t.startAt,e.startAt)&&Yv(t.endAt,e.endAt)}function Mf(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Ht extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new jR(e,n,r):n==="array-contains"?new WR(e,r):n==="in"?new GR(e,r):n==="not-in"?new KR(e,r):n==="array-contains-any"?new qR(e,r):new Ht(e,n,r)}static ct(e,n,r){return n==="in"?new BR(e,r):new HR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(Cs(n,this.value)):n!==null&&gi(this.value)===gi(n)&&this.at(Cs(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class jR extends Ht{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.at(n)}}class BR extends Ht{constructor(e,n){super(e,"in",n),this.keys=sS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class HR extends Ht{constructor(e,n){super(e,"not-in",n),this.keys=sS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class WR extends Ht{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Um(n)&&ul(n.arrayValue,this.value)}}class GR extends Ht{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ul(this.value.arrayValue,n)}}class KR extends Ht{constructor(e,n){super(e,"not-in",n)}matches(e){if(ul(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ul(this.value.arrayValue,n)}}class qR extends Ht{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Um(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ul(this.value.arrayValue,r))}}class Tu{constructor(e,n){this.position=e,this.inclusive=n}}class No{constructor(e,n="asc"){this.field=e,this.dir=n}}function QR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Qv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Cs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,a=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function YR(t,e,n,r,i,s,o,l){return new Hc(t,e,n,r,i,s,o,l)}function Bm(t){return new Hc(t)}function XR(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function JR(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ZR(t){for(const e of t.filters)if(e.ht())return e.field;return null}function eD(t){return t.collectionGroup!==null}function cl(t){const e=J(t);if(e.lt===null){e.lt=[];const n=ZR(e),r=JR(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new No(n)),e.lt.push(new No(xt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new No(xt.keyField(),s))}}}return e.lt}function yi(t){const e=J(t);if(!e.ft)if(e.limitType==="F")e.ft=qv(e.path,e.collectionGroup,cl(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of cl(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new No(s.field,o))}const r=e.endAt?new Tu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Tu(e.startAt.position,e.startAt.inclusive):null;e.ft=qv(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function tD(t,e,n){return new Hc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wc(t,e){return jm(yi(t),yi(e))&&t.limitType===e.limitType}function oS(t){return`${zm(yi(t))}|lt:${t.limitType}`}function $f(t){return`Query(target=${zR(yi(t))}; limitType=${t.limitType})`}function Hm(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):j.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const l=Qv(i,s,o);return i.inclusive?l<=0:l<0}(n.startAt,cl(n),r)||n.endAt&&!function(i,s,o){const l=Qv(i,s,o);return i.inclusive?l>=0:l>0}(n.endAt,cl(n),r))}(t,e)}function nD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lS(t){return(e,n)=>{let r=!1;for(const i of cl(t)){const s=rD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rD(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,s,o){const l=s.data.field(i),a=o.data.field(i);return l!==null&&a!==null?Cs(l,a):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cu(e)?"-0":e}}function uS(t){return{integerValue:""+t}}function iD(t,e){return FR(e)?uS(e):aS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(){this._=void 0}}function sD(t,e,n){return t instanceof ku?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof hl?hS(t,e):t instanceof dl?dS(t,e):function(r,i){const s=cS(r,i),o=Xv(s)+Xv(r._t);return Of(s)&&Of(r._t)?uS(o):aS(r.wt,o)}(t,e)}function oD(t,e,n){return t instanceof hl?hS(t,e):t instanceof dl?dS(t,e):n}function cS(t,e){return t instanceof Iu?Of(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ku extends Gc{}class hl extends Gc{constructor(e){super(),this.elements=e}}function hS(t,e){const n=fS(e);for(const r of t.elements)n.some(i=>Ln(i,r))||n.push(r);return{arrayValue:{values:n}}}class dl extends Gc{constructor(e){super(),this.elements=e}}function dS(t,e){let n=fS(e);for(const r of t.elements)n=n.filter(i=>!Ln(i,r));return{arrayValue:{values:n}}}class Iu extends Gc{constructor(e,n){super(),this.wt=e,this._t=n}}function Xv(t){return Be(t.integerValue||t.doubleValue)}function fS(t){return Um(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lD(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof hl&&r instanceof hl||n instanceof dl&&r instanceof dl?ws(n.elements,r.elements,Ln):n instanceof Iu&&r instanceof Iu?Ln(n._t,r._t):n instanceof ku&&r instanceof ku}(t.transform,e.transform)}class aD{constructor(e,n){this.version=e,this.transformResults=n}}class bn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function La(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Kc{}function pS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new gS(t.key,bn.none()):new Ll(t.key,t.data,bn.none());{const n=t.data,r=jt.empty();let i=new Xe(xt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zr(t.key,r,new dn(i.toArray()),bn.none())}}function uD(t,e,n){t instanceof Ll?function(r,i,s){const o=r.value.clone(),l=Zv(r.fieldTransforms,i,s.transformResults);o.setAll(l),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(r,i,s){if(!La(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Zv(r.fieldTransforms,i,s.transformResults),l=i.data;l.setAll(mS(r)),l.setAll(o),i.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ao(t,e,n,r){return t instanceof Ll?function(i,s,o,l){if(!La(i.precondition,s))return o;const a=i.value.clone(),u=e0(i.fieldTransforms,l,s);return a.setAll(u),s.convertToFoundDocument(s.version,a).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(i,s,o,l){if(!La(i.precondition,s))return o;const a=e0(i.fieldTransforms,l,s),u=s.data;return u.setAll(mS(i)),u.setAll(a),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return La(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function cD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=cS(r.transform,i||null);s!=null&&(n===null&&(n=jt.empty()),n.set(r.field,s))}return n||null}function Jv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ws(n,r,(i,s)=>lD(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ll extends Kc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zr extends Kc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function mS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zv(t,e,n){const r=new Map;ke(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,oD(o,l,n[i]))}return r}function e0(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,sD(s,o,e))}return r}class gS extends Kc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hD extends Kc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dD{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,le;function fD(t){switch(t){default:return X();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function yS(t){if(t===void 0)return Rr("GRPC error has no .code"),N.UNKNOWN;switch(t){case je.OK:return N.OK;case je.CANCELLED:return N.CANCELLED;case je.UNKNOWN:return N.UNKNOWN;case je.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case je.INTERNAL:return N.INTERNAL;case je.UNAVAILABLE:return N.UNAVAILABLE;case je.UNAUTHENTICATED:return N.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case je.NOT_FOUND:return N.NOT_FOUND;case je.ALREADY_EXISTS:return N.ALREADY_EXISTS;case je.PERMISSION_DENIED:return N.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case je.ABORTED:return N.ABORTED;case je.OUT_OF_RANGE:return N.OUT_OF_RANGE;case je.UNIMPLEMENTED:return N.UNIMPLEMENTED;case je.DATA_LOSS:return N.DATA_LOSS;default:return X()}}(le=je||(je={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ii(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return tS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=new Je(j.comparator);function er(){return pD}const vS=new Je(j.comparator);function fo(...t){let e=vS;for(const n of t)e=e.insert(n.key,n);return e}function _S(t){let e=vS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Jr(){return Ro()}function wS(){return Ro()}function Ro(){return new js(t=>t.toString(),(t,e)=>t.isEqual(e))}const mD=new Je(j.comparator),gD=new Xe(j.comparator);function oe(...t){let e=gD;for(const n of t)e=e.add(n);return e}const yD=new Xe(pe);function ES(){return yD}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Fl.createSynthesizedTargetChangeForCurrentChange(e,n)),new qc(te.min(),r,ES(),er(),oe())}}class Fl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Fl(wt.EMPTY_BYTE_STRING,n,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class SS{constructor(e,n){this.targetId=e,this.It=n}}class CS{constructor(e,n,r=wt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class t0{constructor(){this.Tt=0,this.Et=r0(),this.At=wt.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=oe(),n=oe(),r=oe();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new Fl(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=r0()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class vD{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=er(),this.Bt=n0(),this.Lt=new Xe(pe)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Ot(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(Mf(s))if(r===0){const o=new j(s.path);this.Kt(n,o,pt.newNoDocument(o,te.min()))}else ke(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const l=this.Ht(o);if(l){if(s.current&&Mf(l.target)){const a=new j(l.target.path);this.$t.get(a)!==null||this.Xt(o,a)||this.Kt(o,a,pt.newNoDocument(a,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=oe();this.Bt.forEach((s,o)=>{let l=!0;o.forEachWhile(a=>{const u=this.Ht(a);return!u||u.purpose===2||(l=!1,!1)}),l&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new qc(e,n,this.Lt,this.$t,r);return this.$t=er(),this.Bt=n0(),this.Lt=new Xe(pe),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new t0,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new Xe(pe),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new t0),this.Mt.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Mt.getRemoteKeysForTarget(e).has(n)}}function n0(){return new Je(j.comparator)}function r0(){return new Je(j.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),wD=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class ED{constructor(e,n){this.databaseId=e,this.dt=n}}function xu(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function TS(t,e){return t.dt?e.toBase64():e.toUint8Array()}function SD(t,e){return xu(t,e.toTimestamp())}function Kn(t){return ke(!!t),te.fromTimestamp(function(e){const n=Pr(e);return new Ye(n.seconds,n.nanos)}(t))}function Wm(t,e){return function(n){return new Re(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function kS(t){const e=Re.fromString(t);return ke(NS(e)),e}function bf(t,e){return Wm(t.databaseId,e.path)}function rd(t,e){const n=kS(e);if(n.get(1)!==t.databaseId.projectId)throw new W(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(IS(n))}function Lf(t,e){return Wm(t.databaseId,e)}function CD(t){const e=kS(t);return e.length===4?Re.emptyPath():IS(e)}function Ff(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function IS(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function i0(t,e,n){return{name:bf(t,e),fields:n.value.mapValue.fields}}function TD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(a){return a==="NO_CHANGE"?0:a==="ADD"?1:a==="REMOVE"?2:a==="CURRENT"?3:a==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(a,u){return a.dt?(ke(u===void 0||typeof u=="string"),wt.fromBase64String(u||"")):(ke(u===void 0||u instanceof Uint8Array),wt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(a){const u=a.code===void 0?N.UNKNOWN:yS(a.code);return new W(u,a.message||"")}(o);n=new CS(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=rd(t,r.document.name),s=Kn(r.document.updateTime),o=new jt({mapValue:{fields:r.document.fields}}),l=pt.newFoundDocument(i,s,o),a=r.targetIds||[],u=r.removedTargetIds||[];n=new Fa(a,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=rd(t,r.document),s=r.readTime?Kn(r.readTime):te.min(),o=pt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Fa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=rd(t,r.document),s=r.removedTargetIds||[];n=new Fa([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new dD(i),o=r.targetId;n=new SS(o,s)}}return n}function kD(t,e){let n;if(e instanceof Ll)n={update:i0(t,e.key,e.value)};else if(e instanceof gS)n={delete:bf(t,e.key)};else if(e instanceof zr)n={update:i0(t,e.key,e.data),updateMask:$D(e.fieldMask)};else{if(!(e instanceof hD))return X();n={verify:bf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ku)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof hl)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof dl)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Iu)return{fieldPath:s.field.canonicalString(),increment:o._t};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:SD(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(t,e.precondition)),n}function ID(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Kn(r.updateTime):Kn(i);return s.isEqual(te.min())&&(s=Kn(i)),new aD(s,r.transformResults||[])}(n,e))):[]}function xD(t,e){return{documents:[Lf(t,e.path)]}}function ND(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Lf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Lf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const u=a.map(c=>function(h){if(h.op==="=="){if(Kv(h.value))return{unaryFilter:{field:Pi(h.field),op:"IS_NAN"}};if(Gv(h.value))return{unaryFilter:{field:Pi(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Kv(h.value))return{unaryFilter:{field:Pi(h.field),op:"IS_NOT_NAN"}};if(Gv(h.value))return{unaryFilter:{field:Pi(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pi(h.field),op:PD(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(u=>function(c){return{field:Pi(c.field),direction:DD(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,u){return a.dt||Bc(u)?u:{value:u}}(t,e.limit);var l;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(l=e.startAt).inclusive,values:l.position}),e.endAt&&(n.structuredQuery.endAt=function(a){return{before:!a.inclusive,values:a.position}}(e.endAt)),n}function AD(t){let e=CD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ke(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=xS(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new No(Xi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let l=null;n.limit&&(l=function(c){let h;return h=typeof c=="object"?c.value:c,Bc(h)?null:h}(n.limit));let a=null;n.startAt&&(a=function(c){const h=!!c.before,d=c.values||[];return new Tu(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Tu(d,h)}(n.endAt)),YR(e,i,o,s,l,"F",a,u)}function RD(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return X()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function xS(t){return t?t.unaryFilter!==void 0?[MD(t)]:t.fieldFilter!==void 0?[OD(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>xS(e)).reduce((e,n)=>e.concat(n)):X():[]}function DD(t){return _D[t]}function PD(t){return wD[t]}function Pi(t){return{fieldPath:t.canonicalString()}}function Xi(t){return xt.fromServerFormat(t.fieldPath)}function OD(t){return Ht.create(Xi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(t.fieldFilter.op),t.fieldFilter.value)}function MD(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Xi(t.unaryFilter.field);return Ht.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Xi(t.unaryFilter.field);return Ht.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Xi(t.unaryFilter.field);return Ht.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Xi(t.unaryFilter.field);return Ht.create(i,"!=",{nullValue:"NULL_VALUE"});default:return X()}}function $D(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function NS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&uD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const a=pS(o,l);a!==null&&r.set(i.key,a),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&ws(this.mutations,e.mutations,(n,r)=>Jv(n,r))&&ws(this.baseMutations,e.baseMutations,(n,r)=>Jv(n,r))}}class Gm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ke(e.mutations.length===r.length);let i=mD;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Gm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n,r,i,s=te.min(),o=te.min(),l=wt.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l}withSequenceNumber(e){return new ni(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e){this.ne=e}}function VD(t){const e=AD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?tD(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(){this.ze=new zD}addToCollectionParentIndex(e,n){return this.ze.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(Dr.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(Dr.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class zD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Xe(Re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Xe(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Ts(0)}static Rn(){return new Ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(){this.changes=new js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Ao(r.mutation,i,dn.empty(),Ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const i=Jr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=fo();return s.forEach((l,a)=>{o=o.insert(l,a.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=er();const o=Ro(),l=Ro();return n.forEach((a,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof zr)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),Ao(c.mutation,u,c.mutation.getFieldMask(),Ye.now()))}),this.recalculateAndSaveOverlays(e,s).next(a=>(a.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return l.set(u,new BD(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ro();let i=new Je((o,l)=>o-l),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(a=>{const u=n.get(a);if(u===null)return;let c=r.get(a)||dn.empty();c=l.applyToLocalView(u,c),r.set(a,c);const h=(i.get(l.batchId)||oe()).add(a);i=i.insert(l.batchId,h)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const a=l.getNext(),u=a.key,c=a.value,h=wS();c.forEach(d=>{if(!s.has(d)){const p=pS(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):eD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(Jr());let l=-1,a=s;return o.next(u=>x.forEach(u,(c,h)=>(l<h.largestBatchId&&(l=h.largestBatchId),s.get(c)?x.resolve():this.getBaseDocument(e,c,h).next(d=>{a=a.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,a,u,oe())).next(c=>({batchId:l,changes:_S(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let i=fo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=fo();return this.indexManager.getCollectionParents(e,i).next(o=>x.forEach(o,l=>{const a=function(u,c){return new Hc(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,a,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((l,a)=>{const u=a.getKey();i.get(u)===null&&(i=i.insert(u,pt.newInvalidDocument(u)))});let o=fo();return i.forEach((l,a)=>{const u=s.get(l);u!==void 0&&Ao(u.mutation,a,dn.empty(),Ye.now()),Hm(n,a)&&(o=o.insert(l,a))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):x.resolve(pt.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return x.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:Kn(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:VD(r.bundledQuery),readTime:Kn(r.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(){this.overlays=new Je(j.comparator),this.Xn=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jr();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=Jr(),s=n.length+1,o=new j(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const a=l.getNext().value,u=a.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&a.largestBatchId>r&&i.set(a.getKey(),a)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Je((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Jr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const l=Jr(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((u,c)=>l.set(u,c)),!(l.size()>=i)););return x.resolve(l)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new LD(n,r));let s=this.Xn.get(n);s===void 0&&(s=oe(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(){this.Zn=new Xe(tt.ts),this.es=new Xe(tt.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new tt(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new j(new Re([])),r=new tt(n,e),i=new tt(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new j(new Re([])),r=new tt(n,e),i=new tt(n,e+1);let s=oe();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new tt(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return j.comparator(e.key,n.key)||pe(e.ls,n.ls)}static ns(e,n){return pe(e.ls,n.ls)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new Xe(tt.ts)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bD(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.ds=this.ds.add(new tt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),i=new tt(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const l=this._s(o.ls);s.push(l)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(pe);return n.forEach(i=>{const s=new tt(i,0),o=new tt(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],l=>{r=r.add(l.ls)})}),x.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new tt(new j(s),0);let l=new Xe(pe);return this.ds.forEachWhile(a=>{const u=a.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(a.ls)),!0)},o),x.resolve(this.gs(l))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ke(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return x.forEach(n.mutations,i=>{const s=new tt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new tt(n,0),i=this.ds.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e){this.ps=e,this.docs=new Je(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(n))}getEntries(e,n){let r=er();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():pt.newInvalidDocument(i))}),x.resolve(r)}getAllFromCollection(e,n,r){let i=er();const s=new j(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:l,value:{document:a}}=o.getNext();if(!n.isPrefixOf(l.path))break;l.path.length>n.length+1||OR(PR(a),r)<=0||(i=i.insert(a.key,a.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,i){X()}Is(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QD(this)}getSize(e){return x.resolve(this.size)}}class QD extends jD{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(e){this.persistence=e,this.Ts=new js(n=>zm(n),jm),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Es=0,this.As=new Km,this.targetCount=0,this.Rs=Ts.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),x.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.vn(n),x.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n){this.bs={},this.overlays={},this.Ps=new Vm(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new YD(this),this.indexManager=new UD,this.remoteDocumentCache=function(r){return new qD(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new FD(n),this.Ds=new WD(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new GD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new KD(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new JD(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return x.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class JD extends $R{constructor(e){super(),this.currentSequenceNumber=e}}class qm{constructor(e){this.persistence=e,this.ks=new Km,this.Os=null}static Ms(e){return new qm(e)}get Fs(){if(this.Os)return this.Os;throw X()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),x.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Os=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Fs,r=>{const i=j.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.Os=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return x.or([()=>x.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=oe(),i=oe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){return x.resolve(null)}xi(e,n,r,i){return XR(n)||i.isEqual(te.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Oi(n,o,r,i)?this.Ni(e,n):(zv()<=ce.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),$f(n)),this.Mi(e,o,n,DR(i,-1)))})}ki(e,n){let r=new Xe(lS(e));return n.forEach((i,s)=>{Hm(e,s)&&(r=r.add(s))}),r}Oi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return zv()<=ce.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",$f(n)),this.Di.getDocumentsMatchingQuery(e,n,Dr.min())}Mi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new Je(pe),this.Bi=new js(s=>zm(s),jm),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HD(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function t2(t,e,n,r){return new e2(t,e,n,r)}async function AS(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let a=oe();for(const u of i){o.push(u.batchId);for(const c of u.mutations)a=a.add(c.key)}for(const u of s){l.push(u.batchId);for(const c of u.mutations)a=a.add(c.key)}return n.localDocuments.getDocuments(r,a).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:l}))})})}function n2(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(o,l,a,u){const c=a.batch,h=c.keys();let d=x.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(l,p)).next(g=>{const v=a.docVersions.get(p);ke(v!==null),g.version.compareTo(v)<0&&(c.applyToRemoteDocument(g,a),g.isValidDocument()&&(g.setReadTime(a.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(l,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let l=oe();for(let a=0;a<o.mutationResults.length;++a)o.mutationResults[a].transformResults.length>0&&(l=l.add(o.batch.mutations[a].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function RS(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function r2(t,e){const n=J(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const l=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;l.push(n.Vs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Vs.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(wt.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(g,v,E){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,p,c)&&l.push(n.Vs.updateTargetData(s,p))});let a=er(),u=oe();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),l.push(i2(s,o,e.documentUpdates).next(c=>{a=c.Gi,u=c.Qi})),!r.isEqual(te.min())){const c=n.Vs.getLastRemoteSnapshotVersion(s).next(h=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(c)}return x.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,a,u)).next(()=>a)}).then(s=>(n.$i=i,s))}function i2(t,e,n){let r=oe(),i=oe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=er();return n.forEach((l,a)=>{const u=s.get(l);a.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),a.isNoDocument()&&a.version.isEqual(te.min())?(e.removeEntry(l,a.readTime),o=o.insert(l,a)):!u.isValidDocument()||a.version.compareTo(u.version)>0||a.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(a),o=o.insert(l,a)):U("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",a.version)}),{Gi:o,Qi:i}})}function s2(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function o2(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new ni(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function Vf(t,e,n){const r=J(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!bl(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function s0(t,e,n){const r=J(t);let i=te.min(),s=oe();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,a,u){const c=J(l),h=c.Bi.get(u);return h!==void 0?x.resolve(c.$i.get(h)):c.Vs.getTargetData(a,u)}(r,o,yi(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,l.targetId).next(a=>{s=a})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:oe())).next(l=>(l2(r,nD(e),l),{documents:l,ji:s})))}function l2(t,e,n){let r=te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}class o0{constructor(){this.activeTargetIds=ES()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class a2{constructor(){this.Fr=new o0,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new o0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);U("RestConnection","Sending: ",o,r);const l={};return this.uo(l,i,s),this.co(e,o,l,r).then(a=>(U("RestConnection","Received: ",a),a),a=>{throw jv("RestConnection",`${e} failed with error: `,a,"url: ",o,"request:",r),a})}ao(e,n,r,i,s,o){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+zs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=c2[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const l=new ER;l.listenOnce(vR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case nd.NO_ERROR:const u=l.getResponseJson();U("Connection","XHR received:",JSON.stringify(u)),s(u);break;case nd.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new W(N.DEADLINE_EXCEEDED,"Request time out"));break;case nd.HTTP_ERROR:const c=l.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',c,"response text:",l.getResponseText()),c>0){const h=l.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(g)>=0?g:N.UNKNOWN}(h.status);o(new W(d,h.message))}else o(new W(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else o(new W(N.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const a=JSON.stringify(i);l.send(n,"POST",a,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=gR(),o=yR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new wR({})),this.uo(l.initMessageHeaders,n,r),cm()||jw()||Qx()||Yx()||Xx()||qx()||(l.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");U("Connection","Creating WebChannel: "+a,l);const u=s.createWebChannel(a,l);let c=!1,h=!1;const d=new h2({jr:g=>{h?U("Connection","Not sending because WebChannel is closed:",g):(c||(U("Connection","Opening WebChannel transport."),u.open(),c=!0),U("Connection","WebChannel sending:",g),u.send(g))},Wr:()=>u.close()}),p=(g,v,E)=>{g.listen(v,m=>{try{E(m)}catch(f){setTimeout(()=>{throw f},0)}})};return p(u,ya.EventType.OPEN,()=>{h||U("Connection","WebChannel transport opened.")}),p(u,ya.EventType.CLOSE,()=>{h||(h=!0,U("Connection","WebChannel transport closed"),d.eo())}),p(u,ya.EventType.ERROR,g=>{h||(h=!0,jv("Connection","WebChannel transport errored:",g),d.eo(new W(N.UNAVAILABLE,"The operation could not be completed")))}),p(u,ya.EventType.MESSAGE,g=>{var v;if(!h){const E=g.data[0];ke(!!E);const m=E,f=m.error||((v=m[0])===null||v===void 0?void 0:v.error);if(f){U("Connection","WebChannel received error:",f);const y=f.status;let w=function(O){const $=je[O];if($!==void 0)return yS($)}(y),T=f.message;w===void 0&&(w=N.INTERNAL,T="Unknown error status: "+y+" with message "+f.message),h=!0,d.eo(new W(w,T)),u.close()}else U("Connection","WebChannel received:",E),d.no(E)}}),p(o,_R.STAT_EVENT,g=>{g.stat===Vv.PROXY?U("Connection","Detected buffering proxy"):g.stat===Vv.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}function id(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t){return new ED(t,!0)}class DS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,n,r,i,s,o,l,a){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new DS(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Oo()))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(Rr(n.toString()),Rr("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new W(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class f2 extends PS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=TD(this.wt,e),r=function(i){if(!("targetChange"in i))return te.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?te.min():s.readTime?Kn(s.readTime):te.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=Ff(this.wt),n.addTarget=function(i,s){let o;const l=s.target;return o=Mf(l)?{documents:xD(i,l)}:{query:ND(i,l)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=TS(i,s.resumeToken):s.snapshotVersion.compareTo(te.min())>0&&(o.readTime=xu(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=RD(this.wt,e);r&&(n.labels=r),this.Mo(n)}jo(e){const n={};n.database=Ff(this.wt),n.removeTarget=e,this.Mo(n)}}class p2 extends PS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,n){return this.bo.ho("Write",e,n)}onMessage(e){if(ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const n=ID(e.writeResults,e.commitTime),r=Kn(e.commitTime);return this.listener.Jo(r,n)}return ke(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Ff(this.wt),this.Mo(e)}Ho(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kD(this.wt,r))};this.Mo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new W(N.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(N.UNKNOWN,i.toString())})}ao(e,n,r,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(N.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class g2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Rr(n),this.su=!1):U("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{xi(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(l){const a=J(l);a.lu.add(4),await Vl(a),a._u.set("Unknown"),a.lu.delete(4),await Yc(a)}(this))})}),this._u=new g2(r,i)}}async function Yc(t){if(xi(t))for(const e of t.fu)await e(!0)}async function Vl(t){for(const e of t.fu)await e(!1)}function OS(t,e){const n=J(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),Jm(n)?Xm(n):Bs(n).Co()&&Ym(n,e))}function MS(t,e){const n=J(t),r=Bs(n);n.hu.delete(e),r.Co()&&$S(n,e),n.hu.size===0&&(r.Co()?r.ko():xi(n)&&n._u.set("Unknown"))}function Ym(t,e){t.wu.Nt(e.targetId),Bs(t).Qo(e)}function $S(t,e){t.wu.Nt(e),Bs(t).jo(e)}function Xm(t){t.wu=new vD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),Bs(t).start(),t._u.iu()}function Jm(t){return xi(t)&&!Bs(t).Do()&&t.hu.size>0}function xi(t){return J(t).lu.size===0}function bS(t){t.wu=void 0}async function v2(t){t.hu.forEach((e,n)=>{Ym(t,e)})}async function _2(t,e){bS(t),Jm(t)?(t._u.uu(e),Xm(t)):t._u.set("Unknown")}async function w2(t,e,n){if(t._u.set("Online"),e instanceof CS&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nu(t,r)}else if(e instanceof Fa?t.wu.Ut(e):e instanceof SS?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(te.min()))try{const r=await RS(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((l,a)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.hu.get(a);u&&i.hu.set(a,u.withResumeToken(l.resumeToken,s))}}),o.targetMismatches.forEach(l=>{const a=i.hu.get(l);if(!a)return;i.hu.set(l,a.withResumeToken(wt.EMPTY_BYTE_STRING,a.snapshotVersion)),$S(i,l);const u=new ni(a.target,l,1,a.sequenceNumber);Ym(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await Nu(t,r)}}async function Nu(t,e,n){if(!bl(e))throw e;t.lu.add(1),await Vl(t),t._u.set("Offline"),n||(n=()=>RS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Yc(t)})}function LS(t,e){return e().catch(n=>Nu(t,n,e))}async function Xc(t){const e=J(t),n=Or(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;E2(e);)try{const i=await s2(e.localStore,r);if(i===null){e.au.length===0&&n.ko();break}r=i.batchId,S2(e,i)}catch(i){await Nu(e,i)}FS(e)&&VS(e)}function E2(t){return xi(t)&&t.au.length<10}function S2(t,e){t.au.push(e);const n=Or(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function FS(t){return xi(t)&&!Or(t).Do()&&t.au.length>0}function VS(t){Or(t).start()}async function C2(t){Or(t).Xo()}async function T2(t){const e=Or(t);for(const n of t.au)e.Ho(n.mutations)}async function k2(t,e,n){const r=t.au.shift(),i=Gm.from(r,e,n);await LS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xc(t)}async function I2(t,e){e&&Or(t).zo&&await async function(n,r){if(i=r.code,fD(i)&&i!==N.ABORTED){const s=n.au.shift();Or(n).No(),await LS(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Xc(n)}var i}(t,e),FS(t)&&VS(t)}async function a0(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=xi(n);n.lu.add(3),await Vl(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Yc(n)}async function x2(t,e){const n=J(t);e?(n.lu.delete(2),await Yc(n)):e||(n.lu.add(2),await Vl(n),n._u.set("Unknown"))}function Bs(t){return t.mu||(t.mu=function(e,n,r){const i=J(e);return i.tu(),new f2(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:v2.bind(null,t),Jr:_2.bind(null,t),Go:w2.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),Jm(t)?Xm(t):t._u.set("Unknown")):(await t.mu.stop(),bS(t))})),t.mu}function Or(t){return t.gu||(t.gu=function(e,n,r){const i=J(e);return i.tu(),new p2(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:C2.bind(null,t),Jr:I2.bind(null,t),Yo:T2.bind(null,t),Jo:k2.bind(null,t)}),t.fu.push(async e=>{e?(t.gu.No(),await Xc(t)):(await t.gu.stop(),t.au.length>0&&(U("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))})),t.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Zm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function eg(t,e){if(Rr("AsyncQueue",`${e}: ${t}`),bl(t))return new W(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=fo(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(){this.yu=new Je(j.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):X():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ks{constructor(e,n,r,i,s,o,l,a){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=a}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new ks(e,n,os.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(){this.Iu=void 0,this.listeners=[]}}class A2{constructor(){this.queries=new js(e=>oS(e),Wc),this.onlineState="Unknown",this.Tu=new Set}}async function R2(t,e){const n=J(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new N2),i)try{s.Iu=await n.onListen(r)}catch(o){const l=eg(o,`Initialization of query '${$f(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&tg(n)}async function D2(t,e){const n=J(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function P2(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.listeners)l.Au(i)&&(r=!0);o.Iu=i}}r&&tg(n)}function O2(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function tg(t){t.Tu.forEach(e=>{e.next()})}class M2{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ks(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=ks.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.key=e}}class zS{constructor(e){this.key=e}}class $2{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=oe(),this.mutatedKeys=oe(),this.Lu=lS(e),this.Uu=new os(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new u0,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const a=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=Hm(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?g!==v&&(r.track({type:3,doc:p}),E=!0):this.Qu(d,p)||(r.track({type:2,doc:p}),E=!0,(a&&this.Lu(p,a)>0||u&&this.Lu(p,u)<0)&&(l=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(a||u)&&(l=!0)),E&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Uu:o,Gu:r,Oi:l,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((u,c)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return p(h)-p(d)}(u.type,c.type)||this.Lu(u.doc,c.doc)),this.ju(r);const o=n?this.Wu():[],l=this.Bu.size===0&&this.current?1:0,a=l!==this.$u;return this.$u=l,s.length!==0||a?{snapshot:new ks(this.query,e.Uu,i,s,e.mutatedKeys,l===0,a,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new u0,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=oe(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new zS(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new US(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=oe();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return ks.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class b2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class L2{constructor(e){this.key=e,this.Xu=!1}}class F2{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new js(l=>oS(l),Wc),this.ec=new Map,this.nc=new Set,this.sc=new Je(j.comparator),this.ic=new Map,this.rc=new Km,this.oc={},this.uc=new Map,this.cc=Ts.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function V2(t,e){const n=Q2(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await o2(n.localStore,yi(e));n.isPrimaryClient&&OS(n.remoteStore,o);const l=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await U2(n,e,r,l==="current")}return i}async function U2(t,e,n,r){t.hc=(c,h,d)=>async function(p,g,v,E){let m=g.view.Ku(v);m.Oi&&(m=await s0(p.localStore,g.query,!1).then(({documents:w})=>g.view.Ku(w,m)));const f=E&&E.targetChanges.get(g.targetId),y=g.view.applyChanges(m,p.isPrimaryClient,f);return h0(p,g.targetId,y.zu),y.snapshot}(t,c,h,d);const i=await s0(t.localStore,e,!0),s=new $2(e,i.ji),o=s.Ku(i.documents),l=Fl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),a=s.applyChanges(o,t.isPrimaryClient,l);h0(t,n,a.zu);const u=new b2(e,n,s);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),a.snapshot}async function z2(t,e){const n=J(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!Wc(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Vf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),MS(n.remoteStore,r.targetId),Uf(n,r.targetId)}).catch($l)):(Uf(n,r.targetId),await Vf(n.localStore,r.targetId,!0))}async function j2(t,e,n){const r=Y2(t);try{const i=await function(s,o){const l=J(s),a=Ye.now(),u=o.reduce((d,p)=>d.add(p.key),oe());let c,h;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=er(),g=oe();return l.Ui.getEntries(d,u).next(v=>{p=v,p.forEach((E,m)=>{m.isValidDocument()||(g=g.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,p)).next(v=>{c=v;const E=[];for(const m of o){const f=cD(m,c.get(m.key).overlayedDocument);f!=null&&E.push(new zr(m.key,f,iS(f.value.mapValue),bn.exists(!0)))}return l.mutationQueue.addMutationBatch(d,a,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(c,g);return l.documentOverlayCache.saveOverlays(d,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:_S(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,l){let a=s.oc[s.currentUser.toKey()];a||(a=new Je(pe)),a=a.insert(o,l),s.oc[s.currentUser.toKey()]=a}(r,i.batchId,n),await Ul(r,i.changes),await Xc(r.remoteStore)}catch(i){const s=eg(i,"Failed to persist write");n.reject(s)}}async function jS(t,e){const n=J(t);try{const r=await r2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(ke(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?ke(o.Xu):i.removedDocuments.size>0&&(ke(o.Xu),o.Xu=!1))}),await Ul(n,r,e)}catch(r){await $l(r)}}function c0(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const l=o.view.Eu(e);l.snapshot&&i.push(l.snapshot)}),function(s,o){const l=J(s);l.onlineState=o;let a=!1;l.queries.forEach((u,c)=>{for(const h of c.listeners)h.Eu(o)&&(a=!0)}),a&&tg(l)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function B2(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new Je(j.comparator);o=o.insert(s,pt.newNoDocument(s,te.min()));const l=oe().add(s),a=new qc(te.min(),new Map,new Xe(pe),o,l);await jS(r,a),r.sc=r.sc.remove(s),r.ic.delete(e),ng(r)}else await Vf(r.localStore,e,!1).then(()=>Uf(r,e,n)).catch($l)}async function H2(t,e){const n=J(t),r=e.batch.batchId;try{const i=await n2(n.localStore,e);HS(n,r,null),BS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ul(n,i)}catch(i){await $l(i)}}async function W2(t,e,n){const r=J(t);try{const i=await function(s,o){const l=J(s);return l.persistence.runTransaction("Reject batch","readwrite-primary",a=>{let u;return l.mutationQueue.lookupMutationBatch(a,o).next(c=>(ke(c!==null),u=c.keys(),l.mutationQueue.removeMutationBatch(a,c))).next(()=>l.mutationQueue.performConsistencyCheck(a)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(a,u,o)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,u)).next(()=>l.localDocuments.getDocuments(a,u))})}(r.localStore,e);HS(r,e,n),BS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ul(r,i)}catch(i){await $l(i)}}function BS(t,e){(t.uc.get(e)||[]).forEach(n=>{n.resolve()}),t.uc.delete(e)}function HS(t,e,n){const r=J(t);let i=r.oc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function Uf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||WS(t,r)})}function WS(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(MS(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),ng(t))}function h0(t,e,n){for(const r of n)r instanceof US?(t.rc.addReference(r.key,e),G2(t,r)):r instanceof zS?(U("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||WS(t,r.key)):X()}function G2(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(U("SyncEngine","New document in limbo: "+n),t.nc.add(r),ng(t))}function ng(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new j(Re.fromString(e)),r=t.cc.next();t.ic.set(r,new L2(n)),t.sc=t.sc.insert(n,r),OS(t.remoteStore,new ni(yi(Bm(n.path)),r,2,Vm.ot))}}async function Ul(t,e,n){const r=J(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((l,a)=>{o.push(r.hc(a,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=Qm.Vi(a.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(l,a){const u=J(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>x.forEach(a,h=>x.forEach(h.Pi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>x.forEach(h.vi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!bl(c))throw c;U("LocalStore","Failed to update sequence numbers: "+c)}for(const c of a){const h=c.targetId;if(!c.fromCache){const d=u.$i.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.$i=u.$i.insert(h,g)}}}(r.localStore,s))}async function K2(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await AS(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(l=>{l.reject(new W(N.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ul(n,r.Ki)}}function q2(t,e){const n=J(t),r=n.ic.get(e);if(r&&r.Xu)return oe().add(r.key);{let i=oe();const s=n.ec.get(e);if(!s)return i;for(const o of s){const l=n.tc.get(o);i=i.unionWith(l.view.qu)}return i}}function Q2(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=q2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=B2.bind(null,e),e.Zu.Go=P2.bind(null,e.eventManager),e.Zu.lc=O2.bind(null,e.eventManager),e}function Y2(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=H2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=W2.bind(null,e),e}class X2{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Qc(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return t2(this.persistence,new ZD,e.initialUser,this.wt)}_c(e){return new XD(qm.Ms,this.wt)}dc(e){return new a2}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class J2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>c0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=K2.bind(null,this.syncEngine),await x2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new A2}createDatastore(e){const n=Qc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new d2(i));var i;return function(s,o,l,a){return new m2(s,o,l,a)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=l=>c0(this.syncEngine,l,0),o=l0.V()?new l0:new u2,new y2(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,l,a,u){const c=new F2(r,i,s,o,l,a);return u&&(c.ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);U("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await Vl(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eP{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ut.UNAUTHENTICATED,this.clientId=eS.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{U("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(U("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=eg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tP(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await AS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function nP(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rP(t);U("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>a0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>a0(e.remoteStore,s)),t.onlineComponents=e}async function rP(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await tP(t,new X2)),t.offlineComponents}async function GS(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await nP(t,new J2)),t.onlineComponents}function iP(t){return GS(t).then(e=>e.syncEngine)}async function sP(t){const e=await GS(t),n=e.eventManager;return n.onListen=V2.bind(null,e.syncEngine),n.onUnlisten=z2.bind(null,e.syncEngine),n}function oP(t,e,n={}){const r=new Tr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,l,a){const u=new Z2({next:h=>{s.enqueueAndForget(()=>D2(i,c));const d=h.docs.has(o);!d&&h.fromCache?a.reject(new W(N.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&l&&l.source==="server"?a.reject(new W(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):a.resolve(h)},error:h=>a.reject(h)}),c=new M2(Bm(o.path),u,{includeMetadataChanges:!0,Du:!0});return R2(i,c)}(await sP(t),t.asyncQueue,e,n,r)),r.promise}const d0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KS(t,e,n){if(!n)throw new W(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lP(t,e,n,r){if(e===!0&&r===!0)throw new W(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function f0(t){if(!j.isDocumentKey(t))throw new W(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function p0(t){if(j.isDocumentKey(t))throw new W(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function rg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function fl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=rg(t);throw new W(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new W(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,lP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new m0({}),this._settingsFrozen=!1,e instanceof Ss?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new W(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ss(i.options.projectId)}(e))}get app(){if(!this._app)throw new W(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new m0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new CR;switch(n.type){case"gapi":const r=n.client;return ke(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new IR(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new W(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=d0.get(e);n&&(U("ComponentProvider","Removing Datastore"),d0.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zt(this.firestore,e,this._key)}}class sg{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new sg(this.firestore,e,this._query)}}class kr extends sg{constructor(e,n,r){super(e,n,Bm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zt(this.firestore,null,new j(e))}withConverter(e){return new kr(this.firestore,e,this._path)}}function g0(t,e,...n){if(t=tn(t),KS("collection","path",e),t instanceof ig){const r=Re.fromString(e,...n);return p0(r),new kr(t,null,r)}{if(!(t instanceof Zt||t instanceof kr))throw new W(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return p0(r),new kr(t.firestore,null,r)}}function Au(t,e,...n){if(t=tn(t),arguments.length===1&&(e=eS.I()),KS("doc","path",e),t instanceof ig){const r=Re.fromString(e,...n);return f0(r),new Zt(t,null,new j(r))}{if(!(t instanceof Zt||t instanceof kr))throw new W(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return f0(r),new Zt(t.firestore,t instanceof kr?t.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new DS(this,"async_queue_retry"),this.Kc=()=>{const n=id();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=id();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=id();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Tr;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Mc.push(e),this.jc()))}async jc(){if(this.Mc.length!==0){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(e){if(!bl(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Mc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Oc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Rr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Oc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=Zm.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&X()}verifyOperationInProgress(){}async zc(){let e;do e=this.Oc,await e;while(e!==this.Oc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Jc extends ig{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new aP,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||QS(this),this._firestoreClient.terminate()}}function uP(t=Xw()){return Qw(t,"firestore").getImmediate()}function qS(t){return t._firestoreClient||QS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function QS(t){var e;const n=t._freezeSettings(),r=function(i,s,o,l){return new LR(i,s,o,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new eP(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Is(wt.fromBase64String(e))}catch(n){throw new W(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Is(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=/^__.*__$/;class hP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ll(e,this.data,n,this.fieldTransforms)}}class YS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function XS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class ag{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.wt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new ag(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:r,na:!1});return i.sa(e),i}ia(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ta({path:r,na:!1});return i.Xc(),i}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Ru(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(e.length===0)throw this.oa("Document fields must not be empty");if(XS(this.Zc)&&cP.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class dP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.wt=r||Qc(e)}aa(e,n,r,i=!1){return new ag({Zc:e,methodName:n,ca:r,path:xt.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function JS(t){const e=t._freezeSettings(),n=Qc(t._databaseId);return new dP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fP(t,e,n,r,i,s={}){const o=t.aa(s.merge||s.mergeFields?2:0,e,n,i);ug("Data must be an object, but it was:",o,r);const l=ZS(r,o);let a,u;if(s.merge)a=new dn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=zf(e,h,n);if(!o.contains(d))throw new W(N.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);tC(c,d)||c.push(d)}a=new dn(c),u=o.fieldTransforms.filter(h=>a.covers(h.field))}else a=null,u=o.fieldTransforms;return new hP(new jt(l),a,u)}class eh extends og{_toFieldTransform(e){if(e.Zc!==2)throw e.Zc===1?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof eh}}function pP(t,e,n,r){const i=t.aa(1,e,n);ug("Data must be an object, but it was:",i,r);const s=[],o=jt.empty();Ii(r,(a,u)=>{const c=cg(e,a,n);u=tn(u);const h=i.ia(c);if(u instanceof eh)s.push(c);else{const d=th(u,h);d!=null&&(s.push(c),o.set(c,d))}});const l=new dn(s);return new YS(o,l,i.fieldTransforms)}function mP(t,e,n,r,i,s){const o=t.aa(1,e,n),l=[zf(e,r,n)],a=[i];if(s.length%2!=0)throw new W(N.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)l.push(zf(e,s[d])),a.push(s[d+1]);const u=[],c=jt.empty();for(let d=l.length-1;d>=0;--d)if(!tC(u,l[d])){const p=l[d];let g=a[d];g=tn(g);const v=o.ia(p);if(g instanceof eh)u.push(p);else{const E=th(g,v);E!=null&&(u.push(p),c.set(p,E))}}const h=new dn(u);return new YS(c,h,o.fieldTransforms)}function th(t,e){if(eC(t=tn(t)))return ug("Unsupported field value:",e,t),ZS(t,e);if(t instanceof og)return function(n,r){if(!XS(r.Zc))throw r.oa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.oa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&e.Zc!==4)throw e.oa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let l=th(o,r.ra(s));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=tn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return iD(r.wt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ye.fromDate(n);return{timestampValue:xu(r.wt,i)}}if(n instanceof Ye){const i=new Ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xu(r.wt,i)}}if(n instanceof lg)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Is)return{bytesValue:TS(r.wt,n._byteString)};if(n instanceof Zt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.oa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.oa(`Unsupported field value: ${rg(n)}`)}(t,e)}function ZS(t,e){const n={};return tS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ii(t,(r,i)=>{const s=th(i,e.ea(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function eC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof lg||t instanceof Is||t instanceof Zt||t instanceof og)}function ug(t,e,n){if(!eC(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=rg(n);throw r==="an object"?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function zf(t,e,n){if((e=tn(e))instanceof Zc)return e._internalPath;if(typeof e=="string")return cg(t,e);throw Ru("Field path arguments must be of type string or ",t,!1,void 0,n)}const gP=new RegExp("[~\\*/\\[\\]]");function cg(t,e,n){if(e.search(gP)>=0)throw Ru(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zc(...e.split("."))._internalPath}catch{throw Ru(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ru(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let a="";return(s||o)&&(a+=" (found",s&&(a+=` in field ${r}`),o&&(a+=` in document ${i}`),a+=")"),new W(N.INVALID_ARGUMENT,l+t+a)}function tC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rC("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yP extends nC{data(){return super.data()}}function rC(t,e){return typeof e=="string"?cg(t,e):e instanceof Zc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iC extends nC{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _P(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rC("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class _P extends iC{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{convertValue(e,n="none"){switch(gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){const r={};return Ii(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new lg(Be(e.latitude),Be(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=rS(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(al(e));default:return null}}convertTimestamp(e){const n=Pr(e);return new Ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);ke(NS(r));const i=new Ss(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||Rr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){t=fl(t,Zt);const e=fl(t.firestore,Jc);return oP(qS(e),t._key).then(n=>TP(e,t,n))}class SP extends wP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Zt(this.firestore,null,n)}}function CP(t,e,n,...r){t=fl(t,Zt);const i=fl(t.firestore,Jc),s=JS(i);let o;return o=typeof(e=tn(e))=="string"||e instanceof Zc?mP(s,"updateDoc",t._key,e,n,r):pP(s,"updateDoc",t._key,e),oC(i,[o.toMutation(t._key,bn.exists(!0))])}function y0(t,e){const n=fl(t.firestore,Jc),r=Au(t),i=EP(t.converter,e);return oC(n,[fP(JS(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,bn.exists(!1))]).then(()=>r)}function oC(t,e){return function(n,r){const i=new Tr;return n.asyncQueue.enqueueAndForget(async()=>j2(await iP(n),r,i)),i.promise}(qS(t),e)}function TP(t,e,n){const r=n.docs.get(e._key),i=new SP(t);return new iC(t,i,e._key,r,new vP(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){zs=n})(Yw),el(new vs("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Jc(i,new TR(n.getProvider("auth-internal")),new NR(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Cr(Uv,"3.4.11",t),Cr(Uv,"3.4.11","esm2017")})();const v0="@firebase/database",_0="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lC="";function kP(t){lC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),it(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Zo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return An(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new IP(e)}}catch{}return new xP},Zr=aC("localStorage"),jf=aC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new hm("@firebase/database"),uC=function(){let t=1;return function(){return t++}}(),cC=function(t){const e=lN(t),n=new oN;n.update(e);const r=n.digest();return um.encodeByteArray(r)},zl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=zl.apply(null,r):typeof r=="object"?e+=it(r):e+=r,e+=" "}return e};let ri=null,w0=!0;const NP=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ls.logLevel=ce.VERBOSE,ri=ls.log.bind(ls),e&&jf.set("logging_enabled",!0)):typeof t=="function"?ri=t:(ri=null,jf.remove("logging_enabled"))},mt=function(...t){if(w0===!0&&(w0=!1,ri===null&&jf.get("logging_enabled")===!0&&NP(!0)),ri){const e=zl.apply(null,t);ri(e)}},jl=function(t){return function(...e){mt(t,...e)}},Bf=function(...t){const e="FIREBASE INTERNAL ERROR: "+zl(...t);ls.error(e)},vi=function(...t){const e=`FIREBASE FATAL ERROR: ${zl(...t)}`;throw ls.error(e),new Error(e)},bt=function(...t){const e="FIREBASE WARNING: "+zl(...t);ls.warn(e)},AP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&bt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},RP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},xs="[MIN_NAME]",_i="[MAX_NAME]",Ni=function(t,e){if(t===e)return 0;if(t===xs||e===_i)return-1;if(e===xs||t===_i)return 1;{const n=E0(t),r=E0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},DP=function(t,e){return t===e?0:t<e?-1:1},ro=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+it(e))},dg=function(t){if(typeof t!="object"||t===null)return it(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=it(e[r]),n+=":",n+=dg(t[e[r]]);return n+="}",n},hC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Et(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const dC=function(t){R(!hg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(c.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},PP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},OP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function MP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const $P=new RegExp("^-?(0*)\\d{1,10}$"),bP=-2147483648,LP=2147483647,E0=function(t){if($P.test(t)){const e=Number(t);if(e>=bP&&e<=LP)return e}return null},Hs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw bt("Exception was thrown by user callback.",n),e},Math.floor(0))}},FP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Do=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){bt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(mt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',bt(e)}}class Hf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Hf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="5",fC="v",pC="s",mC="r",gC="f",yC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vC="ls",_C="p",Wf="ac",wC="websocket",EC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Zr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Zr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function jP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function SC(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let r;if(e===wC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===EC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);jP(t)&&(n.ns=t.namespace);const i=[];return Et(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(){this.counters_={}}incrementCounter(e,n=1){An(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Gx(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd={},od={};function pg(t){const e=t.toString();return sd[e]||(sd[e]=new BP),sd[e]}function HP(t,e){const n=t.toString();return od[n]||(od[n]=e()),od[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Hs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0="start",GP="close",KP="pLPCommand",qP="pRTLPCB",CC="id",TC="pw",kC="ser",QP="cb",YP="seg",XP="ts",JP="d",ZP="dframe",IC=1870,xC=30,eO=IC-xC,tO=25e3,nO=3e4;class Ji{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=jl(e),this.stats_=pg(n),this.urlFn=a=>(this.appCheckToken&&(a[Wf]=this.appCheckToken),SC(n,EC,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new WP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(nO)),RP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mg((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===S0)this.id=l,this.password=a;else if(o===GP)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[S0]="t",r[kC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[QP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[fC]=fg,this.transportSessionId&&(r[pC]=this.transportSessionId),this.lastSessionId&&(r[vC]=this.lastSessionId),this.applicationId&&(r[_C]=this.applicationId),this.appCheckToken&&(r[Wf]=this.appCheckToken),typeof location<"u"&&location.hostname&&yC.test(location.hostname)&&(r[mC]=gC);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ji.forceAllow_=!0}static forceDisallow(){Ji.forceDisallow_=!0}static isAvailable(){return Ji.forceAllow_?!0:!Ji.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!PP()&&!OP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Vw(n),i=hC(r,eO);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[ZP]="t",r[CC]=e,r[TC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=it(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class mg{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=uC(),window[KP+this.uniqueCallbackIdentifier]=e,window[qP+this.uniqueCallbackIdentifier]=n,this.myIFrame=mg.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const l=document.domain;s='<script>document.domain="'+l+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){mt("frame writing exception"),l.stack&&mt(l.stack),mt(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[CC]=this.myID,e[TC]=this.myPW,e[kC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xC+r.length<=IC;){const o=this.pendingSegs.shift();r=r+"&"+YP+i+"="+o.seg+"&"+XP+i+"="+o.ts+"&"+JP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(tO)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{mt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=16384,iO=45e3;let Du=null;typeof MozWebSocket<"u"?Du=MozWebSocket:typeof WebSocket<"u"&&(Du=WebSocket);class Cn{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=jl(this.connId),this.stats_=pg(n),this.connURL=Cn.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[fC]=fg,typeof location<"u"&&location.hostname&&yC.test(location.hostname)&&(o[mC]=gC),n&&(o[pC]=n),r&&(o[vC]=r),i&&(o[Wf]=i),s&&(o[_C]=s),SC(e,wC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Zr.set("previous_websocket_failure",!0);try{let r;Bw(),this.mySock=new Du(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Cn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Du!==null&&!Cn.forceDisallow_}static previouslyFailed(){return Zr.isInMemoryStorage||Zr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Zr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Zo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=it(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=hC(n,rO);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(iO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Cn.responsesRequiredToBeHealthy=2;Cn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ji,Cn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Cn&&Cn.isAvailable();let r=n&&!Cn.previouslyFailed();if(e.webSocketOnly&&(n||bt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Cn];else{const i=this.transports_=[];for(const s of pl.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);pl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}pl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=6e4,oO=5e3,lO=10*1024,aO=100*1024,ld="t",C0="d",uO="s",T0="r",cO="e",k0="o",I0="a",x0="n",N0="p",hO="h";class dO{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=jl("c:"+this.id+":"),this.transportManager_=new pl(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Do(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>aO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>lO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ld in e){const n=e[ld];n===I0?this.upgradeIfSecondaryHealthy_():n===T0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===k0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ro("t",e),r=ro("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:N0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:I0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:x0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ro("t",e),r=ro("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ro(ld,e);if(C0 in e){const r=e[C0];if(n===hO)this.onHandshake_(r);else if(n===x0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===uO?this.onConnectionShutdown_(r):n===T0?this.onReset_(r):n===cO?Bf("Server Error: "+r):n===k0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Bf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),fg!==r&&bt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Do(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Do(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(oO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:N0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Zr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu extends AC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!cm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Pu}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=32,R0=768;class we{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function he(){return new we("")}function ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Mr(t){return t.pieces_.length-t.pieceNum_}function Ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new we(t.pieces_,e)}function gg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function fO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ml(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function RC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new we(e,0)}function Le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof we)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new we(n,0)}function re(t){return t.pieceNum_>=t.pieces_.length}function Wt(t,e){const n=ee(t),r=ee(e);if(n===null)return e;if(n===r)return Wt(Ce(t),Ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function pO(t,e){const n=ml(t,0),r=ml(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Ni(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function yg(t,e){if(Mr(t)!==Mr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function cn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Mr(t)>Mr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class mO{constructor(e,n){this.errorPrefix_=n,this.parts_=ml(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ac(this.parts_[r]);DC(this)}}function gO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ac(e),DC(t)}function yO(t){const e=t.parts_.pop();t.byteLength_-=Ac(e),t.parts_.length>0&&(t.byteLength_-=1)}function DC(t){if(t.byteLength_>R0)throw new Error(t.errorPrefix_+"has a key path longer than "+R0+" bytes ("+t.byteLength_+").");if(t.parts_.length>A0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+A0+") or object contains a cycle "+Gr(t))}function Gr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg extends AC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new vg}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=1e3,vO=60*5*1e3,_O=3*1e3,D0=30*1e3,wO=1.3,EO=3e4,SO="server_kill",P0=3;class qn extends NC{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=qn.nextPersistentConnectionId_++,this.log_=jl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=io,this.maxReconnectDelay_=vO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Bw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Pu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(it(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ls,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||i!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},_O),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;qn.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&An(e,"w")){const r=hi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();bt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||iN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=D0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=rN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+it(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Bf("Unrecognized action received from server: "+it(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=io,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=io,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>EO&&(this.reconnectDelay_=io),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+qn.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(h){R(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?mt("getToken() completed but was canceled"):(mt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new dO(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{bt(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(SO)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&bt(h),a())}}}interrupt(e){mt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gv(this.interruptReasons_)&&(this.reconnectDelay_=io,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>dg(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new we(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){mt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=P0&&(this.reconnectDelay_=D0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){mt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=P0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+lC.replace(/\./g,"-")]=1,cm()?e["framework.cordova"]=1:jw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Pu.getInstance().currentlyOnline();return gv(this.interruptReasons_)&&e}}qn.nextPersistentConnectionId_=0;qn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ne(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ne(xs,e),i=new ne(xs,n);return this.compare(r,i)!==0}minPost(){return ne.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa;class PC extends nh{static get __EMPTY_NODE(){return wa}static set __EMPTY_NODE(e){wa=e}compare(e,n){return Ni(e.name,n.name)}isDefinedOn(e){throw bs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ne.MIN}maxPost(){return new ne(_i,wa)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new ne(e,wa)}toString(){return".key"}}const as=new PC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:rt.RED,this.left=i!=null?i:Gt.EMPTY_NODE,this.right=s!=null?s:Gt.EMPTY_NODE}copy(e,n,r,i,s){return new rt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Gt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Gt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}rt.RED=!0;rt.BLACK=!1;class CO{copy(e,n,r,i,s){return this}insert(e,n,r){return new rt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Gt{constructor(e,n=Gt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Gt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,rt.BLACK,null,null))}remove(e){return new Gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,rt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ea(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ea(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ea(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ea(this.root_,null,this.comparator_,!0,e)}}Gt.EMPTY_NODE=new CO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(t,e){return Ni(t.name,e.name)}function _g(t,e){return Ni(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gf;function kO(t){Gf=t}const OC=function(t){return typeof t=="number"?"number:"+dC(t):"string:"+t},MC=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&An(e,".sv"),"Priority must be a string or number.")}else R(t===Gf||t.isEmpty(),"priority of unexpected type.");R(t===Gf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let O0;class et{constructor(e,n=et.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),MC(this.priorityNode_)}static set __childrenNodeConstructor(e){O0=e}static get __childrenNodeConstructor(){return O0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new et(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return re(e)?this:ee(e)===".priority"?this.priorityNode_:et.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:et.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=ee(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(R(r!==".priority"||Mr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,et.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+OC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=dC(this.value_):e+=this.value_,this.lazyHash_=cC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===et.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof et.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=et.VALUE_TYPE_ORDER.indexOf(n),s=et.VALUE_TYPE_ORDER.indexOf(r);return R(i>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}et.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $C,bC;function IO(t){$C=t}function xO(t){bC=t}class NO extends nh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ni(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ne.MIN}maxPost(){return new ne(_i,new et("[PRIORITY-POST]",bC))}makePost(e,n){const r=$C(e);return new ne(n,new et("[PRIORITY-POST]",r))}toString(){return".priority"}}const Pe=new NO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO=Math.log(2);class RO{constructor(e){const n=s=>parseInt(Math.log(s)/AO,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ou=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let h,d;if(c===0)return null;if(c===1)return h=t[a],d=n?n(h):h,new rt(d,h.node,rt.BLACK,null,null);{const p=parseInt(c/2,10)+a,g=i(a,p),v=i(p+1,u);return h=t[p],d=n?n(h):h,new rt(d,h.node,rt.BLACK,g,v)}},s=function(a){let u=null,c=null,h=t.length;const d=function(g,v){const E=h-g,m=h;h-=g;const f=i(E+1,m),y=t[E],w=n?n(y):y;p(new rt(w,y.node,v,null,f))},p=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<a.count;++g){const v=a.nextBitIsOne(),E=Math.pow(2,a.count-(g+1));v?d(E,rt.BLACK):(d(E,rt.BLACK),d(E,rt.RED))}return c},o=new RO(t.length),l=s(o);return new Gt(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ad;const Oi={};class Wn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(Oi&&Pe,"ChildrenNode.ts has not been loaded"),ad=ad||new Wn({".priority":Oi},{".priority":Pe}),ad}get(e){const n=hi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Gt?n:null}hasIndex(e){return An(this.indexSet_,e.toString())}addIndex(e,n){R(e!==as,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(ne.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Ou(r,e.getCompare()):l=Oi;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Wn(c,u)}addToIndexes(e,n){const r=du(this.indexes_,(i,s)=>{const o=hi(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),i===Oi)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(ne.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Ou(l,o.getCompare())}else return Oi;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new ne(e.name,l))),a.insert(e,e.node)}});return new Wn(r,this.indexSet_)}removeFromIndexes(e,n){const r=du(this.indexes_,i=>{if(i===Oi)return i;{const s=n.get(e.name);return s?i.remove(new ne(e.name,s)):i}});return new Wn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let so;class H{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&MC(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return so||(so=new H(new Gt(_g),null,Wn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||so}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?so:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(Ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ne(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?so:this.priorityNode_;return new H(i,o,s)}}updateChild(e,n){const r=ee(e);if(r===null)return n;{R(ee(e)!==".priority"||Mr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Ce(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Pe,(o,l)=>{n[o]=l.val(e),r++,s&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+OC(this.getPriority().val())+":"),this.forEachChild(Pe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":cC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new ne(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ne(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ne(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ne.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ne.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bl?-1:0}withIndex(e){if(e===as||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===as||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Pe),i=n.getIterator(Pe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===as?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class DO extends H{constructor(){super(new Gt(_g),H.EMPTY_NODE,Wn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Bl=new DO;Object.defineProperties(ne,{MIN:{value:new ne(xs,H.EMPTY_NODE)},MAX:{value:new ne(_i,Bl)}});PC.__EMPTY_NODE=H.EMPTY_NODE;et.__childrenNodeConstructor=H;kO(Bl);xO(Bl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PO=!0;function qe(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new et(n,qe(e))}if(!(t instanceof Array)&&PO){const n=[];let r=!1;if(Et(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=qe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new ne(o,a)))}}),n.length===0)return H.EMPTY_NODE;const s=Ou(n,TO,o=>o.name,_g);if(r){const o=Ou(n,Pe.getCompare());return new H(s,qe(e),new Wn({".priority":o},{".priority":Pe}))}else return new H(s,qe(e),Wn.Default)}else{let n=H.EMPTY_NODE;return Et(t,(r,i)=>{if(An(t,r)&&r.substring(0,1)!=="."){const s=qe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(qe(e))}}IO(qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO extends nh{constructor(e){super(),this.indexPath_=e,R(!re(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ni(e.name,n.name):s}makePost(e,n){const r=qe(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,r);return new ne(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Bl);return new ne(_i,e)}toString(){return ml(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO extends nh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ni(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ne.MIN}maxPost(){return ne.MAX}makePost(e,n){const r=qe(e);return new ne(n,r)}toString(){return".value"}}const $O=new MO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t){return{type:"value",snapshotNode:t}}function Ns(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gl(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function yl(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(gl(n,l)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Ns(n,r)):o.trackChildChange(yl(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Pe,(i,s)=>{n.hasChild(i)||r.trackChildChange(gl(i,s))}),n.isLeafNode()||n.forEachChild(Pe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(yl(i,s,o))}else r.trackChildChange(Ns(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e){this.indexedFilter_=new wg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=vl.getStartPost_(e),this.endPost_=vl.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new ne(n,r))||(r=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const s=this;return n.forEachChild(Pe,(o,l)=>{s.matches(new ne(o,l))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e){this.rangedFilter_=new vl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new ne(n,r))||(r=H.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();let a;if(this.reverse_?a=this.index_.compare(this.rangedFilter_.getStartPost(),l)<=0:a=this.index_.compare(l,this.rangedFilter_.getEndPost())<=0,a)i=i.updateImmediateChild(l.name,l.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let s,o,l,a;if(this.reverse_){a=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();l=(d,p)=>h(p,d)}else a=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),l=this.index_.getCompare();let u=0,c=!1;for(;a.hasNext();){const h=a.getNext();!c&&l(s,h)<=0&&(c=!0),c&&u<this.limit_&&l(h,o)<=0?u++:i=i.updateImmediateChild(h.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const l=e;R(l.numChildren()===this.limit_,"");const a=new ne(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,a);if(c&&!r.isEmpty()&&p>=0)return s!=null&&s.trackChildChange(yl(n,r,h)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(gl(n,h));const v=l.updateImmediateChild(n,H.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(Ns(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(gl(u.name,u.node)),s.trackChildChange(Ns(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,H.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Pe}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xs}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_i}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Pe}copy(){const e=new Eg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function FO(t){return t.loadsAllData()?new wg(t.getIndex()):t.hasLimit()?new LO(t):new vl(t)}function M0(t){const e={};if(t.isDefault())return e;let n;return t.index_===Pe?n="$priority":t.index_===$O?n="$value":t.index_===as?n="$key":(R(t.index_ instanceof OO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=it(n),t.startSet_&&(e.startAt=it(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+it(t.indexStartName_))),t.endSet_&&(e.endAt=it(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+it(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Pe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu extends NC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=jl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Mu.getListenId_(e,r),l={};this.listens_[o]=l;const a=M0(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),hi(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=Mu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=M0(e._queryParams),r=e._path.toString(),i=new Ls;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+sN(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Zo(l.responseText)}catch{bt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&bt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(){return{value:null,children:new Map}}function FC(t,e,n){if(re(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=ee(e);t.children.has(r)||t.children.set(r,$u());const i=t.children.get(r);e=Ce(e),FC(i,e,n)}}function Kf(t,e,n){t.value!==null?n(e,t.value):UO(t,(r,i)=>{const s=new we(e.toString()+"/"+r);Kf(i,s,n)})}function UO(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Et(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=10*1e3,jO=30*1e3,BO=5*60*1e3;class HO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zO(e);const r=b0+(jO-b0)*Math.random();Do(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Et(e,(i,s)=>{s>0&&An(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Do(this.reportStats_.bind(this),Math.floor(Math.random()*2*BO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Tn||(Tn={}));function Sg(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Cg(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Tg(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Tn.ACK_USER_WRITE,this.source=Sg()}operationForChild(e){if(re(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new we(e));return new bu(he(),n,this.revert)}}else return R(ee(this.path)===e,"operationForChild called for unrelated child."),new bu(Ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,n){this.source=e,this.path=n,this.type=Tn.LISTEN_COMPLETE}operationForChild(e){return re(this.path)?new _l(this.source,he()):new _l(this.source,Ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Tn.OVERWRITE}operationForChild(e){return re(this.path)?new wi(this.source,he(),this.snap.getImmediateChild(e)):new wi(this.source,Ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Tn.MERGE}operationForChild(e){if(re(this.path)){const n=this.children.subtree(new we(e));return n.isEmpty()?null:n.value?new wi(this.source,he(),n.value):new As(this.source,he(),n)}else return R(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new As(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(re(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function GO(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(bO(o.childName,o.snapshotNode))}),oo(t,i,"child_removed",e,r,n),oo(t,i,"child_added",e,r,n),oo(t,i,"child_moved",s,r,n),oo(t,i,"child_changed",e,r,n),oo(t,i,"value",e,r,n),i}function oo(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>qO(t,l,a)),o.forEach(l=>{const a=KO(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function KO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function qO(t,e,n){if(e.childName==null||n.childName==null)throw bs("Should only compare child_ events.");const r=new ne(e.childName,e.snapshotNode),i=new ne(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t,e){return{eventCache:t,serverCache:e}}function Po(t,e,n,r){return rh(new Ei(e,n,r),t.serverCache)}function VC(t,e,n,r){return rh(t.eventCache,new Ei(e,n,r))}function qf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Si(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ud;const QO=()=>(ud||(ud=new Gt(DP)),ud);class Ee{constructor(e,n=QO()){this.value=e,this.children=n}static fromObject(e){let n=new Ee(null);return Et(e,(r,i)=>{n=n.set(new we(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(re(e))return null;{const r=ee(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Ce(e),n);return s!=null?{path:Le(new we(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(re(e))return this;{const n=ee(e),r=this.children.get(n);return r!==null?r.subtree(Ce(e)):new Ee(null)}}set(e,n){if(re(e))return new Ee(n,this.children);{const r=ee(e),s=(this.children.get(r)||new Ee(null)).set(Ce(e),n),o=this.children.insert(r,s);return new Ee(this.value,o)}}remove(e){if(re(e))return this.children.isEmpty()?new Ee(null):new Ee(null,this.children);{const n=ee(e),r=this.children.get(n);if(r){const i=r.remove(Ce(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Ee(null):new Ee(this.value,s)}else return this}}get(e){if(re(e))return this.value;{const n=ee(e),r=this.children.get(n);return r?r.get(Ce(e)):null}}setTree(e,n){if(re(e))return n;{const r=ee(e),s=(this.children.get(r)||new Ee(null)).setTree(Ce(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Ee(this.value,o)}}fold(e){return this.fold_(he(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,he(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(re(e))return null;{const s=ee(e),o=this.children.get(s);return o?o.findOnPath_(Ce(e),Le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,he(),n)}foreachOnPath_(e,n,r){if(re(e))return this;{this.value&&r(n,this.value);const i=ee(e),s=this.children.get(i);return s?s.foreachOnPath_(Ce(e),Le(n,i),r):new Ee(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.writeTree_=e}static empty(){return new xn(new Ee(null))}}function Oo(t,e,n){if(re(e))return new xn(new Ee(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Wt(i,e);return s=s.updateChild(o,n),new xn(t.writeTree_.set(i,s))}else{const i=new Ee(n),s=t.writeTree_.setTree(e,i);return new xn(s)}}}function Qf(t,e,n){let r=t;return Et(n,(i,s)=>{r=Oo(r,Le(e,i),s)}),r}function L0(t,e){if(re(e))return xn.empty();{const n=t.writeTree_.setTree(e,new Ee(null));return new xn(n)}}function Yf(t,e){return Ai(t,e)!=null}function Ai(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Wt(n.path,e)):null}function F0(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Pe,(r,i)=>{e.push(new ne(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new ne(r,i.value))}),e}function Ir(t,e){if(re(e))return t;{const n=Ai(t,e);return n!=null?new xn(new Ee(n)):new xn(t.writeTree_.subtree(e))}}function Xf(t){return t.writeTree_.isEmpty()}function Rs(t,e){return UC(he(),t.writeTree_,e)}function UC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=UC(Le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Le(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t,e){return HC(e,t)}function YO(t,e,n,r,i){R(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Oo(t.visibleWrites,e,n)),t.lastWriteId=r}function XO(t,e,n,r){R(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Qf(t.visibleWrites,e,n),t.lastWriteId=r}function JO(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function ZO(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&eM(l,r.path)?i=!1:cn(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return tM(t),!0;if(r.snap)t.visibleWrites=L0(t.visibleWrites,r.path);else{const l=r.children;Et(l,a=>{t.visibleWrites=L0(t.visibleWrites,Le(r.path,a))})}return!0}else return!1}function eM(t,e){if(t.snap)return cn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&cn(Le(t.path,n),e))return!0;return!1}function tM(t){t.visibleWrites=zC(t.allWrites,nM,he()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function nM(t){return t.visible}function zC(t,e,n){let r=xn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)cn(n,o)?(l=Wt(n,o),r=Oo(r,l,s.snap)):cn(o,n)&&(l=Wt(o,n),r=Oo(r,he(),s.snap.getChild(l)));else if(s.children){if(cn(n,o))l=Wt(n,o),r=Qf(r,l,s.children);else if(cn(o,n))if(l=Wt(o,n),re(l))r=Qf(r,he(),s.children);else{const a=hi(s.children,ee(l));if(a){const u=a.getChild(Ce(l));r=Oo(r,he(),u)}}}else throw bs("WriteRecord should have .snap or .children")}}return r}function jC(t,e,n,r,i){if(!r&&!i){const s=Ai(t.visibleWrites,e);if(s!=null)return s;{const o=Ir(t.visibleWrites,e);if(Xf(o))return n;if(n==null&&!Yf(o,he()))return null;{const l=n||H.EMPTY_NODE;return Rs(o,l)}}}else{const s=Ir(t.visibleWrites,e);if(!i&&Xf(s))return n;if(!i&&n==null&&!Yf(s,he()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(cn(u.path,e)||cn(e,u.path))},l=zC(t.allWrites,o,e),a=n||H.EMPTY_NODE;return Rs(l,a)}}}function rM(t,e,n){let r=H.EMPTY_NODE;const i=Ai(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Pe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Ir(t.visibleWrites,e);return n.forEachChild(Pe,(o,l)=>{const a=Rs(Ir(s,new we(o)),l);r=r.updateImmediateChild(o,a)}),F0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ir(t.visibleWrites,e);return F0(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function iM(t,e,n,r,i){R(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Le(e,n);if(Yf(t.visibleWrites,s))return null;{const o=Ir(t.visibleWrites,s);return Xf(o)?i.getChild(n):Rs(o,i.getChild(n))}}function sM(t,e,n,r){const i=Le(e,n),s=Ai(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Ir(t.visibleWrites,i);return Rs(o,r.getNode().getImmediateChild(n))}else return null}function oM(t,e){return Ai(t.visibleWrites,e)}function lM(t,e,n,r,i,s,o){let l;const a=Ir(t.visibleWrites,e),u=Ai(a,he());if(u!=null)l=u;else if(n!=null)l=Rs(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],h=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let p=d.getNext();for(;p&&c.length<i;)h(p,r)!==0&&c.push(p),p=d.getNext();return c}else return[]}function aM(){return{visibleWrites:xn.empty(),allWrites:[],lastWriteId:-1}}function Lu(t,e,n,r){return jC(t.writeTree,t.treePath,e,n,r)}function Ig(t,e){return rM(t.writeTree,t.treePath,e)}function V0(t,e,n,r){return iM(t.writeTree,t.treePath,e,n,r)}function Fu(t,e){return oM(t.writeTree,Le(t.treePath,e))}function uM(t,e,n,r,i,s){return lM(t.writeTree,t.treePath,e,n,r,i,s)}function xg(t,e,n){return sM(t.writeTree,t.treePath,e,n)}function BC(t,e){return HC(Le(t.treePath,e),t.writeTree)}function HC(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,yl(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,gl(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ns(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,yl(r,e.snapshotNode,i.oldSnap));else throw bs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const WC=new hM;class Ng{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ei(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xg(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Si(this.viewCache_),s=uM(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dM(t){return{filter:t}}function fM(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function pM(t,e,n,r,i){const s=new cM;let o,l;if(n.type===Tn.OVERWRITE){const u=n;u.source.fromUser?o=Jf(t,e,u.path,u.snap,r,i,s):(R(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!re(u.path),o=Vu(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===Tn.MERGE){const u=n;u.source.fromUser?o=gM(t,e,u.path,u.children,r,i,s):(R(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Zf(t,e,u.path,u.children,r,i,l,s))}else if(n.type===Tn.ACK_USER_WRITE){const u=n;u.revert?o=_M(t,e,u.path,r,i,s):o=yM(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Tn.LISTEN_COMPLETE)o=vM(t,e,n.path,r,s);else throw bs("Unknown operation type: "+n.type);const a=s.getChanges();return mM(e,o,a),{viewCache:o,changes:a}}function mM(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=qf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(LC(qf(e)))}}function GC(t,e,n,r,i,s){const o=e.eventCache;if(Fu(r,n)!=null)return e;{let l,a;if(re(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Si(e),c=u instanceof H?u:H.EMPTY_NODE,h=Ig(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=Lu(r,Si(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=ee(n);if(u===".priority"){R(Mr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const h=V0(r,n,c,a);h!=null?l=t.filter.updatePriority(c,h):l=o.getNode()}else{const c=Ce(n);let h;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=V0(r,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(u).updateChild(c,d):h=o.getNode().getImmediateChild(u)}else h=xg(r,u,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),u,h,c,i,s):l=o.getNode()}}return Po(e,l,o.isFullyInitialized()||re(n),t.filter.filtersNodes())}}function Vu(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(re(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const p=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),p,null)}else{const p=ee(n);if(!a.isCompleteForPath(n)&&Mr(n)>1)return e;const g=Ce(n),E=a.getNode().getImmediateChild(p).updateChild(g,r);p===".priority"?u=c.updatePriority(a.getNode(),E):u=c.updateChild(a.getNode(),p,E,g,WC,null)}const h=VC(e,u,a.isFullyInitialized()||re(n),c.filtersNodes()),d=new Ng(i,h,s);return GC(t,h,n,i,d,l)}function Jf(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Ng(i,e,s);if(re(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Po(e,u,!0,t.filter.filtersNodes());else{const h=ee(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Po(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=Ce(n),p=l.getNode().getImmediateChild(h);let g;if(re(d))g=r;else{const v=c.getCompleteChild(h);v!=null?gg(d)===".priority"&&v.getChild(RC(d)).isEmpty()?g=v:g=v.updateChild(d,r):g=H.EMPTY_NODE}if(p.equals(g))a=e;else{const v=t.filter.updateChild(l.getNode(),h,g,d,c,o);a=Po(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function U0(t,e){return t.eventCache.isCompleteForChild(e)}function gM(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=Le(n,a);U0(e,ee(c))&&(l=Jf(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=Le(n,a);U0(e,ee(c))||(l=Jf(t,l,c,u,i,s,o))}),l}function z0(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Zf(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;re(n)?u=r:u=new Ee(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(c.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=z0(t,p,d);a=Vu(t,a,new we(h),g,i,s,o,l)}}),u.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===void 0;if(!c.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),v=z0(t,g,d);a=Vu(t,a,new we(h),v,i,s,o,l)}}),a}function yM(t,e,n,r,i,s,o){if(Fu(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(re(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Vu(t,e,n,a.getNode().getChild(n),i,s,l,o);if(re(n)){let u=new Ee(null);return a.getNode().forEachChild(as,(c,h)=>{u=u.set(new we(c),h)}),Zf(t,e,n,u,i,s,l,o)}else return e}else{let u=new Ee(null);return r.foreach((c,h)=>{const d=Le(n,c);a.isCompleteForPath(d)&&(u=u.set(c,a.getNode().getChild(d)))}),Zf(t,e,n,u,i,s,l,o)}}function vM(t,e,n,r,i){const s=e.serverCache,o=VC(e,s.getNode(),s.isFullyInitialized()||re(n),s.isFiltered());return GC(t,o,n,r,WC,i)}function _M(t,e,n,r,i,s){let o;if(Fu(r,n)!=null)return e;{const l=new Ng(r,e,i),a=e.eventCache.getNode();let u;if(re(n)||ee(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Lu(r,Si(e));else{const h=e.serverCache.getNode();R(h instanceof H,"serverChildren would be complete if leaf node"),c=Ig(r,h)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=ee(n);let h=xg(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=a.getImmediateChild(c)),h!=null?u=t.filter.updateChild(a,c,h,Ce(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,H.EMPTY_NODE,Ce(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Lu(r,Si(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Fu(r,he())!=null,Po(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wM{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new wg(r.getIndex()),s=FO(r);this.processor_=dM(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(H.EMPTY_NODE,l.getNode(),null),c=new Ei(a,o.isFullyInitialized(),i.filtersNodes()),h=new Ei(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=rh(h,c),this.eventGenerator_=new WO(this.query_)}get query(){return this.query_}}function EM(t){return t.viewCache_.serverCache.getNode()}function SM(t,e){const n=Si(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!re(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function j0(t){return t.eventRegistrations_.length===0}function CM(t,e){t.eventRegistrations_.push(e)}function B0(t,e,n){const r=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function H0(t,e,n,r){e.type===Tn.MERGE&&e.source.queryId!==null&&(R(Si(t.viewCache_),"We should always have a full cache before handling merges"),R(qf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=pM(t.processor_,i,e,n,r);return fM(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,KC(t,s.changes,s.viewCache.eventCache.getNode(),null)}function TM(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Pe,(s,o)=>{r.push(Ns(s,o))}),n.isFullyInitialized()&&r.push(LC(n.getNode())),KC(t,r,n.getNode(),e)}function KC(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return GO(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uu;class kM{constructor(){this.views=new Map}}function IM(t){R(!Uu,"__referenceConstructor has already been defined"),Uu=t}function xM(){return R(Uu,"Reference.ts has not been loaded"),Uu}function NM(t){return t.views.size===0}function Ag(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return R(s!=null,"SyncTree gave us an op for an invalid query."),H0(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(H0(o,e,n,r));return s}}function AM(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Lu(n,i?r:null),a=!1;l?a=!0:r instanceof H?(l=Ig(n,r),a=!1):(l=H.EMPTY_NODE,a=!1);const u=rh(new Ei(l,a,!1),new Ei(r,i,!1));return new wM(e,u)}return o}function RM(t,e,n,r,i,s){const o=AM(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),CM(o,n),TM(o,n)}function DM(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=$r(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(B0(u,n,r)),j0(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(B0(a,n,r)),j0(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!$r(t)&&s.push(new(xM())(e._repo,e._path)),{removed:s,events:o}}function qC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function us(t,e){let n=null;for(const r of t.views.values())n=n||SM(r,e);return n}function QC(t,e){if(e._queryParams.loadsAllData())return ih(t);{const r=e._queryIdentifier;return t.views.get(r)}}function YC(t,e){return QC(t,e)!=null}function $r(t){return ih(t)!=null}function ih(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu;function PM(t){R(!zu,"__referenceConstructor has already been defined"),zu=t}function OM(){return R(zu,"Reference.ts has not been loaded"),zu}let MM=1;class W0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ee(null),this.pendingWriteTree_=aM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Rg(t,e,n,r,i){return YO(t.pendingWriteTree_,e,n,r,i),i?Ws(t,new wi(Sg(),e,n)):[]}function $M(t,e,n,r){XO(t.pendingWriteTree_,e,n,r);const i=Ee.fromObject(n);return Ws(t,new As(Sg(),e,i))}function hr(t,e,n=!1){const r=JO(t.pendingWriteTree_,e);if(ZO(t.pendingWriteTree_,e)){let s=new Ee(null);return r.snap!=null?s=s.set(he(),!0):Et(r.children,o=>{s=s.set(new we(o),!0)}),Ws(t,new bu(r.path,s,n))}else return[]}function sh(t,e,n){return Ws(t,new wi(Cg(),e,n))}function bM(t,e,n){const r=Ee.fromObject(n);return Ws(t,new As(Cg(),e,r))}function LM(t,e){return Ws(t,new _l(Cg(),e))}function FM(t,e,n){const r=Dg(t,n);if(r){const i=Pg(r),s=i.path,o=i.queryId,l=Wt(s,e),a=new _l(Tg(o),l);return Og(t,s,a)}else return[]}function ep(t,e,n,r){const i=e._path,s=t.syncPointTree_.get(i);let o=[];if(s&&(e._queryIdentifier==="default"||YC(s,e))){const l=DM(s,e,n,r);NM(s)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const a=l.removed;o=l.events;const u=a.findIndex(h=>h._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(i,(h,d)=>$r(d));if(u&&!c){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const d=jM(h);for(let p=0;p<d.length;++p){const g=d[p],v=g.query,E=ZC(t,g);t.listenProvider_.startListening(Mo(v),ju(t,v),E.hashFn,E.onComplete)}}}!c&&a.length>0&&!r&&(u?t.listenProvider_.stopListening(Mo(e),null):a.forEach(h=>{const d=t.queryToTagMap.get(lh(h));t.listenProvider_.stopListening(Mo(h),d)})),BM(t,a)}return o}function VM(t,e,n,r){const i=Dg(t,r);if(i!=null){const s=Pg(i),o=s.path,l=s.queryId,a=Wt(o,e),u=new wi(Tg(l),a,n);return Og(t,o,u)}else return[]}function UM(t,e,n,r){const i=Dg(t,r);if(i){const s=Pg(i),o=s.path,l=s.queryId,a=Wt(o,e),u=Ee.fromObject(n),c=new As(Tg(l),a,u);return Og(t,o,c)}else return[]}function zM(t,e){const n=t._path;let r=null,i=!1;e.syncPointTree_.foreachOnPath(n,(u,c)=>{const h=Wt(u,n);r=r||us(c,h),i=i||$r(c)});let s=e.syncPointTree_.get(n);s?(i=i||$r(s),r=r||us(s,he())):(s=new kM,e.syncPointTree_=e.syncPointTree_.set(n,s));let o;r!=null?o=!0:(o=!1,r=H.EMPTY_NODE,e.syncPointTree_.subtree(n).foreachChild((c,h)=>{const d=us(h,he());d&&(r=r.updateImmediateChild(c,d))}));const l=YC(s,t);if(!l&&!t._queryParams.loadsAllData()){const u=lh(t);R(!e.queryToTagMap.has(u),"View does not exist, but we have a tag");const c=HM();e.queryToTagMap.set(u,c),e.tagToQueryMap.set(c,u)}const a=kg(e.pendingWriteTree_,n);return{syncPoint:s,writesCache:a,serverCache:r,serverCacheComplete:o,foundAncestorDefaultView:i,viewAlreadyExists:l}}function G0(t,e,n){const{syncPoint:r,serverCache:i,writesCache:s,serverCacheComplete:o,viewAlreadyExists:l,foundAncestorDefaultView:a}=zM(e,t);let u=RM(r,e,n,s,i,o);if(!l&&!a){const c=QC(r,e);u=u.concat(WM(t,e,c))}return u}function oh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Wt(o,e),u=us(l,a);if(u)return u});return jC(i,e,s,n,!0)}function Ws(t,e){return XC(e,t.syncPointTree_,null,kg(t.pendingWriteTree_,he()))}function XC(t,e,n,r){if(re(t.path))return JC(t,e,n,r);{const i=e.get(he());n==null&&i!=null&&(n=us(i,he()));let s=[];const o=ee(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=BC(r,o);s=s.concat(XC(l,a,u,c))}return i&&(s=s.concat(Ag(i,t,r,n))),s}}function JC(t,e,n,r){const i=e.get(he());n==null&&i!=null&&(n=us(i,he()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=BC(r,o),c=t.operationForChild(o);c&&(s=s.concat(JC(c,l,a,u)))}),i&&(s=s.concat(Ag(i,t,r,n))),s}function ZC(t,e){const n=e.query,r=ju(t,n);return{hashFn:()=>(EM(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?FM(t,n._path,r):LM(t,n._path);{const s=MP(i,n);return ep(t,n,null,s)}}}}function ju(t,e){const n=lh(e);return t.queryToTagMap.get(n)}function lh(t){return t._path.toString()+"$"+t._queryIdentifier}function Dg(t,e){return t.tagToQueryMap.get(e)}function Pg(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new we(t.substr(0,e))}}function Og(t,e,n){const r=t.syncPointTree_.get(e);R(r,"Missing sync point for query tag that we're tracking");const i=kg(t.pendingWriteTree_,e);return Ag(r,n,i,null)}function jM(t){return t.fold((e,n,r)=>{if(n&&$r(n))return[ih(n)];{let i=[];return n&&(i=qC(n)),Et(r,(s,o)=>{i=i.concat(o)}),i}})}function Mo(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(OM())(t._repo,t._path):t}function BM(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=lh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function HM(){return MM++}function WM(t,e,n){const r=e._path,i=ju(t,e),s=ZC(t,n),o=t.listenProvider_.startListening(Mo(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)R(!$r(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,h)=>{if(!re(u)&&c&&$r(c))return[ih(c).query];{let d=[];return c&&(d=d.concat(qC(c).map(p=>p.query))),Et(h,(p,g)=>{d=d.concat(g)}),d}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(Mo(c),ju(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Mg(n)}node(){return this.node_}}class $g{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Le(this.path_,e);return new $g(this.syncTree_,n)}node(){return oh(this.syncTree_,this.path_)}}const GM=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},K0=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return KM(t[".sv"],e,n);if(typeof t[".sv"]=="object")return qM(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},KM=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},qM=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&R(!1,"Unexpected increment value: "+r);const i=e.node();if(R(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},eT=function(t,e,n,r){return Lg(e,new $g(n,t),r)},bg=function(t,e,n){return Lg(t,new Mg(e),n)};function Lg(t,e,n){const r=t.getPriority().val(),i=K0(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=K0(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new et(l,qe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new et(i))),o.forEachChild(Pe,(l,a)=>{const u=Lg(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ah(t,e){let n=e instanceof we?e:new we(e),r=t,i=ee(n);for(;i!==null;){const s=hi(r.node.children,i)||{children:{},childCount:0};r=new Fg(i,r,s),n=Ce(n),i=ee(n)}return r}function Ri(t){return t.node.value}function Vg(t,e){t.node.value=e,tp(t)}function tT(t){return t.node.childCount>0}function QM(t){return Ri(t)===void 0&&!tT(t)}function uh(t,e){Et(t.node.children,(n,r)=>{e(new Fg(n,t,r))})}function nT(t,e,n,r){n&&!r&&e(t),uh(t,i=>{nT(i,e,!0,r)}),n&&r&&e(t)}function YM(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Hl(t){return new we(t.parent===null?t.name:Hl(t.parent)+"/"+t.name)}function tp(t){t.parent!==null&&XM(t.parent,t.name,t)}function XM(t,e,n){const r=QM(n),i=An(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,tp(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,tp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JM=/[\[\].#$\/\u0000-\u001F\u007F]/,ZM=/[\[\].#$\u0000-\u001F\u007F]/,cd=10*1024*1024,Ug=function(t){return typeof t=="string"&&t.length!==0&&!JM.test(t)},rT=function(t){return typeof t=="string"&&t.length!==0&&!ZM.test(t)},e$=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),rT(t)},iT=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!hg(t)||t&&typeof t=="object"&&An(t,".sv")},t$=function(t,e,n,r){r&&e===void 0||Wl(Nc(t,"value"),e,n)},Wl=function(t,e,n){const r=n instanceof we?new mO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Gr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Gr(r)+" with contents = "+e.toString());if(hg(e))throw new Error(t+"contains "+e.toString()+" "+Gr(r));if(typeof e=="string"&&e.length>cd/3&&Ac(e)>cd)throw new Error(t+"contains a string greater than "+cd+" utf8 bytes "+Gr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Et(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ug(o)))throw new Error(t+" contains an invalid key ("+o+") "+Gr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);gO(r,o),Wl(t,l,r),yO(r)}),i&&s)throw new Error(t+' contains ".value" child '+Gr(r)+" in addition to actual children.")}},n$=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ml(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Ug(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(pO);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&cn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},r$=function(t,e,n,r){if(r&&e===void 0)return;const i=Nc(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Et(e,(o,l)=>{const a=new we(o);if(Wl(i,l,Le(n,a)),gg(a)===".priority"&&!iT(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(a)}),n$(i,s)},sT=function(t,e,n,r){if(!(r&&n===void 0)&&!rT(n))throw new Error(Nc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},i$=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),sT(t,e,n,r)},zg=function(t,e){if(ee(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},s$=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ug(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!e$(n))throw new Error(Nc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o${constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ch(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!yg(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function oT(t,e,n){ch(t,n),lT(t,r=>yg(r,e))}function mn(t,e,n){ch(t,n),lT(t,r=>cn(r,e)||cn(e,r))}function lT(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(l$(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function l$(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ri&&mt("event: "+n.toString()),Hs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a$="repo_interrupt",u$=25;class c${constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new o$,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$u(),this.transactionQueueTree_=new Fg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function h$(t,e,n){if(t.stats_=pg(t.repoInfo_),t.forceRestClient_||FP())t.server_=new Mu(t.repoInfo_,(r,i,s,o)=>{q0(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Q0(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{it(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new qn(t.repoInfo_,e,(r,i,s,o)=>{q0(t,r,i,s,o)},r=>{Q0(t,r)},r=>{f$(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=HP(t.repoInfo_,()=>new HO(t.stats_,t.server_)),t.infoData_=new VO,t.infoSyncTree_=new W0({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=sh(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),jg(t,"connected",!1),t.serverSyncTree_=new W0({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);mn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function d$(t){const n=t.infoData_.getNode(new we(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gl(t){return GM({timestamp:d$(t)})}function q0(t,e,n,r,i){t.dataUpdateCount++;const s=new we(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=du(n,u=>qe(u));o=UM(t.serverSyncTree_,s,a,i)}else{const a=qe(n);o=VM(t.serverSyncTree_,s,a,i)}else if(r){const a=du(n,u=>qe(u));o=bM(t.serverSyncTree_,s,a)}else{const a=qe(n);o=sh(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Ds(t,s)),mn(t.eventQueue_,l,o)}function Q0(t,e){jg(t,"connected",e),e===!1&&g$(t)}function f$(t,e){Et(e,(n,r)=>{jg(t,n,r)})}function jg(t,e,n){const r=new we("/.info/"+e),i=qe(n);t.infoData_.updateSnapshot(r,i);const s=sh(t.infoSyncTree_,r,i);mn(t.eventQueue_,r,s)}function hh(t){return t.nextWriteId_++}function p$(t,e,n,r,i){Kl(t,"set",{path:e.toString(),value:n,priority:r});const s=Gl(t),o=qe(n,r),l=oh(t.serverSyncTree_,e),a=bg(o,l,s),u=hh(t),c=Rg(t.serverSyncTree_,e,a,u,!0);ch(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(d,p)=>{const g=d==="ok";g||bt("set at "+e+" failed: "+d);const v=hr(t.serverSyncTree_,u,!g);mn(t.eventQueue_,e,v),np(t,i,d,p)});const h=Hg(t,e);Ds(t,h),mn(t.eventQueue_,h,[])}function m$(t,e,n,r){Kl(t,"update",{path:e.toString(),value:n});let i=!0;const s=Gl(t),o={};if(Et(n,(l,a)=>{i=!1,o[l]=eT(Le(e,l),qe(a),t.serverSyncTree_,s)}),i)mt("update() called with empty data.  Don't do anything."),np(t,r,"ok",void 0);else{const l=hh(t),a=$M(t.serverSyncTree_,e,o,l);ch(t.eventQueue_,a),t.server_.merge(e.toString(),n,(u,c)=>{const h=u==="ok";h||bt("update at "+e+" failed: "+u);const d=hr(t.serverSyncTree_,l,!h),p=d.length>0?Ds(t,e):e;mn(t.eventQueue_,p,d),np(t,r,u,c)}),Et(n,u=>{const c=Hg(t,Le(e,u));Ds(t,c)}),mn(t.eventQueue_,e,[])}}function g$(t){Kl(t,"onDisconnectEvents");const e=Gl(t),n=$u();Kf(t.onDisconnect_,he(),(i,s)=>{const o=eT(i,s,t.serverSyncTree_,e);FC(n,i,o)});let r=[];Kf(n,he(),(i,s)=>{r=r.concat(sh(t.serverSyncTree_,i,s));const o=Hg(t,i);Ds(t,o)}),t.onDisconnect_=$u(),mn(t.eventQueue_,he(),r)}function y$(t,e,n){let r;ee(e._path)===".info"?r=G0(t.infoSyncTree_,e,n):r=G0(t.serverSyncTree_,e,n),oT(t.eventQueue_,e._path,r)}function Y0(t,e,n){let r;ee(e._path)===".info"?r=ep(t.infoSyncTree_,e,n):r=ep(t.serverSyncTree_,e,n),oT(t.eventQueue_,e._path,r)}function v$(t){t.persistentConnection_&&t.persistentConnection_.interrupt(a$)}function Kl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),mt(n,...e)}function np(t,e,n,r){e&&Hs(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function _$(t,e,n,r,i,s){Kl(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:uC(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},l=Bg(t,e,void 0);o.currentInputSnapshot=l;const a=o.update(l.val());if(a===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Wl("transaction failed: Data returned ",a,o.path),o.status=0;const u=ah(t.transactionQueueTree_,e),c=Ri(u)||[];c.push(o),Vg(u,c);let h;typeof a=="object"&&a!==null&&An(a,".priority")?(h=hi(a,".priority"),R(iT(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(oh(t.serverSyncTree_,e)||H.EMPTY_NODE).getPriority().val();const d=Gl(t),p=qe(a,h),g=bg(p,l,d);o.currentOutputSnapshotRaw=p,o.currentOutputSnapshotResolved=g,o.currentWriteId=hh(t);const v=Rg(t.serverSyncTree_,e,g,o.currentWriteId,o.applyLocally);mn(t.eventQueue_,e,v),dh(t,t.transactionQueueTree_)}}function Bg(t,e,n){return oh(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function dh(t,e=t.transactionQueueTree_){if(e||fh(t,e),Ri(e)){const n=uT(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&w$(t,Hl(e),n)}else tT(e)&&uh(e,n=>{dh(t,n)})}function w$(t,e,n){const r=n.map(u=>u.currentWriteId),i=Bg(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];R(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=Wt(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Kl(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,c=c.concat(hr(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();fh(t,ah(t.transactionQueueTree_,e)),dh(t,t.transactionQueueTree_),mn(t.eventQueue_,e,c);for(let d=0;d<h.length;d++)Hs(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{bt("transaction at "+a.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Ds(t,e)}},o)}function Ds(t,e){const n=aT(t,e),r=Hl(n),i=uT(t,n);return E$(t,i,r),r}function E$(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Wt(n,a.path);let c=!1,h;if(R(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,h=a.abortReason,i=i.concat(hr(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=u$)c=!0,h="maxretry",i=i.concat(hr(t.serverSyncTree_,a.currentWriteId,!0));else{const d=Bg(t,a.path,o);a.currentInputSnapshot=d;const p=e[l].update(d.val());if(p!==void 0){Wl("transaction failed: Data returned ",p,a.path);let g=qe(p);typeof p=="object"&&p!=null&&An(p,".priority")||(g=g.updatePriority(d.getPriority()));const E=a.currentWriteId,m=Gl(t),f=bg(g,d,m);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=f,a.currentWriteId=hh(t),o.splice(o.indexOf(E),1),i=i.concat(Rg(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(hr(t.serverSyncTree_,E,!0))}else c=!0,h="nodata",i=i.concat(hr(t.serverSyncTree_,a.currentWriteId,!0))}mn(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(h),!1,null))))}fh(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Hs(r[l]);dh(t,t.transactionQueueTree_)}function aT(t,e){let n,r=t.transactionQueueTree_;for(n=ee(e);n!==null&&Ri(r)===void 0;)r=ah(r,n),e=Ce(e),n=ee(e);return r}function uT(t,e){const n=[];return cT(t,e,n),n.sort((r,i)=>r.order-i.order),n}function cT(t,e,n){const r=Ri(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);uh(e,i=>{cT(t,i,n)})}function fh(t,e){const n=Ri(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Vg(e,n.length>0?n:void 0)}uh(e,r=>{fh(t,r)})}function Hg(t,e){const n=Hl(aT(t,e)),r=ah(t.transactionQueueTree_,e);return YM(r,i=>{hd(t,i)}),hd(t,r),nT(r,i=>{hd(t,i)}),n}function hd(t,e){const n=Ri(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(hr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Vg(e,void 0):n.length=s+1,mn(t.eventQueue_,Hl(e),i);for(let o=0;o<r.length;o++)Hs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S$(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function C$(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):bt(`Invalid query segment '${n}' in query '${t}'`)}return e}const X0=function(t,e){const n=T$(t),r=n.namespace;n.domain==="firebase.com"&&vi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&vi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||AP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zP(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new we(n.pathString)}},T$=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=S$(t.substring(c,h)));const d=C$(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const p=e.slice(0,u);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+it(this.snapshot.exportVal())}}class dT{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k${constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return re(this._path)?null:gg(this._path)}get ref(){return new Fn(this._repo,this._path)}get _queryIdentifier(){const e=$0(this._queryParams),n=dg(e);return n==="{}"?"default":n}get _queryObject(){return $0(this._queryParams)}isEqual(e){if(e=tn(e),!(e instanceof Wg))return!1;const n=this._repo===e._repo,r=yg(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+fO(this._path)}}class Fn extends Wg{constructor(e,n){super(e,n,new Eg,!1)}get parent(){const e=RC(this._path);return e===null?null:new Fn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ps{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new we(e),r=ii(this.ref,e);return new Ps(this._node.getChild(n),r,Pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ps(i,ii(this.ref,r),Pe)))}hasChild(e){const n=new we(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Mi(t,e){return t=tn(t),t._checkNotDeleted("ref"),e!==void 0?ii(t._root,e):t._root}function ii(t,e){return t=tn(t),ee(t._path)===null?i$("child","path",e,!1):sT("child","path",e,!1),new Fn(t._repo,Le(t._path,e))}function I$(t){return zg("remove",t._path),x$(t,null)}function x$(t,e){t=tn(t),zg("set",t._path),t$("set",e,t._path,!1);const n=new Ls;return p$(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function N$(t,e){r$("update",e,t._path,!1);const n=new Ls;return m$(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Gg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new hT("value",this,new Ps(e.snapshotNode,new Fn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new dT(this,e,n):null}matches(e){return e instanceof Gg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Kg{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new dT(this,e,n):null}createEvent(e,n){R(e.childName!=null,"Child events should have a childName.");const r=ii(new Fn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new hT(e.type,this,new Ps(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Kg?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function A$(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,h)=>{Y0(t._repo,t,l),a(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new k$(n,s||void 0),l=e==="value"?new Gg(o):new Kg(e,o);return y$(t._repo,t,l),()=>Y0(t._repo,t,l)}function fT(t,e,n,r){return A$(t,"value",e,n,r)}IM(Fn);PM(Fn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R$="FIREBASE_DATABASE_EMULATOR_HOST",rp={};let D$=!1;function P$(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||vi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=X0(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[R$]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=X0(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new Hf(Hf.OWNER):new UP(t.name,t.options,e);s$("Invalid Firebase Database URL",o),re(o.path)||vi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=M$(l,t,c,new VP(t.name,n));return new $$(h,t)}function O$(t,e){const n=rp[e];(!n||n[t.key]!==t)&&vi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),v$(t),delete n[t.key]}function M$(t,e,n,r){let i=rp[e.name];i||(i={},rp[e.name]=i);let s=i[t.toURLString()];return s&&vi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new c$(t,D$,n,r),i[t.toURLString()]=s,s}class $${constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(h$(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fn(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(O$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&vi("Cannot call "+e+" on a deleted database.")}}function b$(t=Xw(),e){return Qw(t,"database").getImmediate({identifier:e})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L$(t){kP(Yw),el(new vs("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return P$(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Cr(v0,_0,t),Cr(v0,_0,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F${constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function dd(t,e,n){var r;if(t=tn(t),zg("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,s=new Ls,o=(a,u,c)=>{let h=null;a?s.reject(a):(h=new Ps(c,new Fn(t._repo,t._path),Pe),s.resolve(new F$(u,h)))},l=fT(t,()=>{});return _$(t._repo,t._path,e,o,l,i),s.promise}qn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};qn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};L$();const V$={apiKey:"AIzaSyBxkDGrr__3DYSvFTU4HkZKkJH7UZpy3JA",authDomain:"agendamento-3466d.firebaseapp.com",projectId:"agendamento-3466d",storageBucket:"agendamento-3466d.appspot.com",messagingSenderId:"261205098783",appId:"1:261205098783:web:9db208c607fc041703302a",measurementId:"G-M80X3C7KRM",databaseURL:"https://agendamento-3466d-default-rtdb.firebaseio.com/"},pT=iA(V$),$i=b$(pT),po=uP(pT),U$=({Registrar:t,AdminOpen:e})=>{const[n,r]=z.exports.useState(!1);return z.exports.useEffect(()=>{(async()=>{JSON.parse(localStorage.getItem("user")).id!=""&&await sC(Au(po,"users",JSON.parse(localStorage.getItem("user")).id)).then(s=>{r(s.data().admin)})})()},[]),k(zn,{children:Se(Dx,{children:[k(Px,{onClick:()=>{t()},children:k(jx,{})})," Academia Residencial do Lago ",n?k(Ox,{onClick:()=>e(),children:k(Hx,{})}):null]})})},z$=q.div`
    margin-top: 0%;
    width:100%;
    height:100vh;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    /* background-color:#525252; */
    /* background-color:#1b495c; */
`,J0=q.h4`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:white;
    width:400px;
    height:100%;
    max-height: 40px;
    border-radius:10px;
    border-left: 1px solid #307e9c;
    border-right:${t=>t.isOnAgenda?"green":"none"};
    margin:5px;
    box-shadow:0 0 3px 0.5px #00000028;
    cursor: pointer;
    :hover{
        animation: borda 0.3s forwards ease;
        @keyframes borda {
            from{
                border-left:1px solid #307e9c;

            }to{
                border-left:5px solid #307e9c;
            }
        }
        color:grey;
    }
    @keyframes init {
        from{
            opacity:0;
            left:1rem;
        }to{
            opacity:1;
            left:0;
        }
    }

    @media screen and (max-width: 500px) {
        width:80%;
    }
`,j$=q.div`
    width: 15px;
    height: 15px;
    padding: 5px;
    position:relative;
    bottom:10px;
    border-radius: 50%;
    background-color:#307e9c;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    font-size:0.7rem;
`,B$=({Modal:t,getData:e,getHoras:n})=>{const[r,i]=z.exports.useState(n),[s,o]=z.exports.useState([]);return z.exports.useState([""]),z.exports.useEffect(()=>{n!=null&&(i(n),o(n[1].horarios))},[n]),k(zn,{children:s!=[]?k(z$,{children:Object.keys(s).map(l=>Se(J0,{onClick:()=>{try{t(!0),e(l)}catch{return k(J0,{children:"N\xE3o foi possivel carregar agenda"})}},children:[l,k(j$,{children:s[l]!=""?s[l].length:0},l.length)]},l))}):null})},Z0=q.header`
    position: relative;
    bottom: 0%;
    display: flex;
    justify-content: center;
    margin: 3rem;
    color:white;
    animation: ${t=>t.noAnim?"none":"start 0.6s ease"};
    @keyframes start {
        from{
            opacity: 0;
            left:-50px
        }
        to{
            opacity: 1;
            left:0px;
        }
    }

`,H$=q.div`

    display: flex;
    align-items: center;
    justify-content: center;
    height:25px;
    width: 100%;
    background-color: #307e9c;
    color:white;
`,e_=q.button`
    background-color:transparent;
    outline:none;
    border:none;
    color:white;
    cursor: pointer;
    padding: 8px;
    position:relative;
`;function W$(t){return nr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"}}]})(t)}function G$(t){return nr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"}}]})(t)}const K$=({getDia:t,NextDia:e,PrevDia:n})=>{const[r,i]=z.exports.useState("");return z.exports.useEffect(()=>{try{i(t[0])}catch{}},[t]),Se(H$,{children:[k(e_,{children:k(W$,{onClick:()=>{n()}})}),r!="loading..."?k(Z0,{children:r.replaceAll("-"," . ")},r):k(Z0,{noAnim:!0,children:r},r),k(e_,{children:k(G$,{onClick:()=>{e()}})})]})},q$=Rx`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Montserrat', sans-serif;
    }
    body{
        background:whitesmoke;
        
    }
    .App{
        display:flex;
        flex-direction:column;
        align-items:center;
        min-height: 66.9vh;
        /* min-width: 460px; */
    }
    @media(max-width:500px) {
    .App{
        width: 100%;
    }
}
`,Q$=q.div`
    width: 100%;
    height:50%;
    /* background-color:green; */
    position:relative;
    overflow:hidden;
    display:flex;
    justify-content:center;
    column-gap: 1em;
    align-items:center;
    font-size: 1em;
    color:black;
`,t_=q.button`
    width: 100%;
    height:100%;
    outline: none;
    background-color:transparent;
    border:none;
    cursor: pointer;
    font-size: 1.2em;

`,Y$=q.input`
    color:black;
    font-size:1rem;
    width:100%;
    text-align:center;
    border:none;
`;function X$(t){return nr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm43.4 289.1c7.5 7.5 7.5 19.8 0 27.3-3.8 3.8-8.7 5.6-13.6 5.6s-9.9-1.9-13.7-5.7l-94-94.3c-6.9-7.6-6.7-19.3.6-26.6l95.4-95.7c7.5-7.5 19.7-7.6 27.3 0 7.5 7.5 7.6 19.7 0 27.3l-81.9 81 79.9 81.1z"}}]})(t)}function J$(t){return nr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm244.5 0l-81.9-81.1c-7.5-7.5-7.5-19.8 0-27.3s19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81z"}}]})(t)}function n_(t){return nr({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(t)}const Z$=({changeValue:t})=>{const[e,n]=z.exports.useState(0),r=s=>{if(s+1<=2)return n(e+1)},i=s=>{if(s-1>=0)return n(e-1)};return z.exports.useEffect(()=>{t(e)},[e]),Se(Q$,{children:[k(t_,{onClick:()=>{i(e)},children:k(X$,{})}),k(Y$,{disabled:!0,type:"text",value:e,onChange:()=>e}),k(t_,{onClick:()=>{r(e)},children:k(J$,{})})]})},eb=q.div`
    position:relative;
    border-radius:15px;
    min-width:300px;
    min-height: 300px;
    background-color:white;
    display:flex;
    flex-direction:column;
    animation: 0.3s entrada ease;
    box-shadow: 1px 1px 10px 0px black;
    
    @media screen and (max-width: 500px) {
        width:90%;
        min-height:40%;
    }

    @keyframes entrada {
        from{
            left:-20px;
            opacity: 0;
        }
        to{
            opacity: 1;
            left:0px;
        }
    }
    
`,tb=q.div`
    font-size: 1em;
    width: 100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    background-color: rgba(0, 0, 0, 0.05);
    z-index:1;

`;q.input`
    width: 100%;
    height: 2em;
    outline:none;
    border: 1px solid grey;
    text-align:center;
    margin: 10px 0px 5px 0px;
    border-radius: 15px;

`;const fd=q.b`
    text-align:center;
`,r_=q.header`
    width:100%;
    height:auto;
    padding: 10px;
    display:flex;
    gap: 10px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`,nb=q.section`
    width:100%;
    height:100%;
    padding: 15px;
    border-top: 0.5px groove #6e6e6e60;
    border-bottom: 0.5px groove #6e6e6e60;
    display:flex;
    justify-content:space-between;
    flex-direction:column;
    /* align-items:flex-start; */
    background-color:white;
`,rb=q.footer`
    width:100%;
    height:auto;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`,pd=q.button`

    background: ${t=>t.primary?"white":"#307e9c"};
    color: ${t=>t.primary?"#307e9c":"white"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #307e9c;
    border-radius: 3px;
    cursor: pointer;

    :hover{
        background: ${t=>t.primary?"#e9e9e9":"#286983"};
    }

`,ib=q.button`

    background: #696969;
    color: white;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #696969;
    border-radius: 3px;
`,i_=q.div`
    display:flex;
    justify-content:${t=>t.center?"center":"start"};
    gap:20px;
    align-items:center;
    margin-bottom:10px;
`,sb=q.div`
    display:flex;
    flex-direction:column;
    justify-content:start;
    align-items:center;
    margin-bottom:10px;
`,s_=q.div`
    background-color:${t=>t.empty?"":"#ebebeb"};
    padding:5px;
    border-radius: 15px;
    overflow-x:hidden;
    overflow-y:hidden;
`,ob=q.input`
    font-size:1rem;
    color:black;
    outline:none;
    padding:2%;
    margin:1%;
    border-radius:15px;
    width:100%;
`,lb=({casa:t,nome:e,horario:n,ModalAgenda:r,dia:i,checkAgendamento:s,isOnAgenda:o,liberarHorario:l})=>{const[a,u]=z.exports.useState(JSON.parse(localStorage.getItem("user"))),[c,h]=z.exports.useState(0),[d,p]=z.exports.useState([{nome:e,casa:t}]),[g,v]=z.exports.useState(!1),E=()=>{const f=i[1].horarios[n],y=[];for(let w=1;w<=c;w++)if(f[0]==""&&(f.length=0),f.length+w<3)y.push(k(ob,{onChange:T=>{let O=d;O[w]={nome:T.target.value,casa:t},p(O),console.log(d)},placeholder:`Nome acompanhante ${w}`},w));else return k("p",{children:"M\xE1ximo 3 pessoas por hor\xE1rio!"});return y},m=()=>{let f=[];for(let y=0;y<=c;y++){if(d[y]=={casa:a.casa,nome:""}||d[y]==null)return v(!0),setTimeout(()=>{v(!1)},4e3);f.push(d[y])}s(f,n)?(console.log("Criado com sucesso."),alert("Reservado com sucesso!")):console.log("Horario indisponivel")};return k(tb,{children:Se(eb,{children:[Se(r_,{children:[k("h4",{children:"Agendar hor\xE1rio"}),Se("h5",{children:[i[0].replaceAll("-","/")," - ",n," horas"]})]}),Se(nb,{children:[Se(i_,{center:!0,children:[Se("label",{children:[k(fd,{children:"Seu nome:"})," ",a.nome]}),Se("label",{children:[k(fd,{children:"Sua casa:"})," ",a.casa]})]}),k(r_,{children:i[1].horarios[n].length+1>=3?k("p",{children:"Acompanhante indispon\xEDvel!"}):Se(zn,{children:[k("h6",{children:"Levar acompanhante com voc\xEA?"}),k(Z$,{changeValue:f=>h(f)}),c>0?k(zn,{children:E()}):k("p",{children:"Apenas eu irei."}),g?k("p",{children:"Preencha o campo acima"}):null]})}),k(sb,{}),k(fd,{children:"J\xE1 reservados neste hor\xE1rio: "}),k(i_,{children:i[1].horarios[n].length==1&&i[1].horarios[n][0]==""?k(s_,{empty:!0,children:"Sem reservas at\xE9 o momento."}):i[1].horarios[n].map(f=>k(s_,{children:f},f))})]}),k("h6",{children:"*M\xE1ximo de 3 pessoas por hor\xE1rio."}),Se(rb,{children:[o(n)?k(pd,{onClick:()=>{l(n)},children:"Liberar horario"}):i[1].horarios[n].length==3?k(ib,{children:"Indispon\xEDvel"}):k(pd,{onClick:()=>{m()},children:"Confirmar"}),k(pd,{primary:!0,onClick:()=>{r(!1)},children:"Cancelar"})]})]})})},ab=q.div`
    position:relative;
    border-radius:15px;
    width:25%;
    height: auto;
    background-color:white;
    display:flex;
    flex-direction:column;
    animation: 0.3s entrada ease;
    box-shadow: 1px 1px 10px 0px black;
    
    @media screen and (max-width: 500px) {
        width:90%;
        height:40%;
    }

    @keyframes entrada {
        from{
            left:-20px;
            opacity: 0;
        }
        to{
            opacity: 1;
            left:0px;
        }
    }
    
`,ub=q.div`
    font-size: 1em;
    width: 100vw;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    background-color: rgba(0, 0, 0, 0.05);
    z-index:1;

`,o_=q.input`
    width: 100%;
    height: 2em;
    outline:none;
    border: 1px solid grey;
    text-align:center;
    margin: 10px 0px 5px 0px;
    border-radius: 15px;

`,cb=q.header`
    width:100%;
    height:25%;
    padding: 10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`,hb=q.section`
    width:100%;
    height:100%;
    padding: 15px;
    border-top: 0.5px groove #6e6e6e60;
    border-bottom: 0.5px groove #6e6e6e60;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:flex-start;
    background-color:white;
`,db=q.footer`
    width:100%;
    height:100%;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`,fb=q.button`
    background-color:white;
    padding: 10px;
    border-radius: 50%;
    text-align:center;
    border: 0;
    cursor: pointer;
`,pb=q.button`

    background: ${t=>t.primary?"white":"#307e9c"};
    color: ${t=>t.primary?"#307e9c":"white"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #307e9c;
    border-radius: 3px;
    cursor: pointer;

    :hover{
        background: ${t=>t.primary?"#e9e9e9":"#286983"};
    }

`;function mb(t){return nr({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(t)}const gb=({Registro:t})=>{const[e,n]=z.exports.useState(""),[r,i]=z.exports.useState(""),[s,o]=z.exports.useState("");z.exports.useEffect(()=>{if(localStorage.getItem("user")){let c=JSON.parse(localStorage.getItem("user"));n(c.nome),i(c.casa),o(c.id),s!=""&&l()}},[]);const l=async()=>{await sC(Au(po,"users",s)).then(c=>{setUserActual(c.data())})},a=async()=>{if(!localStorage.getItem("user"))await y0(g0(po,"users"),{nome:e,casa:r}).then(c=>{o(c.id),localStorage.setItem("user",JSON.stringify({nome:e,casa:r,id:c.id})),console.log("Usu\xE1rio criado com sucesso!")});else try{await CP(Au(po,"users",s),{nome:e,casa:r}).then(c=>{console.log("Usu\xE1rio atualizado com sucesso!"),localStorage.setItem("user",JSON.stringify({nome:e,casa:r,id:s}))})}catch{console.error("Houve algum problema com a localiza\xE7\xE3o de sua conta. Novo ID gerado para voc\xEA!"),await y0(g0(po,"users"),{nome:e,casa:r}).then(h=>{o(h.id),localStorage.setItem("user",JSON.stringify({nome:e,casa:r,id:h.id})),console.log("Usu\xE1rio criado com sucesso!")})}return t({nome:e,casa:r,id:s})};return k(ub,{children:Se(ab,{children:[Se(cb,{children:[k("h4",{children:"Confirme seus dados"}),k(fb,{children:k(mb,{onClick:()=>t({nome:e,casa:r,id:s})})})]}),Se(hb,{children:[k("label",{children:"Nome"}),k(o_,{type:"text",onChange:c=>n(c.target.value),placeholder:"Ex.: Jo\xE3o",value:e}),k("label",{children:"Casa"}),k(o_,{type:"number",onChange:c=>i(c.target.value),placeholder:"Ex.: 12",value:r})]}),k(db,{children:k(pb,{onClick:()=>a(),children:"Confirmar"})})]})})},yb=q.div`

    position:absolute;
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100vw;
    height: 100vh;
    background-color:#03030396;

`;q.div`
    width: 100%;
    height: 100%;
    padding: 5px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    position:relative;
    margin: -5px -5px 0px 5px;
    background-color:#307e9c;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    font-size:0.7rem;
`;const vb=q.div`
    width: 50%;
    height: auto;
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border-radius: 15px;

    @media screen and (max-width: 500px) {
        width:95%;
    }

`,jr=q.header`
    margin: 15px;
`,_b=q.section`
    width: 100%;
    max-height: 70vh;
    height:50%;
    border-bottom: 1px solid grey;
    border-top: 1px solid grey;
    margin: 5px;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        width: 2px;
    }
`,wb=q.div`
    position:relative;
    padding: 15px;
    cursor: pointer;
`,Eb=q.header`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`,Sb=q.footer`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin: 15px;
`,Sa=q.button`
    background: ${t=>t.primary?"white":"#307e9c"};
    color: ${t=>t.primary?"#307e9c":"white"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #307e9c;
    border-radius: 3px;
    cursor: pointer;

    :hover{
        background: ${t=>t.primary?"#e9e9e9":"#286983"};
    }
`,md=q.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:90%;
    flex-wrap:wrap;
`,bi=q.button`
    position:relative;
    display:flex;
    justify-content:center;
    margin: 1px;
    padding: 5px;
    outline:none;
    border:none;
    font-size: 1rem;
    border-radius: 15px;
    background-color: ${t=>(t.existe,"#e9e9e9")};
    animation: init 0.5s forwards ease;
    cursor: pointer;
    :active{
        background-color:#2869837a;
    }
    @keyframes init {
        from{
            left: -5px;
            opacity:0;
        }to{
            left: 0px;
            opacity:1;
        }
    }
`,l_=q.div`
    display:flex;
    flex-direction: ${t=>t.column?"column":"row"};
    align-items:center;
    justify-content:center;
    margin: 5px;

`;q.input`
outline:none;
width:30%;
height:1.3rem;
text-align:center;
border: 1px solid grey;
margin:5px;

`;const Cb=({Agendas:t,onClose:e,updateAdminAgenda:n,pushAdminAgenda:r,removeAdminAgenda:i})=>{const[s,o]=z.exports.useState(""),[l,a]=z.exports.useState(!1),[u,c]=z.exports.useState(!1),[h,d]=z.exports.useState(""),[p,g]=z.exports.useState({"00:00":[""],"01:00":[""],"02:00":[""],"03:00":[""],"04:00":[""],"05:00":[""],"06:00":[""],"07:00":[""],"08:00":[""],"09:00":[""],"10:00":[""],"11:00":[""],"12:00":[""],"13:00":[""],"14:00":[""],"15:00":[""],"16:00":[""],"17:00":[""],"18:00":[""],"19:00":[""],"20:00":[""],"21:00":[""],"22:00":[""],"23:00":[""]}),[v,E]=z.exports.useState("");let m={"01:00":[""],"02:00":[],"03:00":[],"04:00":[],"05:00":[],"06:00":[],"07:00":[],"08:00":[],"09:00":[],"10:00":[],"11:00":[],"12:00":[],"13:00":[],"14:00":[],"15:00":[],"16:00":[],"17:00":[],"18:00":[],"19:00":[],"20:00":[],"21:00":[],"22:00":[],"23:00":[],"00:00":[]};const f=async C=>{if(Object.entries(p).length===0)return setTimeout(()=>{E(""),g(m)},3e3),E("Agenda n\xE3o pode estar vazia. Agenda ser\xE1 resetada.");r(C)},y=C=>{if(p[C]){let V={...p};delete V[C],g(V)}},w=C=>{let V=h;h[C]?(V={...h},delete V[C],d(V)):(V={...h},V[C]=[""],d(V))},T=async C=>{o(C[0].replaceAll("-","/")),d(C[1].horarios)},O=()=>{console.log(t),console.log(t[t.length-1][0]);const C=t[t.length-1][0].split("-");try{let V=new Date(`${C[1]}/${Number(C[0])}/${C[2]}`);return V.setDate(V.getDate()+1),V.toLocaleDateString("pt").replaceAll("/",".")}catch{console.log("Erro ao gerar data da agenda.")}},$=C=>{n({[s.replaceAll("/","-")]:{horarios:C}})};return k(yb,{children:Se(vb,{children:[Se(Eb,{children:[k(jr,{children:"Administra\xE7\xE3o"}),k(wb,{onClick:()=>{e()},children:k(n_,{})})]}),u&&!l&&k(zn,{children:Se(zn,{children:[Se(jr,{children:["EDITANDO AGENDA ",s]}),h==""?k(jr,{children:"Carregando..."}):Se(zn,{children:[k(jr,{children:"Horarios da agenda - Clique para remover"}),k(md,{children:Object.keys(h).sort().map((C,V)=>k(zn,{children:k(bi,{onClick:()=>{w(C)},children:C},V)}))}),k(jr,{children:"Deseja adicionar novo hor\xE1rio? - Clique para adicionar"}),k(md,{children:Object.keys(p).map((C,V)=>{if(!Object.keys(h).includes(C))return k(bi,{onClick:()=>{w(C)},children:C},V)})}),k(Sa,{onClick:()=>{$(h),a(!1),c(!1)},children:"Confirmar"})]})]})}),l&&Se(zn,{children:[k("h3",{children:O().replaceAll(".","/")}),k(jr,{children:"Deseja remover algum hor\xE1rio? Basta clicar nele."}),k(md,{children:Object.keys(p).map((C,V)=>k(bi,{onClick:()=>{y(C)},children:C},V))}),k(Sa,{onClick:()=>{f({[O().replaceAll(".","-")]:{horarios:p}}),a(!1),c(!1)},children:"Criar agenda"}),v!=""?k(jr,{children:v}):null]}),!l&&!u&&k(_b,{children:k(l_,{column:!0,children:t.map((C,V)=>Se(l_,{children:[k(bi,{children:C[0]}),k(bi,{children:k(n_,{onClick:()=>{confirm("deseja realmente excluir esta agenda?")&&i(C[[0]])}})}),k(bi,{children:k(Bx,{onClick:()=>{c(!0),T(C)}})})]},V))})}),Se(Sb,{children:[k(Sa,{onClick:()=>{a(!0),O(),c(!1)},children:"Gerar nova Agenda"}),k(Sa,{primary:!0,onClick:()=>{a(!1),c(!1)},children:"Exibir Agendas"})]})]})})};function Tb(){z.exports.useState(""),z.exports.useState("");const[t,e]=z.exports.useState(!1),[n,r]=z.exports.useState({nome:"",casa:"",id:""});z.exports.useState("");const[i,s]=z.exports.useState(),[o,l]=z.exports.useState(!1),[a,u]=z.exports.useState([]),[c,h]=z.exports.useState([]),[d,p]=z.exports.useState([]),[g,v]=z.exports.useState(!1),[E,m]=z.exports.useState(0),f=3,[y,w]=z.exports.useState(-1);function T(S,D){let A=S,F=D;if(A=A[0].split("-"),A=new Date(`${A[1]}/${A[0]}/${A[2]}`).getTime(),F=F[0].split("-"),F=new Date(`${F[1]}/${F[0]}/${F[2]}`).getTime(),A>F)return 1;if(A<F)return-1}const O=S=>{S.sort(T),h(S)};z.exports.useEffect(()=>{O(a)},[a]),z.exports.useEffect(()=>{},[c]),z.exports.useEffect(()=>{try{w(d.findIndex(S=>S.dia===a[E].dia.replaceAll(".","-")))}catch{}},[d]),z.exports.useEffect(()=>{try{w(d.findIndex(S=>S.dia===a[E].dia.replaceAll(".","-")))}catch{}},[E]),z.exports.useEffect(()=>{fT(ii(Mi($i),"agendas"),S=>{u(Object.entries(S.val()))})},[]),z.exports.useEffect(()=>{if(u([]),localStorage.getItem("user"))return r(JSON.parse(localStorage.getItem("user"))),l(!1);l(!0)},[]);const $=()=>localStorage.getItem("user")?(r(JSON.parse(localStorage.getItem("user"))),!0):l(!0),C=S=>{$()&&e(S)},V=S=>{e(S)},K=S=>{s(S)},ze=({nome:S,casa:D,id:A})=>{r({nome:S,casa:D,id:A}),l(!1)},Fe=()=>{l(!0)},Ge=()=>{v(!0)},Rt=()=>{if(E+2>a.length)return console.log("Limite up");m(E+1)},Ze=()=>{if(E-1<0)return console.log("Limite down");m(E-1)},yn=S=>{try{return!!a[E][1].horarios[S].includes(`${n.nome}, ${n.casa}`)}catch{}},at=async(S="",D)=>{await dd(Mi($i,"agendas/"+a[E][0]+"/horarios/"+D),A=>{const F=A;if(F[0]==""&&(F.length=0),A.length+S.length<=f)return S.forEach(_=>F.push(`${_.nome}, ${_.casa}`)),F;console.log("Limite excedido!")})},P=async S=>{let D=a[E][1].horarios[S],A=[];A.length=0,D.forEach(F=>{F.replaceAll(" ","").split(",")[1]!=n.casa&&A.push(F)}),dd(Mi($i,"agendas/"+a[E][0]+"/horarios/"+S),F=>{if(console.log("Current Data",F,A),F&&(S!=null||S!=null))return console.log("Atualizado.",A.length),A.length==0?A=[""]:A})},B=async S=>{console.log("APP:",Object.keys(S)[0]),console.log("APP HORARIOS:",S[Object.keys(S)[0]].horarios),await dd(Mi($i,"agendas/"+Object.keys(S)[0]+"/horarios"),D=>{if(D)return S[Object.keys(S)[0]].horarios}).then(console.log("Atualizado"))},G=async S=>{console.log("AGENDA",S),await N$(ii(Mi($i),"agendas/"),S)},me=async S=>{await I$(ii(Mi($i),"agendas/"+S)).then(console.log("AGENDA REMOVIDA",S,"N\xC3O EXISTE MAIS")).catch(D=>{console.log("ALGO DEU ERRADO.")})};return Se("div",{className:"App",children:[k(q$,{}),k(U$,{Registrar:Fe,AdminOpen:Ge}),k(K$,{getDia:c[E],NextDia:Rt,PrevDia:Ze}),k(B$,{Modal:C,getData:K,getHoras:c[E]}),t?k(lb,{casa:`${n.casa}`,nome:`${n.nome}`,horario:i,acompanhante:"",ModalAgenda:V,dia:c[E],checkAgendamento:(S,D)=>at(S,D),isOnAgenda:S=>yn(S),liberarHorario:S=>{P(S)}}):null,o?k(gb,{Registro:ze}):null,g?k(Cb,{Agendas:a,onClose:()=>v(!1),updateAdminAgenda:S=>{B(S)},pushAdminAgenda:S=>{G(S)},removeAdminAgenda:S=>{me(S)}}):null]})}gd.createRoot(document.getElementById("root")).render(k(Tb,{}));
