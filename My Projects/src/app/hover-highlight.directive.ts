import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  @Input() defaultColor: string = "";
  @Input('appHoverHighlight') highLightColor: string = "";

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.hightLight(this.highLightColor || this.defaultColor || "Yellow")
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hightLight("")
  }

  private hightLight(color: string) {
    this.el.nativeElement.style.background = color;
  }
}
