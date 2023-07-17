<script>
	import * as config from '$lib/config'
	import AppFeed from '$lib/components/AppFeed.svelte'
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<h1 class="display fw4">Projects</h1>

<div class="pa3 br4 ba b--dark-gray overflow-hidden">
	<AppFeed />
</div>