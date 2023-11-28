<script>
	import AppMenu from '$lib/components/topbar/AppMenu.svelte'
	import '../../app.css'
</script>

<div class="layout relative">
	<AppMenu />
	<main>
		<slot></slot>
	</main>
</div>

<style>
	.layout {
		padding: .5rem;
		display: grid;
		grid-template-rows: auto 1fr;
		gap: .5rem;
	}
	main {
		height: calc(100vh - 5.5rem);
		overflow: hidden;
	}
</style>