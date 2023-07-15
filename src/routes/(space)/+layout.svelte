<script>
	import TopBar from '$lib/components/topbar/TopBar.svelte'
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte'
	import Chat from '$lib/components/Chat/Chat.svelte'
	import '../../app.css'
</script>

<div class="min-vh-100">
	<TopBar />
	<div class="grid grid-x-auto-fill">
		<Sidebar />
		<div class="grid grid-x-fill-auto">
			<main class="ma4">
				<section class="mw8 center">
					<slot></slot>
				</section>
			</main>
			<Chat />
		</div>
	</div>
</div>