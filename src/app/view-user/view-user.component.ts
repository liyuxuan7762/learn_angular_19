import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Iuser } from '../interface/iuser';

@Component({
  selector: 'app-view-user',
  imports: [RouterLink],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss',
})
export class ViewUserComponent implements OnInit {
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  private readonly crudService: CrudService = inject(CrudService);

  protected user: Iuser = {} as Iuser;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.crudService.getUserById(id).subscribe((resp) => {
      this.user = resp;
    });
  }
}
