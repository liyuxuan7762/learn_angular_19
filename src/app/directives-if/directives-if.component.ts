import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives-if',
  imports: [FormsModule],
  templateUrl: './directives-if.component.html',
  styleUrl: './directives-if.component.scss',
})
export class DirectivesIfComponent {
  protected isShowTerms: boolean = false;

  protected isShowTitle: boolean = true;

  protected input1: string = '';
  protected input2: string = '';

  toggleTerms(): void {
    this.isShowTerms = !this.isShowTerms;
  }
  showTitle(): void {
    this.isShowTitle = true;
  }
  hideTitle(): void {
    this.isShowTitle = false;
  }
}
