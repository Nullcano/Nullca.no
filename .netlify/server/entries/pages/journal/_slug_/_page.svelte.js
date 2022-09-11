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
var import_chunks = require("../../../../chunks/index.js");
var import_PostPage = require("../../../../chunks/PostPage.js");
const Page = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let item = data.item;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `${$$result.title = `<title>${(0, import_chunks.b)(item.title)} \\ Academy Journal \\ Steffen Wold</title>`, ""}<meta property="${"og:title"}" content="${(0, import_chunks.b)(item.title, true) + " \\ Academy Journal \\ Steffen Wold"}" data-svelte="svelte-190cqxd"><meta property="${"og:site_name"}" content="${"Steffen Wold"}" data-svelte="svelte-190cqxd"><meta property="${"og:url"}" content="${"https://steffen.id/journal/" + (0, import_chunks.b)(item.slug, true)}" data-svelte="svelte-190cqxd"><meta property="${"og:description"}"${(0, import_chunks.d)("content", (0, import_PostPage.s)(item.content[0]), 0)} data-svelte="svelte-190cqxd"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-190cqxd"><meta property="${"og:image"}"${(0, import_chunks.d)("content", item.cover, 0)} data-svelte="svelte-190cqxd">`, ""}

${(0, import_chunks.v)(import_PostPage.P, "PostPage").$$render($$result, { item }, {}, {})}

<div class="${"button cta"}"><svg class="${"flip-x"}" viewBox="${"0 0 28 28"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z"}" fill="${"currentColor"}" fill-rule="${"nonzero"}"></path></svg></div>`;
});
