<script>
  import Logo from '$lib/components/Logo.svelte'
  import '../../app.css'
</script>

<div class="inner-app">
  <a class="return" href="/">
    <div class="logo-provider">
      <Logo />
    </div>
    <span>Return</span>
  </a>
  <slot></slot>
</div>

<style>
  .inner-app {
    position: relative;
    margin: 2rem;
    width: calc(100vw - 4rem);
    height: calc(100vh - 4rem);
    border-radius: 2rem;
    background: var(--blue-dark);
    overflow-y: auto;
  }
  .logo-provider {
    width: 2rem;
  }
  .return {
    position: fixed;
    bottom: 4rem;
    left: 4rem;
		display: grid;
    grid-template-columns: auto 1fr;
		align-items: center;
    gap: .5rem;
		transition: all .25s ease-in-out;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    opacity: .5;
    z-index: 9;
	}
	.return:hover {
		opacity: 1;
	}
</style>