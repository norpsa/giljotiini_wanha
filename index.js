var express = require('express');
var app = express();
var http = require('http').Server(app);
var router = express.Router();

var games = [];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use('/api/v1', router);

app.get('/foo', function(req, res){
  res.sendStatus(200);
});

router.post('/game/:name', function(req, res){
	var name = req.params['name'];
	console.log(name);
	res.sendStatus(200);
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});