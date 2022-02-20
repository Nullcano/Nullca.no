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
var import_index_d395a30e = require("../../chunks/index-d395a30e.js");
var import_data_2ca15c9b = require("../../chunks/data-2ca15c9b.js");
var import_About_8581413e = require("../../chunks/About-8581413e.js");
var import_Time_f3f52559 = require("../../chunks/Time-f3f52559.js");
const Routes = (0, import_index_d395a30e.c)(($$result, $$props, $$bindings, slots) => {
  let sortedPosts = import_data_2ca15c9b.p.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  return `${(0, import_index_d395a30e.v)(import_About_8581413e.A, "About").$$render($$result, {}, {}, {})}

<h3>Recent posts</h3>

<div class="${"container"}"><div class="${"post-grid"}">${(0, import_index_d395a30e.a)(sortedPosts, (post) => {
    return `<div class="${"grid-item"}"><div class="${"post"}"><div class="${"image"}"><a sveltekit:prefetch${(0, import_index_d395a30e.b)("href", `/p/${post.slug}`, 0)}><img${(0, import_index_d395a30e.b)("src", post.image, 0)}${(0, import_index_d395a30e.b)("alt", post.title, 0)}></a>
            <a${(0, import_index_d395a30e.b)("href", `/t/${post.category.toLowerCase()}`, 0)}><div class="${"category"}">${(0, import_index_d395a30e.e)(post.category)}</div>
            </a></div>
          <div class="${"content"}"><h3 class="${"title"}"><a sveltekit:prefetch${(0, import_index_d395a30e.b)("href", `/p/${post.slug}`, 0)}>${(0, import_index_d395a30e.e)(post.title)}</a></h3>
            <div class="${"excerpt"}"><!-- HTML_TAG_START -->${post.content}<!-- HTML_TAG_END --></div>
            <div class="${"meta"}"><span>Posted ${(0, import_index_d395a30e.v)(import_Time_f3f52559.T, "Time").$$render($$result, {
      relative: true,
      timestamp: post.date,
      format: "YYYY/MM"
    }, {}, {})}</span></div>
          </div></div>
      </div>`;
  })}</div></div>`;
});
module.exports = __toCommonJS(stdin_exports);
