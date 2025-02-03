/*! For license information please see e566272d.dfc3bd5b.js.LICENSE.txt */
(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[7546],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=i(n),m=l,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:l,a[1]=c;for(var i=2;i<r;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2504:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o=n(7294);const l={Table:e=>{let{children:t,docs:n}=e;const r=[],a=()=>!!(n&&"object"==typeof n&&Object.keys(n).length>0);return o.createElement("div",{className:"props-table"},o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Attribute"),o.createElement("th",null,"Type"),o.createElement("th",null,"Description"),o.createElement("th",null,"Default"))),o.createElement("tbody",null,!t&&!a()&&o.createElement("div",{className:"empty-props"},"This component has no props."),(()=>{if(a())for(const e in n)if(n.hasOwnProperty(e)){const t=n[e];t.name=e,void 0===t.type&&(t.type=[]),void 0===t.description&&(t.description=""),void 0===t.defaultValue&&(t.defaultValue=""),void 0===t.isRequired&&(t.isRequired=!1),r.push(o.createElement(l.Row,{key:t.name,name:t.name,type:t.type,description:t.description,defaultValue:t.defaultValue,isRequired:t.isRequired}))}return r})(),t)))}};l.Row=e=>{let{name:t,type:n=[],description:l="-",defaultValue:r="-",isRequired:a=!1}=e;return t&&"string"==typeof t?o.createElement("tr",null,o.createElement("td",{className:"props-table-name-col"},"boolean"==typeof a&&a?o.createElement("span",{className:"required-prop"},t,o.createElement("sup",null,"*")):o.createElement("span",null,t)),o.createElement("td",{className:"props-table-types-col"},(()=>{let e=n;return"string"==typeof e&&(e=[e]),e.length>0?o.createElement(o.Fragment,null,e.map(((e,t)=>o.createElement(o.Fragment,{key:t},o.createElement("code",null,e),o.createElement("span",null," | "))))):o.createElement("span",null,"-")})()),o.createElement("td",{className:"props-table-description-col"},l&&"string"==typeof l&&""!==l?o.createElement("span",null,l):o.createElement("span",null,"-")),o.createElement("td",{className:"props-table-default-col"},r&&"string"==typeof r&&""!==r&&"-"!==r?o.createElement("code",null,r):o.createElement("span",null,"-"))):(console.warn("From: PropsTable.Row. Invalid prop name or missing required props: name."),null)};const r=l},8171:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>E,default:()=>j,frontMatter:()=>w,metadata:()=>x,toc:()=>T});var o=n(7462),l=n(7294),r=n(3905),a=n(2504),c=n(1629),s=n(4184),i=n.n(s),d=n(5697),p=n.n(d);const u={variant:{default:"",block:"nfd-code--block"}},m=(0,l.forwardRef)((({children:e,variant:t="default",className:n="",...o},r)=>(0,l.createElement)("code",{ref:r,className:i()("nfd-code",u.variant[t],n),...o},e))),f={children:p().node.isRequired,variant:p().oneOf(Object.keys(u.variant)),className:p().string};m.propTypes=f;const y=e=>(0,l.createElement)(m,{...e});y.propTypes=f,y.defaultProps=m.defaultProps,y.displayName="Code";const h=m,v={toc:[{value:"1. Default (default)",id:"1-default-default",level:4},{value:"2. Block",id:"2-block",level:4}]},b="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"1-default-default"},"1. Default (default)"),(0,r.kt)("p",null,"The default variant renders an inline code element."),(0,r.kt)(c.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(h,{mdxType:"Code"},"console.log('default');")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Code>\n    console.log('default');\n</Code>\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If the parent element has a display flex property with column direction,\nthe code element will be streched to full width. To avoid this,\nadd ",(0,r.kt)("inlineCode",{parentName:"p"},"nfd-w-fit")," class to the code element.")),(0,r.kt)(c.Z,{mdxType:"NewfoldRoot"},(0,r.kt)("div",{className:"nfd-flex nfd-flex-col nfd-gap-2"},(0,r.kt)(h,{mdxType:"Code"},"console.log('default but full width');"),(0,r.kt)(h,{className:"nfd-w-fit",mdxType:"Code"},"console.log('default with `nfd-w-fit` class');"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<div className=\"nfd-flex nfd-flex-col nfd-gap-2\">\n    <Code>console.log('default but full width');</Code>\n    <Code className=\"nfd-w-fit\">console.log('default with `nfd-w-fit` class');</Code>\n</div>\n")),(0,r.kt)("h4",{id:"2-block"},"2. Block"),(0,r.kt)("p",null,"The block variant renders a block (full width) code element."),(0,r.kt)(c.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(h,{variant:"block",mdxType:"Code"},"console.log('block');")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Code variant=\"block\">\n    console.log('block');\n</Code>\n")))}k.isMDXComponent=!0;const g={children:{type:"node",description:"The content of the code element.",isRequired:!0},variant:{type:["default","block"],description:"The variant of the code element.",defaultValue:"default"},className:{type:"string"}},w={},E="Code",x={unversionedId:"elements/code",id:"elements/code",title:"Code",description:"The Code element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code.",source:"@site/docs/elements/code.mdx",sourceDirName:"elements",slug:"/elements/code",permalink:"/npm-ui-component-library/docs/elements/code",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/elements/code.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Checkbox",permalink:"/npm-ui-component-library/docs/elements/checkbox"},next:{title:"DropZone",permalink:"/npm-ui-component-library/docs/elements/drop-zone"}},C={},T=[{value:"Usage",id:"usage",level:3},{value:"Variants",id:"variants",level:3},{value:"Props",id:"props",level:3}],N={toc:T},O="wrapper";function j(e){let{components:t,...n}=e;return(0,r.kt)(O,(0,o.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"code"},"Code"),(0,r.kt)("p",null,"The Code element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code."),(0,r.kt)(c.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(h,{mdxType:"Code"},"CodeContent();")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Code } from "@newfold/ui-component-library";\n\n<Code>\n    CodeContent();\n</Code>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"variants"},"Variants"),(0,r.kt)("p",null,"The Code provides two variants."),(0,r.kt)(k,{mdxType:"CodeVariants"}),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(a.Z.Table,{docs:g}))}j.isMDXComponent=!0},4184:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var a=l.apply(null,n);a&&e.push(a)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)o.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()}}]);