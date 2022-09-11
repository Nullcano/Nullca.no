<div class="items-grid">
	<div class="inner">
		<slot />
	</div>
</div>

<style>
	.inner {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		grid-template-rows: auto;
		gap: 1rem;
	}
</style>
