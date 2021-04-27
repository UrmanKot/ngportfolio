import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxRoutingModule } from './parallax.routing';
import { SpaceMouseMoveComponent } from './space-mouse-move/space-mouse-move.component';
import { PlanetsMouseMoveComponent } from './planets-mouse-move/planets-mouse-move.component';


@NgModule({
  declarations: [
    SpaceMouseMoveComponent,
    PlanetsMouseMoveComponent
  ],
  imports: [
    CommonModule,
    ParallaxRoutingModule
  ]
})
export class ParallaxModule { }
