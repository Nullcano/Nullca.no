<script>
  let active = false;

</script>

<nav>
  <div class="toggle" on:click="{() => active = !active}">
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm11.5 0a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-1.25 7a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm1.25 4.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM2.25 9.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm7-1.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM8 15a1.25 1.25 0 100-2.5A1.25 1.25 0 008 15zM9.25 2.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM2.25 15a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill="#000"/>
    </svg>
  </div>
  <ul class:active={active} on:click="{() => active = !active}">
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
    <a href="/journal">Academy Journal</a>
    <a href="mailto:woldsteffen@gmail.com">Mail</a>
  </ul>
</nav>

<style>
  nav {
    position: fixed;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.25rem;
    z-index: 9;
  }
  ul {
    position: fixed;
    top: 4rem;
    right: 1rem;
    width: 0;
    height: 0;
    max-width: 400px;
    list-style: none;
    display: flex;
    flex-direction: column;
    background-color: white;
    background-image: url('../noise.svg');
    background-position: 0 0;
    animation: grain .5s infinite;
    overflow: hidden;
  }

  ul.active {
    width: 100%;
    height: auto;
    transition: all .25s ease-in-out;
  }

  a {
    padding: 0;
    font-size: 1.5rem;
  }

  .active a {
    padding: 1rem;
    transition: all .25s ease-in-out;
  }

  .active a:hover {
    padding: 1rem 2rem;
  }

  .toggle {
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
 
  }
</style>