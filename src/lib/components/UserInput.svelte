<script>
  import { createEventDispatcher } from 'svelte';
  import { selectedBot } from '$lib/bots.js'

  const dispatch = createEventDispatcher();
  
  export let value = '';
  export let disabled = false;
  
  function handleSubmit(event) {
    event.preventDefault();
    const message = event.target.elements.message.value;
    if (message.trim() !== '') {
      dispatch('submit', message.trim());
      event.target.elements.message.value = '';
    }
  }
</script>

<form class="h3 pa2 grid grid-x-fill-auto gap-2 items-center bg-black-50" on:submit={handleSubmit}>
  <input class="input-reset ph3 pv2 br-pill bg-white-10 hover-bg-white-20 bg-animate bn outline-0 white sans-serif" type="text" name="message" placeholder="Message {$selectedBot.name}" {value} {disabled} />
  <button class="link button-reset br-100 bg-transparent white-50 hover-white-80 animate bn pointer" type="submit">
    <svg class="db w2 h2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="m0 16 12 4 4 12L32 0zm14.016 2.016 12-12L16 24z" fill="currentColor" />
    </svg>
  </button>
</form>