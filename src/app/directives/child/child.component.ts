import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childField;

  @Output() childOutput: EventEmitter<boolean> = new EventEmitter<boolean>();


  // OnChanges
  // @Input() dataFromParent;

  constructor() {
  }

  ngOnInit() {
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   let a = changes.dataFromParent;
  //   console.log(a);
  // }


  eventInChildOccured() {
    // this.childOutput.emit(true);
  }

}
