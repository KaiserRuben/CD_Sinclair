<script lang="ts">
    import {onMount} from "svelte";

    interface blogeintragI {
        name: string;
        text: string;
        datum: Date;
    }

    let blogeintrag: blogeintragI = {
        name: "",
        text: "",
        datum: new Date()
    }

    let beitraege: blogeintragI[] = [];

    async function add() {
        beitraege = [...beitraege, blogeintrag];
        await fetch('/blog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blogeintrag)
        });
        blogeintrag = {
            name: "",
            text: "",
            datum: new Date()
        }
    }

    export let data;
    onMount(() => {
        console.log(data.beitraege);
        beitraege = data.beitraege;
    })
</script>
<svelte:head>
    <title>Sinclair - Blog</title>
</svelte:head>
<div class="container">

    <input type="text" placeholder="dein Name" bind:value={blogeintrag.name}/>
    <textarea placeholder="Was willst du uns Mitteilen" bind:value={blogeintrag.text} rows="4"></textarea>
    <button on:click={add} class="addButton">Senden</button>

    <div class="blog-container">
        {#each beitraege as blogeintrag}
            <div class="blog-eintrag">
                <h2>{blogeintrag.name}</h2>
                <p>{blogeintrag.text}</p>
                <p>{blogeintrag.datum.toLocaleString()}</p>
            </div>
        {/each}
    </div>
</div>
<style>
    input, textarea {
        width: 100%;
        margin-bottom: 10px;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        padding: 100px 5vw;
        background-image: url("/bunte farben abstrakt.jpg");
    }

    .addButton {
        align-self: flex-end;
    }

    .blog-eintrag {
        padding: 20px 40px;
        max-width: 80vw;
        margin-bottom: 10px;
        background: #ffffff88;
        backdrop-filter: blur(10px);
    }
</style>