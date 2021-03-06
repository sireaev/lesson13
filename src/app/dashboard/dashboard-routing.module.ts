import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    { path: '', redirectTo: 'board', pathMatch: 'full' },
    { path: 'board', component: ListComponent },
    { path: 'create', component: CreateComponent },
    { path: 'edit/:id', component: EditComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
