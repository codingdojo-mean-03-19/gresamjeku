module.exports = function Route(app, server){
    var io = require('socket.io').listen(server);

    app.get('/', function(req, res){
        res.render('index');
    });
    var count = 0;
    io.sockets.on('connection', function(socket){
        socket.on('increment', function(data){
            io.emit('updated_message', {response: count++});
        });

        socket.on('reset', function(data){
            io.emit('updated_message', {response : count=0});
        })
    });
};