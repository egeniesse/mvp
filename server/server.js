var http = require('http');

var handleRequests = function(request, response){
	console.log(response, 'this is the response!');
};

var port = 8000;

var server = http.createServer(handleRequests);

server.listen(port, function(){
	console.log("Server listening on: http://localhost: ", PORT);
});

