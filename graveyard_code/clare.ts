type Standard = { 
    [key: string] : { 
        [key: string] : 
            string[]}}

type NonStandard = {
    [key: string]: {
        [key: string] : {
            [key: string] : 
                string[]}}}

export const dialogueAllClareStandard: Standard = 
    {"A" : { // parking lot dialogue, dialogueAllClare[0]
        "secondary" : 
        ["Somehow I'm in charge of making sure these Waterson Senecea Execs can all fit into this parking lot.",
            "Find me later in the Showroom if you are still looking for stuff to do"
        ]
    }, 
    "G" : {
        "secondary" : 
        ["Did you get a chance to look at the family dinner scene they set up? It looks so cozy"],
    }, 
    "L" : { // office dialogue, dialogueAllClare[2]
        "secondary" : 
        ["I'm working out here because they have set themselves up in my office, but I don't mind.",
            "This open office plan just makes me feel more productive. So many emails this week!"
        ]
    }, 
    "H" : { // kitchen dialogue, dialogueAllClare[3]
        "secondary" : 
        ["I still can't believe that whole photoshoot had real food, not any sort of plastic movie magic stuff.",
            "Did you see Jowe in the warehouse today? We gave most of the warehouse crew the day off because of all the craziness.",
            "He's so great. Maybe the funniest here - behind you, of course!"
        ]
    }, 
    "X" : { // default dialogue in case of error
        "default" : ["Hey girly! Honestly, I hope you have a lot of fun today. It's not everyday that we get to shake things up like this!"]
    }};

export const dialogueAllClareNonStandard: NonStandard = 
    {"A" : { // parking lot dialogue, dialogueAllClare[0]
        "task" : { "clare-1" :
        ["Hey! Glad to see you got my message to get here at 10 instead of 9 today - you are exactly on time",
            "You saw the all company email, right? You didn't?",
            "Well it's pretty exciting, actually. The execs at Waterson Seneca are staging and shooting the quarterly catalogue at the store today.",
            "This means we aren't going to be open for normal retail sales today - but don't worry, I'm sure we will find some stuff for you to do.",
            "Try to get five things done today. Everyone needs help, no one knows whats going on, and you are so good at that sort of stuff.",
            "Actually, you know what would be nice? Find Bran and say hi and good luck! I'm sure he will appreciate it." 
        ]}
    }, 
    "G" : { // showroom dialogue, dialogueAllClare[1]
        "task" : { "clare-2" : ["Guess what?",
            "I found a big box full of your favorite thing: fresh paper bags for you to stamp!",
            "Will you stamp all the bags in this box? The stamp pad is somewhere upstairs I think.",
            "I know you hate stamping, but if you do it today, you don't have to do it tomorrow!",
            "When you have the stamp pad return to this area if you can."
        ]},
        }, 
    "X" : { // responses can happen anywhere
        "clare-1" : { "succeed" : ["I'm glad you got a chance to say hi to Bran! He would never admit it, but I'm sure this is nervewracking.",
            "You are a really calming presence around here. Thanks for helping keep things cool, girly!"
        ]},
        "clare-2" : { "succeed" :
        ["You know, the 'you' of tomorrow will be really happy that the 'you' of today did this. Even though it took you - ",
            " - woah - ",
            " - an hour?",
            "Such an artist. You really stamp those bags until they are perfect, no matter how long it takes. Thanks!"
        ]
        }
    }};