import {Component, OnInit} from '@angular/core';
import {GeneralService} from '../service/general.service';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  constructor(public service: GeneralService) {
  }

  ngOnInit() {
    this.service.eventOfButton.subscribe(result => {
      console.log('log og ChildTwoComponent button was clicked');
      console.log(result);
    });
  }

}
