import {Directive, ElementRef, OnInit} from "@angular/core";

@Directive({
  selector: '[simplyDirective]'
})

export class SimplyDirectiveDirective implements OnInit{
  constructor(private eleRef: ElementRef) {}

  ngOnInit() {
    this.eleRef.nativeElement.style.backgroundColor = 'green';
    this.eleRef.nativeElement.style.color = 'white';
  }
}
