var express = require('express');
var app = express();
var http = require('http').Server(app);
var router = express.Router();

var games = [];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use('/api/v1', router);

// CREATE GAME
router.post('/game/:name', function(req, res){
	var name = req.params['name'];
	var id = new Date().valueOf();
	var newGame = {name : name,
					id 	: id};
	games.push(newGame);
	res.sendStatus(200);
});

// GET LIST OF GAMES
router.get('/game', function(req, res){
	res.json(games);
});

// GET GAME BY ID
router.get('/game/:id', function(req, res){
	var id = req.params['id'];

	var game;

	for(var i = 0; i < games.length; i++){
		if(games[i]['id'] == id){
			game = games[i];
			break;
		}
	}

	if(typeof game === 'undefined'){
		res.status(404).send('Ei oo');
	} else {
		res.json(game);
	}
	
});

// DELETE GAME BY ID
router.delete('/game/:id', function(req, res){
	var id = req.params['id'];

	var game;

	for(var i = 0; i < games.length; i++){
		if(games[i]['id'] == id){
			game = games[i];
			games.splice(games.indexOf(game), 1);
			break;
		}
	}

	if(typeof game === 'undefined'){
		res.status(404).send('Ei oo');
	} else {
		res.sendStatus(200);
	}
	
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});