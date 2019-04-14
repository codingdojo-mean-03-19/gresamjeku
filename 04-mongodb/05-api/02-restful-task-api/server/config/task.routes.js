const taskController = require('../controllers/task.controller');

module.exports = function(app){
    app.get('/', taskController.index);
    app.get('/:id', taskController.show);
    app.post('/', taskController.create);
    app.put('/:id', taskController.update);
    app.delete('/:id', taskController.destroy);
};