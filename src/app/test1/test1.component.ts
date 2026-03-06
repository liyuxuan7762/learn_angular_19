import { Component } from '@angular/core';
import { Test2Component } from '../test2/test2.component';

@Component({
  selector: 'app-test1',
  imports: [Test2Component],
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss'],
})
export class Test1Component {}
