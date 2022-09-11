<script>
  import { goto } from '$app/navigation';
  import PageTitle from "$lib/PageTitle.svelte";
</script>

<div class="page">
  <PageTitle title="Archives" />

  <a href="journal">Journal from Ikomm Acedemy 2022</a>
</div>

<div class="button cta" on:click={() => goto("/")}>
	<svg class="flip-x" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
		<path d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07Z" fill="currentColor" fill-rule="nonzero"/>
	</svg>
</div>