<script>
  import { page } from '$app/stores'
  let path

  $: path = $page.url.pathname;
</script>

<nav>
  <a
    role="button"
    href="/profile/Nullcano"
    class="nav-item"
    class:active={path.startsWith("/profile/Nullcano")}
    data-sveltekit-preload-data="off"
    tabindex="0"
  >
    <div class="icon nullcano">
      <img src="/images/npc/Nullcano.png" alt="Nullcano">
    </div>
  </a>
  <a
    role="button"
    href="/projects"
    class="nav-item"
    class:active={path.startsWith("/projects")}
    data-sveltekit-preload-data="off"
    tabindex="0"
  >
    <div class="icon projects">
      <img src="/images/icons/projects.svg" alt="Projects">
    </div>
  </a>
</nav>

<style>
  nav {
    padding: .5rem;
    margin-block: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    background: rgba(0,0,0,.5);
    border-radius: 999px;
  }
  .nav-item {
    position: relative;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .25s linear;
    color: #ffffff50;
    background-image: url('/images/holo.gif');
    background-position: center;
    border-radius: 50%;
    overflow: hidden;
  }

  .icon {
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,.75);
    border-radius: 50%;
    overflow: hidden;
  }

  .projects img {
    width: 1.5rem;
    height: 1.5rem;
  }
  .nav-item.active .icon, .nav-item:hover .icon {
    background: rgba(0,0,0,.85);
  }
	@media only screen and (max-width: 60em) {
    nav {
      margin-inline: 1.5rem;
      flex-direction: row;
      gap: .5rem;
    }
  }
</style>
