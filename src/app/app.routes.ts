import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesIfComponent } from './directives-if/directives-if.component';
import { DirectivesClassComponent } from './directives-class/directives-class.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BuildInPipeComponent } from './build-in-pipe/build-in-pipe.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { CrudComponent } from './crud/crud.component';
import { AddUserComponent } from './add-user/add-user.component';

export const routes: Routes = [
  { path: '', component: UserComponent },

  { path: '', redirectTo: 'user', pathMatch: 'full' },

  { path: 'user', component: UserComponent },

  { path: 'data-binding', component: DataBindingComponent },

  { path: 'structural-directives', component: DirectivesIfComponent },

  { path: 'attribute-directives', component: DirectivesClassComponent },

  { path: 'pipeline', component: BuildInPipeComponent },

  { path: 'tdf', component: TemplateDrivenFormComponent },

  { path: 'rf', component: ReactiveFormComponent },

  { path: 'di', component: DependencyInjectionComponent },

  { path: 'crud', component: CrudComponent },

  { path: 'addUser', component: AddUserComponent },

  { path: '**', component: NotFoundComponent },
];
