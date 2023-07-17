<script>
  import Logo from '$lib/components/Logo.svelte'
  import Navbar from '$lib/components/topbar/Navbar.svelte'
  import Search from '$lib/components/topbar/Search.svelte'
  import Avatar from '$lib/components/media/Avatar.svelte'
</script>

<header class="sticky top-0 left-0 w-100 h3 bb b--dark-gray bd-blur grid grid-x-auto-fill z-2">
  <a href="/" class="w3 h3 flex items-center justify-center">
    <Logo />
  </a>
  <div class="ph3 flex items-center justify-between">
    <Navbar />
    <Search />
    <div class="flex items-center gap-3">
      <a class="ph3 pv2 br2 ba b--dark-gray" href="https://github.com/Nullcano" target="_blank">GitHub</a>
      <Avatar image="/images/npc/Nullcano.webp" size="s" variant="circle" link="/profile" />
    </div>
  </div>
</header>