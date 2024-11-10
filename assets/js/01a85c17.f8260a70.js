"use strict";(self.webpackChunkapicove=self.webpackChunkapicove||[]).push([[8209],{44096:(e,t,a)=>{a.d(t,{in:()=>c,OU:()=>P,Ki:()=>k,kJ:()=>x,x:()=>l,e7:()=>d,J_:()=>f,Gx:()=>N});var n=a(96540),s=a(89532),i=a(36803),r=a(74848);function l(){const e=(0,i.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const o=n.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:s=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,n.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:s});return(0,r.jsx)(o.Provider,{value:i,children:t})}function d(){const e=(0,n.useContext)(o);if(null===e)throw new s.dV("BlogPostProvider");return e}var m=a(86025),u=a(44586);const g=e=>new Date(e).toISOString();function h(e){const t=e.map(b);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:j({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function x(e){const{siteConfig:t}=(0,u.A)(),{withBaseUrl:a}=(0,m.hH)(),{metadata:{blogDescription:n,blogTitle:s,permalink:i}}=e,r=`${t.url}${i}`;return{"@context":"https://schema.org","@type":"Blog","@id":r,mainEntityOfPage:r,headline:s,description:n,blogPost:e.items.map((e=>function(e,t,a){const{assets:n,frontMatter:s,metadata:i}=e,{date:r,title:l,description:o,lastUpdatedAt:c}=i,d=n.image??s.image,m=s.keywords??[],u=`${t.url}${i.permalink}`,x=c?g(c):void 0;return{"@type":"BlogPosting","@id":u,mainEntityOfPage:u,url:u,headline:l,name:l,description:o,datePublished:r,...x?{dateModified:x}:{},...h(i.authors),...p(d,a,l),...m?{keywords:m}:{}}}(e.content,t,a)))}}function f(){const e=l(),{assets:t,metadata:a}=d(),{siteConfig:n}=(0,u.A)(),{withBaseUrl:s}=(0,m.hH)(),{date:i,title:r,description:o,frontMatter:c,lastUpdatedAt:x}=a,f=t.image??c.image,b=c.keywords??[],j=x?g(x):void 0,v=`${n.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":v,mainEntityOfPage:v,url:v,headline:r,name:r,description:o,datePublished:i,...j?{dateModified:j}:{},...h(a.authors),...p(f,s,r),...b?{keywords:b}:{},isPartOf:{"@type":"Blog","@id":`${n.url}${e.blogBasePath}`,name:e.blogTitle}}}function b(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function j(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}var v=a(56347),A=a(28774),y=a(31682),C=a(99169);function N(e){const{pathname:t}=(0,v.zy)();return(0,n.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,C.ys)(e.permalink,t))}(e,t)))),[e,t])}function k(e){const t=(0,y.$z)(e,(e=>`${new Date(e.date).getFullYear()}`)),a=Object.entries(t);return a.reverse(),a}function P(e){let{items:t,ulClassName:a,liClassName:n,linkClassName:s,linkActiveClassName:i}=e;return(0,r.jsx)("ul",{className:a,children:t.map((e=>(0,r.jsx)("li",{className:n,children:(0,r.jsx)(A.A,{isNavLink:!0,to:e.permalink,className:s,activeClassName:i,children:e.title})},e.permalink)))})}},39274:(e,t,a)=>{a.d(t,{A:()=>I});var n=a(96540),s=a(24581),i=a(34164),r=a(21312),l=a(44096),o=a(6342),c=a(51107),d=a(74848);function m(e){let{year:t,yearGroupHeadingClassName:a,children:n}=e;return(0,d.jsxs)("div",{role:"group",children:[(0,d.jsx)(c.A,{as:"h3",className:a,children:t}),n]})}function u(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:n}=e;if((0,o.p)().blog.sidebar.groupByYear){const e=(0,l.Ki)(t);return(0,d.jsx)(d.Fragment,{children:e.map((e=>{let[t,s]=e;return(0,d.jsx)(m,{year:t,yearGroupHeadingClassName:a,children:(0,d.jsx)(n,{items:s})},t)}))})}return(0,d.jsx)(n,{items:t})}const g=(0,n.memo)(u),h="sidebar_re4s",p="sidebarItemTitle_pO2u",x="sidebarItemList_Yudw",f="sidebarItem__DBe",b="sidebarItemLink_mo7H",j="sidebarItemLinkActive_I1ZP",v="yearGroupHeading_rMGB",A=e=>{let{items:t}=e;return(0,d.jsx)(l.OU,{items:t,ulClassName:(0,i.A)(x,"clean-list"),liClassName:f,linkClassName:b,linkActiveClassName:j})};function y(e){let{sidebar:t}=e;const a=(0,l.Gx)(t.items);return(0,d.jsx)("aside",{className:"col col--3",children:(0,d.jsxs)("nav",{className:(0,i.A)(h,"thin-scrollbar"),"aria-label":(0,r.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,d.jsx)("div",{className:(0,i.A)(p,"margin-bottom--md"),children:t.title}),(0,d.jsx)(g,{items:a,ListComponent:A,yearGroupHeadingClassName:v})]})})}const C=(0,n.memo)(y);var N=a(75600);const k="yearGroupHeading_QT03",P=e=>{let{items:t}=e;return(0,d.jsx)(l.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function w(e){let{sidebar:t}=e;const a=(0,l.Gx)(t.items);return(0,d.jsx)(g,{items:a,ListComponent:P,yearGroupHeadingClassName:k})}function _(e){return(0,d.jsx)(N.GX,{component:w,props:e})}const B=(0,n.memo)(_);function I(e){let{sidebar:t}=e;const a=(0,s.l)();return t?.items.length?"mobile"===a?(0,d.jsx)(B,{sidebar:t}):(0,d.jsx)(C,{sidebar:t}):null}},69158:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});a(96540);var n=a(34164),s=a(21312);const i=()=>(0,s.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var r=a(61213),l=a(17559),o=a(74370),c=a(56133),d=a(51107);const m={tag:"tag_Nnez"};var u=a(74848);function g(e){let{letterEntry:t}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(d.A,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,u.jsx)("li",{className:m.tag,children:(0,u.jsx)(c.A,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function h(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[n]=t;return a.localeCompare(n)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,u.jsx)("section",{className:"margin-vert--lg",children:a.map((e=>(0,u.jsx)(g,{letterEntry:e},e.letter)))})}var p=a(41463);function x(e){let{tags:t,sidebar:a}=e;const s=i();return(0,u.jsxs)(r.e3,{className:(0,n.A)(l.G.wrapper.blogPages,l.G.page.blogTagsListPage),children:[(0,u.jsx)(r.be,{title:s}),(0,u.jsx)(p.A,{tag:"blog_tags_list"}),(0,u.jsxs)(o.A,{sidebar:a,children:[(0,u.jsx)(d.A,{as:"h1",children:s}),(0,u.jsx)(h,{tags:t})]})]})}},56133:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var n=a(34164),s=a(28774);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=a(74848);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,r.jsxs)(s.A,{href:t,title:o,className:(0,n.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[a,l&&(0,r.jsx)("span",{children:l})]})}},9113:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var n=a(53905),s=a(95878),i=a(9143),r=a(29633),l=a(74848);function o(){return(0,l.jsxs)(i.A,{reversed:!0,children:[(0,l.jsx)(n.A,{size:"lg",variant:"outlined",color:"neutral",children:"APICove, API hub for easier Enterprise integrations"}),(0,l.jsx)(s.Ay,{level:"h1",fontWeight:"xl",fontSize:"clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)",children:"Easy-to-navigate space for APIs"}),(0,l.jsx)(s.Ay,{fontSize:"lg",textColor:"text.secondary",lineHeight:"lg",children:"APICove provides a set of tools and services that help you integrate your applications with ease. Tools designed for API-first, and better Developer Experience."}),(0,l.jsx)(r.A,{divider:!1})]})}},29633:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(96540),s=a(91397),i=a(78126),r=a(32972),l=a(95878),o=a(62370),c=a(74848);function d(e){let{divider:t=!0}=e;return n.useEffect((()=>{const e=document.createElement("script");e.src="https://js.hsforms.net/forms/v2.js",document.body.appendChild(e),e.addEventListener("load",(()=>{window.hbspt&&window.hbspt.forms.create({region:"na1",portalId:"21339207",formId:"1cb2b307-3e31-4971-8c10-4191db75a045",target:"#hubspotForm"})}))}),[]),(0,c.jsxs)(c.Fragment,{children:[t&&(0,c.jsx)(s.A,{inset:"none",orientation:"horizontal",sx:{my:2}}),(0,c.jsx)(i.A,{sx:{display:"flex",gap:1,my:2,alignSelf:"stretch",flexBasis:"80%",flexDirection:"column"},children:(0,c.jsxs)(r.A,{spacing:1,children:[(0,c.jsx)("div",{id:"hubspotForm",style:{margin:"auto"}}),(0,c.jsxs)(l.Ay,{fontSize:"xs",textColor:"text.secondary",children:["By continuing you agree to our"," ",(0,c.jsx)(o.A,{color:"neutral",children:(0,c.jsx)("b",{children:"Privacy Policy"})})]})]})})]})}},9143:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var n=a(15824),s=a(78126),i=a(22967),r=a(34812),l=a(74848);function o(e){let{children:t,reversed:a,image:o="img/APICove-the-easy-to-navigate-bay.png"}=e;return(0,l.jsxs)(i.A,{sx:e=>({position:"relative",minHeight:"auto",display:"flex",flexDirection:a?"column-reverse":"column",alignItems:"center",py:10,gap:4,[e.breakpoints.up(834)]:{flexDirection:"row",gap:6},[e.breakpoints.up(1199)]:{gap:12}}),children:[(0,l.jsx)(s.A,{sx:e=>({display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",maxWidth:"50ch",textAlign:"center",flexShrink:999,[e.breakpoints.up(834)]:{minWidth:420,alignItems:"flex-start",textAlign:"initial"},[`& .${r.A.root}`]:{textWrap:"balance"}}),children:t}),(0,l.jsx)(n.A,{ratio:1,variant:"outlined",maxHeight:300,sx:e=>({minWidth:300,alignSelf:"stretch",[e.breakpoints.up(834)]:{alignSelf:"initial",flexGrow:1,"--AspectRatio-maxHeight":"600px","--AspectRatio-minHeight":"600px"},borderRadius:"sm",bgcolor:"background.level2",flexBasis:"50%"}),children:(0,l.jsx)("img",{src:o,alt:"",style:{objectFit:"cover",width:"100%",height:"100%"}})})]})}},74370:(e,t,a)=>{a.d(t,{A:()=>d});a(96540);var n=a(56347),s=a(34164),i=a(28244),r=a(39274),l=a(9113),o=a(29633),c=a(74848);function d(e){const{sidebar:t,toc:a,children:d,...m}=e,u=t&&t.items.length>0,g=(0,n.zy)();return(0,c.jsx)(i.A,{...m,children:(0,c.jsx)("div",{className:"container margin-vert--lg",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)(r.A,{sidebar:t}),"/"===g.pathname&&(0,c.jsx)(l.A,{}),(0,c.jsxs)("main",{className:(0,s.A)("col",{"col--7":u,"col--9 col--offset-1":!u}),children:[d,"/"!==g.pathname&&(0,c.jsx)(o.A,{})]}),a&&(0,c.jsx)("div",{className:"col col--2",children:a})]})})})}}}]);