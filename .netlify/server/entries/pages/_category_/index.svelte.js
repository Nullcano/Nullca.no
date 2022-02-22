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
  default: () => U5Bcategoryu5D,
  load: () => load
});
var import_index_b7314c68 = require("../../../chunks/index-b7314c68.js");
var import_data_fbba73f1 = require("../../../chunks/data-fbba73f1.js");
var import_PostCard_55647a7c = require("../../../chunks/PostCard-55647a7c.js");
var import_PageTitle_4e007c1e = require("../../../chunks/PageTitle-4e007c1e.js");
var import_PageSubtitle_4e85ee87 = require("../../../chunks/PageSubtitle-4e85ee87.js");
function slugify(text) {
  const from = "\xE3\xE0\xE1\xE4\xE2\u1EBD\xE8\xE9\xEB\xEA\xEC\xED\xEF\xEE\xF5\xF2\xF3\xF6\xF4\xF9\xFA\xFC\xFB\xF1\xE7\xB7/_,:;";
  const to = "aaaaaeeeeeiiiiooooouuuunc------";
  const newText = text.split("").map((letter, i) => letter.replace(new RegExp(from.charAt(i), "g"), to.charAt(i)));
  return newText.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/&/g, "-y-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-");
}
var LightPaginationNav_svelte_svelte_type_style_lang = "";
var DarkPaginationNav_svelte_svelte_type_style_lang = "";
async function load({ params }) {
  const { category } = params;
  return {
    props: {
      categoryPosts: import_data_fbba73f1.p.filter((post) => slugify(post.category) === category).sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      }),
      title: import_data_fbba73f1.c.filter((cat) => cat.slug === category)[0].title,
      description: import_data_fbba73f1.c.filter((cat) => cat.slug === category)[0].description,
      slug: import_data_fbba73f1.c.filter((cat) => cat.slug === category)[0].slug
    }
  };
}
const U5Bcategoryu5D = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  let { categoryPosts, title, description, slug } = $$props;
  let items;
  if ($$props.categoryPosts === void 0 && $$bindings.categoryPosts && categoryPosts !== void 0)
    $$bindings.categoryPosts(categoryPosts);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `${$$result.title = `<title>${(0, import_index_b7314c68.e)(title)} - Nullcano</title>`, ""}<meta property="${"og:title"}" content="${(0, import_index_b7314c68.e)(title) + " - Nullcano"}" data-svelte="svelte-inec59"><meta property="${"og:site_name"}" content="${"Nullcano"}" data-svelte="svelte-inec59"><meta property="${"og:url"}" content="${"https://nullca.no/" + (0, import_index_b7314c68.e)(slug)}" data-svelte="svelte-inec59"><meta property="${"og:description"}"${(0, import_index_b7314c68.a)("content", description, 0)} data-svelte="svelte-inec59"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-inec59"><meta property="${"og:image"}" content="${"https://nullca.no/assets/topic/" + (0, import_index_b7314c68.e)(title) + ".png"}" data-svelte="svelte-inec59">`, ""}

${(0, import_index_b7314c68.v)(import_PageTitle_4e007c1e.P, "PageTitle").$$render($$result, { title, description }, {}, {})}

${(0, import_index_b7314c68.v)(import_PageSubtitle_4e85ee87.P, "PageSubtitle").$$render($$result, { title: "All " + title + " articles" }, {}, {})}

${items ? `${(0, import_index_b7314c68.v)(import_PostCard_55647a7c.P, "PostGrid").$$render($$result, {}, {}, {
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
    })}` : ``}

${(0, import_index_b7314c68.v)(import_PostCard_55647a7c.a, "Pagination").$$render($$result, {
      rows: categoryPosts,
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
