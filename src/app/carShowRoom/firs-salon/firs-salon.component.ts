import {Component, OnInit} from '@angular/core';
import {Car} from '../model/Car';
import {ShowroomService} from '../showroom.service';

@Component({
  selector: 'app-firs-salon',
  templateUrl: './firs-salon.component.html',
  styleUrls: ['./firs-salon.component.css']
})
export class FirsSalonComponent implements OnInit {

  car: Array<Car> = [];

  constructor(private service: ShowroomService) {
  }

  ngOnInit() {
    this.car = this.service.getDataToShowRoom('1').car;
  }

  getAllCardInSalon() {
    this.car = this.service.getDataToShowRoom('1').car;
    console.log(this.service.getDataToShowRoom('1'));

  }

}
