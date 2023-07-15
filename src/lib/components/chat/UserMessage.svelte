<script>
  import Avatar from '$lib/components/media/Avatar.svelte';
  
  export let text;
</script>

<div class="mh3 mb3 grid grid-x-fill-auto gap-2 self-end">
  <div class="w-100">
    <div class="tr">You</div>
    <div class="mt2 pa2 br3 bg-white-10">
      <span>{text}</span>
    </div>
  </div>
  <Avatar image="/images/npc/Unknown-Client.webp" text="You" link={null} size="s" variant="circle" />
</div>