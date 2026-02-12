import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OlMap } from './ol-maps/ol-map';
import { OlMarker } from './ol-maps/ol-marker';

@Component({
  selector: 'app-root',
  imports: [OlMap, OlMarker],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  coordinates = signal<[number, number]>([-0.5, 38.5]);
}
