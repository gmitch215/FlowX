import{s as w,r as y,f as _,a as g,u as S,g as $,d as f,c as M,j as b,v as T,i as j,w as k,x,y as z,z as p}from"../chunks/scheduler.d2fddee9.js";import{S as A,i as L,a as E,t as F}from"../chunks/index.f8f1350c.js";import{s as d,g as O}from"../chunks/settings.ab0b6d9a.js";const W=!1,q=!0,U=Object.freeze(Object.defineProperty({__proto__:null,prerender:q,ssr:W},Symbol.toStringTag,{value:"Module"}));var P="@vercel/analytics",C="1.0.1",D=()=>{window.va||(window.va=function(...o){(window.vaq=window.vaq||[]).push(o)})};function B(){return typeof window<"u"}function H(){try{const t="production"}catch{}return"production"}function Q(t="auto"){if(t==="auto"){window.vam=H();return}window.vam=t}function V(){return window.vam||"production"}function v(){return V()==="development"}function I(t={debug:!0}){var o;if(!B())return;Q(t.mode),D(),t.beforeSend&&((o=window.va)==null||o.call(window,"beforeSend",t.beforeSend));const s=v()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js";if(document.head.querySelector(`script[src*="${s}"]`))return;const a=document.createElement("script");a.src=s,a.defer=!0,a.setAttribute("data-sdkn",P),a.setAttribute("data-sdkv",C),v()&&t.debug===!1&&a.setAttribute("data-debug","false"),document.head.appendChild(a)}const{document:h}=O;function R(t){let o,s,a;const u=t[1].default,n=y(u,t,t[0],null);return{c(){o=_("meta"),s=g(),n&&n.c(),this.h()},l(e){const i=S("svelte-18lrh3p",h.head);o=$(i,"META",{name:!0,content:!0}),i.forEach(f),s=M(e),n&&n.l(e),this.h()},h(){h.title="Flower: Debate Flowing App",b(o,"name","description"),b(o,"content","A webapp for flowing in debate.")},m(e,i){T(h.head,o),j(e,s,i),n&&n.m(e,i),a=!0},p(e,[i]){n&&n.p&&(!a||i&1)&&k(n,u,e,e[0],a?z(u,e[0],i,null):x(e[0]),null)},i(e){a||(E(n,e),a=!0)},o(e){F(n,e),a=!1},d(e){e&&f(s),f(o),n&&n.d(e)}}}function G(t,o,s){let{$$slots:a={},$$scope:u}=o;I({mode:"production"});const n=window.matchMedia("(prefers-color-scheme: dark)");n.matches&&document.body.classList.add("dark"),d.init();function e(){d.data.colorTheme.value==0&&document.body.classList.toggle("dark",n.matches)}n.addEventListener("change",e),p(d.subscribe(["colorTheme"],function(){d.data.colorTheme.value==1?document.body.classList.remove("dark"):d.data.colorTheme.value==2?document.body.classList.add("dark"):e()}));const i={accentHue:{name:"accent-hue",unit:""},accentSecondaryHue:{name:"accent-secondary-hue",unit:""},transitionSpeed:{name:"transition-speed",unit:"ms"},columnWidth:{name:"column-width",unit:"px"},borderRadius:{name:"border-radius",unit:"px"},padding:{name:"padding",unit:"px"},fontSize:{name:"font-size",unit:"rem"},fontWeight:{name:"font-weight",unit:""},fontWeightBold:{name:"font-weight-bold",unit:""},gap:{name:"gap",unit:"px"},buttonSize:{name:"button-size",unit:"px"},lineWidth:{name:"line-width",unit:"px"},sidebarWidth:{name:"sidebar-width",unit:"px"}};return p(d.subscribe(["fontFamily"],function(c){const r=d.data.fontFamily;if(r.type!="radio")return;const m=r.value;let l;r.detail.customOption&&r.detail.options.length==m?l=r.detail.customOptionValue:r.detail.options[m]&&(l=r.detail.options[m]),l?document.body.style.setProperty("--font-family",`'${l}', 'Merriweather Sans', sans-serif`):document.body.style.setProperty("--font-family","'Merriweather Sans', sans-serif")})),p(d.subscribe(Object.keys(i),function(c){const r=i[c].name,m=d.data[c].value,l=i[c].unit;document.body.style.setProperty(`--${r}`,`${m}${l}`)})),t.$$set=c=>{"$$scope"in c&&s(0,u=c.$$scope)},[u,a]}class X extends A{constructor(o){super(),L(this,o,G,R,w,{})}}export{X as component,U as universal};
