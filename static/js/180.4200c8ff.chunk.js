"use strict";(self.webpackChunkreact_new_todo=self.webpackChunkreact_new_todo||[]).push([[180],{8180:function(e,t,i){i.r(t),i.d(t,{default:function(){return h}});var n=i(1413),r=i(2791),l=i(9195),o=i(1265),c=i(4386),s=i(6030),a=i(2498),u=i(6871),d=i(4329),m=i(184),f=c.Ry({title:c.Z_().min(4).required(),complete:c.O7().required()});function h(){var e,t=(0,d.C)((function(e){return e.todo.list})),i=(0,u.UO)().id,c=(0,s.I0)(),h=(0,l.cI)({resolver:(0,o.X)(f)}),p=h.register,x=h.handleSubmit,b=h.setValue,v=h.formState.errors;return(0,r.useEffect)((function(){if(t&&t.length&&i){var e=t.find((function(e){return Number(i)===e.id}));e&&(b("title",e.title),b("complete",e.complete))}}),[i,b]),(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)("h3",{children:"Form Validation"}),(0,m.jsxs)("form",{onSubmit:x((function(e){if(t&&t.length&&i&&t.find((function(e){return Number(i)===e.id}))){var r=(0,n.Z)((0,n.Z)({},e),{},{id:+i});return void c(a.d.updateToDo(r))}c(a.d.addToDo((0,n.Z)((0,n.Z)({},e),{},{id:Date.now()}))),b("title",""),b("complete",!0)})),children:[(0,m.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Todo List"}),(0,m.jsx)("input",(0,n.Z)((0,n.Z)({},p("title")),{},{type:"text",className:"form-control"})),v.title&&(0,m.jsx)("p",{children:v.title.message}),(0,m.jsxs)("div",{className:"mb-3 form-check",children:[(0,m.jsx)("input",(0,n.Z)((0,n.Z)({},p("complete")),{},{type:"checkbox",className:"form-check-input",id:"checkbox"})),(0,m.jsx)("label",{className:"form-check-label",htmlFor:"checkbox",children:"Complete"}),(0,m.jsx)("p",{children:null===(e=v.complete)||void 0===e?void 0:e.message})]}),(0,m.jsx)("input",{type:"submit"})]})]})}},4329:function(e,t,i){i.d(t,{C:function(){return n}});var n=i(6030).v9}}]);
//# sourceMappingURL=180.4200c8ff.chunk.js.map