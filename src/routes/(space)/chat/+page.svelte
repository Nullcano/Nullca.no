<script>
  import ChatBots from '$lib/components/ChatBots.svelte'
  import TitleIconText from '$lib/components/titles/TitleIconText.svelte'
</script>

<svelte:head>
  <title>Chat &middot; Nullcano</title>
</svelte:head>

<div class="chat">
  <div class="sidebar">
    <ChatBots />
  </div>
  <div class="content pa3">
    <TitleIconText text="Null Chat" icon="/images/icons/null-chat.svg" />
    <div class="ai-profile">
      <span>Select an AI to chat with</span>  
    </div>
  </div>
</div>

<style>
  .chat {
    display: grid;
    grid-template-columns: auto 1fr;
    width: 100%;
    height: 100vh;
  }
  .sidebar {
    width: 20rem;
    border-right: 1px solid rgba(255, 255, 255, .1);
  }
  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .ai-profile {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  @media only screen and (max-width: 60em) {
    .chat {
      bottom: 1rem;
      right: 1rem;
      width: 4rem;
      height: calc(100vh - 4px);
      background: #000;
      display: grid;
      grid-template-rows: 4rem 1fr auto;
      background-color: var(--dark-60);
      border: 2px solid var(--light-20);
      border-radius: 1rem;
    }
  }
</style>