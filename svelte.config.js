import adapter from '@sveltejs/adapter-netlify';

const mdsvexOptions = {
	extensions: ['.svelte', '.md'],
	remarkPlugins: [remarkUnwrapImages, remarkToc],
	rehypePlugins: [rehypeSlug]
}

const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
};

export default config;
