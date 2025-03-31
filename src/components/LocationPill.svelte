<script>
    import { location } from '$lib/state.svelte.js'
</script>

<div>
    {location.name}
</div>

<style>

    div {
        font-family: 'Orbitron';
        font-weight: 700;
        font-size: 16px;
        margin: auto;
        border-radius: 10px;
        background-color: rgb(19, 7, 7);
        color: yellow;
        height: 40px;
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>