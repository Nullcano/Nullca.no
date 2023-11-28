<script>
	import ChatNav from '$lib/components/sidebar/ChatNav.svelte';
</script>

<div class="layout relative">
	<ChatNav />
	<div class="page">
		<slot></slot>
	</div>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1rem;
	}
	.page {
		height: calc(100vh - 5.5rem);
		overflow: hidden;
	}
</style>