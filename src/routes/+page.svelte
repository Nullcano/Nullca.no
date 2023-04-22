<svelte:head>
	<title>Nullcano</title>
	<meta name="description" content="Nullcano" />
</svelte:head>

<div class="intro">
	<h3>WhoIs</h3>
	<p>Nullcano is a designer and developer of all things digital.</p>
</div>

<div class="grid-nav">
	<a href="commands">
		<div class="nav-card">
			<div class="card-icon">
				<svg viewBox="0 0 650 650" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M225 225H425M225 225V425M225 225H125C69.7717 225 25 180.228 25 125C25 69.7717 69.7717 25 125 25C180.228 25 225 69.7717 225 125M425 225V425M425 225V125C425 69.7717 469.77 25 525 25C580.23 25 625 69.7717 625 125C625 180.228 580.23 225 525 225M225 425H125C69.7717 425 25 469.77 25 525C25 580.23 69.7717 625 125 625C180.228 625 225 580.23 225 525V425ZM225 425H325M425 425V525C425 580.23 469.77 625 525 625C580.23 625 625 580.23 625 525C625 469.77 580.23 425 525 425H425Z" stroke="white" stroke-width="50" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
			</div>
			<div class="card-title">Twitch Commands</div>
		</div>
	</a>
	<div></div>
	<div></div>
</div>

<style>
	.intro {
		margin-bottom: 2rem;
	}
	h3 {
		text-transform: uppercase;
		opacity: .5;
	}
	.grid-nav {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: 1rem;
	}

	.nav-card {
		padding: 1rem;
		background-color: hsl(256, 25%, 16%);
		transition: background-color .2s linear;
		border-radius: 1rem;
	}

	.nav-card:hover {
		background-color: hsl(256, 25%, 12%);
	}

	.card-icon {
		padding: .5rem;
		width: 3rem;
		height: 3rem;
		border-radius: 1rem;
		background-color: hsl(256, 25%, 24%);
	}

	.card-title {
		margin-top: 1rem;
		font-size: 1.5rem;
	}
</style>
