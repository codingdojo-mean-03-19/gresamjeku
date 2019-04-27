const router = require('express').Router();
const { bookController } = require('../controllers');

module.exports = router
    .get('/', bookController.index)
    .post('/', bookController.create)
    .get('/:author_id', bookController.show)
    .put('/:author_id', bookController.update)
    .delete('/:author_id', bookController.destroy);
