(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(5),c=n.n(r),o=n(6),a=n(4),u=n(3),s=n.n(u),i=n(1),d=(n(12),n(0)),b=function(t){var e=t.goods;return Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})};function l(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var f=function(){var t=Object(i.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],c=Object(i.useState)(""),u=Object(a.a)(c,2),f=u[0],j=u[1],p=function(){var t=Object(o.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,t.t0=f,t.next="all-button"===t.t0?4:"first-five-button"===t.t0?10:"red-button"===t.t0?16:22;break;case 4:return t.t1=r,t.next=7,l();case 7:return t.t2=t.sent,(0,t.t1)(t.t2),t.abrupt("return");case 10:return t.t3=r,t.next=13,l().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}));case 13:return t.t4=t.sent,(0,t.t3)(t.t4),t.abrupt("return");case 16:return t.t5=r,t.next=19,l().then((function(t){return t.filter((function(t){return"red"===t.color}))}));case 19:return t.t6=t.sent,(0,t.t5)(t.t6),t.abrupt("return");case 22:return r([]),t.abrupt("return");case 24:t.next=29;break;case 26:t.prev=26,t.t7=t.catch(0),r([]);case 29:case"end":return t.stop()}}),t,null,[[0,26]])})));return function(){return t.apply(this,arguments)}}(),h=function(t){f!==t.currentTarget.id&&(j(t.currentTarget.id),p())};return Object(i.useEffect)((function(){p()}),[f]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Dynamic list of Goods"}),Object(d.jsx)("button",{type:"button","data-cy":"all-button",id:"all-button",onClick:h,children:"Load all goods"}),Object(d.jsx)("button",{type:"button","data-cy":"first-five-button",id:"first-five-button",onClick:h,children:"Load 5 first goods"}),Object(d.jsx)("button",{type:"button","data-cy":"red-button",id:"red-button",onClick:h,children:"Load red goods"}),Object(d.jsx)(b,{goods:n})]})};c.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bfabc31a.chunk.js.map