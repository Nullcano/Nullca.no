<script>
  import { afterUpdate } from 'svelte';

  let betAmount = 0;
  let coinSide = '';
  let isFlipping = false;
  let flipResult = '';

  function flipCoin() {
    // Simulating a random result
    const randomResult = Math.random() < 0.5 ? 'heads' : 'tails';

    // Add a delay before setting the result to make it appear as if it's landing on the winning side
    setTimeout(() => {
      flipResult = randomResult;
      // Add logic for handling bets and outcomes here
      if (coinSide === flipResult) {
        // Player wins
        console.log('You win!');
      } else {
        // Player loses
        console.log('You lose!');
      }
    }, 2000); // 2 seconds for the flip animation
  }

  afterUpdate(() => {
    // Animation code here
    if (isFlipping) {
      setTimeout(() => {
        isFlipping = false;
      }, 2000); // 2 seconds for the flip animation
    }
  });
</script>

<style>
  .coin {
    width: 100px;
    height: 100px;
    position: relative;
    perspective: 1000px;
    cursor: pointer;
    transform-style: preserve-3d;
  }

  .flip-animation {
    animation: flip 1s forwards;
  }

  @keyframes flip {
    0% {
      transform: rotateX(0deg);
    }
    30% {
      transform: rotateX(-120deg);
    }
    70% {
      transform: rotateX(-240deg);
    }
    100% {
      transform: rotateX(-360deg);
    }
  }

  .coin .side {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    border-radius: 50%;
    background-color: #e0e0e0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
  }

  .coin .back {
    transform: rotateX(-180deg);
  }
</style>

<main>
  <h1>Coin Flip Game</h1>
  <label for="betAmount">Bet Amount:</label>
  <input type="number" id="betAmount" bind:value={betAmount} />

  <label for="coinSide">Coin Side:</label>
  <select id="coinSide" bind:value={coinSide}>
    <option value="">Select</option>
    <option value="heads">Heads</option>
    <option value="tails">Tails</option>
  </select>

  <button on:click={() => { isFlipping = true; flipCoin(); }} disabled={!betAmount || !coinSide || isFlipping}>
    Flip Coin
  </button>

  {#if flipResult}
    <p>
      The result is: <strong>{flipResult}</strong>
    </p>
  {/if}

  <div class={`coin ${isFlipping ? 'flip-animation' : ''}`}>
    <div class="side">Heads</div>
    <div class="side back">Tails</div>
  </div>
</main>
