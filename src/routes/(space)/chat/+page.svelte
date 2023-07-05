<script>
  import ChatBots from '$lib/components/ChatBots.svelte'
  import TitleIconText from '$lib/components/titles/TitleIconText.svelte'
</script>

<svelte:head>
  <title>Chat &middot; Nullcano</title>
</svelte:head>

<TitleIconText text="Null Chat" icon="/images/icons/null-chat.svg" />

<div class="w-100 h-100 flex">
  <div class="w-100 w-two-thirds-l h-100">
    <div class="mv4">
      <span>Select an AI to chat with &rAarr;</span>  
    </div>
  </div>
  <div class="db w-100 w-third-l">
    <ChatBots />
  </div>
</div>