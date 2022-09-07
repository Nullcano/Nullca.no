<script>
	import '../styles/sweet.css';
	import '../styles/global.css';
	import AsideLeft from '$lib/AsideLeft.svelte';
</script>

<main>
	<AsideLeft />
	<slot />
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 5rem 1fr;
	}
	main:before, main:after {
		content: '';
		position: fixed;
		top: 0;
		width: 1px;
		height: 100vh;
		background: rgba(255,255,255,.1);
		z-index: -1;
	}
	main:before {
		left: 5rem;
	}
	main:after {
		right: 5rem;
	}
</style>