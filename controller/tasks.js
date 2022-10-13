const Task = require('../models/task')

// get all the task 
const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(201).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
// create task

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
// get a single tasks

const getTask = async (req, res) => {
    try {
        const {id:taskID}=req.params
        const task = await Task.findOne({_id:taskID})
        if (!task){
            return res.status(404).json({msq:`No task id ${taskID}`})
        }
        res.json({ task})

    } catch (error) {
        res.status(500).json({ msg: error })
    }
    
}
// edit a tasks
const updateTask = async (req, res) => {
    try {
        const {id:taskID}=req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true})
        if (!task){
            return res.status(404).json({msq:`No task id ${taskID}`})
        }
        res.json({ task})

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

// delete a tasks
const deleteTask = async (req, res) => {
    
    try {
        const {id:taskID}=req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if (!task){
            return res.status(404).json({msq:`No task id ${taskID}`})
        }
        res.json({ task})

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}

