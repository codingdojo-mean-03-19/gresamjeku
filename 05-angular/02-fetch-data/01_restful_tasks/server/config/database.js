const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$', 'i');
const modelsPath = path.resolve('server','models');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/task-api',{useMongoClient: true});
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));

fs.readdirSync(modelsPath).forEach(model => {
  if (reg.test(model)) {
    require(path.join(modelsPath, model));
  }
});