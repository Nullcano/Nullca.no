<script>
	import GridNav from "$lib/GridNav.svelte";
	import NavItem from "$lib/NavItem.svelte";
</script>
<svelte:head>
	<title>Nullcano</title>
	<meta name="description" content="Nullcano" />
</svelte:head>

<GridNav>
	<NavItem title='About' link='about' icon='about.svg' />
	<NavItem title='Applications' link='apps' icon='apps.svg' />
	<NavItem title='Resources' link='resources' icon='resources.svg' />
</GridNav>