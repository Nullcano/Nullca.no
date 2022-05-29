<div class="items-grid">
	<slot />
</div>

<style>
	.items-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		grid-template-rows: auto;
		grid-column-start: 1;
		grid-row-start: 1;
		gap: 1rem;
	}
</style>
