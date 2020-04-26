import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'priceRange'
})
export class PriceRangePipe implements PipeTransform {

  transform(value: number, discount: number): string {
    value = value - discount;
    if (value > 100) {
      return 'Expensive';
    } else if (value > 20) {
      return 'Average';
    } else {
      return 'cheep';
    }
  }

}
