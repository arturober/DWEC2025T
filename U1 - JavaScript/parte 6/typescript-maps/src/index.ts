import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";
import { MapService } from "./classes/map.service";
import { MyGeolocation } from "./classes/my-geolocation";
import { Point } from "ol/geom";
import type { GeolocationResult } from "./interfaces/geolocation-result";

async function showMap() {
  const coords = await MyGeolocation.getLocation();
  const mapService = new MapService(coords, "map", 16);
  const marker = mapService.createMarker(coords);

  const autocomplete = new GeocoderAutocomplete(
    document.getElementById("autocomplete")!,
    "42c7710f83bc41698b841fec7a3b5d2d",
    { lang: "es", debounceDelay: 600 }
  );

  autocomplete.on("select", (location: GeolocationResult) => {
    marker.setGeometry(new Point(location.geometry.coordinates));
    mapService.view.setCenter(location.geometry.coordinates);
  });
}

showMap().catch(console.error);