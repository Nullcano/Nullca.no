<script>
  import Logo from '$lib/components/Logo.svelte'
  import ProfileButton from '$lib/components/ProfileButton.svelte'

  import { page } from '$app/stores'

  let path

  let navItems = [
    {
      href: '/feed',
      title: 'Feed',
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

<aside class="fixed top-0 left-0 pa3 bottom-0 flex flex-column items-center justify-between z-2">
  <div class="flex">
    <a class="inline-flex w3 h3 pa3 bg-black br-100" href="/feed">
      <Logo />
    </a>
  </div>
  <div class="flex flex-column justify-center flex-auto">
    <nav class="w3 flex flex-column gap-2">
      {#each navItems as n}
        <a
          role="button"
          href={n.href}
          class="h3 pa3 br3 br--right flex items-center justify-center hover-bg-purple bg-animate bt br bb b--white-10"
          class:active={path.startsWith(n.href)}
          tabindex="0"
        >
          <img class="w1 h1" src={n.icon} alt={n.title} />
        </a>
      {/each}
    </nav>
  </div>
  <div class="db">
    <ProfileButton />
  </div>
</aside>