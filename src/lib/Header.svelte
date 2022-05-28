<a href="/">
	<header>
		<div class="logo">
			<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M72.006 128.01a134.646 134.646 0 0 1-14.153 60.474 8 8 0 0 1-14.327-7.123 118.801 118.801 0 0 0 12.48-53.352 71.7 71.7 0 0 1 26.996-56.205A8 8 0 0 1 93.01 84.29a55.773 55.773 0 0 0-21.004 43.72Zm56-8a8 8 0 0 0-8 8 184.13 184.13 0 0 1-22.972 89.1 8 8 0 1 0 13.992 7.76 200.168 200.168 0 0 0 24.98-96.86 8 8 0 0 0-8-8Zm0-32a40.046 40.046 0 0 0-40 40 8 8 0 0 0 16 0 24 24 0 0 1 48 0 214.097 214.097 0 0 1-20.51 91.995 8 8 0 1 0 14.472 6.822 229.987 229.987 0 0 0 22.038-98.818 40.046 40.046 0 0 0-40-40Zm0-64.002a104.118 104.118 0 0 0-104 104A87.761 87.761 0 0 1 19 157.342a8 8 0 0 0 15.086 5.332 103.75 103.75 0 0 0 5.92-34.666 88 88 0 0 1 176 0 282.286 282.286 0 0 1-5.29 54.454 8 8 0 1 0 15.697 3.093 298.253 298.253 0 0 0 5.593-57.547 104.118 104.118 0 0 0-104-104Zm-33.61 128.16a8.01 8.01 0 0 0-9.43 6.25 150.79 150.79 0 0 1-17.204 45.437 8 8 0 1 0 13.86 7.996 166.733 166.733 0 0 0 19.024-50.252 8 8 0 0 0-6.25-9.43Zm33.61-96.159a72.929 72.929 0 0 0-8.991.557 8 8 0 1 0 1.982 15.877 56.721 56.721 0 0 1 7.009-.434 56.063 56.063 0 0 1 56 56 251.412 251.412 0 0 1-1.92 31.01 8 8 0 1 0 15.878 1.98 267.59 267.59 0 0 0 2.042-32.99 72.081 72.081 0 0 0-72-72Zm57.93 128.252a7.992 7.992 0 0 0-9.742 5.753 247.408 247.408 0 0 1-5.018 16.949 8 8 0 1 0 15.168 5.091 262.375 262.375 0 0 0 5.345-18.051 7.999 7.999 0 0 0-5.753-9.742Z"
				/>
			</svg>
		</div>
		<div class="info">
			<div class="title">
				<span>Steffen.</span>
			</div>
			<div class="subtitle">
				<span>Frontend</span>
				<span>Developer</span>
			</div>
		</div>
	</header>
</a>

<style>
	header {
		position: fixed;
		top: 1rem;
		left: 1rem;
		width: 100%;
		height: 3rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		transform-origin: top left;
		z-index: 1;
	}
	.logo {
		width: 3rem;
		height: 3rem;
		fill: inherit;
	}
	.info {
		display: flex;
		flex-direction: column;
	}
	.title {
		font-family: 'Krona One', sans-serif;
		text-transform: uppercase;
		font-size: 1.25rem;
	}
	.subtitle {
		font-size: 0.8rem;
		text-transform: uppercase;
	}

	@media (max-width: 768px) {
		header {
			transform: rotate(0deg) translateY(0);
			transform-origin: top left;
		}
		.logo {
			width: 2rem;
			height: 2rem;
		}
		.title {
			font-size: 1.5rem;
		}
	}
</style>
