const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlayerSchema = new Schema({
    firstName:{
        type: String,
        trim: true,
        required: [true, 'First name is required'],
        minlength: [2, 'First name must be more than 2 characters!']
    },
    lastName:{
        type: String,
        trim: true,
    },
    position:{
        type: String,
        trim: true
    },
    status:{
        type: String,
        default: 'Undecided'
    }
}, { timestamps: true});

module.exports = mongoose.model('Player', PlayerSchema);

