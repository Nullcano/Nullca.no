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
  default: () => _layout
});
var import_index_b7314c68 = require("../../chunks/index-b7314c68.js");
var normalize = "";
var global = "";
var Navbar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "nav.svelte-pgdc2n{position:sticky;width:100%;top:1rem;padding:.5rem;display:flex;align-items:center;justify-content:space-evenly;gap:1rem;color:hsl(160, 25%, 75%);background:hsl(160, 25%, 5%);border:2px solid hsl(160, 25%, 25%);border-radius:1rem;text-transform:uppercase;font-size:1.25rem;z-index:9}.sep.svelte-pgdc2n{font-size:2rem}",
  map: null
};
const Navbar = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<nav class="${"svelte-pgdc2n"}"><a href="${"/"}">Home</a> <span class="${"sep svelte-pgdc2n"}">\u25A8</span>
  <a href="${"/about"}">About</a> <span class="${"sep svelte-pgdc2n"}">\u25A8</span> 
  <a href="${"/projects"}">Projects</a> <span class="${"sep svelte-pgdc2n"}">\u25A7</span> 
  <a href="${"/journal"}">Academy Journal</a> <span class="${"sep svelte-pgdc2n"}">\u25A7</span> 
  <a href="${"mailto:woldsteffen@gmail.com"}">Mail</a>
</nav>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-1njq3p6{position:relative;bottom:0;padding:3rem}.contained.svelte-1njq3p6{display:flex;justify-content:center;align-items:center}",
  map: null
};
const Footer = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-1njq3p6"}"><div class="${"contained svelte-1njq3p6"}"><span>Steffen Wold \xA9 2022
    </span></div>
</footer>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Krona+One&family=Poppins:wght@300&display=swap');main.svelte-1pvmgnu{margin:2px;padding:2.5rem;width:calc(100% - 4px);min-height:100vh;border-radius:1em;background:hsl(160, 25%, 5%);background:linear-gradient(90deg, hsl(160, 25%, 5%) 11px, transparent 1%) center, linear-gradient(hsl(160, 25%, 5%) 11px, transparent 1%) center, hsl(160, 25%, 12.5%);background-size:13px 13px}@media(max-width: 768px){main.svelte-1pvmgnu{padding:1rem}}",
  map: null
};
const _layout = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  $$result.css.add(css);
  image = image;
  return `<main class="${"svelte-1pvmgnu"}">${(0, import_index_b7314c68.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}
  ${slots.default ? slots.default({}) : ``}
  ${(0, import_index_b7314c68.v)(Footer, "Footer").$$render($$result, {}, {}, {})}
</main>`;
});
module.exports = __toCommonJS(stdin_exports);
