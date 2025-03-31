// import { speechChecks } from "../speechChecks/speechChecks.js"

//// task-id : {steps: num, task_type : type, char : 'clare', location : 'a'
// description: "...", prettydescription:'...', trigger: '...', conditions: []}

// conditions : [ EARLIEST TIME, LATEST TIME, PREREQ TASK ID, SPEECH CHECK TABLE, POINTS TO SUCCEED]
// get rid of the points to succeed, that should all be a part of the speech checks table

//  dict for task items

// look into type any
type SpeechCheck = {
    [key: string] : string
}

export type TaskListFull = {
    [key: string] : {
        steps: number,
        task_type: string[],
        character: string,
        location: string | null,
        target_type: string[],
        // number of steps = number of targets
        // a target can have a single or multiple locations, 
        // so each location is an array of either 1 or multiple
        target_location: string[][], 
        target: string[],
        description: string,
        pretty_description: string,
        trigger: string,
        conditions_starttime: number | null,
        conditions_endtime: number | null,
        conditions_taskid: string | null,
        conditions_speechcheck: SpeechCheck | null,
        conditions_points: number | null
    }
}

const tasklist: TaskListFull = {

    "clare-1" : {
        'steps': 1,
        'task_type' : ['go_speak'],
        'character' : 'Clare',
        'location' : 'A',
        'target_type' : ['character'],
        'target_location' : [[]], // array of array of brans locations after the task is assigned,
        'target' : ['Bran'],
        'description' : 'Find Bran at any point, and interact with a red button to automatically say hi',
        'pretty_description' : 'Go tell Bran Good Luck!',
        'trigger' : 'speak_with_character',
        'conditions_starttime' : null,
        'conditions_endtime' : null,
        'conditions_taskid' : null,
        'conditions_speechcheck' : null,
        'conditions_points' : null
    },

    "clare-2" : {
        'steps': 2, // 2 steps, so array of 2
        'task_type' : ['move_item', 'interact_item'],
        'character' : 'Clare',
        'location' : 'G',
        'target_type' : ['item', 'item'],
        // array of two items: where stamp pad is, where bags are
        'target_location' : [["L"], ["G"]], 
        'target' : ['Stamp Pad', 'Bags'],
        'description' : 'Find stamp pad in the upstairs office, interact with it to grab, ' 
            + 'go to showroom back, interact with the bags to stamp. takes one hour',
        'pretty_description' : 'Find the stamp pad to stamp the paper bags with our logo.',
        'trigger' : 'speak_with_character',
        'conditions_starttime' : null,
        'conditions_endtime' : null,
        'conditions_taskid' : null,
        'conditions_speechcheck' : null,
        'conditions_points' : null
    },

    "megangood-1" : {
        'steps': 2, // 2 steps, so array of 2
        'task_type' : ['move_item', 'interact_item'],
        'character' : 'Megan Keebler',
        'location' : 'J',
        'target_type' : ['item', 'item'],
        // array of two items: where the loose bouquet is, where the vase is
        'target_location' : [["F"], ["J"]], 
        'target' : ['Bouquet', 'New Vase'],
        'description' : 'Fetch the extra bouquet of flowers in the front showroom' 
            + 'set them up in the break room. only availsble after megan arnbul gets to work',
        'pretty_description' : 'Set up the spare flower bouquet in the break room.',
        'trigger' : 'speak_with_character',
        'conditions_starttime' : 70,
        'conditions_endtime' : null,
        'conditions_taskid' : null,
        'conditions_speechcheck' : null,
        'conditions_points' : null
    },

    "megangood-2" : {
        'steps': 3, // 3 steps, so array of 3
        'task_type' : ['go_speak', 'go_speak', 'go_speak'],
        'character' : 'Megan Keebler',
        'location' : 'L',
        'target_type' : ['character', 'character', 'character'],
        // array of two items: where jowe is, where chris is, where megan is
        'target_location' : [[], [], []], // where jowe is, where chris is, where megan is
        'target' : ['Jowe', 'Chris', 'Megan Keebler'],
        'description' : 'Get input from Jowe and Chris on the bags, and then report back',
        'pretty_description' : 'Get input on the jars: talk to Jowe, then Chris, then report back.',
        'trigger' : 'speak_with_character',
        'conditions_starttime' : null,
        'conditions_endtime' : null,
        'conditions_taskid' : null,
        'conditions_speechcheck' : null,
        'conditions_points' : null
    },

    "meganneutral-1" : {
        'steps': 2,
        'task_type' : ['speech_check', 'go_speak'], // or speech check ?
        'character' : 'Megan Lee',
        'location' : 'F',
        'target_type' : ['character', 'character'],
        // array of two items: where execs are, where megan is
        'target_location' : [[], []], // where jowe is, where chris is, where megan is
        'target' : ['Execs', 'Megan Lee'],
        'description' : 'Talk to the Execs to figure out which one is more insecure',
        'pretty_description' : 'Investigate which executive is more insecure',
        'trigger' : 'speak_with_character',
        'conditions_starttime' : null,
        'conditions_endtime' : null,
        'conditions_taskid' : null,
        'conditions_speechcheck' : {
            "task" : "placeholder"
        },
        // 'conditions_speechcheck' : speechChecks["meganneutral-1"],
        'conditions_points' : 30
    },

    // meganneutral-2 is going to be a go find

    "meganchaotic-1" : {
        'steps': 2,
        'task_type' : ['move_item', 'speech_check'], // or speech check ?
        'character' : 'Megan Arnbul',
        'location' : null , // can happen from anywhere ?  
        'target_type' : ['item', 'item'],
        // array of two items: where execs are, where megan is
        'target_location' : [['J'], ['F']], // where jowe is, where chris is, where megan is
        'target' : ['New Vase', 'Original Vase'],
        'description' : 'After moving the flowers the first time, grab them again and ' +
            'move them back to the showroom. she makes you arrange them yourself, and its ' +
            'possible to fail the speech check, several ways',
        'pretty_description' : 'Put the flowers back where they came from',
        'trigger' : 'speak_with_character',
        'conditions_starttime' : null,
        'conditions_endtime' : null,
        'conditions_taskid' : 'megangood-1',
        'conditions_speechcheck' : {
            "task" : "placeholder"
        },
        // 'conditions_speechcheck' : speechChecks['meganchaotic-1'],
        'conditions_points' : 50
    },

    // megan chaotic 2 ??

    "mark-1" : {
        'steps': 2,
        'task_type' : ['move_item', 'go_speak'], // or speech check ?
        'character' : 'Mark',
        'location' : "I" , // can happen from anywhere ?  
        'target_type' : ['item', 'character'],
        // array of two items: where execs are, where megan is
        'target_location' : [['M'], ['I']], // where laptop is (clare's office), where mark is
        'target' : ['Laptop', 'Mark'],
        'description' : '',
        'pretty_description' : '',
        'trigger' : 'speak_with_character',
        'conditions_starttime' : null,
        'conditions_endtime' : null,
        'conditions_taskid' : null,
        'conditions_speechcheck' : null,
        'conditions_points' : null
    },

    "mark-2" : {
        'steps': 1,
        'task_type' : ['speech_check'], 
        'character' : 'Mark',
        'location' : "A" , 
        'target_type' : ['character'],
        // array of two items: where mark is when he initiates
        'target_location' : [['A']], // where mark is
        'target' : ['Mark'],
        'description' : 'Quick quiz on which megan is which. its possible that their ' + 
            'character cards wont show last names',
        'pretty_description' : 'Which Megan is good, neutral and chaotic?',
        'trigger' : 'speak_with_character',
        'conditions_starttime' : null,
        'conditions_endtime' : null,
        'conditions_taskid' : null,
        'conditions_speechcheck' : {
            "task" : "placeholder"
        },
        // 'conditions_speechcheck' : speechChecks["mark-2"],
        'conditions_points' : 10
    },

    "bran-1" : {
        'steps': 3,
        'task_type' : ['move_item', 'go_speak', 'interact_item'], 
        'character' : 'Bran',
        'location' : "K" , 
        'target_type' : ['item', 'character', 'item'],
        // array of three items: where pricetag gun is, where megan is, where product surplus is
        'target_location' : [[], [], []], // where mark is
        'target' : ['Pricetag Gun', 'Megan Arnbul', 'Event Trunk'],
        'description' : 'First get the price tag gun, then ask megan arnbul about the new ' + 
            'prices and then finally retag all of your product. takes 30 mins',
        'pretty_description' : 'Get the pricetag gun, talk with Megan, and retag your surplus product.',
        'trigger' : 'speak_with_character',
        'conditions_starttime' : null,
        'conditions_endtime' : null,
        'conditions_taskid' : null,
        'conditions_speechcheck' : null,
        'conditions_points' : null
    },

    "bran-2" : {
        'steps': 1,
        'task_type' : ['go_speak'], 
        'character' : 'Bran',
        'location' : "L" , 
        'target_type' : ['character'],
        // array of three items: where pricetag gun is, where megan is, where product surplus is
        'target_location' : [[]], // where dog is
        'target' : ['Dog'],
        'description' : 'Find Lucy (brans dog)',
        'pretty_description' : "Find Lucy - she's running all around the store!",
        'trigger' : 'speak_with_character',
        'conditions_starttime' : null,
        'conditions_endtime' : null,
        'conditions_taskid' : null,
        'conditions_speechcheck' : null,
        'conditions_points' : null
    },

    "jowe-1" : { // why are we heating it up just to put it in the fridge ?
        'steps': 4,
        'task_type' : ['move_item', 'interact_item', 'interact_item', 'interact_item'], 
        'character' : 'Jowe',
        'location' : "A" , 
        'target_type' : ['item', 'item', 'item', 'item'],
        // array of three items: where pricetag gun is, where megan is, where product surplus is
        'target_location' : [['H'], ['H'], ['C'], ['C']], // where food is, microwave or stove, 
        // you can use the microwave or stove?
        'target' : ['Leftovers', 'Heating Device', 'Tape and Wrap', 'Mini Fridge'],
        'description' : 'Grab some of the left overs, heat it up, bring it to the warehouse ' + 
            'to wrap the plate and tape his name to it, and then put it either on top of or ' +
            'inside the fridge. you can heat it in the microwave or on the stove. stove takes ' +
            'longer and there is no extra reward, but its nice to do.',
        'pretty_description' : "Go fix Chris a takeaway plate from the photoshoot leftovers.",
        'trigger' : 'speak_with_character',
        'conditions_starttime' : null,
        'conditions_endtime' : null,
        'conditions_taskid' : null,
        'conditions_speechcheck' : null,
        'conditions_points' : null
    },

    "jowe-2" : { // why are we heating it up just to put it in the fridge ?
        'steps': 2,
        'task_type' : ['move_item', 'interact_item'], 
        'character' : 'Jowe',
        'location' : "C" , 
        'target_type' : ['item', 'item'],
        // array of 2 items: where cigs are, where the best hiding spot is (bathroom hallway)
        'target_location' : [['M'], ['I']], // different hiding spot? this is the same order of operations as mark-1 ?
        'target' : ['Cigarettes', 'Dusty Box of spare toilet paper'],
        'description' : 'Go get clares cigarettes and hide them in the best hiding spot, ' +
            'which is in the bathroom hallway. also, secret, dont talk to clare with the smokes ' +
            'in your inventory!',
        'pretty_description' : "Find Clare's cigarettes and hide them somewhere so she can't have one later.",
        'trigger' : 'speak_with_character',
        'conditions_starttime' : null,
        'conditions_endtime' : null,
        'conditions_taskid' : null,
        'conditions_speechcheck' : null,
        'conditions_points' : null
    },

    // chris-1 : speech check, who came up with upstairs downstairs people?
    // ultimately there is no right answer, but there are combos of answers that make sense

    // chris-2 : speech check, investigate megan lee

    // execs??

    // dog-1 : clean up her shit


}
export default tasklist;

// export type TaskListFull = {
//     [key: string] : {
//         steps: number,
//         task_type: string[],
//         character: string,
//         location: string | null,
//         target_type: string[],
//         // number of steps = number of targets
//         // a target can have a single or multiple locations, 
//         // so each location is an array of either 1 or multiple
//         target_location: string[][], 
//         target: string[],
//         description: string,
//         pretty_description: string,
//         trigger: string,
//         conditions_starttime: number | null,
//         conditions_endtime: number | null,
//         conditions_taskid: string | null,
//         conditions_speechcheck: SpeechCheck | null,
//         conditions_points: number | null
//     }
// }

const tasksBySteps = {

    "clare-1" : {
        'description' : 'Find Bran at any point, and interact with a red button to automatically say hi',
        'pretty_description' : 'Go tell Bran Good Luck!',
        'steps' : {
            "clare-1-a" : { // steps, unneeded in current form
                'task_type' : 'go_speak', // rename to step_type
                // 'character' : 'Clare', // who gives the task, maybe unneeded
                // 'location' : 'A', // where the task is given, maybe unneeded
                'target_type' : 'character',
                'target_location' : [], // array of array of brans locations after the task is assigned,
                'target' : 'Bran',
                'step_description' : '',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            }
        }
    },

    "clare-2" : {
        'description' : 'Find stamp pad in the upstairs office, interact with it to grab, ' 
            + 'go to showroom back, interact with the bags to stamp. takes one hour',
        'pretty_description' : 'Find the stamp pad to stamp the paper bags with our logo.',
        'steps': { // 2 steps, so array of 2
            "clare-2-a" : {
                'task_type' : 'grab_item', // not necessary?
                // 'character' : 'Clare',
                // 'location' : 'G',
                'target_type' : 'item',
                // array of two items: where stamp pad is, where bags are
                'target_location' : ["L"], 
                'target' : 'Stamp Pad',
                'step_description' : '',
                // 'trigger' : 'speak_with_character', // not necessarey?
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            },
            "clare-2-b" : {
                'task_type' : 'interact_item',
                // 'character' : 'Clare',
                // 'location' : 'G',
                'target_type' : 'item',
                // array of two items: where stamp pad is, where bags are
                'target_location' : ["G"], 
                'target' : 'Bags',
                'step_description' : '',
                // 'trigger' : 'speak_with_character', // not necessarey?
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            },
        }
    },

    "megangood-1" : {
        'description' : 'Fetch the extra bouquet of flowers in the front showroom' 
            + 'set them up in the break room. only availsble after megan arnbul gets to work',
        'pretty_description' : 'Set up the spare flower bouquet in the break room.',
        'steps': {
            'megangood-1-a' :{
                'task_type' : 'grab_item',
                // 'character' : 'Megan Keebler',
                // 'location' : 'J',
                'target_type' : 'item',
                // array of two items: where the loose bouquet is, where the vase is
                'target_location' : ["F"], 
                'target' : 'Bouquet',
                'step_description' : ''
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : 70,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null}
            },
            'megangood-1-b' :{
                'task_type' : 'use_item',
                // 'character' : 'Megan Keebler',
                // 'location' : 'J',
                'target_type' : 'item',
                'target_location' : ["J"], 
                'target' : 'Vase',
                'step_description' : ''
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : 70,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null}
        }
        }
    },

    "megangood-2" : {
        'description' : 'Get input from Jowe and Chris on the bags, and then report back',
        'pretty_description' : 'Get input on the jars: talk to Jowe, then Chris, then report back.',
        'steps': {
            'megangood-2-a' : {
                'task_type' : 'go_speak',
                // 'character' : 'Megan Keebler',
                // 'location' : 'L',
                'target_type' : 'character',
                // array of two items: where jowe is, where chris is, where megan is
                'target_location' : [], // where jowe is
                'target' : 'Jowe',
                'step_description' : '',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            },
            'megangood-2-b' : {
                'task_type' : 'go_speak',
                // 'character' : 'Megan Keebler',
                // 'location' : 'L',
                'target_type' : 'character',
                // array of two items: where jowe is, where chris is, where megan is
                'target_location' : [], // where chris is
                'target' : 'Chris',
                'step_description' : '',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            },
            'megangood-2-c' : {
                'task_type' : 'go_speak',
                // 'character' : 'Megan Keebler',
                // 'location' : 'L',
                'target_type' : 'character',
                // array of two items: where jowe is, where chris is, where megan is
                'target_location' : [], // where megan is
                'target' : 'Megan Keebler',
                'step_description' : '',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            }
        }
    },

    "meganneutral-1" : {
        'description' : 'Talk to the Execs to figure out which one is more insecure',
        'pretty_description' : 'Investigate which executive is more insecure',
        'steps': {
            'meganneutral-1-a' : {
                'task_type' : 'speech_check', // or speech check ?
                // 'character' : 'Megan Lee',
                // 'location' : 'F',
                'target_type' : 'character',
                // array of two items: where execs are, where megan is
                'target_location' : [], // where jowe is, where chris is, where megan is
                'target' : 'Execs',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                'conditions_speechcheck' : {
                    "task" : "placeholder"
                },
                // 'conditions_speechcheck' : speechChecks["meganneutral-1"],
                'conditions_points' : 30
            },
            'meganneutral-1-b' : {
                'task_type' : 'go_speak', // or speech check ?
                // 'character' : 'Megan Lee',
                // 'location' : 'F',
                'target_type' : 'character',
                // array of two items: where execs are, where megan is
                'target_location' : [], // where jowe is, where chris is, where megan is
                'target' : 'Megan Lee',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : {
                //     "task" : "placeholder"
                // },
                // // 'conditions_speechcheck' : speechChecks["meganneutral-1"],
                // 'conditions_points' : 30
            }
        }
    },

    // neutral-2 is going to be a go find

    "meganchaotic-1" : {
        'description' : 'After moving the flowers the first time, grab them again and ' +
            'move them back to the showroom. she makes you arrange them yourself, and its ' +
            'possible to fail the speech check, several ways',
        'pretty_description' : 'Put the flowers back where they came from',
        'steps': {
            'meganchaotic-1-a' : {
                'task_type' : 'grab_item', // or speech check ?
                // 'character' : 'Megan Arnbul',
                // 'location' : null , // can happen from anywhere ?  
                'target_type' : 'item',
                // array of two items: where execs are, where megan is
                'target_location' : ['J'], // where jowe is, where chris is, where megan is
                'target' : 'New Vase',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : 'megangood-1',
                // 'conditions_speechcheck' : {
                //     "task" : "placeholder"
                // },
                // // 'conditions_speechcheck' : speechChecks['meganchaotic-1'],
                // 'conditions_points' : 50
                },
            'meganchaotic-1-b' : {
                'task_type' : 'speech_check', // or speech check ?
                // 'character' : 'Megan Arnbul',
                // 'location' : null , // can happen from anywhere ?  
                'target_type' : 'item',
                // array of two items: where execs are, where megan is
                'target_location' : ['F'], // where jowe is, where chris is, where megan is
                'target' : 'Original Vase',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : 'megangood-1',
                // 'conditions_speechcheck' : {
                //     "task" : "placeholder"
                // },
                // // 'conditions_speechcheck' : speechChecks['chaotic-1'],
                // 'conditions_points' : 50
                }
        }
    },

    // megan chaotic 2 ??

    "mark-1" : {
        'description' : '',
        'pretty_description' : '',
        'steps': {
            'mark-1-a' : {
                'task_type' : 'grab_item', // or speech check ?
                // 'character' : 'Mark',
                // 'location' : "I" , // can happen from anywhere ?  
                'target_type' : 'item',
                // array of two items: where execs are, where megan is
                'target_location' : ['M'], // where laptop is (clare's office), where mark is
                'target' : 'Laptop',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            },
            'mark-1-b' : {
                'task_type' : 'go_speak', // or speech check ?
                // 'character' : 'Mark',
                // 'location' : "I" , // can happen from anywhere ?  
                'target_type' : 'character',
                // array of two items: where execs are, where megan is
                'target_location' : ['I'], // array of marks locations ?
                'target' : 'Mark',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            },
        }
    },

    "mark-2" : {
        'description' : 'Quick quiz on which megan is which. its possible that their ' + 
            'character cards wont show last names',
        'pretty_description' : 'Which Megan is good, neutral and chaotic?',
        'steps': {
            'mark-2-a' : {
                'task_type' : 'speech_check', 
                // 'character' : 'Mark',
                // 'location' : "A" , 
                'target_type' : 'character',
                // array of two items: where mark is when he initiates
                'target_location' : ['A'], // where mark is
                'target' : 'Mark',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : {
                //     "task" : "placeholder"
                // },
                // // 'conditions_speechcheck' : speechChecks["mark-2"],
                // 'conditions_points' : 10
            }
        }
    },

    "bran-1" : {
        'description' : 'First get the price tag gun, then ask megan arnbul about the new ' + 
            'prices and then finally retag all of your product. takes 30 mins',
        'pretty_description' : 'Get the pricetag gun, talk with Megan, and retag your surplus product.',
        'steps': {
            'bran-1-a' : {
                'task_type' : 'grab_item', 
                // 'character' : 'Bran',
                // 'location' : "K" , 
                'target_type' : 'item',
                // array of three items: where pricetag gun is, where megan is, where product surplus is
                'target_location' : [], // where mark is
                'target' : 'Pricetag Gun',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            },
            'bran-1-b' : {
                'task_type' : 'go_speak', 
                // 'character' : 'Bran',
                // 'location' : "K" , 
                'target_type' : 'character',
                // array of three items: where pricetag gun is, where megan is, where product surplus is
                'target_location' : [], // where mark is
                'target' : 'Megan Arnbul',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            },
            'bran-1-c' : {
                'task_type' : 'use_item', 
                // 'character' : 'Bran',
                // 'location' : "K" , 
                'target_type' : 'item',
                // array of three items: where pricetag gun is, where megan is, where product surplus is
                'target_location' : ['C'], // where mark is
                'target' : 'Event Trunk',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            },
        }
    },

    "bran-2" : {
        'description' : 'Find Lucy (brans dog)',
        'pretty_description' : "Find Lucy - she's running all around the store!",
        'steps': {
            'bran-2-a' : {
                'task_type' : 'go_speak', 
                // 'character' : 'Bran',
                // 'location' : "L" , 
                'target_type' : 'character',
                // array of three items: where pricetag gun is, where megan is, where product surplus is
                'target_location' : [], // where dog is
                'target' : 'Dog',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            }
        }
    },

    "jowe-1" : { // why are we heating it up just to put it in the fridge ?
        'description' : 'Grab some of the left overs, heat it up, bring it to the warehouse ' + 
            'to wrap the plate and tape his name to it, and then put it either on top of or ' +
            'inside the fridge. you can heat it in the microwave or on the stove. stove takes ' +
            'longer and there is no extra reward, but its nice to do.',
        'pretty_description' : "Go fix Chris a takeaway plate from the photoshoot leftovers.",
        'steps': {
            'jowe-1-a' : {
                'task_type' : 'grab_item', 
                // 'character' : 'Jowe',
                // 'location' : "A" , 
                'target_type' : 'item',
                // array of three items: where pricetag gun is, where megan is, where product surplus is
                'target_location' : ['H'], // where food is, microwave or stove, 
                // you can use the microwave or stove?
                'target' : 'Leftovers',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            },
            'jowe-1-b' : {
                'task_type' : 'use_item',
                // 'character' : 'Jowe',
                // 'location' : "A" , 
                'target_type' : 'item',
                // array of three items: where pricetag gun is, where megan is, where product surplus is
                'target_location' : ['H'], // where food is, microwave or stove, 
                // you can use the microwave or stove?
                'target' : 'Heating Device',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            },
            'jowe-1-c' : {
                'task_type' : 'use_item',
                // 'character' : 'Jowe',
                // 'location' : "A" , 
                'target_type' : 'item',
                // array of three items: where pricetag gun is, where megan is, where product surplus is
                'target_location' : ['C'], // where food is, microwave or stove, 
                // you can use the microwave or stove?
                'target' : 'Tape and Wrap',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            },
            'jowe-1-d' : {
                'task_type' : 'use_item',
                // 'character' : 'Jowe',
                // 'location' : "A" , 
                'target_type' : 'item',
                // array of three items: where pricetag gun is, where megan is, where product surplus is
                'target_location' : ['C'], // where food is, microwave or stove, 
                // you can use the microwave or stove?
                'target' : 'Mini Fridge',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            },
        }
    },

    "jowe-2" : { 
        'description' : 'Go get clares cigarettes and hide them in the best hiding spot, ' +
            'which is in the bathroom hallway. also, secret, dont talk to clare with the smokes ' +
            'in your inventory!',
        'pretty_description' : "Find Clare's cigarettes and hide them somewhere so she can't have one later.",
        'steps': {
            'jowe-2-a' : {
                'task_type' : 'grab_item', 
                // 'character' : 'Jowe',
                // 'location' : "C" , 
                'target_type' : 'item',
                // array of 2 items: where cigs are, where the best hiding spot is (bathroom hallway)
                'target_location' : ['M'], // different hiding spot? this is the same order of operations as mark-1 ?
                'target' : 'Cigarettes',        
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            },
            'jowe-2-b' : {
                'task_type' : 'use_item', 
                // 'character' : 'Jowe',
                // 'location' : "C" , 
                'target_type' : 'item',
                // array of 2 items: where cigs are, where the best hiding spot is (bathroom hallway)
                'target_location' : ['I'], // different hiding spot? this is the same order of operations as mark-1 ?
                'target' : 'Dusty Box of spare toilet paper',
                // 'trigger' : 'speak_with_character',
                // 'conditions_starttime' : null,
                // 'conditions_endtime' : null,
                // 'conditions_taskid' : null,
                // 'conditions_speechcheck' : null,
                // 'conditions_points' : null
            },
        }
    },

    // chris-1 : speech check, who came up with upstairs downstairs people?
    // ultimately there is no right answer, but there are combos of answers that make sense

    // chris-2 : speech check, investigate megan lee

    // execs??

    // dog-1 : clean up her shit


}

// this makes 
// {
//   'clare-1': { 'Go tell Bran Good Luck!': false },
//   'clare-2': {
//     'Find the stamp pad to stamp the paper bags with our logo.': false
//   },
//   'megangood-1': { 'Set up the spare flower bouquet in the break room.': false }
// }

// const transformTaskList = (tasklist: Record<string, { pretty_description: string }>) => {
//     const taskAbrv: Record<string, Record<string, boolean>> = {}; // Explicitly type taskAbrv with tuple

//     for (const key in tasklist) {
//         if (Object.prototype.hasOwnProperty.call(tasklist, key)) {
//             taskAbrv[key] = { [tasklist[key].pretty_description] : false }
//         }
//     }

//     return taskAbrv;
// };

// export const taskAbrv = transformTaskList(tasklist);


// this makes 
// {
//     'clare-1': 'Go tell Bran Good Luck!',
//     'clare-2': 'Find the stamp pad to stamp the paper bags with our logo.',
//     'megangood-1': 'Set up the spare flower bouquet in the break room.',
// }

const transformTaskList = (tasklist: Record<string, { pretty_description: string }>) => {
    const taskAbrv: Record<string, string> = {}; // Explicitly type taskAbrv with tuple

    for (const key in tasklist) {
        if (Object.prototype.hasOwnProperty.call(tasklist, key)) {
            taskAbrv[key] = tasklist[key].pretty_description
        }
    }

    return taskAbrv;
};

export const taskAbrv = transformTaskList(tasklist);

// console.log(taskAbrv)
// console.log(Object.values(taskAbrv))