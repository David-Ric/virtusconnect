if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>n(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-1d291bf6"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-Ob3HmoTP.js",revision:null},{url:"assets/index-ueKvOy2S.css",revision:null},{url:"index.html",revision:"e0b19252b3d1cf6843a87fa83950d970"},{url:"registerSW.js",revision:"90998c9bb9ef5633c55c32ac7a41bb39"},{url:"icon.png",revision:"6a382901389ad055aa5f1dcda9f96d60"},{url:"icon-512.png",revision:"afad9a52d0a88e8e99edbfeeeb424925"},{url:"manifest.webmanifest",revision:"c6cc7a5262efbb990f30c34f3ea8b42e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/david-ric\.github\.io\/virtusconnect\//,new e.NetworkFirst({networkTimeoutSeconds:5,plugins:[]}),"GET")}));
