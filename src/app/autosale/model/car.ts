export class Car {
carId: number;
carModel: string;
carPrice: number;
carColour: string;


  constructor(carId: number, carModel: string, carPrice: number, carColour: string) {
    this.carId = carId;
    this.carModel = carModel;
    this.carPrice = carPrice;
    this.carColour = carColour;
  }
}
