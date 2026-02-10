import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserForm } from '../interface/user-form';
import { log } from 'console';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss',
})
export class TemplateDrivenFormComponent {
  userData: UserForm = {};

  submitForm(userForm: NgForm): void {
    console.log(userForm.value);

    console.log(this.userData);
  }

  setValue(userForm: NgForm): void {
    userForm.setValue({
      firstName: '123',
      lastName: '123',
      email: '123',
      isAgreed: false,
    });
  }

  patchValue(userForm: NgForm): void {
    userForm.control.patchValue({
      firstName: '123',
      lastName: '123',
      email: '123',
      isAgreed: false,
    });
  }

  reset(userForm: NgForm): void {
    userForm.reset();
    // userForm.resetForm();
  }
}
