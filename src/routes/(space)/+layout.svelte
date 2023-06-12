<script>
  import AsideNav from '$lib/components/AsideNav.svelte'
	import Search from '$lib/components/Search.svelte'
	import ProfileButton from '$lib/components/ProfileButton.svelte'
	import '../../app.css'
</script>

<div class="main-layout">
	<AsideNav />
	<div class="page-provider">
		<header class="top-bar">
			<Search />
			<ProfileButton />
		</header>
    <div class="contained">
      <slot></slot>
    </div>
	</div>
</div>

<style>
	.main-layout {
		margin: auto;
		width: 100%;
		max-width: 90em;
		height: 100vh;
		display: grid;
		grid-template-columns: 6rem 1fr;
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
		overflow: hidden;
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
  .contained {
    margin: 1.5rem auto;
    max-width: 60em;
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