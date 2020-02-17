import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnDestroy {
  dataToChild = 0;
  field;
  color;
  parentField;
  sybscribtion: Subscription;

  constructor(private activetedRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.field = 'Hello world';
    this.color = 'red';
    this.parentField = 'ParentField';

    this.sybscribtion = this.activetedRouter.queryParams.subscribe(result => {
      console.log('resultParams');
      console.log(result);
    });

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

  ngOnDestroy(): void {
    console.log('In On destroy');
    this.sybscribtion.unsubscribe();
  }



}
