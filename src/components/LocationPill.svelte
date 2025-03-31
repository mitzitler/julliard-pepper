<script>
    import { location } from '$lib/state.svelte.js'
    import { fade } from 'svelte/transition'

    let titleVisible = $state(true)
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="pill" onmouseenter={() => titleVisible = !titleVisible}>

    {#if titleVisible}
    <div class="pill-title" transition:fade>
        {location.name}
    </div>
    {/if}
    <div class="pill-description" >
        {location.description}
    </div>
</div>

<!-- https://prismic.io/blog/css-hover-effects -->

<style>

    .pill {
        font-family: 'Orbitron';
        font-weight: 700;
        font-size: 10px;
        margin-left: 1em;
        margin-right: 1em;
        margin-top: auto;
        margin-bottom: auto;
        border-radius: 10px;
        background-color: rgb(19, 7, 7);
        color: yellow;
        height: 40px;
        width: 70%;
        perspective: 1000px;
        cursor: pointer;
        position: relative;
    }

    .pill .pill-title {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        font-weight: 400;
        font-size: 16px;
        opacity: 1;
        background-color: rgb(19, 7, 7);
    }

    .pill .pill-description {
        display: none;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        padding: 1px;
        font-weight: 100;
        font-size: 9px;
        opacity: 0;
    }

    /* .pill:hover .pill-title {
        transition: opacity 2s
    }

    .pill:hover .pill-description {
        transition: opacity 2s
    } */

</style>