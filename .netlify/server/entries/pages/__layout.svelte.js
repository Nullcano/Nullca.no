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
var import_index_d395a30e = require("../../chunks/index-d395a30e.js");
var global = "";
var media = "";
var Navbar_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".bg.svelte-lwvexf.svelte-lwvexf{position:absolute;top:0;width:100%;height:6rem;background-image:url('https://namelessmc.com/uploads/template_banners/homepage_bg_trimmed.jpg');background-size:cover;background-position:center;background-repeat:no-repeat}.title-wrap.svelte-lwvexf.svelte-lwvexf{display:flex;align-items:center;gap:.5rem\r\n  }.navbar.svelte-lwvexf.svelte-lwvexf{position:fixed;top:0;right:0;background:hsla(0, 0%, 8%, .9);color:hsl(0, 0%, 95%);width:calc(100% - 200px);border-top-left-radius:999px;border-bottom-left-radius:999px;display:flex;justify-content:space-between;align-items:center;z-index:9}.navbar-small.svelte-lwvexf.svelte-lwvexf{position:fixed;top:0;right:0;background:hsla(0, 0%, 8%, .9);color:hsl(0, 0%, 95%);width:100%;display:none;justify-content:space-between;align-items:center;z-index:9}.nav-card.svelte-lwvexf.svelte-lwvexf{position:fixed;top:4rem;right:.5rem;width:200px;display:none;flex-direction:column;align-items:center;justify-content:center;list-style:none;padding:.5rem;margin:0;background:hsla(0, 0%, 12%, .9);color:hsl(0, 0%, 95%);border-radius:9px;z-index:9;transition:all .3s ease-in-out}.nav-card.svelte-lwvexf li.svelte-lwvexf{width:100%;display:flex;align-items:center}.nav-card.svelte-lwvexf a.svelte-lwvexf{color:hsl(0, 0%, 95%);font-size:1.2rem;font-weight:700;display:flex;align-items:center;justify-content:flex-start;text-align:center;width:100%;height:3rem}.nav-card.active.svelte-lwvexf.svelte-lwvexf{display:flex}svg.svelte-lwvexf.svelte-lwvexf{width:1.5rem;height:1.5rem;fill:currentColor}.toggle.svelte-lwvexf.svelte-lwvexf{padding:.5rem;cursor:pointer}nav.svelte-lwvexf .center.svelte-lwvexf{display:flex;align-items:center;gap:1.5rem}nav.svelte-lwvexf .right.svelte-lwvexf{margin:0 2rem}a.svelte-lwvexf.svelte-lwvexf{padding:.5rem;text-decoration:none;color:#fff;display:flex;align-items:center;gap:.5rem;transition:all .2s ease-in-out}a.svelte-lwvexf.svelte-lwvexf:hover{transform:scale(1.05)}.nav-card.svelte-lwvexf a.svelte-lwvexf:hover{transform:none}img.svelte-lwvexf.svelte-lwvexf{width:2.5rem;height:2.5rem;border-radius:50%;border:3px solid hsla(0, 0%, 5%, .25)}h1.svelte-lwvexf.svelte-lwvexf{margin:0;font-size:1.5rem;font-weight:400}@media(max-width: 1140px){}@media(max-width: 768px){.navbar.svelte-lwvexf.svelte-lwvexf{display:none}.navbar-small.svelte-lwvexf.svelte-lwvexf{display:flex}}",
  map: null
};
const Navbar = (0, import_index_d395a30e.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `
<div class="${"bg svelte-lwvexf"}"></div>

<nav class="${"navbar svelte-lwvexf"}"><div class="${"left"}"><a href="${"/"}" class="${"svelte-lwvexf"}"><div class="${"title-wrap svelte-lwvexf"}"><img src="${"https://crafatar.com/avatars/5d5a7769-bc60-4eda-aca0-8d54b40a4ce0?size=100&overlay"}" alt="${"Nullcano"}" class="${"svelte-lwvexf"}">
        <h1 class="${"svelte-lwvexf"}">Nullcano</h1></div></a></div>
  <ul class="${"center svelte-lwvexf"}"><li><a href="${"/"}" class="${"svelte-lwvexf"}">Index</a></li>
    <li><a href="${"/p"}" class="${"svelte-lwvexf"}">All posts</a></li>
    <li><a href="${"/about"}" class="${"svelte-lwvexf"}">About</a></li></ul>
  <ul class="${"right svelte-lwvexf"}"><li><a href="${"https://ko-fi.com/nullcano"}" target="${"_blank"}" class="${"svelte-lwvexf"}"><svg width="${"24"}" height="${"24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-lwvexf"}"><path fill="${"currentcolor"}" d="${"M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"}"></path></svg>
        <span>Ko-fi</span></a></li></ul></nav>

<nav class="${"navbar-small svelte-lwvexf"}"><div class="${"left"}"><a href="${"/"}" class="${"svelte-lwvexf"}"><div class="${"title-wrap svelte-lwvexf"}"><img src="${"https://crafatar.com/avatars/5d5a7769-bc60-4eda-aca0-8d54b40a4ce0?size=100&overlay"}" alt="${"Nullcano"}" class="${"svelte-lwvexf"}">
        <h1 class="${"svelte-lwvexf"}">Nullcano</h1></div></a></div>
  <ul class="${"right svelte-lwvexf"}"><div class="${"toggle svelte-lwvexf"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 384.97 384.97"}" style="${"enable-background:new 0 0 384.97 384.97"}" xml:space="${"preserve"}" class="${"svelte-lwvexf"}"><path d="${"M12.03 84.212h360.909c6.641 0 12.03-5.39 12.03-12.03 0-6.641-5.39-12.03-12.03-12.03H12.03C5.39 60.152 0 65.541 0 72.182c0 6.641 5.39 12.03 12.03 12.03zM372.939 180.455H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.03-12.03zM372.939 300.758H12.03c-6.641 0-12.03 5.39-12.03 12.03 0 6.641 5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03.001-6.641-5.389-12.03-12.03-12.03z"}"></path></svg></div></ul></nav>

<ul class="${["nav-card svelte-lwvexf", ""].join(" ").trim()}"><li class="${"svelte-lwvexf"}"><a href="${"/"}" class="${"svelte-lwvexf"}">Index</a></li>
  <li class="${"svelte-lwvexf"}"><a href="${"/p"}" class="${"svelte-lwvexf"}">All posts</a></li>
  <li class="${"svelte-lwvexf"}"><a href="${"/about"}" class="${"svelte-lwvexf"}">About</a></li>
  <li class="${"svelte-lwvexf"}"><a href="${"https://ko-fi.com/nullcano"}" target="${"_blank"}" class="${"svelte-lwvexf"}"><svg width="${"24"}" height="${"24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-lwvexf"}"><path fill="${"currentcolor"}" d="${"M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"}"></path></svg>
      <span>Ko-fi</span></a></li>
</ul>`;
});
var Sidebar_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "aside.svelte-cbrxf9{position:relative;top:6rem;padding:1rem}.inner.svelte-cbrxf9{position:sticky;top:3rem}li.svelte-cbrxf9{padding:.5rem 1rem;background:hsl(0, 0%, 8%);border-radius:.5rem}a.svelte-cbrxf9{color:hsl(0, 0%, 70%);text-decoration:none}a.svelte-cbrxf9:hover{color:hsl(0, 0%, 80%)}",
  map: null
};
const Sidebar = (0, import_index_d395a30e.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<aside class="${"svelte-cbrxf9"}"><div class="${"inner svelte-cbrxf9"}"><h2>Topics</h2>
    <ul><a href="${"/t/minecraft"}" class="${"svelte-cbrxf9"}"><li class="${"svelte-cbrxf9"}">Minecraft</li></a></ul></div>
</aside>`;
});
var Page_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "section.svelte-1x24ino{position:relative;padding:6rem 0}",
  map: null
};
const Page = (0, import_index_d395a30e.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="${"svelte-1x24ino"}">${slots.default ? slots.default({}) : ``}
</section>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-g0eu4g{position:relative;margin:3rem;padding:3rem;display:grid;place-content:center;border-top:1px solid hsla(0, 0%, 50%, 0.25)}small.svelte-g0eu4g{margin-bottom:.5rem}",
  map: null
};
const Footer = (0, import_index_d395a30e.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-g0eu4g"}"><small class="${"svelte-g0eu4g"}">All trademarks and copyrights on this page are owned by their respective parties.</small>
  <span><a href="${"/"}">Nullcano</a> \u2014 \xA9 ${(0, import_index_d395a30e.e)(new Date().getFullYear())}</span>
</footer>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-ulesp4{width:100%;height:100%;display:grid;grid-template-columns:200px 1fr;grid-template-rows:1fr}",
  map: null
};
const _layout = (0, import_index_d395a30e.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Nullcano</title>`, ""}`, ""}

${(0, import_index_d395a30e.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}
<main class="${"svelte-ulesp4"}">${(0, import_index_d395a30e.v)(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}
  ${(0, import_index_d395a30e.v)(Page, "Page").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}</main>
${(0, import_index_d395a30e.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
module.exports = __toCommonJS(stdin_exports);
