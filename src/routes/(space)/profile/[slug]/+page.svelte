<script>
  import { selectedBot } from '$lib/bots'
  import Avatar from '$lib/components/media/Avatar.svelte'
</script>

<svelte:head>
  <title>{$selectedBot.name} &middot; Profile &middot; Nullcano</title>
  <link href="/css/{$selectedBot.name}.css" rel="stylesheet">
</svelte:head>

<section>
  <div class="cover" style="background-image: url('{$selectedBot.cover}')"></div>
  <div class="inner">
    <div class="avatar-provider">
      <Avatar image={$selectedBot.portrait} size={"large"} />
    </div>
    <div class="details">
      <div class="title">
        <div>
          <div class="name">{$selectedBot.name}</div>
          <div class="role">{$selectedBot.role}</div>  
        </div>
        <div>
          {#if $selectedBot.interactive}
            <a href={$selectedBot.chatSlug}>Start Chat</a>
          {/if}
        </div>
      </div>
      <div class="bio">
        {@html $selectedBot.bio}
      </div>
    </div>
  </div>
</section>

<style>
  section {
    margin-block: 3rem;
  }
  .cover {
    width: 100%;
    height: 9rem;
    border-radius: 1.5rem;
    background-position: center;
    background-size: cover;
  }
  .inner {
    position: relative;
    top: -2rem;
    display: grid;
    grid-template-columns: auto 1fr;
  }
  .avatar-provider {
    position: relative;
    margin-inline: 1.5rem;
    z-index: 1;
  }
  .details {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  .name {
    font-size: 2rem;
  }
  .role {
    color: rgba(255,255,255,.5)
  }
  .bio {
    max-width: 60ch;
    margin-block: 1rem;
    line-height: 1.5;
  }
  a {
    display: block;
    padding: .5rem 1rem;
    border: 2px solid rgba(255,255,255,.1);
    text-transform: uppercase;
    border-radius: 1.5rem;
    transition: all .25s linear;
  }
  a:hover {
    background-color: rgba(0,0,0,.5);
  }
</style>