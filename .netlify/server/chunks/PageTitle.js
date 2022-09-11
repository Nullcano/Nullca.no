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
  P: () => PageTitle
});
module.exports = __toCommonJS(stdin_exports);
var import_index = require("./index.js");
const PageTitle_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-title.svelte-lpha0i.svelte-lpha0i{position:relative;margin-bottom:2.5rem;display:flex;flex-direction:column;align-items:flex-start}.page-title.svelte-lpha0i svg.svelte-lpha0i{margin-bottom:1rem;width:1.5rem;stroke:currentColor;stroke-width:4;fill:none}.heading.svelte-lpha0i.svelte-lpha0i{display:flex;flex-direction:column;font-size:3rem}@media(max-width: 60rem){.heading.svelte-lpha0i.svelte-lpha0i{font-size:1.5rem}}",
  map: null
};
const PageTitle = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css);
  return `<div class="${"page-title svelte-lpha0i"}"><svg viewBox="${"0 0 44 32"}" class="${"svelte-lpha0i"}"><polygon points="${"2,2 42,2 22,30"}"></polygon>
		SVG:404
	</svg>
	<div class="${"heading featured svelte-lpha0i"}">${(0, import_index.b)(title)}</div>
</div>`;
});
