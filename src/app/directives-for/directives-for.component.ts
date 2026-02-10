import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-directives-for',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives-for.component.html',
  styleUrl: './directives-for.component.scss',
})
export class DirectivesForComponent {
  protected employees: any[] = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      email: 'johndoe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Product Manager',
      email: 'janesmith@example.com',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      position: 'UX Designer',
      email: 'bobjohnson@example.com',
    },
  ];

  protected companyList: string[] = [
    'Tech Solutions Inc.',
    'Innovatech LLC',
    'Creative Minds Co.',
    'NextGen Software',
    'Global Tech Partners',
  ];

  protected emptyList: string[] = [];
}
