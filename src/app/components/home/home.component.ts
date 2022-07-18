import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { DateEnum } from '../../enums/date.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: '',
  styleUrls: ['./home.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated,
  // providers: [],
  // host: {
  //   'Dqdqwdqwd': 'dqwdqwdq'
  // },
  // viewProviders: [],
  // animations: [],
  // exportAs: 'home',
})
export class HomeComponent implements OnInit, OnDestroy {
  todoName: string = '';
  myList: any[] = [];
  storageKey = 'myList'
  isLoading: boolean = true;
  date: string;
  dateEnum = DateEnum;
  case: string = 'data';
  isBorder = true;
  constructor() { }

  getBackendDate(): string {
    const date = '2020-07-15T08:30:00.000'
    return date.endsWith('Z') ? date : `${date}Z`;
  }

  ngOnInit(): void {
    this.myList = this.getStorage();
  }

  afiseazaValoareaLaHeader(): void {
    alert('test');
  }

  addItem(): void {
    this.myList.push(this.todoName);
    this.setStorage(this.myList);
    this.clear();
  }

  clear(): void {
    this.todoName = '';
  }

  deleteItem(index: number) {
    // this.myMethod();
    if (!this.myList.length) {
      return
    }
    this.myList.splice(index, 1);
    this.setStorage(this.myList);
  }

  setStorage(list: any[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  getStorage() {
    const storage = localStorage.getItem(this.storageKey);
    if (storage) {
      return JSON.parse(storage);
    }

    return [];
  }

  ngOnDestroy(): void {
      console.log('destroyed');
  }

}
