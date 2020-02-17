import {Directive} from '@angular/core';

@Directive({
  selector: '[appShowroom]'
})
export class ShowroomDirective {
  constructor() {

  }

  // constructor(private el, private renderer: Renderer) {
  //
  //   el.nativeElement.style.backgroundColor = 'red';
  //
  //   // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  // }
}
