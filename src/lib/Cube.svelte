<script>
  import { onMount } from 'svelte';

  let canvas, ctx;
  const particlesArray = [];

  const mouse = {
    x: undefined,
    y: undefined,
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    animate();
  });

  function handleClick(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 10; i++){
      particlesArray.push(new Particle());
    }
  };

  function handleMove(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 5; i++){
      particlesArray.push(new Particle());
    }
  };

  function handleResize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  class Particle {
    constructor(){
      this.x = mouse.x;
      this.y = mouse.y;
      this.size = Math.random() * 8 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.color = '#000';
    }
    update(){
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.size > 0.2) this.size -= 0.1;
    }
    draw(){
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function handleParticles(){
    for (let i = 0; i < particlesArray.length; i++){
      particlesArray[i].update();
      particlesArray[i].draw();
      for (let j = i; j < particlesArray.length; j++){
        const dx = particlesArray[i].x - particlesArray[j].x;
        const dy = particlesArray[i].y - particlesArray[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100){
          ctx.beginPath();
          ctx.strokeStyle = particlesArray[i].color;
          ctx.lineWidth = 0.2;
          ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
          ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
          ctx.stroke();
          ctx.closePath();
        }
      }
      if (particlesArray[i].size <= 0.3){
        particlesArray.splice(i, 1);
        i--;
      }
    }
  }

  function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
  }
</script>

<svelte:body on:resize={handleResize} />

<canvas bind:this={canvas} on:load={animate} on:mousemove={handleMove} on:click={handleClick}></canvas>

<style>
  canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>