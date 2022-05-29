<script context="module">
	import { data } from '../../data';
	export async function load({ params }) {
		const { slug } = params;
		return { props: { item: data.find((i) => i.slug === slug) } };
	}
</script>

<script>
	import { stripHTML } from '$lib/utils'
	import PostPage from '$lib/PostPage.svelte'
	export let item
</script>

<svelte:head>
	<title>{item.title} - Steffen Wold</title>
	<meta property="og:title" content="{item.title} - Steffen Wold" />
	<meta property="og:site_name" content="Steffen Wold" />
	<meta property="og:url" content="https://steffen.id/projects/{item.slug}" />
	<meta property="og:description" content={stripHTML(item.content[0])} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={item.cover} />
</svelte:head>

<PostPage {item} />
