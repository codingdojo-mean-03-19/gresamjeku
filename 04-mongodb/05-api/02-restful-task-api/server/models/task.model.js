const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Task title is required'],
  },
  description: {
    type: String,
    default: ''
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  },
}, {timestamps: true});

module.exports = mongoose.model('Task', taskSchema);