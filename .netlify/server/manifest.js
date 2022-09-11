var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["avatar.gif", "favicon.ico", "fonts/Chakra_Petch/ChakraPetch-Bold.ttf", "fonts/Chakra_Petch/ChakraPetch-BoldItalic.ttf", "fonts/Chakra_Petch/ChakraPetch-Italic.ttf", "fonts/Chakra_Petch/ChakraPetch-Light.ttf", "fonts/Chakra_Petch/ChakraPetch-LightItalic.ttf", "fonts/Chakra_Petch/ChakraPetch-Medium.ttf", "fonts/Chakra_Petch/ChakraPetch-MediumItalic.ttf", "fonts/Chakra_Petch/ChakraPetch-Regular.ttf", "fonts/Chakra_Petch/ChakraPetch-SemiBold.ttf", "fonts/Chakra_Petch/ChakraPetch-SemiBoldItalic.ttf", "fonts/Chakra_Petch/OFL.txt", "fonts/Rajdhani/OFL.txt", "fonts/Rajdhani/Rajdhani-Bold.ttf", "fonts/Rajdhani/Rajdhani-Light.ttf", "fonts/Rajdhani/Rajdhani-Medium.ttf", "fonts/Rajdhani/Rajdhani-Regular.ttf", "fonts/Rajdhani/Rajdhani-SemiBold.ttf", "ground.gif", "images/a-photo-of-a-cyborg-in-a-norwegian-landscape.webp", "thumb/citizens.png", "thumb/coding-garden.jpg", "thumb/eighth-weekly-update.jpg", "thumb/eleventh-weekly-update.jpg", "thumb/fe-lines-of-code.png", "thumb/fifth-weekly-update.jpg", "thumb/first-weekly-update.jpg", "thumb/fourth-weekly-update.jpg", "thumb/git-api.jpg", "thumb/lets-try-blogging.gif", "thumb/meet-greet-tour.jpg", "thumb/ninth-weekly-update.jpg", "thumb/no-code-journal-writing.jpg", "thumb/operator.png", "thumb/second-weekly-update.jpg", "thumb/seventh-weekly-update.jpg", "thumb/sixth-weekly-update.jpg", "thumb/sodia.webp", "thumb/standup-setup.jpg", "thumb/steffen-id.jpg", "thumb/tenth-weekly-update.jpg", "thumb/third-weekly-update.jpg", "thumb/thirteenth-weekly-update.jpg", "thumb/twelfth-weekly-update.jpg", "thumb/using-old-tools.webp", "thumb/volunta-case-study.png"]),
  mimeTypes: { ".gif": "image/gif", ".ico": "image/vnd.microsoft.icon", ".ttf": "font/ttf", ".txt": "text/plain", ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg" },
  _: {
    entry: { "file": "_app/immutable/start-a0b48c8a.js", "imports": ["_app/immutable/start-a0b48c8a.js", "_app/immutable/chunks/index-e2becc2d.js", "_app/immutable/chunks/singletons-a1c1708b.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/6.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/7.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/8.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/9.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/10.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/11.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/12.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/13.js")))
    ],
    routes: [
      {
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 3 },
        endpoint: null
      },
      {
        id: "articles",
        pattern: /^\/articles\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 4 },
        endpoint: null
      },
      {
        id: "concepts",
        pattern: /^\/concepts\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 6 },
        endpoint: null
      },
      {
        id: "explore",
        pattern: /^\/explore\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 8 },
        endpoint: null
      },
      {
        id: "journal",
        pattern: /^\/journal\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 9 },
        endpoint: null
      },
      {
        id: "projects",
        pattern: /^\/projects\/?$/,
        names: [],
        types: [],
        page: { layouts: [0], errors: [1], leaf: 11 },
        endpoint: null
      },
      {
        id: "sweet",
        pattern: /^\/sweet\/?$/,
        names: [],
        types: [],
        page: { layouts: [0, 2], errors: [1, ,], leaf: 13 },
        endpoint: null
      },
      {
        id: "articles/[slug]",
        pattern: /^\/articles\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        page: { layouts: [0], errors: [1], leaf: 5 },
        endpoint: null
      },
      {
        id: "concepts/[slug]",
        pattern: /^\/concepts\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        page: { layouts: [0], errors: [1], leaf: 7 },
        endpoint: null
      },
      {
        id: "journal/[slug]",
        pattern: /^\/journal\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        page: { layouts: [0], errors: [1], leaf: 10 },
        endpoint: null
      },
      {
        id: "projects/[slug]",
        pattern: /^\/projects\/([^/]+?)\/?$/,
        names: ["slug"],
        types: [null],
        page: { layouts: [0], errors: [1], leaf: 12 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
