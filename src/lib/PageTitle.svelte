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
		margin: 2rem;
		font-size: 2rem;
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
