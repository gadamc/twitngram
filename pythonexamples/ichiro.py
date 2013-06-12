

import couchdbkit

db = couchdbkit.Server('https://garbados.cloudant.com')['hey_listen']
#or db = couchdbkit.Server('https://<username>:<password>@username.cloudant.com')['hey_listen'] 

vr = db.view('ngrams/1gram', key = ['Ichiro'])

print vr.first()['value']

vr = db.view('ngrams/1gram', key = ['Ichiro'], limit = 100, reduce=False, include_docs=True)

for row in vr: 
  print row['key'], row['doc']['geo']['coordinates'], row['value']
