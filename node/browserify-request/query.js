// var request = require('request')
var request = require('browser-request')

module.exports = function Query () {
  var serviceUrl = document.getElementById("featureServiceUrl").value + '/query'
  var queryParams = {    
    where: 'OBJECTID=' + document.getElementById("featureObjectID").value,
    outFields: document.getElementById("attributeFieldname").value,
    returnGeometry: false,
    f:'json'
  };
  
  request({ url: serviceUrl, qs: queryParams }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var output = JSON.parse(response.body)
      
      document.getElementById("results").innerHTML = 'query successful'
      document.getElementById("featureAttribute").value = output.features[0].attributes.NAME
    }
  })
}