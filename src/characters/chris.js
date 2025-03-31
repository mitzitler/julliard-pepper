// his tasks are
// speech check : guess who coined the terms upstairs and down stairs people
// speech check : figure out if megan is single, smokes weed, free on saturday

let timeInteger = 0
    
// where is this character, according to the time of day?
let locationChris = "";

// First warehouse front
if (timeInteger <= 110) {
    locationChris = "C";
// then break area
} else if (timeInteger > 110 && timeInteger <= 190) {
    locationChris = "J";
// then hiding in bathroom hallway
} else if (timeInteger > 190 && timeInteger <= 220) {
    locationChris = "I";
// then warehouse back
} else if (timeInteger > 220) {
    locationChris = "D";
}

export const dialogueAllChris = 
    {"C" : { // warehouse front
        "main" : ["Have you talked to Jowe yet today? We're trying to get as much done on these new jar labels as we can.",
            "Between you and me, I don't really care if we hit the target.",
            "But man it would be great if it meant Jowe would be a little less stressed out the rest of this week."
        ],
        "secondary" : ["I guess today is weird for all of y'all, huh?",
            "It's not so different to me I think, except for that none of the other guys are here."
        ]
    },
    "J" : { // break area - this one is the upstairs downstairs check ?
        "task" : {"chris-1" : ["It seems like only 'upstairs people' ever take breaks in the break room.",
            "You've heard people say that? People who work at desks in the upstairs office, upstairs people.",
            "People in the warehouse, me, the boys, Jowe, and in the retail showroom - you - we work downstairs. Downstairs people.",
            "It's kind of a weird thing to say. Sometimes I hear someone say it and I'm like, well, you know how that sounds.",
            "Do you have a guess as to who first said it?"
        ]},
        "secondary" : ["Typically we all go to the taco truck next door for lunch, and then on my rotating break I just take a walk.",
            "I feel like I never really spend time in this room."
        ],
    }, 
    "I" : { // bathroom hallway
        "secondary" : ["I'm just sort of killing time over here."]
    },
    "D" : { // ware house back -- this is the investigate megan neutral
        "task" : { "chris-2" : ["I don't know if you heard yet but Megan and I are getting a drink after work. And Jowe. And Mark invited himself, too.",
            "You can come too if you want, I don't really care if it's a group thing at all, but...",
            "Well, I'm just trying to see if there's something there with Megan, you know?",
            "It would be a lot easier to ask her some questions if I already knew the answers.",
            "Can you ask her for me, a few things, find some stuff out, and let me know?",
            "Ask her if she's single, and if she's free on Saturday. And see if she's the kind of girl that's going to want super expensive dinners and shit.",
            "Yeah, yeah, if you could ask, and be really slick about it, and then let me know? But don't tell her I'm asking."
        ]},
        "secondary" : ["Does it smell a little funny in here?"]
    }, 
    "X" : { // default dialogue in case of error
        "default" : ["... (his headphones are in, and he doesn't want to take them off)"]
    }};

let dialogueChrisMain = []; // consumes time
let dialogueChrisSecondary = []; // does not consume time

if (locationChris = "C") {
    dialogueChrisMain = dialogueAllChris["C"]["main"] 
    dialogueChrisSecondary = dialogueAllChris["C"]["secondary"]
} else if (locationChris = "J") {
    dialogueChrisMain = Object.values(dialogueAllChris["J"]["task"]) 
    dialogueChrisSecondary = dialogueAllChris["J"]["secondary"]
} else if (locationChris = "I") { 
    dialogueChrisSecondary = dialogueAllChris["I"]["secondary"]
} else if (locationChris = "D") {
    dialogueChrisMain = Object.values(dialogueAllChris["D"]["task"])
    dialogueChrisSecondary = dialogueAllChris["D"]["secondary"]
} else {
    dialogueChrisSecondary = dialogueAllChris["X"]["default"]
}

export const dialogueAllChrisStandard = 
    {"C" : { // warehouse front
        "main" : ["Have you talked to Jowe yet today? We're trying to get as much done on these new jar labels as we can.",
            "Between you and me, I don't really care if we hit the target.",
            "But man it would be great if it meant Jowe would be a little less stressed out the rest of this week."
        ],
        "secondary" : ["I guess today is weird for all of y'all, huh?",
            "It's not so different to me I think, except for that none of the other guys are here."
        ]
    },
    "J" : { 
        "secondary" : ["Typically we all go to the taco truck next door for lunch, and then on my rotating break I just take a walk.",
            "I feel like I never really spend time in this room."
        ],
    }, 
    "I" : { // bathroom hallway
        "secondary" : ["I'm just sort of killing time over here."]
    },
    "D" : { 
        "secondary" : ["Does it smell a little funny in here?"]
    }, 
    "X" : { // default dialogue in case of error
        "default" : ["... (his headphones are in, and he doesn't want to take them off)"]
    }};

    export const dialogueAllChrisNonStandard = 
    {"J" : { // break area - this one is the upstairs downstairs check ?
        "task" : {"chris-1" : ["It seems like only 'upstairs people' ever take breaks in the break room.",
            "You've heard people say that? People who work at desks in the upstairs office, upstairs people.",
            "People in the warehouse, me, the boys, Jowe, and in the retail showroom - you - we work downstairs. Downstairs people.",
            "It's kind of a weird thing to say. Sometimes I hear someone say it and I'm like, well, you know how that sounds.",
            "Do you have a guess as to who first said it?"
        ]}
    }, 
    "D" : { // ware house back -- this is the investigate megan neutral
        "task" : { "chris-2" : ["I don't know if you heard yet but Megan and I are getting a drink after work. And Jowe. And Mark invited himself, too.",
            "You can come too if you want, I don't really care if it's a group thing at all, but...",
            "Well, I'm just trying to see if there's something there with Megan, you know?",
            "It would be a lot easier to ask her some questions if I already knew the answers.",
            "Can you ask her for me, a few things, find some stuff out, and let me know?",
            "Ask her if she's single, and if she's free on Saturday. And see if she's the kind of girl that's going to want super expensive dinners and shit.",
            "Yeah, yeah, if you could ask, and be really slick about it, and then let me know? But don't tell her I'm asking."
        ]}
    },
    'X' : { // task responses to megangood-1, ???
        "megangood-2-b" : { "succeed" : ["Did she mean to spell 'tellicherry' wrong? Is that a test to see if we really paid attention?",
            "Also, the little cherry designs are cute but I think people will get confused.",
            "I don't know anyone normal who knows about all these peppercorn variations, so I think these labels need to be really clear.",
            "But.. I really enjoy the vibe of it! For real."
        ]}
    }

};