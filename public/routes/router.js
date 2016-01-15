var express = require('express');
var router = express.Router();
var buzzWordArray = [{'buzzWord':'kai', 'points':3, 'heard':'true'}];
var checker = true;
var total = 0;



router.get('/', function(request, response){
  response.json(buzzWordArray);
  response.end();
});

router.post( '/', function( request, response){
  checker = true;
  //if statement, if there is no duplicate word
  if(request.body.buzzWord !== undefined && request.body.points !== undefined){
    var number = Number(request.body.points);
    var buzzWordObject = { 'buzzWord' : request.body.buzzWord,
                           'points' : number,
                           'heard' : false };
    if(buzzWordArray.length === 0){
      buzzWordArray.push(buzzWordObject);
      total += buzzWordObject.points;
      buzzWordArray[0].heard = true;
    }

    for(var j = 0 ; j < buzzWordArray.length ; j++){
      if(buzzWordArray[j].buzzWord === request.body.buzzWord){
        checker=false;
      }
    }

    if(checker === true){
      buzzWordObject.heard = true;
      buzzWordArray.push(buzzWordObject);
      total += buzzWordObject.points;
      response.json({'success': true});
    } else {
      response.json({'success': false});
      response.end();
    }

    //response.end();

  } else {
    console.log('fail');
    console.log(buzzWordArray);
    response.json({'success': false});
    response.end();
  }
  console.log(total + ' this is the total');
  console.log(buzzWordArray);
  console.log('=================================');
  response.end();
});

router.put( '/', function( request, response){
  checker = false;
  var changeBuzzWord = null;
  var number = Number(request.body.points);
  //if statement, if there is no duplicate word
  if(request.body.buzzWord !== undefined &&
     request.body.newBuzzWord !== undefined &&
     request.body.heard === 'true' &&
     request.body.points !== undefined){

    for(var k = 0 ; k < buzzWordArray.length ; k++){
      if(buzzWordArray[k].buzzWord === request.body.buzzWord){
        checker = true;
        buzzWordArray[k].buzzWord = request.body.newBuzzWord;
        total -= buzzWordArray[k].points;
        buzzWordArray[k].points = number;
        total += buzzWordArray[k].points;
      }
    }

    if(checker === false){
      console.log('fail');
      console.log('these are no buzzWords found');
      response.json({'success': false});
      response.end();
    }


  } else {
    console.log('fail');
    console.log('the body needs to have buzzWord: "string", newBuzzWord: "string", heard: true, points: number');
    response.json({'success': false});
    response.end();
  }

  console.log(buzzWordArray);
  response.json({"success": true, 'newScore': total});
  response.end();
});

router.delete( '/', function( request, response){
  if(request.body.buzzWord !== undefined){
  checker =false;

  for(var p = 0 ; p < buzzWordArray.length ; p++){
    if(buzzWordArray[p].buzzWord === request.body.buzzWord){
      buzzWordArray.splice(p,1);
      response.json({'success': true});
      response.end();
    }
  }

  console.log(buzzWordArray+ ' this is the array');
  response.end();
  } else{
    console.log('fail');
    console.log('needs a buzzWord in the body');
    response.json({'success': false});
    response.end();
  }

});











module.exports = router;