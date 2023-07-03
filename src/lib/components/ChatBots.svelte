<script>
  import { page } from '$app/stores'
  import { bots, selectedBot } from '$lib/bots'
  import Divider from '$lib/components/Divider.svelte'
  import Avatar from '$lib/components/media/Avatar.svelte'
  import TitleIconText from '$lib/components/titles/TitleIconText.svelte'

  let path

  $: path = $page.url.pathname;
  
  function selectBot(bot) {
    selectedBot.set(bot);
  }
  
  export let disabled = false
</script>

<header class="ph3 h3 flex items-center">
  <TitleIconText text="Null Chat" icon="/images/icons/null-chat.svg" />
</header>
<Divider />
<ul class="list pa2 flex flex-column">
  {#each $bots as bot}
    {#if bot.interactive}
      <a 
        role="button"
        href={bot.chatSlug}
        class:active={path === bot.chatSlug}
        class:disabled={disabled == true}
        class="nav-item ma2"
        data-sveltekit-preload-data="off"
        tabindex="0"
        on:click={() => selectBot(bot)}>
        <Avatar image={bot.portrait} text={bot.name} size="m" variant="rounded" />
        <div class="meta">
          <span class="name">{bot.name}</span>
          <span class="role">{bot.role}</span>
        </div>
      </a>
    {/if}
  {/each}
</ul>

<style>
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
  a:hover, a.active {
    background-color: rgba(255, 255, 255, .1);
  }
  a.disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: .5;
  }
</style>
