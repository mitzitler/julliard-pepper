type Rooms = { [key: string]: string }
type RoomsPaths = { 
  [key: string]: {
    [key: string]: string[]}}
type RoomsItems = Record<string, RoomItem>
interface RoomItem { 
  description: string;
  scan: string[];
  items: string[];
  itemsTaskOnly: string[];
  actions: Record<string, string>;
}

export const rooms: Rooms = {
    "A": "Parking Lot",
    "B": "Sidewalk",
    "C": "Warehouse (Front)",
    "D": "Warehouse (Back)",
    "E": "Main Store",
    "F": "Showroom (Front)",
    "G": "Showroom (Back)",
    "H": "Kitchen",
    "I": "Bathroom Hallway",
    "J": "Break Area",
    "K": "Bran's Office",
    "L": "Upstairs Office Space",
    "M": "Clare's Office"
}

export const roomsPaths: RoomsPaths = {
    // Parking Lot
    "A": {
      "F" : ["Up and right", " through the employee door into the ", "Showroom (Front)"],
      "E" : ["Up and left", " through the main doors into the ", "Main Store"], 
      "C" : ["Right", " into the ", "Warehouse (Front)"], 
      "B" : ["Down", " to the ", "Sidewalk"]
    }, // this is written so it can be html tags
          
    // Sidewalk
    "B": {"A" : ["Up", " to the ", "Parking Lot"]},

    // Warehouse (Front)
    "C": {
      "G" : ["Up and right", " into the ", "Showroom (Back)"],
      "F" : ["Up and left", " into the ", "Showroom (Front)"], 
      "D" : ["Right", " past the tall shelves to the ", "Warehouse (Back)"], 
      "A" : ["Left", " through the warehouse doors to the ", "Parking Lot"], 
    },

    // Warehouse (Back)
    "D": {"C" : ["Left", " past the tall shelves to the ", "Warehouse (Front)"]},

    // Main Store
    "E": {
      "F" : ["Right", " past the camera set ups to the ", "Showroom (Front)"],
      "A" : ["Down", " out the main doors to the ", "Parking Lot"], 
    },

    // Showroom (Front)
    "F": {
      "G" : ["Right", " past the houseplants into the ", "Showroom (Back)"],
      "E" : ["Left", " past the camera set up to the ", "Main Store"], 
      "C" : ["Down and right", " into the ", "Warehouse (Front)"], 
      "A" : ["Down and left", " out the employee door to the ", "Parking Lot"], 
    },

    // Showroom (Back)
    "G": {
      "L" : ["Up", " the spiral stairs into the ", "Upstairs Office Space"],
      "H" : ["Right", " into the ", "Kitchen"], 
      "F" : ["Left", " past the houseplants into the ", "Showroom (Front)"], 
      "C" : ["Down", " into the ", "Warehouse (Front)"], 
    },

    // Kitchen
    "H": {
      "L" : ["Up", " the narrow stairs into the ", "Upstairs Office Space"],
      "J" : ["Right and up", " into the ", "Break Area"],
      "I" : ["Right and down", " into the ", "Bathroom Hallway"],
      "G" : ["Left", " into the ", "Showroom (Back)"], 
    },
    
    // Bathroom Hallway
    "I": {
      "J" : ["Up", " into the ", "Break Area"],
      "H" : ["Left", " into the ", "Kitchen"],
    },

    // Break Area
    "J": {"H" : ["Left", " into the ", "Kitchen"],
          "I" : ["Down", " into the ", "Bathroom Hallway"]},

    // Bran's Office
    "K": {"L" : ["Right", " into the ", "Upstairs Office Space"]},

    // Upstairs Office Space
    "L": {
      "M" : ["Right", " into ", "Clare's Office"],
      "K" : ["Left", " into ", "Bran's Office"],
      "H" : ["Down and right ", "on the narrows stairs into the ", "Kitchen"], 
      "G" : ["Down and left ", "on the spiral stairs into the ", "Showroom (Back)"], 
    },
    
    // Clare's Office
    "M": {"L" : ["Left", " into the ", "Upstairs Office Space"]}
}

// should task only items be in here? yes? 
// but when room scan populates, it just checks that its not 
// $lib/items.js itemsByTask[item][taskOnly] == true
export const roomsItems: RoomsItems = {
    // Parking Lot
    A: {"description" : "The store parking lot is nearly the same as it always is, with the exception that you don't recognize most of the cars.",
          "scan" : [ 
                "The Juillard delivery van is missing, meaning your friend Mickey has already left on her delivery route",
                "There are two really large black cars, with the license plates WSA and WS1"],
          "items": 
            ["a really nice looking stick", 
            "an empty takeout bag from the taco truck"],
          "itemsTaskOnly" : [],
          "actions" : {"xxx" : "xxx"}
        },

    // Sidewalk
    B: {"description" : "Around the corner you see some of your coworkers cars. They parked on the street today to account for all the extra traffic.",
        "scan" : ["The store's dumpter is here"],
            "items": 
              ["an empty chip bag", 
                "a medium quality stick"],
              "itemsTaskOnly" :
                ["a dog poop bag"],
        "actions": {"dog1": "Throw away the dog poop" // task id
        }
      },

    // Warehouse (Front)
    C: {"description" : "The front of the warehouse is lots of boxes, palettes, shelving, etc. It's more sunny than the back of the warehouse.",
        "scan" : ["You see the clock in machine. Oops - should you have done that today?",
            "Jowe's area is partially really tidy and partially really messy. His system must make a lot of sense to him, because it doesn't make any sense to you.",
            "Your big plastic tubs full of crates of product are in the corner, and are still pretty disorganized."
        ],
        "items": 
          ["an unassembled carboard box for product",
          "a small roll of packing tape",
          "Jowe's tablet",
          // this one is not necessarily task only
          "your remaining supply of product from last week's event"
        ],
        "itemsTaskOnly" : [
          "saran wrap and a sharpie",
          "a minifridge"
        ],
        "actions": {"Sort through all your unsold product in the big plastic tubs and reprice them":"bran1"}
      },

    // Warehouse (Back)
    D: {"description" : "The back of the warhouse is much more disorganized. There are a few folding tables set up to assemble the new pepper jars.",
        "scan" : ["There's a folding table set up to do some assembly line packaging work.",
          "Crates line the back wall, so high that they reach the ceiling."
        ],
        "items": 
          ["a notepad with several to do lists", "a blue phone charger"],
        "itemsTaskOnly" : [
          "a dog poop bag"
        ],
        "actions" : {"xxx" : "xxx"}
      },

    // Main Store
    E: {"description" : "Everything is set up for this photoshoot and it's wild to see things so different to how they typically are.",
        "scan" : ["The tasting room is not as messy as you expected, but there's a lot of work that needs to happen in the morning.",
            "There is a ton of plates with mostly eated food, laid out in an aesthetically pleasing manner"
          ],
        "items": 
          ["a tray of hors d'oevres, picked through", "a quarter-full bottle of red wine",
          "a stack of papers with scripts and shot lists", "a Waterson Seneca employee badge",
          "a small box of cables, probably for one of these cameras"],
        "itemsTaskOnly" : [],
        "actions" : {"xxx" : "xxx"}
      },

    // Showroom (Front)
    F: {"description" : "This area of the showroom typically is separated from the main store because it doesn't have any product displayed. Today though it's separated by a wall of camera equipment and lights.",
        "scan" : ["The front of the showroom is full of beautiful ecclectic flowers in a variety of vases.",
          "There are a few empty vases, but mostly they cover the whole room."
        ],
        "items": 
          ["a loose bundle of several flowers", "a pricetag machine", "several jars of spare product for the tasting room",
            "a pink phone charger"],
        "itemsTaskOnly" : [],
        "actions" : {"xxx" : "xxx"}
      },

    // Showroom (Back)
    G: {"description" : "This area of the showroom is behind all the many large potted plants you have to water everyday.",
        "scan" : ["There's a massive oyster shucking table dominating the area. It can probably seat thirty to forty people."],
        "items": 
          ["Megan's Macbook Air", "a notepad with drawings and doodles", "an empty mug, with remnants of a morning coffee"],
        "itemsTaskOnly" :
          ["a large stack of blank paper bags"],
        "actions": {"Stamp the stack of fancy paper bags with the store logo.": "clare2"}
      },

    // Kitchen
    H: {"description" : "The kitchen is full of beautiful plateware and flatware, and has dozens of mostly empty - but expensive! - pantry items for common use.",
        "scan" : ["There's a microwave, a stove, a pantry and a fridge - all the hallmarks of a real kitchen.",
        ],
        "items": 
          ["an unopened bottle of water", "a protein bar"],
        "itemsTaskOnly" :
          ["a platter of leftovers from the shoot", 'heated-up leftovers'],
        "actions" : {"xxx" : "xxx"}
      },
    
    // Bathroom Hallway
    I: {"description" : "The hallway outside the bathroom is quaint but still cute. You only let customers back here in case of serious emergency.",
        "scan" : ["There's a large box with some backup supplies. The box is partially open and covered in dust.",
          "No one maintains the supplies and the bathroom stocking - only you!"
        ],
        "items": 
          ["a spare roll of toilet paper", "a spray can of febreeze"],
        "itemsTaskOnly" : 
          ["a dusty box of spare toilet paper"],
        "actions" : {"xxx" : "xxx"}
      },

    // Break Area
    J: {"description" : "This company has so much beautiful cookware from Waterson Seneca that the breakroom is basically just the back area of the kitchen.",
        "scan" : ["The skylight bathes the break room in beautiful natural light. Today is extremely sunny."],
        "items": 
          ["your headphones you forget here last week!"],
        "itemsTaskOnly" :
          ["a large, empty vase", "flowers from the large, empty vase"],
        "actions": {"Arrange the spare flowers in a really cute pink vase": "meganGood1",
            "Grab the flowers you arranged earlier from the vase...": "meganChaotic1"
        }
      },

    // Bran's Office
    K: {"description" : "You are almost never in Bran's office. It is full of memorabilia from the company's earlier days.",
        "scan" : ["Bran's office is especially busy today; Bran often works remotely or spends the day schmoozing with chefs.",
          "On his desk are three different computers - what are they for?"
        ],
        "items": 
          ["an empty roll of dog poop bags", "some car keys, to a cleary expensive car"],
        "itemsTaskOnly" : [],
        "actions" : {"xxx" : "xxx"}
      },

    // Upstairs Office Space
    L: {"description" : "The big open office space has a loft-like feel to it, because you can see below to the showroom.",
        "scan" : ["Except for Jowe, Chris and the Waterson Seneca Execs, everyone keeps their bags and computers up here."],
        "items": 
          ["a white phone charger",  
          "a mostly full back of american spirit oranges"],
        "itemsTaskOnly" : [
          "a stamp pad and wooden block stamp with the JPC logo",
          "a full roll of dog poop bags"
        ],
        "actions" : {"xxx" : "xxx"}
      },
    
    // Clare's Office
    M: {"description" : "Typically, Clare's office is really neat and tidy, but today it seems like it has exploded with stuff. You realize it can't all belong to her, and some of it must be from the Execs.",
        "scan" : ["The office has lots of random stuff from the executives downstairs",
          "Several light jackets are piled in a corner."
        ],
        "items": ["Clare's purse"],
        "itemsTaskOnly" : 
          ["Mark's Macbook Pro", 
          "a pack of light marlboros with only one or two left"
          ],
        "actions" : {"xxx" : "xxx"}
      },
}

//                                           == == == == == == == == == == == == == == == ==
//       == == == == == == == == == == == == ||                                           || == == == == == == == ==
//       ||                                  ||                                           ||                      ||
//       ||                                  __                L. Upstairs                __                      ||
//       ||         K. Bran's Office         __                Office Space               __   M. Clare's Office  ||
//       ||                                  ||                                           ||                      ||
//       ||                                  ||                                           ||                      ||
//       == == == == == == == == == == == == == == == == ||    || == == == == == ||    || == == == == == == == == ==
//                                                       ||    ||                ||    ||
// == == == == == == == == == == == == == == == == == == ==[  ]== == == == == == ==[  ]== == == == == == == == == == ==
// ||                      ||                      ||                         ||                   ||                ||
// ||                      ||                      ||                         ||                   ||                ||
// ||                      ||                      ||                         ||                   __   J. Break     ||
// ||                      __                      ||                         ||                   __      Area      ||
// ||                      __                      ||                         ||                   ||                ||
// ||    E. Main Store     ||      F. Showroom     ||       G. Showroom       ||     H. Kitchen    || == ==[  ]== == == 
// ||                      ||         (Front)      __          (Back)         __                   ||                ||
// ||                      ||                      __                         __                   ||  I. Bathroom   || 
// ||                == == ||                      ||                         ||                   __    Hallway     ||
// ||               ||                             ||                         ||                   __                ||
// ||               ||                             ||                         ||                   ||                ||
// == == ==[  ]== == ==[  ]== || == ==[  ]== == == == ==[  ]== == == == == == == == == == == == == == == == == == == ==
//                            ||                            ||                            ||
//                            ||                            ||                            ||
//                            ||                            ||                            ||
//                            __                            __                            ||
//      A. Parking lot        __    C. Warehouse (Front)    __     D. Warehouse (Back)    ||    
//                            ||                            ||                            ||
//                            ||                            ||                            ||
//                            ||                            ||                            ||
//                            ||                            ||                            ||
// == == == == == == ==[  ]== == == == == == == == == == == == == == == == == == == == == ==
//                   ||                                           ||
//                   ||               B. Sidewalk                 ||
//                   ||                                           ||
//                   == == == == == == == == == == == == == == == ==

// ts version

// type RoomsItems = Record<string, RoomItem>
// interface RoomItem { 
//   description: string[];
//   scan: Record<number, string[]>;
//   items: Record<number, string>;
//   actions: Record<string, string>;
// }

// export const roomsItems: RoomsItems = {
//   // Parking Lot
//   A: {"description" : 
//           ["The store parking lot is nearly the same as it always is, with the exception that you don't recognize most of the cars."],
//         "scan" : 
//           {60:["Clare is quickly having a smoke as she scans the parking lot, vaguely helping people back into spaces",
//            "The Juillard delivery van is missing, meaning your friend Mickey has already left on her delivery route",
//            "There are two really large black cars, with the license plates WSA and WS1"],
//            600:[ // who else is in the parking lot
//               "The Juillard delivery van is missing, meaning your friend Mickey has already left on her delivery route",
//               "There are two really large black cars, with the license plates WSA and WS1"]
//         },
//         "items": 
//           {1: "a really nice looking stick",
//            2: "an empty takeout bag from the taco truck", // item id
//            },
//         "actions" : {"xxx" : "xxx"}
//       },

//   // Sidewalk
//   B: {"description" : 
//           ["Around the corner you see some of your coworkers cars. They parked on the street today to account for all the extra traffic."],
//       "scan" : 
//           {600:["The store's dumpter is here"]  
//           },
//           "items": 
//             {3: "an empty chip bag",
//              4: "a medium quality stick"
//              },
//       "actions": {"dog1": "Throw away the dog poop" // task id
//       }
//     },

//   // Warehouse (Front)
//   C: {"description" : ["The front of the warehouse is lots of boxes, palettes, shelving, etc. It's more sunny than the back of the warehouse."],
//       "scan" : {600:["You see the clock in machine. Oops - should you have done that today?",
//           "Jowe's area is partially really tidy and partially really messy. His system must make a lot of sense to him, because it doesn't make any sense to you.",
//           "Your big plastic tubs full of crates of product are in the corner, and are still pretty disorganized."
//       ]},
//       "items": {
//         5: "an unassembled carboard box for product",
//         6: "a small roll of packing tape",
//         7: "Jowe's tablet"
//       },
//       "actions": {"Sort through all your unsold product in the big plastic tubs and reprice them":"bran1"}
//     },

//   // Warehouse (Back)
//   D: {"description" : ["The back of the warhouse is much more disorganized. There are a few folding tables set up to assemble the new pepper jars."],
//       "scan" : {180:["There's a folding table set up to do some assembly line packaging work."],
//           420:["There's a folding table set up to do some assembly line packaging work.",
//             "There's a big lump of dog poop smack dab in the middle of the floor"]
//       },
//       "items": {
//         8: "a notepad with several to do lists",
//         9: "a blue phone charger"
//       },
//       "actions" : {"xxx" : "xxx"}
//     },

//   // Main Store
//   E: {"description" : ["Everything is set up for this photoshoot and it's wild to see things so different to how they typically are."],
//       "scan" : {460: ["You shouldn't have gotten in here!"],
//         600: ["The tasting room is not as messy as you expected, but there's a lot of work that needs to happen in the morning.",
//           "There is a ton of plates with mostly eated food, laid out in an aesthetically pleasing manner"
//         ]
//       },
//       "items": {
//         10: "a tray of hors d'oevres, picked through",
//         11: "a quarter-full bottle of red wine",
//         12: "a stack of papers with scripts and shot lists",
//         13: "a Waterson Seneca employee badge",
//         14: "a small box of cables, probably for one of these cameras"
//       },
//       "actions" : {"xxx" : "xxx"}
//     },

//   // Showroom (Front)
//   F: {"description" : ["This area of the showroom typically is separated from the main store because it doesn't have any product displayed. Today though it's separated by a wall of camera equipment and lights."],
//       "scan" : {600: ["The front of the showroom is full of beautiful ecclectic flowers in a variety of vases.",
//         "There are a few empty vases, but mostly they cover the whole room."
//       ]},
//       "items": {
//         15: "a loose bundle of several flowers",
//         16: "a pricetag machine",
//         17: "several jars of spare product for the tasting room",
//         18: "a pink phone charger"
//       },
//       "actions" : {"xxx" : "xxx"}
//     },

//   // Showroom (Back)
//   G: {"description" : ["This area of the showroom is behind all the many large potted plants you have to water everyday."],
//       "scan" : {600:["There's a massive oyster shucking table dominating the area. It can probably seat thirty to forty people."]},
//       "items": {
//         19: "Megan's Macbook Air",
//         20: "a notepad with drawings and doodles",
//         21: "an empty mug, with remnants of a morning coffee"
//       },
//       "actions": {"Stamp the stack of fancy paper bags with the store logo.": "clare2"}
//     },

//   // Kitchen
//   H: {"description" : ["The kitchen is full of beautiful plateware and flatware, and has dozens of mostly empty - but expensive! - pantry items for common use."],
//       "scan" : {600: ["There's a microwave, a stove, a pantry and a fridge - all the hallmarks of a real kitchen.",
//       ]},
//       "items": {
//         22: "an unopened bottle of water",
//         23: "a protein bar"
//       },
//       "actions" : {"xxx" : "xxx"}
//     },
  
//   // Bathroom Hallway
//   I: {"description" : ["The hallway outside the bathroom is quaint but still cute. You only let customers back here in case of serious emergency."],
//       "scan" : {600: ["There's a large box with some backup supplies. The box is partially open and covered in dust.",
//         "No one maintains the supplies and the bathroom stocking - only you!"
//       ]},
//       "items": {
//         24: "a spare roll of toilet paper",
//         25: "a spray can of febreeze"
//       },
//       "actions" : {"xxx" : "xxx"}
//     },

//   // Break Area
//   J: {"description" : ["This company has so much beautiful cookware from Waterson Seneca that the breakroom is basically just the back area of the kitchen."],
//       "scan" : {60:["The skylight bathes the break room in beautiful natural light. Today is extremely sunny."]},
//       "items": {
//         26: "a large, empty vase",
//         27: "your headphones you forget here last week!"
//       },
//       "actions": {"Arrange the spare flowers in a really cute pink vase": "meganGood1",
//           "Grab the flowers you arranged earlier from the vase...": "meganChaotic1"
//       }
//     },

//   // Bran's Office
//   K: {"description" : ["You are almost never in Bran's office. It is full of memorabilia from the company's earlier days."],
//       "scan" : {600:["Bran's office is especially busy today; Bran often works remotely or spends the day schmoozing with chefs.",
//         "On his desk are three different computers - what are they for?"
//       ]},
//       "items": {
//         28: "an empty roll of dog poop bags",
//         29: "some car keys, to a cleary expensive car"
//       },
//       "actions" : {"xxx" : "xxx"}
//     },

//   // Upstairs Office Space
//   L: {"description" : ["The big open office space has a loft-like feel to it, because you can see below to the showroom."],
//       "scan" : {180:["Except for Jowe, Chris and the Waterson Seneca Execs, everyone keeps their bags and computers up here."]},
//       "items": {
//         30: "a white phone charger",
//         31: "a stamp pad and wooden block stamp with the JPC logo",
//         32: "a mostly full back of american spirit oranges"
//       },
//       "actions" : {"xxx" : "xxx"}
//     },
  
//   // Clare's Office
//   M: {"description" : ["Typically, Clare's office is really neat and tidy, but today it seems like it has exploded with stuff. You realize it can't all belong to her, and some of it must be from the Execs."],
//       "scan" : {600:["The office has lots of random stuff from the executives downstairs",
//         "Several light jackets are piled in a corner."
//       ]},
//       "items": {
//         33: "Mark's Macbook Pro",
//         34: "Clare's purse",
//         35: "a full roll of dog poop bags",
//         36: "a pack of light marlboros with only one or two left"
//       },
//       "actions" : {"xxx" : "xxx"}
//     },
// }

// export const roomsItems: RoomsItems = {
//   // Parking Lot
//   "A": {"description" : 
//           ["The store parking lot is nearly the same as it always is, with the exception that you don't recognize most of the cars."],
//         "scan" : 
//           {60:["Clare is quickly having a smoke as she scans the parking lot, vaguely helping people back into spaces",
//            "The Juillard delivery van is missing, meaning your friend Mickey has already left on her delivery route",
//            "There are two really large black cars, with the license plates WSA and WS1"],
//            600:[ // who else is in the parking lot
//               "The Juillard delivery van is missing, meaning your friend Mickey has already left on her delivery route",
//               "There are two really large black cars, with the license plates WSA and WS1"]
//         },
//         "items": 
//           {1: "a really nice looking stick",
//            2: "an empty takeout bag from the taco truck", // item id
//            }
//       },

//   // Sidewalk
//   "B": {"description" : 
//           ["Around the corner you see some of your coworkers cars. They parked on the street today to account for all the extra traffic."],
//       "scan" : 
//           {600:["The store's dumpter is here"]  
//           },
//           "items": 
//             {3: "an empty chip bag",
//              4: "a medium quality stick"
//              },
//       "actions": {"dog1": "Throw away the dog poop" // task id

//       }
//     },

//   // Warehouse (Front)
//   "C": {"description" : ["The front of the warehouse is lots of boxes, palettes, shelving, etc. It's more sunny than the back of the warehouse."],
//       "scan" : {600:["You see the clock in machine. Oops - should you have done that today?",
//           "Jowe's area is partially really tidy and partially really messy. His system must make a lot of sense to him, because it doesn't make any sense to you.",
//           "Your big plastic tubs full of crates of product are in the corner, and are still pretty disorganized."
//       ]},
//       "items": {
//         5: "an unassembled carboard box for product",
//         6: "a small roll of packing tape",
//         7: "Jowe's tablet"
//       },
//       "actions": {"Sort through all your unsold product in the big plastic tubs and reprice them":"bran1"}
//     },

//   // Warehouse (Back)
//   "D": {"description" : ["The back of the warhouse is much more disorganized. There are a few folding tables set up to assemble the new pepper jars."],
//       "scan" : {180:["There's a folding table set up to do some assembly line packaging work."],
//           420:["There's a folding table set up to do some assembly line packaging work.",
//             "There's a big lump of dog poop smack dab in the middle of the floor"]
//       },
//       "items": {
//         8: "a notepad with several to do lists",
//         9: "a blue phone charger"
//       },
//     },

//   // Main Store
//   "E": {"description" : ["Everything is set up for this photoshoot and it's wild to see things so different to how they typically are."],
//       "scan" : {460: ["You shouldn't have gotten in here!"],
//         600: ["The tasting room is not as messy as you expected, but there's a lot of work that needs to happen in the morning.",
//           "There is a ton of plates with mostly eated food, laid out in an aesthetically pleasing manner"
//         ]
//       },
//       "items": {
//         10: "a tray of hors d'oevres, picked through",
//         11: "a quarter-full bottle of red wine",
//         12: "a stack of papers with scripts and shot lists",
//         13: "a Waterson Seneca employee badge",
//         14: "a small box of cables, probably for one of these cameras"
//       },
//     },

//   // Showroom (Front)
//   "F": {"description" : ["This area of the showroom typically is separated from the main store because it doesn't have any product displayed. Today though it's separated by a wall of camera equipment and lights."],
//       "scan" : {600: ["The front of the showroom is full of beautiful ecclectic flowers in a variety of vases.",
//         "There are a few empty vases, but mostly they cover the whole room."
//       ]},
//       "items": {
//         15: "a loose bundle of several flowers",
//         16: "a pricetag machine",
//         17: "several jars of spare product for the tasting room",
//         18: "a pink phone charger"
//       },
//     },

//   // Showroom (Back)
//   "G": {"description" : ["This area of the showroom is behind all the many large potted plants you have to water everyday."],
//       "scan" : {600:["There's a massive oyster shucking table dominating the area. It can probably seat thirty to forty people."]},
//       "items": {
//         19: "Megan's Macbook Air",
//         20: "a notepad with drawings and doodles",
//         21: "an empty mug, with remnants of a morning coffee"
//       },
//       "actions": {"Stamp the stack of fancy paper bags with the store logo.": "clare2"}
//     },

//   // Kitchen
//   "H": {"description" : ["The kitchen is full of beautiful plateware and flatware, and has dozens of mostly empty - but expensive! - pantry items for common use."],
//       "scan" : {600: ["There's a microwave, a stove, a pantry and a fridge - all the hallmarks of a real kitchen.",
//       ]},
//       "items": {
//         22: "an unopened bottle of water",
//         23: "a protein bar"
//       },
//       // "actions": {"Microwave etc", "grab from fridge etc"}
//     },
  
//   // Bathroom Hallway
//   "I": {"description" : ["The hallway outside the bathroom is quaint but still cute. You only let customers back here in case of serious emergency."],
//       "scan" : {600: ["There's a large box with some backup supplies. The box is partially open and covered in dust.",
//         "No one maintains the supplies and the bathroom stocking - only you!"
//       ]},
//       "items": {
//         24: "a spare roll of toilet paper",
//         25: "a spray can of febreeze"
//       },
//       // "actions": {"hide cigarettes"}
//     },

//   // Break Area
//   "J": {"description" : ["This company has so much beautiful cookware from Waterson Seneca that the breakroom is basically just the back area of the kitchen."],
//       "scan" : {60:["The skylight bathes the break room in beautiful natural light. Today is extremely sunny."]},
//       "items": {
//         26: "a large, empty vase",
//         27: "your headphones you forget here last week!"
//       },
//       "actions": {"Arrange the spare flowers in a really cute pink vase": "meganGood1",
//           "Grab the flowers you arranged earlier from the vase...": "meganChaotic1"
//       }
//     },

//   // Bran's Office
//   "K": {"description" : ["You are almost never in Bran's office. It is full of memorabilia from the company's earlier days."],
//       "scan" : {600:["Bran's office is especially busy today; Bran often works remotely or spends the day schmoozing with chefs.",
//         "On his desk are three different computers - what are they for?"
//       ]},
//       "items": {
//         28: "an empty roll of dog poop bags",
//         29: "some car keys, to a cleary expensive car"
//       }
//     },

//   // Upstairs Office Space
//   "L": {"description" : ["The big open office space has a loft-like feel to it, because you can see below to the showroom."],
//       "scan" : {180:["Except for Jowe, Chris and the Waterson Seneca Execs, everyone keeps their bags and computers up here."]},
//       "items": {
//         30: "a white phone charger",
//         31: "a stamp pad and wooden block stamp with the JPC logo",
//         32: "a mostly full back of american spirit oranges"
//       }
//     },
  
//   // Clare's Office
//   "M": {"description" : ["Typically, Clare's office is really neat and tidy, but today it seems like it has exploded with stuff. You realize it can't all belong to her, and some of it must be from the Execs."],
//       "scan" : {600:["The office has lots of random stuff from the executives downstairs",
//         "Several light jackets are piled in a corner."
//       ]},
//       "items": {
//         33: "Mark's Macbook Pro",
//         34: "Clare's purse",
//         35: "a full roll of dog poop bags",
//         36: "a pack of light marlboros with only one or two left"
//       }
//     },
// }