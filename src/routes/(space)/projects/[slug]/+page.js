import { posts } from '$lib/api';

export async function load({ params }) {
	return {
		post: await posts.find((p) => p.slug == params.slug)
	};
}