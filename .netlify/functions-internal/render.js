const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["avatar.gif","favicon.ico","heidal-sjoa.jpg"]),
	_: {
		mime: {".gif":"image/gif",".ico":"image/vnd.microsoft.icon",".jpg":"image/jpeg"},
		entry: {"file":"start-5b498c57.js","js":["start-5b498c57.js","chunks/vendor-19f553c6.js"],"css":["assets/vendor-c786f850.css"]},
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
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "projects",
				pattern: /^\/projects\/?$/,
				params: null,
				path: "/projects",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				key: "journal",
				pattern: /^\/journal\/?$/,
				params: null,
				path: "/journal",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				key: "journal/[slug]",
				pattern: /^\/journal\/([^/]+?)\/?$/,
				params: (m) => ({ slug: m[1]}),
				path: null,
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				key: "about",
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
