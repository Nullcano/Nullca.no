<script>
  import { afterUpdate } from 'svelte';
  import { selectedBot } from '$lib/bots';
  import ChatBots from '$lib/components/ChatBots.svelte';
  import Avatar from '$lib/components/media/Avatar.svelte';
  import Divider from '$lib/components/Divider.svelte';
  import UserMessage from '$lib/components/UserMessage.svelte';
  import BotMessage from '$lib/components/BotMessage.svelte';
  import UserInput from '$lib/components/UserInput.svelte';

  let element;
  let help = false;
  let isTyping = false;

  let currentBotSlug = null;
  let replyTimeout;

  const commandMap = new Map(); // Map for command lookup

  afterUpdate(() => {
    if ($selectedBot.chat) scrollToBottom(element);
  });

  $: if ($selectedBot.chat && element) {
    scrollToBottom(element);
  }

  function addMessage(message, sender, confidence) {
    const newMessage = { text: message, sender, confidence };
    $selectedBot.chat = [...$selectedBot.chat, newMessage];
    scrollToBottom(element);
  }

  function handleUserInput(event) {
    const message = event.detail;
    isTyping = true;

    if (currentBotSlug && currentBotSlug !== $selectedBot.slug) {
      clearTimeout(replyTimeout);
    }

    const { response, confidence } = getResponse(message);

    addMessage(message, 'user', null);

    replyTimeout = setTimeout(() => {
      isTyping = false;
      addMessage(response, 'bot', confidence);
    }, Math.floor(Math.random() * 2500) + 500);

    currentBotSlug = $selectedBot.slug;
  }

  function getResponse(message) {
    let response = $selectedBot.messageBank[Math.floor(Math.random() * $selectedBot.messageBank.length)];
    let confidence = 'Confused';

    // Check if the message fully or partially matches a command
    for (let i = 0; i < $selectedBot.commands.length; i++) {
      for (let j = 0; j < $selectedBot.commands[i].length; j++) {
        const command = $selectedBot.commands[i][j];

        // Check if the command pattern exists in the command map
        if (!commandMap.has(command)) {
          const pattern = new RegExp(`\\b${command}\\b`, 'i');
          commandMap.set(command, pattern);
        }

        // Use the precompiled pattern for matching
        const pattern = commandMap.get(command);
        if (pattern.test(message)) {
          if (message.toLowerCase() === command) {
            confidence = 'Confident';
          } else {
            confidence = 'Conventional';
          }
          response = $selectedBot.replies[i][Math.floor(Math.random() * $selectedBot.replies[i].length)];
          break;
        }
      }
      if (confidence !== 'Confused') {
        break;
      }
    }

    return { response, confidence };
  }

  const scrollToBottom = async (node) => {
    node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
  };
</script>

<svelte:head>
  <title>{$selectedBot.name} &middot; Chat &middot; Nullcano</title>
</svelte:head>

<div class="chat">
  <div class="sidebar">
    <ChatBots />
  </div>
  <div class="content">
    {#if $selectedBot}
      <div class="title">
        <div class="ai-profile">
          <Avatar image={$selectedBot.portrait} text={$selectedBot.name} size="small" />
          <span>{$selectedBot.name}</span>
          <a class="small-button" href={$selectedBot.profileSlug}>Profile</a>
        </div>
        <div class="toggle-help" on:click={() => help = !help} on:keypress={() => help = !help}>
          <span>?</span>
        </div>
      </div>
      <Divider />
      {#if help}
        <div class="help">
          <span>At the moment, Null AI is not particularly useful. However, please stay tuned for upcoming features such as additional commands, gamification, and more.</span>
          <div class="close-help" on:click={() => help = !help} on:keypress={() => help = !help}>X</div>
        </div>
      {/if}
      <div class="messages-provider" bind:this={element}>
        <div class="messages">
          {#each $selectedBot.chat as message, i}
            {#if message.sender === 'user'}
              <UserMessage text={message.text} />
            {:else}
              <BotMessage name={$selectedBot.name} portrait={$selectedBot.portrait} confidence={message.confidence} text={message.text} />
            {/if}
          {/each}
          {#if isTyping}
            <div class="is-typing">{$selectedBot.name} is typing...</div>
          {/if}
        </div>
      </div>
      <Divider />
      <UserInput on:submit={handleUserInput} />
    {/if}
  </div>
</div>

<style>
  .chat {
    display: grid;
    grid-template-columns: auto 1fr;
    width: 100%;
    height: calc(100vh - 3px);
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
  .title {
    height: 4rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ai-profile {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  .small-button {
    margin-inline-start: 1rem;
    padding: .5rem 1rem;
    border-radius: .5rem;
    border: 1px solid rgba(255, 255, 255, .1);
    font-size: 0.8rem;
    text-transform: uppercase;
  }
  .help {
    position: relative;
    height: min-content;
    padding: 1rem 3rem 1rem 1rem;
    background-color: var(--light-20);
    font-size: 14px;
  }
  .toggle-help, .close-help {
    width: 2rem;
    height: 2rem;
    display: grid;
    place-content: center;
    border-radius: 50%;
    cursor: pointer;
  }
  .toggle-help {
    color: var(--dark-60);
  }
  .close-help {
    position: absolute;
    top: .5rem;
    right: .5rem;
  }
  .messages-provider {
    height: calc(100vh - 8rem - 2px);
    overflow-y: auto;
  }
  .messages {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: .5rem;
  }
  .is-typing {
    margin: .5rem;
    padding: .5rem 1rem;
    color: var(--light-60);
    text-transform: uppercase;
    font-size: 14px;
  }

  @media only screen and (max-width: 60em) {
    .chat {
      height: calc(100vh - 6rem - 3px);
    }
    .sidebar {
      width: 6rem;
      border-right: 1px solid rgba(255, 255, 255, .1);
    }
  }
</style>