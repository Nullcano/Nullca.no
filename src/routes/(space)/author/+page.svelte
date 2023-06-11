<script>
  import AuthorProfile from '$lib/components/AuthorProfile.svelte'

  const tags = [
    "HTML",
    "CSS",
    "C#",
    "Blazor",
    "Svelte/Kit",
    "JavaScript",
    "Logos",
    "Illustrations",
    "Icons",
    "Pixel Art",
    "Flat Art",
    "Voxel Art",
    "Cartoon Art",
    "UI/UIX",
    "Typography",
    "Animation",
    "Video Editing",
    "Photo Editing",
    "Branding",
    "Concept Writing",
    "Concept Design",
    "Web Design",
    "Web Development",
    "Software Development",
    "Software Design",
    "Game Development",
    "Game Design",
    "Game Modding",
    "Content Writing",
    "Online Marketing"
  ];
  const sortedTags = tags.sort()
</script>

<AuthorProfile />

<div class="content">
  <p>For over ten years, I've been working on projects similar to the ones featured on this website. I'm not going to showcase all my skills, as they encompass a range of media, but rather demonstrating my passion for creating things. That's why I put together this brief overview of my favorite buzzwords.</p>  
</div>

<div class="overview">
  {#each sortedTags as tag}
    <span class="tag">{tag}</span>
  {/each}
</div>

<style>
  .content {
    margin: 4rem;
    font-size: .8rem;
    color: rgba(255,255,255,.5);
    text-transform: uppercase;
    max-width: 60ch;
  }
  .overview {
    margin-block: 3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    cursor: default;
    user-select: none;
  }
  .tag {
    padding: .5rem 1rem;
    border-radius: 60em;
    background-color: rgba(255,255,255,.1);
    font-size: 1.5rem;
  }
  .tag:hover {
    background-color: rgba(255,255,255,.25);
  }
</style>