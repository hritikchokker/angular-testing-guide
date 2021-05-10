import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() set details(value: boolean) {
    if (value) {
      this.$elementRef.nativeElement.style.color = 'red';
    } else {
      this.$elementRef.nativeElement.style.color = 'black';
    }
  }
  constructor(private $elementRef: ElementRef<HTMLAnchorElement>) {
    this.$elementRef.nativeElement.style.cursor = 'pointer';
  }

}
