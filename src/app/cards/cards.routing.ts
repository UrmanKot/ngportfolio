import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardsTransitionComponent} from './cards-transition/cards-transition.component';

const routes: Routes = [
  {path: 'transition', component: CardsTransitionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRouting {
}
