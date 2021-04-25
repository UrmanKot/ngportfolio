import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRouting } from './cards.routing';
import { CardsTransitionComponent } from './cards-transition/cards-transition.component';


@NgModule({
  declarations: [
    CardsTransitionComponent
  ],
  imports: [
    CommonModule,
    CardsRouting
  ]
})
export class CardsModule { }
