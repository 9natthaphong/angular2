import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomAttribute]'
})
export class CustomAttributeDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(''); // ใช้ค่าว่างแทน null
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
