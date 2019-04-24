const Note = require('mongoose').model('Note');
const {Http} = require('@status/codes');

module.exports = {
    index(_request, response) {
        Note.find({})
            .then(notes => response.json(notes))
            .catch(error => response.status(Http.InternalServerError).json(error));
    },
    create(request, response) {
        Note.create(request.body)
            .then(note => response.json(note))
            .catch(error => {
                const errors = Object.keys(error.errors).map(key => error.errors[key].message);
                response.status(Http.UnprocessableEntity).json(errors);
            })
    }
};