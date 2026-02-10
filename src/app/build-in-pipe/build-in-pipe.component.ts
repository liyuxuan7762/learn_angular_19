import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MobilePipePipe } from '../pipe/mobile-pipe.pipe';
import { CustomDatePipePipe } from '../pipe/custom-date-pipe.pipe';
import { PurePipePipe } from '../pipe/pure-pipe.pipe';
import { ImpurePipePipe } from '../pipe/impure-pipe.pipe';

@Component({
  selector: 'app-build-in-pipe',
  imports: [
    CommonModule,
    MobilePipePipe,
    CustomDatePipePipe,
    PurePipePipe,
    ImpurePipePipe,
  ],
  templateUrl: './build-in-pipe.component.html',
  styleUrl: './build-in-pipe.component.scss',
})
export class BuildInPipeComponent {
  protected testStr: string = 'angular built-in pipe example';
  protected arrStr: string = '0123456789';
  protected jsonObj: any = {
    name: 'Angular',
    version: '15',
    type: 'Framework',
  };

  protected today: Date = new Date();

  protected observeableStrArr: Observable<string[]> = of([
    'Angular',
    'React',
    'Vue',
  ]);

  test() {
    console.log('test');
  }
}
