(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(t,e,c){},61:function(t,e,c){},65:function(t,e,c){},69:function(t,e,c){},70:function(t,e,c){},73:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c(18),s=c.n(r),o=c(11),i=c(21),a=c.n(i),u=(c(61),c(3)),l=c(16),j=(c(65),c(1)),d=function(){Object(u.d)((function(t){return{store:t}}),u.b).store;return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{className:"navlink",to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{className:"navlink",to:"/",children:"Settings"})})]})})},b=c(4),O=function(t){return function(e){var c=t.replace(/\s+/g," ").trim().split(" ").length;e({type:"SET_USER_INPUT",input:t,currentWordCount:c})}},h=function(){var t=Object(u.d)((function(t){return{input:t.test.input,text:t.test.text,category:t.test.category}}),u.b),e=t.input,c=t.text,r=t.category,s=Object(u.c)();Object(n.useEffect)((function(){""!==c.content&&c.content===e&&(s((function(t,e){t({type:"SET_TOTAL_WC",totalWordCount:e().test.totalWordCount+e().test.currentWordCount})})),s(function(t){return function(e){console.log("cat",t);var c=t&&t.dbLabel?"https://turbotype.herokuapp.com/api/text/random?category=".concat(t.dbLabel):"https://turbotype.herokuapp.com/api/text/random";console.log(c),a.a.get(c).then((function(t){e({type:"SET_TEXT",text:t.data})})).catch((function(t){console.log(t)}))}}(r)),s(O("")))}),[e]);var o=c.content&&c.content.split(""),i=e.split("");return Object(j.jsx)("div",{className:"quote-display",children:o&&o.length>0&&o.map((function(t,e){return Object(j.jsx)("span",{className:e===i.length?"active-letter":e>i.length?"":t===i[e]?"correct":"incorrect",children:t},e)}))})},x=function(){var t=Object(u.d)((function(t){return{input:t.test.input}}),u.b).input,e=Object(u.c)();return Object(j.jsx)("textarea",{autoFocus:!0,value:t,onChange:function(t){return e(O(t.target.value))},className:"quote-input"})},f=(c(69),function(){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)(h,{}),Object(j.jsx)(x,{})]})});c(25);var p=function(t,e){var c=Object(n.useRef)();Object(n.useEffect)((function(){c.current=t}),[t]),Object(n.useEffect)((function(){if(null!==e){var t=setInterval((function(){c.current()}),e);return function(){return clearInterval(t)}}}),[e])},v=function(t){var e=t.count,c=Object(u.d)((function(t){return{totalWordCount:t.test.totalWordCount,currentWordCount:t.test.currentWordCount,timer:t.test.timer}}),u.b),n=c.totalWordCount,r=c.currentWordCount,s=c.timer,o=n+r;return Object(j.jsx)("div",{children:Object(j.jsxs)("h2",{children:[e&&e!==s&&Math.floor(o/e*60),"W/M"]})})},m=function(){var t=Object(u.d)((function(t){return{timer:t.test.timer,category:t.test.category}}),u.b),e=t.timer,c=t.category,r=Object(n.useState)(0),s=Object(o.a)(r,2),i=s[0],l=s[1],d=Object(n.useState)(!1),b=Object(o.a)(d,2),O=b[0],h=b[1],x=Object(u.c)();return p((function(){i===e-1&&(console.log("END TIMER LOGiC HERE!"),x((function(t,e){var c=e().test,n=c.totalWordCount,r=c.currentWordCount,s=c.timer;t({type:"SET_TEST_RESULTS",results:{userId:1,totalWordCount:n+r,timer:s,category:c.category,wordsPerMin:Math.floor((n+r)/s*60)}})}))),l(i+1)}),O&&i<e?1e3:null),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"timer-container",children:[Object(j.jsxs)("div",{className:"timer glow-timer",children:[" ",e-i]}),Object(j.jsxs)("div",{className:"timer-container-footer",children:[Object(j.jsx)("button",{onClick:function(){x(function(t){return function(e){console.log("cat",t);var c=t&&t.dbLabel?"https://turbotype.herokuapp.com/api/text/random?category=".concat(t.dbLabel):"https://turbotype.herokuapp.com/api/text/random";console.log(c),a.a.get(c).then((function(t){e({type:"SET_FIRST_TEXT",text:t.data})})).catch((function(t){console.log(t)}))}}(c)),l(0),h(!0)},children:"\u25b6\ufe0f"}),Object(j.jsx)("button",{onClick:function(){x((function(t){t({type:"RESET"})})),l(0),h(!1)},children:"\u23f9\ufe0f"})]})]}),Object(j.jsx)(v,{count:i,isRunning:O})]})},T=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Help"})})},g=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"TestResultChart"})})},y=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"TestResultGraph"})})},E=function(){return Object(j.jsx)("div",{className:"history-card",children:Object(j.jsx)("h1",{children:"Achievements"})})},S=(c(70),function(){return Object(j.jsxs)("section",{className:"history",children:[Object(j.jsxs)("div",{className:"history-card",children:[Object(j.jsx)(g,{}),Object(j.jsx)(y,{})]}),Object(j.jsx)(E,{})]})}),C=function(){var t=Object(u.d)((function(t){return{results:t.test.results}}),u.b).results,e=t||{},c=e.category,n=e.timer,r=e.totalWordCount,s=e.wordsPerMin;return Object(j.jsx)("div",{children:t&&Object.keys(t).length>0&&Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Words Per Minute:",s]}),Object(j.jsxs)("li",{children:["Word Count: ",r]}),Object(j.jsxs)("li",{children:["Timer: ",n]}),Object(j.jsxs)("li",{children:["Category: ",c.value]})]})})})},_=c(28),k=function(t){var e=t.title,c=t.header,r=t.resetThenSet,s=t.list,i=Object(n.useState)(!1),a=Object(o.a)(i,2),u=a[0],l=a[1];return Object(j.jsxs)("div",{className:"dd-wrapper",children:[Object(j.jsx)("p",{children:e}),Object(j.jsxs)("button",{type:"button",className:"dd-header",onClick:function(){l(!u)},children:[Object(j.jsx)("div",{className:"dd-header-title",children:c}),u?"-":"+"]}),u&&Object(j.jsx)("div",{role:"list",className:"dd-list",children:s.map((function(t){return Object(j.jsx)("button",{type:"button",className:t.value===c?"dd-list-item dd-active":"dd-list-item",onClick:function(){return function(t){var e=t.id,c=t.key;r(e,c),l(!1)}(t)},children:t.value},t.id)}))})]})},W=[{id:0,value:30,selected:!1,key:"timer"},{id:1,value:60,selected:!1,key:"timer"},{id:2,value:300,selected:!1,key:"timer"},{id:3,value:600,selected:!1,key:"timer"}],R=[{id:0,value:"Any",dbLabel:null,selected:!1,key:"category"},{id:1,value:"Facts",dbLabel:"fact",selected:!1,key:"category",tags:["Letters only","Letters & Numbers","Letters, Numbers, & Punctuation"]},{id:2,value:"Quotes",dbLabel:"quote",selected:!1,key:"category"},{id:3,value:"Music",dbLabel:"music",selected:!1,key:"category",tags:["Any","R&B","Pop","Rock"]},{id:4,value:"Star Wars",dbLabel:"star_wars",selected:!1,key:"category",tags:["Any","1-3","4-6","7-9"]}],N=function(){var t=Object(u.d)((function(t){return{timer:t.test.timer,category:t.test.category}}),u.b),e=t.timer,c=t.category,n=Object(u.c)(),r=function(t,e){var c;switch(e){case"timer":(c=Object(_.a)(W)).forEach((function(t){return t.selected=!1})),c[t].selected=!0,n(function(t){return function(e){e({type:"SET_TIMER",timer:t})}}(c[t]));break;case"category":(c=Object(_.a)(R)).forEach((function(t){return t.selected=!1})),c[t].selected=!0,n(function(t){return function(e){e({type:"SET_CATEGORY",category:t})}}(c[t]));break;default:console.log("default",e)}};return Object(j.jsxs)("div",{children:[Object(j.jsx)(k,{title:"Timer",list:W,header:e,resetThenSet:r}),Object(j.jsx)(k,{title:"Category",list:R,header:c.value,resetThenSet:r})]})},L=function(){var t=Object(n.useState)("Settings"),e=Object(o.a)(t,2),c=e[0],r=e[1],s=function(t){t.preventDefault(),r(t.target.id)};return Object(j.jsxs)("div",{className:"tools",children:[Object(j.jsx)(m,{}),Object(j.jsxs)("div",{className:"tools-tab-container",children:[Object(j.jsxs)("ul",{className:"tools-tab",children:[Object(j.jsx)("li",{className:"Results"===c?"active":"",id:"Results",onClick:function(t){return s(t)},children:"Results"}),Object(j.jsx)("li",{className:"Help"===c?"active":"",id:"Help",onClick:function(t){return s(t)},children:"Help"}),Object(j.jsx)("li",{className:"Settings"===c?"active":"",id:"Settings",onClick:function(t){return s(t)},children:"\u2699\ufe0f"})]}),"Help"===c&&Object(j.jsx)(T,{}),"Settings"===c&&Object(j.jsx)(N,{}),"Results"===c&&Object(j.jsx)(C,{})]})]})};var I=function(){var t=Object(n.useState)({}),e=Object(o.a)(t,2);return e[0],e[1],Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsx)("main",{children:Object(j.jsxs)(b.c,{children:[Object(j.jsxs)(b.a,{exact:!0,path:"/",children:[Object(j.jsx)(L,{}),Object(j.jsx)(f,{})]}),Object(j.jsx)(b.a,{path:"/history",children:Object(j.jsx)(S,{})})]})})]})})},A=c(12),M=c(37),U=c(5),w=c(22),P=c.n(w),H=c(17),X={timer:15,input:"",text:"",totalWordCount:0,currentWordCount:0,results:{},category:{id:0,value:"Any",dbLabel:null,selected:!1,key:"category"}},F={key:"test",storage:P.a},G=Object(H.a)(F,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_USER_INPUT":return console.log("SET_USER_INPUT"),Object(U.a)(Object(U.a)({},t),{},{input:e.input,currentWordCount:e.currentWordCount});case"SET_TIMER":return console.log("SET_TIMER"),Object(U.a)(Object(U.a)({},t),{},{timer:e.timer});case"SET_CATEGORY":return console.log("SET_CATEGORY"),Object(U.a)(Object(U.a)({},t),{},{category:e.category});case"SET_TEXT":return console.log("SET_TEXT"),Object(U.a)(Object(U.a)({},t),{},{text:e.text,input:""});case"SET_FIRST_TEXT":return console.log("SET_FIRTS_TEXT"),Object(U.a)(Object(U.a)({},t),{},{text:e.text,input:"",textinput:"",totalWordCount:0,currentWordCount:0,results:{}});case"SET_TOTAL_WC":return console.log("SET_TOTAL_WC"),Object(U.a)(Object(U.a)({},t),{},{totalWordCount:e.totalWordCount,currentWordCount:0});case"SET_TEST_RESULTS":return console.log("SET_TEST_RESULTS"),console.log("RESULTS:",e.results),Object(U.a)(Object(U.a)({},t),{},{results:e.results,input:"",text:""});case"RESET":return console.log("REST"),Object(U.a)(Object(U.a)({},t),{},{text:{content:""},input:"",totalWordCount:0,currentWordCount:0,results:{}});default:return t}})),q=Object(A.b)({test:G}),Y=c(38),B={key:"root",storage:P.a},D=Object(H.a)(B,q),J=Object(A.c)(D,Object(A.a)(M.a)),Q=Object(H.b)(J);s.a.render(Object(j.jsx)(u.a,{store:J,children:Object(j.jsx)(Y.a,{persistor:Q,children:Object(j.jsx)(I,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.4b57119b.chunk.js.map