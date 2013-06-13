function(doc){

  if(doc.text && doc.countryName && doc.adminName1){

    var ngram = require('lib/ngram.js');

    //do 1 to 5-gram
    for(var i = 1; i <= 5; i++ ) {

      var results = ngram.ngram(i,doc);

      for(var k = 0; k < results.length; k++)
      
        emit( [doc.countryName, doc.adminName1], [results[k][0],results[k][1]] );    
    }

  }
}