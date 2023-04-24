<script>
  import PageTitle from "$lib/PageTitle.svelte";
	import GridNav from "$lib/GridNav.svelte";
	import NavItem from "$lib/NavItem.svelte";
</script>

<svelte:head>
	<title>Applications - Nullcano</title>
	<meta name="description" content="Nullcano" />
</svelte:head>

<PageTitle title='Applications' link='/' icon='apps.svg' />

<GridNav>
	<NavItem title='Tools' link='tools' icon='tools.svg' />
</GridNav>
