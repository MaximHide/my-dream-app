import {Component, OnInit, EventEmitter, Input, Output, ViewChild} from '@angular/core';

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
  newParentField;
  additionalParentWord = 'GOOD';
  parentConst = 'newParentField is ';
  change: boolean;

  @Input() parentButtonStatusInput;
  @Output() childButtonStatus: boolean;



  constructor() {
    this.change = false;
  }

  ngOnInit() {
    this.field = 'Hello world';
    this.color = 'red';
    this.parentField = 'ParentField';
    this.newParentField = this.parentConst;
    this.additionalParentWord;
    this.childButtonStatus = true;
    this.parentButtonStatusInput = false;
  }


addGoodToNewParentField() {
this.newParentField = this.newParentField + this.additionalParentWord;
}

removeGoodFromNewParentField() {
this.newParentField = this.parentConst;
}

clickOnNewParentButton(){
if (this.newParentField.includes('Cklicked')) {
this.newParentField = this.parentConst;
}
else {
this.newParentField = this.parentConst + 'Cklicked';
}
}

clickOnParentButtonAddDataForChild() {
    this.childButtonStatus = !this.childButtonStatus;
}

  changeParentButtonStatus(event) {
    if (this.parentButtonStatusInput === event) {
      this.parentButtonStatusInput = !event;
    } else {
      this.parentButtonStatusInput = event;
    }
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
