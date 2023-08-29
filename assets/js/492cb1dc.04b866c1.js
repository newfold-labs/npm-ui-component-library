"use strict";(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[14],{8972:(e,t,n)=>{n.d(t,{ZP:()=>g});var i=n(7294),o=n(4080),a=n(5697),r=n.n(a),s=n(5506),l=n(6486),d=n(4184),c=n.n(d),f=n(3624);const u=(0,i.createContext)({position:"bottom-left"}),m={variant:{info:"nfd-notification--info",warning:"nfd-notification--warning",success:"nfd-notification--success",error:"nfd-notification--error"},position:{"bottom-center":"nfd-translate-y-full","bottom-left":"nfd-translate-y-full","top-center":"nfd--translate-y-full"},size:{default:"",large:"nfd-notification--large"}},p=({children:e,id:t,variant:n="info",size:a="default",title:r,description:d="",onDismiss:p=null,autoDismiss:v=null,dismissScreenReaderLabel:h})=>{const{position:g}=(0,i.useContext)(u),[b,N]=(0,i.useState)(!1),k=(0,i.useCallback)((()=>{N(!1),setTimeout((()=>{p(t)}),150)}),[p,t]);return(0,i.useEffect)((()=>{let e;return N(!0),v&&(e=setTimeout((()=>{k()}),v)),()=>clearTimeout(e)}),[]),(0,i.createElement)(o.u,{show:b,enter:"nfd-transition nfd-ease-in-out nfd-duration-150",enterFrom:c()("nfd-opacity-0",m.position[g]),enterTo:"nfd-translate-y-0",leave:"nfd-transition nfd-ease-in-out nfd-duration-150",leaveFrom:"nfd-translate-y-0",leaveTo:c()("nfd-opacity-0",m.position[g]),className:c()("nfd-notification",m.variant[n],m.size[a]),role:"alert"},(0,i.createElement)("div",{className:"nfd-flex nfd-items-start nfd-gap-3"},(0,i.createElement)("div",{className:"nfd-flex-shrink-0"},(0,i.createElement)(f.Z,{variant:n,className:"nfd-notification__icon"})),(0,i.createElement)("div",{className:"nfd-w-0 nfd-flex-1"},(0,i.createElement)("p",{className:"nfd-text-sm nfd-font-medium nfd-text-slate-800"},r),e||d&&((0,l.isArray)(d)?(0,i.createElement)("ul",{className:"nfd-list-disc nfd-ml-4"},d.map(((e,t)=>(0,i.createElement)("li",{className:"nfd-pt-1",key:`${e}-${t}`},e)))):(0,i.createElement)("p",null,d))),p&&(0,i.createElement)("div",{className:"nfd-flex-shrink-0 nfd-flex"},(0,i.createElement)("button",{onClick:k,className:"nfd-bg-white nfd-rounded-md nfd-inline-flex nfd-text-slate-400 hover:nfd-text-slate-500 focus:nfd-outline-none focus:nfd-ring-2 focus:nfd-ring-offset-2 focus:nfd-ring-primary-500"},(0,i.createElement)("span",{className:"nfd-sr-only"},h),(0,i.createElement)(s.Z,{className:"nfd-h-5 nfd-w-5"})))))};p.propTypes={children:r().node,id:r().string.isRequired,variant:r().oneOf((0,l.keys)(m.variant)),size:r().oneOf((0,l.keys)(m.size)),title:r().string.isRequired,description:r().oneOfType([r().node,r().arrayOf(r().node)]),onDismiss:r().func,autoDismiss:r().number,dismissScreenReaderLabel:r().string.isRequired};const v={position:{"bottom-center":"nfd-notifications--bottom-center","bottom-left":"nfd-notifications--bottom-left","top-center":"nfd-notifications--top-center"}},h=({children:e,position:t="bottom-left"})=>(0,i.createElement)(u.Provider,{value:{position:t}},(0,i.createElement)("aside",{className:c()("nfd-notifications",v.position[t])},e));h.propTypes={children:r().node,position:r().oneOf((0,l.keys)(v.position))},(h.Notification=p).displayName="Notifications.Notification";const g=h},3712:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(7294),o=n(4184),a=n.n(o),r=n(6486),s=n(5697),l=n.n(s),d=n(5667),c=n(8829);const f={variant:{default:"","inline-block":"nfd-radio-group--inline-block"}},u=({children:e=null,id:t="",name:n="",value:o="",label:s,description:l,options:u,onChange:m=r.noop,variant:p="default",disabled:v=!1,className:h="",...g})=>{const b=(0,i.useCallback)((({target:e})=>e.checked&&m(e.value)),[m]);return(0,i.createElement)("fieldset",{id:`radio-group-${t}`,className:a()("nfd-radio-group",v&&"nfd-radio-group--disabled",f.variant[p],h)},s&&(0,i.createElement)(d.Z,{as:"legend",className:"nfd-radio-group__label",label:s}),l&&(0,i.createElement)("div",{className:"nfd-radio-group__description"},l),(0,i.createElement)("div",{className:"nfd-radio-group__options"},e||u.map(((e,a)=>{const r=`radio-${t}-${a}`;return(0,i.createElement)(c.Z,{key:r,id:r,name:n,value:e.value,label:e.label,screenReaderLabel:e.screenReaderLabel,variant:p,checked:o===e.value,onChange:b,disabled:v,...g})}))))};u.propTypes={children:l().node,id:l().string,name:l().string,value:l().string,label:l().string,description:l().string,options:l().arrayOf(l().shape({value:l().string.isRequired,label:l().string.isRequired,screenReaderLabel:l().string})),onChange:l().func,variant:l().oneOf(Object.keys(f.variant)),disabled:l().bool,className:l().string},(u.Radio=c.Z).displayName="RadioGroup.Radio";const m=u},5667:(e,t,n)=>{n.d(t,{Z:()=>f});var i=n(7294),o=n(4184),a=n.n(o),r=n(5697),s=n.n(r);const l=(0,i.forwardRef)((({as:e,className:t,label:n,children:o,...r},s)=>(0,i.createElement)(e,{ref:s,className:a()("nfd-label",t),...r},n||o||null))),d={label:s().string,children:s().string,as:s().elementType,className:s().string};l.propTypes=d,l.defaultProps={label:"",children:"",as:"label",className:""};const c=e=>(0,i.createElement)(l,{...e});c.propTypes=d,c.defaultProps=l.defaultProps,c.displayName="Label";const f=l},8829:(e,t,n)=>{n.d(t,{Z:()=>p});var i=n(7294),o=n(5426),a=n(4184),r=n.n(a),s=n(5697),l=n.n(s),d=n(7201),c=n(5667);const f=(0,i.forwardRef)((({id:e,name:t,value:n,label:a,screenReaderLabel:s,variant:l,disabled:f,className:u,isLabelDangerousHtml:m,...p},v)=>{const h=(0,d.Z)();return"inline-block"===l?(0,i.createElement)("div",{className:r()("nfd-radio","nfd-radio--inline-block",f&&"nfd-radio--disabled",u)},(0,i.createElement)("input",{type:"radio",id:e,name:t,value:n,disabled:f,className:"nfd-radio__input","aria-label":s,...p}),(0,i.createElement)("span",{className:"nfd-radio__content"},(0,i.createElement)(c.Z,{htmlFor:e,className:"nfd-radio__label",label:m?null:a,dangerouslySetInnerHTML:m?{__html:a}:null}),(0,i.createElement)(o.Z,{className:"nfd-radio__check",...h}))):(0,i.createElement)("div",{className:r()("nfd-radio",f&&"nfd-radio--disabled",u)},(0,i.createElement)("input",{ref:v,type:"radio",id:e,name:t,value:n,disabled:f,className:"nfd-radio__input",...p}),(0,i.createElement)(c.Z,{htmlFor:e,className:"nfd-radio__label",label:m?null:a,dangerouslySetInnerHTML:m?{__html:a}:null}))})),u={name:l().string.isRequired,id:l().string.isRequired,value:l().string.isRequired,label:l().string.isRequired,isLabelDangerousHtml:l().bool,screenReaderLabel:l().string,variant:l().oneOf(Object.keys({default:"","inline-block":"nfd-radio--inline-block"})),disabled:l().bool,className:l().string};f.propTypes=u,f.defaultProps={screenReaderLabel:"",variant:"default",disabled:!1,className:"",isLabelDangerousHtml:!1};const m=e=>(0,i.createElement)(f,{...e});m.propTypes=u,m.defaultProps=f.defaultProps,m.displayName="Radio";const p=f},3624:(e,t,n)=>{n.d(t,{Z:()=>g});var i=n(7294),o=n(5697),a=n.n(o),r=n(6486),s=n(4184),l=n.n(s),d=n(7201),c=n(5426);const f=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"}))}));const u=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"}))}));const m=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",clipRule:"evenodd"}))})),p={success:c.Z,warning:f,info:u,error:m},v={variant:{success:"nfd-validation-icon--success",warning:"nfd-validation-icon--warning",info:"nfd-validation-icon--info",error:"nfd-validation-icon--error"}},h=({variant:e="info",className:t="",...n})=>{const o=(0,i.useMemo)((()=>p[e]),[e]),a=(0,d.Z)();return o?(0,i.createElement)(o,{...a,...n,className:l()("nfd-validation-icon",v.variant[e],t)}):null};h.propTypes={variant:a().oneOf((0,r.values)({success:"success",warning:"warning",info:"info",error:"error"})),className:a().string};const g=h},7201:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(7294);const o=(e=null)=>(0,i.useMemo)((()=>{const t={role:"img","aria-hidden":"true"};return null!==e&&(t.focusable=e?"true":"false"),t}),[e])},472:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>k,default:()=>C,frontMatter:()=>N,metadata:()=>y,toc:()=>E});var i=n(7462),o=n(7294),a=n(3905),r=n(2504),s=n(1629),l=n(8972);const d={toc:[{value:"1. Info (default)",id:"1-info-default",level:4},{value:"2. Warning",id:"2-warning",level:4},{value:"3. Success",id:"3-success",level:4},{value:"4. Error",id:"4-error",level:4}]},c="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"1-info-default"},"1. Info (default)"),(0,a.kt)(s.Z,{mdxType:"NewfoldRoot"},(0,a.kt)(l.ZP.Notification,{id:"notification-demo-item-info",dismissScreenReaderLabel:"Dismiss",title:"Info notification",description:"Information: Knowledge is the key to empowerment.",variant:"info"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Notifications.Notification\n    id="notification-demo-item-info"\n    dismissScreenReaderLabel="Dismiss"\n    title="Info notification"\n    description="Information: Knowledge is the key to empowerment."\n    variant="info"\n/>\n')),(0,a.kt)("h4",{id:"2-warning"},"2. Warning"),(0,a.kt)(s.Z,{mdxType:"NewfoldRoot"},(0,a.kt)(l.ZP.Notification,{id:"notification-demo-item-warning",dismissScreenReaderLabel:"Dismiss",title:"Warning notification",description:"Caution: Proceed with care to avoid potential pitfalls.",variant:"warning"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Notifications.Notification\n    id="notification-demo-item-warning"\n    dismissScreenReaderLabel="Dismiss"\n    title="Warning notification"\n    description="Caution: Proceed with care to avoid potential pitfalls."\n    variant="warning"\n/>\n')),(0,a.kt)("h4",{id:"3-success"},"3. Success"),(0,a.kt)(s.Z,{mdxType:"NewfoldRoot"},(0,a.kt)(l.ZP.Notification,{id:"notification-demo-item-success",dismissScreenReaderLabel:"Dismiss",title:"Success notification",description:"Congratulations! You achieved success.",variant:"success"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Notifications.Notification\n    id="notification-demo-item-success"\n    dismissScreenReaderLabel="Dismiss"\n    title="Success notification"\n    description="Congratulations! You achieved success."\n    variant="success"\n/>\n')),(0,a.kt)("h4",{id:"4-error"},"4. Error"),(0,a.kt)(s.Z,{mdxType:"NewfoldRoot"},(0,a.kt)(l.ZP.Notification,{id:"notification-demo-item-error",dismissScreenReaderLabel:"Dismiss",title:"Error notification",description:"Error: Unable to proceed without the required input.",variant:"error"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Notifications.Notification\n    id="notification-demo-item-error"\n    dismissScreenReaderLabel="Dismiss"\n    title="Error notification"\n    description="Error: Unable to proceed without the required input."\n    variant="error"\n/>\n')))}f.isMDXComponent=!0;const u={toc:[{value:"1. Default (default)",id:"1-default-default",level:4},{value:"2. Large",id:"2-large",level:4}]},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"1-default-default"},"1. Default (default)"),(0,a.kt)(s.Z,{mdxType:"NewfoldRoot"},(0,a.kt)(l.ZP.Notification,{id:"notification-demo-item-default",dismissScreenReaderLabel:"Dismiss",title:"Default size notification",description:"Information: Knowledge is the key to empowerment.",size:"default"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Notifications.Notification\n    id="notification-demo-item-default"\n    dismissScreenReaderLabel="default"\n    title="Default size notification"\n    description="Information: Knowledge is the key to empowerment."\n    size="default"\n/>\n')),(0,a.kt)("h4",{id:"2-large"},"2. Large"),(0,a.kt)(s.Z,{mdxType:"NewfoldRoot"},(0,a.kt)(l.ZP.Notification,{id:"notification-demo-item-large",dismissScreenReaderLabel:"Dismiss",title:"Large size notification",description:"Information: Knowledge is the key to empowerment.",size:"large"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Notifications.Notification\n    id="notification-demo-item-large"\n    dismissScreenReaderLabel="Dismiss"\n    title="Large size notification"\n    description="Information: Knowledge is the key to empowerment."\n    size="large"\n/>\n')))}p.isMDXComponent=!0;var v=n(3712);const h=()=>{const[e,t]=(0,o.useState)("bottom-left");return o.createElement(o.Fragment,null,o.createElement(v.Z,{id:"notifications-demo-radio-group",label:"Position",value:e,onChange:e=>t(e),options:[{label:"Bottom Left",value:"bottom-left"},{label:"Bottom Center",value:"bottom-center"},{label:"Top Center",value:"top-center"}],variant:"inline-block"}),o.createElement(l.ZP,{position:e},o.createElement(l.ZP.Notification,{id:"notifications-demo-item",dismissScreenReaderLabel:"Dismiss",title:"Notification title",description:"Notification description",onDismiss:e=>{console.log("Dismissed:",e)}})),o.createElement("style",null,"\n                    .nfd-root .nfd-notifications--top-center,\n                    .nfd-root .nfd-notifications--bottom-center { \n                        left: 2rem;\n                        z-index: 200;\n                    }\n\n                    .nfd-root .nfd-radio--inline-block .nfd-radio__label {\n                        font-size: 13px !important;\n                        width: 8rem;\n                        height: 3rem;\n                    }\n                "))},g={children:{type:"node",description:"The content of the notifications context."},position:{type:["bottom-left","bottom-center","top-center"],description:"The position of the notifications.",defaultValue:"bottom-left"}},b={id:{type:"string",description:"The id of the notification.",isRequired:!0},dismissScreenReaderLabel:{type:"string",description:"The screen reader label for the dismiss button.",isRequired:!0},title:{type:"string"},description:{type:"string",description:"Notification description."},children:{type:"node",description:"The content of the notification. If passed, will override description."},variant:{type:["info","warning","success","error"],description:"The variant of the notification.",defaultValue:"info"},size:{type:["default","large"],description:"The size of the notification.",defaultValue:"default"},onDismiss:{type:"function",description:"A function that is fired when the notification is dismissed. It receives the id of the dismissed notification as an argument."},autoDismiss:{type:"number",description:"Milliseconds for Notification to disappear."}},N={},k="Notifications",y={unversionedId:"components/notifications",id:"components/notifications",title:"Notifications",description:"The Notifications component shows notifications on a specified position on the screen.",source:"@site/docs/components/notifications.mdx",sourceDirName:"components",slug:"/components/notifications",permalink:"/npm-ui-component-library/docs/components/notifications",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/components/notifications.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Modal",permalink:"/npm-ui-component-library/docs/components/modal"},next:{title:"Radio Group",permalink:"/npm-ui-component-library/docs/components/radio-group"}},w={},E=[{value:"Usage",id:"usage",level:3},{value:"Notifications Props",id:"notifications-props",level:3},{value:"Notifications.Notification",id:"notificationsnotification",level:3},{value:"Dismissing Notifications",id:"dismissing-notifications",level:3},{value:"Auto-dismissing Notifications",id:"auto-dismissing-notifications",level:3},{value:"Variants",id:"variants",level:3},{value:"Sizes",id:"sizes",level:3},{value:"Notifications.Notification Props",id:"notificationsnotification-props",level:3}],T={toc:E},R="wrapper";function C(e){let{components:t,...n}=e;return(0,a.kt)(R,(0,i.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"notifications"},"Notifications"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Notifications")," component shows notifications on a specified position on the screen."),(0,a.kt)(s.Z,{mdxType:"NewfoldRoot"},(0,a.kt)(h,{mdxType:"NotificationsDemo"})),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Notifications } from "@newfold/ui-component-library";\n\n<Notifications position="bottom-left">\n    <Notifications.Notification\n        id="notifications-demo-item"\n        dismissScreenReaderLabel="Dismiss"\n        title="Notification title"\n        description="Notification description"\n        onDismiss={(id) => console.log(\'Dismissed:\', id)}\n    />\n</Notifications>\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Notifications")," component serves as a container for ",(0,a.kt)("a",{parentName:"p",href:"#notificationsnotification"},(0,a.kt)("inlineCode",{parentName:"a"},"Notifications.Notification"))," sub-components.\nThe ",(0,a.kt)("a",{parentName:"p",href:"#notificationsnotification"},(0,a.kt)("inlineCode",{parentName:"a"},"Notifications.Notification"))," sub-component is used to display a single notification.\nWhen used together (like the example above), the notification toast will be rendered on the screen in the desired position."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"notifications-props"},"Notifications Props"),(0,a.kt)(r.Z.Table,{docs:g}),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"notificationsnotification"},"Notifications.Notification"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Notifications.Notification")," sub-component is used to display a single notification.\nWhen used in isolation from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Notifications")," component, the notification toast will be rendered inline."),(0,a.kt)(s.Z,{mdxType:"NewfoldRoot"},(0,a.kt)(l.ZP.Notification,{id:"notification-demo-item",dismissScreenReaderLabel:"Dismiss",title:"Notification title",description:"Inline notification description"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Notifications.Notification\n    id="notification-demo-item"\n    dismissScreenReaderLabel="Dismiss"\n    title="Notification title"\n    description="Inline notification description"\n/>\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"dismissing-notifications"},"Dismissing Notifications"),(0,a.kt)("p",null,"To make a notification dismissable, you can provide a callback function to the ",(0,a.kt)("inlineCode",{parentName:"p"},"onDismiss")," prop.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"onDismiss")," function will be called when the user clicks the dismiss button and receives the notification's ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," as an argument."),(0,a.kt)(s.Z,{mdxType:"NewfoldRoot"},(0,a.kt)(l.ZP.Notification,{id:"notification-demo-item-dismissible",dismissScreenReaderLabel:"Dismiss",title:"Notification title",description:"Dismissible notification description",onDismiss:e=>console.log("Dismissed:",e)})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Notifications.Notification\n    id="notification-demo-item-dismissible"\n    dismissScreenReaderLabel="Dismiss"\n    title="Notification title"\n    description="Dismissible notification description"\n    onDismiss={(id) => console.log(\'Dismissed:\', id)}\n/>\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"auto-dismissing-notifications"},"Auto-dismissing Notifications"),(0,a.kt)("p",null,"To make a notification auto-dismissable, you can provide time in milliseconds to the ",(0,a.kt)("inlineCode",{parentName:"p"},"autoDismiss")," prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// Auto-dismiss after 5 seconds\n<Notifications.Notification\n    id="notification-demo-item-dismissible"\n    dismissScreenReaderLabel="Dismiss"\n    title="Notification title"\n    description="Dismissible notification description"\n    onDismiss={(id) => console.log(\'Dismissed:\', id)}\n    autoDismiss={5000}\n/>\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"variants"},"Variants"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Notifications.Notification")," provides 4 variants: ",(0,a.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"warning"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"success")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),"."),(0,a.kt)(f,{mdxType:"NotificationsVariants"}),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sizes"},"Sizes"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Notifications.Notification")," can be used in 2 sizes: ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"large"),"."),(0,a.kt)(p,{mdxType:"NotificationsSizes"}),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"notificationsnotification-props"},"Notifications.Notification Props"),(0,a.kt)(r.Z.Table,{docs:b}))}C.isMDXComponent=!0},4080:(e,t,n)=>{n.d(t,{u:()=>P});var i=n(7294),o=n(2351),a=n(6567),r=n(2984),s=n(4879),l=n(6723),d=n(3855),c=n(2180),f=n(3784);var u=n(9362);function m(e,...t){e&&t.length>0&&e.classList.add(...t)}function p(e,...t){e&&t.length>0&&e.classList.remove(...t)}function v(e,t,n,i){let o=n?"enter":"leave",a=(0,u.k)(),s=void 0!==i?function(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}(i):()=>{};"enter"===o&&(e.removeAttribute("hidden"),e.style.display="");let l=(0,r.E)(o,{enter:()=>t.enter,leave:()=>t.leave}),d=(0,r.E)(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=(0,r.E)(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return p(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),m(e,...l,...c),a.nextFrame((()=>{p(e,...c),m(e,...d),function(e,t){let n=(0,u.k)();if(!e)return n.dispose;let{transitionDuration:i,transitionDelay:o}=getComputedStyle(e),[a,r]=[i,o].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t})),s=a+r;if(0!==s){n.group((n=>{n.setTimeout((()=>{t(),n.dispose()}),s),n.addEventListener(e,"transitionrun",(e=>{e.target===e.currentTarget&&n.dispose()}))}));let i=n.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t(),i())}))}else t();n.add((()=>t())),n.dispose}(e,(()=>(p(e,...l),m(e,...t.entered),s())))})),a.dispose}var h=n(4192);var g=n(3781),b=n(4067);function N(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let k=(0,i.createContext)(null);k.displayName="TransitionContext";var y,w=((y=w||{}).Visible="visible",y.Hidden="hidden",y);let E=(0,i.createContext)(null);function T(e){return"children"in e?T(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function R(e,t){let n=(0,d.E)(e),a=(0,i.useRef)([]),l=(0,s.t)(),c=(0,h.G)(),f=(0,g.z)(((e,t=o.l4.Hidden)=>{let i=a.current.findIndex((({el:t})=>t===e));-1!==i&&((0,r.E)(t,{[o.l4.Unmount](){a.current.splice(i,1)},[o.l4.Hidden](){a.current[i].state="hidden"}}),c.microTask((()=>{var e;!T(a)&&l.current&&(null==(e=n.current)||e.call(n))})))})),u=(0,g.z)((e=>{let t=a.current.find((({el:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):a.current.push({el:e,state:"visible"}),()=>f(e,o.l4.Unmount)})),m=(0,i.useRef)([]),p=(0,i.useRef)(Promise.resolve()),v=(0,i.useRef)({enter:[],leave:[],idle:[]}),b=(0,g.z)(((e,n,i)=>{m.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter((([t])=>t!==e))),null==t||t.chains.current[n].push([e,new Promise((e=>{m.current.push(e)}))]),null==t||t.chains.current[n].push([e,new Promise((e=>{Promise.all(v.current[n].map((([e,t])=>t))).then((()=>e()))}))]),"enter"===n?p.current=p.current.then((()=>null==t?void 0:t.wait.current)).then((()=>i(n))):i(n)})),N=(0,g.z)(((e,t,n)=>{Promise.all(v.current[t].splice(0).map((([e,t])=>t))).then((()=>{var e;null==(e=m.current.shift())||e()})).then((()=>n(t)))}));return(0,i.useMemo)((()=>({children:a,register:u,unregister:f,onStart:b,onStop:N,wait:p,chains:v})),[u,f,a,b,N,v,p])}function C(){}E.displayName="NestingContext";let x=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function L(e){var t;let n={};for(let i of x)n[i]=null!=(t=e[i])?t:C;return n}let S=o.AN.RenderStrategy;let D=(0,o.yV)((function(e,t){let{show:n,appear:r=!1,unmount:s,...d}=e,u=(0,i.useRef)(null),m=(0,f.T)(u,t);(0,c.H)();let p=(0,a.oJ)();if(void 0===n&&null!==p&&(n=(p&a.ZM.Open)===a.ZM.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,h]=(0,i.useState)(n?"visible":"hidden"),b=R((()=>{h("hidden")})),[N,y]=(0,i.useState)(!0),w=(0,i.useRef)([n]);(0,l.e)((()=>{!1!==N&&w.current[w.current.length-1]!==n&&(w.current.push(n),y(!1))}),[w,n]);let C=(0,i.useMemo)((()=>({show:n,appear:r,initial:N})),[n,r,N]);(0,i.useEffect)((()=>{if(n)h("visible");else if(T(b)){let e=u.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")}),[n,b]);let x={unmount:s},L=(0,g.z)((()=>{var t;N&&y(!1),null==(t=e.beforeEnter)||t.call(e)})),D=(0,g.z)((()=>{var t;N&&y(!1),null==(t=e.beforeLeave)||t.call(e)}));return i.createElement(E.Provider,{value:b},i.createElement(k.Provider,{value:C},(0,o.sY)({ourProps:{...x,as:i.Fragment,children:i.createElement(Z,{ref:m,...x,...d,beforeEnter:L,beforeLeave:D})},theirProps:{},defaultTag:i.Fragment,features:S,visible:"visible"===v,name:"Transition"})))})),Z=(0,o.yV)((function(e,t){let{beforeEnter:n,afterEnter:m,beforeLeave:p,afterLeave:y,enter:w,enterFrom:C,enterTo:x,entered:D,leave:Z,leaveFrom:O,leaveTo:P,...z}=e,j=(0,i.useRef)(null),F=(0,f.T)(j,t),M=z.unmount?o.l4.Unmount:o.l4.Hidden,{show:_,appear:A,initial:H}=function(){let e=(0,i.useContext)(k);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[I,q]=(0,i.useState)(_?"visible":"hidden"),V=function(){let e=(0,i.useContext)(E);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:B,unregister:$}=V,U=(0,i.useRef)(null);(0,i.useEffect)((()=>B(j)),[B,j]),(0,i.useEffect)((()=>{if(M===o.l4.Hidden&&j.current)return _&&"visible"!==I?void q("visible"):(0,r.E)(I,{hidden:()=>$(j),visible:()=>B(j)})}),[I,j,B,$,_,M]);let W=(0,d.E)({enter:N(w),enterFrom:N(C),enterTo:N(x),entered:N(D),leave:N(Z),leaveFrom:N(O),leaveTo:N(P)}),Y=function(e){let t=(0,i.useRef)(L(e));return(0,i.useEffect)((()=>{t.current=L(e)}),[e]),t}({beforeEnter:n,afterEnter:m,beforeLeave:p,afterLeave:y}),K=(0,c.H)();(0,i.useEffect)((()=>{if(K&&"visible"===I&&null===j.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[j,I,K]);let X=H&&!A,G=!K||X||U.current===_?"idle":_?"enter":"leave",J=function(e=0){let[t,n]=(0,i.useState)(e),o=(0,s.t)(),a=(0,i.useCallback)((e=>{o.current&&n((t=>t|e))}),[t,o]),r=(0,i.useCallback)((e=>Boolean(t&e)),[t]),l=(0,i.useCallback)((e=>{o.current&&n((t=>t&~e))}),[n,o]),d=(0,i.useCallback)((e=>{o.current&&n((t=>t^e))}),[n]);return{flags:t,addFlag:a,hasFlag:r,removeFlag:l,toggleFlag:d}}(0),Q=(0,g.z)((e=>(0,r.E)(e,{enter:()=>{J.addFlag(a.ZM.Opening),Y.current.beforeEnter()},leave:()=>{J.addFlag(a.ZM.Closing),Y.current.beforeLeave()},idle:()=>{}}))),ee=(0,g.z)((e=>(0,r.E)(e,{enter:()=>{J.removeFlag(a.ZM.Opening),Y.current.afterEnter()},leave:()=>{J.removeFlag(a.ZM.Closing),Y.current.afterLeave()},idle:()=>{}}))),te=R((()=>{q("hidden"),$(j)}),V);(function({container:e,direction:t,classes:n,onStart:i,onStop:o}){let a=(0,s.t)(),r=(0,h.G)(),c=(0,d.E)(t);(0,l.e)((()=>{let t=(0,u.k)();r.add(t.dispose);let s=e.current;if(s&&"idle"!==c.current&&a.current)return t.dispose(),i.current(c.current),t.add(v(s,n.current,"enter"===c.current,(()=>{t.dispose(),o.current(c.current)}))),t.dispose}),[t])})({container:j,classes:W,direction:G,onStart:(0,d.E)((e=>{te.onStart(j,e,Q)})),onStop:(0,d.E)((e=>{te.onStop(j,e,ee),"leave"===e&&!T(te)&&(q("hidden"),$(j))}))}),(0,i.useEffect)((()=>{X&&(M===o.l4.Hidden?U.current=null:U.current=_)}),[_,X,I]);let ne=z,ie={ref:F};return A&&_&&H&&(ne={...ne,className:(0,b.A)(z.className,...W.current.enter,...W.current.enterFrom)}),i.createElement(E.Provider,{value:te},i.createElement(a.up,{value:(0,r.E)(I,{visible:a.ZM.Open,hidden:a.ZM.Closed})|J.flags},(0,o.sY)({ourProps:ie,theirProps:ne,defaultTag:"div",features:S,visible:"visible"===I,name:"Transition.Child"})))})),O=(0,o.yV)((function(e,t){let n=null!==(0,i.useContext)(k),o=null!==(0,a.oJ)();return i.createElement(i.Fragment,null,!n&&o?i.createElement(D,{ref:t,...e}):i.createElement(Z,{ref:t,...e}))})),P=Object.assign(D,{Child:O,Root:D})},4192:(e,t,n)=>{n.d(t,{G:()=>a});var i=n(7294),o=n(9362);function a(){let[e]=(0,i.useState)(o.k);return(0,i.useEffect)((()=>()=>e.dispose()),[e]),e}},3781:(e,t,n)=>{n.d(t,{z:()=>a});var i=n(7294),o=n(3855);let a=function(e){let t=(0,o.E)(e);return i.useCallback(((...e)=>t.current(...e)),[t])}},4879:(e,t,n)=>{n.d(t,{t:()=>a});var i=n(7294),o=n(6723);function a(){let e=(0,i.useRef)(!1);return(0,o.e)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},6723:(e,t,n)=>{n.d(t,{e:()=>a});var i=n(7294),o=n(7896);let a=(e,t)=>{o.O.isServer?(0,i.useEffect)(e,t):(0,i.useLayoutEffect)(e,t)}},3855:(e,t,n)=>{n.d(t,{E:()=>a});var i=n(7294),o=n(6723);function a(e){let t=(0,i.useRef)(e);return(0,o.e)((()=>{t.current=e}),[e]),t}},2180:(e,t,n)=>{n.d(t,{H:()=>a});var i=n(7294),o=n(7896);function a(){let[e,t]=(0,i.useState)(o.O.isHandoffComplete);return e&&!1===o.O.isHandoffComplete&&t(!1),(0,i.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,i.useEffect)((()=>o.O.handoff()),[]),e}},3784:(e,t,n)=>{n.d(t,{T:()=>s,h:()=>r});var i=n(7294),o=n(3781);let a=Symbol();function r(e,t=!0){return Object.assign(e,{[a]:t})}function s(...e){let t=(0,i.useRef)(e);(0,i.useEffect)((()=>{t.current=e}),[e]);let n=(0,o.z)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[a])))?void 0:n}},6567:(e,t,n)=>{n.d(t,{ZM:()=>r,oJ:()=>s,up:()=>l});var i=n(7294);let o=(0,i.createContext)(null);o.displayName="OpenClosedContext";var a,r=((a=r||{})[a.Open=1]="Open",a[a.Closed=2]="Closed",a[a.Closing=4]="Closing",a[a.Opening=8]="Opening",a);function s(){return(0,i.useContext)(o)}function l({value:e,children:t}){return i.createElement(o.Provider,{value:e},t)}},4067:(e,t,n)=>{function i(...e){return e.filter(Boolean).join(" ")}n.d(t,{A:()=>i})},9362:(e,t,n)=>{n.d(t,{k:()=>o});var i=n(1021);function o(){let e=[],t={addEventListener:(e,n,i,o)=>(e.addEventListener(n,i,o),t.add((()=>e.removeEventListener(n,i,o)))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(n)))},nextFrame:(...e)=>t.requestAnimationFrame((()=>t.requestAnimationFrame(...e))),setTimeout(...e){let n=setTimeout(...e);return t.add((()=>clearTimeout(n)))},microTask(...e){let n={current:!0};return(0,i.Y)((()=>{n.current&&e[0]()})),t.add((()=>{n.current=!1}))},style(e,t,n){let i=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add((()=>{Object.assign(e.style,{[t]:i})}))},group(e){let t=o();return e(t),this.add((()=>t.dispose()))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}},7896:(e,t,n)=>{n.d(t,{O:()=>a});var i=Object.defineProperty,o=(e,t,n)=>(((e,t,n)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);let a=new class{constructor(){o(this,"current",this.detect()),o(this,"handoffState","pending"),o(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},2984:(e,t,n)=>{function i(e,t,...n){if(e in t){let i=t[e];return"function"==typeof i?i(...n):i}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,i),o}n.d(t,{E:()=>i})},1021:(e,t,n)=>{function i(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}n.d(t,{Y:()=>i})},2351:(e,t,n)=>{n.d(t,{AN:()=>l,l4:()=>d,oA:()=>p,sY:()=>c,yV:()=>m});var i,o,a=n(7294),r=n(4067),s=n(2984),l=((o=l||{})[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o),d=((i=d||{})[i.Unmount=0]="Unmount",i[i.Hidden=1]="Hidden",i);function c({ourProps:e,theirProps:t,slot:n,defaultTag:i,features:o,visible:a=!0,name:r}){let l=u(t,e);if(a)return f(l,n,i,r);let d=null!=o?o:0;if(2&d){let{static:e=!1,...t}=l;if(e)return f(t,n,i,r)}if(1&d){let{unmount:e=!0,...t}=l;return(0,s.E)(e?0:1,{0:()=>null,1:()=>f({...t,hidden:!0,style:{display:"none"}},n,i,r)})}return f(l,n,i,r)}function f(e,t={},n,i){let{as:o=n,children:s,refName:l="ref",...d}=v(e,["unmount","static"]),c=void 0!==e.ref?{[l]:e.ref}:{},f="function"==typeof s?s(t):s;"className"in d&&d.className&&"function"==typeof d.className&&(d.className=d.className(t));let m={};if(t){let e=!1,n=[];for(let[i,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(i);e&&(m["data-headlessui-state"]=n.join(" "))}if(o===a.Fragment&&Object.keys(p(d)).length>0){if(!(0,a.isValidElement)(f)||Array.isArray(f)&&f.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${i} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(d).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=f.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,r.A)(null==e?void 0:e.className(...t),d.className):(0,r.A)(null==e?void 0:e.className,d.className),n=t?{className:t}:{};return(0,a.cloneElement)(f,Object.assign({},u(f.props,p(v(d,["ref"]))),m,c,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(f.ref,c.ref),n))}return(0,a.createElement)(o,Object.assign({},v(d,["ref"]),o!==a.Fragment&&c,o!==a.Fragment&&m),f)}function u(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let i of e)for(let e in i)e.startsWith("on")&&"function"==typeof i[e]?(null!=n[e]||(n[e]=[]),n[e].push(i[e])):t[e]=i[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let i in n)Object.assign(t,{[i](e,...t){let o=n[i];for(let n of o){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;n(e,...t)}}});return t}function m(e){var t;return Object.assign((0,a.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function v(e,t=[]){let n=Object.assign({},e);for(let i of t)i in n&&delete n[i];return n}},5506:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(7294);const o=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))}))},5426:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(7294);const o=i.forwardRef((function(e,t){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),i.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"}))}))}}]);