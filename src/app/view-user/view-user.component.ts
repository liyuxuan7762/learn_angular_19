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

  protected user: Iuser = {} as Iuser;

  ngOnInit(): void {
    this.user = this.activatedRoute.snapshot.data['userInfo'] || ({} as Iuser);
  }
}
