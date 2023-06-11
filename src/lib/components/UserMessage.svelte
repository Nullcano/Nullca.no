<script>
  import { bots } from '$lib/bots.js'
  export let text
</script>

<div class="message">
  <div class="details">
    <img src={$bots[0].portrait} alt={$bots[0].name}>
    <div class="name">{$bots[0].name}</div>
  </div>
  <div class="content">
    <p>{text}</p>
  </div>
</div>

<style>
  .message {
    max-width: 18rem;
    margin: .5rem 1rem;
    padding-block: .5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-self: flex-start;
    background: hsl(275, 50%, 25%);
    border-radius: 1rem;
    word-break: break-word;
  }
  .details {
    padding-inline: .5rem;
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  .details img {
    max-width: 2.5rem;
    border-radius: .5rem;
  }
  .name {
    color: rgba(255, 255, 255, .75);
  }
  .content {
    padding-inline: 1rem;
  }
  p {
    margin: 0;
  }
</style>