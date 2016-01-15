var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./public/routes/router.js');


//middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/buzzwords/', router);
app.use('/reset', router);

app.get('/', function( request, response){
  request.send('Hello World!');
});






var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://&s:%s', host, port);
});