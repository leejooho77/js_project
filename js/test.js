// ## Basketball Players

// Given an array of basketball players stored as JavaScript objects:

var players = [
  {
    name: 'Paul Millsap',
    position: 'PF',
    avgMinutesPlayed: 36,
    avgPoints: 16.4,
    avgRebounds: 9.4,
    starter: true
  },
  {
    name: 'Jeff Teague',
    position: 'PG',
    avgMinutesPlayed: 28.6,
    avgPoints: 15.6,
    avgRebounds: 1.9,
    starter: true
  },
  {
    name: 'Al Horford',
    position: 'C',
    avgMinutesPlayed: 32,
    avgPoints: 13.2,
    avgRebounds: 6.8,
    starter: true
  },
  {
    name: 'Kent Bazemore',
    position: 'SF',
    avgMinutesPlayed: 31.8,
    avgPoints: 12,
    avgRebounds: 6.6,
    starter: true
  },
  {
    name: 'Kyle Korver',
    position: 'SG',
    avgMinutesPlayed: 32.4,
    avgPoints: 11.2,
    avgRebounds: 4.9,
    starter: true
  },
  {
    name: 'Dennis Schroder',
    position: 'PG',
    avgMinutesPlayed: 18.3,
    avgPoints: 10.7,
    avgRebounds: 1.8,
    starter: false
  },
  {
    name: 'Kris Humphries',
    position: 'PF',
    avgMinutesPlayed: 14.7,
    avgPoints: 9.7,
    avgRebounds: 5.7,
    starter: false
  },
  {
    name: 'Mike Scott',
    position: 'PF',
    avgMinutesPlayed: 17.6,
    avgPoints: 7.0,
    avgRebounds: 3.6,
    starter: false
  },
  {
    name: 'Thabo Sefolosha',
    position: 'SF',
    avgMinutesPlayed: 18.9,
    avgPoints: 4.8,
    avgRebounds: 3.9,
    starter: false
  },
  {
    name: 'Mike Muscala',
    position: 'PF',
    avgMinutesPlayed: 7.4,
    avgPoints: 2.7,
    avgRebounds: 1.9,
    starter: false
  },
  {
    name: 'Tim Hardaway Jr.',
    position: 'SG',
    avgMinutesPlayed: 9.7,
    avgPoints: 2.2,
    avgRebounds: 1.0,
    starter: false
  },
  {
    name: 'Lamar Patterson',
    position: 'SG',
    avgMinutesPlayed: 5.0,
    avgPoints: 1.5,
    avgRebounds: 1.3,
    starter: false
  },
  {
    name: 'Kirk Hinrich',
    position: 'SG',
    avgMinutesPlayed: 4.5,
    avgPoints: 0.8,
    avgRebounds: 0.7,
    starter: false
  }
];

// var avgOfAvgMinutes = 0;
// for(i=0; i<players.length; i++){
//   avgOfAvgMinutes += players[i].avgMinutesPlayed;
//   console.log(players[i].avgMinutesPlayed);
// }
// avgOfAvgMinutes/players.length;

// * Print the average playing time of the players.
// * Print the average playing time of the starters.
// * Print the average playing time of the bench players.
function avgPlayTime(players) {
	let avgTimePlayers = 0;
	let avgTimeStarters = 0;
	let avgTimeBench = 0;
	let numOfStarters = 0;
	for(var i = 0; i < players.length; i++) {
		avgTimePlayers += players[i].avgMinutesPlayed;
		if(players[i].starter) {
			avgTimeStarters += players[i].avgMinutesPlayed;
			numOfStarters++;
		}
		else avgTimeBench += players[i].avgMinutesPlayed;
	}
	console.log("Average playing time of all players: %d", avgTimePlayers/players.length);
	console.log("Average playing time of all players: %d", avgTimeStarters/numOfStarters);
	console.log("Average playing time of all players: %d", avgTimeBench/(players.length - numOfStarters));
}

// * Create an array of the names of each player.
// * Create an array of the names of the players who average more than 10 points per game.
// * Create an array of the names of the players who average more than 5 rebounds per game.
function showPlayers(players) {
	var list_players = [];
	var list_players_10pts = [];
	var list_players_5rbs = [];
	for(var i = 0; i < players.length; i++) {
		list_players.push(players[i].name);
		if(players[i].avgPoints > 10) list_players_10pts.push(players[i].name);
		if(players[i].avgRebounds > 5) list_players_5rbs.push(players[i].name);
	}
	console.log("All players: " +  list_players);
	console.log("Players who average more than 10 points per game: " + list_players_10pts);
	console.log("Players who average more that 5 rebounds per game: " + list_players_5rbs);
}

// * Who is the player with the most points per minute played? Write a program to find that out.
function findMVP(players) {
	var player;
	var points_per_min = 0;
	for(var i = 0; i < players.length; i++) {
		if((players[i].avgPoints/players[i].avgMinutesPlayed) > points_per_min) {
			points_per_min = (players[i].avgPoints/players[i].avgMinutesPlayed);
			player = players[i];
		}
	}
	console.log("MVP is %s", player.name);
}

// * Based on this data, what is the average points score for the team as a whole?
function wholeScore(players) {
	var score = 0;
	for(var i = 0; i < players.length; i++) {
		score += players[i].avgPoints;
	}
	console.log("Whole score of the team: %d", score);
}

avgPlayTime(players);
showPlayers(players);
findMVP(players);
wholeScore(players);