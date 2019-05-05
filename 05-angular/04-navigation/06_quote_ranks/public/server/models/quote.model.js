const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuotesSchema = new Schema({
    content: {
        type: String,
        trim: true,
        required: [true, 'Please write the quote!'],
        minlength: [3, 'Quote should be at least 3 characters!']
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    }
}, { timestamps: true});

module.exports = mongoose.model('Quote', QuotesSchema);