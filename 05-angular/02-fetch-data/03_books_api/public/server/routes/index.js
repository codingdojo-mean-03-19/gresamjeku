const router = require('express').Router();
const bookRouter = require('./book.route');
const authorRouter = require('./author.route');

module.exports = router.use('/authors', authorRouter);
module.exports = router.use('/books', bookRouter);