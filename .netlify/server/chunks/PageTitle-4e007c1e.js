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
  P: () => PageTitle
});
var import_index_b7314c68 = require("./index-b7314c68.js");
var PageTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-title.svelte-1lshhlm{margin-bottom:2rem;padding:2rem}p.svelte-1lshhlm{max-width:720px}@media only screen and (max-width: 768px){.page-title.svelte-1lshhlm{margin-bottom:1rem;padding:1rem}}",
  map: null
};
const PageTitle = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  let { title, description } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css);
  return `<div class="${"page-title svelte-1lshhlm"}"><h1 class="${"title"}">${(0, import_index_b7314c68.e)(title)}</h1>
  <p class="${"svelte-1lshhlm"}">${(0, import_index_b7314c68.e)(description)}</p>
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
