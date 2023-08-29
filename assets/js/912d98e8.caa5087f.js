"use strict";(self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[]).push([[803],{1547:(e,a,n)=>{n.d(a,{Z:()=>u});var t=n(7294),o=n(4184),s=n.n(o),l=n(5697),r=n.n(l);const i={variant:{info:"nfd-badge--info",upsell:"nfd-badge--upsell",plain:"nfd-badge--plain"},size:{default:"",small:"nfd-badge--small",large:"nfd-badge--large"}},d=(0,t.forwardRef)((({children:e,as:a,variant:n,size:o,className:l,...r},d)=>(0,t.createElement)(a,{ref:d,className:s()("nfd-badge",i.variant[n],i.size[o],l),...r},e))),g={children:r().node.isRequired,as:r().elementType,variant:r().oneOf(Object.keys(i.variant)),size:r().oneOf(Object.keys(i.size)),className:r().string};d.propTypes=g,d.defaultProps={as:"span",variant:"info",size:"default",className:""};const u=d,p=e=>(0,t.createElement)(d,{...e});p.propTypes=g,p.defaultProps=d.defaultProps,p.displayName="Badge"},557:(e,a,n)=>{n.d(a,{ZP:()=>m});var t=n(7294),o=n(8163),s=n(4184),l=n.n(s),r=n(6486),i=n(5697),d=n.n(i),g=n(1547);const u=({tag:e,index:a,disabled:n=!1,onRemoveTag:s,screenReaderRemoveTag:l,...r})=>{const i=(0,t.useCallback)((e=>{if(!n)switch(null==e?void 0:e.key){case"Delete":case"Backspace":return s(a),e.preventDefault(),!0}}),[a,n,s]),d=(0,t.useCallback)((e=>{if(!n)return s(a),e.preventDefault(),!0}),[a,n,s]);return(0,t.createElement)(g.Z,{onKeyDown:i,...r,variant:"plain",className:"nfd-tag-input__tag"},(0,t.createElement)("span",{className:"nfd-mb-px"},e),(0,t.createElement)("button",{onClick:d,className:"nfd-tag-input__remove-tag"},(0,t.createElement)("span",{className:"nfd-sr-only"},l),(0,t.createElement)(o.Z,{className:"nfd-h-3 nfd-w-3"})))};u.propTypes={tag:d().string.isRequired,index:d().number.isRequired,disabled:d().bool,onRemoveTag:d().func.isRequired,screenReaderRemoveTag:d().string.isRequired};const p=(0,t.forwardRef)((({tags:e=[],children:a,className:n,disabled:o,onAddTag:s,onRemoveTag:i,onSetTags:d,onBlur:g,screenReaderRemoveTag:p,...c},m)=>{const[T,f]=(0,t.useState)(""),v=(0,t.useCallback)((e=>{var a;(0,r.isString)(null==e||null===(a=e.target)||void 0===a?void 0:a.value)&&f(e.target.value)}),[f]),h=(0,t.useCallback)((a=>{switch(a.key){case",":case"Enter":return T.length>0&&(s(T),f("")),a.preventDefault(),!0;case"Backspace":if(0!==T.length||0===e.length)break;return i(e.length-1),a.ctrlKey&&d([]),a.preventDefault(),!0}}),[T,e,f,s]),b=(0,t.useCallback)((e=>{T.length>0&&(s(T),f("")),g(e)}),[T,s,f,g]);return(0,t.createElement)("div",{className:l()("nfd-tag-input",o&&"nfd-tag-input--disabled",n)},a||(0,r.map)(e,((e,a)=>(0,t.createElement)(u,{key:`tag-${a}`,tag:e,index:a,disabled:o,onRemoveTag:i,screenReaderRemoveTag:p}))),(0,t.createElement)("input",{ref:m,type:"text",disabled:o,className:"nfd-tag-input__input",onKeyDown:h,...c,onChange:v,onBlur:b,value:T}))})),c={tags:d().arrayOf(d().string),children:d().node,className:d().string,disabled:d().bool,onAddTag:d().func,onRemoveTag:d().func,onSetTags:d().func,onBlur:d().func,screenReaderRemoveTag:d().string};p.propTypes=c,p.Tag=u,p.Tag.displayName="TagInput.Tag",p.defaultProps={tags:[],children:null,className:"",disabled:!1,onAddTag:r.noop,onRemoveTag:r.noop,onSetTags:r.noop,onBlur:r.noop,screenReaderRemoveTag:"Remove tag"};const m=p,T=e=>(0,t.createElement)(p,{...e});T.propTypes=c,T.defaultProps=p.defaultProps,T.displayName="TagInput"},9375:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>T,contentTitle:()=>c,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>f});var t=n(7462),o=n(7294),s=n(3905),l=n(2504),r=n(1629),i=n(557);const d=["Adventure","Action","Comedy","Drama","Fantasy","Horror","Mystery","Romance","Thriller","Western","Sci-Fi","Crime","Animation","Documentary","Musical","War","With Space"],g=e=>{let{withChildren:a=!1,disabled:n}=e;const[t,s]=(0,o.useState)(d||[]);return a?o.createElement(i.ZP,null,o.createElement(i.ZP.Tag,{key:0,tag:"Adventure",index:0,onRemoveTag:()=>{alert("custom remove tag function")}}),o.createElement(i.ZP.Tag,{key:1,tag:"Action",index:1,onRemoveTag:e=>console.log(e)}),o.createElement(i.ZP.Tag,{key:2,tag:"Disabled Tag",index:2,onRemoveTag:()=>{alert("custom remove tag function")},disabled:!0,screenReaderRemoveTag:"Non-removable tag"})):o.createElement(i.ZP,{onAddTag:e=>{s([...t,e])},onRemoveTag:e=>{s(t.filter(((a,n)=>n!==e)))},tags:t,disabled:n})},u={tags:{type:"array",description:"Array of `string` tags to display"},children:{type:"node",description:"You can pass `TagInput.Tag` subcomponent(s) as children to render tags. This will override the `tags` prop."},onAddTag:{type:"function",description:"Callback function when a tag is added. The function will receive the new tag as a parameter."},onRemoveTag:{type:"function",description:"Callback function when a tag is removed. The function will receive the removed tag as a parameter."},onSetTags:{type:"function",description:"Sets the tags to the given array."},onBlur:{type:"function"},screenReaderRemoveTag:{type:"string",description:"Screen reader text for the remove tag button.",defaultValue:"Remove tag"},disabled:{type:"bool",description:"If true, the tag input will be disabled.",defaultValue:"false"},className:{type:"string"}},p={},c="Tag Input",m={unversionedId:"elements/tag-input",id:"elements/tag-input",title:"Tag Input",description:"A tags input is a user interface element that enables users to input",source:"@site/docs/elements/tag-input.mdx",sourceDirName:"elements",slug:"/elements/tag-input",permalink:"/npm-ui-component-library/docs/elements/tag-input",draft:!1,editUrl:"https://github.com/newfold-labs/npm-ui-component-library/docs/docs/elements/tag-input.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Table",permalink:"/npm-ui-component-library/docs/elements/table"},next:{title:"Text Input",permalink:"/npm-ui-component-library/docs/elements/text-input"}},T={},f=[{value:"Usage",id:"usage",level:3},{value:"TagInput.Tag Sub Component",id:"taginputtag-sub-component",level:3},{value:"Disabled",id:"disabled",level:3},{value:"Props",id:"props",level:3}],v={toc:f},h="wrapper";function b(e){let{components:a,...n}=e;return(0,s.kt)(h,(0,t.Z)({},v,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"tag-input"},"Tag Input"),(0,s.kt)("p",null,"A tags input is a user interface element that enables users to input\nmultiple entries, formatting them as tags within a text field. This\nfunctionality is also referred to as a Tagging/Tokenizing system."),(0,s.kt)(r.Z,{mdxType:"NewfoldRoot"},(0,s.kt)(g,{mdxType:"TagInputDemo"})),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { TagInput } from \"@newfold/ui-component-library\";\n\nconst tagsPool = [\n    'Adventure', 'Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery',\n    'Romance', 'Thriller', 'Western', 'Sci-Fi', 'Crime', 'Animation',\n    'Documentary', 'Musical', 'War', 'With Space'\n];\n\nconst [tags, setTags] = useState(tagsPool || []);\n\nconst handleAddTag = (tag) => {\n    setTags([...tags, tag]);\n};\n\nconst handleRemoveTag = (index) => {\n    setTags(tags.filter((tag, i) => i !== index));\n}\n\n<TagInput\n    onAddTag={handleAddTag}\n    onRemoveTag={handleRemoveTag}\n    tags={tags}\n/>\n")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"taginputtag-sub-component"},"TagInput.Tag Sub Component"),(0,s.kt)("p",null,"You can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"TagInput.Tag")," sub component to render the tags.\nThis will override the the ",(0,s.kt)("inlineCode",{parentName:"p"},"tags")," prop."),(0,s.kt)("p",null,"With this method, you can pass props individually to each tag,\ngiving you more granular control over the rendered tags."),(0,s.kt)(r.Z,{mdxType:"NewfoldRoot"},(0,s.kt)(g,{withChildren:!0,mdxType:"TagInputDemo"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'<TagInput>\n    <TagInput.Tag \n        key={0}\n        tag="Adventure"\n        index={0}\n        onRemoveTag={() => {alert(\'custom remove tag function\')}}\n    />\n    <TagInput.Tag\n        key={1}\n        tag="Action"\n        index={1}\n        onRemoveTag={x => console.log(x)}\n    />\n    <TagInput.Tag\n        key={2}\n        tag="Disabled Tag"\n        index={2}\n        onRemoveTag={() => {alert(\'custom remove tag function\')}}\n        disabled\n        screenReaderRemoveTag="Non-removable tag"\n    />\n</TagInput>\n')),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"disabled"},"Disabled"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"disabled")," prop to disable the tag input."),(0,s.kt)(r.Z,{mdxType:"NewfoldRoot"},(0,s.kt)(g,{disabled:!0,mdxType:"TagInputDemo"})),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"<TagInput\n    onAddTag={handleAddTag}\n    onRemoveTag={handleRemoveTag}\n    tags={tags}\n    disabled\n/>\n")),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"props"},"Props"),(0,s.kt)(l.Z.Table,{docs:u}))}b.isMDXComponent=!0},8163:(e,a,n)=>{n.d(a,{Z:()=>o});var t=n(7294);const o=t.forwardRef((function(e,a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:a},e),t.createElement("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"}))}))}}]);