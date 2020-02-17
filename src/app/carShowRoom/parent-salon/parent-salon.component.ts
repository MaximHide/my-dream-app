import {Component, OnInit} from '@angular/core';
import {Car} from '../model/Car';
import {ShowroomService} from '../showroom.service';

@Component({
  selector: 'app-parent-salon',
  templateUrl: './parent-salon.component.html',
  styleUrls: ['./parent-salon.component.css']
})
export class ParentSalonComponent implements OnInit {
  car: Array<Car> = [];
  newCurrency;
  useValue = 1.2;
  eurValue = 1.1;
  gbpValue = 1.5;

  constructor(private service: ShowroomService) {
  }

  ngOnInit() {
    this.car = this.service.getAllCar();
  }

  deleteCar(row) {
    this.car.splice(row, 1);
  }

  setCarInSalon(car: Car, salon, row) {
    this.service.setCarInSalon(car, salon);
    this.car.splice(row, 1);
  }

  setCurrency(currency: string) {
    this.service.updateCurrency(currency);
  }

}
