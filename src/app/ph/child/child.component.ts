import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childField;
  @Output() childOutputField: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    this.childField='Поле childField із ChildComponent'
  }

  eventInChildOccured(){
    this.childOutputField.emit(true);
  }

}
