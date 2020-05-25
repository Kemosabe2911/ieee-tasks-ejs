const mongoose= require('mongoose');

const TaskSchema= new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        date:{
            type: Date,
            default: Date.now
        }
    }
);

const Task= mongoose.model('Task',TaskSchema);

module.exports= Task;