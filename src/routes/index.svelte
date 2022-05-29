<script>
	import Profile from '$lib/Profile.svelte';
	import ProjectsRecent from '$lib/Projects/FeedRecent.svelte';
	import JournalRecent from '$lib/Journal/FeedRecent.svelte';
	import BlogRecent from '$lib/Blog/FeedRecent.svelte';
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
	<Profile />
</section>

<div class="contained">
	<section class="section">
		<div class="title">
			<h2>Experiments</h2>
		</div>
		<ProjectsRecent />
	</section>
	<section class="section">
		<div class="title">
			<h2>Academy Journal</h2>
		</div>
		<JournalRecent />
	</section>
	<section class="section">
		<div class="title">
			<h2>Recent Blog Articles</h2>
		</div>
		<BlogRecent />
	</section>	
</div>

<style>
	.contained {
		position: relative;
		top: -5rem;
	}
	.section {
		margin: 0 2rem;
	}
</style>