if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),l={module:{uri:t},exports:o,require:c};i[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-GpEyRu0J.js",revision:null},{url:"assets/index-ueKvOy2S.css",revision:null},{url:"index.html",revision:"734e9fbcc99bdab2ba6241585ec13d87"},{url:"registerSW.js",revision:"90998c9bb9ef5633c55c32ac7a41bb39"},{url:"icon.png",revision:"6a382901389ad055aa5f1dcda9f96d60"},{url:"icon-512.png",revision:"afad9a52d0a88e8e99edbfeeeb424925"},{url:"manifest.webmanifest",revision:"c6cc7a5262efbb990f30c34f3ea8b42e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
