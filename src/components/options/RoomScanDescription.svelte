<script>
// @ts-nocheck

    import { roomsItems } from '$lib/map.ts'
    import { location, localTime } from '$lib/state.svelte.js'

</script>

{#if roomsItems[location.code]}
    <div class="dropdown-wrapper">
        <ul class="parent"> 
            {#each Object.entries(roomsItems[location.code]['scan']) as [index, scan]}
                <li>
                    {scan}
                </li>
            {/each}
        </ul>
    </div>
{/if}


<style>
    .dropdown-wrapper {
        position: absolute;
        display: inline-block;
    }
    .parent {
        margin-top: 10px;
        position: relative;
        border-radius: 10px;
        z-index: 10;
        padding: 0.5em;        
        background-color: rgba(103, 94, 94, 0.8);
        box-shadow: 10px 10px 80px 11px rgba(0,0,0,0.9);   
        /* box-shadow: 0 0 5px 20px rgba(103, 94, 94, 0.8); */
        display: inline-block;
        transform: translateX(-9em);
        width: 17em
    }
    li {
        background-color: rgb(192, 177, 177);
        color: rgb(35, 8, 8);
        font-size: x-small;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border-radius: 10px;
        width: 100%;
        /* width: 24em; */
        margin-bottom: 2px;
        margin-right: 4em;
        padding: 0.5em;
        z-index: 60;

    }
</style>