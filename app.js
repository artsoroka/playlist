var express    = require('express'); 
var bodyParser = require('body-parser'); 
var app        = express(); 
var config     = require('./config'); 
var routes 	   = require('./routes'); 

app.use(express.static(__dirname + '/public')); 

app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views'); 

app.use('/', routes); 

app.get('*', function(req,res){
	res.status(404).send('wow no page found'); 
}); 

app.listen(config.App.port, function(){
	console.log('App started on port ', config.App.port); 
});