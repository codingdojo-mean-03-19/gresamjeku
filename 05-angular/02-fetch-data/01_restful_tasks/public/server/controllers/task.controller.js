const Task = require('mongoose').model('Task');
const {Http} = require('@status/codes');

module.exports = {
    index(_request, response) {
        Task.find({})
            .then(tasks => response.json(tasks))
            .catch(error => response.status(Http.InternalServerError).json(error));
    },
    create(request, response) {
        Task.create(request.body)
            .then(task => response.json(task))
            .catch(error => {
                const errors = Object.keys(error.errors).map(key => error.errors[key].message);
                response.status(Http.UnprocessableEntity).json(errors);
            })
    },
    show(request, response) {
        const { task_id: taskId} = request.params;
        Task.findById(taskId)
            .then(task => response.json(task))
            .catch(error => response.status(Http.UnavailableForLegalReasons).json(error));
    },
    update(request, response) {
        const { task_id: taskId} = request.params;
        Task.findByIdAndUpdate(taskId, request.body, {new:true})
            .then(task => response.json(task))
            .catch(error => {
                const errors = Object.keys(error.errors).map(key => error.errors[key].message);
                response.status(Http.UnprocessableEntity).json(errors);
            })
    },
    destroy(request, response) {
        const {task_id: taskId} = request.params;
        Task.findByIdAndRemove(taskId)
            .then(task => response.json(task))
            .catch(error => response.status(Http.ResetContent).json(error));
    },
};