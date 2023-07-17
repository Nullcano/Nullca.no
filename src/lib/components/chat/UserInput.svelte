<script>
  import { createEventDispatcher } from 'svelte';

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

<form class="h3 grid grid-x-fill-auto items-center bt b--dark-gray" on:submit={handleSubmit}>
  <input class="input-reset pa3 bg-transparent bn outline-0 white sans-serif" type="text" name="message" placeholder="Message Null AI" {value} {disabled} />
  <button class="link w3 h3 button-reset br-100 bg-transparent white-50 hover-white-10 animate bn pointer" type="submit">
    <svg class="w2 h2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="m0 16 12 4 4 12L32 0zm14.016 2.016 12-12L16 24z" fill="currentColor" />
    </svg>
  </button>
</form>