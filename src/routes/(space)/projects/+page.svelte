<script>
	import * as config from '$lib/config'
	import AppFeed from '$lib/components/AppFeed.svelte'
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div class="h-100 pa3 br4 bg-near-black overflow-y-auto">
	<AppFeed />
</div>