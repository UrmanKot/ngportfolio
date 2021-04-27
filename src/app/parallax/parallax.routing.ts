import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SpaceMouseMoveComponent} from './space-mouse-move/space-mouse-move.component';
import {PlanetsMouseMoveComponent} from './planets-mouse-move/planets-mouse-move.component';

const routes: Routes = [
  { path: 'space', component: SpaceMouseMoveComponent},
  { path: 'planets', component: PlanetsMouseMoveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParallaxRoutingModule { }
