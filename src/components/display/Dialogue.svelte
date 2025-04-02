<script lang="ts">
// @ts-nocheck
    import { createEventDispatcher } from 'svelte';
    // class for tasks too
    import { location, localTime, conversation, tasks } from '$lib/state.svelte.js'
    import { dialogueAllStandard, dialogueAllNonStandard } from '$lib/peopleDialogue.ts'
    import { tasksBySteps } from '$lib/tasks.ts';

    const dispatch = createEventDispatcher();

    let seenTasks = tasks.activeTasks + tasks.completedTasks + tasks.failedTasks
    let dialoguePosition = 0
    let [dialogueArray, taskIdOrStep, dialogueType] = conversation.getDialogue(
        conversation.character, 
        location.code, 
        tasks.activeTasks, 
        seenTasks, 
        dialogueAllStandard, 
        dialogueAllNonStandard
    )

    const handleEndConversationClick = () => {

        // task time
        console.log('conversation is ended and time has added - time to complete task requirements')
        console.log('is this dialogue a task initiation, or a step?')
        let taskIdStep: string | null = null
        let taskId: string | null = null
        // if the third part of splitting by - is length 1, as opposed to null
        if (taskIdOrStep.split('-')[2]?.length === 1) {
            taskIdStep = taskIdOrStep
            taskId = `${taskIdStep.split('-')[0]}-${taskIdStep.split('-')[1]}`

        } else {
            taskIdStep = null
            taskId = taskIdOrStep
        }

        // the item version completes the task because of the return on the incrementTask function
        // for now, this version completes the task if total steps === seen steps
        let stepsCount = Object.keys(tasksBySteps[taskId].steps).length
        let stepsSeenCount = Object.keys(tasks.stepsTasks[taskId]).length
        let taskDone: string | null = null 
        let stepAnnouncement: string | null = null

        if (dialogueType === 'taskResponse' && tasks.activeTasks?.includes(taskId)) {
            let increment = incrementTask(taskId, tasksBySteps)

            if (increment === true) {
                tasks.completeTask(taskId)
                conversation.endConversation(conversation.character)
            } else if (increment === false) {
                conversation.conversationTaskStep(
                taskIdStep,
                tasksBySteps,
                conversation.character
                )
                [taskDone, stepAnnouncement] = tasks.incrementTask(taskId, tasksBySteps)
                conversation.endConversation(conversation.character);
            }

            localTime.addTime()
        } else if (dialogueType === 'taskResponse' && !tasks.activeTasks?.includes(taskId)) {
            // task is not active
            console.log('Your dialogue is supposed to respond to a task, but that task has not be initiated or is already completed')
        } else if (dialogueType === 'taskInitiate') {
            // this starts a task
            tasks.addTask(taskId)
            tasks.startTask(taskId, tasksBySteps)
            [taskDone, stepAnnouncement] = tasks.incrementTask(taskId, tasksBySteps)
            conversation.endConversation(conversation.character);
            localTime.addTime()
        } else if (dialogueType === 'main' | dialogueType === 'secondary' | dialogueType === 'default') {
            // this is just time consuming dialogue
            console.log('nothing task related happened')
            conversation.endConversation(conversation.character);

            (dialogueType === 'main' && localTime.addTime())
        } else {
            // total error
            console.log('Error: probably, dialogueType is null')
        }

        conversation.closeConversationOptions()
        
        function handleStepCompleteConversation() {
            dispatch('conversation-ended', {stepAnnouncement: stepAnnouncement});
        }

    };

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
                onclick={() => handleEndConversationClick}> 
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