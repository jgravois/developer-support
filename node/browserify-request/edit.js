// var request = require('request')
var request = require('browser-request')

module.exports = function Edit () {
  var attributeUpdate = [{ "attributes":{ OBJECTID: 1, NAME: document.getElementById('featureAttribute').value }}]
  
  request.post({
    url: 'http://services1.arcgis.com/1vWZ00DKS28MdI5r/arcgis/rest/services/ConnectData/FeatureServer/0/applyEdits',
    json:true,
    form:{
      f:'json',
      updates: JSON.stringify(attributeUpdate)
    }
  }, function(error, response, body){
    if (!error && response.statusCode == 200) {
      document.getElementById("results").innerHTML = 'edit successful'
      document.getElementById("featureAttribute").value = null
    }
  })
}