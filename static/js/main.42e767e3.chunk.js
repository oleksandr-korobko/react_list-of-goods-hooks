(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,o=n(7),c=n.n(o),r=n(6),i=n(8),a=n(1),l=(n(13),n(14),n(4)),u=n.n(l),b=n(0);!function(t){t[t.None=0]="None",t[t.none=1]="none",t[t.Alphabet=2]="Alphabet",t[t.alphabet=3]="alphabet",t[t.Length=4]="Length",t[t.length=5]="length"}(s||(s={}));var h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var p=function(){var t=Object(a.useState)(s.None),e=Object(r.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(!1),l=Object(r.a)(c,2),p=l[0],j=l[1],g=function(t,e){var n=e.sortType,o=e.isReversed,c=Object(i.a)(t);switch(n){case s.Alphabet:c.sort((function(t,e){return t.localeCompare(e)}));break;case s.Length:c.sort((function(t,e){return t.length-e.length}))}return o&&c.reverse(),c}(h,{sortType:n,isReversed:p});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":n!==s.Alphabet}),onClick:function(){return o(s.Alphabet)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":n!==s.Length}),onClick:function(){return o(s.Length)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!p}),onClick:function(){return j((function(t){return!t}))},children:"Reverse"}),(n!==s.None||p)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){j(!1),o(s.None)},children:"Reset"})]}),Object(b.jsx)("ul",{children:g.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.42e767e3.chunk.js.map