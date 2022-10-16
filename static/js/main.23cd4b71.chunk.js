(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={todolistContainer:"Todolist_todolistContainer__jMNyM",todolistTitleContainer:"Todolist_todolistTitleContainer__2LNoh",error:"Todolist_error__1X3LG",errorMessage:"Todolist_errorMessage__22mHY",emptyMessage:"Todolist_emptyMessage__1i0Gm",isDone:"Todolist_isDone__rlRX3"}},function(e,t,a){e.exports={defaultButton:"UniversalButton_defaultButton__3CCkw",deleteButton:"UniversalButton_deleteButton__1Nonv",activeFilter:"UniversalButton_activeFilter__2bj_a",img:"UniversalButton_img__3CRrj"}},,function(e,t,a){e.exports={errorMessage:"UniversalInput_errorMessage__2cF7g",input:"UniversalInput_input__3HBAU",inputError:"UniversalInput_inputError__1Nczh"}},function(e,t,a){e.exports=a.p+"static/media/trash.0a97d6f9.svg"},,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(12),c=a.n(l),o=(a(18),a(10)),r=a(1),s=a(3),u=a(2),d=(a(19),a(5)),m=a.n(d),b=a(6),f=a.n(b),j=function(e){var t="delete"===e.style?f.a.deleteButton:"active"===e.style?f.a.activeFilter:f.a.defaultButton;return i.a.createElement("button",{className:t,onClick:function(){e.callback()}},e.name,e.image&&i.a.createElement("img",{className:f.a.img,src:e.image,alt:"delete item"}))},v=function(e){return i.a.createElement("input",{type:"checkbox",checked:e.checked,onChange:function(t){e.callback(t.currentTarget.checked)}})},O=a(8),p=a.n(O),E=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],c=a[1];return i.a.createElement(i.a.Fragment,null,l&&i.a.createElement("div",{className:p.a.errorMessage},l),i.a.createElement("input",{className:l?p.a.inputError:p.a.input,value:e.value,onChange:function(t){e.onChangeText(t.currentTarget.value),""!==t.currentTarget.value.trim()?c(""):c(e.error)},onKeyPress:function(t){"Enter"===t.key&&e.onEnter()},onBlur:function(){c("")}}))},_=a(9),g=a.n(_),h=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)("all"),r=Object(u.a)(o,2),s=r[0],d=r[1],b=function(){""!==l.trim()?(e.addTask(l.trim(),e.todolistID),c("")):c("")};return i.a.createElement("div",{className:m.a.todolistContainer},i.a.createElement("div",{className:m.a.todolistTitleContainer},i.a.createElement(j,{name:"delete todolist ",image:g.a,callback:function(){return e.deleteTodolist(e.todolistID)}}),i.a.createElement("h3",null,e.title)),i.a.createElement("div",null,i.a.createElement(E,{value:l,onEnter:function(){b()},onChangeText:c,error:"Enter task title"}),i.a.createElement(j,{name:"ADD",callback:b})),0===e.tasks.length?i.a.createElement("span",{className:m.a.emptyMessage}," Task list is empty "):i.a.createElement("ul",null,e.tasks.map((function(t){return i.a.createElement("li",{key:t.id,className:t.isDone?m.a.isDone:""},i.a.createElement(j,{name:"",image:g.a,callback:function(){e.deleteTask(t.id,e.todolistID)},style:"delete"}),i.a.createElement(v,{checked:t.isDone,callback:function(a){return function(a){e.changeStatus(t.id,a,e.todolistID)}(a)}}),i.a.createElement("span",null,t.title))}))),i.a.createElement("div",null,i.a.createElement(j,{name:"All",callback:function(){e.changeFilter("all",e.todolistID),d("all")},style:"all"===s?"active":""}),i.a.createElement(j,{name:"Active",callback:function(){e.changeFilter("active",e.todolistID),d("active")},style:"active"===s?"active":""}),i.a.createElement(j,{name:"Completed",callback:function(){e.changeFilter("completed",e.todolistID),d("completed")},style:"completed"===s?"active":""})))},k=a(22);var D=function(){var e,t=Object(k.a)(),a=Object(k.a)(),l=Object(n.useState)([{id:t,title:"What to learn",filter:"all"},{id:a,title:"What to buy",filter:"all"}]),c=Object(u.a)(l,2),d=c[0],m=c[1],b=Object(n.useState)((e={},Object(s.a)(e,t,[{id:Object(k.a)(),title:"HTML&CSS",isDone:!0},{id:Object(k.a)(),title:"JS",isDone:!0},{id:Object(k.a)(),title:"ReactJS",isDone:!1},{id:Object(k.a)(),title:"Rest API",isDone:!1},{id:Object(k.a)(),title:"GraphQL",isDone:!1}]),Object(s.a)(e,a,[{id:Object(k.a)(),title:"HTML&CSS2",isDone:!0},{id:Object(k.a)(),title:"JS2",isDone:!0},{id:Object(k.a)(),title:"ReactJS2",isDone:!1},{id:Object(k.a)(),title:"Rest API2",isDone:!1},{id:Object(k.a)(),title:"GraphQL2",isDone:!1}]),e)),f=Object(u.a)(b,2),v=f[0],O=f[1],p=Object(n.useState)(""),_=Object(u.a)(p,2),g=_[0],D=_[1],T=function(e,t){O(Object(r.a)(Object(r.a)({},v),{},Object(s.a)({},t,v[t].filter((function(t){return t.id!==e})))))},y=function(e,t){m(d.map((function(a){return a.id===t?Object(r.a)(Object(r.a)({},a),{},{filter:e}):a})))},C=function(e,t){var a={id:Object(k.a)(),title:e,isDone:!1};O(Object(r.a)(Object(r.a)({},v),{},Object(s.a)({},t,[a].concat(Object(o.a)(v[t])))))},S=function(e,t,a){O(Object(r.a)(Object(r.a)({},v),{},Object(s.a)({},a,v[a].map((function(a){return a.id===e?Object(r.a)(Object(r.a)({},a),{},{isDone:t}):a})))))},I=function(e){m(d.filter((function(t){return t.id!==e})))},B=function(){if(""!==g){var e={id:Object(k.a)(),title:g,filter:"all"};m([e].concat(Object(o.a)(d))),O(Object(r.a)(Object(r.a)({},v),{},Object(s.a)({},e.id,[]))),D("")}},N=d.map((function(e){var t=v[e.id];return"all"===e.filter&&(t=v[e.id]),"active"===e.filter&&(t=v[e.id].filter((function(e){return!e.isDone}))),"completed"===e.filter&&(t=v[e.id].filter((function(e){return e.isDone}))),i.a.createElement(h,{todolistID:e.id,key:e.id,title:e.title,tasks:t,deleteTask:T,changeFilter:y,addTask:C,changeStatus:S,deleteTodolist:I})}));return i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement("div",{className:"headerContainer"},i.a.createElement(E,{error:"Enter todolist title",value:g,onChangeText:function(e){return function(e){D(e)}(e)},onEnter:function(){B()}}),i.a.createElement(j,{name:"ADD TODOLIST",callback:B}))),i.a.createElement("div",{className:"App"},N))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.23cd4b71.chunk.js.map