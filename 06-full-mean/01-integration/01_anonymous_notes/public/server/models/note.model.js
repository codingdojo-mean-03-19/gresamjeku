const mongoose = require('mongoose');
const {Schema} = mongoose;

const NoteSchema = new Schema({
    content:{
        type: String,
        trim: true,
        required: [true, 'Note content is required'],
        minlength: [3, 'Note content should be more than 3 characters!']
    },
}, {timestamps:true});

module.exports = mongoose.model('Note', NoteSchema);