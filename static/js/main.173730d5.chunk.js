(this.webpackJsonpignat_dz=this.webpackJsonpignat_dz||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={affairs__wrapper:"Affairs_affairs__wrapper__1HX_I",affairs__box:"Affairs_affairs__box__Wfp6h",affairs__btn_box:"Affairs_affairs__btn_box__3NurI",affairs__btn:"Affairs_affairs__btn__1tCdn",affair__wrapper:"Affairs_affair__wrapper__1_KCh",affair__btn:"Affairs_affair__btn__LV7aS",affair__cart:"Affairs_affair__cart__3MUVm"}},function(e,t,a){e.exports={message__wrapper:"Message_message__wrapper__1LrPq",message__avatar:"Message_message__avatar__oEkql",message__box:"Message_message__box__392Dd",message__box_descr:"Message_message__box_descr__1udXJ",message__text:"Message_message__text__S75zX",message__time:"Message_message__time__1etuM",decor:"Message_decor__3U3cR"}},function(e,t,a){},,function(e,t,a){e.exports={someClass:"Greeting_someClass__aEEcW",error:"Greeting_error__2RSpi",active:"Greeting_active__z1TTC",greeting:"Greeting_greeting__g0FNp",greeting__title:"Greeting_greeting__title__2VtFV",greeting__input:"Greeting_greeting__input__yhnCG",greeting__btn:"Greeting_greeting__btn__3WS-V",greeting__counter:"Greeting_greeting__counter__2NDck"}},,function(e,t,a){e.exports={wrapper:"homemade_wrapper__1wbyq",title:"homemade_title__3IuyO",box__btn:"homemade_box__btn__3a0x9",span:"homemade_span__2P2ec"}},,function(e,t,a){},function(e,t,a){e.exports={wrapper:"h7_wrapper__3Ja3i",selectDropdown:"h7_selectDropdown__zh6wu","select-dropdown":"h7_select-dropdown__lhG1f"}},function(e,t,a){e.exports={superInput:"SuperInputText_superInput__BKD19",errorInput:"SuperInputText_errorInput__ibklZ",error:"SuperInputText_error__38c1E"}},function(e,t,a){e.exports={blue:"HW4_blue__18txW",columnWrapper:"HW4_columnWrapper__3PRju",column:"HW4_column__hDbVS",testSpanError:"HW4_testSpanError__1PtYp"}},,function(e,t,a){e.exports={default:"SuperButton_default__36PrM",red:"SuperButton_red__3xoum"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__1wcP-",spanClassName:"SuperCheckbox_spanClassName__1eUc8"}},,function(e,t,a){e.exports={App:"App_App__3c-rP"}},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(22),s=a.n(c),i=(a(29),a(23)),o=a.n(i),l=(a(9),a(3)),j=a(10),b=a(8),_=a.n(b),d=a(0),u=function(e){var t=e.avatar,a=e.name,n=e.message,r=e.time;return Object(d.jsxs)("div",{className:_.a.message__wrapper,children:[Object(d.jsx)("img",{className:_.a.message__avatar,src:t,alt:"\u0430\u0432\u0430\u0442\u0430\u0440"}),Object(d.jsxs)("div",{className:_.a.message__box,children:[Object(d.jsxs)("div",{className:_.a.message__box_descr,children:[Object(d.jsx)("h3",{children:a}),Object(d.jsx)("p",{className:_.a.message__text,children:n})]}),Object(d.jsxs)("p",{className:_.a.message__time,children:[" ",r]}),Object(d.jsx)("span",{className:_.a.decor})]})]})},h="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUfjaEv_dGhNzdS1Bg5O6iMWaLrqOKjT2RlA&usqp=CAU",x="Bogdan",O="Hello how are you!",p="22:00",m="https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1057506940?k=20&m=1057506940&s=612x612&w=0&h=3j5EA6YFVg3q-laNqTGtLxfCKVR3_o6gcVZZseNaWGk=",f="Vlad",g="I heard you have a problem?",v="23:00";var N=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{className:"title",children:"homeworks 1"}),Object(d.jsx)(u,{avatar:h,name:x,message:O,time:p}),Object(d.jsx)(u,{avatar:m,name:f,message:g,time:v}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},C=a(7),k=a.n(C),w=function(e){var t=e.affair,a=e.deleteAffairCallback;return Object(d.jsxs)("div",{className:k.a.affair__wrapper,children:[Object(d.jsxs)("div",{className:k.a.affair__cart,children:[Object(d.jsxs)("div",{style:{display:"flex",alignItems:"baseline"},children:[Object(d.jsxs)("span",{style:{color:"orange"},children:[t._id,"."]}),Object(d.jsx)("h2",{style:{marginLeft:"10px"},children:t.name})]}),Object(d.jsx)("p",{children:t.priority})]}),Object(d.jsx)("button",{onClick:function(){a(t._id)},className:k.a.affair__btn,children:"X"})]})},y=function(e){var t=e.data,a=e.deleteAffairCallback,n=e.setFilter,r=t.map((function(e){return Object(d.jsx)(w,{affair:e,deleteAffairCallback:a},e._id)}));return Object(d.jsx)("div",{className:k.a.affairs__wrapper,children:Object(d.jsxs)("div",{className:k.a.affairs__box,children:[r,Object(d.jsxs)("div",{className:k.a.affairs__btn_box,children:[Object(d.jsx)("button",{className:k.a.affairs__btn,onClick:function(){n("all")},children:"All"}),Object(d.jsx)("button",{className:k.a.affairs__btn,onClick:function(){n("high")},children:"High"}),Object(d.jsx)("button",{className:k.a.affairs__btn,onClick:function(){n("middle")},children:"Middle"}),Object(d.jsx)("button",{className:k.a.affairs__btn,onClick:function(){n("low")},children:"Low"})]})]})})},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"},{_id:6,name:" css",priority:"low"}];var A=function(){var e=Object(n.useState)(S),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("all"),s=Object(l.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(a,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{className:"title",children:"homeworks 2"}),Object(d.jsx)(y,{data:j,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))},filter:i}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},E=a(24),T=a(11),I=a.n(T),W=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,r=e.error,c=e.totalUsers,s=r?I.a.active:I.a.error,i=!!r;return Object(d.jsxs)("div",{className:I.a.greeting,children:[Object(d.jsx)("input",{name:t,onChange:a,className:"".concat(s," ").concat(I.a.greeting__input),placeholder:"Enter post"}),Object(d.jsx)("button",{disabled:i,onClick:n,className:"".concat(s," ").concat(I.a.greeting__btn),children:"Add"}),Object(d.jsx)("span",{className:I.a.greeting__counter,children:c}),Object(d.jsx)("div",{children:r})]})},P=function(e){var t=e.users,a=e.addUserCallback,r=Object(n.useState)(""),c=Object(l.a)(r,2),s=c[0],i=c[1],o=Object(n.useState)(""),j=Object(l.a)(o,2),b=j[0],_=j[1],u=t.length;return Object(d.jsx)("div",{children:Object(d.jsx)(W,{name:s,setNameCallback:function(e){e.currentTarget.value&&(i(e.currentTarget.value),_(""))},addUser:function(){s?(a(s),alert("Hello  ".concat(s,"!"))):_("ERROR!"),i("")},error:b,totalUsers:u})})},G=a(33);var M=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{className:"title",children:" homeworks 3"}),Object(d.jsx)(P,{users:a,addUserCallback:function(e){r([].concat(Object(E.a)(a),[{_id:Object(G.a)(),name:e}]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},L=a(6),F=a(5),U=a(17),B=a.n(U),D=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(B.a.error," ").concat(i||""),j="".concat(c?B.a.errorInput:B.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[c&&Object(d.jsx)("span",{className:l,children:c}),Object(d.jsx)("input",Object(L.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:j,placeholder:c?"Enter data":""},o))]})},V=a(18),J=a.n(V),R=a(20),q=a.n(R),H=function(e){var t=e.red,a=e.className,n=Object(F.a)(e,["red","className"]),r="".concat(t?q.a.red:q.a.default," ").concat(a);return Object(d.jsx)("button",Object(L.a)({className:r},n))},z=a(21),K=a.n(z),X=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),c=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(K.a.checkbox," ").concat(n||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(L.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:s},c)),r&&Object(d.jsx)("span",{className:K.a.spanClassName,children:r})]})};var Z=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],c=a?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),o=Object(l.a)(i,2),j=o[0],b=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{className:"title",children:" homeworks 4"}),Object(d.jsx)("div",{className:J.a.columnWrapper,children:Object(d.jsxs)("div",{className:J.a.column,children:[Object(d.jsx)(D,{value:a,onChangeText:r,onEnter:s,error:c}),Object(d.jsx)(D,{className:J.a.blue}),Object(d.jsx)(X,{checked:j,onChangeChecked:b,children:"Confirm "}),Object(d.jsx)(H,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(H,{disabled:!0,children:"disabled"}),Object(d.jsx)(X,{checked:j,onChange:function(e){return b(e.currentTarget.checked)},children:"likes"}),Object(d.jsx)(H,{children:"default"})]})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},Y=a(13),$=a.n(Y),Q=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,r=e.spanProps,c=Object(F.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),i=Object(l.a)(s,2),o=i[0],j=i[1],b=r||{},_=b.children,u=b.onDoubleClick,h=(b.className,Object(F.a)(b,["children","onDoubleClick","className"]));return Object(d.jsx)(d.Fragment,{children:o?Object(d.jsx)(D,Object(L.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),a&&a()}},c)):Object(d.jsx)("span",Object(L.a)(Object(L.a)({onDoubleClick:function(e){j(!0),u&&u(e)},className:$.a.span},h),{},{children:_||c.value}))})};function ee(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function te(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ae=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:$.a.wrapper,children:[Object(d.jsx)("h2",{className:"title",children:"homeworks 6"}),Object(d.jsx)("div",{className:$.a.title,children:Object(d.jsx)(Q,{value:a,onChangeText:r,spanProps:{children:a?void 0:"enter text..."}})}),Object(d.jsxs)("div",{className:$.a.box__btn,children:[Object(d.jsx)(H,{onClick:function(){ee("editable-span-value",a)},children:"save"}),Object(d.jsx)(H,{onClick:function(){r((function(){return te("editable-span-value",a)}))},children:"restore"})]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var ne=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(N,{}),Object(d.jsx)(A,{}),Object(d.jsx)(M,{}),Object(d.jsx)(Z,{}),Object(d.jsx)(ae,{})]})};a(15);function re(){return Object(d.jsx)("div",{className:"wrapper",children:"\u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430"})}var ce=a(16),se=a.n(ce),ie=function(e){var t=e.options,a=(e.onChange,e.onChangeOption),n=Object(F.a)(e,["options","onChange","onChangeOption"]),r=t?null===t||void 0===t?void 0:t.map((function(e,t){return Object(d.jsx)("option",{value:e,children:e},t)})):[];return Object(d.jsx)("div",{className:se.a.selectDropdown,children:Object(d.jsx)("select",Object(L.a)(Object(L.a)({onChange:function(e){a&&a(e.currentTarget.value)}},n),{},{value:n.value,children:r}))})},oe=function(e){e.type;var t=e.name,a=e.options,n=e.value,r=(e.onChange,e.onChangeOption),c=(Object(F.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){r&&r(e.currentTarget.value)}),s=a?a.map((function(e,a){return Object(d.jsxs)("label",{style:{margin:"0 15px"},children:[Object(d.jsx)("input",{name:t,type:"radio",onChange:c,value:e,checked:n===e}),e]},t+"-"+a)})):[];return Object(d.jsx)(d.Fragment,{children:s})},le=["x","y","z"];var je=function(){var e=Object(n.useState)(le[1]),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{className:"title",children:"homeworks 7"}),Object(d.jsxs)("div",{className:se.a.wrapper,children:[Object(d.jsx)("div",{children:Object(d.jsx)(ie,{options:le,value:a,onChangeOption:r})}),Object(d.jsx)("div",{children:Object(d.jsx)(oe,{name:"radio",options:le,value:a,onChangeOption:r})})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};function be(){return Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)(je,{})})}var _e=a(2);var de=function(){return Object(d.jsx)("div",{className:"errorWrapper",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})})},ue="/junior",he="/junior-plus";function xe(){return Object(d.jsx)("div",{children:Object(d.jsxs)(_e.c,{children:[Object(d.jsx)(_e.a,{path:"/",element:Object(d.jsx)(ne,{})}),Object(d.jsx)(_e.a,{path:ue,element:Object(d.jsx)(re,{})}),Object(d.jsx)(_e.a,{path:he,element:Object(d.jsx)(be,{})}),Object(d.jsx)(_e.a,{path:"*",element:Object(d.jsx)(de,{})})]})})}var Oe=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(d.jsxs)("div",{className:"overflow",children:[Object(d.jsx)("div",{className:a?"active":"notActive",children:Object(d.jsxs)("div",{className:"headerWrapper",children:[Object(d.jsx)(j.b,{className:function(e){var t=e.isActive;return"headerLink ".concat(t?"headerLinkActive":"")},to:"/",children:"Pre Junior"}),Object(d.jsx)(j.b,{className:function(e){var t=e.isActive;return"headerLink ".concat(t?"headerLinkActive":"")},to:ue,children:"Junior"}),Object(d.jsx)(j.b,{className:function(e){var t=e.isActive;return"headerLink ".concat(t?"headerLinkActive":"")},to:he,children:"Junior+"})]})}),Object(d.jsx)("span",{onClick:function(){return r(!a)},className:"btn"})]})};var pe=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(Oe,{}),Object(d.jsx)(xe,{})]})})})};var me=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("h2",{className:"title",children:"react homeworks:"}),Object(d.jsx)(pe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(me,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.173730d5.chunk.js.map