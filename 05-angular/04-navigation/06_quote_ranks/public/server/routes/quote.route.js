const router = require('express').Router();
const { quoteController } = require('../controllers');

module.exports = router
    .get('/:author_id', quoteController.index)
    .post('/:author_id', quoteController.create);
