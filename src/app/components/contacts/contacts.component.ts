import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ISettings } from '../../interfaces/settings.interface';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [SettingsService]
})
export class ContactsComponent implements OnInit, OnDestroy {
  test: any = '';
  settings: ISettings;
  constructor(private settingsService: SettingsService,
              @Inject('AWS_TOKEN') private readonly AWSKEY: string,
              @Inject('HelperClass') private myClass: any) {
    console.log('ContactsComponent CONSTRUCTOR', this.settingsService.settings.getValue());
    this.settingsService.settings.subscribe(response => {
      console.log('ContactsComponent settings = ', response);
    })
    console.log('INJECT TOKEN = ', this.AWSKEY)
    console.log('INJECT TOKEN = ', this.myClass)
  }

  ngOnInit(): void {
    this.settingsService.settings.subscribe((response: ISettings|null) => {
      console.log('ngOnInit response settings = ', response)
      if (response) this.settings = response;
    });
  }

  importData(): void {
    this.settingsService.settings.next({
      isDarkTheme: false,
      isAdmin: false,
      userType: 2
    })
  }

  ngOnDestroy(): void {
      this.settingsService.settings.unsubscribe();
  }

}
