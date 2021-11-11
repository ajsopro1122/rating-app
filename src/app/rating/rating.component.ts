import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() hero: any

  constructor() { }

  currentRate = 0;

  ngOnInit(): void {
    console.warn(this.hero)
  }



}
