const router = require('express').Router();
const { taskController } = require('../controllers');

module.exports = router
    .get('/', taskController.index)
    .post('/', taskController.create)
    .get('/:task_id', taskController.show)
    .put('/:task_id', taskController.update)
    .delete('/:task_id', taskController.destroy);
