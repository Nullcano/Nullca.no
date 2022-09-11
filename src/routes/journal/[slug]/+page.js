import { data } from '$lib/data';

export async function load({ params }) {
  const { slug } = params;
  return { item: data.find((i) => i.slug === slug) };
}