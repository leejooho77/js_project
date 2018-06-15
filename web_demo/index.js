const express = require('express');
const app = express();
const router = express.Router();
const student = [
	'Aleya',
	'Amos',
	'Calder',
	'Chris',
	'Christian',
	'Hunter',
	'Josslyn',
	'Juho',
	'Mariano',
	'Mayur',
	'NaDario',
	'Noelle',
	'Robert',
	'Shahar',
	'Shane',
	'Toby',
	'Tyler',
	'Amber',
	'Andrew',
	'Azadeh',
	'Bob',
	'Bryant',
	'Branden',
	'Dina',
	'Donell',
	'John',
	'Jonathan',
	'Liz',
	'Newsha',
	'Rosslyn',
	'Tahrim',
	'Tawni',
	'Victor'
];

app.set('view engine', 'ejs');
app.use(router);


// Using Router
// res.render takes 2 args:
// 1. the name of the view to load.
// 2. an object to send to that view.
router.get('/', (req, res, next)=>{
	res.render('index', {
		title:'Express',
		student: student.sort()
	});
});

router.get('/reverse', (req, res, next)=>{
	res.render('index', {
		title:'Reverse',
		student: student.reverse()
	});
});

// Using App
// app.get('/', (req, res)=>{
// 	res.render('index', {
// 		title:'Express',
// 		student: student.sort()
// 	});
// });

// app.get('/reverse', (req, res)=>{
// 	res.render('index', {
// 		title:'Reverse',
// 		student: student.reverse()
// 	})
// });

app.listen(8080, ()=>console.log("app is listening on port 8080!"));