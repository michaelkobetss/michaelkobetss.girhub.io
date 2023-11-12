(function(){"use strict";var e={7195:function(e,t,n){var o=n(9242),a=n(3396),l=n(7718),i=n(3140);function r(e,t,n,o,r,s){const c=(0,a.up)("WelcomeMessage"),u=(0,a.up)("TabsContainer"),d=(0,a.up)("FooterComponent");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l.q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(i.O,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c),(0,a.Wm)(u)])),_:1})])),_:1}),(0,a.Wm)(d)],64)}var s=n(7139),c=n(3369),u=n(6824),d=n(8521),f=n(3289);const m=(0,a._)("h2",{class:"display-2 mb-3 headline",style:{"font-size":"2rem"}}," Hello there, my name is ",-1),h=(0,a._)("h1",{class:"display-2 font-weight-bold mb-3 title",style:{"font-size":"4rem"}}," Michael Kobets ",-1),p=(0,a._)("h2",{class:"display-2 mb-3 subheading",style:{"font-size":"2.5rem"}},[(0,a.Uk)(" and I am a "),(0,a._)("span",{class:"font-weight-bold"},"Front-End developer")],-1);function b(e,t,n,o,l,i){return(0,a.wg)(),(0,a.j4)(c.K,{fluid:""},{default:(0,a.w5)((()=>[(0,a.Wm)(u.o,{class:"d-flex align-center justify-center",style:{height:"100vh"}},{default:(0,a.w5)((()=>[(0,a.Wm)(d.D,{cols:"12",md:"6",class:"text-left"},{default:(0,a.w5)((()=>[(0,a._)("div",null,[(0,a.Wm)(u.o,{class:"mb-3"},{default:(0,a.w5)((()=>[(0,a.Wm)(d.D,{cols:"12"},{default:(0,a.w5)((()=>[m])),_:1}),(0,a.Wm)(d.D,{cols:"12"},{default:(0,a.w5)((()=>[h])),_:1}),(0,a.Wm)(d.D,{cols:"12"},{default:(0,a.w5)((()=>[p])),_:1})])),_:1})]),(0,a.Wm)(f.t,{class:(0,s.C_)(["jumping-arrow",{clicked:l.isArrowClicked}]),size:"60",onClick:i.scrollDown},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-arrow-down")])),_:1},8,["class","onClick"])])),_:1})])),_:1})])),_:1})}var _={name:"HelloTab",data(){return{isArrowClicked:!1}},mounted(){window.addEventListener("scroll",this.handleScroll)},methods:{scrollDown(){window.scrollTo({top:window.innerHeight,behavior:"smooth"})},handleScroll(){console.log("handlescroll worked"),window.scrollY&&(this.isArrowClicked=!0,window.removeEventListener("scroll",this.handleScroll))}}},w=n(89);const k=(0,w.Z)(_,[["render",b]]);var v=k,g=n(7812),y=n(665);function W(e,t,n,o,l,i){const r=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(c.K,{fluid:"",class:"main-container"},{default:(0,a.w5)((()=>[(0,a.Wm)(g.d,{centered:"",grow:""},{default:(0,a.w5)((()=>[(0,a.Wm)(y.L,{to:"/about"},{default:(0,a.w5)((()=>[(0,a.Uk)("About")])),_:1}),(0,a.Wm)(y.L,{to:"/contact"},{default:(0,a.w5)((()=>[(0,a.Uk)("Contact")])),_:1})])),_:1}),(0,a.Wm)(r)])),_:1})}var U={name:"TabsContainer",data(){return{activeTab:"/about"}}};const C=(0,w.Z)(U,[["render",W]]);var j=C;function T(e,t,n,o,l,i){return(0,a.wg)(),(0,a.iD)("div")}var O={name:"FooterComponent",computed:{currentYear(){return(new Date).getFullYear()}}};const x=(0,w.Z)(O,[["render",T],["__scopeId","data-v-4b851b28"]]);var I=x,D={name:"App",components:{WelcomeMessage:v,TabsContainer:j,FooterComponent:I},data:()=>({})};const M=(0,w.Z)(D,[["render",r]]);var P=M,A=(n(9773),n(8727)),S=(0,A.Rd)();async function E(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var L=n(65),K=(0,L.MT)({state:{activeTab:null},mutations:{setActiveTab(e,t){e.activeTab=t}},actions:{setActiveTab({commit:e},t){e("setActiveTab",t)}}}),F=n(2483);const H=e=>((0,a.dD)("data-v-47e4bda2"),e=e(),(0,a.Cn)(),e),V={class:"about-container"},Z=H((()=>(0,a._)("h2",{class:"about-heading"},"About me",-1))),z=H((()=>(0,a._)("p",{class:"text-xl mb-4 line-height-lg"},[(0,a.Uk)(" Hello, I'm "),(0,a._)("b",null,"Michael"),(0,a.Uk)(", and I'm "),(0,a._)("b",null,"21 years old"),(0,a.Uk)(". I currently reside in "),(0,a._)("b",null,"Kyiv, Ukraine"),(0,a.Uk)(". Initially, programming started as a hobby, but it has now grown into a "),(0,a._)("b",null,"genuine career aspiration"),(0,a.Uk)(" for me. For the past year, I have been working on completing various freelance tasks and have also created a website for a local shop. ")],-1))),N={class:"body-1 text-xl mb-4 line-height-lg"},Y=H((()=>(0,a._)("b",null,"React",-1))),q=H((()=>(0,a._)("b",null,"Vue",-1))),R=H((()=>(0,a._)("b",null,"Quasar",-1))),B=H((()=>(0,a._)("b",null,"JavaScript",-1))),G=H((()=>(0,a._)("b",null,"Node.js",-1))),J=H((()=>(0,a._)("b",null,"CSS",-1))),Q=H((()=>(0,a._)("b",null,"HTML",-1))),X=H((()=>(0,a._)("b",null,"MaterialUI",-1))),$=H((()=>(0,a._)("b",null,"Vuetify",-1))),ee=H((()=>(0,a._)("b",null,"Bootstrap",-1))),te=H((()=>(0,a._)("b",null,"Vuex",-1))),ne=H((()=>(0,a._)("b",null,"Redux",-1))),oe=H((()=>(0,a._)("b",null,"Pinia",-1))),ae=H((()=>(0,a._)("b",null,"GitHub",-1))),le=H((()=>(0,a._)("b",null,"Jira",-1))),ie={class:"hobbies"},re=H((()=>(0,a._)("h2",{class:"hobbies-heading"},"Hobbies and Skills",-1))),se={class:"hobbies-list"},ce=H((()=>(0,a._)("b",null,"Chess",-1))),ue=H((()=>(0,a._)("b",null,"Piano",-1))),de=H((()=>(0,a._)("b",null,"Guitar",-1))),fe=H((()=>(0,a._)("b",null,"Cycling",-1))),me=H((()=>(0,a._)("div",{class:"download-cv-container"},[(0,a._)("a",{href:"https://flowcv.com/resume/nj0kda5ikf",target:"_blank",class:"download-cv-button"},"Open my CV")],-1)));function he(e,t,n,o,l,i){const r=(0,a.up)("font-awesome-icon"),s=(0,a.up)("v-column");return(0,a.wg)(),(0,a.iD)("div",V,[(0,a.Wm)(c.K,{fluid:"","fill-height":""},{default:(0,a.w5)((()=>[(0,a.Wm)(u.o,{align:"center",justify:"center"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{cols:"12"},{default:(0,a.w5)((()=>[Z,z,(0,a._)("p",N,[(0,a.Uk)(" Besides my expertise in "),(0,a.Wm)(r,{icon:"vuejs"}),Y,(0,a.Uk)(", I also have experience with "),(0,a.Wm)(r,{icon:"react"}),q,(0,a.Uk)(", "),R,(0,a.Uk)(", "),B,(0,a.Uk)(", "),G,(0,a.Uk)(", "),J,(0,a.Uk)(", "),Q,(0,a.Uk)(", and various UI frameworks like "),X,(0,a.Uk)(", "),$,(0,a.Uk)(" and "),ee,(0,a.Uk)(". I have worked with state management solutions like "),te,(0,a.Uk)(", "),ne,(0,a.Uk)(", "),oe,(0,a.Uk)(" and have used tools like "),(0,a.Wm)(r,{icon:"github"}),ae,(0,a.Uk)(", "),(0,a.Wm)(r,{icon:"jira"}),le,(0,a.Uk)(" to enhance my development process. ")]),(0,a._)("div",ie,[re,(0,a._)("ul",se,[(0,a._)("li",null,[(0,a.Wm)(f.t,{left:""},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-chess-queen")])),_:1}),ce,(0,a.Uk)(" - I'm a Class A player | 1st Category chess player. It's a game that constantly challenges my mind and improves my decision-making abilities. ")]),(0,a._)("li",null,[(0,a.Wm)(f.t,{left:""},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-music-note")])),_:1}),ue,(0,a.Uk)(" - I've recently embarked on a musical journey by learning the piano. ")]),(0,a._)("li",null,[(0,a.Wm)(f.t,{left:""},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-guitar-electric")])),_:1}),de,(0,a.Uk)(" - My guitar skills have reached a point where I feel confident performing in front of people. ")]),(0,a._)("li",null,[(0,a.Wm)(f.t,{left:""},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-bike")])),_:1}),fe,(0,a.Uk)(" - Cycling is a hobby for me. It's also a way to stay active and explore the world around me. ")])])]),me])),_:1})])),_:1})])),_:1})])}var pe={name:"AboutTab"};const be=(0,w.Z)(pe,[["render",he],["__scopeId","data-v-47e4bda2"]]);var _e=be,we=n(652),ke=n(870),ve=n(5661),ge=n(6572),ye=n(1888);const We=e=>((0,a.dD)("data-v-e6642d38"),e=e(),(0,a.Cn)(),e),Ue=["src"],Ce=We((()=>(0,a._)("div",{class:"text line-height-lg"},[(0,a._)("p",null,[(0,a.Uk)(" Thanks for visiting! Send a connection request on "),(0,a._)("a",{href:"https://www.linkedin.com/in/michaelkobetss/",target:"_blank",title:"Michael Kobets LinkedIn"},"LinkedIn"),(0,a.Uk)(", contact me on "),(0,a._)("a",{href:"https://t.me/michaelkobetss",target:"_blank",title:"Michael Kobets Telegram"},"Telegram"),(0,a.Uk)(", or "),(0,a._)("a",{href:"mailto:michaelkobetss@gmail.com",title:"michaelkobetss@gmail.com"},"send me an email"),(0,a.Uk)(". ")])],-1)));function je(e,t,n,o,l,i){return(0,a.wg)(),(0,a.j4)(c.K,{"fill-height":"",fluid:"",style:{"min-height":"100vh"}},{default:(0,a.w5)((()=>[(0,a.Wm)(u.o,{align:"center",justify:"center"},{default:(0,a.w5)((()=>[(0,a.Wm)(d.D,{cols:"12",md:"6"},{default:(0,a.w5)((()=>[(0,a.Wm)(ve._,{class:"card"},{default:(0,a.w5)((()=>[(0,a.Wm)(ge.E,{class:"card-title"},{default:(0,a.w5)((()=>[(0,a.Uk)("Let's Connect")])),_:1}),(0,a.Wm)(ye.Z,null,{default:(0,a.w5)((()=>[(0,a.Wm)(we.V,{class:"avatar"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:l.PhotoCV,alt:"PhotoCV"},null,8,Ue)])),_:1}),Ce,(0,a.Wm)(u.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(ke.T,{href:"https://www.linkedin.com/in/michaelkobetss/",target:"_blank",title:"Michael Kobets LinkedIn",class:"connect-button",rounded:""},{default:(0,a.w5)((()=>[(0,a.Wm)(f.t,{left:""},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-linkedin")])),_:1}),(0,a.Uk)("Connect on LinkedIn ")])),_:1})])),_:1}),(0,a.Wm)(d.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(ke.T,{href:"https://t.me/michaelkobetss",target:"_blank",title:"Michael Kobets Telegram",class:"connect-button telegram-button",rounded:""},{default:(0,a.w5)((()=>[(0,a.Wm)(f.t,{left:""},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-telegram")])),_:1}),(0,a.Uk)("Contact on Telegram ")])),_:1})])),_:1}),(0,a.Wm)(d.D,{cols:"12"},{default:(0,a.w5)((()=>[(0,a.Wm)(ke.T,{href:"mailto:michaelkobetss@gmail.com",title:"michaelkobetss@gmail.com",class:"connect-button email-button",rounded:""},{default:(0,a.w5)((()=>[(0,a.Wm)(f.t,{left:""},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-email")])),_:1}),(0,a.Uk)("Contact via Email ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var Te={name:"ContactTab",data(){return{PhotoCV:n(7385)}}};const Oe=(0,w.Z)(Te,[["render",je],["__scopeId","data-v-e6642d38"]]);var xe=Oe,Ie=n(977),De=n(6573),Me=n(4286);const Pe={class:"project-carousel"},Ae={class:"d-flex fill-height justify-center align-center"},Se={class:"text-h2"},Ee=["src","alt"];function Le(e,t,n,o,l,i){return(0,a.wg)(),(0,a.iD)("div",Pe,[(0,a.Wm)(Ie.k,{height:"400","show-arrows":"","hide-delimiter-background":""},{prev:(0,a.w5)((({props:e})=>[(0,a.Wm)(ke.T,{variant:"elevated",onClick:e.onClick},{default:(0,a.w5)((()=>[(0,a.Wm)(f.t,{left:""},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-arrow-left")])),_:1})])),_:2},1032,["onClick"])])),next:(0,a.w5)((({props:e})=>[(0,a.Wm)(ke.T,{variant:"elevated",onClick:e.onClick},{default:(0,a.w5)((()=>[(0,a.Wm)(f.t,{right:""},{default:(0,a.w5)((()=>[(0,a.Uk)("mdi-arrow-right")])),_:1})])),_:2},1032,["onClick"])])),default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.slides,((e,t)=>((0,a.wg)(),(0,a.j4)(De.f,{key:t},{default:(0,a.w5)((()=>[(0,a.Wm)(Me.C,{height:"100%"},{default:(0,a.w5)((()=>[(0,a._)("div",Ae,[(0,a._)("div",Se,[(0,a._)("img",{src:e.picture,alt:e.name},null,8,Ee),(0,a.Uk)(" "+(0,s.zw)(e.name)+" ",1),(0,a._)("p",null,(0,s.zw)(e.description),1)])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])}var Ke={name:"ProjectCarousel",data(){return{colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],slides:[{picture:"path_to_picture_1",name:"First",description:"Description for the first slide."},{picture:"path_to_picture_2",name:"Second",description:"Description for the second slide."},{picture:"path_to_picture_3",name:"Third",description:"Description for the third slide."},{picture:"path_to_picture_4",name:"Fourth",description:"Description for the fourth slide."}]}}};const Fe=(0,w.Z)(Ke,[["render",Le],["__scopeId","data-v-17e779f4"]]);var He=Fe;const Ve=[{path:"/",redirect:"/about"},{path:"/about",component:_e},{path:"/contact",component:xe},{path:"/experience",component:He}],Ze=(0,F.p7)({history:(0,F.r5)(),routes:Ve});var ze=Ze;E();const Ne=(0,o.ri)(P);Ne.use(S).use(K).use(ze).mount("#app")},7385:function(e,t,n){e.exports=n.p+"img/PhotoCV.3fc3e03f.jpg"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,l){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],l=e[u][2];for(var r=!0,s=0;s<o.length;s++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(r=!1,l<i&&(i=l));if(r){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[o,a,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"===typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"===typeof o.then)return o}var l=Object.create(null);n.r(l);var i={};e=e||[null,t({}),t([]),t(t)];for(var r=2&a&&o;"object"==typeof r&&!~e.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(e){i[e]=function(){return o[e]}}));return i["default"]=function(){return o},n.d(l,i),l}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.8bacb2c3.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="personalwebsite:";n.l=function(o,a,l,i){if(e[o])e[o].push(a);else{var r,s;if(void 0!==l)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+l){r=d;break}}r||(s=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",t+l),r.src=o),e[o]=[a];var f=function(t,n){r.onerror=r.onload=null,clearTimeout(m);var a=e[o];if(delete e[o],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=f.bind(null,r.onerror),r.onload=f.bind(null,r.onload),s&&document.head.appendChild(r)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var l=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=l);var i=n.p+n.u(t),r=new Error,s=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var l=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;r.message="Loading chunk "+t+" failed.\n("+l+": "+i+")",r.name="ChunkLoadError",r.type=l,r.request=i,a[1](r)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,l,i=o[0],r=o[1],s=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(s)var u=s(n)}for(t&&t(o);c<i.length;c++)l=i[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},o=self["webpackChunkpersonalwebsite"]=self["webpackChunkpersonalwebsite"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7195)}));o=n.O(o)})();
//# sourceMappingURL=app.0b1da1ed.js.map