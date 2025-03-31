<script>

    import { scale } from 'svelte/transition'
	import { localTime } from "$lib/state.svelte.js";

</script>


    <div>
        <button onclick={localTime.addTime}>

            {#key localTime.timeInt}
                <span transition:scale={{ delay: 0.2 }}>
                    {Math.floor(localTime.timeInt / 60) + 10} : {localTime.timeInt % 60 === 0 ? '00' : localTime.timeInt % 60}
                </span>
            {/key}

        </button>
    </div>


<style>
    div {
        font-family: 'Orbitron', 'Cambria';
        font-size: 18px;
        margin-left: 2em;
        margin-top: auto;
        margin-bottom: auto;
        width: 12%;
        border: 1px maroon;
        border-radius: 10px;
        background-color: rgb(19, 7, 7);
        color: greenyellow;
        height: 40px;
        width: 85px;
        position: relative;
    }
    span {
        font-weight: 700;
        position: absolute;
        transform: translate(7px, -12px)
    }
</style>