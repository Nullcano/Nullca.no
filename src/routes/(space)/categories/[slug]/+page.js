import { posts } from '$lib/api';

export async function load({ params }) {
	return {
		posts: await posts.filter(p => p.category.toLowerCase() === params.slug),
		slug: await params.slug
	};
}