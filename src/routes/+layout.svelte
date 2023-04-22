<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		margin: 0 auto;
		padding: 1rem;
		width: 100%;
		max-width: 60em;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	main {
		padding: 1rem;
	}
</style>
