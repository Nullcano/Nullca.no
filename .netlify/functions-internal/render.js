const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["animation.webp","assets/thumbs/block-palettes.png","assets/thumbs/digminecraft.png","assets/thumbs/forge-mod-loader.png","assets/thumbs/minecraft-skin-stealer.png","assets/thumbs/minecraft-tools.png","assets/thumbs/namemc.png","assets/thumbs/op-gg.png","assets/thumbs/optifine.png","assets/thumbs/plotz.png","assets/thumbs/vanilla-tweaks.png","assets/topics/minecraft.webp","favicon.ico","intro-logo.webp","logo.webp"]),
	_: {
		mime: {".webp":"image/webp",".png":"image/png",".ico":"image/vnd.microsoft.icon"},
		entry: {"file":"start-e8d3c176.js","js":["start-e8d3c176.js","chunks/vendor-fa02d1b2.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/sitemap\.xml$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/sitemap.xml.js'))
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/wiki\/?$/,
				params: null,
				path: "/wiki",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/wiki\/minecraft\/?$/,
				params: null,
				path: "/wiki/minecraft",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/all\/?$/,
				params: null,
				path: "/all",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/([^/]+?)\/?$/,
				params: (m) => ({ category: m[1]}),
				path: null,
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/([^/]+?)\/([^/]+?)\.json$/,
				params: (m) => ({ category: m[1], slug: m[2]}),
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/_category_/_slug_.json.js'))
			},
			{
				type: 'page',
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: (m) => ({ category: m[1], slug: m[2]}),
				path: null,
				shadow: null,
				a: [0,8],
				b: [1]
			}
		]
	}
});
