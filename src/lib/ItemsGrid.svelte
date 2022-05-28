<div class="items-grid">
	<slot />
</div>

<style>
	.items-grid {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-template-rows: auto;
		gap: 1rem;
	}
</style>
