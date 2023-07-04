<script>
  import { page } from '$app/stores'
  let path

  let navItems = [
    {
      href: '/projects',
      title: 'Projects',
      icon: `/images/icons/projects.svg`,
    }, {
      href: '/apps',
      title: 'Applications',
      icon: `/images/icons/application-vault.svg`,
    }, {
      href: '/chat',
      title: 'Chat',
      icon: `/images/icons/null-chat.svg`,
    }
  ]

  $: path = $page.url.pathname
</script>

<nav class="w-100 fixed bg-white-10 bd-blur bb b--white-10 z-1">
  <ul class="list ma0 mw9 center flex">
    {#each navItems as n}
      <a
        role="button"
        href={n.href}
        class="pa3 br-pill grid grid-x-auto-fill gap-2 items-center hover-bg-white-10 bg-animate"
        class:active={path.startsWith(n.href)}
        tabindex="0"
      >
        <div class="w1 h1 cover" style="background-image:url({n.icon})"></div>
        <span>{n.title}</span>
      </a>
    {/each}
  </ul>
</nav>