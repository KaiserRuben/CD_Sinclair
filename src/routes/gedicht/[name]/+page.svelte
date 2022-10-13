<script>
  import { page } from "$app/stores";

  export let data;
</script>
<svelte:head>
  <title>Sinclair - Gedicht {$page.params.name}</title>
</svelte:head>
<div class="container">
<h1>{data.gedicht.title}</h1>
  <p>{@html data.gedicht.text.replaceAll("\n", "<br />")}</p>
</div>
<style>
.container{
    padding: 30px 5px;
    text-align: center;
}
</style>