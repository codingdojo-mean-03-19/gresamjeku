const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema({
    title:{
        type: String,
        trim: true,
        required: [true, 'Title is required'],
        minlength: [2, 'More than 1 char needed']
    },
    desc: {
        type: String,
        trim: true,
        minlength: [2, 'More than 1 char needed']
    }
}, {timestamps:true});

module.exports = mongoose.model('Task', TaskSchema);