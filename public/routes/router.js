var express = require('express');
var router = express.Router();
var buzzWordArray = [];
var total = 0;


router.get('/', function(request, response){
  response.json(buzzWordArray);
  response.end();
});

router.post( '/', function( request, response){
  var number = Number(request.body.points);
  var buzzwordObject = { 'buzzWord' : request.body.buzzWord,
                         'points' : number};

  buzzWordArray.push(buzzwordObject);
  total += number;
  response.json({'sucess':true});

  // i don't know how to return false if it's unsuccessful

  response.end();
});

router.put( '/', function( request, response){

});













module.exports = router;