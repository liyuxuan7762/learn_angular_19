import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { Iuser } from '../interface/iuser';

export const userInfoResolver: ResolveFn<Iuser | null> = (route, state) => {
  const crudService = inject(CrudService);

  const router = inject(Router);

  const id = route.paramMap.get('id');

  return crudService.getUserById(+id!);
};
