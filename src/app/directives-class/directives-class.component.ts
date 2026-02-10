import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-class',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives-class.component.html',
  styleUrl: './directives-class.component.scss',
})
export class DirectivesClassComponent {
  protected textColor: string = '';

  setTextColor(textColor: string): void {
    this.textColor = textColor;
  }

  protected isSetTextColorBlue: boolean = false;

  protected className: string = '';

  protected fontColor: string = '';

  setFontColor(fontColor: string): void {
    this.fontColor = fontColor;
  }

  protected customClass: any = {
    color: 'cyan',
    'font-weight': 'bold',
    'font-size': '20px',
    border: '2px solid black',
  };
}
