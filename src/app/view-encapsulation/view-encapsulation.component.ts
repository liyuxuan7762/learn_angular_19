import { Component, ViewEncapsulation } from '@angular/core';
import { Test1Component } from '../test1/test1.component';

@Component({
  selector: 'app-view-encapsulation',
  imports: [Test1Component],
  templateUrl: './view-encapsulation.component.html',
  styleUrls: ['./view-encapsulation.component.scss'],
})
export class ViewEncapsulationComponent {}
