const catchAllRouter = require('./catch-all.route');

const router = require('express').Router();
const api = require('express').Router();

const playerRouter = require('./player.route');

router.use('/players', playerRouter);
module.exports = api.use('/api', router).use(catchAllRouter);
