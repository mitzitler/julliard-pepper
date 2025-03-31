<!-- this includes the schedule, locations and task list for the character: -->
<!-- EXECS -->

<script lang="ts">
    // import timeInteger from '../components/Time.svelte'
    let timeInteger = 0
    
    // where is this character, according to the time of day?
    let locationExecs = "";
    $: {
        // 10:00am to 10:20am, Main Room
        if (timeInteger <= 20) {
            locationExecs = "E";
        // 10:30 am to 11:20pm, Parking Lot
        } else if (timeInteger > 20 && timeInteger <= 80) {
            locationExecs = "A";
        // 11:30 am to 3pm, Showroom (Front)
        } else if (timeInteger > 80 && timeInteger <= 300) {
            locationExecs = "F";
        // 3:10 to 4:20pm, Clare's Office
        } else if (timeInteger > 300 && timeInteger <= 380) {
            locationExecs = "M";
        // 4:30pm to 5pm, Main Room
        } else if (timeInteger > 380) {
            locationExecs = "E";
        }
    }
    
    // alll of the characters possible dialogue
    const dialogueAllExecs = 
        [[ // main room dialogue, morning dialogueAllExecs[0]
            ["This area is SO off limits to you right now!"]
        ],
        [ // parking lot dialogue, dialogueAllExecs[1]
            []
        ], 
        [ // showroom (front) dialogue, dialogueAllExecs[2]
            []
        ], 
        [ // clares office dialogue, dialogueAllExecs[3]
            []
        ], 
        [ // main room dialogue, afternoon dialogue, dialogueAllClare[4]
            []
        ], 
        [ // default dialogue in case of error
            ["Hey girly! Honestly, I hope you have a lot of fun today. It's not everyday that we get to shake things up like this!"]
        ]];

    let dialogueExecsMain = []; // consumes time
    let dialogueExecsSecondary = []; // does not consume time

    $: {
        // 10am to 11am, and in the Parking Lot
        if (timeInteger <= 20) {
            dialogueExecsMain = dialogueAllExecs[0][0]
            dialogueExecsSecondary = dialogueAllExecs[0][0]
        // 11:10 am to 2pm, and in the showroom
        } else if (locationExecs = "A") {
            dialogueExecsMain = dialogueAllExecs[0][0]
            dialogueExecsSecondary = dialogueAllExecs[0][0]
        // 2:10 to 4pm, and upstairs
        } else if (locationExecs = "F") { 
            dialogueExecsMain = dialogueAllExecs[0][0]
            dialogueExecsSecondary = dialogueAllExecs[0][0]
        // 2:10 to 4pm, or minute 240 to minute 360
        } else if (locationExecs = "M") {
            dialogueExecsMain = dialogueAllExecs[0][0]
            dialogueExecsSecondary = dialogueAllExecs[0][0]
        } else {
            dialogueExecsMain = dialogueAllExecs[0][0]
            dialogueExecsSecondary = dialogueAllExecs[0][0]
        }
    }

    // some stuff about tasks

</script>


