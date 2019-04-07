const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotes_db');


var QuotesSchema = new mongoose.Schema({
    name:  { type:String, required:true},
    quote: { type:String, required:true},
   });

module.exports = mongoose.model('Quote', QuotesSchema); 