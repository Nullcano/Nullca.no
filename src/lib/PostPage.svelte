<script>
	import PageTitle from '$lib/PageTitle.svelte';
	import Time from 'svelte-time';
	import { slugify } from '$lib/utils';
	export let item;
	let y;
</script>

<svelte:window bind:scrollY={y} />

<article class="contained item-page">
	<div class="body">
		<div class="cover" style="background-image: url('../thumb/{item.slug}.{item.fileType}')"></div>
		<div class="title">
			<PageTitle title={item.title} />
			<div class="date-info">
				<span class="date">Posted <Time relative timestamp={item.date} /></span>
			</div>
		</div>
		{#each item.content as p}
		<p>{@html p}</p>
		{/each}
	</div>
	<a href="/{item.type}">
		<div class="back">← Back to {item.type}</div>
	</a>
</article>

<style>
	.back {
		padding: 2rem;
		font-size: 1.5rem;
	}
	.item-page {
		position: relative;
		display: flex;
		flex-direction: column;
	}
	.title {
		position: relative;
		margin-top: -5rem;
	}
	.date-info {
		position: relative;
		margin: 0 2rem;
	}
	.body {
		margin: 0 auto;
		padding: 1rem;
		width: 700px;
		max-width: 100%;
		background: hsl(260, 8%, 8%);
		border-radius: 1rem;
	}
	p {
		font-size: 1.5rem;
		line-height: 1.5;
		margin-bottom: 1rem;
		color: var(--reset-light);
	}
	.title {
		position: relative;
		text-transform: uppercase;
	}
	.cover {
		padding-bottom: 50%;
		width: 100%;
		height: 0;
		background-position: center;
		background-size: cover;
		border-radius: 1rem;
		overflow: hidden;
	}
	.cover::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 50%;
		background: linear-gradient(to bottom, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.75));
	}

	@media (max-width: 768px) {
		.cover {
			width: 100%;
		}
		.cover::before {
			display: none;
		}
		.title {
			margin-top: 0;
		}
		p {
			font-size: 1.25rem;
		}
		.date-info {
			margin: 0 1rem;
			font-size: .8rem;
		}
	}
</style>
