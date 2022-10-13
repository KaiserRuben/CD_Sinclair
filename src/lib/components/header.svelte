<script>
    let showMenu = false
</script>
{#if showMenu}
    <div class="menu" id="menu-content">
        <p><a href="/">Home</a></p>
        <p><a href="/aboutMe">About me</a></p>
        <p><a href="/collection"> Collection </a></p>
        <p><a href="/blog"> Blog </a></p>
        <p><a href="/surprise"> Surprise </a></p>
        <p><a href=/contact> Contact</a></p>
    </div>
{/if}
<div class="header">
    <div id="menu" on:click={()=> showMenu = !showMenu}>
        <img src="/menu button.svg" alt="menü button">
    </div>
</div>
<style>
    .header {
        position: absolute;
        right: 0;
        top: 20px;
        text-align: right;
        padding-right: 5vw;
        z-index: 2;
    }

    .menu {
        z-index: 1;
        position: absolute;
        right: 0;
        width: 200px;
        min-height: 90vh;
        height: 100%;
        background-color: ghostwhite;
        padding-top: 100px;
    }

    .menu:hover {
        cursor: pointer;

    }
</style>