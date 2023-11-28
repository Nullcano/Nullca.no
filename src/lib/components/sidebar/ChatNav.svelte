<script>
  const agents = [
    {
      name: 'Null AI',
      category: 'General',
      isActive: true
    }
  ]
  const selectAgent = () => {
    agents.forEach(agent)
  }
</script>

<aside class="flex flex-column gap-2">
  <span class="ma0 ph2 pa3 white-50 bb bw1 b--near-black">Null Chat</span>
  <div class="overflow-y-auto">
    {#each agents as agent}
      <a role="button" class="link white pv2 ph3 br3 hover-bg-white-10 flex items-center justify-between" class:bg-near-black={agent.isActive} href="{null}" on:click={selectAgent} on:keydown={selectAgent} tabindex="0">
        <div class="flex items-center gap-3">
          <div class="icon w1 h1 br-100 bg-white-10"></div>
          <div>{agent.name}</div>
        </div>
        <div class="pv1 ph2 f6 bg-white-10 br2">{agent.category}</div>
      </a>
    {/each}
  </div>
</aside>

<style>
  aside {
    position: sticky;
    top: 4rem;
    width: 16rem;
		height: calc(100vh - 4rem);
		overflow-x: hidden;
		overflow-y: auto;
    transition: width .2s linear;
	}
</style>