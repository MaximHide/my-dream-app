import {Directive, ElementRef, HostListener, Input, Renderer} from '@angular/core';
import {Car} from './model/car';
import {GetDataService} from './service/get-data.service';
import {GeneralComponent} from './general/general.component';

@Directive({
  selector: '[appAutosale]'
})
export class AutosaleDirective {
  @Input() carColor;
  afterClickColor;
  constructor(private el: ElementRef, private renderer: Renderer, public service: GetDataService) {
    // el.nativeElement.style.backgroundColor = 'red';
  }
    @HostListener('mouseenter') onmouseenter() {
      this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', this.carColor);
    }

  @HostListener('click') onclick() {
    if (this.carColor === 'red') {
      this.afterClickColor = 'black';
    } else if (this.carColor === 'navy') {
      this.afterClickColor = 'orange';
    } else if (this.carColor === 'green') {
      this.afterClickColor = 'red';
    } else if (this.carColor === 'yellow') {
      this.afterClickColor = 'navy';
    }
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', this.afterClickColor);
  }

  @HostListener('mouseout') onmouseout() {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'white');
  }
}
