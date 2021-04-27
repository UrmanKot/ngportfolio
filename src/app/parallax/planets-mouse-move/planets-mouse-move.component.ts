import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

declare const Parallax: any;

@Component({
  selector: 'app-planets-mouse-move',
  templateUrl: './planets-mouse-move.component.html',
  styleUrls: ['./planets-mouse-move.component.scss']
})
export class PlanetsMouseMoveComponent implements OnInit {
  @ViewChild('scene', {static: true}) sceneRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const scene = this.sceneRef.nativeElement;
    const parallax = new Parallax(scene);
  }

}
