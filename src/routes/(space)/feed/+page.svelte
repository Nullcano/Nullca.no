<script>
	import * as config from '$lib/config'
	import AppFeed from '$lib/components/AppFeed.svelte'
	import CategoryList from '$lib/components/CategoryList.svelte';
	import Divider from '$lib/components/Divider.svelte';
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<figure style="background-image: url('/images/holo-skeleton.png')">
		<h2>Continuously pushing boundaries and igniting creativity in digital design to ensure its vibrant existence...</h2>
	</figure>
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
	figure {
		position: relative;
		padding: 3rem;
		border-radius: 1.5rem;
		display: flex;
		align-items: center;
		background-position-y: -6rem;
		overflow: hidden;
		pointer-events: none;
	}
	h2 {
		position: relative;
		font-size: 1.5rem;
		max-width: 30ch;
	}
	@media only screen and (max-width: 60em) {
		section {
			grid-template-columns: auto;
			grid-template-rows: auto auto;
			gap: 1rem;
		}
	}
</style>