//Creating the map object
let myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 4,
});

//Creating the tile layer and adding to the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(myMap);

url =
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

//determining the color of the circles based on the depth of the earthquake
function chooseColor(depth) {
  switch (true) {
    case depth > 90:
      return "red";
    case depth > 70:
      return "orangered";
    case depth > 50:
      return "orange";
    case depth > 30:
      return "gold";
    case depth > 10:
      return "yellow";
    default:
      return "lawngreen";
  }
};

//determining the size of the circles based on the magnitude of the earthquake
function chooseRadius(mag) {
    if (mag == 0) {
        return 1;
    }
    return mag*5;
};

//Legend layer added with https://codepen.io/haakseth/pen/KQbjdO
let legend = L.control({ position: "bottomleft" });

legend.onAdd = function(map) {
  let div = L.DomUtil.create("div", "legend");
  div.innerHTML += '<i style="background: lawngreen"></i><span>-10-10</span><br>';
  div.innerHTML += '<i style="background: yellow"></i><span>10-30</span><br>';
  div.innerHTML += '<i style="background: gold"></i><span>30-50</span><br>';
  div.innerHTML += '<i style="background: orange"></i><span>50-70</span><br>';
  div.innerHTML += '<i style="background: orangered"></i><span>70-90</span><br>';
  div.innerHTML += '<i style="background: red"></i><span>90+</span><br>';

  return div;
};

legend.addTo(myMap);
//end of legend layer

d3.json(url).then(function (data) {
    //defining the mapStyle function to add color, radius, etc to the circles
  function mapStyle(feature) {
    return {
      color: "black",
      fillColor: chooseColor(feature.geometry.coordinates[2]),
      fillOpacity: 0.9,
      weight: 0.5,
      radius: chooseRadius(feature.properties.mag)
    };
  }

  L.geoJson(data, {
    //adding the circles to each marker
    pointToLayer: function (feature, coords) {
      return L.circleMarker(coords);
    },
    //adding the style of the circles
    style: mapStyle,
    //when each circle is clicked, add a popup with magnitude, location and depth of the earthquake
    onEachFeature: function(feature, layer){
        layer.bindPopup(`<h3> Magnitude: ${feature.properties.mag}</h3> <hr> <h3> Location: ${feature.properties.place} </h3> <hr> <h3> Depth: ${feature.geometry.coordinates[2]} </h3>`)
    },

  }).addTo(myMap);
});
