(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(t,e,c){},61:function(t,e,c){},65:function(t,e,c){},69:function(t,e,c){},70:function(t,e,c){},73:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c(20),s=c.n(r),o=c(11),i=c(15),a=c.n(i),u=(c(61),c(2)),l=c(19),j=(c(65),c(0)),d=function(){Object(u.d)((function(t){return{store:t}}),u.b).store;return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{className:"navlink",to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(l.b,{className:"navlink",to:"/",children:"Settings"})})]})})},b=c(5),O=function(t){return function(e){var c=t.replace(/\s+/g," ").trim().split(" ").length;e({type:"SET_USER_INPUT",input:t,currentWordCount:c})}},h=function(){var t=Object(u.d)((function(t){return{input:t.test.input,text:t.test.text,category:t.test.category}}),u.b),e=t.input,c=t.text,r=t.category,s=Object(u.c)();Object(n.useEffect)((function(){""!==c.content&&c.content===e&&(s((function(t,e){t({type:"SET_TOTAL_WC",totalWordCount:e().test.totalWordCount+e().test.currentWordCount})})),s(function(t){return function(e){var c=t&&t.dbLabel?"https://turbotype.herokuapp.com/api/text/random?category=".concat(t.dbLabel):"https://turbotype.herokuapp.com/api/text/random";a.a.get(c).then((function(t){e({type:"SET_TEXT",text:t.data})})).catch((function(t){console.log(t)}))}}(r)),s(O("")))}),[e]);var o=c.content&&c.content.split(""),i=e.split("");return Object(j.jsx)("div",{className:"quote-display",children:o&&o.length>0&&o.map((function(t,e){return Object(j.jsx)("span",{className:e===i.length?"active-letter":e>i.length?"":t===i[e]?"correct":"incorrect",children:t},e)}))})},x=function(){var t=Object(u.d)((function(t){return{input:t.test.input,text:t.test.text}}),u.b),e=t.input,c=t.text,n=Object(u.c)();return Object(j.jsxs)("div",{children:[c.content&&Object(j.jsx)("textarea",{autoFocus:!0,value:e,onChange:function(t){return n(O(t.target.value))},className:"user-input"}),!c.content&&Object(j.jsx)("h1",{id:"test-area",children:"Test Area"})]})},f=(c(69),function(){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)(h,{}),Object(j.jsx)(x,{})]})});c(25);var v=function(t,e){var c=Object(n.useRef)();Object(n.useEffect)((function(){c.current=t}),[t]),Object(n.useEffect)((function(){if(null!==e){var t=setInterval((function(){c.current()}),e);return function(){return clearInterval(t)}}}),[e])},m=function(t){var e=t.count,c=Object(u.d)((function(t){return{totalWordCount:t.test.totalWordCount,currentWordCount:t.test.currentWordCount,timer:t.test.timer,results:t.test.results}}),u.b),n=c.totalWordCount,r=c.currentWordCount,s=(c.timer,c.results),o=s&&s.wordsPerMin?s.wordsPerMin:e?Math.floor((n+r)/e*60):0;return Object(j.jsx)("div",{children:Object(j.jsxs)("h2",{children:[o," Words/Minute"]})})},T=function(t){var e=t.count,c=t.setCount,r=Object(u.d)((function(t){return{timer:t.test.timer,category:t.test.category}}),u.b),s=r.timer,i=r.category,l=Object(n.useState)(!1),d=Object(o.a)(l,2),b=d[0],O=d[1],h=Object(u.c)();return v((function(){e===s.value-1&&(console.log("END TIMER LOGiC HERE!"),h((function(t,e){var c=e().test,n=c.totalWordCount,r=c.currentWordCount,s=c.timer,o=c.category,i=Math.floor((n+r)/s*60);t({type:"SET_TEST_RESULTS",results:{userId:1,totalWordCount:n+r,timer:s.value,category:o,wordsPerMin:i}})}))),c(e+1)}),b&&e<s.value?1e3:null),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"timer-container",children:[Object(j.jsxs)("div",{className:"timer glow-timer",children:[" ",s.value-e]}),Object(j.jsxs)("div",{className:"timer-container-footer",children:[Object(j.jsx)("button",{onClick:function(){h(function(t){return function(e){var c=t&&t.dbLabel?"https://turbotype.herokuapp.com/api/text/random?category=".concat(t.dbLabel):"https://turbotype.herokuapp.com/api/text/random";a.a.get(c).then((function(t){e({type:"SET_FIRST_TEXT",text:t.data})})).catch((function(t){console.log(t)}))}}(i)),c(0),O(!0)},children:"\u25b6\ufe0f"}),Object(j.jsx)("button",{onClick:function(){h((function(t){t({type:"RESET"})})),c(0),O(!1)},children:"\u23f9\ufe0f"})]})]})})},g=function(){return Object(j.jsx)("div",{className:"help-container",children:Object(j.jsx)("h1",{children:"Help"})})},p=function(t){var e=t.test;console.log("hello?",e);var c=e||{},n=c.create_date,r=c.category,s=c.timer,o=c.totalWordCount,i=c.wordsPerMin,a=n?n.match(/^\w+,\s\d+\s\w+(?!\d{4})/g):"";return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:a}),Object(j.jsx)("td",{children:i}),Object(j.jsx)("td",{children:o}),Object(j.jsxs)("td",{children:[s," sec."]}),Object(j.jsx)("td",{children:r})]})},y=function(){var t=Object(u.d)((function(t){return{results:t.test.results,tests:t.user.tests}}),u.b),e=(t.results,t.tests),c=Object(u.c)();Object(n.useEffect)((function(){c((function(t,e){var c=e().user.id,n="https://turbotype.herokuapp.com/api/user/".concat(c,"/tests");a.a.get(n).then((function(e){t({type:"SET_USER_TESTS",tests:e.data.tests})})).catch((function(t){console.log(t)}))}))}),[]);var r=e&&e.length>0?e.map((function(t){return Object(j.jsx)(p,{test:t},t.id)})):Object(j.jsx)("tr",{children:Object(j.jsx)("td",{colSpan:"4",children:" Nothing yet"})});return Object(j.jsx)("div",{style:{margin:"3em"},children:Object(j.jsxs)("table",{class:"table",children:[Object(j.jsxs)("thead",{children:[Object(j.jsx)("tr",{children:Object(j.jsx)("th",{colSpan:"5",style:{textAlign:"center",fontSize:"1.3em"},children:"Past Test Results"})}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Date"}),Object(j.jsx)("th",{children:"W/M"}),Object(j.jsx)("th",{children:"Words"}),Object(j.jsx)("th",{children:"Time"}),Object(j.jsx)("th",{children:"Category"})]})]}),Object(j.jsx)("tbody",{children:r})]})})},E=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"TestResultGraph"})})},S=function(){return Object(j.jsx)("div",{className:"history-card",children:Object(j.jsx)("h1",{children:"Achievements"})})},C=(c(70),function(){return Object(j.jsxs)("section",{className:"history",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(y,{}),Object(j.jsx)(E,{})]}),Object(j.jsx)(S,{})]})}),_=function(t){var e=t.count,c=Object(u.d)((function(t){return{results:t.test.results}}),u.b).results,n=c||{},r=n.category,s=n.timer,o=n.totalWordCount;return Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{count:e}),c&&Object.keys(c).length>0&&Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Word Count: ",o]}),Object(j.jsxs)("li",{children:["Timer: ",s," seconds"]}),Object(j.jsxs)("li",{children:["Category: ",r.value]})]})})]})},R=c(28),k=function(t){var e=t.title,c=t.header,r=t.resetThenSet,s=t.list,i=Object(n.useState)(!1),a=Object(o.a)(i,2),u=a[0],l=a[1],d=function(t){b.current.contains(t.target)||l(!1)};Object(n.useEffect)((function(){return document.addEventListener("mousedown",d),function(){document.removeEventListener("mousedown",d)}}),[]);var b=Object(n.useRef)();return Object(j.jsxs)("div",{ref:b,className:"dd-wrapper",children:[Object(j.jsx)("p",{children:e}),Object(j.jsxs)("button",{type:"button",className:"dd-header",onClick:function(){l(!u)},children:[Object(j.jsx)("div",{className:"dd-header-title",children:c}),u?"-":"+"]}),u&&Object(j.jsx)("div",{role:"list",className:"dd-list",children:s.map((function(t){return Object(j.jsx)("button",{type:"button",className:t.value===c?"dd-list-item dd-active":"dd-list-item",onClick:function(){return function(t){var e=t.id,c=t.key;r(e,c),l(!1)}(t)},children:t.value},t.id)}))})]})},W=[{id:0,value:30,selected:!1,key:"timer"},{id:1,value:60,selected:!1,key:"timer"},{id:2,value:300,selected:!1,key:"timer"},{id:3,value:600,selected:!1,key:"timer"}],N=[{id:0,value:"Any",dbLabel:null,selected:!1,key:"category"},{id:1,value:"Facts",dbLabel:"fact",selected:!1,key:"category",tags:["Letters only","Letters & Numbers","Letters, Numbers, & Punctuation"]},{id:2,value:"Quotes",dbLabel:"quote",selected:!1,key:"category"},{id:3,value:"Music",dbLabel:"song",selected:!1,key:"category",tags:["Any","R&B","Pop","Rock"]},{id:4,value:"Star Wars",dbLabel:"star_wars",selected:!1,key:"category",tags:["Any","1-3","4-6","7-9"]}],L=function(){var t=Object(u.d)((function(t){return{timer:t.test.timer,category:t.test.category}}),u.b),e=t.timer,c=t.category,n=Object(u.c)(),r=function(t,e){var c;switch(e){case"timer":(c=Object(R.a)(W)).forEach((function(t){return t.selected=!1})),c[t].selected=!0,n(function(t){return function(e){e({type:"SET_TIMER",timer:t})}}(c[t]));break;case"category":(c=Object(R.a)(N)).forEach((function(t){return t.selected=!1})),c[t].selected=!0,n(function(t){return function(e){e({type:"SET_CATEGORY",category:t})}}(c[t]));break;default:console.log("default",e)}};return Object(j.jsxs)("div",{children:[Object(j.jsx)(k,{title:"Timer",list:W,header:e.value,resetThenSet:r}),Object(j.jsx)(k,{title:"Category",list:N,header:c.value,resetThenSet:r})]})},w=function(){var t=Object(n.useState)("Results"),e=Object(o.a)(t,2),c=e[0],r=e[1],s=function(t){t.preventDefault(),r(t.target.id)},i=Object(n.useState)(0),a=Object(o.a)(i,2),u=a[0],l=a[1];return Object(j.jsxs)("div",{className:"tools",children:[Object(j.jsx)(T,{count:u,setCount:l}),Object(j.jsx)(g,{}),Object(j.jsxs)("div",{className:"tools-tab-container",children:[Object(j.jsxs)("ul",{className:"tools-tab",children:[Object(j.jsx)("li",{className:"Results"===c?"active":"",id:"Results",onClick:function(t){return s(t)},children:"Results"}),Object(j.jsx)("li",{className:"Settings"===c?"active":"",id:"Settings",onClick:function(t){return s(t)},children:"\u2699\ufe0f"})]}),"Settings"===c&&Object(j.jsx)(L,{}),"Results"===c&&Object(j.jsx)(_,{count:u})]})]})};var I=function(){var t=Object(n.useState)({}),e=Object(o.a)(t,2);return e[0],e[1],Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(b.c,{children:[Object(j.jsx)(b.a,{exact:!0,path:"/",children:Object(j.jsxs)("main",{children:[Object(j.jsx)(w,{}),Object(j.jsx)(f,{})]})}),Object(j.jsx)(b.a,{path:"/history",children:Object(j.jsx)(C,{})})]})]})})},U=c(12),A=c(37),M=c(4),G=c(16),P=c.n(G),X=c(13),F={timer:{id:0,value:30,selected:!1,key:"timer"},input:"",text:"",totalWordCount:0,currentWordCount:0,results:{},category:{id:0,value:"Any",dbLabel:null,selected:!1,key:"category"}},D={key:"test",storage:P.a},H=Object(X.a)(D,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_USER_INPUT":return console.log("SET_USER_INPUT"),Object(M.a)(Object(M.a)({},t),{},{input:e.input,currentWordCount:e.currentWordCount});case"SET_TIMER":return console.log("SET_TIMER"),Object(M.a)(Object(M.a)({},t),{},{timer:e.timer});case"SET_CATEGORY":return console.log("SET_CATEGORY"),Object(M.a)(Object(M.a)({},t),{},{category:e.category});case"SET_TEXT":return console.log("SET_TEXT"),Object(M.a)(Object(M.a)({},t),{},{text:e.text,input:""});case"SET_FIRST_TEXT":return console.log("SET_FIRTS_TEXT"),Object(M.a)(Object(M.a)({},t),{},{text:e.text,input:"",textinput:"",totalWordCount:0,currentWordCount:0,results:{}});case"SET_TOTAL_WC":return console.log("SET_TOTAL_WC"),Object(M.a)(Object(M.a)({},t),{},{totalWordCount:e.totalWordCount,currentWordCount:0});case"SET_TEST_RESULTS":return console.log("SET_TEST_RESULTS"),console.log("RESULTS:",e.results),Object(M.a)(Object(M.a)({},t),{},{results:e.results,input:"",text:""});case"RESET":return console.log("REST"),Object(M.a)(Object(M.a)({},t),{},{text:{content:""},input:"",totalWordCount:0,currentWordCount:0,results:{}});default:return t}})),Y={id:1,name:"Test User",email:"test@e.mail",tests:[],isAuthenticated:!1},q={key:"user",storage:P.a},B=Object(X.a)(q,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOGIN":return console.log("LOGIN"),Object(M.a)(Object(M.a)({},t),{},{name:e.user.name,email:e.user.email});case"LOGOUT":return console.log("LOGOUT"),Y;case"SET_USER_TESTS":return console.log("GET_USER_TESTS"),Object(M.a)(Object(M.a)({},t),{},{tests:e.tests});default:return t}})),J=Object(U.b)({test:H,user:B}),z=c(38),Q={key:"root",storage:P.a},K=Object(X.a)(Q,J),V=Object(U.c)(K,Object(U.a)(A.a)),Z=Object(X.b)(V);s.a.render(Object(j.jsx)(u.a,{store:V,children:Object(j.jsx)(z.a,{persistor:Z,children:Object(j.jsx)(I,{})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.4a81d167.chunk.js.map