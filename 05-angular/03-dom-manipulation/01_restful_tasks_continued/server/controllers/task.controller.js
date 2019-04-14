const Task = require('mongoose').model('Task');
const errorHandler = require('./concerns/error-handler.js');

module.exports = {
  index(reqest, response) {
    Task.find(request.body)
      .then(tasks => response.json(tasks))
      .catch(errorHandler.bind(response));
  },
  show(reqest, response) {
    Task.findById(request.params.id)
      .then(task => response.json(task))
      .catch(errorHandler.bind(response));
  },
  create(reqest, response) {
    Task.create(request.body)
      .then(task => response.json(task))
      .catch(errorHandler.bind(response));
  },
  update(reqest, response) {
    Task.findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(task => response.json(task))
      .catch(errorHandler.bind(response));
  },
  destroy(reqest, response) {
    Task.findByIdAndRemove(request.params.id)
     .then(result => response.json(result))
     .catch(errorHandler.bind(response)); 
  },
};