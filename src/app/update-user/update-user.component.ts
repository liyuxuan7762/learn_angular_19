import { Component, inject, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from '../interface/iuser';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  imports: [ReactiveFormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss',
})
export class UpdateUserComponent implements OnInit {
  private readonly router: Router = inject(Router);

  private readonly crudService: CrudService = inject(CrudService);

  private readonly activedRoute: ActivatedRoute = inject(ActivatedRoute);

  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  protected userData: Iuser = {} as Iuser;

  protected updateUserForm: FormGroup = this.formBuilder.group({
    id: [''],
    username: [''],
    phone: [''],
    email: [''],
  });

  ngOnInit(): void {
    // get the userId from active link
    const userId = this.activedRoute.snapshot.params['id'];

    this.crudService.getUserById(userId).subscribe((resp) => {
      this.userData = resp;
      console.log(this.userData);
      this.updateUserForm.patchValue(this.userData);
    });
  }

  onCancel() {
    this.router.navigateByUrl('/crud');
  }

  onSubmit() {
    this.crudService
      .updateUser(this.userData.id, this.updateUserForm.value)
      .subscribe((resp) => {
        this.router.navigateByUrl('/crud');
      });
  }
}
