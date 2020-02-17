import {Injectable} from '@angular/core';
import {Car} from './model/Car';
import {ShowRoom} from './model/ShowRoom';

@Injectable({
  providedIn: 'root'
})
export class ShowroomService {
  car: Array<Car> = [];
  showroom: Array<ShowRoom> = [];

  constructor() {
    this.showroom.push(new ShowRoom('1', 'Moskovsky ave'));
    this.showroom.push(new ShowRoom('2', 'Bajana ave'));
  }

  getAllCar(): Car[] {
    this.car.push(new Car('1', 'tesla', 3000, 'red'));
    this.car.push(new Car('2', 'ferrari', 40000, 'yellow'));
    this.car.push(new Car('3', 'chevrolet', 100, 'green'));
    this.car.push(new Car('4', 'audi', 3200, 'black'));
    this.car.push(new Car('5', 'BMW', 3200, 'blue'));
    this.car.push(new Car('6', 'Zhiguli', 0, 'undifine'));
    return this.car;
  }

  setCarInSalon(car: Car, showroom) {
    for (let i = 0; i < this.showroom.length; i++) {
      if (this.showroom[i].id === showroom) {
        this.showroom[i].car.push(car);
      }
    }
  }

  getDataToShowRoom(showroom) {
    for (let i = 0; i < this.showroom.length; i++) {
      if (this.showroom[i].id === showroom) {
        console.log(this.showroom[i].car);
        return this.showroom[i];
      }
    }
  }

}
