(function(){"use strict";var e={3471:function(e,t,o){o.d(t,{s:function(){return T}});var n=o(5130),l=o(6768),u=o(4232),a=o(144);const r={class:"w-full h-full text-white"},s={class:"rounded px-8 pt-6 pb-8 mb-4 h-full flex flex-col"},c={class:"mb-4"},i=(0,l.Lk)("label",{class:"block text-sm font-bold mb-2",for:"username"}," Ingame ",-1),d={class:"mb-6"},p=(0,l.Lk)("label",{class:"block text-sm font-bold mb-2",for:"password"}," Mật khẩu ",-1),f={key:0},v={class:"flex items-center justify-center"};var b={__name:"SignIn",setup(e){const t=(0,a.KR)(""),o=(0,a.KR)(""),b=(0,a.KR)(""),h=()=>{};return(e,a)=>((0,l.uX)(),(0,l.CE)("div",r,[(0,l.Lk)("form",s,[(0,l.Lk)("div",c,[i,(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Ingame"},null,512),[[n.Jo,t.value]])]),(0,l.Lk)("div",d,[p,(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>o.value=e),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************"},null,512),[[n.Jo,o.value]])]),""!=b.value?((0,l.uX)(),(0,l.CE)("p",f,(0,u.v_)(b.value),1)):(0,l.Q3)("",!0),(0,l.Lk)("div",v,[(0,l.Lk)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:a[2]||(a[2]=e=>h())}," Đăng nhập ")])])]))}};const h=b;var m=h;const k={class:"w-full h-full text-white"},x={class:"rounded px-8 pt-6 pb-8 mb-4 h-full flex flex-col"},g={class:"mb-4"},y=(0,l.Lk)("label",{class:"block text-sm font-bold mb-2",for:"username"}," Ingame ",-1),w={class:"mb-6"},L=(0,l.Lk)("label",{class:"block text-sm font-bold mb-2",for:"password"}," Mật khẩu ",-1),_={key:0},I={class:"flex items-center justify-center"};var S={__name:"SignUp",setup(e){const t=(0,a.KR)(""),o=(0,a.KR)(""),r=(0,a.KR)(""),s=()=>{let e=/^[a-z\d]+$/;""==t.value?r.value="Vui lòng nhập Ingame!!!":t.value.length<6||t.value.length>10?r.value="Độ dài Ingame phải từ 6 đến 10 kí tự":""==o.value?r.value="Vui lòng nhập Password!!!":e.test(t.value)?r.value="":r.value="Ingame phải có kí tự chữ, số và không có dấu, kí tự đặc biệt!!!"},c=async()=>{s(),""===r.value&&T.emit("checkExist",t.value)};return(e,a)=>((0,l.uX)(),(0,l.CE)("div",k,[(0,l.Lk)("form",x,[(0,l.Lk)("div",g,[y,(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Ingame"},null,512),[[n.Jo,t.value]])]),(0,l.Lk)("div",w,[L,(0,l.bo)((0,l.Lk)("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>o.value=e),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************"},null,512),[[n.Jo,o.value]])]),""!=r.value?((0,l.uX)(),(0,l.CE)("p",_,(0,u.v_)(r.value),1)):(0,l.Q3)("",!0),(0,l.Lk)("div",I,[(0,l.Lk)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:a[2]||(a[2]=e=>c())}," Đăng ký ")])])]))}};const C=S;var E=C;const N={class:"w-full h-full bg-[#3399FF] background"},O={class:"flex justify-center items-center h-full text-[50px] uppercase text-[blue]"},j={key:0,class:"absolute backdrop-blur w-full h-full top-0"},P={class:"mt-[100px] text-white border border-1 border-[black] rounded-[25px] w-[600px] h-auto mx-auto"},R={class:"uppercase p-[20px] w-full h-[60px] flex justify-around text-[35px]"},U={class:"mt-[30px] h-full border border-0 rounded-[25px]"};var G={__name:"Home",setup(e){const t={FREE:0,SIGN_IN:1,SIGN_UP:2},o=(0,a.KR)(t.FREE),n=e=>{o.value=e};return(e,a)=>((0,l.uX)(),(0,l.CE)("div",N,[(0,l.Lk)("div",O,[(0,l.Lk)("div",{class:"hover:bg-[#7195AF] cursor-pointer bg-opacity-0 rounded-[20px] border border-solid border-4 border-red-800 p-[10px]",onClick:a[0]||(a[0]=e=>n(t.SIGN_UP))}," Bắt đầu ")]),o.value!=t.FREE?((0,l.uX)(),(0,l.CE)("div",j,[(0,l.Lk)("div",P,[(0,l.Lk)("div",R,[(0,l.Lk)("div",{class:(0,u.C4)(["cursor-pointer font-bold",{active:t.SIGN_UP==o.value}]),onClick:a[1]||(a[1]=e=>n(t.SIGN_UP))}," Đăng ký ",2),(0,l.Lk)("div",{class:(0,u.C4)(["cursor-pointer font-bold",{active:t.SIGN_IN==o.value}]),onClick:a[2]||(a[2]=e=>n(t.SIGN_IN))}," Đăng nhập ",2)]),(0,l.Lk)("div",U,[t.SIGN_IN==o.value?((0,l.uX)(),(0,l.Wv)(m,{key:0})):(0,l.Q3)("",!0),t.SIGN_UP==o.value?((0,l.uX)(),(0,l.Wv)(E,{key:1})):(0,l.Q3)("",!0)])])])):(0,l.Q3)("",!0)]))}},X=o(1241);const F=(0,X.A)(G,[["__scopeId","data-v-acd6defe"]]);var K=F,V={__name:"App",setup(e){return(e,t)=>((0,l.uX)(),(0,l.Wv)(K))}};const M=V;var Q=M,A=o(7910);const J=(0,n.Ef)(Q),T=A.Ay.connect("http://localhost:3000",{secure:!0});J.mount("#app")}},t={};function o(n){var l=t[n];if(void 0!==l)return l.exports;var u=t[n]={exports:{}};return e[n].call(u.exports,u,u.exports,o),u.exports}o.m=e,function(){var e=[];o.O=function(t,n,l,u){if(!n){var a=1/0;for(i=0;i<e.length;i++){n=e[i][0],l=e[i][1],u=e[i][2];for(var r=!0,s=0;s<n.length;s++)(!1&u||a>=u)&&Object.keys(o.O).every((function(e){return o.O[e](n[s])}))?n.splice(s--,1):(r=!1,u<a&&(a=u));if(r){e.splice(i--,1);var c=l();void 0!==c&&(t=c)}}return t}u=u||0;for(var i=e.length;i>0&&e[i-1][2]>u;i--)e[i]=e[i-1];e[i]=[n,l,u]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,u,a=n[0],r=n[1],s=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(l in r)o.o(r,l)&&(o.m[l]=r[l]);if(s)var i=s(o)}for(t&&t(n);c<a.length;c++)u=a[c],o.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return o.O(i)},n=self["webpackChunkvxmm"]=self["webpackChunkvxmm"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(3471)}));n=o.O(n)})();
//# sourceMappingURL=app.0f39d902.js.map