const http = require('http');
const fs = require('fs');
const server = http.createServer(function(request, response) {
    const url = request.url.split('/'), fileType = url[1], fileName = url[2];
    switch (fileType) {
        case "stylesheets":
            CSS_func(fileName, response);
            break;
        case "images":
            img_func(fileName, response);
            break;
        default:
            switch(fileType){
                case "cars": 
                    if (fileName === "new") { HTML_func("add_car.html", response); } 
                    else { HTML_func('cars.html', response); }
                    break;
                case "cats":
                    HTML_func("cats.html", response);
                    break;
                default:
                    serve404(response);
        }
    }
});

function HTML_func(filename, response) {
    fs.readFile(`views/${filename}`, 'utf8', function(error, contents){
        response.writeHead(200, {'Content-type' : 'text/html' });
        response.write(contents);
        response.end();
    });
}
function CSS_func(filename, response) {
    fs.readFile(`stylesheets/${filename}`, 'utf8', function(error, contents) {
        response.writeHead(200, {'Content-type' : 'text/css' });
        response.write(contents);
        response.end();
    });
}
function img_func(filename, response) {
    fs.readFile(`images/${filename}`, function(error, contents) {
        response.writeHead(200, {'Content-type' : 'image/jpg' });
        response.write(contents);
        response.end();
    });
} 
function serve404(response){
    response.writeHead(404);
    response.end("File not found!");
}
server.listen(7077);
console.log("Running on 7077");