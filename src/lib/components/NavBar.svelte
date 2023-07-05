<script>
  import Logo from '$lib/components/Logo.svelte'
  import ProfileButton from '$lib/components/ProfileButton.svelte'

  import { page } from '$app/stores'

  let path

  let navItems = [
    {
      href: '/feed',
      title: 'Feed',
      icon: `<svg class="w2 h2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H11.5V4.5H0.5V0.5ZM7.5 18.5H27.5V22.5H7.5V18.5ZM0.5 27.5H20.5V31.5H0.5V27.5ZM31.5 9.5V13.5H23.5V9.5H31.5ZM7.5 9.5H18.5V13.5H7.5V9.5ZM16.5 0.5H27.5V4.5H16.5V0.5Z" stroke="currentColor" fill="none" /></svg>`,
    }, {
      href: '/apps',
      title: 'Applications',
      icon: `<svg class="w2 h2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H13.5V13.5H0.5V0.5ZM18.5 18.5H31.5V31.5H18.5V18.5ZM0.5 18.5H13.5V31.5H0.5V18.5ZM18.5 0.5H31.5V13.5H18.5V0.5Z" stroke="currentColor" fill="none" /></svg>`,
    }, {
      href: '/chat',
      title: 'Chat',
      icon: `<svg class="w2 h2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3536 20.6464L16.2071 20.5H16H0.5V0.5H31.5V20.5H27H26.5V21V30.7929L16.3536 20.6464Z" stroke="currentColor" fill="none" /></svg>`,
    }
  ]

  $: path = $page.url.pathname
</script>

<aside class="fixed top-0 left-0 pa3 bottom-0 flex flex-column items-center justify-between z-2">
  <div>
    <a class="inline-flex w3 h3 pa2 br-100 ba b--white-10 grow" href="/feed">
      <Logo />
    </a>
  </div>
  <div class="flex flex-column justify-center flex-auto">
    <nav class="w3 flex flex-column gap-2">
      {#each navItems as n}
        <a
          role="button"
          href={n.href}
          class="w3 h3 br3 br--right flex items-center justify-center white-50 hover-white hover-bg-purple bg-animate bt br bb b--white-10"
          class:active={path.startsWith(n.href)}
          tabindex="0"
        >
          {@html n.icon}
        </a>
      {/each}
    </nav>
  </div>
  <div>
    <ProfileButton />
  </div>
</aside>