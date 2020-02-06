import {Component, OnInit} from '@angular/core';
import {GeneralService} from '../service/general.service';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  constructor(public service: GeneralService) {
  }

  ngOnInit() {

    this.service.eventOfButton.subscribe(result => {
      console.log('log og ChildOneComponent button was clicked');
      console.log(result);
    });
  }

}
