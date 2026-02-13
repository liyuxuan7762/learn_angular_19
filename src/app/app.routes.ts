import { Routes } from '@angular/router';
import { authGuardGuard } from './guard/auth-guard.guard';
import { formGuardGuard } from './guard/form-guard.guard';
import { userInfoResolver } from './resolver/user-info.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./user/user.component').then((mod) => mod.UserComponent),
  },

  { path: '', redirectTo: 'user', pathMatch: 'full' },

  {
    path: 'user',
    loadComponent: () =>
      import('./user/user.component').then((mod) => mod.UserComponent),
  },

  {
    path: 'data-binding',
    loadComponent: () =>
      import('./data-binding/data-binding.component').then(
        (mod) => mod.DataBindingComponent,
      ),
  },

  {
    path: 'structural-directives',
    loadComponent: () =>
      import('./directives-if/directives-if.component').then(
        (mod) => mod.DirectivesIfComponent,
      ),
    canActivate: [authGuardGuard],
  },

  {
    path: 'attribute-directives',
    loadComponent: () =>
      import('./directives-class/directives-class.component').then(
        (mod) => mod.DirectivesClassComponent,
      ),
  },

  {
    path: 'pipeline',
    loadComponent: () =>
      import('./build-in-pipe/build-in-pipe.component').then(
        (mod) => mod.BuildInPipeComponent,
      ),
  },

  {
    path: 'tdf',
    loadComponent: () =>
      import('./template-driven-form/template-driven-form.component').then(
        (mod) => mod.TemplateDrivenFormComponent,
      ),
  },

  {
    path: 'rf',
    loadComponent: () =>
      import('./reactive-form/reactive-form.component').then(
        (mod) => mod.ReactiveFormComponent,
      ),
    canDeactivate: [formGuardGuard],
  },

  {
    path: 'di',
    loadComponent: () =>
      import('./dependency-injection/dependency-injection.component').then(
        (mod) => mod.DependencyInjectionComponent,
      ),
  },

  {
    path: 'crud',
    loadComponent: () =>
      import('./crud/crud.component').then((mod) => mod.CrudComponent),
  },

  {
    path: 'addUser',
    loadComponent: () =>
      import('./add-user/add-user.component').then(
        (mod) => mod.AddUserComponent,
      ),
  },

  {
    path: 'updateUser/:id',
    loadComponent: () =>
      import('./update-user/update-user.component').then(
        (mod) => mod.UpdateUserComponent,
      ),
  },

  {
    path: 'deleteUser/:id',
    loadComponent: () =>
      import('./delete-user/delete-user.component').then(
        (mod) => mod.DeleteUserComponent,
      ),
  },

  {
    path: 'viewUser/:id',
    loadComponent: () =>
      import('./view-user/view-user.component').then(
        (mod) => mod.ViewUserComponent,
      ),
    resolve: { userInfo: userInfoResolver },
  },

  {
    path: 'resource',
    loadComponent: () =>
      import('./resource-api/resource-api.component').then(
        (mod) => mod.ResourceApiComponent,
      ),
  },

  {
    path: 'parentChildComm',
    loadComponent: () =>
      import('./parent/parent.component').then((mod) => mod.ParentComponent),
  },

  {
    path: 'storage',
    loadComponent: () =>
      import('./storage/storage.component').then((mod) => mod.StorageComponent),
  },

  {
    path: 'view-encapsulation',
    loadComponent: () =>
      import('./view-encapsulation/view-encapsulation.component').then(
        (mod) => mod.ViewEncapsulationComponent,
      ),
  },

  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (mod) => mod.NotFoundComponent,
      ),
  },
];
