<script>
    import { location, localTime, conversation, tasks } from '$lib/state.svelte.js'
    import { placesPeople } from '../../lib/peopleDialogue.ts'

    // unbound by time
    // @ts-ignore
    let placesPeopleUnbound = placesPeople[location.code]    
    // bound by time
    let placesPeopleBound = Object.fromEntries(
        Object.entries(placesPeopleUnbound).filter(([k,v]) => 
        localTime.timeInt >= v[0] && localTime.timeInt <= v[1]
    ))

    // this gets the most recently active task step
    let getMostActiveStepsTasks = []
    Object.keys(tasks.stepsTasks).forEach(taskId => {
        let stepsArray = tasks.stepsTasks[taskId]
        let activeStep = stepsArray[stepsArray.length - 1]
        getMostActiveStepsTasks.push(activeStep)
    });

    // placePeopleBound is still the only source of conversation
    // i think!

</script>

<!-- if no ones around, an empty pill that says no ones around -->

<div class="dropdown-wrapper">
    <ul class="parent">
        {#if Object.keys(placesPeopleBound).length > 0}
            {#each Object.keys(placesPeopleBound) as characterName}
                <li>
                    <button class={conversation.consumesTime ? "indicates-consuming-time" : "" }
                        onclick={() => conversation.startConversation(characterName)}>
                        Talk to <strong>{
                            (characterName === 'MeganChaotic' || characterName === 'MeganGood' || characterName === 'MeganNeutral') 
                            ? 'Megan' : characterName }
                        </strong>
                    </button>
                </li>
            {/each}
        {:else if Object.keys(placesPeopleBound).length === 0}
            <li>
                <button class=""> 
                    <!-- on click close conversation options -->
                    No one's around here right now, <strong>come back later</strong>
                </button>
            </li>
        {/if}
    </ul>
</div>


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
    button {
        background-color: rgb(35, 8, 8);
        color: rgb(214, 192, 192);
        font-size: x-small;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border-radius: 10px;
        width: 10em;
        margin-top: 2px;
        padding: 0.5em;
        z-index: 60;
    }
    .indicates-consuming-time {
        color: rgb(200, 39, 39);
        background-color: rgb(35, 8, 8);
    }
</style>