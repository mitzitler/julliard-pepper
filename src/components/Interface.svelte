<script lang="ts">
    
    import OptionsConversation from './options/OptionsConversation.svelte'
    import OptionsMoveRoom from './options/OptionsMoveRoom.svelte'
    import OptionsRoomScan from './options/OptionsRoomScan.svelte'
    import RoomScanDescription from './options/RoomScanDescription.svelte'

    import Dialogue from './display/Dialogue.svelte'
    import CharacterImage from './display/CharacterImage.svelte'
    import StepDisplay from './display/StepDisplay.svelte'

    import { rooms, roomsItems, roomsPaths } from  '$lib/map.ts'
    import { location, interfaceStuff, conversation, inventory } from '$lib/state.svelte.js'

    // let expandedId = $state("")

    // all this comes from
    // https://stackoverflow.com/questions/71902375/how-to-call-function-from-another-component-to-another-component
    // function handleStepAnnouncementDisplay({ stepAnnouncement }) {
    //     console.log('okay', stepAnnouncement)
    // }

    // let stepdisplay

</script>

<div class="screen">
    <div class="background-image"> 
        <div class="options grid grid-cols-3 gap-x-4">

            <button class="indicates-consuming-time mt-2 mx-auto items-center" id="roomscan" onclick={() => {
                interfaceStuff.clickRoomScan()
                console.log('interfaceStuff.clickRoomScan() went fine')
            }}>
                <strong>Scan</strong><br> the area
            </button>

            <button class="indicates-consuming-time mt-2 mx-auto items-center" id="dialogue" onclick={() => {
                interfaceStuff.clickConversationOptions()
            }}>
                <strong>Talk</strong><br> to someone
            </button>

            <button class="indicates-consuming-time mt-2 mx-auto items-center" id="moveroom" onclick={() => {
                interfaceStuff.clickMoveRooms()
            }}>
                <strong>Move</strong><br> around rooms
            </button>

            {#if conversation.character === ''}
                <div class="col-span-3 grid grid-cols-subgrid gap-x-4">
                    <div class="col-start-1 mx-auto items-center">
                        {#if (interfaceStuff.expandedId === "roomscan")}
                        <OptionsRoomScan />
                        {/if}
                    </div>

                    <div class="col-start-2 col-span-2 mx-auto items-center">
                        {#if (interfaceStuff.expandedId === "roomscan")}
                        <RoomScanDescription />
                        {/if}
                    </div>

                    <div class="col-start-2 mx-auto items-center">
                        {#if (interfaceStuff.expandedId === "dialogue")}
                        <OptionsConversation />
                        {/if}
                    </div>

                    <div class="col-start-3 mx-auto items-center">
                        {#if (interfaceStuff.expandedId === "moveroom")}
                        <OptionsMoveRoom />  
                        {/if}
                    </div>
                </div>
            <!-- after dialogue, conversation.character is set back to falsey -->
            {:else} 

                <div class="col-start-1 col-span-2 mx-auto items-center">
                    {#if (interfaceStuff.expandedId === "dialogue")} <!-- and openDialogue = true ? -->
                    <CharacterImage />
                    {/if}
                </div>

                <div class="col-start-2 col-span-2 mx-auto items-center">
                    <!-- {#if (expandedId === "roomscan")} -->
                    <Dialogue />
                    <!-- {/if} -->
                </div>
            {/if}
        </div>

        <div class="display">
            <!-- {conversation != "" ? <Dialogue {location} {localTime} {conversation} {activeTasks}/> : 
                {roomDisplay != "" ? <RoomDescription {location} {localTime}/> : 
                    <></>}} -->
        
            {#if (conversation.character === '' || location.newRoom === true)}
                <div class="text-center relative">
                    <!-- <div class='announcement'>

                        <Dialogue class="task-announcement" on:conversation-ended={handleStepAnnouncementDisplay}/> 

                        <StepDisplay bind:this={stepdisplay}/>

                    </div> -->

                    <div class="room-description">
                        {location.description}
                    </div>
                </div>
            {/if}
        </div> 

    </div>

</div>

<style>
    .screen {
        border-radius: 10px;
        background-color: rgb(49, 45, 45);
        height: 25em;
        width: 32em;
        margin-top: auto;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 
            0 0px 0px 3px rgb(88, 27, 27), 
            0 24px 16px -8px black, 
            0 12px 56px -8px yellow,
            -24px 8px 56px -2px orange,
            -32px 0 56px 2px lightskyblue, 
            24px 8px 56px 2px green;
        /* box-shadow: 
            0 0px 0px 3px rgb(88, 27, 27), 
            0 24px 16px -8px black, 
            8px -24px 56px -8px yellow,
            -24px 8px 56px -2px orange,
            -32px -24px 56px 2px lightskyblue, 
            24px 8px 56px 2px green; */
    }

    button {
        background-color: rgb(200, 39, 39);
        color: rgb(35, 8, 8);
        z-index: 20;
        border-width: 2px;
        border-color: yellow;
        border-style: dashed;
        font-size: x-small;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border-radius: 10px;
        width: 10em;
        padding: 0.5em
    }

    button strong {
        font-size: small;
    }
    .indicates-consuming-time {
        color: rgb(200, 39, 39);
        background-color: rgb(35, 8, 8);
        z-index: 100;
    }
    .room-description {
        position: absolute;
        opacity: 0.4;
        background-color: gainsboro;
        font-family: 'Orbitron';
        border-radius: 10px;
        padding: 3em;
        margin: 2em
    }
</style>