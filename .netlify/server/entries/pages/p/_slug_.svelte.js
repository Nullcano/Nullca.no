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
var import_index_d395a30e = require("../../../chunks/index-d395a30e.js");
async function load({ fetch, params }) {
  const slug = params.slug;
  const res = await fetch(`/p/${slug}.json`);
  const { post } = await res.json();
  if (res.ok) {
    return { props: { post } };
  }
  return {
    status: 301,
    redirect: "/p"
  };
}
const U5Bslugu5D = (0, import_index_d395a30e.c)(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let categorySlug = post.category.toLowerCase();
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `<div class="${"single-post"}"><h2 class="${"title"}">${(0, import_index_d395a30e.e)(post.title)}</h2>
  <div class="${"body"}"><!-- HTML_TAG_START -->${post.content}<!-- HTML_TAG_END --></div>
  <div class="${"buttons"}"><a href="${"/t/" + (0, import_index_d395a30e.e)(categorySlug)}">More ${(0, import_index_d395a30e.e)(post.category)} posts</a>
    <a href="${"/p"}">All posts</a></div></div>`;
});
module.exports = __toCommonJS(stdin_exports);
