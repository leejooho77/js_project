const express = require('express');
const app = express();

app.set('view engine', 'hbs');

app.get('/:name', (req, res)=>{
	let name = req.params.name || 'world';
	res.render('hello.hbs', {
		title: 'Hello',
		name: name
	});
});

app.listen(3000, ()=>console.log("Example app listening on port 3000!"));