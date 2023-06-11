import adapter from '@sveltejs/adapter-netlify';

const mdsvexOptions = {
	extensions: ['.svelte', '.md'],
}

const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter()
	}
};

export default config;
