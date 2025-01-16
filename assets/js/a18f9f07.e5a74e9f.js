/*! For license information please see a18f9f07.e5a74e9f.js.LICENSE.txt */
(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[5571],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>d,kt:()=>b});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=l.createContext({}),c=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return l.createElement(i.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return t?l.createElement(b,o(o({ref:n},d),{},{components:t})):l.createElement(b,o({ref:n},d))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2504:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});var l=t(7294);const a={Table:e=>{let{children:n,docs:t}=e;const r=[],o=()=>!!(t&&"object"==typeof t&&Object.keys(t).length>0);return l.createElement("div",{className:"props-table"},l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"Attribute"),l.createElement("th",null,"Type"),l.createElement("th",null,"Description"),l.createElement("th",null,"Default"))),l.createElement("tbody",null,!n&&!o()&&l.createElement("div",{className:"empty-props"},"This component has no props."),(()=>{if(o())for(const e in t)if(t.hasOwnProperty(e)){const n=t[e];n.name=e,void 0===n.type&&(n.type=[]),void 0===n.description&&(n.description=""),void 0===n.defaultValue&&(n.defaultValue=""),void 0===n.isRequired&&(n.isRequired=!1),r.push(l.createElement(a.Row,{key:n.name,name:n.name,type:n.type,description:n.description,defaultValue:n.defaultValue,isRequired:n.isRequired}))}return r})(),n)))}};a.Row=e=>{let{name:n,type:t=[],description:a="-",defaultValue:r="-",isRequired:o=!1}=e;return n&&"string"==typeof n?l.createElement("tr",null,l.createElement("td",{className:"props-table-name-col"},"boolean"==typeof o&&o?l.createElement("span",{className:"required-prop"},n,l.createElement("sup",null,"*")):l.createElement("span",null,n)),l.createElement("td",{className:"props-table-types-col"},(()=>{let e=t;return"string"==typeof e&&(e=[e]),e.length>0?l.createElement(l.Fragment,null,e.map(((e,n)=>l.createElement(l.Fragment,{key:n},l.createElement("code",null,e),l.createElement("span",null," | "))))):l.createElement("span",null,"-")})()),l.createElement("td",{className:"props-table-description-col"},a&&"string"==typeof a&&""!==a?l.createElement("span",null,a):l.createElement("span",null,"-")),l.createElement("td",{className:"props-table-default-col"},r&&"string"==typeof r&&""!==r&&"-"!==r?l.createElement("code",null,r):l.createElement("span",null,"-"))):(console.warn("From: PropsTable.Row. Invalid prop name or missing required props: name."),null)};const r=a},9527:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>N,contentTitle:()=>w,default:()=>H,frontMatter:()=>k,metadata:()=>C,toc:()=>E});var l=t(7462),a=t(7294),r=t(3905),o=t(2504),s=t(1629),i=t(4184),c=t.n(i),d=t(5697),p=t.n(d);const u={variant:{striped:"even:nfd-bg-slate-50 odd:nfd-bg-white",plain:""}},m=({children:e,className:n="",...t})=>(0,a.createElement)("td",{className:c()("nfd-px-3 nfd-py-4 nfd-text-sm nfd-text-slate-500",n),...t},e);m.propTypes={children:p().node.isRequired,variant:p().oneOf(Object.keys(u.variant)),className:p().string};const b=({children:e,variant:n="plain",className:t="",...l})=>(0,a.createElement)("tr",{className:c()(u.variant[n],t),...l},e);b.propTypes={children:p().node.isRequired,variant:p().oneOf(Object.keys(u.variant)),className:p().string};const f=({children:e,className:n="",...t})=>(0,a.createElement)("th",{className:c()("nfd-px-3 nfd-py-4 nfd-text-left nfd-text-sm nfd-font-semibold nfd-text-slate-900",n),...t},e);f.propTypes={children:p().node.isRequired,className:p().string};const y=({children:e,className:n="",...t})=>(0,a.createElement)("thead",{className:c()("nfd-bg-slate-50",n),...t},e);y.propTypes={children:p().node.isRequired,className:p().string};const T=({children:e,className:n="",...t})=>(0,a.createElement)("tbody",{className:c()("nfd-divide-y nfd-divide-gray-200 nfd-bg-white",n),...t},e);T.propTypes={children:p().node.isRequired,className:p().string};const h=(0,a.forwardRef)((({children:e,className:n="",...t},l)=>(0,a.createElement)("div",{className:"nfd-overflow-hidden nfd-shadow nfd-ring-1 nfd-ring-black nfd-ring-opacity-5 nfd-rounded-lg"},(0,a.createElement)("table",{className:c()("nfd-min-w-full nfd-divide-y nfd-divide-slate-300",n),...t,ref:l},e))));h.propTypes={children:p().node.isRequired,className:p().string},h.Head=y,h.Head.displayName="Table.Head",h.Body=T,h.Body.displayName="Table.Body",h.Header=f,h.Header.displayName="Table.Header",h.Row=b,h.Row.displayName="Table.Row",h.Cell=m,h.Cell.displayName="Table.Cell";const g=h,v={children:{type:"node",description:"Table content"},className:{type:"string"}},k={},w="Table",C={unversionedId:"elements/table",id:"elements/table",title:"Table",description:"A basic table component. The table component contains sub components that allows you to construct a table.",source:"@site/docs/elements/table.mdx",sourceDirName:"elements",slug:"/elements/table",permalink:"/npm-ui-component-library/docs/elements/table",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/elements/table.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Spinner",permalink:"/npm-ui-component-library/docs/elements/spinner"},next:{title:"Tag Input",permalink:"/npm-ui-component-library/docs/elements/tag-input"}},N={},E=[{value:"Usage",id:"usage",level:3},{value:"Sub Components",id:"sub-components",level:3},{value:"Props",id:"props",level:3}],O={toc:E},R="wrapper";function H(e){let{components:n,...t}=e;return(0,r.kt)(R,(0,l.Z)({},O,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"table"},"Table"),(0,r.kt)("p",null,"A basic table component. The table component contains sub components that allows you to construct a table."),(0,r.kt)(s.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(g,{className:"nfd-m-0 nfd-table",mdxType:"Table"},(0,r.kt)(g.Head,null,(0,r.kt)(g.Row,null,(0,r.kt)(g.Header,null,"Header 1"),(0,r.kt)(g.Header,null,"Header 2"),(0,r.kt)(g.Header,null,"Header 3"))),(0,r.kt)(g.Body,null,(0,r.kt)(g.Row,null,(0,r.kt)(g.Cell,null,"Cell 1"),(0,r.kt)(g.Cell,null,"Cell 2"),(0,r.kt)(g.Cell,null,"Cell 3")),(0,r.kt)(g.Row,null,(0,r.kt)(g.Cell,null,"Cell 1"),(0,r.kt)(g.Cell,null,"Cell 2"),(0,r.kt)(g.Cell,null,"Cell 3"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Table } from "@newfold/ui-component-library";\n\n<Table>\n    <Table.Head>\n        <Table.Row>\n            <Table.Header>\n                Header 1\n            </Table.Header>\n            <Table.Header>\n                Header 2\n            </Table.Header>\n            <Table.Header>\n                Header 3\n            </Table.Header>\n        </Table.Row>\n    </Table.Head>\n    <Table.Body>\n        <Table.Row>\n            <Table.Cell>\n                Cell 1\n            </Table.Cell>\n            <Table.Cell>\n                Cell 2\n            </Table.Cell>\n            <Table.Cell>\n                Cell 3\n            </Table.Cell>\n        </Table.Row>\n        <Table.Row>\n            <Table.Cell>\n                Cell 1\n            </Table.Cell>\n            <Table.Cell>\n                Cell 2\n            </Table.Cell>\n            <Table.Cell>\n                Cell 3\n            </Table.Cell>\n        </Table.Row>\n    </Table.Body>\n</Table>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sub-components"},"Sub Components"),(0,r.kt)("p",null,"The table component contains the following sub components:"),(0,r.kt)("p",null,"-- ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," ",(0,r.kt)("br",null),"\n---- ",(0,r.kt)("inlineCode",{parentName:"p"},"Table.Head")," ",(0,r.kt)("br",null),"\n------ ",(0,r.kt)("inlineCode",{parentName:"p"},"Table.Row")," ",(0,r.kt)("br",null),"\n-------- ",(0,r.kt)("inlineCode",{parentName:"p"},"Table.Header")," ",(0,r.kt)("br",null),"\n---- ",(0,r.kt)("inlineCode",{parentName:"p"},"Table.Body")," ",(0,r.kt)("br",null),"\n------ ",(0,r.kt)("inlineCode",{parentName:"p"},"Table.Row")," ",(0,r.kt)("br",null),"\n-------- ",(0,r.kt)("inlineCode",{parentName:"p"},"Table.Cell")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(o.Z.Table,{docs:v}))}H.isMDXComponent=!0},4184:(e,n)=>{var t;!function(){"use strict";var l={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t)){if(t.length){var o=a.apply(null,t);o&&e.push(o)}}else if("object"===r){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var s in t)l.call(t,s)&&t[s]&&e.push(s)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()}}]);