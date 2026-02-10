import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobilePipe',
})
export class MobilePipePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value === null || value === undefined || value === '') {
      return 'N/A';
    }
    return value ? '+86 ' + value : value;
  }
}
