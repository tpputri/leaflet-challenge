  // Get the tectonic plate data from tectonicplatesURL
  // Create two layerGroups
var earthquakes = L.layerGroup();
var tectonicplates = L.layerGroup();
 
function Add_plates(){
  var platesData = "data/plates.geojson.json";
  console.log("tp");
  
  
  d3.json(platesData).then(function(data) {
      console.log("tp",data);
   tectonicplates =    L.geoJSON(data, {
      color: "orange",
      weight: 3,
      stroke: true,
      fillOpacity:0,
      
    }).addTo(tectonicplates);
    
});
console.log(platesData);


};
 
