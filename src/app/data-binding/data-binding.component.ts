import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {
  protected name: string = 'Leo';

  protected inputContent: string = 'Initial Input Value';

  onSave() {
    alert('Data saved successfully!');
  }
}
