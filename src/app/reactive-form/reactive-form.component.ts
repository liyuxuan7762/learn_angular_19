import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  Validators,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  private readonly formBuilder = inject(FormBuilder);

  protected reactiveForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(5)]],
    lastName: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[a-zA-Z]+$'),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    isChecked: [''],
    address: this.formBuilder.group({
      city: [''],
      state: [''],
      zip: [''],
    }),
    skills: this.formBuilder.array([]),
  });

  protected addSkill(): void {
    this.skills.push(this.newSkill());
  }

  protected newSkill(): FormGroup {
    return this.formBuilder.group({
      skill: '',
      experience: '',
    });
  }

  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  protected removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  protected onSubmit(): void {
    console.log(this.reactiveForm.value);
  }

  protected setValue(): void {
    this.reactiveForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      isChecked: true,
      address: {
        city: 'New York',
        state: 'NY',
        zip: '10001',
      },
    });
  }

  protected patchValue(): void {
    this.reactiveForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      isChecked: true,
      address: {
        city: 'New York',
        state: 'NY',
        zip: '10001',
      },
    });
  }

  protected reset(): void {
    this.reactiveForm.reset();
  }

  protected setZipField(): void {
    this.reactiveForm.get('address.zip')?.setValue('90001');
  }
}
