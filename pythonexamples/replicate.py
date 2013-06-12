#replicate Max's database to a Cloudant database so that you can edit and create your own
#Map-Reduce View algorithms.  note: using a built-in reduce function is highly advised (_count, _sum, _stats)

import couchdbkit

#create an account on cloudant.com, then fill in your credentials here

myserv = couchdbkit.Server('https://<username>:<password>@username.cloudant.com')

myserv.create_db('hey_listen')

myserv.replicate('https://garbados.cloudant.com/hey_listen', 'hey_listen')


