<script>
  import { bots, selectedBot } from '$lib/bots'
  import Divider from '$lib/components/Divider.svelte'
  import TitleIconText from '$lib/components/titles/TitleIconText.svelte'
  import { page } from '$app/stores'

  let path

  $: path = $page.url.pathname;
  
  function selectBot(bot) {
    selectedBot.set(bot);
  }
</script>

<header>
  <TitleIconText text="Null Chat" icon="/images/icons/null-chat.svg" />
</header>
<Divider />
<ul>
  {#each $bots as bot}
    {#if bot.interactive}
      <a 
        role="button"
        href={bot.chatSlug}
        class:active={path === bot.chatSlug}
        class="nav-item"
        data-sveltekit-preload-data="off"
        tabindex="0"
        on:click={() => selectBot(bot)}>
        <img src={bot.portrait} alt={bot.name} />
        <div class="meta">
          <span class="name">{bot.name}</span>
          <span class="role">{bot.role}</span>
        </div>
      </a>
    {/if}
  {/each}
</ul>

<style>
  header {
    padding: 0 1rem;
    height: 4rem;
    display: flex;
    align-items: center;
  }
  ul {
    margin: 1rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    padding: 1rem;
    border-radius: 1rem;
    background-color: rgba(0,0,0,.5);
    color: var(--light-80);
    text-decoration: none;
    transition: all .25s linear;
  }
  .meta {
    display: flex;
    flex-direction: column;
  }
  .name {
    font-weight: 600;
  }
  .role {
    opacity: .5;
  }
  a img {
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
  }
  a:hover, a.active {
    background-color: rgba(255, 255, 255, .1);
  }
</style>
