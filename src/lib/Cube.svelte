<div class="figure">
	<div class="circle one" />
	<div class="circle two" />
	<div class="square one" />
	<div class="square two" />
</div>

<style>
	.figure {
		position: absolute;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
	}
	.circle,
	.square {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 2px solid #000;
		background-color: rgba(0, 0, 0, 0.1);
	}
	.circle {
		width: 30rem;
		height: 30rem;
		border-radius: 50%;
	}
	.square {
		width: 15rem;
		height: 15rem;
	}
	.circle.one {
		animation: cone 5s linear infinite;
	}
	.circle.two {
		animation: ctwo 5s linear infinite;
	}
	.square.one {
		animation: sone 5s linear infinite;
	}
	.square.two {
		animation: stwo 5s linear infinite;
	}
	@keyframes cone {
		to {
			transform: translate(-50%, -50%) rotateY(360deg);
		}
	}
	@keyframes ctwo {
		to {
			transform: translate(-50%, -50%) rotateX(360deg);
		}
	}
	@keyframes sone {
		to {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}
	@keyframes stwo {
		to {
			transform: translate(-50%, -50%) rotate(-360deg);
		}
	}
	@media (max-width: 768px) {
		.circle {
			width: 15rem;
			height: 15rem;
			border: 1px solid #000;
		}
		.square {
			width: 7.5rem;
			height: 7.5rem;
			border: 1px solid #000;
		}
	}
</style>
