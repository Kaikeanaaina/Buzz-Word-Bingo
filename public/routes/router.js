var express = require('express');
var router = express.Router();
var buzzWordArray = [];
var total = 0;


router.get('/', function(request, response){
  response.json(buzzWordArray);
  response.end();
});

router.post( '/', function( request, response){
  //if statement, if there is no duplicate word
  if(request.body.buzzWord !== undefined && request.body.points !== undefined){
    var number = Number(request.body.points);
    var buzzwordObject = { 'buzzWord' : request.body.buzzWord,
                           'points' : number,
                           'heard' : false };



    if(buzzWordArray.length === 0){
      buzzWordArray.push(buzzwordObject);
      total +=  buzzwordObject.points;
      console.log(buzzWordArray);
      response.json({'sucess':true});
      response.end();
    } else {
      console.log(buzzWordArray.indexOf(buzzwordObject));









      hstjdytkfuylgiu;hoptfbdfygi;y86p45ut98

















      response.end();
    }

  } else {
    console.log('fail');
    console.log(buzzWordArray);
    response.json({'success': false});
    response.end();
  }
});

router.put( '/', function( request, response){
  if(request.body.buzzWord !== undefined && (request.body.heard === 'true' || request.body.heard === 'false')){
    console.log('11111111111111111111');

    for(var j = 0 ; j < buzzWordArray.length ; j++){
      if(buzzWordArray[j].buzzWord === request.body.buzzWord ){
        console.log('222222222222222222');



      } else {
        console.log('malamapono');


      }
    }







  } else {
    console.log('ahuihou');
    response.json({'success': false});
    response.end();
  }
});













module.exports = router;