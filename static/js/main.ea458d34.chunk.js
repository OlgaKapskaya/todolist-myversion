(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{32:function(t,e,n){t.exports={container:"Todolist_container__2Zimt",deleteButton:"Todolist_deleteButton__2G12D"}},41:function(t,e,n){t.exports=n(64)},49:function(t,e,n){},50:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var a,r,i=n(0),o=n.n(i),c=n(10),l=n.n(c),u=(n(49),n(50),n(16)),s=u.b,d=u.c,f=n(2),m=n(14),O=n(70).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/",withCredentials:!0,headers:{"API-KEY":"a3689f8d-4bdb-4cdd-9a1a-83733437adfc"}}),b=function(){return O.get("todo-lists")},E=function(t){return O.post("todo-lists",{title:t})},T=function(t){return O.delete("todo-lists/".concat(t))},j=function(t,e){return O.put("todo-lists/".concat(t),{title:e})},D=function(t){return O.get("todo-lists/".concat(t,"/tasks"))},p=[];!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(a||(a={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(r||(r={}));var I=n(75),v=n(69),S=n(23),h=n(71),y=n(73),g=function(t){var e=t.task;t.todolistID,s();return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,null,o.a.createElement(h.a.Header,{style:{textAlign:"right"}},o.a.createElement(S.RiDeleteBin6Line,null),e.title),o.a.createElement(h.a.Body,null,e.description,o.a.createElement(y.a,{variant:"flush"},o.a.createElement(y.a.Item,null,"Status: ",e.status),o.a.createElement(y.a.Item,null,"Priority: ",e.priority),o.a.createElement(y.a.Item,null,"Start date: ",e.startDate),o.a.createElement(y.a.Item,null," Deadline: ",e.deadline)))))},_=n(9),k=n(74),L={},w=n(32),A=n.n(w),C=n(8),N=n(72),B=Object(i.memo)((function(t){var e=t.title,n=t.onChangeText,a=Object(i.useState)(!1),r=Object(C.a)(a,2),c=r[0],l=r[1],u=Object(i.useState)(""),s=Object(C.a)(u,2),d=s[0],f=s[1],m=function(){l(!1),O()},O=function(){""!==d&&(n(d),l(!1))};return o.a.createElement(o.a.Fragment,null,c?o.a.createElement(N.a.Control,{type:"text",size:"sm",as:"input",value:d,onChange:function(t){f(t.currentTarget.value)},onBlur:m,onKeyPress:function(t){"Enter"===t.key&&(O(),m())},autoFocus:!0}):o.a.createElement("span",{onDoubleClick:function(){f(e),l(!0)}}," ",e," "))})),x=function(t){var e=t.todolistID,n=t.title,r=t.filter,c=s();Object(i.useEffect)((function(){c(function(t){return function(e){D(t).then((function(n){e(function(t,e){return{type:"SET_TASKS",todolistID:t,tasks:e}}(t,n.data.items))}))}}(e))}),[e,c]);var l=d((function(t){return t.tasks[e]}));"active"===r&&(l=l.filter((function(t){return t.status===a.New}))),"completed"===r&&(l=l.filter((function(t){return t.status===a.Completed})));var u=Object(i.useCallback)((function(t){c(function(t,e){return function(n){j(t,e).then((function(a){n(function(t,e){return{type:"CHANGE_TODOLIST_TITLE",id:t,title:e}}(t,e))}))}}(e,t))}),[c]);return o.a.createElement("div",{className:A.a.container},o.a.createElement(I.a,{style:{width:"100%"}},o.a.createElement(I.a.Header,{style:{textAlign:"right"}},o.a.createElement(S.RiDeleteBin6Line,{onClick:function(){c(function(t){return function(e){T(t).then((function(n){e(function(t){return{type:"REMOVE_TODOLIST",id:t}}(t))}))}}(e))},className:A.a.deleteButton}),o.a.createElement(I.a.Title,{style:{textAlign:"left"}},o.a.createElement(B,{title:n,onChangeText:u}))),o.a.createElement(I.a.Body,null,l&&l.map((function(t){return o.a.createElement(g,{task:t,key:t.id,todolistID:e})}))),o.a.createElement(I.a.Footer,null,o.a.createElement(v.a,{variant:"outline-primary",size:"sm"},"all"),o.a.createElement(v.a,{variant:"outline-primary",size:"sm"},"active"),o.a.createElement(v.a,{variant:"outline-primary",size:"sm"},"completed"))))},H=Object(i.memo)((function(t){var e=t.label,n=t.addItem,a=Object(i.useState)(""),r=Object(C.a)(a,2),c=r[0],l=r[1],u=Object(i.useState)(""),s=Object(C.a)(u,2),d=s[0],f=s[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(N.a.Control,{type:"text",size:"sm",as:"input",value:c,placeholder:e,onChange:function(t){l(t.currentTarget.value)},onBlur:function(){return f("")},onKeyPress:function(t){f(""),"Enter"===t.key&&(""!==c.trim()?(n(c.trim()),l("")):f("Incorrect value"),l(""))}}),d&&o.a.createElement(N.a.Text,{muted:!0},d))}));var K=function(){var t=s(),e=d((function(t){return t.todolists}));Object(i.useEffect)((function(){t((function(t){b().then((function(e){t({type:"SET_TODOLISTS",todolists:e.data})}))}))}),[]);var n=Object(i.useCallback)((function(e){t(function(t){return function(e){E(t).then((function(t){e({type:"ADD_TODOLIST",todolist:t.data.data.item})}))}}(e))}),[t]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"AppHeader"},o.a.createElement(H,{label:"Add todolist",addItem:n})),o.a.createElement("div",{className:"App"},e&&e.map((function(t){return o.a.createElement(x,{todolistID:t.id,key:t.id,title:t.title,filter:t.filter})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(63);var R=n(27),F=n(40),G=Object(R.b)({todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODOLIST":return[Object(f.a)(Object(f.a)({},e.todolist),{},{filter:"all"})].concat(Object(m.a)(t));case"REMOVE_TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"CHANGE_TODOLIST_TITLE":return t.map((function(t){return t.id===e.id?Object(f.a)(Object(f.a)({},t),{},{title:e.title}):t}));case"CHANGE_TODOLIST_FILTER":return t.map((function(t){return t.id===e.id?Object(f.a)(Object(f.a)({},t),{},{filter:e.filter}):t}));case"SET_TODOLISTS":return e.todolists.map((function(t){return Object(f.a)(Object(f.a)({},t),{},{filter:"all"})}));default:return t}},tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE_TASK":return Object(f.a)(Object(f.a)({},t),{},Object(_.a)({},e.todolistID,t[e.todolistID].filter((function(t){return t.id!==e.taskID}))));case"ADD_TASK":var n={id:Object(k.a)(),todoListId:e.todolistID,title:e.taskTitle,description:"",status:a.New,priority:r.Urgently,startDate:new Date,deadline:new Date,addedDate:new Date};return Object(f.a)(Object(f.a)({},t),{},Object(_.a)({},e.todolistID,[n].concat(Object(m.a)(t[e.todolistID]))));case"CHANGE_TASK_STATUS":return Object(f.a)(Object(f.a)({},t),{},Object(_.a)({},e.todolistID,t[e.todolistID].map((function(t){return t.id===e.taskID?Object(f.a)(Object(f.a)({},t),{},{status:e.status}):t}))));case"CHANGE_TASK_TITLE":return Object(f.a)(Object(f.a)({},t),{},Object(_.a)({},e.todolistID,t[e.todolistID].map((function(t){return t.id===e.taskID?Object(f.a)(Object(f.a)({},t),{},{title:e.newTitle}):t}))));case"ADD_TODOLIST":return Object(f.a)(Object(f.a)({},t),{},Object(_.a)({},e.todolist.id,[]));case"REMOVE_TODOLIST":var i=Object(f.a)({},t);return delete i[e.id],i;case"SET_TODOLISTS":var o=Object(f.a)({},t);return e.todolists.forEach((function(t){o[t.id]=[]})),o;case"SET_TASKS":return Object(f.a)(Object(f.a)({},t),{},Object(_.a)({},e.todolistID,e.tasks));default:return t}}}),M=Object(R.c)(G,Object(R.a)(F.a));l.a.render(o.a.createElement(u.a,{store:M},o.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.ea458d34.chunk.js.map