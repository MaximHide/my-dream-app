import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  field;
  color;
  parentField;

  constructor() {
  }

  ngOnInit() {
    this.color='red';
    this.parentField = 'parentField';
  }

  getDataFromButton(data: any) {
    console.log(data);
  }

  changeColor(){
    this.color='green'
  }

  getEventFromChild(event: any){
    console.log(event);
  }

}
