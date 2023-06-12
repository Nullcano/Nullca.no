<script>
  import { bots } from '$lib/bots.js'
  import Avatar from '$lib/components/media/Avatar.svelte'

  export let text
</script>

<div class="message">
  <div class="details">
    <Avatar image={$bots[0].portrait} text={$bots[0].name} size="small" />
    <div class="name">{$bots[0].name}</div>
  </div>
  <div class="content">
    <p>{text}</p>
  </div>
</div>

<style>
  .message {
    max-width: 20rem;
    margin-inline-start: 3rem;
    margin-bottom: 1.5rem;
    padding: .75rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-self: flex-start;
    word-break: break-word;
    background: hsla(185, 25%, 25%, 0.25);
    clip-path: var(--clip-m);
  }
  .details {
    display: flex;
    align-items: center;
    gap: .75rem;
  }
  .name {
    color: rgba(255, 255, 255, .75);
  }
  .content {
    margin-inline-start: 2.75rem;
  }
  p {
    margin: 0;
  }
</style>