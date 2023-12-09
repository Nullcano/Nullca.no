<script>
	import { onMount } from 'svelte';
	import * as config from '$lib/config'
	const localDateTime = new Date().toLocaleString('en-US', { timeZone: 'Europe/Oslo', hour: 'numeric', minute: 'numeric', hour12: true });

  let clipPercentage = 0;
	let isInit = false;
  let glitchElement;

  function updateClipPath() {
    clipPercentage = clipPercentage === 0 ? 100 : 0;
    isInit = clipPercentage === 100;
    const nextInterval = getRandomInterval();
    setTimeout(updateClipPath, nextInterval);
	}

  const getRandomInterval = () => {
    return Math.floor(Math.random() * (1000 - 10 + 1) + 10);
  };

  onMount(() => {
		updateClipPath();
  });
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div class="splash w-100 h-100 br4 bg-center cover" style="background-image:url('images/splash.gif')">
	<div class="h-100 flex flex-column items-center justify-between gap-3 bg-black-50">
		<div class="w-100 pa3 flex flex-column flex-row-l justify-between gap-2">
			<div class="pa3 br4 bg-black-50 flex flex-column gap-2 lh-copy">
				<div>I'm Steffen Wold, the human entity behind the <span bind:this={glitchElement} class:init={isInit} class="glitch" data-text="Nullcano">Nullcano</span> handle.</div>
				<div class="measure f6 white-50">I committed to digital design in 2008, immersing myself in the spheres of app design and development. Viewing code as a refined form of artistic expression, I specialize in crafting pragmatic solutions with a discernible aesthetic touch. Over the years, I've cultivated expertise in optimizing the symbiosis between user and developer experiences, prioritizing not only efficiency but also the seamless integration of user-flows for clients and work-flows for developers.</div>
			</div>
			<div class="flex justify-center-l gap-2 ttu">
				<span>{localDateTime}</span>
				<span>🇳🇴</span>
				<span>Lillehammer</span>
			</div>
		</div>
		<div class="w-100 pa3 pa4-l flex flex-column flex-row-l justify-between gap-3">
			<div class="h-100 flex flex-column justify-between lh-solid ttu">
				<span class="f2 f1-l">Steffen Wold</span>
				<span class="mv3 mv0-l f4 f2-l white-50">@Nullcano</span>
			</div>
			<div class="mt3 mt0-l measure h-100 flex flex-column justify-end gap-2">
				<span class="f3 ttu">Break Free From</span>
				<span class="db f4 serif tr-l i tracked">Conformity.</span>
				<span class="w5 f7 white-50 tj">Inject vitality into lifeless interfaces. Unleash creative chaos on the mundane. Reject the ordinary. Embrace the extraordinary. Liberate our digital existence. Never settle for boring. Renew the visual legacy. Repaint the digital canvas.</span>
			</div>
		</div>
	</div>
</div>

<style>
	.glitch {
		position: relative;
		margin-left: .5rem;
		margin-right: -.5rem;
		color: transparent;
	}
	.glitch::before, .glitch::after {
		position: absolute;
		width: max-content;
		transition: all .2s linear;
		color: rgb(214, 146, 163);
	}
	.glitch::before {
		left: -.5rem;
		content: attr(data-text);
		clip-path: inset(0 0 0 0);
	}
	.glitch::after {
		left: 0;
		content: attr(data-text);
		clip-path: inset(0 0 100% 0);
	}
	.glitch.init::before {
		left: 0;
		clip-path: inset(100% 0 0% 0);
	}
	.glitch.init::after {
		left: -.5rem;
		clip-path: inset(0 0 0 0);
	}
</style>