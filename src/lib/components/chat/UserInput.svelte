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

<form class="flex items-center gap-2" on:submit={handleSubmit}>
  <input class="input-reset w-100 pa3 br4 bg-black bn outline-0 white sans-serif" type="text" name="message" placeholder="Message Null AI" {value} {disabled} />
  <button class="pa2 link button-reset br4 bg-black white-50 hover-white-10 animate bn pointer" type="submit">
    <svg class="h2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L16 8L0 16L5.33333 8L0 0ZM5.44772 4.80915L7.57495 8L5.44772 11.1908L11.8294 8L5.44772 4.80915Z" fill="currentColor"/>
    </svg>
  </button>
</form>