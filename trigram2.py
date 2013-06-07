
#grab the first 100 3grams that start with ['flo','ri',''

import couchdbkit

db = couchdbkit.Server('https://garbados.cloudant.com')['hey_listen']
#or db = couchdbkit.Server('https://<username>:<password>@username.cloudant.com')['hey_listen'] 

vr = db.view('ngrams/3gram', startkey = ['Flo', 'rida', ''], endkey=['Flo\ufff0', '', ''], reduce=False, include_docs=True)

for row in vr: 
  print row['key'], row['doc']['geo']['coordinates']
