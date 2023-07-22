<script>
  import TopBar from '$lib/components/topbar/TopBar.svelte'
	import '../../app.css'
</script>

<TopBar />

<main class="relative w-100 overflow-hidden" style="top:4rem;height:calc(100vh - 4rem)">
	<div class="page-provider vh-100">
		<slot></slot>
	</div>
</main>