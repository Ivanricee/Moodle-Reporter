(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{102:function(e,a,t){"use strict";var l=t(4),r=t(11),n=t(65),c=t.n(n),m=t(0),i=t.n(m),s=t(1),o=t.n(s),d={type:o.a.string.isRequired,as:o.a.elementType},u=i.a.forwardRef(function(e,a){var t=e.as,n=void 0===t?"div":t,m=e.className,s=e.type,o=Object(r.a)(e,["as","className","type"]);return i.a.createElement(n,Object(l.a)({},o,{ref:a,className:c()(m,s&&s+"-feedback")}))});u.displayName="Feedback",u.propTypes=d,u.defaultProps={type:"valid"},a.a=u},124:function(e,a,t){"use strict";var l=t(4),r=t(11),n=t(65),c=t.n(n),m=t(0),i=t.n(m),s=t(67),o=i.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.noGutters,m=e.as,o=void 0===m?"div":m,d=e.className,u=Object(r.a)(e,["bsPrefix","noGutters","as","className"]),b=Object(s.b)(t,"row");return i.a.createElement(o,Object(l.a)({ref:a},u,{className:c()(d,b,n&&"no-gutters")}))});o.defaultProps={noGutters:!1},a.a=o},130:function(e,a,t){"use strict";var l=t(4),r=t(11),n=t(65),c=t.n(n),m=t(0),i=t.n(m),s=(t(3),t(102)),o=t(74),d=t(67),u=i.a.forwardRef(function(e,a){var t,n,s=e.bsPrefix,u=e.type,b=e.size,p=e.id,E=e.className,f=e.isValid,h=e.isInvalid,v=e.plaintext,x=e.readOnly,y=e.as,N=void 0===y?"input":y,O=Object(r.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),g=Object(m.useContext)(o.a).controlId;if(s=Object(d.b)(s,"form-control"),v)(n={})[s+"-plaintext"]=!0,t=n;else if("file"===u){var j;(j={})[s+"-file"]=!0,t=j}else{var P;(P={})[s]=!0,P[s+"-"+b]=b,t=P}return i.a.createElement(N,Object(l.a)({},O,{type:u,ref:a,readOnly:x,id:p||g,className:c()(E,t,f&&"is-valid",h&&"is-invalid")}))});u.displayName="FormControl",u.Feedback=s.a,a.a=u},134:function(e,a,t){"use strict";var l=t(4),r=t(11),n=t(65),c=t.n(n),m=t(0),i=t.n(m),s=t(67),o=t(80),d=t(82),u=t(79),b=i.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,m=e.variant,o=e.as,d=void 0===o?"img":o,u=Object(r.a)(e,["bsPrefix","className","variant","as"]),b=Object(s.b)(t,"card-img");return i.a.createElement(d,Object(l.a)({ref:a,className:c()(m?b+"-"+m:b,n)},u))});b.displayName="CardImg",b.defaultProps={variant:null};var p=b,E=Object(d.a)("h5"),f=Object(d.a)("h6"),h=Object(o.a)("card-body"),v=i.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,o=e.bg,d=e.text,b=e.border,p=e.body,E=e.children,f=e.as,v=void 0===f?"div":f,x=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(s.b)(t,"card"),N=Object(m.useMemo)(function(){return{cardHeaderBsPrefix:y+"-header"}},[y]);return i.a.createElement(u.a.Provider,{value:N},i.a.createElement(v,Object(l.a)({ref:a},x,{className:c()(n,y,o&&"bg-"+o,d&&"text-"+d,b&&"border-"+b)}),p?i.a.createElement(h,null,E):E))});v.displayName="Card",v.defaultProps={body:!1},v.Img=p,v.Title=Object(o.a)("card-title",{Component:E}),v.Subtitle=Object(o.a)("card-subtitle",{Component:f}),v.Body=h,v.Link=Object(o.a)("card-link",{Component:"a"}),v.Text=Object(o.a)("card-text",{Component:"p"}),v.Header=Object(o.a)("card-header"),v.Footer=Object(o.a)("card-footer"),v.ImgOverlay=Object(o.a)("card-img-overlay");a.a=v},243:function(e,a,t){"use strict";var l=t(4),r=t(11),n=t(65),c=t.n(n),m=t(0),i=t.n(m),s=t(80),o=t(67),d=t(74),u=i.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,s=e.children,u=e.controlId,b=e.as,p=void 0===b?"div":b,E=Object(r.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(o.b)(t,"form-group");var f=Object(m.useMemo)(function(){return{controlId:u}},[u]);return i.a.createElement(d.a.Provider,{value:f},i.a.createElement(p,Object(l.a)({},E,{ref:a,className:c()(n,t)}),s))});u.displayName="FormGroup";var b=u,p=t(130),E=t(102),f=i.a.forwardRef(function(e,a){var t=e.id,n=e.bsPrefix,s=e.className,u=e.isValid,b=e.isInvalid,p=e.isStatic,E=Object(r.a)(e,["id","bsPrefix","className","isValid","isInvalid","isStatic"]);n=Object(o.b)(n,"form-check-input");var f=Object(m.useContext)(d.a),h=f.controlId,v=f.custom;return i.a.createElement("input",Object(l.a)({},E,{ref:a,id:t||h,className:c()(s,!v&&n,v&&"custom-control-input",u&&"is-valid",b&&"is-invalid",p&&"position-static")}))});f.displayName="FormCheckInput",f.defaultProps={type:"checkbox"};var h=f,v=i.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,s=e.htmlFor,u=Object(r.a)(e,["bsPrefix","className","htmlFor"]);t=Object(o.b)(t,"form-check-label");var b=Object(m.useContext)(d.a),p=b.controlId,E=b.custom;return i.a.createElement("label",Object(l.a)({},u,{ref:a,htmlFor:s||p,className:c()(n,!E&&t,E&&"custom-control-label")}))});v.displayName="FormCheckLabel",v.defaultProps={type:"checkbox"};var x=v,y=i.a.forwardRef(function(e,a){var t=e.id,n=e.bsPrefix,s=e.inline,u=e.disabled,b=e.isValid,p=e.isInvalid,f=e.feedback,v=e.className,y=e.style,N=e.title,O=e.type,g=e.label,j=e.children,P=e.custom,C=Object(r.a)(e,["id","bsPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom"]);n=Object(o.b)(n,"form-check");var R=Object(m.useContext)(d.a).controlId,I=Object(m.useMemo)(function(){return{controlId:t||R,custom:P}},[R,P,t]),w=null!=g&&!1!==g&&!j,k=i.a.createElement(h,Object(l.a)({},C,{type:O,ref:a,isValid:b,isInvalid:p,isStatic:!w,disabled:u}));return i.a.createElement(d.a.Provider,{value:I},i.a.createElement("div",{style:y,className:c()(v,!P&&n,P&&"custom-control custom-"+O,s&&(P?"custom-control":n)+"-inline")},j||i.a.createElement(i.a.Fragment,null,k,w&&i.a.createElement(x,{title:N},g),(b||p)&&i.a.createElement(E.a,{type:b?"valid":"invalid"},f))))});y.displayName="FormCheck",y.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},y.Input=h,y.Label=x;var N=y,O=(t(3),t(95)),g=i.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.column,s=e.srOnly,u=e.className,b=e.htmlFor,p=Object(r.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),E=Object(m.useContext)(d.a).controlId;t=Object(o.b)(t,"form-label");var f=c()(u,t,s&&"sr-only",n&&"col-form-label");return b=b||E,n?i.a.createElement(O.a,Object(l.a)({as:"label",className:f,htmlFor:b},p)):i.a.createElement("label",Object(l.a)({ref:a,className:f,htmlFor:b},p))});g.displayName="FormLabel",g.defaultProps={column:!1,srOnly:!1};var j=g,P=i.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,m=e.as,s=void 0===m?"small":m,d=e.muted,u=Object(r.a)(e,["bsPrefix","className","as","muted"]);return t=Object(o.b)(t,"form-text"),i.a.createElement(s,Object(l.a)({},u,{ref:a,className:c()(n,t,d&&"text-muted")}))});P.displayName="FormText";var C=P,R=i.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.inline,m=e.className,s=e.validated,d=e.as,u=void 0===d?"form":d,b=Object(r.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(o.b)(t,"form"),i.a.createElement(u,Object(l.a)({},b,{ref:a,className:c()(m,s&&"was-validated",n&&t+"-inline")}))});R.displayName="Form",R.defaultProps={inline:!1},R.Row=Object(s.a)("form-row"),R.Group=b,R.Control=p.a,R.Check=N,R.Label=j,R.Text=C;a.a=R},74:function(e,a,t){"use strict";var l=t(0),r=t.n(l).a.createContext({controlId:void 0});a.a=r},79:function(e,a,t){"use strict";var l=t(0),r=t.n(l);a.a=r.a.createContext(null)},809:function(e,a,t){"use strict";var l=t(4),r=t(11),n=t(0),c=t.n(n),m=t(1),i=t.n(m),s=t(307),o={id:i.a.any,href:i.a.string,onClick:i.a.func,title:i.a.node.isRequired,disabled:i.a.bool,menuRole:i.a.string,rootCloseEvent:i.a.string,bsPrefix:i.a.string,variant:i.a.string,size:i.a.string},d=c.a.forwardRef(function(e,a){var t=e.title,n=e.children,m=e.bsPrefix,i=e.rootCloseEvent,o=e.variant,d=e.size,u=e.menuRole,b=e.disabled,p=e.href,E=e.id,f=Object(r.a)(e,["title","children","bsPrefix","rootCloseEvent","variant","size","menuRole","disabled","href","id"]);return c.a.createElement(s.a,Object(l.a)({ref:a},f),c.a.createElement(s.a.Toggle,{id:E,href:p,size:d,variant:o,disabled:b,childBsPrefix:m},t),c.a.createElement(s.a.Menu,{role:u,rootCloseEvent:i},n))});d.displayName="DropdownButton",d.propTypes=o,a.a=d},814:function(e,a,t){"use strict";t.r(a);var l=t(13),r=t(14),n=t(16),c=t(15),m=t(17),i=t(0),s=t.n(i),o=t(124),d=t(95),u=t(134),b=t(243),p=t(318),E=t(815),f=t(130),h=t(809),v=t(307),x=t(29),y=function(e){function a(){return Object(l.a)(this,a),Object(n.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(x.a,null,s.a.createElement(o.a,null,s.a.createElement(d.a,null,s.a.createElement(u.a,null,s.a.createElement(u.a.Header,null,s.a.createElement(u.a.Title,{as:"h5"},"Basic Component")),s.a.createElement(u.a.Body,null,s.a.createElement("h5",null,"Form controls"),s.a.createElement("hr",null),s.a.createElement(o.a,null,s.a.createElement(d.a,{md:6},s.a.createElement(b.a,null,s.a.createElement(b.a.Group,{controlId:"formBasicEmail"},s.a.createElement(b.a.Label,null,"Email address"),s.a.createElement(b.a.Control,{type:"email",placeholder:"Enter email"}),s.a.createElement(b.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),s.a.createElement(b.a.Group,{controlId:"formBasicPassword"},s.a.createElement(b.a.Label,null,"Password"),s.a.createElement(b.a.Control,{type:"password",placeholder:"Password"})),s.a.createElement(b.a.Group,{controlId:"formBasicChecbox"},s.a.createElement(b.a.Check,{type:"checkbox",label:"Check me out"})),s.a.createElement(p.a,{variant:"primary"},"Submit"))),s.a.createElement(d.a,{md:6},s.a.createElement(b.a.Group,{controlId:"exampleForm.ControlInput1"},s.a.createElement(b.a.Label,null,"Text"),s.a.createElement(b.a.Control,{type:"email",placeholder:"Text"})),s.a.createElement(b.a.Group,{controlId:"exampleForm.ControlSelect1"},s.a.createElement(b.a.Label,null,"Example select"),s.a.createElement(b.a.Control,{as:"select"},s.a.createElement("option",null,"1"),s.a.createElement("option",null,"2"),s.a.createElement("option",null,"3"),s.a.createElement("option",null,"4"),s.a.createElement("option",null,"5"))),s.a.createElement(b.a.Group,{controlId:"exampleForm.ControlTextarea1"},s.a.createElement(b.a.Label,null,"Example textarea"),s.a.createElement(b.a.Control,{as:"textarea",rows:"3"})))),s.a.createElement("h5",{className:"mt-5"},"Sizing"),s.a.createElement("hr",null),s.a.createElement(o.a,null,s.a.createElement(d.a,{md:6},s.a.createElement(b.a.Control,{size:"lg",type:"text",placeholder:"Large text",className:"mb-3"}),s.a.createElement(b.a.Control,{type:"text",placeholder:"Normal text",className:"mb-3"}),s.a.createElement(b.a.Control,{size:"sm",type:"text",placeholder:"Small text",className:"mb-3"})),s.a.createElement(d.a,{md:6},s.a.createElement(b.a.Control,{size:"lg",as:"select",className:"mb-3"},s.a.createElement("option",null,"Large select"),s.a.createElement("option",null,"1"),s.a.createElement("option",null,"2"),s.a.createElement("option",null,"3"),s.a.createElement("option",null,"4"),s.a.createElement("option",null,"5")),s.a.createElement(b.a.Control,{as:"select",className:"mb-3"},s.a.createElement("option",null,"Default select"),s.a.createElement("option",null,"1"),s.a.createElement("option",null,"2"),s.a.createElement("option",null,"3"),s.a.createElement("option",null,"4"),s.a.createElement("option",null,"5")))),s.a.createElement("h5",{className:"mt-5"},"Inline"),s.a.createElement("hr",null),s.a.createElement(o.a,null,s.a.createElement(d.a,null,s.a.createElement(b.a,{inline:!0},s.a.createElement(b.a.Group,{className:"mb-2"},s.a.createElement(b.a.Label,{srOnly:!0},"Email"),s.a.createElement(b.a.Control,{plaintext:!0,readOnly:!0,defaultValue:"email@example.com"})),s.a.createElement(b.a.Group,{className:"mb-2 mr-5"},s.a.createElement(b.a.Label,{srOnly:!0},"Password"),s.a.createElement(b.a.Control,{type:"password",placeholder:"Password"})),s.a.createElement(b.a.Group,null,s.a.createElement(p.a,{className:"mb-0"},"Confirm Identity"))))),s.a.createElement("h3",{className:"mt-5"},"Checkboxes and Radios"),s.a.createElement(o.a,null,s.a.createElement(d.a,{md:12},s.a.createElement("h5",{className:"mt-5"},"Checkboxes"),s.a.createElement("hr",null),s.a.createElement(b.a.Group,null,s.a.createElement(b.a.Check,{custom:!0,type:"checkbox",id:"checkbox1",label:"Check this custom checkbox"}))),s.a.createElement(d.a,{md:6},s.a.createElement("h5",{className:"mt-5"},"Radios"),s.a.createElement("hr",null),s.a.createElement(b.a.Group,null,s.a.createElement(b.a.Check,{custom:!0,type:"radio",label:"Toggle this custom radio",name:"supportedRadios",id:"supportedRadio3"}),s.a.createElement(b.a.Check,{custom:!0,type:"radio",label:"Or toggle this other custom radio",name:"supportedRadios",id:"supportedRadio4"})),s.a.createElement("h5",{className:"mt-3"},"Inline"),s.a.createElement("hr",null),s.a.createElement(b.a.Group,null,s.a.createElement(b.a.Check,{inline:!0,custom:!0,type:"radio",label:"Toggle this custom radio",name:"supportedRadio",id:"supportedRadio21"}),s.a.createElement(b.a.Check,{inline:!0,custom:!0,type:"radio",label:"Or toggle this other custom radio",name:"supportedRadio",id:"supportedRadio22"}))),s.a.createElement(d.a,{md:6},s.a.createElement("h5",{className:"mt-5"},"Range"),s.a.createElement("hr",null),s.a.createElement(b.a.Label,{htmlFor:"customRange1"},"Example range"),s.a.createElement("input",{type:"range",className:"custom-range",defaultValue:"22",id:"customRange1"}),s.a.createElement(b.a.Label,{htmlFor:"customRange2"},"Example range"),s.a.createElement("input",{type:"range",className:"custom-range",min:"0",defaultValue:"3",max:"5",id:"customRange2"}),s.a.createElement(b.a.Label,{htmlFor:"customRange3"},"Example range"),s.a.createElement("input",{type:"range",className:"custom-range",min:"0",defaultValue:"1.5",max:"5",step:"0.5",id:"customRange3"}))))),s.a.createElement(u.a,null,s.a.createElement(u.a.Header,null,s.a.createElement(u.a.Title,{as:"h5"},"Input Group")),s.a.createElement(u.a.Body,null,s.a.createElement(o.a,null,s.a.createElement(d.a,{md:12},s.a.createElement(E.a,{className:"mb-3"},s.a.createElement(E.a.Prepend,null,s.a.createElement(E.a.Text,{id:"basic-addon1"},"@")),s.a.createElement(f.a,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1"})),s.a.createElement(E.a,{className:"mb-3"},s.a.createElement(f.a,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),s.a.createElement(E.a.Append,null,s.a.createElement(E.a.Text,{id:"basic-addon2"},"@example.com"))),s.a.createElement("label",{htmlFor:"basic-url"},"Your vanity URL"),s.a.createElement(E.a,{className:"mb-3"},s.a.createElement(E.a.Prepend,null,s.a.createElement(E.a.Text,{id:"basic-addon3"},"https://example.com/users/")),s.a.createElement(f.a,{id:"basic-url","aria-describedby":"basic-addon3"})),s.a.createElement(E.a,{className:"mb-3"},s.a.createElement(E.a.Prepend,null,s.a.createElement(E.a.Text,null,"$")),s.a.createElement(f.a,{"aria-label":"Amount (to the nearest dollar)"}),s.a.createElement(E.a.Append,null,s.a.createElement(E.a.Text,null,".00"))),s.a.createElement(E.a,null,s.a.createElement(E.a.Prepend,null,s.a.createElement(E.a.Text,null,"With textarea")),s.a.createElement(f.a,{as:"textarea","aria-label":"With textarea"}))),s.a.createElement(d.a,{md:6},s.a.createElement("h5",{className:"mt-5"},"Sizing"),s.a.createElement("hr",null),s.a.createElement(E.a,{size:"sm",className:"mb-3"},s.a.createElement(E.a.Prepend,null,s.a.createElement(E.a.Text,{id:"inputGroup-sizing-sm"},"Small")),s.a.createElement(f.a,{"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm"})),s.a.createElement("br",null),s.a.createElement(E.a,{className:"mb-3"},s.a.createElement(E.a.Prepend,null,s.a.createElement(E.a.Text,{id:"inputGroup-sizing-default"},"Default")),s.a.createElement(f.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})),s.a.createElement("br",null),s.a.createElement(E.a,{size:"lg"},s.a.createElement(E.a.Prepend,null,s.a.createElement(E.a.Text,{id:"inputGroup-sizing-lg"},"Large")),s.a.createElement(f.a,{"aria-label":"Large","aria-describedby":"inputGroup-sizing-sm"}))),s.a.createElement(d.a,{md:6},s.a.createElement("h5",{className:"mt-5"},"Checkboxes and radios"),s.a.createElement("hr",null),s.a.createElement(E.a,{className:"mb-3"},s.a.createElement(E.a.Prepend,null,s.a.createElement(E.a.Checkbox,{"aria-label":"Checkbox for following text input"})),s.a.createElement(f.a,{"aria-label":"Text input with checkbox"})),s.a.createElement(E.a,null,s.a.createElement(E.a.Prepend,null,s.a.createElement(E.a.Radio,{"aria-label":"Radio button for following text input"})),s.a.createElement(f.a,{"aria-label":"Text input with radio button"})))),s.a.createElement("h5",{className:"mt-5"},"Button Addons"),s.a.createElement("hr",null),s.a.createElement(o.a,null,s.a.createElement(d.a,{md:6},s.a.createElement(E.a,{className:"mb-3"},s.a.createElement(E.a.Prepend,null,s.a.createElement(p.a,null,"Button")),s.a.createElement(f.a,{"aria-describedby":"basic-addon1"})),s.a.createElement(E.a,{className:"mb-3"},s.a.createElement(f.a,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),s.a.createElement(E.a.Append,null,s.a.createElement(p.a,null,"Button")))),s.a.createElement(d.a,{md:6},s.a.createElement(E.a,{className:"mb-3"},s.a.createElement(E.a.Prepend,null,s.a.createElement(p.a,null,"Button"),s.a.createElement(p.a,{variant:"secondary"},"Button")),s.a.createElement(f.a,{"aria-describedby":"basic-addon1"})),s.a.createElement(E.a,{className:"mb-3"},s.a.createElement(f.a,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),s.a.createElement(E.a.Append,null,s.a.createElement(p.a,{variant:"secondary"},"Button"),s.a.createElement(p.a,null,"Button")))),s.a.createElement(d.a,{md:6},s.a.createElement("h5",{className:"mt-5"},"Buttons With Dropdown"),s.a.createElement("hr",null),s.a.createElement(E.a,{className:"mb-3"},s.a.createElement(h.a,{as:E.a.Prepend,title:"Dropdown",id:"input-group-dropdown-1"},s.a.createElement(v.a.Item,{href:"#"},"Action"),s.a.createElement(v.a.Item,{href:"#"},"Another action"),s.a.createElement(v.a.Item,{href:"#"},"Something else here"),s.a.createElement(v.a.Divider,null),s.a.createElement(v.a.Item,{href:"#"},"Separated link")),s.a.createElement(f.a,{"aria-describedby":"basic-addon1"})),s.a.createElement(E.a,null,s.a.createElement(f.a,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),s.a.createElement(h.a,{as:E.a.Append,title:"Dropdown",id:"input-group-dropdown-2"},s.a.createElement(v.a.Item,{href:"#"},"Action"),s.a.createElement(v.a.Item,{href:"#"},"Another action"),s.a.createElement(v.a.Item,{href:"#"},"Something else here"),s.a.createElement(v.a.Divider,null),s.a.createElement(v.a.Item,{href:"#"},"Separated link")))),s.a.createElement(d.a,{md:6},s.a.createElement("h5",{className:"mt-5"},"Segmented  Buttons"),s.a.createElement("hr",null),s.a.createElement(E.a,{className:"mb-3"},s.a.createElement(v.a,{as:E.a.Prepend},s.a.createElement(p.a,{variant:"secondary"},"Action"),s.a.createElement(v.a.Toggle,{split:!0,variant:"secondary",id:"dropdown-split-basic-1"}),s.a.createElement(v.a.Menu,null,s.a.createElement(v.a.Item,{hred:"#/action-1"},"Action"),s.a.createElement(v.a.Item,{hred:"#/action-2"},"Another action"),s.a.createElement(v.a.Item,{hred:"#/action-3"},"Something else"))),s.a.createElement(f.a,{"aria-describedby":"basic-addon1"})),s.a.createElement(E.a,null,s.a.createElement(f.a,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),s.a.createElement(v.a,{as:E.a.Append},s.a.createElement(p.a,{variant:"secondary"},"Action"),s.a.createElement(v.a.Toggle,{split:!0,variant:"secondary",id:"dropdown-split-basic-2"}),s.a.createElement(v.a.Menu,null,s.a.createElement(v.a.Item,{hred:"#/action-1"},"Action"),s.a.createElement(v.a.Item,{hred:"#/action-2"},"Another action"),s.a.createElement(v.a.Item,{hred:"#/action-3"},"Something else")))))))))))}}]),a}(s.a.Component);a.default=y},815:function(e,a,t){"use strict";var l=t(4),r=t(11),n=t(18),c=t(65),m=t.n(c),i=t(0),s=t.n(i),o=t(80),d=t(67),u=function(e){function a(){return e.apply(this,arguments)||this}return Object(n.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.bsPrefix,t=e.size,n=e.className,c=e.as,i=void 0===c?"div":c,o=Object(r.a)(e,["bsPrefix","size","className","as"]);return s.a.createElement(i,Object(l.a)({},o,{className:m()(n,a,t&&a+"-"+t)}))},a}(s.a.Component),b=Object(o.a)("input-group-append"),p=Object(o.a)("input-group-prepend"),E=Object(o.a)("input-group-text",{Component:"span"}),f=Object(d.a)(u,"input-group");f.Text=E,f.Radio=function(e){return s.a.createElement(E,null,s.a.createElement("input",Object(l.a)({type:"radio"},e)))},f.Checkbox=function(e){return s.a.createElement(E,null,s.a.createElement("input",Object(l.a)({type:"checkbox"},e)))},f.Append=b,f.Prepend=p,a.a=f},82:function(e,a,t){"use strict";var l=t(4),r=t(0),n=t.n(r),c=t(65),m=t.n(c);a.a=function(e){return n.a.forwardRef(function(a,t){return n.a.createElement("div",Object(l.a)({},a,{ref:t,className:m()(a.className,e)}))})}},95:function(e,a,t){"use strict";var l=t(4),r=t(11),n=t(65),c=t.n(n),m=t(0),i=t.n(m),s=t(67),o=["xl","lg","md","sm","xs"],d=i.a.forwardRef(function(e,a){var t=e.bsPrefix,n=e.className,m=e.as,d=void 0===m?"div":m,u=Object(r.a)(e,["bsPrefix","className","as"]),b=Object(s.b)(t,"col"),p=[],E=[];return o.forEach(function(e){var a,t,l,r=u[e];if(delete u[e],null!=r&&"object"===typeof r){var n=r.span;a=void 0===n||n,t=r.offset,l=r.order}else a=r;var c="xs"!==e?"-"+e:"";null!=a&&p.push(!0===a?""+b+c:""+b+c+"-"+a),null!=l&&E.push("order"+c+"-"+l),null!=t&&E.push("offset"+c+"-"+t)}),p.length||p.push(b),i.a.createElement(d,Object(l.a)({},u,{ref:a,className:c.a.apply(void 0,[n].concat(p,E))}))});d.displayName="Col",a.a=d}}]);
//# sourceMappingURL=24.675e3534.chunk.js.map