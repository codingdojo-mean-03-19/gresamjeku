const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotes_db');
    
module.exports = require('mongoose');