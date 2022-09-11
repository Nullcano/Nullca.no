<script>
	import { goto } from '$app/navigation';
	import PageTitle from '$lib/PageTitle.svelte';
	import FeedAll from '$lib/Articles/FeedAll.svelte';
</script>

<svelte:head>
	<title>Articles \ Steffen Wold</title>
	<meta property="og:title" content="Articles \ Steffen Wold" />
	<meta property="og:site_name" content="Steffen Wold" />
	<meta property="og:url" content="https://steffen.id/articles" />
	<meta property="og:description" content="Articles." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<div class="page">
	<PageTitle title="Articles" />
	<FeedAll />
</div>

<div class="button cta" on:click={() => goto("/explore")}>
	<svg class="flip-x" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z" fill="currentColor" fill-rule="nonzero"/>
	</svg>
</div>