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
  default: () => About
});
var import_index_b7314c68 = require("../../chunks/index-b7314c68.js");
var import_PageTitle_4e007c1e = require("../../chunks/PageTitle-4e007c1e.js");
var about_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-1a02lcf{margin:1rem;padding:1em;max-width:800px}p.svelte-1a02lcf{margin:.5rem 0}",
  map: null
};
const About = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${(0, import_index_b7314c68.v)(import_PageTitle_4e007c1e.P, "PageTitle").$$render($$result, {
    title: "About",
    description: "Nullcano is a personally curated video game archive that I am constantly growing. I sincerely hope you will find something useful. My goal is to index as much content and information about everything in the realm of video games and make them easily accessible with my global search filter."
  }, {}, {})}

<div class="${"content svelte-1a02lcf"}"><h3>Legal</h3>
  <p class="${"svelte-1a02lcf"}">Nullcano (https://nullca.no)&#39;s content is not affiliated, endorsed or sponsored by any of the parties involved on the page. If there ever is sponsored content it will be clearly labeled.</p>
  <p class="${"svelte-1a02lcf"}">The purpose of this website is to provide a comprehensive and up to date archive of media and information about the video game industry while also preserve its history.</p>
  <p class="${"svelte-1a02lcf"}">This website is non-profit and will only accept third-party donations at <a href="${"https://ko-fi.com/nullcano"}" target="${"_blank"}">Ko-fi.com</a> to sustain any maintenance costs.</p>
  <p class="${"svelte-1a02lcf"}">This website does not currently collect any user data.</p>
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
