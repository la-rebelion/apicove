"use strict";(self.webpackChunkapicove=self.webpackChunkapicove||[]).push([[4813],{33069:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(96540);var s=n(34164),i=n(21312),r=n(61213),a=n(17559),l=n(96461),o=n(28774),c=n(74370),d=n(47713),h=n(41463),u=n(26832),m=n(32234),g=n(51107),x=n(74848);function p(e){let{tag:t}=e;const n=(0,l.ZD)(t);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.be,{title:n,description:t.description}),(0,x.jsx)(h.A,{tag:"blog_tags_posts"})]})}function j(e){let{tag:t,items:n,sidebar:s,listMetadata:r}=e;const a=(0,l.ZD)(t);return(0,x.jsxs)(c.A,{sidebar:s,children:[t.unlisted&&(0,x.jsx)(m.A,{}),(0,x.jsxs)("header",{className:"margin-bottom--xl",children:[(0,x.jsx)(g.A,{as:"h1",children:a}),t.description&&(0,x.jsx)("p",{children:t.description}),(0,x.jsx)(o.A,{href:t.allTagsPath,children:(0,x.jsx)(i.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,x.jsx)(u.A,{items:n}),(0,x.jsx)(d.A,{metadata:r})]})}function f(e){return(0,x.jsxs)(r.e3,{className:(0,s.A)(a.G.wrapper.blogPages,a.G.page.blogTagPostListPage),children:[(0,x.jsx)(p,{...e}),(0,x.jsx)(j,{...e})]})}},32234:(e,t,n)=>{n.d(t,{A:()=>c});n(96540);var s=n(34164),i=n(44084),r=n(17559),a=n(27293),l=n(74848);function o(e){let{className:t}=e;return(0,l.jsx)(a.A,{type:"caution",title:(0,l.jsx)(i.Rc,{}),className:(0,s.A)(t,r.G.common.unlistedBanner),children:(0,l.jsx)(i.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.AE,{}),(0,l.jsx)(o,{...e})]})}},96461:(e,t,n)=>{n.d(t,{Y4:()=>h,ZD:()=>l,np:()=>d,uz:()=>c,wI:()=>o});n(96540);var s=n(21312),i=n(53465),r=n(74848);function a(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function l(e){const t=a();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function o(e){const t=a();return(0,s.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const c=()=>(0,s.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function d(){return(0,r.jsx)(s.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function h(){return(0,r.jsx)(s.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},44084:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>a,TT:()=>d,Uh:()=>l,Yh:()=>c});n(96540);var s=n(21312),i=n(5260),r=n(74848);function a(){return(0,r.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(s.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,r.jsx)(i.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,r.jsx)(s.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},9113:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var s=n(53905),i=n(95878),r=n(9143),a=n(29633),l=n(74848);function o(){return(0,l.jsxs)(r.A,{reversed:!0,children:[(0,l.jsx)(s.A,{size:"lg",variant:"outlined",color:"neutral",children:"APICove, API hub for easier Enterprise integrations"}),(0,l.jsx)(i.Ay,{level:"h1",fontWeight:"xl",fontSize:"clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",children:"Easy-to-navigate space for APIs"}),(0,l.jsx)(i.Ay,{fontSize:"lg",textColor:"text.secondary",lineHeight:"lg",children:"APICove provides a set of tools and services that help you integrate your applications with ease. Tools designed for API-first, and better Developer Experience."}),(0,l.jsx)(a.A,{divider:!1})]})}},29633:(e,t,n)=>{n.d(t,{A:()=>d});var s=n(96540),i=n(91397),r=n(78126),a=n(32972),l=n(95878),o=n(62370),c=n(74848);function d(e){let{divider:t=!0}=e;return s.useEffect((()=>{const e=document.createElement("script");e.src="https://js.hsforms.net/forms/v2.js",document.body.appendChild(e),e.addEventListener("load",(()=>{window.hbspt&&window.hbspt.forms.create({region:"na1",portalId:"21339207",formId:"1cb2b307-3e31-4971-8c10-4191db75a045",target:"#hubspotForm"})}))}),[]),(0,c.jsxs)(c.Fragment,{children:[t&&(0,c.jsx)(i.A,{inset:"none",orientation:"horizontal",sx:{my:2}}),(0,c.jsx)(r.A,{sx:{display:"flex",gap:1,my:2,alignSelf:"stretch",flexBasis:"80%",flexDirection:"column"},children:(0,c.jsxs)(a.A,{spacing:1,children:[(0,c.jsx)("div",{id:"hubspotForm",style:{margin:"auto"}}),(0,c.jsxs)(l.Ay,{fontSize:"xs",textColor:"text.secondary",children:["By continuing you agree to our"," ",(0,c.jsx)(o.A,{color:"neutral",children:(0,c.jsx)("b",{children:"Privacy Policy"})})]})]})})]})}},9143:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var s=n(15824),i=n(78126),r=n(22967),a=n(34812),l=n(74848);function o(e){let{children:t,reversed:n,image:o="img/APICove-the-easy-to-navigate-bay.png"}=e;return(0,l.jsxs)(r.A,{sx:e=>({position:"relative",minHeight:"auto",display:"flex",flexDirection:n?"column-reverse":"column",alignItems:"center",py:10,gap:4,[e.breakpoints.up(834)]:{flexDirection:"row",gap:6},[e.breakpoints.up(1199)]:{gap:12}}),children:[(0,l.jsx)(i.A,{sx:e=>({display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",maxWidth:"50ch",textAlign:"center",flexShrink:999,[e.breakpoints.up(834)]:{minWidth:420,alignItems:"flex-start",textAlign:"initial"},[`& .${a.A.root}`]:{textWrap:"balance"}}),children:t}),(0,l.jsx)(s.A,{ratio:1,variant:"outlined",maxHeight:300,sx:e=>({minWidth:300,alignSelf:"stretch",[e.breakpoints.up(834)]:{alignSelf:"initial",flexGrow:1,"--AspectRatio-maxHeight":"600px","--AspectRatio-minHeight":"600px"},borderRadius:"sm",bgcolor:"background.level2",flexBasis:"50%"}),children:(0,l.jsx)("img",{src:o,alt:"",style:{objectFit:"cover",width:"100%",height:"100%"}})})]})}},74370:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var s=n(56347),i=n(34164),r=n(28244),a=n(39274),l=n(9113),o=n(29633),c=n(74848);function d(e){const{sidebar:t,toc:n,children:d,...h}=e,u=t&&t.items.length>0,m=(0,s.zy)();return(0,c.jsx)(r.A,{...h,children:(0,c.jsx)("div",{className:"container margin-vert--lg",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)(a.A,{sidebar:t}),"/"===m.pathname&&(0,c.jsx)(l.A,{}),(0,c.jsxs)("main",{className:(0,i.A)("col",{"col--7":u,"col--9 col--offset-1":!u}),children:[d,"/"!==m.pathname&&(0,c.jsx)(o.A,{})]}),n&&(0,c.jsx)("div",{className:"col col--2",children:n})]})})})}},52115:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(74848);function i(e){let{children:t,className:n}=e;return(0,s.jsx)("article",{className:n,children:t})}},7197:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var s=n(34164),i=n(70440),r=n(44096),a=n(11544),l=n(74848);function o(e){let{children:t,className:n}=e;const{isBlogPostPage:o}=(0,r.e7)();return(0,l.jsx)("div",{id:o?i.LU:void 0,className:(0,s.A)("markdown",n),children:(0,l.jsx)(a.A,{children:t})})}},74550:(e,t,n)=>{n.d(t,{A:()=>m});n(96540);var s=n(34164),i=n(44096),r=n(17559),a=n(4336),l=n(62053),o=n(21312),c=n(28774),d=n(74848);function h(){return(0,d.jsx)("b",{children:(0,d.jsx)(o.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function u(e){const{blogPostTitle:t,...n}=e;return(0,d.jsx)(c.A,{"aria-label":(0,o.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,d.jsx)(h,{})})}function m(){const{metadata:e,isBlogPostPage:t}=(0,i.e7)(),{tags:n,title:o,editUrl:c,hasTruncateMarker:h,lastUpdatedBy:m,lastUpdatedAt:g}=e,x=!t&&h,p=n.length>0;if(!(p||x||c))return null;if(t){const e=!!(c||g||m);return(0,d.jsxs)("footer",{className:"docusaurus-mt-lg",children:[p&&(0,d.jsx)("div",{className:(0,s.A)("row","margin-top--sm",r.G.blog.blogFooterEditMetaRow),children:(0,d.jsx)("div",{className:"col",children:(0,d.jsx)(l.A,{tags:n})})}),e&&(0,d.jsx)(a.A,{className:(0,s.A)("margin-top--sm",r.G.blog.blogFooterEditMetaRow),editUrl:c,lastUpdatedAt:g,lastUpdatedBy:m})]})}return(0,d.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[p&&(0,d.jsx)("div",{className:(0,s.A)("col",{"col--9":x}),children:(0,d.jsx)(l.A,{tags:n})}),x&&(0,d.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":p}),children:(0,d.jsx)(u,{blogPostTitle:o,to:e.permalink})})]})}},92264:(e,t,n)=>{n.d(t,{A:()=>m});n(96540);var s=n(34164),i=n(21312),r=n(53465),a=n(36266),l=n(44096);const o={container:"container_iJTo"};var c=n(74848);function d(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,r.W)();return t=>{const n=Math.ceil(t);return e(n,(0,i.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,c.jsx)(c.Fragment,{children:n(t)})}function h(e){let{date:t,formattedDate:n}=e;return(0,c.jsx)("time",{dateTime:t,children:n})}function u(){return(0,c.jsx)(c.Fragment,{children:" \xb7 "})}function m(e){let{className:t}=e;const{metadata:n}=(0,l.e7)(),{date:i,readingTime:r}=n,m=(0,a.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,c.jsxs)("div",{className:(0,s.A)(o.container,"margin-vert--md",t),children:[(0,c.jsx)(h,{date:i,formattedDate:(g=i,m.format(new Date(g)))}),void 0!==r&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u,{}),(0,c.jsx)(d,{readingTime:r})]})]});var g}},26832:(e,t,n)=>{n.d(t,{A:()=>N});n(96540);var s=n(44096),i=n(15824),r=n(78126),a=n(84),l=n(9471),o=n(96414),c=n(62370),d=n(70357),h=n(95878),u=n(6888),m=n(21355),g=n(29511),x=n(19145),p=n(93738),j=n(43563),f=n(92264),A=n(7197),b=n(74550),v=n(74848);function y(e){let{children:t}=e;const{metadata:n,frontMatter:y}=(0,s.e7)(),{permalink:T,title:w}=n,{image:P}=y;return console.log("InstagramPost",T,w,P),(0,v.jsxs)(a.A,{variant:"outlined",sx:{minWidth:300,"--Card-radius":e=>e.vars.radius.xs},children:[(0,v.jsxs)(l.A,{orientation:"horizontal",sx:{alignItems:"center",gap:1},children:[(0,v.jsx)(j.A,{}),(0,v.jsx)(d.Ay,{variant:"plain",color:"neutral",size:"sm",sx:{ml:"auto"},children:(0,v.jsx)(u.A,{})})]}),(0,v.jsx)(o.A,{children:(0,v.jsx)("a",{href:T,children:(0,v.jsx)(i.A,{ratio:600/520,variant:"outlined",maxHeight:300,children:(0,v.jsx)("img",{src:P,alt:"",loading:"lazy"})})})}),(0,v.jsxs)(l.A,{orientation:"horizontal",sx:{alignItems:"center",mx:-1},children:[(0,v.jsxs)(r.A,{sx:{width:0,display:"flex",gap:.5},children:[(0,v.jsx)(d.Ay,{variant:"plain",color:"neutral",size:"sm",children:(0,v.jsx)(m.A,{})}),(0,v.jsx)(d.Ay,{variant:"plain",color:"neutral",size:"sm",children:(0,v.jsx)(g.A,{})}),(0,v.jsx)(d.Ay,{variant:"plain",color:"neutral",size:"sm",children:(0,v.jsx)(x.A,{})})]}),(0,v.jsx)(r.A,{sx:{display:"flex",alignItems:"center",gap:.5,mx:"auto"},children:" "}),(0,v.jsx)(r.A,{sx:{width:0,display:"flex",flexDirection:"row-reverse"},children:(0,v.jsx)(d.Ay,{variant:"plain",color:"neutral",size:"sm",children:(0,v.jsx)(p.A,{})})})]}),(0,v.jsxs)(l.A,{children:[(0,v.jsx)(c.A,{underline:"none",fontSize:"lg",fontWeight:"lg",textColor:"text.primary",href:T,children:w}),(0,v.jsx)(h.Ay,{fontSize:"sm",children:(0,v.jsx)(A.A,{children:t})}),(0,v.jsx)(b.A,{}),(0,v.jsx)(f.A,{})]})]})}var T=n(52115),w=n(34164),P=n(7353);function N(e){let{items:t}=e;return(0,v.jsx)(r.A,{sx:{flexGrow:1},children:(0,v.jsx)(P.A,{container:!0,spacing:2,children:t.map((e=>{let{content:t}=e;return(0,v.jsx)(P.A,{xs:12,sm:6,justifyContent:"center",alignItems:"center",minHeight:180,children:(0,v.jsx)(s.in,{content:t,children:(0,v.jsx)(T.A,{className:(0,w.A)("margin-bottom--xl","InstagramPostCards"),children:(0,v.jsx)(y,{children:(0,v.jsx)(t,{})})})},t.metadata.permalink)})}))})})}}}]);