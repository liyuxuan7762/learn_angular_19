import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-reuseable',
  imports: [],
  templateUrl: './reuseable.component.html',
  styleUrl: './reuseable.component.scss',
})
export class ReuseableComponent {
  @Input() message: string = 'Default Message';
}
