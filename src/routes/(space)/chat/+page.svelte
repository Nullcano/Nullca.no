<script>
  import { afterUpdate, onDestroy } from 'svelte'
  import { commands } from '$lib/chatCommands'
  import { replies } from '$lib/chatReplies'
  import { messageBank } from '$lib/messageBank'
  import UserMessage from '$lib/components/chat/UserMessage.svelte'
  import BotMessage from '$lib/components/chat/BotMessage.svelte'
  import UserInput from '$lib/components/chat/UserInput.svelte'

  const initialMessage = `
    <p class="ma0">Welcome to Null Chat. I am Null AI, the general chat AI on this platform. My mission is to guide, engage, and personalize your experience without relying on large language models.</p>
  `

  let bot = {
    name: 'Null AI',
    portrait: '/images/icons/null-ai.webp',
    chat: [
      {
        text: initialMessage,
        sender: 'bot',
        confidenceLevel: 'Confident',
        confidenceValue: 100
      }
    ],
    isActive: false
  }

  let element
  let replyTimeout
  let isTyping = false

  function scrollToBottom() {
    element.scrollTo({
      top: element.scrollHeight,
      behavior: 'smooth'
    });
  }

  afterUpdate(scrollToBottom);
  onDestroy(() => clearTimeout(replyTimeout));

  function addMessage(message, sender, confidenceLevel = null, confidenceValue = 0) {
    bot.chat = [...bot.chat, { text: message, sender, confidenceLevel, confidenceValue }];
    scrollToBottom();
  }

  function handleUserInput(event) {
    const message = event.detail;
    isTyping = true;
    clearTimeout(replyTimeout);

    const { response, confidenceLevel, confidenceValue } = getResponse(message);

    addMessage(message, 'user');
    replyTimeout = setTimeout(() => {
      isTyping = false;
      addMessage(response, 'bot', confidenceLevel, confidenceValue);
    }, Math.random() * 2000 + 500);
  }

  function getResponse(message) {
    let response = undefined;
    let confidenceLevel = '';
    let confidenceValue = 0;

    const strippedMessage = message.toLowerCase().replace(/[^\w\s]/g, '');

    const matchedCommands = [];
    const matchedWords = [];

    for (let i = 0; i < commands.length; i++) {
      const contextCommands = commands[i];
      const contextReplies = replies[i];

      for (let j = 0; j < contextCommands.length; j++) {
        const command = contextCommands[j].toLowerCase();

        if (strippedMessage.includes(command)) {
          if (strippedMessage === command) {
            matchedCommands.push({ index: i, command });
          } else {
            matchedWords.push({ index: i, word: command });
          }
        }
      }
    }

    if (matchedCommands.length > 0) {
      const fullMatch = matchedCommands.find((match) => match.command.toLowerCase() === strippedMessage);
      const confidentArrays = [...new Set(matchedCommands.map((match) => match.index))];
      const arrayIndex = fullMatch ? fullMatch.index : confidentArrays[Math.floor(Math.random() * confidentArrays.length)];

      const matchedCommandsCount = matchedCommands.filter((match) => match.index === arrayIndex).length;
      const unrelatedWordsCount = strippedMessage.split(' ').filter((word) => !matchedWords.map((match) => match.word).includes(word)).length;

      const commandsScore = matchedCommandsCount * 40; // Medium increase
      const unrelatedWordsScore = unrelatedWordsCount * 5; // Low decrease

      confidenceValue = Math.max(0, Math.min(100, commandsScore - unrelatedWordsScore));
      response = replies[arrayIndex][Math.floor(Math.random() * replies[arrayIndex].length)];
      confidenceLevel = 'Confident';
    } else if (matchedWords.length > 0) {
      const confidentArrays = [...new Set(matchedWords.map((match) => match.index))];
      const arrayIndex = confidentArrays[Math.floor(Math.random() * confidentArrays.length)];

      const matchedWordsCount = matchedWords.filter((match) => match.index === arrayIndex && strippedMessage.includes(match.word)).length;
      const unrelatedWordsCount = strippedMessage.split(' ').filter((word) => !matchedWords.map((match) => match.word).includes(word)).length;

      const wordsScore = matchedWordsCount * 20; // Medium increase
      const unrelatedWordsScore = unrelatedWordsCount * 5; // Low decrease

      confidenceValue = Math.max(0, Math.min(100, wordsScore - unrelatedWordsScore));
      response = replies[arrayIndex][Math.floor(Math.random() * replies[arrayIndex].length)];
      confidenceLevel = 'Confident';
    } else {
      confidenceLevel = 'Confused';
      const randomIndex = Math.floor(Math.random() * messageBank.length);
      response = messageBank[randomIndex];
    }

    return {
      response,
      confidenceLevel,
      confidenceValue
    };
  }
</script>

<div class="h-100 br4 bg-near-black">
  <div class="mh3 pv3 fw4 bb bw1 b--white-10">
    Null AI
  </div>
  <div class="messages-provider pa3 overflow-y-scroll" bind:this={element}>
    <div class="min-h-100 flex flex-column justify-end gap-2">
      {#each bot.chat as message, i}
        {#if message.sender === 'user'}
          <UserMessage text={message.text} />
        {:else}
          <BotMessage
            name={bot.name}
            portrait={bot.portrait}
            text={message.text}
            confidenceLevel={message.confidenceLevel}
            confidenceValue={message.confidenceValue}
          />
        {/if}
      {/each}
      {#if isTyping}
        <div class="is-typing ma3">{bot.name} is typing...</div>
      {/if}
    </div>
  </div>
  <UserInput on:submit={handleUserInput} />
</div>

<style>
  .messages-provider {
    height: calc(100vh - 15.5rem);
  }
  .is-typing {
    color: var(--light-60);
    text-transform: uppercase;
    font-size: 14px;
  }
</style>