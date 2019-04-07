const mongoose = require('../config/mongoose.js');

var AnimalsSchema = new mongoose.Schema({
    kind: { type:String, required:true},
    name: { type:String, required:true}
  });
  
module.exports = mongoose.model('Animal', AnimalsSchema);
