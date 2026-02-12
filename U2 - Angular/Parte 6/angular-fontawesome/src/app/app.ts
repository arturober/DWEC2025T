import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconComponent, FaLayersComponent, FaLayersCounterComponent } from '@fortawesome/angular-fontawesome';
import {
  faCoffee,
  faSpinner,
  faSquare,
  faStar as faStarSolid,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  imports: [FaIconComponent, FaLayersComponent, FaLayersCounterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    icons = { faCoffee, faStarSolid, faStarRegular, faSquare, faSpinner, faEnvelope };

}
