(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{19:function(t,e,n){t.exports={FilterText:"Filter_FilterText__2RxdS",FilterInput:"Filter_FilterInput__3ZtjI"}},38:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var a,c=n(1),r=n(0),o=n.n(r),i=n(9),s=n.n(i),u=n(5),l=n(22),b=(n(37),n(38),n(10)),j=n(11),d=n(14),m=n(12),p=n(6),h=n(23),O=n(3),f=n(42),C=Object(O.b)("phonebook/add",(function(t){return{payload:Object(h.a)({id:Object(f.a)()},t)}})),x=Object(O.b)("phonebook/delete"),I=Object(O.b)("phonebook/changeFilter"),_=n(7),v=n.n(_),F=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(b.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={id:"",name:"",number:""},t.handleInputsChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=t.props.onAdd;a&&c&&(r({id:Object(f.a)(),name:a,number:c}),t.resetForm())},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(j.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(c.jsx)("div",{className:v.a.FormContainer,children:Object(c.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(c.jsxs)("label",{children:[Object(c.jsx)("p",{className:v.a.InputTitle,children:"Name"}),Object(c.jsx)("input",{type:"text",name:"name",value:e,placeholder:"Enter name",onChange:this.handleInputsChange,className:v.a.InputField})]}),Object(c.jsxs)("label",{children:[Object(c.jsx)("p",{className:v.a.InputTitle,children:"Phone number"}),Object(c.jsx)("input",{type:"tel",name:"number",value:n,placeholder:"Enter phone number",onChange:this.handleInputsChange,className:v.a.InputField})]}),Object(c.jsx)("button",{type:"submit",className:v.a.InputButton,children:"Add contact"})]})})}}]),n}(r.Component),g=Object(u.b)(null,(function(t){return{onAdd:function(e){var n=e.name,a=e.number;return t(C({name:n,number:a}))}}}))(F),L=n(8),y=n.n(L),k=function(t){var e=t.id,n=t.name,a=t.number,r=t.ondeleteContact;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{className:y.a.ContactListItemText,children:[n,": ",a]}),Object(c.jsx)("button",{type:"button",onClick:function(){return r(e)},className:y.a.ContactListItemButton,children:"Delete"})]})},N=function(t){var e=t.contacts,n=t.ondeleteContact;return 0===e.length?null:Object(c.jsx)("ul",{className:y.a.ContactList,children:e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(c.jsx)("li",{className:y.a.ContactListItem,children:Object(c.jsx)(k,{id:e,name:a,number:r,ondeleteContact:n})},e)}))})},T=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},S=Object(u.b)((function(t){var e=t.phonebook,n=e.contacts,a=e.filter;return{contacts:T(n,a)}}),(function(t){return{ondeleteContact:function(e){return t(x(e))}}}))(N),B=n(19),w=n.n(B),A=function(t){var e=t.filter,n=t.onChangeFilter;return Object(c.jsxs)("label",{children:[Object(c.jsx)("p",{className:w.a.FilterText,children:"Find contacts by name :"}),Object(c.jsx)("input",{type:"text",value:e,onChange:n,placeholder:"Enter name for search",className:w.a.FilterInput})]})},E=Object(u.b)((function(t){return{filter:t.phonebook.filter}}),(function(t){return{onChangeFilter:function(e){return t(I(e.target.value))}}}))(A),J=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Phonebook"}),Object(c.jsx)(g,{}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(E,{}),Object(c.jsx)(S,{})]})}}]),n}(r.Component),K=n(13),M=n(24),P=n.n(M),z=n(4),D=n(25),R=n.n(D),G=n(2),H=Object(O.c)([],(a={},Object(p.a)(a,C,(function(t,e){var n=e.payload;return[].concat(Object(K.a)(t),[n])})),Object(p.a)(a,x,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),Q=Object(O.c)("",Object(p.a)({},I,(function(t,e){return e.payload}))),U=Object(G.c)({contacts:H,filter:Q}),Z={key:"contacts",storage:R.a,blacklist:["filter"]},q=[].concat(Object(K.a)(Object(O.d)({serializableCheck:{ignoredActions:[z.a,z.f,z.b,z.c,z.d,z.e]}})),[P.a]),V=Object(O.a)({reducer:{phonebook:Object(z.g)(Z,U)},middleware:q,devTools:!1}),W=Object(z.h)(V);s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(u.a,{store:V,children:Object(c.jsx)(l.a,{loading:null,persistor:W,children:Object(c.jsx)(J,{})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={FormContainer:"ContactForm_FormContainer__2KhwM",InputTitle:"ContactForm_InputTitle__KjG2C",InputField:"ContactForm_InputField__2OKJR",InputButton:"ContactForm_InputButton__2inUS"}},8:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__3CgxQ",ContactListItem:"ContactList_ContactListItem__1eMHI",ContactListItemText:"ContactList_ContactListItemText__ISzdd",ContactListItemButton:"ContactList_ContactListItemButton__rBxP2"}}},[[41,1,2]]]);
//# sourceMappingURL=main.4e9d1159.chunk.js.map