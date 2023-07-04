<script>
  import TopBar from '$lib/components/TopBar.svelte'
	import NavBar from '$lib/components/NavBar.svelte'
	import '../../app.css'
</script>

<TopBar />
<NavBar />

<div class="relative mt5 pv5 ph3 w-100 mw8 center">
	<slot></slot>
</div>