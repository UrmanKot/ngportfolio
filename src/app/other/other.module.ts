import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRouting } from './other.routing';
import { FullPageScrollingEffectsComponent } from './full-page-scrolling-effects/full-page-scrolling-effects.component';


@NgModule({
  declarations: [
    FullPageScrollingEffectsComponent
  ],
  imports: [
    CommonModule,
    OtherRouting
  ]
})
export class OtherModule { }
