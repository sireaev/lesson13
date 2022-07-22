import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from './services/auth.service';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  headerTitle: string = 'Din parinte in copil';
  title: string = 'title'
  myBool: boolean = true;

  todoName: string = '';
  myList: any[] = [];
  constructor(private settingsService: SettingsService,
              private authService: AuthService) {
    console.log('AppComponent CONSTRUCTOR', this.settingsService.settings.getValue());
    this.settingsService.settings.subscribe(response => {
      console.log('AppComponent CONSTRUCTOR after subscribe', response);
    })
    this.settingsService.settings.next({ isAdmin: true, isDarkTheme: true, userType: 1})
    this.authService.login();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.headerTitle = 'ALTCEVA';
    }, 5000)
  }

  onChangeHeader(headerTitle: string): void {
    this.headerTitle = headerTitle
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('changes', changes);
  }

  ngOnDestroy(): void {
      console.log('s-a distrus');
  }
}
