export class Car {
carId: number;
carModel: string;
carPrice: number;
carColor: string;


  constructor(carId: number, carModel: string, carPrice: number, carColor: string) {
    this.carId = carId;
    this.carModel = carModel;
    this.carPrice = carPrice;
    this.carColor = carColor;
  }
}
