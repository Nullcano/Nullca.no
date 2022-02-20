<script>
  let active = false
</script>

<div class="navbar-container">
  <div class="rainbowbar"></div>
  <nav class="navbar">
    <ul class="left">
      <li>
        <a href="/">
          <div class="title-wrap">
            <img src="https://crafatar.com/avatars/5d5a7769-bc60-4eda-aca0-8d54b40a4ce0?size=100&overlay" alt="Nullcano" />
            <h1>Nullcano</h1>
          </div>
        </a>
      </li>
    </ul>
    <ul class="center">
      <li>
        <a href="/">Index</a>
      </li>
      <li>
        <a href="/p">All posts</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
    <ul class="right">
      <li>
        <a href="https://ko-fi.com/nullcano" target="_blank">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentcolor" d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/>
          </svg>
          <span>Ko-fi</span>
        </a>
      </li>
    </ul>
  </nav>

  <nav class="navbar-small">
    <ul class="left">
      <li>
        <a href="/">
          <div class="title-wrap">
            <img src="https://crafatar.com/avatars/5d5a7769-bc60-4eda-aca0-8d54b40a4ce0?size=100&overlay" alt="Nullcano" />
            <h1>Nullcano</h1>
          </div>
        </a>
      </li>
    </ul>
    <ul class="right">
      <li>
        <div class="toggle" on:click={() => active = !active}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.97 384.97" style="enable-background:new 0 0 384.97 384.97" xml:space="preserve">
            <path d="M12.03 84.212h360.909c6.641 0 12.03-5.39 12.03-12.03 0-6.641-5.39-12.03-12.03-12.03H12.03C5.39 60.152 0 65.541 0 72.182c0 6.641 5.39 12.03 12.03 12.03zM372.939 180.455H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03s-5.389-12.03-12.03-12.03zM372.939 300.758H12.03c-6.641 0-12.03 5.39-12.03 12.03 0 6.641 5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03.001-6.641-5.389-12.03-12.03-12.03z"/>
          </svg>
        </div>
      </li>
    </ul>
  </nav>

  <ul class="nav-card" class:active={active} on:click={() => active = !active}>
    <li>
      <a href="/">Index</a>
    </li>
    <li>
      <a href="/p">All posts</a>
    </li>
    <li>
      <a href="/about">About</a>
    </li>
    <li>
      <a href="https://ko-fi.com/nullcano" target="_blank">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentcolor" d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/>
        </svg>
        <span>Ko-fi</span>
      </a>
    </li>
  </ul>
</div>

<style>
  .rainbowbar {
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, #f44336, #e91e63, #9c27b0, #673ab7, #3f51b5, #2196f3, #03a9f4, #00bcd4, #009688, #4caf50, #8bc34a, #cddc39, #ffeb3b, #ffc107, #ff9800, #ff5722, #795548, #9e9e9e, #607d8b);
  }
  .navbar {
    position: sticky;
    top: 4px;
    right: 0;
    background: hsl(0, 0%, 8%);
    color: hsl(0, 0%, 95%);
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9;
  }
  .left {
    margin-left: 1rem;
  }
  .right {
    margin-right: 1rem;
  }
  .title-wrap {
    display: flex;
    align-items: center;
    gap: .5rem
  }
  .navbar-small {
    position: fixed;
    top: 0;
    right: 0;
    background: hsla(0, 0%, 8%, .9);
    color: hsl(0, 0%, 95%);
    width: 100%;
    display: none;
    justify-content: space-between;
    align-items: center;
    z-index: 9;
  }
  .nav-card {
    position: fixed;
    top: 4rem;
    right: .5rem;
    width: 200px;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: .5rem;
    margin: 0;
    background: hsla(0, 0%, 12%, .9);
    color: hsl(0, 0%, 95%);
    border-radius: 9px;
    z-index: 9;
    transition: all .3s ease-in-out;
  }
  .nav-card li {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .nav-card a {
    color: hsl(0, 0%, 95%);
    font-size: 1.2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    width: 100%;
    height: 3rem;
  }
  .nav-card.active {
    display: flex;
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: currentColor;
  }
  .toggle {
    padding: .5rem;
    cursor: pointer;
  }
  nav .center {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  nav .right {
    margin: 0 2rem;
  }
  a {
    padding: .5rem;
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    gap: .5rem;
    transition: all .2s ease-in-out;
  }
  a:hover {
    transform: scale(1.05);
    border: 0;
  }
  .nav-card a:hover {
    transform: none;
  }
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    border: 3px solid hsla(0, 0%, 5%, .25);
  }
  h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media (max-width: 1140px) {

  }

  @media (max-width: 768px) {
    .navbar {
      display: none;
    }
    .navbar-small {
      display: flex;
    }
  }
</style>