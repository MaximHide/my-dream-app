import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  dataToChild = 0;
  field;
  color;
  parentField;

  constructor() {
  }

  ngOnInit() {
    this.field = 'Hello world';
    this.color = 'red';
    this.parentField = 'ParentField';
  }


  changeData() {
    this.dataToChild += 1;
  }


  getDataFromButton(data: any) {
    this.field = data;
    console.log(data);
  }


  changeColor() {
    this.color = 'green';
  }


  changeDataParentField() {
    this.parentField = 'BLABLABLA';
  }

  getEventFromChild(event: any) {
    console.log(event);
  }


}
