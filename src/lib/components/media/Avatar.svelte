<script>
  export let link, image, text, size
</script>

{#if !link}
  <div class="avatar {size}">
    <img src={image} alt={text} />
  </div>
  {:else}
  <a href={link} alt={text}>
    <div class="avatar {size}">
      <img src={image} alt={text} />
    </div>
  </a>
{/if}

<style>
  .avatar {
    position: relative;
    background-image: url('/images/holo.webp');
    background-position: center;
  }

  .avatar.small {
    padding: 1px;
    width: 2em;
    height: 2rem;
    clip-path: var(--clip-s);
  }
  .avatar.small img {
    clip-path: var(--clip-s);
  }

  .avatar.medium {
    padding: 2px;
    width: 4rem;
    height: 4rem;
    clip-path: var(--clip-m);
  }
  .avatar.medium img {
    clip-path: var(--clip-m);
  }

  .avatar.large {
    padding: 3px;
    width: 6em;
    height: 6rem;
    clip-path: var(--clip-l);
  }
  .avatar.large img {
    clip-path: var(--clip-l);
  }
</style>