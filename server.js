var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

var app = express();
app.use(express.static(__dirname + '/public'));

//CONNECTION
var connection = new Sequelize('calcWatches', 'root', null,
{
	host: 'localhost'
});

//MODEL
var Watch = connection.define('watch', {
	color: Sequelize.STRING,
	price: Sequelize.FLOAT,
	brand: Sequelize.STRING
});
//ENDPOINT

app.get('/watches', function(req, res) {
	Watch.all().then(function(data) {
		res.send(data);
	});
});

try {
	connection.sync();
}

catch(err) {
	console.log('database error' + err);
}





app.listen(3001);