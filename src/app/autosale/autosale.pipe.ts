import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autosale'
})
export class AutosalePipe implements PipeTransform {

  transform(value: number, currencyName: string, currentExchangeRate: number): any {
    if (1 === 1) {
      return value * currentExchangeRate + ' ' + currencyName;
    }
  }
}
