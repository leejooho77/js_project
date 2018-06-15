const express = require('express');
const app = express();

app.get('/:name', (req, res)=>{
	let name = req.params.name || 'world';
	res.send(`Hello ${name}!`);
});

app.listen(3000, ()=>console.log("Example app listening on port 3000!"));