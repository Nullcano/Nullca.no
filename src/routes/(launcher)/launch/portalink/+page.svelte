<script>
  import { onMount } from 'svelte';

  let overworldX = 0;
  let overworldY = 0;
  let overworldZ = 0;

  let netherX = Math.floor(overworldX / 8);
  let netherY = Math.floor(overworldY);
  let netherZ = Math.floor(overworldZ / 8);

  function calculateOverworldPortalLocation() {
    overworldX = netherX * 8;
    overworldY = netherY;
    overworldZ = netherZ * 8;
  }

  function calculateNetherPortalLocation() {
    netherX = Math.floor(overworldX / 8);
    netherY = Math.floor(overworldY);
    netherZ = Math.floor(overworldZ / 8);
  }

  onMount(() => {
    calculateNetherPortalLocation();
  });
</script>

<svelte:head>
  <title>Portalink</title>
</svelte:head>

<main>
  <h1>Portalink</h1>
  
  <h2>Overworld</h2>
  <div class="row">
    <label>
      <span>X</span>
      <input type="number" bind:value={overworldX} on:input={calculateNetherPortalLocation} />
    </label>
    <label>
      <span>Y</span>
      <input type="number" bind:value={overworldY} on:input={calculateNetherPortalLocation} />
    </label>
    <label>
      <span>Z</span>
      <input type="number" bind:value={overworldZ} on:input={calculateNetherPortalLocation} />
    </label>
  </div>

  <h2>Nether</h2>
  <div class="row">
    <label>
      <span>X</span>
      <input type="number" bind:value={netherX} on:input={calculateOverworldPortalLocation} />
    </label>
    <label>
      <span>Y</span> 
      <input type="number" bind:value={netherY} on:input={calculateOverworldPortalLocation} />
    </label>
    <label>
      <span>Z</span>
      <input type="number" bind:value={netherZ} on:input={calculateOverworldPortalLocation} />
    </label>
  </div>
</main>

<style>
  main {
    padding: 1.5rem;
    width: 60vw;
    height: 70vh;
    display: flex;
    flex-direction: column;
  }
  h1 {
    margin: 0;
    font-size: 3rem;
    text-transform: uppercase;
  }
  h2 {
    margin-block: 3rem 1.5rem;
  }
  label {
    position: relative;
    display: inline-block;
    height: 3rem;
  }
  span {
    position: absolute;
    top: 3px;
    left: 3px;
    display: block;
    width: 3rem;
    height: 3rem;
    display: grid;
    place-content: center;
    border-radius: 50%;
    background: var(--blue);
    font-weight: 600;
  }
  input {
    appearance: none;
    padding-inline: 4rem 1rem;
    width: 8ch;
    height: 3rem;
    font-size: 2rem;
    border-radius: 60em;
    background-color: var(--blue-light);
    color: inherit;
    border: 2px solid var(--blue);
  }
  input:focus {
    border: 2px solid var(--blue-light);
    outline: 0;
  }
</style>
