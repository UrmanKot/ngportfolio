import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

declare const Parallax: any;

@Component({
  selector: 'app-space-mouse-move',
  templateUrl: './space-mouse-move.component.html',
  styleUrls: ['./space-mouse-move.component.scss']
})
export class SpaceMouseMoveComponent implements OnInit {
  @ViewChild('scene', {static: true}) sceneRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
    const scene = this.sceneRef.nativeElement;
    const parallax = new Parallax(scene);
  }

}
