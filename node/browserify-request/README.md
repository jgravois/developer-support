# Use Node and Browserify to talk to ArcGIS Services

to do

## Prerequisites

node/npm need to be installed
global install of `browserify` (`npm install -g browserify`)

## Development Steps

1. cd into the folder and run `npm install` to lay down its dependencies
2. browserify index.js -c bundle.js to compile local source

[live sample](http://esri.github.io/developer-support/node/browserify-request/index.html)

## Features

* query/edit an ArcGIS Hosted Feature Service with less than 10kb of JavaScript loaded in a single web request

## Extra credit

* update the Query and Edit modules to accept incoming parameters from index.js so that they don't need to query the DOM
* start using `watchify` so that you don't have to manually recompile the source each time you make a change
* improve the sample to make it do something more interesting :trollface:

NOTE: Feel free to update/improve this repo!
