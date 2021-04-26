(this["webpackJsonpbasic-crud"]=this["webpackJsonpbasic-crud"]||[]).push([[0],{77:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(10),c=a.n(r),i=(a(77),a(11)),o=a(29),s=a(67),l=a(7),u="[ui] Open modal",d="[ui] Close modal",j="[patient] Set Active",p="[patient] Logout patient",b="[patient] Add new",m="[patient] Clear active patient",f="[patient] Patient updated",O="[patient] Patient deleted",h="[patient] Patients loaded",x="[auth] Finish checking login state",v="[auth] Login",g="[auth] Logout",y={checking:!0},w=a(56),k={patients:[],activePatient:null},N={modalOpen:!1,activeUser:""},P=Object(o.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!0,activeUser:t.payload});case d:return Object(l.a)(Object(l.a)({},e),{},{modalOpen:!1,activeUser:""});default:return e}},patient:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(l.a)(Object(l.a)({},e),{},{activePatient:t.payload});case b:return Object(l.a)(Object(l.a)({},e),{},{patients:[].concat(Object(w.a)(e.patients),[t.payload])});case m:return Object(l.a)(Object(l.a)({},e),{},{activePatient:null});case f:return Object(l.a)(Object(l.a)({},e),{},{patients:e.patients.map((function(e){return e.id===t.payload.id?t.payload:e}))});case O:return Object(l.a)(Object(l.a)({},e),{},{patients:e.patients.filter((function(e){return e.id!==t.payload._id})),activePatient:null});case h:return Object(l.a)(Object(l.a)({},e),{},{patients:Object(w.a)(t.payload)});case p:return Object(l.a)({},k);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(l.a)(Object(l.a)(Object(l.a)({},e),t.payload),{},{checking:!1});case x:return Object(l.a)(Object(l.a)({},e),{},{checking:!1});case g:return{checking:!1};default:return e}}}),C="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,E=Object(o.e)(P,C(Object(o.a)(s.a))),D=a(26),S=a(14),F=a(49),T=a(2),A=function(e){var t=e.isAuthenticated,a=e.component,n=Object(F.a)(e,["isAuthenticated","component"]);return Object(T.jsx)(S.b,Object(l.a)(Object(l.a)({},n),{},{component:function(e){return t?Object(T.jsx)(a,Object(l.a)({},e)):Object(T.jsx)(S.a,{to:"/login"})}}))},_=function(e){var t=e.isAuthenticated,a=e.component,n=Object(F.a)(e,["isAuthenticated","component"]);return Object(T.jsx)(S.b,Object(l.a)(Object(l.a)({},n),{},{component:function(e){return t?Object(T.jsx)(S.a,{to:"/"}):Object(T.jsx)(a,Object(l.a)({},e))}}))},I=a(24),Y=a(144),U=a(134),M=a(143),L=a(34),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(I.a)(t,2),r=a[0],c=a[1],i=function(){c(e)},o=function(e){var t=e.target;c(Object(l.a)(Object(l.a)({},r),{},Object(L.a)({},t.name,t.value)))};return[r,o,i]},G=a(17),J=a.n(G),V=a(25),W=a(21),z=a.n(W),B="https://crud-doctorapp.herokuapp.com/api",X=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(B,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},q=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(B,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(l.a)({},e)}))},K=function(e){return{type:b,payload:e}},Q=function(e){return{type:f,payload:e}},Z=function(e){return{type:O,payload:e}},$=function(e){return{type:h,payload:e}},ee=function(){return{type:x}},te=function(e){return{type:v,payload:e}},ae=function(){return function(e){localStorage.clear(),e({type:p}),e(ne())}},ne=function(){return{type:g}},re=a(131),ce=Object(re.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},title:{color:"black",fontWeight:"bold",margin:"15px",textAlign:"center"},container:{backgroundColor:"white",border:"1px solid black",boxShadow:"0 2px 10px 4px #5014ff45",display:"flex",flexDirection:"column",width:"300px !important"},form:{alignItems:"center",display:"flex",flexDirection:"column",margin:"10px"},textField:{marginBottom:"15px !important",width:"100%"},button:{margin:"5px !important",height:"56px",width:"229px"},navbar:{color:"white",display:"flex",flexDirection:"row !important",justifyContent:"space-around",padding:"10px 0"},cursor:{cursor:"pointer"},dateField:{flexDirection:"column-reverse !important",marginBottom:"15px !important",marginTop:"0",width:"100%"}}})),ie=function(){var e=Object(i.b)(),t=ce(),a=R({lEmail:"",lPassword:""}),n=Object(I.a)(a,2),r=n[0],c=n[1],o=r.lEmail,s=r.lPassword;return Object(T.jsx)("div",{className:"container",children:Object(T.jsxs)(U.a,{className:t.container,maxWidth:"sm",children:[Object(T.jsx)("h3",{className:t.title,children:"Fazer login"}),Object(T.jsxs)("form",{className:t.form,onSubmit:function(t){var a,n;t.preventDefault(),e((a=o,n=s,function(){var e=Object(V.a)(J.a.mark((function e(t){var r,c;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(te({uid:c.uid,name:c.name}))):z.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(T.jsx)(M.a,{className:t.textField,id:"email-id",name:"lEmail",value:o,onChange:c,label:"E-mail",variant:"outlined"}),Object(T.jsx)(M.a,{className:t.textField,id:"password-id",name:"lPassword",value:s,onChange:c,label:"Senha",variant:"outlined"}),Object(T.jsx)(Y.a,{className:t.button,variant:"contained",color:"primary",type:"submit",children:"Acessar"}),Object(T.jsx)(D.b,{className:"link",to:"/register",children:"Criar novo usuario"})]})]})})},oe=a(47),se=a.n(oe),le=a(138),ue=a(142),de=a(141),je=a(137),pe=a(139),be=a(140),me=a(96),fe=a(55),Oe=a.n(fe),he=function(e){return{type:u,payload:e}},xe=function(){return{type:d}},ve=function(e){var t=e.clickedPatient,a=ce(),n=Object(i.b)();return Object(T.jsxs)(Y.a,{className:a.button,variant:"contained",color:"primary",onClick:function(){var e;n((e=t[0],function(){var t=Object(V.a)(J.a.mark((function t(a){var n,r;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q("list/".concat(e._id),{},"DELETE");case 3:return n=t.sent,t.next=6,n.json();case 6:(r=t.sent).ok?a(Z(e)):z.a.fire("Error",r.msg,"error"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}())),n(xe()),window.location.reload()},children:[Object(T.jsx)("i",{className:"fas fa-trash mr"}),Object(T.jsx)("span",{children:" Apagar paciente"})]})},ge=function(e){var t=!1;if(14!==e.length&&11!==e.length)return t;14===e.length&&(e=(e=(e=e.replace(".","")).replace(".","")).replace("-",""));var a=0,n=0;if("00000000000"===e)return t;for(var r=1;r<=9;++r)a+=parseInt(e.substring(r-1,r))*(11-r);return 10!=(n=10*a%11)&&11!=n||(n=0),n!=parseInt(e.substring(9,10))?t:t=!0},ye={content:{top:"50%",left:"50%",right:"auto",bottom:"auto"}};Oe.a.setAppElement("#root");var we=function(e){var t=e.clickedPatient,a=ce(),r={name:t&&t.length?t[0].name:"",cpf:t&&t.length?t[0].cpf:"",date:t&&t.length?se()(t[0].date).format("YYYY-MM-DD"):"",id:t&&t.length?t[0]._id:""},c=Object(i.c)((function(e){return e.ui})),o=c.modalOpen,s=c.activeUser,u=Object(i.c)((function(e){return e.patient})).patients,d=Object(i.b)(),j=Object(n.useState)(!0),p=Object(I.a)(j,2),b=(p[0],p[1]),f=Object(n.useState)({initPatient:r}),O=Object(I.a)(f,2),h=O[0],x=O[1],v=h.name,g=function(e){var a=e.target;t&&t.length?x(Object(l.a)(Object(l.a)(Object(l.a)({},h.initPatient),r),{},Object(L.a)({},a.name,a.value))):x(Object(l.a)(Object(l.a)({},h),{},Object(L.a)({},a.name,a.value)))},y=function(){d(xe()),d({type:m}),x(r)};return Object(T.jsx)(Oe.a,{isOpen:o,onRequestClose:y,style:ye,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo",ariaHideApp:!1,children:Object(T.jsxs)(U.a,{className:a.container,maxWidth:"sm",children:[Object(T.jsxs)("h1",{children:[" ",s&&u.filter((function(e){return e.cpf===s.cpf}))?"Editar paciente":"Novo paciente"," "]}),Object(T.jsx)("hr",{}),Object(T.jsxs)("form",{className:a.form,onSubmit:function(e){return e.preventDefault(),v.trim().length<2?b(!1):ge(r.cpf)?r.cpf:(z.a.fire({icon:"error",title:"Error",text:"CPF n\xe3o existe"}),t?(d((a=h,function(){var e=Object(V.a)(J.a.mark((function e(t){var n,r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q("list/".concat(a.id),a,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(r=e.sent).ok?t(Q(a)):z.a.fire("Error",r.msg,"error"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())),window.location.reload()):d(function(e){return function(){var t=Object(V.a)(J.a.mark((function t(a,n){var r,c,i,o,s;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.uid,i=r.name,t.prev=1,t.next=4,q("list",e,"POST");case 4:return o=t.sent,t.next=7,o.json();case 7:(s=t.sent).ok&&(e.id=s.patient.id,e.user={_id:c,name:i},a(K(e))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(h)),b(!0),void y());var a},children:[Object(T.jsx)(M.a,{className:a.textField,label:"Nome",variant:"outlined",name:"name",defaultValue:r.name,onChange:g}),Object(T.jsx)(M.a,{type:"date",helperText:"Data de nascimento",className:(a.textField,a.dateField),label:"",variant:"outlined",name:"date",defaultValue:r.date,onChange:g}),Object(T.jsx)(M.a,{className:a.textField,label:"CPF",variant:"outlined",name:"cpf",defaultValue:r.cpf,onChange:g}),Object(T.jsxs)(Y.a,{type:"submit",className:a.button,variant:"contained",color:"primary",children:[Object(T.jsx)("i",{className:"far fa-save mr"}),Object(T.jsx)("span",{children:t?"Salvar":"Adicionar paciente"})]}),t?Object(T.jsx)(ve,{clickedPatient:t}):""]})]})})},ke=function(){var e=Object(i.b)();return Object(T.jsx)(Y.a,{className:"btn__add",variant:"contained",color:"primary",onClick:function(){e(he())},children:Object(T.jsx)("i",{className:"fas fa-plus"})})},Ne=a(136),Pe=function(){var e=ce(),t=Object(i.b)(),a=Object(i.c)((function(e){return e.auth})).name;return Object(T.jsx)("div",{children:Object(T.jsxs)(Ne.a,{className:e.navbar,position:"static",children:[Object(T.jsxs)("span",{className:"navbar__span",children:["Doctor: ",a]}),Object(T.jsx)(Y.a,{onClick:function(){t(ae())},color:"inherit",children:Object(T.jsx)("i",{className:"fas fa-sign-out-alt",children:" Sair"})})]})})},Ce=function(){var e=ce(),t=Object(i.b)(),a=Object(i.c)((function(e){return e.patient})).patients,r=Object(i.c)((function(e){return e.ui})).activeUser;Object(n.useEffect)((function(){t(function(){var e=Object(V.a)(J.a.mark((function e(t){var a,n,r;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q("list");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=H(n.patients),t($(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[t]);var c=[];return a.map((function(e){var t,a,n;c.push((t=e.cpf,a=e.name,n=se()(e.date).format("YYYY-MM-DD"),{cpf:t,name:a,date:n}))})),Object(T.jsxs)("div",{children:[Object(T.jsx)(Pe,{}),Object(T.jsx)(je.a,{component:me.a,children:Object(T.jsxs)(le.a,{size:"small","aria-label":"Patiens table",children:[Object(T.jsx)(pe.a,{children:Object(T.jsxs)(be.a,{children:[Object(T.jsx)(de.a,{children:"CPF"}),Object(T.jsx)(de.a,{children:"Nome"}),Object(T.jsx)(de.a,{children:"Data"})]})}),Object(T.jsx)(ue.a,{className:e.cursor,children:c.map((function(e){return Object(T.jsxs)(be.a,{onDoubleClick:function(){t(he(e))},children:[Object(T.jsx)(de.a,{component:"th",scope:"row",children:e.cpf}),Object(T.jsx)(de.a,{children:e.name}),Object(T.jsx)(de.a,{children:e.date})]},e.cpf)}))})]})}),Object(T.jsx)(ke,{}),Object(T.jsx)(we,{clickedPatient:a&&r&&a.filter((function(e){return e.cpf===r.cpf}))})]})},Ee=function(){var e=Object(i.b)(),t=ce(),a=R({rName:"",rEmail:"",rCPF:"",rDate:"",rPassword1:"",rPassword2:""}),n=Object(I.a)(a,2),r=n[0],c=n[1],o=r.rName,s=r.rEmail,l=r.rCPF,u=r.rDate,d=r.rPassword1,j=r.rPassword2;return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(U.a,{className:t.container,maxWidth:"sm",children:[Object(T.jsx)("h3",{className:t.title,children:"Cadastra-se"}),Object(T.jsxs)("form",{className:t.form,onSubmit:function(t){return t.preventDefault(),d!==j?z.a.fire({icon:"Error",title:"error",text:"As senhas devem ser iguais"}):ge(l)?l:(z.a.fire({icon:"error",title:"Error",text:"CPF n\xe3o existe"}),void e((a=o,n=s,r=u,c=l,i=d,function(){var e=Object(V.a)(J.a.mark((function e(t){var o,s;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X("auth/new",{name:a,email:n,date:r,cpf:c,password:i},"POST");case 2:return o=e.sent,e.next=5,o.json();case 5:(s=e.sent).ok?(localStorage.setItem("token",s.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(te({uid:s.uid,name:s.name}))):z.a.fire("Error",s.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));var a,n,r,c,i},children:[Object(T.jsx)(M.a,{className:t.textField,id:"nome-id",name:"rName",value:o,onChange:c,label:"Nome",variant:"outlined"}),Object(T.jsx)(M.a,{className:t.textField,id:"emailReg-id",name:"rEmail",value:s,onChange:c,label:"E-mail",variant:"outlined"}),Object(T.jsx)(M.a,{type:"date",className:(t.textField,t.dateField),id:"dataDeNascimento-id",name:"rDate",value:u,onChange:c,label:"",variant:"outlined",helperText:"Data de nascimento"}),Object(T.jsx)(M.a,{className:t.textField,pattern:"\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}",id:"cpf-id",name:"rCPF",value:l,onChange:c,label:"CPF: xxx.xxx.xxx-xx",variant:"outlined"}),Object(T.jsx)(M.a,{className:t.textField,id:"passwordReg-id1",name:"rPassword1",value:d,onChange:c,label:"Digite uma senha",variant:"outlined"}),Object(T.jsx)(M.a,{className:t.textField,id:"passwordReg-id2",name:"rPassword2",value:j,onChange:c,label:"Digite a senha novamente",variant:"outlined"}),Object(T.jsx)(Y.a,{type:"submit",className:t.button,variant:"contained",color:"primary",children:"Finalizar Cadastro"}),Object(T.jsx)(D.b,{className:"link",to:"/login",children:"Tem cadastro?"})]})]})})},De=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})),a=t.checking,r=t.uid;return Object(n.useEffect)((function(){e(function(){var e=Object(V.a)(J.a.mark((function e(t){var a,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(te({uid:n.uid,name:n.name}))):t(ee());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?Object(T.jsx)("div",{className:"loading-spinner",children:Object(T.jsx)("div",{className:"loading-spinner--item",children:Object(T.jsx)("div",{})})}):Object(T.jsx)(D.a,{children:Object(T.jsx)("div",{children:Object(T.jsxs)(S.d,{children:[Object(T.jsx)(_,{exact:!0,path:"/login",component:ie,isAuthenticated:!!r}),Object(T.jsx)(_,{exact:!0,path:"/register",component:Ee,isAuthenticated:!!r}),Object(T.jsx)(A,{exact:!0,path:"/patients",component:Ce,isAuthenticated:!!r}),Object(T.jsx)(A,{exact:!0,path:"/",component:Ce,isAuthenticated:!!r}),Object(T.jsx)(S.a,{to:"/login"})]})})})},Se=function(){return Object(T.jsx)(i.a,{store:E,children:Object(T.jsx)(De,{})})};c.a.render(Object(T.jsx)(Se,{}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.574c4693.chunk.js.map