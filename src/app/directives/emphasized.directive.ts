import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[emphasized]'
})
export class EmphasizedDirective implements OnChanges {

  @Input() hasBorder: boolean;

  @HostListener('click', ['$event.target']) myMethod() {
      console.log('clicked');
    }

  constructor(private elementRef: ElementRef) {
    console.log('hasBorder', this.hasBorder);
    if (this.hasBorder) {
      this.elementRef.nativeElement.style = 'color: red; border: 1px solid black;';
    } else {
      this.elementRef.nativeElement.style = 'color: red;';
    }
   }


  //  ngOnInit(): void {
  //   console.log('hasBorder', this.hasBorder);
  //   if (this.hasBorder) {
  //     this.elementRef.nativeElement.style = 'color: red; border: 1px solid black;';
  //   } else {
  //     this.elementRef.nativeElement.style = 'color: red;';
  //   }
  //  }

   ngOnChanges(): void {
    if (this.hasBorder) {
      this.elementRef.nativeElement.style = 'color: red; border: 1px solid black;';
    } else {
      this.elementRef.nativeElement.style = 'color: red;';
    }
   }

}
