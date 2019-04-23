const Book = require('mongoose').model('Book');
const Author = require('mongoose').model('Author');
const {Http} = require('@status/codes');

module.exports = {
    //GET all the authors
    index(_request, response) {
        Author.find({})
            .populate('books')
            .then(authors => response.json(authors))
            .catch(error => response.status(Http.InternalServerError).json(error));
    },
    //GET all the books
    indexBook(_request, response){
        Book.find({})
            .populate('author')
            .then(books => response.json(books))
            .catch(error => response.status(Http.InternalServerError).json(error));
    },
    //create an author
    createAuthor(request, response) {
        Author.create(request.body)
            .then(author => response.json(author))
            .catch(error => {
                const errors = Object.keys(error.errors).map(key => error.errors[key].message);
                response.status(Http.UnprocessableEntity).json(errors);
            })
    },
    //create a book
    createBook(request,response){
        Book.create(request.body)
                .then(book => {Author.findById(book.author).then(author => {author.books.push(book._id);
                response.json(book);})
            //.then(() => { response.json(book); })
        })
    },
    //show an author, filter by ID
    showAuthor(request, response) {
        const { author_id: authorId} = request.params;
        Author.findById(authorId)
            .then(author => response.json(author))
            .catch(error => response.status(Http.UnavailableForLegalReasons).json(error));
    },
    update(request, response) {
        const { author_id: authorId} = request.params;
        Book.findByIdAndUpdate(authorId, request.body, {new:true})
            .then(author => response.json(author))
            .catch(error => {
                const errors = Object.keys(error.errors).map(key => error.errors[key].message);
                response.status(Http.UnprocessableEntity).json(errors);
            })
    },
    destroy(request, response) {
        const {author_id: authorId} = request.params;
        Book.findByIdAndRemove(authorId)
            .then(author => response.json(author))
            .catch(error => response.status(Http.ResetContent).json(error));
    },
};