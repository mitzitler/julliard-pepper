// @ts-ignore
import { dialogueAllClare } from '../characters/clare.js'
import { dialogueAllMeganGood } from '../characters/meganGood.js'
import { dialogueAllMeganNeutral } from '../characters/meganNeutral.js'
import { dialogueAllMeganChaotic } from '../characters/meganChaotic.js'
import { dialogueAllMark } from '../characters/mark.js'
import { dialogueAllBran } from '../characters/bran.js'
import { dialogueAllJowe } from '../characters/jowe.js'
import { dialogueAllChris } from '../characters/chris.js'
import { dialogueAllDog } from '../characters/dog.js'

export const peopleDialogue = {

    "Clare": [dialogueAllClare,
        
        // locations
        {"A" : [0, 60], // Parking Lot, from 0 to 60 inclusive
         "G" : [70, 240], // showroom, from 70 to 240 inclusive 
         "L" : [250, 360], // office, from 250 to 360 inclusive
         "H" : [370, 420]}, // kitchen from 370 to 420 inclusive
        ],

    "MeganGood": [dialogueAllMeganGood, 
        
        // locations
        {"H" : [0, 90], // kitchen, from 0 to 90 inclusive
         "D" : [100, 180], // warehouse back, from 100 to 180 inclusive
         "J" : [190, 300], // break room, from 190 to 300 inclusive
         "L" : [310, 420]} // upstairs office, from 310 to 420 inclusive
        ],
        
    "MeganNeutral": [dialogueAllMeganNeutral, 
        
        // locations
        {"L" : [0, 90], // upstairs office, from 0 to 90 inclusive
         "F" : [100, 230], // showroom front, from 100 to 230 inclusive
         "J" : [240, 330], // break area, from 240 to 330 inclusive
         "B" : [340, 360], // sidewalk, from 340 to 360 inclusive
         "C" : [370, 420] // warehouse front, from 370 to 420 inclusive
        }],
        
    "MeganChaotic": [dialogueAllMeganChaotic, 
        
        // locations
        {""  : [0, 60], // not at work, from 0 to 60 inclusive
         "G" : [70, 120], // showroom back, from 70 to 120 inclusive
         "H" : [130, 280], // kitchen from 130 to 280 inclusive 
         "F" : [290, 400] // showroom front, from 290 to 400 inclusive
        }
        ],
        
    "Mark": [dialogueAllMark, 
        
        // locations
        {"M" : [0, 50], // in clare's office, from 0 to 50 inclusive
         "I" : [60, 100], // in the bathroom hallway, from 60 to 100 inclusive
         "F" : [110, 320], // in showroom front, from 110 to 320 inclusive
         "A" : [330, 420] // in the parking lot, from 330 to 420 inclusive
        }],
        
    "Bran": [dialogueAllBran, 
        
        // locations
        {"K" : [0, 180], // Brans office, from 0 to 180 inclusive
         "F" : [190, 270], // Showroom front, from 190 to 270 exclusive
         "L" : [280, 420]}, // upstairs office, from 280 to 420 exlusive
        ],
        
    "Jowe": [dialogueAllJowe, 
        
        // locations
        {"D" : [0, 170], // warehouse back, from 0 to 170 inclusive
         "A" : [180, 240], // parking lot, from 180 to 240 inclusive
         "C" : [250, 380], // warehouse front, from 250 to 380 inclusive
         "H" : [390, 420] // kitchen from 390 to 420 inclusive
        }],
        
    "Chris": [dialogueAllChris, 
        
        {"C" : [0, 110], // warehouse front, from 0 to 110 inclusive
         "J" : [120, 190], // break area, from 120 to 190 inclusive
         "I" : [200, 220], // bathroom hallway, from 200 to 220 inclusive
         "D" : [230, 420] // warehouse back, from 230 to 420 inclusive
        }],

    "Dog": [dialogueAllDog, 
        
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
        }],
        
    // "Execs": ['', {}],

}

export const peopleDialogueSpecial = {

    "Clare": [dialogueAllClare,
        
        // locations
        {"A" : [0, 60], // Parking Lot, from 0 to 60 inclusive
         "G" : [70, 240], // showroom, from 70 to 240 inclusive 
         "L" : [250, 360], // office, from 250 to 360 inclusive
         "H" : [370, 420]}, // kitchen from 370 to 420 inclusive
        ],

    "MeganGood": [dialogueAllMeganGood, 
        
        // locations
        {"H" : [0, 90], // kitchen, from 0 to 90 inclusive
         "D" : [100, 180], // warehouse back, from 100 to 180 inclusive
         "J" : [190, 300], // break room, from 190 to 300 inclusive
         "L" : [310, 420]} // upstairs office, from 310 to 420 inclusive
        ],
        
    "MeganNeutral": [dialogueAllMeganNeutral, 
        
        // locations
        {"L" : [0, 90], // upstairs office, from 0 to 90 inclusive
         "F" : [100, 230], // showroom front, from 100 to 230 inclusive
         "J" : [240, 330], // break area, from 240 to 330 inclusive
         "B" : [340, 360], // sidewalk, from 340 to 360 inclusive
         "C" : [370, 420] // warehouse front, from 370 to 420 inclusive
        }],
        
    "MeganChaotic": [dialogueAllMeganChaotic, 
        
        // locations
        {""  : [0, 60], // not at work, from 0 to 60 inclusive
         "G" : [70, 120], // showroom back, from 70 to 120 inclusive
         "H" : [130, 280], // kitchen from 130 to 280 inclusive 
         "F" : [290, 400] // showroom front, from 290 to 400 inclusive
        }
        ],
        
    "Mark": [dialogueAllMark, 
        
        // locations
        {"M" : [0, 50], // in clare's office, from 0 to 50 inclusive
         "I" : [60, 100], // in the bathroom hallway, from 60 to 100 inclusive
         "F" : [110, 320], // in showroom front, from 110 to 320 inclusive
         "A" : [330, 420] // in the parking lot, from 330 to 420 inclusive
        }],
        
    "Bran": [dialogueAllBran, 
        
        // locations
        {"K" : [0, 180], // Brans office, from 0 to 180 inclusive
         "F" : [190, 270], // Showroom front, from 190 to 270 exclusive
         "L" : [280, 420]}, // upstairs office, from 280 to 420 exlusive
        ],
        
    "Jowe": [dialogueAllJowe, 
        
        // locations
        {"D" : [0, 170], // warehouse back, from 0 to 170 inclusive
         "A" : [180, 240], // parking lot, from 180 to 240 inclusive
         "C" : [250, 380], // warehouse front, from 250 to 380 inclusive
         "H" : [390, 420] // kitchen from 390 to 420 inclusive
        }],
        
    "Chris": [dialogueAllChris, 
        
        {"C" : [0, 110], // warehouse front, from 0 to 110 inclusive
         "J" : [120, 190], // break area, from 120 to 190 inclusive
         "I" : [200, 220], // bathroom hallway, from 200 to 220 inclusive
         "D" : [230, 420] // warehouse back, from 230 to 420 inclusive
        }],

    "Dog": [dialogueAllDog, 
        
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
        }],
        
    // "Execs": ['', {}],

}

export const placesPeople = {

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