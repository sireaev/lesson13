import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerT: string = '';
  @Output() headerTrigger: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.headerT = 'ALTCEVA ALTCEVA'
    }, 10000)
  }

}
