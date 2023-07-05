<script>
	import * as config from '$lib/config'
	import AppFeed from '$lib/components/AppFeed.svelte'
	import CategoryList from '$lib/components/CategoryList.svelte'
	import Divider from '$lib/components/Divider.svelte'
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<CategoryList />
	<Divider />
	<AppFeed />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	@media only screen and (max-width: 60em) {
		section {
			grid-template-columns: auto;
			grid-template-rows: auto auto;
			gap: 1rem;
		}
	}
</style>