<script>
  let active = false;

</script>
<nav>
  <ul class:active={active} on:click="{() => active = !active}">
    <a href="/">Home</a> <span class="sep">▨</span>
    <a href="/about">About</a> <span class="sep">▨</span> 
    <a href="/projects">Projects</a> <span class="sep">▧</span> 
    <a href="/journal">Academy Journal</a> <span class="sep">▧</span> 
    <a href="mailto:woldsteffen@gmail.com">Mail</a>
  </ul>
  <div class="only-mobile" on:click="{() => active = !active}">
    <span>Menu ≡</span>
  </div>
</nav>

<style>
  nav {
    position: sticky;
    width: 100%;
    top: 1rem;
    padding: .5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: hsl(160, 25%, 75%);
    background: hsl(160, 25%, 5%);
    border: 2px solid hsl(160, 25%, 25%);
    border-radius: 1rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.25rem;
    z-index: 9;
  }
  ul {
    margin: 0;
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }
  .sep {
    font-size: 2rem;
  }
  .only-mobile {
    display: none;
  }
  @media (max-width: 768px) {
    nav {
      display: flex;
      flex-direction: column;
    }
    ul {
      padding: 0;
      order: 1;
      display: none;
    }
    ul.active {
      display: flex;
      flex-direction: column;
    }
    a {
      width: 100%;
      padding: 1rem;
    }
    .sep {
      display: none;
    }
    .only-mobile {
      order: 0;
      width: 100%;
      display: grid;
      place-content: center;
      cursor: pointer;
    }
  }
</style>