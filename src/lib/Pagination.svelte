<script>
	import Icon from './Icon.svelte';
	
  export let rows;
  export let perPage;
  export let trimmedRows;

  $: totalRows = rows.length 
  $: currentPage = 0
  $: totalPages = Math.ceil(totalRows / perPage) 
  $: start =  currentPage * perPage
  $: end = currentPage === totalPages - 1 ? totalRows - 1 : start + perPage - 1  ;

  $: trimmedRows = rows.slice(start, end + 1);

  $: totalRows, currentPage = 0
  $: currentPage, start, end
</script>

{#if totalRows && totalRows > perPage}
  <div class='pagination'>
    <button on:click={() => currentPage -= 1} 
      disabled={currentPage === 0 ? true : false} 
      aria-label="left arrow icon" 
      aria-describedby="prev">
      <Icon name = 'arrow' direction="s" />
    </button>
    <span id='prev' class='sr-only'>Load previous {perPage} rows</span>
    <p>{start + 1} - {end + 1} of {totalRows}</p>
    <button on:click={() => currentPage += 1} 
      disabled={currentPage === totalPages - 1 ? true : false} 
      aria-label="right arrow icon" 
      aria-describedby="next">
      <Icon name = 'arrow' direction='n' />
    </button>
    <span id='next' class='sr-only'>Load next {perPage} rows</span>
  </div>
{/if}


<style>
  .sr-only {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
  .pagination {
    margin: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: all;
  }
  .pagination p {
    margin: 0 1rem;
  }
	button {
    margin: 0 1rem;
		display: grid;
    place-content: center;
    width: 2.5rem;
    height: 2.5rem;
    color: inherit;
    background: hsl(200, 15%, 6%);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: .5;
    transition: opacity .2s ease-in-out;
	}
  button:hover {
    opacity: 1;
  }
</style>