"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[559],{1559:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(9439),a=n(2791),u=n(7689),c=n(232),s="singleMovieReviewsPage_list__E6y3V",i="singleMovieReviewsPage_list_item__-Ffuc",o="singleMovieReviewsPage_author__Gnv17",f=n(184),p=function(){var e=(0,a.useState)([]),t=(0,r.Z)(e,2),n=t[0],p=t[1],v=(0,u.UO)().id;return(0,a.useEffect)((function(){(0,c.Zi)(v).then((function(e){p(e)})).catch((function(e){console.log(e.message)}))}),[v]),(0,f.jsx)("ul",{className:s,children:n.total_results?n.results.map((function(e){return(0,f.jsxs)("li",{className:i,children:[(0,f.jsx)("span",{className:o,children:e.author}),e.content]},e.id)})):(0,f.jsx)("p",{children:"There are currently no reviews...Sorry"})})}},232:function(e,t,n){n.d(t,{LP:function(){return s},TP:function(){return i},Zi:function(){return p},qF:function(){return o},xL:function(){return f}});var r=n(5861),a=n(7757),u=n.n(a),c=n(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"294902272f63193a25077f4f88077abd"}}),s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"movie","week",e.next=4,c.get("/trending/".concat("movie","/").concat("week"));case 4:return t=e.sent,n=t.data,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie?query=".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=559.536bafee.chunk.js.map