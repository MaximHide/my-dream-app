import { Component, OnInit } from '@angular/core';
import {Salon} from '../model/salon';
import {Car} from '../model/car';
import {GetDataService} from '../service/get-data.service';

@Component({
  selector: 'app-salon-second',
  templateUrl: './salon-second.component.html',
  styleUrls: ['./salon-second.component.css']
})
export class SalonSecondComponent implements OnInit {
  carName: Car[] = [];
  constructor(public service: GetDataService) { }

  ngOnInit() {
    this.carName = this.service.getCarsForSalon(2);
  }

  returnCars(salon) {
    this.service.returnCars(salon);
  }
}
