import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  change: boolean;
  @Input() dateFromAnotherPlace: string;
  @Output() statusButton: boolean;
  @Input() parentButton: boolean;

  constructor() {
    this.change = false;
  }

  ngOnInit() {
    this.dateFromAnotherPlace = 'parent date';
    this.parentButton = false;
    this.statusButton = true;
  }

  statusChildButton() {
    this.statusButton = !this.statusButton;
  }

  changeStatusButtonParent(event) {
    if (this.parentButton === event) {
      this.parentButton = !event;
    } else {
      this.parentButton = event;
    }
  }

}
