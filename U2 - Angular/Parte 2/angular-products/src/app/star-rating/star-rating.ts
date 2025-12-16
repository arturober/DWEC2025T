import { Component, linkedSignal, model } from '@angular/core';

@Component({
  selector: 'star-rating',
  imports: [],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
})
export class StarRating {
  rating = model.required<number>();
  auxRating = linkedSignal(() => this.rating());
}
