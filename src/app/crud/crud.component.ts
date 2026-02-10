import { Component, inject, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Iuser } from '../interface/iuser';
import { Router, RouterLink } from '@angular/router';
import { ReuseableComponent } from '../reuseable/reuseable.component';

@Component({
  selector: 'app-crud',
  imports: [RouterLink, ReuseableComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent implements OnInit {
  private readonly router: Router = inject(Router);
  private readonly crudService: CrudService = inject(CrudService);

  protected users: Iuser[] = [];

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.crudService.getUsers().subscribe((user) => {
      this.users = user;
    });
  }

  deleteUser(id: number): void {
    this.crudService.deleteUser(id).subscribe(() => {
      this.router.navigate(['/crud']);
      alert('User deleted successfully');
      this.getAllUsers();
    });
  }
}
