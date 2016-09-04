"use strict";

var express = require('express');
var app = express();
var http = require('http').Server(app);
var router = express.Router();
var bodyParser = require('body-parser');

var games = [];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use('/api/v1', router);
router.use(bodyParser.json());

// CREATE GAME
router.post('/game', function(req, res){
  let name = req.body['name'];
  if(name){
    //TODO: use GUID
    let id = new Date().valueOf();
    let newGame = {name : name,
		                id 	: id};
     games.push(newGame);
     res.sendStatus(200);
  }else{
    res.status(400).send("Kirjota nimi, bitte");
  }
});

// GET LIST OF GAMES
router.get('/game', function(req, res){
	res.json(games);
});

// GET GAME BY ID
router.get('/game/:id', function(req, res){
	let id = req.params['id'];

	let game;

	for(let i = 0; i < games.length; i++){
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
	let id = req.params['id'];

	let game;

	for(let i = 0; i < games.length; i++){
		if(games[i]['id'] == id){
			game = games[i];
      games.splice(games.indexOf(game), 1);
      break;
		}
	}

	if(game){
    res.sendStatus(200);
	} else {
		res.status(404).send('Ei oo');
	}

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
