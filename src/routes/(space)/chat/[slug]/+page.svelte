<script>
  import { afterUpdate } from 'svelte';
  import { selectedBot } from '$lib/bots';
  import ChatBots from '$lib/components/ChatBots.svelte';
  import Avatar from '$lib/components/media/Avatar.svelte';
  import Divider from '$lib/components/Divider.svelte';
  import UserMessage from '$lib/components/UserMessage.svelte';
  import BotMessage from '$lib/components/BotMessage.svelte';
  import UserInput from '$lib/components/UserInput.svelte';
  import TitleIconText from '$lib/components/titles/TitleIconText.svelte';

  let element;
  let help = false;
  let isTyping = false;

  let currentBotSlug = null;
  let replyTimeout;

  afterUpdate(() => {
    if ($selectedBot.chat) scrollToBottom(element);
  });

  $: if ($selectedBot.chat && element) {
    scrollToBottom(element);
  }

  function addMessage(message, sender, confidenceLevel, confidenceValue) {
    const newMessage = { text: message, sender, confidenceLevel, confidenceValue };
    $selectedBot.chat = [...$selectedBot.chat, newMessage];
    scrollToBottom(element);
  }

  function handleUserInput(event) {
    const message = event.detail;
    isTyping = true;

    if (currentBotSlug && currentBotSlug !== $selectedBot.slug) {
      clearTimeout(replyTimeout);
    }

    const { response, confidenceLevel, confidenceValue } = getResponse(message);

    addMessage(message, 'user', null);

    replyTimeout = setTimeout(() => {
      isTyping = false;
      addMessage(response, 'bot', confidenceLevel, confidenceValue);
    }, Math.floor(Math.random() * 2500) + 500);

    currentBotSlug = $selectedBot.slug;
  }

  function getResponse(message) {
    let response = undefined;
    let confidenceLevel = '';
    let confidenceValue = 0;

    const matchedCommands = [];
    const matchedWords = [];

    // Remove special characters from the message
    const strippedMessage = message.toLowerCase().replace(/[^\w\s]/g, '');

    for (let i = 0; i < $selectedBot.commands.length; i++) {
      const contextCommands = $selectedBot.commands[i];
      const contextReplies = $selectedBot.replies[i];

      for (let j = 0; j < contextCommands.length; j++) {
        const command = contextCommands[j].toLowerCase();

        if (strippedMessage === command) {
          matchedCommands.push({ index: i, command });
        } else if (strippedMessage.split(' ').includes(command)) {
          matchedWords.push({ index: i, word: command });
        } else if (strippedMessage.includes(command)) {
          matchedWords.push({ index: i, word: command });
        }
      }
    }

    if (matchedCommands.length > 0) {
      const fullMatch = matchedCommands.find((match) => match.command.toLowerCase() === strippedMessage);
      if (fullMatch) {
        const arrayIndex = fullMatch.index;
        const matchedCommandsCount = matchedCommands.filter((match) => match.index === arrayIndex).length;
        const matchedWordsCount = matchedWords.filter((match) => match.index === arrayIndex && strippedMessage.includes(match.word)).length;
        const unrelatedWordsCount = strippedMessage.split(' ').filter((word) => !matchedWords.map((match) => match.word).includes(word)).length;
        const unknownWordsCount = matchedWords.filter((match) => match.index === arrayIndex).length;

        const commandsScore = matchedCommandsCount * 80; // High increase
        const wordsScore = matchedWordsCount * 30; // Medium increase
        const unrelatedWordsScore = unrelatedWordsCount * 5; // Low decrease
        const unknownWordsScore = unknownWordsCount * 10; // High decrease

        confidenceValue = Math.max(0, Math.min(100, commandsScore + wordsScore - unrelatedWordsScore - unknownWordsScore));
        response = $selectedBot.replies[arrayIndex][Math.floor(Math.random() * $selectedBot.replies[arrayIndex].length)];
        confidenceLevel = 'Confident';
      } else {
        const confidentArrays = [...new Set(matchedCommands.map((match) => match.index))];
        if (confidentArrays.length > 1) {
          const randomIndex = confidentArrays[Math.floor(Math.random() * confidentArrays.length)];
          const matchedCommandsCount = matchedCommands.filter((match) => match.index === randomIndex).length;
          const unrelatedWordsCount = strippedMessage.split(' ').filter((word) => !matchedWords.map((match) => match.word).includes(word)).length;

          const commandsScore = matchedCommandsCount * 40; // Medium increase
          const unrelatedWordsScore = unrelatedWordsCount * 5; // Low decrease

          confidenceValue = Math.max(0, Math.min(100, commandsScore - unrelatedWordsScore));
          response = $selectedBot.replies[randomIndex][Math.floor(Math.random() * $selectedBot.replies[randomIndex].length)];
          confidenceLevel = 'Confident';
        } else {
          const arrayIndex = confidentArrays[0];
          const matchedCommandsCount = matchedCommands.filter((match) => match.index === arrayIndex).length;
          const unrelatedWordsCount = strippedMessage.split(' ').filter((word) => !matchedWords.map((match) => match.word).includes(word)).length;

          const commandsScore = matchedCommandsCount * 40; // Medium increase
          const unrelatedWordsScore = unrelatedWordsCount * 5; // Low decrease

          confidenceValue = Math.max(0, Math.min(100, commandsScore - unrelatedWordsScore));
          response = $selectedBot.replies[arrayIndex][Math.floor(Math.random() * $selectedBot.replies[arrayIndex].length)];
          confidenceLevel = 'Confident';
        }
      }
    } else if (matchedWords.length > 0) {
      const confidentArrays = [...new Set(matchedWords.map((match) => match.index))];
      if (confidentArrays.length > 1) {
        const randomIndex = confidentArrays[Math.floor(Math.random() * confidentArrays.length)];
        const matchedWordsCount = matchedWords.filter((match) => match.index === randomIndex && strippedMessage.includes(match.word)).length;
        const unrelatedWordsCount = strippedMessage.split(' ').filter((word) => !matchedWords.map((match) => match.word).includes(word)).length;

        const wordsScore = matchedWordsCount * 20; // Medium increase
        const unrelatedWordsScore = unrelatedWordsCount * 5; // Low decrease

        confidenceValue = Math.max(0, Math.min(100, wordsScore - unrelatedWordsScore));
        response = $selectedBot.replies[randomIndex][Math.floor(Math.random() * $selectedBot.replies[randomIndex].length)];
        confidenceLevel = 'Confident';
      } else {
        const arrayIndex = confidentArrays[0];
        const matchedWordsCount = matchedWords.filter((match) => match.index === arrayIndex && strippedMessage.includes(match.word)).length;
        const unrelatedWordsCount = strippedMessage.split(' ').filter((word) => !matchedWords.map((match) => match.word).includes(word)).length;

        const wordsScore = matchedWordsCount * 20; // Medium increase
        const unrelatedWordsScore = unrelatedWordsCount * 5; // Low decrease

        confidenceValue = Math.max(0, Math.min(100, wordsScore - unrelatedWordsScore));
        response = $selectedBot.replies[arrayIndex][Math.floor(Math.random() * $selectedBot.replies[arrayIndex].length)];
        confidenceLevel = 'Confident';
      }
    } else {
      confidenceValue = 0;
      confidenceLevel = 'Confused';
      const randomIndex = Math.floor(Math.random() * $selectedBot.messageBank.length);
      response = $selectedBot.messageBank[randomIndex];
    }

    return {
      response,
      confidenceLevel,
      confidenceValue,
    };
  }

  const scrollToBottom = async (node) => {
    node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
  };
</script>

<svelte:head>
  <title>{$selectedBot.name} &middot; Chat &middot; Nullcano</title>
</svelte:head>

<div class="mb4 flex items-end justify-between">
  <TitleIconText text="Chatting with {$selectedBot.name}" icon={$selectedBot.portrait} />
  <div>
    <a class="pv2 ph3 br2 ba b--white-10" href={$selectedBot.profileSlug}>Profile</a>
    <span class="pv2 ph3 br2 ba b--white-10 pointer" on:click={() => help = !help} on:keypress={() => help = !help}>Help</span>
  </div>
</div>
<Divider />
<div class="mt3 w-100 vh-50 flex gap-3">
  <div class="w-100 w-two-thirds-l h-100 br4 flex flex-column ba b--white-10">
    {#if $selectedBot}
      <div class="messages-provider min-h-100 overflow-y-scroll" bind:this={element}>
        <div class="messages">
          {#each $selectedBot.chat as message, i}
            {#if message.sender === 'user'}
              <UserMessage text={message.text} />
            {:else}
              <BotMessage name={$selectedBot.name} portrait={$selectedBot.portrait} confidenceLevel={message.confidenceLevel} confidenceValue={message.confidenceValue} text={message.text} profileSlug={$selectedBot.profileSlug} />
            {/if}
          {/each}
          {#if isTyping}
            <div class="is-typing">{$selectedBot.name} is typing...</div>
          {/if}
        </div>
      </div>
      <UserInput on:submit={handleUserInput} />
    {/if}
  </div>
  <div class="w-100 w-third-l">
    {#if help}
      <div class="relative pa2 f6">
        <span>At the moment, Null AI is not particularly useful. However, please stay tuned for upcoming features such as additional commands, gamification, and more.</span>
        <div class="absolute top-0 right-0 pointer" on:click={() => help = !help} on:keypress={() => help = !help}>X</div>
      </div>
    {/if}
    {#if isTyping}
      <ChatBots disabled={true} />
      {:else}
      <ChatBots />
    {/if}
  </div>
</div>

<style>
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
</style>