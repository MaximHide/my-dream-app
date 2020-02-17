import {Directive, ElementRef, HostListener, Input, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[appGridDirective]'
})
export class GridDirectiveDirective {

  @Input('color') oldColor;

  constructor(private el: ElementRef, private render: Renderer2) {
  }

  ngOnInit(): void {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', this.oldColor);
  }
  @HostListener('mouseenter') changeColor() {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', 'white');
  }

  @HostListener('mouseleave') changeColorAfter() {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', this.oldColor);
  }



}
