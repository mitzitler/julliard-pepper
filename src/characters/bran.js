let timeInteger = 0
    
// where is this character, according to the time of day?
let locationBran = "";

// 10:00am to 1pm, Brans Upstairs
if (timeInteger <= 180) {
    locationBran = "K";
// 1:10 pm to 2:30pm, Showroom (Front)
} else if (timeInteger > 180 && timeInteger <= 270) {
    locationBran = "F";
// 2:40 pm to 3:30pm, upstairs office
} else if (timeInteger > 270) {
    locationBran = "L";
}


// alll of the characters possible dialogue
// over the course of the day we should figure out shes the neutral one
export const dialogueAllBran = 
    {"K" : { // brans office 
        "task" : { "bran-1" : ["Hey good job on that outbound event the other day. I saw your inventory it looks like you went through most of it.",
            "We changed some of the prices though, so you need to retag all the prices in the jars you came back with.",
            "Also we all need to be better about using the new pricetag gun, the one that's fancy.",
            "Can you find the new pricetag gun, track down Megan Arnbal for the price info, and retag your surplus inventory today? Thanks."
        ]},
        "secondary" : ["Honestly, you've been doing great. Clare and I want you to know that.",
            "But watch out with those discounts. We really shouldn't do that anymore. The product speaks for itself."
        ]
    },
    "F" : { // showroom front
        "secondary" : ["Look at that guy - isn't this for their summer catalog?",
            "The Tellecherry corns shouldn't be ground that hard! They need to keep some of that crunch!",
            "I really should get away from this photoshoot soon. I love Waterson Seneca of course, but that doesn't mean I agree with their creative vision.",
        ],
    }, 
    "L" : { // upstairs office
        "task" : { "bran-2" : ["Where's my dog?",
            "Find Lucy. This has to be your top priority."
        ]},
        "secondary" : ["I think we will be doing outbounds at the vineyards in June. You're twenty one, right?"]
    }, 
    "clare-1" : { // responding to the clare task
        "succeed" : ["I appreciate that! I don't want to be too involved today, I hate watching them use the space but barely showcase the pepper.",
            "One of them was also being a dick about Lucy being around. So."
        ]
    }, 
    "bran-1" : { // responding to the price tagging task
        "response" : ["We have to stay on top of inflation. This pepper is a luxury good that is far superior to anything in a supermarket.",
            "If people don't see that, then we need to make them see that!",
            "Higher prices will show customers and restaurants that we mean business, for real."
        ]
    }, 
    "bran-2" : { // responding to the find lucy task
        "succeed" : ["Cool. Glad you found her. I knew she would be okay, I wasn't worried. I hope you didn't drop anything important to do this."
        ]
    }, 
    "X" : { // default dialogue in case of error
        "default" : ["I have the Shopify app on my phone and every sale, online and in person, comes through as a push notification. I always know when you give out discounts."]
    }};

let dialogueBranMain = []; // consumes time
let dialogueBranSecondary = []; // does not consume time
let dialogueBranTask = []; // this is for completing tasks, consumes time



    // if clare task 1 active = true, this takes precedence over all other interactions ?
    // if (locationBran = "G") { 
    //     dialogueBranTask = dialogueAllBran[0][0]
    // 10:00am to 1pm, Brans Upstairs
    // } else

if (locationBran = "K") {
    dialogueBranMain = Object.values(dialogueAllBran["K"]["task"]) // initiates branTask 1
    dialogueBranSecondary = dialogueAllBran["K"]["secondary"]
// 1:10 pm to 2:30pm, Showroom (Front)
} else if (locationBran = "F") {
    // dialogueBranMain = dialogueAllBran["F"][0] // should there be a main if it doesnt initiate a task?
    dialogueBranSecondary = dialogueAllBran["F"]["secondary"]
// 2:40 pm to 3:30pm, Upstairs office
} else if (locationBran = "L") { 
    dialogueBranMain = Object.values(dialogueAllBran["L"]["task"]) // initiates branTask 2
    dialogueBranSecondary = dialogueAllBran["L"]["secondary"]

// if bran task 1 active = true, this takes precedence over all other interactions ?
// } else if (locationBran = "G") { 
//     dialogueBranTask = dialogueAllBran[4][0]
// 10:00am to 1pm, Brans Upstairs

// if bran task 2 active = true, this takes precedence over all other interactions ?
// } else if (locationBran = "G") { 
//     dialogueBranTask = dialogueAllBran[4][0]
// 10:00am to 1pm, Brans Upstairs

} else {
    dialogueBranSecondary = dialogueAllBran["X"]["default"]
}


export const dialogueAllBranStandard = 
    {"K" : { 
        "secondary" : ["Honestly, you've been doing great. Clare and I want you to know that.",
            "But watch out with those discounts. We really shouldn't do that anymore. The product speaks for itself."
        ]
    },
    "F" : { // showroom front
        "secondary" : ["Look at that guy - isn't this for their summer catalog?",
            "The Tellecherry corns shouldn't be ground that hard! They need to keep some of that crunch!",
            "I really should get away from this photoshoot soon. I love Waterson Seneca of course, but that doesn't mean I agree with their creative vision.",
        ],
    }, 
    "L" : {
        "secondary" : ["I think we will be doing outbounds at the vineyards in June. You're twenty one, right?"]
    }, 
    "X" : { // default dialogue in case of error
        "default" : ["I have the Shopify app on my phone and every sale, online and in person, comes through as a push notification. I always know when you give out discounts."]
    }};

export const dialogueAllBranNonStandard = 
    {"K" : { // brans office 
        "task" : { "bran-1" : ["Hey good job on that outbound event the other day. I saw your inventory it looks like you went through most of it.",
            "We changed some of the prices though, so you need to retag all the prices in the jars you came back with.",
            "Also we all need to be better about using the new pricetag gun, the one that's fancy.",
            "Can you find the new pricetag gun, track down Megan Arnbal for the price info, and retag your surplus inventory today? Thanks."
        ]}
    },
    "L" : { // upstairs office
        "task" : { "bran-2" : ["Where's my dog?",
            "Find Lucy. This has to be your top priority."
        ]},
    }, 
    "X" : { 
        "clare-1-a" : { "succeed" : ["I appreciate that! I don't want to be too involved today, I hate watching them use the space but barely showcase the pepper.",
            "One of them was also being a dick about Lucy being around. So."
        ]},
        // this is response dialogue after a task already succeeded?
        "bran-1-x" : { "succeed" : ["We have to stay on top of inflation. This pepper is a luxury good that is far superior to anything in a supermarket.",
            "If people don't see that, then we need to make them see that!",
            "Higher prices will show customers and restaurants that we mean business, for real."
        ]},
        "bran-2-x" : { "succeed" : ["Cool. Glad you found her. I knew she would be okay, I wasn't worried. I hope you didn't drop anything important to do this."
        ]}
    }}