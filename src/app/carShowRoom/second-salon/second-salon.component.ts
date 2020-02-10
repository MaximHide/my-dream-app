import {Component, OnInit} from '@angular/core';
import {Car} from '../model/Car';
import {ShowroomService} from '../showroom.service';

@Component({
  selector: 'app-second-salon',
  templateUrl: './second-salon.component.html',
  styleUrls: ['./second-salon.component.css']
})
export class SecondSalonComponent implements OnInit {
  car: Array<Car> = [];
  allAmount ;

  constructor(private service: ShowroomService) {
  }

  ngOnInit() {
    this.car = this.service.getDataToShowRoom('2').car;

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


