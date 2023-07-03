<script>
  import AsideNav from '$lib/components/AsideNav.svelte'
	import Search from '$lib/components/Search.svelte'
	import ProfileButton from '$lib/components/ProfileButton.svelte'
	import '../../app.css'
</script>

<div class="main-layout w-100 mw9 vh-100 center">
	<AsideNav />
	<div class="page-provider">
		<header class="top-bar">
			<Search />
			<ProfileButton />
		</header>
    <div class="ma4 mw8 center">
      <slot></slot>
    </div>
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
	header {
		position: sticky;
		top: 0;
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
		gap: 1.5rem;
		z-index: 9;
	}
	.page-provider {
		padding: 1.5rem;
		height: 100vh;
		overflow-x: hidden;
		overflow-y: auto;
		border-left: 1px solid rgba(255,255,255,.1);
	}
	@media screen and (max-width: 60em) {
		.main-layout {
			margin: auto;
			width: 100%;
			max-width: 90em;
			height: 100vh;
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 6rem 1fr;
			grid-column-gap: 0px;
			grid-row-gap: 0px;
			overflow: hidden;
		}
	}
</style>