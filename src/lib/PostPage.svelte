<script>
	import PageTitle from '$lib/PageTitle.svelte';
	import Time from 'svelte-time';
	import { slugify } from '$lib/utils';
	export let item;
	let y;
</script>

<svelte:window bind:scrollY={y} />

<article class="contained item-page">
	<div class="content">
		<PageTitle title={item.title} />
		<div class="date-info">
			<span class="date">&circleddash; Published <Time relative timestamp={item.date} /></span>
		</div>
		{#each item.content as p}
		<p>{@html p}</p>
		{/each}
	</div>
	{#if (item.fileType)}
		<div class="cover" style="background-image: url('../thumb/{item.slug}.{item.fileType}')"></div>
	{/if}
</article>
<div class="h1"></div>

<style>
	article {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto;
		gap: 2.5rem;
	}
	.content {
		position: relative;
		display: flex;
		flex-direction: column;
	}
	.date-info {
		margin: 0 0 2.5rem 0;
	}
	p {
		margin-bottom: .5rem;
	}
	.cover {
		width: 100%;
		height: 100%;
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		overflow: hidden;
	}

	@media screen and (max-width: 60em) {
		article {
			display: flex;
			flex-direction: column;
		}
		.cover {
			height: 25rem;
		}
	}
</style>
