import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import 'mime';
import 'cookie';
import 'html-escaper';
import { g as deserializeManifest } from './chunks/astro.10efa794.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'string-width';

const _page0  = () => import('./chunks/index@_@astro.4fdaf187.mjs');const pageMap = new Map([["src/pages/index.astro", _page0]]);
const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"(function(){const t=[...document.querySelectorAll(\".testimony__body\")],l=document.querySelector(\"#next\"),d=document.querySelector(\"#before\");let e;l.addEventListener(\"click\",()=>{n(1)}),d.addEventListener(\"click\",()=>{n(-1)});const n=c=>{const o=document.querySelector(\".testimony__body--show\").dataset.id;e=Number(o),e+=c,t[Number(o)-1].classList.remove(\"testimony__body--show\"),(e===t.length+1||e===0)&&(e=e===0?t.length:1),t[e-1].classList.add(\"testimony__body--show\")}})();function a(){document.getElementById(\"privacyModal\").style.display=\"block\"}function i(){document.getElementById(\"privacyModal\").style.display=\"none\"}function s(){document.getElementById(\"legalModal\").style.display=\"block\"}function y(){document.getElementById(\"legalModal\").style.display=\"none\"}document.getElementById(\"privacyLink\").addEventListener(\"click\",a);document.getElementById(\"legalLink\").addEventListener(\"click\",s);document.getElementById(\"closePrivacyModalButton\").addEventListener(\"click\",i);document.getElementById(\"closeLegalModalButton\").addEventListener(\"click\",y);\n"}],"styles":[{"type":"external","src":"/_astro/index.bb22e472.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":false,"markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"gfm":true,"smartypants":true},"componentMetadata":[["D:/Archivos Mike/Escritorio/Git/uHungry-official-page/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(s,c,i)=>{let o=async()=>{await(await s())()},n=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){n.disconnect(),o();break}});for(let e=0;e<i.children.length;e++){let t=i.children[e];n.observe(t)}};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"_@astrojs-ssr-virtual-entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index.astro.a97a7cb2.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.4fdaf187.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.f3197b9f.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/launchScreen.0c8ecd60.png","/_astro/banner.f233a231.png","/_astro/logo1.9a7cf199.png","/_astro/leftarrow.31788860.svg","/_astro/usuario.8434428d.jpeg","/_astro/admin.93fa76f8.jpeg","/_astro/rightarrow.2ab06c71.svg","/_astro/puesto.702ca386.jpg","/_astro/ambulante.bb08eecd.jpg","/_astro/cafeteria.2d78c470.jpg","/_astro/Angel.fe0008f1.jpg","/_astro/Sebas.f5204f65.jpg","/_astro/Miguel.acf79e88.jpg","/_astro/Alfredo.b5b317ae.jpg","/_astro/Azarel.1f935a8c.jpg","/_astro/badge.f72611e2.png","/_astro/people.e4dc0e38.jpg","/_astro/user.ee1e5aca.png","/_astro/vendedor.9f1a5db1.png","/_astro/vector.ec268281.png","/_astro/vector3.c9f9716f.png","/_astro/index.bb22e472.css","/404.html","/favicon.svg","/index.html"]}), {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
