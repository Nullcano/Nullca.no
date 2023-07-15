<script>
	import * as config from '$lib/config'
	import AppFeed from '$lib/components/AppFeed.svelte'
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<h1 class="display fw4">Projects</h1>

<div class="pa4 br4 bg-dark-20">
	<AppFeed />
</div>