<script>
  export let icon, title, body
</script>

<div class="card-provider">
  <article class="card">
    <header>
      <div class="icon-provider">
        <div class="icon">
          <img src="/images/{icon}" alt={icon}>
        </div>
      </div>
      <h3 class="title">{title}</h3>
    </header>
    <div class="body">
      {@html body}
    </div>
  </article>
</div>

<style>
  .card-provider {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .card-provider::before {
    content: '';
    position: absolute;
    top: -.25rem;
    left: -.25rem;
    width: calc(100% - .25rem);
    height: calc(100% - .25rem);
    background: linear-gradient(325deg, #00ff8b 0%, #00b1ff 25%, #a400ff 75%, #ffa900 100%);
    clip-path: polygon(calc(0% + 1rem) 0%, 100% 0, 100% calc(100% - 1rem), calc(100% - 1rem) 100%, 0 100%, 0 calc(0% + 1rem));
    opacity: .5;
    transition: all .2s linear;
  }
  .card-provider:hover::before {
    width: calc(100% + .5rem);
    height: calc(100% + .5rem);
    opacity: 1;
  }
  .card {
    position: relative;
    padding: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    background: var(--dark-80);
    clip-path: polygon(calc(0% + 1rem) 0%, 100% 0, 100% calc(100% - 1rem), calc(100% - 1rem) 100%, 0 100%, 0 calc(0% + 1rem));
    overflow: visible;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1rem;
  }
  .icon-provider {
    position: relative;
  }
  .icon-provider::before {
    content: '';
    position: absolute;
    width: 2rem;
    height: 2rem;
    background: linear-gradient(325deg, #00ff8b 0%, #00b1ff 25%, #a400ff 75%, #ffa900 100%);
    clip-path: polygon(calc(0% + .5rem) 0%, 100% 0, 100% calc(100% - .5rem), calc(100% - .5rem) 100%, 0 100%, 0 calc(0% + .5rem));
    transform: scale(1.1);
  }
  .icon {
    position: relative;
    width: 2rem;
    height: 2rem;
    clip-path: polygon(calc(0% + .5rem) 0%, 100% 0, 100% calc(100% - .5rem), calc(100% - .5rem) 100%, 0 100%, 0 calc(0% + .5rem));
    overflow: hidden;
  }

  h3 {
    margin: 0;
    font-size: 1.25rem;
  }
</style>