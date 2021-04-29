import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Swiper from 'swiper';

declare const Parallax: any;

@Component({
  selector: 'app-planets-mouse-move',
  templateUrl: './planets-mouse-move.component.html',
  styleUrls: ['./planets-mouse-move.component.scss']
})
export class PlanetsMouseMoveComponent implements OnInit {
  @ViewChild('scene', {static: true}) sceneRef: ElementRef;

  keys = [
    'Mercury',
    'Venus',
    'Earth',
    'Earth',
  ];

  constructor() { }

  ngOnInit(): void {
    const scene = this.sceneRef.nativeElement;
    const parallax = new Parallax(scene);

    const slider = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 150,
      centeredSlides: true,
      mousewheel: true,
      pagination: {
        el: '.planet-links',
        clickable: true,
        renderBullet: function(index, className) {
          return '<div class="' + className + '">' + this.keys[index + 1] + '</div>';
        }
      },
    });


  }

}
