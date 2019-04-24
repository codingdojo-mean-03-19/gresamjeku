const catchAllRouter = require('./catch-all.route');

const router = require('express').Router();
const authorRouter = require('./author.route');

const api = require('express').Router();

module.exports = router.use('/authors', authorRouter);

//module.exports = api.use('/api', router).use(catchAllRouter);

//api.use('/api', router);
//router.use('/authors', authorRouter).use(catchAllRouter);