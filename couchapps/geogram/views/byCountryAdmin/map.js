function(doc){

  if(doc.text && doc.countryName && doc.adminName1){

    var ngram = require('views/lib/ngram').ngram;
    
    //do 1 to 5-gram
    for(var i = 1; i <= 5; i++ ) {

      var results = ngram(doc, i);

      for(var k = 0; k < results.length; k++)
      
        emit( [doc.countryName, doc.adminName1, results[k]], doc.text );    
    }

  }
}