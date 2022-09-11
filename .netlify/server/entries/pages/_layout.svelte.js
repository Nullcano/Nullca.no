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
  default: () => Layout
});
module.exports = __toCommonJS(stdin_exports);
var import_chunks = require("../../chunks/index.js");
const sweet = "";
const fonts = "";
const global = "";
const AnimatedEmblem_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".emblem.svelte-53y5vr{width:3rem;display:block;stroke-width:2}.triangle-stroke.svelte-53y5vr{fill:transparent;stroke:white;transform:scale(0);animation:svelte-53y5vr-grow .5s linear forwards;animation-delay:.75s}.triangle-fill.svelte-53y5vr{fill:white;stroke:transparent;transform:scale(0);animation:svelte-53y5vr-grow .5s linear forwards;animation-delay:1s}.triangle-stroke.svelte-53y5vr:first-child{animation:svelte-53y5vr-grow .5s linear forwards;animation-delay:.5s}@keyframes svelte-53y5vr-grow{to{transform:scale(1)}}",
  map: null
};
const AnimatedEmblem = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<svg class="${"emblem svelte-53y5vr"}" viewBox="${"0 0 44 32"}"><polygon points="${"2,2 42,2 22,30"}" class="${"triangle-stroke svelte-53y5vr"}"></polygon><polygon points="${"10,6 34,6 22,23"}" class="${"triangle-stroke svelte-53y5vr"}"></polygon><polygon points="${"16,9 28,9 22,17"}" class="${"triangle-fill svelte-53y5vr"}"></polygon>
    SVG:404
</svg>`;
});
const Logo_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".logo.svelte-oq6kwe{display:grid;grid-template-columns:3rem 1fr;align-items:center;gap:.5rem;pointer-events:none;overflow:hidden}.text.svelte-oq6kwe{display:flex;align-items:flex-start;gap:.5rem;text-transform:uppercase;transform:translateX(-20vw);animation:svelte-oq6kwe-appear .5s linear forwards;animation-delay:.25s;line-height:1.25}.name.svelte-oq6kwe{font-size:1.5rem;font-weight:700}.id.svelte-oq6kwe{font-size:1.25rem;color:rgba(255,255,255,.5);border-bottom:1px solid rgba(255,255,255,.5)}@keyframes svelte-oq6kwe-appear{to{transform:translateX(0)}}@media screen and (max-width: 30em){.text.svelte-oq6kwe{display:none}}",
  map: null
};
const Logo = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"logo svelte-oq6kwe"}">${(0, import_chunks.v)(AnimatedEmblem, "AnimatedEmblem").$$render($$result, {}, {}, {})}
  <div class="${"text svelte-oq6kwe"}"><strong class="${"name svelte-oq6kwe"}">Steffen</strong>
    <span class="${"id svelte-oq6kwe"}">ID</span></div>
</div>`;
});
const Emblem_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".emblem.svelte-1610u0{width:3rem;display:block;stroke-width:2}.triangle-stroke.svelte-1610u0{fill:transparent;stroke:white}.triangle-fill.svelte-1610u0{fill:white;stroke:transparent}",
  map: null
};
const Emblem = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<svg class="${"emblem svelte-1610u0"}" viewBox="${"0 0 44 32"}"><polygon points="${"2,2 42,2 22,30"}" class="${"triangle-stroke svelte-1610u0"}"></polygon><polygon points="${"10,6 34,6 22,23"}" class="${"triangle-stroke svelte-1610u0"}"></polygon><polygon points="${"16,9 28,9 22,17"}" class="${"triangle-fill svelte-1610u0"}"></polygon>
    SVG:404
</svg>`;
});
const FullscreenNavigation_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".fullscreen-nav.svelte-1ml8xqu.svelte-1ml8xqu{position:fixed;top:0;left:0;padding:5rem;width:100vw;height:100vh;background-color:var(--darkest);z-index:90}.fullscreen-nav.svelte-1ml8xqu nav.svelte-1ml8xqu{display:flex;flex-direction:column;align-items:flex-start;gap:2rem}.nav-link.svelte-1ml8xqu.svelte-1ml8xqu{font-size:2.5rem}@media screen and (max-width: 30em){.fullscreen-nav.svelte-1ml8xqu.svelte-1ml8xqu{padding:2.5rem}}",
  map: null
};
const FullscreenNavigation = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="${"fullscreen-nav svelte-1ml8xqu"}"><a href="${"/"}">${(0, import_chunks.v)(Emblem, "Emblem").$$render($$result, {}, {}, {})}</a>
  <div class="${"h1"}"></div>
  <nav class="${"featured svelte-1ml8xqu"}"><a href="${"/explore"}"><div class="${"nav-link svelte-1ml8xqu"}">Explore</div></a>
    <a href="${"https://github.com/Nullcano"}" target="${"blank"}"><div class="${"nav-link svelte-1ml8xqu"}">github</div></a>
    <a href="${"mailto:woldsteffen@gmail.com"}"><div class="${"nav-link svelte-1ml8xqu"}">contact</div></a></nav>
</section>`;
});
const ToggleFullscreenNavigation = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { showFullscreenNav } = $$props;
  if ($$props.showFullscreenNav === void 0 && $$bindings.showFullscreenNav && showFullscreenNav !== void 0)
    $$bindings.showFullscreenNav(showFullscreenNav);
  return `<div class="${"button"}">${showFullscreenNav ? `<svg viewBox="${"0 0 17 17"}" xmlns="${"http://www.w3.org/2000/svg"}"><path fill="${"currentColor"}" d="${"m9.207 8.5 6.646 6.646-.707.707L8.5 9.207l-6.646 6.646-.707-.707L7.793 8.5 1.146 1.854l.707-.707L8.5 7.793l6.646-6.646.707.707L9.207 8.5z"}"></path></svg>` : `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 384.97 384.97"}" style="${"enable-background:new 0 0 384.97 384.97"}" xml:space="${"preserve"}"><path d="${"M12.03 84.212h360.909c6.641 0 12.03-5.39 12.03-12.03 0-6.641-5.39-12.03-12.03-12.03H12.03C5.39 60.152 0 65.541 0 72.182c0 6.641 5.39 12.03 12.03 12.03zM372.939 180.455H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.03-12.03zM372.939 300.758H12.03c-6.641 0-12.03 5.39-12.03 12.03 0 6.641 5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03.001-6.641-5.389-12.03-12.03-12.03z"}"></path></svg>`}</div>`;
});
const OverlayNavigation_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".top-left.svelte-1rfbm6j{position:fixed;top:2.5rem;left:2.5rem}.top-right.svelte-1rfbm6j{position:fixed;top:2.5rem;right:2.5rem}",
  map: null
};
const OverlayNavigation = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  let { showFullscreenNav } = $$props;
  if ($$props.showFullscreenNav === void 0 && $$bindings.showFullscreenNav && showFullscreenNav !== void 0)
    $$bindings.showFullscreenNav(showFullscreenNav);
  $$result.css.add(css$1);
  return `<a class="${"top-left svelte-1rfbm6j"}" href="${"/"}">${(0, import_chunks.v)(Logo, "Logo").$$render($$result, {}, {}, {})}</a>

<div class="${"top-right svelte-1rfbm6j"}">${(0, import_chunks.v)(ToggleFullscreenNavigation, "ToggleFullscreenNavigation").$$render($$result, {}, {}, {})}</div>

${showFullscreenNav ? `${(0, import_chunks.v)(FullscreenNavigation, "FullscreenNavigation").$$render($$result, {}, {}, {})}` : ``}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".diagonal-lines.svelte-1vfe0f6{position:fixed;width:20rem;height:2.5rem;top:2.5rem;left:50%;margin-left:-10rem;background-size:.75rem .75rem;background-image:repeating-linear-gradient(to right, rgba(255,255,255,.1), rgba(255,255,255,.1) 2px, transparent 2px, transparent);transform:skew(45deg)}main.svelte-1vfe0f6{margin:0 10rem;padding-top:10rem}@media screen and (max-width: 90em){main.svelte-1vfe0f6{margin:0 5rem}}@media screen and (max-width: 60em){main.svelte-1vfe0f6{margin:0 2.5rem}}@media screen and (max-width: 30em){main.svelte-1vfe0f6{margin:0 1rem}}",
  map: null
};
const Layout = (0, import_chunks.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"diagonal-lines svelte-1vfe0f6"}"></div>
<main class="${"svelte-1vfe0f6"}">${slots.default ? slots.default({}) : ``}</main>
${(0, import_chunks.v)(OverlayNavigation, "OverlayNavigation").$$render($$result, {}, {}, {})}`;
});
