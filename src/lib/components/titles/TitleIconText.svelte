<script>
  export let icon, text
</script>

<hgroup class="grid grid-x-auto-fill items-center gap-3">
  <img class="w2 h2" src={icon} alt={text} />
  <h2 class="f4 fw3 ttu">{text}</h2>
</hgroup>