/*! For license information please see e566272d.b463ec9b.js.LICENSE.txt */
(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[7546],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=i(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var i=2;i<l;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2504:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(7294);const o={Table:e=>{let{children:t,docs:n}=e;const l=[],a=()=>!!(n&&"object"==typeof n&&Object.keys(n).length>0);return r.createElement("div",{className:"props-table"},r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Attribute"),r.createElement("th",null,"Type"),r.createElement("th",null,"Description"),r.createElement("th",null,"Default"))),r.createElement("tbody",null,!t&&!a()&&r.createElement("div",{className:"empty-props"},"This component has no props."),(()=>{if(a())for(const e in n)if(n.hasOwnProperty(e)){const t=n[e];t.name=e,void 0===t.type&&(t.type=[]),void 0===t.description&&(t.description=""),void 0===t.defaultValue&&(t.defaultValue=""),void 0===t.isRequired&&(t.isRequired=!1),l.push(r.createElement(o.Row,{key:t.name,name:t.name,type:t.type,description:t.description,defaultValue:t.defaultValue,isRequired:t.isRequired}))}return l})(),t)))}};o.Row=e=>{let{name:t,type:n=[],description:o="-",defaultValue:l="-",isRequired:a=!1}=e;return t&&"string"==typeof t?r.createElement("tr",null,r.createElement("td",{className:"props-table-name-col"},"boolean"==typeof a&&a?r.createElement("span",{className:"required-prop"},t,r.createElement("sup",null,"*")):r.createElement("span",null,t)),r.createElement("td",{className:"props-table-types-col"},(()=>{let e=n;return"string"==typeof e&&(e=[e]),e.length>0?r.createElement(r.Fragment,null,e.map(((e,t)=>r.createElement(r.Fragment,{key:t},r.createElement("code",null,e),r.createElement("span",null," | "))))):r.createElement("span",null,"-")})()),r.createElement("td",{className:"props-table-description-col"},o&&"string"==typeof o&&""!==o?r.createElement("span",null,o):r.createElement("span",null,"-")),r.createElement("td",{className:"props-table-default-col"},l&&"string"==typeof l&&""!==l&&"-"!==l?r.createElement("code",null,l):r.createElement("span",null,"-"))):(console.warn("From: PropsTable.Row. Invalid prop name or missing required props: name."),null)};const l=o},8171:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>E,default:()=>j,frontMatter:()=>w,metadata:()=>x,toc:()=>T});var r=n(7462),o=n(7294),l=n(3905),a=n(2504),c=n(1629),s=n(4184),i=n.n(s),d=n(5697),p=n.n(d);const u={variant:{default:"",block:"nfd-code--block"}},m=(0,o.forwardRef)((({children:e,variant:t="default",className:n="",...r},l)=>(0,o.createElement)("code",{ref:l,className:i()("nfd-code",u.variant[t],n),...r},e))),f={children:p().node.isRequired,variant:p().oneOf(Object.keys(u.variant)),className:p().string};m.propTypes=f;const y=e=>(0,o.createElement)(m,{...e});y.propTypes=f,y.defaultProps=m.defaultProps,y.displayName="Code";const h=m,b={toc:[{value:"1. Default (default)",id:"1-default-default",level:4},{value:"2. Block",id:"2-block",level:4}]},v="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(v,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"1-default-default"},"1. Default (default)"),(0,l.kt)("p",null,"The default variant renders an inline code element."),(0,l.kt)(c.Z,{mdxType:"NewfoldRoot"},(0,l.kt)(h,{mdxType:"Code"},"console.log('default');")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Code>\n    console.log('default');\n</Code>\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If the parent element has a display flex property with column direction,\nthe code element will be streched to full width. To avoid this,\nadd ",(0,l.kt)("inlineCode",{parentName:"p"},"nfd-w-fit")," class to the code element.")),(0,l.kt)(c.Z,{mdxType:"NewfoldRoot"},(0,l.kt)("div",{className:"nfd-flex nfd-flex-col nfd-gap-2"},(0,l.kt)(h,{mdxType:"Code"},"console.log('default but full width');"),(0,l.kt)(h,{className:"nfd-w-fit",mdxType:"Code"},"console.log('default with `nfd-w-fit` class');"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<div className=\"nfd-flex nfd-flex-col nfd-gap-2\">\n    <Code>console.log('default but full width');</Code>\n    <Code className=\"nfd-w-fit\">console.log('default with `nfd-w-fit` class');</Code>\n</div>\n")),(0,l.kt)("h4",{id:"2-block"},"2. Block"),(0,l.kt)("p",null,"The block variant renders a block (full width) code element."),(0,l.kt)(c.Z,{mdxType:"NewfoldRoot"},(0,l.kt)(h,{variant:"block",mdxType:"Code"},"console.log('block');")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Code variant=\"block\">\n    console.log('block');\n</Code>\n")))}k.isMDXComponent=!0;const g={children:{type:"node",description:"The content of the code element.",isRequired:!0},variant:{type:["default","block"],description:"The variant of the code element.",defaultValue:"default"},className:{type:"string"}},w={},E="Code",x={unversionedId:"elements/code",id:"elements/code",title:"Code",description:"The Code element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code.",source:"@site/docs/elements/code.mdx",sourceDirName:"elements",slug:"/elements/code",permalink:"/npm-ui-component-library/docs/elements/code",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/elements/code.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Checkbox",permalink:"/npm-ui-component-library/docs/elements/checkbox"},next:{title:"Error Boundary",permalink:"/npm-ui-component-library/docs/elements/error-boundary"}},C={},T=[{value:"Usage",id:"usage",level:3},{value:"Variants",id:"variants",level:3},{value:"Props",id:"props",level:3}],N={toc:T},O="wrapper";function j(e){let{components:t,...n}=e;return(0,l.kt)(O,(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"code"},"Code"),(0,l.kt)("p",null,"The Code element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code."),(0,l.kt)(c.Z,{mdxType:"NewfoldRoot"},(0,l.kt)(h,{mdxType:"Code"},"CodeContent();")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Code } from "@newfold/ui-component-library";\n\n<Code>\n    CodeContent();\n</Code>\n')),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"variants"},"Variants"),(0,l.kt)("p",null,"The Code provides two variants."),(0,l.kt)(k,{mdxType:"CodeVariants"}),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"props"},"Props"),(0,l.kt)(a.Z.Table,{docs:g}))}j.isMDXComponent=!0},4184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}}]);