import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ShowroomService} from '../../carShowRoom/showroom.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  change: boolean;
  test: string;
  @Input() dateFromAnotherPlace: string;
  @Output() statusButton: boolean;
  @Input() parentButton: boolean;

  constructor(private service: ShowroomService) {
    this.change = false;
  }

  ngOnInit() {
    this.dateFromAnotherPlace = 'parent date';
    this.parentButton = false;
    this.statusButton = true;
    console.log('TESTTTT');
  }

  statusChildButton() {
    this.statusButton = !this.statusButton;
    this.service.getAllCar();
  }

  changeStatusButtonParent(event) {
    if (this.parentButton === event) {
      this.parentButton = !event;
    } else {
      this.parentButton = event;
    }
  }

}
