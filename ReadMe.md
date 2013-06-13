Example scripts for the Twitter Ngram analysis hosted by Cloudant Labs
=================

This will serve as documentation for my initial tests of the Twitter Ngram analysis. 

Python Examples
=============

CouchApps
===========

Given my experience already with couchapps, it was easiest for me to use the python couchapp tool to manage editing and uploading my map-reduce views. To get started, I replicated Max's database to my own hey_listen database on my local couchdb server. 

What I want to do is to find a way to convert the long/lat to political geography (country/~state). I've decided to use the geonames.org service. (I thought about using google.) 

Here's a play-by-play of what I'm doing:

* pip install couchapp
* couchapp clone https://gadamc:yomama@gadamc.cloudant.com/hey_listen/_design/ngrams
* mkdir geogram
* edit _id to _design/geogram
* delete 1/2/3/4/5grams/text map-reduce views
* create new map (nopoliticalinfo) 

* use geoconvert.py
    * this takes each document from nopoliticalinfo, uses the geonames.org service to reversegeocode and saves back to the DB via bulk save operation


* create new map based on Max's original 1/2/3/4/5grams, called bigindexgeo
    * using support for CommonJS. 
    * indexes n-grams and i







