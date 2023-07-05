<script>
  import TopBar from '$lib/components/TopBar.svelte'
	import NavBar from '$lib/components/NavBar.svelte'
	import CtrlBar from '$lib/components/CtrlBar.svelte'
	import '../../app.css'
</script>

<div class="app flex min-vh-100">
	<NavBar />
	<TopBar />
	<main class="w-100 mw9 center">
		<slot></slot>
	</main>
	<CtrlBar/>
</div>

<style>
	.app {
		flex-direction: column;
		flex: 1 1 0%;
		display: flex;
		max-width: 100%;
	}
	main {
		padding: 8rem;
	}
</style>