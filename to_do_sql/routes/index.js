var express = require('express');
var router = express.Router();

const mysql = require('mysql');
const db_creds = require('../config/config.js');
// Set up a connection to use and reuse
const connection = mysql.createConnection(db_creds);

connection.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
	let message = req.query.msg;
	if(message === 'added') {
		message = `Your task was added!`;
	} else if(message === 'deleted') {
		message = `Your task was deleted!`;
	} else if(message === 'edited') {
		message = `Your task was edited!`;
	}
	console.log(message);
	const selectQuery = `SELECT * FROM tasks`;

	connection.query(selectQuery, (error, result)=>{
		if(error) {
			throw error;
		}
		console.log(result);
		// res...
		// 1. send
		// 2. render
		// 3. json
		res.render('index', { 
	  		message,
	  		title: 'Express',
	  		taskArray: result
  		});
	});
});

router.post('/addItem', (req, res)=>{
	const taskName = req.body.newTask;
	const taskDate = req.body.newTaskDate;
	const insertQuery = `INSERT INTO tasks (name, date)
						VALUES (?,?)`;
	
	console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ READY TO RUN QUERY $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
	// query args:
	// 1. Query string
	// 2. array corresponding to ? in query
	// 3. callback to run when query is finished
	connection.query(insertQuery, [taskName, taskDate], (error, result)=>{
		if(error) throw error;
		console.log(`=============================== QUERY DID NOT ERROR SENDING TO THE HOMEPAGE ======================================`);
		res.redirect('/?msg=added');
	});
	// res.json(req.body);
});

router.post('/editItem/:id', (req, res)=>{
	const idToEdit = req.params.id;
	const changedTask = req.body.changedTask;
	const changedDate = req.body.changedDate;
	const editQuery = "UPDATE tasks SET name=?, date=? where id=?";

	console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ READY TO RUN QUERY $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
	// query args:
	// 1. Query string
	// 2. array corresponding to ? in query
	// 3. callback to run when query is finished
	connection.query(editQuery, [changedTask, changedDate, idToEdit], (error, result)=>{
		if(error) throw error;
		console.log(`=============================== QUERY DID NOT ERROR SENDING TO THE HOMEPAGE ======================================`);
		res.redirect('/?msg=edited');
	});
});

router.get('/delete/:id', (req, res)=>{
	const idToDelete = req.params.id;
	const deleteQuery = "DELETE FROM tasks where id=?";
	connection.query(deleteQuery, [idToDelete], (error, result)=>{
		if(error) {
			throw error;
		}
		res.redirect('/?msg=deleted');
	})
});

router.get('/edit/:id', (req, res)=>{
	const idToEdit = req.params.id;
	const selectQuery = `SELECT * FROM tasks where id=?`;
	connection.query(selectQuery, [idToEdit], (error, result)=>{
		if(error) {
			throw error;
		}
		console.log(result);
		// res...
		// 1. send
		// 2. render
		// 3. json
		res.render('editpage', { 
		  	id: idToEdit,
			title: 'Express',
			taskArray: result
	  	});
	});
});

module.exports = router;