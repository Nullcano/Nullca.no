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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58" xml:space="preserve"><path style="fill:#0e3260" d="M28.792 35.406c5.327 0 9.771-3.744 10.797-8.768H18a11.012 11.012 0 0 0 10.792 8.768zM28.792 51.362c5.327 0 9.771-3.744 10.797-8.768H18a11.012 11.012 0 0 0 10.792 8.768z"/><path style="fill:#13649b" d="M1 12.044v15.045l56-.022V12L44 0H14L1 12z"/><path style="fill:#209aed" d="M38.797 12.012C37.866 16.571 33.833 20 29 20c-4.826 0-8.853-3.452-9.792-8l-18.17.012A.038.038 0 0 0 1 12.05v15.039l56-.022V12.038a.038.038 0 0 0-.038-.038l-18.165.012z"/><path style="fill:#1081e0" d="M38.797 27.012C37.866 31.571 33.833 35 29 35c-4.826 0-8.853-3.419-9.792-7.968L1 27.044V43h56V27l-18.203.012z"/><path style="fill:#0f71d3" d="M38.797 43c-.931 4.558-4.964 8-9.797 8-4.826 0-8.853-3.452-9.792-8H1v15l56-.022V43H38.797z"/></svg>
            <span class="label">All articles</span>
          </div>
          <div class="right label">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentcolor" d="M20 17a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13a2 2 0 0 0 2 2h15c1.654 0 3-1.346 3-3V7h-2v10zM12 7h3v2h-3V7zm0 4h3v2h-3v-2zM5 7h5v6H5V7zm0 10v-2h10v2H5z"/>
            </svg>
            <span>{posts.length}</span>
          </div>
        </li>
      </a>
    </ul>
    <div class="title label">
      <h3>Topics</h3>
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
    background: hsl(200, 15%, 6%);
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow: 0 0 .25rem hsl(200, 15%, 3%);
    z-index: 9;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .toggle {
    cursor: pointer;
  }
  aside.closed {
    width: 4rem;
  }
  aside.closed .label {
    display: none;
  }
  aside.closed .title {
    flex-direction: column;
  }
  aside.closed .toggle {
    order: 1;
    transform: rotateZ(180deg);
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
  li .left img, li .left svg {
    display: block;
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
  @media only screen and (max-width: 768px) {
    aside {
      position: relative;
      width: 100%;
      height: 3.5rem;
      overflow-x: auto;
      overflow-y: hidden;
    }
    aside .inner {
      height: 100%;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
    }
    aside .title {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-content: center;
    }
    aside .toggle {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 3.5rem;
      height: 3.5rem;
      transform: rotateZ(90deg);
      display: grid;
      place-content: center;
    }
    aside h3, aside .label {
      display: none;
    }
    li {
      padding: .5rem;
      border-radius: .5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    aside.closed {
      width: 100%;
      height: auto;
      overflow-x: hidden;
      overflow-y: auto;
    }
    aside.closed .inner {
      position: relative;
      left: 2rem;
      padding: 1rem;
      max-height: 70vh;
      flex-direction: column;
      align-items: flex-start;
    }
    aside.closed h3, aside.closed .label {
      display: flex;
    }
    aside.closed .title {
      width: auto;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    aside.closed .toggle {
      transform: rotateZ(-90deg);
    }
    aside.closed li {
      width: 80vw;
    }
  }
</style>