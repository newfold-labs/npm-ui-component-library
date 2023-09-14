"use strict";(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[1505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,v=d["".concat(u,".").concat(p)]||d[p]||f[p]||a;return n?o.createElement(v,l(l({ref:t},s),{},{components:n})):o.createElement(v,l({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1471:(e,t,n)=>{n.d(t,{Z:()=>pe});var o=n(7294),r=n(5697),a=n.n(r),l=n(1646),i=n(4192),u=n(3781),c=n(9946),s=n(6723),d=n(3855),f=n(9650),p=n(4157),v=n(3784),m=n(5466);var b,g,x=n(1497),R=n(9362),O=n(2351),h=n(4103),E=n(2984),w=n(8689),y=n(4575),T=n(6045),C=n(6567),P=n(1363),S=n(1147),I=n(6599),N=n(476),M=n(8657),F=((g=F||{})[g.Open=0]="Open",g[g.Closed=1]="Closed",g),L=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(L||{}),_=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(_||{}),A=((b=A||{})[b.OpenCombobox=0]="OpenCombobox",b[b.CloseCombobox=1]="CloseCombobox",b[b.GoToOption=2]="GoToOption",b[b.RegisterOption=3]="RegisterOption",b[b.UnregisterOption=4]="UnregisterOption",b[b.RegisterLabel=5]="RegisterLabel",b);function k(e,t=(e=>e)){let n=null!==e.activeOptionIndex?e.options[e.activeOptionIndex]:null,o=(0,y.z2)(t(e.options.slice()),(e=>e.dataRef.current.domRef.current)),r=n?o.indexOf(n):null;return-1===r&&(r=null),{options:o,activeOptionIndex:r}}let D={1(e){var t;return null!=(t=e.dataRef.current)&&t.disabled||1===e.comboboxState?e:{...e,activeOptionIndex:null,comboboxState:1}},0(e){var t;if(null!=(t=e.dataRef.current)&&t.disabled||0===e.comboboxState)return e;let n=e.activeOptionIndex;if(e.dataRef.current){let{isSelected:t}=e.dataRef.current,o=e.options.findIndex((e=>t(e.dataRef.current.value)));-1!==o&&(n=o)}return{...e,comboboxState:0,activeOptionIndex:n}},2(e,t){var n,o,r,a;if(null!=(n=e.dataRef.current)&&n.disabled||null!=(o=e.dataRef.current)&&o.optionsRef.current&&(null==(r=e.dataRef.current)||!r.optionsPropsRef.current.static)&&1===e.comboboxState)return e;let l=k(e);if(null===l.activeOptionIndex){let e=l.options.findIndex((e=>!e.dataRef.current.disabled));-1!==e&&(l.activeOptionIndex=e)}let i=(0,x.d)(t,{resolveItems:()=>l.options,resolveActiveIndex:()=>l.activeOptionIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...l,activeOptionIndex:i,activationTrigger:null!=(a=t.trigger)?a:1}},3:(e,t)=>{var n,o;let r={id:t.id,dataRef:t.dataRef},a=k(e,(e=>[...e,r]));null===e.activeOptionIndex&&null!=(n=e.dataRef.current)&&n.isSelected(t.dataRef.current.value)&&(a.activeOptionIndex=a.options.indexOf(r));let l={...e,...a,activationTrigger:1};return null!=(o=e.dataRef.current)&&o.__demoMode&&void 0===e.dataRef.current.value&&(l.activeOptionIndex=0),l},4:(e,t)=>{let n=k(e,(e=>{let n=e.findIndex((e=>e.id===t.id));return-1!==n&&e.splice(n,1),e}));return{...e,...n,activationTrigger:1}},5:(e,t)=>({...e,labelId:t.id})},z=(0,o.createContext)(null);function j(e){let t=(0,o.useContext)(z);if(null===t){let t=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,j),t}return t}z.displayName="ComboboxActionsContext";let V=(0,o.createContext)(null);function q(e){let t=(0,o.useContext)(V);if(null===t){let t=new Error(`<${e} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,q),t}return t}function Z(e,t){return(0,E.E)(t.type,D,e,t)}V.displayName="ComboboxDataContext";let B=o.Fragment;let K=O.AN.RenderStrategy|O.AN.Static;let U=(0,O.yV)((function(e,t){let{value:n,defaultValue:r,onChange:a,form:l,name:c,by:d=((e,t)=>e===t),disabled:p=!1,__demoMode:v=!1,nullable:m=!1,multiple:b=!1,...g}=e,[R=(b?[]:void 0),h]=(0,S.q)(n,a,r),[y,P]=(0,o.useReducer)(Z,{dataRef:(0,o.createRef)(),comboboxState:v?0:1,options:[],activeOptionIndex:null,activationTrigger:1,labelId:null}),I=(0,o.useRef)(!1),N=(0,o.useRef)({static:!1,hold:!1}),M=(0,o.useRef)(null),F=(0,o.useRef)(null),L=(0,o.useRef)(null),_=(0,o.useRef)(null),A=(0,u.z)("string"==typeof d?(e,t)=>{let n=d;return(null==e?void 0:e[n])===(null==t?void 0:t[n])}:d),k=(0,o.useCallback)((e=>(0,E.E)(D.mode,{1:()=>R.some((t=>A(t,e))),0:()=>A(R,e)})),[R]),D=(0,o.useMemo)((()=>({...y,optionsPropsRef:N,labelRef:M,inputRef:F,buttonRef:L,optionsRef:_,value:R,defaultValue:r,disabled:p,mode:b?1:0,get activeOptionIndex(){if(I.current&&null===y.activeOptionIndex&&y.options.length>0){let e=y.options.findIndex((e=>!e.dataRef.current.disabled));if(-1!==e)return e}return y.activeOptionIndex},compare:A,isSelected:k,nullable:m,__demoMode:v})),[R,r,p,b,m,v,y]),j=(0,o.useRef)(null!==D.activeOptionIndex?D.options[D.activeOptionIndex]:null);(0,o.useEffect)((()=>{let e=null!==D.activeOptionIndex?D.options[D.activeOptionIndex]:null;j.current!==e&&(j.current=e)})),(0,s.e)((()=>{y.dataRef.current=D}),[D]),(0,f.O)([D.buttonRef,D.inputRef,D.optionsRef],(()=>X.closeCombobox()),0===D.comboboxState);let q=(0,o.useMemo)((()=>({open:0===D.comboboxState,disabled:p,activeIndex:D.activeOptionIndex,activeOption:null===D.activeOptionIndex?null:D.options[D.activeOptionIndex].dataRef.current.value,value:R})),[D,p,R]),K=(0,u.z)((e=>{let t=D.options.find((t=>t.id===e));t&&J(t.dataRef.current.value)})),U=(0,u.z)((()=>{if(null!==D.activeOptionIndex){let{dataRef:e,id:t}=D.options[D.activeOptionIndex];J(e.current.value),X.goToOption(x.T.Specific,t)}})),G=(0,u.z)((()=>{P({type:0}),I.current=!0})),H=(0,u.z)((()=>{P({type:1}),I.current=!1})),$=(0,u.z)(((e,t,n)=>(I.current=!1,e===x.T.Specific?P({type:2,focus:x.T.Specific,id:t,trigger:n}):P({type:2,focus:e,trigger:n})))),Y=(0,u.z)(((e,t)=>(P({type:3,id:e,dataRef:t}),()=>{var t;(null==(t=j.current)?void 0:t.id)===e&&(I.current=!0),P({type:4,id:e})}))),W=(0,u.z)((e=>(P({type:5,id:e}),()=>P({type:5,id:null})))),J=(0,u.z)((e=>(0,E.E)(D.mode,{0:()=>null==h?void 0:h(e),1(){let t=D.value.slice(),n=t.findIndex((t=>A(t,e)));return-1===n?t.push(e):t.splice(n,1),null==h?void 0:h(t)}}))),X=(0,o.useMemo)((()=>({onChange:J,registerOption:Y,registerLabel:W,goToOption:$,closeCombobox:H,openCombobox:G,selectActiveOption:U,selectOption:K})),[]),Q=null===t?{}:{ref:t},ee=(0,o.useRef)(null),te=(0,i.G)();return(0,o.useEffect)((()=>{ee.current&&void 0!==r&&te.addEventListener(ee.current,"reset",(()=>{J(r)}))}),[ee,J]),o.createElement(z.Provider,{value:X},o.createElement(V.Provider,{value:D},o.createElement(C.up,{value:(0,E.E)(D.comboboxState,{0:C.ZM.Open,1:C.ZM.Closed})},null!=c&&null!=R&&(0,w.t)({[c]:R}).map((([e,t],n)=>o.createElement(T._,{features:T.A.Hidden,ref:0===n?e=>{var t;ee.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...(0,O.oA)({key:e,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:l,name:e,value:t})}))),(0,O.sY)({ourProps:Q,theirProps:g,slot:q,defaultTag:B,name:"Combobox"}))))})),G=(0,O.yV)((function(e,t){var n;let r=q("Combobox.Button"),a=j("Combobox.Button"),s=(0,v.T)(r.buttonRef,t),d=(0,c.M)(),{id:f=`headlessui-combobox-button-${d}`,...m}=e,b=(0,i.G)(),g=(0,u.z)((e=>{switch(e.key){case P.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),1===r.comboboxState&&a.openCombobox(),b.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})}));case P.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),1===r.comboboxState&&(a.openCombobox(),b.nextFrame((()=>{r.value||a.goToOption(x.T.Last)}))),b.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})}));case P.R.Escape:return 0!==r.comboboxState?void 0:(e.preventDefault(),r.optionsRef.current&&!r.optionsPropsRef.current.static&&e.stopPropagation(),a.closeCombobox(),b.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})})));default:return}})),R=(0,u.z)((e=>{if((0,h.P)(e.currentTarget))return e.preventDefault();0===r.comboboxState?a.closeCombobox():(e.preventDefault(),a.openCombobox()),b.nextFrame((()=>{var e;return null==(e=r.inputRef.current)?void 0:e.focus({preventScroll:!0})}))})),E=(0,l.v)((()=>{if(r.labelId)return[r.labelId,f].join(" ")}),[r.labelId,f]),w=(0,o.useMemo)((()=>({open:0===r.comboboxState,disabled:r.disabled,value:r.value})),[r]),y={ref:s,id:f,type:(0,p.f)(e,r.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":null==(n=r.optionsRef.current)?void 0:n.id,"aria-expanded":0===r.comboboxState,"aria-labelledby":E,disabled:r.disabled,onClick:R,onKeyDown:g};return(0,O.sY)({ourProps:y,theirProps:m,slot:w,defaultTag:"button",name:"Combobox.Button"})})),H=(0,O.yV)((function(e,t){var n,r,a,s;let d=(0,c.M)(),{id:f=`headlessui-combobox-input-${d}`,onChange:p,displayValue:m,type:b="text",...g}=e,R=q("Combobox.Input"),h=j("Combobox.Input"),w=(0,v.T)(R.inputRef,t),y=(0,o.useRef)(!1),T=(0,i.G)(),C="function"==typeof m&&void 0!==R.value?null!=(S=m(R.value))?S:"":"string"==typeof R.value?R.value:"";var S;(0,I.q)((([e,t],[n,o])=>{if(y.current)return;let r=R.inputRef.current;r&&((0===o&&1===t||e!==n)&&(r.value=e),requestAnimationFrame((()=>{if(y.current||!r)return;let{selectionStart:e,selectionEnd:t}=r;0===Math.abs((null!=t?t:0)-(null!=e?e:0))&&0===e&&r.setSelectionRange(r.value.length,r.value.length)})))}),[C,R.comboboxState]),(0,I.q)((([e],[t])=>{if(0===e&&1===t){if(y.current)return;let e=R.inputRef.current;if(!e)return;let t=e.value,{selectionStart:n,selectionEnd:o,selectionDirection:r}=e;e.value="",e.value=t,null!==r?e.setSelectionRange(n,o,r):e.setSelectionRange(n,o)}}),[R.comboboxState]);let N=(0,o.useRef)(!1),M=(0,u.z)((()=>{N.current=!0})),F=(0,u.z)((()=>{T.nextFrame((()=>{N.current=!1}))})),L=(0,u.z)((e=>{switch(y.current=!0,e.key){case P.R.Backspace:case P.R.Delete:if(0!==R.mode||!R.nullable)return;let t=e.currentTarget;T.requestAnimationFrame((()=>{""===t.value&&(h.onChange(null),R.optionsRef.current&&(R.optionsRef.current.scrollTop=0),h.goToOption(x.T.Nothing))}));break;case P.R.Enter:if(y.current=!1,0!==R.comboboxState||N.current)return;if(e.preventDefault(),e.stopPropagation(),null===R.activeOptionIndex)return void h.closeCombobox();h.selectActiveOption(),0===R.mode&&h.closeCombobox();break;case P.R.ArrowDown:return y.current=!1,e.preventDefault(),e.stopPropagation(),(0,E.E)(R.comboboxState,{0:()=>{h.goToOption(x.T.Next)},1:()=>{h.openCombobox()}});case P.R.ArrowUp:return y.current=!1,e.preventDefault(),e.stopPropagation(),(0,E.E)(R.comboboxState,{0:()=>{h.goToOption(x.T.Previous)},1:()=>{h.openCombobox(),T.nextFrame((()=>{R.value||h.goToOption(x.T.Last)}))}});case P.R.Home:if(e.shiftKey)break;return y.current=!1,e.preventDefault(),e.stopPropagation(),h.goToOption(x.T.First);case P.R.PageUp:return y.current=!1,e.preventDefault(),e.stopPropagation(),h.goToOption(x.T.First);case P.R.End:if(e.shiftKey)break;return y.current=!1,e.preventDefault(),e.stopPropagation(),h.goToOption(x.T.Last);case P.R.PageDown:return y.current=!1,e.preventDefault(),e.stopPropagation(),h.goToOption(x.T.Last);case P.R.Escape:return y.current=!1,0!==R.comboboxState?void 0:(e.preventDefault(),R.optionsRef.current&&!R.optionsPropsRef.current.static&&e.stopPropagation(),h.closeCombobox());case P.R.Tab:if(y.current=!1,0!==R.comboboxState)return;0===R.mode&&h.selectActiveOption(),h.closeCombobox()}})),_=(0,u.z)((e=>{null==p||p(e),h.openCombobox()})),A=(0,u.z)((()=>{y.current=!1})),k=(0,l.v)((()=>{if(R.labelId)return[R.labelId].join(" ")}),[R.labelId]),D=(0,o.useMemo)((()=>({open:0===R.comboboxState,disabled:R.disabled})),[R]),z={ref:w,id:f,role:"combobox",type:b,"aria-controls":null==(n=R.optionsRef.current)?void 0:n.id,"aria-expanded":0===R.comboboxState,"aria-activedescendant":null===R.activeOptionIndex||null==(r=R.options[R.activeOptionIndex])?void 0:r.id,"aria-labelledby":k,"aria-autocomplete":"list",defaultValue:null!=(s=null!=(a=e.defaultValue)?a:void 0!==R.defaultValue?null==m?void 0:m(R.defaultValue):null)?s:R.defaultValue,disabled:R.disabled,onCompositionStart:M,onCompositionEnd:F,onKeyDown:L,onChange:_,onBlur:A};return(0,O.sY)({ourProps:z,theirProps:g,slot:D,defaultTag:"input",name:"Combobox.Input"})})),$=(0,O.yV)((function(e,t){let n=(0,c.M)(),{id:r=`headlessui-combobox-label-${n}`,...a}=e,l=q("Combobox.Label"),i=j("Combobox.Label"),d=(0,v.T)(l.labelRef,t);(0,s.e)((()=>i.registerLabel(r)),[r]);let f=(0,u.z)((()=>{var e;return null==(e=l.inputRef.current)?void 0:e.focus({preventScroll:!0})})),p=(0,o.useMemo)((()=>({open:0===l.comboboxState,disabled:l.disabled})),[l]);return(0,O.sY)({ourProps:{ref:d,id:r,onClick:f},theirProps:a,slot:p,defaultTag:"label",name:"Combobox.Label"})})),Y=(0,O.yV)((function(e,t){let n=(0,c.M)(),{id:r=`headlessui-combobox-options-${n}`,hold:a=!1,...i}=e,u=q("Combobox.Options"),d=(0,v.T)(u.optionsRef,t),f=(0,C.oJ)(),p=null!==f?(f&C.ZM.Open)===C.ZM.Open:0===u.comboboxState;(0,s.e)((()=>{var t;u.optionsPropsRef.current.static=null!=(t=e.static)&&t}),[u.optionsPropsRef,e.static]),(0,s.e)((()=>{u.optionsPropsRef.current.hold=a}),[u.optionsPropsRef,a]),function({container:e,accept:t,walk:n,enabled:r=!0}){let a=(0,o.useRef)(t),l=(0,o.useRef)(n);(0,o.useEffect)((()=>{a.current=t,l.current=n}),[t,n]),(0,s.e)((()=>{if(!e||!r)return;let t=(0,m.r)(e);if(!t)return;let n=a.current,o=l.current,i=Object.assign((e=>n(e)),{acceptNode:n}),u=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,i,!1);for(;u.nextNode();)o(u.currentNode)}),[e,r,a,l])}({container:u.optionsRef.current,enabled:0===u.comboboxState,accept:e=>"option"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let b=(0,l.v)((()=>{var e,t;return null!=(t=u.labelId)?t:null==(e=u.buttonRef.current)?void 0:e.id}),[u.labelId,u.buttonRef.current]),g=(0,o.useMemo)((()=>({open:0===u.comboboxState})),[u]),x={"aria-labelledby":b,role:"listbox","aria-multiselectable":1===u.mode||void 0,id:r,ref:d};return(0,O.sY)({ourProps:x,theirProps:i,slot:g,defaultTag:"ul",features:K,visible:p,name:"Combobox.Options"})})),W=(0,O.yV)((function(e,t){var n,r;let a=(0,c.M)(),{id:l=`headlessui-combobox-option-${a}`,disabled:i=!1,value:f,...p}=e,m=q("Combobox.Option"),b=j("Combobox.Option"),g=null!==m.activeOptionIndex&&m.options[m.activeOptionIndex].id===l,h=m.isSelected(f),E=(0,o.useRef)(null),w=(0,d.E)({disabled:i,value:f,domRef:E,textValue:null==(r=null==(n=E.current)?void 0:n.textContent)?void 0:r.toLowerCase()}),y=(0,v.T)(t,E),T=(0,u.z)((()=>b.selectOption(l)));(0,s.e)((()=>b.registerOption(l,w)),[w,l]);let C=(0,o.useRef)(!m.__demoMode);(0,s.e)((()=>{if(!m.__demoMode)return;let e=(0,R.k)();return e.requestAnimationFrame((()=>{C.current=!0})),e.dispose}),[]),(0,s.e)((()=>{if(0!==m.comboboxState||!g||!C.current||0===m.activationTrigger)return;let e=(0,R.k)();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=E.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[E,g,m.comboboxState,m.activationTrigger,m.activeOptionIndex]);let P=(0,u.z)((e=>{if(i)return e.preventDefault();T(),0===m.mode&&b.closeCombobox(),(0,M.tq)()||requestAnimationFrame((()=>{var e;return null==(e=m.inputRef.current)?void 0:e.focus()}))})),S=(0,u.z)((()=>{if(i)return b.goToOption(x.T.Nothing);b.goToOption(x.T.Specific,l)})),I=(0,N.g)(),F=(0,u.z)((e=>I.update(e))),L=(0,u.z)((e=>{I.wasMoved(e)&&(i||g||b.goToOption(x.T.Specific,l,0))})),_=(0,u.z)((e=>{I.wasMoved(e)&&(i||g&&(m.optionsPropsRef.current.hold||b.goToOption(x.T.Nothing)))})),A=(0,o.useMemo)((()=>({active:g,selected:h,disabled:i})),[g,h,i]);return(0,O.sY)({ourProps:{id:l,ref:y,role:"option",tabIndex:!0===i?void 0:-1,"aria-disabled":!0===i||void 0,"aria-selected":h,disabled:void 0,onClick:P,onFocus:S,onPointerEnter:F,onMouseEnter:F,onPointerMove:L,onMouseMove:L,onPointerLeave:_,onMouseLeave:_},theirProps:p,slot:A,defaultTag:"li",name:"Combobox.Option"})})),J=Object.assign(U,{Input:H,Button:G,Label:$,Options:Y,Option:W});var X=n(4080),Q=n(8057),ee=n(1013),te=n(5506),ne=n(4184),oe=n.n(ne),re=n(6486),ae=n(7201),le=n(7381);const ie=(0,o.forwardRef)(((e,t)=>(0,o.createElement)(J.Button,{as:"div",ref:t,...e}))),ue=({children:e,value:t})=>{const n=(0,ae.Z)(),r=(0,o.useCallback)((({active:e,selected:t})=>oe()("nfd-autocomplete__option",t&&"nfd-autocomplete__option--selected",e&&!t&&"nfd-autocomplete__option--active")),[]);return(0,o.createElement)(J.Option,{className:r,value:t},(({selected:t})=>(0,o.createElement)(o.Fragment,null,(0,o.createElement)("span",{className:oe()("nfd-autocomplete__option-label",t&&"nfd-font-semibold")},e),t&&(0,o.createElement)(Q.Z,{className:"nfd-autocomplete__option-check",...n}))))},ce={children:a().node,value:a().oneOfType([a().string,a().number,a().bool]).isRequired};ue.propTypes=ce;const se=({onChange:e,svgAriaProps:t,screenReaderText:n})=>{const r=(0,o.useCallback)((t=>{t.preventDefault(),e(null)}),[e]);return(0,o.createElement)("button",{className:"nfd-mr-4 nfd-flex nfd-items-center",onClick:r},(0,o.createElement)("span",{className:"nfd-sr-only"},n),(0,o.createElement)(te.Z,{className:"nfd-text-slate-400 nfd-w-5 nfd-h-5",...t}),(0,o.createElement)("div",{className:"nfd-w-2 nfd-mr-2 nfd-border-r-slate-200 nfd-border-r nfd-h-7"}))};se.propTypes={onChange:a().func.isRequired,svgAriaProps:a().object.isRequired,screenReaderText:a().string.isRequired};const de=(0,o.forwardRef)((({id:e,value:t,children:n,selectedLabel:r,label:a,labelProps:l,labelSuffix:i,onChange:u,onQueryChange:c,validation:s,placeholder:d,className:f,buttonProps:p,clearButtonScreenReaderText:v,...m},b)=>{const g=(0,o.useCallback)((0,re.constant)(r),[r]),x=(0,ae.Z)();return(0,o.createElement)(J,{ref:b,as:"div",value:t,onChange:u,className:oe()("nfd-autocomplete",f),...m},a&&(0,o.createElement)("div",{className:"nfd-flex nfd-items-center nfd-mb-2"},(0,o.createElement)(J.Label,{...l},a),i),(0,o.createElement)("div",{className:"nfd-relative"},(0,o.createElement)(le.Z,{as:ie,"data-id":e,validation:s,className:"nfd-autocomplete__button",...p},(0,o.createElement)(J.Input,{className:"nfd-autocomplete__input",autoComplete:"off",placeholder:d,displayValue:g,onChange:c}),m.nullable&&r&&(0,o.createElement)(se,{onChange:u,svgAriaProps:x,screenReaderText:v}),!(null!=s&&s.message)&&(0,o.createElement)(ee.Z,{className:"nfd-autocomplete__button-icon",...x})),(0,o.createElement)(X.u,{as:o.Fragment,enter:"nfd-transition nfd-duration-100 nfd-ease-out",enterFrom:"nfd-transform nfd-scale-95 nfd-opacity-0",enterTo:"nfd-transform nfd-scale-100 nfd-opacity-100",leave:"nfd-transition nfd-duration-75 nfd-ease-out",leaveFrom:"nfd-transform nfd-scale-100 nfd-opacity-100",leaveTo:"nfd-transform nfd-scale-95 nfd-opacity-0"},(0,o.createElement)(J.Options,{className:"nfd-autocomplete__options"},n))))}));de.Option=ue,de.Option.displayName="Autocomplete.Option";const fe={id:a().string.isRequired,value:a().oneOfType([a().string,a().number,a().bool]),children:a().node,selectedLabel:a().string,label:a().string,labelProps:a().object,labelSuffix:a().node,onChange:a().func.isRequired,onQueryChange:a().func.isRequired,validation:a().shape({variant:a().string,message:a().node}),placeholder:a().string,className:a().string,buttonProps:a().object,clearButtonScreenReaderText:a().string};de.propTypes=fe,de.defaultProps={children:null,value:null,selectedLabel:"",label:"",labelProps:{},labelSuffix:null,validation:{},placeholder:"",className:"",buttonProps:{},clearButtonScreenReaderText:"Clear"};const pe=de,ve=e=>(0,o.createElement)(de,{...e});ve.propTypes=fe,ve.defaultProps=de.defaultProps,ve.displayName="Autocomplete"},3624:(e,t,n)=>{n.d(t,{Z:()=>g});var o=n(7294),r=n(5697),a=n.n(r),l=n(6486),i=n(4184),u=n.n(i),c=n(7201),s=n(5426);const d=o.forwardRef((function(e,t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),o.createElement("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"}))}));const f=o.forwardRef((function(e,t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),o.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"}))}));const p=o.forwardRef((function(e,t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),o.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"}))})),v={success:s.Z,warning:d,info:f,error:p},m={variant:{success:"nfd-validation-icon--success",warning:"nfd-validation-icon--warning",info:"nfd-validation-icon--info",error:"nfd-validation-icon--error"}},b=({variant:e="info",className:t="",...n})=>{const r=(0,o.useMemo)((()=>v[e]),[e]),a=(0,c.Z)();return r?(0,o.createElement)(r,{...a,...n,className:u()("nfd-validation-icon",m.variant[e],t)}):null};b.propTypes={variant:a().oneOf((0,l.values)({success:"success",warning:"warning",info:"info",error:"error"})),className:a().string};const g=b},7381:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(7294),r=n(5697),a=n.n(r),l=n(4184),i=n.n(l),u=n(3624);const c={variant:{success:"nfd-validation-input--success",warning:"nfd-validation-input--warning",info:"nfd-validation-input--info",error:"nfd-validation-input--error"}},s=(0,o.forwardRef)((({as:e,validation:t={},className:n="",...r},a)=>(0,o.createElement)("div",{className:i()("nfd-validation-input",(null==t?void 0:t.message)&&c.variant[null==t?void 0:t.variant])},(0,o.createElement)(e,{ref:a,...r,className:i()("nfd-validation-input__input",n)}),(null==t?void 0:t.message)&&(0,o.createElement)(u.Z,{variant:null==t?void 0:t.variant,className:"nfd-validation-input__icon"}))));s.propTypes={as:a().elementType.isRequired,validation:a().shape({variant:a().string,message:a().node}),className:a().string};const d=s},1646:(e,t,n)=>{n.d(t,{v:()=>l});var o=n(7294),r=n(6723),a=n(3855);function l(e,t){let[n,l]=(0,o.useState)(e),i=(0,a.E)(e);return(0,r.e)((()=>l(i.current)),[i,l,...t]),n}},9650:(e,t,n)=>{n.d(t,{O:()=>u});var o=n(7294),r=n(4575),a=n(3855);function l(e,t,n){let r=(0,a.E)(t);(0,o.useEffect)((()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}var i=n(7815);function u(e,t,n=!0){let a=(0,o.useRef)(!1);function u(n,o){if(!a.current||n.defaultPrevented)return;let l=o(n);if(null===l||!l.getRootNode().contains(l)||!l.isConnected)return;let i=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e);for(let e of i){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(l)||n.composed&&n.composedPath().includes(t))return}return!(0,r.sP)(l,r.tJ.Loose)&&-1!==l.tabIndex&&n.preventDefault(),t(n,l)}(0,o.useEffect)((()=>{requestAnimationFrame((()=>{a.current=n}))}),[n]);let c=(0,o.useRef)(null);l("pointerdown",(e=>{var t,n;a.current&&(c.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),l("mousedown",(e=>{var t,n;a.current&&(c.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),l("click",(e=>{c.current&&(u(e,(()=>c.current)),c.current=null)}),!0),l("touchend",(e=>u(e,(()=>e.target instanceof HTMLElement?e.target:null))),!0),(0,i.s)("blur",(e=>u(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}},476:(e,t,n)=>{n.d(t,{g:()=>a});var o=n(7294);function r(e){return[e.screenX,e.screenY]}function a(){let e=(0,o.useRef)([-1,-1]);return{wasMoved(t){let n=r(t);return(e.current[0]!==n[0]||e.current[1]!==n[1])&&(e.current=n,!0)},update(t){e.current=r(t)}}}},6599:(e,t,n)=>{n.d(t,{q:()=>a});var o=n(7294),r=n(3781);function a(e,t){let n=(0,o.useRef)([]),a=(0,r.z)(e);(0,o.useEffect)((()=>{let e=[...n.current];for(let[o,r]of t.entries())if(n.current[o]!==r){let o=a(t,e);return n.current=t,o}}),[a,...t])}},7815:(e,t,n)=>{n.d(t,{s:()=>a});var o=n(7294),r=n(3855);function a(e,t,n){let a=(0,r.E)(t);(0,o.useEffect)((()=>{function t(e){a.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}},1497:(e,t,n)=>{n.d(t,{T:()=>r,d:()=>a});var o,r=((o=r||{})[o.First=0]="First",o[o.Previous=1]="Previous",o[o.Next=2]="Next",o[o.Last=3]="Last",o[o.Specific=4]="Specific",o[o.Nothing=5]="Nothing",o);function a(e,t){let n=t.resolveItems();if(n.length<=0)return null;let o=t.resolveActiveIndex(),r=null!=o?o:-1,a=(()=>{switch(e.focus){case 0:return n.findIndex((e=>!t.resolveDisabled(e)));case 1:{let e=n.slice().reverse().findIndex(((e,n,o)=>!(-1!==r&&o.length-n-1>=r)&&!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 2:return n.findIndex(((e,n)=>!(n<=r)&&!t.resolveDisabled(e)));case 3:{let e=n.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 4:return n.findIndex((n=>t.resolveId(n)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===a?o:a}},4575:(e,t,n)=>{n.d(t,{C5:()=>b,TO:()=>c,fE:()=>s,jA:()=>R,sP:()=>v,tJ:()=>p,z2:()=>x});var o=n(2984),r=n(5466);let a=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var l,i,u,c=((u=c||{})[u.First=1]="First",u[u.Previous=2]="Previous",u[u.Next=4]="Next",u[u.Last=8]="Last",u[u.WrapAround=16]="WrapAround",u[u.NoScroll=32]="NoScroll",u),s=((i=s||{})[i.Error=0]="Error",i[i.Overflow=1]="Overflow",i[i.Success=2]="Success",i[i.Underflow=3]="Underflow",i),d=((l=d||{})[l.Previous=-1]="Previous",l[l.Next=1]="Next",l);function f(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(a)).sort(((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}var p=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(p||{});function v(e,t=0){var n;return e!==(null==(n=(0,r.r)(e))?void 0:n.body)&&(0,o.E)(t,{0:()=>e.matches(a),1(){let t=e;for(;null!==t;){if(t.matches(a))return!0;t=t.parentElement}return!1}})}var m=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(m||{});function b(e){null==e||e.focus({preventScroll:!0})}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",(e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")}),!0),document.addEventListener("click",(e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")}),!0));let g=["textarea","input"].join(",");function x(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let o=t(e),r=t(n);if(null===o||null===r)return 0;let a=o.compareDocumentPosition(r);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function R(e,t,{sorted:n=!0,relativeTo:o=null,skipElements:r=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?n?x(e):e:f(e);r.length>0&&l.length>1&&(l=l.filter((e=>!r.includes(e)))),o=null!=o?o:a.activeElement;let i,u=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,l.indexOf(o))-1;if(4&t)return Math.max(0,l.indexOf(o))+1;if(8&t)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=32&t?{preventScroll:!0}:{},d=0,p=l.length;do{if(d>=p||d+p<=0)return 0;let e=c+d;if(16&t)e=(e+p)%p;else{if(e<0)return 3;if(e>=p)return 1}i=l[e],null==i||i.focus(s),d+=u}while(i!==a.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,g))&&n}(i)&&i.select(),2}},5466:(e,t,n)=>{n.d(t,{r:()=>r});var o=n(7896);function r(e){return o.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},8657:(e,t,n)=>{function o(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function r(){return o()||/Android/gi.test(window.navigator.userAgent)}n.d(t,{gn:()=>o,tq:()=>r})},5506:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294);const r=o.forwardRef((function(e,t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}))},5426:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294);const r=o.forwardRef((function(e,t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),o.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}))}))},1013:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294);const r=o.forwardRef((function(e,t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),o.createElement("path",{fillRule:"evenodd",d:"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"}))}))}}]);