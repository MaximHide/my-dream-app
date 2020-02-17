import {Directive, ElementRef, HostListener, Input, OnInit, Renderer} from '@angular/core';
import {GetDataService} from '../autosale/service/get-data.service';

@Directive({
  selector: '[appColorGrid]'
})
export class ColorGridDirective implements OnInit{
@Input('colorOfGrid') color;
  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('mouseenter') onmouseenter() {
    this.renderer.setElementStyle(this.el.nativeElement, 'background-color', null);
  }

  @HostListener('mouseout') onmouseout() {
    this.renderer.setElementStyle(this.el.nativeElement, 'background-color', this.color);
  }

  ngOnInit(): void {
    this.renderer.setElementStyle(this.el.nativeElement, 'background-color', this.color);
  }
}
