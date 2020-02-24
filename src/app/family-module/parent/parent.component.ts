import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-family-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  field;
  color;
  parentField;
  constructor() { }

  ngOnInit() {
    this.color = 'red';
    this.parentField = 'Parent Field';
  }


  getDataFromButton(data: any) {
    this.field = data;
    console.log(data);
  }


  changeColor() {
    this.color = 'green';
  }


  changeDataParentField() {
this.parentField = 'New text';
  }

  getEventFromChild(event: any) {
    console.log(event);
  }

}
