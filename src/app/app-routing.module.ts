import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsProfilesComponent } from './components/details-profiles/details-profiles.component';
import { HomeComponent } from './components/home/home.component';
import { ListProfilesComponent } from './components/list-profiles/list-profiles.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'servicii', component: ServicesComponent },
    { path: 'list', component: ListProfilesComponent },
    { path: 'list/:id', component: DetailsProfilesComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
