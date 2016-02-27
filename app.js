var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
	console.log('URL requested: ', request.url);
	function respond_css(errors, contents) {
		response.writeHead(200, {'Content-Type':'text/css'}); 
		response.write(contents);
		response.end(); 
	}
	function respond_html(errors, contents) {
		response.writeHead(200, {'Content-Type':'text/html'}); 
		response.write(contents);
		response.end(); 
	}
	function respond_img(errors, contents) {
		response.writeHead(200, {'Content-Type':'image/jpg'}); 
		response.write(contents);
		response.end(); 
	}
	if(request.url === '/') {
		fs.readFile('views/index.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type':'text/html'}); 
			response.write(contents);
			response.end();
		}); 
	} else if (request.url === '/stylesheets/style.css') {
		fs.readFile('stylesheets/style.css', 'utf8', function(errors, contents){
			respond_css(errors, contents); 
		}); 
	} else if (request.url === '/stylesheets/style2.css'){
		fs.readFile('stylesheets/style2.css', 'utf8', function(errors, contents){
			respond_css(errors, contents);  
		});
	} else if (request.url === '/cars') {
		fs.readFile('views/cars.html', 'utf8', function(errors, contents){
			respond_html(errors, contents); 
		});
	} else if (request.url === '/cats') {
		fs.readFile('views/cats.html', 'utf8', function(errors, contents){
			respond_html(errors, contents);
		});
	} else if (request.url === '/images/car1'){
		fs.readFile('images/cars/car1.jpg', function(errors, contents){
			respond_img(errors, contents); 
		});
	} else if (request.url === '/images/car2'){
		fs.readFile('images/cars/car2.jpg',  function(errors, contents){
			respond_img(errors, contents); 
		});
	} else if (request.url === '/images/car3'){
		fs.readFile('images/cars/car3.jpg', function(errors, contents){
			respond_img(errors, contents); 
		});
	} else if (request.url === '/images/car4'){
		fs.readFile('images/cars/car4.jpg', function(errors, contents){
			respond_img(errors, contents); 
		});
	} else if (request.url === '/images/car5'){
		fs.readFile('images/cars/car5.jpg', function(errors, contents){
			respond_img(errors, contents); 
		});
	} else if (request.url === '/images/car6'){
		fs.readFile('images/cars/car6.jpg', function(errors, contents){
			respond_img(errors, contents); 
		});
	} else if (request.url === '/images/cat1'){
		fs.readFile('images/cats/cat1.jpg', function(errors, contents){
			respond_img(errors, contents); 
		});
	} else if (request.url === '/images/cat2'){
		fs.readFile('images/cats/cat2.jpg', function(errors, contents){
			respond_img(errors, contents); 
		});
	} else if (request.url === '/images/cat3'){
		fs.readFile('images/cats/cat3.jpg', function(errors, contents){
			respond_img(errors, contents); 
		});
	} else if (request.url === '/images/cat4'){
		fs.readFile('images/cats/cat4.jpg', function(errors, contents){
			respond_img(errors, contents); 
		});
	} else if (request.url === '/images/cat5'){
		fs.readFile('images/cats/cat5.jpg', function(errors, contents){
			respond_img(errors, contents); 
		});
	} else if (request.url === '/images/cat6'){
		fs.readFile('images/cats/cat6.jpg', function(errors, contents){
			respond_img(errors, contents);
		});
	} 
	else {
		response.writeHead(404);
		console.log('File not found!!!'); 
	}
});
server.listen(7077); 
console.log('Running in localhost at port 7077'); 