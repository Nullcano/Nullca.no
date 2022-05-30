<script>
	import PageTitle from '$lib/PageTitle.svelte';
	import SubTitle from '$lib/SubTitle.svelte';
	import FeedAll from '$lib/Blog/FeedAll.svelte';
</script>

<svelte:head>
	<title>Blog - Steffen Wold</title>
	<meta property="og:title" content="Blog - Steffen Wold" />
	<meta property="og:site_name" content="Steffen Wold" />
	<meta property="og:url" content="https://steffen.id/blog" />
	<meta property="og:description" content="Arbitrary articles from my point of interest." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<div class="contained">
	<PageTitle title="Blog" />
	<SubTitle subtitle="Arbitrary articles from my own point of interest" />
	<FeedAll />
</div>
