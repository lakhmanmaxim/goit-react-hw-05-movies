"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[843],{6843:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(9439),s=r(1087),a=r(7689),c=r(2791),i=r(232),u="styles_title__Pfcy9",o="styles_img__ow33S",l="styles_wrapper__ZiOBX",p="styles_textWrapper__QMb6m",f="styles_text__cPabz",d="styles_textAbout__+YkNx",h=r(184),m=function(){var e,t=(0,c.useState)([]),r=(0,n.Z)(t,2),m=r[0],v=r[1],x=(0,a.UO)().id,_=(0,a.s0)(),w=(null===(e=(0,a.TH)().state)||void 0===e?void 0:e.from)||"/";(0,c.useEffect)((function(){(0,i.TP)(x).then((function(e){v(e)})).catch((function(e){console.log(e.message)}))}),[x]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{onClick:function(){return _(w)},children:"Go back"}),(0,h.jsx)("h1",{className:u,children:m.title}),(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("img",{className:o,src:"https://image.tmdb.org/t/p/w200".concat(m.poster_path),alt:m.tagline}),(0,h.jsxs)("div",{className:p,children:[(0,h.jsxs)("p",{className:d,children:["Release date: ",(0,h.jsxs)("span",{children:["(","".concat(m.release_date).slice(0,4),")"]})]}),(0,h.jsx)("p",{className:d,children:"Overview:"}),(0,h.jsx)("p",{className:f,children:m.overview}),(0,h.jsx)("p",{className:d,children:"Genres:"}),(0,h.jsx)("ul",{children:m.genres&&m.genres.map((function(e){return(0,h.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,h.jsx)("div",{children:(0,h.jsxs)("ul",{children:[(0,h.jsx)(s.rU,{to:"cast",state:{from:w},children:(0,h.jsx)("li",{children:"Cast"})}),(0,h.jsx)(s.rU,{to:"reviews",state:{from:w},children:(0,h.jsx)("li",{children:"Reviews"})}),(0,h.jsx)(a.j3,{})]})})]})}},232:function(e,t,r){r.d(t,{LP:function(){return i},TP:function(){return u},Zi:function(){return p},qF:function(){return o},xL:function(){return l}});var n=r(5861),s=r(7757),a=r.n(s),c=r(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"294902272f63193a25077f4f88077abd"}}),i=function(){var e=(0,n.Z)(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"movie","week",e.next=4,c.get("/trending/".concat("movie","/").concat("week"));case 4:return t=e.sent,r=t.data,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie?query=".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=843.a426f446.chunk.js.map