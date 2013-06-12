
#grab the first 100 1grams that start with the letters 'flo'

import couchdbkit

db = couchdbkit.Server('https://garbados.cloudant.com')['hey_listen']
#or db = couchdbkit.Server('https://<username>:<password>@username.cloudant.com')['hey_listen'] 

vr = db.view('ngrams/1gram', startkey = ['flo'], limit = 100, reduce=False)

for row in vr: 
  print row['key'], row['value']
