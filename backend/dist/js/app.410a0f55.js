(function(){var e={7735:function(e,t,n){const a=n(3122);e.exports={getPlayer:async function(e){return await a.request({method:"POST",url:"https://vxmm.onrender.com/auth/"+e,headers:{Authorization:"token"},timeout:1e3})},getInforPlayer:async function(e){return await a.request({method:"POST",url:"https://vxmm.onrender.com/auth/sign_in",headers:{Authorization:"token"},data:{ingame:e},timeout:1e3})},checkExist:async function(e){let t=!1;return await a.request({method:"POST",url:"https://vxmm.onrender.com/auth/sign_up/check",headers:{Authorization:"token"},data:{ingame:e},timeout:1e3}).then((e=>{e.data&&(t=!0)})),await a.request({method:"POST",url:"https://vxmm.onrender.com/bot/check",headers:{Authorization:"token"},data:{ingame:e},timeout:1e3}).then((e=>{e.data&&(t=!0)})),await a.request({method:"POST",url:"https://vxmm.onrender.com/bot_create/check",headers:{Authorization:"token"},data:{ingame:e},timeout:1e3}).then((e=>{e.data&&(t=!0)})),t},addNewAccount:function(e,t){return a.request({method:"POST",url:"https://vxmm.onrender.com/auth/sign_up",headers:{Authorization:"token"},data:{ingame:e,password:t},timeout:1e3})},changeCoinPlayer:function(e,t){return a.request({method:"PUT",url:"https://vxmm.onrender.com/auth/change_coin/"+e,headers:{Authorization:"token"},data:{coin:t},timeout:1e3})},getAllBot:function(){return a.request({method:"GET",url:"https://vxmm.onrender.com/bot",headers:{Authorization:"token"},timeout:1e3})},changeCoinBot:function(e,t){return a.request({method:"PUT",url:"https://vxmm.onrender.com/bot/change_coin/"+e,headers:{Authorization:"token"},data:{coin:t},timeout:1e3})},getAllBotCreate:function(){return a.request({method:"GET",url:"https://vxmm.onrender.com/bot_create/getAll",headers:{Authorization:"token"},timeout:1e3})},changeCoinBotCreate:function(e,t){return a.request({method:"PUT",url:"https://vxmm.onrender.com/bot_create/change_coin/"+e,headers:{Authorization:"token"},data:{coin:t},timeout:1e3})},addBotCreate:function(e){return a.request({method:"PUT",url:"https://vxmm.onrender.com/bot_create/",headers:{Authorization:"token"},data:{ingame:e.ingame,id_boss:e.id_boss,ingame_boss:e.ingame_boss},timeout:1e3})}}},7047:function(e,t,n){"use strict";n.d(t,{s:function(){return Me}});var a=n(5130),o=n(6768),l=n(4232),i=n(144),u=n(7735);const s={class:"w-full h-full text-white"},r={class:"rounded px-8 pt-6 pb-8 mb-4 h-full flex flex-col"},c={class:"mb-4"},d=(0,o.Lk)("label",{class:"block text-sm font-bold mb-2",for:"username"}," Ingame ",-1),p={class:"mb-6"},v=(0,o.Lk)("label",{class:"block text-sm font-bold mb-2",for:"password"}," Mật khẩu ",-1),h={key:0},m={class:"flex items-center justify-center"};var x={__name:"SignIn",setup(e){const t=(0,i.KR)(""),n=(0,i.KR)(""),x=(0,i.KR)(""),g=()=>{let e=/^[a-z\d]+$/;""==t.value?x.value="Vui lòng nhập Ingame!!!":t.value.length<6||t.value.length>10?x.value="Độ dài Ingame phải từ 6 đến 10 kí tự":""==n.value?x.value="Vui lòng nhập Password!!!":e.test(t.value)?x.value="":x.value="Ingame phải có kí tự chữ, số và không có dấu, kí tự đặc biệt!!!"},b=async()=>{g(),""===x.value&&await(0,u.getInforPlayer)(t.value).then((e=>{e.data.password==n.value?(x.value="Đăng nhập thành công tài khoản "+t.value,sessionStorage.setItem("id_player",e.data._id),sessionStorage.setItem("ingame_client",e.data.ingame),setTimeout((()=>location.reload()),2e3)):x.value="Tài khoản hoặc mật khẩu không chính xác"})).catch((e=>{console.log(e.response.data)}))};return(e,i)=>((0,o.uX)(),(0,o.CE)("div",s,[(0,o.Lk)("form",r,[(0,o.Lk)("div",c,[d,(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Ingame"},null,512),[[a.Jo,t.value]])]),(0,o.Lk)("div",p,[v,(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>n.value=e),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************"},null,512),[[a.Jo,n.value]])]),""!=x.value?((0,o.uX)(),(0,o.CE)("p",h,(0,l.v_)(x.value),1)):(0,o.Q3)("",!0),(0,o.Lk)("div",m,[(0,o.Lk)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:i[2]||(i[2]=e=>b())}," Đăng nhập ")])])]))}};const g=x;var b=g;const k={class:"w-full h-full text-white"},f={class:"rounded px-8 pt-6 pb-8 mb-4 h-full flex flex-col"},_={class:"mb-4"},y=(0,o.Lk)("label",{class:"block text-sm font-bold mb-2",for:"username"}," Ingame ",-1),w={class:"mb-6"},L=(0,o.Lk)("label",{class:"block text-sm font-bold mb-2",for:"password"}," Mật khẩu ",-1),C={key:0},S={class:"flex items-center justify-center"};var E={__name:"SignUp",setup(e){const t=(0,i.KR)(""),n=(0,i.KR)(""),s=(0,i.KR)(""),r=()=>{let e=/^[a-z\d]+$/;""==t.value?s.value="Vui lòng nhập Ingame!!!":t.value.length<6||t.value.length>10?s.value="Độ dài Ingame phải từ 6 đến 10 kí tự":""==n.value?s.value="Vui lòng nhập Password!!!":e.test(t.value)?s.value="":s.value="Ingame phải có kí tự chữ, số và không có dấu, kí tự đặc biệt!!!"},c=async()=>{if(r(),""===s.value){let e;await(0,u.checkExist)(t.value).then((e=>{s.value=e?"Ingame đã tồn tại":""})).catch((e=>console.log(e.response.data))),e||await(0,u.addNewAccount)(t.value,n.value).then((e=>{s.value="Đăng ký thành công"})).catch((e=>console.log(e.response.data)))}};return(e,i)=>((0,o.uX)(),(0,o.CE)("div",k,[(0,o.Lk)("form",f,[(0,o.Lk)("div",_,[y,(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":i[0]||(i[0]=e=>t.value=e),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"username",type:"text",placeholder:"Ingame"},null,512),[[a.Jo,t.value]])]),(0,o.Lk)("div",w,[L,(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>n.value=e),class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************"},null,512),[[a.Jo,n.value]])]),""!=s.value?((0,o.uX)(),(0,o.CE)("p",C,(0,l.v_)(s.value),1)):(0,o.Q3)("",!0),(0,o.Lk)("div",S,[(0,o.Lk)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:i[2]||(i[2]=e=>c())}," Đăng ký ")])])]))}};const j=E;var R=j;const I={class:"backdrop-blur w-full flex justify-center items-center uppercase"},K={class:"absoluted top-0 mt-[100px] text-white border border-1 border-[black] rounded-[25px] w-[600px] h-auto mx-auto"},X={class:"uppercase p-[20px] w-full h-[60px] flex justify-around text-[35px]"},N={class:"mt-[30px] h-full border border-0 rounded-[25px]"};var T={__name:"Lobby",setup(e){const t={SIGN_IN:1,SIGN_UP:2},n=(0,i.KR)(t.SIGN_UP),a=e=>{n.value=e};return(e,i)=>((0,o.uX)(),(0,o.CE)("div",I,[(0,o.Lk)("div",K,[(0,o.Lk)("div",X,[(0,o.Lk)("div",{class:(0,l.C4)(["cursor",{active:t.SIGN_UP==n.value}]),onClick:i[0]||(i[0]=e=>a(t.SIGN_UP))}," Đăng ký ",2),(0,o.Lk)("div",{class:(0,l.C4)(["cursor",{active:t.SIGN_IN==n.value}]),onClick:i[1]||(i[1]=e=>a(t.SIGN_IN))}," Đăng nhập ",2)]),(0,o.Lk)("div",N,[t.SIGN_IN==n.value?((0,o.uX)(),(0,o.Wv)(b,{key:0})):(0,o.Q3)("",!0),t.SIGN_UP==n.value?((0,o.uX)(),(0,o.Wv)(R,{key:1})):(0,o.Q3)("",!0)])])]))}},P=n(1241);const A=(0,P.A)(T,[["__scopeId","data-v-49f3c7d8"]]);var z=A;const U=e=>((0,o.Qi)("data-v-6bf4e61a"),e=e(),(0,o.jt)(),e),V={class:"w-[60vw] text-[20px] rounded-[50px] font-bold text-center bg-[rosybrown]"},Q={class:"marquee mx-[20px]"},W={class:"flex gap-[5px] flex-col items-center"},O=U((()=>(0,o.Lk)("div",{class:"text-[darkred] text-[30px] uppercase"},"Vòng quay may mắn ",-1))),q={class:"text-[pink]"},B={class:"text-[orange] text-[48px]"},G=U((()=>(0,o.Lk)("div",{class:"text-[orange] font-bold"},"Tỉ lệ thắng",-1))),D={class:"percent-wrapper"},J={class:"mt-[20px]"},F=U((()=>(0,o.Lk)("div",null,null,-1))),M={class:"flex flex-row gap-[20px]"},Y={key:2,class:"flex mb-[20px]"};var $={__name:"Play",setup(e){const t=(0,o.EW)((()=>({margin:"-2px 0 0 0",backgroundColor:"red",width:c.value+"%",height:"25px",borderRadius:100===c.value?"25px":"15px 0 0 15px",position:"relative",transition:"width 1s"}))),n=(0,i.KR)("Chào mừng đến với vòng xoay may rủi"),s=(0,i.KR)(0),r=(0,i.KR)(sessionStorage.getItem("ingame_client")),c=(0,i.KR)(0),d=(0,i.KR)(0),p=(0,i.KR)(0),v=(0,i.KR)(0),h=(0,i.KR)(0),m=(0,i.KR)(0),x=(0,i.KR)(0),g=(0,i.KR)(0),b=(0,i.KR)(0),k=(0,o.EW)((()=>{const e=Math.floor(s.value/60%60);return e<10?"0"+e:e})),f=(0,o.EW)((()=>{const e=Math.floor(s.value%60);return e<10?"0"+e:e})),_=(0,i.KR)(!1),y=e=>{_.value=e},w=(0,i.KR)(sessionStorage.getItem("id_player")),L=()=>{let e=/^\d+$/;s.value<=9?alert("Vxmm đã được khóa lúc 10s"):d.value-b.value<0?alert("Số xu không đủ chơi"):e.test(b.value)?b.value+v.value>5e7||b.value<1e6?alert("Vui lòng đặt theo quy định từ 1.000.000 coin đến 50.000.000 coin"):(Me.emit("play",{id_player:w.value,ingame:r.value,coinJoin:b.value,coin:d.value}),b.value=0,_.value=!1):alert("Vui lòng nhập số đàng hoàng :)))")},C=async()=>{await(0,u.getPlayer)(w.value).then((e=>{d.value=e.data.coin}))},S=e=>{let t="";const n=e.toString().length;for(let a=1;a<=n;a++)t=e.toString()[n-a]+t,a%3===0&&a!==n&&(t=","+t);return t};return Me.on("letgo",(e=>{s.value=e})),Me.on("reload",(()=>{Me.emit("justDoIt",w.value)})),Me.on("updatePlayerPlay",(e=>{p.value=e[1],h.value=e[2],v.value=e[0].coinJoin,c.value=e[0].percent})),Me.on("updateCoin",(async()=>{await C()})),Me.on("sendLastWin",(e=>{x.value=e.ingame,m.value=e.coinJoin,g.value=e.coinWin,n.value="Chúc mừng "+x.value+" đã chiến thắng "+S(g.value)+" xu trong vòng quay may rủi"})),(0,o.sV)((async()=>{setTimeout(Me.emit("updateLastWin"),500),await C()})),(e,i)=>{const u=(0,o.g2)("marquee");return(0,o.uX)(),(0,o.CE)("div",V,[(0,o.Lk)("div",Q,[(0,o.bF)(u,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,l.v_)(n.value),1)])),_:1})]),(0,o.Lk)("div",W,[O,(0,o.Lk)("div",q,"Bạn đang có "+(0,l.v_)(S(d.value))+" xu",1),(0,o.Lk)("div",B,[(0,o.bo)((0,o.Lk)("span",null,(0,l.v_)(k.value)+":",513),[[a.aG,k.value>0]]),(0,o.Lk)("span",null,[(0,o.eW)((0,l.v_)(f.value),1),(0,o.bo)((0,o.Lk)("span",null,"s",512),[[a.aG,k.value<=0]])])]),G,(0,o.Lk)("div",D,[(0,o.Lk)("div",{style:(0,l.Tr)(t.value)},null,4),(0,o.Lk)("div",null,(0,l.v_)(c.value)+" %",1)]),(0,o.Lk)("div",J,(0,l.v_)(S(p.value))+" xu",1),(0,o.Lk)("div",null,"Số người tham gia: "+(0,l.v_)(h.value),1),(0,o.Lk)("div",null,"Bạn đã tham gia: "+(0,l.v_)(S(v.value)),1),F,(0,o.Lk)("div",null,[(0,o.Lk)("div",null,"Người vừa chiến thắng: "+(0,l.v_)(x.value?x.value:"Chưa có thông tin"),1),(0,o.Lk)("div",null,"Số coin thắng: "+(0,l.v_)(g.value?S(g.value):"Chưa có thông tin"),1),(0,o.Lk)("div",null,"Số coin tham gia: "+(0,l.v_)(m.value?S(m.value):"Chưa có thông tin"),1)]),(0,o.Lk)("div",M,[_.value?(0,o.bo)(((0,o.uX)(),(0,o.CE)("input",{key:0,type:"number",class:"pl-[20px] w-[200px] rounded h-[50px]","onUpdate:modelValue":i[0]||(i[0]=e=>b.value=e),placeholder:"Tham gia từ 1tr đến 50tr",onKeyup:i[1]||(i[1]=(0,a.jR)((e=>L()),["enter"]))},null,544)),[[a.Jo,b.value]]):(0,o.Q3)("",!0),w.value&&!_.value?((0,o.uX)(),(0,o.CE)("button",{key:1,onClick:i[2]||(i[2]=e=>y(!0)),class:"w-[200px] mb-[20px]"},"Tham gia")):(0,o.Q3)("",!0),w.value&&_.value?((0,o.uX)(),(0,o.CE)("div",Y,[(0,o.Lk)("button",{class:"cursor w-[200px]",onClick:i[3]||(i[3]=e=>y(!1))},"Đóng")])):(0,o.Q3)("",!0)])])])}}};const H=(0,P.A)($,[["__scopeId","data-v-6bf4e61a"]]);var Z=H;const ee={FREE:0,TRADE:1,BUSY:2,DONATE:3,SEND:4,SEND_WIN:5},te=e=>((0,o.Qi)("data-v-3217de94"),e=e(),(0,o.jt)(),e),ne={class:"rounded-[10px] h-[200px] bg-[white] relative"},ae={class:"text-center font-bold text-[red] text-[25px]"},oe={key:0,class:"flex flex-col items-center w-full gap-[10px]"},le={key:0},ie={class:"flex flex-row gap-[5px]"},ue={key:1,class:"flex flex-col items-center justify-center mt-[10px] h-full w-full gap-[10px]"},se={key:2,class:"flex flex-col items-center w-full gap-[10px]"},re={key:3,class:"flex flex-col items-center px-[20px] font-bold w-full gap-[10px]"},ce=te((()=>(0,o.Lk)("p",{class:"text-[red] whitespace-pre-line"},"Trạng thái :",-1))),de=te((()=>(0,o.Lk)("p",{class:"text-[red] whitespace-pre-line"},"Số xu đặt :",-1))),pe=te((()=>(0,o.Lk)("p",{class:"text-[red] whitespace-pre-line"},"Tỉ lệ thắng :",-1))),ve={key:4,class:"font-bold text-[30px] mt-[50px]"},he={key:5,class:"font-bold text-[30px] mt-[50px]"},me={key:6,class:"font-bold text-[30px] mt-[50px]"},xe={key:7,class:"flex flex-col items-center px-[20px] font-bold w-full h-[50%] gap-[10px]"},ge=te((()=>(0,o.Lk)("p",{class:"text-[green]"},"Đã win rồi hãy giao dịch để lấy xu",-1))),be={class:"flex flex-row justify-around w-full mt-[20px]"};var ke={__name:"Bot",props:{zin:Number,status:Number,id_boss:String,coin:Number,time_join:Number,coin_join:Number,status_join:Boolean,percent_join:Number,id_thue:String,id_player:String,ingame:String,coin_win:String},setup(e){const t=e,n=(0,i.KR)(""),s=e=>{let t="";const n=e.toString().length;for(let a=1;a<=n;a++)t=e.toString()[n-a]+t,a%3===0&&a!==n&&(t=","+t);return t},r=(e,n)=>{Me.emit("changeStatus",{status:e,index:n,id_thue:t.id_player})},c=e=>{n.value<=t.coin?(Me.emit("send",{coin:n.value,index:e}),n.value=""):alert("Xu không đủ boss ơi")},d=async e=>{t.time_join<10||t.time_join>120?alert("Thời gian từ 11 đến 120 bạn ơi"):t.coin_join>5e7||t.coin_join<1e6?alert("Đặt từ 1tr đến 50tr bạn ơi"):await(0,u.getPlayer)(t.id_thue).then((n=>{t.coin_join>n.data.coin?alert("Không đủ xu mà đòi chơi"):(t.coin+=Number(t.coin_join),t.status=ee.BUSY,t.id_thue=t.id_player,Me.emit("playBot",{item:t,index:e}))}))},p=e=>{Me.emit("keepCoin",{coin:t.coin_win,index:e})},v=e=>{Me.emit("sendWin",{coin:t.coin_win,index:e})};return(u,h)=>((0,o.uX)(),(0,o.CE)("div",ne,[(0,o.Lk)("div",ae,(0,l.v_)(t.ingame),1),t.status==(0,i.R1)(ee).FREE?((0,o.uX)(),(0,o.CE)("div",oe,[t.id_boss==t.id_player?((0,o.uX)(),(0,o.CE)("div",le,(0,l.v_)(s(t.coin))+" xu",1)):(0,o.Q3)("",!0),(0,o.Lk)("div",ie,[(0,o.Lk)("button",{onClick:h[0]||(h[0]=t=>r((0,i.R1)(ee).TRADE,e.zin)),class:"px-[10px]"},"Đặt"),t.id_boss==t.id_player&&0!=t.coin?((0,o.uX)(),(0,o.CE)("button",{key:0,onClick:h[1]||(h[1]=t=>r((0,i.R1)(ee).SEND,e.zin)),class:"px-[10px]"},"Rút")):(0,o.Q3)("",!0)])])):(0,o.Q3)("",!0),t.status==(0,i.R1)(ee).SEND&&t.id_boss==t.id_player?((0,o.uX)(),(0,o.CE)("div",ue,[(0,o.bo)((0,o.Lk)("input",{type:"number",class:"w-[50%] border-1 border px-[10px] rounded h-[40px]","onUpdate:modelValue":h[2]||(h[2]=e=>n.value=e),placeholder:"Rút xu",onKeyup:h[3]||(h[3]=(0,a.jR)((t=>c(e.zin)),["enter"]))},null,544),[[a.Jo,n.value]]),(0,o.Lk)("button",{onClick:h[4]||(h[4]=t=>c(e.zin)),class:"w-[30%]"},"Rút xu")])):(0,o.Q3)("",!0),t.status==(0,i.R1)(ee).TRADE&&t.id_thue==t.id_player?((0,o.uX)(),(0,o.CE)("div",se,[(0,o.bo)((0,o.Lk)("input",{type:"number",class:"w-[50%] border-1 border px-[10px] rounded h-[40px]","onUpdate:modelValue":h[5]||(h[5]=e=>t.time_join=e),placeholder:"Nhập số giây"},null,512),[[a.Jo,t.time_join]]),(0,o.bo)((0,o.Lk)("input",{type:"number",class:"w-[50%] border-1 border px-[10px] rounded h-[40px]","onUpdate:modelValue":h[6]||(h[6]=e=>t.coin_join=e),placeholder:"Nhập số xu",onKeyup:h[7]||(h[7]=(0,a.jR)((t=>d(e.zin)),["enter"]))},null,544),[[a.Jo,t.coin_join]]),(0,o.Lk)("button",{onClick:h[8]||(h[8]=t=>d(e.zin)),class:"w-[30%]"},"Giao dịch")])):(0,o.Q3)("",!0),t.status==(0,i.R1)(ee).BUSY&&t.id_thue==t.id_player?((0,o.uX)(),(0,o.CE)("div",re,[(0,o.Lk)("p",null,[ce,(0,o.eW)(" "+(0,l.v_)(t.status_join?"Đã đặt":"Chưa đặt"),1)]),(0,o.Lk)("p",null,[de,(0,o.eW)(" "+(0,l.v_)(s(t.coin_join))+" xu ",1)]),(0,o.Lk)("p",null,[pe,(0,o.eW)(" "+(0,l.v_)(t.percent_join.toFixed(5))+" %",1)])])):(0,o.Q3)("",!0),t.status==(0,i.R1)(ee).TRADE&&t.id_thue!=t.id_player?((0,o.uX)(),(0,o.CE)("div",ve," Đang giao dịch ... ")):(0,o.Q3)("",!0),t.status==(0,i.R1)(ee).SEND_WIN&&t.id_thue!=t.id_player?((0,o.uX)(),(0,o.CE)("div",he," Đang giao xu win . . . ")):(0,o.Q3)("",!0),t.id_thue!=t.id_player&&t.status==(0,i.R1)(ee).BUSY?((0,o.uX)(),(0,o.CE)("div",me," Đã có khách thuê ạ ")):(0,o.Q3)("",!0),t.status==(0,i.R1)(ee).SEND_WIN&&t.id_thue==t.id_player?((0,o.uX)(),(0,o.CE)("div",xe,[ge,(0,o.Lk)("p",null,"Win : "+(0,l.v_)(s(t.coin_win))+" xu",1),(0,o.Lk)("div",be,[(0,o.Lk)("button",{class:"w-[50%]",onClick:h[9]||(h[9]=t=>v(e.zin))},"Giao dịch"),t.id_boss==t.id_thue?((0,o.uX)(),(0,o.CE)("button",{key:0,class:"w-[40%]",onClick:h[10]||(h[10]=t=>p(e.zin))},"Giữ xu")):(0,o.Q3)("",!0)])])):(0,o.Q3)("",!0)]))}};const fe=(0,P.A)(ke,[["__scopeId","data-v-3217de94"]]);var _e=fe;const ye=e=>((0,o.Qi)("data-v-6344d85c"),e=e(),(0,o.jt)(),e),we={class:"bg-[olive] w-full h-[620px] rounded-[25px] px-[20px] py-[10px]"},Le=ye((()=>(0,o.Lk)("div",{class:"text-[30px] font-bold text-center"},"Khu thuê bot",-1))),Ce={class:"grid grid-cols-3 w-full gap-[50px]",id:"bot"},Se={class:"flex flex-col items-center w-full gap-[50px] my-[50px]"},Ee=["onUpdate:modelValue"],je=["onClick"],Re=["onClick"];var Ie={__name:"Villager",emits:"oncloseVillager",setup(e,{emit:t}){const n=(0,i.KR)([]),l=t,s=(0,i.KR)(sessionStorage.getItem("id_player")),r=(0,i.KR)(sessionStorage.getItem("ingame_client")),c=(0,i.KR)([]),d=e=>{n.value.splice(e,1)},p=()=>{n.value.unshift({ingame:"",mode:!0})},v=async(e,t)=>{await getPlayer(s.value).then((async n=>{n.data.coin>=2e9?await(0,u.checkExist)(e).then((n=>{if(n)alert("Ingame đã tồn tại");else{const n={ingame:e,id_boss:s.value,ingame_boss:r.value};Me.emit("addBotCreate",n),d(t)}})):alert("Hãy để dành 2 tỷ xu để tạo")}))};return Me.on("updateListBotCreate",(e=>{c.value=e})),(0,o.sV)((async()=>{setTimeout((()=>{Me.emit("loadListBotCreate")}),500)})),(e,t)=>((0,o.uX)(),(0,o.CE)("div",we,[(0,o.Lk)("div",{onClick:t[0]||(t[0]=e=>l("closeVillager")),class:"text-[30px] cursor absolute right-0 px-[50px]"},"X"),Le,(0,o.Lk)("div",Ce,[""!=n.value?((0,o.uX)(!0),(0,o.CE)(o.FK,{key:0},(0,o.pI)(n.value,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"rounded-[10px] h-[200px] bg-[white] relative",key:t},[(0,o.Lk)("div",Se,[(0,o.bo)((0,o.Lk)("input",{type:"text",class:"w-[50%] border-1 border px-[10px] rounded h-[40px]","onUpdate:modelValue":t=>e.ingame=t,placeholder:"Tên bot"},null,8,Ee),[[a.Jo,e.ingame]]),(0,o.Lk)("div",{class:"text-[15px] cursor absolute top-[10px] right-0 px-[20px]",onClick:e=>d(t)},"X",8,je),(0,o.Lk)("button",{onClick:n=>v(e.ingame,t),class:"w-[30%]"},"Tạo bot",8,Re)])])))),128)):(0,o.Q3)("",!0),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(c.value,((e,t)=>((0,o.uX)(),(0,o.Wv)(_e,{key:e,zin:t,status:e.status,id_boss:e.id_boss,coin:e.coin,time_join:e.time_join,coin_join:e.coin_join,status_join:e.status_join,percent_join:e.percent_join,id_thue:e.id_thue,id_player:s.value,ingame:e.ingame,coin_win:e.coin_win},null,8,["zin","status","id_boss","coin","time_join","coin_join","status_join","percent_join","id_thue","id_player","ingame","coin_win"])))),128))]),(0,o.Lk)("div",null,[(0,o.Lk)("button",{class:"w-[200px] mb-[20px] absolute bottom-0 ml-[-100px]",onClick:t[1]||(t[1]=e=>p())},"Tạo bot")])]))}};const Ke=(0,P.A)(Ie,[["__scopeId","data-v-6344d85c"]]);var Xe=Ke;const Ne={class:"w-full h-full bg-[#3399FF] background"},Te={key:0,class:"h-full w-full"},Pe={key:1},Ae={class:"h-[100px] px-[30px] text-white text-[30px] font-bold backdrop-blur flex flex-col justify-center items-end"},ze={class:"flex flex-row gap-[30px]"},Ue={class:"text-[brown] absolute left-[50px]"},Ve={class:"text-center flex justify-center"},Qe={class:"absolute flex w-[80%]"};var We={__name:"Home",setup(e){const t=(0,i.KR)(!!sessionStorage.getItem("id_player")),n=(0,i.KR)(sessionStorage.getItem("ingame_client")),a=(0,i.KR)(!1),u=()=>{sessionStorage.removeItem("id_player"),sessionStorage.removeItem("ingame_client"),location.reload()};return(e,i)=>((0,o.uX)(),(0,o.CE)("div",Ne,[t.value?((0,o.uX)(),(0,o.CE)("div",Pe,[(0,o.Lk)("div",Ae,[(0,o.Lk)("div",ze,[(0,o.Lk)("span",Ue,"Chào mừng bạn "+(0,l.v_)(n.value),1),(0,o.Lk)("span",{class:"cursor",onClick:i[0]||(i[0]=()=>a.value=!0)},"Làng"),(0,o.Lk)("span",{class:"cursor",onClick:i[1]||(i[1]=e=>u())},"Đăng xuất")])]),(0,o.Lk)("div",Ve,[(0,o.Lk)("div",null,[(0,o.bF)(Z)]),(0,o.Lk)("div",Qe,[a.value?((0,o.uX)(),(0,o.Wv)(Xe,{key:0,onCloseVillager:i[2]||(i[2]=()=>a.value=!1)})):(0,o.Q3)("",!0)])])])):((0,o.uX)(),(0,o.CE)("div",Te,[(0,o.bF)(z)]))]))}};const Oe=(0,P.A)(We,[["__scopeId","data-v-4264f0f2"]]);var qe=Oe,Be={__name:"App",setup(e){return(e,t)=>((0,o.uX)(),(0,o.Wv)(qe))}};const Ge=Be;var De=Ge,Je=n(7910);const Fe=(0,a.Ef)(De),Me=Je.Ay.connect("https://vxmm.onrender.com",{secure:!0});Me.on("connect",(()=>{console.log("connect sucesss")})),Fe.mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var l=t[a]={exports:{}};return e[a].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,l){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],l=e[c][2];for(var u=!0,s=0;s<a.length;s++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](a[s])}))?a.splice(s--,1):(u=!1,l<i&&(i=l));if(u){e.splice(c--,1);var r=o();void 0!==r&&(t=r)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,o,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,l,i=a[0],u=a[1],s=a[2],r=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var c=s(n)}for(t&&t(a);r<i.length;r++)l=i[r],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},a=self["webpackChunkvxmm"]=self["webpackChunkvxmm"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(7047)}));a=n.O(a)})();
//# sourceMappingURL=app.410a0f55.js.map