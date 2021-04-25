import { Component, OnInit } from '@angular/core';
// import { VanillaTilt } from 'vanilla-tilt/dist/vanilla-tilt.js';

import * as VanillaTilt from 'vanilla-tilt/dist/vanilla-tilt.js';

@Component({
  selector: 'app-cards-transition',
  templateUrl: './cards-transition.component.html',
  styleUrls: ['./cards-transition.component.scss']
})
export class CardsTransitionComponent implements OnInit {

  constructor() { }

  // vanillaTilt = VanillaTilt;

  ngOnInit(): void {
    VanillaTilt.init(document.querySelectorAll('.cards__item'), {
      max: 25,
      speed: 400
    });

  }

}
