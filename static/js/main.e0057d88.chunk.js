(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{10:function(e,n,t){"use strict";t.d(n,"b",function(){return a}),t.d(n,"c",function(){return r}),t.d(n,"d",function(){return c}),t.d(n,"e",function(){return i}),t.d(n,"a",function(){return u}),t.d(n,"g",function(){return o}),t.d(n,"f",function(){return l});var a="COLLAPSE_MENU",r="COLLAPSE_TOGGLE",c="FULL_SCREEN",i="FULL_SCREEN_EXIT",u="CHANGE_LAYOUT",o="NAV_CONTENT_LEAVE",l="NAV_COLLAPSE_LEAVE"},12:function(e,n,t){"use strict";n.a={defaultPath:"/dashboard",basename:"/sigem",layout:"vertical",preLayout:null,collapseMenu:!1,layoutType:"menu-ligh",navIconColor:!1,headerBackColor:"header-default",navBackColor:"navbar-default",navBrandColor:"brand-default",navBackImage:!1,rtlLayout:!1,navFixedLayout:!0,headerFixedLayout:!1,boxLayout:!1,navDropdownIcon:"style1",navListIcon:"style1",navActiveListColor:"active-default",navListTitleColor:"title-default",navListTitleHide:!1,configBlock:!1,layout6Background:"linear-gradient(to right, #A445B2 0%, #D41872 52%, #FF0066 100%)",layout6BackSize:""}},24:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(){return r.a.createElement("div",{className:"loader-bg"},r.a.createElement("div",{className:"loader-track"},r.a.createElement("div",{className:"loader-fill"})))}},29:function(e,n,t){"use strict";n.a=function(e){return e.children}},44:function(e,n,t){e.exports=t(57)},57:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(30),i=t.n(c),u=t(31),o=t(63),l=t(13),s=t(14),d=t(16),f=t(15),O=t(17),m=t(58),b=t(64),p=t(38),E=t.n(p),h=(t(52),t(24)),g=t(29),j=t(59),v=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(f.a)(n).apply(this,arguments))}return Object(O.a)(n,e),Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),n}(r.a.Component),y=Object(j.a)(v),L=[{path:"/auth/signup-1",exact:!0,name:"Signup 1",component:r.a.lazy(function(){return Promise.all([t.e(4),t.e(36)]).then(t.bind(null,841))})},{path:"/auth/signin-1",exact:!0,name:"Signin 1",component:r.a.lazy(function(){return Promise.all([t.e(4),t.e(35)]).then(t.bind(null,842))})}],S=E()({loader:function(){return Promise.all([t.e(9),t.e(17)]).then(t.bind(null,846))},loading:h.a}),T=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(c)))).renderHome=function(){return r.a.createElement("h1",null,"Homee")},t}return Object(O.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=L.map(function(e,n){return e.component?r.a.createElement(m.a,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return r.a.createElement(e.component,n)}}):null});return r.a.createElement(g.a,null,r.a.createElement(y,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(h.a,null)},r.a.createElement(b.a,null,e,r.a.createElement(m.a,{path:"/",component:S})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=t(6),C=t(9),w=t(40),A=t.n(w),k=t(5),F=t(62),N=t(7),B=Object(F.a)(Object(k.a)({},N.f,function(e,n){return[n.payload]}),[]),x=Object(F.a)(Object(k.a)({},N.g,function(e,n){return[n.payload]}),[]),R=t(8),D=Object(F.a)(Object(k.a)({},N.d,function(e,n){return Object(R.a)(n.payload)}),[]),H=Object(F.a)(Object(k.a)({},N.e,function(e,n){return Object(R.a)(n.payload)}),[]),P=Object(F.a)(Object(k.a)({},N.c,function(e,n){return Object(R.a)(n.payload)}),[]),I=t(10),U=t(12),G=Object(_.a)({isOpen:[],isTrigger:[]},U.a,{isFullScreen:!1}),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1?arguments[1]:void 0,t=[],a=[];switch(n.type){case I.b:return Object(_.a)({},e,{collapseMenu:!e.collapseMenu});case I.c:if("sub"===n.menu.type){a=e.isOpen;var r=(t=e.isTrigger).indexOf(n.menu.id);r>-1&&(a=a.filter(function(e){return e!==n.menu.id}),t=t.filter(function(e){return e!==n.menu.id})),-1===r&&(a=[].concat(Object(R.a)(a),[n.menu.id]),t=[].concat(Object(R.a)(t),[n.menu.id]))}else{a=e.isOpen;var c=e.isTrigger.indexOf(n.menu.id);t=-1===c?[n.menu.id]:[],a=-1===c?[n.menu.id]:[]}return Object(_.a)({},e,{isOpen:a,isTrigger:t});case I.g:return Object(_.a)({},e,{isOpen:a,isTrigger:t});case I.f:return"sub"===n.menu.type?(a=e.isOpen,(t=e.isTrigger).indexOf(n.menu.id)>-1&&(a=a.filter(function(e){return e!==n.menu.id}),t=t.filter(function(e){return e!==n.menu.id})),Object(_.a)({},e,{isOpen:a,isTrigger:t})):Object(_.a)({},e);case I.d:return Object(_.a)({},e,{isFullScreen:!e.isFullScreen});case I.e:return Object(_.a)({},e,{isFullScreen:!1});case I.a:return Object(_.a)({},e,{layout:n.layout});default:return e}},V=Object(C.c)({menuReducer:M,alumnos:B,profesor:x,dashboardinfo:D,dashboardlogs:H,courses:P}),z={menuReducer:Object(_.a)({isOpen:[],isTrigger:[]},U.a,{isFullScreen:!1})},X=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||C.d,J=Object(C.e)(V,z,X(Object(C.a)(A.a))),W=r.a.createElement(u.a,{store:J},r.a.createElement(o.a,{basename:U.a.basename},r.a.createElement(T,null)));i.a.render(W,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,n,t){"use strict";t.d(n,"d",function(){return a}),t.d(n,"e",function(){return r}),t.d(n,"c",function(){return c}),t.d(n,"g",function(){return i}),t.d(n,"f",function(){return u}),t.d(n,"a",function(){return o}),t.d(n,"h",function(){return l}),t.d(n,"b",function(){return s});var a="FETCH_DASHBOARDBINFO",r="FETCH_DASHBOARDCLOGS",c="FETCH_COURSES",i="GET_PROFESOR",u="GET_ALUMNOS",o=5,l=3,s=1}},[[44,7,10]]]);
//# sourceMappingURL=main.e0057d88.chunk.js.map