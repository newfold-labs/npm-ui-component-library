(()=>{"use strict";var e,a,f,d,t,r={},b={};function c(e){var a=b[e];if(void 0!==a)return a.exports;var f=b[e]={id:e,loaded:!1,exports:{}};return r[e].call(f.exports,f,f.exports,c),f.loaded=!0,f.exports}c.m=r,c.c=b,e=[],c.O=(a,f,d,t)=>{if(!f){var r=1/0;for(i=0;i<e.length;i++){f=e[i][0],d=e[i][1],t=e[i][2];for(var b=!0,o=0;o<f.length;o++)(!1&t||r>=t)&&Object.keys(c.O).every((e=>c.O[e](f[o])))?f.splice(o--,1):(b=!1,t<r&&(r=t));if(b){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[f,d,t]},c.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return c.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,c.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var t=Object.create(null);c.r(t);var r={};a=a||[null,f({}),f([]),f(f)];for(var b=2&d&&e;"object"==typeof b&&!~a.indexOf(b);b=f(b))Object.getOwnPropertyNames(b).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,c.d(t,r),t},c.d=(e,a)=>{for(var f in a)c.o(a,f)&&!c.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((a,f)=>(c.f[f](e,a),a)),[])),c.u=e=>"assets/js/"+({14:"492cb1dc",53:"935f2afb",96:"e6569d63",355:"9728370a",793:"ce748f31",803:"912d98e8",1452:"c20fed52",1520:"f98e2a27",1533:"83c03953",1544:"7548c255",1770:"6ca897a8",1883:"90252242",2295:"6e956a36",2361:"2681e2db",2534:"1d4ada1c",3057:"d5300a96",3085:"1f391b9e",3217:"3b8c55ea",3234:"9675bd58",3452:"50dd7c71",3545:"f392b896",3618:"35ceb33f",4195:"c4f5d8e4",4554:"015e23ec",4650:"348e7aa1",4720:"9a7bfab4",5432:"4bedb3f9",5433:"ea07af84",5571:"a18f9f07",5815:"ba9faf66",6233:"3bedbcfb",6706:"d9e1d16f",7001:"6716faff",7055:"d725d020",7126:"b4b23776",7179:"084f0435",7277:"b2507287",7414:"393be207",7546:"e566272d",7676:"0109f6de",7899:"c599a65d",7918:"17896441",7920:"1a4e3797",7987:"0b534472",8131:"e1984940",8146:"aa8f8270",8259:"9a55f622",8463:"43d7a89e",9163:"3bb86fd9",9244:"74937021",9424:"9f3b7a06",9480:"029f740b",9514:"1be78505",9563:"d6ae6126",9588:"f7f88a5e",9671:"0e384e19",9817:"14eb3368"}[e]||e)+"."+{14:"e2bf8112",53:"a43ce0b2",96:"28a23180",355:"674fb262",793:"cb42ee3e",803:"3cb4f9d2",1452:"d76243b5",1505:"4ef9620d",1520:"d7f752b4",1533:"fceb441a",1544:"1454627a",1690:"a572f2ae",1770:"89857279",1883:"9c8883ed",2295:"4f246c39",2361:"62288aa7",2534:"8d8cd6a7",3057:"5d9680ee",3085:"1b828a80",3217:"6cd89569",3234:"79c0b67e",3452:"5e529afd",3545:"10607234",3618:"42b773de",4195:"77d97bd5",4554:"95e6fd9b",4650:"ba3c713b",4720:"0a4c701c",4972:"d3dfbdbf",5432:"dcbe06d6",5433:"4a2e51fa",5525:"78cd9517",5571:"e5a74e9f",5815:"b34f1b8f",6233:"68db6585",6706:"d0958e5f",7001:"9c0ac312",7055:"42889993",7126:"f2ea154c",7179:"d3c9d8c5",7277:"18a3208c",7414:"016ded32",7546:"b463ec9b",7676:"1b25d700",7899:"b52e9200",7918:"8d61b53a",7920:"f0b7ecb4",7987:"344b6c24",8131:"62bc1da8",8146:"fd921cb4",8259:"52557cd4",8443:"6e96ff47",8463:"934e68e5",8639:"55346e91",8837:"4e1b26b7",9075:"85daba22",9163:"8d4ae03e",9244:"59cb89f9",9346:"9aced7d6",9424:"3bec27d1",9480:"37ae67e5",9514:"c2ba0fa9",9563:"cc518908",9588:"0c19068c",9671:"8c3cdcb7",9817:"091bf03e",9846:"068c01d3"}[e]+".js",c.miniCssF=e=>{},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},t="newfold-ui-docs:",c.l=(e,a,f,r)=>{if(d[e])d[e].push(a);else{var b,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==t+f){b=l;break}}b||(o=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,c.nc&&b.setAttribute("nonce",c.nc),b.setAttribute("data-webpack",t+f),b.src=e),d[e]=[a];var u=(a,f)=>{b.onerror=b.onload=null,clearTimeout(s);var t=d[e];if(delete d[e],b.parentNode&&b.parentNode.removeChild(b),t&&t.forEach((e=>e(f))),a)return a(f)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=u.bind(null,b.onerror),b.onload=u.bind(null,b.onload),o&&document.head.appendChild(b)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),c.p="/npm-ui-component-library/",c.gca=function(e){return e={17896441:"7918",74937021:"9244",90252242:"1883","492cb1dc":"14","935f2afb":"53",e6569d63:"96","9728370a":"355",ce748f31:"793","912d98e8":"803",c20fed52:"1452",f98e2a27:"1520","83c03953":"1533","7548c255":"1544","6ca897a8":"1770","6e956a36":"2295","2681e2db":"2361","1d4ada1c":"2534",d5300a96:"3057","1f391b9e":"3085","3b8c55ea":"3217","9675bd58":"3234","50dd7c71":"3452",f392b896:"3545","35ceb33f":"3618",c4f5d8e4:"4195","015e23ec":"4554","348e7aa1":"4650","9a7bfab4":"4720","4bedb3f9":"5432",ea07af84:"5433",a18f9f07:"5571",ba9faf66:"5815","3bedbcfb":"6233",d9e1d16f:"6706","6716faff":"7001",d725d020:"7055",b4b23776:"7126","084f0435":"7179",b2507287:"7277","393be207":"7414",e566272d:"7546","0109f6de":"7676",c599a65d:"7899","1a4e3797":"7920","0b534472":"7987",e1984940:"8131",aa8f8270:"8146","9a55f622":"8259","43d7a89e":"8463","3bb86fd9":"9163","9f3b7a06":"9424","029f740b":"9480","1be78505":"9514",d6ae6126:"9563",f7f88a5e:"9588","0e384e19":"9671","14eb3368":"9817"}[e]||e,c.p+c.u(e)},(()=>{var e={1303:0,532:0};c.f.j=(a,f)=>{var d=c.o(e,a)?e[a]:void 0;if(0!==d)if(d)f.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise(((f,t)=>d=e[a]=[f,t]));f.push(d[2]=t);var r=c.p+c.u(a),b=new Error;c.l(r,(f=>{if(c.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var t=f&&("load"===f.type?"missing":f.type),r=f&&f.target&&f.target.src;b.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",b.name="ChunkLoadError",b.type=t,b.request=r,d[1](b)}}),"chunk-"+a,a)}},c.O.j=a=>0===e[a];var a=(a,f)=>{var d,t,r=f[0],b=f[1],o=f[2],n=0;if(r.some((a=>0!==e[a]))){for(d in b)c.o(b,d)&&(c.m[d]=b[d]);if(o)var i=o(c)}for(a&&a(f);n<r.length;n++)t=r[n],c.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return c.O(i)},f=self.webpackChunknewfold_ui_docs=self.webpackChunknewfold_ui_docs||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();