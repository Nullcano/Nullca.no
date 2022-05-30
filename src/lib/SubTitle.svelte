<script>
	export let subtitle;
</script>

<div class="subtitle">
	<h3 class="title">
		{subtitle}
	</h3>
</div>

<style>
	.subtitle {
		position: relative;
		padding: 1.5rem;
		font-size: 1.5rem;
		color: #fff;
		text-transform: uppercase;
		cursor: default;
	}

	h3 {
		margin: 0;
	}

	@media (max-width: 768px) {
		.subtitle {
			font-size: 1rem;
			padding: 1rem;
		}
	}
</style>
