import { writable } from 'svelte/store';

export const globalTime = writable(0)
// export const minute = derived(globalTime, $globalTime => $globalTime % 60);
// export const hour = derived(globalTime, $globalTime => Math.floor($globalTime / 60));

    // let minute = $derived(globalTime % 60)
    // let hour = $derived(Math.floor(globalTime / 60))
