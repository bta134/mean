import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { PrjAddComponent } from './prj-add/prj-add.component';
import { PrjGetComponent } from './prj-get/prj-get.component';
import { PrjEditComponent } from './prj-edit/prj-edit.component';

const routes: Routes = [
  { path: 'tasks', component: TasksComponent },
  { path: 'project/create', component: PrjAddComponent },
  { path: 'project/edit/:id', component: PrjEditComponent },
  { path: 'project', component: PrjGetComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
