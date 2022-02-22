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
  get: () => get
});
var import_data_fbba73f1 = require("../../chunks/data-fbba73f1.js");
async function getPosts() {
  import_data_fbba73f1.p.sort((a, b) => a.date < b.date ? 1 : -1);
  return import_data_fbba73f1.p;
}
const website = "https://nullca.no";
async function get() {
  const posts2 = await getPosts();
  const pages = [`about`];
  const body = sitemap(posts2, pages);
  const headers = {
    "Cache-Control": "max-age=0, s-maxage=3600",
    "Content-Type": "application/xml"
  };
  return {
    headers,
    body
  };
}
const sitemap = (posts2, pages) => `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>${website}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
      ${pages.map((page) => `
        <url>
          <loc>${website}/${page}</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `).join("")}
      ${posts2.map((post) => post.isPrivate ? null : `
        <url>
          <loc>${website}/${post.category.toLowerCase()}/${post.slug}</loc>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `).join("")}
    </urlset>`;
module.exports = __toCommonJS(stdin_exports);
