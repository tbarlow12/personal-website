(window["webpackJsonptbarlow12-personal-website"]=window["webpackJsonptbarlow12-personal-website"]||[]).push([[0],{35:function(e,t,n){e.exports=n(65)},40:function(e,t,n){},41:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(28),u=n.n(c),o=(n(40),n(8)),l=(n(41),n(6));function s(){return r.a.createElement("div",null,"This is my blog page")}var i=n(17),p=n(7),m=n.n(p),h=n(11),f=n(12),b=n(13),v=n(33),w=n(29),E=n(34),d=n(30),g=n.n(d),j=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(w.a)(t).call(this,"https://api.github.com"))}return Object(E.a)(t,e),Object(b.a)(t,[{key:"pulls",value:function(){var e=Object(h.a)(m.a.mark(function e(t,n){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("/repos/".concat(t,"/").concat(n,"/pulls"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"userEvents",value:function(){var e=Object(h.a)(m.a.mark(function e(t){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("/users/".concat(t,"/events"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(function(){function e(t){Object(f.a)(this,e),this.baseUrl=t}return Object(b.a)(e,[{key:"get",value:function(){var e=Object(h.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g()({url:"".concat(this.baseUrl).concat(t),method:"get"});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}());function O(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(),o=Object(i.a)(u,2),l=o[0],s=o[1],p=new j;return p.pulls("serverless","serverless-azure-functions").then(function(e){return c(e)}),p.userEvents("tbarlow12").then(function(e){return s(e)}),r.a.createElement("div",null,"This is my home page",n&&n.map(function(e){return r.a.createElement("div",null,e.title)}),l&&l.map(function(e){return r.a.createElement("div",null,e.type)}))}function y(){return r.a.createElement("div",{className:"app-content"},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:O}),r.a.createElement(l.a,{path:"/blog",exact:!0,component:s})))}function k(){return r.a.createElement("ul",{className:"app-sidebar"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/blog"},"Blog")))}var x=function(){return r.a.createElement("div",{className:"app-main"},r.a.createElement("h1",null,"Application"),r.a.createElement(o.a,null,r.a.createElement(k,null),r.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.222d7306.chunk.js.map