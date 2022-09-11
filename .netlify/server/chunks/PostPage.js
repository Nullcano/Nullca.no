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
  P: () => PostPage,
  s: () => stripHTML
});
module.exports = __toCommonJS(stdin_exports);
var import_index = require("./index.js");
var import_PageTitle = require("./PageTitle.js");
var import_Time = require("./Time.js");
const stripHTML = (str) => {
  if (str === null || str === "") {
    return false;
  } else {
    str = "" + str;
  }
  return str.replace(/(<([^>]+)>)/ig, "");
};
const PostPage_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-1w27qz7{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto;gap:2.5rem}.content.svelte-1w27qz7{position:relative;display:flex;flex-direction:column}.date-info.svelte-1w27qz7{margin:0 0 2.5rem 0}p.svelte-1w27qz7{margin-bottom:.5rem}.cover.svelte-1w27qz7{width:100%;height:100%;background-position:center;background-size:contain;background-repeat:no-repeat;overflow:hidden}@media screen and (max-width: 60em){article.svelte-1w27qz7{display:flex;flex-direction:column}.cover.svelte-1w27qz7{height:25rem}}",
  map: null
};
const PostPage = (0, import_index.c)(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css);
  return `

<article class="${"contained item-page svelte-1w27qz7"}"><div class="${"content svelte-1w27qz7"}">${(0, import_index.v)(import_PageTitle.P, "PageTitle").$$render($$result, { title: item.title }, {}, {})}
		<div class="${"date-info svelte-1w27qz7"}"><span class="${"date"}">\u229D Published ${(0, import_index.v)(import_Time.T, "Time").$$render($$result, { relative: true, timestamp: item.date }, {}, {})}</span></div>
		${(0, import_index.e)(item.content, (p) => {
    return `<p class="${"svelte-1w27qz7"}"><!-- HTML_TAG_START -->${p}<!-- HTML_TAG_END --></p>`;
  })}</div>
	${item.fileType ? `<div class="${"cover svelte-1w27qz7"}" style="${"background-image: url('../thumb/" + (0, import_index.b)(item.slug, true) + "." + (0, import_index.b)(item.fileType, true) + "')"}"></div>` : ``}</article>
<div class="${"h1"}"></div>`;
});
