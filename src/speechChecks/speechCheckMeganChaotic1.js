export const speechChecksMeganChaotic1 = [

// flower arranging

    {prompt: "In the bundle there are several kind of flowers to arrange. There are " +
        "three medium yellow flowers with large petals, " + 
        "two large leafy branches, " +
        "one sturdy medium white flower, " +
        "and five or six spindley stems with small bud-sized white flowers.",
    stage: 0},
    
    ///////////// level 1
    {question: "What do you start with?", end: false, stage: 1, responses: [
        {option: "The three medium yellow flowers with large petals", label: "yellow"},
        {option: "The two large leafy branches", label: "branch"},
        {option: "The one sturdy medium white flower", label: "sturdy"},
        {option: "The five or six spindley stems with small bud-sized white flowers", label: "small"},
    ]},




        ///////////// level 2
        {label: "yellow", end: false, stage: 2, question: "Where do you want to put it?",
        responses: [
            {option: "Frame the edges of the vase with them", next: "yellow__frame"},
            {option: "Bunch the stems in the middle, fanning the flower heads out", next: "yellow__middle"},
            {option: "Droop them over the edges of the vase", next: "yellow__droop"},
        ]},

            ///////////// level 3
            {label: "yellow__frame", end: false, stage: 3, question: "What next?",
            responses: [
                {option: "The two large leafy branches", next: "yellow__frame" + "__" + "branch"},
                {option: "The one sturdy medium white flower", next: "yellow__frame" + "__" + "sturdy"},
                {option: "The five or six spindley stems with small bud-sized white flowers", next: "yellow__frame" + "__" + "small"},
            ]},

                ///////////// level 4
                {label: "yellow__frame__branch", end: false, stage: 4, question: "Where do you want to put it?",
                responses: [
                    {option: "Center them in the middle of the vase", next: "yellow__frame__branch" + "__" + "middle"},
                    {option: "Droop them over the edge, past the framing", next: "yellow__frame__branch" + "__" + "droop"},
                ]},

                    ///////////// level 5
                    {label: "yellow__frame__branch__middle", end: true, stage: 5, question: "The small flowers and the sturdy flower are left. How do you finish this off?",
                    responses: [
                        {option: "The sturdy flower is drooped off the edge, and the small white flowers will fill in any gaps.", next: "yellow__frame__branch__middle" + "__" + "sturdy_droop"},
                        {option: "The white flowers are drooped off the edge, and the sturdy flower fills a gap in the lower right.", next: "yellow__frame__branch__middle" + "__" + "small_droop"},
                    ]},

                    ///////////// level 5
                    {label: "yellow__frame__branch__droop", end: true, stage: 5, question: "The small flowers and the sturdy flower are left. How do you finish this off?",
                    responses: [
                        {option: "The sturdy flower in the middle, and the small white flowers will fill in any gaps.", next: "yellow__frame__branch__droop" + "__" + "sturdy_middle"},
                        {option: "The bundle of white flowers in the middle, and the sturdy one will sit in a gap in the lower right.", next: "yellow__frame__branch__droop" + "__" + "small_middle"},
                    ]},


                ///////////// level 4
                {label: "yellow__frame__sturdy", end: false, stage: 4, question: "Where do you want to put it?",
                responses: [
                    {option: "Center them in the middle of the vase", next: "yellow__frame__sturdy" + "__" + "middle"},
                    {option: "Droop them over the edge, past the framing", next: "yellow__frame__sturdy" + "__" + "droop"},
                ]},

                    ///////////// level 5
                    {label: "yellow__frame__sturdy__middle", end: true, stage: 5, question: "The small flowers and the branches are left. How do you finish this off?",
                    responses: [
                        {option: "The leafy branches are drooped all off the edge, and the small white flowers will fill in any gaps.", next: "yellow__frame__branch__middle" + "__" + "branch_droop"},
                        {option: "The white flowers are drooped off the edge, and the leafy branches will fill in any gaps.", next: "yellow__frame__branch__middle" + "__" + "small_droop"},
                    ]},

                    ///////////// level 5
                    {label: "yellow__frame__sturdy__droop", end: true, stage: 5, question: "The small flowers and the branches are left. How do you finish this off?",
                    responses: [
                        {option: "The leafy branches in the middle, and the small white flowers will fill in any gaps.", next: "yellow__frame__sturdy__droop" + "__" + "branch_middle"},
                        {option: "The bundle of white flowers in the middle, and the leafy branches will fill in any gaps.", next: "yellow__frame__sturdy__droop" + "__" + "small_middle"},
                    ]},

                ///////////// level 4
                {label: "yellow__frame__small", end: false, stage: 4,question: "Where do you want to put it?",
                responses: [
                    {option: "Center them in the middle of the vase", next: "yellow__frame__small" + "__" + "middle"},
                    {option: "Droop them over the edge, past the framing", next: "yellow__frame__small" + "__" + "droop"},
                ]},

                    ///////////// level 5
                    {label: "yellow__frame__small__middle", end: true, stage: 5, question: "The sturdy flower and the branches are left. How do you finish this off?",
                    responses: [
                        {option: "The leafy branches are drooped all off the edge, and the sturdy one will sit in a gap in the lower right.", next: "yellow__frame__branch__middle" + "__" + "branch_droop"},
                        {option: "The sturdy flower is drooped off the edge, and the leafy branches will fill in any gaps.", next: "yellow__frame__branch__middle" + "__" + "sturdy_droop"},
                    ]},

                    ///////////// level 5
                    {label: "yellow__frame__small__droop", end: true, stage: 5, question: "The sturdy flower and the branches are left. How do you finish this off?",
                    responses: [
                        {option: "The leafy branches in the middle, and the sturdy one will sit in a gap in the lower right.", next: "yellow__frame__sturdy__droop" + "__" + "branch_middle"},
                        {option: "The sturdy flower in the middle, and the leafy branches will fill in any gaps.", next: "yellow__frame__sturdy__droop" + "__" + "sturdy_middle"},
                    ]},

            
            ///////////// level 3
            {label: "yellow__middle", end: false, stage: 3, question: "What next?",
            responses: [
                {option: "The two large leafy branches", next: "yellow__middle" + "__" + "branch"},
                {option: "The one sturdy medium white flower", next: "yellow__middle" + "__" + "sturdy"},
                {option: "The five or six spindley stems with small bud-sized white flowers", next: "yellow__middle" + "__" + "small"},
            ]},

                ///////////// level 4
                {label: "yellow__middle__branch", end: false, stage: 4, question: "Where do you want to put it?",
                responses: [
                    {option: "Frame the edges of the vase with them", next: "yellow__middle__branch" + "__" + "frame"},
                    {option: "Droop them over the edges of the vase", next: "yellow__middle__branch" + "__" + "droop"},
                ]},

                    ///////////// level 5
                    {label: "yellow__middle__branch__frame", end: true, stage: 5, question: "The small flowers and the sturdy flower are left. How do you finish this off?",
                    responses: [
                        {option: "The small white flowers are drooped off the edge, and the sturdy one will sit in a gap in the lower right.", next: "yellow__middle__branch__frame" + "__" + "small_droop"},
                        {option: "The sturdy flower is drooped off the edge, and the small white flowers will fill in any gaps.", next: "yellow__middle__branch__frame" + "__" + "sturdy_droop"},
                    ]},

                    ///////////// level 5
                    {label: "yellow__middle__branch__droop", end: true, stage: 5, question: "The small flowers and the sturdy flower are left. How do you finish this off?",
                    responses: [
                        {option: "The small white flowers frame the edges, and the sturdy one will sit in a gap in the lower right.", next: "yellow__middle__branch__droop" + "__" + "branch_middle"},
                        {option: "The sturdy flower frames one edge, and the small flowers will fill in any gaps.", next: "yellow__middle__branch__droop" + "__" + "sturdy_middle"},
                    ]},

                ///////////// level 4
                {label: "yellow__middle__sturdy", end: false, stage: 4, question: "Where do you want to put it?",
                responses: [
                    {option: "Frame the edges of the vase with them", next: "yellow__middle__sturdy" + "__" + "frame"},
                    {option: "Droop them over the edges of the vase", next: "yellow__middle__sturdy" + "__" + "droop"},
                ]},

                    ///////////// level 5
                    {label: "yellow__middle__sturdy__frame", end: true, stage: 5, question: "The small flowers and the branches are left. How do you finish this off?",
                    responses: [
                        {option: "The leafy brancges are drooped off the edge, and the small white flowers will fill in any gaps.", next: "yellow__middle__sturdy__frame" + "__" + "branch_droop"},
                        {option: "The small white flowers are drooped off the edge, and the branches will fill in any gaps.", next: "yellow__middle__sturdy__frame" + "__" + "small_droop"},
                    ]},

                    ///////////// level 5
                    {label: "yellow__middle__sturdy__droop", end: true, stage: 5, question: "The small flowers and the branches are left. How do you finish this off?",
                    responses: [
                        {option: "The leafy branches frame the edges, and the small flowers will fill in any gaps.", next: "yellow__middle__sturdy__droop" + "__" + "branch_frame"},
                        {option: "The small flowers frame the edges, and the leafy branches will fill in any gaps.", next: "yellow__middle__sturdy__droop" + "__" + "small_frame"},
                    ]},

                ///////////// level 4
                {label: "yellow__middle__small", end: false, stage: 4, question: "Where do you want to put it?",
                responses: [
                    {option: "Frame the edges of the vase with them", next: "yellow__middle__small" + "__" + "frame"},
                    {option: "Droop them over the edges of the vase", next: "yellow__middle__small" + "__" + "droop"},
                ]},

                    ///////////// level 5
                    {label: "yellow__middle__small__frame", end: true, stage: 5, question: "The sturdy flower and the branches are left. How do you finish this off?",
                    responses: [
                        {option: "The leafy branches are drooped off the edge, and the sturdy one will sit in a gap in the lower right.", next: "yellow__middle__small__frame" + "__" + "branch_droop"},
                        {option: "The sturdy flower is drooped off the edge, and the branches will fill in any gaps.", next: "yellow__middle__small__frame" + "__" + "sturdy_droop"},
                    ]},

                    ///////////// level 5
                    {label: "yellow__middle__small__droop", end: true, stage: 5, question: "The sturdy flower and the branches are left. How do you finish this off?",
                    responses: [
                        {option: "The leafy branches frame the edges, and the sturdy one will sit in a gap in the lower right.", next: "yellow__middle__small__droop" + "__" + "branch_frame"},
                        {option: "The sturdy flower frames one edge, and the leafy branches will fill in any gaps.", next: "yellow__middle__small__droop" + "__" + "sturdy_frame"},
                    ]},

            ///////////// level 3
            {label: "yellow__droop", end: false, stage: 3, question: "What next?",
            responses: [
                {option: "The two large leafy branches", next: "yellow__droop" + "__" + "branch"},
                {option: "The one sturdy medium white flower", next: "yellow__droop" + "__" + "sturdy"},
                {option: "The five or six spindley stems with small bud-sized white flowers", next: "yellow__droop" + "__" + "small"},
            ]},

                ///////////// level 4
                {label: "yellow__droop__branch", end: false, stage: 4, question: "Where do you want to put it?",
                responses: [
                    {option: "Frame the edges of the vase with them", next: "yellow__droop__branch" + "__" + "frame"},
                    {option: "Bunch the stems in the middle, fanning the flower heads out", next: "yellow__droop__branch" + "__" + "middle"},
                ]},

                    ///////////// level 5
                    {label: "yellow__droop__branch__frame", end: true, stage: 5, question: "The small flowers and the sturdy flower are left. How do you finish this off?",
                    responses: [
                        {option: "The small white flowers are squeezed in the middle, and the sturdy one will sit in a gap in the lower right.", next: "yellow__droop__branch__frame" + "__" + "small_middle"},
                        {option: "The sturdy flower is squeezed in the middle, and the small white flowers will fill in any gaps.", next: "yellow__droop__branch__frame" + "__" + "sturdy_middle"},
                    ]},

                    ///////////// level 5
                    {label: "yellow__droop__branch__middle", end: true, stage: 5, question: "The small flowers and the sturdy flower are left. How do you finish this off?",
                    responses: [
                        {option: "The small flowers frame the edges, and the sturdy one will sit in a gap in the lower right.", next: "yellow__middle__branch__droop" + "__" + "small_frame"},
                        {option: "The sturdy flower frames one edge, and the leafy branches will fill in any gaps.", next: "yellow__middle__branch__droop" + "__" + "sturdy_frame"},
                    ]},

                ///////////// level 4
                {label: "yellow__droop__sturdy", end: false, stage: 4, question: "Where do you want to put it?",
                responses: [
                    {option: "Frame the edges of the vase with them", next: "yellow__droop__sturdy" + "__" + "frame"},
                    {option: "Bunch the stems in the middle, fanning the flower heads out", next: "yellow__droop__sturdy" + "__" + "middle"},
                ]}, 

                    ///////////// level 5
                    {label: "yellow__droop__sturdy__frame", end: true, stage: 5, question: "The small flowers and the branches are left. How do you finish this off?",
                    responses: [
                        {option: "The leafy branches are squeezed in the middle, and the small white flowers will fill in any gaps.", next: "yellow__droop__sturdy__frame" + "__" + "branch_middle"},
                        {option: "The small white flowers are squeezed in the middle, and the branches will fill in any gaps.", next: "yellow__droop__sturdy__frame" + "__" + "small_middle"},
                    ]},

                    ///////////// level 5
                    {label: "yellow__droop__sturdy__middle", end: true, stage: 5, question: "The small flowers and the branches are left. How do you finish this off?",
                    responses: [
                        {option: "The leafy branches frame the edges, and the small flowers will fill in any gaps.", next: "yellow__droop__sturdy__middle" + "__" + "branch_frame"},
                        {option: "The small flowers frame the edges, and the leafy branches will fill in any gaps.", next: "yellow__droop__sturdy__middle" + "__" + "small_frame"},
                    ]},

                ///////////// level 4
                {label: "yellow__droop__small", end: false, stage: 4, question: "Where do you want to put it?",
                responses: [
                    {option: "Frame the edges of the vase with them", next: "yellow__droop__small" + "__" + "frame"},
                    {option: "Bunch the stems in the middle, fanning the flower heads out", next: "yellow__droop__small" + "__" + "middle"},
                ]},

                    ///////////// level 5
                    {label: "yellow__droop__small__frame", end: true, stage: 5, question: "The sturdy flower and the branches are left. How do you finish this off?",
                    responses: [
                        {option: "The leafy branches are squeezed in the middle, and the sturdy one will sit in a gap in the lower right.", next: "yellow__droop__small__frame" + "__" + "branch_middle"},
                        {option: "The sturdy flower is squeezed in the middle, and the branches will fill in any gaps.", next: "yellow__droop__small__frame" + "__" + "sturdy_middle"},
                    ]},

                    ///////////// level 5
                    {label: "yellow__droop__small__middle", end: true, stage: 5, question: "The sturdy flower and the branches are left. How do you finish this off?",
                    responses: [
                        {option: "The leafy branches frame the edges, and the sturdy one will sit in a gap in the lower right.", next: "yellow__droop__small__middle" + "__" + "branch_frame"},
                        {option: "The sturdy flower frames one edge, and the leafy branches will fill in any gaps.", next: "yellow__droop__small__middle" + "__" + "sturdy_frame"},
                    ]},




        ///////////// level 2
        {label: "branch", end: false, stage: 2, question: "Where do you want to put it?",
        responses: [
            {option: "Frame the edges of the vase with them", next: "branch" + "__" + "frame"},
            {option: "Bunch the branches in the middle", next: "branch" + "__" + "middle"},
            {option: "Droop them over the edges of the vase", next: "branch" + "__" + "droop"},
        ]},

            ///////////// level 3
            {label: "branch__frame", end: false, stage: 3, question: "What next?",
            responses: [
                {option: "The three medium yellow flowers with large petals", next: "branch__frame" + "__" + "yellow"},
                {option: "The one sturdy medium white flower", next: "branch__frame" + "__" + "sturdy"},
                {option: "The five or six spindley stems with small bud-sized white flowers", next: "branch__frame" + "__" + "small"},
            ]},

                ///////////// level 4
                {label: "branch__frame__yellow",  end: false, stage: 4, question: "Where do you want to put it?",
                responses: [
                    {option: "Bunch the stems in the middle tightly", next: "branch__frame__yellow" + "__" + "middle"},
                    {option: "Droop them over the edges of the vase", next: "branch__frame__yellow" + "__" + "droop"},
                ]},

                    ///////////// level 5
                    {label: "branch__frame__yellow__middle", end: true, stage: 5, question: "The sturdy flower and the small flowers are left. How do you finish this off?",
                    responses: [
                        {option: "The small flowers droop off the edge, and the sturdy one will sit in a gap in the lower right.", next: "branch__frame__yellow__middle" + "__" + "small_droop"},
                        {option: "The sturdy flower droops off one edge, and the small flowers will fill in any gaps.", next: "branch__frame__yellow__middle" + "__" + "sturdy_droop"},
                    ]},

                    ///////////// level 5
                    {label: "branch__frame__yellow__droop", end: true, stage: 5, question: "The sturdy flower and the branches are left. How do you finish this off?",
                    responses: [
                        {option: "The small flowers are squeezed in the middle, and the sturdy one will sit in a gap in the lower right.", next: "branch__frame__yellow__droop" + "__" + "small_middle"},
                        {option: "The sturdy flower is squeezed in the middle, and the small flowers will fill in any gaps.", next: "branch__frame__yellow__droop" + "__" + "sturdy_middle"},
                    ]},
    

                ///////////// level 4
                {label: "branch__frame__sturdy", end: false, stage: 4, question: "Where do you want to put it?",
                responses: [
                    {option: "Center the stem in the middle", next: "branch__frame__sturdy" + "__" + "middle"},
                    {option: "Droop them over the edges of the vase", next: "branch__frame__sturdy" + "__" + "droop"},
                ]},

                    ///////////// level 5
                    {label: "branch__frame__sturdy__middle", end: true, stage: 5, question: "The yellow flowers and the small flowers are left. How do you finish this off?",
                    responses: [
                        {option: "The small flowers droop off the edge, and the medium yellow flowers will fill in gaps.", next: "branch__frame__sturdy__middle" + "__" + "small_droop"},
                        {option: "The yellow flowers droop off the edge, and the small flowers will fill in any gaps.", next: "branch__frame__sturdy__middle" + "__" + "yellow_droop"},
                    ]},

                    ///////////// level 5
                    {label: "branch__frame__sturdy__droop", end: true, stage: 5, question: "The yellow flowers and the small flowers are left. How do you finish this off?",
                    responses: [
                        {option: "The small flowers are squeezed in the middle, and the medium yellow flowers will fill in gaps.", next: "branch__frame__sturdy__droop" + "__" + "small_middle"},
                        {option: "The yellow flowers are squeezed in the middle, and the small flowers will fill in any gaps.", next: "branch__frame__sturdy__droop" + "__" + "yellow_middle"},
                    ]},

                ///////////// level 4
                {label: "branch__frame__small", end: false, stage: 4, question: "Where do you want to put it?",
                responses: [
                    {option: "Bunch the stems in the middle tightly", next: "branch__frame__small" + "__" + "middle"},
                    {option: "Droop them over the edges of the vase", next: "branch__frame__small" + "__" + "droop"},
                ]},

                    ///////////// level 5
                    {label: "branch__frame__small__middle", end: true, stage: 5, question: "The yellow flowers and the small flowers are left. How do you finish this off?",
                    responses: [
                        {option: "The sturdy flower is drooped off one edge, and the medium yellow flowers will fill in gaps.", next: "branch__frame__small__middle" + "__" + "sturdy_droop"},
                        {option: "The yellow flowers droop off the edge, and the sturdy one will sit in a gap in the lower right.", next: "branch__frame__small__middle" + "__" + "yellow_droop"},
                    ]},

                    ///////////// level 5
                    {label: "branch__frame__small__droop", end: true, stage: 5, question: "The yellow flowers and the small flowers are left. How do you finish this off?",
                    responses: [
                        {option: "The sturdy flower is squeezed in the middle, and the medium yellow flowers will fill in gaps.", next: "branch__frame__small__droop" + "__" + "sturdy_middle"},
                        {option: "The yellow flowers are squeezed in the middle, and the sturdy one will sit in a gap in the lower right.", next: "branch__frame__small__droop" + "__" + "yellow_middle"},
                    ]},

            ///////////// level 3
            {label: "branch__middle", end: false, stage: 3, question: "What next?",
            responses: [
                {option: "The three medium yellow flowers with large petals", next: "branch__middle" + "__" + "yellow"},
                {option: "The one sturdy medium white flower", next: "branch__middle" + "__" + "sturdy"},
                {option: "The five or six spindley stems with small bud-sized white flowers", next: "branch__middle" + "__" + "small"},
            ]},
    
                    ///////////// level 4
                    {label: "branch__middle__yellow", end: false, stage: 4, question: "Where do you want to put it?",
                    responses: [
                        {option: "Frame the edges of the vase with them", next: "branch__middle__yellow" + "__" + "frame"},
                        {option: "Droop them over the edges of the vase", next: "branch__middle__yellow" + "__" + "droop"},
                    ]},

                        ///////////// level 5
                        {label: "branch__middle__yellow__frame", end: true, stage: 5, question: "The sturdy flower and the small flowers are left. How do you finish this off?",
                        responses: [
                            {option: "The sturdy flower is drooped off the edge, and the small white flowers will fill in any gaps.", next: "branch__middle__yellow__frame" + "__" + "sturdy_droop"},
                            {option: "The small white flowers are drooped off the edge, and the sturdy one will sit in a gap in the lower right.", next: "branch__middle__yellow__frame" + "__" + "small_droop"},
                        ]},

                        ///////////// level 5
                        {label: "branch__middle__yellow__droop", end: true, stage: 5, question: "The sturdy flower and the small flowers are left. How do you finish this off?",
                        responses: [
                            {option: "The sturdy flower frames one edge, and the small flowers will fill in any gaps.", next: "branch__middle__yellow__droop" + "__" + "sturdy_frame"},
                            {option: "The small white flowers frame the edges, and the sturdy one will sit in a gap in the lower right.", next: "branch__middle__yellow__droop" + "__" + "small_frame"},
                        ]},
    
                    ///////////// level 4
                    {label: "branch__middle__sturdy", end: false, stage: 4, question: "Where do you want to put it?",
                    responses: [
                        {option: "Frame the edges of the vase with them", next: "branch__middle__sturdy" + "__" + "frame"},
                        {option: "Droop them over the edges of the vase", next: "branch__middle__sturdy" + "__" + "droop"},
                    ]},

                        ///////////// level 5
                        {label: "branch__middle__sturdy__frame", end: true, stage: 5, question: "The sturdy flower and the small flowers are left. How do you finish this off?",
                        responses: [
                            {option: "The yellow flowers are drooped off the edge, and the small white flowers will fill in any gaps.", next: "branch__middle__sturdy__frame" + "__" + "yellow_droop"},
                            {option: "The small white flowers are drooped off the edge, and the medium yellow flowers will fill in any gaps.", next: "branch__middle__sturdy__frame" + "__" + "small_droop"},
                        ]},

                        ///////////// level 5
                        {label: "branch__middle__sturdy__droop", end: true, stage: 5, question: "The sturdy flower and the small flowers are left. How do you finish this off?",
                        responses: [
                            {option: "The yellow flowers frame the edges, and the small flowers will fill in any gaps.", next: "branch__middle__sturdy__droop" + "__" + "yellow_frame"},
                            {option: "The small white flowers frame the edges, and the medium yellow flowers will fill in any gaps.", next: "branch__middle__sturdy__droop" + "__" + "small_frame"},
                        ]},
    
                    ///////////// level 4
                    {label: "branch__middle__small", end: false, stage: 4, question: "Where do you want to put it?",
                    responses: [
                        {option: "Frame the edges of the vase with them", next: "branch__middle__small" + "__" + "frame"},
                        {option: "Droop them over the edges of the vase", next: "branch__middle__small" + "__" + "droop"},
                    ]},

                        ///////////// level 5
                        {label: "branch__middle__small__frame", end: true, stage: 5, question: "The sturdy flower and the medium yellow flowers are left. How do you finish this off?",
                        responses: [
                            {option: "The yellow flowers are drooped off the edge, and the sturdy one will sit in a gap in the lower right.", next: "branch__middle__small__frame" + "__" + "yellow_droop"},
                            {option: "The sturdy flower is drooped off one edge, and the medium yellow flowers will fill in any gaps.", next: "branch__middle__small__frame" + "__" + "sturdy_droop"},
                        ]},

                        ///////////// level 5
                        {label: "branch__middle__small__droop", end: true, stage: 5, question: "The sturdy flower and the medium yellow flowers are left. How do you finish this off?",
                        responses: [
                            {option: "The yellow flowers frame the edges, and the sturdy one will sit in a gap in the lower right.", next: "branch__middle__small__droop" + "__" + "yellow_frame"},
                            {option: "The sturdy flower frames one edge, and the medium yellow flowers will fill in any gaps.", next: "branch__middle__small__droop" + "__" + "sturdy_frame"},
                        ]},
    
                ///////////// level 3
                {label: "branch__droop", end: false, stage: 3, question: "What next?",
                responses: [
                    {option: "The three medium yellow flowers with large petals", next: "branch__droop" + "__" + "yellow"},
                    {option: "The one sturdy medium white flower", next: "branch__droop" + "__" + "sturdy"},
                    {option: "The five or six spindley stems with small bud-sized white flowers", next: "branch__droop" + "__" + "small"},
                ]},
    
                    ///////////// level 4
                    {label: "branch__droop__yellow", end: false, stage: 4, question: "Where do you want to put it?",
                    responses: [
                        {option: "Frame the edges of the vase with them", next: "branch__droop__yellow" + "__" + "frame"},
                        {option: "Bunch the stems in the middle tightly", next: "branch__droop__yellow" + "__" + "middle"},
                    ]},

                        ///////////// level 5
                        {label: "branch__droop__yellow__frame", end: true, stage: 5, question: "The sturdy flower and the small flowers are left. How do you finish this off?",
                        responses: [
                            {option: "The sturdy flower is squeezed in the middle, and the small white flowers will fill in any gaps.", next: "branch__middle__yellow__frame" + "__" + "sturdy_middle"},
                            {option: "The small white flowers are squeezed in the middle, and the sturdy one will sit in a gap in the lower right.", next: "branch__middle__yellow__frame" + "__" + "small_middle"},
                        ]},

                        ///////////// level 5
                        {label: "branch__droop__yellow__middle", end: true, stage: 5, question: "The sturdy flower and the small flowers are left. How do you finish this off?",
                        responses: [
                            {option: "The sturdy flower frames one edge, and the small flowers will fill in any gaps.", next: "branch__droop__yellow__middle" + "__" + "sturdy_frame"},
                            {option: "The small white flowers frame the edges, and the sturdy one will sit in a gap in the lower right.", next: "branch__droop__yellow__middle" + "__" + "small_frame"},
                        ]},
    
                    ///////////// level 4
                    {label: "branch__droop__sturdy", end: false, stage: 4, question: "Where do you want to put it?",
                    responses: [
                        {option: "Frame the edges of the vase with them", next: "branch__droop__sturdy" + "__" + "frame"},
                        {option: "Center the stem in the middle", next: "branch__droop__sturdy" + "__" + "middle"},
                    ]},

                        ///////////// level 5
                        {label: "branch__droop__sturdy__frame", end: true, stage: 5, question: "The yellow flowers and the small flowers are left. How do you finish this off?",
                        responses: [
                            {option: "The medium yellow flowers are squeezed in the middle, and the small white flowers will fill in any gaps.", next: "branch__droop__sturdy__frame" + "__" + "yellow_middle"},
                            {option: "The small white flowers are squeezed in the middle, and the yellow flowers will fill in any gaps.", next: "branch__droop__sturdy__frame" + "__" + "small_middle"},
                        ]},

                        ///////////// level 5
                        {label: "branch__droop__sturdy__middle", end: true, stage: 5, question: "The yellow flowers and the small flowers are left. How do you finish this off?",
                        responses: [
                            {option: "The medium yellow flowers frame the edges, and the small flowers will fill in any gaps.", next: "branch__droop__sturdy__middle" + "__" + "yellow_frame"},
                            {option: "The small white flowers frame the edges, and the yellow flowers will fill in any gaps.", next: "branch__droop__sturdy__middle" + "__" + "small_frame"},
                        ]},
    
                    ///////////// level 4
                    {label: "branch__droop__small", end: false, stage: 4, question: "Where do you want to put it?",
                    responses: [
                        {option: "Frame the edges of the vase with them", next: "branch__droop__small" + "__" + "frame"},
                        {option: "Bunch the stems in the middle tightly", next: "branch__droop__small" + "__" + "middle"},
                    ]},

                        ///////////// level 5
                        {label: "branch__droop__small__frame", end: true, stage: 5, question: "The yellow flowers and the sturdy flower are left. How do you finish this off?",
                        responses: [
                            {option: "The medium yellow flowers are squeezed in the middle, and the sturdy one will sit in a gap in the lower right.", next: "branch__droop__small__frame" + "__" + "yellow_middle"},
                            {option: "The study flower is squeezed in the middle, and the yellow flowers will fill in any gaps.", next: "branch__droop__small__frame" + "__" + "sturdy_middle"},
                        ]},

                        ///////////// level 5
                        {label: "branch__droop__small__middle", end: true, stage: 5, question: "The yellow flowers and the sturdy are left. How do you finish this off?",
                        responses: [
                            {option: "The medium yellow flowers frame the edges, and the sturdy one will sit in a gap in the lower right.", next: "branch__droop__small__middle" + "__" + "yellow_frame"},
                            {option: "The sturdy flower frames one edge, and the yellow flowers will fill in any gaps.", next: "branch__droop__small__middle" + "__" + "sturdy_frame"},
                        ]},
    






        ///////////// level 2
        {label: "sturdy", end: false, stage: 2, question: "Where do you want to put it?",
        responses: [
            {option: "Frame the left edge of the vase with it", next: "sturdy" + "__" + "frame"},
            {option: "Stick the stem directly in the middle", next: "sturdy" + "__" + "middle"},
            {option: "Droop it over the edge of the vase", next: "sturdy" + "__" + "droop"},
        ]},

            ///////////// level 3
            {label: "sturdy__frame", end: false, stage: 3, question: "What next?",
            responses: [
                {option: "The three medium yellow flowers with large petals", next: "sturdy__frame" + "__" + "yellow"},
                {option: "The two large leafy branches", next: "sturdy__frame" + "__" + "branch"},
                {option: "The five or six spindley stems with small bud-sized white flowers", next: "sturdy__frame" + "__" + "small"},
            ]},

                ///////////// level 4
                {label: "sturdy__frame__yellow",  end: false, stage: 4, question: "Where do you want to put it?",
                responses: [
                    {option: "Bunch the stems in the middle tightly", next: "sturdy__frame__yellow" + "__" + "middle"},
                    {option: "Droop them over the edges of the vase", next: "sturdy__frame__yellow" + "__" + "droop"},
                ]},

                    ///////////// level 5
                    {label: "sturdy__frame__yellow__middle", end: true, stage: 5, question: "The leafy branches and the small white flowers are left. How do you finish this off?",
                    responses: [
                        {option: "The branches droop over the edges, and the small flowers will fill in any gaps.", next: "sturdy__frame__yellow__middle" + "__" + "branch_droop"},
                        {option: "The small flowers droop over the edges, and the branches will fill in any gaps.", next: "sturdy__frame__yellow__middle" + "__" + "small_droop"},
                    ]},

                    ///////////// level 5
                    {label: "sturdy__frame__yellow__droop", end: true, stage: 5, question: "The leafy branches and the small white flowers are left. How do you finish this off?",
                    responses: [
                        {option: "The branches are squeezed in the middle, and the small flowers will fill in any gaps.", next: "sturdy__frame__yellow__droop" + "__" + "branch_middle"},
                        {option: "The small flowers are squeezed in the middle, and the branches will fill in any gaps.", next: "sturdy__frame__yellow__droop" + "__" + "small_middle"},
                    ]},

                ///////////// level 4
                {label: "sturdy__frame__branch", end: false, stage: 4, question: "Where do you want to put it?",
                responses: [
                    {option: "Bunch the stems in the middle tightly", next: "sturdy__frame__branch" + "__" + "middle"},
                    {option: "Droop them over the edges of the vase", next: "sturdy__frame__branch" + "__" + "droop"},
                ]},

                    ///////////// level 5
                    {label: "sturdy__frame__branch__middle", end: true, stage: 5, question: "The medium yellow flowers and the small white flowers are left. How do you finish this off?",
                    responses: [
                        {option: "The yellow flowers droop over the edges, and the small flowers will fill in any gaps.", next: "sturdy__frame__branch__middle" + "__" + "yellow_droop"},
                        {option: "The small flowers droop over the edges, and the yellow flowers will fill in any gaps.", next: "sturdy__frame__branch__middle" + "__" + "small_droop"},
                    ]},

                    ///////////// level 5
                    {label: "sturdy__frame__branch__droop", end: true, stage: 5, question: "The medium yellow flowers and the small white flowers are left. How do you finish this off?",
                    responses: [
                        {option: "The yellow flowers are squeezed in the middle, and the small flowers will fill in any gaps.", next: "sturdy__frame__branch__droop" + "__" + "yellow_middle"},
                        {option: "The small flowers are squeezed in the middle, and the yellow flowers will fill in any gaps.", next: "sturdy__frame__branch__droop" + "__" + "small_middle"},
                    ]},

                ///////////// level 4
                {label: "sturdy__frame__small", end: false, stage: 4, question: "Where do you want to put it?",
                responses: [
                    {option: "Bunch the stems in the middle tightly", next: "sturdy__frame__small" + "__" + "middle"},
                    {option: "Droop them over the edges of the vase", next: "sturdy__frame__small" + "__" + "droop"},
                ]},

                    ///////////// level 5
                    {label: "sturdy__frame__small__middle", end: true, stage: 5, question: "The medium yellow flowers and the leafy branchess are left. How do you finish this off?",
                    responses: [
                        {option: "The yellow flowers droop over the edges, and the branches will fill in any gaps.", next: "sturdy__frame__small__middle" + "__" + "yellow_droop"},
                        {option: "The leafy branches droop over the edges, and the yellow flowers will fill in any gaps.", next: "sturdy__frame__small__middle" + "__" + "branch_droop"},
                    ]},

                    ///////////// level 5
                    {label: "sturdy__frame__small__droop", end: true, stage: 5, question: "The medium yellow flowers and the leafy branchess are left. How do you finish this off?",
                    responses: [
                        {option: "The yellow flowers are squeezed in the middle, and the branches will fill in any gaps.", next: "sturdy__frame__small__droop" + "__" + "yellow_middle"},
                        {option: "The leafy branches are squeezed in the middle, and the yellow flowers will fill in any gaps.", next: "sturdy__frame__small__droop" + "__" + "branch_middle"},
                    ]},

            ///////////// level 3
            {label: "sturdy__middle", end: false, stage: 3, question: "What next?",
            responses: [
                {option: "The three medium yellow flowers with large petals", next: "sturdy__middle" + "__" + "yellow"},
                {option: "The two large leafy branches", next: "sturdy__middle" + "__" + "branch"},
                {option: "The five or six spindley stems with small bud-sized white flowers", next: "sturdy__middle" + "__" + "small"},
            ]},

                    ///////////// level 4
                    {label: "sturdy__middle__yellow", end: false, stage: 4, question: "Where do you want to put it?",
                    responses: [
                        {option: "Frame the edges of the vase with them", next: "sturdy__middle__yellow" + "__" + "frame"},
                        {option: "Droop them over the edges of the vase", next: "sturdy__middle__yellow" + "__" + "droop"},
                    ]},

                        ///////////// level 5
                        {label: "sturdy__middle__yellow__frame", end: true, stage: 5, question: "The leafy branches and the small white flowers are left. How do you finish this off?",
                        responses: [
                            {option: "The branches droop over the edges, and the small flowers will fill in any gaps.", next: "sturdy__middle__yellow__frame" + "__" + "branch_droop"},
                            {option: "The small flowers droop over the edges, and the branches will fill in any gaps.", next: "sturdy__middle__yellow__frame" + "__" + "small_droop"},
                        ]},

                        ///////////// level 5
                        {label: "sturdy__middle__yellow__droop", end: true, stage: 5, question: "The leafy branches and the small white flowers are left. How do you finish this off?",
                        responses: [
                            {option: "The branches frame the edges, and the small flowers will fill in any gaps.", next: "sturdy__middle__yellow__droop" + "__" + "branch_frame"},
                            {option: "The small flowers frame the edges, and the branches will fill in any gaps.", next: "sturdy__middle__yellow__droop" + "__" + "small_frame"},
                        ]},


                    ///////////// level 4
                    {label: "sturdy__middle__branch", end: false, stage: 4, question: "Where do you want to put it?",
                    responses: [
                        {option: "Frame the edges of the vase with them", next: "sturdy__middle__branch" + "__" + "frame"},
                        {option: "Droop them over the edges of the vase", next: "sturdy__middle__branch" + "__" + "droop"},
                    ]},

                        ///////////// level 5
                        {label: "sturdy__middle__branch__frame", end: true, stage: 5, question: "The medium yellow flowers and the small white flowers are left. How do you finish this off?",
                        responses: [
                            {option: "The yellow flowers droop over the edges, and the small flowers will fill in any gaps.", next: "sturdy__middle__branch__frame" + "__" + "yellow_droop"},
                            {option: "The small flowers droop over the edges, and the yellow flowers will fill in any gaps.", next: "sturdy__middle__branch__frame" + "__" + "small_droop"},
                        ]},

                        ///////////// level 5
                        {label: "sturdy__middle__branch__droop", end: true, stage: 5, question: "The medium yellow flowers and the small white flowers are left. How do you finish this off?",
                        responses: [
                            {option: "The yellow flowers frame the edges, and the small flowers will fill in any gaps.", next: "sturdy__middle__branch__droop" + "__" + "yellow_frame"},
                            {option: "The small flowers frame the edges, and the yellow flowers will fill in any gaps.", next: "sturdy__middle__branch__droop" + "__" + "small_frame"},
                        ]},


                    ///////////// level 4
                    {label: "sturdy__middle__small", end: false, stage: 4, question: "Where do you want to put it?",
                    responses: [
                        {option: "Frame the edges of the vase with them", next: "sturdy__middle__small" + "__" + "frame"},
                        {option: "Droop them over the edges of the vase", next: "sturdy__middle__small" + "__" + "droop"},
                    ]},

                        ///////////// level 5
                        {label: "sturdy__middle__small__frame", end: true, stage: 5, question: "The medium yellow flowers and the leafy branches are left. How do you finish this off?",
                        responses: [
                            {option: "The yellow flowers droop over the edges, and the branches will fill in any gaps.", next: "sturdy__middle__small__frame" + "__" + "yellow_droop"},
                            {option: "The branches droop over the edges, and the yellow flowers will fill in any gaps.", next: "sturdy__middle__small__frame" + "__" + "branch_droop"},
                        ]},

                        ///////////// level 5
                        {label: "sturdy__middle__small__droop", end: true, stage: 5, question: "The medium yellow flowers and the leafy branches are left. How do you finish this off?",
                        responses: [
                            {option: "The yellow flowers frame the edges, and the branches will fill in any gaps.", next: "sturdy__middle__small__droop" + "__" + "yellow_frame"},
                            {option: "The branches frame the edges, and the yellow flowers will fill in any gaps.", next: "sturdy__middle__small__droop" + "__" + "branch_frame"},
                        ]},

                ///////////// level 3
                {label: "sturdy__droop", end: false, stage: 3, question: "What next?",
                responses: [
                    {option: "The three medium yellow flowers with large petals", next: "sturdy__droop" + "__" + "yellow"},
                    {option: "The two large leafy branches", next: "sturdy__droop" + "__" + "branch"},
                    {option: "The five or six spindley stems with small bud-sized white flowers", next: "sturdy__droop" + "__" + "small"},
                ]},

                    ///////////// level 4
                    {label: "sturdy__droop__yellow", end: false, stage: 4, question: "Where do you want to put it?",
                    responses: [
                        {option: "Frame the edges of the vase with them", next: "sturdy__droop__yellow" + "__" + "frame"},
                        {option: "Bunch the stems in the middle tightly", next: "sturdy__droop__yellow" + "__" + "middle"},
                    ]},

                        ///////////// level 5
                        {label: "sturdy__droop__yellow__frame", end: true, stage: 5, question: "The small white flowers and the leafy branches are left. How do you finish this off?",
                        responses: [
                            {option: "The small flowers are squeezed in the middle, and the branches will fill in any gaps.", next: "sturdy__droop__yellow__frame" + "__" + "small_middle"},
                            {option: "The branches are squeezed in the middle, and the small flowers will fill in any gaps.", next: "sturdy__droop__yellow__frame" + "__" + "branch_middle"},
                        ]},

                        ///////////// level 5
                        {label: "sturdy__droop__yellow__middle", end: true, stage: 5, question: "The small white flowers and the leafy branches are left. How do you finish this off?",
                        responses: [
                            {option: "The small flowers frame the edges, and the branches will fill in any gaps.", next: "sturdy__droop__yellow__middle" + "__" + "small_frame"},
                            {option: "The branches frame the edges, and the small flowers will fill in any gaps.", next: "sturdy__droop__yellow__middle" + "__" + "branch_frame"},
                        ]},
                    
                    ///////////// level 4
                    {label: "sturdy__droop__branch", end: false, stage: 4, question: "Where do you want to put it?",
                    responses: [
                        {option: "Frame the edges of the vase with them", next: "sturdy__droop__branch" + "__" + "frame"},
                        {option: "Bunch the stems in the middle tightly", next: "sturdy__droop__branch" + "__" + "middle"},
                    ]},

                        ///////////// level 5
                        {label: "sturdy__droop__branch__frame", end: true, stage: 5, question: "The small white flowers and the medium yellow are left. How do you finish this off?",
                        responses: [
                            {option: "The small flowers are squeezed in the middle, and the yellow flowers will fill in any gaps.", next: "sturdy__droop__branch__frame" + "__" + "small_middle"},
                            {option: "The yellow flowers are squeezed in the middle, and the small flowers will fill in any gaps.", next: "sturdy__droop__branch__frame" + "__" + "yellow_middle"},
                        ]},

                        ///////////// level 5
                        {label: "sturdy__droop__branch__middle", end: true, stage: 5, question: "The small white flowers and the medium yellow are left. How do you finish this off?",
                        responses: [
                            {option: "The small flowers frame the edges, and the yellow flowers will fill in any gaps.", next: "sturdy__droop__branch__middle" + "__" + "small_frame"},
                            {option: "The yellow flowers frame the edges, and the small flowers will fill in any gaps.", next: "sturdy__droop__branch__middle" + "__" + "yellow_frame"},
                        ]},

                    ///////////// level 4
                    {label: "sturdy__droop__small", end: false, stage: 4, question: "Where do you want to put it?",
                    responses: [
                        {option: "Frame the edges of the vase with them", next: "sturdy__droop__small" + "__" + "frame"},
                        {option: "Bunch the stems in the middle tightly", next: "sturdy__droop__small" + "__" + "middle"},
                    ]},

                        ///////////// level 5
                        {label: "sturdy__droop__small__frame", end: true, stage: 5, question: "The leafy branches and the medium yellow are left. How do you finish this off?",
                        responses: [
                            {option: "The branches are squeezed in the middle, and the yellow flowers will fill in any gaps.", next: "sturdy__droop__small__frame" + "__" + "branch_middle"},
                            {option: "The yellow flowers are squeezed in the middle, and the branches will fill in any gaps.", next: "sturdy__droop__small__frame" + "__" + "yellow_middle"},
                        ]},

                        ///////////// level 5
                        {label: "sturdy__droop__small__middle", end: true, stage: 5, question: "The leafy branches and the medium yellow are left. How do you finish this off?",
                        responses: [
                            {option: "The branches frame the edges, and the yellow flowers will fill in any gaps.", next: "sturdy__droop__small__middle" + "__" + "branch_frame"},
                            {option: "The yellow flowers frame the edges, and the branches will fill in any gaps.", next: "sturdy__droop__small__middle" + "__" + "yellow_frame"},
                        ]},


        
        ///////////// level 2
        {label: "small", end: false, stage: 2, question: "Where do you want to put it?",
        responses: [
            {option: "Frame the edges of the vase with them", label: "small" + "__" + "frame"},
            {option: "Bunch the stems in the middle, fanning the flowers out", label: "small" + "__" + "middle"},
            {option: "Droop them over the edges of the vase", label: "small" + "__" + "droop"},
        ]},

                    ///////////// level 3
                    {label: "small__frame", end: false, stage: 3, question: "What next?",
                        responses: [
                            {option: "The three medium yellow flowers with large petals", next: "small__frame" + "__" + "yellow"},
                            {option: "The two large leafy branches", next: "small__frame" + "__" + "branch"},
                            {option: "The one sturdy medium white flower", next: "small__frame" + "__" + "sturdy"},
                        ]},
            
                            ///////////// level 4
                            {label: "small__frame__yellow",  end: false, stage: 4, question: "Where do you want to put it?",
                            responses: [
                                {option: "Bunch the stems in the middle tightly", next: "small__frame__yellow" + "__" + "middle"},
                                {option: "Droop them over the edges of the vase", next: "small__frame__yellow" + "__" + "droop"},
                            ]},

                                ///////////// level 5
                                {label: "small__frame__yellow__middle", end: true, stage: 5, question: "The leafy branches and the sturdy flower are left. How do you finish this off?",
                                responses: [
                                    {option: "The branches are drooped over the edge, and the sturdy one will sit in a gap in the lower right.", next: "small__frame__yellow__middle" + "__" + "branch_droop"},
                                    {option: "The sturdy flower is drooped over one edge, and the branches will fill in any gaps.", next: "small__frame__yellow__middle" + "__" + "sturdy_droop"},
                                ]},
        
                                ///////////// level 5
                                {label: "small__frame__yellow__droop", end: true, stage: 5, question: "The leafy branches and the sturdy flower are left. How do you finish this off?",
                                responses: [
                                    {option: "The branches are squeezed in the middle, and the sturdy one will sit in a gap in the lower right.", next: "small__frame__yellow__droop" + "__" + "branch_middle"},
                                    {option: "The sturdy flower is squeezed in the middle, and the branches will fill in any gaps.", next: "small__frame__yellow__droop" + "__" + "sturdy_middle"},
                                ]},
            
                            ///////////// level 4
                            {label: "small__frame__branch", end: false, stage: 4, question: "Where do you want to put it?",
                            responses: [
                                {option: "Bunch the stems in the middle tightly", next: "small__frame__branch" + "__" + "middle"},
                                {option: "Droop them over the edges of the vase", next: "small__frame__branch" + "__" + "droop"},
                            ]},

                                ///////////// level 5
                                {label: "small__frame__branch__middle", end: true, stage: 5, question: "The medium yellow flowers and the sturdy flower are left. How do you finish this off?",
                                responses: [
                                    {option: "The yellow flowers are drooped over the edge, and the sturdy one will sit in a gap in the lower right.", next: "small__frame__branch__middle" + "__" + "yellow_droop"},
                                    {option: "The sturdy flower is drooped over one edge, and the yellow flowers will fill in any gaps.", next: "small__frame__branch__middle" + "__" + "sturdy_droop"},
                                ]},
        
                                ///////////// level 5
                                {label: "small__frame__branch__droop", end: true, stage: 5, question: "The medium yellow flowers and the sturdy flower are left. How do you finish this off?",
                                responses: [
                                    {option: "The yellow flowers are squeezed in the middle, and the sturdy one will sit in a gap in the lower right.", next: "small__frame__branch__droop" + "__" + "yellow_middle"},
                                    {option: "The sturdy flower is squeezed in the middle, and the yellow flowers will fill in any gaps.", next: "small__frame__branch__droop" + "__" + "sturdy_middle"},
                                ]},
            
                            ///////////// level 4
                            {label: "small__frame__sturdy", end: false, stage: 4, question: "Where do you want to put it?",
                            responses: [
                                {option: "Bunch the stems in the middle tightly", next: "small__frame__sturdy" + "__" + "middle"},
                                {option: "Droop them over the edges of the vase", next: "small__frame__sturdy" + "__" + "droop"},
                            ]},

                                ///////////// level 5
                                {label: "small__frame__branch__middle", end: true, stage: 5, question: "The medium yellow flowers and the sturdy flower are left. How do you finish this off?",
                                responses: [
                                    {option: "The yellow flowers are drooped over the edge, and the sturdy one will sit in a gap in the lower right.", next: "small__frame__branch__middle" + "__" + "yellow_droop"},
                                    {option: "The sturdy flower is drooped over one edge, and the yellow flowers will fill in any gaps.", next: "small__frame__branch__middle" + "__" + "sturdy_droop"},
                                ]},
        
                                ///////////// level 5
                                {label: "small__frame__branch__droop", end: true, stage: 5, question: "The medium yellow flowers and the sturdy flower are left. How do you finish this off?",
                                responses: [
                                    {option: "The yellow flowers are squeezed in the middle, and the sturdy one will sit in a gap in the lower right.", next: "small__frame__branch__droop" + "__" + "yellow_middle"},
                                    {option: "The sturdy flower is squeezed in the middle, and the yellow flowers will fill in any gaps.", next: "small__frame__branch__droop" + "__" + "sturdy_middle"},
                                ]},
            
                        ///////////// level 3
                        {label: "small__middle", end: false, stage: 3, question: "What next?",
                        responses: [
                            {option: "The three medium yellow flowers with large petals", next: "small__middle" + "__" + "yellow"},
                            {option: "The two large leafy branches", next: "small__middle" + "__" + "branch"},
                            {option: "The one sturdy medium white flower", next: "small__middle" + "__" + "sturdy"},
                        ]},
            
                                ///////////// level 4
                                {label: "small__middle__yellow", end: false, stage: 4, question: "Where do you want to put it?",
                                responses: [
                                    {option: "Frame the edges of the vase with them", next: "small__middle__yellow" + "__" + "frame"},
                                    {option: "Droop them over the edges of the vase", next: "small__middle__yellow" + "__" + "droop"},
                                ]},

                                    ///////////// level 5
                                    {label: "small__middle__yellow__frame", end: true, stage: 5, question: "The leafy branches and the sturdy flower are left. How do you finish this off?",
                                    responses: [
                                        {option: "The branches are drooped over the edge, and the sturdy one will sit in a gap in the lower right.", next: "small__middle__yellow__frame" + "__" + "branch_droop"},
                                        {option: "The sturdy flower is drooped over one edge, and the branches will fill in any gaps.", next: "small__middle__yellow__frame" + "__" + "sturdy_droop"},
                                    ]},
            
                                    ///////////// level 5
                                    {label: "small__middle__yellow__droop", end: true, stage: 5, question: "The leafy branches and the sturdy flower are left. How do you finish this off?",
                                    responses: [
                                        {option: "The branches frame the edge, and the sturdy one will sit in a gap in the lower right.", next: "small__middle__yellow__droop" + "__" + "branch_frame"},
                                        {option: "The sturdy flower frames the one edge, and the branches will fill in any gaps.", next: "small__middle__yellow__droop" + "__" + "sturdy_frame"},
                                    ]},
            
                                ///////////// level 4
                                {label: "small__middle__branch", end: false, stage: 4, question: "Where do you want to put it?",
                                responses: [
                                    {option: "Frame the edges of the vase with them", next: "small__middle__branch" + "__" + "frame"},
                                    {option: "Droop them over the edges of the vase", next: "small__middle__branch" + "__" + "droop"},
                                ]},

                                    ///////////// level 5
                                    {label: "small__middle__branch__frame", end: true, stage: 5, question: "The medium yellow flowers and the sturdy flower are left. How do you finish this off?",
                                    responses: [
                                        {option: "The yellow flowers are drooped over the edges, and the sturdy one will sit in a gap in the lower right.", next: "small__middle__branch__frame" + "__" + "yellow_droop"},
                                        {option: "The sturdy flower is drooped over one edges, and the yellow flowers will fill in any gaps.", next: "small__middle__branch__frame" + "__" + "sturdy_droop"},
                                    ]},
            
                                    ///////////// level 5
                                    {label: "small__middle__branch__droop", end: true, stage: 5, question: "The medium yellow flowers and the sturdy flower are left. How do you finish this off?",
                                    responses: [
                                        {option: "The yellow flowers frame the edges, and the sturdy one will sit in a gap in the lower right.", next: "small__middle__branch__droop" + "__" + "yellow_frame"},
                                        {option: "The sturdy flower frames the one edge, and the yellow flowers will fill in any gaps.", next: "small__middle__branch__droop" + "__" + "sturdy_frame"},
                                    ]},
            
                                ///////////// level 4
                                {label: "small__middle__sturdy", end: false, stage: 4, question: "Where do you want to put it?",
                                responses: [
                                    {option: "Frame the edges of the vase with them", next: "small__middle__sturdy" + "__" + "frame"},
                                    {option: "Droop them over the edges of the vase", next: "small__middle__sturdy" + "__" + "droop"},
                                ]},

                                    ///////////// level 5
                                    {label: "small__middle__sturdy__frame", end: true, stage: 5, question: "The medium yellow flowers and the leafy branches are left. How do you finish this off?",
                                    responses: [
                                        {option: "The yellow flowers are drooped over the edges, and the branches will fill in any gaps.", next: "small__middle__sturdy__frame" + "__" + "yellow_droop"},
                                        {option: "The branches are drooped over the edges, and the yellow flowers will fill in any gaps.", next: "small__middle__sturdy__frame" + "__" + "branch_droop"},
                                    ]},
            
                                    ///////////// level 5
                                    {label: "small__middle__sturdy__droop", end: true, stage: 5, question: "The medium yellow flowers and the leafy branches are left. How do you finish this off?",
                                    responses: [
                                        {option: "The yellow flowers frame the edges, and the branches will fill in any gaps.", next: "small__middle__sturdy__droop" + "__" + "yellow_frame"},
                                        {option: "The branches frame the edges, and the yellow flowers will fill in any gaps.", next: "small__middle__sturdy__droop" + "__" + "branch_frame"},
                                    ]},
            
                            ///////////// level 3
                            {label: "small__droop", end: false, stage: 3, question: "What next?",
                            responses: [
                                {option: "The three medium yellow flowers with large petals", next: "small__droop" + "__" + "yellow"},
                                {option: "The two large leafy branches", next: "small__droop" + "__" + "branch"},
                                {option: "The one sturdy medium white flower", next: "small__droop" + "__" + "sturdy"},
                            ]},
            
                                ///////////// level 4
                                {label: "small__droop__yellow", end: false, stage: 4, question: "Where do you want to put it?",
                                responses: [
                                    {option: "Frame the edges of the vase with them", next: "small__droop__yellow" + "__" + "frame"},
                                    {option: "Bunch the stems in the middle tightly", next: "small__droop__yellow" + "__" + "middle"},
                                ]},

                                    ///////////// level 5
                                    {label: "small__droop__yellow__frame", end: true, stage: 5, question: "The sturdy flower and the leafy branches are left. How do you finish this off?",
                                    responses: [
                                        {option: "The sturdy flower is squeezed in the middle, and the branches will fill in any gaps.", next: "small__droop__yellow__frame" + "__" + "sturdy_middle"},
                                        {option: "The branches are squeezed in the middle, and the sturdy one will sit in a gap in the lower right.", next: "small__droop__yellow__frame" + "__" + "branch_middle"},
                                    ]},
            
                                    ///////////// level 5
                                    {label: "small__droop__yellow__middle", end: true, stage: 5, question: "The sturdy flower and the leafy branches are left. How do you finish this off?",
                                    responses: [
                                        {option: "The sturdy flower frames one edge, and the branches will fill in any gaps.", next: "small__droop__yellow__middle" + "__" + "sturdy_frame"},
                                        {option: "The branches frame the edges,  and the sturdy one will sit in a gap in the lower right.", next: "small__droop__yellow__middle" + "__" + "branch_frame"},
                                    ]},
            
                                ///////////// level 4
                                {label: "small__droop__branch", end: false, stage: 4, question: "Where do you want to put it?",
                                responses: [
                                    {option: "Frame the edges of the vase with them", next: "small__droop__branch" + "__" + "frame"},
                                    {option: "Bunch the stems in the middle tightly", next: "small__droop__branch" + "__" + "middle"},
                                ]},

                                    ///////////// level 5
                                    {label: "small__droop__branch__frame", end: true, stage: 5, question: "The sturdy flower and the medium yellow flowers are left. How do you finish this off?",
                                    responses: [
                                        {option: "The sturdy flower is squeezed in the middle, and the yellow flowers will fill in any gaps.", next: "small__droop__branch__frame" + "__" + "sturdy_middle"},
                                        {option: "The yellow flowers are squeezed in the middle, and the sturdy one will sit in a gap in the lower right.", next: "small__droop__branch__frame" + "__" + "yellow_middle"},
                                    ]},
            
                                    ///////////// level 5
                                    {label: "small__droop__branch__middle", end: true, stage: 5, question: "The sturdy flower and the medium yellow flowers are left. How do you finish this off?",
                                    responses: [
                                        {option: "The sturdy flower frames one edge, and the yellow flowers will fill in any gaps.", next: "small__droop__branch__middle" + "__" + "sturdy_frame"},
                                        {option: "The yellow flowers frame the edges,  and the sturdy one will sit in a gap in the lower right.", next: "small__droop__branch__middle" + "__" + "yellow_frame"},
                                    ]},
            
                                ///////////// level 4
                                {label: "small__droop__sturdy", end: false, stage: 4, question: "Where do you want to put it?",
                                responses: [
                                    {option: "Frame the edges of the vase with them", next: "small__droop__sturdy" + "__" + "frame"},
                                    {option: "Bunch the stems in the middle tightly", next: "small__droop__sturdy" + "__" + "middle"},
                                ]},

                                    ///////////// level 5
                                    {label: "small__droop__sturdy__frame", end: true, stage: 5, question: "The leafy branches and the medium yellow flowers are left. How do you finish this off?",
                                    responses: [
                                        {option: "The branches are squeezed in the middle, and the yellow flowers will fill in any gaps.", next: "small__droop__sturdy__frame" + "__" + "branch_middle"},
                                        {option: "The yellow flowers are squeezed in the middle, and the sturdy one will sit in a gap in the lower right.", next: "small__droop__sturdy__frame" + "__" + "yellow_middle"},
                                    ]},
            
                                    ///////////// level 5
                                    {label: "small__droop__sturdy__middle", end: true, stage: 5, question: "The leaft branches and the medium yellow flowers are left. How do you finish this off?",
                                    responses: [
                                        {option: "The branches frames the edges, and the yellow flowers will fill in any gaps.", next: "small__droop__sturdy__middle" + "__" + "branch_frame"},
                                        {option: "The yellow flowers frame the edges,  and the branches will fill in any gaps.", next: "small__droop__sturdy__middle" + "__" + "yellow_frame"},
                                    ]},


    {}

]


// this loop gives us every possible ending
// i am manually going to choose a winner, and then 
let nextList = []

for (let i = 0; i < speechChecksMeganChaotic1.length; i++) {

    if (speechChecksMeganChaotic1[i]['stage'] === 5) {

        // console.log(speechChecksMeganChaotic1[i])
        
        for (let j = 0; j < 2; j++) {

            let nextVal = ""
            // @ts-ignore
            nextVal = speechChecksMeganChaotic1[i]['responses'][j]['next']
            nextList.push(nextVal)

        }

    }

}

// three most winners are: 
const winner1 = "branch__frame__sturdy__middle__yellow_droop" 
const winner2 = "small__droop__yellow__middle__branch_frame" 
const winner3 = "yellow__frame__branch__droop__sturdy_middle" 

// remove the winners
export const winnersMeganChaotic1 = [winner1, winner2, winner3]
// console.log('winnersHigh, the winners are')
// console.log(winnersHigh)
// console.log("num of high value winners: ", winnersHigh.length)

let notWinnersList = []
notWinnersList = nextList.filter(item => !winnersMeganChaotic1.includes(item));
// console.log("notWinnersList, all the values that are not high winners")
// console.log(notWinnersList[0], notWinnersList[1], notWinnersList[2], ', ...')
// console.log("num of every answer thats not high value: ", notWinnersList.length)

// this randomly shuffles the whole list, and will give us the medium winner, the first 25 in this not winners will be sliced out
// @ts-ignore
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}


let temp = shuffle(notWinnersList)
// console.log("temp, the shuffled version")
// console.log(temp[0], temp[1], temp[2], ', ...')
// console.log("shuffled not winners list is: ", temp.length)

// let winnersMedium = []
export const failuresMeganChaotic1 = temp.slice(25)
// console.log("failures is every thing after the first 25 shuffled values")
// console.log(failures[0], failures[1], failures[2], ', ...')
// console.log("this has a lenght of: ", failures.length)
// console.log("original list minus failures ", nextList.filter(item => !failures.includes(item)).length )


// winnersMedium = temp.filter(item => !failures.includes(item))
// console.log("winnersMedium is the 25 randomly chosen ones that are medium winners")
// console.log(winnersMedium[0], winnersMedium[1], winnersMedium[2], ', ...')
// console.log("this is of length: ", winnersMedium.length)

// console.log("")
// console.log(
//     "at the end we have:",
//     "the full list is length ", nextList.length,
//     "the shuffled list is length ", temp.length,
//     "winners of length ", winnersHigh.length,
//     "low value winners of length ", winnersMedium.length,
//     "and failures of length ", failures.length 
// )

// you have ~ 20% chance of winning. after the three most winners, there are 25 random combos that work