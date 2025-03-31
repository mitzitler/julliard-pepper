<script>
// @ts-nocheck

    // class for tasks too
    import { location, localTime, conversation, tasks } from '$lib/state.svelte.js'
    import { dialogueAllStandard, dialogueAllNonStandard } from '$lib/peopleDialogue.ts'
    import { tasksBySteps } from '$lib/tasks.ts';

    let seenTasks = tasks.activeTasks + tasks.completedTasks + tasks.failedTasks
    let dialoguePosition = 0
    let [dialogueArray, taskId, dialogueType] = conversation.getDialogue(
        conversation.character, 
        location.code, 
        tasks.activeTasks, 
        seenTasks, 
        dialogueAllStandard, 
        dialogueAllNonStandard
    )

    console.log('tasklist ??', Object.keys(tasksBySteps['clare-2']['steps']))


</script>

{#if conversation.character != ''}
<ul>
    {#each dialogueArray as dialogueEntry, index (index)}
        {#if index === dialoguePosition && index < (dialogueArray.length - 1)}

            <li key={index}>
                {dialogueEntry}
            </li>
            <button key={index} onclick={() => dialoguePosition++}> 
                Continue..
            </button>

        {:else if index === dialoguePosition && index === (dialogueArray.length - 1) }

            <li key={index}>
                {dialogueEntry}
            </li>
            <button key={index} 
                class={conversation.consumesTime ? 'indicates-consuming-time' : ''}
                onclick={() => 
                {conversation.endConversation(conversation.character);
                {conversation.consumesTime && localTime.addTime()};
                {console.log("This is the end of the conversation, time to do task things")}
                { 
                    dialogueType === 'taskResponse' ? 
                    tasks.activeTasks.includes(taskId) && tasks.completeTask(taskId) :
                        (dialogueType === 'taskInitiate' ? (
                            tasks.addTask(taskId),
                            tasks.startTask(taskId, tasksBySteps)) : 
                        console.log('Nothing task-related happened') )}
                }}> 
                End conversation
            </button>

        {/if}
    {/each}
</ul>
{/if}

<style>
    ul {
        margin-top: 12px;
        align-items: right;
    }
    li {
        background-color: rgb(192, 177, 177);
        color: rgb(35, 8, 8);
        font-size: small;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border-radius: 10px;
        width: 24em;
        margin-bottom: 2px;
        margin-right: 4em;
        padding: 0.5em;
        z-index: 60;
        align-self: right;
    }
    button {
        background-color: rgb(35, 8, 8);
        color: rgb(214, 192, 192);
        font-size: small;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border-radius: 10px;
        width: 10em;
        margin-top: 2px;
        padding: 0.5em;
        z-index: 60;
        align-items: right;
    }
    .indicates-consuming-time {
        color: rgb(200, 39, 39);
        background-color: rgb(35, 8, 8);
    }
</style>