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
  I: () => ItemsGrid,
  P: () => PostCard
});
module.exports = __toCommonJS(stdin_exports);
var import_index = require("./index.js");
var import_Time = require("./Time.js");
const ItemsGrid_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".inner.svelte-8iwspk{display:grid;grid-template-columns:repeat(auto-fit, minmax(20rem, 1fr));grid-template-rows:auto;gap:1rem}",
  map: null
};
const ItemsGrid = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"items-grid"}"><div class="${"inner svelte-8iwspk"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
const PostCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post-card-link.svelte-c6r9k{position:relative;width:100%;height:20rem;padding:1rem;display:flex;flex-direction:column;justify-content:space-between;transition:all .25s linear;z-index:10}.post-card-link.svelte-c6r9k::before{content:'';position:absolute;top:0;left:0;width:100%;height:20rem;border:1px solid rgba(255,255,255,.1);transition:all .25s linear}.post-card-link.svelte-c6r9k::after{content:'';position:absolute;bottom:-1.5rem;right:-1.5rem;width:3rem;height:3rem;background:hsl(240, 13%, 9%);border-top:1px solid rgba(255,255,255,.1);transform:rotate(-45deg);transition:all .25s linear;pointer-events:none}.post-card-link.svelte-c6r9k:hover::before{top:.5rem;left:.5rem}.post-card-link.svelte-c6r9k:hover::after{bottom:-2rem;right:-2rem}.post-card-title.svelte-c6r9k{font-size:2rem}",
  map: null
};
const PostCard = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css);
  return `<a${(0, import_index.d)("href", `/${item.type}/${item.slug}`, 0)} class="${"post-card-link svelte-c6r9k"}">${(0, import_index.v)(import_Time.T, "Time").$$render($$result, { timestamp: item.date }, {}, {})}
	<div class="${"post-card-title featured svelte-c6r9k"}"><span>${(0, import_index.b)(item.title)}</span></div>
</a>`;
});
