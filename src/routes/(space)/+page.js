import { posts } from '$lib/api';

export async function load() {
	return {
		posts: await posts.filter(post => post.type === "Project")
	};
}