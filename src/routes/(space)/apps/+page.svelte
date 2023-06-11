<script>
  import TitleIconText from "$lib/components/titles/TitleIconText.svelte";
  import CardIconText from "$lib/components/cards/CardIconText.svelte";
</script>

<TitleIconText text="Application Vault" icon="/images/icons/application-vault.svg" />

<div class="apps">
  <CardIconText text="Null Chat" icon="/images/icons/null-chat.svg" link="/chat" />
</div>

<style>
  .apps {
    margin-block: 3rem;
    display: flex;
  }
</style>