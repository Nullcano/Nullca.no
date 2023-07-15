<script>
  import { page } from '$app/stores'

  let path, showMore

  const navItems = [
    {
      title: 'Feed',
      href: '/',
      icon: `<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5H11.5V4.5H0.5V0.5ZM7.5 18.5H27.5V22.5H7.5V18.5ZM0.5 27.5H20.5V31.5H0.5V27.5ZM31.5 9.5V13.5H23.5V9.5H31.5ZM7.5 9.5H18.5V13.5H7.5V9.5ZM16.5 0.5H27.5V4.5H16.5V0.5Z" stroke="currentColor" fill="none" /></svg>`,
    }, {
      title: 'Projects',
      href: '/projects',
      icon: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 8L16 5.47932V0L8 8Z" fill="currentColor"/><path d="M8 8L5.5 0L0 0.0158166L8 8Z" fill="currentColor"/><path d="M8 8L0 10.4892V16L8 8Z" fill="currentColor"/><path d="M8 8L10.5 16H16L8 8Z" fill="currentColor"/></svg>`,
    }, {
      title: 'Applications',
      href: '/apps',
      icon: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 8L0 7V1.06667L1 0H7L8 1L9 0H15L16 1.06667V7L15 8L16 9V14.9333L15 16H9L8 15L7 16H1L0 14.9333V9L1 8ZM1 15H7V9H1V15ZM9 15H15V9H9V15ZM7 1.00833L1 1.05833V7H7V1.00833ZM15 7V1H9V7H15Z" fill="currentColor"/></svg>`,
    }, {
      title: 'Site Updates',
      href: '/updates',
      icon: `<svg viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 13.5001H5.5L1 16.0001H18L13.5 13.5001Z" fill="currentColor"/><path d="M9 5.5L4.5 12.5L0 15L9 0V5.5Z" fill="currentColor"/><path d="M10 5.5L14.5 12.5L19 15L10 0V5.5Z" fill="currentColor"/></svg>`,
    }, {
      title: 'Planned Features',
      href: '/planned',
      icon: `<svg viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 8.5L4 -2.84125e-07L4 17L7 8.5Z" fill="currentColor"/><path d="M8 8L5.5 -2.84124e-07L12 8L8 8Z" fill="currentColor"/><path d="M8 9L5.5 17L12 9L8 9Z" fill="currentColor"/><path d="M3 12.5L3 4.5L0 -2.84125e-07L2.10581e-07 17L3 12.5Z" fill="currentColor"/></svg>`,
    }, {
      title: 'Help Center',
      href: '/help',
      icon: `<svg viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.8 6.8H10.2V2.26667L6.8 0L6.8 6.8Z" fill="currentColor"/><path d="M6.8 10.2V6.8H2.26667L0 10.2H6.8Z" fill="currentColor"/><path d="M10.2 10.2H6.8V14.7333L10.2 17V10.2Z" fill="currentColor"/><path d="M10.2 6.8V10.2H14.7333L17 6.8H10.2Z" fill="currentColor"/></svg>`,
    }
  ]

  const firstThree = navItems.slice(0, 3)
  const rest = navItems.slice(3)

  $: path = $page.url.pathname
</script>

<nav class="flex gap-2">
  {#each firstThree as n}
    <a
      role="button"
      href={n.href}
      class="link pv2 ph3 flex items-center justify-start self-start gap-2 white-50 hover-white"
      class:active={path.startsWith(n.href)}
      tabindex="0"
    >
      <div class="w1">
        {@html n.icon}
      </div>
      <span>{n.title}</span>
    </a>
  {/each}
  <div class="menu-provider relative">
    <a class="link w2 h2 flex items-center justify-center white-50 hover-white pointer outline-0" href={null} tabindex="-1">
      <svg class="w1" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="2" cy="10" r="2" fill="currentColor"/>
        <circle cx="10" cy="10" r="2" fill="currentColor"/>
        <circle cx="18" cy="10" r="2" fill="currentColor"/>
      </svg>
    </a>
    <div class="menu dn absolute left-0 w5 br3 bg-dark-30 z-2">
      <nav class="pa2 flex flex-column">
        {#each rest as n}
          <a
            role="button"
            href={n.href}
            class="pa3 br3 flex items-center gap-3 white-50 hover-white hover-bg-black-20 bg-animate"
            class:active={path.startsWith(n.href)}
            tabindex="0"
          >
            <div class="w2 h2 pa2 br3 bg-black-50">
              {@html n.icon}
            </div>
            <span>{n.title}</span>
          </a>
        {/each}
      </nav>
    </div>
  </div>
</nav>

<style>
  .menu {
    top: 100%;
  }
  .menu-provider:focus-within .menu {
    display: block;
  }
  a {
    outline: none;
  }
</style>