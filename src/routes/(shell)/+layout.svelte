<script>
	import AppMenu from '$lib/components/topbar/AppMenu.svelte'
	import '../../app.css'
</script>

<div class="relative">
	<AppMenu />
	<slot></slot>
</div>