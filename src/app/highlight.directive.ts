import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @Input() highlightColor: string = 'yellow';
  @Input() defaultColor: string = 'transparent';

  @HostListener('mouseenter') hoverOver() {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') hoverOut() {
    this.backgroundColor = this.defaultColor;
  }
}
