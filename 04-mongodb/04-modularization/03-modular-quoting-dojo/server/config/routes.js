const quotes = require('../controllers/quotes.js');

module.exports = function(app){
    app.get('/', function (req, res) {
        res.render('index');
    });
    
    app.get('/result', function(req, res) {
      quotes.get_quotes(req,res);
    });
    
    app.post('/quotes', function(req, res){
      console.log('POST DATA:', req.body);
      quotes.post_quotes(req,res);      
    });
}