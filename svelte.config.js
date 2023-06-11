import adapter from '@sveltejs/adapter-netlify';

const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;
