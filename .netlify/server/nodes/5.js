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
  shared: () => shared,
  stylesheets: () => stylesheets
});
module.exports = __toCommonJS(stdin_exports);
var shared = __toESM(require("../entries/pages/articles/_slug_/_page.js"));
const index = 5;
const component = async () => (await Promise.resolve().then(() => __toESM(require("../entries/pages/articles/_slug_/_page.svelte.js")))).default;
const file = "_app/immutable/components/pages/articles/_slug_/_page.svelte-d777104e.js";
const imports = ["_app/immutable/components/pages/articles/_slug_/_page.svelte-d777104e.js", "_app/immutable/chunks/index-e2becc2d.js", "_app/immutable/chunks/navigation-731b22b2.js", "_app/immutable/chunks/singletons-a1c1708b.js", "_app/immutable/chunks/PostPage-266fb67e.js", "_app/immutable/chunks/PageTitle-0990701a.js", "_app/immutable/chunks/Time-759d754f.js", "_app/immutable/modules/pages/articles/_slug_/_page.js-fc21bf6b.js", "_app/immutable/chunks/data-f7bd4d59.js", "_app/immutable/chunks/_page-12c2bf9e.js"];
const stylesheets = ["_app/immutable/assets/PostPage-8971c007.css", "_app/immutable/assets/PageTitle-75dd3c01.css"];
