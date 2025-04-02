import type { StandardDialogue, NonStandardDialogue } from "$lib/peopleDialogue.ts"
import type { TaskListFull, TaskListSteps } from '$lib/tasks.ts'

class InterfaceClass {
    expandedId: string = $state('')
    roomOptionsOpen: boolean = $state(false)


    clickRoomScan() {
        if (this.expandedId === '') {
            this.expandedId = 'roomscan'
            return
        } else if (this.expandedId != '') {
            this.expandedId = ''
            return
        }
    } 

    clickConversationOptions() {
        if (this.expandedId === '') {
            this.expandedId = 'dialogue'
            return
        } else if (this.expandedId != '') {
            this.expandedId = ''
            return
        }
    }

    clickMoveRooms() {
        if (this.expandedId === '') {
            this.expandedId = 'moveroom'
            this.roomOptionsOpen = true
            return
        } else if (this.expandedId != '') {
            this.expandedId = ''
            this.roomOptionsOpen = false
            return
        }
    }
}

export const interfaceStuff = new InterfaceClass()

class Location {
    code: string = $state("A")
    name: string = $state("Parking Lot")
    description: string = $state("The store parking lot is nearly the same as it always is, with the exception that you don't recognize most of the cars.")
    moving: boolean = $state(false)
    open: boolean = $state(false)
    newRoom: boolean = $state(false)

    moveLocation(moveCode: string, moveName: string, moveDescription: string) {
        this.moving = true 
        this.code = moveCode
        this.name = moveName
        this.description = moveDescription
        // some wait function
        // this will let us have some kind of transition ?
        this.moving = false
    }

    newRoomInterface() {this.newRoom = true}
    oldRoomInterface() {this.newRoom = false}

}

export const location = new Location()

class Time {
    timeInt: number = $state(0)
    
    addTime() {
        console.log("Ten minutes have elapsed...")
        this.timeInt = this.timeInt + 10
    }
}

export const localTime = new Time()

class InventoryItems {
    // this will include items that are grabbed and also ones that dont exist yet
    description: string = $state("")
    itemId: number = $state(0) 
    // inventoryDict: Record<number, string> = $state({0: ""})
    inventoryDict: string[] = $state([''])
    inventoryDescriptions: string[] = $state([])
    grabbedItems: string[] = $state([])
    usedItems: string[] = $state([]) 
    taskItemsToUse: string[] = $state([])
    isCurrentStepClosed: Record<string, boolean> = $state({})
    open: boolean = $state(false)

    grabItem(item: string) {
        console.log("Adding item to inventory...")
        this.grabbedItems.push(item)
        this.inventoryDict.push(item)
    }

    useItem(item: string) {
        console.log("Using and discarding item in inventory...")
        this.inventoryDict.splice(this.inventoryDict.indexOf(item), 1)
        this.usedItems.push(item)
    }

    openItemScan() {this.open = true}
    closeItemScan() {this.open = false}

    itemTaskStep(taskIdStep: string, tasksBySteps: TaskListSteps, location: string, discardItem?: string | null) {
        // this function is called on every room scan item monent
        // if it is needed to use the 
        // this will either be grab_item or use_item

        let taskId = `${taskIdStep.split('-')[0]}-${taskIdStep.split('-')[1]}`
        let taskStepInfo = tasksBySteps[taskId].steps[taskIdStep]
        let subTaskType = taskStepInfo.task_type
        let subTaskTarget = taskStepInfo.target_name
        let subTaskTargetLocation = taskStepInfo.target_location
        // let subTaskAnnouncement = taskStepInfo.step_completed_announcement

        if (subTaskType === 'grab_item') {
            if (this.inventoryDict.includes(subTaskTarget)) {
                console.log('The inventory contains the needed item', subTaskTarget, 'for the task', taskId)
                // this list is additional to room scan items list, with the verb USE or something
                this.taskItemsToUse.push(subTaskTarget)
                this.isCurrentStepClosed[taskIdStep] = true

                return this.isCurrentStepClosed
                // return this.isCurrentStepClosed, subTaskAnnouncement

            } else {
                console.log('User needs to grab the item', subTaskTarget, 'for the task', taskId)
                // this list is additional to room scan items list, with the verb USE or something
                this.inventoryDict.push(subTaskTarget)
                this.taskItemsToUse.push(subTaskTarget)
                this.isCurrentStepClosed[taskIdStep] = true

                return this.isCurrentStepClosed
                // return this.isCurrentStepClosed, subTaskAnnouncement
            }
            
        } else if (subTaskType === 'grab_discard_item') {

            // for this one, grab the target and discard the extra item value passed
            // which is discardItem
            // this effecitvely turns one item into another item

            if (this.inventoryDict.includes(subTaskTarget) 
                && this.taskItemsToUse.includes(subTaskTarget)
                // if the list of possible target locations includes where the person actively is
                && subTaskTargetLocation.includes(location) 
            ) {
                console.log('You cant grab the next task item', subTaskTarget, 'because you already have it')
                this.isCurrentStepClosed[taskIdStep] = false

                return this.isCurrentStepClosed
                // return this.isCurrentStepClosed, subTaskAnnouncement

            } else if (!discardItem) {
                console.log('This subtasktype requires you to have a discard item as well')
                this.isCurrentStepClosed[taskIdStep] = false

                return this.isCurrentStepClosed
                // return this.isCurrentStepClosed, subTaskAnnouncement

            } else if (this.inventoryDict.includes(discardItem)
                && this.taskItemsToUse.includes(discardItem)
                // if the list of possible target locations includes where the person actively is
                && subTaskTargetLocation.includes(location) ) {
                console.log('You have in your inventory the matched discard item', discardItem,
                    'and you are in the right location to grab the task item', subTaskTarget)
                this.inventoryDict.push(subTaskTarget)
                this.taskItemsToUse.push(subTaskTarget)
                this.inventoryDict.splice(this.inventoryDict.indexOf(discardItem), 1)
                this.taskItemsToUse.splice(this.taskItemsToUse.indexOf(discardItem), 1)
                this.usedItems.push(subTaskTarget)
                this.isCurrentStepClosed[taskIdStep] = true

                return this.isCurrentStepClosed
                // return this.isCurrentStepClosed, subTaskAnnouncement

            // add more error statements
            } else {
                console.log('Sub task is grab_discard_item, but there was some error')
                this.isCurrentStepClosed[taskIdStep] = false

                return this.isCurrentStepClosed
                // return this.isCurrentStepClosed, subTaskAnnouncement

            }

        } else if (subTaskType === 'use_discard_item') {

            // for this one, use the target AND discard the extra item value passed
            // which is discardItem
            // this effecitvely uses two items
            // make sure in the first 'use' it is effectively thrown even though its not in the inventory, 
            // or perhaps there needs to be a placeholder 'grab' first

            if (this.inventoryDict.includes(subTaskTarget) 
                && this.taskItemsToUse.includes(subTaskTarget)
                // if the list of possible target locations includes where the person actively is
                && subTaskTargetLocation.includes(location) ) {
                console.log('You cant grab & use the next task item', subTaskTarget, 'because you already have it')
                this.isCurrentStepClosed[taskIdStep] = false

                return this.isCurrentStepClosed
                // return this.isCurrentStepClosed, subTaskAnnouncement

            } else if (!discardItem) {
                console.log('This subtasktype requires you to have a discard item as well')
                this.isCurrentStepClosed[taskIdStep] = false

                return this.isCurrentStepClosed
                // return this.isCurrentStepClosed, subTaskAnnouncement

            } else if (this.inventoryDict.includes(discardItem)
                && this.taskItemsToUse.includes(discardItem)
                // if the list of possible target locations includes where the person actively is
                && subTaskTargetLocation.includes(location) ) {
                console.log('You have in your inventory the matched discard item', discardItem,
                    'and you are in the right location to grab & use the task item', subTaskTarget)
                // grab target
                this.inventoryDict.push(subTaskTarget)
                this.taskItemsToUse.push(subTaskTarget)
                console.log('temporarily grabbing the target')
                // discard item
                this.inventoryDict.splice(this.inventoryDict.indexOf(discardItem), 1)
                this.taskItemsToUse.splice(this.taskItemsToUse.indexOf(discardItem), 1)
                console.log('discarding discard item')
                // use target
                this.inventoryDict.splice(this.inventoryDict.indexOf(subTaskTarget), 1)
                this.taskItemsToUse.splice(this.taskItemsToUse.indexOf(subTaskTarget), 1)
                console.log('discarding used item')
                // blacklist the item now that its not in the inventory
                this.usedItems.push(subTaskTarget)
                this.usedItems.push(discardItem)
                // close the step
                this.isCurrentStepClosed[taskIdStep] = true

                return this.isCurrentStepClosed
                // return this.isCurrentStepClosed, subTaskAnnouncement

            // add more error statements
            } else {
                console.log('Sub task is use_discard_item, but there was some error')
                this.isCurrentStepClosed[taskIdStep] = false

                return this.isCurrentStepClosed
                // return this.isCurrentStepClosed, subTaskAnnouncement

            }

        } else if (subTaskType === 'go_speak' || subTaskType === 'speech_check') {
            console.log('Sub task is go_speak or speech_check, but you clicked on an item - else condition')
            this.isCurrentStepClosed[taskIdStep] = false

            return this.isCurrentStepClosed
            // return this.isCurrentStepClosed, subTaskAnnouncement

        } else {
            console.log('something went wrong with the function itemTaskStep, probably no sub task type found')
            this.isCurrentStepClosed[taskIdStep] = false

            return this.isCurrentStepClosed
            // return this.isCurrentStepClosed, subTaskAnnouncement

        }
    }
}

export const inventory = new InventoryItems()

class Tasks {
    activeTasks: string[] = $state([])
    stepsTasks: {[key:string] : string[]} = $state({})
    mostActiveStepsTasks: string[] = $state([])
    completedTasks: string[] = $state([])
    failedTasks: string[] = $state([])

    // getMostActiveStepsTasks() {
    //     console.log('the function getMostActiveStepsTasks() has fired')

    //     for (let t = 0; t < Object.keys(this.stepsTasks).length; t++) {

    //         console.log('the for loop in getMostActiveStepsTasks() has fired')
    //         console.log('i am this.stepsTasks', this.stepsTasks)
    //         console.log('t=0', this.stepsTasks[0])
    //         console.log('t=t', this.stepsTasks[t])
    //         let activeStep = this.stepsTasks[t]?.[this.stepsTasks[t]?.length-1] ?? null
    //         console.log('active step', activeStep)

    //         if (activeStep) {
    //             this.mostActiveStepsTasks.push(activeStep)
    //         }

    //     }

    // }

    taskAnimation(taskId: string) {

    }

    addTask(taskId: string) {
        this.activeTasks.push(taskId)
        // we add it to the steps list, as en empty entry, because it has not yet been realized yet
        this.stepsTasks[taskId] = []
        console.log('Adding task', taskId, 'to active tasks')
        console.log(this.activeTasks)
    }

    startTask(taskId: string, tasksBySteps: TaskListSteps) {
        let subTaskId = Object.keys(tasksBySteps[taskId]['steps'])[0] 
        let stepsCount = Object.keys(tasksBySteps[taskId]['steps']).length
        this.stepsTasks[taskId] = [subTaskId]
        console.log('Starting task', taskId, 'with the step', subTaskId, 'this task has',
            stepsCount - 1, 'more step(s)'
        )
        console.log(this.stepsTasks)
    }

    // renamed this??
    incrementTask(taskId: string, tasksBySteps: TaskListSteps) {
        let taskSteps: string[] = Object.keys(tasksBySteps[taskId].steps)
        let seenSteps: string[] = Object.keys(this.stepsTasks[taskId])
        let stepCount: number = taskSteps.length
        let seenStepsCount: number = seenSteps.length
        let mostRecentStep: string = seenSteps[seenStepsCount-1]
        let done: boolean = false
        let nextTaskStep: null | string = null
        // let nextTaskStepTarget: null | string = null
        let stepAnnouncement: null | string = null

        if (this.completedTasks.includes(taskId) || this.failedTasks.includes(taskId)) {
            console.log('This task is seen through to the end.')
            done = true
            return [done, null]

        } else if (seenStepsCount === stepCount && done === false) {
            console.log('For the task', taskId, 'you are on the last step:', taskSteps[stepCount-1])
            console.log('There is nothing left to increment and you have finished the task')
            // return done, nextTaskStepTarget
            done = true
            stepAnnouncement = tasksBySteps[taskId]?.steps[mostRecentStep].step_completed_announcement
    
            return [done, stepAnnouncement]

        } else if (seenStepsCount < stepCount && done === false) {
            console.log('There are more steps left to increment for the task', taskId)

            // the highest index is seenStepsCount-1, so take the step at position seenStepsCount to get the next one
            nextTaskStep = taskSteps[seenStepsCount]
            this.stepsTasks[taskId].push(nextTaskStep)
            console.log('The subtasks now seen for this task are', this.stepsTasks[taskId].join(','))
            stepAnnouncement = tasksBySteps[taskId]?.steps[mostRecentStep].step_completed_announcement
            done = false
            return [done, stepAnnouncement]

        } else {
            console.log('something went wrong with the function incrementTask')
            // return done, nextTaskStepTarget
            done = false
            return [done, null]
        }
    }

    MidstepTask(taskId: string, tasksBySteps: TaskListSteps ) {

        if (this.activeTasks.includes(taskId) && Object.keys(tasksBySteps['taskId']['steps']).length > 1) {

        } else if (this.activeTasks.includes(taskId) && Object.keys(tasksBySteps['taskId']['steps']).length === 1) {
            console.log('This task has only one step.')
        } else {
            console.log('This is not an active task')
            return null
        }

    }

    completeTask(taskId: string) {
        this.activeTasks.splice(this.activeTasks.indexOf(taskId), 1)
        this.completedTasks.push(taskId)
    }

    useTaskItem(taskId: string) {

    }

}

export const tasks = new Tasks()


class Conversations {
    character: string = $state('')
    // characterPicture: string = $state('') | $state(null)
    dialogueArray: string[] = $state([]) // i had this as null or string array, maybe its changed ?
    conversationHistory: string[][] = $state([])
    consumesTime: boolean = $state(false)
    taskAvailable: boolean = $state(false)
    taskId: string = $state('')
    isCurrentStepClosed: Record<string, boolean> = $state({})
    open: boolean = $state(false)

    openConversationOptions() {this.open = true}
    closeConversationOptions() {this.open = false}

    startConversation(guy: string) {
        this.character = guy
        console.log("Starting a conversation with ", guy, "...")
        // pull up image of person
    }

    searchTask(guy: string, locationCode: string, nonStandardDialogueDict: NonStandardDialogue) {

        this.character = guy

        if (nonStandardDialogueDict[guy][locationCode]['task']) {
            this.taskAvailable = true
            // there will only ever be one task per character per location
            this.taskId = Object.keys(nonStandardDialogueDict[guy][locationCode]['task'])[0]
            return this.taskId
        } else {
            this.taskAvailable = false
        }
    }

    // lets do this 
    // get dialogue type, which says either nonstandard or standard
    // and then in the component its an if / if else 
    // this way i can put more complicated task grabbing stuff in a dedicated function

    getDialogue(
        guy: string, 
        locationCode: string, 
        // should this be steps tasks, or just tasks?
        getMostActiveStepsTasks: string[],
        seenTasks: string[], 
        standardDialogueDict: StandardDialogue, 
        nonStandardDialogueDict: NonStandardDialogue,
        succeed: boolean = true
    ) {

        this.character = guy 
        let characterHasResponses = false
        let characterHasTask = false
        let initiateTask = ''
        let dialogueType = ''

        // actually we are already doing this
        // let dialogueReturn: string[] | null[] = []
        // return [dialogue, taskIdStep, dialogueType]

        responseDialogue: { 
            if (!nonStandardDialogueDict[guy]) {
                console.log(guy, "actually does not have any non-standard dialogue")
                break responseDialogue
            } else if (!nonStandardDialogueDict[guy]?.hasOwnProperty('X')) {
                console.log(guy, "does not have a task at this location")
                characterHasResponses = false
                break responseDialogue
            } else if (Object.keys(nonStandardDialogueDict[guy]).includes('X')) {
                characterHasResponses = true
                for (const taskIdStep of Object.keys(nonStandardDialogueDict[guy]['X'])) {
                    let taskId = `${taskIdStep.split('-')[0]}-${taskIdStep.split('-')[1]}`
                    if (getMostActiveStepsTasks.includes(taskIdStep) && succeed === true) { // for now its always succeed
                        console.log('Task step', taskIdStep, ' is open and can be resolved by ', guy, '...')
                        this.dialogueArray = nonStandardDialogueDict[guy]['X'][taskIdStep]['succeed']
                        this.consumesTime = true
                        this.conversationHistory.push(this.dialogueArray)
                        dialogueType = 'taskResponse'
                        return [this.dialogueArray, taskIdStep, dialogueType]
                    } else {
                        console.log('There are no active tasks that ', guy, ' could be responding to')
                        break responseDialogue
                    }
                }
            } else {
                characterHasResponses = false
                break responseDialogue
        }}

        initiateDialogue: {
            if (!nonStandardDialogueDict[guy]) {
                console.log(guy, "actually does not have any non-standard dialogue")
                break initiateDialogue
            } else if (!nonStandardDialogueDict[guy][locationCode]?.hasOwnProperty('task')) {
                console.log(guy, "does not have a task at this location")
                characterHasTask = false
                break initiateDialogue
            } else if (Object.keys(nonStandardDialogueDict[guy][locationCode]).includes('task')) {
                characterHasTask = true
                // theres only one task max per character + location combo
                initiateTask = Object.keys(nonStandardDialogueDict[guy][locationCode]['task'])[0]
                if (seenTasks.includes(initiateTask)) {
                    console.log('The available task, ', initiateTask, ' has already been triggered.')
                    break initiateDialogue
                }
                else {
                    this.dialogueArray = nonStandardDialogueDict[guy][locationCode]['task'][initiateTask]
                    this.consumesTime = true
                    this.conversationHistory.push(this.dialogueArray)
                    dialogueType = 'taskInitiate'
                    return [this.dialogueArray, initiateTask, dialogueType]
                }
            } else {
                characterHasTask = false
                break initiateDialogue
        }}

        mainDialogue: {
            if (typeof this.dialogueArray !== 'undefined') {
                console.log(guy, ' does not have a task line right now, grabbing the standard dialogue sets instead...')
                if (standardDialogueDict[guy][locationCode]['main'] && !this.conversationHistory.includes(standardDialogueDict[guy][locationCode]['main'])) {
                    this.dialogueArray = standardDialogueDict[guy][locationCode]['main']
                    this.consumesTime = true
                    this.conversationHistory.push(this.dialogueArray)
                    dialogueType = 'main'
                    return [this.dialogueArray, null, dialogueType]
                } else if (standardDialogueDict[guy][locationCode]['main'] && this.conversationHistory.includes(standardDialogueDict[guy][locationCode]['main'])) {
                    this.dialogueArray = standardDialogueDict[guy][locationCode]['secondary']
                    this.consumesTime = false
                    this.conversationHistory.push(this.dialogueArray)
                    dialogueType = 'secondary'
                    return [this.dialogueArray, null, dialogueType]
                } else if (standardDialogueDict[guy][locationCode]['secondary']) {
                    this.dialogueArray = standardDialogueDict[guy][locationCode]['secondary']
                    this.consumesTime = false
                    this.conversationHistory.push(this.dialogueArray)
                    dialogueType = 'secondary'
                    return [this.dialogueArray, null, dialogueType]
                } else {
                    this.dialogueArray = standardDialogueDict[guy]['X']['default']
                    this.consumesTime = false
                    this.conversationHistory.push(this.dialogueArray)
                    dialogueType = 'default'
                    return [this.dialogueArray, null, dialogueType]

                }
            } else {
                console.log('Something went wrong at the end of the third if clause in the getDialogue() function')
                break mainDialogue
            }
        }

    }

    conversationTaskStep(taskIdStep: string, tasksBySteps: TaskListSteps, guy: string) {

        // this will be either go speak or speech check
        // for now, just go speak
        // this is called on the final dialogue button

        let taskId = `${taskIdStep.split('-')[0]}-${taskIdStep.split('-')[1]}`
        let taskStepInfo = tasksBySteps[taskId].steps[taskIdStep]
        let subTaskType = taskStepInfo.task_type
        let subTaskTarget = taskStepInfo.target_name // .toLower()
        let subTaskAnnouncement: string | null = taskStepInfo.step_completed_announcement

        if (subTaskType === 'go_speak') {
            console.log('For the conversation with', guy, "you are completing task step", taskIdStep,
                "with a go_speak type interaction. this has the announcement", subTaskAnnouncement)

            this.isCurrentStepClosed[taskIdStep] = true
            return this.isCurrentStepClosed, subTaskAnnouncement

        } else if (subTaskType === 'speech_check') {
            console.log('For the conversation with', guy, "you are completing task step", taskIdStep,
                "with a go_speak type interaction. this has the announcement", subTaskAnnouncement)
            console.log('This is a speech check, which is not set up yet')

            this.isCurrentStepClosed[taskIdStep] = false
            subTaskAnnouncement = null
            return this.isCurrentStepClosed, subTaskAnnouncement

        } else if (subTaskType === 'grab_item' || subTaskType === 'grab_discard_item' || subTaskType === 'use_discard_item') {

            console.log('subTaskType =', subTaskTarget, "this step is intended for items")
            this.isCurrentStepClosed[taskIdStep] = false
            subTaskAnnouncement = null
            return this.isCurrentStepClosed, subTaskAnnouncement

        } else {
            console.log("there was some error and the sub task type was not found")
        }

    }

    getTaskResponseDialogue(guy: string, activeTasks: string[], nonStandardDialogueDict: NonStandardDialogue, succeed: boolean) {
        
        this.character = guy
        
        // needs to catch an error

        // try {nonStandardDialogueDict[guy]['X']} {
        //     return ['none', 'none']
        // }

        if (!Object.keys(nonStandardDialogueDict[guy]).includes('X')) {
            return ['none', 'none']
        } else {
        for (const taskId of Object.keys(nonStandardDialogueDict[guy]['X'])) {
            if (activeTasks.includes(taskId) && succeed === true) { // for now, it will always be succeed is true
                console.log('Task ', taskId, ' is open and can be resolved by ', guy, '...')
                this.dialogueArray = nonStandardDialogueDict[guy]['X'][taskId]['succeed']
                this.consumesTime = true 
                this.conversationHistory.push(this.dialogueArray)
                console.log(taskId, ' is completed')
                console.log('from the state file: ', this.dialogueArray)
                return [this.dialogueArray, taskId]
            } else {
                return ['none', 'none']
            }
        }}

    }

    getTaskInitiateDialogue(guy: string, locationCode: string, seenTasks: string[], nonStandardDialogueDict: NonStandardDialogue) {

        // needs to catch an error
        this.character = guy

        for (const taskId of Object.keys(nonStandardDialogueDict[guy][locationCode]['task'])) {
            if (!seenTasks.includes(taskId)) {
                this.dialogueArray = nonStandardDialogueDict[guy][locationCode]['task'][taskId]
                this.consumesTime = true
                this.conversationHistory.push(this.dialogueArray)
                return [this.dialogueArray, taskId]
            } else {
                return ['none', 'none']
            }
        }
    }

    getStandardDialogue(guy: string, locationCode: string, standardDialogueDict: StandardDialogue) {
        
        this.character = guy 
        console.log("Grabbing the standard dialogue sets for ", guy, "...")

        if (standardDialogueDict[guy][locationCode]['main'] && 
            !this.conversationHistory.includes(
                standardDialogueDict[guy][locationCode]['main']
            )) {
            this.dialogueArray = standardDialogueDict[guy][locationCode]['main']
            this.consumesTime = true
            this.conversationHistory.push(this.dialogueArray)
            return this.dialogueArray
        } else if (standardDialogueDict[guy][locationCode]['secondary']
            // secondary dialogue can be repeated forever
        ) {
            this.dialogueArray = standardDialogueDict[guy][locationCode]['secondary']
            this.consumesTime = false
            this.conversationHistory.push(this.dialogueArray)
            return this.dialogueArray
        } else {
            this.dialogueArray = standardDialogueDict[guy]["X"]['default']
            this.consumesTime = false
            this.conversationHistory.push(this.dialogueArray)
            return this.dialogueArray
        }

    }

    endConversation(guy: string) {
        this.character = ''
        console.log("Ending the conversation with ", guy, "...")
    }
}

export const conversation = new Conversations()
