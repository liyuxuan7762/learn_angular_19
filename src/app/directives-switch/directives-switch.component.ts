import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-switch',
  imports: [CommonModule],
  templateUrl: './directives-switch.component.html',
  styleUrl: './directives-switch.component.scss',
})
export class DirectivesSwitchComponent {
  protected grade: number = 0;

  setGrade(value: number): void {
    this.grade = value;
  }
}
