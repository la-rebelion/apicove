"use strict";(self.webpackChunkapicove=self.webpackChunkapicove||[]).push([[6061],{32234:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164),a=t(44084),c=t(17559),i=t(27293),s=t(74848);function l(e){let{className:n}=e;return(0,s.jsx)(i.A,{type:"caution",title:(0,s.jsx)(a.Rc,{}),className:(0,r.A)(n,c.G.common.unlistedBanner),children:(0,s.jsx)(a.Uh,{})})}function o(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.AE,{}),(0,s.jsx)(l,{...e})]})}},41689:(e,n,t)=>{t.d(n,{A:()=>u});t(96540);var r=t(34164),a=t(44084),c=t(17559),i=t(27293),s=t(74848);function l(e){let{className:n}=e;return(0,s.jsx)(i.A,{type:"caution",title:(0,s.jsx)(a.Yh,{}),className:(0,r.A)(n,c.G.common.draftBanner),children:(0,s.jsx)(a.TT,{})})}var o=t(32234);function u(e){let{metadata:n}=e;const{unlisted:t,frontMatter:r}=n;return(0,s.jsxs)(s.Fragment,{children:[(t||r.unlisted)&&(0,s.jsx)(o.A,{}),r.draft&&(0,s.jsx)(l,{})]})}},67973:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});t(96540);var r=t(34164),a=t(61213),c=t(17559),i=t(28244),s=t(11544),l=t(67763),o=t(41689),u=t(4336);const d={mdxPageWrapper:"mdxPageWrapper_j9I6"};var f=t(74848);function m(e){const{content:n}=e,{metadata:t,assets:m}=n,{title:h,editUrl:v,description:g,frontMatter:p,lastUpdatedBy:x,lastUpdatedAt:b}=t,{keywords:j,wrapperClassName:C,hide_table_of_contents:k}=p,A=m.image??p.image,H=!!(v||b||x);return(0,f.jsx)(a.e3,{className:(0,r.A)(C??c.G.wrapper.mdxPages,c.G.page.mdxPage),children:(0,f.jsxs)(i.A,{children:[(0,f.jsx)(a.be,{title:h,description:g,keywords:j,image:A}),(0,f.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,f.jsxs)("div",{className:(0,r.A)("row",d.mdxPageWrapper),children:[(0,f.jsxs)("div",{className:(0,r.A)("col",!k&&"col--8"),children:[(0,f.jsx)(o.A,{metadata:t}),(0,f.jsx)("article",{children:(0,f.jsx)(s.A,{children:(0,f.jsx)(n,{})})}),H&&(0,f.jsx)(u.A,{className:(0,r.A)("margin-top--sm",c.G.pages.pageFooterEditMetaRow),editUrl:v,lastUpdatedAt:b,lastUpdatedBy:x})]}),!k&&n.toc.length>0&&(0,f.jsx)("div",{className:"col col--2",children:(0,f.jsx)(l.A,{toc:n.toc,minHeadingLevel:p.toc_min_heading_level,maxHeadingLevel:p.toc_max_heading_level})})]})})]})})}},67763:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(34164),a=t(65195);const c={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var i=t(74848);const s="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,i.jsx)("div",{className:(0,r.A)(c.tableOfContents,"thin-scrollbar",n),children:(0,i.jsx)(a.A,{...t,linkClassName:s,linkActiveClassName:l})})}},65195:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(96540),a=t(6342);function c(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):r.push(a)})),r}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function l(e,n){let{anchorTopOffset:t}=n;const r=e.find((e=>s(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function o(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function u(e){const n=(0,r.useRef)(void 0),t=o();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:c,maxHeadingLevel:i}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),s=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const r=[];for(let a=n;a<=t;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:c,maxHeadingLevel:i}),o=l(s,{anchorTopOffset:t.current}),u=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===u)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,t])}var d=t(28774),f=t(74848);function m(e){let{toc:n,className:t,linkClassName:r,isChild:a}=e;return n.length?(0,f.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,f.jsxs)("li",{children:[(0,f.jsx)(d.A,{to:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,f.jsx)(m,{isChild:!0,toc:e.children,className:t,linkClassName:r})]},e.id)))}):null}const h=r.memo(m);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:d,...m}=e;const v=(0,a.p)(),g=o??v.tableOfContents.minHeadingLevel,p=d??v.tableOfContents.maxHeadingLevel,x=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>i({toc:c(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:g,maxHeadingLevel:p});return u((0,r.useMemo)((()=>{if(s&&l)return{linkClassName:s,linkActiveClassName:l,minHeadingLevel:g,maxHeadingLevel:p}}),[s,l,g,p])),(0,f.jsx)(h,{toc:x,className:t,linkClassName:s,...m})}},44084:(e,n,t)=>{t.d(n,{AE:()=>l,Rc:()=>i,TT:()=>u,Uh:()=>s,Yh:()=>o});t(96540);var r=t(21312),a=t(5260),c=t(74848);function i(){return(0,c.jsx)(r.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function s(){return(0,c.jsx)(r.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function l(){return(0,c.jsx)(a.A,{children:(0,c.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function o(){return(0,c.jsx)(r.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,c.jsx)(r.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},24534:(e,n,t)=>{t.d(n,{IO:()=>d,LU:()=>l,MS:()=>r,Sv:()=>u,XZ:()=>s,YK:()=>i,j:()=>c,vd:()=>a,yE:()=>o});var r="-ms-",a="-moz-",c="-webkit-",i="comm",s="rule",l="decl",o="@import",u="@keyframes",d="@layer"},73716:(e,n,t)=>{t.d(n,{wE:()=>i});var r=t(24534),a=t(19735),c=t(40390);function i(e){return(0,c.VF)(s("",null,null,null,[""],e=(0,c.c4)(e),0,[0],e))}function s(e,n,t,r,i,d,f,m,h){for(var v=0,g=0,p=f,x=0,b=0,j=0,C=1,k=1,A=1,H=0,N="",L=i,w=d,y=r,T=N;k;)switch(j=H,H=(0,c.K2)()){case 40:if(108!=j&&58==(0,a.wN)(T,p-1)){-1!=(0,a.K5)(T+=(0,a.HC)((0,c.Tb)(H),"&","&\f"),"&\f")&&(A=-1);break}case 34:case 39:case 91:T+=(0,c.Tb)(H);break;case 9:case 10:case 13:case 32:T+=(0,c.mw)(j);break;case 92:T+=(0,c.Nc)((0,c.OW)()-1,7);continue;case 47:switch((0,c.se)()){case 42:case 47:(0,a.BC)(o((0,c.nf)((0,c.K2)(),(0,c.OW)()),n,t),h);break;default:T+="/"}break;case 123*C:m[v++]=(0,a.b2)(T)*A;case 125*C:case 59:case 0:switch(H){case 0:case 125:k=0;case 59+g:-1==A&&(T=(0,a.HC)(T,/\f/g,"")),b>0&&(0,a.b2)(T)-p&&(0,a.BC)(b>32?u(T+";",r,t,p-1):u((0,a.HC)(T," ","")+";",r,t,p-2),h);break;case 59:T+=";";default:if((0,a.BC)(y=l(T,n,t,v,g,i,m,N,L=[],w=[],p),d),123===H)if(0===g)s(T,n,y,y,L,d,p,m,w);else switch(99===x&&110===(0,a.wN)(T,3)?100:x){case 100:case 108:case 109:case 115:s(e,y,y,r&&(0,a.BC)(l(e,y,y,0,0,i,m,N,i,L=[],p),w),i,w,p,m,r?L:w);break;default:s(T,y,y,y,[""],w,0,m,w)}}v=g=b=0,C=A=1,N=T="",p=f;break;case 58:p=1+(0,a.b2)(T),b=j;default:if(C<1)if(123==H)--C;else if(125==H&&0==C++&&125==(0,c.YL)())continue;switch(T+=(0,a.HT)(H),H*C){case 38:A=g>0?1:(T+="\f",-1);break;case 44:m[v++]=((0,a.b2)(T)-1)*A,A=1;break;case 64:45===(0,c.se)()&&(T+=(0,c.Tb)((0,c.K2)())),x=(0,c.se)(),g=p=(0,a.b2)(N=T+=(0,c.Cv)((0,c.OW)())),H++;break;case 45:45===j&&2==(0,a.b2)(T)&&(C=0)}}return d}function l(e,n,t,i,s,l,o,u,d,f,m){for(var h=s-1,v=0===s?l:[""],g=(0,a.FK)(v),p=0,x=0,b=0;p<i;++p)for(var j=0,C=(0,a.c1)(e,h+1,h=(0,a.tn)(x=o[p])),k=e;j<g;++j)(k=(0,a.Bq)(x>0?v[j]+" "+C:(0,a.HC)(C,/&\f/g,v[j])))&&(d[b++]=k);return(0,c.rH)(e,n,t,0===s?r.XZ:u,d,f,m)}function o(e,n,t){return(0,c.rH)(e,n,t,r.YK,(0,a.HT)((0,c.Tp)()),(0,a.c1)(e,2,-2),0)}function u(e,n,t,i){return(0,c.rH)(e,n,t,r.LU,(0,a.c1)(e,0,i),(0,a.c1)(e,i+1,-1),i)}},50483:(e,n,t)=>{t.d(n,{A:()=>i,l:()=>c});var r=t(24534),a=t(19735);function c(e,n){for(var t="",r=(0,a.FK)(e),c=0;c<r;c++)t+=n(e[c],c,e,n)||"";return t}function i(e,n,t,i){switch(e.type){case r.IO:if(e.children.length)break;case r.yE:case r.LU:return e.return=e.return||e.value;case r.YK:return"";case r.Sv:return e.return=e.value+"{"+c(e.children,i)+"}";case r.XZ:e.value=e.props.join(",")}return(0,a.b2)(t=c(e.children,i))?e.return=e.value+"{"+t+"}":""}},40390:(e,n,t)=>{t.d(n,{C:()=>d,Cv:()=>L,G1:()=>s,K2:()=>h,Nc:()=>A,OW:()=>g,Sh:()=>x,Tb:()=>C,Tp:()=>f,VF:()=>j,YL:()=>m,c4:()=>b,di:()=>p,mw:()=>k,nf:()=>N,rH:()=>u,se:()=>v});var r=t(19735),a=1,c=1,i=0,s=0,l=0,o="";function u(e,n,t,r,i,s,l){return{value:e,root:n,parent:t,type:r,props:i,children:s,line:a,column:c,length:l,return:""}}function d(e,n){return(0,r.kp)(u("",null,null,"",null,null,0),e,{length:-e.length},n)}function f(){return l}function m(){return l=s>0?(0,r.wN)(o,--s):0,c--,10===l&&(c=1,a--),l}function h(){return l=s<i?(0,r.wN)(o,s++):0,c++,10===l&&(c=1,a++),l}function v(){return(0,r.wN)(o,s)}function g(){return s}function p(e,n){return(0,r.c1)(o,e,n)}function x(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function b(e){return a=c=1,i=(0,r.b2)(o=e),s=0,[]}function j(e){return o="",e}function C(e){return(0,r.Bq)(p(s-1,H(91===e?e+2:40===e?e+1:e)))}function k(e){for(;(l=v())&&l<33;)h();return x(e)>2||x(l)>3?"":" "}function A(e,n){for(;--n&&h()&&!(l<48||l>102||l>57&&l<65||l>70&&l<97););return p(e,g()+(n<6&&32==v()&&32==h()))}function H(e){for(;h();)switch(l){case e:return s;case 34:case 39:34!==e&&39!==e&&H(l);break;case 40:41===e&&H(e);break;case 92:h()}return s}function N(e,n){for(;h()&&e+l!==57&&(e+l!==84||47!==v()););return"/*"+p(n,s-1)+"*"+(0,r.HT)(47===e?e:h())}function L(e){for(;!x(v());)h();return p(e,s)}},19735:(e,n,t)=>{t.d(n,{BC:()=>v,Bq:()=>s,FK:()=>h,HC:()=>o,HT:()=>a,K5:()=>u,YW:()=>l,b2:()=>m,c1:()=>f,kg:()=>g,kp:()=>c,tW:()=>i,tn:()=>r,wN:()=>d});var r=Math.abs,a=String.fromCharCode,c=Object.assign;function i(e,n){return 45^d(e,0)?(((n<<2^d(e,0))<<2^d(e,1))<<2^d(e,2))<<2^d(e,3):0}function s(e){return e.trim()}function l(e,n){return(e=n.exec(e))?e[0]:e}function o(e,n,t){return e.replace(n,t)}function u(e,n){return e.indexOf(n)}function d(e,n){return 0|e.charCodeAt(n)}function f(e,n,t){return e.slice(n,t)}function m(e){return e.length}function h(e){return e.length}function v(e,n){return n.push(e),e}function g(e,n){return e.map(n).join("")}}}]);