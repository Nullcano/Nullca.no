<script>
  import AsideNav from '$lib/components/AsideNav.svelte'
	import '../../app.css'
</script>

<div class="main-layout">
	<AsideNav />
	<div class="page-provider">
		<slot></slot>
	</div>
</div>

<style>
	.main-layout {
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: 6rem 1fr;
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		overflow: hidden;
	}
	.page-provider {
		grid-area: 2 / 2 / 3 / 3;
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
		border-left: 1px solid rgba(255,255,255,.1);
	}
</style>