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
  p: () => posts
});
const posts = [
  {
    slug: "plotz",
    title: "Plotz",
    date: "2011-05-01",
    category: "Minecraft",
    image: "https://www.plotz.co.uk/plotzhtml5/menu/minecraft-sphere-generator.jpg",
    tags: ["models", "voxel", "shapes", "3d"],
    content: `
      <p><a href="https://plotz.co.uk" target="_blank">Plotz</a> is the classic free HTML5 modeller for Minecraft. Generate spheres, ellipsoids, torus and more in your web browser.</p>
    `
  },
  {
    slug: "optifine",
    title: "Optifine",
    date: "2012-01-01",
    category: "Minecraft",
    image: "https://optifine.net/images/of16r.png",
    tags: ["mods", "optimization", "performance", "minecraft"],
    content: `
      <p><a href="https://optifine.net" target="_blank">Optifine</a> is a mod for Minecraft that improves the performance of Minecraft by improving the graphics and performance of the game.</p>
    `
  },
  {
    slug: "namemc",
    title: "NameMC",
    date: "2015-02-01",
    category: "Minecraft",
    image: "https://static.namemc.com/i/favicon-192.png",
    tags: ["mods", "optimization", "performance", "minecraft"],
    content: `
      <p><a href="https://namemc.com" target="_blank">NameMC</a> lets you check the availability of Minecraft names, look up the name history of Minecraft accounts, view Minecraft skins in 3D, convert UUIDs, and much more! Check out our collection of the best Minecraft skins for PC and Mobile! Download the skin that suits you best!</p>
    `
  },
  {
    slug: "vanilla-tweaks",
    title: "Vanilla Tweaks",
    date: "2018-05-01",
    category: "Minecraft",
    image: "https://vanillatweaks.net/assets/images/logo.png",
    tags: ["vanilla", "tweaks", "vanillatweaks", "vanilla tweaks", "minecraft", "texture pack", "minecraft 1.14", "vanilla tweaks 1.13", "vanilla tweaks 1.14", "vanilla tweaks 1.15", "vanilla tweaks 1.16", "vanilla tweaks download", "vanilla tweaks minecraft download", "vanilla tweaks minecraft 1.12 download", "vanilla tweaks minecraft", "vanilla tweaks 1.14", "vanilla tweaks 1.12 download", "vanilla tweaks 1.12.1", "minecraft vanilla tweaks 1.13"],
    content: `
      <p><a href="https://vanillatweaks.net" target="_blank">Vanilla Tweaks</a> help you tweak parts of vanilla Minecraft through resource packs, data packs, and crafting tweaks.</p>
    `
  },
  {
    slug: "block-palettes",
    title: "Block Palettes",
    date: "2020-10-01",
    category: "Minecraft",
    image: "https://www.blockpalettes.com/img/favicon.png",
    tags: ["block", "palette", "editor"],
    content: `
      <p><a href="https://www.blockpalettes.com" target="_blank">Block Palettes</a> lets you find eye pleasing palettes to build with as well as create a place to connect with submitting your own palettes and monthly building contest!</p>
    `
  }
];
module.exports = __toCommonJS(stdin_exports);
