import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FullPageScrollingEffectsComponent} from './full-page-scrolling-effects/full-page-scrolling-effects.component';

const routes: Routes = [
  {
    path: 'full-page-scrolling', pathMatch: 'full', component: FullPageScrollingEffectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRouting { }
