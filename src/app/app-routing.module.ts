import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'servicii', component: ServicesComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
