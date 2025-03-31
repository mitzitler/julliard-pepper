let timeInteger = 0
let locationJowe = "";

// warehouse back
if (timeInteger <= 170) {
    locationJowe = "D";
// parking lot
} else if (timeInteger > 170 && timeInteger <= 240) {
    locationJowe = "A";
// warehouse front
} else if (timeInteger > 240 && timeInteger <= 380) {
    locationJowe = "C";
// kitchen
} else if (timeInteger > 380) {
    locationJowe = "H";
}
    
// alll of the characters possible dialogue
export const dialogueAllJowe = 
    {"D" : { // warehouse back dialogue
        "main" : 
        ["Today we are just working through our packaging backlog.",
         "You know the new tellicherry they are trying to push upstairs?",
         "Well, yeah, so there's two different labels for the glass jars, ideally we put together four pallets of each today.",
         "Realistically? We get two pallets done. But anything is a win today, I think."
        ],
        "secondary" : 
        ["Chris might not be a big talker, but he's always the loudest singing along with the radio."]
    }, 
    "A" : { // parkinglot dialogue
        "task" : { "jowe-1" : ["Hey kid, do you have a little time to do a favor for me?",
        "Chris dipped for his fifteen and is probably taking a little walk - he deserves it.",
        "You know, no one was scheduled today, but everyone had the opportunity to get a little time and a half.",
        "He was the only one who took me up on it, you know? It's been great having help and a little company today.",
        "Chris is quiet though, so he's not going to ask for himself: can you fix him a little late lunch?",
        "The Waterson Seneca execs left all this real, delicious, chef-quality food in the kitchen.",
        "I know there are only so many servings, but he never gets the chef lunches on normal days.",
        "So, can you fix him a plate, heat it and stuff, and leave it in the warehouse fridge, and tape his name to the container?"
        ]},
        "secondary" : 
        ["Okay so it's important to get a little sun, every day, as much as you can.",
         "I mean sun is hard to come by, right?"
        ]
    }, 
    "C" : { // warehouse front dialogue
        "task" : { "jowe-2" : ["Okay kid I have a secret mission for you.",
        "Now I promise she won't get mad - or well, if she does, you can blame me 100%.",
        "But she really won't get mad I swear.",
        "Anyway, I saw Clare smoking in the parking lot earlier - me, her, Lee and some guys from the weekend shift all have a pact.",
        "Really, I should bust her balls for it, but honestly I just want her to be healthier!",
        "I'm sure this is such a stressful day, and I know she's going to have another one after these guys start to pack up.",
        "So, I won't let you get in trouble but, can you steal her pack, and hide it somewhere she'll never find it?",
        "You'll know the perfect hiding spot when you see it, I'm sure of that."
        ]},
        "secondary" : 
        ["Don't joke around about workman's comp anymore, please, please!",
         "You're young but you can still hurt yourself if you are not careful.",
         "Still, you don't qualify for workman's comp unless you do the trainings and Clare certifies that you need to do this labor."
        ]
    }, 
    "H" : { // kitchen dialogue
        // "main" : 
        // [],
        "secondary" : 
        ["I'm wiped",
         "Don't forget you have to make time to sit in on the warehouse training next week.",
         "You just have to do it if you are going to be spending so much time in the warehouse."
        ]
    }, 
    
    // task responses to megangood-1, ???

    "X" : { // default dialogue in case of error
        "default" : ["Be careful when you lift these boxes, no matter how heavy they are!"]
    }};

let dialogueJoweMain = []; // consumes time
let dialogueJoweSecondary = []; // does not consume time


    // 10am to 11am, and in the Parking Lot
    if (locationJowe == "D") {
        dialogueJoweMain = dialogueAllJowe["D"]["main"] // initiates clareTask 1
        dialogueJoweSecondary = dialogueAllJowe["D"]["secondary"]
    // 11:10 am to 2pm, and in the showroom
    } else if (locationJowe == "A") {
        dialogueJoweMain = Object.values(dialogueAllJowe["A"]["task"]) // initiates clareTask 2
        dialogueJoweSecondary = dialogueAllJowe["A"]["secondary"]
    // 2:10 to 4pm, and upstairs
    } else if (locationJowe == "C") { 
        dialogueJoweMain = Object.values(dialogueAllJowe["C"]["task"])
        dialogueJoweSecondary = dialogueAllJowe["C"]["secondary"]
    // 2:10 to 4pm, or minute 240 to minute 360
    } else if (locationJowe == "H") {
        dialogueJoweSecondary = dialogueAllJowe["H"]["secondary"]

    } else {
        dialogueJoweSecondary = dialogueAllJowe["X"]["default"]
    }

export const dialogueAllJoweStandard = 
    {"D" : { // warehouse back dialogue
        "main" : 
        ["Today we are just working through our packaging backlog.",
         "You know the new tellicherry they are trying to push upstairs?",
         "Well, yeah, so there's two different labels for the glass jars, ideally we put together four pallets of each today.",
         "Realistically? We get two pallets done. But anything is a win today, I think."
        ],
        "secondary" : 
        ["Chris might not be a big talker, but he's always the loudest singing along with the radio."]
    }, 
    "A" : { 
        "secondary" : 
        ["Okay so it's important to get a little sun, every day, as much as you can.",
         "I mean sun is hard to come by, right?"
        ]
    }, 
    "C" : { 
        "secondary" : 
        ["Don't joke around about workman's comp anymore, please, please!",
         "You're young but you can still hurt yourself if you are not careful.",
         "Still, you don't qualify for workman's comp unless you do the trainings and Clare certifies that you need to do this labor."
        ]
    }, 
    "H" : { // kitchen dialogue
        // "main" : 
        // [],
        "secondary" : 
        ["I'm wiped",
         "Don't forget you have to make time to sit in on the warehouse training next week.",
         "You just have to do it if you are going to be spending so much time in the warehouse."
        ]
    }, 
    "X" : { // default dialogue in case of error
        "default" : ["Be careful when you lift these boxes, no matter how heavy they are!"]
    }};

export const dialogueAllJoweNonStandard = 
    {"A" : { // parkinglot dialogue
        "task" : { "jowe-1" : ["Hey kid, do you have a little time to do a favor for me?",
        "Chris dipped for his fifteen and is probably taking a little walk - he deserves it.",
        "You know, no one was scheduled today, but everyone had the opportunity to get a little time and a half.",
        "He was the only one who took me up on it, you know? It's been great having help and a little company today.",
        "Chris is quiet though, so he's not going to ask for himself: can you fix him a little late lunch?",
        "The Waterson Seneca execs left all this real, delicious, chef-quality food in the kitchen.",
        "I know there are only so many servings, but he never gets the chef lunches on normal days.",
        "So, can you fix him a plate, heat it and stuff, and leave it in the warehouse fridge, and tape his name to the container?"
        ]}
    }, 
    "C" : { // warehouse front dialogue
        "task" : { "jowe-2" : ["Okay kid I have a secret mission for you.",
        "Now I promise she won't get mad - or well, if she does, you can blame me 100%.",
        "But she really won't get mad I swear.",
        "Anyway, I saw Clare smoking in the parking lot earlier - me, her, Lee and some guys from the weekend shift all have a pact.",
        "Really, I should bust her balls for it, but honestly I just want her to be healthier!",
        "I'm sure this is such a stressful day, and I know she's going to have another one after these guys start to pack up.",
        "So, I won't let you get in trouble but, can you steal her pack, and hide it somewhere she'll never find it?",
        "You'll know the perfect hiding spot when you see it, I'm sure of that."
        ]}
    }, 
    'X' : { // task responses to megangood-1, ???
        "megangood-2-a" : { "succeed" : ["The design is great. I think on her newest version the logo really pops.",
            "Oh well actually, I do have feedback - its either too long or too short to be a wraparound label on a jar.",
            "Sometimes labels on jars don't go all the way around, but its kind of cool. Sometimes it wraps around continously.",
            "But this length is a little awkward! Tell her to cut out a piece of paper with the same dimensions and wrap it around a jar and seee if she gets what I mean."
        ]}
    }
}