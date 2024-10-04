import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTrimWhiteSpace]',
})
export class TrimWhiteSpaceDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @HostListener('blur') onBlur() {
    this.renderer.setProperty(this.elRef.nativeElement, 'value', this.elRef.nativeElement.value.trim());
  }
}
