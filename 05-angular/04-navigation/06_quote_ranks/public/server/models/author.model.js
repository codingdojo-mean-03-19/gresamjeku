const mongoose = require('mongoose');
const {Schema} = mongoose;

const QuotesSchema = new Schema({
    content: {
        type: String,
        trim: true,
        required: [true, 'Please write the quote!'],
        minlength: [3, 'Quote should be at least 3 characters!']
    }
}, {timestamps:true});

const AuthorSchema = new Schema({
    firstName:{
        type: String,
        trim: true,
        required: [true, 'First name is required'],
        minlength: [2, 'First name must be more than 2 characters!']
    },
    lastName:{
        type: String,
        trim: true,
        required: [true, 'Last name is required'],
        minlength: [2, 'Last name must be more than 2 characters!']
    },
    quotes: [QuotesSchema]
}, {timestamps:true});

module.exports = mongoose.model('Author', AuthorSchema);
module.exports = mongoose.model('Quote', QuotesSchema);