window.onload = async () => {
    let mapContainer = document.querySelector("#mapcontainer")
    mapContainer.style.height = "600px"
// make the map
let map = L.map("mapcontainer", {
  center: [32.253460, -110.911789], // latitude, longitude in decimal degrees (find it on Google Maps with a right click!)
  zoom:12, // can be 0-22, higher is closer
  scrollWheelZoom: true // don't zoom the map on scroll
});
// add the basemap tiles
L.tileLayer(
  "https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}@2x.png" // stamen toner tiles
  // stamen toner tiles
).addTo(map);

// now add the geojson

let geojson = await fetch("assets/hotels.geojson").then(res=> res.json())
//modify the icon used for popup
let newIcon = L.icon({
    iconSize: [10, 20],
    iconUrl:"assets/hotel.svg",
})
//geojson pt, and latlng[num,num]
let markerSetFunc = (gjpt,latlng)=> {
  // substitute the newIcon as the marker
  return L.marker(latlng,{
    icon:newIcon
  })
}
L.geoJSON(geojson,{
  pointToLayer:markerSetFunc
}).bindPopup(l=> {
  return l.feature.properties.name +", "+ l.feature.properties.address
}).addTo(map)

}
