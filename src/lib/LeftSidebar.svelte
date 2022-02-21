<script>
  import { posts } from '../data.js'

  let minecraftPosts = posts.filter(post => post.category.includes('Minecraft'))

  let closed = false
</script>

<aside class:closed={closed}>
  <div class="inner">
    <div class="title">
      <h3 class="label">Articles</h3>
      <div class="toggle" on:click={() => closed = !closed}>
        <svg viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="m15 6-6 6 6 6" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <ul>
      <a href="/all">
        <li>
          <div class="left">
            <div class="title">
              <h3>All articles</h3>
            </div>
          </div>
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 20.4v-5.8a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v5.8a.6.6 0 0 1-.6.6h-5.8a.6.6 0 0 1-.6-.6ZM3 20.4v-5.8a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v5.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6ZM14 9.4V3.6a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v5.8a.6.6 0 0 1-.6.6h-5.8a.6.6 0 0 1-.6-.6ZM3 9.4V3.6a.6.6 0 0 1 .6-.6h5.8a.6.6 0 0 1 .6.6v5.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </li>
      </a>
    </ul>
    <div class="title">
      <h3 class="label">Topics</h3>
    </div>
    <ul>
      <a href="/minecraft">
        <li>
          <div class="left">
            <img src="../assets/topics/minecraft.webp" alt="Minecraft Logo">
            <span class="label">Minecraft</span>  
          </div>
          <div class="right label">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentcolor" d="M20 17a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13a2 2 0 0 0 2 2h15c1.654 0 3-1.346 3-3V7h-2v10zM12 7h3v2h-3V7zm0 4h3v2h-3v-2zM5 7h5v6H5V7zm0 10v-2h10v2H5z"/>
            </svg>
            <span>{minecraftPosts.length}</span>
          </div>
        </li>
      </a>
    </ul>
  </div>
</aside>

<style>
  aside {
    position: relative;
    width: 230px;
    min-height: 100%;
    background: hsl(0, 0%, 6%);
    overflow-x: hidden;
    overflow-y: auto;
  }
  aside.closed {
    width: 4rem;
  }
  aside.closed .label {
    display: none;
  }
  h3 {
    font-size: 1.25rem;
  }
  .inner {
    display: flex;
    flex-direction: column;
  }
  aside .title {
    padding: 1rem;
    displaY: flex;
    justify-content: space-between;
    align-items: center;
  }
  .toggle {
    cursor: pointer;
  }
  aside.closed .title {
    flex-direction: column;
  }
  aside.closed .toggle {
    order: 1;
    transform: rotateZ(180deg);
  }
  aside.closed h2 {
    display: none;
  }
  .title svg {
    width: 2rem;
    height: 2rem;
    fill: white;
  }
  li {
    padding: .5rem 1rem;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  li .left {
    display: flex;
    align-items: center;
  }
  li .left img {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    border-radius: 50%;
    border: 2px solid hsl(0, 0%, 10%);
  }
  li .right {
    display: flex;
    align-items: center;
  }
  li .right svg {
    margin-right: .5rem;
  }
  a {
    color: hsl(0, 0%, 70%);
    text-decoration: none;
  }
  a:hover {
    color: hsl(0, 0%, 80%);
  }
</style>