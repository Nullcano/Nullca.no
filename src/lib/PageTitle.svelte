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
		background-image: linear-gradient(
			135deg,
			hsl(50, 55%, 40%),
			hsl(50, 55%, 80%),
			hsl(50, 55%, 40%)
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-family: 'HypatiaSansPro', sans-serif;
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
		}
	}
</style>
