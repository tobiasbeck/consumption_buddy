if(!self.define){let n,s={};const o=(o,u)=>(o=new URL(o+".js",u).href,s[o]||new Promise((s=>{if("document"in self){const n=document.createElement("script");n.src=o,n.onload=s,document.head.appendChild(n)}else n=o,importScripts(o),s()})).then((()=>{let n=s[o];if(!n)throw new Error(`Module ${o} didn’t register its module`);return n})));self.define=(u,i)=>{const e=n||("document"in self?document.currentScript.src:"")||location.href;if(s[e])return;let d={};const r=n=>o(n,e),c={module:{uri:e},exports:d,require:r};s[e]=Promise.all(u.map((n=>c[n]||r(n)))).then((n=>(i(...n),d)))}}define(["./workbox-2d118ab0"],(function(n){"use strict";n.setCacheNameDetails({prefix:"consumption_buddy"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"/consumption_buddy/assets/icon/favicon.png",revision:"988be98f12b400c41a22b59b82cfeab6"},{url:"/consumption_buddy/assets/icon/icon.png",revision:"69e6f162abf8c9f65d6d8c73d7813f3e"},{url:"/consumption_buddy/assets/shapes.svg",revision:"e535ce83da20a4b7719ca3d45195ebd5"},{url:"/consumption_buddy/css/app.865be072.css",revision:null},{url:"/consumption_buddy/img/payment.e85a8b0f.svg",revision:null},{url:"/consumption_buddy/img/team.150d2778.svg",revision:null},{url:"/consumption_buddy/index.html",revision:"b297b84aa3bef273787b8f7690622377"},{url:"/consumption_buddy/js/168.6cd09cd7.js",revision:null},{url:"/consumption_buddy/js/338.e85c3bec.js",revision:null},{url:"/consumption_buddy/js/544.838183ca.js",revision:null},{url:"/consumption_buddy/js/576.f5e431a6.js",revision:null},{url:"/consumption_buddy/js/753.a52fdc74.js",revision:null},{url:"/consumption_buddy/js/775.ff973bff.js",revision:null},{url:"/consumption_buddy/js/78.aafe9079.js",revision:null},{url:"/consumption_buddy/js/880.9c35a17d.js",revision:null},{url:"/consumption_buddy/js/990.0c8a4bfe.js",revision:null},{url:"/consumption_buddy/js/app.12afe222.js",revision:null},{url:"/consumption_buddy/js/chunk-vendors.2312841a.js",revision:null},{url:"/consumption_buddy/manifest.json",revision:"dfb3519c1e32ef6d30c3470daa1e0a48"},{url:"/consumption_buddy/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map