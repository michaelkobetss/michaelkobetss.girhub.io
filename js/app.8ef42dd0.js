(function(){"use strict";var e={3779:function(e,t,n){var o=n(9242),a=n(3396),r=n(7718),i=n(9271);function l(e,t,n,o,l,c){const u=(0,a.up)("WelcomeMessage"),s=(0,a.up)("TabsContainer"),f=(0,a.up)("FooterComponent");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(r.q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i.O,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u),(0,a.Wm)(s)])),_:1})])),_:1}),(0,a.Wm)(f)],64)}var c=n(3369),u=n(6824),s=n(8521),f=n(3289);const d=(0,a._)("h1",{class:"display-2 font-weight-bold mb-3 title",style:{"font-size":"7rem"}}," Michael Kobets ",-1),m=(0,a._)("span",{class:"font-weight-bold"},"Front-End developer",-1);function p(e,t,n,o,r,i){const l=(0,a.up)("v-typography");return(0,a.wg)(),(0,a.j4)(c.K,{fluid:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u.o,{class:"d-flex align-center justify-center",style:{height:"100vh"}},{default:(0,a.w5)((()=>[(0,a.Wm)(s.D,{cols:"12",md:"6",class:"text-left"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a.Wm)(l,{class:"display-2 mb-3 headline",style:{"font-size":"3rem"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" Hello there, my name is ")])),_:1}),d,(0,a.Wm)(l,{class:"display-2 mb-3 subheading",style:{"font-size":"4rem"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" and I am a "),m])),_:1})]),(0,a.Wm)(f.t,{class:"jumping-arrow",size:"80"},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-arrow-down")])),_:1})])),_:1})])),_:1})])),_:1})}var b={name:"HelloTab",methods:{scrollDown(){}}},v=n(89);const h=(0,v.Z)(b,[["render",p]]);var w=h,g=n(7812),_=n(665);function k(e,t,n,o,r,i){const l=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(c.K,{fluid:"",class:"main-container"},{default:(0,a.w5)((()=>[(0,a.Wm)(g.d,{centered:"",grow:""},{default:(0,a.w5)((()=>[(0,a.Wm)(_.L,{to:"/about"},{default:(0,a.w5)((()=>[(0,a.Uk)("About")])),_:1}),(0,a.Wm)(_.L,{to:"/experience"},{default:(0,a.w5)((()=>[(0,a.Uk)("Experience")])),_:1}),(0,a.Wm)(_.L,{to:"/contact"},{default:(0,a.w5)((()=>[(0,a.Uk)("Contact")])),_:1})])),_:1}),(0,a.Wm)(l)])),_:1})}var y={name:"TabsContainer",data(){return{activeTab:"/about"}}};const W=(0,v.Z)(y,[["render",k]]);var T=W,j=n(7139),C=n(1666),O=n(4454);const x=e=>((0,a.dD)("data-v-343d6c82"),e=e(),(0,a.Cn)(),e),U={class:"text-center white--text"},P=x((()=>(0,a._)("div",null,"Contact: your.email@example.com | Phone: (123) 456-7890",-1)));function D(e,t,n,o,r,i){const l=(0,a.up)("v-flex");return(0,a.wg)(),(0,a.j4)(C.c,{class:"footer",app:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c.K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(O.s,{"align-center":"","justify-center":"",row:"",wrap:""},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{xs12:""},{default:(0,a.w5)((()=>[(0,a._)("div",U,[(0,a._)("div",null,"© "+(0,j.zw)(i.currentYear)+" Your Name. All Rights Reserved.",1),P])])),_:1})])),_:1})])),_:1})])),_:1})}var E={name:"FooterComponent",computed:{currentYear(){return(new Date).getFullYear()}}};const M=(0,v.Z)(E,[["render",D],["__scopeId","data-v-343d6c82"]]);var A=M,L={name:"App",components:{WelcomeMessage:w,TabsContainer:T,FooterComponent:A},data:()=>({})};const I=(0,v.Z)(L,[["render",l]]);var K=I,Z=(n(9773),n(8727)),F=(0,Z.Rd)();async function S(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var z=n(65),N=(0,z.MT)({state:{activeTab:null},mutations:{setActiveTab(e,t){e.activeTab=t}},actions:{setActiveTab({commit:e},t){e("setActiveTab",t)}}}),V=n(2483);function Y(e,t,n,o,r,i){return(0,a.wg)(),(0,a.iD)("div",null," abouttab ")}var R={name:"AboutTab"};const q=(0,v.Z)(R,[["render",Y],["__scopeId","data-v-545f3420"]]);var H=q,B=n(652),G=n(870),J=n(5661),Q=n(6572),X=n(1888);const $=e=>((0,a.dD)("data-v-2442c5f9"),e=e(),(0,a.Cn)(),e),ee=["src"],te=$((()=>(0,a._)("p",{class:"text"},[(0,a.Uk)(" Thanks for visiting! Send a connection request on "),(0,a._)("a",{href:"https://www.linkedin.com/in/michaelkobetss/",target:"_blank",title:"Michael Kobets LinkedIn"},"LinkedIn"),(0,a.Uk)(", contact me on "),(0,a._)("a",{href:"https://t.me/michaelkobetss",target:"_blank",title:"Michael Kobets Telegram"},"Telegram"),(0,a.Uk)(", or "),(0,a._)("a",{href:"mailto:michaelkobetss@gmail.com",title:"michaelkobetss@gmail.com"},"send me an email"),(0,a.Uk)(". ")],-1)));function ne(e,t,n,o,r,i){const l=(0,a.up)("v-typography");return(0,a.wg)(),(0,a.j4)(c.K,{"fill-height":"",fluid:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u.o,{align:"center",justify:"center"},{default:(0,a.w5)((()=>[(0,a.Wm)(s.D,{cols:"12",md:"6"},{default:(0,a.w5)((()=>[(0,a.Wm)(J._,{class:"card"},{default:(0,a.w5)((()=>[(0,a.Wm)(Q.E,{class:"card-title"},{default:(0,a.w5)((()=>[(0,a.Uk)("Let's Connect")])),_:1}),(0,a.Wm)(X.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(B.V,{class:"avatar"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:r.PhotoCV,alt:"PhotoCV"},null,8,ee)])),_:1}),(0,a.Wm)(l,null,{default:(0,a.w5)((()=>[te])),_:1}),(0,a.Wm)(u.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(G.T,{href:"https://www.linkedin.com/in/michaelkobetss/",target:"_blank",title:"Michael Kobets LinkedIn",class:"connect-button",rounded:""},{default:(0,a.w5)((()=>[(0,a.Wm)(f.t,{left:""},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-linkedin")])),_:1}),(0,a.Uk)("Connect on LinkedIn ")])),_:1})])),_:1}),(0,a.Wm)(s.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(G.T,{href:"https://t.me/michaelkobetss",target:"_blank",title:"Michael Kobets Telegram",class:"connect-button telegram-button",rounded:""},{default:(0,a.w5)((()=>[(0,a.Wm)(f.t,{left:""},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-telegram")])),_:1}),(0,a.Uk)("Contact on Telegram ")])),_:1})])),_:1}),(0,a.Wm)(s.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(G.T,{href:"mailto:michaelkobetss@gmail.com",title:"michaelkobetss@gmail.com",class:"connect-button email-button",rounded:""},{default:(0,a.w5)((()=>[(0,a.Wm)(f.t,{left:""},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-email")])),_:1}),(0,a.Uk)("Contact via Email ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var oe={name:"ContactTab",data(){return{PhotoCV:n(7385)}}};const ae=(0,v.Z)(oe,[["render",ne],["__scopeId","data-v-2442c5f9"]]);var re=ae;function ie(e,t,n,o,r,i){return(0,a.wg)(),(0,a.iD)("div",null," experiencetab ")}var le={name:"ExperienceTab"};const ce=(0,v.Z)(le,[["render",ie],["__scopeId","data-v-3a7f6443"]]);var ue=ce;const se=[{path:"/",redirect:"/about"},{path:"/about",component:H},{path:"/contact",component:re},{path:"/experience",component:ue}],fe=(0,V.p7)({history:(0,V.r5)(),routes:se});var de=fe;S();const me=(0,o.ri)(K);me.use(F).use(N).use(de).mount("#app")},7385:function(e,t,n){e.exports=n.p+"img/PhotoCV.3fc3e03f.jpg"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(s=0;s<e.length;s++){o=e[s][0],a=e[s][1],r=e[s][2];for(var l=!0,c=0;c<o.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(l=!1,r<i&&(i=r));if(l){e.splice(s--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"===typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"===typeof o.then)return o}var r=Object.create(null);n.r(r);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&o;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((function(e){i[e]=function(){return o[e]}}));return i["default"]=function(){return o},n.d(r,i),r}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.8bacb2c3.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="personalwebsite:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var l,c;if(void 0!==r)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var f=u[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+r){l=f;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+r),l.src=o),e[o]=[a];var d=function(t,n){l.onerror=l.onload=null,clearTimeout(m);var a=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),l=new Error,c=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,a[1](l)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],l=o[1],c=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(c)var s=c(n)}for(t&&t(o);u<i.length;u++)r=i[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(s)},o=self["webpackChunkpersonalwebsite"]=self["webpackChunkpersonalwebsite"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3779)}));o=n.O(o)})();
//# sourceMappingURL=app.8ef42dd0.js.map