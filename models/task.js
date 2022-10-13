const mongoose = require('mongoose')

const TaskScema = new mongoose.Schema({
    name:{
        type:String,
    require:[true,'must provide name'],
trim:true,
maxlength:[20,'length shoud be less than 20 characters']},completed:Boolean
})

module.exports = mongoose.model('Task',TaskScema)