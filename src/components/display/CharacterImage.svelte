<script lang="ts">
    import { conversation } from "$lib/state.svelte.ts";

    import bran from '$lib/assets/bran.png'
    import chris from '$lib/assets/chris.png'
    import clare from '$lib/assets/clare.png'
    import dog from '$lib/assets/dog.png'
    import jowe from '$lib/assets/jowe.png'
    import mark from '$lib/assets/mark.png'
    import megan_arnbul from '$lib/assets/megan_arnbul.png'
    import megan_keebler from '$lib/assets/megan_keebler.png'
    import megan_lee from '$lib/assets/megan_lee.png'
    import roommate from '$lib/assets/roommate.png'
    
    let image = ''
    let alt = ''

    $ : {
        if (conversation.character === 'Bran') {
            image = bran
            alt = 'This is Bran, the founder' 
        } else if (conversation.character === 'Chris') {
            image = chris
            alt = 'This is Chris' 
        } else if (conversation.character === 'Clare') {
            image = clare
            alt = 'This is Clare' 
        } else if (conversation.character === 'Dog') {
            image = dog
            alt = 'This is the dog' 
        } else if (conversation.character === 'Jowe') {
            image = jowe
            alt = 'This is Jowe' 
        } else if (conversation.character === 'Mark') {
            image = mark
            alt = 'This is Mark' 
        } else if (conversation.character === 'MeganChaotic') {
            image = megan_arnbul
            alt = 'This is Megan' 
        } else if (conversation.character === 'MeganGood') {
            image = megan_keebler
            alt = 'This is Megan' 
        } else if (conversation.character === 'MeganNeutral') {
            image = megan_lee
            alt = 'This is Megan' 
        } else if (conversation.character === 'Your Roommate') {
            image = roommate
            alt = 'This is your roommate'
        } else {
            image = ''
            alt = ''
        }
    }

</script>


{#if conversation.character != ''}
    <img alt={alt} src={image}/>
{/if}


<style>
    img {
        margin-left: 1em;
        margin-bottom: 1em;
        position: absolute;
        left: 1em;
        bottom: 5em;
        height: 20em;
        width: 15em;
        opacity: 0.6
    }
</style>