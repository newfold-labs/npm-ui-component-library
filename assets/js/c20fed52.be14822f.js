/*! For license information please see c20fed52.be14822f.js.LICENSE.txt */
(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[452],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),i=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(n),u=a,f=p["".concat(d,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5745:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(7294),a=n(5697),o=n(4184),s=n.n(o);const l=({as:e="div",children:t,className:n="",...a})=>(0,r.createElement)(e,{...a,className:s()("nfd-card__header",n)},t);l.propTypes={as:a.PropTypes.element,children:a.PropTypes.node.isRequired,className:a.PropTypes.string};const d=({as:e="div",children:t,className:n="",...a})=>(0,r.createElement)(e,{...a,className:s()("nfd-card__content",n)},t);d.propTypes={as:a.PropTypes.element,children:a.PropTypes.node.isRequired,className:a.PropTypes.string};const i=({as:e="div",children:t,className:n="",...a})=>(0,r.createElement)(e,{...a,className:s()("nfd-card__footer",n)},t);i.propTypes={as:a.PropTypes.element,children:a.PropTypes.node.isRequired,className:a.PropTypes.string};const c=(0,r.forwardRef)((({as:e,children:t,className:n,...a},o)=>(0,r.createElement)(e,{...a,className:s()("nfd-card",n),ref:o},t))),p={as:a.PropTypes.elementType,children:a.PropTypes.node.isRequired,className:a.PropTypes.string};c.propTypes=p,c.defaultProps={as:"div",className:""},c.Header=l,c.Header.displayName="Card.Header",c.Content=d,c.Content.displayName="Card.Content",c.Footer=i,c.Footer.displayName="Card.Footer";const m=e=>(0,r.createElement)(c,{...e});m.propTypes=p,m.defaultProps=c.defaultProps,m.displayName="Card";const u=c},2504:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7294);const a={Table:e=>{let{children:t,docs:n}=e;const o=[];return r.createElement("div",{className:"props-table"},r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Attribute"),r.createElement("th",null,"Type"),r.createElement("th",null,"Description"),r.createElement("th",null,"Default"))),r.createElement("tbody",null,!t&&!n&&r.createElement("div",{className:"empty-props"},"This component has no props."),(()=>{if(n)for(const e in n)if(console.log(e),n.hasOwnProperty(e)){const t=n[e];t.name=e,void 0===t.type&&(t.type=[]),void 0===t.description&&(t.description=""),void 0===t.defaultValue&&(t.defaultValue=""),void 0===t.isRequired&&(t.isRequired=!1),o.push(r.createElement(a.Row,{key:t.name,name:t.name,type:t.type,description:t.description,defaultValue:t.defaultValue,isRequired:t.isRequired}))}return o})(),t)))}};a.Row=e=>{let{name:t,type:n=[],description:a="-",defaultValue:o="-",isRequired:s=!1}=e;return t&&"string"==typeof t?r.createElement("tr",null,r.createElement("td",{className:"props-table-name-col"},"boolean"==typeof s&&s?r.createElement("span",{className:"required-prop"},t,r.createElement("sup",null,"*")):r.createElement("span",null,t)),r.createElement("td",{className:"props-table-types-col"},(()=>{let e=n;return"string"==typeof e&&(e=[e]),e.length>0?r.createElement(r.Fragment,null,e.map(((e,t)=>r.createElement(r.Fragment,{key:t},r.createElement("code",null,e),r.createElement("span",null," | "))))):r.createElement("span",null,"-")})()),r.createElement("td",{className:"props-table-description-col"},a&&"string"==typeof a&&""!==a?r.createElement("span",null,a):r.createElement("span",null,"-")),r.createElement("td",{className:"props-table-default-col"},o&&"string"==typeof o&&""!==o&&"-"!==o?r.createElement("code",null,o):r.createElement("span",null,"-"))):(console.warn("From: PropsTable.Row. Invalid prop name or missing required props: name."),null)};const o=a},9544:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>g,frontMatter:()=>m,metadata:()=>f,toc:()=>y});var r=n(7462),a=n(7294),o=n(3905),s=n(2504),l=n(1629),d=n(5745);const i={toc:[{value:"Without Header",id:"without-header",level:4},{value:"As columns",id:"as-columns",level:3}]},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"without-header"},"Without Header"),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(d.Z,{mdxType:"Card"},(0,o.kt)(a.Fragment,{key:".0"},(0,o.kt)(d.Z.Content,{className:"nfd-h-24"},"This is Card content with a fixed height."),(0,o.kt)(d.Z.Footer,null,"Footer with full-width button")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<Card>\n  <React.Fragment key=".0">\n    <Card.Content className="nfd-h-24">\n      This is Card content with a fixed height.\n    </Card.Content>\n    <Card.Footer>\n      Footer with full-width button\n    </Card.Footer>\n  </React.Fragment>\n</Card>\n')),(0,o.kt)("h3",{id:"as-columns"},"As columns"),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)("div",{className:"nfd-flex nfd-gap-5 nfd-justify-center"},(0,o.kt)("div",{className:"nfd-w-1/3"},(0,o.kt)(d.Z,{mdxType:"Card"},(0,o.kt)(a.Fragment,{key:".0"},(0,o.kt)(d.Z.Header,null,"This is Card header!"),(0,o.kt)(d.Z.Content,null,"This is Card content!"),(0,o.kt)(d.Z.Footer,null,"This is Card footer!")))),(0,o.kt)("div",{className:"nfd-w-1/3"},(0,o.kt)(d.Z,{mdxType:"Card"},(0,o.kt)(a.Fragment,{key:".0"},(0,o.kt)(d.Z.Header,null,"This is Card header!"),(0,o.kt)(d.Z.Content,null,"This is Card content!"),(0,o.kt)(d.Z.Footer,null,"This is Card footer!")))),(0,o.kt)("div",{className:"nfd-w-1/3"},(0,o.kt)(d.Z,{mdxType:"Card"},(0,o.kt)(a.Fragment,{key:".0"},(0,o.kt)(d.Z.Header,null,"This is Card header!"),(0,o.kt)(d.Z.Content,null,"This is Card content!"),(0,o.kt)(d.Z.Footer,null,"This is Card footer!")))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<div className="nfd-flex nfd-gap-5 nfd-justify-center">\n    <div className="nfd-w-1/3">\n      <Card>\n        <React.Fragment key=".0">\n          <Card.Header>\n            This is Card header!\n          </Card.Header>\n          <Card.Content>\n            This is Card content!\n          </Card.Content>\n          <Card.Footer>\n            This is Card footer!\n          </Card.Footer>\n        </React.Fragment>\n      </Card>\n    </div>\n    <div className="nfd-w-1/3">\n      <Card>\n        <React.Fragment key=".0">\n          <Card.Header>\n            This is Card header!\n          </Card.Header>\n          <Card.Content>\n            This is Card content!\n          </Card.Content>\n          <Card.Footer>\n            This is Card footer!\n          </Card.Footer>\n        </React.Fragment>\n      </Card>\n    </div>\n    <div className="nfd-w-1/3">\n      <Card>\n        <React.Fragment key=".0">\n          <Card.Header>\n            This is Card header!\n          </Card.Header>\n          <Card.Content>\n            This is Card content!\n          </Card.Content>\n          <Card.Footer>\n            This is Card footer!\n          </Card.Footer>\n        </React.Fragment>\n      </Card>\n    </div>\n  </div>\n')))}p.isMDXComponent=!0;const m={},u="Card",f={unversionedId:"components/card",id:"components/card",title:"Card",description:"A simple card component. It has subcomponents for header, content and footer that has as and className props.",source:"@site/docs/components/card.mdx",sourceDirName:"components",slug:"/components/card",permalink:"/npm-ui-component-library/docs/components/card",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/components/card.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Components",permalink:"/npm-ui-component-library/docs/category/components"},next:{title:"Checkbox Group",permalink:"/npm-ui-component-library/docs/components/checkboxGroup"}},h={},y=[{value:"Usage",id:"usage",level:3},{value:"Variants",id:"variants",level:3},{value:"Props",id:"props",level:3}],C={toc:y},k="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(k,(0,r.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"card"},"Card"),(0,o.kt)("p",null,"A simple card component. It has subcomponents for header, content and footer that has ",(0,o.kt)("inlineCode",{parentName:"p"},"as")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"className")," props."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(d.Z,{mdxType:"Card"},(0,o.kt)(a.Fragment,{key:".0"},(0,o.kt)(d.Z.Header,null,"This is Card header!"),(0,o.kt)(d.Z.Content,null,"This is Card content!"),(0,o.kt)(d.Z.Footer,null,"This is Card footer!")))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Card } from "@newfold/ui-component-library";\n\n<Card>\n  <React.Fragment key=".0">\n    <Card.Header>\n      This is Card header!\n    </Card.Header>\n    <Card.Content>\n      This is Card content!\n    </Card.Content>\n    <Card.Footer>\n      This is Card footer!\n    </Card.Footer>\n  </React.Fragment>\n</Card>\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"variants"},"Variants"),(0,o.kt)("p",null,"Card variants"),(0,o.kt)(p,{mdxType:"Variants"}),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)(s.Z.Table,{docs:{as:{type:"elementType",description:"Element type of the Card",defaultValue:"div",isRequired:!1},children:{type:"node",description:"",isRequired:!0},className:{type:"string",description:"Class name for the component",defaultValue:"''",isRequired:!1}}}))}g.isMDXComponent=!0},4184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var s=a.apply(null,n);s&&e.push(s)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);