(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{104:function(e,a,t){"use strict";var l=t(12),n=t(13),r=t(14),o=t(16),c=t(15),i=t(17),s=t(0),d=t.n(s),m=t(264),p=t(141),u=t(706),h=t(92),f=t.n(h),E=t(28),b=t(73),w=function(e){function a(){var e,t;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),i=0;i<l;i++)r[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(r)))).state={isOption:t.props.isOption,fullCard:!1,collapseCard:!1,loadCard:!1,cardRemove:!1},t.cardReloadHandler=function(){t.setState({loadCard:!0}),setInterval(function(){t.setState({loadCard:!1})},3e3)},t.cardRemoveHandler=function(){t.setState({cardRemove:!0})},t}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e,a,t,n,r,o=this,c=[];return this.state.isOption&&(t=d.a.createElement("div",{className:"card-header-right"},d.a.createElement(m.a,{alignRight:!0,className:"btn-group card-option"},d.a.createElement(m.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},d.a.createElement("i",{className:"feather icon-more-horizontal"})),d.a.createElement(m.a.Menu,{as:"ul",className:"list-unstyled card-option"},d.a.createElement(m.a.Item,{as:"li",className:"dropdown-item",onClick:function(){o.setState(function(e){return{fullCard:!e.fullCard}})}},d.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),d.a.createElement("a",{href:b.a.BLANK_LINK}," ",this.state.fullCard?"Restore":"Maximize"," ")),d.a.createElement(m.a.Item,{as:"li",className:"dropdown-item",onClick:function(){o.setState(function(e){return{collapseCard:!e.collapseCard}})}},d.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),d.a.createElement("a",{href:b.a.BLANK_LINK}," ",this.state.collapseCard?"Expand":"Collapse"," ")),d.a.createElement(m.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},d.a.createElement("i",{className:"feather icon-refresh-cw"}),d.a.createElement("a",{href:b.a.BLANK_LINK}," Reload ")),d.a.createElement(m.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},d.a.createElement("i",{className:"feather icon-trash"}),d.a.createElement("a",{href:b.a.BLANK_LINK}," Remove ")))))),n=d.a.createElement(p.a.Header,null,d.a.createElement(p.a.Title,{as:"h5"},this.props.title),t),this.state.fullCard&&(c=[].concat(Object(l.a)(c),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(c=[].concat(Object(l.a)(c),["card-load"]),a=d.a.createElement("div",{className:"card-loader"},d.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(c=[].concat(Object(l.a)(c),["d-none"])),this.props.cardClass&&(c=[].concat(Object(l.a)(c),[this.props.cardClass])),r=d.a.createElement(p.a,{className:c.join(" "),style:e},n,d.a.createElement(u.a,{in:!this.state.collapseCard},d.a.createElement("div",null,d.a.createElement(p.a.Body,null,this.props.children))),a),d.a.createElement(E.a,null,r)}}]),a}(s.Component);a.a=f()(w)},693:function(e,a,t){"use strict";t.r(a);var l=t(13),n=t(14),r=t(16),o=t(15),c=t(17),i=t(0),s=t.n(i),d=t(121),m=t(102),p=t(28),u=t(104),h=function(e){function a(){return Object(l.a)(this,a),Object(r.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(c.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement(p.a,null,s.a.createElement(d.a,null,s.a.createElement(m.a,null,s.a.createElement(u.a,{title:"Quick Installation",isOption:!0},s.a.createElement("p",null," - First of all it's required to install latest Node and npm - ",s.a.createElement("a",{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},"nodejs")),s.a.createElement("p",null," - Unzip ",s.a.createElement("code",null,"datta-able-react-lite.zip")," file, Inside that directory you will find the ",s.a.createElement("code",null,"datta-able-react-lite/")," folder"),s.a.createElement("p",null," - Open your terminal/cmd then navigate to project directory ",s.a.createElement("code",null,"datta-able-react-lite/")),s.a.createElement("p",null," - Install npm packages using command ",s.a.createElement("code",null,"'npm install'"),",  this will install required node.js third-party plugins into the ",s.a.createElement("code",null,"node_modules/")," folder."),s.a.createElement("p",null," - Compile/Run project using  command  ",s.a.createElement("code",null,"'npm start'"),", this will compile app in development mode."),s.a.createElement("p",null," - Open ",s.a.createElement("a",{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"},"http://localhost:3000")," to view it on browser."),s.a.createElement("p",null," - Now, You can use Datta Able React Admin Template for your application development. "),s.a.createElement("div",{className:"theme-bg2 text-white p-3"},s.a.createElement("p",null,"The project was built assuming it is hosted at the server root folder of domain/platform i.e http://demo.com."),s.a.createElement("p",null,"You can control this with the homepage field in your package.json."),s.a.createElement("p",null,'To deploy build for sub-folder i.e http://demo.com/project-folder-name/ than "homepage" : "http://demo.com/project-folder-name/".'),s.a.createElement("p",null,"You  also need to set basename in ../src/config.js file."),s.a.createElement("p",null,"like, basename: '/project-folder-name'")),s.a.createElement("p",null," - Build project using command ",s.a.createElement("code",null,"'npm run build'"),", It will create ",s.a.createElement("code",null,"build/")," folder inside datta-able-react-lite/ folder. "),s.a.createElement("p",null," - Your app is ready to be deployed. ")))))}}]),a}(i.Component);a.default=h}}]);
//# sourceMappingURL=23.e8db6401.chunk.js.map