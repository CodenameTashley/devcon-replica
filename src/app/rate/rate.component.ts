import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  speakerRating = 0;
  hasRated = false;

  @Input() speaker: string;
  @Output() rated = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }


  rateTheSpeaker() {
    this.rated.emit(this.speakerRating);
    this.hasRated = true;
  }

}
