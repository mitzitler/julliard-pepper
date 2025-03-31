
import { speechChecksMeganChaotic1, winnersMeganChaotic1, failuresMeganChaotic1 } from "./speechCheckMeganChaotic1.js"

export const speechChecks = {

    // investigate the execs
    // and then go back and give her the answer ?? or no ??
    "meganneutral-1" : {},

    // flower arranging
    "meganchaotic-1" : {

        intro_dialogue : "",

        flow : speechChecksMeganChaotic1,

        winner_dialogue : {
            condition : winnersMeganChaotic1,
            dialogue : "Oh wow, you actually did a really good job! Hahah, I guess even a broken clock is right twice a day, huh?",
            task_complete : true
        },

        failure_dialogue : {
            condition : failuresMeganChaotic1,
            dialogue : "No, that looks horrible. Did you even try? Honestly, throw the whole bunch away. And no, obviously, this was not a 'success' if you've actually been keeping score today.",
            task_complete : false
        },

        other_dialogue : {
            condition : null,
            dialogue : "Well, it's not how I would do it but, I guess it works? Make sure to put the vase kind of behind another one, but I'll take it.",
            task_complete : true
        }

    },


    "mark-2" : {},
    "chris-1" : {},
    "chris-2" : {}
}
