import { posts, categories } from '$lib/api';

export async function load({ params }) {
  const category = categories.find(cat => cat.name.toLowerCase() === params.slug);
  const name = category ? category.name : null;
  const desc = category ? category.desc : null;

  const filteredPosts = posts.filter(post => post.category.name.toLowerCase() === params.slug);

  return {
    posts: filteredPosts,
    name: name || null,
    desc: desc || null,
    slug: params.slug
  };
}
