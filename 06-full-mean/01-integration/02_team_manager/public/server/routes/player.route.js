const router = require('express').Router();
const { playerController } = require('../controllers');

module.exports = router
    .get('/', playerController.index)
    .post('/', playerController.create)
    .delete('/:player_id', playerController.destroy)
    .put('/:player_id', playerController.update);
