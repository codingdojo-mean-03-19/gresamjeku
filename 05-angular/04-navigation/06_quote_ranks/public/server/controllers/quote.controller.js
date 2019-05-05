const Author = require('mongoose').model('Author');
const {Http} = require('@status/codes');

module.exports = {
    index(request, response) {
        const { author_id : authorId} = request.params;
        Author.findById(authorId, { quotes:1})
            .then(quotes => response.json(quotes))
            .catch(error => response.status(Http.UnavailableForLegalReasons).json(error));
    },
    create(request,response){
        const { author_id : authorId} = request.params;
        Author.findById(authorId)
            .then(author => {
                author.quotes.push(request.body)
                author.save()
                response.json(author);
            })
            .catch(error => {
                const errors = Object.keys(error.errors).map(key => error.errors[key].message);
                response.status(Http.UnprocessableEntity).json(errors);
            })
    }
};