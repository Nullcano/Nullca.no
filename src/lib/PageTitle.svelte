<script>
	export let title;
</script>

<div class="page-title">
	<svg viewBox="0 0 44 32">
		<polygon points="2,2 42,2 22,30" />
		SVG:404
	</svg>
	<div class="heading featured">
		{title}
	</div>
</div>

<style>
	.page-title {
		position: relative;
		margin-bottom: 2.5rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.page-title svg {
		margin-bottom: 1rem;
		width: 1.5rem;
		stroke: currentColor;
		stroke-width: 4;
		fill: none;
	}
	.heading {
		display: flex;
		flex-direction: column;
		font-size: 3rem;
	}

	@media (max-width: 60rem) {
		.heading {
			font-size: 1.5rem;
		}
	}
</style>
