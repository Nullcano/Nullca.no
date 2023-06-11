<script>
  import Avatar from '$lib/components/media/Avatar.svelte'
  import MiniProfile from '$lib/components/profiles/MiniProfile.svelte'

  export let botPortrait, botName, botLink, postTitle, postImage, postSlug, postCategory, postDescription
</script>

<article class="card">
  <aside>
    <Avatar image={botPortrait} text={botName} link={botLink} size="medium" />
  </aside>
  <div class="content">
    <div class="meta">
      <a href={botLink}>
        <strong>{botName}</strong>
      </a>
      <span>published to</span>    
      <MiniProfile image="/images/{postCategory.toLowerCase()}.png" name={postCategory} link="/categories/{postCategory.toLowerCase()}" />
    </div>
    <a href="/projects/{postSlug}" class="embed">
      <strong>{postTitle}</strong>
      <span>{postDescription}</span>
      <figure>
        <img src="/images/{postImage}" alt={postTitle} />
      </figure>
    </a>
  </div>
</article>

<style>
  .card {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
  }
  .meta {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  .embed {
    max-width: 32rem;
    margin-top: .5rem;
    padding: 1rem;
    background-color: rgba(0,0,0,.5);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
  strong {
    font-weight: 600;
  }
  figure {
    position: relative;
    padding: .5rem;
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    border-radius: 1rem;
    border: 1px solid rgba(255,255,255,.1);
    display: grid;
    place-content: center;
    overflow: hidden;
  }
  figure img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
