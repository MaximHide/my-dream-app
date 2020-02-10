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
  allAmount;
  constructor(private service: ShowroomService) {
  }

  ngOnInit() {
    this.car = this.service.getDataToShowRoom('1').car;
  }


  getTotalAmount() {
    this.allAmount = 0;
    for (let i = 0; i < this.car.length; i++) {
      console.log('from car + ' + this.car[i].amount);
      console.log('AMOUNT + ' + this.allAmount);
      this.allAmount = this.allAmount + this.car[i].amount;
    }

    return this.allAmount;
  }

}
