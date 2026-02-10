import { DatePipe } from '@angular/common';
import { inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDatePipe',
})
export class CustomDatePipePipe implements PipeTransform {
  private datePipe = inject(DatePipe);

  transform(value: any, format: string = 'yyyy-MM-dd'): unknown {
    return this.datePipe.transform(value, format);
  }
}
