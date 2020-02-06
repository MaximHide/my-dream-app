import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

newChildField;
additionalChildWord = 'GOOD';
childConst = 'newChildField is ';

 // @Input() childField;
  change: boolean;
  @Input() childButtonStatus: boolean;
  @Output() parentButtonStatus = new EventEmitter();


  // OnChanges
  // @Input() dataFromParent;

  constructor() {
  }

  ngOnInit() {
this.childConst;
this.newChildField = this.childConst;
this.additionalChildWord;
this.childButtonStatus = true;
  }


addGoodToNewChildField() {
this.newChildField = this.newChildField + this.additionalChildWord;
}

removeGoodFromNewChildField() {
this.newChildField = this.childConst;
}


clickOnNewChildButton() {
if (this.newChildField.includes('Cklicked')) {
this.newChildField = this.childConst;
}
else {
this.newChildField = this.childConst + 'Cklicked';
}
}

changeParentButtonStatus() {
      this.parentButtonStatus.emit(true);

}


  getEventFromParent(event: any) {
    console.log(event);
  }



  // ngOnChanges(changes: SimpleChanges) {
  //   let a = changes.dataFromParent;
  //   console.log(a);
  // }


  eventInChildOccured() {
    // this.childOutput.emit(true);
  }

}
