"use strict";(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[2534],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),c=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(a.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,f=p["".concat(a,".").concat(d)]||p[d]||m[d]||s;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var c=2;c<s;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5168:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const s={},i="usePrevious",u={unversionedId:"hooks/usePrevious",id:"hooks/usePrevious",title:"usePrevious",description:"The usePrevious hook accepts the initial value and return the previous value.",source:"@site/docs/hooks/usePrevious.mdx",sourceDirName:"hooks",slug:"/hooks/usePrevious",permalink:"/npm-ui-component-library/docs/hooks/usePrevious",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/hooks/usePrevious.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"useMediaQuery",permalink:"/npm-ui-component-library/docs/hooks/useMediaQuery"},next:{title:"useRootContext",permalink:"/npm-ui-component-library/docs/hooks/useRootContext"}},a={},c=[{value:"Usage",id:"usage",level:3}],l={toc:c},p="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(p,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useprevious"},"usePrevious"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"usePrevious")," hook accepts the initial value and return the previous value."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import { usePrevious } from from "@newfold/ui-component-library";\n\nconst Component = () => {     \n    const previousCompanyOrPerson = usePrevious( companyOrPerson );\n\n    return (\n        // JSX...\n    )\n};\n')))}m.isMDXComponent=!0}}]);