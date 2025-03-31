let timeInteger = 0
let locationMark = "";

// first he hides in clares office
if (timeInteger <= 50) {
    locationMark = "M";
// then he hides in the bathroom hallway
} else if (timeInteger > 50 && timeInteger <= 100) {
    locationMark = "I";
// then hes in showroom front for a while
} else if (timeInteger > 100 && timeInteger <= 320) {
    locationMark = "F";
// and he ends the day in the parking lot, using the sun to take photos
} else if (timeInteger > 320) {
    locationMark = "A";
}
    
// alll of the characters possible dialogue
export const dialogueAllMark = 
    {"M" : { // clares office dialogue
        "main" : 
        ["I know we are using Clare's office as a staging area today for our guests - ",
         "But this room has the best creative energy!",
         "I do miss having a more creative role here, you know. But operations is really good for my brain overall.",
         "Haha. I should see if Waterson Seneca is hiring someone with a background in operations and marketing for their creative team. Haha."
        ],
        "secondary" : 
        ["The Waterson Seneca executives are supposed to set up their stuff here really soon I think."]
    }, 
    "I" : { // bathroom hallway dialogue
        "task" : { "mark-1" :
        ["Hey hey what's up.",
         "I kind of just needed a place to hide and take a breather.",
         "It's honestly refreshingly nice back here, even though we are by the bathroom.",
         "I'm just really feeling so anti-social today. Can you bring me my laptop? I can't remember where I left it."
        ]},
        "secondary" : 
        ["Do you ever hide in the bathroom hallway? Not that I've done this before today. Not really, anyway."]
    }, 
    "F" : { // showroom front dialogue
        "main" : 
        ["Man I am so pumped to get a beer later with Megan and Chris - and maybe Jowe is coming?",
         "I never hang out with the warehouse crew, so this is a big step for me.",
         "Megan's cool to invite me along, but it's also not like she went out of her way." 
        ],
        "secondary" : 
        ["You know, watching this gives me a idea for something I can do later.",
         "I hope you've been finding fun and productive ways to spend your day."
        ]
    }, 
    "A" : { // parking lot dialogue
        "task" : { "mark-2" :
        ["You know, sometimes Clare and I joke that the three Megans who work here have distinctly different morality values.",
         "Like how a game of thrones character might be lawful neutral, or chaotic good.",
         "Do you know which one is which? Megan Arbnul, Megan Keebler and Megan Lee - ",
         "Which one is Good? Which one is Neutral? And which one is - well, let's say chaotic instead of evil."
        ]},
        "secondary" : 
        ["The afternoon light works great for these moody industrial product snapshots.",
         "I don't need anything fancy, just really standardized photos for the website and internal marketing",
         "Watching the big photoshoot inside really sparked some creativity for me!"
        ]
    }, 
    "mark-1" : {
        "succeed" : ["My laptop! Megan has been hounding me for feedback on this instagram copy.",
            "I don't even want to guess what silly place you found it.",
            "I gotta get better at keeping track of my stuff."
         ],
    },
    "mark-2" : {
        "succeed" : ["I'm sure today especially you got your share of shadiness from Megan Arnbul - ",
            "And that get-to-it spirit from Megan Keebler. Personally, I'm partial to Megan Lee, she's like the goldilocks of coworkers.",
            "OBVIOUSLY this has to stay between us."
        ],
        "fail" : ["Hmm, you are not as observant as I thought you were.",
            "Well, regardless, I doubt you will ever work with all three at once again.",
            "I'm sure someone will quit - or be dumped - any day now."
        ]
    },
    "X" : { // default dialogue in case of error
        "default" : ["I'm literally counting down the days until its beach weather again."]
    }};

let dialogueMarkMain = []; // consumes time
let dialogueMarkSecondary = []; // does not consume time
let dialogueClareTask = []


    // 10am to 11am, and in the Parking Lot
    if (locationMark == "M") {
        dialogueMarkMain = dialogueAllMark["M"]["main"] // initiates clareTask 1
        dialogueMarkSecondary = dialogueAllMark["M"]["secondary"]
    // 11:10 am to 2pm, and in the showroom
    } else if (locationMark == "I") {
        dialogueMarkMain = Object.values(dialogueAllMark["I"]["task"]) // initiates clareTask 2
        dialogueMarkSecondary = dialogueAllMark["I"]["secondary"]
    // 2:10 to 4pm, and upstairs
    } else if (locationMark == "F") { 
        dialogueMarkMain = dialogueAllMark["F"]["main"]
        dialogueMarkSecondary = dialogueAllMark["F"]["secondary"]
    // 2:10 to 4pm, or minute 240 to minute 360
    } else if (locationMark == "A") {
        dialogueMarkMain = Object.values(dialogueAllMark["A"]["task"]) // initiates clareTask 2
        dialogueMarkSecondary = dialogueAllMark["A"]["secondary"]

    // if clare task 1 active = true, this takes precedence over all other interactions ?
    // } else if (locationBran = "G") { 
    //     dialogueClareTask = dialogueAllClare[4][0]
    // 10:00am to 1pm, Brans Upstairs

    // if clare task 2 active = true, this takes precedence over all other interactions ?
    // } else if (locationBran = "G") { 
    //     dialogueClareTask = dialogueAllClare[5][0]
    // 10:00am to 1pm, Brans Upstairs

    } else {
        dialogueMarkSecondary = dialogueAllMark["X"]["default"]
    }

export const dialogueAllMarkStandard = 
    {"M" : { // clares office dialogue
        "main" : 
        ["I know we are using Clare's office as a staging area today for our guests - ",
         "But this room has the best creative energy!",
         "I do miss having a more creative role here, you know. But operations is really good for my brain overall.",
         "Haha. I should see if Waterson Seneca is hiring someone with a background in operations and marketing for their creative team. Haha."
        ],
        "secondary" : 
        ["The Waterson Seneca executives are supposed to set up their stuff here really soon I think."]
    }, 
    "I" : { 
        "secondary" : 
        ["Do you ever hide in the bathroom hallway? Not that I've done this before today. Not really, anyway."]
    }, 
    "F" : { // showroom front dialogue
        "main" : 
        ["Man I am so pumped to get a beer later with Megan and Chris - and maybe Jowe is coming?",
         "I never hang out with the warehouse crew, so this is a big step for me.",
         "Megan's cool to invite me along, but it's also not like she went out of her way." 
        ],
        "secondary" : 
        ["You know, watching this gives me a idea for something I can do later.",
         "I hope you've been finding fun and productive ways to spend your day."
        ]
    }, 
    "A" : { 
        "secondary" : 
        ["The afternoon light works great for these moody industrial product snapshots.",
         "I don't need anything fancy, just really standardized photos for the website and internal marketing",
         "Watching the big photoshoot inside really sparked some creativity for me!"
        ]
    }, 
    "X" : { // default dialogue in case of error
        "default" : ["I'm literally counting down the days until its beach weather again."]
    }};

export const dialogueAllMarkNonStandard = 
    {"I" : { // bathroom hallway dialogue
        "task" : { "mark-1" :
        ["Hey hey what's up.",
         "I kind of just needed a place to hide and take a breather.",
         "It's honestly refreshingly nice back here, even though we are by the bathroom.",
         "I'm just really feeling so anti-social today. Can you bring me my laptop? I can't remember where I left it."
        ]}    }, 
    "A" : { // parking lot dialogue
        "task" : { "mark-2" :
        ["You know, sometimes Clare and I joke that the three Megans who work here have distinctly different morality values.",
         "Like how a game of thrones character might be lawful neutral, or chaotic good.",
         "Do you know which one is which? Megan Arbnul, Megan Keebler and Megan Lee - ",
         "Which one is Good? Which one is Neutral? And which one is - well, let's say chaotic instead of evil."
        ]}
    }, 
    "X" : {
        "mark-1-b" : {
            "succeed" : ["My laptop! Megan has been hounding me for feedback on this instagram copy.",
                "I don't even want to guess what silly place you found it.",
                "I gotta get better at keeping track of my stuff."
         ],
        },
        "mark-2-a" : { // this dialogue happens AFTER the speech check hmmm...
            "succeed" : ["I'm sure today especially you got your share of shadiness from Megan Arnbul - ",
                "And that get-to-it spirit from Megan Keebler. Personally, I'm partial to Megan Lee, she's like the goldilocks of coworkers.",
                "OBVIOUSLY this has to stay between us."
        ],
            "fail" : ["Hmm, you are not as observant as I thought you were.",
                "Well, regardless, I doubt you will ever work with all three at once again.",
                "I'm sure someone will quit - or be dumped - any day now."
        ]
    }}
}