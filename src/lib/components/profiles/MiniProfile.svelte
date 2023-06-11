<script>
  export let isRotated = false
  export let image, name, link
</script>

{#if link}
  <a class="mini-profile" href="{link}">
    <div class="avatar {isRotated ? "rotated" : ""}" style="background-image:url('{image}')"></div>
    <div>{name}</div>
  </a>
{:else}
  <div class="mini-profile">
    <div class="avatar {isRotated ? "rotated" : ""}" style="background-image:url('{image}')"></div>
    <div>{name}</div>
  </div>
{/if}

<style>
  .mini-profile {
    padding-block: .25rem;
    padding-inline: .25rem .5rem;
    position: relative;
    display: flex;
    align-items: center;
    align-self: flex-start;
    gap: 0.5rem;
    border-radius: 60rem;
    border: 1px solid rgba(255,255,255,.1);
    background-color: rgba(0,0,0,.5);
    color: #fff;
    text-decoration: none;
  }

  .avatar {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
  }

  .avatar.rotated {
    transform: rotate(180deg);
  }
</style>