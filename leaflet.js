window.onload = async () => {
    let mapContainer = document.querySelector("#mapcontainer")
    mapContainer.style.height = "300px"
// make the map
let map = L.map("mapcontainer", {
  center: [32.253460, -110.911789], // latitude, longitude in decimal degrees (find it on Google Maps with a right click!)
  zoom:3, // can be 0-22, higher is closer
  scrollWheelZoom: true // don't zoom the map on scroll
});
// add the basemap tiles
L.tileLayer(
  "https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}@2x.png" // stamen toner tiles
  // stamen toner tiles
).addTo(map);

// now add the geojson

let geojson = await fetch("assets/Hospitals.geojson").then(res=> res.json())

L.geoJSON(geojson).bindPopup(l=> {
  return l.feature.properties.name
}).addTo(map)

}
