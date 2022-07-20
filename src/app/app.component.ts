import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  headerTitle: string = 'Din parinte in copil';
  title: string = 'title'
  myBool: boolean = true;

  todoName: string = '';
  myList: any[] = [];
  constructor(private settingsService: SettingsService) {
    console.log('AppComponent CONSTRUCTOR', this.settingsService.settings.getValue());
    this.settingsService.settings.subscribe(response => {
      console.log('AppComponent CONSTRUCTOR after subscribe', response);
    })
    this.settingsService.settings.next({ isAdmin: true, isDarkTheme: true, userType: 1})
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
