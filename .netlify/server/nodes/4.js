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
  component: () => component,
  file: () => file,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
module.exports = __toCommonJS(stdin_exports);
const index = 4;
const component = async () => (await Promise.resolve().then(() => __toESM(require("../entries/pages/articles/_page.svelte.js")))).default;
const file = "_app/immutable/components/pages/articles/_page.svelte-a0d9663c.js";
const imports = ["_app/immutable/components/pages/articles/_page.svelte-a0d9663c.js", "_app/immutable/chunks/index-e2becc2d.js", "_app/immutable/chunks/navigation-09f98d3f.js", "_app/immutable/chunks/singletons-9617b6de.js", "_app/immutable/chunks/PageTitle-0990701a.js", "_app/immutable/chunks/data-f7bd4d59.js", "_app/immutable/chunks/PostCard-d0bd805a.js", "_app/immutable/chunks/Time-759d754f.js"];
const stylesheets = ["_app/immutable/assets/PageTitle-75dd3c01.css", "_app/immutable/assets/PostCard-3f3af2bb.css"];
