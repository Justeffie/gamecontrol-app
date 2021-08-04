import {Directive, ElementRef, Host, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRendererDirective]'
})
export class RendererDirectiveDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.color') color: string = 'black';

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'red');
    // this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') mousemove(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'red');
    // this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'white');
    this.backgroundColor = 'red';
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'black');
    this.backgroundColor = 'transparent';
    this.color = 'black';
  }
}
