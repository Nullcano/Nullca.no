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
var import_PageTitle_4e007c1e = require("../../../chunks/PageTitle-4e007c1e.js");
var _slug__svelte_svelte_type_style_lang = "";
const css = {
  code: ".body.svelte-xww1mx{margin:2rem;font-size:1.2em;line-height:1.5em}.buttons.svelte-xww1mx{margin:2rem;display:flex;flex-wrap:wrap;gap:1rem}@media only screen and (max-width: 768px){.body.svelte-xww1mx{margin:1rem;font-size:1rem;line-height:1.5rem}.buttons.svelte-xww1mx{flex-direction:column;align-items:flex-start}}",
  map: null
};
async function load({ fetch, params }) {
  const { category, slug } = params;
  const res = await fetch(`/${category}/${slug}.json`);
  const { post } = await res.json();
  if (res.ok) {
    return { props: { post } };
  }
  return {
    status: 301,
    body: {
      message: "This page is not currently archived."
    }
  };
}
function stripHTML(str) {
  if (str === null || str === "")
    return false;
  else
    str = str.toString();
  return str.replace(/(<([^>]+)>)/ig, "").replace(/\n/g, "");
}
const U5Bslugu5D = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_b7314c68.e)(post.title)} - Nullcano</title>`, ""}<meta property="${"og:title"}" content="${(0, import_index_b7314c68.e)(post.title) + " - Nullcano"}" data-svelte="svelte-s9blg9"><meta property="${"og:site_name"}" content="${"Nullcano"}" data-svelte="svelte-s9blg9"><meta property="${"og:url"}" content="${"https://nullca.no/" + (0, import_index_b7314c68.e)(post.category.toLowerCase()) + "/" + (0, import_index_b7314c68.e)(post.slug)}" data-svelte="svelte-s9blg9"><meta property="${"og:description"}"${(0, import_index_b7314c68.a)("content", stripHTML(post.content), 0)} data-svelte="svelte-s9blg9"><meta property="${"og:type"}" content="${"article"}" data-svelte="svelte-s9blg9"><meta property="${"og:image"}" content="${"https://nullca.no/assets/thumb/" + (0, import_index_b7314c68.e)(post.slug) + ".png"}" data-svelte="svelte-s9blg9">`, ""}

<article class="${"post"}">${(0, import_index_b7314c68.v)(import_PageTitle_4e007c1e.P, "PageTitle").$$render($$result, {
    title: post.title,
    description: post.description
  }, {}, {})}
  <div class="${"body svelte-xww1mx"}"><!-- HTML_TAG_START -->${post.content}<!-- HTML_TAG_END --></div>
  <div class="${"buttons svelte-xww1mx"}"><a href="${"/" + (0, import_index_b7314c68.e)(post.category.toLowerCase())}">More ${(0, import_index_b7314c68.e)(post.category)} articles</a>
    <a href="${"/all"}">All articles</a></div>
</article>`;
});
module.exports = __toCommonJS(stdin_exports);
