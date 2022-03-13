var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => U5Bslugu5D,
  load: () => load
});
var import_index_b7314c68 = require("../../../chunks/index-b7314c68.js");
var import_utils_ff59a956 = require("../../../chunks/utils-ff59a956.js");
var ArticlePage_svelte_svelte_type_style_lang = "";
const css = {
  code: ".back.svelte-y9ji3t.svelte-y9ji3t{padding:2rem;font-size:1.5rem}.splash.svelte-y9ji3t.svelte-y9ji3t{position:fixed;top:0;left:0;width:100%;height:50vh;overflow:hidden;z-index:-1}.splash.svelte-y9ji3t.svelte-y9ji3t::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom, hsla(220, 25%, 3%, .5) 0%, hsla(220, 25%, 3%, 1) 90%)}.splash.svelte-y9ji3t img.svelte-y9ji3t{position:relative;width:100%;height:auto;object-fit:cover;object-position:center;opacity:0.2}.item-page.svelte-y9ji3t.svelte-y9ji3t{position:relative;display:flex;flex-direction:column}.date-info.svelte-y9ji3t.svelte-y9ji3t{margin:1rem 0}.date-info.svelte-y9ji3t span.svelte-y9ji3t{display:block;margin:1rem}h1.svelte-y9ji3t.svelte-y9ji3t{font-size:4vw;margin:2rem 1rem;font-family:'Krona One', sans-serif;text-transform:uppercase}p.svelte-y9ji3t.svelte-y9ji3t{line-height:1.5;margin-bottom:1rem;color:var(--reset-light)}.content.svelte-y9ji3t.svelte-y9ji3t{position:relative}.title.svelte-y9ji3t.svelte-y9ji3t{position:relative;padding:1rem;display:flex;justify-content:flex-start;align-items:center;gap:2rem}.cover.svelte-y9ji3t.svelte-y9ji3t{width:24rem;height:12rem;overflow:hidden}.cover.svelte-y9ji3t img.svelte-y9ji3t{position:relative;width:100%;height:100%;object-fit:contain;border-radius:1rem}.tags.svelte-y9ji3t.svelte-y9ji3t{margin-bottom:1rem;display:flex;flex-wrap:wrap;font-size:.8rem;gap:.5rem}.tag.svelte-y9ji3t.svelte-y9ji3t{padding:.25rem .5rem;border-radius:999px;background:var(--reset-dark);border:2px solid var(--darken-dark)}.tag.svelte-y9ji3t.svelte-y9ji3t:hover{background:var(--darken-dark)}.body.svelte-y9ji3t.svelte-y9ji3t{padding:1rem;border-radius:1rem;background:hsl(160, 25%, 5%);border:2px solid hsl(160, 25%, 25%)}@media(max-width: 768px){.title.svelte-y9ji3t.svelte-y9ji3t{flex-direction:column;gap:1rem}}",
  map: null
};
const ArticlePage = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let y;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css);
  return `

<figure class="${"splash svelte-y9ji3t"}">${item.gallery ? `<img style="${"transform: translate(0, -" + (0, import_index_b7314c68.e)(y / 2) + "px); will-change:transform; transition:none"}"${(0, import_index_b7314c68.a)("src", item.gallery[0], 0)}${(0, import_index_b7314c68.a)("alt", item.title, 0)} class="${"svelte-y9ji3t"}">` : `<img src="${"../no-cover.webp"}"${(0, import_index_b7314c68.a)("alt", item.title, 0)} class="${"svelte-y9ji3t"}">`}</figure>

<article class="${"item-page svelte-y9ji3t"}"><div class="${"content svelte-y9ji3t"}"><div class="${"title svelte-y9ji3t"}">${item.image ? `<figure class="${"cover svelte-y9ji3t"}"><img${(0, import_index_b7314c68.a)("src", item.image, 0)}${(0, import_index_b7314c68.a)("alt", item.title, 0)} class="${"svelte-y9ji3t"}"></figure>` : `<figure class="${"cover svelte-y9ji3t"}"><img src="${"../no-icon.webp"}"${(0, import_index_b7314c68.a)("alt", item.title, 0)} class="${"svelte-y9ji3t"}"></figure>`}
      <div class="${"info"}"><h1 class="${"svelte-y9ji3t"}">${(0, import_index_b7314c68.e)(item.title)}</h1>
        <div class="${"date-info svelte-y9ji3t"}"><span class="${"date svelte-y9ji3t"}">Posted ${(0, import_index_b7314c68.v)(import_utils_ff59a956.T, "Time").$$render($$result, { relative: true, timestamp: item.date }, {}, {})}</span></div>
        ${item.tags ? `<div class="${"tags svelte-y9ji3t"}">${(0, import_index_b7314c68.b)(item.tags.slice(0, 5), (tag) => {
    return `<a${(0, import_index_b7314c68.a)("href", `/tags/${(0, import_utils_ff59a956.a)(tag)}`, 0)} class="${"tag svelte-y9ji3t"}">${(0, import_index_b7314c68.e)(tag)}
              </a>`;
  })}</div>` : ``}</div></div>
    <div class="${"body svelte-y9ji3t"}">${(0, import_index_b7314c68.b)(item.content, (p) => {
    return `<p class="${"svelte-y9ji3t"}">${(0, import_index_b7314c68.e)(p)}</p>`;
  })}</div></div>
  <a href="${"/journal"}"><div class="${"back svelte-y9ji3t"}">\u2190 Back to journal</div></a>
</article>`;
});
async function load({ params }) {
  const { slug } = params;
  return {
    props: { item: import_utils_ff59a956.j.find((i) => i.slug === slug) }
  };
}
const U5Bslugu5D = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_b7314c68.e)(item.title)} - Steffen Wold</title>`, ""}<meta property="${"og:title"}" content="${(0, import_index_b7314c68.e)(item.title) + " - Steffen Wold"}" data-svelte="svelte-124qqgk"><meta property="${"og:site_name"}" content="${"Steffen Wold"}" data-svelte="svelte-124qqgk"><meta property="${"og:url"}" content="${"https://steffen.id/journal/" + (0, import_index_b7314c68.e)(item.slug)}" data-svelte="svelte-124qqgk"><meta property="${"og:description"}"${(0, import_index_b7314c68.a)("content", (0, import_utils_ff59a956.s)(item.content[0]), 0)} data-svelte="svelte-124qqgk"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-124qqgk"><meta property="${"og:image"}"${(0, import_index_b7314c68.a)("content", item.cover, 0)} data-svelte="svelte-124qqgk">`, ""}

${(0, import_index_b7314c68.v)(ArticlePage, "ArticlePage").$$render($$result, { item }, {}, {})}`;
});
module.exports = __toCommonJS(stdin_exports);
