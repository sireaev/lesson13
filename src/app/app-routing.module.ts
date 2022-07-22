import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CreateProfileReactiveFormsComponent } from './components/create-profile-reactive-forms/create-profile-reactive-forms.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { DetailsProfilesComponent } from './components/details-profiles/details-profiles.component';
import { HomeComponent } from './components/home/home.component';
import { ListProfilesComponent } from './components/list-profiles/list-profiles.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServicesComponent } from './components/services/services.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      canActivate: [AuthenticationGuard]
    },
    { path: 'public',
      loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
    },
    { path: 'home', component: HomeComponent },
    { path: 'servicii', component: ServicesComponent },
    { path: 'list', component: ListProfilesComponent },
    { path: 'create', component: CreateProfileComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'create-reactive', component: CreateProfileReactiveFormsComponent },
    { path: 'list/:ceva', component: DetailsProfilesComponent },
  ]},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
