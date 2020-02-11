import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return 0;
  }

  // transform(value: any, ...args: any[]): any {
  //   if (value.name === 'Amigo') {
  //     return value;
  // }

  // transform(value: any, ...args: any[]): any {
  //   return value > 25;
  // }

  // transform(value: any, ...args: any[]): any {
  //   if (value === 18) {
  //     return 100;
  //   } else {
  //     return true;
  //   }
  // }

  // transform(value: any, ...args: any[]): any {
  //   return value + 1;
  // }

  // transform(items: any[], filter: any): any {
  //   if (!items || !filter) {
  //     return items;
  //   }
  //   return items.filter(item => item.name.indexOf(filter) !== -1);
  // }

}
