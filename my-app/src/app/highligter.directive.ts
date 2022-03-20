import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[customDisplay]'
})
export class HighligterDirective {
  @Input('backColor') backColor : string = "pink";

  constructor(private elemRef : ElementRef, private render : Renderer2) { 

  }

  @HostListener('mouseover')
  onMouseOver(){
    console.log('onMouseOver fired');
    //this.elemRef.nativeElement.style.backgroundColor = "pink";

    this.render.setStyle(this.elemRef.nativeElement, "backgroundColor", this.backColor);
  }

  @HostListener('mouseout')
  onMouseOut(){
    console.log('onMouseOut fired');
    //this.elemRef.nativeElement.style.backgroundColor = "";

    this.render.setStyle(this.elemRef.nativeElement, "backgroundColor", "");
  }

}
