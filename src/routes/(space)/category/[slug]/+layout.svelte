<script>
	import ProjectsNav from '$lib/components/sidebar/ProjectsNav.svelte';
</script>

<div class="layout relative">
	<ProjectsNav />
	<div class="page">
		<slot></slot>
	</div>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 1rem;
	}
	.page {
		height: calc(100vh - 7rem);
		overflow: hidden;
	}
</style>