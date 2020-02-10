import { Component, OnInit } from '@angular/core';
import {Car} from '../model/car';
import {Salon} from '../model/salon';
import {GetDataService} from '../service/get-data.service';

@Component({
  selector: 'app-salon-first',
  templateUrl: './salon-first.component.html',
  styleUrls: ['./salon-first.component.css']
})
export class SalonFirstComponent implements OnInit {
  salons: Salon[] = [];



  constructor(public service: GetDataService) { }

  ngOnInit() {
    this.salons = this.service.getAllSalons();
  }

}
