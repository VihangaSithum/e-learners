import { AfterViewInit, Component } from '@angular/core';
import * as $ from 'jquery';

declare global {
  interface JQuery {
    owlCarousel(options?: any): JQuery;
  }
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
}
