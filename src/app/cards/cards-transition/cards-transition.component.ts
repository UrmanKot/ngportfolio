import { Component, OnInit } from '@angular/core';
import { VanillaTilt } from '../../../assets/scripts/vanilla-tilt.js';

@Component({
  selector: 'app-cards-transition',
  templateUrl: './cards-transition.component.html',
  styleUrls: ['./cards-transition.component.scss']
})
export class CardsTransitionComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
    VanillaTilt.init(document.querySelectorAll('.cards__item'), {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 1
    });
  }

}
