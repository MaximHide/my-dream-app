import { Component, OnInit } from '@angular/core';
import {Car} from '../model/car';
import {Salon} from '../model/salon';
import {GetDataService} from '../service/get-data.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  cars: Car[] = [];
  salons: Salon[] = [];
  constructor(public service: GetDataService) { }

  ngOnInit() {
    this.cars = this.service.getAllCars();
    this.salons = this.service.getAllSalons();
  }

  addCarToSalon(car: Car, salon, row) {
    this.service.pushCarToSalon(car, salon);
    this.cars.splice(row, 1);
  }


}
