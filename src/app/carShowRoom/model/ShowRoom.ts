import {Car} from './Car';


export class ShowRoom {
  id;
  adres;
  car: Array<Car> = [];


  constructor(id, adres) {
    this.id = id;
    this.adres = adres;
  }



}
