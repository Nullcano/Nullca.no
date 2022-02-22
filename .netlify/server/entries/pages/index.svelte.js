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
  default: () => Routes
});
var import_index_b7314c68 = require("../../chunks/index-b7314c68.js");
var import_PageSubtitle_4e85ee87 = require("../../chunks/PageSubtitle-4e85ee87.js");
var import_AllPosts_cf09654a = require("../../chunks/AllPosts-cf09654a.js");
var import_data_fbba73f1 = require("../../chunks/data-fbba73f1.js");
var import_PostCard_55647a7c = require("../../chunks/PostCard-55647a7c.js");
var LogoText_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "svg.svelte-176uzul{position:absolute;top:3rem;left:2rem;max-height:6rem;max-width:70vw;stroke:hsl(200, 15%, 50%);stroke-width:0.5}",
  map: null
};
const LogoText = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 100 258 64"}" class="${"iconAbove svelte-176uzul"}"><path d="${"M35.583 141.22Q14.6 104.903 11.718 105.578q-2.945.675-11.595 9.938l1.35.92q5.644-4.907 9.14.123-3.803 4.724-3.558 6.81l.062 28.59Q5.706 156.373 0 162.57l1.043.184q2.27-1.657 13.19-.982l6.749-7.914-.982-.736q-2.025 1.472-10.859.675 3.436-1.411 5.092-4.663l-.061-27.853 20.613 33.62q-1.35 3.067-6.441 7.914l1.104.184q2.147-1.78 12.147-1.043l6.81-8.098-1.043-.798q-2.025 1.534-8.957.553 2.822-1.718 3.62-4.663l.122-34.54.123-.061 7.362-7.914-.307-.86-15.521.123-7.056 11.35 1.412.614q1.288-2.945 4.294-3.068h7.607q-4.171 1.78-4.478 4.233v22.393Zm44.478 20.798 7.914-7.914-1.042-1.227-2.454 2.209q-3.375-.184-3.007-6.871v-17.178q-.122-6.258-4.969-7.055l-7.975 7.791.859.859 2.453-2.086q1.964.614 1.473 6.319v15.706l-3.865 3.312q-6.626-.49-6.503-9.325V131.16q.061-6.074-4.663-6.994l-7.975 7.668.859 1.105 2.392-2.27q1.718.245 1.473 6.196l-.062 12.577q0 6.319 3.497 9.509 3.497 3.19 7.546 3.374l7.669-7.791q.92 6.687 6.38 7.484ZM100.86 103Q90 110.24 90.369 117.11V153q.551 6.626 6.87 9.018l8.282-8.036-.674-.798q-4.233 2.638-6.38-1.35v-36.441q-.246-8.283 3.128-11.473l-.736-.92Zm16.994 0q-10.86 7.24-10.491 14.11V153q.552 6.626 6.871 9.018l8.221-8.036-.613-.798q-4.295 2.638-6.38-1.35v-36.441q-.246-8.283 3.128-11.473l-.736-.92Zm21.595 21.166q-3.927 1.533-8.65 6.073-9.755 9.264-6.933 17.117 2.822 7.791 6.81 11.534 3.988 3.68 7.116 2.944 6.32-4.846 12.27-12.638l-1.104-.92q-3.497 4.05-7.055 5.215-4.172-.736-7.608-6.258-3.496-5.46-3.374-10.43.123-4.969 2.454-5.643 2.393-.675 5.154.92 2.699 1.595 3.313 6.257l6.87-6.012q.737-4.049-2.392-6.319-3.067-2.27-6.871-1.84Zm28.773-.123q-5.092 3.067-9.755 9.51-4.662 6.38-4.97 10.92-.367 4.54 4.418 10.797 4.785 6.258 7.362 6.564 4.785-3.926 7.669-6.441 1.165 4.54 6.626 6.748l8.22-10.061-1.35-.92-1.84 1.963q-2.086.981-3.435-.736-1.35-1.657-1.227-4.11v-20.185q.122-3.067 2.27-4.11l-13.988.06Zm-4.908 6.626h10.184l-1.472 2.883v19.509q-3.681 2.884-9.019-4.908-5.399-7.852.307-17.484Zm32.27-6.687-7.914 7.914 1.043 1.227 2.454-2.209q3.374.184 3.006 6.871v17.24q.122 6.196 5.03 6.993l7.915-7.791-.86-.798-2.392 2.025q-1.718-.675-1.534-6.258V133.43l3.13-2.576q7.177-.246 7.3 8.589l-.062 15.398q-.06 6.135 4.663 7.056l7.975-7.73-.797-1.105-2.454 2.27q-1.472-.184-1.411-4.969v-16.626q-.123-5.644-3.62-8.037-3.497-2.33-7.178-1.717l-7.914 7.484q-.92-6.687-6.38-7.484Zm43.251.552q-2.086 1.043-6.81 5.767-4.723 4.724-5.582 12.147-.86 7.423 4.233 13.374 5.03 5.951 8.834 6.442 3.804.43 6.687-2.209 2.884-2.638 6.626-9.14 3.804-6.504 3.129-12.27-.675-5.768-4.724-9.817-4.05-3.988-7.178-4.662-3.067-.675-5.215.368Zm-2.024 6.564q4.049-.613 8.343 3.865 4.356 4.479 4.908 9.51.553 5.03-1.533 7.607-2.086 2.515-6.197 2.086-4.049-.491-7.484-6.872-3.375-6.38-2.7-10.981.614-4.54 4.663-5.215Z"}" fill="${"none"}"></path></svg>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".intro-section.svelte-1c2iyn8{position:relative;padding:3rem;display:flex;flex-direction:column;align-items:flex-start;justify-content:center}h2.svelte-1c2iyn8{position:relative;top:-2rem;font-style:italic}",
  map: null
};
const Routes = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Frontpage - Nullcano</title>`, ""}<meta property="${"og:title"}" content="${"Frontpage - Nullcano"}" data-svelte="svelte-17108dr"><meta property="${"og:site_name"}" content="${"Nullcano"}" data-svelte="svelte-17108dr"><meta property="${"og:url"}" content="${"https://nullca.no"}" data-svelte="svelte-17108dr"><meta property="${"og:description"}" content="${"Nullcano is a personally curated video game archive that is always growing. The goal is to index all types of media, files and articles about video games, the community surrounding it and make it easily accessible while also preserving its history."}" data-svelte="svelte-17108dr"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-17108dr"><meta property="${"og:image"}" content="${""}" data-svelte="svelte-17108dr">`, ""}

<div class="${"intro-section svelte-1c2iyn8"}"><h2 class="${"svelte-1c2iyn8"}">Welcome to</h2>
  ${(0, import_index_b7314c68.v)(LogoText, "LogoText").$$render($$result, {}, {}, {})}</div>

${(0, import_index_b7314c68.v)(import_PageSubtitle_4e85ee87.P, "PageSubtitle").$$render($$result, { title: "Recent posts" }, {}, {})}

${(0, import_index_b7314c68.v)(import_AllPosts_cf09654a.A, "AllPosts").$$render($$result, {}, {}, {})}`;
});
module.exports = __toCommonJS(stdin_exports);
