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
  A: () => AllPosts
});
var import_index_b7314c68 = require("./index-b7314c68.js");
var import_data_fbba73f1 = require("./data-fbba73f1.js");
var import_PostCard_55647a7c = require("./PostCard-55647a7c.js");
const AllPosts = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  let sortedPosts = import_data_fbba73f1.p.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  let items = sortedPosts;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${(0, import_index_b7314c68.v)(import_PostCard_55647a7c.P, "PostGrid").$$render($$result, {}, {}, {
      default: () => {
        return `${(0, import_index_b7314c68.b)(items, (item) => {
          return `${(0, import_index_b7314c68.v)(import_PostCard_55647a7c.b, "PostCard").$$render($$result, {
            slug: item.slug,
            title: item.title,
            category: item.category,
            date: item.date,
            description: item.description
          }, {}, {})}`;
        })}`;
      }
    })}

${(0, import_index_b7314c68.v)(import_PostCard_55647a7c.a, "Pagination").$$render($$result, {
      rows: sortedPosts,
      perPage: 8,
      trimmedRows: items
    }, {
      trimmedRows: ($$value) => {
        items = $$value;
        $$settled = false;
      }
    }, {})}`;
  } while (!$$settled);
  return $$rendered;
});
module.exports = __toCommonJS(stdin_exports);
