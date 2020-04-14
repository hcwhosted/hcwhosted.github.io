window.onload = async () => {
  let mapContainer = document.querySelector("#mapcontainer")
  mapContainer.style.height = "600px"
  // make the map
  let map = L.map("mapcontainer", {
    center: [32.253460, -110.911789], // latitude, longitude in decimal degrees (find it on Google Maps with a right click!)
    zoom: 12, // can be 0-22, higher is closer
    scrollWheelZoom: true // don't zoom the map on scroll
  });
  // add the basemap tiles
  L.tileLayer(
    "https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}@2x.png" // stamen toner tiles
    // stamen toner tiles
  ).addTo(map);

  // now add the geojson

  let geojson = await fetch("assets/hotels_updated.geojson").then(res => res.json())
  //modify the icon used for popup
  let newIcon = L.icon({
    iconSize: [10, 20],
    iconUrl: "assets/hotel.svg",
  })
  L.geoJSON(geojson, {
    pointToLayer: (geoJsonPt, latlng) => {
      //geojson pt, and latlng[num,num]
      return L.marker(latlng, {
        icon: newIcon
      })
    }
  }).bindPopup(l => {
    return l.feature.properties.name + ", " + l.feature.properties.address
  }).addTo(map)


  // perform the same thing for the hospitals in the assets folder
  let hospitalsGeojson = await fetch("assets/Hospitals.geojson").then(res => res.json())

  let hospitalIcon = L.icon({
    iconSize: [20, 20],
    iconUrl: "assets/hospital_icon.svg"
  })

  L.geoJSON(hospitalsGeojson, {
    pointToLayer: (geoJsonPt, latlng) => {
      return L.marker(latlng, {
        icon: hospitalIcon
      })
    }
  }).bindPopup(l => {
    return l.feature.properties.name
  }).addTo(map)
}