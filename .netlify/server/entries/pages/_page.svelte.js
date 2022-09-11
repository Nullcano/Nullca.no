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
var import_chunks = require("../../chunks/index.js");
const About_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page.svelte-1dbdnro.svelte-1dbdnro{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(2, 1fr);gap:5rem}.title.svelte-1dbdnro.svelte-1dbdnro{grid-area:1 / 1 / 2 / 2;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start}.title.svelte-1dbdnro svg.svelte-1dbdnro{margin-bottom:1rem;width:1.5rem;stroke:currentColor;stroke-width:4;fill:none}.dob.svelte-1dbdnro.svelte-1dbdnro{font-size:1.5rem;color:rgba(255,255,255,.5)}.name.svelte-1dbdnro.svelte-1dbdnro{display:flex;flex-direction:column;font-size:7.5rem;font-weight:700;line-height:1}figure.svelte-1dbdnro.svelte-1dbdnro{grid-area:1 / 2 / 3 / 3;position:relative;width:calc(100% + 10rem);height:75vh;mix-blend-mode:luminosity;filter:brightness(.5);overflow:hidden}figure.svelte-1dbdnro img.svelte-1dbdnro{width:100%;height:100%;object-fit:cover;overflow:hidden}.description.svelte-1dbdnro.svelte-1dbdnro{grid-area:2 / 1 / 3 / 2;display:flex;flex-direction:column;justify-content:flex-start;gap:2.5rem;font-size:1.25rem;color:rgba(255,255,255,.5)}.explore-button.svelte-1dbdnro.svelte-1dbdnro{color:#fff;align-self:flex-end}.button-text.svelte-1dbdnro.svelte-1dbdnro{position:relative;margin-right:-1px;padding:0 1rem;height:2.5rem;border:1px solid rgba(255,255,255,.1);display:grid;place-content:center}.button-text.svelte-1dbdnro.svelte-1dbdnro::before,.button-text.svelte-1dbdnro.svelte-1dbdnro::after{content:'';position:absolute;width:1rem;height:1px;background:rgba(255,255,255,.5);transition:all .25s linear}.button-text.svelte-1dbdnro.svelte-1dbdnro::before{top:-1px;left:-1px}.explore-button.svelte-1dbdnro:hover .button-text.svelte-1dbdnro::before{left:calc(100% - 1rem)}.explore-button.svelte-1dbdnro:hover .button-text.svelte-1dbdnro::after{right:calc(100% - 1rem)}.button-text.svelte-1dbdnro.svelte-1dbdnro::after{bottom:-1px;right:-1px}@media screen and (max-width: 60em){.page.svelte-1dbdnro.svelte-1dbdnro{height:auto;display:flex;flex-direction:column;gap:2.5rem}.title.svelte-1dbdnro.svelte-1dbdnro{margin-top:5rem;grid-area:auto}.name.svelte-1dbdnro.svelte-1dbdnro{font-size:5rem}.description.svelte-1dbdnro.svelte-1dbdnro{grid-area:auto}.explore-button.svelte-1dbdnro.svelte-1dbdnro{align-self:flex-start}figure.svelte-1dbdnro.svelte-1dbdnro{grid-area:auto;position:relative;left:-2.5rem;width:calc(100% + 10rem);height:20rem;border-bottom-left-radius:0;border-bottom-right-radius:0;overflow:hidden;z-index:10}}@media screen and (max-width: 30em){.title.svelte-1dbdnro.svelte-1dbdnro{margin-top:2.5rem}.dob.svelte-1dbdnro.svelte-1dbdnro{font-size:1rem}.name.svelte-1dbdnro.svelte-1dbdnro{font-size:2.5rem}figure.svelte-1dbdnro.svelte-1dbdnro{left:-1rem}}",
  map: null
};
const About = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"page svelte-1dbdnro"}"><div class="${"title svelte-1dbdnro"}"><svg viewBox="${"0 0 44 32"}" class="${"svelte-1dbdnro"}"><polygon points="${"2,2 42,2 22,30"}"></polygon>
			SVG:404
		</svg>
		<div class="${"dob featured svelte-1dbdnro"}">NO.211192.53-57</div>
		<div class="${"name featured svelte-1dbdnro"}"><span>Steffen</span>
			<span>Wold</span></div></div>
	<div class="${"description svelte-1dbdnro"}"><p>Frontend developer based in Innlandet, Norway. Passionate about technology, user interfaces and modern web applications.
			Inspired by efficiency and productivity. Currently on internship at <a href="${"https://ikomm.no"}" target="${"_blank"}">Ikomm</a>.
		</p>
		<div class="${"explore-button flex pointer svelte-1dbdnro"}"><div class="${"button-text featured svelte-1dbdnro"}"><span>Explore</span></div>
			<div class="${"button"}"><svg viewBox="${"0 0 28 28"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z"}" fill="${"currentColor"}" fill-rule="${"nonzero"}"></path></svg></div></div></div>
	<figure class="${"svelte-1dbdnro"}"><img src="${"images/a-photo-of-a-cyborg-in-a-norwegian-landscape.webp"}" alt="${"Cyborg in a Norwegian landscape"}" class="${"svelte-1dbdnro"}"></figure></div>	

<div class="${"button cta"}"><svg viewBox="${"0 0 28 28"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z"}" fill="${"currentColor"}" fill-rule="${"nonzero"}"></path></svg>
</div>`;
});
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Index \\ Steffen Wold</title>`, ""}<meta property="${"og:title"}" content="${"Index \\ Steffen Wold"}" data-svelte="svelte-1l0fgo2"><meta property="${"og:site_name"}" content="${"Steffen Wold"}" data-svelte="svelte-1l0fgo2"><meta property="${"og:url"}" content="${"https://steffen.id"}" data-svelte="svelte-1l0fgo2"><meta property="${"og:description"}" content="${"Steffen Wold's personal website."}" data-svelte="svelte-1l0fgo2"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-1l0fgo2"><meta property="${"og:image"}" content="${""}" data-svelte="svelte-1l0fgo2">`, ""}

${(0, import_chunks.v)(About, "About").$$render($$result, {}, {}, {})}`;
});
