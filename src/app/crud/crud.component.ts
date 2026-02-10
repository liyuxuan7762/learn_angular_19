import { Component, inject, OnInit } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { Iuser } from '../interface/iuser';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-crud',
  imports: [RouterLink],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent implements OnInit {
  private readonly crudService: CrudService = inject(CrudService);

  protected users: Iuser[] = [];

  ngOnInit(): void {
    this.crudService.getUsers().subscribe((user) => {
      this.users = user;
    });
  }
}
