(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{221:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Z});var a=s(7876),r=s(4232);let i={src:"/_next/static/media/logo.f4765c7b.svg"},n={src:"/_next/static/media/logohackdays.5e179aab.svg"};var l=s(4111),c=s(3517),d=s(8226),o=s(8416),x=s(9625),m=s(5374),p=s(9474);let g=["fr","en"];function h(){let[e,t]=(0,r.useState)("fr"),[s,a]=(0,r.useState)({}),[i,n]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=localStorage.getItem("locale");e&&g.includes(e)&&t(e)},[]),(0,r.useEffect)(()=>{fetch("/locales/".concat(e,".json")).then(e=>e.json()).then(e=>{a(e),n(!0)}).catch(()=>console.error("Erreur lors du chargement de ".concat(e,".json")))},[e]),{t:function(e){if(!i)return e;let t=e.split("."),a=s;for(let s of t)if(void 0===(a=null==a?void 0:a[s]))return e;return"string"==typeof a?a:e},locale:e,changeLocale:function(e){localStorage.setItem("locale",e),window.location.reload()},availableLocales:g}}let u={en:"EN",fr:"FR"},b=()=>{let{locale:e,availableLocales:t}=h(),[s,i]=(0,r.useState)(!1);if((0,r.useEffect)(()=>{i(!0)},[]),!s||!t||t.length<2)return null;let n=e=>{localStorage.setItem("locale",e),window.location.reload()};return(0,a.jsxs)(o.W1,{as:"div",className:"z-100 md:fixed block text-left top-[20px] right-[20px]",children:[(0,a.jsxs)(o.W1.Button,{className:"cursor-pointer flex md:border-beige-200 items-center bg-white md:border rounded-full px-4 py-2 h-[40px] text-[13px] font-normal",children:[u[null!=e?e:"en"],(0,a.jsx)(m.A,{className:"w-5 h-5 ml-2 text-green-800 transition-transform focus:rotate-180"})]}),(0,a.jsx)(x.e,{enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,a.jsx)(o.W1.Items,{className:"border border-beige-200 absolute left-0 mt-2 w-20 bg-white rounded-md",children:t.map(t=>(0,a.jsx)(o.W1.Item,{children:()=>(0,a.jsxs)("button",{onClick:()=>n(t),className:"cursor-pointer h-[37px] hover:bg-beige-100 flex w-full px-4 py-2 font-normal text-[13px] text-green-800 justify-between items-center",children:[u[t]||t.toUpperCase(),e===t&&(0,a.jsx)(p.A,{className:"text-orange-500",fontSize:"small"})]})},t))})})]})};function f(){let[e,t]=(0,l.l)(),{t:s}=h(),o=async()=>{await t(e.current,{top:20},{delay:.2,duration:.5,ease:"easeOut"}),await t(e.current,{width:492},{duration:.5,ease:"easeOut"})};return(0,r.useEffect)(()=>{o()},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c.P.div,{initial:{top:"-100px",backgroundColor:"transparent"},animate:{top:"0px",backgroundColor:"white"},transition:{delay:0,duration:.3,ease:"easeOut"},className:"items-center flex z-1000 w-full bg-white fixed md:hidden top-[0px] left-[0px] h-[40px] justify-between",children:[(0,a.jsx)(b,{}),(0,a.jsx)(d.N_,{to:"GameSetCode",smooth:!0,children:(0,a.jsx)("img",{src:i.src})}),(0,a.jsx)("a",{href:"https://pretix.dgnum.eu/dgnum/hack-lsn-2025/",target:"_blank",className:"transition-all text-[13px] text-green-800 p-4 hover:text-orange-500",children:s("menu.signup")})]}),(0,a.jsxs)("div",{className:"w-full hidden md:flex justify-center",children:[(0,a.jsxs)(c.P.div,{initial:{top:"-100px",width:40},ref:e,transition:{delay:.3,duration:.5,ease:"easeOut"},className:"fixed overflow-hidden z-1000 p-[5px] text-[13px] top-[20px] border border-beige-200 bg-white rounded-3xl h-[40px]",style:{boxShadow:"0px 4px 9.3px 0px rgba(75, 41, 28, 0.05)"},children:[(0,a.jsx)(c.P.a,{initial:{opacity:1},animate:{opacity:0},transition:{delay:3,duration:.5},className:"absolute top-1.25",children:(0,a.jsx)("img",{className:"",src:i.src})}),(0,a.jsxs)(c.P.ul,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:.5,ease:"easeOut"},className:"flex gap-4 items-center justify-between",children:[(0,a.jsx)("li",{children:(0,a.jsx)(d.N_,{to:"GameSetCode",smooth:!0,activeClass:"text-orange-600",spy:!0,children:(0,a.jsx)("img",{className:"w-[124px] overflow-hidden",src:n.src})})}),(0,a.jsx)("li",{className:"flex items-center hover:text-orange-600 cursor-pointer",children:(0,a.jsx)(d.N_,{to:"AVosMarques",smooth:!0,activeClass:"text-orange-600",spy:!0,children:s("menu.tracks")})}),(0,a.jsx)("li",{className:"flex items-center hover:text-orange-600 cursor-pointer",children:(0,a.jsx)(d.N_,{to:"Partez",smooth:!0,activeClass:"text-orange-600",spy:!0,children:s("menu.program")})}),(0,a.jsx)("li",{className:"flex items-center hover:text-orange-600 cursor-pointer",children:(0,a.jsx)(d.N_,{to:"Informations",smooth:!0,activeClass:"text-orange-600",spy:!0,children:s("menu.info")})}),(0,a.jsx)("li",{className:"flex items-center",children:(0,a.jsx)("a",{href:"https://pretix.dgnum.eu/dgnum/hack-lsn-2025/",target:"_blank",className:"flex items-center px-4 py-1 transition-all bg-green-700 hover:bg-orange-500 text-beige-100 rounded-full",children:s("menu.signup")})})]})]}),(0,a.jsx)(c.P.div,{initial:{top:"-100px",width:40},animate:{top:"20px"},transition:{delay:.3,duration:.5,ease:"easeOut"},className:"hidden md:block",children:(0,a.jsx)(b,{})})]})]})}let j={src:"/_next/static/media/title.95a860ea.svg"},v={src:"/_next/static/media/title-mobile.29ca953d.svg"};var N=s(508),y=s(5135);function w(e){let{children:t,delay:s=0}=e,i=(0,r.useRef)(null),n=(0,N.W)(i,{once:!0,margin:"-100px 0px"}),l=(0,y.I)();return(0,a.jsx)(c.P.div,{ref:i,initial:{opacity:0},animate:l?{}:n?{opacity:1}:{opacity:0},transition:{duration:.4,ease:"easeIn",delay:s},children:t})}function _(){let[e,t]=(0,r.useState)("Code."),[s,i]=(0,r.useState)(!1),[n,l]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=()=>{l(window.innerWidth>=768)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let d=()=>{n&&(t("Code;"),i(!0),setTimeout(()=>{t("Code."),i(!1)},4e3))},o={hidden:{opacity:0},visible:e=>({opacity:1,transition:{delay:.6*e+1.2,duration:.8}})};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(w,{delay:0,children:[(0,a.jsxs)("div",{id:"GameSetCode",className:"relative h-[80vh] md:h-[100vh] w-full bg-cover bg-top bg-[url('/images/hero/hero-mobile.png')] md:bg-[url('/images/hero/hero.jpg')]",children:[" ",(0,a.jsx)("div",{className:"container h-full mx-auto relative",children:(0,a.jsx)("h1",{className:"uppercase font-title absolute bottom-[56px] hero-title",children:["Game.","Set.",e].map((e,t)=>(0,a.jsx)(c.P.span,{className:"hero-title-word",initial:"hidden",animate:"visible",custom:t,variants:o,children:2===t?e.split("").map((e,t)=>(0,a.jsx)(c.P.span,{custom:t,initial:{opacity:0},animate:{opacity:1},transition:{delay:.2*t+2.1,duration:0,ease:"easeOut"},className:"md:cursor-pointer ".concat(s?"hero-title-matrix":"text-orange-100"," md:inline-block"),onClick:d,children:e},t)):(0,a.jsx)("span",{className:"".concat(s?"hero-title-matrix-simple":"text-orange-800"),children:e})},t))})})]}),(0,a.jsx)("div",{className:"sub-hero-title relative w-full bg-green-700",children:(0,a.jsx)("div",{className:"sub-hero-title-border w-full",children:(0,a.jsx)("div",{className:"sub-hero-title-subborder w-full",children:(0,a.jsxs)("div",{className:"container mx-auto",children:[(0,a.jsx)("img",{className:"mx-auto py-6 hidden md:block",src:j.src}),(0,a.jsx)("img",{className:"mx-auto w-full py-6 block md:hidden",src:v.src})]})})})})]})})}let k={src:"/_next/static/media/logo-dinum.d886777a.svg"},z={src:"/_next/static/media/logo-dgnum.ed070e53.svg"},S={src:"/_next/static/media/logo-ens.67145951.svg"};function C(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"relative w-full bg-beige-100 py-[30px] md:py-0",children:(0,a.jsx)("div",{className:"flex column h-[327px] md:h-[380px] w-full bg-center bg-cover md:bg-auto py-12 bg-no-repeat container mx-auto",children:(0,a.jsx)("div",{className:"m-auto",children:(0,a.jsxs)("div",{className:"relative grid grid-cols-3 flex text-center m-auto max-w-[436px] my-6 mx-auto gap-[47px]",children:[(0,a.jsx)(w,{delay:.2,children:(0,a.jsx)("img",{src:k.src})}),(0,a.jsx)(w,{delay:.4,children:(0,a.jsx)("img",{src:S.src,className:"mx-auto self-end"})}),(0,a.jsx)(w,{delay:.6,children:(0,a.jsx)("img",{src:z.src,className:"self-end"})})]})})})})})}function q(e){let{text:t,type:s="light"}=e;return(0,a.jsx)("span",{className:"px-3 py-1 rounded-full text-sm font-normal font-code\n      ".concat(s&&"dark"===s?"bg-white/[.05] text-beige-100":"bg-orange-100 text-orange-600"),children:t})}function E(){let{t:e}=h();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"sub-hero-title relative w-full bg-green-700",children:(0,a.jsx)("div",{className:"sub-hero-title-border w-full",children:(0,a.jsx)("div",{className:"sub-hero-title-subborder w-full",children:(0,a.jsxs)("div",{className:"container mx-auto md:py-[120px] py-8",children:[(0,a.jsxs)("div",{className:"flex gap-4 md:justify-center flex-wrap md:flex-nowrap",children:[(0,a.jsx)(w,{delay:.2,children:(0,a.jsx)(q,{text:e("mission.tags.1"),type:"dark"})}),(0,a.jsx)(w,{delay:.4,children:(0,a.jsx)(q,{text:e("mission.tags.2"),type:"dark"})}),(0,a.jsx)(w,{delay:.6,children:(0,a.jsx)(q,{text:e("mission.tags.3"),type:"dark"})})]}),(0,a.jsxs)(w,{children:[(0,a.jsx)("h3",{className:"font-title leading-14 py-8 uppercase md:text-center text-beige-100 text-[59px] md:text-[86px]",children:e("mission.title")}),(0,a.jsx)("p",{className:"md:mx-auto font-text text-[#F8F6F2] max-w-[478px] text-left md:text-center",children:e("mission.description")})]})]})})})})})}var I=s(2736),L=s(3384);function P(){let{t:e}=h(),[t,s]=(0,r.useState)(0),i=(0,r.useRef)(null),n=(0,r.useRef)(null);(0,r.useEffect)(()=>{let e=()=>{if(window.innerWidth>=768){if(i.current&&n.current){let e=i.current.getBoundingClientRect().left,t=document.body.getBoundingClientRect().left;n.current.style.paddingLeft="".concat(e-t,"px")}}else n.current&&(n.current.style.paddingLeft="24px")};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let l=[{icon:"\uD83C\uDFDB️",tag:e("avosmarques.cards.1.tag"),title:e("avosmarques.cards.1.title"),description:e("avosmarques.cards.1.description")},{icon:"\uD83E\uDD16",tag:e("avosmarques.cards.2.tag"),title:e("avosmarques.cards.2.title"),description:e("avosmarques.cards.2.description")},{icon:"\uD83D\uDE80",tag:e("avosmarques.cards.3.tag"),title:e("avosmarques.cards.3.title"),description:e("avosmarques.cards.3.description")},{icon:"\uD83E\uDDF1",tag:e("avosmarques.cards.4.tag"),title:e("avosmarques.cards.4.title"),description:e("avosmarques.cards.4.description")},{icon:"\uD83D\uDCC8",tag:e("avosmarques.cards.5.tag"),title:e("avosmarques.cards.5.title"),description:e("avosmarques.cards.5.description")}];return(0,a.jsxs)("div",{id:"AVosMarques",className:"relative w-full bg-beige-100 md:py-[106px] py-8",children:[(0,a.jsx)("div",{ref:i,className:"container mx-auto",children:(0,a.jsxs)(w,{children:[(0,a.jsx)(q,{text:e("avosmarques.tag"),type:"light"}),(0,a.jsx)("h3",{className:"font-title leading-14 py-8 uppercase text-green-700 text-[59px] md:text-[86px]",children:e("avosmarques.title")}),(0,a.jsx)("p",{className:"text-green-500 max-w-[800px] text-normal",dangerouslySetInnerHTML:{__html:e("avosmarques.description")}})]})}),(0,a.jsx)("div",{ref:n,className:"overflow-x-auto flex snap-x gap-6 pr-[180px] pt-7 pb-5 scroll-smooth transition-[padding] duration-300",onScroll:e=>{s(Math.floor(e.currentTarget.scrollLeft/260))},children:l.map((e,t)=>(0,a.jsxs)("div",{className:"snap-center bg-white/[0.75] border border-beige-200 min-w-[267px] max-w-[267px] flex flex-col p-6 rounded-[16px] card-box-shadow gap-3",children:[(0,a.jsx)("span",{className:"text-7xl",children:e.icon}),(0,a.jsx)("span",{className:"text-sm font-medium text-orange-500 font-code mt-2",children:e.tag}),(0,a.jsx)("h3",{className:"text-2xl font-bold",children:e.title}),(0,a.jsx)("p",{className:"text-green-700 font-normal text-base",children:e.description})]},t))}),(0,a.jsx)("div",{className:"swiper-arrows relative text-center mx-auto mt-5",children:(0,a.jsxs)("div",{className:"flex gap-4 justify-center",children:[(0,a.jsx)("button",{onClick:()=>{n.current&&n.current.scrollBy({left:-291,behavior:"smooth"})},className:"flex text-green-700 cursor-pointer transition-all h-[42px] px-[9px] py-[6px] justify-center items-center gap-[4px] rounded-full\n               ".concat(0===t?"bg-beige-300/[0.25]":"bg-beige-300/[0.5]"),children:(0,a.jsx)(I.A,{fontSize:"medium"})}),(0,a.jsx)("div",{className:"flex justify-between md:hidden gap-2 mt-4",children:l.map((e,s)=>(0,a.jsx)("span",{className:"w-2 h-2 rounded-full ".concat(t===s?"bg-green-700":"bg-beige-300")},s))}),(0,a.jsx)("button",{onClick:()=>{n.current&&n.current.scrollBy({left:291,behavior:"smooth"})},className:"flex cursor-pointer transition-all text-green-700 h-[42px] px-[9px] py-[6px] justify-center items-center gap-[4px] rounded-full\n                ".concat(t===l.length?"bg-beige-300/[0.25]":"bg-beige-300/[0.5]"),children:(0,a.jsx)(L.A,{fontSize:"medium"})})]})})]})}let T={src:"/_next/static/media/screenshot-docs.bde87845.png"},F={src:"/_next/static/media/screenshot-visio.ffbc86d8.png"},A={src:"/_next/static/media/screenshot-docs-mobile.a8f4b6ae.png"},M={src:"/_next/static/media/screenshot-visio-mobile.e86f0751.png"},O={src:"/_next/static/media/screenshot-docs-en.caa44f75.png"},B={src:"/_next/static/media/screenshot-docs-mobile-en.581682b9.png"},H={src:"/_next/static/media/logo-visio.07f73965.svg"},R={src:"/_next/static/media/logo-docs.759f31f5.svg"};function W(){let{t:e,locale:t}=h();return(0,a.jsx)("div",{className:"relative w-full bg-beige-100 py-14 md:py-[106px] py-8",children:(0,a.jsxs)("div",{className:"container mx-auto",children:[(0,a.jsxs)(w,{children:[(0,a.jsx)(q,{text:e("prets.tag"),type:"light"}),(0,a.jsx)("h3",{className:"font-title leading-14 py-8 uppercase text-green-700 text-[59px] md:text-[86px]",children:e("prets.title")}),(0,a.jsx)("p",{className:"text-green-500 max-w-[800px] text-normal",dangerouslySetInnerHTML:{__html:e("prets.description")}})]}),(0,a.jsxs)("div",{className:"grid md:grid-cols-2 gap-10 mt-[40px]",children:[(0,a.jsxs)(w,{delay:.2,children:[(0,a.jsx)("img",{src:"".concat("en"===t?O.src:T.src),className:"hidden md:block rounded-[16px] card-box-shadow"}),(0,a.jsx)("img",{src:"".concat("en"===t?B.src:A.src),className:"md:hidden rounded-[16px] card-box-shadow"}),(0,a.jsxs)("div",{className:"flex items-center justify-between mt-6",children:[(0,a.jsx)("img",{src:R.src,className:"w-[100px] md:w-[148px]"}),(0,a.jsx)("a",{className:"rounded-full bg-beige-300/[0.5] transition-all hover:bg-beige-300 py-1.5 px-4 font-medium decoration-0",href:"https://github.com/suitenumerique/docs",target:"_blank",children:"Github"})]}),(0,a.jsx)("p",{className:"mt-3",dangerouslySetInnerHTML:{__html:e("prets.docs.description")}})]}),(0,a.jsx)("div",{className:"mt-[40px] md:mt-0",children:(0,a.jsxs)(w,{delay:.3,children:[(0,a.jsx)("img",{src:F.src,className:"hidden md:block rounded-[16px] card-box-shadow"}),(0,a.jsx)("img",{src:M.src,className:"md:hidden rounded-[16px] card-box-shadow"}),(0,a.jsxs)("div",{className:"flex items-center justify-between mt-6",children:[(0,a.jsx)("img",{src:H.src,className:"w-[100px] md:w-[148px]"}),(0,a.jsx)("a",{className:"rounded-full bg-beige-300/[0.5] transition-all hover:bg-beige-300 py-1.5 px-4 font-medium decoration-0",href:"https://github.com/suitenumerique/meet",target:"_blank",children:"Github"})]}),(0,a.jsx)("p",{className:"mt-3",dangerouslySetInnerHTML:{__html:e("prets.visio.description")}})]})})]})]})})}let G={src:"/_next/static/media/date-2.4573acf4.png"},D={src:"/_next/static/media/date-3.2bc47886.png"},U={src:"/_next/static/media/date-4.ceb83dd8.png"};function X(){let{t:e}=h();return(0,a.jsx)("div",{id:"Partez",className:"relative w-full bg-beige-100 py-14 md:py-[106px] py-8",children:(0,a.jsxs)("div",{className:"container mx-auto",children:[(0,a.jsxs)(w,{children:[(0,a.jsx)(q,{text:e("partez.tag"),type:"light"}),(0,a.jsx)("h3",{className:"font-title leading-14 py-8 uppercase text-green-700 text-[59px] md:text-[86px]",children:e("partez.title")}),(0,a.jsx)("p",{className:"text-green-500 max-w-[800px] text-normal mb-8",children:e("partez.description")}),(0,a.jsx)("a",{href:"https://pretix.dgnum.eu/dgnum/hack-lsn-2025/",target:"_blank",rel:"noopener noreferrer","aria-label":e("partez.button"),className:"inline mt-12 mb-12 px-8 py-3 rounded-full bg-green-700 text-beige-100 text-center transition-all hover:bg-orange-500",children:e("partez.button")})]}),(0,a.jsx)(w,{delay:.2,children:(0,a.jsxs)("div",{className:"bg-[#26312e] flex overflow-hidden mt-12 md:h-[180px] border-1 border-green-700 rounded-2xl",children:[(0,a.jsx)("img",{src:G.src,className:"hidden lg:block h-[180px]"}),(0,a.jsxs)("div",{className:"p-8 relative flex-1",style:{background:"linear-gradient(73deg, rgba(255, 255, 255, 0.00) -3.75%, rgba(255, 255, 255, 0.10) 92.73%), #26312D"},children:[(0,a.jsx)("p",{className:"absolute top-[9px] right-[9px] py-1 px-2.5 text-beige-100 bg-orange-600 border border-white/[0.2] font-code text-sm rounded-lg",children:e("partez.days.1.chip")}),(0,a.jsxs)("p",{className:"text-orange-500 text-lg font-code md:mt-0 mt-2.5",children:[" ",e("partez.days.1.date")," "]}),(0,a.jsxs)("p",{className:"text-beige-100 text-[1.9rem] font-bold font-text",children:[" ",e("partez.days.1.title")," "]}),(0,a.jsx)("p",{className:"text-beige-100 text-base",children:e("partez.days.1.description")})]})]})}),(0,a.jsx)(w,{delay:.4,children:(0,a.jsxs)("div",{className:"bg-[#26312e] flex overflow-hidden mt-12 md:h-[180px] border-1 border-green-700 rounded-2xl",children:[(0,a.jsx)("img",{src:D.src,className:"hidden lg:block h-[180px]"}),(0,a.jsxs)("div",{className:"p-8 relative flex-1",style:{background:"linear-gradient(73deg, rgba(255, 255, 255, 0.00) -3.75%, rgba(255, 255, 255, 0.10) 92.73%), #26312D"},children:[(0,a.jsx)("p",{className:"absolute top-[9px] right-[9px] py-1 px-2.5 text-beige-100 bg-orange-600 border border-white/[0.2] font-code text-sm rounded-lg",children:e("partez.days.2.chip")}),(0,a.jsxs)("p",{className:"text-orange-500 text-lg font-code md:mt-0 mt-2.5",children:[" ",e("partez.days.2.date")," "]}),(0,a.jsxs)("p",{className:"text-beige-100 text-[1.9rem] font-bold font-text",children:[" ",e("partez.days.2.title")," "]}),(0,a.jsx)("p",{className:"text-beige-100 text-base",children:e("partez.days.2.description")})]})]})}),(0,a.jsx)(w,{delay:.6,children:(0,a.jsxs)("div",{className:"bg-orange-600 flex overflow-hidden mt-12 md:h-[180px] border-1 border-orange-600 rounded-2xl",children:[(0,a.jsx)("img",{src:U.src,className:"hidden lg:block h-[180px]"}),(0,a.jsxs)("div",{className:"p-8 relative flex-1",style:{background:"linear-gradient(73deg, rgba(255, 255, 255, 0.00) 33.75%, rgba(255, 255, 255, 0.10) 79.95%), #BC5A3F",backgroundColor:"#BC5A3F"},children:[(0,a.jsx)("p",{className:"absolute top-[9px] right-[9px] py-1 px-2.5 text-beige-100 bg-green-700 border border-white/[0.2] font-code text-sm rounded-lg",children:e("partez.days.3.chip")}),(0,a.jsxs)("p",{className:"text-beige-100 text-lg font-code md:mt-0 mt-2.5",children:[" ",e("partez.days.3.date")," "]}),(0,a.jsxs)("p",{className:"text-beige-100 text-[1.9rem] font-bold font-text",children:[" ",e("partez.days.3.title")," "]}),(0,a.jsx)("p",{className:"text-beige-100 text-base",children:e("partez.days.3.description")})]})]})})]})})}let J={src:"/_next/static/media/fame.dd30e077.png"};function V(){let{t:e,locale:t}=h();return(0,a.jsxs)("div",{className:"relative w-full bg-beige-100 py-14 md:py-[106px] py-8",children:[(0,a.jsx)("div",{className:"container mx-auto text-center",children:(0,a.jsxs)(w,{children:[(0,a.jsx)(q,{text:e("histoire.tag"),type:"light"}),(0,a.jsx)("h3",{className:"font-title leading-none pt-1 pb-[56px] md:pb-[80px] max-w-[850px] text-green-700 text-[59px] md:text-[86px] mx-auto",children:e("histoire.title")})]})}),(0,a.jsx)("div",{className:"container mx-auto",children:(0,a.jsxs)("div",{className:"grid md:grid-cols-7 sm:grid-cols-1 sm:mx-9 gap-10 md:mt-[40px] items-center",children:[(0,a.jsx)("div",{className:"hidden md:block md:col-span-3",children:(0,a.jsx)("img",{src:J.src})}),(0,a.jsx)("div",{className:"w-full sm:col-span-4",children:("fr"===t?["hn","franceinfo","linkedin","reddit","frandroid","bfm"]:["hn","reddit","techpost","XDA","HowTo"]).map((t,s)=>(0,a.jsx)(w,{delay:.05*s,children:(0,a.jsxs)("div",{className:"flex items-center md:gap-[32px] justify-between grid md:grid-cols-4 mb-6",children:[(0,a.jsxs)("div",{className:"md:col-span-3",children:[(0,a.jsxs)("p",{className:"font-bold text-2xl",children:[e("histoire.news.".concat(t,".title"))," "]}),(0,a.jsxs)("p",{className:"font-normal text-green-500",children:[e("histoire.news.".concat(t,".description"))," "]})]}),(0,a.jsx)("div",{className:"md:col-span-1 mt-3 md:mt-0",children:(0,a.jsx)("a",{className:"block w-[130px] text-lg rounded-full bg-beige-300/[0.5] text-center transition-all hover:bg-beige-300 py-1.5 font-medium decoration-0",href:e("histoire.news.".concat(t,".target")),target:"_blank",children:e("histoire.news.".concat(t,".button"))})})]})},t))})]})})]})}let K={src:"/_next/static/media/logo-cff.c42a5b1c.svg"},Q={src:"/_next/static/media/building.dadec28d.png"};function Y(){let{t:e}=h();return(0,a.jsx)("div",{id:"Informations",className:"relative w-full bg-beige-100 py-14 md:py-[106px] py-8",children:(0,a.jsx)("div",{className:"container mx-auto text-center",children:(0,a.jsxs)(w,{children:[(0,a.jsx)(q,{text:e("informations.tag"),type:"light"}),(0,a.jsx)("h3",{className:"font-title leading-14 py-8 uppercase text-green-700 text-[59px] md:text-[86px]",children:e("informations.title")}),(0,a.jsxs)("div",{className:"grid md:grid-cols-3 gap-10 md:my-[40px]",children:[(0,a.jsx)("div",{className:"col-span-1",children:(0,a.jsxs)("div",{className:"rounded-2xl border border-beige-200 bg-white/[0.75] p-6 text-center",style:{boxShadow:"0px 4px 16.6px 0px rgba(0, 0, 0, 0.10)"},children:[(0,a.jsx)("img",{src:S.src,className:"h-[112px] mb-6 mx-auto"}),(0,a.jsx)("p",{className:"font-bold text-[22px]",children:"CAMPUS JOURDAN"}),(0,a.jsxs)("p",{className:"font-bold text-base my-3",children:[" 48 Boulevard Jourdan, ",(0,a.jsx)("br",{})," 75014, Paris "]}),(0,a.jsxs)("div",{className:"flex justify-between w-full mb-6",children:[(0,a.jsx)("p",{className:"font-normal leading-snug text-base text-left",dangerouslySetInnerHTML:{__html:e("informations.days")}}),(0,a.jsx)("p",{className:"font-normal leading-snug text-base text-right",dangerouslySetInnerHTML:{__html:e("informations.hours")}})]}),(0,a.jsxs)("a",{className:"block text-lg text-beige-100 rounded-full bg-green-700 mb-2 text-center transition-all hover:bg-orange-500 py-1.5 font-medium decoration-0",href:"https://www.openstreetmap.org/way/23173231#map=18/48.822675/2.331749",target:"_blank",children:[" ",e("informations.buttonMaps")," "]}),(0,a.jsxs)("a",{className:"block text-lg rounded-full bg-beige-300/[0.5] text-center transition-all hover:bg-beige-300 py-1.5 font-medium decoration-0",href:"mailto:contact-hackdays@numerique.gouv.fr",target:"_blank",children:[" ",e("informations.buttonContact")," "]})]})}),(0,a.jsx)("div",{className:"hidden md:block md:col-span-2",children:(0,a.jsx)("img",{src:Q.src,className:"rounded-2xl",style:{boxShadow:"0px 4px 16.6px 0px rgba(0, 0, 0, 0.10)"}})})]}),(0,a.jsxs)("div",{className:"grid grid-cols-3 flex text-center max-w-[413px] pt-6 my-6 mx-auto gap-x-11",children:[(0,a.jsx)("img",{src:k.src}),(0,a.jsx)("img",{src:S.src,className:"mx-auto self-end"}),(0,a.jsx)("img",{src:z.src,className:"self-end"})]}),(0,a.jsx)("div",{className:"flex justify-center pt-6",children:(0,a.jsx)("img",{src:K.src,className:"w-[103px] self-end"})})]})})})}function Z(){return(0,a.jsxs)("div",{children:[(0,a.jsx)(f,{}),(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)(_,{}),(0,a.jsx)(C,{}),(0,a.jsx)(E,{}),(0,a.jsx)(P,{}),(0,a.jsx)(W,{}),(0,a.jsx)(X,{}),(0,a.jsx)(V,{}),(0,a.jsx)(Y,{})]})]})}},6760:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(221)}])}},e=>{var t=t=>e(e.s=t);e.O(0,[701,646,636,593,792],()=>t(6760)),_N_E=e.O()}]);