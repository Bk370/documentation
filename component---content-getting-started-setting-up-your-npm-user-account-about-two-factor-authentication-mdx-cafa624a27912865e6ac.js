(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{O6H6:function(e,t,a){"use strict";var n=a("vOnD"),r=a("u9kb"),o=a("aOgs"),i=a("q1tI"),c=a.n(i),l=a("7ljp"),b=a("pD55"),s=a("8Aig"),m=a("ReZb"),p=a("GCVy"),d=a("+6vE");var u=function(e){var t=e.children;return c.a.createElement(r.d,{as:"pre",mt:0,mb:3,p:3,border:0,style:{color:"rgb(57, 58, 52)",backgroundColor:"rgb(246, 248, 250)",overflow:"auto"}},c.a.createElement(r.s,{fontFamily:"mono",fontSize:1},t))};var j=function(e){var t=e.children;return c.a.createElement("strong",null,t)},g=a("gnlW"),O=a("mwnC"),f=a("/Rw0"),h=a("dVM4"),y=Object(n.f)(r.e).withConfig({displayName:"table-of-contents___StyledBox",componentId:"eay2b8-0"})({listStyle:"none",lineHeight:"1.4em"});function N(e){var t=e.items,a=e.depth;return c.a.createElement(y,{key:t,as:"ul",m:0,p:0},t.map((function(e){return c.a.createElement(r.e,{as:"li",key:e.url,pl:a>0?3:0},c.a.createElement(r.n,{key:e.title,display:"inline-block",py:1,href:e.url,color:"gray.6"},e.title),e.items?c.a.createElement(N,{items:e.items,depth:a+1}):null)})))}N.defaultProps={depth:0};var w=N,C=a("MfeC");function k(e){var t=C.a.getPath(e.location.pathname),a=C.a.getVariantAndPage(e.root,t);if(!a)return null;var n=C.a.getVariantsForPage(e.root,a.page),o=[],i=n[0];return 0===n.length?null:(n.forEach((function(e){e.page.url===t&&(i=e),o.push(c.a.createElement(r.i.Item,{onClick:function(){window.location.href=e.page.url},key:e.variant.title},e.variant.title))})),c.a.createElement(r.i,{overlay:e.overlay},c.a.createElement(r.i.Button,null,i.variant.title),c.a.createElement(k.Menu,{direction:e.direction,width:e.menuWidth},o)))}k.Menu=Object(n.f)(r.i.Menu).withConfig({displayName:"variant-select__Menu",componentId:"sc-1rmksyl-0"})(["width:",";"],(function(e){return e.width?e.width:"160px"}));var E=k,v=Object(n.f)(r.k).withConfig({displayName:"layout___StyledFlex",componentId:"sc-1xkoyzi-0"})({zIndex:0}),x=Object(n.f)(r.l).withConfig({displayName:"layout___StyledGrid",componentId:"sc-1xkoyzi-1"})({alignItems:"start",alignSelf:"start"}),_=Object(n.f)(r.e).withConfig({displayName:"layout___StyledBox",componentId:"sc-1xkoyzi-2"})({gridArea:"heading"}),A=Object(n.f)(r.e).withConfig({displayName:"layout___StyledBox2",componentId:"sc-1xkoyzi-3"})({"margin-top":"25px"}),I=Object(n.f)(r.o).withConfig({displayName:"layout___StyledPosition",componentId:"sc-1xkoyzi-4"})({gridArea:"table-of-contents",overflow:"auto"}),z=Object(n.f)(r.e).withConfig({displayName:"layout___StyledBox3",componentId:"sc-1xkoyzi-5"})({gridArea:"content"});t.a=function(e){var t=e.children,a=e.pageContext,n=e.location,i=a.frontmatter,y=i.title,N=i.description,k=i.status,F=i.source,S=i.additionalContributors,D=void 0===S?[]:S,M=C.a.getVariantRoot(n.pathname);return c.a.createElement(l.a,{components:{Index:m.a,Note:p.a,Prompt:u,PromptReply:j,Screenshot:g.a}},c.a.createElement(r.k,{flexDirection:"column",minHeight:"100vh"},c.a.createElement(b.a,{title:y,description:N}),c.a.createElement(s.b,{location:n}),c.a.createElement(v,{flex:"1 1 auto",flexDirection:"row"},c.a.createElement(r.e,{display:["none",null,null,"block"]},c.a.createElement(O.a,{location:n})),c.a.createElement(x,{id:"skip-nav",maxWidth:"100%",gridTemplateColumns:["100%",null,"minmax(0, 65ch) 220px"],gridTemplateAreas:['"heading" "content"',null,'"heading table-of-contents" "content table-of-contents"'],gridColumnGap:[null,null,6,7],gridRowGap:3,mx:"auto",p:[5,6,null,7]},c.a.createElement(_,null,c.a.createElement(r.d,{borderWidth:0,borderBottomWidth:1,borderRadius:0,pb:2},c.a.createElement(r.e,null,c.a.createElement(r.e,null,c.a.createElement(r.m,{as:"h1"},y),N))),null!=M?c.a.createElement(A,null,c.a.createElement(E,{overlay:!0,direction:"se",menuWidth:"min(30ch, 500px)",root:M,location:n})):null),a.tableOfContents.items?c.a.createElement(I,{display:["none",null,"block"],position:"sticky",top:s.a+24,mt:"6px",maxHeight:"calc(100vh - "+s.a+"px - 24px)"},c.a.createElement(r.s,{display:"inline-block",fontWeight:"bold",mb:1},"Table of contents"),c.a.createElement(w,{items:a.tableOfContents.items})):null,c.a.createElement(z,null,k||F?c.a.createElement(r.k,{mb:3,alignItems:"center"},k?c.a.createElement(h.a,{status:k}):null,c.a.createElement(r.e,{mx:"auto"}),F?c.a.createElement(f.a,{href:F}):null):null,a.tableOfContents.items?c.a.createElement(r.e,{display:["block",null,"none"],mb:3},c.a.createElement(r.h,null,(function(e){var t=e.open;return c.a.createElement(c.a.Fragment,null,c.a.createElement(r.s,{as:"summary",fontWeight:"bold"},t?c.a.createElement(r.r,{icon:o.b,mr:2}):c.a.createElement(r.r,{icon:o.c,mr:2}),"Table of contents"),c.a.createElement(r.e,{pt:1},c.a.createElement(w,{items:a.tableOfContents.items})))}))):null,t,c.a.createElement(d.a,{editUrl:a.editUrl,contributors:a.contributors.concat(D.map((function(e){return{login:e}})))}))))))}},"n6/M":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return m}));var n,r=a("8o2o"),o=(a("q1tI"),a("7ljp")),i=a("O6H6"),c={},l=(n="Note",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),b={_frontmatter:c},s=i.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(s,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Two-factor authentication (2FA) protects against unauthorized access to your account by confirming your identity using:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"something you know (such as your username and password)"),Object(o.b)("li",{parentName:"ul"},"something you have (such as a phone or tablet)")),Object(o.b)("p",null,"When you enable 2FA, we will prompt you for a unique one-time password when you perform certain actions on your account or on packages to which you have write access, depending on your 2FA configuration."),Object(o.b)(l,{mdxType:"Note"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," Two-factor authentication provides the best possible security for your account against attackers. We strongly recommend enabling 2FA on your account as soon as possible after you sign up.")),Object(o.b)("h2",null,"Two-factor authentication modes on npm"),Object(o.b)("p",null,"Two-factor authentication on npm can be enabled for authorization only, or authorization and writes."),Object(o.b)("h3",null,"Authorization only"),Object(o.b)("p",null,"If you enable 2FA for authorization only, we will request a one-time password for certain authorized actions."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Action"),Object(o.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"CLI command"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Log in to npm"),Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"npm login"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Change profile settings (including your password)"),Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"npm profile set"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Change 2FA modes for your user account"),Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"npm profile enable-2fa auth-only"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Disable 2FA for your user account"),Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"npm profile disable-2fa"))))),Object(o.b)("h3",null,"Authorization and writes"),Object(o.b)("p",null,"If you enable 2FA for authorization and writes, we will request a one-time password for certain authorized actions, as well as write actions."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"Action"),Object(o.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"CLI command"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Log in to npm"),Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object.assign({parentName:"td"},{href:"https://docs.npmjs.com/cli/adduser"}),Object(o.b)("inlineCode",{parentName:"a"},"npm login")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Change profile settings (including your password)"),Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object.assign({parentName:"td"},{href:"https://docs.npmjs.com/cli/profile"}),Object(o.b)("inlineCode",{parentName:"a"},"npm profile set")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Change 2FA modes for your user account"),Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object.assign({parentName:"td"},{href:"https://docs.npmjs.com/cli/profile"}),Object(o.b)("inlineCode",{parentName:"a"},"npm profile enable-2fa auth-and-writes")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Disable 2FA for your user account"),Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object.assign({parentName:"td"},{href:"https://docs.npmjs.com/cli/profile"}),Object(o.b)("inlineCode",{parentName:"a"},"npm profile disable-2fa")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Create tokens"),Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object.assign({parentName:"td"},{href:"https://docs.npmjs.com/cli/token"}),Object(o.b)("inlineCode",{parentName:"a"},"npm token create")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Revoke tokens"),Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object.assign({parentName:"td"},{href:"https://docs.npmjs.com/cli/token"}),Object(o.b)("inlineCode",{parentName:"a"},"npm token revoke")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Publish packages"),Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object.assign({parentName:"td"},{href:"https://docs.npmjs.com/cli/publish"}),Object(o.b)("inlineCode",{parentName:"a"},"npm publish")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Unpublish packages"),Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object.assign({parentName:"td"},{href:"https://docs.npmjs.com/cli/unpublish"}),Object(o.b)("inlineCode",{parentName:"a"},"npm unpublish")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Deprecate packages"),Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object.assign({parentName:"td"},{href:"https://docs.npmjs.com/cli/deprecate"}),Object(o.b)("inlineCode",{parentName:"a"},"npm deprecate")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Change package visibility"),Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object.assign({parentName:"td"},{href:"https://docs.npmjs.com/cli/access"}),Object(o.b)("inlineCode",{parentName:"a"},"npm access public/restricted")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"Change user and team package access"),Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object.assign({parentName:"td"},{href:"https://docs.npmjs.com/cli/access"}),Object(o.b)("inlineCode",{parentName:"a"},"npm access grant/revoke")))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),Object(o.b)("a",Object.assign({parentName:"td"},{href:"requiring-2fa-for-package-publishing-and-settings-modification"}),"Change package 2FA requirements")),Object(o.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"N/A")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-getting-started-setting-up-your-npm-user-account-about-two-factor-authentication-mdx-cafa624a27912865e6ac.js.map