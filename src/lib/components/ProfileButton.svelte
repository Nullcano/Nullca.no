<script>
  import { bots } from '$lib/bots.js';
  import Avatar from '$lib/components/media/Avatar.svelte'
</script>

<a href={$bots[0].profileSlug} data-sveltekit-preload-data="off">
  <div class="details">
    <div class="playername">{$bots[0].name}</div>
  </div>
  <Avatar text={$bots[0].name} image={$bots[0].portrait} size="small" />
</a>

<style>
  a {
    color: inherit;
    text-decoration: none;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 1rem;
  }
  .details {
    width: max-content;
  }
</style>