(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(149),a(154)),c=a(156);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Home",keywords:["Vivens Ndatinya","JavaScript","react","Angular","redux","Node.js",".NET Core","Software","Web","Docker"]}),r.a.createElement("div",{class:"article"},r.a.createElement("h1",null,r.a.createElement("a",null,"projects will be posted soon..."))))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(150);var o=r.a.createContext({}),d=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Software Development With Vivens",author:"Vivens Ndatinya"}}}}},152:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(54),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},153:function(e){e.exports={data:{file:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAi0lEQVQY05WPzQrEIAyE+/5PIXj24EUFq9IWf6oPNUsCQncLwh4GkzDzmWytNfzqvm/03rmutS41PTO7zeJpiDHCGIPruhi+0hP2ApIhhAClFKSUDN73HdZaeO/hnOOPqKc6pfSCfgHHGNBaQwjBQArknHEcB87z5I1pRv2cLU+ml0K0GQVLKX+f/AG76kkvMthT1wAAAABJRU5ErkJggg==",width:400,height:60,src:"/static/4cf155f19d00fb57f9f5435003cdcc80/86134/logo.png",srcSet:"/static/4cf155f19d00fb57f9f5435003cdcc80/86134/logo.png 1x,\n/static/4cf155f19d00fb57f9f5435003cdcc80/98e3c/logo.png 1.5x,\n/static/4cf155f19d00fb57f9f5435003cdcc80/e6eb7/logo.png 2x,\n/static/4cf155f19d00fb57f9f5435003cdcc80/5c261/logo.png 3x"}}}}}},154:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),c=a(4),l=a.n(c),s=a(149),o=(a(158),a(155)),d=a.n(o),u=a(153),f=function(e){e.siteTitle;var t=u.data.file.childImageSharp;return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"logo"},i.a.createElement("h1",null,i.a.createElement("a",{href:"/"},i.a.createElement(d.a,{fixed:t.fixed,alt:"Vivens Ndatinya"}))),i.a.createElement("p",{className:"tagline"},"Learning by Practicing & Building, Stepping Stone to CONFIDENCE & UNSTOPPABLE EXCELLENCE")),i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(s.a,{to:"/",activeClassName:"active"},"HOME")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"articles",activeClassName:"active"},"ARTICLES")),i.a.createElement("li",null,i.a.createElement(s.a,{to:"projects",activeClassName:"active"},"PROJECTS")))))};f.propTypes={siteTitle:l.a.string},f.defaultProps={siteTitle:""};var p=f,m=(a(142),function(e){var t=e.children;return i.a.createElement(s.b,{query:"1032540886",render:function(e){return i.a.createElement("div",{className:"site"},i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{className:"site-content"},t),i.a.createElement("footer",null,i.a.createElement("span",null,i.a.createElement("a",{href:!0},"Owned and coded by ",e.site.siteMetadata.author," ",(new Date).getFullYear()))))},data:n})});m.propTypes={children:l.a.node.isRequired};t.a=m},156:function(e,t,a){"use strict";var n=a(157),r=a(0),i=a.n(r),c=a(4),l=a.n(c),s=a(159),o=a.n(s),d=a(149);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,l=e.title;return i.a.createElement(d.b,{query:f,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u;var f="3035821272"},157:function(e){e.exports={data:{site:{siteMetadata:{author:"Vivens Ndatinya",title:"Software Development With Vivens",skills:"JavaScript, Angular, React, Ionic, Node.js, .NET Core, Ruby/Rails, AWS, Azure, Docker, K8, Jenkins",specialties:["JavaScript","Angular","React","Ionic","AWS"]}}}}}}]);
//# sourceMappingURL=component---src-pages-projects-js-bbd6422a650d3b34f1a8.js.map