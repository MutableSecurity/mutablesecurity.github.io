if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let l={};const f=e=>i(e,r),t={module:{uri:r},exports:l,require:f};n[r]=Promise.all(s.map((e=>t[e]||f(e)))).then((e=>(o(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mutable-security"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.1577cc9c.css",revision:null},{url:"/fonts/fontawesome-webfont.2b13baa7.eot",revision:null},{url:"/fonts/fontawesome-webfont.8a7cb27d.ttf",revision:null},{url:"/fonts/fontawesome-webfont.cf011583.woff",revision:null},{url:"/fonts/fontawesome-webfont.e9955780.woff2",revision:null},{url:"/fonts/nucleo-icons.07516f3e.ttf",revision:null},{url:"/fonts/nucleo-icons.6a7ba997.eot",revision:null},{url:"/fonts/nucleo-icons.8b3a7634.woff2",revision:null},{url:"/fonts/nucleo-icons.96941c2a.woff",revision:null},{url:"/images/bitdefender.png",revision:"1a89fc2d62a8d36227b74e3478179089"},{url:"/images/favicon.svg",revision:"8594f48ee3fe5208fc44cd146684a523"},{url:"/images/github.png",revision:"8e55eab46b5fcfc4a7a0b27cb07c8888"},{url:"/images/letsencrypt.png",revision:"b08eca2f072fc99aa0846061bf9e5f25"},{url:"/images/link-preview.png",revision:"fd89e5dbd5189ffb96476de8e18613e2"},{url:"/images/pypi.png",revision:"5ca0309adef95588a1c7fe37b2a098f1"},{url:"/images/suricata.png",revision:"5d6eb38d0ec2d82d499a58a60a051cb9"},{url:"/images/teler.png",revision:"57d758e3ec44732277dc14e14276b48a"},{url:"/img/fontawesome-webfont.da909aa0.svg",revision:null},{url:"/img/nucleo-icons.37d8b8b3.svg",revision:null},{url:"/index.html",revision:"215fc610f2d822b1e7908f5cb7d31d25"},{url:"/js/app.7fe40d5a.js",revision:null},{url:"/js/chunk-vendors.f355deb0.js",revision:null},{url:"/manifest.json",revision:"f3d87c66fd6a6cbb0f56a370c7db94cd"}],{})}));
//# sourceMappingURL=service-worker.js.map
