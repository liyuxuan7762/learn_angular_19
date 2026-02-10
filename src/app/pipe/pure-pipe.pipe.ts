import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purePipe',
  standalone: true,
  pure: true,
})
export class PurePipePipe implements PipeTransform {
  transform(value: number, ...args: any[]): number {
    console.log('Pure Pipe executed');
    return value * value;
  }
}
