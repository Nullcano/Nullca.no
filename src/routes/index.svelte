<script>
	import About from '$lib/About.svelte';
	import ContextBar from '$lib/ContextBar.svelte';
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

<ContextBar showClose={false}>
	<div class="filler"></div>
	<span>Welcome</span>
</ContextBar>

<About />
