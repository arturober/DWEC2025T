import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OlMap } from './ol-maps/ol-map';
import { OlMarker } from './ol-maps/ol-marker';
import { GaAutocomplete } from './ol-maps/ga-autocomplete';
import { SearchResult } from './ol-maps/search-result';

@Component({
  selector: 'app-root',
  imports: [OlMap, OlMarker, GaAutocomplete],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  coordinates = signal<[number, number]>([-0.5, 38.5]);

  changePlace(result: SearchResult) {
    this.coordinates.set(result.coordinates);
    console.log(result.address); // Habría que guardarlo
  }
}
