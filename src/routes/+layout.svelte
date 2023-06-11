<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<footer>
		<p>Nullcano is a designer and developer of all things digital.</p>
	</footer>	
</div>

<style>
	.app {
		margin: 0 auto;
		padding-inline: 2rem;
		width: 100%;
		max-width: 60em;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	footer {
		margin-block: 3rem;
		padding: 1rem;
		background: hsl(256, 25%, 16%);
		border-radius: 1rem;
	}
	@media screen and (max-width: 60em) {
		.app {
			padding-inline: 1rem
		}
	}
</style>
