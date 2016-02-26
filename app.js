var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response)){
	console.log('URL requested: ', response.url);
	function respond(){
		response.writeHead(200, {'Content-Type':'text/html'}); 
		response.write(contents);
		response.end(); 
	}
	if(request.url ==== '/'){
		fs.readFile('views/index.html', 'utf8', function(errors, contents){
			respond(); 
		}); 
	} else if (request.url === '/stylesheets/style.css') {
		fs.readFile('stylesheets/style.css', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type':'text/css'}); 
			response.write(contents);
			response.end(); 
		}); 
	} else if (request.url === '/cars') {
		fs.readFile('views/cars.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type':'text/html'}); 
			response.write(contents);
			response.end(); 
		});
	} else if (request.url === '/cats') {
		fs.readFile('views/cats.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type':'text/html'}); 
			response.write(contents);
			response.end(); 
		});
	} 
	else {
		response.writeHead(404);
		console.log('File not found!!!'); 
	}
}
server.listen(7077); 
console.log('Running in localhost at port 7077'); 