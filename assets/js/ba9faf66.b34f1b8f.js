"use strict";(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[5815],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=l,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5667:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),l=n(4184),r=n.n(l),i=n(5697),o=n.n(i);const d=(0,a.forwardRef)((({as:e,className:t,label:n,children:l,...i},o)=>(0,a.createElement)(e,{ref:o,className:r()("nfd-label",t),...i},n||l||null))),s={label:o().string,children:o().string,as:o().elementType,className:o().string};d.propTypes=s,d.defaultProps={label:"",children:"",as:"label",className:""};const p=e=>(0,a.createElement)(d,{...e});p.propTypes=s,p.defaultProps=d.defaultProps,p.displayName="Label";const c=d},8748:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7294),l=n(4184),r=n.n(l),i=n(5697),o=n.n(i);const d=(0,a.forwardRef)((({type:e,className:t,disabled:n,readOnly:l,...i},o)=>(0,a.createElement)("input",{ref:o,type:e,className:r()("nfd-text-input",n&&"nfd-text-input--disabled",l&&"nfd-text-input--read-only",t),disabled:n,readOnly:l,...i}))),s={type:o().string,className:o().string,disabled:o().bool,readOnly:o().bool};d.propTypes=s,d.defaultProps={type:"text",className:"",disabled:!1,readOnly:!1};const p=d,c=e=>(0,a.createElement)(d,{...e});c.propTypes=s,c.defaultProps=d.defaultProps,c.displayName="TextInput"},3624:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(7294),l=n(5697),r=n.n(l),i=n(6486),o=n(4184),d=n.n(o),s=n(7201),p=n(5426);const c=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"}))}));const u=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"}))}));const m=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"}))})),f={success:p.Z,warning:c,info:u,error:m},g={variant:{success:"nfd-validation-icon--success",warning:"nfd-validation-icon--warning",info:"nfd-validation-icon--info",error:"nfd-validation-icon--error"}},v=({variant:e="info",className:t="",...n})=>{const l=(0,a.useMemo)((()=>f[e]),[e]),r=(0,s.Z)();return l?(0,a.createElement)(l,{...r,...n,className:d()("nfd-validation-icon",g.variant[e],t)}):null};v.propTypes={variant:r().oneOf((0,i.values)({success:"success",warning:"warning",info:"info",error:"error"})),className:r().string};const b=v},7381:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),l=n(5697),r=n.n(l),i=n(4184),o=n.n(i),d=n(3624);const s={variant:{success:"nfd-validation-input--success",warning:"nfd-validation-input--warning",info:"nfd-validation-input--info",error:"nfd-validation-input--error"}},p=(0,a.forwardRef)((({as:e,validation:t={},className:n="",...l},r)=>(0,a.createElement)("div",{className:o()("nfd-validation-input",(null==t?void 0:t.message)&&s.variant[null==t?void 0:t.variant])},(0,a.createElement)(e,{ref:r,...l,className:o()("nfd-validation-input__input",n)}),(null==t?void 0:t.message)&&(0,a.createElement)(d.Z,{variant:null==t?void 0:t.variant,className:"nfd-validation-input__icon"}))));p.propTypes={as:r().elementType.isRequired,validation:r().shape({variant:r().string,message:r().node}),className:r().string};const c=p},1523:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),l=n(5697),r=n.n(l),i=n(6486),o=n(4184),d=n.n(o);const s={variant:{success:"nfd-validation-message--success",warning:"nfd-validation-message--warning",info:"nfd-validation-message--info",error:"nfd-validation-message--error"}},p=({as:e="p",variant:t="info",children:n,className:l="",...r})=>(0,a.createElement)(e,{...r,className:d()("nfd-validation-message",s.variant[t],l)},n);p.propTypes={as:r().elementType,variant:r().oneOf((0,i.keys)(s.variant)),message:r().node,className:r().string,children:r().node.isRequired};const c=p},6247:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),l=n(6486);const r=(e,t)=>{const n=(0,a.useMemo)((()=>(0,l.reduce)(t,((t,n,a)=>n?(t[a]=`${e}__${a}`,t):t),{})),[e,t]),r=(0,a.useMemo)((()=>(0,l.values)(n).join(" ")||null),[n]);return{ids:n,describedBy:r}}},7201:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const l=(e=null)=>(0,a.useMemo)((()=>{const t={role:"img","aria-hidden":"true"};return null!==e&&(t.focusable=e?"true":"false"),t}),[e])},2504:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const l={Table:e=>{let{children:t,docs:n}=e;const r=[],i=()=>!!(n&&"object"==typeof n&&Object.keys(n).length>0);return a.createElement("div",{className:"props-table"},a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Attribute"),a.createElement("th",null,"Type"),a.createElement("th",null,"Description"),a.createElement("th",null,"Default"))),a.createElement("tbody",null,!t&&!i()&&a.createElement("div",{className:"empty-props"},"This component has no props."),(()=>{if(i())for(const e in n)if(n.hasOwnProperty(e)){const t=n[e];t.name=e,void 0===t.type&&(t.type=[]),void 0===t.description&&(t.description=""),void 0===t.defaultValue&&(t.defaultValue=""),void 0===t.isRequired&&(t.isRequired=!1),r.push(a.createElement(l.Row,{key:t.name,name:t.name,type:t.type,description:t.description,defaultValue:t.defaultValue,isRequired:t.isRequired}))}return r})(),t)))}};l.Row=e=>{let{name:t,type:n=[],description:l="-",defaultValue:r="-",isRequired:i=!1}=e;return t&&"string"==typeof t?a.createElement("tr",null,a.createElement("td",{className:"props-table-name-col"},"boolean"==typeof i&&i?a.createElement("span",{className:"required-prop"},t,a.createElement("sup",null,"*")):a.createElement("span",null,t)),a.createElement("td",{className:"props-table-types-col"},(()=>{let e=n;return"string"==typeof e&&(e=[e]),e.length>0?a.createElement(a.Fragment,null,e.map(((e,t)=>a.createElement(a.Fragment,{key:t},a.createElement("code",null,e),a.createElement("span",null," | "))))):a.createElement("span",null,"-")})()),a.createElement("td",{className:"props-table-description-col"},l&&"string"==typeof l&&""!==l?a.createElement("span",null,l):a.createElement("span",null,"-")),a.createElement("td",{className:"props-table-default-col"},r&&"string"==typeof r&&""!==r&&"-"!==r?a.createElement("code",null,r):a.createElement("span",null,"-"))):(console.warn("From: PropsTable.Row. Invalid prop name or missing required props: name."),null)};const r=l},3475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>R,contentTitle:()=>C,default:()=>P,frontMatter:()=>E,metadata:()=>O,toc:()=>F});var a=n(7462),l=n(7294),r=n(3905),i=n(2504),o=n(1629),d=n(4184),s=n.n(d),p=n(5697),c=n.n(p),u=n(5667),m=n(8748),f=n(7381),g=n(1523),v=n(6247);const b=(0,l.forwardRef)((({id:e,onChange:t,label:n,labelSuffix:a,disabled:r,readOnly:i,className:o,description:d,validation:p,...c},b)=>{const{ids:y,describedBy:x}=(0,v.Z)(e,{validation:null==p?void 0:p.message,description:d});return(0,l.createElement)("div",{className:s()("nfd-text-field",r&&"nfd-text-field--disabled",i&&"nfd-text-field--read-only",o)},(0,l.createElement)("div",{className:"nfd-flex nfd-items-center nfd-mb-2"},(0,l.createElement)(u.Z,{className:"nfd-text-field__label",htmlFor:e},n),a),(0,l.createElement)(f.Z,{as:m.Z,ref:b,id:e,onChange:t,disabled:r,readOnly:i,className:"nfd-text-field__input","aria-describedby":x,validation:p,...c}),(null==p?void 0:p.message)&&(0,l.createElement)(g.Z,{variant:null==p?void 0:p.variant,id:y.validation,className:"nfd-text-field__validation"},p.message),d&&(0,l.createElement)("p",{id:y.description,className:"nfd-text-field__description"},d))})),y={id:c().string.isRequired,onChange:c().func.isRequired,label:c().string.isRequired,labelSuffix:c().node,disabled:c().bool,readOnly:c().bool,className:c().string,description:c().node,validation:c().shape({variant:c().string,message:c().node})};b.propTypes=y,b.defaultProps={labelSuffix:null,disabled:!1,readOnly:!1,className:"",description:null,validation:{}};const x=e=>(0,l.createElement)(b,{...e});x.propTypes=y,x.defaultProps=b.defaultProps,x.displayName="TextField";const h=b,k={toc:[{value:"Success",id:"success",level:4},{value:"Warning",id:"warning",level:4},{value:"Info",id:"info",level:4},{value:"Error",id:"error",level:4}]},w="wrapper";function N(e){let{components:t,...n}=e;return(0,r.kt)(w,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"success"},"Success"),(0,r.kt)(o.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(h,{id:"text-field-success",label:"Success variant",onChange:e=>console.log(e.target.value),validation:{variant:"success",message:"Success unlocked. Keep soaring!"},mdxType:"TextField"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<TextField \n    id="text-field-success"\n    label="Success variant"\n    onChange={(e) => console.log(e.target.value)}\n    validation={{\n        variant: "success",\n        message: "Success unlocked. Keep soaring!"\n    }}\n/>\n')),(0,r.kt)("h4",{id:"warning"},"Warning"),(0,r.kt)(o.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(h,{id:"text-field-warning",label:"Warning variant",onChange:e=>console.log(e.target.value),validation:{variant:"warning",message:"Caution: Proceed with care to avoid potential pitfalls."},mdxType:"TextField"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<TextField \n    id="text-field-warning"\n    label="Warning variant"\n    onChange={(e) => console.log(e.target.value)}\n    validation={{\n        variant: "warning",\n        message: "Caution: Proceed with care to avoid potential pitfalls."\n    }}\n/>\n')),(0,r.kt)("h4",{id:"info"},"Info"),(0,r.kt)(o.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(h,{id:"text-field-info",label:"Info variant",onChange:e=>console.log(e.target.value),validation:{variant:"info",message:"Information: Knowledge is the key to empowerment."},mdxType:"TextField"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<TextField \n    id="text-field-info"\n    label="Info variant"\n    onChange={(e) => console.log(e.target.value)}\n    validation={{\n        variant: "info",\n        message: "Information: Knowledge is the key to empowerment."\n    }}\n/>\n')),(0,r.kt)("h4",{id:"error"},"Error"),(0,r.kt)(o.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(h,{id:"text-field-error",label:"Error variant",onChange:e=>console.log(e.target.value),validation:{variant:"error",message:"Error: Unable to proceed without required input."},mdxType:"TextField"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<TextField \n    id="text-field-error"\n    label="Error variant"\n    onChange={(e) => console.log(e.target.value)}\n    validation={{\n        variant: "error",\n        message: "Error: Unable to proceed without required input."\n    }}\n/>\n')))}N.isMDXComponent=!0;const T={id:{type:"string",description:"ID for the text field.",isRequired:!0},label:{type:"string",description:"Label for the text field.",isRequired:!0},onChange:{type:"function",description:"Callback function when the value of the text field changes. The function will receive the event as a parameter.",isRequired:!0},labelSuffix:{type:"node",description:"Content to display after the label."},type:{type:"string",description:"The type of the input.",defaultValue:"text"},description:{type:"string",description:"Description for the text field."},validation:{type:"{ variant: string, message: node }",description:"Validation state and message"},disabled:{type:"bool",defaultValue:"false"},readOnly:{type:"bool",defaultValue:"false"},className:{type:"string"}},E={},C="Text Field",O={unversionedId:"components/text-field",id:"components/text-field",title:"Text Field",description:"A simple text field component. Accept all props of a regular input element.",source:"@site/docs/components/text-field.mdx",sourceDirName:"components",slug:"/components/text-field",permalink:"/npm-ui-component-library/docs/components/text-field",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/components/text-field.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Tag Field",permalink:"/npm-ui-component-library/docs/components/tag-field"},next:{title:"Textarea Field",permalink:"/npm-ui-component-library/docs/components/textarea-field"}},R={},F=[{value:"Usage",id:"usage",level:3},{value:"HTML Attributes",id:"html-attributes",level:3},{value:"Label",id:"label",level:3},{value:"Description",id:"description",level:3},{value:"Disabled",id:"disabled",level:3},{value:"Read Only",id:"read-only",level:3},{value:"Validation",id:"validation",level:3},{value:"Props",id:"props",level:3}],j={toc:F},Z="wrapper";function P(e){let{components:t,...n}=e;return(0,r.kt)(Z,(0,a.Z)({},j,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"text-field"},"Text Field"),(0,r.kt)("p",null,"A simple text field component. Accept all props of a regular ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," element. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TextField")," extends the ",(0,r.kt)("a",{parentName:"p",href:"/npm-ui-component-library/docs/elements/text-input"},(0,r.kt)("inlineCode",{parentName:"a"},"TextInput"))," element\nby adding ",(0,r.kt)("a",{parentName:"p",href:"#label"},"label"),", ",(0,r.kt)("a",{parentName:"p",href:"#description"},"description")," and\n",(0,r.kt)("a",{parentName:"p",href:"#validation"},"validation variants"),"."),(0,r.kt)(o.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(h,{id:"text-field-demo",label:"A text field",onChange:e=>console.log(e.target.value),mdxType:"TextField"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { TextField } from "@newfold/ui-component-library";\n\n<TextField\n    id="text-field-demo"\n    label="A text field"\n    onChange={(e) => console.log(e.target.value)}\n/>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"html-attributes"},"HTML Attributes"),(0,r.kt)("p",null,"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"TextField")," component is a wrapper around a regular ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," element, all attributes of a regular ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," element are accepted."),(0,r.kt)("p",null,"For example, here's an ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," type ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," with a ",(0,r.kt)("inlineCode",{parentName:"p"},"placeholder"),"."),(0,r.kt)(o.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(h,{id:"text-field-html-attributes",label:"A number input",onChange:e=>console.log(e.target.value),type:"number",placeholder:"Enter a number",mdxType:"TextField"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<TextField\n    id="text-field-html-attributes"\n    label="A number input"\n    onChange={(e) => console.log(e.target.value)}\n    type="number"\n    placeholder="Enter a number"\n/>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"label"},"Label"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," prop to add a label to the component."),(0,r.kt)(o.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(h,{id:"text-field-label",label:"Text field label \ud83d\udc4b",onChange:e=>console.log(e.target.value),mdxType:"TextField"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<TextField\n    id="text-field-label"\n    label="Text field label \ud83d\udc4b"\n    onChange={(e) => console.log(e.target.value)}\n/>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"description")," prop to add a description to the component."),(0,r.kt)(o.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(h,{id:"text-field-description",label:"Text field label \ud83d\udc4b",description:"Text field description \ud83d\ude4c",onChange:e=>console.log(e.target.value),mdxType:"TextField"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<TextField\n    id="text-field-description"\n    label="Text field label \ud83d\udc4b"\n    description="Text field description \ud83d\ude4c"\n    onChange={(e) => console.log(e.target.value)}\n/>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"disabled"},"Disabled"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," prop to disable the component."),(0,r.kt)(o.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(h,{id:"text-field-disabled",label:"Disabled text field",type:"url",placeholder:"https://www.example.com",onChange:e=>console.log(e.target.value),disabled:!0,mdxType:"TextField"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<TextField\n    id="text-field-disabled"\n    label="Website Address"\n    onChange={(e) => console.log(e.target.value)}\n    type="url"\n    placeholder="https://www.example.com"\n    disabled={true}\n/>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"read-only"},"Read Only"),(0,r.kt)("p",null,"You can make the input read only by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"readOnly")," prop."),(0,r.kt)(o.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(h,{id:"text-field-readonly",label:"Read only text field",type:"url",value:"https://maze.toys/mazes/mini/daily/",onChange:e=>console.log(e.target.value),readOnly:!0,mdxType:"TextField"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<TextField\n    id="text-field-readonly"\n    label="Read only text field"\n    type="url"\n    value="https://maze.toys/mazes/mini/daily/"\n    onChange={(e) => console.log(e.target.value)}\n    readOnly\n/>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"validation"},"Validation"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"validation")," prop to add validation to the ",(0,r.kt)("inlineCode",{parentName:"p"},"TextField")," component.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"TextField")," provides four validation variants: ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"warning"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"info"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),"."),(0,r.kt)(N,{mdxType:"TextFieldValidationVariants"}),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(i.Z.Table,{docs:T}))}P.isMDXComponent=!0},5426:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const l=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}))}))}}]);