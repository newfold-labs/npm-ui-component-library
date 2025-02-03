"use strict";(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[1883],{7299:(e,t,n)=>{n.d(t,{ZP:()=>m});var a=n(7294),l=n(4184),r=n.n(l),o=n(6486),s=n(5697),i=n.n(s),d=n(2145);const c={variant:{primary:"nfd-button--primary",secondary:"nfd-button--secondary",error:"nfd-button--error",upsell:"nfd-button--upsell"},size:{default:"",small:"nfd-button--small",large:"nfd-button--large"}},u=(0,a.forwardRef)((({children:e,as:t,type:n,variant:l,size:o,isLoading:s,disabled:i,className:u,...p},m)=>(0,a.createElement)(t,{type:n||"button"===t&&"button"||void 0,disabled:i,ref:m,className:r()("nfd-button",c.variant[l],c.size[o],s&&"nfd-cursor-wait",i&&"nfd-button--disabled",u),...p},s&&(0,a.createElement)(d.ZP,{size:"small"===o?"3":"4",className:"nfd-mr-2"}),e))),p={children:i().node.isRequired,as:i().elementType,type:i().oneOf(["button","submit","reset"]),variant:i().oneOf((0,o.keys)(c.variant)),size:i().oneOf((0,o.keys)(c.size)),isLoading:i().bool,disabled:i().bool,className:i().string};u.propTypes=p,u.defaultProps={as:"button",type:void 0,variant:"primary",size:"default",isLoading:!1,disabled:!1,className:""};const m=u,f=e=>(0,a.createElement)(u,{...e});f.propTypes=p,f.defaultProps=u.defaultProps,f.displayName="Button"},2145:(e,t,n)=>{n.d(t,{ZP:()=>f});var a=n(7294),l=n(4184),r=n.n(l),o=n(6486),s=n(5697),i=n.n(s),d=n(7201);const c={variant:{default:"",primary:"nfd-text-primary-500",white:"nfd-text-white"},size:{3:"nfd-w-3 nfd-h-3",4:"nfd-w-4 nfd-h-4",8:"nfd-w-8 nfd-h-8"}},u=(0,a.forwardRef)((({variant:e,size:t,className:n},l)=>{const o=(0,d.Z)();return(0,a.createElement)("svg",{ref:l,xmlns:"http://www.w3.org/2000/svg/",fill:"none",viewBox:"0 0 24 24",className:r()("nfd-animate-spin",c.variant[e],c.size[t],n),...o},(0,a.createElement)("circle",{className:"nfd-opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.createElement)("path",{className:"nfd-opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}))})),p={variant:i().oneOf((0,o.keys)(c.variant)),size:i().oneOf((0,o.keys)(c.size)),className:i().string};u.propTypes=p,u.defaultProps={variant:"default",size:"4",className:""};const m=e=>(0,a.createElement)(u,{...e});m.propTypes=p,m.defaultProps=u.defaultProps,m.displayName="Spinner";const f=u},7768:(e,t,n)=>{n.d(t,{S7:()=>i,ZP:()=>p});var a=n(7294),l=n(5697),r=n.n(l),o=n(4184),s=n.n(o);const i={size:{1:"nfd-title--1",2:"nfd-title--2",3:"nfd-title--3",4:"nfd-title--4",5:"nfd-title--5"}},d=(0,a.forwardRef)((({children:e,as:t,size:n,className:l,...r},o)=>(0,a.createElement)(t,{ref:o,className:s()("nfd-title",i.size[n||t[1]],l),...r},e))),c={children:r().node.isRequired,as:r().elementType,size:r().oneOf(Object.keys(i.size)),className:r().string};d.propTypes=c,d.defaultProps={as:"h1",size:void 0,className:""};const u=e=>(0,a.createElement)(d,{...e});u.propTypes=c,u.defaultProps=d.defaultProps,u.displayName="Title";const p=d},7201:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const l=(e=null)=>(0,a.useMemo)((()=>{const t={role:"img","aria-hidden":"true"};return null!==e&&(t.focusable=e?"true":"false"),t}),[e])},2504:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const l={Table:e=>{let{children:t,docs:n}=e;const r=[],o=()=>!!(n&&"object"==typeof n&&Object.keys(n).length>0);return a.createElement("div",{className:"props-table"},a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Attribute"),a.createElement("th",null,"Type"),a.createElement("th",null,"Description"),a.createElement("th",null,"Default"))),a.createElement("tbody",null,!t&&!o()&&a.createElement("div",{className:"empty-props"},"This component has no props."),(()=>{if(o())for(const e in n)if(n.hasOwnProperty(e)){const t=n[e];t.name=e,void 0===t.type&&(t.type=[]),void 0===t.description&&(t.description=""),void 0===t.defaultValue&&(t.defaultValue=""),void 0===t.isRequired&&(t.isRequired=!1),r.push(a.createElement(l.Row,{key:t.name,name:t.name,type:t.type,description:t.description,defaultValue:t.defaultValue,isRequired:t.isRequired}))}return r})(),t)))}};l.Row=e=>{let{name:t,type:n=[],description:l="-",defaultValue:r="-",isRequired:o=!1}=e;return t&&"string"==typeof t?a.createElement("tr",null,a.createElement("td",{className:"props-table-name-col"},"boolean"==typeof o&&o?a.createElement("span",{className:"required-prop"},t,a.createElement("sup",null,"*")):a.createElement("span",null,t)),a.createElement("td",{className:"props-table-types-col"},(()=>{let e=n;return"string"==typeof e&&(e=[e]),e.length>0?a.createElement(a.Fragment,null,e.map(((e,t)=>a.createElement(a.Fragment,{key:t},a.createElement("code",null,e),a.createElement("span",null," | "))))):a.createElement("span",null,"-")})()),a.createElement("td",{className:"props-table-description-col"},l&&"string"==typeof l&&""!==l?a.createElement("span",null,l):a.createElement("span",null,"-")),a.createElement("td",{className:"props-table-default-col"},r&&"string"==typeof r&&""!==r&&"-"!==r?a.createElement("code",null,r):a.createElement("span",null,"-"))):(console.warn("From: PropsTable.Row. Invalid prop name or missing required props: name."),null)};const r=l},9123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>F,contentTitle:()=>R,default:()=>D,frontMatter:()=>P,metadata:()=>O,toc:()=>x});var a=n(7462),l=n(7294),r=n(3905),o=n(2504),s=n(1629),i=n(7299),d=n(2796),c=n(4080),u=n(5506),p=n(4184),m=n.n(p),f=n(5697),h=n.n(f),v=n(7201),y=n(6486);const b=(0,l.createContext)({isOpen:!1,onClose:y.noop});var g=n(7768);const E=(0,l.forwardRef)((({children:e,size:t,className:n,as:a,...r},o)=>(0,l.createElement)(d.V.Title,{as:a,ref:o,className:m()("nfd-title",t?g.S7.size[t]:"",n),...r},e)));E.defaultProps={className:"",as:"h1"},E.propTypes={size:h().oneOf(Object.keys(g.S7.size)),className:h().string,children:h().node.isRequired,as:h().elementType};const T=(0,l.forwardRef)((({children:e,className:t="",hasCloseButton:n=!0,closeButtonScreenReaderText:a="Close",...r},o)=>{const{onClose:s}=(0,l.useContext)(b),i=(0,v.Z)();return(0,l.createElement)(d.V.Panel,{ref:o,className:m()("nfd-modal__panel",t),...r},n&&(0,l.createElement)("div",{className:"nfd-modal__close"},(0,l.createElement)("button",{type:"button",onClick:s,className:"nfd-modal__close-button"},(0,l.createElement)("span",{className:"nfd-sr-only"},a),(0,l.createElement)(u.Z,{className:"nfd-h-6 nfd-w-6",...i}))),e)}));T.propTypes={children:h().node.isRequired,className:h().string,hasCloseButton:h().bool,closeButtonScreenReaderText:h().string};const N={position:{center:"nfd-modal--center","top-center":"nfd-modal--top-center"}},k=(0,l.forwardRef)((({isOpen:e,onClose:t,children:n,className:a="",position:r="center",...o},s)=>(0,l.createElement)(b.Provider,{value:{isOpen:e,onClose:t}},(0,l.createElement)(c.u.Root,{show:e,as:l.Fragment},(0,l.createElement)(d.V,{as:"div",ref:s,className:"nfd-root",open:e,onClose:t,...o},(0,l.createElement)("div",{className:m()("nfd-modal",N.position[r],a)},(0,l.createElement)(c.u.Child,{as:l.Fragment,enter:"nfd-ease-out nfd-duration-300",enterFrom:"nfd-opacity-0",enterTo:"nfd-opacity-100",leave:"nfd-ease-in nfd-duration-200",leaveFrom:"nfd-opacity-100",leaveTo:"nfd-opacity-0"},(0,l.createElement)("div",{className:"nfd-modal__overlay"})),(0,l.createElement)("div",{className:"nfd-modal__layout"},(0,l.createElement)(c.u.Child,{as:l.Fragment,enter:"nfd-ease-out nfd-duration-300",enterFrom:"nfd-opacity-0 nfd-translate-y-4 sm:nfd-translate-y-0 sm:nfd-scale-95",enterTo:"nfd-opacity-100 nfd-translate-y-0 sm:nfd-scale-100",leave:"nfd-ease-in nfd-duration-200",leaveFrom:"nfd-opacity-100 nfd-translate-y-0 sm:nfd-scale-100",leaveTo:"nfd-opacity-0 nfd-translate-y-4 sm:nfd-translate-y-0 sm:nfd-scale-95"},n))))))));k.propTypes={isOpen:h().bool.isRequired,onClose:h().func.isRequired,children:h().node.isRequired,className:h().string,position:h().oneOf(Object.keys(N.position))},k.displayName="Modal",k.Panel=T,k.Panel.displayName="Modal.Panel",k.Title=E,k.Title.displayName="Modal.Title",k.Description=d.V.Description,k.Description.displayName="Modal.Description";const w=k,M=e=>{let{withProviders:t=!1}=e;const[n,a]=(0,l.useState)(!1);return l.createElement(l.Fragment,null,l.createElement(i.ZP,{onClick:()=>a(!0)},"Open Modal"),l.createElement(w,{isOpen:n,onClose:()=>a(!1)},l.createElement(w.Panel,null,t?l.createElement(l.Fragment,null,l.createElement(w.Title,{className:"nfd-mb-3"},"Title Using Modal.Title"),l.createElement(w.Description,{className:"nfd-text-sm nfd-text-slate-600"},"Modal description using Modal.Description sub-component.")):l.createElement(l.Fragment,null,"Modal component using Modal.Panel sub-component."))))},C={isOpen:{type:"bool",description:"If true, the modal will be open.",defaultValue:"false",isRequired:!0},onClose:{type:"function",description:"A function that will be called when the modal is closed.",isRequired:!0},children:{type:"node",description:"The content of the modal.",isRequired:!0},position:{type:["center","top-center"],description:"The position of the modal's content.",defaultValue:"center"},className:{type:"string"}},P={},R="Modal",O={unversionedId:"components/modal",id:"components/modal",title:"Modal",description:"The Modal component is used to display content in a layer above the rest of the page.",source:"@site/docs/components/modal.mdx",sourceDirName:"components",slug:"/components/modal",permalink:"/npm-ui-component-library/docs/components/modal",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/components/modal.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"ImageImport",permalink:"/npm-ui-component-library/docs/components/image-import"},next:{title:"Notifications",permalink:"/npm-ui-component-library/docs/components/notifications"}},F={},x=[{value:"Usage",id:"usage",level:3},{value:"Title and Description",id:"title-and-description",level:3},{value:"Props",id:"props",level:3}],z={toc:x},S="wrapper";function D(e){let{components:t,...n}=e;return(0,r.kt)(S,(0,a.Z)({},z,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modal"},"Modal"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Modal")," component is used to display content in a layer above the rest of the page."),(0,r.kt)(s.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(M,{mdxType:"ModalDemo"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Modal } from '@newfold/ui-component-library';\n\nconst [isOpen, setIsOpen] = useState(false);\n\n<>\n    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>\n    <Modal\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n    >\n        <Modal.Panel>\n            Modal component using Modal.Panel sub-compoenent.\n        </Modal.Panel>\n    </Modal>\n</>\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Modal.Panel")," sub-component in the example above is used as a wrapper for the modal's content.\nIt also offers a few things to help with appearance and functionality of the modal:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adds a listener to close the modal on overlay click/tap."),(0,r.kt)("li",{parentName:"ul"},"Adds a background and padding to the content area."),(0,r.kt)("li",{parentName:"ul"},"Adds a close button in the top right corner of the content area.")),(0,r.kt)("p",null,"If you choose not to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Modal.Panel")," sub-component, you will need to style the modal's content area\nyourself, add a close button and the overlay listener."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"title-and-description"},"Title and Description"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Modal.Title")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Modal.Description")," sub-components to add a title and description to the modal."),(0,r.kt)(s.Z,{mdxType:"NewfoldRoot"},(0,r.kt)(M,{withProviders:!0,mdxType:"ModalDemo"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const [isOpen, setIsOpen] = useState(false);\n\n<>\n    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>\n    <Modal\n        isOpen={isOpen}\n        onClose={() => setIsOpen(false)}\n    >\n        <Modal.Panel>\n            <Modal.Title className="nfd-mb-3">Title Using Modal.Title</Modal.Title>\n            <Modal.Description className="nfd-text-sm nfd-text-slate-600">\n                Modal description using Modal.Description sub-component.\n            </Modal.Description>\n        </Modal.Panel>\n    </Modal>\n</>\n')),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(o.Z.Table,{docs:C}))}D.isMDXComponent=!0},4080:(e,t,n)=>{n.d(t,{u:()=>S});var a=n(7294),l=n(2351),r=n(6567),o=n(2984),s=n(4879),i=n(6723),d=n(3855),c=n(2180),u=n(3784);var p=n(9362);function m(e,...t){e&&t.length>0&&e.classList.add(...t)}function f(e,...t){e&&t.length>0&&e.classList.remove(...t)}function h(e,t,n,a){let l=n?"enter":"leave",r=(0,p.k)(),s=void 0!==a?function(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}(a):()=>{};"enter"===l&&(e.removeAttribute("hidden"),e.style.display="");let i=(0,o.E)(l,{enter:()=>t.enter,leave:()=>t.leave}),d=(0,o.E)(l,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=(0,o.E)(l,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return f(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),m(e,...i,...c),r.nextFrame((()=>{f(e,...c),m(e,...d),function(e,t){let n=(0,p.k)();if(!e)return n.dispose;let{transitionDuration:a,transitionDelay:l}=getComputedStyle(e),[r,o]=[a,l].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t})),s=r+o;if(0!==s){n.group((n=>{n.setTimeout((()=>{t(),n.dispose()}),s),n.addEventListener(e,"transitionrun",(e=>{e.target===e.currentTarget&&n.dispose()}))}));let a=n.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t(),a())}))}else t();n.add((()=>t())),n.dispose}(e,(()=>(f(e,...i),m(e,...t.entered),s())))})),r.dispose}var v=n(4192);var y=n(3781),b=n(4067);function g(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let E=(0,a.createContext)(null);E.displayName="TransitionContext";var T,N=((T=N||{}).Visible="visible",T.Hidden="hidden",T);let k=(0,a.createContext)(null);function w(e){return"children"in e?w(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function M(e,t){let n=(0,d.E)(e),r=(0,a.useRef)([]),i=(0,s.t)(),c=(0,v.G)(),u=(0,y.z)(((e,t=l.l4.Hidden)=>{let a=r.current.findIndex((({el:t})=>t===e));-1!==a&&((0,o.E)(t,{[l.l4.Unmount](){r.current.splice(a,1)},[l.l4.Hidden](){r.current[a].state="hidden"}}),c.microTask((()=>{var e;!w(r)&&i.current&&(null==(e=n.current)||e.call(n))})))})),p=(0,y.z)((e=>{let t=r.current.find((({el:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>u(e,l.l4.Unmount)})),m=(0,a.useRef)([]),f=(0,a.useRef)(Promise.resolve()),h=(0,a.useRef)({enter:[],leave:[],idle:[]}),b=(0,y.z)(((e,n,a)=>{m.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter((([t])=>t!==e))),null==t||t.chains.current[n].push([e,new Promise((e=>{m.current.push(e)}))]),null==t||t.chains.current[n].push([e,new Promise((e=>{Promise.all(h.current[n].map((([e,t])=>t))).then((()=>e()))}))]),"enter"===n?f.current=f.current.then((()=>null==t?void 0:t.wait.current)).then((()=>a(n))):a(n)})),g=(0,y.z)(((e,t,n)=>{Promise.all(h.current[t].splice(0).map((([e,t])=>t))).then((()=>{var e;null==(e=m.current.shift())||e()})).then((()=>n(t)))}));return(0,a.useMemo)((()=>({children:r,register:p,unregister:u,onStart:b,onStop:g,wait:f,chains:h})),[p,u,r,b,g,h,f])}function C(){}k.displayName="NestingContext";let P=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function R(e){var t;let n={};for(let a of P)n[a]=null!=(t=e[a])?t:C;return n}let O=l.AN.RenderStrategy;let F=(0,l.yV)((function(e,t){let{show:n,appear:o=!1,unmount:s,...d}=e,p=(0,a.useRef)(null),m=(0,u.T)(p,t);(0,c.H)();let f=(0,r.oJ)();if(void 0===n&&null!==f&&(n=(f&r.ZM.Open)===r.ZM.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[h,v]=(0,a.useState)(n?"visible":"hidden"),b=M((()=>{v("hidden")})),[g,T]=(0,a.useState)(!0),N=(0,a.useRef)([n]);(0,i.e)((()=>{!1!==g&&N.current[N.current.length-1]!==n&&(N.current.push(n),T(!1))}),[N,n]);let C=(0,a.useMemo)((()=>({show:n,appear:o,initial:g})),[n,o,g]);(0,a.useEffect)((()=>{if(n)v("visible");else if(w(b)){let e=p.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&v("hidden")}else v("hidden")}),[n,b]);let P={unmount:s},R=(0,y.z)((()=>{var t;g&&T(!1),null==(t=e.beforeEnter)||t.call(e)})),F=(0,y.z)((()=>{var t;g&&T(!1),null==(t=e.beforeLeave)||t.call(e)}));return a.createElement(k.Provider,{value:b},a.createElement(E.Provider,{value:C},(0,l.sY)({ourProps:{...P,as:a.Fragment,children:a.createElement(x,{ref:m,...P,...d,beforeEnter:R,beforeLeave:F})},theirProps:{},defaultTag:a.Fragment,features:O,visible:"visible"===h,name:"Transition"})))})),x=(0,l.yV)((function(e,t){let{beforeEnter:n,afterEnter:m,beforeLeave:f,afterLeave:T,enter:N,enterFrom:C,enterTo:P,entered:F,leave:x,leaveFrom:z,leaveTo:S,...D}=e,Z=(0,a.useRef)(null),L=(0,u.T)(Z,t),q=D.unmount?l.l4.Unmount:l.l4.Hidden,{show:V,appear:I,initial:_}=function(){let e=(0,a.useContext)(E);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[B,A]=(0,a.useState)(V?"visible":"hidden"),H=function(){let e=(0,a.useContext)(k);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:j,unregister:U}=H,Y=(0,a.useRef)(null);(0,a.useEffect)((()=>j(Z)),[j,Z]),(0,a.useEffect)((()=>{if(q===l.l4.Hidden&&Z.current)return V&&"visible"!==B?void A("visible"):(0,o.E)(B,{hidden:()=>U(Z),visible:()=>j(Z)})}),[B,Z,j,U,V,q]);let G=(0,d.E)({enter:g(N),enterFrom:g(C),enterTo:g(P),entered:g(F),leave:g(x),leaveFrom:g(z),leaveTo:g(S)}),J=function(e){let t=(0,a.useRef)(R(e));return(0,a.useEffect)((()=>{t.current=R(e)}),[e]),t}({beforeEnter:n,afterEnter:m,beforeLeave:f,afterLeave:T}),X=(0,c.H)();(0,a.useEffect)((()=>{if(X&&"visible"===B&&null===Z.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[Z,B,X]);let W=_&&!I,K=!X||W||Y.current===V?"idle":V?"enter":"leave",Q=function(e=0){let[t,n]=(0,a.useState)(e),l=(0,s.t)(),r=(0,a.useCallback)((e=>{l.current&&n((t=>t|e))}),[t,l]),o=(0,a.useCallback)((e=>Boolean(t&e)),[t]),i=(0,a.useCallback)((e=>{l.current&&n((t=>t&~e))}),[n,l]),d=(0,a.useCallback)((e=>{l.current&&n((t=>t^e))}),[n]);return{flags:t,addFlag:r,hasFlag:o,removeFlag:i,toggleFlag:d}}(0),$=(0,y.z)((e=>(0,o.E)(e,{enter:()=>{Q.addFlag(r.ZM.Opening),J.current.beforeEnter()},leave:()=>{Q.addFlag(r.ZM.Closing),J.current.beforeLeave()},idle:()=>{}}))),ee=(0,y.z)((e=>(0,o.E)(e,{enter:()=>{Q.removeFlag(r.ZM.Opening),J.current.afterEnter()},leave:()=>{Q.removeFlag(r.ZM.Closing),J.current.afterLeave()},idle:()=>{}}))),te=M((()=>{A("hidden"),U(Z)}),H);(function({container:e,direction:t,classes:n,onStart:a,onStop:l}){let r=(0,s.t)(),o=(0,v.G)(),c=(0,d.E)(t);(0,i.e)((()=>{let t=(0,p.k)();o.add(t.dispose);let s=e.current;if(s&&"idle"!==c.current&&r.current)return t.dispose(),a.current(c.current),t.add(h(s,n.current,"enter"===c.current,(()=>{t.dispose(),l.current(c.current)}))),t.dispose}),[t])})({container:Z,classes:G,direction:K,onStart:(0,d.E)((e=>{te.onStart(Z,e,$)})),onStop:(0,d.E)((e=>{te.onStop(Z,e,ee),"leave"===e&&!w(te)&&(A("hidden"),U(Z))}))}),(0,a.useEffect)((()=>{W&&(q===l.l4.Hidden?Y.current=null:Y.current=V)}),[V,W,B]);let ne=D,ae={ref:L};return I&&V&&_&&(ne={...ne,className:(0,b.A)(D.className,...G.current.enter,...G.current.enterFrom)}),a.createElement(k.Provider,{value:te},a.createElement(r.up,{value:(0,o.E)(B,{visible:r.ZM.Open,hidden:r.ZM.Closed})|Q.flags},(0,l.sY)({ourProps:ae,theirProps:ne,defaultTag:"div",features:O,visible:"visible"===B,name:"Transition.Child"})))})),z=(0,l.yV)((function(e,t){let n=null!==(0,a.useContext)(E),l=null!==(0,r.oJ)();return a.createElement(a.Fragment,null,!n&&l?a.createElement(F,{ref:t,...e}):a.createElement(x,{ref:t,...e}))})),S=Object.assign(F,{Child:z,Root:F})}}]);