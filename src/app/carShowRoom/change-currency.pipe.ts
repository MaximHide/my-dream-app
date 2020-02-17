import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'changeCurrency'
})
export class ChangeCurrencyPipe implements PipeTransform {

  usd = 1.2;
  eur = 1.3;
  gbp = 1.5;


  transform(value: any, currency: any): any {
    console.log('value ' + currency);

    if (currency === 'usd') {
      return value * this.usd + ' USD';
    } else if (currency === 'eur') {
      return value * this.eur + ' EUR';
    } else if (currency === 'gbp') {
      return value * this.gbp + ' GBP';
    } else {
      return value + ' UAH';
    }
  }


}
