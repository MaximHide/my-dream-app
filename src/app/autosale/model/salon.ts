import {Car} from './car';

export class Salon {
salonId: number;
salonAddress: string;
carName: Car[] = [];


  constructor(salonId: number, salonAddress: string) {
    this.salonId = salonId;
    this.salonAddress = salonAddress;
  }

}

