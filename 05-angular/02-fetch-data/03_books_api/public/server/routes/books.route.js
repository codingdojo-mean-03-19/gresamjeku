const router = require('express').Router();
const { bookController } = require('../controllers');

module.exports = router
    .get('/', bookController.index)
    .get('/books', bookController.indexBook)
    .post('/', bookController.createAuthor)
    .post('/books', bookController.createBook)
    .get('/:author_id', bookController.showAuthor)
    .put('/:author_id', bookController.update)
    .delete('/:author_id', bookController.destroy);
