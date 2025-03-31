<script>
// @ts-nocheck

    // @ts-ignore
    import { rooms, roomsPaths, roomsItems } from '$lib/map.ts'
    import { tasksBySteps } from '$lib/tasks.ts'
    import { location, localTime, inventory, tasks } from '$lib/state.svelte.js'
    import { itemsByTask } from '$lib/items.ts'

    // for now, we will call normal items roomsItems[location.code]["items"]
    let normalItemsArray = Object.values(roomsItems[location.code]["items"])
    // and special items are roomsItems[location.code]["itemsTaskOnly"] where itemsByTask['item']['taskIdStep'] is something we have open
    let specialItemsArray = []
    // tasks.getMostActiveStepsTasks()
    let getMostActiveStepsTasks = []

    Object.keys(tasks.stepsTasks).forEach(taskId => {
        let stepsArray = tasks.stepsTasks[taskId]
        let activeStep = stepsArray[stepsArray.length - 1]
        getMostActiveStepsTasks.push(activeStep)
    });

    roomsItems[location.code]["itemsTaskOnly"].forEach(item => {
        // if the most active steps tasks include the task id steps for these task only items then...
       if (getMostActiveStepsTasks.includes(itemsByTask[item]['taskIdStep'])) {
        specialItemsArray.push(item)
       } 
    })

    const handleUseItemClick = (item) => {

        let taskIdStep = itemsByTask[item]['taskIdStep']
        let taskId = `${taskIdStep.split('-')[0]}-${taskIdStep.split('-')[1]}`

        console.log(taskId, taskIdStep, item)

        let continuee = false

        continuee = inventory.itemTaskStep(
            taskIdStep, 
            tasksBySteps,
            location.code,
            itemsByTask[item]['discardItem']
        )

        console.log('do we continue?', continuee[taskIdStep])

        // this function returns [nextTaskStep, nextTaskStepTarget] but i dont think i need it ?
        let incrementYay = false

        incrementYay = tasks.incrementTask(
            taskId,
            tasksBySteps
        )

        incrementYay && tasks.completeTask(taskId)

        localTime.addTime()

        // console.log('By clicking this task item, you have worked on the step', taskIdStep, 'of task', 
        //     taskId, 'this step was of type', tasksBySteps['steps'][taskIdStep]['task_type'])

    };

    // open issues: formatting COMPLETED tasks
    // use_discard task type is removing from the scan list and the inventory the discard item, but not the use

    // add in class functions for incrementing conversation tasks



</script>

<!-- i am getting an empty circle when everything is grabbed -->

{#if roomsPaths[location.code]}
    <div class="dropdown-wrapper">
        <ul class="parent">
            {#each specialItemsArray.concat(normalItemsArray) as item}
                {console.log(item)}
                
                    {#if !inventory.taskItemsToUse.includes(item) && // do we need it to be in the inventory ?
                        !inventory.usedItems.includes(item) &&
                        specialItemsArray.includes(item)}
                        <li>
                        <button class="option" onclick={() => handleUseItemClick(item)}>
                            <strong>{itemsByTask[item]['verb']}</strong> {item}
                        </button>
                        </li>
                    {/if}
                    {#if !inventory.grabbedItems.includes(item) && normalItemsArray.includes(item)}
                    <li>
                        <button class="option" onclick={() => 
                            {inventory.grabItem(item);
                            localTime.addTime()
                            }}>
                            <strong>Grab</strong> {item}
                        </button>
                    </li>
                    {/if}
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
        z-index: 5;
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
    .option {
        background-color: rgb(200, 39, 39);
        color: rgb(35, 8, 8);
        font-size: x-small;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border-radius: 10px;
        width: 10em;
        margin-top: 2px;
        padding: 0.5em;
        z-index: 60;
    }
</style>