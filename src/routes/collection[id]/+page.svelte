<script>
  import { page } from "$app/stores";

  export let data;
</script>
<svelte:head>
  <title>Sinclair - Collection {$page.params.id}</title>
</svelte:head>
<h1>POETRY PEOPLE</h1>
<div class="container">
  {#each data.gedichte as g}
  <div class="gallery">
    <a href="/gedicht/{g.title}">
      <img src="{g.title} Bild.jpg" alt="{g.title} Bild" class="image">
    </a>
    <div class="desc">{g.title}</div>
  </div>
    {/each}
</div>
<style>
    .container{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    div.gallery {
        margin: 10px 5px;
        border: 1px solid #ccc;
        float: left;
        width: 180px;
    }

    div.gallery:hover {
        border: 1px solid #777;
    }

    div.gallery img {
        width: 100%;
        height: auto;
    }

    div.desc {
        padding: 15px;
        text-align: center;
    }

    .image {
        height: 200px !important;
        width: 100px
    }
</style>