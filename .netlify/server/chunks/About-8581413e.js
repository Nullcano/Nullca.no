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
  A: () => About
});
var import_index_d395a30e = require("./index-d395a30e.js");
var About_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-15uc4vz{margin:0 .5rem}p.svelte-15uc4vz{margin:.25rem .5rem}article.svelte-15uc4vz{margin:1.5rem;padding:.5rem 1rem;border-radius:1rem;background-color:hsla(0, 0%, 8%);color:hsl(0, 0%, 80%);font-size:.8rem}",
  map: null
};
const About = (0, import_index_d395a30e.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<article class="${"svelte-15uc4vz"}"><h1 class="${"svelte-15uc4vz"}">Welcome to Nullcano</h1>
  <p class="${"svelte-15uc4vz"}">For clarification, Nullcano is my name and I maintain this website. This a self-hosted and self-posted video game archive that I am constantly growing. I sincerely hope you will find something useful.</p>
  <p class="${"svelte-15uc4vz"}">My goal is to index as much content and information about everything in the realm of video games and make them easily accessible with my global search filter.</p>
</article>`;
});
module.exports = __toCommonJS(stdin_exports);
