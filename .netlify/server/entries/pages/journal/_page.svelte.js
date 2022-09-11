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
var import_data = require("../../../chunks/data.js");
var import_Time = require("../../../chunks/Time.js");
const ItemsGridMini_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".inner.svelte-6umlo{display:grid;grid-template-columns:repeat(auto-fit, minmax(15rem, 1fr));grid-template-rows:auto;gap:1rem}",
  map: null
};
const ItemsGridMini = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"items-grid"}"><div class="${"inner svelte-6umlo"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
const PostCardMini_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post-card-link.svelte-1b6qi1t{position:relative;width:100%;height:10rem;padding:1rem;display:flex;flex-direction:column;justify-content:space-between;transition:all .25s linear;z-index:10}.post-card-link.svelte-1b6qi1t::before{content:'';position:absolute;top:0;left:0;width:100%;height:10rem;border:1px solid rgba(255,255,255,.1);transition:all .25s linear}.post-card-link.svelte-1b6qi1t::after{content:'';position:absolute;bottom:-1.5rem;right:-1.5rem;width:3rem;height:3rem;background:hsl(240, 13%, 9%);border-top:1px solid rgba(255,255,255,.1);transform:rotate(-45deg);transition:all .25s linear;pointer-events:none}.post-card-link.svelte-1b6qi1t:hover::before{top:.5rem;left:.5rem}.post-card-link.svelte-1b6qi1t:hover::after{bottom:-2rem;right:-2rem}.timestamp.svelte-1b6qi1t{text-transform:uppercase;color:rgba(255,255,255,.5)}.post-card-title.svelte-1b6qi1t{font-size:1.25rem}",
  map: null
};
const PostCardMini = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css);
  return `<a${(0, import_chunks.d)("href", `/${item.type}/${item.slug}`, 0)} class="${"post-card-link svelte-1b6qi1t"}"><div class="${"timestamp svelte-1b6qi1t"}">${(0, import_chunks.v)(import_Time.T, "Time").$$render($$result, { timestamp: item.date }, {}, {})}</div>
	<div class="${"post-card-title featured svelte-1b6qi1t"}"><span>${(0, import_chunks.b)(item.title)}</span></div>
</a>`;
});
const FeedAll = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let entries = import_data.d.filter((entry) => entry.type === "journal").sort((a, b) => b.date - a.date);
  return `${(0, import_chunks.v)(ItemsGridMini, "ItemsGridMini").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_chunks.e)(entries, (item) => {
        return `${(0, import_chunks.v)(PostCardMini, "PostCardMini").$$render($$result, { item }, {}, {})}`;
      })}`;
    }
  })}`;
});
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Academy Journal \\ Steffen Wold</title>`, ""}<meta property="${"og:title"}" content="${"Academy Journal \\ Steffen Wold"}" data-svelte="svelte-8fiwsp"><meta property="${"og:site_name"}" content="${"Steffen Wold"}" data-svelte="svelte-8fiwsp"><meta property="${"og:url"}" content="${"https://steffen.id/journal"}" data-svelte="svelte-8fiwsp"><meta property="${"og:description"}" content="${"Ikomm Academy 2022."}" data-svelte="svelte-8fiwsp"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-8fiwsp"><meta property="${"og:image"}" content="${""}" data-svelte="svelte-8fiwsp">`, ""}

<div class="${"page"}">${(0, import_chunks.v)(import_PageTitle.P, "PageTitle").$$render($$result, { title: "Ikomm Academy 2022" }, {}, {})}
	${(0, import_chunks.v)(FeedAll, "FeedAll").$$render($$result, {}, {}, {})}</div>

<div class="${"button cta"}"><svg class="${"flip-x"}" viewBox="${"0 0 28 28"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z"}" fill="${"currentColor"}" fill-rule="${"nonzero"}"></path></svg></div>`;
});
