function(doc){

   if(doc.text && !doc.countryName && !doc.adminName1 && doc.geo && typeof doc["geo"]["coordinates"][0] === 'number' && typeof doc["geo"]["coordinates"][1] === 'number')    
    emit( doc._id, 1);          

}