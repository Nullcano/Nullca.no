<script>
  import { page } from '$app/stores'
  let path

  let navItems = [
    {
      href: '/apps',
      title: 'Applications',
      icon: `<img src="/images/icons/application-vault.svg">`,
    }, {
      href: '/chat',
      title: 'Chat',
      icon: `<img src="/images/icons/null-chat.svg">`,
    }
  ];

  $: path = $page.url.pathname;
</script>

<nav>
  {#each navItems as n}
    <a
      role="button"
      href={n.href}
      class="nav-item"
      class:active={path.startsWith(n.href)}
      tabindex="0"
    >
      <div class="icon">
        {@html n.icon}
      </div>
    </a>
  {/each}
</nav>

<style>
  nav {
    padding: .5rem;
    margin-block: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background: rgba(0,0,0,.5);
    clip-path: var(--clip-s);
  }
  .nav-item {
    width: 3rem;
    height: 3rem;
    display: grid;
    place-content: center;
    transition: all .25s linear;
    color: #ffffff50;
    background-color: rgba(0,0,0,.5);
    clip-path: var(--clip-s);
  }
  .nav-item.active, .nav-item:hover {
    color: var(--white);
    background-color: rgba(0,0,0,.75);
  }
  .icon {
    width: 2rem;
    height: 2rem;
    object-fit: cover;
  }
  .nav-item.active .icon, .nav-item:hover .icon {
    color: var(--white);
  }  
	@media only screen and (max-width: 60em) {
    nav {
      margin-inline: 1.5rem;
      flex-direction: row;
      gap: .5rem;
    }
  }
</style>
