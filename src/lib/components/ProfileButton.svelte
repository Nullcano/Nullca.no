<script>
  import { bots } from '$lib/bots.js';
  import Avatar from '$lib/components/media/Avatar.svelte'
</script>

<Avatar text={$bots[0].name} image={$bots[0].portrait} link={$bots[0].profileSlug} size="m" variant="circle" />