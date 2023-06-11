<script>
  import { onMount } from 'svelte';
  import { client } from '$lib/client.js';

  let activeTab = 0;
  let tabs = [];
  let portraitsHTML;
  
  onMount(() => {
    setTimeout(() => {
      const activityHTML = $client.activity
      .map(activity => {
        return `<li class="item">${activity.title}</li>`
      }).join('');

      const achievementsHTML = $client.achievements
      .map(achievement => {
        if (achievement.unlocked) {
          return `<li class="unlocked">${achievement.title}</li>`;
        } else {
          return '<li class="locked">Locked</li>';
        }
      }).join('');

      tabs = [
        { 
          title: 'Activity', 
          content: `
            <h2>Activity</h2>
            <ul class="activity">
              ${activityHTML}
            </ul>
          `
        }, { 
          title: 'Portraits', 
          content: `
            <h2>Portraits</h2>
            <ul class="portraits">
              ${portraitsHTML}
            </ul>
          `
        }, {
          title: 'Achievements',
          content: `
            <h2>Achievements</h2>
            <ul class="achievements">
              ${achievementsHTML}
            </ul>
          `
        }
      ];
    }, 500);
  });

  function setActiveTab(index) {
    activeTab = index;
  }
</script>

<div class="tabs">
  <div class="tab-buttons">
    {#each tabs as tab, index}
      <button
        class="{index === activeTab ? 'active' : ''}"
        on:click={() => setActiveTab(index)}
      >
        {tab.title}
      </button>
    {/each}
  </div>

  {#each tabs as tab, index}
    <div class="tab {index === activeTab ? 'active' : ''}">
      {@html tab.content}
    </div>
  {/each}
</div>

<style global>
  .tab-buttons {
    position: relative;
    bottom: -2px;
    border-bottom: 2px solid var(--dark-60);
  }
  button {
    padding: 1rem;
    font-size: inherit;
    background: transparent;
    color: inherit;
    font-family: inherit;
    border: 0;
    cursor: pointer;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    opacity: .5;
    transition: opacity .2s linear;
  }
  button:hover, button.active {
    background: var(--dark-60);
    border-bottom: 2px solid var(--light-20);
    opacity: 1;
  }
  .tab {
    padding: 1.5rem;
    display: none;
    background: var(--dark-60);
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
  .tab.active {
    display: block;
  }
</style>