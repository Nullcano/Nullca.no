<script>
  import { posts } from '../data.js'

  let leagueoflegendsPosts = posts.filter(post => post.category.includes('League of Legends'))
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58" style="enable-background:new 0 0 58 58" xml:space="preserve"><path style="fill:#0e3260" d="M28.792 35.406c5.327 0 9.771-3.744 10.797-8.768H18a11.012 11.012 0 0 0 10.792 8.768zM28.792 51.362c5.327 0 9.771-3.744 10.797-8.768H18a11.012 11.012 0 0 0 10.792 8.768z"/><path style="fill:#13649b" d="M1 12.044v15.045l56-.022V12L44 0H14L1 12z"/><path style="fill:#209aed" d="M38.797 12.012C37.866 16.571 33.833 20 29 20c-4.826 0-8.853-3.452-9.792-8l-18.17.012A.038.038 0 0 0 1 12.05v15.039l56-.022V12.038a.038.038 0 0 0-.038-.038l-18.165.012z"/><path style="fill:#1081e0" d="M38.797 27.012C37.866 31.571 33.833 35 29 35c-4.826 0-8.853-3.419-9.792-7.968L1 27.044V43h56V27l-18.203.012z"/><path style="fill:#0f71d3" d="M38.797 43c-.931 4.558-4.964 8-9.797 8-4.826 0-8.853-3.452-9.792-8H1v15l56-.022V43H38.797z"/></svg>
          <div class="label">
            <span>All articles</span>
          </div>
          <div class="label">
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
      <a href="/league-of-legends">
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="league" width="30" height="32" viewBox="0 0 30 32" fill="none">
            <g>
              <path d="M1.80644 9.75049C0.655032 11.8373 0 14.2271 0 16.7683C0 19.3095 0.655032 21.7015 1.80644 23.7883V9.75049Z" fill="#C28F2C"></path>
              <path d="M15 2.02222C13.7829 2.02222 12.602 2.16921 11.4688 2.43647V4.75718C12.5907 4.44093 13.7738 4.26721 15 4.26721C22.0218 4.26721 27.7153 9.84627 27.7153 16.7305C27.7153 19.8307 26.5571 22.6659 24.6464 24.8463L24.2838 26.118L23.4814 28.9331C27.4184 26.2761 30.0023 21.8195 30.0023 16.7705C30 8.62355 23.2843 2.02222 15 2.02222Z" fill="#C28F2C"></path>
              <path d="M11.4688 24.4209H22.9737H23.2253C25.1723 22.4209 26.3713 19.7126 26.3713 16.7305C26.3713 10.5746 21.2806 5.58569 15 5.58569C13.767 5.58569 12.5816 5.78168 11.4688 6.1358V24.4209Z" fill="#C28F2C"></path>
              <path d="M10.1088 0H1.55029L3.16634 3.29844V28.7038L1.55029 32H21.1922L22.9737 25.7572H10.1088V0Z" fill="#C28F2C"></path>
            </g>
          </svg>
          <div class="label">
            <span>League of Legends</span>
          </div>
          <div class="label">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentcolor" d="M20 17a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13a2 2 0 0 0 2 2h15c1.654 0 3-1.346 3-3V7h-2v10zM12 7h3v2h-3V7zm0 4h3v2h-3v-2zM5 7h5v6H5V7zm0 10v-2h10v2H5z"/>
            </svg>
            <span>{leagueoflegendsPosts.length}</span>
          </div>
        </li>
      </a>
      <a href="/minecraft">
        <li>
          <img src="../assets/topics/minecraft.webp" alt="Minecraft Logo" />
          <div class="label">
            <span>Minecraft</span>  
          </div>
          <div class="label">
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
    z-index: 5;
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
  .label {
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
  }
  .label span {
    margin-left: .5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .title svg {
    width: 2rem;
    height: 2rem;
    fill: white;
  }
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  ul li {
    margin: .75rem;
    display: grid;
    grid-template-columns: 2rem 1fr 4rem;
    grid-template-rows: 1fr;
  }
  li .left span {
    width: auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  li .left img, li .left svg {
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
    border-radius: 50%;
    border: 2px solid hsl(0, 0%, 10%);
  }
  li .right svg {
    margin-right: .5rem;
    width: 1rem;
    height: 1rem;
  }
  a {
    color: hsl(0, 0%, 70%);
    text-decoration: none;
    border: 0;
  }
  a:hover {
    color: hsl(0, 0%, 80%);
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
  @media only screen and (max-width: 768px) {
    aside {
      position: relative;
      bottom: 0;
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
    ul {
      width: auto;
      flex-direction: row;
    }
    li {
      width: 3rem;
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
    aside.closed ul {
      flex-direction: column;
    }
    aside.closed li {
      width: 80vw;
    }
  }
</style>