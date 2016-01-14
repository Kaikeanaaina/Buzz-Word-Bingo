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
                           'heard' : true };

    if(buzzWordArray.length === 0){
      buzzWordArray.push(buzzwordObject);
      total +=  buzzwordObject.points;
      console.log(buzzWordArray);
      response.json({'sucess':true});
      response.end();
    } else {
    for(var i = 0 ; i < buzzWordArray.length ; i++){

      if(buzzWordArray[i].buzzWord !== request.body.buzzWord){
        buzzWordArray.push(buzzwordObject);
        total +=  buzzwordObject.points;
        console.log(buzzWordArray);
        console.log(total);
        //console.log(buzzWordArray);
        response.json({'sucess':true});

        return response.end();
      } else {
        console.log('fail');
        console.log(buzzWordArray);
        response.json({'success': false});
        response.end();
      }
    }
  }

  } else {
    console.log('fail');
    console.log(buzzWordArray);
    response.json({'success': false});
    response.end();
  }



});

router.put( '/', function( request, response){

});













module.exports = router;