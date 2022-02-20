const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-ed1b8997.js","js":["start-ed1b8997.js","chunks/vendor-3745afc3.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js'))
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
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/p\.json$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/p/index.json.js'))
			},
			{
				type: 'page',
				pattern: /^\/p\/?$/,
				params: null,
				path: "/p",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/p\/([^/]+?)\.json$/,
				params: (m) => ({ slug: m[1]}),
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/p/_slug_.json.js'))
			},
			{
				type: 'page',
				pattern: /^\/p\/([^/]+?)\/?$/,
				params: (m) => ({ slug: m[1]}),
				path: null,
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/t\/minecraft\/?$/,
				params: null,
				path: "/t/minecraft",
				shadow: null,
				a: [0,6],
				b: [1]
			}
		]
	}
});
