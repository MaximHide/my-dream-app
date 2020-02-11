import {Injectable} from '@angular/core';
import {Car} from '../model/car';
import {Salon} from '../model/salon';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  listOfCars: Car[] = [];
  listOfSalons: Salon[] = [];
  currentCar: Car[];
  carsForSalon: Car[] = [];

  constructor() {
    const carOne = new Car(1, 'bmw', 1000, 'red');
    const carTwo = new Car(2, 'dodge', 4500, 'green');
    const carThree = new Car(3, 'kia', 3000, 'navy');
    const carFour = new Car(4, 'hyundai', 2000, 'red');
    const carFive = new Car(5, 'renault', 1000, 'white');
    const carSix = new Car(6, 'nissan', 4000, 'black');
    const carSeven = new Car(7, 'chevrolet', 10000, 'red');
    const carEight = new Car(8, 'mercedes', 1200, 'pink');
    const carNine = new Car(9, 'fiat', 400, 'yellow');
    this.listOfCars.push(carOne);
    this.listOfCars.push(carTwo);
    this.listOfCars.push(carThree);
    this.listOfCars.push(carFour);
    this.listOfCars.push(carFive);
    this.listOfCars.push(carSix);
    this.listOfCars.push(carSeven);
    this.listOfCars.push(carEight);
    this.listOfCars.push(carNine);
    const salonFirst = new Salon(1, 'Dnipro');
    const salonSecond = new Salon(2, 'Kherson');
    this.listOfSalons.push(salonFirst);
    this.listOfSalons.push(salonSecond);

  }

  getAllCars(): Car[] {
    return this.listOfCars;
  }

  getAllSalons(): Salon[] {
    return this.listOfSalons;
  }


  pushCarToSalon(car: Car, salonNumber) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listOfSalons.length; i++) {
      if (this.listOfSalons[i].salonId === salonNumber) {
        this.listOfSalons[i].carName.push(car);
      }
    }
  }

  getCarsForSalon(salonNumber) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.listOfSalons.length; i++) {
      if (this.listOfSalons[i].salonId === salonNumber) {
        return this.listOfSalons[i].carName;
      }
    }
  }


  returnCars(salonNumber) {
    this.carsForSalon = this.getCarsForSalon(salonNumber);
    for (let i = 0; i < this.carsForSalon.length; i++) {
      this.currentCar = this.carsForSalon.splice(i, 1);
      i--;
      this.listOfCars.push(this.currentCar[0]);

    }
  }

}
