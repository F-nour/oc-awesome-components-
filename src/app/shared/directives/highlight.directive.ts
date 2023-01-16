import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() hover!: string;
  @Input() highlight!: string;

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.setBackgroundColor(this.highlight);
  }

  setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

    @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor(this.hover);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor(this.highlight);
  }

  @HostListener('click') onClick() {
    this.highlight = 'lightgreen';
  }

}
