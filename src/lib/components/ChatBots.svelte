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
<ul class="list ma0 pa2 flex flex-column">
  {#each $bots as bot}
    {#if bot.interactive}
      <a 
        role="button"
        href={bot.chatSlug}
        class:active={path === bot.chatSlug}
        class:disabled={disabled == true}
        class="pa2 mb2 grid grid-x-auto-fill gap-3 items-center bg-black-50 bg-animate br3"
        data-sveltekit-preload-data="off"
        tabindex="0"
        on:click={() => selectBot(bot)}>
        <Avatar image={bot.portrait} text={bot.name} size="m" variant="rounded" />
        <div class="meta">
          <span class="name mb2">{bot.name}</span>
          <span class="role white-50">{bot.role}</span>
        </div>
      </a>
    {/if}
  {/each}
</ul>

<style>

  .meta {
    display: flex;
    flex-direction: column;
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
