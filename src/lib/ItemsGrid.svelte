<div class="items-grid">
	<slot />
</div>

<style>
	.items-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		grid-template-rows: auto;
		gap: 1rem;
	}
</style>
