<script>
  export let name, portrait, confidence, text;
</script>

<div class="message">
  <div class="details">
    <img src={portrait} alt={name}>
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
    max-width: 18rem;
    margin: .5rem;
    padding-block: .5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-self: flex-start;
    background: rgba(0, 0, 0, .25);
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
    padding-inline: 1rem;
  }
  p {
    margin: 0;
  }
</style>