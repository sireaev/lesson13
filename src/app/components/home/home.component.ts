import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: '',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  todoName: string = '';
  myList: any[] = [];
  storageKey = 'myList'
  isLoading: boolean = true;
  constructor() { }

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
