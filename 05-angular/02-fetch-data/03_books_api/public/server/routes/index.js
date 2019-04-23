const router = require('express').Router();
const bookRouter = require('./books.route');

module.exports = router.use('/authors', bookRouter);