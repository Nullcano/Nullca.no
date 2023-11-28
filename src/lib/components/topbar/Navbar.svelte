<script>
  import { page } from '$app/stores'

  let path

  const navItems = [
    {
      title: 'Projects',
      href: '/projects',
      icon: `<svg class="w2 h2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 16H0V4L4 0H16V16ZM2 14V5L5 2H14V14H2Z" fill="currentColor"/><path d="M3 6H13V13H3V6Z" fill="currentColor"/></svg>`,
    }, {
      title: 'Chat',
      href: '/chat',
      icon: `<svg class="w2 h2" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 13.5001H5.5L1 16.0001H18L13.5 13.5001Z" fill="currentColor"/><path d="M9 5.5L4.5 12.5L0 15L9 0V5.5Z" fill="currentColor"/><path d="M10 5.5L14.5 12.5L19 15L10 0V5.5Z" fill="currentColor"/></svg>`,
    }
  ]

  $: path = $page.url.pathname
</script>

<nav class="pa2 bg-near-black flex items-center gap-2 br-pill">
  {#each navItems as n}
    <a
      role="button"
      href={n.href}
      class="pv2 ph3 br-pill link white bg-animate hover-bg-dark-gray"
      class:bg-dark-gray={path.startsWith(n.href)}
      tabindex="0"
    >
      <span>{n.title}</span>
    </a>
  {/each}
</nav>