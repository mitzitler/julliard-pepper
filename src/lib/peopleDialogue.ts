import { dialogueAllBran, dialogueAllBranStandard, dialogueAllBranNonStandard } from "../characters/bran.js";
import { dialogueAllChris, dialogueAllChrisStandard, dialogueAllChrisNonStandard } from "../characters/chris.js";
import { dialogueAllClare, dialogueAllClareStandard, dialogueAllClareNonStandard } from "../characters/clare.js";
import { dialogueAllDog } from "../characters/dog.js";
import { dialogueAllJowe, dialogueAllJoweStandard, dialogueAllJoweNonStandard } from "../characters/jowe.js";
import { dialogueAllMark, dialogueAllMarkStandard, dialogueAllMarkNonStandard } from "../characters/mark.js";
import { dialogueAllMeganChaotic, dialogueAllMeganChaoticStandard, dialogueAllMeganChaoticNonStandard } from "../characters/meganChaotic.js";
import { dialogueAllMeganGood, dialogueAllMeganGoodStandard, dialogueAllMeganGoodNonStandard } from "../characters/meganGood.js";
import { dialogueAllMeganNeutral, dialogueAllMeganNeutralStandard, dialogueAllMeganNeutralNonStandard } from "../characters/meganNeutral.js";

// in both cases, the code X means it can be anywhere
// top level added to the typing for the character name
// format = {
    // location_code : {
    //     main | secondary : [dialogue array]
    // }}
export type StandardDialogue = { 
    [key: string] : { // character name
        [key: string] : { // location
            [key: string] : // secondary | main | default
                string[]}}} // dialogue

// if it initiates a task, its   location: {task    : {task_id        : dialogue}}
// if its a response, its               X: {task_id : {succeed | fail : dialogue}}
// format = {
    // location_code : {
//         task | task_code_string : {
//             task_code_string | task_success : [dialogue array]
//         }   
// }}    
export type NonStandardDialogue = {
    [key: string] : {
        [key: string]: {
            [key: string] : {
                [key: string] : 
                    string[]}}}}

type PeopleLocations = {
    [key: string] : {
        [key: string] : number[]
    }
}

type PeoplePictures = {
    [key: string] : {
        path : string,
        alt : string
    }
}

export const dialogueAllStandard: StandardDialogue = {

    "Bran" : dialogueAllBranStandard,
    "Chris" : dialogueAllChrisStandard,
    "Clare" : dialogueAllClareStandard,
    "Dog" : dialogueAllDog, // dog does not have any task dialogue
    // exec dialogue
    "Jowe" : dialogueAllJoweStandard,
    "Mark" : dialogueAllMarkStandard,
    "MeganChaotic" : dialogueAllMeganChaoticStandard,
    "MeganGood" : dialogueAllMeganGoodStandard,
    "MeganNeutral" : dialogueAllMeganNeutralStandard,
    "Your Roommate" : 
        {"A" : {
            "secondary" : ["You said work was going to be weird today? I can kind of tell just from the parking lot.",
                "You should ask your boss, Clare, whats up.",
                "Be back in the parking lot between 5:20 and 5:50 for me to pick you up.",
                "Time is going to pass before you know it, I bet. Actions in red will take up your time, but actions in grey are free.",
                "Remember your commitment to work life balance! Don't stay too late today, or you will have to uber home!",
                "Also, don't be a loser and refresh your day! You will start over. Don't you want to see through what you've started?"
            ]
        }}

}

// this needs to have references somehow to speech checks

export const dialogueAllNonStandard: NonStandardDialogue = {

    "Bran" : dialogueAllBranNonStandard,
    "Chris" : dialogueAllChrisNonStandard,
    "Clare" : dialogueAllClareNonStandard,
    "Jowe" : dialogueAllJoweNonStandard,
    "Mark" : dialogueAllMarkNonStandard,
    "MeganChaotic" : dialogueAllMeganChaoticNonStandard,
    "MeganGood" : dialogueAllMeganGoodNonStandard,
    "MeganNeutral" : dialogueAllMeganNeutralNonStandard,

}

export const peopleLocations: PeopleLocations = {
    "Your Roommate": 
        {"A" : [0, 20]},

    "Clare": 
        {"A" : [0, 60], // Parking Lot, from 0 to 60 inclusive
         "G" : [70, 240], // showroom, from 70 to 240 inclusive 
         "L" : [250, 360], // office, from 250 to 360 inclusive
         "H" : [370, 420] // kitchen from 370 to 420 inclusive
        }, 

    "MeganGood": 
        {"H" : [0, 90], // kitchen, from 0 to 90 inclusive
         "D" : [100, 180], // warehouse back, from 100 to 180 inclusive
         "J" : [190, 300], // break room, from 190 to 300 inclusive
         "L" : [310, 420] // upstairs office, from 310 to 420 inclusive
        }, 
        
    "MeganNeutral": 
        {"L" : [0, 90], // upstairs office, from 0 to 90 inclusive
         "F" : [100, 230], // showroom front, from 100 to 230 inclusive
         "J" : [240, 330], // break area, from 240 to 330 inclusive
         "B" : [340, 360], // sidewalk, from 340 to 360 inclusive
         "C" : [370, 420] // warehouse front, from 370 to 420 inclusive
        },
        
    "MeganChaotic": 
        {""  : [0, 60], // not at work, from 0 to 60 inclusive
         "G" : [70, 120], // showroom back, from 70 to 120 inclusive
         "H" : [130, 280], // kitchen from 130 to 280 inclusive 
         "F" : [290, 400] // showroom front, from 290 to 400 inclusive
        },
        
    "Mark": 
        {"M" : [0, 50], // in clare's office, from 0 to 50 inclusive
         "I" : [60, 100], // in the bathroom hallway, from 60 to 100 inclusive
         "F" : [110, 320], // in showroom front, from 110 to 320 inclusive
         "A" : [330, 420] // in the parking lot, from 330 to 420 inclusive
        },
        
    "Bran": 
        {"K" : [0, 180], // Brans office, from 0 to 180 inclusive
         "F" : [190, 270], // Showroom front, from 190 to 270 exclusive
         "L" : [280, 420] // upstairs office, from 280 to 420 exlusive
        }, 
        
    "Jowe": 
        {"D" : [0, 170], // warehouse back, from 0 to 170 inclusive
         "A" : [180, 240], // parking lot, from 180 to 240 inclusive
         "C" : [250, 380], // warehouse front, from 250 to 380 inclusive
         "H" : [390, 420] // kitchen from 390 to 420 inclusive
        },
        
    "Chris": 
        {"C" : [0, 110], // warehouse front, from 0 to 110 inclusive
         "J" : [120, 190], // break area, from 120 to 190 inclusive
         "I" : [200, 220], // bathroom hallway, from 200 to 220 inclusive
         "D" : [230, 420] // warehouse back, from 230 to 420 inclusive
        },

    "Dog":         
        {"K" : [0, 20], // brans office
         "L" : [30, 60], // upstairs office
         "H" : [70, 90], // kitchen
         "J" : [100, 120], // break room
         "I" : [130, 150], // bathroom hallways
         "G" : [160, 180], // showroom back
         "F" : [190, 210], // showroom front
         "D" : [220, 240], // warehouse back
         "A" : [250, 270], // parking lot
         "C" : [280, 390], // warehouse front
         "M" : [400, 420] // clares office
        },
        
    // "Execs": ['', {}],

}

export const placesPeople: PeopleLocations = {

    "A" : {
        "Clare" : [0, 60],
        "Mark" : [330, 420],
        "Jowe" : [180, 240],
        "Dog" : [250, 270],
        "Your Roommate" : [0, 20]
    }, 

    "B" : {
        "MeganNeutral" : [340, 360]
    }, 

    "C" : {
        "Chris" : [0, 110],
        "Jowe" : [250, 380],
        "Dog" : [280, 390],
        "MeganNeutral" : [370, 420]
    }, 

    "D" : {
        "Jowe" : [0, 170],
        "MeganGood" : [100, 180],
        "Dog" : [220, 240],
        "Chris" : [230, 420]

    }, 

    "E" : {

    }, 

    "F" : {
        "MeganNeutral" : [100, 230],
        "MeganChaotic" : [290, 400],
        "Mark" : [110, 320],
        "Bran" : [190, 270],
        "Dog" : [190, 210]
    }, 

    "G" : {
        "Clare" : [70, 240],
        "MeganChaotic" : [70, 120],
        "Dog" : [160, 180]
    }, 

    "H" : {
        "MeganGood" : [0, 90],
        "MeganChaotic" : [130, 280],
        "Clare" : [370, 420],
        "Jowe" : [390, 420],
        "Dog" : [70, 90]
    }, 

    "I" : {
        "Mark" : [60, 100],
        "Chris" : [200, 220],
        "Dog" : [130, 150]
    }, 

    "J" : {
        "MeganGood" : [190, 300],
        "MeganNeutral" : [240, 330],
        "Chris" : [120, 190],
        "Dog" : [100, 120]
    }, 

    "K" : {
        "Bran" : [0, 180],
        "Dog" : [0, 20]
    }, 

    "L" : {
        "Clare" : [250, 360],
        "MeganGood" : [310, 420],
        "MeganNeutral" : [0, 90],
        "Bran" : [280, 420],
        "Dog" : [30, 60]
    }, 

    "M" : {
        "Mark" : [0, 50],
        "Dog" : [400, 420] 
    }, 

}

export const peoplePictures: PeoplePictures = {
    "Clare": {
        'path': '../../assets/clare.png',
        'alt': 'Clare, your boss'
    },

    "MeganGood": {
        'path': '../../assets/megan_keebler.png',
        'alt': 'Megan Keebler, a marketing manager'
    },
        
    "MeganNeutral": {
        'path': '../../assets/megan_lee.png',
        'alt': 'Megan Lee, a restaurant sales representative'
    },
        
    "MeganChaotic": {
        'path': '../../assets/megan_arnbul.png',
        'alt': 'Megan Arnbul, the creative director'
    },
        
    "Mark": {
        'path': '../../assets/mark.png',
        'alt': 'Mark, the chief operating officer'
    },
        
    "Bran": {
        'path': '../../assets/bran.png',
        'alt': 'Bran, the founder and namesake of the company'
    },
        
    "Jowe": {
        'path': '../../assets/jowe.png',
        'alt': 'Jowe, the warehouse manager'
    },
        
    "Chris": {
        'path': '../../assets/chris.png',
        'alt': 'Chris, a warehouse team lead'
    },

    "Dog": {
        'path': '../../assets/dog.png',
        'alt': 'Lucy, the mascot and free-roaming company dog'
    },
        
    // "Execs": ['', {}],
}