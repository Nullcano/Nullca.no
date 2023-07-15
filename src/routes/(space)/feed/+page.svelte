<script>
	import * as config from '$lib/config'
	import AppFeed from '$lib/components/AppFeed.svelte'
	import CategoryList from '$lib/components/CategoryList.svelte'
	import Divider from '$lib/components/Divider.svelte'
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<CategoryList />
<div class="mt3">
	<Divider />
</div>
<AppFeed />