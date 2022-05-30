<script>
	export let title;
</script>

<div class="page-title">
	<h1 class="title">
		{title}
	</h1>
</div>

<style>
	.page-title {
		position: relative;
		margin: 0 1.5rem;
		font-size: 1.5rem;
		color: transparent;
		-webkit-text-stroke: 1px var(--accent-color);
		font-family: 'Rammetto One', sans-serif;
		text-transform: uppercase;
		cursor: default;
	}

	h1 {
		margin: 0;
	}

	@media (max-width: 768px) {
		.page-title {
			font-size: 1rem;
			padding: 1rem;
			text-align: center;
		}
	}
</style>
