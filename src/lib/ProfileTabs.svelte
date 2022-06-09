<script>
	import { Tabs, TabList, TabPanel, Tab } from '$lib/Tabs/tabs.js';
	import Toolbox from '$lib/Toolbox.svelte';
</script>

<Tabs>
	<TabList>
		<Tab>Details</Tab>
		<Tab>Toolbox</Tab>
		<Tab>Resume</Tab>
	</TabList>

	<TabPanel>
		<h2>Short bio</h2>
		<p>I am a digital design enthusiast from Innlandet, Norway.</p>
		<p>My main focus at the moment is frontend development and design application.</p>
		<p>Other than coding, I like to draw and play video games.</p>
	</TabPanel>

	<TabPanel>
		<Toolbox />
	</TabPanel>

	<TabPanel>
		<h2>Resume</h2>
		<p>Coming soon...</p>
	</TabPanel>
</Tabs>

<style>
	p {
		line-height: 1;
	}
</style>
