import {Directive, ElementRef, HostListener, Input, Renderer, Renderer2} from '@angular/core';

@Directive({
  selector: '[appShowroom]'
})
export class ShowroomDirective {
  @Input() color;
  oldColor;


  constructor(private el: ElementRef, private render: Renderer2) {
    this.oldColor = this.color;
  }


  @HostListener('mouseenter') inRow() {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', this.color);
  }

  @HostListener('mouseleave') outRow() {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
  }

  @HostListener('click') changeColor() {

    console.log('color = ' + this.color);
    switch (this.color) {
      case('red'):
        this.color = 'black';
        break;
      case('blue'):
        this.color = 'orange';
        break;
      case ('green'):
        this.color = 'red';
        break;
      case('yellow'):
        this.color = 'blue';
        break;
    }
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', this.color);
  }

}
