<script>
	import Time from 'svelte-time';
	import { stripHTML, slugify, idfy } from '$lib/utils';
	export let item;
</script>

<article class="post-card">
	<div class="post-id">
		<span>{idfy(item.id)}</span>
	</div>
	<figure class="post-card__thumbnail">
		<a href={`/journal/${item.slug}`} class="post-card__link">
			<img src="/thumb/{item.slug}.jpg" alt={item.title} />
		</a>
	</figure>
	<div class="post-card__content">
		<div class="post-card__time">
			Posted <Time timestamp={item.date} />
		</div>
		<h2 class="post-card__title">
			<a href={`/journal/${item.slug}`} class="post-card__link">
				{item.title}
			</a>
		</h2>
		<p class="post-card__description">
			{stripHTML(item.content[0])}
		</p>
	</div>
</article>

<style>
	.post-card {
		position: relative;
		padding: 2rem 1rem;
		display: grid;
		grid-template-columns: 3rem 20rem 1fr;
		grid-template-rows: auto;
		grid-column-gap: 1.5rem;
		border-bottom: 1px solid #000;
	}
	.post-card:last-child {
		margin-bottom: 4rem;
		border: 0;
	}
	.post-card__thumbnail {
		margin: 0;
		padding: 0;
		position: relative;
		width: 100%;
		height: 10rem;
		border-radius: 1rem;
		overflow: hidden;
	}
	.post-card__thumbnail img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.2s ease-in-out;
		filter: grayscale(1);
		opacity: 0.5;
	}
	.post-card:hover .post-card__thumbnail img {
		transform: scale(1.25) rotate(5deg);
	}
	.post-card__content {
		padding: 1rem;
	}
	.post-card__time {
		margin-bottom: 0.5rem;
	}
	.post-card__title {
		margin-bottom: 0.5rem;
	}
	.post-card__description {
		margin-bottom: 1rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		line-height: 1.5;
		overflow: hidden;
	}
	@media (max-width: 768px) {
		.post-card {
			padding: 1rem 0;
			grid-template-columns: 1fr;
		}
		.post-card__thumbnail {
			order: -1;
		}
		.post-id {
			position: absolute;
			top: 13rem;
		}
		.post-card__content {
			margin-top: 2rem;
			margin-left: 2rem;
			padding: 0 1rem;
		}
		.post-card__time {
			margin-bottom: 0.5rem;
		}
		.post-card__title {
			margin-bottom: 0.5rem;
		}
		.post-card__description {
			margin-bottom: 1rem;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 3;
			line-height: 1.5;
			overflow: hidden;
		}
	}
</style>
