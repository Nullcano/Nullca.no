<script>
  import Logo from '$lib/components/Logo.svelte'
  import MainNavbar from '$lib/components/MainNavbar.svelte'
  import AppNavbar from '$lib/components/AppNavbar.svelte'
</script>

<aside class="navbar-provider">
  <a class="logo-provider" href="/feed">
    <Logo />
  </a>
  <MainNavbar />
  <AppNavbar />
</aside>

<style>
  .navbar-provider {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		grid-area: 1 / 1 / 3 / 2; 
		gap: 1rem;
	}
	.logo-provider {
		margin: 1rem;
		width: 3rem;
		height: 3rem;
		display: grid;
		place-content: center;
		transition: all .25s ease-in-out;
	}
	.logo-provider:hover {
		transform: scale(1.2);
	}
  
  @media only screen and (max-width: 60em) {
    .navbar-provider {
			flex-direction: row;
		}
  }
</style>