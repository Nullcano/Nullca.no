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
		cursor: default;
	}

	h1 {
		margin: 0;
		font-size: 2rem;
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
	}

	@media (max-width: 768px) {
		.page-title {
			position: relative;
			margin: 0;
			cursor: default;
		}
		h1 {
			margin: 1rem;
			font-size: 1.5rem;
		}
	}
</style>
