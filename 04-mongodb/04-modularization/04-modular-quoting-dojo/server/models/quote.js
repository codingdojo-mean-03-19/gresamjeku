var mongoose = require('../config/mongoose.js');

var QuotesSchema = new mongoose.Schema({
    name:  { type:String, required:true},
    quote: { type:String, required:true},
   });

module.exports = mongoose.model('Quote', QuotesSchema); 