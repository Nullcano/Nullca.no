<script>
  import AsideNav from '$lib/components/AsideNav.svelte'
	import '../../app.css'
</script>

<div class="main-layout vw-100 vh-100 overflow-hidden">
	<AsideNav />
	<div class="page-provider vh-100">
		<slot></slot>
	</div>
</div>

<style>
	.main-layout {
		display: grid;
		grid-template-columns: 6rem 1fr;
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
	.page-provider {
		overflow-x: hidden;
		overflow-y: auto;
		border-left: 1px solid rgba(255,255,255,.1);
	}
	@media screen and (max-width: 60em) {
		.main-layout {
			grid-template-columns: 1fr;
			grid-template-rows: 6rem 1fr;
		}
	}
</style>