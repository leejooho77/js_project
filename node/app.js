// http is part of core. Inculde it so we can make a server.
const http = require('http');
const fs = require('fs');

// function renderHomePage(req, res) {
// 	res.writeHead(200, {
// 		'content-type':'text/html'
// 	});
// 	res.end(`<h1>Your page has loaded</h1>`);
// }

function renderHomePage() {
	const HTMLtoGet = fs.readFileSync('./homepage.html');
	return HTMLtoGet;
}

const server = http.createServer((req, res)=>{
	if(req.url === '/') {
		// renderHomePage(req, res);
		res.writeHead(200, {
			'content-type':'text/html'
		});
		res.end(renderHomePage());
	} else if(req.url === '/virat.jpg') {
		res.writeHead(200, {
			'content-type':'image/jpg'
		});
		const img = fs.readFileSync('virat.jpg');
		res.end(img);
	} else {
		res.end(`<h1>Page ${req.url} not Found</h1>`);
	}
});

server.listen(3000);
console.log(`Server is listening on port 3000...`);