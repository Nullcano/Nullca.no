<script>
  import Avatar from '$lib/components/media/Avatar.svelte'

  export let name, portrait, confidence, text;
</script>

<div class="message">
  <div class="details">
    <Avatar image={portrait} text={name} size="small" />
    <div class="name">{name}</div>
    <div class="confidence {confidence.toLowerCase()}">
      <img src="/images/{confidence.toLowerCase()}.svg" alt={confidence}>
      <span>{confidence}</span>
    </div>
  </div>
  <div class="content">
    <p>{text}</p>
  </div>
</div>

<style>
  .message {
    max-width: 20rem;
    margin-bottom: 1.5rem;
    margin-inline-start: 1.5rem;
    padding: .75rem;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    word-break: break-word;
    background: rgba(0,0,0,.5);
    clip-path: var(--clip-m);
  }
  .details {
    display: flex;
    align-items: center;
    gap: .75rem;
  }
  .details img {
    max-width: 2.5rem;
  }
  .name, .confidence {
    display: flex;
    align-items: center;
    gap: .25rem;
    text-transform: uppercase;
    font-size: 14px;
  }
  .name {
    color: var(--light-60);
  }
  .confident {
    color: hsl(140, 50%, 50%);
  }
  .conventional {
    color: hsl(40, 75%, 50%);
  }
  .confused {
    color: hsl(345, 100%, 50%);
  }
  .content {
    margin-inline-start: 2.75rem;
  }
  p {
    margin: 0;
  }
</style>