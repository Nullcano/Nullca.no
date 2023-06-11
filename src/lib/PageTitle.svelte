<script>
  export let link, icon, title
</script>

<div class="page-title">
	<a class="back-link" href="{link}">
		<svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M69.622 364.704H765.22C774.444 364.704 783.291 368.423 789.813 375.042C796.336 381.662 800 390.639 800 400C800 409.361 796.336 418.339 789.813 424.958C783.291 431.577 774.444 435.296 765.22 435.296H69.622C60.3978 435.296 51.5514 431.577 45.0289 424.958C38.5064 418.339 34.8421 409.361 34.8421 400C34.8421 390.639 38.5064 381.662 45.0289 375.042C51.5514 368.423 60.3978 364.704 69.622 364.704Z" fill="currentColor"/>
      <path d="M84.0209 400L372.485 692.671C379.016 699.298 382.685 708.287 382.685 717.66C382.685 727.033 379.016 736.022 372.485 742.649C365.955 749.277 357.097 753 347.861 753C338.625 753 329.768 749.277 323.237 742.649L10.2179 424.989C6.97897 421.711 4.40924 417.816 2.65588 413.528C0.902529 409.24 0 404.643 0 400C0 395.357 0.902529 390.76 2.65588 386.472C4.40924 382.184 6.97897 378.289 10.2179 375.011L323.237 57.3509C329.768 50.7233 338.625 47 347.861 47C357.097 47 365.955 50.7233 372.485 57.3509C379.016 63.9784 382.685 72.9673 382.685 82.3401C382.685 91.7129 379.016 100.702 372.485 107.329L84.0209 400Z" fill="currentColor"/>
    </svg>
	</a>
	<div class="title-icon">
		<img src="{icon}" alt="{title}" />
	</div>
	<div class="title">{title}</div>
</div>

<style>
	.page-title {
    margin-block: 2rem;
		display: flex;
		align-items: center;
		gap: 1rem;
	}
  .back-link {
    padding: .75rem;
		width: 3rem;
		height: 3rem;
    border-radius: 100%;
  }
  .back-link:hover {
    background-color: hsla(256, 25%, 16%);
  }
	.title-icon {
    padding: 1rem;
		width: 4rem;
		height: 4rem;
    border-radius: 100%;
    background-color: hsla(256, 25%, 16%);
	}
  .title {
    font-size: 2rem;
    text-transform: uppercase;
  }
</style>