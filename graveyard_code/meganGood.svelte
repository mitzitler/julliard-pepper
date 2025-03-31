<!-- this includes the schedule, locations and task list for the character: -->
<!-- MEGAN KEEBLER (GOOD) -->

<script lang="ts">
    // import timeInteger from '../components/Time.svelte'
    let timeInteger = 0
    
    // where is this character, according to the time of day?
    let locationMeganGood = "";
    $: {
        // 10 am to 11:30am, kitchen
        if (timeInteger <= 90) {
            locationMeganGood = "H";
        // 11:40 am to 1pm, warehouse (back)
        } else if (timeInteger > 90 && timeInteger <= 180) {
            locationMeganGood = "D";
        // 1:10pm to 3pm, break room
        } else if (timeInteger > 180 && timeInteger <= 300) {
            locationMeganGood = "J";
        // 3:10 pm to 5pm, upstairs office
        } else if (timeInteger > 300 && timeInteger <= 420) {
            locationMeganGood = "L";
        }
    }
    
    // alll of the characters possible dialogue
    const dialogueMeganGoodAll = 
        [[ // kitchen in the morning
            ["Wow, what a morning already. I hope I can get stuff done today, but, you know what?",
             "If I have to push some of this to tomorrow, I think that's fine!",
             "Today, I can feel it, is going to be kind of difficult. We should be gentle with ourselves."
            ]
        ], 
        [ // warehouse back dialogue midday
            ["It's so quiet back here since only Chris came in.",
             "Although, I love the vibe when the whole warehouse crew is in and they listen to the radio.",
             "Sometimes upstairs can be really sterile. Today I'm happy to have the peace and quiet, and Chris has had headphones in.",
             "Take these new promo cards we have and tell me what you think. I need new physical copy to give out to our chef partners."
            ],
            ["Also, lowkey, I'm just sort of avoiding Megan and Bran. You get it."
            ]
        ], 
        [ // break room dialogue (initiates task)
            [
            ],
            [
            ]
        ], 
        [ // upstairs office dialogue (initiates task)
            [
            ]
        ], 
        [ // responding to the flower moving task
            [
            ]
        ], 
        [ // responding to the dog poop task
            [
            ]
        ], 
        [ // default dialogue in case of error
            [
            ]
        ]];

    let dialogueMeganGoodMain = []; // consumes time
    let dialogueMeganGoodSecondary = []; // does not consume time
    let dialogueMeganGoodTask = []; // this is for completing tasks, consumes time

    $: {
        // kitchen
        if (locationMeganGood = "H") {
            dialogueMeganGoodSecondary = dialogueMeganGoodAll[0][0] // only has secondary here
        // warehouse back
        } else if (locationMeganGood = "D") {
            dialogueMeganGoodMain = dialogueMeganGoodAll[1][0]
            dialogueMeganGoodSecondary = dialogueMeganGoodAll[1][1]
        // showroom front
        } else if (locationMeganGood = "J") { 
            dialogueMeganGoodMain = dialogueMeganGoodAll[2][0]
            dialogueMeganGoodSecondary = dialogueMeganGoodAll[2][1]
        // showroom front
        } else if (locationMeganGood = "L") { 
            dialogueMeganGoodMain = dialogueMeganGoodAll[2][0]
            dialogueMeganGoodSecondary = dialogueMeganGoodAll[2][1]
            
        // if megan good task 1 complete = true, this takes precedence over all other interactions ?
        // } else if (locationBran = "G") { 
        //     dialogueMeganChaoticTask = dialogueMeganChaoticAll[3][0]
        // 10:00am to 1pm, Brans Upstairs
            
        // if megan evil task 1 complete = true and solved = true, this takes precedence over all other interactions ?
        // } else if (locationBran = "G") { 
        //     dialogueMeganChaoticTask = dialogueMeganChaoticAll[4][0]
        // 10:00am to 1pm, Brans Upstairs
            
        // if megan evil task 1 complete = true and solved = false, this takes precedence over all other interactions ?
        // } else if (locationBran = "G") { 
        //     dialogueMeganChaoticTask = dialogueMeganChaoticAll[4][1]
        // 10:00am to 1pm, Brans Upstairs

        } else {
            dialogueMeganGoodSecondary = dialogueMeganGoodAll[dialogueMeganGoodAll.length - 1][0]
        }
    }

    // some stuff about tasks

</script>