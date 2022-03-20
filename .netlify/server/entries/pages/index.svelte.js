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
var import_Profile_8cdc8bef = require("../../chunks/Profile-8cdc8bef.js");
var Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-16hge5h.svelte-16hge5h{width:100%;display:flex;flex-direction:column}.title.svelte-16hge5h.svelte-16hge5h{width:100%;height:16vw}.title.svelte-16hge5h svg.svelte-16hge5h{width:100%;height:100%;transform:translate3d(0px, 0px, 0px)}svg.svelte-16hge5h text.svelte-16hge5h{position:relative;stroke:hsl(160, 25%, 75%);stroke-width:3;font-family:'Krona One', sans-serif;animation:svelte-16hge5h-text 3s linear forwards;pointer-events:none;user-select:none}@keyframes svelte-16hge5h-text{0%{stroke-dasharray:0 50%;stroke-dashoffset:30%;fill:transparent}50%{stroke-dasharray:25% 25%;stroke-dashoffset:0%;fill:transparent}100%{stroke-dasharray:50% 0;stroke-dashoffset:-30%;fill:hsl(160, 25%, 75%)}}",
  map: null
};
const Header = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="${"svelte-16hge5h"}"><div class="${"title svelte-16hge5h"}"><svg width="${"1200"}" height="${"300"}" viewBox="${"0 0 1200 350"}" class="${"svelte-16hge5h"}"><text fill="${"transparent"}" x="${"600"}" y="${"310"}" font-size="${"330"}" text-anchor="${"middle"}" class="${"svelte-16hge5h"}">STEFFEN
      </text></svg></div>
</header>`;
});
var Marquee_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".marquee-container.svelte-xy1rj0.svelte-xy1rj0{display:flex;width:100%;overflow-x:hidden;flex-direction:row;position:relative}.marquee-container.svelte-xy1rj0:hover .marquee.svelte-xy1rj0{animation-play-state:var(--pause-on-hover)}.marquee-container.svelte-xy1rj0:active .marquee.svelte-xy1rj0{animation-play-state:var(--pause-on-click)}.marquee.svelte-xy1rj0.svelte-xy1rj0{flex:0 0 auto;min-width:100%;z-index:1;display:flex;flex-direction:row;align-items:center;animation:svelte-xy1rj0-scroll var(--duration) linear 0s infinite;animation-play-state:var(--play);animation-direction:normal;animation-direction:var(--direction)}@keyframes svelte-xy1rj0-scroll{0%{transform:translateX(0%)}100%{transform:translateX(-100%)}}",
  map: null
};
const Marquee = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  let duration;
  let _style;
  let _marqueeStyle;
  let { pauseOnHover = false } = $$props;
  let { pauseOnClick = false } = $$props;
  let { direction = "left" } = $$props;
  let { speed = 100 } = $$props;
  let { play = true } = $$props;
  let containerWidth;
  if ($$props.pauseOnHover === void 0 && $$bindings.pauseOnHover && pauseOnHover !== void 0)
    $$bindings.pauseOnHover(pauseOnHover);
  if ($$props.pauseOnClick === void 0 && $$bindings.pauseOnClick && pauseOnClick !== void 0)
    $$bindings.pauseOnClick(pauseOnClick);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  if ($$props.speed === void 0 && $$bindings.speed && speed !== void 0)
    $$bindings.speed(speed);
  if ($$props.play === void 0 && $$bindings.play && play !== void 0)
    $$bindings.play(play);
  $$result.css.add(css$1);
  duration = containerWidth / speed;
  _style = `
		--pause-on-hover: ${pauseOnHover ? "paused" : "running"};
		--pause-on-click: ${pauseOnClick ? "paused" : "running"};
	`;
  _marqueeStyle = `
		--play: ${play ? "running" : "paused"};
		--direction: ${direction === "left" ? "normal" : "reverse"};
		--duration: ${duration}s;
	`;
  return `<div class="${"marquee-container svelte-xy1rj0"}"${(0, import_index_b7314c68.a)("style", _style, 0)}><div class="${"marquee svelte-xy1rj0"}"${(0, import_index_b7314c68.a)("style", _marqueeStyle, 0)}>${slots.default ? slots.default({}) : ``}</div>
	<div class="${"marquee svelte-xy1rj0"}"${(0, import_index_b7314c68.a)("style", _marqueeStyle, 0)}>${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
var JournalScroll_svelte_svelte_type_style_lang = "";
const css = {
  code: ".row.svelte-ygpq0j.svelte-ygpq0j{width:100%;padding:1rem 0;display:flex;flex-direction:row;justify-content:flex-start;align-self:center;flex-wrap:nowrap;flex-flow:row wrap;gap:1rem;color:hsl(160, 25%, 75%);background:hsl(160, 25%, 5%);border:2px solid hsl(160, 25%, 25%);border-radius:1rem}.journal.svelte-ygpq0j.svelte-ygpq0j{font-size:2.5rem;font-family:'Righteous', sans-serif;text-transform:uppercase}.row.svelte-ygpq0j img.svelte-ygpq0j{height:2rem;opacity:.8}.row.svelte-ygpq0j svg.svelte-ygpq0j{height:2rem;fill:currentColor}@media(max-width: 768px){.row.svelte-ygpq0j.svelte-ygpq0j{gap:.5rem}.journal.svelte-ygpq0j.svelte-ygpq0j{font-size:1.25rem}.row.svelte-ygpq0j img.svelte-ygpq0j{height:1rem;opacity:.8}.row.svelte-ygpq0j svg.svelte-ygpq0j{height:1rem;fill:currentColor}.not-mobile.svelte-ygpq0j.svelte-ygpq0j{display:none}}",
  map: null
};
const JournalScroll = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<a href="${"./journal"}"><div class="${"row journal svelte-ygpq0j"}">${(0, import_index_b7314c68.v)(Marquee, "Marquee").$$render($$result, {}, {}, {
    default: () => {
      return `<img src="${"https://www.ikomm.no/wp-content/uploads/2019/09/MicrosoftTeams-image-11-e1638183518928.png"}" alt="${"IKOMM"}" class="${"svelte-ygpq0j"}">
      <span>Academy</span>
      <svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" class="${"svelte-ygpq0j"}"><path d="${"M15.09 12.79a1 1 0 0 0-.086-1.638L15 5.33 14 6v5.15a1.001 1.001 0 0 0-.092 1.629l-.378.502a2.48 2.48 0 0 0-.53 1.498v1.222H13.815a.88.88 0 0 0 .853-.664l.331-1.336v2h1v-1.21a2.486 2.486 0 0 0-.534-1.505zM8 0 0 4l8 5 8-5-8-4z"}"></path><path d="${"M8 10 3 6.67v1.71C3 9.29 5.94 12 8 12s5-2.71 5-3.62V6.67z"}"></path></svg>
      <span>Journal</span>
      <svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 489.6 489.6"}" class="${"svelte-ygpq0j"}"><path d="${"M64.75 82.1h56.8c5.4 0 10.1-4.3 10.1-10.1 0-5.4-4.3-10.1-10.1-10.1h-56.8c-5.4 0-10.1 4.3-10.1 10.1 0 5.4 4.7 10.1 10.1 10.1zM64.75 182.4h56.8c5.4 0 10.1-4.3 10.1-10.1 0-5.4-4.3-10.1-10.1-10.1h-56.8c-5.4 0-10.1 4.3-10.1 10.1 0 5.4 4.7 10.1 10.1 10.1zM64.75 327.8h56.8c5.4 0 10.1-4.3 10.1-10.1 0-5.4-4.3-10.1-10.1-10.1h-56.8c-5.4 0-10.1 4.3-10.1 10.1 0 5.5 4.7 10.1 10.1 10.1zM131.25 418.1c0-5.4-4.3-10.1-10.1-10.1h-56.4c-5.4 0-10.1 4.3-10.1 10.1 0 5.4 4.3 10.1 10.1 10.1h56.8c5.5-.4 9.7-4.7 9.7-10.1z"}"></path><path d="${"M93.15 0v42h28.4c16.3 0 29.9 13.2 29.9 29.9s-13.2 29.9-29.9 29.9h-28.4v40.4h28.4c16.3 0 29.9 13.2 29.9 29.9s-13.6 29.9-29.9 29.9h-28.4v85.6h28.4c16.3 0 29.9 13.2 29.9 29.9 0 16.3-13.2 29.9-29.9 29.9h-28.4v40.4h28.4c16.3 0 29.9 13.2 29.9 29.9 0 16.3-13.2 29.9-29.9 29.9h-28.4v42h341.8V0H93.15z"}"></path></svg>
      <img src="${"https://www.ikomm.no/wp-content/uploads/2019/09/MicrosoftTeams-image-11-e1638183518928.png"}" alt="${"IKOMM"}" class="${"svelte-ygpq0j"}">
      <span>Academy</span>
      <svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}" class="${"svelte-ygpq0j"}"><path d="${"M15.09 12.79a1 1 0 0 0-.086-1.638L15 5.33 14 6v5.15a1.001 1.001 0 0 0-.092 1.629l-.378.502a2.48 2.48 0 0 0-.53 1.498v1.222H13.815a.88.88 0 0 0 .853-.664l.331-1.336v2h1v-1.21a2.486 2.486 0 0 0-.534-1.505zM8 0 0 4l8 5 8-5-8-4z"}"></path><path d="${"M8 10 3 6.67v1.71C3 9.29 5.94 12 8 12s5-2.71 5-3.62V6.67z"}"></path></svg>
      <span>Journal</span>
      <svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 489.6 489.6"}" class="${"svelte-ygpq0j"}"><path d="${"M64.75 82.1h56.8c5.4 0 10.1-4.3 10.1-10.1 0-5.4-4.3-10.1-10.1-10.1h-56.8c-5.4 0-10.1 4.3-10.1 10.1 0 5.4 4.7 10.1 10.1 10.1zM64.75 182.4h56.8c5.4 0 10.1-4.3 10.1-10.1 0-5.4-4.3-10.1-10.1-10.1h-56.8c-5.4 0-10.1 4.3-10.1 10.1 0 5.4 4.7 10.1 10.1 10.1zM64.75 327.8h56.8c5.4 0 10.1-4.3 10.1-10.1 0-5.4-4.3-10.1-10.1-10.1h-56.8c-5.4 0-10.1 4.3-10.1 10.1 0 5.5 4.7 10.1 10.1 10.1zM131.25 418.1c0-5.4-4.3-10.1-10.1-10.1h-56.4c-5.4 0-10.1 4.3-10.1 10.1 0 5.4 4.3 10.1 10.1 10.1h56.8c5.5-.4 9.7-4.7 9.7-10.1z"}"></path><path d="${"M93.15 0v42h28.4c16.3 0 29.9 13.2 29.9 29.9s-13.2 29.9-29.9 29.9h-28.4v40.4h28.4c16.3 0 29.9 13.2 29.9 29.9s-13.6 29.9-29.9 29.9h-28.4v85.6h28.4c16.3 0 29.9 13.2 29.9 29.9 0 16.3-13.2 29.9-29.9 29.9h-28.4v40.4h28.4c16.3 0 29.9 13.2 29.9 29.9 0 16.3-13.2 29.9-29.9 29.9h-28.4v42h341.8V0H93.15z"}"></path></svg>
      <img class="${"not-mobile svelte-ygpq0j"}" src="${"https://www.ikomm.no/wp-content/uploads/2019/09/MicrosoftTeams-image-11-e1638183518928.png"}" alt="${"IKOMM"}">
      <span class="${"not-mobile svelte-ygpq0j"}">Academy</span>
      <svg class="${"not-mobile svelte-ygpq0j"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 16 16"}"><path d="${"M15.09 12.79a1 1 0 0 0-.086-1.638L15 5.33 14 6v5.15a1.001 1.001 0 0 0-.092 1.629l-.378.502a2.48 2.48 0 0 0-.53 1.498v1.222H13.815a.88.88 0 0 0 .853-.664l.331-1.336v2h1v-1.21a2.486 2.486 0 0 0-.534-1.505zM8 0 0 4l8 5 8-5-8-4z"}"></path><path d="${"M8 10 3 6.67v1.71C3 9.29 5.94 12 8 12s5-2.71 5-3.62V6.67z"}"></path></svg>
      <span class="${"not-mobile svelte-ygpq0j"}">Journal</span>
      <svg class="${"not-mobile svelte-ygpq0j"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 489.6 489.6"}"><path d="${"M64.75 82.1h56.8c5.4 0 10.1-4.3 10.1-10.1 0-5.4-4.3-10.1-10.1-10.1h-56.8c-5.4 0-10.1 4.3-10.1 10.1 0 5.4 4.7 10.1 10.1 10.1zM64.75 182.4h56.8c5.4 0 10.1-4.3 10.1-10.1 0-5.4-4.3-10.1-10.1-10.1h-56.8c-5.4 0-10.1 4.3-10.1 10.1 0 5.4 4.7 10.1 10.1 10.1zM64.75 327.8h56.8c5.4 0 10.1-4.3 10.1-10.1 0-5.4-4.3-10.1-10.1-10.1h-56.8c-5.4 0-10.1 4.3-10.1 10.1 0 5.5 4.7 10.1 10.1 10.1zM131.25 418.1c0-5.4-4.3-10.1-10.1-10.1h-56.4c-5.4 0-10.1 4.3-10.1 10.1 0 5.4 4.3 10.1 10.1 10.1h56.8c5.5-.4 9.7-4.7 9.7-10.1z"}"></path><path d="${"M93.15 0v42h28.4c16.3 0 29.9 13.2 29.9 29.9s-13.2 29.9-29.9 29.9h-28.4v40.4h28.4c16.3 0 29.9 13.2 29.9 29.9s-13.6 29.9-29.9 29.9h-28.4v85.6h28.4c16.3 0 29.9 13.2 29.9 29.9 0 16.3-13.2 29.9-29.9 29.9h-28.4v40.4h28.4c16.3 0 29.9 13.2 29.9 29.9 0 16.3-13.2 29.9-29.9 29.9h-28.4v42h341.8V0H93.15z"}"></path></svg>`;
    }
  })}</div>
</a>`;
});
const Routes = (0, import_index_b7314c68.c)(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Steffen Wold</title>`, ""}<meta property="${"og:title"}" content="${"Steffen Wold"}" data-svelte="svelte-1nqg7sh"><meta property="${"og:site_name"}" content="${"Steffen Wold"}" data-svelte="svelte-1nqg7sh"><meta property="${"og:url"}" content="${"https://steffen.id"}" data-svelte="svelte-1nqg7sh"><meta property="${"og:description"}" content="${"Steffen Wold's personal website."}" data-svelte="svelte-1nqg7sh"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-1nqg7sh"><meta property="${"og:image"}" content="${""}" data-svelte="svelte-1nqg7sh">`, ""}

${(0, import_index_b7314c68.v)(Header, "Header").$$render($$result, {}, {}, {})}
${(0, import_index_b7314c68.v)(JournalScroll, "JournalScroll").$$render($$result, {}, {}, {})}
${(0, import_index_b7314c68.v)(import_Profile_8cdc8bef.P, "Profile").$$render($$result, {}, {}, {})}`;
});
module.exports = __toCommonJS(stdin_exports);
