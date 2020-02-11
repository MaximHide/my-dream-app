import {Directive, ElementRef, HostListener, Renderer} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {

    el.nativeElement.style.backgroundColor = 'red';

    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  // @HostListener('click') onMouseEnter() {
  //   this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'gray');
  // }
  //
  //
  // @HostListener('dblclick') onMouseEnter2() {
  //   this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  // }
  //
  // @HostListener('mouseenter') onMouseEnter3() {
  //   this.renderer.setElementStyle(this.el.nativeElement, 'height', '200px');
  // }
  //
  // @HostListener('mouseleave') onMouseEnter4() {
  //   this.renderer.setElementStyle(this.el.nativeElement, 'height', '50px');
  // }
}
