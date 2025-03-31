<!-- this includes the schedule, locations and task list for the character: -->
<!-- MEGAN LEE (NEUTRAL) -->

<script lang="ts">
    // import timeInteger from '../components/Time.svelte'
    let timeInteger = 0
    
    // where is this character, according to the time of day?
    let locationMeganNeutral = "";
    $: {
        // 10:00am to 11:30am, Office Upstairs
        if (timeInteger <= 90) {
            locationMeganNeutral = "L";
        // 11:40 am to 1:50pm, Showroom (Front)
        } else if (timeInteger > 90 && timeInteger <= 230) {
            locationMeganNeutral = "F";
        // 2 pm to 3:30pm, Break Area
        } else if (timeInteger > 230 && timeInteger <= 330) {
            locationMeganNeutral = "J";
        // 3:40 to 4pm, Sidewalk
        } else if (timeInteger > 340 && timeInteger <= 360) {
            locationMeganNeutral = "B";
        // 4:10pm to 5pm, Warehouse front
        } else if (timeInteger > 370) {
            locationMeganNeutral = "C";
        }
    }
    
    // alll of the characters possible dialogue
    // over the course of the day we should figure out shes the neutral one
    const dialogueAllMeganNeutral = 
        [[ // upstairs office 
            ["I guess this photoshoot doesn't necessarily interfere with my day.",
             "I want to make sure this instagram campaign is all set up later.",
             "Keep an eye out for Mark, will you? He's working on the copy for these emails."
            ],
            ["Do you know how to use excel?",
             "I'm busy right now, but you should show me tomorrow if you can."
            ]
        ],
        [ // showroom front
            ["You know what they say about guys who drive big cars?",
             "Well, I'm not going to make an official statement either way... but those Waterson Seneca guys sure do drive some really large ones.",
             "Some of us actually have a bet going. Personally, I bet that the tall one would be more insecure if you poked him about it.",
             "More insecure thatn the short one, I mean.",
             "Wait - is there anyway you would investigate for us? See which executive is moreso channeling his insecurity into the size of his car."
            ],
            ["Chris and Jowe and I are getting a beer later if you want to join.",
             "We are going to the dive next to Robot Taco down the street."
            ]
        ], 
        [ // break area 
            ["The other Megans are around here somewhere. Megan Arnbul got here an hour or two ago."]
        ], 
        [ // sidewalk
            ["What was Bran's plan with his dog today?",
             "I kind of can't believe he brought Lucy to the shoot - she's not the most housetrained dog, that's for sure.",
             "Don't get me wrong of course - she's super cute.",
             "Typically though she just hangs up with us upstairs by the desks. We keep dog stuff around up there."
            ],
            ["Don't tell Megan Keebler that you saw me smoking, please. We have a pact."]
        ], 
        [ // warehouse front
            ["Who's a bigger gossip, Jowe or Mark?",
             "Don't even get me started on Megan Arbnul. Talk about a headcase.",
             "Between you and me, I don't know how many more days like this I have in me.",
             "Obviously, the photoshoot is extraordinary circumstances, but doesn't it always feel like we are flying by the seat of our pants?"
            ],
        ], 
        [ // responding to the tasks about the execs
            ["Nice! The tall one, huh? Was he squirmy? That's awesome. Chris owes me TWO beers now. It's the little things, you know?"]
        ], 
        [ // default dialogue in case of error
            ["Hey girly! Honestly, I hope you have a lot of fun today. It's not everyday that we get to shake things up like this!"]
        ]];

    let dialogueMeganNeutralMain = []; // consumes time
    let dialogueMeganNeutralSecondary = []; // does not consume time

    $: {
        // 10am to 11am, and in the Parking Lot
        if (locationMeganNeutral = "L") {
            dialogueMeganNeutralMain = dialogueAllMeganNeutral[0][0]
            dialogueMeganNeutralSecondary = dialogueAllMeganNeutral[0][1]
        // 11:10 am to 2pm, and in the showroom
        } else if (locationMeganNeutral = "F") {
            dialogueMeganNeutralMain = dialogueAllMeganNeutral[1][0] // initiates meganNeutralTask 1
            dialogueMeganNeutralSecondary = dialogueAllMeganNeutral[1][1]
        // 2:10 to 4pm, and upstairs
        } else if (locationMeganNeutral = "J") { 
            dialogueMeganNeutralMain = dialogueAllMeganNeutral[2][0]
            dialogueMeganNeutralSecondary = dialogueAllMeganNeutral[2][0]
        // 2:10 to 4pm, or minute 240 to minute 360
        } else if (locationMeganNeutral = "B") {
            dialogueMeganNeutralMain = dialogueAllMeganNeutral[3][0]
            dialogueMeganNeutralSecondary = dialogueAllMeganNeutral[3][1]
        } else if (locationMeganNeutral = "C") {
            dialogueMeganNeutralMain = dialogueAllMeganNeutral[4][0]
            dialogueMeganNeutralSecondary = dialogueAllMeganNeutral[4][0]

        // if meganNeutral task 1 active = true, this takes precedence over all other interactions ?
        // } else if ( meganNeutral task 1 active = true ) { 
        //     dialogueClareTask = dialogueAllClare[5][0]
        // 10:00am to 1pm, Brans Upstairs
            
        } else {
            dialogueMeganNeutralMain = dialogueAllMeganNeutral[dialogueAllMeganNeutral.length - 1][0]
        }
    }

    // some stuff about tasks

</script>


