import{d as f,f as _,r as b,o,h as a,i as e,c as d,l as h,n as m,t as p,F as y,m as k,p as P,q as j,b as v,e as w}from"./main-16c162b3.js";const g=[{title:"Smartfarming Hackathon",description:"Prototype to improve farmer and worker communication",year:"2024",techStack:["Vue.js","Nest.js","TypeScript","OpenAI API"]},{title:"Portfolio Website v2",description:"Redesigned personal portfolio website",year:"2023",githubUrl:"",techStack:["Vue.js","Tailwind CSS","Vite","TypeScript"]},{title:"Local Clipboard",description:"Clipboard manager for cross platform file sharing",year:"2024",techStack:["Go","Apple Shortcuts"]},{title:"ESP32 Breakout Game",description:"Breakout game on an ESP32 with a TFT display and a joystick",year:"2024",githubUrl:"https://github.com/fabioeletto/esp32_breakout_game",techStack:["C++","Arduino"]},{title:"Self Ordering System",description:"Menu builder and ordering system for restaurants",year:"2023",techStack:["Vue.js","TypeScript","Go","PostgreSQL"]},{title:"Portfolio Website v1",description:"First personal portfolio website to highlight my skills and expertise.",year:"2023",githubUrl:"https://github.com/fabioeletto/portfolio_website_v1",techStack:["Vue.js","Tailwind CSS","Vite","TypeScript"]},{title:"NFT Smart Contract",description:"Own implementation of an ERC721 Smart Contract",year:"2022",techStack:["Solidity","Hardhat","Ethers.js"],githubUrl:"https://github.com/0xfabdav/erc721b"},{title:"Supply Chain Tracking",description:"MVP: End-to-End Product Tracking from Manufacturer to Customer",year:"2022",techStack:["Vue.js","Nest.js","TypeScript","Solidity","MongoDB"]},{title:"REST API for Managing Food Products",description:"Fetch products from an external API and save them in a new structure.",year:"2022",techStack:["Typescript","Nest.js","MongoDB"]},{title:"HelixScripts",description:"Automated checkout solution for different online stores",year:"2021",blogUrl:"blogs/helix-scripts",techStack:["Vue.js","Python","MySQL"]},{title:"Accounting script",description:"Automated Stripe Payout Invoice Booking in sevDesk",year:"2021",techStack:["Python","Stripe API","sevDesk API"],githubUrl:"https://github.com/fabioeletto/stripe_sevdesk_accounting_script"},{title:"Image uploader",description:"Automated Discord-to-Twitter image uploader",year:"2021",techStack:["Node.js","Discord.js","Twitter API"],githubUrl:"https://github.com/fabioeletto/discord_twitter_image_uploader"}],C={class:"absolute top-2 right-2 flex justify-center items-center text-white"},T={class:"sm:text-2xl text-lg font-bold text-white"},U={class:"flex justify-start items-center"},A={class:"mt-2 mb-1"},x={class:"text-white px-1 py-1 mr-2 rounded-md bg-primary/40"},V=f({__name:"project-card",props:{project:{}},setup(S){const s=_();function c(t){t.blogUrl&&s.push(t.blogUrl),t.githubUrl&&window.open(t.githubUrl,"_blank")}function i(t){return t.blogUrl||t.githubUrl}return(t,n)=>{const r=b("font-awesome-icon");return o(),a("div",{class:m({"px-4 py-2 border border-white rounded-lg mb-4 relative":!0,"hover:cursor-pointer":i(t.project)}),onClick:n[0]||(n[0]=l=>c(t.project))},[e("div",C,[t.project.blogUrl?(o(),d(r,{key:0,size:"lg",icon:"fa-solid fa-book"})):h("",!0),t.project.githubUrl?(o(),d(r,{key:1,size:"lg",icon:"fa-brands fa-github"})):h("",!0)]),e("h2",T,[e("span",U,[e("span",{class:m({"hover:underline":i(t.project)})},p(t.project.title),3)])]),e("p",A,p(t.project.description),1),(o(!0),a(y,null,k(t.project.techStack,l=>(o(),a("div",{key:`${t.project.title}-${l}`,class:"inline-block text-2xs mb-2"},[e("span",x,p(l),1)]))),128))],2)}}}),I={class:"w-full h-full mt-20 sm:mt-0"},B={class:"w-full h-full lg:flex-row"},D={class:"w-full"},E={class:"w-full"},u=3,$=f({__name:"projects",setup(S){const s=P(1),c=j(()=>{const i=(s.value-1)*u,t=i+u;return g.slice(i,t)});return(i,t)=>{const n=b("f-pagination");return o(),a("div",I,[e("div",B,[e("div",D,[(o(!0),a(y,null,k(c.value,r=>(o(),d(V,{key:r.title,project:r},null,8,["project"]))),128))]),e("div",E,[v(n,{totalItems:w(g).length,itemsPerPage:u,currentPage:s.value,onPageChange:t[0]||(t[0]=r=>s.value=r)},null,8,["totalItems","currentPage"])])])])}}});export{$ as default};
