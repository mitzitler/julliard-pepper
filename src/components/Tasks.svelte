<script>
    import { location, localTime, inventory, tasks } from '$lib/state.svelte.js'
    import tasklist, { taskAbrv } from '$lib/tasks.ts';

    $inspect(tasks.activeTasks)

</script>

<div class="flex flex-wrap bg-sky-500/50">
    <!-- svelte-ignore block_empty -->
    {#if (tasks.activeTasks.concat(tasks.completedTasks)).length === 0}
    {:else if (tasks.activeTasks.concat(tasks.completedTasks)).length > 0}
        {#each tasks.completedTasks as taskString}
                <ul class="completed">
                    {tasklist[taskString]['pretty_description']}
                </ul>
        {/each}
        {#each tasks.activeTasks as taskString}
                <ul>
                    {tasklist[taskString]['pretty_description']}
                </ul>
        {/each}
    {/if}
</div>

<style>
    div {
        position: fixed;
        right: 0;
        font-family: "Noto Sans Mono", monospace;
        font-size: 8px;
        font-weight: 400;
        min-height: 40px;
        width: 34%;
        margin: 1em;
        border-radius: 10px;
        /* margin-top: auto;
        margin-bottom: auto; */
        display: flex
    }
    ul {
        flex-direction: column-reverse;
        padding: 6px;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: auto;
        margin-right: auto;
        /* border: 1px maroon; */
        border-radius: 10px;
        background-color: rgb(52, 47, 47);
        /* height: 40px; */
        max-width: 94%;
        color: antiquewhite;
    }
    .completed {
        color: greenyellow;
        box-shadow: inset 10px 10px 50px -30px rgba(36,240,60,1);
        /* background-color: rgb(74, 87, 67); */
    }

</style>