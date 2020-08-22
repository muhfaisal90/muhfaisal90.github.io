(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),o=a.n(r),l=(a(28),a(3)),s=a(4),i=a(6),u=a(5),d=a(12),m=a(1),p=a(22),h=a(9),b=a(20),v=a.n(b),f=(a(29),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).addRecord=e.addRecord.bind(Object(h.a)(e)),e}return Object(s.a)(a,[{key:"addRecord",value:function(e){var t=this;e.preventDefault(),fetch("http://localhost:4000/tasks",{method:"POST",headers:{"Content-Type":"Application/json"},body:JSON.stringify({id:Math.floor(1048576*(Math.random()+1)),title:e.target.task.value,isCompleted:"false"})}).then((function(e){return e.json()})).then((function(e){return t.props.addRec(e)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.addRecord,className:"mt5"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",name:"task",id:"task",className:"form-control",placeholder:"Add new task here..."})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block",value:"Add Task"})))}}]),a}(n.Component)),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).delRecord=n.delRecord.bind(Object(h.a)(n)),n.editRecord=n.editRecord.bind(Object(h.a)(n)),n.updateRecord=n.updateRecord.bind(Object(h.a)(n)),n.state={isEdit:!1},n}return Object(s.a)(a,[{key:"delRecord",value:function(e){var t=this,a=e.target.getAttribute("datakey");fetch("http://localhost:4000/tasks/"+a,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(){fetch("http://localhost:4000/tasks").then((function(e){return e.json()})).then((function(e){return t.props.onDel(e)})).catch((function(e){return console.log()}))})).catch((function(e){return console.log(e)}))}},{key:"editRecord",value:function(){this.setState({isEdit:!0})}},{key:"updateRecord",value:function(e){var t=this;e.preventDefault();var a=e.target.id.value;fetch("http://localhost:4000/tasks/"+a,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e.target.task.value,isCompleted:"false"})}).then((function(e){return e.json()})).then((function(e){t.props.onUpdate(e),t.setState({isEdit:!1})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.title,r=e.isCompleted,o=!0===this.state.isEdit?c.a.createElement("form",{onSubmit:this.updateRecord,className:"mt5"},c.a.createElement("input",{type:"hidden",name:"id",id:"id",defaultValue:t}),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"text",name:"task",id:"task",defaultValue:a,className:"form-control",placeholder:"Add new task here..."})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block",value:"Update Task"}))):c.a.createElement("li",{className:"list-group-item",key:t},a," - ",r," -",c.a.createElement("button",{className:"btn btn-primary",onClick:this.editRecord,datakey:t},"Edit")," -",c.a.createElement("button",{className:"btn btn-danger",onClick:this.delRecord,datakey:t},"Delete"));return c.a.createElement(n.Fragment,null,o)}}]),a}(n.Component),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={tasks:[]},e.addRecord=e.addRecord.bind(Object(h.a)(e)),e.delRecord=e.delRecord.bind(Object(h.a)(e)),e.getRecord=e.getRecord.bind(Object(h.a)(e)),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getRecord()}},{key:"getRecord",value:function(){var e=this;fetch("http://localhost:4000/tasks").then((function(e){return e.json()})).then((function(t){return e.setState({tasks:t})})).catch((function(e){return console.log()}))}},{key:"addRecord",value:function(e){var t=[].concat(Object(p.a)(this.state.tasks),[e]);this.setState({tasks:t})}},{key:"delRecord",value:function(e){this.setState({tasks:e})}},{key:"render",value:function(){var e=this,t=this.state.tasks.map((function(t){return c.a.createElement(E,Object.assign({key:t.id},t,{onDel:e.delRecord,onUpdate:e.getRecord}))}));return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:v.a,className:"App-logo",alt:"logo"}),c.a.createElement("h1",null,"Welcome to React App")),c.a.createElement("div",{className:"App-intro"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-md-3"},c.a.createElement(f,{addRec:this.addRecord}),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item active"},"TO DO TASKS"),t))))))}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("h1",null,"Welcome to home page.")}}]),a}(n.Component),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("h1",null,"Welcome to about page.")}}]),a}(n.Component),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("h1",null,"Welcome to contact page.")}}]),a}(n.Component),y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement(n.Fragment,null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},c.a.createElement(d.b,{className:"navbar-brand",to:"/"},"React App"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement(d.b,{className:"nav-link",to:"/home"},"Home ",c.a.createElement("span",{className:"sr-only"},"(current)"))),c.a.createElement("li",{className:"nav-item"},c.a.createElement(d.b,{className:"nav-link",to:"/about"},"About")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(d.b,{className:"nav-link",to:"/tasks"},"Tasks")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(d.b,{className:"nav-link",to:"/contact"},"Contact"))))),c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/",component:g}),c.a.createElement(m.a,{exact:!0,path:"/home",component:g}),c.a.createElement(m.a,{exact:!0,path:"/about",component:j}),c.a.createElement(m.a,{exact:!0,path:"/tasks",component:k}),c.a.createElement(m.a,{exact:!0,path:"/contact",component:O}))))}}]),a}(n.Component),N=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(y,null)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.cc1b6285.chunk.js.map