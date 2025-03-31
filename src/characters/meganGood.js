let timeInteger = 0
// MEGAN KEEBLER
// where is this character, according to the time of day?
let locationMeganGood = "";

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

// alll of the characters possible dialogue
export const dialogueAllMeganGood = 
    {"H" : { // kitchen in the morning
        "secondary" : ["Wow, what a morning already. I hope I can get stuff done today, but, you know what?",
            "If I have to push some of this to tomorrow, I think that's fine!",
            "Today, I can feel it, is going to be kind of difficult. We should be gentle with ourselves."
        ]
    }, 
    "D" : { // warehouse back dialogue midday
        "main" : ["It's so quiet back here since only Chris came in.",
            "Although, I love the vibe when the whole warehouse crew is in and they listen to the radio.",
            "Sometimes upstairs can be really sterile. Today I'm happy to have the peace and quiet, and Chris has had headphones in.",
            "Take these new promo cards we have and tell me what you think. I need new physical copy to give out to our chef partners."
        ],
        "secondary" : ["Also, lowkey, I'm just sort of avoiding Megan and Bran. You get it."
        ]
    }, 
    "J" : { // break room dialogue (initiates task)
        "task" : {"megangood-1" : ["Did you see how many flowers Megan Arnbul set up in the front of the showroom?",
            "They are so beautiful. Perfectly in season, and you know they are all hyper-local.",
            "I think there must be a spare bouquet or two.",
            "What if you arranged some of the spare flowers into a vase in this break area?",
            "Wouldn't that be nice?"
        ]},
        "secondary" : ["Ooof. You're not on the schedule tomorrow, right? We have another few days of this photoshoot.",
            "Get out while you can!",
            "Haha, just kidding, of course. Of course."
        ]
    }, 
    "L" : { // upstairs office dialogue (initiates task)
        "task" : {"megangood-2" : ["I think I need Jowe's input on this new jar design. It should fit fine into our current boxes, but we need to make sure.",
            "Go ask Jowe, and see if Chris has any thoughts, too."
        ]},
        "secondary" : ["I would go down to the warehouse, but honestly if I take those stairs another time today I'm calling it quits."
        ]
    }, 
    "megangood-1" : { // responding to the flower moving task
        "succeed" : ["Now, isn't that nice? It's nice to spend a little time sprucing up these areas that are only for us."
        ]
    }, 
    "dog-1" : { // responding to the dog poop task
        "response" : ["Wow.. you are such a saint for dealing with that.",
            "It's really crazy how often Lucy poops in the back of the warehouse, right?"
        ]
    }, 
    "X" : { // default dialogue in case of error
        "default" : ["Don't forget to take deep breaths and enjoy some rare sunshine today!"
        ]
    }};

let dialogueMeganGoodMain = []; // consumes time
let dialogueMeganGoodSecondary = []; // does not consume time
let dialogueMeganGoodTask = []; // this is for completing tasks, consumes time


// kitchen
if (locationMeganGood = "H") {
    dialogueMeganGoodSecondary = dialogueAllMeganGood["H"]["secondary"] // only has secondary here
// warehouse back
} else if (locationMeganGood = "D") {
    dialogueMeganGoodMain = dialogueAllMeganGood["D"]["main"]
    dialogueMeganGoodSecondary = dialogueAllMeganGood["D"]["secondary"]
// showroom front
} else if (locationMeganGood = "J") { 
    dialogueMeganGoodMain = Object.values(dialogueAllMeganGood["J"]["task"])
    dialogueMeganGoodSecondary = dialogueAllMeganGood["J"]["secondary"]
// showroom front
} else if (locationMeganGood = "L") { 
    dialogueMeganGoodMain = Object.values(dialogueAllMeganGood["L"]["task"])
    dialogueMeganGoodSecondary = dialogueAllMeganGood["L"]["secondary"]
    
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
    dialogueMeganGoodSecondary = dialogueAllMeganGood["X"]["default"]
}

export const dialogueAllMeganGoodStandard = 
    {"H" : { // kitchen in the morning
        "secondary" : ["Wow, what a morning already. I hope I can get stuff done today, but, you know what?",
            "If I have to push some of this to tomorrow, I think that's fine!",
            "Today, I can feel it, is going to be kind of difficult. We should be gentle with ourselves."
        ]
    }, 
    "D" : { // warehouse back dialogue midday
        "main" : ["It's so quiet back here since only Chris came in.",
            "Although, I love the vibe when the whole warehouse crew is in and they listen to the radio.",
            "Sometimes upstairs can be really sterile. Today I'm happy to have the peace and quiet, and Chris has had headphones in.",
            "Take these new promo cards we have and tell me what you think. I need new physical copy to give out to our chef partners."
        ],
        "secondary" : ["Also, lowkey, I'm just sort of avoiding Megan and Bran. You get it."
        ]
    }, 
    "J" : { // break room dialogue (initiates task)
        "secondary" : ["Ooof. You're not on the schedule tomorrow, right? We have another few days of this photoshoot.",
            "Get out while you can!",
            "Haha, just kidding, of course. Of course."
        ]
    }, 
    "L" : { // upstairs office dialogue (initiates task)
        "secondary" : ["I would go down to the warehouse, but honestly if I take those stairs another time today I'm calling it quits."
        ]
    }, 
    "X" : { // default dialogue in case of error
        "default" : ["Don't forget to take deep breaths and enjoy some rare sunshine today!"
        ]
}};

export const dialogueAllMeganGoodNonStandard = 
    {"J" : { // break room dialogue (initiates task)
        "task" : {"megangood-1" : ["Did you see how many flowers Megan Arnbul set up in the front of the showroom?",
            "They are so beautiful. Perfectly in season, and you know they are all hyper-local.",
            "I think there must be a spare bouquet or two.",
            "What if you arranged some of the spare flowers into a vase in this break area?",
            "Wouldn't that be nice?"
        ]}
    }, 
    "L" : { // upstairs office dialogue (initiates task)
        "task" : {"megangood-2" : ["I think I need Jowe's input on this new jar design. It should fit fine into our current boxes, but we need to make sure.",
            "Go ask Jowe, and see if Chris has any thoughts, too."
        ]}
    }, 
    "X" : {
        "megangood-1-x" : { // responding to the flower moving task
            "succeed" : ["Now, isn't that nice? It's nice to spend a little time sprucing up these areas that are only for us."
            ]
        }, 
        "megangood-b-c" : { // responding to the flower moving task
            "succeed" : ["Ohh that's great feedback. I'll be honest - spelling and geometry were never my top subjects in school.",
                "So what I'm hearing is, make it either longer or short, but wrapping a mockup on a physical jar will really help.",
                "Also, check my spelling. Oh yeah, and nix the cherry icons, because they are more confusing than they are cute.",
                "Love it! Thanks for your help!"
            ]
        }, 
        "dog-1" : { // responding to the dog poop task
            "succeed" : ["Wow.. you are such a saint for dealing with that.",
                "It's really crazy how often Lucy poops in the back of the warehouse, right?"
            ]
        }
}};