var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Page
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../../chunks/index.js");
var import_PageTitle = require("../../../chunks/PageTitle.js");
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".routes.svelte-ptiw8e.svelte-ptiw8e{display:grid;grid-template-columns:repeat(6, 1fr);gap:1rem}.routes.svelte-ptiw8e a.svelte-ptiw8e{position:relative;padding:2rem;height:30rem;border:1px solid rgba(255,255,255,.1);display:flex;flex-direction:column;justify-content:space-between;overflow:hidden}.routes.svelte-ptiw8e a.svelte-ptiw8e:after{content:'';position:absolute;bottom:0;right:0;width:100%;height:20rem;background:hsla(240, 13%, 50%, .1);transform:skewY(0) translateY(20rem);transition:all .3s linear}.routes.svelte-ptiw8e a.svelte-ptiw8e:hover{color:inherit}.routes.svelte-ptiw8e a.svelte-ptiw8e:hover::after{transform:skewY(15deg) translateY(2.5rem)}.routes.svelte-ptiw8e svg.svelte-ptiw8e{width:1rem;stroke:currentColor;stroke-width:4;fill:none;transition:transform .3s linear}.routes.svelte-ptiw8e a:hover svg.svelte-ptiw8e{transform:rotate(-90deg)}.text.svelte-ptiw8e.svelte-ptiw8e{position:relative;font-size:1.5rem}.text.svelte-ptiw8e span.svelte-ptiw8e{position:absolute;display:block;width:25rem;transform:rotate(-90deg) translate(0, 0);transform-origin:top left}@media screen and (max-width: 60em){.routes.svelte-ptiw8e.svelte-ptiw8e{grid-template-columns:repeat(4, 1fr)}}@media screen and (max-width: 30em){.routes.svelte-ptiw8e.svelte-ptiw8e{grid-template-columns:repeat(3, 1fr)}.routes.svelte-ptiw8e a.svelte-ptiw8e{padding:1rem;gap:1rem}.routes.svelte-ptiw8e a.svelte-ptiw8e:hover::after{transform:skewY(10deg) translateY(2rem)}}",
  map: null
};
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Explore \\ Steffen Wold</title>`, ""}<meta property="${"og:title"}" content="${"Explore \\ Steffen Wold"}" data-svelte="svelte-agpzdo"><meta property="${"og:site_name"}" content="${"Steffen Wold"}" data-svelte="svelte-agpzdo"><meta property="${"og:url"}" content="${"https://steffen.id"}" data-svelte="svelte-agpzdo"><meta property="${"og:description"}" content="${"Steffen Wold's personal website."}" data-svelte="svelte-agpzdo"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-agpzdo"><meta property="${"og:image"}" content="${""}" data-svelte="svelte-agpzdo">`, ""}

<div class="${"page"}">${(0, import_chunks.v)(import_PageTitle.P, "PageTitle").$$render($$result, { title: "Explore" }, {}, {})}
	<div class="${"routes svelte-ptiw8e"}"><a href="${"/concepts"}" class="${"svelte-ptiw8e"}"><svg viewBox="${"0 0 44 32"}" class="${"svelte-ptiw8e"}"><polygon points="${"2,2 42,2 22,30"}"></polygon>
				SVG:404
			</svg>
			<div class="${"text featured svelte-ptiw8e"}"><span class="${"svelte-ptiw8e"}">Concepts</span></div></a>
		<a href="${"/projects"}" class="${"svelte-ptiw8e"}"><svg viewBox="${"0 0 44 32"}" class="${"svelte-ptiw8e"}"><polygon points="${"2,2 42,2 22,30"}"></polygon>
				SVG:404
			</svg>
			<div class="${"text featured svelte-ptiw8e"}"><span class="${"svelte-ptiw8e"}">Projects</span></div></a>
		<a href="${"/articles"}" class="${"svelte-ptiw8e"}"><svg viewBox="${"0 0 44 32"}" class="${"svelte-ptiw8e"}"><polygon points="${"2,2 42,2 22,30"}"></polygon>
				SVG:404
			</svg>
			<div class="${"text featured svelte-ptiw8e"}"><span class="${"svelte-ptiw8e"}">Articles</span></div></a>
		<a href="${"/journal"}" class="${"svelte-ptiw8e"}"><svg viewBox="${"0 0 44 32"}" class="${"svelte-ptiw8e"}"><polygon points="${"2,2 42,2 22,30"}"></polygon>
				SVG:404
			</svg>
			<div class="${"text featured svelte-ptiw8e"}"><span class="${"svelte-ptiw8e"}">Academy Journal</span></div></a></div>
	<div class="${"h1"}"></div></div>

<div class="${"button cta"}"><svg class="${"flip-x"}" viewBox="${"0 0 28 28"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z"}" fill="${"currentColor"}" fill-rule="${"nonzero"}"></path></svg>
</div>`;
});
