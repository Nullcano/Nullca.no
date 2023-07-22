<script>
  import { page } from '$app/stores'

  let path, showMore

  const navItems = [
    {
      title: 'Feed',
      href: '/',
      icon: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 0L0 2V8H16V0H2ZM14 2H2V6H14V2Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 8.00002L0 10V16H16L16 8L2 8.00002ZM14 10H2V14H14V10Z" fill="currentColor"/></svg>`,
    }, {
      title: 'Projects',
      href: '/projects',
      icon: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 16H0V4L4 0H16V16ZM2 14V5L5 2H14V14H2Z" fill="currentColor"/><path d="M3 6H13V13H3V6Z" fill="currentColor"/></svg>`,
    }, {
      title: 'Applications',
      href: '/apps',
      icon: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 7.43866e-05L0 2.00007V8.00007L8 8V0L2 7.43866e-05ZM6 2L2 2.00007V6.00007L6 6V2Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2 8.0001L0 10.0001V16.0001L8 16L8 8L2 8.0001ZM6 10L2 10.0001V14.0001L6 14V10Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10 9.91821e-05L8 2.0001V8L16 8.00002V2.47955e-05L10 9.91821e-05ZM14 2.00002L10 2.0001V6.0001L14 6.00003V2.00002Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.00012L8 10.0001L8 16L16 16L16 8.00002L10 8.00012ZM14 10L10 10.0001V14.0001L14 14V10Z" fill="currentColor"/></svg>`,
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
      icon: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 9H7V14L9 16V9H14L16 7H9V2L7 0V7H2L0 9Z" fill="currentColor"/></svg>`,
    }
  ]

  const firstThree = navItems.slice(0, 3)
  const rest = navItems.slice(3)

  $: path = $page.url.pathname
</script>

<nav class="flex items-center gap-2">
  {#each firstThree as n}
    <a
      role="button"
      href={n.href}
      class="link pv2 ph3 flex items-center justify-start self-start gap-2 white-50 hover-white"
      class:active={path.startsWith(n.href)}
      tabindex="0"
    >
      <div class="w2 h2 pa2 br3 bg-black-50">
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
    <div class="menu dn absolute left-0 w5 br3 bg-black-50 bd-blur ba b--dark-gray z-2">
      <nav class="pa2 flex flex-column gap-2">
        {#each rest as n}
          <a
            role="button"
            href={n.href}
            class="pa3 br3 flex items-center gap-3 white-50 hover-white hover-bg-white-10 bg-animate ba b--dark-gray"
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