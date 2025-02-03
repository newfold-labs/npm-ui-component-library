"use strict";(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[5124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7299:(e,t,n)=>{n.d(t,{ZP:()=>u});var a=n(7294),r=n(4184),o=n.n(r),i=n(6486),l=n(5697),s=n.n(l),p=n(2145);const d={variant:{primary:"nfd-button--primary",secondary:"nfd-button--secondary",error:"nfd-button--error",upsell:"nfd-button--upsell"},size:{default:"",small:"nfd-button--small",large:"nfd-button--large"}},m=(0,a.forwardRef)((({children:e,as:t,type:n,variant:r,size:i,isLoading:l,disabled:s,className:m,...c},u)=>(0,a.createElement)(t,{type:n||"button"===t&&"button"||void 0,disabled:s,ref:u,className:o()("nfd-button",d.variant[r],d.size[i],l&&"nfd-cursor-wait",s&&"nfd-button--disabled",m),...c},l&&(0,a.createElement)(p.ZP,{size:"small"===i?"3":"4",className:"nfd-mr-2"}),e))),c={children:s().node.isRequired,as:s().elementType,type:s().oneOf(["button","submit","reset"]),variant:s().oneOf((0,i.keys)(d.variant)),size:s().oneOf((0,i.keys)(d.size)),isLoading:s().bool,disabled:s().bool,className:s().string};m.propTypes=c,m.defaultProps={as:"button",type:void 0,variant:"primary",size:"default",isLoading:!1,disabled:!1,className:""};const u=m,g=e=>(0,a.createElement)(m,{...e});g.propTypes=c,g.defaultProps=m.defaultProps,g.displayName="Button"},9861:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),r=n(4184),o=n.n(r),i=n(6486),l=n(5697),s=n.n(l);const p=({onDrop:e,children:t,className:n,disabled:r,tabIndex:l,...s})=>{const[p,d]=(0,a.useState)(!1),m=(0,a.useCallback)((e=>{e.preventDefault(),e.stopPropagation(),r||(0,i.isEmpty)(e.dataTransfer.items)||d(!0)}),[r]),c=(0,a.useCallback)((e=>{e.preventDefault(),e.stopPropagation(),d(!1)}),[]),u=(0,a.useCallback)((e=>{e.preventDefault(),e.stopPropagation()}),[]),g=(0,a.useCallback)((t=>{t.preventDefault(),t.stopPropagation(),d(!1),r||e&&e(t)}),[e]);return(0,a.createElement)("div",{onDragEnter:m,onDragLeave:c,onDragOver:u,onDrop:g,"aria-disabled":r,tabIndex:r?"-1":l||"0",className:o()("nfd-drop-zone",{"nfd-drop-zone-is-dragging-over":p,"nfd-drop-zone-is-disabled":r},n),...s},(0,a.createElement)("div",{className:"nfd-drop-zone__content"},t))};p.propTypes={onDrop:s().func.isRequired,children:s().node,className:s().string,disabled:s().bool,tabIndex:s().string};const d=p},935:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7294);const r=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"}))}));const o=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z",clipRule:"evenodd"}))}));const i=a.forwardRef((function(e,t){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"}))}));var l=n(6486),s=n(5697),p=n.n(s),d=n(4184),m=n.n(d),c=n(7299),u=n(2145);const g={classes:{rounded:"nfd-rounded-lg",avatar:"nfd-rounded-full",square:"nfd-rounded-none"},components:{Rounded:r,Avatar:o,Square:r}},f=(0,a.forwardRef)((({id:e,name:t,variant:n,previewImage:r,previewImageAlt:o,buttonText:l,buttonVariant:s,onClick:p,onChange:d,onReset:f,className:v,disabled:b,accept:h,isLoading:y=!1,resetPreviewActionAriaLabel:w,...k},I)=>{const[N,E]=(0,a.useState)(r||null),T=(0,a.useCallback)((e=>{var t;const n=null===(t=e.target.files)||void 0===t?void 0:t[0];if(!n)return;const a=URL.createObjectURL(n);return E(a),d&&d({event:e,file:n}),()=>URL.revokeObjectURL(a)}),[d]),C=(0,a.useCallback)((t=>{if(b)return;if("keydown"===t.type&&!["Enter"," "].includes(t.key))return;E(null);const n=document.getElementById(e);n&&(n.value=""),f&&f({inputId:e,previousPreview:N,event:t})," keydown "===t.type&&t.preventDefault()}),[e,N,f]),x=(0,a.useCallback)((t=>{if(b)return;if(p)return void p(t);const n=document.getElementById(e);n&&n.click()}),[b]);return(0,a.createElement)("div",{className:m()("nfd-image-input",N&&"nfd-has-preview",b&&"nfd-is-disabled",v)},(0,a.createElement)((()=>{if(N||y)return(0,a.createElement)("div",{className:m()("nfd-image-input__preview nfd-group",g.classes[n]||g.classes.avatar)},!N&&(0,a.createElement)("div",{className:"nfd-image-input__loading"},(0,a.createElement)(u.ZP,null)),N&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)("img",{src:N,alt:o||"Selected",className:"nfd-image-input__preview-img"}),(0,a.createElement)("div",{onClick:C,onKeyDown:C,role:"button",tabIndex:0,disabled:b,className:"nfd-image-input__preview-reset group-hover:nfd-opacity-100","aria-label":w||"Remove selected image"},(0,a.createElement)(i,{className:"nfd-m-auto"}))));n&&(n=(n=(n=n.trim()).toLowerCase()).charAt(0).toUpperCase()+n.slice(1));const e=g.components[n]||g.components.Avatar;return(0,a.createElement)(e,{className:"nfd-image-input__icon"})}),null),(0,a.createElement)("input",{id:e,name:t,type:"file",className:"nfd-hidden",accept:h||"image/*",onChange:T,disabled:b,ref:I,...k}),(0,a.createElement)(c.ZP,{variant:s||"secondary",onClick:x,disabled:b},l||"Select Image"))}));f.propTypes={id:p().string.isRequired,name:p().string.isRequired,variant:p().oneOf((0,l.keys)(g.classes)),previewImage:p().string,previewImageAlt:p().string,buttonText:p().string,buttonVariant:p().string,onClick:p().func,onChange:p().func,className:p().string,disabled:p().bool,accept:p().string,isLoading:p().bool,resetPreviewActionAriaLabel:p().string};const v=f},5667:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7294),r=n(4184),o=n.n(r),i=n(5697),l=n.n(i);const s=(0,a.forwardRef)((({as:e,className:t,label:n,requiredIndicator:r,children:i,...l},s)=>(0,a.createElement)(e,{ref:s,className:o()("nfd-label",t),...l},n||i||null,r&&(0,a.createElement)("span",{className:"nfd-label__required"},"*")))),p={label:l().string,children:l().string,as:l().elementType,className:l().string,required:l().bool};s.propTypes=p,s.defaultProps={label:"",children:"",as:"label",className:"",requiredIndicator:!1};const d=e=>(0,a.createElement)(s,{...e});d.propTypes=p,d.defaultProps=s.defaultProps,d.displayName="Label";const m=s},2145:(e,t,n)=>{n.d(t,{ZP:()=>g});var a=n(7294),r=n(4184),o=n.n(r),i=n(6486),l=n(5697),s=n.n(l),p=n(7201);const d={variant:{default:"",primary:"nfd-text-primary-500",white:"nfd-text-white"},size:{3:"nfd-w-3 nfd-h-3",4:"nfd-w-4 nfd-h-4",8:"nfd-w-8 nfd-h-8"}},m=(0,a.forwardRef)((({variant:e,size:t,className:n},r)=>{const i=(0,p.Z)();return(0,a.createElement)("svg",{ref:r,xmlns:"http://www.w3.org/2000/svg/",fill:"none",viewBox:"0 0 24 24",className:o()("nfd-animate-spin",d.variant[e],d.size[t],n),...i},(0,a.createElement)("circle",{className:"nfd-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.createElement)("path",{className:"nfd-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))})),c={variant:s().oneOf((0,i.keys)(d.variant)),size:s().oneOf((0,i.keys)(d.size)),className:s().string};m.propTypes=c,m.defaultProps={variant:"default",size:"4",className:""};const u=e=>(0,a.createElement)(m,{...e});u.propTypes=c,u.defaultProps=m.defaultProps,u.displayName="Spinner";const g=m},7201:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=(e=null)=>(0,a.useMemo)((()=>{const t={role:"img","aria-hidden":"true"};return null!==e&&(t.focusable=e?"true":"false"),t}),[e])},2504:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const r={Table:e=>{let{children:t,docs:n}=e;const o=[],i=()=>!!(n&&"object"==typeof n&&Object.keys(n).length>0);return a.createElement("div",{className:"props-table"},a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Attribute"),a.createElement("th",null,"Type"),a.createElement("th",null,"Description"),a.createElement("th",null,"Default"))),a.createElement("tbody",null,!t&&!i()&&a.createElement("div",{className:"empty-props"},"This component has no props."),(()=>{if(i())for(const e in n)if(n.hasOwnProperty(e)){const t=n[e];t.name=e,void 0===t.type&&(t.type=[]),void 0===t.description&&(t.description=""),void 0===t.defaultValue&&(t.defaultValue=""),void 0===t.isRequired&&(t.isRequired=!1),o.push(a.createElement(r.Row,{key:t.name,name:t.name,type:t.type,description:t.description,defaultValue:t.defaultValue,isRequired:t.isRequired}))}return o})(),t)))}};r.Row=e=>{let{name:t,type:n=[],description:r="-",defaultValue:o="-",isRequired:i=!1}=e;return t&&"string"==typeof t?a.createElement("tr",null,a.createElement("td",{className:"props-table-name-col"},"boolean"==typeof i&&i?a.createElement("span",{className:"required-prop"},t,a.createElement("sup",null,"*")):a.createElement("span",null,t)),a.createElement("td",{className:"props-table-types-col"},(()=>{let e=n;return"string"==typeof e&&(e=[e]),e.length>0?a.createElement(a.Fragment,null,e.map(((e,t)=>a.createElement(a.Fragment,{key:t},a.createElement("code",null,e),a.createElement("span",null," | "))))):a.createElement("span",null,"-")})()),a.createElement("td",{className:"props-table-description-col"},r&&"string"==typeof r&&""!==r?a.createElement("span",null,r):a.createElement("span",null,"-")),a.createElement("td",{className:"props-table-default-col"},o&&"string"==typeof o&&""!==o&&"-"!==o?a.createElement("code",null,o):a.createElement("span",null,"-"))):(console.warn("From: PropsTable.Row. Invalid prop name or missing required props: name."),null)};const o=r},8089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>T,frontMatter:()=>h,metadata:()=>w,toc:()=>I});var a=n(7462),r=n(7294),o=n(3905),i=n(2504),l=n(1629),s=n(4184),p=n.n(s),d=n(5697),m=n.n(d),c=n(9861),u=n(935),g=n(5667);const f=(0,r.forwardRef)((({id:e,name:t,imageInputVariant:n,previewImage:a,previewImageAlt:o,buttonText:i,buttonVariant:l,onClick:s,onChange:d,onReset:m,onDrop:f,onError:v,dropLabel:b="Select an image or drag and drop",disabled:h,isLoading:y,resetPreviewActionAriaLabel:w,className:k,children:I,...N},E)=>{const T=(0,r.useRef)(),C=(0,r.useCallback)((e=>{if(!e.dataTransfer.files)return;if(f)return void f(e);const t=e.dataTransfer.files[0];if(t)try{if(!t.type.startsWith("image/"))throw new Error("Unsupported file type.");const e=T.current;if(e){const n=new DataTransfer;n.items.add(t),e.files=n.files;const a=new Event("change",{bubbles:!0});e.dispatchEvent(a)}}catch(n){v&&v(n)}}),[v,f]);return(0,r.createElement)("div",{className:p()("nfd-image-import nfd-@container/nfd-image-import",h&&"nfd-is-disabled",k),ref:E,...N},(0,r.createElement)(c.Z,{onDrop:C,disabled:h,"aria-label":b,tabIndex:"-1"},(0,r.createElement)("div",{className:"nfd-image-import__drop-zone-content"},(0,r.createElement)(u.Z,{id:e,name:t,variant:n,previewImage:a,previewImageAlt:o,buttonText:i,buttonVariant:l,onClick:s,onChange:d,onReset:m,disabled:h,isLoading:y,resetPreviewActionAriaLabel:w,ref:T}),(0,r.createElement)(g.Z,{htmlFor:e,className:"nfd-image-import__drop-label"},b))),I&&(0,r.createElement)("div",{className:"nfd-image-import__content"},I))}));f.propTypes={id:m().string.isRequired,name:m().string.isRequired,previewImageVariant:m().string,previewImage:m().string,previewImageAlt:m().string,buttonText:m().string,buttonVariant:m().string,onClick:m().func,onChange:m().func,onReset:m().func,onDrop:m().func,onError:m().func,dropLabel:m().string,disabled:m().bool,accept:m().string,isLoading:m().bool,resetPreviewActionAriaLabel:m().string,className:m().string,children:m().node};const v=f,b={id:{type:"string",description:"The ID of the input element.",isRequired:!0},name:{type:"string",description:"The name of the input element.",isRequired:!0},previewImageVariant:{type:["avatar","rounded","square"],description:"The variant of the preview/placeholder image."},previewImage:{type:"string",description:"The src of the preview image. Can be used as a default preview."},previewImageAlt:{type:"string",description:"The alt text of the preview image."},buttonText:{type:"string",description:"The text of the button.",defaultValue:"Select Image"},buttonVariant:{type:["primary","secondary"],description:"The button variant.",defaultValue:"secondary"},onClick:{type:"function",description:"Fires when the button is clicked and will take over the default file input behavior. The function will receive the event object as an argument."},onChange:{type:"function",description:'Fires when the file input changes. The function will receive an object of "event" and "file" as an argument.'},onReset:{type:"function",description:'Fires when preview image is reset. The function will receive an object of "inputId", "previousPreview" and "event" as an argument.'},onDrop:{type:"function",description:"Fires when a file is dropped and will take over the default behavior of the drop zone. The function will receive the event object as an argument."},onError:{type:"function",description:'Fires when an error occurs. The function will receive an object of "error" as an argument.'},dropLabel:{type:"string",description:"The label to be displayed in the drop zone.",defaultValue:"Select an image or drag and drop"},disabled:{type:"boolean",description:"If true, the input will be disabled."},isLoading:{type:"boolean",description:"If true, the input will be in a loading state."},resetPreviewActionAriaLabel:{type:"string",description:"The aria label of the reset preview action."},className:{type:"string",description:"The class name of the element."}},h={},y="ImageImport",w={unversionedId:"components/image-import",id:"components/image-import",title:"ImageImport",description:"The ImageImport component is used to as an interface for uploading image files using a drag and drop area and file input.",source:"@site/docs/components/image-import.mdx",sourceDirName:"components",slug:"/components/image-import",permalink:"/npm-ui-component-library/docs/components/image-import",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/components/image-import.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"FeaturesSelect",permalink:"/npm-ui-component-library/docs/components/features-select"},next:{title:"Modal",permalink:"/npm-ui-component-library/docs/components/modal"}},k={},I=[{value:"Usage",id:"usage",level:3},{value:"Disabled",id:"disabled",level:3},{value:"isLoading",id:"isloading",level:3},{value:"Drop Label",id:"drop-label",level:3},{value:"onClick",id:"onclick",level:3},{value:"onChange",id:"onchange",level:3},{value:"onDrop",id:"ondrop",level:3},{value:"onReset",id:"onreset",level:3},{value:"Props",id:"props",level:3}],N={toc:I},E="wrapper";function T(e){let{components:t,...n}=e;return(0,o.kt)(E,(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"imageimport"},"ImageImport"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ImageImport")," component is used to as an interface for uploading image files using a drag and drop area and file input."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ImageImport")," component is a wrapper for the ",(0,o.kt)("a",{parentName:"p",href:"/npm-ui-component-library/docs/elements/image-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ImageInput"))," and ",(0,o.kt)("a",{parentName:"p",href:"/npm-ui-component-library/docs/elements/drop-zone"},(0,o.kt)("inlineCode",{parentName:"a"},"DropZone"))," components with basic logic to tie the two together."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(v,{id:"image-import",name:"image-import",mdxType:"ImageImport"})),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { ImageImport } from "@newfold/ui-component-library";\n\n<ImageImport\n    id="image-import"\n    name="image-import"\n/>\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"disabled"},"Disabled"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"disabled")," prop to disable the ImageImport."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(v,{id:"image-import-disabled",name:"image-import-disabled",disabled:!0,mdxType:"ImageImport"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<ImageImport\n    id="image-import"\n    name="image-import"\n    disabled\n/>\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"isloading"},"isLoading"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoading")," prop to show a loading spinner."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(v,{id:"image-import-loading",name:"image-import-loading",isLoading:!0,mdxType:"ImageImport"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<ImageImport\n    id="image-import"\n    name="image-import"\n    isLoading\n/>\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"drop-label"},"Drop Label"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"dropLabel")," prop to set the text displayed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"DropZone")," area."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(v,{id:"image-import-drop-label",name:"image-import-drop-label",dropLabel:"Drop an image here",mdxType:"ImageImport"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<ImageImport\n    id="image-import"\n    name="image-import"\n    dropLabel="Drop an image here"\n/>\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"onclick"},"onClick"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," prop allows you to pass a function to be called when the ",(0,o.kt)("inlineCode",{parentName:"p"},"ImageInput")," button is clicked."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(v,{id:"image-import-click",name:"image-import-click",onClick:()=>alert("ImageImport clicked"),mdxType:"ImageImport"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<ImageImport\n    id="image-import"\n    name="image-import"\n    onClick={() => alert(\'ImageImport clicked\')}\n/>\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The function passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," will replace the default behavior of the input element and will not open the file dialog.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"onchange"},"onChange"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"onChange")," prop allows you to pass a function to be called when the ",(0,o.kt)("inlineCode",{parentName:"p"},"ImageInput")," value changes. The function will receive an object with the event and the inserted file."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(v,{id:"image-import-change",name:"image-import-change",onChange:(e,t)=>console.log(e,t),mdxType:"ImageImport"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<ImageImport\n    id="image-import"\n    name="image-import"\n    onChange={(event, file) => console.log(event, file)}\n/>\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"ondrop"},"onDrop"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"onDrop")," prop allows you to pass a function to be called when a file is dropped into the ",(0,o.kt)("inlineCode",{parentName:"p"},"DropZone"),". The function will receive an object of the event."),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(v,{id:"image-import-drop",name:"image-import-drop",onDrop:e=>console.log(e),mdxType:"ImageImport"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<ImageImport\n    id="image-import"\n    name="image-import"\n    onDrop={(event) => console.log(event)}\n/>\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The function passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"onDrop")," will replace the default behavior of the drop zone element and will not process any of the component's default logic to replace the image preveiw.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"onreset"},"onReset"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"onReset"),' prop allows you to pass a function to be called when the preview image is reset (removed). The function will receive an object of "inputId", "previousPreview" and "event" as an argument.'),(0,o.kt)(l.Z,{mdxType:"NewfoldRoot"},(0,o.kt)(v,{id:"image-import-reset",name:"image-import-reset",onReset:e=>{let{inputId:t,previousPreview:n,event:a}=e;return console.log(t,n,a)},mdxType:"ImageImport"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<ImageImport\n    id="image-import"\n    name="image-import"\n    onReset={({inputId, previousPreview, event}) => console.log(inputId, previousPreview, event)}\n/>\n')),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)(i.Z.Table,{docs:b}))}T.isMDXComponent=!0}}]);