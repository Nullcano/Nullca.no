<script>
  import Avatar from '$lib/components/media/Avatar.svelte';
  
  export let text;
</script>

<div class="message relative mh3 mb3 grid grid-x-fill-auto gap-2 self-end">
  <div class="w-100">
    <div class="tr">You</div>
    <div class="mt2 pa2 br3 bg-white-10 ba b--dark-gray">
      <span>{text}</span>
    </div>
  </div>
  <Avatar image="/images/npc/Unknown-Client.webp" text="You" link={null} size="s" variant="circle" />
</div>

<style>
  .message {
    animation: appear .2s linear forwards;
  }

  @keyframes appear {
    from { right: -100% }
    to { right: 0 }
  }
</style>