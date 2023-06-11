import { posts } from '$lib/api';

export async function load({ params }) {
	return {
		posts: await posts.filter(p => p.tags && p.tags.some(t => t === params.slug)),
		slug: await params.slug
	};
}