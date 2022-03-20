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
  default: () => Journal
});
var import_index_b7314c68 = require("../../../chunks/index-b7314c68.js");
var import_utils_ef2a917d = require("../../../chunks/utils-ef2a917d.js");
var FeedColumns_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".feed-columns.svelte-kba1o8{position:relative;display:flex;flex-direction:column;grid-gap:1rem}",
  map: null
};
const FeedColumns = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"feed-columns svelte-kba1o8"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
var PostCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".post-card.svelte-1dgq2yo.svelte-1dgq2yo{display:grid;grid-template-columns:20rem 1fr;grid-template-rows:auto;gap:1.5rem}.post-card__thumbnail.svelte-1dgq2yo.svelte-1dgq2yo{position:relative;width:20rem;height:10rem}.post-card__thumbnail.svelte-1dgq2yo img.svelte-1dgq2yo{width:100%;height:100%;object-fit:contain;border-radius:1rem;transition:all .2s ease-in-out}.post-card.svelte-1dgq2yo:hover .post-card__thumbnail img.svelte-1dgq2yo{transform:scale(1.25) rotate(5deg)}.post-card__content.svelte-1dgq2yo.svelte-1dgq2yo{padding:1rem}.post-card__time.svelte-1dgq2yo.svelte-1dgq2yo{margin-bottom:.5rem}.post-card__title.svelte-1dgq2yo.svelte-1dgq2yo{margin-bottom:0.5rem}.post-card__description.svelte-1dgq2yo.svelte-1dgq2yo{margin-bottom:1rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;line-height:1.5;overflow:hidden}.post-card__tags.svelte-1dgq2yo.svelte-1dgq2yo{display:flex;flex-wrap:wrap;font-size:.8rem;gap:.5rem}.post-card__tag.svelte-1dgq2yo.svelte-1dgq2yo{padding:.25rem .5rem;border-radius:.25rem;background:var(--reset-dark)}.post-card__tag.svelte-1dgq2yo.svelte-1dgq2yo:hover{background:var(--darken-dark)}@media(max-width: 768px){.post-card.svelte-1dgq2yo.svelte-1dgq2yo{grid-template-columns:1fr;grid-template-rows:auto;border-bottom:2px solid var(--reset-dark)}.post-card__thumbnail.svelte-1dgq2yo.svelte-1dgq2yo{display:none}.post-card__content.svelte-1dgq2yo.svelte-1dgq2yo{padding:0 1rem}.post-card__time.svelte-1dgq2yo.svelte-1dgq2yo{margin-bottom:.5rem}.post-card__title.svelte-1dgq2yo.svelte-1dgq2yo{margin-bottom:0.5rem}.post-card__description.svelte-1dgq2yo.svelte-1dgq2yo{margin-bottom:1rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;line-height:1.5;overflow:hidden}.post-card__tags.svelte-1dgq2yo.svelte-1dgq2yo{display:flex;flex-wrap:wrap;font-size:.8rem;gap:.5rem}.post-card__tag.svelte-1dgq2yo.svelte-1dgq2yo{padding:.25rem .5rem;border-radius:.25rem;background:var(--reset-dark)}.post-card__tag.svelte-1dgq2yo.svelte-1dgq2yo:hover{background:var(--darken-dark)}}",
  map: null
};
const PostCard = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$1);
  return `<article class="${"post-card svelte-1dgq2yo"}"><figure class="${"post-card__thumbnail svelte-1dgq2yo"}"><a${(0, import_index_b7314c68.a)("href", `/journal/${item.slug}`, 0)} class="${"post-card__link"}">${item.image ? `<img${(0, import_index_b7314c68.a)("src", item.image, 0)}${(0, import_index_b7314c68.a)("alt", item.title, 0)} class="${"post-card__img svelte-1dgq2yo"}">` : `<img src="${"../no-cover.webp"}"${(0, import_index_b7314c68.a)("alt", item.title, 0)} class="${"post-card__img svelte-1dgq2yo"}">`}</a></figure>
  <div class="${"post-card__content svelte-1dgq2yo"}"><h2 class="${"post-card__title svelte-1dgq2yo"}"><a${(0, import_index_b7314c68.a)("href", `/journal/${item.slug}`, 0)} class="${"post-card__link"}">${(0, import_index_b7314c68.e)(item.title)}</a></h2>
    <div class="${"post-card__time svelte-1dgq2yo"}">Posted ${(0, import_index_b7314c68.v)(import_utils_ef2a917d.T, "Time").$$render($$result, { timestamp: item.date }, {}, {})}</div>
    <p class="${"post-card__description svelte-1dgq2yo"}">${(0, import_index_b7314c68.e)((0, import_utils_ef2a917d.s)(item.content.join(" ")))}</p>
    ${item.tags ? `<div class="${"post-card__tags svelte-1dgq2yo"}">${(0, import_index_b7314c68.b)(item.tags.slice(0, 5), (tag) => {
    return `<a${(0, import_index_b7314c68.a)("href", `/tags/${(0, import_utils_ef2a917d.a)(tag)}`, 0)} class="${"post-card__tag svelte-1dgq2yo"}">${(0, import_index_b7314c68.e)(tag)}
        </a>`;
  })}</div>` : ``}</div>
</article>`;
});
const FeedJournal = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  let feed = import_utils_ef2a917d.j.sort((a, b) => b.date - a.date);
  return `${(0, import_index_b7314c68.v)(FeedColumns, "FeedColumns").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_b7314c68.b)(feed, (item) => {
        return `${(0, import_index_b7314c68.v)(PostCard, "PostCard").$$render($$result, { item }, {}, {})}`;
      })}`;
    }
  })}`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-ycscjb{font-size:4vw;margin:2rem 1rem;font-family:'Krona One', sans-serif;text-transform:uppercase}",
  map: null
};
const Journal = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h1 class="${"svelte-ycscjb"}">Academy Journal</h1>

${(0, import_index_b7314c68.v)(FeedJournal, "FeedJournal").$$render($$result, {}, {}, {})}`;
});
module.exports = __toCommonJS(stdin_exports);
