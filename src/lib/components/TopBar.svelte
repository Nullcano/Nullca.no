<script>
  import Logo from '$lib/components/Logo.svelte'
  import Search from '$lib/components/Search.svelte'
	import ProfileButton from '$lib/components/ProfileButton.svelte'
</script>

<nav class="w-100 h3 fixed top-0 ph4 pv3 flex items-center justify-between bg-black-50 bd-blur bb b--white-10 z-1">
  <a class="dib h2" href="/feed">
    <Logo />
  </a>
  <Search />
  <ProfileButton />
</nav>