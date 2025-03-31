let timeInteger = 0
let locationDog = "";

// brans office to start
if (timeInteger <= 30) {
    locationDog = "K";

// upstairs office
} else if (timeInteger > 30 && timeInteger <= 60) {
    locationDog = "L";

// kitchen
} else if (timeInteger > 60 && timeInteger <= 90) {
    locationDog = "H";

// break room
} else if (timeInteger > 90 && timeInteger <= 120) {
    locationDog = "J";

// bathroom hallway
} else if (timeInteger > 120 && timeInteger <= 150) {
    locationDog = "I";

// showroom back
} else if (timeInteger > 150 && timeInteger <= 180) {
    locationDog = "G";

// showroom front
} else if (timeInteger > 180 && timeInteger <= 210) {
    locationDog = "F";

// warehouse back
} else if (timeInteger > 210 && timeInteger <= 240) { // the poop happens at 220, or 
    locationDog = "D";

// parking lot
} else if (timeInteger > 240 && timeInteger <= 270) { 
    locationDog = "A";

// warehouse front
} else if (timeInteger > 270 && timeInteger <= 390) {
    locationDog = "C";

// claires office
} else if (timeInteger > 390) {
    locationDog = "M";
}


export const dialogueAllDog = 
    {"K" : { "secondary" : ["Bark, bark, ruff!"] }, 
     "L" : { "secondary" : ["Ruff, ruff, ghhh..."] }, 
     "H" : { "secondary" : ["Woof, bark!"] }, 
     "J" : { "secondary" : ["Bark, bark, ruff!"] }, 
     "I" : { "secondary" : ["Ruff, ruff, ghhh..."] }, 
     "G" : { "secondary" : ["Woof, bark!"] }, 
     "F" : { "secondary" : ["Bark, bark, ruff!"] }, 
     "D" : { "secondary" : ["Ruff, ruff, ghhh..."] }, 
     "A" : { "secondary" : ["Woof, bark!"] }, 
     "C" : { "secondary" : ["Bark, bark, ruff!"] }, 
     "M" : { "secondary" : ["Ruff, ruff, ghhh..."] }, 
     "X" : { "default"   : ["Hrrr, Bark! Gr-bark!"]
    }};

let dialogueDogSecondary = []; // does not consume time

if        (locationDog == "K") { dialogueDogSecondary = dialogueAllDog["K"]["secondary"]
} else if (locationDog == "L") { dialogueDogSecondary = dialogueAllDog["L"]["secondary"]
} else if (locationDog == "H") { dialogueDogSecondary = dialogueAllDog["H"]["secondary"]
} else if (locationDog == "J") { dialogueDogSecondary = dialogueAllDog["J"]["secondary"]
} else if (locationDog == "I") { dialogueDogSecondary = dialogueAllDog["I"]["secondary"]
} else if (locationDog == "G") { dialogueDogSecondary = dialogueAllDog["G"]["secondary"]
} else if (locationDog == "F") { dialogueDogSecondary = dialogueAllDog["F"]["secondary"]
} else if (locationDog == "D") { dialogueDogSecondary = dialogueAllDog["D"]["secondary"]
} else if (locationDog == "A") { dialogueDogSecondary = dialogueAllDog["A"]["secondary"]
} else if (locationDog == "C") { dialogueDogSecondary = dialogueAllDog["C"]["secondary"]
} else if (locationDog == "M") { dialogueDogSecondary = dialogueAllDog["M"]["secondary"]

} else { dialogueDogSecondary = dialogueAllDog["X"]["default"] }

// 0   : 10:00 AM
// 30  : 10:30 AM
// 60  : 11:00 AM
// 90  : 11:30 AM
// 120 : 12:00 PM
// 150 : 12:30 PM
// 180 :  1:00 PM
// 210 :  1:30 PM
// 240 :  2:00 PM
// 270 :  2:30 PM
// 300 :  3:00 PM
// 330 :  3:30 PM
// 360 :  4:00 PM
// 390 :  4:30 PM
// 420 :  5:00 PM