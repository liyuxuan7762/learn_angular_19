import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  private readonly router: Router = inject(Router);

  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  private readonly crudService: CrudService = inject(CrudService);

  protected userForm: FormGroup = this.formBuilder.group({
    username: [''],
    phone: [''],
    email: [''],
  });

  onCancel() {
    this.router.navigateByUrl('/crud');
  }

  onSubmit() {
    console.log(this.userForm.value);
    this.crudService.postUser(this.userForm.value).subscribe((resp) => {
      this.router.navigateByUrl('/crud');
    });
  }
}
