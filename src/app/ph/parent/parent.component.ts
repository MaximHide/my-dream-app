import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentField;
  buttonColor;
  isButtonClicked: boolean;
  @Input() isButtonDisabled: boolean;

  constructor() {
  }

  ngOnInit() {
    this.parentField = 'Поле parentField із ParentComponent';
    this.buttonColor = 'green';
    this.isButtonClicked = false;
  }

  mouseEnterEventHandler() {
    this.parentField = this.parentField + ' Good';
  }

  mouseLeaveEventHandler() {
    this.parentField = this.parentField.replace(' Good', '');
  }

  buttonClickEventHandler() {
    if (!this.isButtonClicked) {
      this.parentField = this.parentField + ' Clicked';
      this.isButtonClicked=true;
    } else {
      this.parentField = this.parentField.replace(' Clicked', '');
      this.isButtonClicked=false;
    }
  }

  secondButtonClickEventHandler() {

  }
}
