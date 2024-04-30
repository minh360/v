(function(){var e={7735:function(e,t,n){const a=n(3122);e.exports={getPlayer:async function(e){return await a.request({method:"POST",url:"https://vxmm.onrender.com/auth/"+e,headers:{Authorization:"token"},timeout:1e3})},getInforPlayer:async function(e){return await a.request({method:"POST",url:"https://vxmm.onrender.com/auth/sign_in",headers:{Authorization:"token"},data:{ingame:e},timeout:1e3})},checkExist:async function(e){let t=!1;return await a.request({method:"POST",url:"https://vxmm.onrender.com/auth/sign_up/check",headers:{Authorization:"token"},data:{ingame:e},timeout:1e3}).then((e=>{e.data&&(t=!0)})),await a.request({method:"POST",url:"https://vxmm.onrender.com/bot/check",headers:{Authorization:"token"},data:{ingame:e},timeout:1e3}).then((e=>{e.data&&(t=!0)})),await a.request({method:"POST",url:"https://vxmm.onrender.com/bot_create/check",headers:{Authorization:"token"},data:{ingame:e},timeout:1e3}).then((e=>{e.data&&(t=!0)})),t},addNewAccount:function(e,t){return a.request({method:"POST",url:"https://vxmm.onrender.com/auth/sign_up",headers:{Authorization:"token"},data:{ingame:e,password:t},timeout:1e3})},changeCoinPlayer:function(e,t){return a.request({method:"PUT",url:"https://vxmm.onrender.com/auth/change_coin/"+e,headers:{Authorization:"token"},data:{coin:t},timeout:1e3})},getAllBot:function(){return a.request({method:"GET",url:"https://vxmm.onrender.com/bot",headers:{Authorization:"token"},timeout:1e3})},changeCoinBot:function(e,t){return a.request({method:"PUT",url:"https://vxmm.onrender.com/bot/change_coin/"+e,headers:{Authorization:"token"},data:{coin:t},timeout:1e3})},getAllBotCreate:function(){return a.request({method:"GET",url:"https://vxmm.onrender.com/bot_create/getAll",headers:{Authorization:"token"},timeout:1e3})},changeCoinBotCreate:function(e,t){return a.request({method:"PUT",url:"https://vxmm.onrender.com/bot_create/change_coin/"+e,headers:{Authorization:"token"},data:{coin:t},timeout:1e3})},addBotCreate:function(e){return a.request({method:"PUT",url:"https://vxmm.onrender.com/bot_create/",headers:{Authorization:"token"},data:{ingame:e.ingame,id_boss:e.id_boss,ingame_boss:e.ingame_boss},timeout:1e3})}}},4641:function(e,t,n){"use strict";n.d(t,{s:function(){return tt}});var a=n(5130),o=n(6768),l=n(4232),i=n(144),u=n(7735);const s={class:"w-full h-full text-white"},r={class:"rounded px-8 pt-6 pb-8 mb-4 h-full flex flex-col"},c={class:"mb-4"},d=(0,o.Lk)("label",{class:"block text-sm font-bold mb-2",for:"username"}," Ingame ",-1),p={class:"mb-6"},v=(0,o.Lk)("label",{class:"block text-sm font-bold mb-2",for:"password"}," Mật khẩu ",-1),h={key:0},m={class:"flex items-center justify-center"};var x={__name:"SignIn",setup(e){const t=(0,i.KR)(""),n=(0,i.KR)(""),x=(0,i.KR)(""),g=()=>{let e=/^[a-z\d]+$/;""==t.value?x.value="Vui lòng nhập Ingame!!!":t.value.length<6||t.value.length>10?x.value="Độ dài Ingame phải từ 6 đến 10 kí tự":""==n.value?x.value="Vui lòng nhập Password!!!":e.test(t.value)?x.value="":x.value="Ingame phải có kí tự chữ, số và không có dấu, kí tự đặc biệt!!!"},k=async()=>{g(),""===x.value&&await(0,u.getInforPlayer)(t.value).then((e=>{console.log(e),x.value="Đăng nhập thành công tài khoản "+t.value,sessionStorage.setItem("id_player",e.data._id),sessionStorage.setItem("ingame_client",e.data.ingame),tt.emit("updateChat",{alert:e.data.ingame+" đã tham gia chat"}),setTimeout((()=>location.reload()),2e3)})).catch((e=>{x.value="Tài khoản hoặc mật khẩu không chính xác",console.log(e.response.data)}))};return(e,i)=>((0,o.uX)(),(0,o.CE)("div",s,[(0,o.Lk)("form",r,[(0,o.Lk)("div",c,[d,(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Ingame"},null,512),[[a.Jo,t.value]])]),(0,o.Lk)("div",p,[v,(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>n.value=e),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************"},null,512),[[a.Jo,n.value]])]),""!=x.value?((0,o.uX)(),(0,o.CE)("p",h,(0,l.v_)(x.value),1)):(0,o.Q3)("",!0),(0,o.Lk)("div",m,[(0,o.Lk)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:i[2]||(i[2]=e=>k())}," Đăng nhập ")])])]))}};const g=x;var k=g;const b={class:"w-full h-full text-white"},f={class:"rounded px-8 pt-6 pb-8 mb-4 h-full flex flex-col"},_={class:"mb-4"},y=(0,o.Lk)("label",{class:"block text-sm font-bold mb-2",for:"username"}," Ingame ",-1),w={class:"mb-6"},L=(0,o.Lk)("label",{class:"block text-sm font-bold mb-2",for:"password"}," Mật khẩu ",-1),C={key:0},S={class:"flex items-center justify-center"};var E={__name:"SignUp",setup(e){const t=(0,i.KR)(""),n=(0,i.KR)(""),s=(0,i.KR)(""),r=()=>{let e=/^[a-z\d]+$/;""==t.value?s.value="Vui lòng nhập Ingame!!!":t.value.length<6||t.value.length>10?s.value="Độ dài Ingame phải từ 6 đến 10 kí tự":""==n.value?s.value="Vui lòng nhập Password!!!":e.test(t.value)?s.value="":s.value="Ingame phải có kí tự chữ, số và không có dấu, kí tự đặc biệt!!!"},c=async()=>{if(r(),""===s.value){let e;await(0,u.checkExist)(t.value).then((e=>{s.value=e?"Ingame đã tồn tại":""})).catch((e=>console.log(e.response.data))),e||await(0,u.addNewAccount)(t.value,n.value).then((e=>{s.value="Đăng ký thành công"})).catch((e=>console.log(e.response.data)))}};return(e,i)=>((0,o.uX)(),(0,o.CE)("div",b,[(0,o.Lk)("form",f,[(0,o.Lk)("div",_,[y,(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Ingame"},null,512),[[a.Jo,t.value]])]),(0,o.Lk)("div",w,[L,(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>n.value=e),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************"},null,512),[[a.Jo,n.value]])]),""!=s.value?((0,o.uX)(),(0,o.CE)("p",C,(0,l.v_)(s.value),1)):(0,o.Q3)("",!0),(0,o.Lk)("div",S,[(0,o.Lk)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:i[2]||(i[2]=e=>c())}," Đăng ký ")])])]))}};const I=E;var R=I;const j={class:"backdrop-blur w-full flex justify-center items-center uppercase"},K={class:"absoluted top-0 mt-[100px] text-white border border-1 border-[black] rounded-[25px] w-[600px] h-auto mx-auto"},X={class:"uppercase p-[20px] w-full h-[60px] flex justify-around text-[35px]"},N={class:"mt-[30px] h-full border border-0 rounded-[25px]"};var T={__name:"Lobby",setup(e){const t={SIGN_IN:1,SIGN_UP:2},n=(0,i.KR)(t.SIGN_UP),a=e=>{n.value=e};return(e,i)=>((0,o.uX)(),(0,o.CE)("div",j,[(0,o.Lk)("div",K,[(0,o.Lk)("div",X,[(0,o.Lk)("div",{class:(0,l.C4)(["cursor",{active:t.SIGN_UP==n.value}]),onClick:i[0]||(i[0]=e=>a(t.SIGN_UP))}," Đăng ký ",2),(0,o.Lk)("div",{class:(0,l.C4)(["cursor",{active:t.SIGN_IN==n.value}]),onClick:i[1]||(i[1]=e=>a(t.SIGN_IN))}," Đăng nhập ",2)]),(0,o.Lk)("div",N,[t.SIGN_IN==n.value?((0,o.uX)(),(0,o.Wv)(k,{key:0})):(0,o.Q3)("",!0),t.SIGN_UP==n.value?((0,o.uX)(),(0,o.Wv)(R,{key:1})):(0,o.Q3)("",!0)])])]))}},A=n(1241);const P=(0,A.A)(T,[["__scopeId","data-v-49f3c7d8"]]);var Q=P;const V=e=>((0,o.Qi)("data-v-6bf4e61a"),e=e(),(0,o.jt)(),e),z={class:"w-[60vw] text-[20px] rounded-[50px] font-bold text-center bg-[rosybrown]"},U={class:"marquee mx-[20px]"},O={class:"flex gap-[5px] flex-col items-center"},W=V((()=>(0,o.Lk)("div",{class:"text-[darkred] text-[30px] uppercase"},"Vòng quay may mắn ",-1))),B={class:"text-[pink]"},q={class:"text-[orange] text-[48px]"},J=V((()=>(0,o.Lk)("div",{class:"text-[orange] font-bold"},"Tỉ lệ thắng",-1))),G={class:"percent-wrapper"},D={class:"mt-[20px]"},F=V((()=>(0,o.Lk)("div",null,null,-1))),M={class:"flex flex-row gap-[20px]"},H={key:2,class:"flex mb-[20px]"};var Y={__name:"Play",setup(e){const t=(0,o.EW)((()=>({margin:"-2px 0 0 0",backgroundColor:"red",width:c.value+"%",height:"25px",borderRadius:100===c.value?"25px":"15px 0 0 15px",position:"relative",transition:"width 1s"}))),n=(0,i.KR)("Chào mừng đến với vòng xoay may rủi"),s=(0,i.KR)(0),r=(0,i.KR)(sessionStorage.getItem("ingame_client")),c=(0,i.KR)(0),d=(0,i.KR)(0),p=(0,i.KR)(0),v=(0,i.KR)(0),h=(0,i.KR)(0),m=(0,i.KR)(0),x=(0,i.KR)(0),g=(0,i.KR)(0),k=(0,i.KR)(0),b=(0,o.EW)((()=>{const e=Math.floor(s.value/60%60);return e<10?"0"+e:e})),f=(0,o.EW)((()=>{const e=Math.floor(s.value%60);return e<10?"0"+e:e})),_=(0,i.KR)(!1),y=e=>{_.value=e},w=(0,i.KR)(sessionStorage.getItem("id_player")),L=()=>{let e=/^\d+$/;s.value<=9?alert("Vxmm đã được khóa lúc 10s"):d.value-k.value<0?alert("Số xu không đủ chơi"):e.test(k.value)?k.value+v.value>5e7||k.value<1e6?alert("Vui lòng đặt theo quy định từ 1.000.000 coin đến 50.000.000 coin"):(tt.emit("play",{id_player:w.value,ingame:r.value,coinJoin:k.value,coin:d.value}),k.value=0,_.value=!1):alert("Vui lòng nhập số đàng hoàng :)))")},C=async()=>{await(0,u.getPlayer)(w.value).then((e=>{d.value=e.data.coin}))},S=e=>{let t="";const n=e.toString().length;for(let a=1;a<=n;a++)t=e.toString()[n-a]+t,a%3===0&&a!==n&&(t=","+t);return t};return tt.on("letgo",(e=>{s.value=e})),tt.on("reload",(()=>{tt.emit("justDoIt",w.value)})),tt.on("updatePlayerPlay",(e=>{p.value=e[1],h.value=e[2],v.value=e[0].coinJoin,c.value=e[0].percent})),tt.on("updateCoin",(async()=>{await C()})),tt.on("sendLastWin",(e=>{x.value=e.ingame,m.value=e.coinJoin,g.value=e.coinWin,n.value="Chúc mừng "+x.value+" đã chiến thắng "+S(g.value)+" xu trong vòng quay may rủi"})),(0,o.sV)((async()=>{setTimeout(tt.emit("updateLastWin"),500),await C()})),(e,i)=>{const u=(0,o.g2)("marquee");return(0,o.uX)(),(0,o.CE)("div",z,[(0,o.Lk)("div",U,[(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,l.v_)(n.value),1)])),_:1})]),(0,o.Lk)("div",O,[W,(0,o.Lk)("div",B,"Bạn đang có "+(0,l.v_)(S(d.value))+" xu",1),(0,o.Lk)("div",q,[(0,o.bo)((0,o.Lk)("span",null,(0,l.v_)(b.value)+":",513),[[a.aG,b.value>0]]),(0,o.Lk)("span",null,[(0,o.eW)((0,l.v_)(f.value),1),(0,o.bo)((0,o.Lk)("span",null,"s",512),[[a.aG,b.value<=0]])])]),J,(0,o.Lk)("div",G,[(0,o.Lk)("div",{style:(0,l.Tr)(t.value)},null,4),(0,o.Lk)("div",null,(0,l.v_)(c.value)+" %",1)]),(0,o.Lk)("div",D,(0,l.v_)(S(p.value))+" xu",1),(0,o.Lk)("div",null,"Số người tham gia: "+(0,l.v_)(h.value),1),(0,o.Lk)("div",null,"Bạn đã tham gia: "+(0,l.v_)(S(v.value)),1),F,(0,o.Lk)("div",null,[(0,o.Lk)("div",null,"Người vừa chiến thắng: "+(0,l.v_)(x.value?x.value:"Chưa có thông tin"),1),(0,o.Lk)("div",null,"Số coin thắng: "+(0,l.v_)(g.value?S(g.value):"Chưa có thông tin"),1),(0,o.Lk)("div",null,"Số coin tham gia: "+(0,l.v_)(m.value?S(m.value):"Chưa có thông tin"),1)]),(0,o.Lk)("div",M,[_.value?(0,o.bo)(((0,o.uX)(),(0,o.CE)("input",{key:0,type:"number",class:"pl-[20px] w-[200px] rounded h-[50px]","onUpdate:modelValue":i[0]||(i[0]=e=>k.value=e),placeholder:"Tham gia từ 1tr đến 50tr",onKeyup:i[1]||(i[1]=(0,a.jR)((e=>L()),["enter"]))},null,544)),[[a.Jo,k.value]]):(0,o.Q3)("",!0),w.value&&!_.value?((0,o.uX)(),(0,o.CE)("button",{key:1,onClick:i[2]||(i[2]=e=>y(!0)),class:"w-[200px] mb-[20px]"},"Tham gia")):(0,o.Q3)("",!0),w.value&&_.value?((0,o.uX)(),(0,o.CE)("div",H,[(0,o.Lk)("button",{class:"cursor w-[200px]",onClick:i[3]||(i[3]=e=>y(!1))},"Đóng")])):(0,o.Q3)("",!0)])])])}}};const $=(0,A.A)(Y,[["__scopeId","data-v-6bf4e61a"]]);var Z=$;n(4114);const ee=e=>((0,o.Qi)("data-v-00b09090"),e=e(),(0,o.jt)(),e),te={class:"bg-[gray] w-full h-[620px] rounded-[25px] relative py-[10px]"},ne=ee((()=>(0,o.Lk)("div",{class:"text-[30px] font-bold text-center"},"Chat",-1)));var ae={__name:"Chat",emits:"oncloseChat",setup(e,{emit:t}){const n=t,u=(0,i.KR)(null),s=(0,i.KR)(""),r=(0,i.KR)([]),c=(0,i.KR)(sessionStorage.getItem("ingame_client")),d=(0,i.KR)(null==JSON.parse(sessionStorage.getItem("list_chat"))?[]:JSON.parse(sessionStorage.getItem("list_chat"))),p=e=>{(r||1==e)&&setTimeout((()=>{const e=document.getElementById("data");e.scrollTop=e.scrollHeight}),500)},v=()=>{d.value.push({ingame:sessionStorage.getItem("ingame_client"),message:s.value}),tt.emit("updateChat",{ingame:sessionStorage.getItem("ingame_client"),message:s.value}),p(!0),s.value="",sessionStorage.setItem("list_chat",JSON.stringify(d.value))};tt.on("sendMessage",(e=>{d.value.push(e),p(),sessionStorage.setItem("list_chat",JSON.stringify(d.value))}));const h=({target:{scrollTop:e,clientHeight:t,scrollHeight:n}})=>{r.value=e+t>=n};return(0,o.sV)((()=>{u.value.addEventListener("scroll",h),p()})),(e,t)=>((0,o.uX)(),(0,o.CE)("div",te,[(0,o.Lk)("div",{onClick:t[0]||(t[0]=e=>n("closeChat")),class:"text-[30px] cursor absolute right-0 px-[50px]"},"X"),ne,(0,o.Lk)("div",{ref_key:"data",ref:u,id:"data",class:"flex flex-col px-[50px] text-[20px] cursor"},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(d.value,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{key:t},[(0,o.Lk)("div",{class:(0,l.C4)(["text-left text-[violet]",{right:e.ingame==c.value}])},(0,l.v_)(e.ingame),3),(0,o.Lk)("div",{class:(0,l.C4)(["text-left text-[gray]",{right:e.ingame==c.value}])},(0,l.v_)(e.message),3),e.alert?((0,o.uX)(),(0,o.CE)("div",{key:0,class:(0,l.C4)(["text-left text-[red]",{right:e.ingame==c.value}])},(0,l.v_)(e.alert),3)):(0,o.Q3)("",!0)])))),128))],512),(0,o.bo)((0,o.Lk)("input",{type:"text",class:"w-[500px] mt-[10px] px-[20px] rounded h-[40px]","onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e),placeholder:"Nhập tin nhắn",onKeyup:t[2]||(t[2]=(0,a.jR)((e=>v()),["enter"]))},null,544),[[a.Jo,s.value]])]))}};const oe=(0,A.A)(ae,[["__scopeId","data-v-00b09090"]]);var le=oe;const ie={FREE:0,TRADE:1,BUSY:2,DONATE:3,SEND:4,SEND_WIN:5},ue=e=>((0,o.Qi)("data-v-23e72bac"),e=e(),(0,o.jt)(),e),se={class:"rounded-[10px] h-[200px] bg-[white] relative"},re={class:"text-center font-bold text-[red] text-[25px]"},ce={key:0,class:"flex flex-col items-center w-full gap-[10px]"},de={key:0},pe={class:"flex flex-row gap-[5px]"},ve={key:1,class:"flex flex-col items-center justify-center mt-[10px] h-full w-full gap-[10px]"},he={key:2,class:"flex flex-col items-center w-full gap-[10px]"},me={key:3,class:"flex flex-col items-center px-[20px] font-bold w-full gap-[10px]"},xe=ue((()=>(0,o.Lk)("p",{class:"text-[red] whitespace-pre-line"},"Trạng thái :",-1))),ge=ue((()=>(0,o.Lk)("p",{class:"text-[red] whitespace-pre-line"},"Số xu đặt :",-1))),ke=ue((()=>(0,o.Lk)("p",{class:"text-[red] whitespace-pre-line"},"Tỉ lệ thắng :",-1))),be={key:4,class:"font-bold text-[30px] mt-[50px]"},fe={key:5,class:"font-bold text-[30px] mt-[50px]"},_e={key:6,class:"font-bold text-[30px] mt-[50px]"},ye={key:7,class:"flex flex-col items-center px-[20px] font-bold w-full h-[50%] gap-[10px]"},we=ue((()=>(0,o.Lk)("p",{class:"text-[green]"},"Đã win rồi hãy giao dịch để lấy xu",-1))),Le={class:"flex flex-row justify-around w-full mt-[20px]"};var Ce={__name:"Bot",props:{zin:Number,status:Number,id_boss:String,coin:Number,time_join:Number,coin_join:Number,status_join:Boolean,percent_join:Number,id_thue:String,id_player:String,ingame:String,coin_win:String},setup(e){const t=e,n=(0,i.KR)(""),s=e=>{let t="";const n=e.toString().length;for(let a=1;a<=n;a++)t=e.toString()[n-a]+t,a%3===0&&a!==n&&(t=","+t);return t},r=(e,n)=>{tt.emit("changeStatus",{status:e,index:n,id_thue:t.id_player})},c=e=>{n.value<=t.coin?(tt.emit("send",{coin:n.value,index:e}),n.value=""):alert("Xu không đủ boss ơi")},d=async e=>{t.time_join<10||t.time_join>120?alert("Thời gian từ 11 đến 120 bạn ơi"):t.coin_join>5e7||t.coin_join<1e6?alert("Đặt từ 1tr đến 50tr bạn ơi"):await(0,u.getPlayer)(t.id_thue).then((n=>{t.coin_join>n.data.coin?alert("Không đủ xu mà đòi chơi"):(t.coin+=Number(t.coin_join),t.status=ie.BUSY,t.id_thue=t.id_player,tt.emit("playBot",{item:t,index:e}))}))},p=e=>{tt.emit("keepCoin",{coin:t.lastCoinWin,index:e})},v=e=>{tt.emit("sendWin",{coin:t.lastCoinWin,index:e})};return(u,h)=>((0,o.uX)(),(0,o.CE)("div",se,[(0,o.Lk)("div",re,(0,l.v_)(t.ingame),1),t.status==(0,i.R1)(ie).FREE?((0,o.uX)(),(0,o.CE)("div",ce,[t.id_boss==t.id_player?((0,o.uX)(),(0,o.CE)("div",de,(0,l.v_)(s(t.coin))+" xu",1)):(0,o.Q3)("",!0),(0,o.Lk)("div",pe,[(0,o.Lk)("button",{onClick:h[0]||(h[0]=t=>r((0,i.R1)(ie).TRADE,e.zin)),class:"px-[10px]"},"Đặt"),t.id_boss==t.id_player&&0!=t.coin?((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:h[1]||(h[1]=t=>r((0,i.R1)(ie).SEND,e.zin)),class:"px-[10px]"},"Rút")):(0,o.Q3)("",!0)])])):(0,o.Q3)("",!0),t.status==(0,i.R1)(ie).SEND&&t.id_boss==t.id_player?((0,o.uX)(),(0,o.CE)("div",ve,[(0,o.bo)((0,o.Lk)("input",{type:"number",class:"w-[50%] border-1 border px-[10px] rounded h-[40px]","onUpdate:modelValue":h[2]||(h[2]=e=>n.value=e),placeholder:"Rút xu",onKeyup:h[3]||(h[3]=(0,a.jR)((t=>c(e.zin)),["enter"]))},null,544),[[a.Jo,n.value]]),(0,o.Lk)("button",{onClick:h[4]||(h[4]=t=>c(e.zin)),class:"w-[30%]"},"Rút xu")])):(0,o.Q3)("",!0),t.status==(0,i.R1)(ie).TRADE&&t.id_thue==t.id_player?((0,o.uX)(),(0,o.CE)("div",he,[(0,o.bo)((0,o.Lk)("input",{type:"number",class:"w-[50%] border-1 border px-[10px] rounded h-[40px]","onUpdate:modelValue":h[5]||(h[5]=e=>t.time_join=e),placeholder:"Nhập số giây"},null,512),[[a.Jo,t.time_join]]),(0,o.bo)((0,o.Lk)("input",{type:"number",class:"w-[50%] border-1 border px-[10px] rounded h-[40px]","onUpdate:modelValue":h[6]||(h[6]=e=>t.coin_join=e),placeholder:"Nhập số xu",onKeyup:h[7]||(h[7]=(0,a.jR)((t=>d(e.zin)),["enter"]))},null,544),[[a.Jo,t.coin_join]]),(0,o.Lk)("button",{onClick:h[8]||(h[8]=t=>d(e.zin)),class:"w-[30%]"},"Giao dịch")])):(0,o.Q3)("",!0),t.status==(0,i.R1)(ie).BUSY&&t.id_thue==t.id_player?((0,o.uX)(),(0,o.CE)("div",me,[(0,o.Lk)("p",null,[xe,(0,o.eW)(" "+(0,l.v_)(t.status_join?"Đã đặt":"Chưa đặt"),1)]),(0,o.Lk)("p",null,[ge,(0,o.eW)(" "+(0,l.v_)(s(t.coin_join))+" xu ",1)]),(0,o.Lk)("p",null,[ke,(0,o.eW)(" "+(0,l.v_)(t.percent_join.toFixed(5))+" %",1)])])):(0,o.Q3)("",!0),t.status==(0,i.R1)(ie).TRADE&&t.id_thue!=t.id_player?((0,o.uX)(),(0,o.CE)("div",be," Đang giao dịch ... ")):(0,o.Q3)("",!0),t.status==(0,i.R1)(ie).SEND_WIN&&t.id_thue!=t.id_player?((0,o.uX)(),(0,o.CE)("div",fe," Đang giao xu win . . . ")):(0,o.Q3)("",!0),t.id_thue!=t.id_player&&t.status==(0,i.R1)(ie).BUSY?((0,o.uX)(),(0,o.CE)("div",_e," Đã có khách thuê ạ ")):(0,o.Q3)("",!0),t.status==(0,i.R1)(ie).SEND_WIN&&t.id_thue==t.id_player?((0,o.uX)(),(0,o.CE)("div",ye,[we,(0,o.Lk)("p",null,"Win : "+(0,l.v_)(s(t.coin_win))+" xu",1),(0,o.Lk)("div",Le,[(0,o.Lk)("button",{class:"w-[50%]",onClick:h[9]||(h[9]=t=>v(e.zin))},"Giao dịch"),t.id_boss==t.id_thue?((0,o.uX)(),(0,o.CE)("button",{key:0,class:"w-[40%]",onClick:h[10]||(h[10]=t=>p(e.zin))},"Giữ xu")):(0,o.Q3)("",!0)])])):(0,o.Q3)("",!0)]))}};const Se=(0,A.A)(Ce,[["__scopeId","data-v-23e72bac"]]);var Ee=Se;const Ie=e=>((0,o.Qi)("data-v-34c525d6"),e=e(),(0,o.jt)(),e),Re={class:"bg-[olive] w-full h-[620px] rounded-[25px] px-[20px] py-[10px]"},je=Ie((()=>(0,o.Lk)("div",{class:"text-[30px] font-bold text-center"},"Khu thuê bot",-1))),Ke={class:"grid grid-cols-3 w-full gap-[50px]",id:"bot"},Xe={class:"flex flex-col items-center w-full gap-[50px] my-[50px]"},Ne=["onUpdate:modelValue"],Te=["onClick"],Ae=["onClick"];var Pe={__name:"Villager",emits:"oncloseVillager",setup(e,{emit:t}){const n=(0,i.KR)([]),l=t,s=(0,i.KR)(sessionStorage.getItem("id_player")),r=(0,i.KR)(sessionStorage.getItem("ingame_client")),c=(0,i.KR)([]),d=e=>{n.value.splice(e,1)},p=()=>{n.value.unshift({ingame:"",mode:!0})},v=async(e,t)=>{await(0,u.checkExist)(e).then((n=>{if(n)alert("Ingame đã tồn tại");else{const n={ingame:e,id_boss:s.value,ingame_boss:r.value};tt.emit("addBotCreate",n),d(t)}}))};return tt.on("updateListBotCreate",(e=>{c.value=e})),(0,o.sV)((async()=>{setTimeout((()=>{tt.emit("loadListBotCreate")}),500)})),(e,t)=>((0,o.uX)(),(0,o.CE)("div",Re,[(0,o.Lk)("div",{onClick:t[0]||(t[0]=e=>l("closeVillager")),class:"text-[30px] cursor absolute right-0 px-[50px]"},"X"),je,(0,o.Lk)("div",Ke,[""!=n.value?((0,o.uX)(!0),(0,o.CE)(o.FK,{key:0},(0,o.pI)(n.value,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"rounded-[10px] h-[200px] bg-[white] relative",key:t},[(0,o.Lk)("div",Xe,[(0,o.bo)((0,o.Lk)("input",{type:"text",class:"w-[50%] border-1 border px-[10px] rounded h-[40px]","onUpdate:modelValue":t=>e.ingame=t,placeholder:"Tên bot"},null,8,Ne),[[a.Jo,e.ingame]]),(0,o.Lk)("div",{class:"text-[15px] cursor absolute top-[10px] right-0 px-[20px]",onClick:e=>d(t)},"X",8,Te),(0,o.Lk)("button",{onClick:n=>v(e.ingame,t),class:"w-[30%]"},"Tạo bot",8,Ae)])])))),128)):(0,o.Q3)("",!0),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(c.value,((e,t)=>((0,o.uX)(),(0,o.Wv)(Ee,{key:e,zin:t,status:e.status,id_boss:e.id_boss,coin:e.coin,time_join:e.time_join,coin_join:e.coin_join,status_join:e.status_join,percent_join:e.percent_join,id_thue:e.id_thue,id_player:s.value,ingame:e.ingame,coin_win:e.coin_win},null,8,["zin","status","id_boss","coin","time_join","coin_join","status_join","percent_join","id_thue","id_player","ingame","coin_win"])))),128))]),(0,o.Lk)("div",null,[(0,o.Lk)("button",{class:"w-[200px] mb-[20px] absolute bottom-0 ml-[-100px]",onClick:t[1]||(t[1]=e=>p())},"Tạo bot")])]))}};const Qe=(0,A.A)(Pe,[["__scopeId","data-v-34c525d6"]]);var Ve=Qe;const ze={class:"w-full h-full bg-[#3399FF] background"},Ue={key:0,class:"h-full w-full"},Oe={key:1},We={class:"h-[100px] px-[30px] text-white text-[30px] font-bold backdrop-blur flex flex-col justify-center items-end"},Be={class:"flex flex-row gap-[30px]"},qe={class:"text-[brown] absolute left-[50px]"},Je={class:"text-center flex justify-center"},Ge={class:"absolute flex w-[80%]"};var De={__name:"Home",setup(e){const t=(0,i.KR)(!!sessionStorage.getItem("id_player")),n=(0,i.KR)(sessionStorage.getItem("ingame_client")),a=(0,i.KR)(!1),u=(0,i.KR)(!1),s=()=>{sessionStorage.removeItem("id_player"),sessionStorage.removeItem("ingame_client"),location.reload()};return(e,i)=>((0,o.uX)(),(0,o.CE)("div",ze,[t.value?((0,o.uX)(),(0,o.CE)("div",Oe,[(0,o.Lk)("div",We,[(0,o.Lk)("div",Be,[(0,o.Lk)("span",qe,"Chào mừng bạn "+(0,l.v_)(n.value),1),(0,o.Lk)("span",{class:"cursor",onClick:i[0]||(i[0]=()=>u.value=!0)},"Làng"),(0,o.Lk)("span",{onClick:i[1]||(i[1]=()=>a.value=!0),class:"cursor"},"Chat"),(0,o.Lk)("span",{class:"cursor",onClick:i[2]||(i[2]=e=>s())},"Đăng xuất")])]),(0,o.Lk)("div",Je,[(0,o.Lk)("div",null,[(0,o.bF)(Z)]),(0,o.Lk)("div",Ge,[a.value?((0,o.uX)(),(0,o.Wv)(le,{key:0,onCloseChat:i[3]||(i[3]=()=>a.value=!1)})):(0,o.Q3)("",!0),u.value?((0,o.uX)(),(0,o.Wv)(Ve,{key:1,onCloseVillager:i[4]||(i[4]=()=>u.value=!1)})):(0,o.Q3)("",!0)])])])):((0,o.uX)(),(0,o.CE)("div",Ue,[(0,o.bF)(Q)]))]))}};const Fe=(0,A.A)(De,[["__scopeId","data-v-6d7009ba"]]);var Me=Fe,He={__name:"App",setup(e){return(e,t)=>((0,o.uX)(),(0,o.Wv)(Me))}};const Ye=He;var $e=Ye,Ze=n(7910);const et=(0,a.Ef)($e),tt=Ze.Ay.connect("https://vxmm.onrender.com",{secure:!0});tt.on("connect",(()=>{console.log("connect sucesss")})),et.mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,l){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],l=e[c][2];for(var u=!0,s=0;s<a.length;s++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(u=!1,l<i&&(i=l));if(u){e.splice(c--,1);var r=o();void 0!==r&&(t=r)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,o,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,l,i=a[0],u=a[1],s=a[2],r=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var c=s(n)}for(t&&t(a);r<i.length;r++)l=i[r],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},a=self["webpackChunkvxmm"]=self["webpackChunkvxmm"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(4641)}));a=n.O(a)})();
//# sourceMappingURL=app.33d9fd01.js.map