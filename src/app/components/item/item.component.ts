import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() index: number | null = null;
  @Output() deleteItem: EventEmitter<number|null> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
