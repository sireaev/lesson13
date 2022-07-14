import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

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
  constructor() {
    console.log('SE INITIALIZEAZA CONSTRUCTOR', this.title);
    console.log('AVEM DISPONIBILE AICI CLASS MEMBERS title, mybool');
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
