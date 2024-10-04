import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective {
  @Input('appTooltip') tooltipText!: string;
  @Input() position!: string;
  @Input() fontColor!: string;
  @Input() fontSize!: string;

  tooltip!: HTMLElement;

  @HostBinding('style.position') hostPosition = 'relative';
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') mouseover() {
    this.tooltip = this.renderer.createElement('span');
    this.tooltip.textContent = this.tooltipText;
    this.tooltip.className = 'custom-tooltip';
    this.tooltip.style.color = this.fontColor;
    this.tooltip.style.fontSize = this.fontSize + 'px';

    switch (this.position) {
      case 'left':
        {
          this.tooltip.style.right = '105%';
          this.tooltip.style.top = '50%';
          this.tooltip.style.transform = 'translateY(-50%)';
        }
        break;
      case 'right':
        {
          this.tooltip.style.left = '105%';
          this.tooltip.style.top = '50%';
          this.tooltip.style.transform = 'translateY(-50%)';
        }
        break;
      case 'top':
        {
          this.tooltip.style.bottom = '105%';
          this.tooltip.style.left = '50%';
          this.tooltip.style.transform = 'translateX(-50%)';
        }
        break;
      case 'bottom':
        this.tooltip.style.top = '105%';
        this.tooltip.style.left = '50%';
        this.tooltip.style.transform = 'translateX(-50%)';
        break;
    }

    this.renderer.appendChild(this.elRef.nativeElement, this.tooltip);
  }
  @HostListener('mouseleave') mouseout() {
    this.tooltip.remove();
  }
}
