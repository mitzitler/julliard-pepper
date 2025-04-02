<script lang="ts">
    import { rooms, roomsPaths, roomsItems } from '$lib/map.ts'
    import { location, localTime, interfaceStuff } from '$lib/state.svelte.js'

    let showRoomOptions = true

    function handleShowRoomOptions() {
        showRoomOptions = !showRoomOptions;
    }

</script>

{#if roomsPaths[location.code] 
    && interfaceStuff.expandedId === 'moveroom'
    && showRoomOptions === true}
    <div class="dropdown-wrapper">
        <ul class="parent">
            {#each Object.entries(roomsPaths[location.code]) as [nextLocation, directions]}
                <li>
                    <button 
                        class = {nextLocation === 'E' ? "option-disabled" : "option" }
                        onclick = {() => 
                            {location.moveLocation(
                                nextLocation,
                                rooms[nextLocation],
                                roomsItems[nextLocation]["description"]);
                            localTime.addTime();
                            handleShowRoomOptions()
                            }}
                        disabled = {nextLocation === 'E'}
                        >
                        <strong>{directions[0]}</strong>{directions[1]}<strong>{directions[2]}</strong>
                    </button>
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
        transform: translateX(-3.6em);
    }
    li {
        width: 100%;
        margin: 0.2em 0;
    }
    .option, .option-disabled {
        font-size: x-small;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border-radius: 10px;
        width: 10em;
        margin-top: 2px;
        padding: 0.5em;
        z-index: 60;
    }
    .option {
        background-color: rgb(200, 39, 39);
        color: rgb(35, 8, 8);
    }
    .option-disabled {
        background-color: rgb(134, 122, 122);
        color: rgb(35, 8, 8);
    }
</style>