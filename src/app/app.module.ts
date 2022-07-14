import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    HomeComponent,
    ItemComponent,
    ContactsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
