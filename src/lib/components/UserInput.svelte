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

<form on:submit={handleSubmit}>
  <input type="text" name="message" placeholder="Message {$selectedBot.name}" {value} {disabled} />
  <button type="submit">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="m0 16 12 4 4 12L32 0zm14.016 2.016 12-12L16 24z"/>
    </svg>
  </button>
</form>

<style>
  form {
    padding: .5rem;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;
    gap: .5rem;
    background: rgba(0,0,0,.25);
  }
  input {
    height: 3rem;
    padding: 0 1rem;
    appearance: none;
    border: 0;
    background: rgba(0,0,0,.25);
    background-position: bottom;
    background-size: cover;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    border-radius: 1rem;
    transform: all .2s linear;
    cursor: pointer;
  }
  ::placeholder {
    opacity: 1;
  }
  :focus::placeholder {
    opacity: .6;
  }
  input:focus {
    outline: 0;
    background: rgba(0,0,0,.5);
    cursor: text;
  }
  button {
    width: 3rem;
    height: 3rem;
    display: grid;
    place-content: center;
    appearance: none;
    border: 0;
    background: rgba(0,0,0,.25);
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    border-radius: 1rem;
    cursor: pointer;
  }
  button svg {
    width: 1rem;
    fill: currentColor;
  }
  button:hover {
    background: rgba(0,0,0,.5);
  }
</style>