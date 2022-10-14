const Task = require('../models/task')
const asycWrapper = require('../middleware/async')
const {createCustomError}= require("../errors/custom-errors")
// get all the task 
const getAllTasks = asycWrapper( async (req, res) => { 
        const task = await Task.find({})
        res.status(201).json({ task })
})
// create task

const createTask = asycWrapper( async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
})
// get a single tasks

const getTask = asycWrapper( async (req, res) => {

        const {id:taskID}=req.params
        const task = await Task.findOne({_id:taskID})
        if (!task){
                return next(createCustomError(`No task id ${taskID}`,404))
        //     return res.status(404).json({msq:`No task id ${taskID}`})
        }
        res.json({ task})
    
})
// edit a tasks
const updateTask = asycWrapper(async (req, res) => {

        const {id:taskID}=req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true})
        if (!task){
                return next(createCustomError(`No task id ${taskID}`,404))
        }
        res.json({ task})

   
})

// delete a tasks
const deleteTask = asycWrapper(async (req, res) => {
    
  
        const {id:taskID}=req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if (!task){
            return res.status(404).json({msq:`No task id ${taskID}`})
        }
        res.json({ task})

})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}

