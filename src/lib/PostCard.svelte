<script>
	import Time from 'svelte-time';
	import { stripHTML } from '$lib/utils';
	export let item;
</script>

<a href={`/${item.type}/${item.slug}`} class="post-card-link">
	<article class="post-card">
		<figure
			class="post-card-thumb"
			style="background-image: url('../thumb/{item.slug}.{item.fileType}')"
		/>
		<div class="post-card-content">
			<h2 class="post-card-title">
				{item.title}
			</h2>
			<p class="post-card-description">
				{stripHTML(item.content[0])}
			</p>
			<div class="post-card-time">
				Posted <Time timestamp={item.date} />
			</div>
		</div>
	</article>
</a>

<style>
	.post-card-link {
		padding: 1rem;
		border-radius: 1.5rem;
		background: hsl(260, 8%, 12%);
		transition: all 0.25s linear;
		color: hsl(260, 8%, 60%);
	}
	.post-card-link:hover {
		background: linear-gradient(135deg, hsl(260, 8%, 12%), hsl(260, 8%, 16%));
		color: hsl(260, 8%, 80%);
	}
	.post-card {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	.post-card-thumb {
		margin: 0;
		padding-bottom: 75%;
		position: relative;
		width: 100%;
		height: 0;
		border-radius: 1rem;
		background-position: center;
		background-size: cover;
		filter: hue-rotate(190deg);
		opacity: 0.5;
		overflow: hidden;
		transition: all 0.25s linear;
	}
	.post-card-link:hover .post-card-thumb {
		transform: scale(1.05);
		filter: hue-rotate(0);
	}
	.post-card-link:hover .post-card-content {
		transform: translateY(-0.5rem);
	}
	.post-card-title {
		margin: 0;
		padding: 0;
		font-size: 1rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.post-card-content {
		font-size: 0.8rem;
		transition: all 0.25s linear;
	}
	.post-card-time {
		margin-bottom: 0.5rem;
	}

	.post-card-description {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		line-height: 1.5;
		overflow: hidden;
	}
	@media (max-width: 768px) {
	}
</style>
