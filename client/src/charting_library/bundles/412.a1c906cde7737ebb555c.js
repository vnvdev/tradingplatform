(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[412,959,6437],{497754:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var s=o.apply(null,r);s&&e.push(s)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},164429:e=>{e.exports={favorite:"favorite-TPXOIXOJ",disabled:"disabled-TPXOIXOJ",active:"active-TPXOIXOJ",checked:"checked-TPXOIXOJ"}},72571:(e,t,r)=>{"use strict";r.d(t,{Icon:()=>o});var n=r(50959);const o=n.forwardRef(((e,t)=>{const{icon:r="",...o}=e;return n.createElement("span",{...o,ref:t,dangerouslySetInnerHTML:{__html:r}})}))},621709:(e,t,r)=>{"use strict";function n(e,t,r,n,o){function i(o){if(e>o.timeStamp)return;const i=o.target;void 0!==r&&null!==t&&null!==i&&i.ownerDocument===n&&(t.contains(i)||r(o))}return o.click&&n.addEventListener("click",i,!1),o.mouseDown&&n.addEventListener("mousedown",i,!1),o.touchEnd&&n.addEventListener("touchend",i,!1),o.touchStart&&n.addEventListener("touchstart",i,!1),()=>{n.removeEventListener("click",i,!1),n.removeEventListener("mousedown",i,!1),n.removeEventListener("touchend",i,!1),n.removeEventListener("touchstart",i,!1)}}r.d(t,{addOutsideEventListener:()=>n})},285089:(e,t,r)=>{"use strict";r.d(t,{setFixedBodyState:()=>a});var n=r(735922);const o=()=>!window.matchMedia("screen and (min-width: 768px)").matches,i=()=>!window.matchMedia("screen and (min-width: 1280px)").matches;let s=0,u=!1;function a(e){const{body:t}=document,r=t.querySelector(".widgetbar-wrap");if(e&&1==++s){const e=(0,n.getCSSProperty)(t,"overflow"),o=(0,n.getCSSPropertyNumericValue)(t,"padding-right");"hidden"!==e.toLowerCase()&&t.scrollHeight>t.offsetHeight&&((0,n.setStyle)(r,"right",`${(0,n.getScrollbarWidth)()}px`),t.style.paddingRight=`${o+(0,n.getScrollbarWidth)()}px`,u=!0),t.classList.add("i-no-scroll")}else if(!e&&s>0&&0==--s&&(t.classList.remove("i-no-scroll"),u)){(0,n.setStyle)(r,"right","0px");let e=0;e=r?(a=(0,n.getContentWidth)(r),o()?0:i()?46:Math.min(Math.max(a,46),450)):0,t.scrollHeight<=t.clientHeight&&(e-=(0,n.getScrollbarWidth)()),t.style.paddingRight=(e<0?0:e)+"px",u=!1}var a}},577687:(e,t,r)=>{"use strict";r.d(t,{FavoriteButton:()=>d});var n=r(509806),o=r(50959),i=r(497754),s=r(72571),u=r(239146),a=r(648010),c=r(164429);const l={add:n.t(null,void 0,r(44629)),remove:n.t(null,void 0,r(572482))};function d(e){const{className:t,isFilled:r,isActive:n,onClick:d,...f}=e;return o.createElement(s.Icon,{...f,className:i(c.favorite,"apply-common-tooltip",r&&c.checked,n&&c.active,t),icon:r?u:a,onClick:d,title:r?l.remove:l.add})}},961174:(e,t,r)=>{"use strict";r.d(t,{useOutsideEvent:()=>i});var n=r(50959),o=r(621709);function i(e){const{click:t,mouseDown:r,touchEnd:i,touchStart:s,handler:u,reference:a,ownerDocument:c=document}=e,l=(0,n.useRef)(null),d=(0,
n.useRef)(new CustomEvent("timestamp").timeStamp);return(0,n.useLayoutEffect)((()=>{const e={click:t,mouseDown:r,touchEnd:i,touchStart:s},n=a?a.current:l.current;return(0,o.addOutsideEventListener)(d.current,n,u,c,e)}),[t,r,i,s,u]),a||l}},930052:(e,t,r)=>{"use strict";r.d(t,{MatchMedia:()=>o});var n=r(50959);class o extends n.PureComponent{constructor(e){super(e),this._handleChange=()=>{this.forceUpdate()},this.state={query:window.matchMedia(this.props.rule)}}componentDidMount(){this._subscribe(this.state.query)}componentDidUpdate(e,t){this.state.query!==t.query&&(this._unsubscribe(t.query),this._subscribe(this.state.query))}componentWillUnmount(){this._unsubscribe(this.state.query)}render(){return this.props.children(this.state.query.matches)}static getDerivedStateFromProps(e,t){return e.rule!==t.query.media?{query:window.matchMedia(e.rule)}:null}_subscribe(e){e.addListener(this._handleChange)}_unsubscribe(e){e.removeListener(this._handleChange)}}},763212:(e,t,r)=>{"use strict";r.d(t,{OverlapManager:()=>i,getRootOverlapManager:()=>u});var n=r(650151);class o{constructor(){this._storage=[]}add(e){this._storage.push(e)}remove(e){this._storage=this._storage.filter((t=>e!==t))}has(e){return this._storage.includes(e)}getItems(){return this._storage}}class i{constructor(e=document){this._storage=new o,this._windows=new Map,this._index=0,this._document=e,this._container=e.createDocumentFragment()}setContainer(e){const t=this._container,r=null===e?this._document.createDocumentFragment():e;!function(e,t){Array.from(e.childNodes).forEach((e=>{e.nodeType===Node.ELEMENT_NODE&&t.appendChild(e)}))}(t,r),this._container=r}registerWindow(e){this._storage.has(e)||this._storage.add(e)}ensureWindow(e,t={position:"fixed",direction:"normal"}){const r=this._windows.get(e);if(void 0!==r)return r;this.registerWindow(e);const n=this._document.createElement("div");if(n.style.position=t.position,n.style.zIndex=this._index.toString(),n.dataset.id=e,void 0!==t.index){const e=this._container.childNodes.length;if(t.index>=e)this._container.appendChild(n);else if(t.index<=0)this._container.insertBefore(n,this._container.firstChild);else{const e=this._container.childNodes[t.index];this._container.insertBefore(n,e)}}else"reverse"===t.direction?this._container.insertBefore(n,this._container.firstChild):this._container.appendChild(n);return this._windows.set(e,n),++this._index,n}unregisterWindow(e){this._storage.remove(e);const t=this._windows.get(e);void 0!==t&&(null!==t.parentElement&&t.parentElement.removeChild(t),this._windows.delete(e))}getZindex(e){const t=this.ensureWindow(e);return parseInt(t.style.zIndex||"0")}moveToTop(e){if(this.getZindex(e)!==this._index){this.ensureWindow(e).style.zIndex=(++this._index).toString()}}removeWindow(e){this.unregisterWindow(e)}}const s=new WeakMap;function u(e=document){const t=e.getElementById("overlap-manager-root");if(null!==t)return(0,n.ensureDefined)(s.get(t));{const t=new i(e),r=function(e){const t=e.createElement("div");return t.style.position="absolute",t.style.zIndex=150..toString(),t.style.top="0px",
t.style.left="0px",t.id="overlap-manager-root",t}(e);return s.set(r,t),t.setContainer(r),e.body.appendChild(r),t}}},8361:(e,t,r)=>{"use strict";r.d(t,{Portal:()=>a,PortalContext:()=>c});var n=r(50959),o=r(500962),i=r(220863),s=r(763212),u=r(753327);class a extends n.PureComponent{constructor(){super(...arguments),this._uuid=(0,i.guid)()}componentWillUnmount(){this._manager().removeWindow(this._uuid)}render(){const e=this._manager().ensureWindow(this._uuid,this.props.layerOptions);return e.style.top=this.props.top||"",e.style.bottom=this.props.bottom||"",e.style.left=this.props.left||"",e.style.right=this.props.right||"",e.style.pointerEvents=this.props.pointerEvents||"",o.createPortal(n.createElement(c.Provider,{value:this},this.props.children),e)}moveToTop(){this._manager().moveToTop(this._uuid)}_manager(){return null===this.context?(0,s.getRootOverlapManager)():this.context}}a.contextType=u.SlotContext;const c=n.createContext(null)},753327:(e,t,r)=>{"use strict";r.d(t,{Slot:()=>o,SlotContext:()=>i});var n=r(50959);class o extends n.Component{shouldComponentUpdate(){return!1}render(){return n.createElement("div",{style:{position:"fixed",zIndex:150,left:0,top:0},ref:this.props.reference})}}const i=n.createContext(null)},695257:(e,t)=>{"use strict";var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),a=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}function _(){}function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=v.prototype;var w=g.prototype=new _;w.constructor=g,y(w,v.prototype),w.isPureReactComponent=!0;var b=Array.isArray,x=Object.prototype.hasOwnProperty,S={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var o,i={},s=null,u=null;if(null!=t)for(o in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(s=""+t.key),t)x.call(t,o)&&!E.hasOwnProperty(o)&&(i[o]=t[o]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+2];i.children=c}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===i[o]&&(i[o]=a[o]);return{$$typeof:r,type:e,key:s,ref:u,props:i,_owner:S.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g
;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function L(e,t,o,i,s){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var a=!1;if(null===e)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case n:a=!0}}if(a)return s=s(a=e),e=""===i?"."+R(a,0):i,b(s)?(o="",null!=e&&(o=e.replace(O,"$&/")+"/"),L(s,t,o,"",(function(e){return e}))):null!=s&&(k(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(O,"$&/")+"/")+e)),t.push(s)),1;if(a=0,i=""===i?".":i+":",b(e))for(var c=0;c<e.length;c++){var l=i+R(u=e[c],c);a+=L(u,t,o,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),c=0;!(u=e.next()).done;)a+=L(u=u.value,t,o,l=i+R(u,c++),s);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function P(e,t,r){if(null==e)return e;var n=[],o=0;return L(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},M={transition:null},T={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:M,ReactCurrentOwner:S};t.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=s,t.PureComponent=g,t.StrictMode=i,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,s=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,u=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(c in t)x.call(t,c)&&!E.hasOwnProperty(c)&&(o[c]=void 0===t[c]&&void 0!==a?a[c]:t[c])}var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){a=Array(c);for(var l=0;l<c;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:r,type:e.type,key:i,ref:s,props:o,_owner:u}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,
_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,r){return $.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,r){return $.current.useReducer(e,t,r)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},50959:(e,t,r)=>{"use strict";e.exports=r(695257)},239146:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path fill="currentColor" d="M9 1l2.35 4.76 5.26.77-3.8 3.7.9 5.24L9 13l-4.7 2.47.9-5.23-3.8-3.71 5.25-.77L9 1z"/></svg>'},648010:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><path stroke="currentColor" d="M9 2.13l1.903 3.855.116.236.26.038 4.255.618-3.079 3.001-.188.184.044.259.727 4.237-3.805-2L9 12.434l-.233.122-3.805 2.001.727-4.237.044-.26-.188-.183-3.079-3.001 4.255-.618.26-.038.116-.236L9 2.13z"/></svg>'}}]);