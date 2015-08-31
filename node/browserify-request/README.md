# Use Node and Browserify to talk to ArcGIS Services

to do

## Prerequisites

node/npm need to be installed
global install of `browserify` (`npm install -g browserify`)

## Development Steps

1. cd into the folder and run `npm install` to lay down its dependencies
2. call `browserify main.js -c bundle.js` to compile local source

[live sample](http://esri.github.io/developer-support/node/browserify-request/index.html)

## Features

* queries/edits attributes in an ArcGIS hosted feature service
* less than 10kb of JavaScript (loaded in a single web request)

### Extra credit

* update the Query and Edit modules to accept incoming parameters (from index.js) so that they don't need to query the DOM directly
* start using `watchify` and skip manually recompiling the source each time a change is made
* improve the sample to make it do something more *interesting* :trollface:

NOTE: Feel free to update/improve this repo!
