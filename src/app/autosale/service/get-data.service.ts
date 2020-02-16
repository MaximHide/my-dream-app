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
  tempCommonPrice;
  commonPrice1;
  commonPrice2;
  currentCurrency = 'USD';
  currentExchangeRate = 1;
  exchangeRateUSD = 1;
  exchangeRateEUR = 2.67;
  exchangeRateGBP = 3.23;

  constructor() {
    const carOne = new Car(1, 'bmw', 1000, 'red');
    const carTwo = new Car(2, 'dodge', 4500, 'green');
    const carThree = new Car(3, 'kia', 3000, 'navy');
    const carFour = new Car(4, 'hyundai', 2000, 'yellow');
    const carFive = new Car(5, 'renault', 1000, 'navy');
    const carSix = new Car(6, 'nissan', 4000, 'yellow');
    const carSeven = new Car(7, 'chevrolet', 10000, 'red');
    const carEight = new Car(8, 'mercedes', 1200, 'green');
    const carNine = new Car(9, 'fiat', 400, 'navy');
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
    if (salonNumber === 1) {
      this.commonPrice1 = null;
    } else {
      this.commonPrice2 = null;
    }
  }

  sumPrice(salonNumber) {
    this.carsForSalon = this.getCarsForSalon(salonNumber);
    this.tempCommonPrice = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.carsForSalon.length; i++) {
      console.log(this.carsForSalon[i].carPrice.valueOf());
      this.tempCommonPrice = this.tempCommonPrice + this.carsForSalon[i].carPrice.valueOf();
      console.log(this.tempCommonPrice);
    }
    if (salonNumber === 1) {
      return this.commonPrice1 = this.tempCommonPrice;
    } else {
      return this.commonPrice2 = this.tempCommonPrice;

    }
  }

  changeCurrency(currencyName: string) {
    this.currentCurrency = currencyName;
    if (currencyName === 'EUR') {
        this.currentExchangeRate = this.exchangeRateEUR;
      } else if (currencyName === 'USD') {
      this.currentExchangeRate = this.exchangeRateUSD;
    } else  if (currencyName === 'GBP') {
      this.currentExchangeRate = this.exchangeRateGBP;
    }
}

}
