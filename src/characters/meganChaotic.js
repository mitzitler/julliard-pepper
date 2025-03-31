let timeInteger = 0
// MEGAN ARNBUL
// where is this character, according to the time of day?
let locationMeganChaotic = "";

// 10 am to 11am, shes not at work
if (timeInteger <= 60) {
    locationMeganChaotic = "";
// 11:10 am to noon, showroom (back)
} else if (timeInteger > 60 && timeInteger <= 120) {
    locationMeganChaotic = "G";
// 12:10pm to 2:40pm, Kitchen
} else if (timeInteger > 120 && timeInteger <= 280) {
    locationMeganChaotic = "H";
// 2:50 pm to 4:50pm, Showroom (Front)
} else if (timeInteger > 280 && timeInteger <= 400) {
    locationMeganChaotic = "F";
}


// alll of the characters possible dialogue
export const dialogueAllMeganChaotic = 
    { "G" : { // showroom back
        "secondary" : ["What are you up to? Something productive, I hope!",
            "Everyone needs to make sure they are always giving it their all. One hundred and ten percent!"
        ]
    }, 
    "H" : { // kitchen dialoge
        "main" : ["Do you know how to work the espresso machine? You used to be a barista, right?",
            "Oh huh. I guess you just have that vibe.",
            "Bran and I typically go to the spot on Hawthorne, with the golden lattes.",
            "We have a breakfast date like almost every morning."
        ],
        "secondary" : ["Obviously Bran and I didn't arrive together today, so, well, I still need my coffee.",
        ]
    }, 
    "F" : { // showroom (front) dialogue
        "main" : ["It's not so easy managing our creative brand you know.",
            "I spend a lot of time sourcing flowers that scream 'Pepper!' but also have that classic Portland vibe.",
            "Most of them are from the Northwest, too."
        ],
        "secondary" : ["Creatively, the Julliard brand should say 'Luxury' but also 'Salt of the earth'. And it should say 'Timeless' but also feel really, really 2018.",
            "And like, this company needs creative direction that reflects well on Bran, and obviously reflects well on me, too.",
            "I might be Megan Julliard one day, you know."
        ]
    }, 
    "megangood-1" : { // responding to the flower moving megan keebler task, and initiating flower arraning task.
        "task" : {"meganchaotic-1" : ["Did you move the flower stack in the northeast corner?",
            "Um. I guess I get why you did that, but you shouldn't have.",
            "Each flower was intended for the show room, to aid the ambiance of the photoshoot.",
            "Bring that bundle back, and honestly, I'm basically on break, so you should probably rearrange them back into place, too."
        ]}
    }, 
    "meganchaotic-1" : { // responding to the flower arranging speech check task (a good and a bad)
        // good
        "succeed" : ["Oh great! Haha, there's hope for you yet. This is a great arrangement. Maybe I can come to one of your outbounds sometime and do florals for the dispay.",
            "You are such a great coworker and such a great listener! I love hanging out, girly!"
        ],
        // bad
        "fail" : ["I don't really know what I expected, so I guess it's not a let down. You might as well just throw them away.",
            "Take them to the dumpster.", 
            "And, yeah, I know Clare said you have to get a certain amount of stuff done today, but fixing such a big mistake doesn't count as an accomplishment."
        ]
    }, 
    "X" : { // default dialogue in case of error
        "default" : ["It's not so easy managing our creative brand you know.",
            "I spend a lot of time sourcing flowers that scream 'Pepper!' but also have that classic Portland vibe.",
            "Most of them are from the Northwest.",
        ]
    }};

let dialogueMeganChaoticMain = []; // consumes time
let dialogueMeganChaoticSecondary = []; // does not consume time
let dialogueMeganChaoticTask = []; // this is for completing tasks, consumes time


// showroom back
if (locationMeganChaotic = "G") {
    dialogueMeganChaoticSecondary = dialogueAllMeganChaotic["G"]["secondary"] // only has secondary here
// kitchen
} else if (locationMeganChaotic = "H") {
    dialogueMeganChaoticMain = dialogueAllMeganChaotic["H"]["main"]
    dialogueMeganChaoticSecondary = dialogueAllMeganChaotic["H"]["secondary"]
// showroom front
} else if (locationMeganChaotic = "F") { 
    dialogueMeganChaoticMain = dialogueAllMeganChaotic["F"]["main"]
    dialogueMeganChaoticSecondary = dialogueAllMeganChaotic["F"]["secondary"]
    
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
    dialogueMeganChaoticSecondary = dialogueAllMeganChaotic["X"]["default"]
}


// some stuff about tasks

export const dialogueAllMeganChaoticStandard = 
    { "G" : { // showroom back
        "secondary" : ["What are you up to? Something productive, I hope!",
            "Everyone needs to make sure they are always giving it their all. One hundred and ten percent!"
        ]
    }, 
    "H" : { // kitchen dialoge
        "main" : ["Do you know how to work the espresso machine? You used to be a barista, right?",
            "Oh huh. I guess you just have that vibe.",
            "Bran and I typically go to the spot on Hawthorne, with the golden lattes.",
            "We have a breakfast date like almost every morning."
        ],
        "secondary" : ["Obviously Bran and I didn't arrive together today, so, well, I still need my coffee.",
        ]
    }, 
    "F" : { // showroom (front) dialogue
        "main" : ["It's not so easy managing our creative brand you know.",
            "I spend a lot of time sourcing flowers that scream 'Pepper!' but also have that classic Portland vibe.",
            "Most of them are from the Northwest, too."
        ],
        "secondary" : ["Creatively, the Julliard brand should say 'Luxury' but also 'Salt of the earth'. And it should say 'Timeless' but also feel really, really 2018.",
            "And like, this company needs creative direction that reflects well on Bran, and obviously reflects well on me, too.",
            "I might be Megan Julliard one day, you know."
        ]
    }, 
    "X" : { // default dialogue in case of error
        "default" : ["It's not so easy managing our creative brand you know.",
            "I spend a lot of time sourcing flowers that scream 'Pepper!' but also have that classic Portland vibe.",
            "Most of them are from the Northwest.",
        ]
}};

export const dialogueAllMeganChaoticNonStandard = 
    // i think this should actually only trigger in one location - for consistency
    {"X" : { // initiates only if task "megangood-1" is done
        "task" : {"meganchaotic-1" : ["Did you move the flower stack in the northeast corner?",
            "Um. I guess I get why you did that, but you shouldn't have.",
            "Each flower was intended for the show room, to aid the ambiance of the photoshoot.",
            "Bring that bundle back, and honestly, I'm basically on break, so you should probably rearrange them back into place, too."
        ]},
        "bran-1" : {
            "bran-1-b" : ["Oh good, Bran told you about the new prices.",
                "The small jar of the pink peppercorn is now twelve dollars, the big jar is twenty...",
                "Oh, and the salty pepper is going to be twenty six now.",
                "Got that, or should I repeat myself?"
            ]
        },
        "meganchaotic-1-b" : { // responding to the flower arranging speech check task (a good and a bad)
            // good
            "succeed" : ["Oh great! Haha, there's hope for you yet. This is a great arrangement. Maybe I can come to one of your outbounds sometime and do florals for the dispay.",
                "You are such a great coworker and such a great listener! I love hanging out, girly!"
            ],
            // bad
            "fail" : ["I don't really know what I expected, so I guess it's not a let down. You might as well just throw them away.",
                "Take them to the dumpster.", 
                "And, yeah, I know Clare said you have to get a certain amount of stuff done today, but fixing such a big mistake doesn't count as an accomplishment."
            ]
        }
}};