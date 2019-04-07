const quotes = require('../controllers/quotes.js');


module.exports = function(app){
   //homepage
    app.get('/', function(req, res) {
        quotes.index(req, res);   
    });
    
    //add new animal
    app.get('/mongooses/new', function(req, res){
        res.render('add');
    })
    
    //show information about the particular animal
    app.get("/mongooses/:id", function (req, res){
        console.log("The requested ID is:", req.params.id);
        quotes.show(req,res,req.params.id);
    });
    
    //edit information of the particular animal
    app.get("/mongooses/edit/:id", function(req,res){
        console.log("The requested edit ID is:", req.params.id);
        quotes.edit(req,res,req.params.id);
    });
    
    //route action of edit form
    app.post("/update/:id", function(req,res){
        console.log("The requested update ID is:", req.params.id);
        quotes.update(req,res,req.params.id);
    });
  
    //route action of new animal form
    app.post('/mongooses', function(req,res){
        console.log('POST DATA:', req.body);
        quotes.create(req,res);
    })
  
    //delete the particular animal
    app.get('/mongooses/destroy/:id', function(req,res){
        quotes.destroy(req,res,req.params.id);
    })
}