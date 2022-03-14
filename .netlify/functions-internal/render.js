const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["avatar.gif","dust-overlay.png","favicon.ico","heidal-sjoa.jpg","logo.webp","no-cover.webp","no-icon.webp","waves.webp"]),
	_: {
		mime: {".gif":"image/gif",".png":"image/png",".ico":"image/vnd.microsoft.icon",".jpg":"image/jpeg",".webp":"image/webp"},
		entry: {"file":"start-83ad8eda.js","js":["start-83ad8eda.js","chunks/vendor-8b2b82ac.js"],"css":["assets/vendor-c786f850.css"]},
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
				pattern: /^\/projects\/?$/,
				params: null,
				path: "/projects",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/journal\/?$/,
				params: null,
				path: "/journal",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/journal\/([^/]+?)\/?$/,
				params: (m) => ({ slug: m[1]}),
				path: null,
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				shadow: null,
				a: [0,6],
				b: [1]
			}
		]
	}
});
