<script>
// @ts-nocheck

	import '../app.css';

	import Interface from './Interface.svelte'
    import Time from './Time.svelte'
    import Tasks from './Tasks.svelte'
    import Inventory from './Inventory.svelte'
	import LocationPill from './LocationPill.svelte';

	import { rooms, roomsItems } from  '$lib/map.ts'
	import tasklist, { taskAbrv } from '$lib/tasks.ts';
	
</script>

<div class="main bg-white/30 backdrop-blur-sm">

	<div class="top-row">
		<Time />
		<LocationPill />
	</div>
	
	<div class="middle-row">
		<Interface />
	</div>
	
	<div class="bottom-row">
		<Inventory />
		<Tasks />
	</div>

</div>

<style lang="postcss">
	@import 'tailwindcss';

	:global(body) {
    	@apply bg-gradient-to-br from-slate-700 to-red-900;
  	}

	.main { 
		width: 35em;
		height: 35em;
		border-radius: 10px;
		align-content: center;
		align-self: center;
		justify-content: center;
		margin-top: 3em;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 12em;
        background-color: rgb(162, 151, 151);
		
	}

    .top-row {
        font-family: 'Orbitron';
        color: antiquewhite;
        height: 4em;
		margin-top: -3em;
		display: flex;
		flex-direction: row;
		align-content: top;
	}

    .middle-row {
		font-family: 'Cambria';
    }

    .bottom-row {
        margin-top: 1em;
		display: flex;
    }

	.room-title {
        margin-left: auto;
        margin-right: auto;
        color: rgb(200, 39, 39);
    }

</style>
