var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["animation.webp", "assets/thumbs/block-palettes.png", "assets/thumbs/digminecraft.png", "assets/thumbs/forge-mod-loader.png", "assets/thumbs/minecraft-skin-stealer.png", "assets/thumbs/minecraft-tools.png", "assets/thumbs/namemc.png", "assets/thumbs/op-gg.png", "assets/thumbs/optifine.png", "assets/thumbs/plotz.png", "assets/thumbs/vanilla-tweaks.png", "assets/topics/minecraft.webp", "favicon.ico", "intro-logo.webp", "logo.webp"]),
  _: {
    mime: { ".webp": "image/webp", ".png": "image/png", ".ico": "image/vnd.microsoft.icon" },
    entry: { "file": "start-7279919e.js", "js": ["start-7279919e.js", "chunks/vendor-4e70ec7c.js"], "css": ["assets/vendor-b92e0941.css"] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js")))
    ],
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: null,
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "endpoint",
        pattern: /^\/sitemap\.xml$/,
        params: null,
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/sitemap.xml.js")))
      },
      {
        type: "page",
        pattern: /^\/about\/?$/,
        params: null,
        path: "/about",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/wiki\/?$/,
        params: null,
        path: "/wiki",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/wiki\/minecraft\/?$/,
        params: null,
        path: "/wiki/minecraft",
        shadow: null,
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/all\/?$/,
        params: null,
        path: "/all",
        shadow: null,
        a: [0, 6],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/([^/]+?)\/?$/,
        params: (m) => ({ category: m[1] }),
        path: null,
        shadow: null,
        a: [0, 7],
        b: [1]
      },
      {
        type: "endpoint",
        pattern: /^\/([^/]+?)\/([^/]+?)\.json$/,
        params: (m) => ({ category: m[1], slug: m[2] }),
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/_category_/_slug_.json.js")))
      },
      {
        type: "page",
        pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
        params: (m) => ({ category: m[1], slug: m[2] }),
        path: null,
        shadow: null,
        a: [0, 8],
        b: [1]
      }
    ]
  }
};
module.exports = __toCommonJS(stdin_exports);
