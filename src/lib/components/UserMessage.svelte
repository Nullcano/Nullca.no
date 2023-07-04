<script>
  import { bots } from '$lib/bots.js'
  import Avatar from '$lib/components/media/Avatar.svelte'

  export let text
</script>

<div class="ml3 mb3 pa3 br3 mw6 grid grid-x-auto-fill gap-3 self-start bg-white-10">
  <Avatar image={$bots[0].portrait} text={$bots[0].name} link={$bots[0].profileSlug} size="s" variant="rounded" />
  <div class="w-100">
    <div>
      <a class="white-50" href={$bots[0].profileSlug} alt={$bots[0].name} data-sveltekit-preload-data="off">{$bots[0].name}</a>
    </div>
    <div class="pt2">
      <span>{text}</span>
    </div>
  </div>
</div>