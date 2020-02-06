import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  childField;
  isButtonClicked: boolean;
  @Output() childBooleanEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() isButtonDisabled;

  constructor() {
  }

  ngOnInit() {
    this.childField = 'Поле childField із ChildComponent';
    this.isButtonDisabled = true;
    this.isButtonClicked = false;
  }

  eventInChild() {
    this.childBooleanEventEmitter.emit(true);
  }

  mouseEnterEventHandler() {
    this.childField = this.childField + ' Good';
  }

  mouseLeaveEventHandler() {
    this.childField = this.childField.replace(' Good', '');
  }

  buttonClickEventHandler() {
    if (!this.isButtonClicked) {
      this.childField = this.childField + ' Clicked';
      this.isButtonClicked=true;
    } else {
      this.childField = this.childField.replace(' Clicked', '');
      this.isButtonClicked=false;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.toString());
  }
}
