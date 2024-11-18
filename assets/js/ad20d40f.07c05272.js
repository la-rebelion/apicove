"use strict";(self.webpackChunkapicove=self.webpackChunkapicove||[]).push([[8744],{8373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"gyat/getting-started","title":"Getting Started with GYAT","description":"GYAT is a CLI tool that simplifies API consumption. Designed to replace curl, it reads Swagger specs and simplifies interactions with commands kubectl-like.","source":"@site/docs/gyat/0-getting-started.md","sourceDirName":"gyat","slug":"/gyat","permalink":"/docs/gyat","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"title":"Getting Started with GYAT","description":"GYAT is a CLI tool that simplifies API consumption. Designed to replace curl, it reads Swagger specs and simplifies interactions with commands kubectl-like.","slug":"/gyat"},"sidebar":"tutorialSidebar","previous":{"title":"GYAT CLI","permalink":"/docs/gyat/"},"next":{"title":"Installation and Configuration","permalink":"/docs/gyat/installation-configuration"}}');var i=n(74848),o=n(28453);const a={title:"Getting Started with GYAT",description:"GYAT is a CLI tool that simplifies API consumption. Designed to replace curl, it reads Swagger specs and simplifies interactions with commands kubectl-like.",slug:"/gyat"},r=void 0,c={},l=[{value:"Example GYAT Commands",id:"example-gyat-commands",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["To get started with ",(0,i.jsx)(t.code,{children:"GYAT"}),", you'll need two simple things:"]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"An OpenAPI specification file"}),": This describes the API you\u2019re working with. For beginners, you can use the ",(0,i.jsx)(t.a,{href:"https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml",children:"Petstore example"})," API from the ",(0,i.jsx)(t.a,{href:"https://github.com/swagger-api/swagger-petstore",children:"Pet Store repository"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"GYAT Configuration"}),": ",(0,i.jsx)(t.code,{children:"GYAT"})," uses the same configuration format as ",(0,i.jsx)(t.code,{children:"kubectl"})," (i.e., the ",(0,i.jsx)(t.code,{children:"kubeconfig"})," file). This keeps the learning curve minimal and makes configuration easier."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"example-gyat-commands",children:"Example GYAT Commands"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"gyat"})," is at an early stage of development. There may be breaking changes in the future to the command usage, flags, and configuration file formats. If something doesn't work as expected, please let us know by ",(0,i.jsx)(t.a,{href:"https://go.rebelion.la/apicove-feedback",children:"opening an issue"}),", or contribute to its development with your feedback. \ud83e\udd13"]})}),"\n",(0,i.jsxs)(t.p,{children:["Here are some useful ",(0,i.jsx)(t.code,{children:"GYAT"})," commands to get you started:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:"{2,5,8,11,14,17,20}",children:"# Display help and list available APIs\ngyat info\n\n# List available operations for a specific API\ngyat petstore info -v\n\n# Retrieve a resource (e.g., pet) by ID\ngyat petstore get pet 10\n\n# Retrieve a resource (e.g., pet) by ID and output it in JSON format\ngyat petstore get pet 10 --o=json\n\n# Retrieve a resource (e.g., pet) with verbose output\ngyat petstore get pet 10 --o=json --v\n\n# Pipe output to jq for further processing\ngyat petstore get pet 10 --o=json | jq .\n\n# Retrieve a resource (e.g., pet) by operation ID with query parameters and output in YAML format\ngyat petstore get pet --operationId=findPetsByStatus --status=available --o=yaml\n"})}),"\n",(0,i.jsxs)(t.p,{children:["For more information, check out the ",(0,i.jsx)(t.a,{href:"/docs/gyat/",children:"GYAT documentation"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Download"}),": You can download the latest version of ",(0,i.jsx)(t.code,{children:"GYAT"})," from the ",(0,i.jsx)(t.a,{href:"https://go.rebelion.la/apicove-downloads",children:"GitHub releases page"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);