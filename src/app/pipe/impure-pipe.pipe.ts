import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe',
  standalone: true,
  pure: false,
})
export class ImpurePipePipe implements PipeTransform {
  transform(value: number, ...args: any[]): number {
    console.log('Impure Pipe executed');
    return value * value;
  }
}
