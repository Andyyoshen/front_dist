(function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={front:0},r={front:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+".css",r=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],p.parentNode.removeChild(p),n(i)},p.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[t]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("f249")},"05ac":function(t,e,n){},3165:function(t,e,n){t.exports=n.p+"img/TaiwnaMap.jpg"},"5f4c":function(t,e,n){t.exports=n.p+"img/diamond2.svg"},"651a":function(t,e,n){t.exports=n.p+"img/Dog2.jpg"},"83c1":function(t,e,n){t.exports=n.p+"img/crown.png"},"86f7":function(t,e,n){t.exports=n.p+"img/Dog3.jpg"},b327:function(t,e,n){t.exports=n.p+"img/bronze-medal.png"},be69:function(t,e,n){},c53a:function(t,e,n){},c810:function(t,e,n){"use strict";n("be69")},dd98:function(t,e,n){"use strict";n("05ac")},e770:function(t,e,n){t.exports=n.p+"img/Dog.jpg"},f249:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("frontheader"),n("div",{staticClass:"vld-parent"},[n("loading",{attrs:{loader:"Dots",width:"100",color:"blue",active:this.$store.state.LoadingPage,"can-cancel":!0,"on-cancel":t.onCancel,"is-full-page":t.fullPage},on:{"update:active":function(e){return t.$set(this.$store.state,"LoadingPage",e)}}})],1),n("router-view")],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("div",{staticClass:"container-fluid"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Navbar")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ms-auto mb-2 mb-lg-0"},[t._m(1),t._m(2),null==t.MixnaccountData?a("li",{staticClass:"nav-item dropdown"},[t._m(3),t._m(4)]):t._e(),null!=t.MixnaccountData?a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},["Diamond"==t.MixnaccountData.AI_Status?a("img",{staticClass:"mb-1",attrs:{src:n("5f4c"),height:"20"}}):t._e(),"copper"==t.MixnaccountData.AI_Status?a("img",{staticClass:"mb-1",attrs:{src:n("b327"),height:"20"}}):t._e(),"crown"==t.MixnaccountData.AI_Status?a("img",{staticClass:"mb-1",attrs:{src:n("83c1"),height:"20"}}):t._e(),t._v(" "+t._s(t.MixnaccountData.AC_USERNAME)+",你好 ")]),a("ul",{staticClass:"dropdown-menu dropdown-menu-lg-end",attrs:{"aria-labelledby":"navbarDropdown"}},[a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return t.SignOut()}}},[t._v("登出")])]),t._m(5),t._m(6)])]):t._e()])])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"#/"}},[t._v("首頁")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#/register2"}},[t._v("註冊會員")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[n("span",{staticClass:"fa fa-user mr-2",attrs:{title:""}}),t._v(" 訪客,你好 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"dropdown-menu dropdown-menu-lg-end",attrs:{"aria-labelledby":"navbarDropdown"}},[n("li",[n("a",{staticClass:"dropdown-item",attrs:{href:"#/signin"}},[t._v("登入")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("hr",{staticClass:"dropdown-divider"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("個人資料")])])}],c=n("1da1"),u=(n("96cf"),{name:"fornt_header",data:function(){return{ACCOUNT_Data:{AC_USER:""}}},mounted:function(){null!=this.TokenID&&this.GetAccount()},methods:{showAlert:function(t){return this.$swal(t)},SignOut:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.showAlert({title:"您確定嗎？",text:"登出後無法觀看圖片！",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"取消",confirmButtonText:"登出"});case 2:e=t.sent,e.value&&(sessionStorage.clear(),this.MixnaccountData=null,this.$router.push({path:"/"}),this.$router.go(0));case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),search:function(){this.FunctionToken(this.searchFunction,this.ACCOUNT_Data)},searchFunction:function(t){console.log(t),this.apiSelectUser(t).then((function(t){console.log(t.data)})).catch((function(t){console.log(t+"錯誤")}))}}}),l=u,d=n("2877"),p=Object(d["a"])(l,i,s,!1,null,null,null),f=p.exports,h=n("9062"),m=n.n(h),g=(n("e40d"),{name:"front",components:{frontheader:f,loading:m.a},data:function(){return{isLoading:!1}},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){this.$store.commit("Load",!0);var t=this.$store;setTimeout((function(){t.commit("Load",!1)}),2e3)},beforeDestroy:function(){},destroyed:function(){},methods:{LoadingPageFun:function(){return this.$store.state.LoadingPage},nnn:function(){console.log("D"),this.$store.commit("Load",!0)},ccc:function(){console.log("D"),this.$store.commit("Load",!1)},Showdialog:function(){this.DialogModal=new bootstrap.Modal(document.getElementById("exampleModal"),{keyboard:!1}),this.DialogModal.show()}}}),b=g,v=(n("dd98"),n("fd1c"),Object(d["a"])(b,o,r,!1,null,null,null)),w=v.exports,C=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("main",[t._m(0),a("div",{staticClass:"album py-5 bg-light"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"},[a("div",{staticClass:"col"},[a("div",{staticClass:"card shadow-sm"},[a("img",{staticClass:"TWimg",attrs:{src:n("3165"),width:"100%",height:"100%",fill:"#55595c"}}),a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[t._v(" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ")]),a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return t.LookTaiwanMapWeb()}}},[t._v(" 觀看 ")])]),a("small",{staticClass:"text-muted"},[t._v("9 mins")])])])])]),t._l(t.Image_path,(function(e,n){return a("div",{key:n,staticClass:"col"},[a("div",{staticClass:"card shadow-sm"},[a("img",{staticClass:"TWimg",attrs:{id:"ssss",src:e.path,width:"100%",height:"100%",fill:"#55595c"}}),a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text"},[t._v(" This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ")]),a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary",attrs:{type:"button"},on:{click:function(n){return t.LookDogImage(e.Img_number)}}},[t._v(" 觀看 ")])]),a("small",{staticClass:"text-muted"},[t._v("9 mins")])])])])])}))],2)])])])])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-5 text-center container-fluid",attrs:{id:"Home_Title"}},[n("div",{staticClass:"row py-lg-5"},[n("div",{staticClass:"col-lg-6 col-md-8 mx-auto"},[n("h1",{staticClass:"fw-bold text-white"},[t._v("相 簿 展 示")]),n("p",{staticClass:"lead text-white"},[t._v(" A bird in the hand is worth two in the bush 。 birds of a feather flock together。have one's cake and eat it too 。 No pain no gain. Knowledge is power ")]),n("p",[n("button",{staticClass:"btn btn-primary my-2",attrs:{type:"button"}},[t._v("關於本公司")])])])])])}],y=n("ade3"),T=(n("159b"),n("f9d8")),k=(n("f278"),Object(y["a"])({name:"Home",components:{},data:function(){return{gallery:[{src:"https://lipsum.app/id/2/800x600",thumb:"https://lipsum.app/id/2/80x80",caption:"First image"},{src:"https://lipsum.app/id/3/800x600",thumb:"https://lipsum.app/id/3/80x80",caption:"Second image"},{src:"https://lipsum.app/id/4/800x600",thumb:"https://lipsum.app/id/4/80x80",caption:"Third image"}],Image_data:{Img_number:""},Image_path:[{path:n("e770"),Img_number:"Test01"},{path:n("651a"),Img_number:"Test02"},{path:n("86f7"),Img_number:"Test03"}]}},mounted:function(){},methods:{showAlert:function(t){return this.$swal(t)},LookDogImage:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.Image_data.Img_number=e,console.log(this.Image_data.Img_number),this.FunctionToken(this.GetapiDogViewCard,this.Image_data);case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),GetapiDogViewCard:function(t){var e=this;this.apiDogViewCard(t).then((function(t){if(1==t.data.Status){console.log(t.data.Data);var n=[];t.data.Data.forEach((function(t){n.push({src:t,type:"image"})})),T["a"].show(n,{Toolbar:{display:[{id:"zoom",position:"left"},{id:"fullscreen",position:"left"},{id:"counter",position:"center"},{id:"close",position:"right"}]}})}0==t.data.Status&&e.showAlert({title:"失敗",text:"權線不足",icon:"error",confirmButtonColor:"#3085d6"}),505==t.data.Status&&e.showAlert({title:"失敗",text:"請聯絡管理員",icon:"error",confirmButtonColor:"#3085d6"})})).catch((function(t){console.log(t),alert("錯誤")}))},LookTaiwanMapWeb:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$router.push({path:"/TaiwanMap"});case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),GetapiViewCard:function(t){var e=this;this.apiViewCard(t).then((function(t){if(1==t.data.Status&&e.$router.push({path:t.data.Data}),0==t.data.Status)return alert("無權訪問")})).catch((function(t){console.log(t)}))}}},"components",{})),D=k,S=(n("c810"),Object(d["a"])(D,_,x,!1,null,"14233fe9",null)),A=S.exports;a["a"].use(C["a"]);var I=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"a496"))}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"bac9"))}},{path:"/register",name:"Register",component:function(){return n.e("about").then(n.bind(null,"5f68"))}},{path:"/forgetpassword",name:"ForgetPassword",component:function(){return n.e("about").then(n.bind(null,"7223"))}},{path:"/introduce",name:"Introduce",component:function(){return n.e("about").then(n.bind(null,"0681"))}},{path:"/example",name:"Example",component:function(){return n.e("about").then(n.bind(null,"4e27"))}},{path:"/signIn",name:"SignIn",component:function(){return n.e("about").then(n.bind(null,"d66c"))}},{path:"/bootest",name:"bootest",component:function(){return n.e("about").then(n.bind(null,"7eaa"))}},{path:"/taiwanmap",name:"TaiwanMap",component:function(){return n.e("about").then(n.bind(null,"4666"))}},{path:"/register2",name:"Register2",component:function(){return n.e("about").then(n.bind(null,"eddf"))}},{path:"/forgetpassword",name:"ForgetPassword",component:function(){return n.e("about").then(n.bind(null,"7223"))}}],E=new C["a"]({base:"",routes:I}),$=E,L=n("2f62");a["a"].use(L["a"]);var R,M,j=new L["a"].Store({state:{LoadingPage:!1,LoadingforData:!1},mutations:{Load:function(t,e){t.LoadingPage=e},LoadforData:function(t,e){t.LoadingforData=e}},actions:{},modules:{}}),O={name:"Mixin",data:function(){var t=this;return{userRequest:this.$axios.create({baseURL:"/api2"}),TokenID:"",MixnaccountData:null,apiToken:function(e){return t.userRequest.post("/CryptionTest")},apigetImageCode:function(e){return t.userRequest.post("/getImageCode")},apilogin:function(e){return t.userRequest.post("/login",e)},apiSelectUser:function(e){return t.userRequest.post("/SelectUser",e)},apiRegister:function(e){return t.userRequest.post("/Register",e)},apiSendForget:function(e){return t.userRequest.post("/SendForget",e)},apiGetAccountInfo:function(e){return t.userRequest.post("/GetAccountInfo",e)},apiGetForget:function(e){return t.userRequest.post("/GetForget",e)},apiViewCard:function(e){return t.userRequest.post("/ViewCard",e)},apiDogViewCard:function(e){return t.userRequest.post("/DogViewCard",e)},apiSearchAccount:function(e){return t.userRequest.post("/SearchAccount",e)},apiCheckAccountEmail:function(e){return t.userRequest.post("/CheckAccountEmail",e)},apiCheckAccountUserName:function(e){return t.userRequest.post("/CheckAccountUserName",e)}}},mounted:function(){this.TokenID=sessionStorage.getItem("TokenID")},methods:{showtest:function(t){alert(t)},showAlertforFunctionTokenEorr:function(t){var e=this,n=this.$swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,onOpen:function(t){t.addEventListener("mouseenter",e.$swal.stopTimer),t.addEventListener("mouseleave",e.$swal.resumeTimer)}});return n},FunctionToken:function(t,e){var n=this;console.log("二"),this.apiToken({}).then((function(a){if(1==a.data.Status){var o={U_data:e,Token_data:{TokenID:n.TokenID,Token:a.data.Data}};t(o)}})).catch((function(t){n.showAlertforFunctionTokenEorr().fire({icon:"error",title:"權線解析失敗，請聯絡管理員"}),n.$store.commit("LoadforData",!1),console.log("錯誤",t)}))},GetAccount:function(){this.FunctionToken(this.GetMixnAccount,null)},GetMixnAccount:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.apiGetAccountInfo(e).then((function(t){1==t.data.Status&&(n.MixnaccountData=t.data.Data[0])})).catch((function(t){console.log(t)}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},P=O,F=Object(d["a"])(P,R,M,!1,null,null,null),q=F.exports,B=n("bc3a"),G=n.n(B),N=n("f9d5"),U=n.n(N);n("4413"),n("f9e3");a["a"].prototype.$axios=G.a,a["a"].use(U.a),a["a"].mixin(q),a["a"].config.productionTip=!1,new a["a"]({router:$,store:j,render:function(t){return t(w)}}).$mount("#front-app")},fd1c:function(t,e,n){"use strict";n("c53a")}});
//# sourceMappingURL=front.js.map