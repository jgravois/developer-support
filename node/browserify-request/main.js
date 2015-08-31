var Query = require ('./query')
var Edit = require('./edit')

var button = document.getElementById('queryButton');
button.addEventListener('click', Query);

var button = document.getElementById('editButton');
button.addEventListener('click', Edit);