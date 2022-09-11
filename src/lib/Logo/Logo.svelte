<script>
  import AnimatedEmblem from "$lib/Logo/AnimatedEmblem.svelte";
</script>

<div class="logo">
  <AnimatedEmblem />
  <div class="text">
    <strong class="name">Steffen</strong>
    <span class="id">ID</span>
  </div>
</div>

<style>
  .logo {
    display: grid;
    grid-template-columns: 3rem 1fr;
    align-items: center;
    gap: .5rem;
    pointer-events: none;
    overflow: hidden;
  }
  .text {
    display: flex;
    align-items: flex-start;
    gap: .5rem;
    text-transform: uppercase;
    transform: translateX(-20vw);
    animation: appear .5s linear forwards;
    animation-delay: .25s;
    line-height: 1.25;
  }
  .name {
    font-size: 1.5rem;
    font-weight: 700;
  }
  .id {
    font-size: 1.25rem;
    color: rgba(255,255,255,.5);
    border-bottom: 1px solid rgba(255,255,255,.5);
  }
  @keyframes appear {
    to {
      transform: translateX(0);
    }
  }
  @media screen and (max-width: 30em) {
    .text {
      display: none;
    }
  }
</style>