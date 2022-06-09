<script>
	import Profile from '$lib/Profile.svelte';
	import ProfileTabs from '$lib/ProfileTabs.svelte';
</script>

<svelte:head>
	<title>About - Steffen Wold</title>
	<meta property="og:title" content="About - Steffen Wold" />
	<meta property="og:site_name" content="Steffen Wold" />
	<meta property="og:url" content="https://steffen.id/about" />
	<meta property="og:description" content="About Steffen Wold. Norwegian frontend developer." />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="" />
</svelte:head>

<Profile />
<div class="contained">
	<ProfileTabs />
</div>
