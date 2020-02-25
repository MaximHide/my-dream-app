import { Component, OnInit } from '@angular/core';
import {Car} from '../../autosale/model/car';
import {GetDataService} from '../../autosale/service/get-data.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  constructor(public service: GetDataService) { }

  ngOnInit() {
    this.cars = this.service.getAllCars();
  }


  test() {
    console.log('cdcd');
  }
}
