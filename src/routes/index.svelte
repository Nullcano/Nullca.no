<script>
	import ProjectsFeed from '$lib/Projects/FeedRecent.svelte';
	import JournalFeed from '$lib/Journal/FeedRecent.svelte';
</script>

<svelte:head>
	<title>Steffen Wold</title>
	<meta property="og:title" content="Steffen Wold" />
	<meta property="og:site_name" content="Steffen Wold" />
	<meta property="og:url" content="https://steffen.id" />
	<meta property="og:description" content="Steffen Wold's personal website." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<section>
	<div class="title">
		<h2>Workstation</h2>
	</div>
	<ProjectsFeed />
</section>

<section>
	<div class="title">
		<h2>Academy Journal</h2>
	</div>
	<JournalFeed />
</section>
