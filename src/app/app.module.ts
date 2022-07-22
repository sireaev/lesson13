import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { ListProfilesComponent } from './components/list-profiles/list-profiles.component';
import { DetailsProfilesComponent } from './components/details-profiles/details-profiles.component';
import { RouterModule } from '@angular/router';
import { LocalDatePipe } from './pipes/local-date.pipe';
import { DatePipe } from '@angular/common';
import { EmphasizedDirective } from './directives/emphasized.directive';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CreateProfileReactiveFormsComponent } from './components/create-profile-reactive-forms/create-profile-reactive-forms.component';
import { MY_CONST1, MY_CONST2, MY_CONST3 } from './constants/keys';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthenticationGuard } from './guards/authentication.guard';

class MyClass {
  constructor() {}
}

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    HomeComponent,
    ItemComponent,
    ContactsComponent,
    ListProfilesComponent,
    DetailsProfilesComponent,
    LocalDatePipe,
    EmphasizedDirective,
    CreateProfileComponent,
    SettingsComponent,
    CreateProfileReactiveFormsComponent,
    NotFoundComponent,
  ],
  providers: [
    DatePipe,
    { provide: 'AWS_TOKEN', useValue: 'ADASDADASDASF' },
    { provide: 'CONSTANTS', useValue: {
      MY_CONST1,
      MY_CONST2,
      MY_CONST3
    }},
    { provide: 'HelperClass', useClass: MyClass },
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
