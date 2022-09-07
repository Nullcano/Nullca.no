<script>
	import PageTitle from '$lib/PageTitle.svelte';
	import Time from 'svelte-time';
	import { slugify } from '$lib/utils';
	export let item;
	let y;
</script>

<svelte:window bind:scrollY={y} />

<article class="contained item-page">
	<div class="cover" style="background-image: url('../thumb/{item.slug}.{item.fileType}')"></div>
	<div class="content">
		<h1>{item.title}</h1>
		<div class="date-info">
			<span class="date">Posted <Time relative timestamp={item.date} /></span>
		</div>
		{#each item.content as p}
		<p>{@html p}</p>
		{/each}
		<div class="back">
			<a href="/">Return</a>
		</div>
	</div>
</article>

<style>
	.back {
		margin-top: 2rem;
	}
	.content {
		position: relative;
		padding: .5rem 1rem;
		display: flex;
		flex-direction: column;
	}
	.date-info {
		position: absolute;
		top: 0;
		right: 0;
		margin-top: 1rem;
	}
	p {
		margin-bottom: .5rem;
	}
	h1 {
		position: relative;
		margin: 1rem 0;
		font-size: 2rem;
	}
	.cover {
		padding-bottom: 50%;
		width: 100%;
		height: 0;
		background-position: center;
		background-size: contain;
		overflow: hidden;
	}

	@media screen and (max-width: 60em) {
		p {
			order: 1;
		}
		.date-info {
			position: relative;
			order: 2;
		}
		.back {
			order: 3;
		}
		.item-page {
			margin: 0 auto;
		}
	}
</style>
