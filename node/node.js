// At the top put your require node modules.
// Require is kind of like the node version of <script>.

// http is poart of node core! we don't have to install or ask for
// It comes with node. Just require it.
// Node is like a mr potato-head man doll. Node can run lean!
// It doesn't come with bulk ware.

const http = require("http");
// fs is file system. fs gives node access to the computer its running on part of node. 
// No need to install. It gives node access to the file system on THIS computer. The computer running the js file.
const fs = require("fs");
// console.log(typeof(http));
const server = http.createServer((req, res)=>{
	console.log(req.url);
	if(req.url === '/') {
		// writeHead takes minimum 2 args:
		// 1. status code
		// 2. header object, which needs to include the mime-type of whatever is being sent back
		res.writeHead(200, {'content-type':'text/html'})
		res.write('<h1>Server responding!</h1>');
		res.write(`<h1>Requested url: ${req.url}</h1>`);
		res.end();
	} else {
		res.writeHead(404, {'content-type':'text/html'})
		res.write('<h1>Requested page not found!</h1>');
		res.write(`<h1>Requested url: ${req.url}</h1>`);
		res.end();
	}
});
// Tell the server we created with the http obhect to listen for http traffic on port 8080.
// When a request comes in on port 8080, via http, the callback function in createServer will fire off
// with the req and res objects available
server.listen(8080);