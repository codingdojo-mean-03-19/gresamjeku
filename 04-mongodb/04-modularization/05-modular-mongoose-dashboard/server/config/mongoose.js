const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoosee_db',{useNewUrlParser: true});

module.exports = require('mongoose');