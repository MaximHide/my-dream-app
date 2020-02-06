import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() dateFromAppHtml: string;
  change: boolean;
  @Input() tipe: boolean;
  @Output() changeStatusParent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.dateFromAppHtml = 'child date';
    this.change = false;
    this.tipe = true;
  }

changeStatus() {
      this.changeStatusParent.emit(true);
}

}
