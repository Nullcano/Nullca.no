<script>
	import PageTitle from '$lib/PageTitle.svelte';
	import FeedAll from '$lib/Projects/FeedAll.svelte';
</script>

<svelte:head>
	<title>Projects - Steffen Wold</title>
	<meta property="og:title" content="Projects - Steffen Wold" />
	<meta property="og:site_name" content="Steffen Wold" />
	<meta property="og:url" content="https://steffen.id/projects" />
	<meta property="og:description" content="A portfolio of experiments with frontend apps, artwork and more." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<div class="contained">
	<PageTitle title="Projects" />
	<FeedAll />
</div>