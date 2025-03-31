export type ItemsTasksType = {
    [key: string] : {
        location: string,
        taskOnly: boolean,
        taskIdStep: string | null,
        verb: string | null,
        taskDialogue: string | null,
        discardItem: string | null
    }
} 

export const itemsByTask: ItemsTasksType = {
    // A
    "a really nice looking stick" : {
        location: 'A',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null
    }, 
    "an empty takeout bag from the taco truck" : {
        location: 'A',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null
    },

    // B
    "an empty chip bag" : {
        location: 'B',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null
    }, 
    "a medium quality stick" : {
        location: 'B',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null 
    },
    "a bag of dog poop" : {
        location: 'B',
        taskOnly: true,
        taskIdStep: 'dog-1-c',
        verb: 'Throw away',
        taskDialogue: 'You threw the bag of dog poop in the dumpster outside!',
        discardItem: "a dog poop bag"
    },

    // C
    "an unassembled carboard box for product" : {
        location: 'C',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null
    },
    "a small roll of packing tape" : {
        location: 'C',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null
    },
    "Jowe's tablet" : {
        location: 'C',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null
    },
    "your remaining supply of product from last week's event" : {
        location: 'C',
        taskOnly: false,
        taskIdStep: 'bran-1-c',
        verb: 'Re-price',
        taskDialogue: "You re-priced everything in your event trunk from last week's event.",
        discardItem: "a pricetag machine"
    },
    "saran wrap and a sharpie" : { // kind of lost in this tbh
        location: 'C',
        taskOnly: true,
        taskIdStep: 'jowe-1-c',
        verb: 'Label and wrap the leftovers with',
        taskDialogue: 'You wrap the leftovers plate, and labeled it: Chris ',
        discardItem: "saran wrap and a sharpie" // grab and discard itself
    },
    "a minifridge" : { 
        location: 'C',
        taskOnly: true,
        taskIdStep: 'jowe-1-c',
        verb: 'Put the leftovers in',
        taskDialogue: 'You found the minifridge and put the leftovers for Chris inside. Why did you have to heat it if it was going in the fridge?',
        discardItem: 'heated-up leftovers'
    },

    // D
    "a notepad with several to do lists" : {
        location: 'D',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null
    }, 
    "a blue phone charger" : {
        location: 'D',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null
    },
    "a dog poop bag" : {
        location: 'D',
        taskOnly: true,
        taskIdStep: 'dog-1-b',
        verb: 'Bag the dog poop with',
        taskDialogue: 'You expertly got all the dog poop into a dog poop bag.',
        discardItem: null 
    },

    // E
    "a tray of hors d'oevres, picked through" : {
        location: 'E',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null
    }, 
    "a quarter-full bottle of red wine" : {
        location: 'E',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null 
    },
    "a stack of papers with scripts and shot lists" : {
        location: 'E',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null 
    }, 
    "a Waterson Seneca employee badge" : {
        location: 'E',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null 
    },
    "a small box of cables, probably for one of these cameras" : {
        location: 'E',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Sort through',
        taskDialogue: null,
        discardItem: null
    },

    // F
    "a loose bundle of several flowers" : {
        location: 'F',
        taskOnly: false,
        taskIdStep: 'megangood-1-a',
        verb: 'Grab',
        taskDialogue: "You grabbed the only bundle of flowers that wasn't actively in a vase.",
        discardItem: null
    }, 
    "a pricetag machine" : {
        location: 'F',
        taskOnly: false,
        taskIdStep: 'bran-1-a',
        verb: 'Grab',
        taskDialogue: 'You grabbed the pricing gun. Talk to Megan for the new prices.',
        discardItem: null 
    }, 
    "several jars of spare product for the tasting room" : {
        location: 'F',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Sort through',
        taskDialogue: null,
        discardItem: null
    },
    "a pink phone charger" : {
        location: 'F',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null
    },

    // G
    "Megan's Macbook Air" : {
        location: 'G',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null 
    }, 
    "a notepad with drawings and doodles" : {
        location: 'G',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null 
    }, 
    "an empty mug, with remnants of a morning coffee" : {
        location: 'G',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null 
    },
    "a large stack of blank paper bags" : {
        location: 'G',
        taskOnly: true,
        taskIdStep: 'clare-2-b',
        verb: 'Stamp the logo onto',
        taskDialogue: 'You stamped bags.',
        discardItem: "a stamp pad and wooden block stamp with the JPC logo"
    },
    
    // H
    "an unopened bottle of water" : {
        location: 'H',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null 
    }, 
    "a protein bar" : {
        location: 'H',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null 
    },
    "a platter of leftovers from the shoot" : {
        location: 'H',
        taskOnly: true,
        taskIdStep: 'jowe-1-a',
        verb: 'Plate some of',
        taskDialogue: 'You put together a nice plate of food to heat up.',
        discardItem: null 
    },
    'heated-up leftovers' : {
        location: 'H',
        taskOnly: true,
        taskIdStep: 'jowe-1-b',
        verb: 'Use the microwave to make',
        taskDialogue: 'You used the microwave to heat up the plate of leftovers',
        discardItem: "a platter of leftovers from the shoot"
    },

    // I
    "a spare roll of toilet paper" : {
        location: 'I',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null 
    }, 
    "a spray can of febreeze" : {
        location: 'I',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null 
    }, 
    "a dusty box of spare toilet paper" : {
        location: 'I',
        taskOnly: true,
        taskIdStep: 'jowe-2-b',
        verb: 'Hide the cigarettes in',
        taskDialogue: "You hid Clare's cigarettes in a dusty box of spare toilet paper. Nice!",
        discardItem: "a pack of light marlboros with only one or two left"
    },

    // J
    "your headphones you forget here last week!" : {
        location: 'J',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null
    },
    "a large, empty vase" : {
        location: 'J',
        taskOnly: true,
        taskIdStep: 'megangood-1-b',
        verb: 'Fill',
        taskDialogue: 'You neatly and quickly put the flowers in the vase',
        discardItem: "a loose bundle of several flowers"
    }, 
    "flowers from the large, empty vase" : {
        location: 'J',
        taskOnly: true,
        taskIdStep: 'meganchaotic-1-a',
        verb: 'Gran',
        taskDialogue: 'You grab the bundle of flowers you put in this vase earlier',
        discardItem: null
    }, 

    // K
    "an empty roll of dog poop bags" : {
        location: 'K',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null
    }, 
    "some car keys, to a cleary expensive car" : {
        location: 'K',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null
    },

    // L
    "a full roll of dog poop bags" : {
        location: 'K',
        taskOnly: false,
        taskIdStep: 'dog-1-a',
        verb: 'Grab',
        taskDialogue: "These will be helpful if there's a mess",
        discardItem: null
    }, 
    "a white phone charger" : {
        location: 'L',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null
    }, 
    "a stamp pad and wooden block stamp with the JPC logo" : {
        location: 'L',
        taskOnly: false,
        taskIdStep: 'clare-2-a',
        verb: 'Grab',
        taskDialogue: 'This stamp set can be used for bag stamping',
        discardItem: null
    }, 
    "a mostly full back of american spirit oranges" : {
        location: 'L',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Grab',
        taskDialogue: null,
        discardItem: null
    },

    // M
    "Mark's Macbook Pro" : {
        location: 'M',
        taskOnly: true,
        taskIdStep: 'mark-1-a',
        verb: "Grab",
        taskDialogue: "You found Mark's laptop.",
        discardItem: null
    }, 
    "Clare's purse" : {
        location: 'M',
        taskOnly: false,
        taskIdStep: null,
        verb: 'Sort through',
        taskDialogue: null,
        discardItem: null
    }, 
    "a pack of light marlboros with only one or two left" : {
        location: 'M',
        taskOnly: true,
        taskIdStep: 'jowe-2-a',
        verb: 'Grab',
        taskDialogue: "You took your bosses cigarettes off her desk, but you were asked to, so it's okay, right?",
        discardItem: null
    }

}