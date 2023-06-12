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
      <img src="/images/npc/Nullcano.webp" alt="Nullcano">
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
    gap: 1rem;
    background: rgba(255,255,255,.1);
    border-radius: 999px;
  }
  .nav-item {
    position: relative;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('/images/holo.webp');
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
    background: rgba(0,0,0,.7);
    border-radius: 50%;
    overflow: hidden;
    transition: all .25s linear;
  }
  .projects img {
    width: 1.5rem;
    height: 1.5rem;
  }
  .nav-item.active .icon, .nav-item:hover .icon {
    background: rgba(0,0,0,.9);
  }
	@media only screen and (max-width: 60em) {
    nav {
      margin-inline: 1.5rem;
      flex-direction: row;
      gap: .5rem;
    }
  }
</style>
