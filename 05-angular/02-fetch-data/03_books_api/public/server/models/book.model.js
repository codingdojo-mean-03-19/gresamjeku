const mongoose = require('mongoose');
const {Schema} = mongoose;

const BooksSchema = new Schema({
    title:{
        type: String,
        trim: true,
        required: [true, 'Title is required'],
        minlength: [2, 'More than 1 char needed']
    },
    year: {
        type: Number,
        trim: true,
        minlength: [2, 'More than 1 char needed']
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true
    }
})

module.exports = mongoose.model('Book', BooksSchema);
