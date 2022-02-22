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
var import_data_fbba73f1 = require("../../chunks/data-fbba73f1.js");
var nullstrap = "";
var global = "";
var LogoBackground_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".backdrop.svelte-qfdxvl{pointer-events:none;position:fixed;bottom:-10vw;right:-10vw;width:50vw;display:grid;place-content:center}svg.svelte-qfdxvl{width:100%;stroke:url(#b);stroke-width:1px;fill:linear-gradient(to right, hsl(200, 15%, 9%), hsl(200, 15%, 9%))}",
  map: null
};
const LogoBackground = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<div class="${"backdrop svelte-qfdxvl"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 100 100"}" class="${"iconAbove svelte-qfdxvl"}"><defs><linearGradient gradientTransform="${"rotate(45)"}" id="${"b"}" x1="${"0%"}" y1="${"0%"}" x2="${"100%"}" y2="${"0%"}"><stop offset="${"10%"}" style="${"stop-color:hsl(200,15%,8%);stop-opacity:0"}"></stop><stop offset="${"100%"}" style="${"stop-color:hsl(200,15%,10%);stop-opacity:1"}"></stop></linearGradient></defs><path d="${"M11.93 89a246.66 246.66 0 0 1 28.68-37.55c1-1.07.23-2.78-.56-4-7.63-11.63-16.8-23.23-18.1-37.08 8.09 10.35 18.38 18.72 28.58 27 1 .84 2.54 1.69 3.56.84a338.83 338.83 0 0 1 42.5-30.16 309.61 309.61 0 0 1-32.37 39.7c-.9.93-.07 2.44.75 3.45A134.87 134.87 0 0 1 88.42 94l-37-32.12c-.45-.39-1.13-.79-1.58-.4Q39.1 70.7 27.8 79.27C22.83 83 17.72 86.74 11.93 89z"}" data-name="${"Shape 109"}" fill="${"none"}"></path></svg>
</div>`;
});
var LogoIcon_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "a.svelte-1jg3fpz{width:3rem;height:3rem;display:grid;place-content:center;background:var(--darken-dark)}svg.svelte-1jg3fpz{height:2.5rem}",
  map: null
};
const LogoIcon = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<a href="${"/"}" class="${"svelte-1jg3fpz"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 100 100"}" class="${"iconAbove svelte-1jg3fpz"}"><defs><linearGradient gradientTransform="${"rotate(25)"}" id="${"a"}" x1="${"0%"}" y1="${"0%"}" x2="${"100%"}" y2="${"0%"}"><stop offset="${"0%"}" style="${"stop-color:var(--primary-accent);stop-opacity:1"}"></stop><stop offset="${"100%"}" style="${"stop-color:var(--secondary-accent);stop-opacity:1"}"></stop></linearGradient></defs><path d="${"M11.93 89a246.66 246.66 0 0 1 28.68-37.55c1-1.07.23-2.78-.56-4-7.63-11.63-16.8-23.23-18.1-37.08 8.09 10.35 18.38 18.72 28.58 27 1 .84 2.54 1.69 3.56.84a338.83 338.83 0 0 1 42.5-30.16 309.61 309.61 0 0 1-32.37 39.7c-.9.93-.07 2.44.75 3.45A134.87 134.87 0 0 1 88.42 94l-37-32.12c-.45-.39-1.13-.79-1.58-.4Q39.1 70.7 27.8 79.27C22.83 83 17.72 86.74 11.93 89z"}" data-name="${"Shape 109"}" fill="${"url(#a)"}"></path></svg>
</a>`;
});
var Searchbar_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "input.svelte-ngg00q.svelte-ngg00q{width:100%;border:none;background:var(--darken-dark);color:var(--lighten-light);font-size:1.25rem;padding:.5rem 1rem;outline:none;opacity:.5;transition:all .3s ease-in-out}input.svelte-ngg00q.svelte-ngg00q:focus{opacity:1}.search-results.svelte-ngg00q.svelte-ngg00q{position:absolute;top:3rem;left:0;width:100%;height:calc(100vh - 3rem);flex-direction:column;align-items:center;justify-content:flex-start;background:hsla(200, 15%, 10%, .95);transition:all .3s ease-in-out;overflow-y:auto;z-index:9}.search-results.svelte-ngg00q .label.svelte-ngg00q{position:sticky;top:0;width:100%;background:var(--darken-dark);font-size:1.25rem}.search-results.svelte-ngg00q .label span.svelte-ngg00q{display:block;padding:.5rem 4rem}.search-results.svelte-ngg00q li.svelte-ngg00q{margin:1rem;padding:1rem 2rem;background:var(--darken-dark);display:flex;align-items:flex-start;gap:1rem;border-radius:1rem;transition:all .2s ease-in-out}.search-results.svelte-ngg00q li.svelte-ngg00q:hover{background:var(--reset-dark)}.search-results.svelte-ngg00q .icon.svelte-ngg00q{width:5rem;height:auto;margin-right:1rem;border-radius:.5rem}@media only screen and (max-width: 768px){input.svelte-ngg00q.svelte-ngg00q{width:100%;font-size:1.25rem}.search-results.svelte-ngg00q.svelte-ngg00q{top:3rem;font-size:.8rem}.search-results.svelte-ngg00q li.svelte-ngg00q{margin:1rem 0;padding:1rem}.search-results.svelte-ngg00q .icon.svelte-ngg00q{width:4rem;margin-right:.5rem}}",
  map: null
};
const Searchbar = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  const stripHTML = (str) => {
    if (str === null || str === "")
      return false;
    else
      str = str.toString();
    return str.replace(/(<([^>]+)>)/ig, "");
  };
  let searchTerm = "";
  $$result.css.add(css$5);
  import_data_fbba73f1.p.filter((post) => {
    return stripHTML(post.content).toLowerCase().includes(searchTerm.toLowerCase()) || post.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return `${$$result.head += `${``}`, ""}

<input type="${"text"}" placeholder="${"Search all articles..."}" class="${"svelte-ngg00q"}"${(0, import_index_b7314c68.a)("value", searchTerm, 0)}>

${``}`;
});
var Support_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "a.svelte-bqf9ky{margin:2rem;padding:1rem 2rem;display:grid;place-content:center;background:linear-gradient(135deg, var(--primary-accent), var(--secondary-accent));border-radius:1rem;text-shadow:0 0 .25rem var(--darken-dark)}a.svelte-bqf9ky:hover{border:0}.button-wrap.svelte-bqf9ky{display:flex;align-items:center}svg.svelte-bqf9ky{margin-right:.5rem}",
  map: null
};
const Support = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<a href="${"https://ko-fi.com/nullcano"}" target="${"_blank"}" class="${"svelte-bqf9ky"}"><div class="${"button-wrap svelte-bqf9ky"}"><svg width="${"24"}" height="${"24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-bqf9ky"}"><path fill="${"currentcolor"}" d="${"M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"}"></path></svg>
    <span>Ko-fi</span></div>
</a>`;
});
var Sidebar_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "aside.svelte-13rbydd.svelte-13rbydd{position:relative;width:250px;height:calc(100vh - 3rem);background:var(--darken-dark);overflow-x:hidden;overflow-y:auto;z-index:5}h3.svelte-13rbydd.svelte-13rbydd{font-size:1.25rem}.inner.svelte-13rbydd.svelte-13rbydd{position:relative;display:flex;flex-direction:column}aside.svelte-13rbydd .title.svelte-13rbydd{padding:1rem;display:flex;justify-content:space-between;align-items:center}.label.svelte-13rbydd.svelte-13rbydd{width:100%;display:flex;align-items:center;overflow:hidden}.label.svelte-13rbydd span.svelte-13rbydd{margin-left:.5rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}ul.svelte-13rbydd.svelte-13rbydd{width:100%;display:flex;flex-direction:column}ul.svelte-13rbydd li.svelte-13rbydd{margin:.75rem;display:grid;grid-template-columns:2rem 1fr 4rem;grid-template-rows:1fr}li.svelte-13rbydd .left span.svelte-13rbydd{width:auto;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}li.svelte-13rbydd img.svelte-13rbydd,li.svelte-13rbydd svg.svelte-13rbydd{display:block;width:1.5rem;height:1.5rem;margin-right:1rem;border-radius:50%;border:2px solid hsl(0, 0%, 10%)}li.svelte-13rbydd .right svg.svelte-13rbydd{margin-right:.5rem;width:1rem;height:1rem}a.svelte-13rbydd.svelte-13rbydd{color:hsl(0, 0%, 70%);text-decoration:none;border:0}a.svelte-13rbydd.svelte-13rbydd:hover{color:hsl(0, 0%, 80%)}@media only screen and (max-width: 768px){aside.svelte-13rbydd.svelte-13rbydd{position:fixed;top:3rem;right:0;height:calc(100vh - 3rem)}}",
  map: null
};
const Sidebar = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  let leagueoflegendsPosts = import_data_fbba73f1.p.filter((post) => post.category.includes("League of Legends"));
  let minecraftPosts = import_data_fbba73f1.p.filter((post) => post.category.includes("Minecraft"));
  let { show = false } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  $$result.css.add(css$3);
  return `

${show ? `<aside class="${"svelte-13rbydd"}"><div class="${"inner svelte-13rbydd"}"><div class="${"title svelte-13rbydd"}"><h3 class="${"label svelte-13rbydd"}">Articles</h3></div>
      <ul class="${"svelte-13rbydd"}"><a href="${"/all"}" class="${"svelte-13rbydd"}"><li class="${"svelte-13rbydd"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 58 58"}" style="${"enable-background:new 0 0 58 58"}" xml:space="${"preserve"}" class="${"svelte-13rbydd"}"><path style="${"fill:#0e3260"}" d="${"M28.792 35.406c5.327 0 9.771-3.744 10.797-8.768H18a11.012 11.012 0 0 0 10.792 8.768zM28.792 51.362c5.327 0 9.771-3.744 10.797-8.768H18a11.012 11.012 0 0 0 10.792 8.768z"}"></path><path style="${"fill:#13649b"}" d="${"M1 12.044v15.045l56-.022V12L44 0H14L1 12z"}"></path><path style="${"fill:#209aed"}" d="${"M38.797 12.012C37.866 16.571 33.833 20 29 20c-4.826 0-8.853-3.452-9.792-8l-18.17.012A.038.038 0 0 0 1 12.05v15.039l56-.022V12.038a.038.038 0 0 0-.038-.038l-18.165.012z"}"></path><path style="${"fill:#1081e0"}" d="${"M38.797 27.012C37.866 31.571 33.833 35 29 35c-4.826 0-8.853-3.419-9.792-7.968L1 27.044V43h56V27l-18.203.012z"}"></path><path style="${"fill:#0f71d3"}" d="${"M38.797 43c-.931 4.558-4.964 8-9.797 8-4.826 0-8.853-3.452-9.792-8H1v15l56-.022V43H38.797z"}"></path></svg>
            <div class="${"label svelte-13rbydd"}"><span class="${"svelte-13rbydd"}">All articles</span></div>
            <div class="${"label svelte-13rbydd"}"><svg width="${"24"}" height="${"24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-13rbydd"}"><path fill="${"currentcolor"}" d="${"M20 17a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13a2 2 0 0 0 2 2h15c1.654 0 3-1.346 3-3V7h-2v10zM12 7h3v2h-3V7zm0 4h3v2h-3v-2zM5 7h5v6H5V7zm0 10v-2h10v2H5z"}"></path></svg>
              <span class="${"svelte-13rbydd"}">${(0, import_index_b7314c68.e)(import_data_fbba73f1.p.length)}</span></div></li></a></ul>
      <div class="${"title label svelte-13rbydd"}"><h3 class="${"svelte-13rbydd"}">Topics</h3></div>
      <ul class="${"svelte-13rbydd"}"><a href="${"/league-of-legends"}" class="${"svelte-13rbydd"}"><li class="${"svelte-13rbydd"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"league svelte-13rbydd"}" width="${"30"}" height="${"32"}" viewBox="${"0 0 30 32"}" fill="${"none"}"><g><path d="${"M1.80644 9.75049C0.655032 11.8373 0 14.2271 0 16.7683C0 19.3095 0.655032 21.7015 1.80644 23.7883V9.75049Z"}" fill="${"#C28F2C"}"></path><path d="${"M15 2.02222C13.7829 2.02222 12.602 2.16921 11.4688 2.43647V4.75718C12.5907 4.44093 13.7738 4.26721 15 4.26721C22.0218 4.26721 27.7153 9.84627 27.7153 16.7305C27.7153 19.8307 26.5571 22.6659 24.6464 24.8463L24.2838 26.118L23.4814 28.9331C27.4184 26.2761 30.0023 21.8195 30.0023 16.7705C30 8.62355 23.2843 2.02222 15 2.02222Z"}" fill="${"#C28F2C"}"></path><path d="${"M11.4688 24.4209H22.9737H23.2253C25.1723 22.4209 26.3713 19.7126 26.3713 16.7305C26.3713 10.5746 21.2806 5.58569 15 5.58569C13.767 5.58569 12.5816 5.78168 11.4688 6.1358V24.4209Z"}" fill="${"#C28F2C"}"></path><path d="${"M10.1088 0H1.55029L3.16634 3.29844V28.7038L1.55029 32H21.1922L22.9737 25.7572H10.1088V0Z"}" fill="${"#C28F2C"}"></path></g></svg>
            <div class="${"label svelte-13rbydd"}"><span class="${"svelte-13rbydd"}">League of Legends</span></div>
            <div class="${"label svelte-13rbydd"}"><svg width="${"24"}" height="${"24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-13rbydd"}"><path fill="${"currentcolor"}" d="${"M20 17a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13a2 2 0 0 0 2 2h15c1.654 0 3-1.346 3-3V7h-2v10zM12 7h3v2h-3V7zm0 4h3v2h-3v-2zM5 7h5v6H5V7zm0 10v-2h10v2H5z"}"></path></svg>
              <span class="${"svelte-13rbydd"}">${(0, import_index_b7314c68.e)(leagueoflegendsPosts.length)}</span></div></li></a>
        <a href="${"/minecraft"}" class="${"svelte-13rbydd"}"><li class="${"svelte-13rbydd"}"><img src="${"../assets/topics/minecraft.webp"}" alt="${"Minecraft Logo"}" class="${"svelte-13rbydd"}">
            <div class="${"label svelte-13rbydd"}"><span class="${"svelte-13rbydd"}">Minecraft</span></div>
            <div class="${"label svelte-13rbydd"}"><svg width="${"24"}" height="${"24"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-13rbydd"}"><path fill="${"currentcolor"}" d="${"M20 17a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13a2 2 0 0 0 2 2h15c1.654 0 3-1.346 3-3V7h-2v10zM12 7h3v2h-3V7zm0 4h3v2h-3v-2zM5 7h5v6H5V7zm0 10v-2h10v2H5z"}"></path></svg>
              <span class="${"svelte-13rbydd"}">${(0, import_index_b7314c68.e)(minecraftPosts.length)}</span></div></li></a></ul>
      ${(0, import_index_b7314c68.v)(Support, "Support").$$render($$result, {}, {}, {})}</div></aside>` : ``}`;
});
var Page_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-tz5zsu{position:relative}",
  map: null
};
const Page = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"container svelte-tz5zsu"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
var Animation_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-1q0oxpf.svelte-1q0oxpf{position:absolute;top:0;width:100%;height:33.333vh;overflow:hidden;opacity:.1}section.svelte-1q0oxpf img.svelte-1q0oxpf{position:absolute;width:100%;height:auto;top:0;left:0}section.svelte-1q0oxpf.svelte-1q0oxpf:after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(to bottom, hsla(200, 15%, 8%, 0) 0%, hsla(200, 15%, 8%, 1) 100%)}",
  map: null
};
const Animation = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="${"animation svelte-1q0oxpf"}"><img src="${"../animation.webp"}" alt="${"Nullcano library animation"}" class="${"svelte-1q0oxpf"}">
</section>`;
});
const Disclaimer = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  return `<small>All trademarks and copyrights on this page are owned by their respective parties.</small>`;
});
const Footer = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  return `<span><a href="${"/"}">Nullcano</a> \xA9 ${(0, import_index_b7314c68.e)(new Date().getFullYear())} \u2014 <a href="${"/about"}">About</a></span>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1nb8zkg.svelte-1nb8zkg{position:relative;width:100%;height:100vh;display:grid;grid-template-columns:1fr;grid-template-rows:3rem 1fr;grid-column-gap:0px;grid-row-gap:0px}button.svelte-1nb8zkg.svelte-1nb8zkg{width:3rem;height:3rem;background:var(--darken-dark);border:none;outline:none;color:hsl(200, 15%, 80%);cursor:pointer}button.svelte-1nb8zkg svg.svelte-1nb8zkg{position:relative;width:2rem;height:2rem;fill:url(#a)}button.svelte-1nb8zkg svg.svelte-1nb8zkg:hover{fill:var(--secondary-accent)}.wrapper.svelte-1nb8zkg.svelte-1nb8zkg{display:grid;grid-template-columns:1fr auto;grid-template-rows:1fr;grid-column-gap:0px;grid-row-gap:0px}header.svelte-1nb8zkg.svelte-1nb8zkg{width:100%;height:3rem;display:grid;grid-template-columns:auto 1fr auto}section.page.svelte-1nb8zkg.svelte-1nb8zkg{position:relative;max-height:calc(100vh - 3.5rem);overflow-y:auto}footer.svelte-1nb8zkg.svelte-1nb8zkg{padding:2rem 1rem}footer.svelte-1nb8zkg .inner.svelte-1nb8zkg{margin:0 auto;width:95%;display:flex;justify-content:space-between;align-items:center}@media only screen and (max-width: 768px){.wrapper.svelte-1nb8zkg.svelte-1nb8zkg{height:calc(100vh - 3rem);display:grid;grid-template-columns:1fr;grid-template-rows:1fr auto;grid-column-gap:0px;grid-row-gap:0px}footer.svelte-1nb8zkg.svelte-1nb8zkg{padding:1rem .5rem}footer.svelte-1nb8zkg .inner.svelte-1nb8zkg{margin:0 auto;width:95%;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;gap:.5rem}}",
  map: null
};
const _layout = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  let sidebar_show = false;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `${$$result.title = `<title>Nullcano</title>`, ""}`, ""}

${(0, import_index_b7314c68.v)(LogoBackground, "LogoBackground").$$render($$result, {}, {}, {})}
<main class="${"svelte-1nb8zkg"}"><header class="${"svelte-1nb8zkg"}">${(0, import_index_b7314c68.v)(LogoIcon, "LogoIcon").$$render($$result, {}, {}, {})}
    ${(0, import_index_b7314c68.v)(Searchbar, "Searchbar").$$render($$result, {}, {}, {})}
    <button class="${"svelte-1nb8zkg"}">${!sidebar_show ? `<svg viewBox="${"0 0 384.97 384.97"}" xmlns="${"http://www.w3.org/2000/svg"}" style="${"enable-background:new 0 0 384.97 384.97"}" xml:space="${"preserve"}" class="${"svelte-1nb8zkg"}"><path d="${"M12.03 84.212h360.909c6.641 0 12.03-5.39 12.03-12.03 0-6.641-5.39-12.03-12.03-12.03H12.03C5.39 60.152 0 65.541 0 72.182c0 6.641 5.39 12.03 12.03 12.03zM372.939 180.455H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.03-12.03zM372.939 300.758H12.03c-6.641 0-12.03 5.39-12.03 12.03 0 6.641 5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03.001-6.641-5.389-12.03-12.03-12.03z"}"></path></svg>` : `<svg viewBox="${"0 0 48 48"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1nb8zkg"}"><path d="${"m8 8 32 32M8 40 40 8"}" stroke="${"url(#a)"}" stroke-width="${"4"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`}</button></header>
  <div class="${"wrapper svelte-1nb8zkg"}"><section class="${"page svelte-1nb8zkg"}">${(0, import_index_b7314c68.v)(Animation, "Animation").$$render($$result, {}, {}, {})}
      ${(0, import_index_b7314c68.v)(Page, "Page").$$render($$result, {}, {}, {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    })}
      <footer class="${"svelte-1nb8zkg"}"><div class="${"inner svelte-1nb8zkg"}">${(0, import_index_b7314c68.v)(Disclaimer, "Disclaimer").$$render($$result, {}, {}, {})}
          ${(0, import_index_b7314c68.v)(Footer, "Footer").$$render($$result, {}, {}, {})}</div></footer></section>
    <div class="${"navigation"}">${(0, import_index_b7314c68.v)(Sidebar, "Sidebar").$$render($$result, { show: sidebar_show }, {
      show: ($$value) => {
        sidebar_show = $$value;
        $$settled = false;
      }
    }, {})}</div></div>
</main>`;
  } while (!$$settled);
  return $$rendered;
});
module.exports = __toCommonJS(stdin_exports);
