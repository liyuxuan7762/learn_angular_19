import {
  ChangeDetectionStrategy,
  Component,
  effect,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalComponent {
  protected counter: WritableSignal<number> = signal(0);

  protected stardandCounter: number = 0;

  constructor() {
    console.log('SignalComponent initialized');
    effect(() => {
      console.log('Counter value changed to:', this.counter());
    });
    console.log('finshed constructor');
  }

  onClick() {
    this.counter.update((value) => value + 1);
  }
}
