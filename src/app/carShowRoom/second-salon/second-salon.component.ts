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
  allAmount: number;

  constructor(private service: ShowroomService) {
  }

  ngOnInit() {
    this.car = this.service.getDataToShowRoom('2').car;

  }

  getTotalAmount() {
    for (let i = 0; i < this.car.length; i++) {
      console.log(this.car[i].amount);
      this.allAmount = this.allAmount + this.car[i].amount;
    }
  }
}


