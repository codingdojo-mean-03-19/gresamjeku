const mongoose = require('mongoose');
const {Schema} = mongoose;

const AuthorsSchema = new Schema({
    firstName:{
        type: String,
        trim: true,
        required: [true, 'First name is required'],
        minlength: [2, 'Firt name must be at least 2 characters']
    },
    lastName:{
        type: String,
        trim: true,
        required: [true, 'Last name is required'],
        minlength: [2, 'Last name must be at least 2 characters']
    },
    countryOfOrigin:{
        type: String,
        trim: true,
        minlength: [3, 'Country of origin must be at least 3 characters']
    },
    books: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]    
}, {timestamps:true});

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

const Author = mongoose.model('Author', AuthorsSchema);
const Book = mongoose.model('Book', BooksSchema);

//module.exports = mongoose.model('Book', BooksSchema);
module.exports = [Author, Book];