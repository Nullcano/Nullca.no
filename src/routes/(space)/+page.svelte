<script>
	import * as config from '$lib/config'
	import AppFeed from '$lib/components/AppFeed.svelte'
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<div class="h5 flex flex-column justify-center">
		<h1 class="ma0 display fw4 f-headline ttu">Nullcano</h1>
		<span class="display f1 ttu white-50">AKA. Steffen IRL.</span>
	</div>
	<div class="pa3 br4 ba b--dark-gray">
		<AppFeed />
	</div>
</section>