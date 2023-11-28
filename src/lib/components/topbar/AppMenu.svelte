<script>
  import Logo from '$lib/components/Logo.svelte'
  import Navbar from '$lib/components/topbar/Navbar.svelte'
  import Avatar from '$lib/components/media/Avatar.svelte'
</script>

<header class="mh3 h3 flex items-center justify-between gap-3">
  <Logo />
  <Navbar />
  <a
      role="button"
      href="mailto:woldsteffen@gmail.com"
      class="pv2 ph3 br-pill link white bg-animate hover-bg-dark-gray"
      tabindex="0"
    >
      <span>Mail</span>
  </a>
</header>