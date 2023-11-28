<script>
  import Avatar from '$lib/components/media/Avatar.svelte';
  
  export let text;
</script>

<div class="message relative mb3 measure flex flex-column gap-2 self-end">
  <div class="flex items-center gap-2 self-end">
    <div>You</div>
    <Avatar image="/images/npc/Unknown-Client.webp" text="You" link={null} size="s" variant="circle" />
  </div>
  <div class="pa3 br4 bg-white-10 self-end">
    <span class="lh-copy">{text}</span>
  </div>
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