<script>
  import { bots } from '$lib/bots.js';
  import Avatar from '$lib/components/media/Avatar.svelte'
</script>

<div class="w3 h3 br-100 flex items-center justify-center ba b--white-10 grow">
  <Avatar text={$bots[0].name} image={$bots[0].portrait} link={$bots[0].profileSlug} size="s" variant="circle" />
</div>