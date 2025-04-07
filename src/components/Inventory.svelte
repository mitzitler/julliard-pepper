<script lang="ts">

    import { inventory } from '$lib/state.svelte.js'
    delete inventory.inventoryDict[0]

</script>

<div class="flex flex-wrap bg-sky-500/50">
    <!-- svelte-ignore block_empty -->
    {#if Object.keys(inventory.inventoryDict).length === 0}
    
    {:else if Object.keys(inventory.inventoryDict).length > 0}
    {#each Object.entries(inventory.inventoryDict) as [index, item]}
        {#if !inventory.usedItems.includes(item)}
            <ul>
                {item}
            </ul>
        {/if}
    {/each}
    {/if}
</div>

<style>
    div {
        position: fixed;
        left: 0;
        font-family: "Noto Sans Mono", monospace;
        font-size: 8px;
        font-weight: 400;
        min-height: 40px;
        width: 60%;
        margin: 1em;
        border-radius: 10px;
        /* margin-top: auto;
        margin-bottom: auto; */
        display: flex
    }
    ul {
        flex-direction: row;
        padding: 2px;
        margin: 3px;
        border: 1px maroon;
        border-radius: 10px;
        background-color: rgb(52, 47, 47);
        /* height: 40px; */
        max-width: 70px;
        min-height: 30px;
        color: antiquewhite;
    }

</style>