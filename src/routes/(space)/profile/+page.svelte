<script>
	import * as config from '$lib/config'
	import Avatar from '$lib/components/media/Avatar.svelte'
</script>

<svelte:head>
	<title>About - {config.title}</title>
</svelte:head>

<section class="br4 ba b--white-10 overflow-hidden">
	<div class="page-cover w-100 h5 cover bb b--white-10" style="background: url('/images/covers/Nullcano.webp') center"></div>
	<div class="pa4">
		<div class="relative" style="margin-top:-6rem">
			<Avatar image="/images/npc/Nullcano.webp" size="l" variant="circle" link={null} text="Nullcano" />
		</div>
		<h1 class="display fw4">Steffen Wold</h1>
		<p class="measure white-50 lh-copy">Deeply passionate about crafting beautiful digital landscapes and humbly unraveling intricate complexities.</p>
	</div>
</section>