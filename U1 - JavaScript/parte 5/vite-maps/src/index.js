import { MyGeolocation } from "./my-geolocation";
import { View, Map, Feature } from "ol";
import { OSM, Vector as VectorSource } from "ol/source";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { useGeographic } from "ol/proj";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style.js";
import { Point } from "ol/geom";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";

async function showMap() {
  const coords = await MyGeolocation.getLocation();
  const coordArray = [coords.longitude, coords.latitude];

  useGeographic();

  const view = new View({
    center: coordArray,
    zoom: 16,
  });

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: "map",
    view: view,
  });

  const vectorLayer = new VectorLayer({
    map: map,
    source: new VectorSource({
      features: [],
    }),
  });

  // Creamos marcador centrado en misma posición que el mapa
  const marker = new Feature({ geometry: new Point(coordArray) });
  marker.setStyle(
    new Style({
      image: new CircleStyle({
        radius: 9,
        fill: new Fill({
          color: "blue",
        }),
        stroke: new Stroke({
          color: "white",
          width: 3,
        }),
      }),
    })
  );

  vectorLayer.getSource().addFeature(marker); // Añadimos marcador al mapa

  const autocomplete = new GeocoderAutocomplete(
    document.getElementById("autocomplete"),
    "42c7710f83bc41698b841fec7a3b5d2d",
    { lang: "es", debounceDelay: 600 }
  );

  autocomplete.on("select", (location) => {
    console.log(location);
    marker.setGeometry(new Point(location.geometry.coordinates));
    view.setCenter(location.geometry.coordinates);
  });
}

showMap();
