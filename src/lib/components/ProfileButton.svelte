<script>
  import { bots } from '$lib/bots.js';
  import Avatar from '$lib/components/media/Avatar.svelte'
</script>

<a href={$bots[0].profileSlug} class="flex items-center" data-sveltekit-preload-data="off">
  <div class="mr3">
    <div class="playername">{$bots[0].name}</div>
  </div>
  <Avatar text={$bots[0].name} image={$bots[0].portrait} size="s" variant="rounded" />
</a>