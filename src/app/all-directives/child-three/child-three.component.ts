import {Component, OnInit} from '@angular/core';
import {GeneralService} from '../service/general.service';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit {

  constructor(public service: GeneralService) {
  }

  ngOnInit() {

    this.service.eventOfButton.subscribe(result => {
      console.log('log og ChildThreeComponent button was clicked');
      console.log(result);
    });
  }

}
