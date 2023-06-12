import {Directive, ElementRef, HostListener, OnInit, Renderer2, HostBinding, Input} from "@angular/core";

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit{
  @Input('appBackground') hoverColor: string = 'green';
  @Input() defaultColor: string = 'transparent'
  // @ts-ignore
  @HostBinding('style.backgroundColor') background: string
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }
  ngOnInit() {
    this.background = this.defaultColor
  }
  @HostListener('mouseenter') mouseEnter(event: Event) {
    this.background = this.hoverColor
  }
  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.background = this.defaultColor
  }
}
