var express = require('express');
var router = express.Router();

const request = require('request');
const creds = require('../config/creds');
const apiBaseUrl = `http://api.themoviedb.org/3`;
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${creds.apiKey}`;
const imageBaseUrl = `http://image.tmdb.org/t/p/w300`;

/* GET home page. */
router.get('/', function(req, res, next) {
	request.get(nowPlayingUrl, (error, response, data)=>{
		const parsedData = JSON.parse(data);
		console.log(parsedData);
		res.render('index', { 
			title: 'MovieApp',
		  	nowPlayingData: parsedData.results,
		  	imageBaseUrl 
		});
	});
});

router.get('/movie/:movieId', (req, res)=>{
	const movieId = req.params.movieId;
	const thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${creds.apiKey}`;
	request.get(thisMovieUrl, (error, response, data)=>{
		const parsedData = JSON.parse(data);
		res.render('single-movie', {
			title: parsedData.title,
			currentMovie: parsedData,
			imageBaseUrl
		});
	});
});

module.exports = router;
